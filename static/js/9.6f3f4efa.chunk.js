(this["webpackJsonpgithub-searcher"]=this["webpackJsonpgithub-searcher"]||[]).push([[9],{218:function(e,t,n){"use strict";n.r(t);var r=n(26),c=n(0),a=n(189),o=n(190),u=n(1);t.default=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),h=Object(r.a)(i,2),l=h[0],b=h[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/amir-alipour/amir-alipour/master/README.md").then((function(e){return e.text()})).then((function(e){return s(e)}))}),[]),Object(u.jsxs)("div",{className:"container",style:{height:"80vh",color:"white"},children:[Object(u.jsx)("h1",{className:"mt-5 h1",children:"About developer : "}),Object(u.jsx)("input",{type:"text",value:l,onKeyDown:function(e){13===e.keyCode&&fetch("https://raw.githubusercontent.com/".concat(l,"/").concat(l,"/master/README.md")).then((function(e){return e.text()})).then((function(e){return s(e)}))},onChange:function(e){return b(e.target.value)},className:"w-80 md:w-50 h-10 rounded-full bg-transparent border px-3 outline-none mt-3",placeholder:"Search your README... (amir-alipour)"}),Object(u.jsx)("div",{className:"row border rounded p-4 mt-4 mx-1",children:Object(u.jsx)("div",{className:"col-12",style:{height:"65vh",overflowY:"auto"},children:Object(u.jsx)(a.a,{rehypePlugins:[o.a],children:n})})})]})}}}]);