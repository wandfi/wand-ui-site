(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3286],{35883:function(){},55139:function(e,t,n){"use strict";n.d(t,{r:function(){return r.Z}});var r=n(87456)},76036:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var r=n(57437),s=n(72009),a=n(81628),i=n(2265),l=n(71424),c=n(56926),o=n(84661),u=n(54415);let d={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:r}=(0,c.mA)(),f=(0,u.uT)(),{data:p}=(0,c.py)(),[x,m]=(0,i.useState)(!1),h=(0,i.useMemo)(()=>Object.keys(e).filter(e=>e!==s.K8),[e]),[v,b]=(0,i.useState)(t&&d[t]||{}),updateAllownce=(e,n)=>{t&&(d[t]={...d[t]||{},[e]:n},b(t=>({...t,[e]:n})))},{data:g}=(0,c.Ov)(),w=(0,c.t_)();(0,i.useEffect)(()=>{r&&t&&h.forEach(e=>{f({abi:o.em,address:e,functionName:"allowance",args:[r,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[h,r,g]);let[j,y]=(0,i.useState)(!1),N=(0,i.useMemo)(()=>h.filter(t=>(0,a.ok)(e,t)>0n&&(0,a.ok)(e,t)>(0,a.ok)(v,t)),[e,h,v]),approve=async()=>{if(0!=N.length&&t)try{y(!0),m(!1);for(let r=0;r<N.length;r++){let s=N[r],a=!1===n?e[s]:n,i=await (null==p?void 0:p.writeContract({abi:o.em,address:s,functionName:"approve",args:[t,a]}));i&&await (null==w?void 0:w.waitForTransactionReceipt({hash:i})),updateAllownce(s,a)}l.A.success("Approve success"),y(!1),m(!0)}catch(e){throw l.A.error((0,a.az)(e)),y(!1),m(!1),e}};return{approve,loading:j,shouldApprove:N.length>0,isSuccess:x}};var f=n(43003),p=n(35769),x=n(72084);function ApproveAndTx(e){let{className:t,tx:n,approves:s,spender:a,requestAmount:l,config:c,toast:o=!0,disabled:u,onTxSuccess:d,onApproveSuccess:m}=e,{write:h,isDisabled:v,isLoading:b}=(0,f.R)({onSuccess:()=>d&&d(),...c},o),g=u||v||b||!1===c.enabled,{approve:w,shouldApprove:j,loading:y,isSuccess:N}=useApproves(s||{},a,l),C=(0,i.useRef)();return(C.current=m,(0,i.useEffect)(()=>{C.current&&N&&C.current()},[N]),j)?(0,r.jsxs)("button",{className:(0,p.m)("btn-primary flex items-center justify-center gap-4",t),onClick:w,disabled:u||!w||y,children:[y&&(0,r.jsx)(x.$,{}),"Approve"]}):(0,r.jsxs)("button",{className:(0,p.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>h(),disabled:g,children:[b&&(0,r.jsx)(x.$,{}),n]})}},34776:function(e,t,n){"use strict";n.d(t,{Z:function(){return ConnectBtn}});var r=n(57437),s=n(14701),a=n(53163);function ConnectBtn(){let e=(0,a.Z)(1024);return(0,r.jsx)(s.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1})}},80547:function(e,t,n){"use strict";n.d(t,{W:function(){return AssetInput}});var r=n(57437),s=n(81628),a=n(20373),i=n(57042),l=n(2265),c=n(28881),o=n(16775),u=n(51549);function AssetInput(e){let{asset:t="ETH",checkBalance:n=!0,balance:d,balanceTit:f="Balance",balanceDecimals:p=18,exchange:x,readonly:m,selected:h,onClick:v,amount:b,setAmount:g,price:w,disable:j,hasInput:y=!1,options:N,onChange:C=()=>{},defaultValue:A,balanceClassName:k="",disableNegative:S}=e,B=(0,l.useRef)(null),T=n&&void 0!==d&&(0,s.su)("number"==typeof b?b+"":b||"")>("bigint"==typeof d?d:0n);return(0,r.jsxs)("div",{className:"relative w-full",onClick:()=>{v&&!j&&v()},children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsxs)("div",{className:"absolute flex items-center h-fit gap-2 left-[48px] bottom-1 w-full  max-w-[calc(100%-56px)]",style:{pointerEvents:"none"},children:[w&&(0,r.jsx)("div",{className:"text-neutral-500 text-xs max-w-full overflow-hidden",children:w}),x&&(0,r.jsxs)("div",{className:"text-slate-500 text-xs max-w-full overflow-hidden",children:["~$",x]})]}),(0,r.jsxs)("div",{className:"absolute flex items-center gap-2 w-fit top-1/2 left-4 -translate-y-1/2",children:[(0,r.jsx)(u.c,{size:24,symbol:t}),(0,r.jsx)("div",{className:(0,i.Z)("relative -top-[6px]"),children:y?(0,r.jsx)(c.ZP,{options:N,onChange:C,defaultValue:A,styles:{control:(e,t)=>({...e,border:"0px",outline:"none",boxShadow:"none",borderRadius:"0px",minHeight:"24px",padding:"0px",background:"transparent"}),valueContainer:(e,t)=>({...e,padding:"0px"}),menu:(e,t)=>({...e,margin:0}),menuPortal:(e,t)=>({...e,margin:0})}}):(0,r.jsx)("div",{children:t})})]}),(0,r.jsx)("input",{value:b,onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");g(t)},ref:B,type:"number",disabled:j,className:(0,i.Z)(m?"bg-slate-50":"bg-white",{"border-green-700 border-2":h,"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400":!T&&!h},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",maxLength:36,pattern:"[0-9.]{36}",step:.01,title:"",readOnly:m})]}),void 0!=d&&(0,r.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,r.jsxs)("div",{className:k,children:[(0,r.jsxs)("span",{children:[f,": ",(0,a.Rp)(d,3,p)]}),(0,r.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,o.b)(d,p);g(e),v&&!j&&v()},children:"Max"})]}),(0,r.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},51549:function(e,t,n){"use strict";n.d(t,{c:function(){return CoinIcon}});var r=n(57437);function CoinIcon(e){let{symbol:t,size:n=48,...s}=e;return(0,r.jsx)("img",{...s,width:n,height:n,src:"/".concat(t,".svg"),alt:t})}},72084:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var r=n(57437);let Spinner=e=>{let{className:t}=e;return(0,r.jsxs)("svg",{fill:"none",className:t?"text-white":"animate-spin h-5 w-5 2-ml-1 2mr-3",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,t,n){"use strict";n.d(t,{C:function(){return Tip}});var r=n(57437),s=n(75224),a=n(40311);function Tip(e){let{children:t,node:n}=e,i=document.getElementById("tooltip-root");return t?(0,r.jsx)(s.zt,{children:(0,r.jsxs)(s.fC,{children:[(0,r.jsx)(s.xz,{asChild:!0,children:n?(0,r.jsx)("div",{className:"inline-block cursor-default",style:{verticalAlign:"text-bottom"},children:n}):(0,r.jsx)("div",{className:"inline-block px-[3px] cursor-default relative",style:{transform:"translateY(-6%)"},children:(0,r.jsx)(a.apP,{className:"inline-block stroke-slate-500",style:{fontSize:"1.3em"}})})}),(0,r.jsx)(s.h_,{container:i,children:(0,r.jsxs)(s.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[t,(0,r.jsx)(s.Eh,{})]})})]})}):n}},43003:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var r=n(81628),s=n(2265),a=n(71424),i=n(56926);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[n,l]=(0,s.useState)(!1),[c,o]=(0,s.useState)(!1),u=(0,i.t_)(),{data:d}=(0,i.py)(),f=!u||!d||!d.account||n||!e||"object"==typeof e&&!1==e.enabled,write=async()=>{if(!f){l(!0),o(!1);try{let n="function"==typeof e?await e():e,{request:r}=await u.simulateContract({account:d.account,...n}),s=await d.writeContract(r),i=await u.waitForTransactionReceipt({hash:s});if("success"!==i.status)throw"Transaction reverted";o(!0),n.onSuccess&&n.onSuccess({}),t&&a.A.success("Transaction success")}catch(e){t&&a.A.error((0,r.az)(e))}l(!1)}};return{write,isDisabled:f,isLoading:n,isSuccess:c}}},20373:function(e,t,n){"use strict";n.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var r=n(16775),s=n(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2?arguments[2]:void 0;if(!e)return"0";let s=10**t,a=Math.floor(Number((0,r.b)(e,n))*s)/s,i=Number((.1**t).toFixed(t));return a>0&&a<i?"<"+i:a<0&&a>-i?"≈0":a.toLocaleString("en-US",{maximumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0";let n=Number((0,s.d)(e)),r=Number((.1**t).toFixed(t));return n>0&&n<r?"<"+r:n<0&&n>-r?"≈0":n.toLocaleString("en-US",{maximumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0";let n=10**t,r=Math.floor(Number((0,s.d)(e))*n)/n,a=Number((.1**t).toFixed(t));return r>0&&r<a?"<"+a:r<0&&r>-a?"≈0":String(r)}}}]);