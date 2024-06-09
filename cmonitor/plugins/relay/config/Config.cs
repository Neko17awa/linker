﻿using cmonitor.config;
using cmonitor.tunnel.compact;
using cmonitor.tunnel.transport;
using common.libs;
using LiteDB;
using MemoryPack;
using System.Diagnostics.CodeAnalysis;


namespace cmonitor.client.config
{
    public sealed partial class RunningConfigInfo
    {
        public RelayRunningInfo Relay { get; set; } = new RelayRunningInfo();
    }

    public sealed class RelayRunningInfo
    {
        public ObjectId Id { get; set; }
        public RelayCompactInfo[] Servers { get; set; } = Array.Empty<RelayCompactInfo>();
    }
}


namespace cmonitor.config
{
    public partial class ConfigServerInfo
    {
        public RelayConfigServerInfo Relay { get; set; } = new RelayConfigServerInfo();
    }

    public sealed class RelayConfigServerInfo
    {
        public string SecretKey { get; set; } = Helper.GlobalString;
        public bool GuestRelay { get; set; } = false;
        public int GuestRelayLmit { get; set; } = 100 * 1024;

    }

    [MemoryPackable]
    public sealed partial class RelayCompactInfo
    {
        public string Name { get; set; } = string.Empty;
        public RelayCompactType Type { get; set; } = RelayCompactType.Cmonitor;
        public string SecretKey { get; set; } = "snltty";
        public string Host { get; set; } = string.Empty;
        public bool Disabled { get; set; }
        public bool SSL { get; set; } = true;
    }

    public enum RelayCompactType : byte
    {
        Cmonitor = 0,
    }

    public sealed class RelayCompactTypeInfo
    {
        public RelayCompactType Value { get; set; }
        public string Name { get; set; }
    }

    public sealed class RelayCompactTypeInfoEqualityComparer : IEqualityComparer<RelayCompactTypeInfo>
    {
        public bool Equals(RelayCompactTypeInfo x, RelayCompactTypeInfo y)
        {
            return x.Value == y.Value;
        }

        public int GetHashCode([DisallowNull] RelayCompactTypeInfo obj)
        {
            return obj.Value.GetHashCode();
        }
    }
}
