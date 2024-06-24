﻿using Linker.Config;
using Linker.Startup;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace Linker.Plugins.Connections
{
    public sealed class ConnectionsStartup : IStartup
    {
        public string Name => "connections";

        public bool Required => true;

        public StartupLevel Level => StartupLevel.Normal;

        public string[] Dependent => new string[] { "relay","tunnel"};

        public StartupLoadType LoadType =>  StartupLoadType.Normal;

        public void AddClient(ServiceCollection serviceCollection, ConfigWrap config, Assembly[] assemblies)
        {
            serviceCollection.AddSingleton<ConnectionsApiController>();
        }

        public void AddServer(ServiceCollection serviceCollection, ConfigWrap config, Assembly[] assemblies)
        {
        }

        public void UseClient(ServiceProvider serviceProvider, ConfigWrap config, Assembly[] assemblies)
        {

        }

        public void UseServer(ServiceProvider serviceProvider, ConfigWrap config, Assembly[] assemblies)
        {
        }
    }
}
