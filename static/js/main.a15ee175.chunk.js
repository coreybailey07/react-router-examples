(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{30:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(11),i=c.n(r),j=c(1),s=(c(30),c(5)),l=c(0);function o(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/dashboard",children:"Dashboard"})})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:"/",children:Object(l.jsx)(b,{})}),Object(l.jsx)(s.c,{path:"/about",children:Object(l.jsx)(a,{})}),Object(l.jsx)(s.c,{path:"/dashboard",children:Object(l.jsx)(h,{})})]})]})})}function b(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Home"})})}function a(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"About"})})}function h(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Dashboard"})})}function d(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Accounts"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/netflix",children:"Netflix"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/zillow-group",children:"Zillow Group"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/yahoo",children:"Yahoo"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/modus-create",children:"Modus Create"})})]}),Object(l.jsx)(s.f,{children:Object(l.jsx)(s.c,{path:"/:id",children:Object(l.jsx)(x,{})})})]})})}function x(){var e=Object(s.k)().id;return Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:["ID: ",e]})})}function O(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/topics",children:"Topics"})})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:"/",children:Object(l.jsx)(u,{})}),Object(l.jsx)(s.c,{path:"/topics",children:Object(l.jsx)(p,{})})]})]})})}function u(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Home"})})}function p(){var e=Object(s.l)(),t=e.path,c=e.url;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Topics"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"".concat(c,"/rendering"),children:"Rendering with React"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"".concat(c,"/components"),children:"Components"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"".concat(c,"/props-v-state"),children:"Props v. State"})})]}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:t,children:Object(l.jsx)("h3",{children:"Please select a topic."})}),Object(l.jsx)(s.c,{path:"".concat(t,"/:topicId"),children:Object(l.jsx)(f,{})})]})]})}function f(){var e=Object(s.k)().topicId;return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:e})})}var m=c(4),v=c(23),g=c(13);function k(){return Object(l.jsx)(C,{children:Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(S,{}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/public",children:"Public Page"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/protected",children:"Protected Page"})})]}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{path:"/public",children:Object(l.jsx)(A,{})}),Object(l.jsx)(s.c,{path:"/login",children:Object(l.jsx)(I,{})}),Object(l.jsx)(T,{path:"/protected",children:Object(l.jsx)(P,{})})]})]})})})}var y={isAuthenticated:!1,signin:function(e){y.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){y.isAuthenticated=!1,setTimeout(e,100)}},w=Object(n.createContext)();function C(e){var t=e.children,c=function(){var e=Object(n.useState)(null),t=Object(g.a)(e,2),c=t[0],r=t[1];return{user:c,signin:function(e){return y.signin((function(){r("user"),e()}))},signout:function(e){return y.signout((function(){r(null),e()}))}}}();return Object(l.jsx)(w.Provider,{value:c,children:t})}function N(){return Object(n.useContext)(w)}function S(){var e=Object(s.i)(),t=N();return t.user?Object(l.jsxs)("p",{children:["Welcome!"," ",Object(l.jsx)("button",{onClick:function(){t.signout((function(){return e.push("/")}))},children:"Sign out"})]}):Object(l.jsx)("p",{children:"You are not logged in."})}function T(e){var t=e.children,c=Object(v.a)(e,["children"]),n=N();return Object(l.jsx)(s.c,Object(m.a)(Object(m.a)({},c),{},{render:function(e){var c=e.location;return n.user?t:Object(l.jsx)(s.b,{to:{pathname:"/login",state:{from:c}}})}}))}function A(){return Object(l.jsx)("h3",{children:"Public"})}function P(){return Object(l.jsx)("h3",{children:"Protected"})}function I(){var e=Object(s.i)(),t=Object(s.j)(),c=N(),n=(t.state||{from:{pathname:"/"}}).from;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["You must log in to view the page at ",n.pathname]}),Object(l.jsx)("button",{onClick:function(){c.signin((function(){e.replace(n)}))},children:"Log in"})]})}function H(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(B,{activeOnlyWhenExact:!0,to:"/",label:"Home"}),Object(l.jsx)(B,{to:"/about",label:"About"}),Object(l.jsx)("hr",{}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:"/",children:Object(l.jsx)(D,{})}),Object(l.jsx)(s.c,{path:"/about",children:Object(l.jsx)(M,{})})]})]})})}function B(e){var t=e.label,c=e.to,n=e.activeOnlyWhenExact,r=Object(s.l)({path:c,exact:n});return Object(l.jsxs)("div",{className:r?"active":"",children:[r&&"> ",Object(l.jsx)(j.b,{to:c,children:t})]})}function D(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Home"})})}function M(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"About"})})}function F(){return Object(l.jsxs)(j.a,{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:"Form"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/one",children:"One"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/two",children:"Two"})})]}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{path:"/",exact:!0,children:Object(l.jsx)(G,{})}),Object(l.jsx)(s.c,{path:"/one",children:Object(l.jsx)("h3",{children:"One"})}),Object(l.jsx)(s.c,{path:"/two",children:Object(l.jsx)("h3",{children:"Two"})})]})]})}function G(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),c=t[0],r=t[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),r(!1)},children:[Object(l.jsx)(s.a,{when:c,message:function(e){return"Are you sure you want to go to ".concat(e.pathname)}}),Object(l.jsxs)("p",{children:["Blocking?"," ",c?"Yes, click a link or the back button":"Nope"]}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{size:"50",placeholder:"type something to block transitions",onChange:function(e){r(e.target.value.length>0)}})}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{children:"Submit to stop blocking"})})]})}function L(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/old-match",children:"Old Match, to be redirected"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/will-match",children:"Will Match"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/will-not-match",children:"Will Not Match"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/also/will/not/match",children:"Also Will Not Match"})})]}),Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:"/",children:Object(l.jsx)(W,{})}),Object(l.jsx)(s.c,{path:"/old-match",children:Object(l.jsx)(s.b,{to:"/will-match"})}),Object(l.jsx)(s.c,{path:"/will-match",children:Object(l.jsx)(q,{})}),Object(l.jsx)(s.c,{path:"*",children:Object(l.jsx)(z,{})})]})]})})}function W(){return Object(l.jsx)("h3",{children:"Home"})}function q(){return Object(l.jsx)("h3",{children:"Matched!"})}function z(){var e=Object(s.j)();return Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:["No match for ",Object(l.jsx)("code",{children:e.pathname})]})})}function R(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{path:"/:id",children:Object(l.jsx)(Y,{})}),Object(l.jsx)(s.c,{path:"/",children:Object(l.jsx)(s.b,{to:"/0"})})]})})}function Y(){var e=Object(s.l)().url,t=Object(s.k)().id,c=J(parseInt(t));return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:[c.name,"\u2019s Friends"]}),Object(l.jsx)("ul",{children:c.friends.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"".concat(e,"/").concat(t),children:J(t).name})},t)}))}),Object(l.jsx)(s.f,{children:Object(l.jsx)(s.c,{path:"".concat(e,"/:id"),children:Object(l.jsx)(Y,{})})})]})}var E=[{id:0,name:"Michelle",friends:[1,2,3]},{id:1,name:"Sean",friends:[0,3]},{id:2,name:"Kim",friends:[0,1,3]},{id:3,name:"David",friends:[1,2]}];function J(e){return E.find((function(t){return t.id===e}))}var Z=[{path:"/",exact:!0,sidebar:function(){return Object(l.jsx)("div",{children:"home!"})},main:function(){return Object(l.jsx)("h2",{children:"Home"})}},{path:"/bubblegum",sidebar:function(){return Object(l.jsx)("div",{children:"bubblegum!"})},main:function(){return Object(l.jsx)("h2",{children:"Bubblegum"})}},{path:"/shoelaces",sidebar:function(){return Object(l.jsx)("div",{children:"shoelaces!"})},main:function(){return Object(l.jsx)("h2",{children:"Shoelaces"})}}];function K(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{style:{display:"flex"},children:[Object(l.jsxs)("div",{style:{padding:"10px",width:"40%",background:"#f0f0f0"},children:[Object(l.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/bubblegum",children:"Bubblegum"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/shoelaces",children:"Shoelaces"})})]}),Object(l.jsx)(s.f,{children:Z.map((function(e,t){return Object(l.jsx)(s.c,{path:e.path,exact:e.exact,children:Object(l.jsx)(e.sidebar,{})},t)}))})]}),Object(l.jsx)("div",{style:{flex:1,padding:"10px"},children:Object(l.jsx)(s.f,{children:Z.map((function(e,t){return Object(l.jsx)(s.c,{path:e.path,exact:e.exact,children:Object(l.jsx)(e.main,{})},t)}))})})]})})}c(37);var U=c(43),V=c(42);function Q(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:"/",children:Object(l.jsx)(s.b,{to:"/hsl/10/90/50"})}),Object(l.jsx)(s.c,{path:"*",children:Object(l.jsx)(X,{})})]})})}function X(){var e=Object(s.j)();return Object(l.jsxs)("div",{style:te.fill,children:[Object(l.jsxs)("ul",{style:te.nav,children:[Object(l.jsx)($,{to:"/hsl/10/90/50",children:"Red"}),Object(l.jsx)($,{to:"/hsl/120/100/40",children:"Green"}),Object(l.jsx)($,{to:"/rgb/33/150/243",children:"Blue"}),Object(l.jsx)($,{to:"/rgb/240/98/146",children:"Pink"})]}),Object(l.jsx)("div",{style:te.content,children:Object(l.jsx)(U.a,{children:Object(l.jsx)(V.a,{classNames:"fade",timeout:300,children:Object(l.jsxs)(s.f,{location:e,children:[Object(l.jsx)(s.c,{path:"/hsl/:h/:s/:l",children:Object(l.jsx)(_,{})}),Object(l.jsx)(s.c,{path:"/rgb/:r/:g/:b",children:Object(l.jsx)(ee,{})})]})},e.key)})})]})}function $(e){return Object(l.jsx)("li",{style:te.navItem,children:Object(l.jsx)(j.b,Object(m.a)(Object(m.a)({},e),{},{style:{color:"inherit"}}))})}function _(){var e=Object(s.k)(),t=e.h,c=e.s,n=e.l;return Object(l.jsxs)("div",{style:Object(m.a)(Object(m.a)(Object(m.a)({},te.fill),te.hsl),{},{background:"hsl(".concat(t,", ").concat(c,"%, ").concat(n,"%)")}),children:["hsl(",t,", ",c,"%, ",n,"%)"]})}function ee(){var e=Object(s.k)(),t=e.r,c=e.g,n=e.b;return Object(l.jsxs)("div",{style:Object(m.a)(Object(m.a)(Object(m.a)({},te.fill),te.rgb),{},{background:"rgb(".concat(t,", ").concat(c,", ").concat(n,")")}),children:["rgb(",t,", ",c,", ",n,")"]})}var te={fill:{position:"absolute",left:0,right:0,top:0,bottom:0}};te.content=Object(m.a)(Object(m.a)({},te.fill),{},{top:"40px",textAlign:"center",height:"300px"}),te.nav={padding:0,margin:0,position:"absolute",top:0,height:"40px",width:"100%",display:"flex"},te.navItem={textAlign:"center",flex:1,listStyleType:"none",padding:"10px"},te.hsl=Object(m.a)(Object(m.a)({},te.fill),{},{color:"white",paddingTop:"20px",fontSize:"30px"}),te.rgb=Object(m.a)(Object(m.a)({},te.fill),{},{color:"white",paddingTop:"20px",fontSize:"30px"});var ce=[{path:"/sandwiches",component:function(){return Object(l.jsx)("h2",{children:"Sandwiches"})}},{path:"/tacos",component:function(e){var t=e.routes;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Tacos"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/tacos/bus",children:"Bus"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/tacos/cart",children:"Cart"})})]}),Object(l.jsx)(s.f,{children:t.map((function(e,t){return Object(l.jsx)(re,Object(m.a)({},e),t)}))})]})},routes:[{path:"/tacos/bus",component:function(){return Object(l.jsx)("h3",{children:"Bus"})}},{path:"/tacos/cart",component:function(){return Object(l.jsx)("h3",{children:"Cart"})}}]}];function ne(){return Object(l.jsx)(j.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/tacos",children:"Tacos"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/sandwiches",children:"Sandwiches"})})]}),Object(l.jsx)(s.f,{children:ce.map((function(e,t){return Object(l.jsx)(re,Object(m.a)({},e),t)}))})]})})}function re(e){return Object(l.jsx)(s.c,{path:e.path,render:function(t){return Object(l.jsx)(e.component,Object(m.a)(Object(m.a)({},t),{},{routes:e.routes}))}})}function ie(){return Object(l.jsx)(j.a,{children:Object(l.jsx)(je,{})})}function je(){var e=Object(s.j)(),t=e.state&&e.state.background;return Object(l.jsxs)("div",{children:[Object(l.jsxs)(s.f,{location:t||e,children:[Object(l.jsx)(s.c,{exact:!0,path:"/",children:Object(l.jsx)(be,{})}),Object(l.jsx)(s.c,{path:"/gallery",children:Object(l.jsx)(ae,{})}),Object(l.jsx)(s.c,{path:"/img/:id",children:Object(l.jsx)(he,{})})]}),t&&Object(l.jsx)(s.c,{path:"/img/:id",children:Object(l.jsx)(de,{})})]})}var se=[{id:0,title:"Dark Orchid",color:"DarkOrchid"},{id:1,title:"Lime Green",color:"LimeGreen"},{id:2,title:"Tomato",color:"Tomato"},{id:3,title:"Seven Ate Nine",color:"#789"},{id:4,title:"Crimson",color:"Crimson"}];function le(e){var t=e.color;return Object(l.jsx)("div",{style:{width:50,height:50,background:t}})}function oe(e){var t=e.color;return Object(l.jsx)("div",{style:{width:"100%",height:400,background:t}})}function be(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j.b,{to:"/gallery",children:"Visit the Gallery"}),Object(l.jsx)("h2",{children:"Featured Images"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/img/2",children:"Tomato"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/img/4",children:"Crimson"})})]})]})}function ae(){var e=Object(s.j)();return Object(l.jsx)("div",{children:se.map((function(t){return Object(l.jsxs)(j.b,{to:{pathname:"/img/".concat(t.id),state:{background:e}},children:[Object(l.jsx)(le,{color:t.color}),Object(l.jsx)("p",{children:t.title})]},t.id)}))})}function he(){var e=Object(s.k)().id,t=se[parseInt(e,10)];return t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:t.title}),Object(l.jsx)(oe,{color:t.color})]}):Object(l.jsx)("div",{children:"Image not found"})}function de(){var e=Object(s.i)(),t=Object(s.k)().id,c=se[parseInt(t,10)];if(!c)return null;var n=function(t){t.stopPropagation(),e.goBack()};return Object(l.jsx)("div",{onClick:n,style:{position:"absolute",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.15)"},children:Object(l.jsxs)("div",{className:"modal",style:{position:"absolute",background:"#fff",top:25,left:"10%",right:"10%",padding:15,border:"2px solid #444"},children:[Object(l.jsx)("h1",{children:c.title}),Object(l.jsx)(oe,{color:c.color}),Object(l.jsx)("button",{type:"button",onClick:n,children:"Close"})]})})}var xe=c(20),Oe=c(21),ue=c(24),pe=c(22);function fe(e){return Object(l.jsx)(s.c,{render:function(t){var c=t.staticContext;return c&&(c.statusCode=e.statusCode),Object(l.jsx)("div",{children:e.children})}})}function me(e){return Object(l.jsxs)("p",{children:["Static context: ",JSON.stringify(e.staticContext)]})}var ve=function(e){Object(ue.a)(c,e);var t=Object(pe.a)(c);function c(){var e;Object(xe.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).staticContext={},e}return Object(Oe.a)(c,[{key:"render",value:function(){return Object(l.jsx)(s.e,{location:"/foo",context:this.staticContext,children:Object(l.jsx)("div",{children:Object(l.jsxs)(fe,{statusCode:404,children:[Object(l.jsx)("p",{children:"Route with statusCode 404"}),Object(l.jsx)(me,{staticContext:this.staticContext})]})})})}}]),c}(n.Component);function ge(){return Object(l.jsx)(j.a,{children:Object(l.jsx)(ke,{})})}function ke(){var e=new URLSearchParams(Object(s.j)().search);return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Accounts"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/account?name=netflix",children:"Netflix"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/account?name=zillow-group",children:"Zillow Group"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/account?name=yahoo",children:"Yahoo"})}),Object(l.jsx)("li",{children:Object(l.jsx)(j.b,{to:"/account?name=modus-create",children:"Modus Create"})})]}),Object(l.jsx)(ye,{name:e.get("name")})]})})}function ye(e){var t=e.name;return Object(l.jsx)("div",{children:t?Object(l.jsxs)("h3",{children:["The ",Object(l.jsx)("code",{children:"name"}),' in the query string is "',t,'"']}):Object(l.jsx)("h3",{children:"There is no name in the query string"})})}c(38),c(39);var we=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)(j.b,{className:"link",to:"/react-router/animate-transitions",children:"animate-transitions"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/basic",children:"basic"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/custom-link",children:"custom-link"}),Object(l.jsx)(j.b,{className:"link disabled",to:"/react-router/model-gallery",children:"model-gallery"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/nesting",children:"nesting"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/no-match-40",children:"no-match-40"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/preventing-transitions",children:"preventing-transitions"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/query-parameter",children:"query-parameter"}),Object(l.jsx)(j.b,{className:"link disabled",to:"/react-router/recursive-paths",children:"recursive-paths"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/redirects-auth",children:"redirects-auth"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/route-config",children:"route-config"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/sidebar",children:"sidebar"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/static-router-context",children:"static-router-context"}),Object(l.jsx)(j.b,{className:"link",to:"/react-router/url-parameter",children:"url-parameter"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("main",{children:Object(l.jsxs)(s.f,{children:[Object(l.jsx)(s.c,{exact:!0,path:"/react-router/animate-transitions",component:Q}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/basic",component:o}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/custom-link",component:H}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/model-gallery",component:ie}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/nesting",component:O}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/no-match-40",component:L}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/preventing-transitions",component:F}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/query-parameter",component:ge}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/recursive-paths",component:R}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/redirects-auth",component:k}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/route-config",component:ne}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/sidebar",component:K}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/static-router-context",component:ve}),Object(l.jsx)(s.c,{exact:!0,path:"/react-router/url-parameter",component:d})]})})]})},Ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),r(e),i(e),j(e)}))};i.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(we,{})}),document.getElementById("root")),Ce()}},[[40,1,2]]]);
//# sourceMappingURL=main.a15ee175.chunk.js.map