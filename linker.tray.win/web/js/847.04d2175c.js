"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[847],{3363:function(e,t,a){a.d(t,{EQ:function(){return i},QI:function(){return l},ZK:function(){return u}});var n=a(4);const l=e=>(0,n.zG)("access/GetAccesss",e),u=e=>(0,n.zG)("access/SetAccess",e),i=()=>(0,n.zG)("access/refresh")},920:function(e,t,a){a.d(t,{BJ:function(){return o},NS:function(){return i},UB:function(){return v},Vk:function(){return r},aP:function(){return h},ir:function(){return s},lJ:function(){return u},mK:function(){return l},y2:function(){return d},yN:function(){return c}});var n=a(4);const l=(e="0")=>(0,n.zG)("updaterclient/get",e),u=e=>(0,n.zG)("updaterclient/confirm",e),i=e=>(0,n.zG)("updaterclient/exit",e),c=()=>(0,n.zG)("updaterclient/GetSecretKey"),s=e=>(0,n.zG)("updaterclient/SetSecretKey",e),r=()=>(0,n.zG)("updaterclient/getcurrent"),o=()=>(0,n.zG)("updaterclient/getserver"),d=e=>(0,n.zG)("updaterclient/confirmserver",e),h=()=>(0,n.zG)("updaterclient/exitserver"),v=()=>(0,n.zG)("updaterclient/Subscribe")},5962:function(e,t,a){a.d(t,{Y:function(){return c},q:function(){return s}});var n=a(3363),l=a(144),u=a(6768);const i=Symbol(),c=()=>{const e=(0,l.KR)({list:{},timer:0,hashcode:0});(0,u.Gt)(i,e);const t=()=>{(0,n.EQ)()},a=()=>{(0,n.QI)(e.value.hashcode.toString()).then((t=>{e.value.hashcode=t.HashCode,t.List&&(e.value.list=t.List),e.value.timer=setTimeout(a,1e3)})).catch((()=>{e.value.timer=setTimeout(a,1e3)}))},c=()=>{clearTimeout(e.value.timer)};return{access:e,_getAccessInfo:a,clearAccessTimeout:c,handleAccesssRefresh:t}},s=()=>(0,u.WQ)(i)},9383:function(e,t,a){a.d(t,{T:function(){return r},d:function(){return s}});var n=a(920),l=a(3830),u=a(144),i=a(6768);const c=Symbol(),s=()=>{const e=(0,l.B)(),t=(0,u.KR)({timer:0,list:{},hashcode:0,current:{Version:"",Msg:[],DateTime:"",Status:0,Length:0,Current:0},subscribeTimer:0});(0,i.Gt)(c,t);const a=()=>{(0,n.mK)(t.value.hashcode.toString()).then((n=>{if(t.value.hashcode=n.HashCode,n.List){const a=Object.values(n.List).filter((e=>!!e.Version))[0];a&&(Object.assign(t.value.current,{DateTime:a.DateTime,Version:a.Version,Status:a.Status,Length:a.Length,Current:a.Current,Msg:a.Msg}),e.value.updater=t.value.current),t.value.list=n.List}t.value.timer=setTimeout(a,800)})).catch((()=>{t.value.timer=setTimeout(a,800)}))},s=()=>{(0,n.UB)().then((()=>{t.value.subscribeTimer=setTimeout(s,5e3)})).catch((()=>{t.value.subscribeTimer=setTimeout(s,5e3)}))},r=()=>{clearTimeout(t.value.timer),clearTimeout(t.value.subscribeTimer)};return{updater:t,_getUpdater:a,_subscribeUpdater:s,clearUpdaterTimeout:r}},r=()=>(0,i.WQ)(c)},9593:function(e,t,a){a.d(t,{A:function(){return d}});var n=a(6768);function l(e,t,a,l,u,i){const c=(0,n.g2)("el-checkbox"),s=(0,n.g2)("el-col"),r=(0,n.g2)("el-row"),o=(0,n.g2)("el-checkbox-group");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(r,null,{default:(0,n.k6)((()=>[(0,n.bF)(s,{span:8},{default:(0,n.k6)((()=>[(0,n.bF)(c,{modelValue:l.state.checkAll,"onUpdate:modelValue":t[0]||(t[0]=e=>l.state.checkAll=e),onChange:l.handleCheckAllChange,label:"全选",indeterminate:l.state.isIndeterminate},null,8,["modelValue","onChange","indeterminate"])])),_:1})])),_:1}),(0,n.bF)(o,{modelValue:l.state.checkList,"onUpdate:modelValue":t[1]||(t[1]=e=>l.state.checkList=e),onChange:l.handleCheckedChange},{default:(0,n.k6)((()=>[(0,n.bF)(r,null,{default:(0,n.k6)((()=>[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.access,((e,t)=>((0,n.uX)(),(0,n.Wv)(s,{key:t,span:8},{default:(0,n.k6)((()=>[(0,n.bF)(c,{value:e.Value,label:e.Text},null,8,["value","label"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue","onChange"])],64)}a(4114);var u=a(144),i=a(3830),c=a(5962),s={props:["machineid"],setup(e){const t=(0,i.B)(),a=(0,c.q)(),l=(0,n.EW)((()=>{const e=t.value.config.Client.Accesss;return Object.keys(e).reduce(((a,n,l)=>{if(t.value.hasAccess(n)){const t=e[n];t.Key=n,a.push(t)}return a}),[])})),s=(0,u.Kh)({checkList:[t.value.config.Client.Accesss.Api.Value,t.value.config.Client.Accesss.Web.Value,t.value.config.Client.Accesss.NetManager.Value,t.value.config.Client.Accesss.FullManager.Value,t.value.config.Client.Accesss.Transport.Value,t.value.config.Client.Accesss.Action.Value],checkAll:!1,isIndeterminate:!1}),r=()=>+s.checkList.reduce(((e,t)=>e|BigInt(t)),BigInt(0)).toString(),o=e=>{const t=e.length;s.checkAll=t===l.value.length,s.isIndeterminate=t>0&&t<l.value.length},d=e=>{s.checkAll=e,s.checkList=e?l.value.map((e=>e.Value)):[],s.isIndeterminate=!1};return(0,n.sV)((()=>{if(a&&a.value.list[e.machineid]){const t=a.value.list[e.machineid];s.checkList=l.value.reduce(((e,a)=>(+(BigInt(t)&BigInt(a.Value)).toString()==a.Value&&e.push(a.Value),e)),[])}o(s.checkList)})),{state:s,access:l,getValue:r,handleCheckAllChange:d,handleCheckedChange:o}}},r=a(1241);const o=(0,r.A)(s,[["render",l],["__scopeId","data-v-5d52ca48"]]);var d=o},4831:function(e,t,a){a.d(t,{A:function(){return C}});var n=a(6768),l=a(4232);const u=["title"],i={key:0,class:"progress"},c={key:1,class:"progress"};function s(e,t,a,s,r,o){const d=(0,n.g2)("Loading"),h=(0,n.g2)("el-icon"),v=(0,n.g2)("Download"),m=(0,n.g2)("CircleCheck");return(0,n.uX)(),(0,n.CE)("a",{href:"javascript:;",class:(0,l.C4)(["download",s.updaterColor]),onClick:t[0]||(t[0]=e=>s.handleUpdate()),title:s.updaterText},[(0,n.Lk)("span",null,[(0,n.Lk)("span",null,(0,l.v_)(s.item.Version),1),s.updater.list[s.item.MachineId]?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[1==s.updater.list[s.item.MachineId].Status?((0,n.uX)(),(0,n.Wv)(h,{key:0,size:"14",class:"loading"},{default:(0,n.k6)((()=>[(0,n.bF)(d)])),_:1})):2==s.updater.list[s.item.MachineId].Status?((0,n.uX)(),(0,n.Wv)(h,{key:1,size:"14"},{default:(0,n.k6)((()=>[(0,n.bF)(v)])),_:1})):3==s.updater.list[s.item.MachineId].Status||5==s.updater.list[s.item.MachineId].Status?((0,n.uX)(),(0,n.CE)(n.FK,{key:2},[(0,n.bF)(h,{size:"14",class:"loading"},{default:(0,n.k6)((()=>[(0,n.bF)(d)])),_:1}),0==s.updater.list[s.item.MachineId].Length?((0,n.uX)(),(0,n.CE)("span",i,"0%")):((0,n.uX)(),(0,n.CE)("span",c,(0,l.v_)(parseInt(s.updater.list[s.item.MachineId].Current/s.updater.list[s.item.MachineId].Length*100))+"%",1))],64)):6==s.updater.list[s.item.MachineId].Status?((0,n.uX)(),(0,n.Wv)(h,{key:3,size:"14",class:"yellow"},{default:(0,n.k6)((()=>[(0,n.bF)(m)])),_:1})):(0,n.Q3)("",!0)],64)):((0,n.uX)(),(0,n.Wv)(h,{key:1,size:"14"},{default:(0,n.k6)((()=>[(0,n.bF)(v)])),_:1}))])],10,u)}a(4114);var r=a(3830),o=a(144),d=a(1219),h=a(2933),v=a(2248),m=a(920),p=a(7477),f=a(9383),g={props:["item","config"],components:{Download:p.f5X,Loading:p.Rhj,CircleCheck:p.rW7},setup(e){const t=(0,r.B)(),a=(0,n.EW)((()=>t.value.hasAccess("UpdateSelf"))),l=(0,n.EW)((()=>t.value.hasAccess("UpdateOther"))),u=(0,f.T)(),i=(0,n.EW)((()=>t.value.signin.Version)),c=(0,n.EW)((()=>u.value.current.Version)),s=(0,n.EW)((()=>`${c.value}->${u.value.current.DateTime}\n${u.value.current.Msg.map(((e,t)=>`${t+1}、${e}`)).join("\n")}`)),p=(0,n.EW)((()=>u.value.list[e.item.MachineId]?u.value.list[e.item.MachineId].Status<=2?e.item.Version!=i.value?`与服务器版本(${i.value})不一致，建议更新`:c.value!=e.item.Version?`不是最新版本(${c.value})，建议更新\n${s.value}`:`是最新版本，但我无法阻止你喜欢更新\n${s.value}`:{3:"正在下载",4:"已下载",5:"正在解压",6:"已解压，请重启"}[u.value.list[e.item.MachineId].Status]:"未检测到更新")),g=(0,n.EW)((()=>e.item.Version!=i.value?"red":u.value.list[e.item.MachineId]&&c.value!=e.item.Version?"yellow":"green")),k=()=>{if(!e.config)return;if(!a.value)return;const t=u.value.list[e.item.MachineId];if(t)if([0,1,3,5].indexOf(t.Status)>=0)d.nk.error("操作中，请稍后!");else if(6!=t.Status){if(2==t.Status){const t=(0,o.KR)(c.value),a=[(0,n.h)(v.P9,{label:`仅[${e.item.MachineName}] -> ${c.value}(最新)`,value:c.value})];e.config&&l.value&&(a.push((0,n.h)(v.P9,{label:`[本组所有] -> ${c.value}(最新)`,value:`allg->${c.value}`})),a.push((0,n.h)(v.P9,{label:`[本服务器所有] -> ${c.value}(最新)(需要密钥)`,value:`all->${c.value}`}))),e.item.Version!=i.value&&c.value!=i.value&&(a.push((0,n.h)(v.P9,{label:`仅[${e.item.MachineName}] -> ${i.value}(服务器版本)`,value:i.value})),e.config&&l.value&&(a.push((0,n.h)(v.P9,{label:`[本组所有] -> ${i.value}(服务器版本)`,value:`allg->${i.value}`})),a.push((0,n.h)(v.P9,{label:`[本服务器所有] -> ${i.value}(服务器版本)(需要密钥)`,value:`all->${i.value}`})))),(0,h.s)({title:"选择版本",message:()=>(0,n.h)(v.AV,{modelValue:t.value,placeholder:"请选择",style:"width:20rem;","onUpdate:modelValue":e=>{t.value=e}},a),confirmButtonText:"确定",cancelButtonText:"取消"}).then((()=>{const a={MachineId:e.item.MachineId,Version:t.value.replace("all->","").replace("allg->",""),GroupAll:t.value.indexOf("allg->")>=0,All:t.value.indexOf("all->")>=0};(a.All||a.GroupAll)&&(a.MachineId=""),(0,m.lJ)(a)})).catch((()=>{}))}}else h.s.confirm("确定关闭程序吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{exit(e.item.MachineId)})).catch((()=>{}));else d.nk.error("未检测到更新")};return{item:(0,n.EW)((()=>e.item)),updater:u,updaterText:p,updaterColor:g,handleUpdate:k}}},k=a(1241);const b=(0,k.A)(g,[["render",s],["__scopeId","data-v-7f8b7c63"]]);var C=b}}]);