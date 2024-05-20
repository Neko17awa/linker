﻿using common.libs;
using common.libs.extends;
using NAudio.CoreAudioApi;
using System.Collections.Concurrent;
using System.Net;
using System.Net.Sockets;

namespace cmonitor.plugins.tunnel.server
{
    public sealed class TunnelBindServer
    {
        private UdpClient socketUdp;

        public Action<object, Socket> OnTcpConnected { get; set; } = (state, socket) => { };
        public Action<object, UdpClient> OnUdpConnected { get; set; } = (state, udpClient) => { };

        private ConcurrentDictionary<int, AsyncUserToken> acceptBinds = new ConcurrentDictionary<int, AsyncUserToken>();

        public void Bind(IPEndPoint local, object state)
        {
            try
            {
                IPAddress localIP = NetworkHelper.IPv6Support ? IPAddress.IPv6Any : IPAddress.Any;

                Socket socket = new Socket(localIP.AddressFamily, SocketType.Stream, ProtocolType.Tcp);
                socket.IPv6Only(localIP.AddressFamily, false);
                socket.ReuseBind(new IPEndPoint(localIP, local.Port));
                socket.Listen(int.MaxValue);

                AsyncUserToken token = new AsyncUserToken
                {
                    SourceSocket = socket,
                    State = state,
                    LocalPort = local.Port
                };
                SocketAsyncEventArgs acceptEventArg = new SocketAsyncEventArgs
                {
                    UserToken = token,
                    SocketFlags = SocketFlags.None,
                };
                token.Saea = acceptEventArg;
                acceptBinds.AddOrUpdate(local.Port, token, (a, b) => token);

                acceptEventArg.Completed += IO_Completed;
                StartAccept(acceptEventArg);


                socketUdp = new UdpClient(localIP.AddressFamily);
                socketUdp.Client.ReuseBind(new IPEndPoint(localIP, local.Port));
                //socketUdp.Client.EnableBroadcast = true;
                socketUdp.Client.WindowsUdpBug();
                IAsyncResult result = socketUdp.BeginReceive(ReceiveCallbackUdp, state);
            }
            catch (Exception ex)
            {
                Logger.Instance.Error(ex);
            }
        }
        public void RemoveBind(int localPort)
        {
            if (acceptBinds.TryRemove(localPort, out AsyncUserToken saea))
            {
                CloseClientSocket(saea);
            }
        }

        private void StartAccept(SocketAsyncEventArgs acceptEventArg)
        {
            acceptEventArg.AcceptSocket = null;
            AsyncUserToken token = (AsyncUserToken)acceptEventArg.UserToken;
            try
            {
                if (token.SourceSocket.AcceptAsync(acceptEventArg) == false)
                {
                    ProcessAccept(acceptEventArg);
                }
            }
            catch (Exception)
            {
                token.Clear();
            }
        }
        private void IO_Completed(object sender, SocketAsyncEventArgs e)
        {
            switch (e.LastOperation)
            {
                case SocketAsyncOperation.Accept:
                    ProcessAccept(e);
                    break;
                default:
                    break;
            }
        }
        private void ProcessAccept(SocketAsyncEventArgs e)
        {
            if (e.AcceptSocket != null)
            {
                if (e.AcceptSocket.RemoteEndPoint != null)
                {

                    AsyncUserToken token = (AsyncUserToken)e.UserToken;
                    OnTcpConnected(token.State, e.AcceptSocket);
                }
            }
            StartAccept(e);
        }
        private void ReceiveCallbackUdp(IAsyncResult result)
        {
            try
            {
                IPEndPoint ep = new IPEndPoint(IPAddress.Any, IPEndPoint.MinPort);
                byte[] _ = socketUdp.EndReceive(result, ref ep);

                OnUdpConnected(result.AsyncState, socketUdp);
            }
            catch (Exception)
            {
            }
        }

        private void CloseClientSocket(AsyncUserToken token)
        {
            if (token == null) return;

            Socket socket = token.SourceSocket;
            if (socket != null)
            {
                token.Clear();
                if (acceptBinds.TryRemove(token.LocalPort, out AsyncUserToken tk))
                {
                    CloseClientSocket(tk);
                }
            }
        }

        public sealed class AsyncUserToken
        {
            public Socket SourceSocket { get; set; }
            public SocketAsyncEventArgs Saea { get; set; }
            public object State { get; set; }
            public int LocalPort { get; set; }

            public void Clear()
            {
                SourceSocket?.SafeClose();
                SourceSocket = null;

                Saea?.Dispose();

                GC.Collect();
            }
        }
    }


}
