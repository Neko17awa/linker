﻿using linker.client.config;
using linker.libs;
using linker.plugins.sforward.messenger;
using MemoryPack;
using linker.plugins.sforward.config;
using System.Net.Sockets;
using System.Net;
using linker.libs.extends;
using linker.plugins.client;
using linker.plugins.messenger;
using linker.config;

namespace linker.plugins.sforward
{
    public sealed class SForwardTransfer
    {
        private readonly FileConfig fileConfig;
        private readonly RunningConfig running;
        private readonly ClientSignInState clientSignInState;
        private readonly MessengerSender messengerSender;

        private readonly NumberSpaceUInt32 ns = new NumberSpaceUInt32();

        public VersionManager Version { get; } = new VersionManager();

        public SForwardTransfer(FileConfig fileConfig,RunningConfig running, ClientSignInState clientSignInState, MessengerSender messengerSender)
        {
            this.fileConfig = fileConfig;
            this.running = running;
            this.clientSignInState = clientSignInState;
            this.messengerSender = messengerSender;
            clientSignInState.NetworkFirstEnabledHandle += () => Start();
        }

        #region 同步配置
        public string GetSecretKey()
        {
            return fileConfig.Data.Client.SForward.SecretKey;
        }
        public void SetSecretKey(string key)
        {
            fileConfig.Data.Client.SForward.SecretKey = key;
            fileConfig.Data.Update();
        }
        #endregion

        #region 启动穿透

        private void Start()
        {
            uint maxid = running.Data.SForwards.Count > 0 ? running.Data.SForwards.Max(c => c.Id) : 1;
            ns.Reset(maxid);

            foreach (var item in running.Data.SForwards)
            {
                if (item.Started)
                {
                    Start(item);
                }
                else
                {
                    Stop(item);
                }

            }
        }
        private void Start(SForwardInfo forwardInfo)
        {
            if (forwardInfo.Proxy == false)
            {
                try
                {
                    messengerSender.SendReply(new MessageRequestWrap
                    {
                        Connection = clientSignInState.Connection,
                        MessengerId = (ushort)SForwardMessengerIds.Add,
                        Payload = MemoryPackSerializer.Serialize(new SForwardAddInfo { Domain = forwardInfo.Domain, RemotePort = forwardInfo.RemotePort, SecretKey = fileConfig.Data.Client.SForward.SecretKey })
                    }).ContinueWith((result) =>
                    {
                        if (result.Result.Code == MessageResponeCodes.OK)
                        {
                            SForwardAddResultInfo sForwardAddResultInfo = MemoryPackSerializer.Deserialize<SForwardAddResultInfo>(result.Result.Data.Span);
                            forwardInfo.BufferSize = sForwardAddResultInfo.BufferSize;
                            if (sForwardAddResultInfo.Success)
                            {
                                forwardInfo.Proxy = true;
                                LoggerHelper.Instance.Debug(sForwardAddResultInfo.Message);
                                forwardInfo.Msg = string.Empty;
                            }
                            else
                            {
                                forwardInfo.Started = false;
                                LoggerHelper.Instance.Error(sForwardAddResultInfo.Message);
                                forwardInfo.Msg = sForwardAddResultInfo.Message;
                            }

                        }
                    });
                }
                catch (Exception ex)
                {
                    forwardInfo.Started = false;
                    LoggerHelper.Instance.Error(ex);
                }
            }
            Version.Add();
        }
        private void Stop(SForwardInfo forwardInfo)
        {
            try
            {
                if (forwardInfo.Proxy)
                {
                    messengerSender.SendReply(new MessageRequestWrap
                    {
                        Connection = clientSignInState.Connection,
                        MessengerId = (ushort)SForwardMessengerIds.Remove,
                        Payload = MemoryPackSerializer.Serialize(new SForwardAddInfo { Domain = forwardInfo.Domain, RemotePort = forwardInfo.RemotePort, SecretKey = fileConfig.Data.Client.SForward.SecretKey })
                    }).ContinueWith((result) =>
                    {
                        if (result.Result.Code == MessageResponeCodes.OK)
                        {
                            SForwardAddResultInfo sForwardAddResultInfo = MemoryPackSerializer.Deserialize<SForwardAddResultInfo>(result.Result.Data.Span);
                            if (sForwardAddResultInfo.Success)
                            {
                                forwardInfo.Proxy = false;
                                LoggerHelper.Instance.Debug(sForwardAddResultInfo.Message);
                            }
                            else
                            {
                                forwardInfo.Started = true;
                                LoggerHelper.Instance.Error(sForwardAddResultInfo.Message);
                            }

                        }
                    });
                }
            }
            catch (Exception ex)
            {
                LoggerHelper.Instance.Error(ex);
            }
            Version.Add();
        }

