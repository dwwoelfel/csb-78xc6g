(this.webpackJsonppundumpster=this.webpackJsonppundumpster||[]).push([[0],{87:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(19),s=n(0),r=n(4),j=n(1);function a(){var e=Object(r.e)({puns:{}}),t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1],u=Object(i.useState)("submission"),b=Object(s.a)(u,2),d=b[0],o=b[1];return Object(j.jsxs)("div",{style:{margin:"auto",width:720},children:[Object(j.jsx)("h1",{children:"Welcome to Pundumpster"}),"submission"===d?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:"Submit a pun for a free pun rating."})," ",Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:Object(j.jsx)("textarea",{style:{fontFamily:"sans-serif"},onChange:function(e){return a(e.target.value)},cols:80,rows:10})}),Object(j.jsx)("button",{onClick:function(e){if(c&&c.trim()){var t=Object(r.a)();Object(r.b)([r.c.puns[t].update({text:c})]),a(""),o("rating")}},children:"Submit"})]}):null,"rating"===d?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:"Ugh, that was terrible."})}):null,"view"!==d?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{marginTop:20},children:Object(j.jsx)("button",{onClick:function(){return o("view")},children:"View submissions"})})}):null,"view"===d?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[e.puns.map((function(e){return Object(j.jsx)("p",{children:e.text},e.id)})),Object(j.jsx)("div",{style:{marginTop:20},children:Object(j.jsx)("button",{onClick:function(){return o("submission")},children:"Contribute a pun"})})]})}):null]})}var u=function(){var e=Object(r.d)({appId:"698e42a5-2a0f-43b5-94d6-1316dcdf1ae5",websocketURI:"wss://instant-server.herokuapp.com/api",apiURI:"https://instant-server.herokuapp.com/api"}),t=Object(s.a)(e,3),n=t[0],i=t[1];return t[2],n?Object(j.jsx)("div",{children:"..."}):i?Object(j.jsxs)("div",{children:["Oi! ",null===i||void 0===i?void 0:i.message]}):Object(j.jsx)(a,{})},b=document.getElementById("root");Object(c.createRoot)(b).render(Object(j.jsx)(i.StrictMode,{children:Object(j.jsx)(u,{})}))}},[[87,1,2]]]);
//# sourceMappingURL=main.3b0f8dea.chunk.js.map