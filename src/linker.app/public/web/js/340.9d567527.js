"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[340],{3959:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var o=n(6768),r=n(4232);const a={class:"action-wrap"},s={class:"t-c"};function c(e,t,n,c,l,i){const u=(0,o.g2)("el-input"),d=(0,o.g2)("el-button"),v=(0,o.g2)("el-card");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(v,{shadow:"never"},{header:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.$t("action.text")),1)])),footer:(0,o.k6)((()=>[(0,o.Lk)("div",s,[(0,o.bF)(d,{type:"success",onClick:c.handleSave},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.v_)(e.$t("common.confirm")),1)])),_:1},8,["onClick"])])])),default:(0,o.k6)((()=>[(0,o.Lk)("div",null,[(0,o.bF)(u,{modelValue:c.state.list,"onUpdate:modelValue":t[0]||(t[0]=e=>c.state.list=e),rows:10,type:"textarea",resize:"none",onChange:c.handleSave},null,8,["modelValue","onChange"])])])),_:1})])}var l=n(4);const i=e=>(0,l.zG)("action/SetServerArgs",e);var u=n(3830),d=n(1219),v=n(144),k=n(5931),f={setup(e){const{t:t}=(0,k.s9)(),n=(0,u.B)(),o=(0,v.Kh)({list:n.value.config.Client.Action.Args[n.value.config.Client.Server.Host]||""}),r=()=>{try{if(o.list&&"object"!=typeof JSON.parse(o.list))return void d.nk.error(t("action.jsonError"))}catch(r){return void d.nk.error(t("action.jsonError"))}const e=JSON.parse(JSON.stringify(n.value.config.Client.Action.Args));e[n.value.config.Client.Server.Host]=o.list,i(e).then((()=>{d.nk.success(t("common.oper"))})).catch((e=>{console.log(e),d.nk.error(t("common.operFail"))}))};return{state:o,handleSave:r}}},p=n(1241);const g=(0,p.A)(f,[["render",c],["__scopeId","data-v-3b8d22a9"]]);var h=g}}]);