        #endregion

        #region 添加删除本机的穿透记录

        public List<SForwardInfo> Get()
        {
            return running.Data.SForwards;
        }
        public bool Add(SForwardInfo forwardInfo)
        {
            //同名或者同端口，但是ID不一样
            SForwardInfo old = running.Data.SForwards.FirstOrDefault(c => (forwardInfo.RemotePort > 0 && c.RemotePort == forwardInfo.RemotePort) || (string.IsNullOrWhiteSpace(forwardInfo.Domain) == false && c.Domain == forwardInfo.Domain));
            if (old != null && old.Id != forwardInfo.Id) return false;

            if (forwardInfo.Id != 0)
            {
                old = running.Data.SForwards.FirstOrDefault(c => c.Id == forwardInfo.Id);
                if (old == null) return false;

                old.RemotePort = forwardInfo.RemotePort;
                old.Name = forwardInfo.Name;
                old.LocalEP = forwardInfo.LocalEP;
                old.Domain = forwardInfo.Domain;
                old.Started = forwardInfo.Started;

                if (PortRange(forwardInfo.Domain, out int min, out int max))
                {
                    old.RemotePortMin = min;
                    old.RemotePortMax = max;
                }
            }
            else
            {
                forwardInfo.Id = ns.Increment();
                if (PortRange(forwardInfo.Domain, out int min, out int max))
                {
                    forwardInfo.RemotePortMin = min;
                    forwardInfo.RemotePortMax = max;
                }
                running.Data.SForwards.Add(forwardInfo);
            }

            running.Data.Update();
            Start();

            return true;
        }
        public bool Remove(uint id)
        {
            //同名或者同端口，但是ID不一样
            SForwardInfo old = running.Data.SForwards.FirstOrDefault(c => c.Id == id);
            if (old == null) return false;

            old.Started = false;

            running.Data.SForwards.Remove(old);
            running.Data.Update();

            Start();

            return true;
        }
        #endregion

        private bool PortRange(string str, out int min, out int max)
        {
            min = 0; max = 0;

            if (string.IsNullOrWhiteSpace(str)) return false;

            string[] arr = str.Split('/');
            return arr.Length == 2 && int.TryParse(arr[0], out min) && int.TryParse(arr[1], out max);
        }


        bool testing = false;
        /// <summary>
        /// 测试本机服务
        /// </summary>
        public void TestLocal()
        {
            if (testing) return;
            testing = true;

            TimerHelper.Async(async () =>
            {
                try
                {
                    var results = running.Data.SForwards.Select(c => c.LocalEP).Select(ConnectAsync);
                    await Task.Delay(200).ConfigureAwait(false);

                    foreach (var item in results.Select(c => c.Result))
                    {
                        var forward = running.Data.SForwards.FirstOrDefault(c => c.LocalEP.Equals(item.Item1));
                        if (forward != null)
                        {
                            forward.LocalMsg = item.Item2;
                        }
                    }
                    Version.Add();
                }
                catch (Exception)
                {
                }
                testing = false;
            });

            async Task<(IPEndPoint, string)> ConnectAsync(IPEndPoint ep)
            {
                try
                {
                    using Socket socket = new Socket(ep.AddressFamily, SocketType.Stream, ProtocolType.Tcp);
                    await socket.ConnectAsync(ep).WaitAsync(TimeSpan.FromMilliseconds(100)).ConfigureAwait(false);
                    socket.SafeClose();
                    return (ep, string.Empty);
                }
                catch (Exception ex)
                {
                    return (ep, ex.Message);
                }
            }
        }
    }
}
