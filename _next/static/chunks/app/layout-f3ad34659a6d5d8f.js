(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{35883:function(){},39473:function(e,t,n){Promise.resolve().then(n.t.bind(n,72853,23)),Promise.resolve().then(n.bind(n,24635)),Promise.resolve().then(n.t.bind(n,38020,23)),Promise.resolve().then(n.t.bind(n,9194,23)),Promise.resolve().then(n.t.bind(n,15615,23)),Promise.resolve().then(n.t.bind(n,8780,23)),Promise.resolve().then(n.t.bind(n,23925,23))},24635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return PageLayout}});var s=n(57437),a=n(2265),i=n(91056),l=n(32211),r=n(14701),c=n(91653),d=n(91999),o=n(85107),m=n(4707),h=n(36337),u=n(37211),x=n(94828),f=n(75398),p=n(7935),b=n(56926),v=n(90433),g=n(86096),j=n(79116),w=n(68917),N=n(68497),P=n(9798),y=n(29526),k=n(66247);let I=(0,l.W)({}),S="b3ff10277f66a6ba31bbb88fb6ea4365",_={[i.dm.id]:"blast_testnet_sepolia",[i.mx.id]:"blast",[f.F.id]:"eth_sepolia"},C=[(0,g.I)(),(0,v.R)({rpc:e=>({http:"https://rpc.ankr.com/".concat(_[e.id],"/").concat("5da55021cad3ac57391c3292c373dec3a32bf9eaae63b74d4138d5d4a17dd554","/"),webSocket:""})})],A=new P.f({uri:"https://api.studio.thegraph.com/query/45897/wand/version/latest",cache:new y.h});function Providers(e){let{children:t}=e,[n,l]=a.useState(),[f,v]=a.useState();return(a.useEffect(()=>{let e=(0,p.o6)({storage:{getItem:e=>window.localStorage.getItem(e),removeItem:e=>window.localStorage.removeItem(e),setItem:(e,t)=>{"wagmi.cache"!==e&&localStorage.setItem(e,t)}}}),t=i.Af,n=(0,r.a3)([{groupName:"Recommended",wallets:[(0,c.U)({chains:t}),(0,d.P)({chains:t,projectId:S}),(0,o.D)({appName:"Wand",chains:t}),(0,m.c)({chains:t,projectId:S}),(0,h.X)({chains:t,projectId:S}),(0,u.J)({chains:t,projectId:S}),(0,x.D)({chains:t,projectId:S})]}]),{chains:s,publicClient:a,webSocketPublicClient:f}=(0,p.QB)(t,C,{batch:{multicall:{batchSize:100,wait:300}},stallTimeout:1e4});v(s),l((0,b._g)({autoConnect:!0,connectors:n,publicClient:a,webSocketPublicClient:f,storage:e}))},[]),n)?(0,s.jsx)(k.e,{client:A,children:(0,s.jsx)(b.eM,{config:n,children:(0,s.jsx)(w.QueryParamProvider,{adapter:j.Z,children:(0,s.jsx)(r.pj,{chains:f,locale:"en-US",modalSize:"compact",theme:I,children:(0,s.jsx)(N.A,{children:t})})})})}):null}var E=n(8580),Z=n(73479),B=n(72009),D=n(14389),F=n(54415),z=n(23291),H=n(57042),L=n(16691),T=n.n(L),W=n(61396),O=n.n(W),R=n(24033),K=n(41697),Q=n(35932),U=n(1044),J=n(26266),M=n(34776);let V=[{name:"doc",url:E.xb,icon:Q.K99},{name:"Twitter",url:E.v,icon:Q.vJk},{name:"Discord",url:E.Hj,icon:Q.HpO}],Y={[J.Fo.id]:"Ethereum Sepolia",[i.dm.id]:"Blast Sepolia",[i.mx.id]:"Blast"},q={[J.Fo.id]:"/ETH.svg",[i.dm.id]:"blast.png",[i.mx.id]:"blast.png"};function Header(){let e=(0,R.usePathname)(),{width:t}=(0,U.Z)(window.innerWidth,window.innerHeight),n="/"!==e&&t<1024,l=(0,D.p)(),{openChainModal:c}=(0,r.iC)(),d=function(){var e,t;let n=(0,D.p)(),{address:s}=(0,b.mA)(),{data:a}=(0,F.D2)({abi:Z.WW,address:null===(t=B.iK[n])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.vault,functionName:"owner",enabled:!!s});return!!s&&s==a}(),o=function(){var e,t;let n=(0,D.p)(),{address:s}=(0,b.mA)(),{data:a}=(0,F.D2)({abi:Z.Og,address:null===(t=B.iK[n])||void 0===t?void 0:null===(e=t[0])||void 0===e?void 0:e.assetTokenFeed,functionName:"isTester",args:[s],enabled:!!s});return!!a}(),m=(0,a.useMemo)(()=>{let e=[{href:"/early",label:"Early Access",icon:K.bBF},{href:"/vaults",label:"Vaults",icon:K.QZG},{href:"/earn",label:"Earn",icon:K.j0p},{href:"/discount",label:"Discount Offer",icon:K.nlc},{href:"/dashboard",label:"Dashboard",icon:K.FL4}];return d&&e.push({href:"/admin",label:"Admin",icon:K.C5v}),o&&e.push({href:"/tester",label:"Tester",icon:K.rv8}),e},[d,o]),{chain:h}=(0,b.LN)(),u=!h||h.unsupported||i.Af.length<=1;return(0,s.jsxs)("header",{className:"h-[72px] fixed w-full max-w-[1440px] inset-0 mx-auto flex items-center justify-between px-4 bg-slate-50/30 backdrop-blur-lg z-30 ml-[calc(100vw - 100%)]",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)(O(),{href:"/",className:"font-semibold flex pr-1 items-center text-base leading-7",children:[(0,s.jsx)(T(),{className:"",src:"/logo-alt.svg",height:52,width:52,alt:"wand logo image only"}),(0,s.jsx)("span",{className:"font-poppins",style:{display:n?"none":"inline-block"},children:"Wand"})]}),(0,s.jsxs)(z.fC,{children:[(0,s.jsxs)(z.xz,{className:(0,H.Z)("flex text-slate-500 font-medium items-center capitalize text-sm",{hidden:!n}),children:[e.split("/")[1],(0,s.jsx)(Q.YRR,{})]}),(0,s.jsx)(z.Uv,{children:(0,s.jsx)(z.VY,{className:"z-50 bg-white p-1 border border-slate-200 shadow-lg rounded-md",children:m.map(e=>{let{href:t,label:n,icon:a}=e;return(0,s.jsx)(z.ck,{children:(0,s.jsxs)(O(),{className:"flex items-center text-slate-500 text-sm font-medium gap-1 px-3 py-2 rounded-sm hover:bg-slate-50",href:t,children:[(0,s.jsx)(a,{}),n]})},n)})})})]})]}),"/"!==e?(0,s.jsx)("div",{className:"hidden lg:flex flex-1 px-5 items-center justify-between",children:m.map(t=>{let{href:n,label:a,icon:i}=t;return(0,s.jsxs)(O(),{className:(0,H.Z)("text-sm font-medium flex gap-1 mx-auto items-center transition-all active:translate-y-1",e==="/".concat(n)?"text-slate-700":"text-slate-500"),href:n,children:[(0,s.jsx)(i,{}),a]},n)})}):null,(0,s.jsxs)("div",{className:"flex items-center gap-1 md:gap-4",children:[(0,s.jsx)("div",{className:"hidden lg:flex items-center gap-3",children:V.map(e=>{let{url:t,icon:n,name:a}=e;return(0,s.jsx)(O(),{href:t,className:"text-slate-300 hover:text-indigo-500",children:(0,s.jsx)(n,{})},a)})}),u&&(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm text-slate-500 font-medium rounded-full cursor-pointer",onClick:()=>c&&c(),children:[(0,s.jsx)(T(),{width:24,height:24,src:q[l],alt:""}),(0,s.jsx)("div",{className:"hidden sm:block",children:Y[l]})]}),"/"===e?(0,s.jsx)(O(),{href:"/vaults",className:"h-fit bg-indigo-500 text-white text-sm leading-6 font-medium px-4 py-2 rounded-full whitespace-nowrap",children:"Launch App"}):(0,s.jsx)(M.Z,{})]})]})}var G=n(71424);function PageLayout(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(Providers,{children:[(0,s.jsx)(Header,{}),(0,s.jsx)("div",{className:"min-h-[calc(100vh+1px)] h-auto pt-[80px] pb-6",children:t})]}),(0,s.jsx)(G.x,{position:"top-right",offset:70})]})}},34776:function(e,t,n){"use strict";n.d(t,{Z:function(){return ConnectBtn}});var s=n(57437),a=n(14701),i=n(1044);function ConnectBtn(){let e=(0,i.Z)(1024);return(0,s.jsx)(a.NL,{chainStatus:e.width>600?"full":"icon",showBalance:!1})}},72853:function(){}},function(e){e.O(0,[1866,9472,3033,1465,1439,336,2536,590,6631,8666,1261,2971,2472,1744],function(){return e(e.s=39473)}),_N_E=e.O()}]);