(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4764],{35883:function(){},55139:function(e,t,n){"use strict";n.d(t,{r:function(){return s.Z}});var s=n(87456)},76036:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var s=n(57437),a=n(72009),r=n(81628),l=n(2265),i=n(71424),o=n(56926),c=n(7935),u=n(54415);let d={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:s}=(0,o.mA)(),x=(0,u.uT)(),{data:m}=(0,o.py)(),[p,f]=(0,l.useState)(!1),v=(0,l.useMemo)(()=>Object.keys(e).filter(e=>e!==a.K8),[e]),[h,b]=(0,l.useState)(t&&d[t]||{}),updateAllownce=(e,n)=>{t&&(d[t]={...d[t]||{},[e]:n},b(t=>({...t,[e]:n})))},{data:g}=(0,o.Ov)(),j=(0,o.t_)();(0,l.useEffect)(()=>{s&&t&&v.forEach(e=>{x({abi:c.em,address:e,functionName:"allowance",args:[s,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[v,s,g]);let[w,y]=(0,l.useState)(!1),N=(0,l.useMemo)(()=>v.filter(t=>(0,r.ok)(e,t)>0n&&(0,r.ok)(e,t)>(0,r.ok)(h,t)),[e,v,h]),approve=async()=>{if(0!=N.length&&t)try{y(!0),f(!1);for(let s=0;s<N.length;s++){let a=N[s],r=!1===n?e[a]:n,l=await (null==m?void 0:m.writeContract({abi:c.em,address:a,functionName:"approve",args:[t,r]}));l&&await (null==j?void 0:j.waitForTransactionReceipt({hash:l})),updateAllownce(a,r)}i.A.success("Approve success"),y(!1),f(!0)}catch(e){throw i.A.error((0,r.az)(e)),y(!1),f(!1),e}};return{approve,loading:w,shouldApprove:N.length>0,isSuccess:p}};var x=n(43003),m=n(35769),p=n(72084);function ApproveAndTx(e){let{className:t,tx:n,approves:a,spender:r,requestAmount:i,config:o,toast:c=!0,disabled:u,onTxSuccess:d,onApproveSuccess:f}=e,{write:v,isDisabled:h,isLoading:b}=(0,x.R)({onSuccess:()=>d&&d(),...o},c),g=u||h||b||!1===o.enabled,{approve:j,shouldApprove:w,loading:y,isSuccess:N}=useApproves(a||{},r,i),A=(0,l.useRef)();return(A.current=f,(0,l.useEffect)(()=>{A.current&&N&&A.current()},[N]),w)?(0,s.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:j,disabled:u||!j||y,children:[y&&(0,s.jsx)(p.$,{}),"Approve"]}):(0,s.jsxs)("button",{className:(0,m.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>v(),disabled:g,children:[b&&(0,s.jsx)(p.$,{}),n]})}},34776:function(e,t,n){"use strict";n.d(t,{Z:function(){return ConnectBtn}});var s=n(57437),a=n(14701),r=n(1044);function ConnectBtn(){let e=(0,r.Z)(1024);return(0,s.jsx)(a.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1})}},80547:function(e,t,n){"use strict";n.d(t,{W:function(){return AssetInput}});var s=n(57437),a=n(81628),r=n(20373),l=n(57042),i=n(2265),o=n(28881),c=n(16775),u=n(51549);function AssetInput(e){let{asset:t="ETH",checkBalance:n=!0,balance:d,balanceTit:x="Balance",balanceDecimals:m=18,exchange:p,readonly:f,selected:v,onClick:h,amount:b,setAmount:g,price:j,disable:w,hasInput:y=!1,options:N,onChange:A=()=>{},defaultValue:S,balanceClassName:k="",disableNegative:B}=e,C=(0,i.useRef)(null),T=n&&void 0!==d&&(0,a.su)("number"==typeof b?b+"":b||"")>("bigint"==typeof d?d:0n);return(0,s.jsxs)("div",{className:"relative w-full",onClick:()=>{h&&!w&&h()},children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"absolute flex items-center h-fit gap-2 left-[48px] bottom-1 w-full  max-w-[calc(100%-56px)]",style:{pointerEvents:"none"},children:[j&&(0,s.jsx)("div",{className:"text-neutral-500 text-xs max-w-full overflow-hidden",children:j}),p&&(0,s.jsxs)("div",{className:"text-slate-500 text-xs max-w-full overflow-hidden",children:["~$",p]})]}),(0,s.jsxs)("div",{className:"absolute flex items-center gap-2 w-fit top-1/2 left-4 -translate-y-1/2",children:[(0,s.jsx)(u.c,{size:24,symbol:t}),(0,s.jsx)("div",{className:(0,l.Z)("relative",j||p?"-top-[6px]":""),children:y?(0,s.jsx)(o.ZP,{options:N,onChange:A,defaultValue:S,styles:{control:(e,t)=>({...e,border:"0px",outline:"none",boxShadow:"none",borderRadius:"0px",minHeight:"24px",padding:"0px",background:"transparent"}),valueContainer:(e,t)=>({...e,padding:"0px"}),menu:(e,t)=>({...e,margin:0}),menuPortal:(e,t)=>({...e,margin:0})}}):(0,s.jsx)("div",{children:t})})]}),(0,s.jsx)("input",{value:b,onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");g(t)},ref:C,type:"number",disabled:w,className:(0,l.Z)(f?"bg-slate-50":"bg-white",{"border-green-700 border-2":v,"border-red-400 !border-2 focus:border-red-400":T,"border-slate-400  focus:border-blue-400":!T&&!v},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border focus:border-2 text-slate-700 rounded-md outline-none"),placeholder:"0.000",maxLength:36,pattern:"[0-9.]{36}",step:.01,title:"",readOnly:f})]}),void 0!=d&&(0,s.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 text-sm",children:[(0,s.jsxs)("div",{className:k,children:[(0,s.jsxs)("span",{children:[x,": ",(0,r.Rp)(d,3,m)]}),(0,s.jsx)("button",{className:"text-indigo-500 ml-2",onClick:()=>{let e=(0,c.b)(d,m);g(e),h&&!w&&h()},children:"Max"})]}),(0,s.jsx)("div",{className:"text-sm text-red-400",children:T?"Insufficient account balance":""})]})]})}},8332:function(e,t,n){"use strict";n.d(t,{IS:function(){return useBlastPointsItems},aG:function(){return BlastPointCards}});var s=n(57437),a=n(81628),r=n(51549),l=n(91056),i=n(72009),o=n(23653),c=n(14389),u=n(86825),d=n(78203),x=n(66949),m=n(68497),p=n(20373),f=n(2265),v=n(85686),h=n(34350),b=n(97062),g=n(28278);let j={USB:"rgba(226, 254, 182, 1)",ETHx:"rgba(238, 234, 254, 1)",USDBx:"linear-gradient(90deg, rgba(16, 185, 129, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)"},w={USB:"rgba(196, 241, 126, 1)",ETHx:"rgba(219, 210, 255, 1)",USDBx:"rgba(255, 255, 255, 1)"};function useBlastPointsItems(){let e=(0,c.p)(),{prices:t,usbApr:n}=(0,f.useContext)(m.g),s=(0,x.a)(),r=(0,u.i)(),o=(0,d.m)(),v=(0,f.useMemo)(()=>{let n=[],r=i.iK[e];if(l.DF.find(t=>t.id==e)){let c=t[i.K8],u=t[i.O1[e]],calcPoint=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100n;return 0n==c?"0":(0,p.Rp)(6504987n*302400n*e*t/c,0,8)};n.push({symbol:"USB",tit:"APY:".concat((0,a.Jh)(o[i.O1[e]],10)," ~ ").concat((0,a.Jh)(o.USB_END,10)),sub:"~ Interest + Earning",point:calcPoint(u),per:100}),r.reduceRight((e,r)=>{let i="ETH"==r.assetTokenSymbol?"ETH GAIN BOOSTER":"APY:".concat((0,a.Jh)(o[r.xTokenAddress],10)),c=r.isStable&&(0,l.WA)()?"~ ".concat(s[r.vault].toFixed(2),"x Blast Native Yield"):"~ ".concat(s[r.vault].toFixed(2),"x Leveraged long on ").concat(r.assetTokenSymbol);return n.push({symbol:r.xTokenSymbol,tit:i,sub:c,point:calcPoint(t[r.xTokenAddress],"ETHx"==r.xTokenSymbol?1n:100n),per:"ETHx"==r.xTokenSymbol?1:100}),e},1)}return n},[e,t,s,n,r]);return v}function BlastPointCard(e){let{symbol:t,tit:n,sub:l,point:u}=e,d=(0,c.p)(),x=(0,f.useMemo)(()=>{var e,n;let s=(0,o.l)(d,!1),r={USB:"USDB",ETHx:"ETH",USDBx:"USDB"},l=null===(e=s.find(e=>e.symbol==r[t]))||void 0===e?void 0:e.address,c=null===(n=s.find(e=>e.symbol==t))||void 0===n?void 0:n.address;if(!l||!c)return"";let convertNative=e=>e==i.K8?"0x0000000000000000000000000000000000000000":e;return(0,a.h$)(convertNative(l),convertNative(c))},[d]);return(0,s.jsxs)("div",{style:{boxShadow:"0px 0px 12px 0px rgba(187, 215, 144, 0.4)"},className:"rounded-2xl overflow-hidden bg-white text-base flex flex-col",children:[(0,s.jsxs)("div",{className:"flex md:flex-wrap items-center p-4 gap-2",style:{background:j[t]},children:[(0,s.jsx)(r.c,{symbol:t,size:42,className:"shrink-0"}),(0,s.jsx)("div",{className:"font-semibold",children:t}),(0,s.jsxs)("div",{className:"whitespace-nowrap text-center text-sm ml-auto flex flex-col items-center flex-1",children:[(0,s.jsx)("div",{className:"rounded-full px-2 py-[2px] w-fit",style:{background:w[t]},children:n}),(0,s.jsx)("div",{className:"mt-1",children:l})]})]}),(0,s.jsxs)("div",{className:"flex justify-between p-4 whitespace-nowrap text-sm items-center gap-2 bg-white",children:[(0,s.jsxs)("div",{className:"font-medium text-indigo-500 self-start text-xs items-center gap-1",children:[(0,s.jsxs)("span",{className:"font-semibold text-sm",children:[u," Blast Points"]}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:["per ","ETHx"==t?1:100," ",(0,s.jsx)(r.c,{symbol:t,size:14})," /Week"]})]}),(0,s.jsxs)("a",{className:"underline text-slate-500 flex items-center gap-1",href:x,target:"_blank",children:["Swap on Thruster ",(0,s.jsx)(v.Ig3,{})]})]})]})}function BlastPointCards(){let e=useBlastPointsItems(),[t,{width:n}]=(0,h.Z)(),a=n<768;return 0==e.length?null:(0,s.jsxs)("div",{ref:t,className:"grid grid-cols-1 md:grid-cols-3 gap-5 md:pb-[60px]",children:[!a&&e.map(e=>(0,s.jsx)(BlastPointCard,{...e},e.symbol)),a&&(0,s.jsx)(g.tq,{spaceBetween:20,pagination:{clickable:!0,renderBullet:function(e,t){return'<div class="'+t+'"></div>'}},className:"-translate-x-[1rem] !px-4 !pb-10 !w-screen",modules:[b.tl],children:e.map(e=>(0,s.jsx)(g.o5,{children:(0,s.jsx)(BlastPointCard,{...e})},e.symbol))})]})}},51549:function(e,t,n){"use strict";n.d(t,{c:function(){return CoinIcon}});var s=n(57437);function CoinIcon(e){let{symbol:t,size:n=48,...a}=e;return(0,s.jsx)("img",{...a,width:n,height:n,src:"/".concat(t,".svg"),alt:t})}},72084:function(e,t,n){"use strict";n.d(t,{$:function(){return Spinner}});var s=n(57437),a=n(57042);let Spinner=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{fill:"none",className:(0,a.Z)(t,"animate-spin h-5 w-5 2-ml-1 2mr-3"),viewBox:"0 0 24 24",children:[(0,s.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,s.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},64020:function(e,t,n){"use strict";n.d(t,{C:function(){return Tip}});var s=n(57437),a=n(81628),r=n(75224),l=n(40311);function Tip(e){let{children:t,node:n,className:i}=e,o=document.getElementById("tooltip-root");return t?(0,s.jsx)(r.zt,{children:(0,s.jsxs)(r.fC,{children:[(0,s.jsx)(r.xz,{asChild:!0,children:n?(0,s.jsx)("div",{className:(0,a.cn)("inline-block cursor-default",i),style:{verticalAlign:"text-bottom"},children:n}):(0,s.jsx)("div",{className:(0,a.cn)("translate-y-[-6%] inline-block px-[3px] cursor-default relative",i),children:(0,s.jsx)(l.apP,{className:"inline-block stroke-slate-500"})})}),(0,s.jsx)(r.h_,{container:o,children:(0,s.jsxs)(r.VY,{className:"max-w-xs text-sm text-white bg-slate-900 rounded-md p-4",children:[t,(0,s.jsx)(r.Eh,{})]})})]})}):n}},78203:function(e,t,n){"use strict";n.d(t,{m:function(){return useTokenApys}});var s=n(81628),a=n(23862),r=n(86825),l=n(66949),i=n(2265),o=n(68497),c=n(14389),u=n(72009),d=n(43977);function useTokenApys(){let e=(0,a.b)(()=>(0,s.Yb)({},0n)),t=(0,c.p)(),{prices:n,usbApr:x,stableVaultsState:m}=(0,i.useContext)(o.g),p=(0,l.a)(),f=(0,r.i)();return(0,i.useMemo)(()=>{let n=u.iK[t],a=(0,s.ok)(f[n[0].ptyPoolBelowAddress],"staking");e[u.O1[t]]=x.apr,e.USB_END=x.apr+a;let r=(0,d.v)("0.15",10);return n.forEach(t=>{if(t.assetTokenAddress!=u.K8){let n=p[t.vault]>1n?(0,d.v)("".concat((p[t.vault]-1).toFixed(2)),10):0n,s=(0,d.v)("1",10);e[t.xTokenAddress]=(n*(r-m[t.vault].Y*m[t.vault].aar/s)+r*s)/s}}),null},[t,n,p,x,f,m]),e}},66949:function(e,t,n){"use strict";n.d(t,{a:function(){return useValutsLeverageRatio},z:function(){return useVaultLeverageRatio}});var s=n(72009),a=n(81628),r=n(68497),l=n(2265),i=n(14389),o=n(23862);function useVaultLeverageRatio(e){let{vaultsState:t,stableVaultsState:n}=(0,l.useContext)(r.g),s=t[(null==e?void 0:e.vault)||"null"],i=n[(null==e?void 0:e.vault)||"null"],o=(null==e?void 0:e.isStable)?(0,a.pF)(i.aar,i.AARDecimals):(0,a.pF)(s.aar,s.AARDecimals);return Math.max(0,1+1/(o-1))}function useValutsLeverageRatio(){let{vaultsState:e,stableVaultsState:t}=(0,l.useContext)(r.g),n=(0,i.p)(),c=s.iK[n],u=(0,o.b)(()=>new Proxy({},{get:function(e,t){return t in e&&null!==e[t]&&void 0!==e[t]?e[t]:0}}));return c.forEach(n=>{let s=e[(null==n?void 0:n.vault)||"null"],r=t[(null==n?void 0:n.vault)||"null"],l=(null==n?void 0:n.isStable)?(0,a.pF)(r.aar,r.AARDecimals):(0,a.pF)(s.aar,s.AARDecimals);u[n.vault]=Math.max(0,1+1/(l-1))}),u}},43003:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var s=n(81628),a=n(2265),r=n(71424),l=n(56926),i=n(54415);function useWrapContractWrite(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[n,o]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),d=(0,l.t_)(),{data:x}=(0,l.py)(),m=!d||!x||!x.account||n||!e||"object"==typeof e&&!1==e.enabled,p=(0,i.hp)(),write=async()=>{if(!m){o(!0),u(!1);try{let n="function"==typeof e?await e():e,{request:s}=await d.simulateContract({account:x.account,...n}),a=await x.writeContract(s),l=await d.waitForTransactionReceipt({hash:a});if("success"!==l.status)throw"Transaction reverted";u(!0),n.onSuccess&&n.onSuccess({}),t&&r.A.success("Transaction success"),p.update()}catch(e){t&&r.A.error((0,s.az)(e))}o(!1)}};return{write,isDisabled:m,isLoading:n,isSuccess:c}}},20373:function(e,t,n){"use strict";n.d(t,{Rp:function(){return displayBalanceWithUnit},ZM:function(){return displayBalanceWithoutFormat},dq:function(){return displayBalance}});var s=n(16775),a=n(79352);let displayBalanceWithUnit=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2?arguments[2]:void 0;if(!e)return"0";let a=10**t,r=Math.floor(Number((0,s.b)(e,n))*a)/a,l=Number((.1**t).toFixed(t));return r>0&&r<l?"<"+l:r<0&&r>-l?"≈0":r.toLocaleString("en-US",{maximumFractionDigits:t})},displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0";let n=Number((0,a.d)(e)),s=Number((.1**t).toFixed(t));return n>0&&n<s?"<"+s:n<0&&n>-s?"≈0":n.toLocaleString("en-US",{maximumFractionDigits:t})},displayBalanceWithoutFormat=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;if(!e)return"0";let n=10**t,s=Math.floor(Number((0,a.d)(e))*n)/n,r=Number((.1**t).toFixed(t));return s>0&&s<r?"<"+r:s<0&&s>-r?"≈0":String(s)}}}]);