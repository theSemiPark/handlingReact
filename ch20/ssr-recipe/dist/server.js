!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=8)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("fs")},function(e,n){e.exports={}},function(e,n){e.exports={}},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(4),i=t.n(c),a=t(2),u=t.n(a),l=t(1),s=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/red"},"Red")),o.a.createElement("li",null,o.a.createElement(l.Link,{to:"/blue"},"Blue")))},f=(t(6),function(){return o.a.createElement("div",{className:"Red"},"Red")}),p=function(){return o.a.createElement(f,null)},d=(t(7),function(){return o.a.createElement("div",{className:"Blue"},"Blue")}),m=function(){return o.a.createElement(d,null)},h=function(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement("hr",null),o.a.createElement(l.Route,{path:"/red",component:p}),o.a.createElement(l.Route,{path:"/blue",component:m}))},v=t(3),b=t.n(v),x=t(5),y=t.n(x),E=JSON.parse(y.a.readFileSync(b.a.resolve("./build/asset-manifest.json"),"utf8")),j=Object.keys(E.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(E.files[e],'"><\/script>')})).join("");var g=u()(),O=u.a.static(b.a.resolve("./build"),{index:!1});g.use(O),g.use((function(e,n,t){var r=o.a.createElement(l.StaticRouter,{location:e.url,context:{}},o.a.createElement(h,null)),c=i.a.renderToString(r);n.send(function(e){return'<!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <meta charset="utf-8" />\n      <link rel="shortcut icon" href="/favicon.ico" />\n      <meta\n        name="viewport"\n        content="width=device-width,initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      <link href="'.concat(E.files["main.css"],'" rel="stylesheet" />\n    </head>\n    <body>\n      <noscript>You need to enable JavaScript to run this app.</noscript>\n      <div id="root">\n        ').concat(e,'\n      </div>\n      <script src="').concat(E.files["runtime~main.js"],'"><\/script>\n      ').concat(j,'\n      <script src="').concat(E.files["main.js"],'"><\/script>\n    </body>\n    </html>\n      ')}(c))})),g.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);