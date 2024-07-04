(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8977],{46601:function(){},20750:function(e,t,a){"use strict";let n;a.d(t,{aw:function(){return getBlastPoints},l3:function(){return getInviteCodes},dH:function(){return getInvitees},Vm:function(){return getPtypoolYields},Zr:function(){return getRank},V_:function(){return getUserState},M0:function(){return refreshInviteCode},n$:function(){return userLogin}});var s=a(44383),o=a(92173);let instance=()=>(n&&n.defaults.baseURL==="https://earlyaccess-beta.".concat(s.Kh.value,"/api")||(n=o.Z.create({baseURL:"https://earlyaccess-beta.".concat(s.Kh.value,"/api"),timeout:1e4,headers:{"Content-Type":"application/json"}})),n);var r={get:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let s=await instance().get(e,{...n,params:a});if(console.info("res:",null==s?void 0:s.data),(null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.code)!==200)throw s.data;return s.data.data},post:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let s=await instance().post(e,a,n);if((null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.code)!==200)throw s.data;return s.data.data}};let getRank=async()=>{let e=await r.get("/common/leader");return e},userLogin=async e=>{let t=await r.post("/auth/register",{code:e});return t},getUserState=async()=>{let e=await r.get("/auth/userState");return e},getBlastPoints=async()=>{let e=await r.get("/auth/blastPoints");return e},getInviteCodes=async()=>{let e=await r.get("/auth/invite/codes");return e},getInvitees=async()=>{let e=await r.get("/auth/invitees");return e},refreshInviteCode=async()=>(await r.post("/auth/invite/code/create"),getInviteCodes()),getPtypoolYields=async()=>{let e=await r.get("/common/ptypool/yields");return e}},23653:function(e,t,a){"use strict";a.d(t,{l:function(){return getTokens}});var n=a(72009);let getTokens=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return n.iK[e].map(e=>({symbol:e.assetTokenSymbol,address:e.assetTokenAddress})).concat(n.iK[e].map(e=>({symbol:e.xTokenSymbol,address:e.xTokenAddress}))).concat([{symbol:"USB",address:n.O1[e]}]).concat((n.VQ[e]||[]).map(e=>({symbol:e.assetTokenSymbol,address:e.assetToken}))).filter(e=>!t||"ETH"!==e.symbol)}},8580:function(e,t,a){"use strict";a.d(t,{Hj:function(){return o},Pq:function(){return r},pn:function(){return l},v:function(){return s},xb:function(){return DOC_LINK}});var n=a(44383);let s="https://twitter.com/WandProtocol",o="https://discord.gg/fy6A7JCE5N",r=BigInt(1e18),l=864e5,DOC_LINK=()=>"https://docs.".concat(n.Kh.value)},44383:function(e,t,a){"use strict";a.d(t,{Kh:function(){return s},Vi:function(){return useConfigDomain}});var n=a(2265);let s={value:"wand.fi"},o=["wand.fi","wandfi.xyz"],getAvilableDomain=()=>{var e;if("localhost"==location.hostname||(null===(e=location.hostname.match(/^\d+\.\d+\.\d+\.\d+$/))||void 0===e?void 0:e.length)==1)return o[0];let t=location.hostname.split("."),a=t.slice(-2).join(".");return("ipns"==t[1]&&(a=t[0].replaceAll("-",".")),o.includes(a))?location.hostname:o[0]};function useConfigDomain(){(0,n.useEffect)(()=>{s.value=getAvilableDomain()},[])}},23862:function(e,t,a){"use strict";a.d(t,{b:function(){return useMemoOfChainId}});var n=a(2265),s=a(14389);function useMemoOfChainId(e){let t=(0,s.p)(),a=(0,n.useRef)({});return(0,n.useMemo)(()=>(a.current[t]||(a.current[t]=e()),a.current[t]),[t])}},86825:function(e,t,a){"use strict";a.d(t,{i:function(){return i},p:function(){return useUpdatePtypoolApy}});var n=a(72009),s=a(8580),o=a(2265),r=a(43977),l=a(94660),u=a(14389);let i=(0,l.Ue)(e=>({update:e}));function useUpdatePtypoolApy(e,t,a){let l=(0,u.p)(),d=n.iK[l],c=Object.values(e).reduce((e,t)=>t.totalStake+e,0n),{update:m}=i();(0,o.useEffect)(()=>{d.forEach(o=>{let u=a[o.vault];if(o.ptyPoolAboveAddress&&e[o.ptyPoolAboveAddress]&&m({[o.ptyPoolAboveAddress]:{staking:(0,r.v)("0.025",10),matching:0n}}),o.ptyPoolBelowAddress&&e[o.ptyPoolBelowAddress]){let a=e[o.ptyPoolBelowAddress].totalStake*t[n.O1[l]];console.info("hhh:",a);let r=a>0n&&u.settingsDecimals>0n?u.M_ETHx*u.Y*t[o.xTokenAddress]*s.Pq/2n/a/u.settingsDecimals**10n:0n;m({[o.ptyPoolBelowAddress]:{staking:r*10n**10n/s.Pq,matching:0n}})}})},[d,c,e,t,a])}},47868:function(e,t,a){"use strict";a.d(t,{g:function(){return N},A:function(){return FetcherProvider}});var n=a(57437),s=a(82265),o=a(20750),r=a(72009),l=a(23653),u=a(8580),i=a(14389),d=a(2265),c=a(47337),m=a(32699),b=a(93362),f=a(91056),p=a(23862),v=a(81628),h=a(79037),g=a(54415),k=a(86825),y=a(2890),S=a.n(y),A=a(38092),T=a(21693),Y=a(42980),w=a(16775),P=a(23995);let N=(0,d.createContext)({balances:(0,v.Yb)({},0n),totalSupplies:(0,v.Yb)({},0n),prices:(0,v.Yb)({},0n),assetLocked:(0,v.Yb)({},0n),aar:(0,v.Yb)({},0),vaultUSBTotal:(0,v.Yb)({},0n),vaultsMode:(0,v.Yb)({},0),vaultsDiscount:(0,v.Yb)({},!1),vaultsState:(0,v.Yb)({},(0,v.Yb)({},0n)),stableVaultsState:(0,v.Yb)({},(0,v.Yb)({},0n)),earns:(0,v.Yb)({},0n),usbApr:{apr:0n,aprDecimals:10},plainVaultsStat:(0,v.Yb)({},(0,v.Yb)({},0n))}),FetcherProvider=e=>{let{children:t}=e,a=(0,g.hp)(),y=(0,i.p)();!function(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,c.m)({chainId:e});d.useMemo(()=>(t&&(f.ON.provider=function(e){var t,a;let{chain:n,transport:s}=e,o={chainId:n.id,name:n.name,ensAddress:null===(a=n.contracts)||void 0===a?void 0:null===(t=a.ensRegistry)||void 0===t?void 0:t.address};return"fallback"===s.type?new m.H(s.transports.map(e=>{let{value:t}=e;return new b.r(null==t?void 0:t.url,o)})):new b.r(s.url,o)}(t)),f.ON.provider),[t])}();let{address:B}=(0,h.m)(),{data:D}=(0,P.K)({address:B,chainId:y,query:{enabled:!!B,refetchOnMount:!1,refetchOnWindowFocus:!1},wandtime:a.time}),M=(0,d.useMemo)(()=>(0,l.l)(y),[y]),{data:C}=(0,g.uX)({contracts:[...M.map(e=>({address:e.address,abi:Y.Wo,functionName:"balanceOf",args:[B],chainId:y}))],query:{enabled:!!B}}),{data:E}=(0,g.uX)({contracts:[...M.map(e=>({address:e.address,abi:Y.Wo,functionName:"totalSupply",chainId:y}))]}),I=(0,p.b)(()=>(0,v.Yb)({},0n));I[r.K8]=(0,v.ok)(D,"value"),M.forEach((e,t)=>{I[e.address]=(0,v.ok)(C,[t,"result"])});let U=(0,p.b)(()=>(0,v.Yb)({},0n));M.forEach((e,t)=>{U[e.address]=(0,v.ok)(E,[t,"result"])});let _=r.iK[y],W=function(){let e=(0,i.p)(),t=r.iK[e],{data:a}=(0,g.uX)({contracts:[...t.map(e=>({vc:e,abi:s.nq,address:e.assetTokenFeed,functionName:"latestPrice"}))]}),{data:n}=(0,g.uX)({query:{gcTime:u.pn},contracts:[...t.map(e=>({abi:s.nq,address:e.assetTokenFeed,functionName:"decimals"}))]});return(0,d.useMemo)(()=>{let e={};return t.forEach((t,s)=>{let o=(0,v.ok)(a,[s,"result"]),r=(0,v.ok)(n,[s,"result"]);e[t.assetTokenAddress]=[o,r]}),e},[a,n,t])}(),{data:x}=(0,g.uX)({contracts:[..._.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"assetBalance"}))]}),{data:O}=(0,g.uX)({contracts:[..._.map(e=>({abi:s.WW,address:e.vault,functionName:"usbTotalSupply"}))]}),{data:q}=(0,g.uX)({contracts:[..._.map(e=>({vc:e,abi:s.Wn,address:r.O6[y],functionName:"AAR",args:[e.vault]}))]}),{data:K}=(0,g.uX)({query:{gcTime:u.pn},contracts:[..._.map(e=>({abi:s.WW,address:e.vault,functionName:"AARDecimals"}))]}),{data:X}=(0,g.uX)({contracts:[..._.map(e=>({abi:s.WW,address:e.vault,functionName:"vaultMode"}))]}),{data:R}=(0,g.uX)({contracts:[..._.map(e=>({vc:e,abi:s.Wn,address:r.O6[y],functionName:e.isStable?"getStableVaultState":"getVaultState",args:[e.vault]}))]}),{data:V}=(0,g.uX)({query:{gcTime:u.pn},contracts:[..._.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,T.$G)("Y",{size:32})]}))]}),F=(0,p.b)(()=>(0,v.Yb)({[r.O1[y]]:u.Pq},0n)),H=(0,p.b)(()=>(0,v.Yb)({},0n)),L=(0,p.b)(()=>(0,v.Yb)({},0n)),j=(0,p.b)(()=>(0,v.Yb)({},0n)),z=(0,p.b)(()=>(0,v.Yb)({},0)),$=(0,p.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n))),Z=(0,p.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n))),G=function(e,t,a){let n=(0,p.b)(()=>(0,v.Yb)({},!1)),o=(0,i.p)(),l=r.iK[o],{data:u}=(0,g.uX)({contracts:l.map(e=>({vc:e,abi:s.WW,address:e.vault,functionName:"paramValue",args:[(0,T.$G)("CircuitBreakPeriod",{size:32})]}))});return l.forEach((s,o)=>{if(s.isStable){let e=t[(null==s?void 0:s.vault)||"null"];n[s.vault]=e&&e.M_USDCx>0n&&e.aar<e.AARS}else{let t=(0,v.ok)(u,[o,"result"]),r=e[(null==s?void 0:s.vault)||"null"],l=a[(null==s?void 0:s.vault)||"null"],i=(0,v.ok)(r,"AARBelowCircuitBreakerLineTime"),d=2==l&&r&&((0,v.ok)(r,"aar")>=(0,v.ok)(r,"AARC")||BigInt(Math.floor(new Date().getTime()/1e3))-i>=t);n[s.vault]=d}}),n}($,Z,z);_.forEach((e,t)=>{var a,n,s;let o=(0,v.ok)(x,[t,"result"]),l=(0,v.ok)(O,[t,"result"]),i=(0,v.ok)(W[e.assetTokenAddress],[0]),d=(0,v.ok)(W[e.assetTokenAddress],[1]);j[e.vault]=l;let c=d>0n?i*u.Pq/10n**d:0n;F[e.assetTokenAddress]=c;let m=U[e.xTokenAddress],b=m>0n&&o>0n&&c>0n&&l>0n&&o*c>l*u.Pq?(o*c-l*u.Pq)/m:0n;m>0n&&o>0n&&c>0n&&l>0n&&o*c<l*u.Pq&&(F[r.O1[y]]=o*c/l),F[e.xTokenAddress]=b,H[e.assetTokenAddress]=o;let f=(0,w.b)((0,v.ok)(q,[t,"result"]),parseInt((0,v.ok)(K,[t,"result"]).toString()));L[e.vault]=parseFloat(f),e.isStable?Z[e.vault]=(0,v.Yb)({settingsDecimals:10n,...null==R?void 0:null===(n=R[t])||void 0===n?void 0:n.result,Y:(0,v.ok)(V,[t,"result"])},0n):$[e.vault]=(0,v.Yb)({settingsDecimals:10n,...null==R?void 0:null===(s=R[t])||void 0===s?void 0:s.result,Y:(0,v.ok)(V,[t,"result"])},0n);let p=Z[e.vault];z[e.vault]=e.isStable?p.aar<p.AARS&&p.M_USDC>0n?2:1:(null==X?void 0:null===(a=X[t])||void 0===a?void 0:a.result)||0});let Q=function(){let{address:e}=(0,h.m)(),t=(0,i.p)(),a=(0,d.useMemo)(()=>r.iK[t].filter(e=>!e.isStable&&e.ptyPoolAboveAddress&&e.ptyPoolBelowAddress).map(e=>[{poolAddress:e.ptyPoolBelowAddress,stakeSymbol:"USB",matchSymbol:e.assetTokenSymbol,earnSymbol:e.xTokenSymbol,earnForMatchSymbol:e.assetTokenSymbol},{poolAddress:e.ptyPoolAboveAddress,stakeSymbol:e.assetTokenSymbol,matchSymbol:"USB",earnSymbol:e.assetTokenSymbol,earnForMatchSymbol:e.xTokenSymbol}]).flat(),[t]),{data:n}=(0,g.uX)({query:{enabled:!!e},contracts:[...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"userStakingBalance",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchedToken",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedStakingYields",args:[e]}}),...a.map(t=>{let{poolAddress:a}=t;return{abi:s.aT,address:a,functionName:"earnedMatchingYields",args:[e]}})]}),{data:o}=(0,g.uX)({contracts:[...a.map(e=>{let{poolAddress:t}=e;return{abi:s.aT,address:t,functionName:"totalStakingBalance"}})]}),l=(0,p.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n)));return a.forEach((e,t)=>{let{poolAddress:s,stakeSymbol:r,matchSymbol:u,earnSymbol:i}=e,d=(0,v.ok)(n,[t,"result"]),c=(0,v.ok)(n,[t+a.length,"result"]),m=(0,v.ok)(n,[t+2*a.length,"result"]),b=(0,v.ok)(n,[t+3*a.length,"result"]),f=(0,v.ok)(o,[t,"result"]);l[s]={stakeSymbol:r,matchSymbol:u,earnSymbol:i,stake:d,match:c,earn:m,earnForMatch:b,totalStake:f}}),l}(),J=function(e,t){let a=(0,i.p)(),n=0,s=0n,o=0n;return r.iK[a].forEach(a=>{if(a.isStable){let e=t[a.vault];s+=e.M_USB_USDC*e.Y*e.aar/10n**e.AARDecimals,o+=e.M_USB_USDC,e.M_USB_USDC>0n&&e.Y>0n&&n++}else{let t=e[a.vault];s+=t.M_USB_ETH*t.Y,o+=t.M_USB_ETH,t.M_USB_ETH>0n&&t.Y>0n&&n++}}),{apr:o>0n?s/o:0n,aprDecimals:10}}($,Z);(0,d.useEffect)(()=>{setInterval(()=>{let e=g.hp.getState();S().now()-e.time>=36e5&&e.update()},36e5)},[]);let{value:ee={}}=(0,A.Z)(o.Vm,[a.time]);(0,k.p)(Q,F,$);let et=function(e){let t=(0,i.p)(),{address:a}=(0,h.m)(),n=r.VQ[t]||[],{data:o}=(0,g.uX)({contracts:[...n.map(e=>({abi:s.a4,address:e.vault,functionName:"totalSupply"})),...n.map(e=>({abi:s.a4,address:e.vault,functionName:"balanceOf",args:[a]}))]}),{data:l}=(0,g.uX)({contracts:[{abi:s.pE,address:"0xcD96262Df56127f298b452FA40759632868A472a",functionName:"latestRoundData",chainId:f.mx.id},{abi:s.pE,address:"0x0af23B08bcd8AD35D1e8e8f2D2B779024Bd8D24A",functionName:"latestRoundData",chainId:f.mx.id}]}),u=(0,v.ok)(l,[0,"result",1]),d=(0,v.ok)(l,[1,"result",1]),c=u*d*10n**2n,m=(0,p.b)(()=>(0,v.Yb)({},(0,v.Yb)({},0n)));return n.forEach((t,a)=>{"weETH"==t.assetTokenSymbol&&(e[t.assetToken]=c),m[t.vault]=m[t.vault],m[t.vault].totalSupply=(0,v.ok)(o,[a,"result"]),m[t.vault].userStaked=(0,v.ok)(o,[a+n.length,"result"])}),m}(F);return(0,n.jsx)(N.Provider,{value:{balances:I,totalSupplies:U,prices:F,assetLocked:H,aar:L,vaultUSBTotal:j,vaultsMode:z,vaultsDiscount:G,vaultsState:$,stableVaultsState:Z,earns:Q,usbApr:J,ptypoolYields:ee,plainVaultsStat:et},children:t})}}}]);