(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),j=c.n(n),r=c(11),i=c.n(r),s=c(2),l=(c(30),c(5)),o=(c(31),c(0));function b(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/dashboard",children:"Dashboard"})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{exact:!0,path:"/",children:Object(o.jsx)(h,{})}),Object(o.jsx)(l.c,{path:"/about",children:Object(o.jsx)(a,{})}),Object(o.jsx)(l.c,{path:"/dashboard",children:Object(o.jsx)(d,{})})]})]})})}function h(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Home"})})}function a(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"About"})})}function d(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Dashboard"})})}function x(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Accounts"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/netflix",children:"Netflix"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/zillow-group",children:"Zillow Group"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/yahoo",children:"Yahoo"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/modus-create",children:"Modus Create"})})]}),Object(o.jsx)(l.f,{children:Object(o.jsx)(l.c,{path:"/:id",children:Object(o.jsx)(O,{})})})]})})}function O(){var e=Object(l.k)().id;return Object(o.jsx)("div",{children:Object(o.jsxs)("h3",{children:["ID: ",e]})})}function u(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/topics",children:"Topics"})})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{exact:!0,path:"/",children:Object(o.jsx)(p,{})}),Object(o.jsx)(l.c,{path:"/topics",children:Object(o.jsx)(f,{})})]})]})})}function p(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Home"})})}function f(){var e=Object(l.l)(),t=e.path,c=e.url;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Topics"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"".concat(c,"/rendering"),children:"Rendering with React"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"".concat(c,"/components"),children:"Components"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"".concat(c,"/props-v-state"),children:"Props v. State"})})]}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{exact:!0,path:t,children:Object(o.jsx)("h3",{children:"Please select a topic."})}),Object(o.jsx)(l.c,{path:"".concat(t,"/:topicId"),children:Object(o.jsx)(m,{})})]})]})}function m(){var e=Object(l.k)().topicId;return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:e})})}var v=c(4),g=c(23),y=c(13);function k(){return Object(o.jsx)(S,{children:Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(A,{}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/public",children:"Public Page"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/protected",children:"Protected Page"})})]}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{path:"/public",children:Object(o.jsx)(I,{})}),Object(o.jsx)(l.c,{path:"/login",children:Object(o.jsx)(H,{})}),Object(o.jsx)(P,{path:"/protected",children:Object(o.jsx)(N,{})})]})]})})})}var w={isAuthenticated:!1,signin:function(e){w.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){w.isAuthenticated=!1,setTimeout(e,100)}},C=Object(n.createContext)();function S(e){var t=e.children,c=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),c=t[0],j=t[1];return{user:c,signin:function(e){return w.signin((function(){j("user"),e()}))},signout:function(e){return w.signout((function(){j(null),e()}))}}}();return Object(o.jsx)(C.Provider,{value:c,children:t})}function T(){return Object(n.useContext)(C)}function A(){var e=Object(l.i)(),t=T();return t.user?Object(o.jsxs)("p",{children:["Welcome!"," ",Object(o.jsx)("button",{onClick:function(){t.signout((function(){return e.push("/")}))},children:"Sign out"})]}):Object(o.jsx)("p",{children:"You are not logged in."})}function P(e){var t=e.children,c=Object(g.a)(e,["children"]),n=T();return Object(o.jsx)(l.c,Object(v.a)(Object(v.a)({},c),{},{render:function(e){var c=e.location;return n.user?t:Object(o.jsx)(l.b,{to:{pathname:"/login",state:{from:c}}})}}))}function I(){return Object(o.jsx)("h3",{children:"Public"})}function N(){return Object(o.jsx)("h3",{children:"Protected"})}function H(){var e=Object(l.i)(),t=Object(l.j)(),c=T(),n=(t.state||{from:{pathname:"/"}}).from;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["You must log in to view the page at ",n.pathname]}),Object(o.jsx)("button",{onClick:function(){c.signin((function(){e.replace(n)}))},children:"Log in"})]})}function B(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(M,{activeOnlyWhenExact:!0,to:"/",label:"Home"}),Object(o.jsx)(M,{to:"/about",label:"About"}),Object(o.jsx)("hr",{}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{exact:!0,path:"/",children:Object(o.jsx)(D,{})}),Object(o.jsx)(l.c,{path:"/about",children:Object(o.jsx)(F,{})})]})]})})}function M(e){var t=e.label,c=e.to,n=e.activeOnlyWhenExact,j=Object(l.l)({path:c,exact:n});return Object(o.jsxs)("div",{className:j?"active":"",children:[j&&"> ",Object(o.jsx)(s.b,{to:c,children:t})]})}function D(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Home"})})}function F(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"About"})})}function G(){return Object(o.jsxs)(s.a,{children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/",children:"Form"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/one",children:"One"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/two",children:"Two"})})]}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{path:"/",exact:!0,children:Object(o.jsx)(L,{})}),Object(o.jsx)(l.c,{path:"/one",children:Object(o.jsx)("h3",{children:"One"})}),Object(o.jsx)(l.c,{path:"/two",children:Object(o.jsx)("h3",{children:"Two"})})]})]})}function L(){var e=Object(n.useState)(!1),t=Object(y.a)(e,2),c=t[0],j=t[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),j(!1)},children:[Object(o.jsx)(l.a,{when:c,message:function(e){return"Are you sure you want to go to ".concat(e.pathname)}}),Object(o.jsxs)("p",{children:["Blocking?"," ",c?"Yes, click a link or the back button":"Nope"]}),Object(o.jsx)("p",{children:Object(o.jsx)("input",{size:"50",placeholder:"type something to block transitions",onChange:function(e){j(e.target.value.length>0)}})}),Object(o.jsx)("p",{children:Object(o.jsx)("button",{children:"Submit to stop blocking"})})]})}function W(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/old-match",children:"Old Match, to be redirected"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/will-match",children:"Will Match"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/will-not-match",children:"Will Not Match"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/also/will/not/match",children:"Also Will Not Match"})})]}),Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{exact:!0,path:"/",children:Object(o.jsx)(z,{})}),Object(o.jsx)(l.c,{path:"/old-match",children:Object(o.jsx)(l.b,{to:"/will-match"})}),Object(o.jsx)(l.c,{path:"/will-match",children:Object(o.jsx)(R,{})}),Object(o.jsx)(l.c,{path:"*",children:Object(o.jsx)(Y,{})})]})]})})}function z(){return Object(o.jsx)("h3",{children:"Home"})}function R(){return Object(o.jsx)("h3",{children:"Matched!"})}function Y(){var e=Object(l.j)();return Object(o.jsx)("div",{children:Object(o.jsxs)("h3",{children:["No match for ",Object(o.jsx)("code",{children:e.pathname})]})})}function q(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{path:"/:id",children:Object(o.jsx)(E,{})}),Object(o.jsx)(l.c,{path:"/",children:Object(o.jsx)(l.b,{to:"/0"})})]})})}function E(){var e=Object(l.l)().url,t=Object(l.k)().id,c=Z(parseInt(t));return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:[c.name,"\u2019s Friends"]}),Object(o.jsx)("ul",{children:c.friends.map((function(t){return Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"".concat(e,"/").concat(t),children:Z(t).name})},t)}))}),Object(o.jsx)(l.f,{children:Object(o.jsx)(l.c,{path:"".concat(e,"/:id"),children:Object(o.jsx)(E,{})})})]})}var J=[{id:0,name:"Michelle",friends:[1,2,3]},{id:1,name:"Sean",friends:[0,3]},{id:2,name:"Kim",friends:[0,1,3]},{id:3,name:"David",friends:[1,2]}];function Z(e){return J.find((function(t){return t.id===e}))}var K=[{path:"/",exact:!0,sidebar:function(){return Object(o.jsx)("div",{children:"home!"})},main:function(){return Object(o.jsx)("h2",{children:"Home"})}},{path:"/bubblegum",sidebar:function(){return Object(o.jsx)("div",{children:"bubblegum!"})},main:function(){return Object(o.jsx)("h2",{children:"Bubblegum"})}},{path:"/shoelaces",sidebar:function(){return Object(o.jsx)("div",{children:"shoelaces!"})},main:function(){return Object(o.jsx)("h2",{children:"Shoelaces"})}}];function U(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsxs)("div",{style:{padding:"10px",width:"40%",background:"#f0f0f0"},children:[Object(o.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/bubblegum",children:"Bubblegum"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/shoelaces",children:"Shoelaces"})})]}),Object(o.jsx)(l.f,{children:K.map((function(e,t){return Object(o.jsx)(l.c,{path:e.path,exact:e.exact,children:Object(o.jsx)(e.sidebar,{})},t)}))})]}),Object(o.jsx)("div",{style:{flex:1,padding:"10px"},children:Object(o.jsx)(l.f,{children:K.map((function(e,t){return Object(o.jsx)(l.c,{path:e.path,exact:e.exact,children:Object(o.jsx)(e.main,{})},t)}))})})]})})}c(38);var V=c(42),Q=c(41);function X(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)(l.f,{children:[Object(o.jsx)(l.c,{exact:!0,path:"/",children:Object(o.jsx)(l.b,{to:"/hsl/10/90/50"})}),Object(o.jsx)(l.c,{path:"*",children:Object(o.jsx)($,{})})]})})}function $(){var e=Object(l.j)();return Object(o.jsxs)("div",{style:ce.fill,children:[Object(o.jsxs)("ul",{style:ce.nav,children:[Object(o.jsx)(_,{to:"/hsl/10/90/50",children:"Red"}),Object(o.jsx)(_,{to:"/hsl/120/100/40",children:"Green"}),Object(o.jsx)(_,{to:"/rgb/33/150/243",children:"Blue"}),Object(o.jsx)(_,{to:"/rgb/240/98/146",children:"Pink"})]}),Object(o.jsx)("div",{style:ce.content,children:Object(o.jsx)(V.a,{children:Object(o.jsx)(Q.a,{classNames:"fade",timeout:300,children:Object(o.jsxs)(l.f,{location:e,children:[Object(o.jsx)(l.c,{path:"/hsl/:h/:s/:l",children:Object(o.jsx)(ee,{})}),Object(o.jsx)(l.c,{path:"/rgb/:r/:g/:b",children:Object(o.jsx)(te,{})})]})},e.key)})})]})}function _(e){return Object(o.jsx)("li",{style:ce.navItem,children:Object(o.jsx)(s.b,Object(v.a)(Object(v.a)({},e),{},{style:{color:"inherit"}}))})}function ee(){var e=Object(l.k)(),t=e.h,c=e.s,n=e.l;return Object(o.jsxs)("div",{style:Object(v.a)(Object(v.a)(Object(v.a)({},ce.fill),ce.hsl),{},{background:"hsl(".concat(t,", ").concat(c,"%, ").concat(n,"%)")}),children:["hsl(",t,", ",c,"%, ",n,"%)"]})}function te(){var e=Object(l.k)(),t=e.r,c=e.g,n=e.b;return Object(o.jsxs)("div",{style:Object(v.a)(Object(v.a)(Object(v.a)({},ce.fill),ce.rgb),{},{background:"rgb(".concat(t,", ").concat(c,", ").concat(n,")")}),children:["rgb(",t,", ",c,", ",n,")"]})}var ce={fill:{position:"absolute",left:0,right:0,top:0,bottom:0}};ce.content=Object(v.a)(Object(v.a)({},ce.fill),{},{top:"40px",textAlign:"center"}),ce.nav={padding:0,margin:0,position:"absolute",top:0,height:"40px",width:"100%",display:"flex"},ce.navItem={textAlign:"center",flex:1,listStyleType:"none",padding:"10px"},ce.hsl=Object(v.a)(Object(v.a)({},ce.fill),{},{color:"white",paddingTop:"20px",fontSize:"30px"}),ce.rgb=Object(v.a)(Object(v.a)({},ce.fill),{},{color:"white",paddingTop:"20px",fontSize:"30px"});var ne=[{path:"/sandwiches",component:function(){return Object(o.jsx)("h2",{children:"Sandwiches"})}},{path:"/tacos",component:function(e){var t=e.routes;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Tacos"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/tacos/bus",children:"Bus"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/tacos/cart",children:"Cart"})})]}),Object(o.jsx)(l.f,{children:t.map((function(e,t){return Object(o.jsx)(re,Object(v.a)({},e),t)}))})]})},routes:[{path:"/tacos/bus",component:function(){return Object(o.jsx)("h3",{children:"Bus"})}},{path:"/tacos/cart",component:function(){return Object(o.jsx)("h3",{children:"Cart"})}}]}];function je(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/tacos",children:"Tacos"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/sandwiches",children:"Sandwiches"})})]}),Object(o.jsx)(l.f,{children:ne.map((function(e,t){return Object(o.jsx)(re,Object(v.a)({},e),t)}))})]})})}function re(e){return Object(o.jsx)(l.c,{path:e.path,render:function(t){return Object(o.jsx)(e.component,Object(v.a)(Object(v.a)({},t),{},{routes:e.routes}))}})}function ie(){return Object(o.jsx)(s.a,{children:Object(o.jsx)(se,{})})}function se(){var e=Object(l.j)(),t=e.state&&e.state.background;return Object(o.jsxs)("div",{children:[Object(o.jsxs)(l.f,{location:t||e,children:[Object(o.jsx)(l.c,{exact:!0,path:"/",children:Object(o.jsx)(he,{})}),Object(o.jsx)(l.c,{path:"/gallery",children:Object(o.jsx)(ae,{})}),Object(o.jsx)(l.c,{path:"/img/:id",children:Object(o.jsx)(de,{})})]}),t&&Object(o.jsx)(l.c,{path:"/img/:id",children:Object(o.jsx)(xe,{})})]})}var le=[{id:0,title:"Dark Orchid",color:"DarkOrchid"},{id:1,title:"Lime Green",color:"LimeGreen"},{id:2,title:"Tomato",color:"Tomato"},{id:3,title:"Seven Ate Nine",color:"#789"},{id:4,title:"Crimson",color:"Crimson"}];function oe(e){var t=e.color;return Object(o.jsx)("div",{style:{width:50,height:50,background:t}})}function be(e){var t=e.color;return Object(o.jsx)("div",{style:{width:"100%",height:400,background:t}})}function he(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.b,{to:"/gallery",children:"Visit the Gallery"}),Object(o.jsx)("h2",{children:"Featured Images"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/img/2",children:"Tomato"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/img/4",children:"Crimson"})})]})]})}function ae(){var e=Object(l.j)();return Object(o.jsx)("div",{children:le.map((function(t){return Object(o.jsxs)(s.b,{to:{pathname:"/img/".concat(t.id),state:{background:e}},children:[Object(o.jsx)(oe,{color:t.color}),Object(o.jsx)("p",{children:t.title})]},t.id)}))})}function de(){var e=Object(l.k)().id,t=le[parseInt(e,10)];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:t.title}),Object(o.jsx)(be,{color:t.color})]}):Object(o.jsx)("div",{children:"Image not found"})}function xe(){var e=Object(l.i)(),t=Object(l.k)().id,c=le[parseInt(t,10)];if(!c)return null;var n=function(t){t.stopPropagation(),e.goBack()};return Object(o.jsx)("div",{onClick:n,style:{position:"absolute",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.15)"},children:Object(o.jsxs)("div",{className:"modal",style:{position:"absolute",background:"#fff",top:25,left:"10%",right:"10%",padding:15,border:"2px solid #444"},children:[Object(o.jsx)("h1",{children:c.title}),Object(o.jsx)(be,{color:c.color}),Object(o.jsx)("button",{type:"button",onClick:n,children:"Close"})]})})}var Oe=c(20),ue=c(21),pe=c(24),fe=c(22);function me(e){return Object(o.jsx)(l.c,{render:function(t){var c=t.staticContext;return c&&(c.statusCode=e.statusCode),Object(o.jsx)("div",{children:e.children})}})}function ve(e){return Object(o.jsxs)("p",{children:["Static context: ",JSON.stringify(e.staticContext)]})}var ge=function(e){Object(pe.a)(c,e);var t=Object(fe.a)(c);function c(){var e;Object(Oe.a)(this,c);for(var n=arguments.length,j=new Array(n),r=0;r<n;r++)j[r]=arguments[r];return(e=t.call.apply(t,[this].concat(j))).staticContext={},e}return Object(ue.a)(c,[{key:"render",value:function(){return Object(o.jsx)(l.e,{location:"/foo",context:this.staticContext,children:Object(o.jsx)("div",{children:Object(o.jsxs)(me,{statusCode:404,children:[Object(o.jsx)("p",{children:"Route with statusCode 404"}),Object(o.jsx)(ve,{staticContext:this.staticContext})]})})})}}]),c}(n.Component);function ye(){return Object(o.jsx)(s.a,{children:Object(o.jsx)(ke,{})})}function ke(){var e=new URLSearchParams(Object(l.j)().search);return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Accounts"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/account?name=netflix",children:"Netflix"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/account?name=zillow-group",children:"Zillow Group"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/account?name=yahoo",children:"Yahoo"})}),Object(o.jsx)("li",{children:Object(o.jsx)(s.b,{to:"/account?name=modus-create",children:"Modus Create"})})]}),Object(o.jsx)(we,{name:e.get("name")})]})})}function we(e){var t=e.name;return Object(o.jsx)("div",{children:t?Object(o.jsxs)("h3",{children:["The ",Object(o.jsx)("code",{children:"name"}),' in the query string is "',t,'"']}):Object(o.jsx)("h3",{children:"There is no name in the query string"})})}var Ce=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l.c,{exact:!0,path:"/react-router/animate-transitions",component:X}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/basic",component:b}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/custom-link",component:B}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/model-gallery",component:ie}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/nesting",component:u}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/no-match-40",component:W}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/preventing-transitions",component:G}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/query-parameter",component:ye}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/recursive-paths",component:q}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/redirects-auth",component:k}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/route-config",component:je}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/sidebar",component:U}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/static-router-context",component:ge}),Object(o.jsx)(l.c,{exact:!0,path:"/react-router/url-parameter",component:x})]})},Se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,j=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),j(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(s.a,{children:Object(o.jsx)(Ce,{})})}),document.getElementById("root")),Se()}},[[39,1,2]]]);
//# sourceMappingURL=main.72eb28bf.chunk.js.map