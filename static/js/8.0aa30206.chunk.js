(this["webpackJsonpgithub-searcher"]=this["webpackJsonpgithub-searcher"]||[]).push([[8],{151:function(e,c,t){},226:function(e,c,t){"use strict";t.r(c);t(151);var s=t(0),a=t(28),n=t(24),r=t(26),l=t(3),i=t(16),o=t(1);var j=function(e){var c=e.avatar,t=e.username,a=Object(l.e)(),n=Object(s.useState)(),j=Object(r.a)(n,2),u=j[0],b=j[1],d=Object(s.useState)(),h=Object(r.a)(d,2),O=h[0],f=h[1],m=Object(s.useState)(),x=Object(r.a)(m,2),p=x[0],v=x[1];return Object(s.useLayoutEffect)((function(){i.a.get("/users/".concat(t)).then((function(e){f(e.followers),b(e.following),v(e.public_repos)}))}),[t]),Object(o.jsx)("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2 h-52 p-3",children:Object(o.jsxs)("div",{className:"w-full h-full rounded p-2 cursor-pointer",style:{backgroundColor:"#2d333b"},onClick:function(){return a.push("/".concat(t))},children:[Object(o.jsxs)("div",{className:"flex ",children:[Object(o.jsx)("img",{src:c,alt:"".concat(t," Github Profile"),className:"w-16 h-16 rounded-lg shadow"}),Object(o.jsx)("p",{className:"ml-2",children:t})]}),Object(o.jsxs)("div",{className:"mt-3 text-gray-300",children:[Object(o.jsxs)("p",{children:["following : ",u]}),Object(o.jsxs)("p",{children:["follwer : ",O]}),Object(o.jsxs)("p",{children:["repository : ",p]})]})]})})},u=t(33);c.default=function(){var e=Object(a.c)(u.b),c=Object(a.b)();return Object(s.useLayoutEffect)((function(){c(Object(n.a)())}),[c]),Object(o.jsxs)("div",{className:"container mt-10 text-white",children:[Object(o.jsx)("p",{className:"h3 text-gray-300",children:"- Github recommended"}),Object(o.jsx)("div",{className:"container-fluid mt-2",children:Object(o.jsx)("div",{className:"row",children:e.length>0&&e.map((function(e,c){return c<6&&Object(o.jsx)(j,{avatar:e.avatar_url,username:e.login},e.node_id)}))})})]})}}}]);