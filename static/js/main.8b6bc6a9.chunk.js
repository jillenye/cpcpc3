(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(t,n){},255:function(t,n){},273:function(t,n){},275:function(t,n){},294:function(t,n){},295:function(t,n){},358:function(t,n){},360:function(t,n){},393:function(t,n){},395:function(t,n){},396:function(t,n){},401:function(t,n){},403:function(t,n){},409:function(t,n){},411:function(t,n){},424:function(t,n){},436:function(t,n){},439:function(t,n){},444:function(t,n){},452:function(t,n){},461:function(t,n){},463:function(t,n){},533:function(t,n,e){},534:function(t,n,e){"use strict";e.r(n);var c,o,r,a,i,s,l,u,d,p,x,h,b,j,f,g,O=e(1),m=e(85),y=e.n(m),C=e(16),v=e.n(C),w=e(43),A=e(69),S=e(14),E=e(58),T=e(68),N=e.n(T),_=e(220),k=e.n(_),M=e(70),D=e(221),I=e(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},t),{},{account:n.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},F=Object(M.b)({blockchain:R,data:P}),U=[D.a],W=Object(M.c)(M.a.apply(void 0,U)),Y=Object(M.d)(F,W),z=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(w.a)(v.a.mark((function t(n){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(z("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(w.a)(v.a.mark((function n(e){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(B());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Q=e(15),q=Q.a.div(c||(c=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),X=Q.a.div(o||(o=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(r||(r=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(a||(a=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=Q.a.p(l||(l=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nt=(Q.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),et=(Q.a.div(p||(p=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),ct=Q.a.button(x||(x=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ot=Q.a.button(h||(h=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.div(b||(b=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),at=Q.a.img(j||(j=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 1000px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=(Q.a.img(f||(f=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),Q.a.a(g||(g=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var st=function(){var t,n,e=Object(E.b)(),c=Object(E.c)((function(t){return t.blockchain})),o=Object(E.c)((function(t){return t.data})),r=Object(O.useState)(!1),a=Object(A.a)(r,2),i=a[0],s=a[1],l=Object(O.useState)("Click buy to mint your NFT."),u=Object(A.a)(l,2),d=u[0],p=u[1],x=Object(O.useState)(1),h=Object(A.a)(x,2),b=h[0],j=h[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(A.a)(f,2),m=g[0],y=g[1],C=function(){""!==c.account&&null!==c.smartContract&&e(B(c.account))},S=function(){var t=Object(w.a)(v.a.mark((function t(){var n,e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,y(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.useEffect)((function(){S()}),[]),Object(O.useEffect)((function(){C()}),[c.account]),Object(et.jsx)(q,{children:Object(et.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(et.jsx)(at,{alt:"logo",src:"/config/images/logo.png"}),Object(et.jsx)(J,{}),Object(et.jsxs)(rt,{flex:1,style:{padding:24},test:!0,children:[Object(et.jsx)(Z,{}),Object(et.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(et.jsxs)(tt,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[o.totalSupply," / ",m.MAX_SUPPLY]}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(et.jsx)(it,{target:"_blank",href:m.SCAN_LINK,children:(t=m.CONTRACT_ADDRESS,n=15,t.length>n?"".concat(t.substring(0,n),"..."):t)})}),Object(et.jsx)(J,{}),Number(o.totalSupply)>=m.MAX_SUPPLY?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(et.jsx)(J,{}),Object(et.jsx)(it,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(et.jsx)(X,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Camera Person Community Photography Collection: First Collection is a body of work produced from the members of the Camera Person NFT community.  The collection features 120 photographs from 120 artists, with work from 39 countries.  This will be a blind mint meaning that the reveal of the photographs minted will happen once the collection is fully minted out.  100% of the proceeds from the work minted will go to the artists that produced the work for the collection.  We appreciate you so much for being a part of this."}),Object(et.jsx)(J,{}),""===c.account||null===c.smartContract?Object(et.jsxs)($,{ai:"center",jc:"center",children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(et.jsx)(J,{}),Object(et.jsx)(ct,{onClick:function(t){t.preventDefault(),e(function(){var t=Object(w.a)(v.a.mark((function t(n){var e,c,o,r,a,i,s,l,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=t.sent,t.next=12,o.json();case 12:if(r=t.sent,a=window,!(i=a.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==r.NETWORK.ID?(u=new N.a(c,r.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){n(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(H("Change network to ".concat(r.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(H("Something went wrong."));case 31:t.next=34;break;case 33:n(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),C()},children:"CONNECT"}),""!==c.errorMsg?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(J,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(et.jsx)(ot,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b-1;t<1&&(t=1),j(t)}()},children:"-"}),Object(et.jsx)(V,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(et.jsx)(V,{}),Object(et.jsx)(ot,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=b+1;t>10&&(t=10),j(t)}()},children:"+"})]}),Object(et.jsx)(J,{}),Object(et.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(et.jsx)(ct,{disabled:i?1:0,onClick:function(t){t.preventDefault(),function(){var t=m.WEI_COST,n=m.GAS_LIMIT,o=String(t*b),r=String(n*b);console.log("Cost: ",o),console.log("Gas limit: ",r),p("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(b).send({gasLimit:String(r),to:m.CONTRACT_ADDRESS,from:c.account,value:o}).once("error",(function(t){console.log(t),p("Sorry, something went wrong please try again later."),s(!1)})).then((function(t){console.log(t),p("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(B(c.account))}))}(),C()},children:i?"BUSY":"BUY"})})]})]}),Object(et.jsx)(V,{})]}),Object(et.jsx)(Z,{})]}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",m.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(et.jsx)(J,{}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},lt=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(n){var e=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;e(t),c(t),o(t),r(t),a(t)}))};e(533);y.a.render(Object(et.jsx)(E.a,{store:Y,children:Object(et.jsx)(st,{})}),document.getElementById("root")),lt()}},[[534,1,2]]]);
//# sourceMappingURL=main.8b6bc6a9.chunk.js.map