(function(t){function e(e){for(var o,i,a=e[0],s=e[1],u=e[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var a=n[i];0!==c[a]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},c={app:0},r=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0612c7ed":"06de842f","chunk-0f925347":"14c32405","chunk-39990752":"a99e6aaa","chunk-6e70d374":"cc11849e","chunk-960b5c4e":"4a55d846","chunk-97315ec4":"67d686f5","chunk-b407c27c":"dcf9cc73"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-0612c7ed":1,"chunk-0f925347":1,"chunk-39990752":1,"chunk-6e70d374":1,"chunk-960b5c4e":1,"chunk-97315ec4":1,"chunk-b407c27c":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0612c7ed":"fbff171f","chunk-0f925347":"c3bd3c82","chunk-39990752":"a9269af2","chunk-6e70d374":"e03959b9","chunk-960b5c4e":"50ac0ca2","chunk-97315ec4":"05d4e882","chunk-b407c27c":"bfba1d59"}[t]+".css",c=s.p+o,r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var u=r[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===c))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===o||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4dfb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("div",{attrs:{id:"nav-center"}},[o("img",{attrs:{src:n("5b67"),alt:""}}),o("router-link",{attrs:{to:"/home"}},[t._v("首页")]),o("router-link",{attrs:{to:"/navFind"}},[t._v("发现")]),o("div",{staticClass:"hiddenBox"}),t.loginShow?o("router-link",{attrs:{to:"/login"}},[t._v("登录/注册")]):o("div",{staticClass:"SignBox"},[o("img",{attrs:{src:n("cf05"),alt:""}}),o("button",{on:{click:t.exit}},[t._v(t._s(t.username))])])],1)]),o("div",{attrs:{id:"center"}},[o("div",{attrs:{id:"main-content"}},[o("router-view"),o("div",{attrs:{id:"homeright"}},[o("router-view",{attrs:{name:"HomeTop"}}),o("router-view",{attrs:{name:"HomeBot"}})],1)],1)])])},c=[],r=(n("ac1f"),n("5319"),{name:"App",data:function(){return{loginShow:!0,username:sessionStorage.getItem("username")}},methods:{exit:function(){confirm("确定要注销吗")&&(sessionStorage.clear(),alert("注销成功"),location.reload())}},created:function(){alert("欢迎登录欧阳小灿知乎系统"),console.log("18软件4班 李灿欣"),null!=sessionStorage.getItem("username")?this.loginShow=!1:(alert("您未登录，请登录"),this.loginShow=!0,this.$router.replace("/login"))}}),a=r,s=(n("5c0b"),n("2877")),u=Object(s["a"])(a,i,c,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{attrs:{id:"content"}},[n("router-link",{staticClass:"router-active",attrs:{to:"/home/recommend"}},[t._v("推荐")]),n("router-link",{attrs:{to:"/home/focus"}},[t._v("关注")]),n("router-link",{attrs:{to:"/home/hot"}},[t._v("热榜")])],1),n("router-view")],1)},h=[],p={name:"Home"},m=p,g=(n("93df"),Object(s["a"])(m,f,h,!1,null,"33c00d5e",null)),v=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hometop"},[t._l(t.iconTagList,(function(e,o){return n("div",{key:o,attrs:{id:"iconContent"}},[n("span",{class:e.iconClass},[n("i",{class:e.pic})]),n("h5",[t._v(t._s(e.tag))])])})),t._m(0)],2)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"downContent"}},[n("h4",[t._v("稍后答")]),n("h4",[t._v("草稿箱")])])}],A=n("bc3a"),k=n.n(A),S=n("96eb"),w=n.n(S);function C(t,e,n){var o=k.a.create({method:"get"});o(t).then((function(t){e(t.data.list)})).catch((function(t){n(t)})),w.a.mock(t,{"list|4":[{"id|+1":1,icon:w.a.Random.image("40x40"),title:"@ctitle(1,3)"}]})}var O={name:"HomeTop",data:function(){return{iconList:"",iconTagList:[{id:1,pic:"glyphicon glyphicon-list",iconClass:"icon iconQuestion",tag:"回答问题"},{id:2,pic:"glyphicon glyphicon-facetime-video",iconClass:"icon iconVideo",tag:"发视频"},{id:3,pic:"glyphicon glyphicon-edit",iconClass:"icon iconWord",tag:"写文章"},{id:4,pic:"glyphicon glyphicon-compressed",iconClass:"icon iconWrite",tag:"写想法"}]}},created:function(){var t=this;C("https://www.zhihu.com/follow",(function(e){t.iconList=e}),(function(t){console.log(t)}))}},_=O,F=(n("b960"),Object(s["a"])(_,b,y,!1,null,"0a66d1c2",null)),W=F.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homebot"},[t._l(t.BootomData,(function(e,o){return n("div",{key:o,attrs:{id:"nav-source"}},[n("span",{class:e.iconClass},[n("i",{class:e.src})]),n("h5",[t._v(t._s(e.title))])])})),t._m(0),t._m(1)],2)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"adv"}},[n("img",{attrs:{src:"https://pic2.zhimg.com/v2-1ffaaa2e88bb1b3efa720dcee7a73445_540x450.jpeg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"copyRight"}},[n("h5",[t._v("联系我们©2020 欧阳小灿")])])}],B={name:"HomeBot",data:function(){return{BootomData:[{id:1,src:"glyphicon glyphicon-thumbs-up",iconClass:"icon iconLive",title:"Live"},{id:2,iconClass:"icon iconBook",src:"glyphicon glyphicon-book",title:"书店"},{id:3,iconClass:"icon iconDesk",src:"glyphicon glyphicon-cd",title:"圆桌"},{id:4,iconClass:"icon iconFocus",src:"glyphicon glyphicon-pencil",title:"专栏"},{id:5,iconClass:"icon iconCheck",src:"glyphicon glyphicon-yen",title:"付费查询"},{id:6,iconClass:"icon iconBaike",src:"glyphicon glyphicon-education",title:"百科"}]}}},V=B,E=(n("f4f9"),Object(s["a"])(V,x,L,!1,null,null,null)),T=E.exports;o["a"].use(d["a"]);var Y=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",components:{default:v,HomeTop:W,HomeBot:T},children:[{path:"",redirect:"recommend"},{path:"recommend",component:function(){return n.e("chunk-97315ec4").then(n.bind(null,"cc7e"))}},{path:"hot",component:function(){return n.e("chunk-0f925347").then(n.bind(null,"8f8d"))}},{path:"focus",component:function(){return n.e("chunk-960b5c4e").then(n.bind(null,"0fea"))}}]},{path:"/about",name:"About",component:function(){return n.e("chunk-6e70d374").then(n.bind(null,"f820"))}},{path:"/navFind",name:"NavFind",component:function(){return n.e("chunk-0612c7ed").then(n.bind(null,"d734"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-b407c27c").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-39990752").then(n.bind(null,"73cf"))}}],z=new d["a"]({base:"",routes:Y}),D=z;o["a"].config.productionTip=!1,new o["a"]({router:D,render:function(t){return t(l)}}).$mount("#app")},"5b67":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAtCAYAAADm45atAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATCSURBVGhD7ZpriFZFGMf9lEaE+SGKIDGCMCqIigz9YtAFi0oKP2iCfYioCCu7igV+yNSUTVbLSlfFa2kXFe2ilStt2t1r7upqaUreLe9Kyt/nz8zDGV9nzjmze9Zk3/ODB/Y8M2fmOf93Zs4zc7YDSnJTihVBKVYEpVgRlGJFUIoVQSlWBFFiHf8PmLvBXlQhucV65kup/Abw5vfW0Q44cQrYfABYthUYKc/1yMfAn//aQg+5xJq6xghFW7nDOi9gDp8EdhwC1u4xQsxYZ8R4+gvgwbnALZOBy2uSZ3Jt+HLbiIdcYvWZYxq68X3rOM9w+i9qBmatByb+CoxaAQz91jz8gPnAvbOB2+qAbhOAS986++Fjje2HyBSreX/S0LNfmV8qzVhf6T0jznh/iMZ9SRxFWucxQNda4KYPgF7TzA8TIlOs2p/O7SDNOAoVX3mapYlFWD5kKfCwrC2uyOyz3yfAYwvNaHvpazOd3HZp3/0lU3M3sFXWpQPHgVOnbcM5yRSrx9Sk07ym6LX7YD7TellixeCKVRSpYs3fmHTopgyv1Rtfp1HWEUDvTVs0KZDW+z/EmrwK+LTJXmSQKtbds0xnHOIuL8owp/+ysdYRQIMtUiwV4QZ52Yz9wTo95BHr+SVJnRdkemcRFGv/MdPIVeOsw0Fzris9ZS4aSNEjS39E2tI/rLOCLLGmr03KuRTkISgWO2ODPh5fZDrpNt46AmgwRYu1T37Ii2UJ4D3XvQts+ccWOKSJtUUS0YtGmrIuMjsOSV6Wh8wF3sdAyW3YUfeJ1hFAgy1aLLJwU3Jf5TJB0sS6fUpSFtNni8TitoAd3TzJOgJoQG0hFnn5m+TeV+Rvl5BY7jpVk7Lm+WiRWPfZjP4OSSvS0KDaSizSUxLJBz4CDp6wDktIrJ2HgVcl+2dOFkuqWEwXKnMiNQbh89NW7TL3a7BtKRb3gD5CYrWGoFh8y2hnsdZXNqtEr1srFu9viWm7r0teyNHE9GCwbNmekiyfL6lBMroGfGbWvL7zgPs/BO6Rfead8oP7CIrl61xNg/CVqRG3Xoi8Ymmd82F8w/qIXrP22vyLlnUQqPVaKxaZ8zvQX0aBb9qHTNv1laVZKHeLFqthexLE+j3WGUDrFSFWLO5oLIposepWmwCueNtcL5D9YwgNtmrFevJzEwAXQg7ZjpIJh05PNdiqFIsHcDxpYAB8o1wy2vx9zQRgk3Pop2iwVSkWX78awALZbtRvS655ysg9m4uWVZ1YG2Xk8JSBnXP6KVPsGkZ7yOZXivoZuCsETzR4rab12o1YdznHIpWH+sOWJWW7jlinoD7a1bXGN3MdcP17Z5eptQuxnlicdHztO+ZTUyW6uV6z2zoEvUftUXtaEbIixWJOxjZ5BFMUmWK504QWWn94RsRPZT//bR0O7nfHtDZi4QeI1bIP5XnW3qPmoylzP54maF+31tnKBZAq1rzGpFMa04Y0Fm8GTkrAlfArL+/nkU6Ro4dwX+fGWGlF/rtBUKyaH5MOeSo5osEWtJDnltg/2oCQYGNW2goFERSLC3WzTK3fdvpHy4VGk+SA3E1wivPL9S+e5aC15FrgSwylWBGUYkVQihVBKVYEpVgRlGJFUIqVG+AMVC1+aVxUzO4AAAAASUVORK5CYII="},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"93df":function(t,e,n){"use strict";var o=n("dabf"),i=n.n(o);i.a},"9c0c":function(t,e,n){},b960:function(t,e,n){"use strict";var o=n("4dfb"),i=n.n(o);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dabf:function(t,e,n){},e2e2:function(t,e,n){},f4f9:function(t,e,n){"use strict";var o=n("e2e2"),i=n.n(o);i.a}});
//# sourceMappingURL=app.01fd352f.js.map