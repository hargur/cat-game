(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,i){},11:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(3),r=i.n(c),m=(i(10),i(1)),g=function(e){return n.a.createElement("img",{key:e.id,alt:e.image,src:e.image,style:{width:"auto",height:"100%"}})},l=function(e){return n.a.createElement("div",{style:{flex:1}},e.data.map(function(t){return n.a.createElement("img",{onClick:function(){e.clickedItem(t)},key:t.id,alt:t.image,style:{width:"25%"},src:t.image})}))},d=[{id:1,image:"images/cat_1.png"},{id:2,image:"images/cat_2.png"},{id:3,image:"images/cat_3.png"},{id:4,image:"images/cat_4.png"},{id:5,image:"images/cat_5.png"},{id:6,image:"images/cat_6.png"},{id:7,image:"images/cat_7.png"},{id:8,image:"images/cat_8.png"},{id:9,image:"images/cat_9.png"},{id:10,image:"images/cat_10.png"},{id:11,image:"images/cat_11.png"},{id:12,image:"images/cat_12.png"}],o=function(e){return n.a.createElement("div",{style:{flex:1,justifyContent:"center",display:"flex"}},n.a.createElement("div",{style:{width:190}},e.items.map(function(e,t){return n.a.createElement("div",{key:t,style:{float:"left",width:60,height:60,border:"1px solid lightblue",textAlign:"center"}},e&&e.id&&n.a.createElement(g,{id:e.id,image:e.image}))})))},s=function(){var e=Object(a.useState)(new Array(9).fill("")),t=Object(m.a)(e,2),i=t[0],c=t[1],r=Object(a.useState)(0),g=Object(m.a)(r,2),s=g[0],u=g[1],f=Object(a.useState)("YOU WON"),p=Object(m.a)(f,2),w=p[0],y=p[1];return Object(a.useEffect)(function(){9===s&&(alert(w),c(new Array(9).fill("")),u(0))},[i,s,w]),n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement(l,{data:d,clickedItem:function(e){var t=i;t[s]=e,u(s+1),c(t),(s+1)%3===0&&(t[s].id!==t[s-1].id&&t[s-1].id!==t[s-2].id&&t[s-1].id!==t[s].id||y("YOU LOST"))}}),i&&n.a.createElement(o,{items:i}))},u=function(e){return n.a.createElement(s,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,i){e.exports=i(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.77413b53.chunk.js.map