(function(){"use strict";var e={8835:function(e,r,s){s.d(r,{P$:function(){return o},ai:function(){return a},zj:function(){return n}});var t=s(4);const n=()=>(0,t.zG)("config/get"),a=e=>(0,t.zG)("config/install",e),o=e=>(0,t.zG)("config/export",e)},4:function(e,r,s){s.d(r,{a1:function(){return f},e3:function(){return C},jH:function(){return S},zG:function(){return h}});s(4114),s(6573),s(8100),s(7936);var t=s(1219);let n=0,a=null,o="",l=1,u="";const i={},d={connected:!1,connecting:!1},c=()=>{const e=Date.now();for(let r in i){const s=i[r];e-s.time>s.timeout&&(s.reject("超时~"),delete i[r])}setTimeout(c,1e3)};c();const y={subs:{},add:function(e,r){"function"==typeof r&&(this.subs[e]||(this.subs[e]=[]),this.subs[e].push(r))},remove(e,r){let s=this.subs[e]||[];for(let t=s.length-1;t>=0;t--)s[t]==r&&s.splice(t,1)},push(e,r){let s=this.subs[e]||[];for(let t=s.length-1;t>=0;t--)s[t](r)}},v=()=>{d.connected=!0,d.connecting=!1,y.push(k,d.connected)},m=e=>{d.connected=!1,d.connecting=!1,y.push(k,d.connected),setTimeout((()=>{f()}),1e3)},g=e=>{if("string"!=typeof e.data)return void e.data.arrayBuffer().then((r=>{const s=new DataView(r).getInt8(),t=new FileReader;t.readAsText(e.data.slice(4,4+s),"utf8"),t.onload=()=>{let n=JSON.parse(t.result);n.Content={Name:n.Content,Img:e.data.slice(4+s,e.data.length),ArrayBuffer:r},p(n)}}));let r=JSON.parse(e.data);p(r)},p=e=>{let r=i[e.RequestId];r?(0==e.Code?r.resolve(e.Content):1==e.Code?r.reject(e.Content):255==e.Code?(r.reject(e.Content),r.errHandle||t.nk.error(`${r.path}:${e.Content}`)):y.push(e.Path,e.Content),delete i[e.RequestId]):y.push(e.Path,e.Content)},f=(e=o,r=u)=>{if(u=r,o=e,d.connecting||d.connected)return;null!=a&&a.close(),d.connecting=!0;const s=r||"snltty";a=new WebSocket(o,[s]),a.iddd=++l,a.onopen=v,a.onclose=m,a.onmessage=g,a.onerror=e=>{t.nk.error({message:"api接口连接失败，请检查接口地址或密码",grouping:!0})}},C=()=>{a&&a.close()},h=(e,r={},s=!1,t=15e3)=>new Promise(((o,l)=>{let u=++n;try{i[u]={resolve:o,reject:l,errHandle:s,path:e,time:Date.now(),timeout:t};let n=JSON.stringify({Path:e,RequestId:u,Content:"string"==typeof r?r:JSON.stringify(r)});d.connected&&1==a.readyState?a.send(n):l("网络错误~")}catch(c){console.log(c),l("网络错误~"),delete i[u]}})),k=Symbol(),S=e=>{y.add(k,e)}},9299:function(e,r,s){s.d(r,{BS:function(){return i},NT:function(){return v},SZ:function(){return o},Se:function(){return d},VN:function(){return l},gC:function(){return c},jU:function(){return a},nD:function(){return u},rd:function(){return n},zp:function(){return y}});var t=s(4);const n=e=>(0,t.zG)("signIn/set",e),a=e=>(0,t.zG)("signIn/setservers",e),o=()=>(0,t.zG)("signIn/info"),l=e=>(0,t.zG)("signIn/setorder",e),u=e=>(0,t.zG)("signIn/List",e),i=e=>(0,t.zG)("signIn/ids",e),d=e=>(0,t.zG)("signIn/del",e),c=e=>(0,t.zG)("signIn/setname",e),y=e=>(0,t.zG)("signIn/SetGroups",e),v=()=>(0,t.zG)("signIn/names")},9287:function(e,r,s){s.d(r,{Y:function(){return o},A:function(){return u}});var t=s(5931),n={"common.oper":"Operated","common.operFail":"Operation failed","common.confirm":"Confirm","common.cancel":"Cancel","common.setting":"Setting","common.operating":"In operation","common.tips":"Tips","common.option":"Option","common.access":"No access","head.home":"Home","head.server":"Server","head.protocol":"P2P Protocol","head.action":"Action","head.logger":"Logs","logger.list":"List","logger.setting":"Setting","logger.clear":"Clear","logger.refresh":"Refresh","logger.count":"Count","logger.level":"Level","logger.time":"Time","logger.content":"Content","action.text":"Set action static Json parameters","action.jsonError":"Json format error","server.messenger":"Messenger Server","server.group":"Group","server.sync":"Sync","server.messengerAddr":"Messenger Server","server.messengerText":"ip:port or domain:port","server.messengerSecretKey":"Messenger SecretKey","server.messengerSecretKeyText":"Messenger SecretKey","server.messengerUserId":"User Id","server.messengerUserIdText":"Your unique identifier,used to unlock something.","permission.closed":"Closed","permission.simple":"Simple","permission.full":"Full","permission.clear":"Clear connection","status.group":"Group manager","status.groupName":"Name","status.groupPassword":"Password","status.groupOper":"Oper","status.groupDelConfirm":"Are you sure to delete?","status.support":"Support","status.website":"Website","status.doc":"Document","status.cdkey":"CDKEY store","status.export":"Export","status.exportText":"Export the configuration to run elsewhere","status.exportSingle":"Single","status.exportName":"Name","status.exportNamePlease":"Please input device name","status.exportApiPassword":"Api Pwd","status.exportApiPasswordPlease":"Please input api password","status.api":"Manager api","status.apiClear":"Clear","status.apiAlter":"Alter","status.apiAlterConfirm":"Are you sure?","status.messenger":"Messenger server","status.messengerName":"Messenger","status.messengerChange":"change your messenger","status.messengerGroup":"Group","status.serverVersion":"Server version","status.serverNoUpdate":"No updates","status.serverNotNew":"Not latest version","status.serverNew":"Is latest version","status.serverDownloading":"Downloading","status.serverDownloaded":"Downloaded","status.serverUnZipIng":"In unzip","status.serverUnZip":"Unzip","status.serverConfirm":"Are you sure to update server?","status.serverCloseConfirm":"Are you sure to close server?","status.flowOnline":"Online","status.flowUpload":"Up","status.flowDownload":"Down","status.flowThisServer":"This Server","status.flowAllServer":"All Server","status.flowAllSend":"Send","status.flowAllReceive":"Receive","status.flowOnline7Day":"Within seven days","status.flowServer":"Server","status.flowType":"Type","status.flowOper":"Oper","status.flowDetail":"Detail","status.flowMessenger":"Messenger","status.flowRelay":"Relay","status.flowRelayNode":"Relay Node","status.flowWanPort":"Wan Port","status.flowServerForward":"Server Forward","status.flowSearchName":"Name","status.flowRelaySource":"Source","status.flowRelayTarget":"Target","status.flowSearchDomainPort":"Domain/Port","status.flowArea":"Area","status.flowNet":"Network","status.tunnelName":"Name","status.tunnelLabel":"Label","status.tunnelProtocol":"Proto","status.tunnelBuffer":"Buffer","status.tunnelReverse":"Reverse","status.tunnelSSL":"SSL","status.tunnelDisanbled":"Disable","status.tunnelSort":"Index","status.tunnelYes":"Y","status.tunnelNo":"N","server.relaySecretKey":"Relay SecretKey","server.relaySSL":"Use SSL","server.relayDisable":"Disable","server.relayUseCdkey":"Use CDKEY","server.relayUseCdkeyTitle":"If you have a relay SecretKey, ignore it\r\n Without a relay SecretKey, you can choose to use a cdkey or default relay node config","server.relayNodes":"Nodes","server.relayTitle":"Relay Nodes","server.relayName":"Name","server.relayFlow":"Traffic/Month","server.relaySpeed":"Total","server.relaySpeed1":"Single","server.relaySpeed2":"Rate","server.relayConnection":"Conn","server.relayDelay":"Delay","server.relayPublic":"Public","server.relayAllow":"Allow","server.relayUrl":"Url","server.relayOper":"Oper","server.relayUse":"Use","server.relayMyCdkey":"My CDKEY","server.relayCdkey":"Manager CDKEY","server.relayAddCdkey":"Add CDKEY","server.relayCdkeyUserId":"UserId","server.relayCdkeyBandwidth":"Bandwidth","server.relayCdkeyBytes":"Bytes","server.relayCdkeyPay":"Pay","server.relayCdkeyOrder":"Order","server.relayCdkeyPrice":"Price","server.relayCdkeyPayPrice":"Pay price","server.relayCdkeyCostPrice":"Cost price","server.relayCdkeyUserPrice":"User price","server.relayCdkeyOrderId":"OrderNo","server.relayCdkeyContact":"Email","server.relayCdkeyRemark":"Remark","server.relayCdkeyAddTime":"Add","server.relayCdkeyStartTime":"Start","server.relayCdkeyEndTime":"End Time","server.relayCdkeyUseTime":"Use Time","server.relayCdkeyYear":"Year","server.relayCdkeyMonth":"Month","server.relayCdkeyDay":"Day","server.relayCdkeyHour":"Hour","server.relayCdkeyMin":"Min","server.relayCdkeySec":"Sec","server.relayCdkeyDuration":"Duration","server.relayCdkeyOper":"Oper","server.relayCdkeyDelConfirm":"Are you sure to delete？","server.relayCdkeyFlagAll":"All","server.relayCdkeyFlagTimein":"In end time","server.relayCdkeyFlagTimeout":"Out end time","server.relayCdkeyFlagBytesin":"Has bytes","server.relayCdkeyFlagBytesout":"Not have bytes","server.relayCdkeyFlagDeleted":"Deleted","server.relayCdkeyFlagUnDeleted":"Not deleted","server.relayCdkeyTestTitle":"Test CDKEY","server.relayCdkeyTestKey":"CDKEY","server.relayCdkeyTestGB":"GB","server.relayCdkeyTestGBError":"Must > 0","server.relayCdkeyTestSpeed":"Mbps","server.relayCdkeyTestSpeedError":"Must > 0","server.relayCdkeyTestTime":"Time","server.relayCdkeyTestTimeError":"Format error","server.relayCdkeyTestUserId":"UserId","server.relayCdkeyTestUserIdError":"UserId error","server.relayCdkeyTestOrderId":"OrderNo","server.relayCdkeyTestOrderIdError":"OrderNo is empty","server.relayCdkeyTestContact":"Contact","server.relayCdkeyTestCostPrice":"Cost","server.relayCdkeyTestPrice":"Price","server.relayCdkeyTestUserPrice":"User price","server.relayCdkeyTestPayPrice":"Pay","server.relayCdkeyTestCount":"Count","server.relayCdkeyTestCountError":"Must > 0","server.relayCdkeyTestType":"Type","server.relayCdkeyTestTypeError":"Must be relay","server.relayCdkeyTestParseError":"decode fail","server.relayCdkeyImport":"Import CDKEY","server.relayCdkeyImportParse":"Decode fail","server.relayCdkeyImportField":"Field invalid","server.relayCdkeyImportNetwork":"Network error","server.relayCdkeyImportOrderId":"OrderNo has exists","server.sforwardSecretKey":"Server forward secretKey","server.sforwardText":"The server forward can be used when the key is correct","server.updaterSecretKey":"Server update secretKey","server.updaterText":"The server update can be used when the key is correct","server.updaterRate":"Update check interval","server.updaterY":"Year","server.updaterM":"Mmonth","server.updaterD":"Day","server.updaterH":"Hour","server.updaterMM":"Minute","server.updaterS":"Second","server.asyncText":"Synchronize to all clients","server.asyncSelect":"Please select","server.asyncCheckAll":"Check all","server.asyncSignInSecretKey":"Signin secretKey","server.asyncSignInServer":"Signin server","server.asyncGroupSecretKey":"Group secretKey","server.asyncRelaySecretKey":"Relay secretKey","server.asyncSForwardSecretKey":"Server forward secretKey","server.asyncUpdaterSecretKey":"Update secretKey","server.asyncTunnelTransports":"Tunnel transports","server.asyncSignInUserId":"User Id"},a={"common.oper":"已操作","common.operFail":"操作失败","common.confirm":"确认","common.cancel":"取消","common.setting":"设置","common.operating":"正在操作","common.tips":"提示","common.option":"选项","common.access":"无权限","head.home":"首页","head.server":"服务器","head.group":"分组","head.protocol":"打洞协议","head.action":"自定义验证","head.logger":"日志","logger.list":"列表","logger.setting":"设置","logger.clear":"清空","logger.refresh":"刷新","logger.count":"数量","logger.level":"等级","logger.time":"时间","logger.content":"内容","action.text":"设置定义验证的静态Json参数","action.jsonError":"json格式错误","server.messenger":"信标服务器","server.group":"分组","server.sync":"同步","server.messengerAddr":"服务器地址","server.messengerText":"ip:端口 或者 域名:端口","server.messengerSecretKey":"信标密钥","server.messengerSecretKeyText":"密钥正确时可连接服务器","server.messengerUserId":"用户id","server.messengerUserIdText":"你的唯一标识，用于解锁一些限制","permission.closed":"禁止通行","permission.simple":"简单管理","permission.full":"专业管理","permission.clear":"清除连接","status.group":"管理分组","status.groupName":"名称","status.groupPassword":"密码","status.groupOper":"操作","status.groupDelConfirm":"确认删除吗?","status.support":"赞助","status.website":"官网","status.doc":"文档","status.cdkey":"CDKEY商城","status.export":"导出配置","status.exportText":"导出配置，作为子设备运行，如果使用docker，容器映射configs文件夹即可","status.exportSingle":"单设备","status.exportName":"设备名","status.exportNamePlease":"请输入设备名","status.exportApiPassword":"接口密码","status.exportApiPasswordPlease":"请输入接口密码","status.api":"管理接口","status.apiClear":"清除","status.apiAlter":"更改","status.apiAlterConfirm":"确定你的操作？","status.messenger":"信标服务器","status.messengerChange":"更改你的连接设置","status.messengerName":"信标","status.messengerGroup":"分组名","status.messenger0":"登入信标","status.messenger1":"客户端列表","status.messenger2":"客户端删除","status.messenger4":"客户端改名(转发)","status.messenger7":"获取服务器版本","status.messenger8":"客户端搜索ids","status.messenger9":"客户端id列表","status.messenger10":"客户端排序","status.messenger11":"客户端在线","status.messenger12":"生成客户端id","status.messenger13":"登入信标V_1_3_1","status.messenger14":"名字列表","status.messenger2001":"外网端口(转发)","status.messenger2002":"外网端口(转发)","status.messenger2003":"开始打洞(转发)","status.messenger2004":"开始打洞(转发)","status.messenger2005":"打洞失败(转发)","status.messenger2006":"打洞失败(转发)","status.messenger2007":"打洞成功(转发)","status.messenger2008":"打洞成功(转发)","status.messenger2009":"隧道配置(转发)","status.messenger2010":"隧道配置(转发)","status.messenger2012":"隧道同步(转发)","status.messenger2101":"中继通知(转发)","status.messenger2102":"中继通知(转发)","status.messenger2103":"中继请求","status.messenger2105":"中继连通测试","status.messenger2201":"运行网卡(转发)","status.messenger2203":"停止网卡(转发)","status.messenger2204":"更新网卡","status.messenger2205":"更新网卡(转发)","status.messenger2208":"配置网卡网络","status.messenger2209":"获取网卡网络","status.messenger2210":"分配IP","status.messenger2211":"网卡变化","status.messenger2212":"网卡变化(转发)","status.messenger2213":"IP续约","status.messenger2214":"网卡端口转发检测","status.messenger2215":"网卡端口转发检测(转发)","status.messenger2301":"添加内网穿透","status.messenger2302":"移除内网穿透","status.messenger2303":"通知内网穿透(转发)","status.messenger2304":"通知内网穿透UDP(转发)","status.messenger2305":"获取穿透列表(转发)","status.messenger2401":"测试端口转发(转发)","status.messenger2403":"获取端口转发(转发)","status.messenger2507":"同步配置","status.messenger2508":"同步配置(转发)","status.messenger2601":"更新信息(转发)","status.messenger2602":"更新信息(转发)","status.messenger2603":"确认更新(转发)","status.messenger2604":"确认更新(转发)","status.messenger2605":"重启(转发)","status.messenger2606":"重启","status.messenger2607":"服务器更新信息","status.messenger2608":"确认服务器更新","status.messenger2609":"服务器重启","status.messenger2610":"订阅更新信息(转发)","status.messenger2611":"订阅更新信息(转发)","status.messenger2612":"检查更新","status.messenger2613":"检查更新(转发)","status.messenger2701":"服务器流量","status.messenger2702":"服务器信标流量","status.messenger2703":"服务器中继流量","status.messenger2704":"服务器内网穿透流量","status.messenger2807":"同步配置","status.messenger2808":"同步配置(转发)","status.messenger2812":"同步推送","status.messenger2813":"同步拉取","status.messenger2814":"同步通知","status.messenger2815":"同步分页拉取","status.messenger2900":"运行socks5","status.messenger2901":"运行socks5(转发)","status.messenger2902":"停止socks5","status.messenger2903":"停止socks5(转发)","status.messenger2904":"更新socks5","status.messenger2905":"更新socks5(转发)","status.messenger3003":"获取权限","status.messenger3004":"获取权限(转发)","status.messenger3005":"更新权限","status.messenger3006":"更新权限(转发)","status.serverVersion":"服务端的程序版本","status.serverNoUpdate":"未检测到更新","status.serverNotNew":"不是最新版本","status.serverNew":"是最新版本","status.serverDownloading":"正在下载","status.serverDownloaded":"已下载","status.serverUnZipIng":"正在解压","status.serverUnZip":"已解压","status.serverConfirm":"确定更新服务端吗？","status.serverCloseConfirm":"确定关闭服务端吗？","status.flowOnline":"在线","status.flowUpload":"上传","status.flowDownload":"下载","status.flowThisServer":"本服务器","status.flowAllServer":"所有服务器","status.flowAllSend":"发送","status.flowAllReceive":"接收","status.flowOnline7Day":"7天内上线","status.flowServer":"服务器","status.flowType":"类别","status.flowOper":"操作","status.flowDetail":"详情","status.flowMessenger":"信标","status.flowRelay":"中继","status.flowRelayNode":"中继节点","status.flowWanPort":"外网端口","status.flowServerForward":"内网穿透","status.flowSearchName":"名字搜索","status.flowRelaySource":"发起端","status.flowRelayTarget":"目标端","status.flowSearchDomainPort":"域名/端口","status.flowArea":"地区","status.flowNet":"网络","status.tunnelName":"名称","status.tunnelLabel":"说明","status.tunnelProtocol":"协议","status.tunnelBuffer":"缓冲区","status.tunnelReverse":"反向","status.tunnelSSL":"SSL","status.tunnelDisanbled":"禁用","status.tunnelSort":"排序","status.tunnelYes":"是","status.tunnelNo":"否","server.relaySecretKey":"中继密钥","server.relaySSL":"使用ssl","server.relayDisable":"禁用","server.relayUseCdkey":"消耗CDKEY","server.relayUseCdkeyTitle":"如果你有中继密钥，你没有任何限制，也不会消耗CDKEY，可以不管这个\r\n没有中继密钥，有CDKEY，但是不想使用CDKEY，只想使用中继节点默认的限制，就去掉勾选","server.relayNodes":"节点","server.relayTitle":"中继节点","server.relayName":"名称","server.relayFlow":"月流量","server.relayFlowLast":"剩余流量","server.relaySpeed":"带宽","server.relaySpeed1":"总带宽","server.relaySpeed2":"速率","server.relayConnection":"连接数","server.relayDelay":"延迟","server.relayPublic":"公开","server.relayAllow":"支持协议","server.relayUrl":"Url","server.relayOper":"操作","server.relayUse":"使用","server.relayMyCdkey":"我的CDKEY","server.relayCdkey":"管理CDKEY","server.relayAddCdkey":"添加CDKEY","server.relayCdkeyUserId":"用户标识","server.relayCdkeyBandwidth":"带宽","server.relayCdkeyBytes":"流量","server.relayCdkeyPay":"支付","server.relayCdkeyPrice":"原价","server.relayCdkeyPayPrice":"支付","server.relayCdkeyCostPrice":"成本","server.relayCdkeyUserPrice":"会员价","server.relayCdkeyOrder":"订单","server.relayCdkeyOrderId":"订单号","server.relayCdkeyContact":"邮箱","server.relayCdkeyRemark":"备注","server.relayCdkeyAddTime":"添加","server.relayCdkeyStartTime":"开始","server.relayCdkeyEndTime":"有效时间","server.relayCdkeyUseTime":"最后使用","server.relayCdkeyYear":"年","server.relayCdkeyMonth":"月","server.relayCdkeyDay":"日","server.relayCdkeyHour":"时","server.relayCdkeyMin":"分","server.relayCdkeySec":"秒","server.relayCdkeyDuration":"持续时间","server.relayCdkeyOper":"操作","server.relayCdkeyDelConfirm":"确认删除吗？","server.relayCdkeyFlagAll":"全部","server.relayCdkeyFlagTimein":"有效期内","server.relayCdkeyFlagTimeout":"有效期外","server.relayCdkeyFlagBytesin":"剩余","server.relayCdkeyFlagBytesout":"已用完","server.relayCdkeyFlagDeleted":"已删除","server.relayCdkeyFlagUnDeleted":"未删除","server.relayCdkeyTestTitle":"测试解密CDKEY","server.relayCdkeyTestKey":"CDKEY","server.relayCdkeyTestGB":"流量","server.relayCdkeyTestGBError":"流量要大于0","server.relayCdkeyTestSpeed":"带宽Mbps","server.relayCdkeyTestSpeedError":"带宽要大于0","server.relayCdkeyTestTime":"持续时间","server.relayCdkeyTestTimeError":"格式错误","server.relayCdkeyTestUserId":"用户标识","server.relayCdkeyTestUserIdError":"用户标识不正确","server.relayCdkeyTestOrderId":"订单","server.relayCdkeyTestOrderIdError":"订单号不能为空","server.relayCdkeyTestContact":"联系方式","server.relayCdkeyTestCostPrice":"成本","server.relayCdkeyTestPrice":"原价","server.relayCdkeyTestUserPrice":"会员价","server.relayCdkeyTestPayPrice":"支付","server.relayCdkeyTestCount":"数量","server.relayCdkeyTestCountError":"数量要大于0","server.relayCdkeyTestType":"类别","server.relayCdkeyTestTypeError":"类别应该是Relay","server.relayCdkeyTestParseError":"解密失败","server.relayCdkeyImport":"导入CDKEY","server.relayCdkeyImportParse":"解密失败","server.relayCdkeyImportField":"字段有误","server.relayCdkeyImportNetwork":"网络错误","server.relayCdkeyImportOrderId":"订单号已存在","server.sforwardSecretKey":"服务器穿透密钥","server.sforwardText":"当密钥正确是可用","server.updaterSecretKey":"服务器更新密钥","server.updaterText":"当密钥正确是可用","server.updaterRate":"检查更新频率","server.updaterY":"年","server.updaterM":"月","server.updaterD":"日","server.updaterH":"时","server.updaterMM":"分","server.updaterS":"秒","server.asyncText":"同步到所有客户端","server.asyncSelect":"请选择","server.asyncCheckAll":"全选","server.asyncSignInSecretKey":"信标密钥","server.asyncSignInServer":"信标服务器","server.asyncGroupSecretKey":"分组密钥","server.asyncRelaySecretKey":"中继密钥","server.asyncSForwardSecretKey":"服务器穿透密钥","server.asyncUpdaterSecretKey":"更新密钥","server.asyncTunnelTransports":"打洞协议","server.asyncSignInUserId":"用户唯一标识"};const o={"zh-CN":"简体中文","en-US":"English"},l=(0,t.hU)({locale:localStorage.getItem("locale-lang")||navigator.language||navigator.browserLanguage,fallbackLocale:"zh-CN",legacy:!1,allowComposition:!0,messages:{"en-US":n,"zh-CN":a}});var u=l},2773:function(e,r,s){s.d(r,{A:function(){return a}});var t=s(6768),n=s(5931);function a(){const e=(0,n.s9)(),r=(0,t.EW)((()=>e.locale.value)),s=r=>{e.locale.value!==r&&(e.locale.value=r,localStorage.setItem("locale-lang",r))};return{currentLocale:r,changeLocale:s}}},6230:function(e,r,s){var t=s(5130),n=s(6768);function a(e,r,s,t,a,o){const l=(0,n.g2)("router-view"),u=(0,n.g2)("Api"),i=(0,n.g2)("el-config-provider");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(i,{locale:t.locale},{default:(0,n.k6)((()=>[t.configed?((0,n.uX)(),(0,n.Wv)(l,{key:0})):(0,n.Q3)("",!0),(0,n.bF)(u)])),_:1},8,["locale"])])}var o=s(3830);const l={class:"port-wrap t-c"},u={class:"pdt-10"},i={class:"pdt-10"};function d(e,r,s,a,o,d){const c=(0,n.g2)("el-input"),y=(0,n.g2)("el-checkbox"),v=(0,n.g2)("el-button"),m=(0,n.g2)("el-dialog");return(0,n.uX)(),(0,n.Wv)(m,{class:"options-center",title:"管理接口","destroy-on-close":"",modelValue:a.showPort,"onUpdate:modelValue":r[3]||(r[3]=e=>a.showPort=e),center:"","show-close":!1,"close-on-click-modal":!1,"align-center":"",width:"200"},{footer:(0,n.k6)((()=>[(0,n.bF)(v,{type:"success",onClick:a.handleConnect1,plain:""},{default:(0,n.k6)((()=>[(0,n.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,n.k6)((()=>[(0,n.Lk)("div",l,[(0,n.Lk)("div",null,[(0,n.eW)(" 接口 : "),(0,n.bF)(c,{modelValue:a.state.api,"onUpdate:modelValue":r[0]||(r[0]=e=>a.state.api=e),style:{width:"70%"},onKeyup:(0,t.jR)(a.handleConnect1,["enter"])},null,8,["modelValue","onKeyup"])]),(0,n.Lk)("div",u,[(0,n.eW)(" 秘钥 : "),(0,n.bF)(c,{"show-password":"",type:"password",modelValue:a.state.psd,"onUpdate:modelValue":r[1]||(r[1]=e=>a.state.psd=e),style:{width:"70%"},onKeyup:(0,t.jR)(a.handleConnect1,["enter"])},null,8,["modelValue","onKeyup"])]),(0,n.Lk)("div",i,[(0,n.bF)(y,{modelValue:a.state.save,"onUpdate:modelValue":r[2]||(r[2]=e=>a.state.save=e)},{default:(0,n.k6)((()=>[(0,n.eW)("保存密码")])),_:1},8,["modelValue"])])])])),_:1},8,["modelValue"])}var c=s(1387),y=s(144),v=s(4),m=s(9299),g=s(8835),p=s(7477),f={components:{Tools:p.S0q},props:["config"],setup(e){const r=(0,o.B)(),s=(0,c.rd)(),t=(0,c.lq)(),a={api:`${window.location.hostname}:1803`,psd:"snltty"},l=JSON.parse(sessionStorage.getItem("api-cache")||localStorage.getItem("api-cache")||JSON.stringify(a)),u=(0,y.Kh)({api:l.api,psd:l.psd,showPort:!1,save:l.save||!1}),i=(0,n.EW)((()=>0==r.value.api.connected&&u.showPort)),d=()=>{l.api=u.api,l.psd=u.psd,l.save=u.save,u.save?localStorage.setItem("api-cache",JSON.stringify(l)):localStorage.setItem("api-cache",""),sessionStorage.setItem("api-cache",JSON.stringify(l)),(0,v.e3)();const e=`ws${"https:"===window.location.protocol?"s":""}://${u.api}`;(0,v.a1)(e,u.psd)},p=()=>{d(),window.location.reload()},f=()=>{(0,g.zj)().then((e=>{r.value.config.Common=e.Common,r.value.config.Client=e.Client,r.value.config.Server=e.Server,r.value.config.Running=e.Running,r.value.config.configed=!0,setTimeout((()=>{f()}),1e3)})).catch((e=>{setTimeout((()=>{f()}),1e3)}))},C=()=>{(0,m.SZ)().then((e=>{r.value.signin.Connected=e.Connected,r.value.signin.Version=e.Version,setTimeout((()=>{C()}),1e3)})).catch((e=>{setTimeout((()=>{C()}),1e3)}))};return(0,n.sV)((()=>{setTimeout((()=>{u.showPort=!0}),500),(0,v.jH)((e=>{e&&(f(),C())})),s.isReady().then((()=>{u.api=t.query.api?`${window.location.hostname}:${t.query.api}`:u.api,u.psd=t.query.psd||u.psd,d()}))})),{state:u,showPort:i,handleConnect1:p}}},C=s(1241);const h=(0,C.A)(f,[["render",d],["__scopeId","data-v-08aa73f8"]]);var k=h,S=s(2721),w=s(6726),T=s(2773),b={components:{Api:k},setup(e){const r=(0,o.v)(),s=(0,n.EW)((()=>r.value.config.configed)),{currentLocale:t}=(0,T.A)(),a=(0,n.EW)((()=>"zh-CN"==t.value?S.A:w.A));return{configed:s,locale:a}}};const P=(0,C.A)(b,[["render",a]]);var I=P;const N=[{path:"/",name:"Full",component:()=>Promise.all([s.e(194),s.e(64),s.e(560)]).then(s.bind(s,4842)),redirect:"/full/index.html",children:[{path:"/full/index.html",name:"FullIndex",component:()=>Promise.all([s.e(194),s.e(16),s.e(672)]).then(s.bind(s,7653))},{path:"/full/servers.html",name:"FullServers",component:()=>s.e(445).then(s.bind(s,6445))},{path:"/full/transport.html",name:"FullTransport",component:()=>s.e(32).then(s.bind(s,4032))},{path:"/full/action.html",name:"FullAction",component:()=>s.e(340).then(s.bind(s,3959))},{path:"/full/logger.html",name:"FullLogger",component:()=>s.e(716).then(s.bind(s,6716))}]},{path:"/net/index.html",name:"Network",component:()=>Promise.all([s.e(194),s.e(64),s.e(16),s.e(163)]).then(s.bind(s,427))},{path:"/no-permission.html",name:"NoPermission",component:()=>s.e(228).then(s.bind(s,6100))}],D=(0,c.aE)({history:(0,c.Bt)(),routes:N});var A=D,K=s(9287),E=s(6161);s(4188),s(2355),s(1862);const U=(0,t.Ef)(I);U.use(K.A),U.use(E.A,{size:"default"}).use(A).mount("#app")},3830:function(e,r,s){s.d(r,{B:function(){return u},v:function(){return l}});var t=s(4),n=s(144),a=s(6768);const o=Symbol(),l=()=>{const e=(0,n.KR)({api:{connected:!1},width:0,height:0,isPhone:(0,a.EW)((()=>e.value.width<800)),isPc:(0,a.EW)((()=>e.value.width>=800)),config:{Common:{},Client:{Servers:[],Accesss:{}},Server:{},Running:{Relay:{Servers:[]},Tuntap:{IP:"",PrefixLength:24},Client:{Servers:[]},AutoSyncs:{}},configed:!1},signin:{Connected:!1,Version:"v1.0.0.0"},bufferSize:["1KB","2KB","4KB","8KB","16KB","32KB","64KB","128KB","256KB","512KB","1024KB"],self:{},hasAccess(e){if(void 0==this.config.Client.Accesss[e])return!1;const r=this.config.Client.Accesss[e].Value||-1,s=this.config.Client.Access||-1;return s>=0&&(0==s||+(BigInt(s)&BigInt(r)).toString()==r)}});return(0,t.jH)((r=>{e.value.api.connected=r})),(0,a.Gt)(o,e),e},u=()=>(0,a.WQ)(o)}},r={};function s(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=e,function(){var e=[];s.O=function(r,t,n,a){if(!t){var o=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],a=e[d][2];for(var l=!0,u=0;u<t.length;u++)(!1&a||o>=a)&&Object.keys(s.O).every((function(e){return s.O[e](t[u])}))?t.splice(u--,1):(l=!1,a<o&&(o=a));if(l){e.splice(d--,1);var i=n();void 0!==i&&(r=i)}}return r}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[t,n,a]}}(),function(){s.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(r,{a:r}),r}}(),function(){s.d=function(e,r){for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(r,t){return s.f[t](e,r),r}),[]))}}(),function(){s.u=function(e){return"js/"+e+"."+{16:"0d5bcc87",32:"07324b9c",64:"a78d050d",163:"f3306092",194:"c82648eb",228:"45b76490",340:"9d567527",445:"a33547ea",560:"7e9318c3",672:"079fbf19",716:"cf2a55b5"}[e]+".js"}}(),function(){s.miniCssF=function(e){return"css/"+e+"."+{32:"1374e89e",163:"78703523",228:"b2a71eca",340:"f859e18d",445:"b42d2ee8",560:"41f66c44",672:"9e5add93",716:"ccdaa7f7"}[e]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="linker.web:";s.l=function(t,n,a,o){if(e[t])e[t].push(n);else{var l,u;if(void 0!==a)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var c=i[d];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+a){l=c;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.setAttribute("data-webpack",r+a),l.src=t),e[t]=[n];var y=function(r,s){l.onerror=l.onload=null,clearTimeout(v);var n=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((function(e){return e(s)})),r)return r(s)},v=setTimeout(y.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=y.bind(null,l.onerror),l.onload=y.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){s.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,r,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",s.nc&&(o.nonce=s.nc);var l=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var t=s&&s.type,l=s&&s.target&&s.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+": "+l+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=t,u.request=l,o.parentNode&&o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=l,o.href=r,t?t.parentNode.insertBefore(o,t.nextSibling):document.head.appendChild(o),o},r=function(e,r){for(var s=document.getElementsByTagName("link"),t=0;t<s.length;t++){var n=s[t],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===r))return n}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){n=o[t],a=n.getAttribute("data-href");if(a===e||a===r)return n}},t=function(t){return new Promise((function(n,a){var o=s.miniCssF(t),l=s.p+o;if(r(o,l))return n();e(t,l,null,n,a)}))},n={524:0};s.f.miniCss=function(e,r){var s={32:1,163:1,228:1,340:1,445:1,560:1,672:1,716:1};n[e]?r.push(n[e]):0!==n[e]&&s[e]&&r.push(n[e]=t(e).then((function(){n[e]=0}),(function(r){throw delete n[e],r})))}}}(),function(){var e={524:0};s.f.j=function(r,t){var n=s.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(s,t){n=e[r]=[s,t]}));t.push(n[2]=a);var o=s.p+s.u(r),l=new Error,u=function(t){if(s.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}};s.l(o,u,"chunk-"+r,r)}},s.O.j=function(r){return 0===e[r]};var r=function(r,t){var n,a,o=t[0],l=t[1],u=t[2],i=0;if(o.some((function(r){return 0!==e[r]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(u)var d=u(s)}for(r&&r(t);i<o.length;i++)a=o[i],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},t=self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=s.O(void 0,[504],(function(){return s(6230)}));t=s.O(t)})();