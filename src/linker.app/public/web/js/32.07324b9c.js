"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[32],{83:function(e,t,n){n.d(t,{$M:function(){return s},KW:function(){return r},Zu:function(){return u},gM:function(){return o},r7:function(){return a}});var l=n(4);const a=(e="0")=>(0,l.zG)("tunnel/get",e),o=()=>(0,l.zG)("tunnel/refresh"),r=e=>(0,l.zG)("tunnel/SetRouteLevel",e),s=e=>(0,l.zG)("tunnel/SetTransports",e),u=e=>(0,l.zG)("tunnel/GetNetwork",e)},7225:function(e,t,n){n.d(t,{A:function(){return m}});var l=n(6768);function a(e,t,n,a,o,r){const s=(0,l.g2)("Share"),u=(0,l.g2)("el-icon"),i=(0,l.g2)("el-button");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(i,{class:"btn",size:"small",onClick:a.handleSync},{default:(0,l.k6)((()=>[(0,l.bF)(u,null,{default:(0,l.k6)((()=>[(0,l.bF)(s)])),_:1})])),_:1},8,["onClick"])])}var o=n(4);const r=e=>(0,o.zG)("sync/Sync",e);var s=n(3830),u=n(7477),i=n(1219),d=n(2933),c=n(5931),p={props:["name"],components:{Share:u.SYj},setup(e){const{t:t}=(0,c.s9)(),n=(0,s.B)(),a=(0,l.EW)((()=>n.value.hasAccess("Sync"))),o=()=>{a.value?d.s.confirm(`${t("server.sync")} ${t(`server.async${e.name}`)} ? `,t("common.tips"),{confirmButtonText:t("common.confirm"),cancelButtonText:t("common.cancel"),type:"warning"}).then((()=>{r([e.name]).then((e=>{i.nk.success(t("common.oper"))}))})).catch((()=>{})):i.nk.success(t("common.access"))};return{handleSync:o}}},b=n(1241);const h=(0,b.A)(p,[["render",a]]);var m=h},4032:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var l=n(6768),a=n(4232);const o=e=>((0,l.Qi)("data-v-3a47eba5"),e=e(),(0,l.jt)(),e),r={class:"transport-wrap"},s={class:"flex"},u=o((()=>(0,l.Lk)("span",{class:"flex-1"},null,-1)));function i(e,t,n,o,i,d){const c=(0,l.g2)("el-table-column"),p=(0,l.g2)("el-option"),b=(0,l.g2)("el-select"),h=(0,l.g2)("el-switch"),m=(0,l.g2)("Sync"),f=(0,l.g2)("el-input-number"),v=(0,l.g2)("el-table");return(0,l.uX)(),(0,l.CE)("div",r,[(0,l.bF)(v,{stripe:"",data:o.state.list,border:"",size:"small",width:"100%",height:`${o.state.height}px`},{default:(0,l.k6)((()=>[(0,l.bF)(c,{prop:"Name",label:e.$t("status.tunnelName"),width:"120"},null,8,["label"]),(0,l.bF)(c,{prop:"Label",label:e.$t("status.tunnelLabel")},null,8,["label"]),(0,l.bF)(c,{prop:"ProtocolType",label:e.$t("status.tunnelProtocol"),width:"60"},null,8,["label"]),(0,l.bF)(c,{prop:"BufferSize",label:e.$t("status.tunnelBuffer"),width:"100"},{default:(0,l.k6)((e=>[(0,l.bF)(b,{modelValue:e.row.BufferSize,"onUpdate:modelValue":t=>e.row.BufferSize=t,placeholder:"Select",size:"small",onChange:o.handleSave},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.state.bufferSize,((e,t)=>((0,l.uX)(),(0,l.Wv)(p,{key:t,label:e,value:t},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])),_:1},8,["label"]),(0,l.bF)(c,{property:"Reverse",label:e.$t("status.tunnelReverse"),width:"64"},{default:(0,l.k6)((t=>[(0,l.bF)(h,{disabled:t.row.DisableReverse,modelValue:t.row.Reverse,"onUpdate:modelValue":e=>t.row.Reverse=e,onChange:o.handleSave,"inline-prompt":"","active-text":e.$t("status.tunnelYes"),"inactive-text":e.$t("status.tunnelNo")},null,8,["disabled","modelValue","onUpdate:modelValue","onChange","active-text","inactive-text"])])),_:1},8,["label"]),(0,l.bF)(c,{property:"SSL",label:e.$t("status.tunnelSSL"),width:"60"},{default:(0,l.k6)((t=>[(0,l.bF)(h,{disabled:t.row.DisableSSL,modelValue:t.row.SSL,"onUpdate:modelValue":e=>t.row.SSL=e,onChange:o.handleSave,"inline-prompt":"","active-text":e.$t("status.tunnelYes"),"inactive-text":e.$t("status.tunnelNo")},null,8,["disabled","modelValue","onUpdate:modelValue","onChange","active-text","inactive-text"])])),_:1},8,["label"]),(0,l.bF)(c,{property:"Disabled",label:e.$t("status.tunnelDisanbled"),width:"64"},{default:(0,l.k6)((t=>[(0,l.bF)(h,{modelValue:t.row.Disabled,"onUpdate:modelValue":e=>t.row.Disabled=e,onChange:o.handleSave,"inline-prompt":"","active-text":e.$t("status.tunnelYes"),"inactive-text":e.$t("status.tunnelNo"),style:{"--el-switch-on-color":"red","--el-switch-off-color":"#ddd"}},null,8,["modelValue","onUpdate:modelValue","onChange","active-text","inactive-text"])])),_:1},8,["label"]),(0,l.bF)(c,{prop:"Order",label:e.$t("status.tunnelSort"),width:"104",fixed:"right"},{header:(0,l.k6)((()=>[(0,l.Lk)("div",s,[(0,l.Lk)("strong",null,(0,a.v_)(e.$t("status.tunnelSort")),1),u,(0,l.bF)(m,{name:"TunnelTransports"})])])),default:(0,l.k6)((e=>[(0,l.Lk)("div",null,[(0,l.bF)(f,{modelValue:e.row.Order,"onUpdate:modelValue":t=>e.row.Order=t,min:1,max:255,onChange:o.handleOrderChange,size:"small"},null,8,["modelValue","onUpdate:modelValue","onChange"])])])),_:1},8,["label"])])),_:1},8,["data","height"])])}var d=n(83),c=n(3830),p=n(1219),b=n(144),h=n(7477),m=n(5931),f=n(7225),v={label:"打洞协议",name:"transports",order:2,components:{Delete:h.epd,Plus:h.FWt,Top:h.EjV,Bottom:h.i5o,Sync:f.A},setup(e){const{t:t}=(0,m.s9)(),n=(0,c.B)(),a=(0,b.Kh)({list:n.value.config.Client.Tunnel.Transports.sort(((e,t)=>e.Order-t.Order)),height:(0,l.EW)((()=>n.value.height-20)),bufferSize:n.value.bufferSize});(0,l.wB)((()=>n.value.config.Client.Tunnel.Transports),(()=>{a.list=n.value.config.Client.Tunnel.Transports.sort(((e,t)=>e.Order-t.Order))}));const o=()=>{r(a.list)},r=()=>{a.list=a.list.slice().sort(((e,t)=>e.Order-t.Order)),(0,d.$M)(a.list).then((()=>{p.nk.success(t("common.oper"))})).catch((e=>{console.log(e),p.nk.error(t("common.operFail"))}))};return{state:a,handleOrderChange:o,handleSave:r}}},g=n(1241);const S=(0,g.A)(v,[["render",i],["__scopeId","data-v-3a47eba5"]]);var w=S}}]);