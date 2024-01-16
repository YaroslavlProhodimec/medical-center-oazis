(()=>{"use strict";var e,r,t,n,i,a={7291:(e,r,t)=>{var n=t(5893),i=t(7294),a=(t(6505),t(743)),s=t(4268),o=t(848),c=t(5673),l=(0,o.LC)({reducerPath:"PostAPI",baseQuery:(0,c.ni)({baseUrl:"https://my-json-server.typicode.com/YaroslavlProhodimec/test-json/posts"}),endpoints:function(e){return{fetchAllPosts:e.query({query:function(e){return"?limit=5&skip=".concat(e)}}),fetchPostById:e.query({query:function(e){return"/".concat(e)}})}}}),d=l.useFetchAllPostsQuery,u=l.useFetchPostByIdQuery,f=t(4184),m=t.n(f);var h=function(e){var r=e.className;return(0,n.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"40",height:"40",version:"1.0",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:"transparent",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4",d:"M2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2c-2.325 0-4.546.44-6.586 1.243"}),(0,n.jsx)("animateTransform",{attributeName:"transform",dur:"1800ms",from:"0 20 20",repeatCount:"indefinite",to:"360 20 20",type:"rotate"})]})})};function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var v,j,x,g=function(e){var r,t,i=e.id,a=e.component,s=u(i.toString()),o=s.isLoading,c=s.error,l=s.data||{title:"Loading..",description:""},d=l.description.length>79?l.description.substring(0,79)+"...":l.description;return(0,n.jsxs)("article",{className:m()((r={},p(r,"ui__mycard--QOfRF",!0),p(r,"ui__loading--A6uD0",o),p(r,"error",Boolean(c)),r)),children:[(0,n.jsx)("h3",{className:"ui__title--fBwig",children:l.title}),(0,n.jsxs)("span",{className:"ui__number--FEZd6",children:[i,"."]}),(0,n.jsx)("p",{className:"ui__descr--NeWi_",children:d}),a&&(0,n.jsx)("div",{className:m()((t={},p(t,"ui__btn--WQMg5",!0),p(t,"disabled",o),t)),children:a(i)}),o&&(0,n.jsx)(h,{className:"ui__preloader--SA_6q"})]})},_=(0,s.xC)({reducer:(v={},j=l.reducerPath,x=l.reducer,j in v?Object.defineProperty(v,j,{value:x,enumerable:!0,configurable:!0,writable:!0}):v[j]=x,v),middleware:function(e){return e().concat(l.middleware)},devTools:!0}),b=t(9250),y=function(){return(0,n.jsx)("header",{className:"display-3",children:"Медицинский Центр - Оазис Гармонии ."})};var N=t(9142),O=t(173),w=function(e){var r=e.totalItems,t=e.itemHeight,i=e.listHeight,a=e.listWidth,s=e.renderComponent,o=function(e,r){var t=new Array(e).fill(!0).map((function(){return r}));return{getItemSize:function(e){return t[e]}}}(r,t).getItemSize;return(0,n.jsx)(N.ZP,{style:{display:"contents"},children:function(){return(0,n.jsx)(O.S_,{className:"ui__virt--EfQPy",height:i,itemCount:r,itemSize:o,width:a||"100%",children:(e=s,function(r){var t=r.index,i=r.style;return(0,n.jsx)("div",{style:i,children:e(t)})})});var e}})},C=t(9655),P=function(e){var r=e.children,t=e.className,i=e.href,a=e.type,s=e.onClickHandler;return i?(0,n.jsx)(C.rU,{to:i,className:t,children:r}):(0,n.jsx)("button",{type:a||"button",className:t,onClick:s,children:r})},k=function(e){return(0,n.jsx)(P,{className:"btn btn-outline-danger",href:"/service/".concat(e.productId),children:"Просмотр"})},S=function(){document.title="Harmony Oasis Center Clinic - Медицинский Центр Оазис Гармонии";var e=d("0").data;return(0,n.jsx)("section",{className:"ui__expand--KzV4U",children:e&&(0,n.jsx)(w,{totalItems:17,listHeight:700,itemHeight:230,renderComponent:function(e){var r=e+1;return(0,n.jsx)(g,{id:r,component:function(){return(0,n.jsx)(k,{productId:r})}})}})})},E=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"container py-4",children:[(0,n.jsx)(y,{}),(0,n.jsx)(S,{})]})})};var A=t(4960),I=t(6823),T=t(1052),H=t(9844),L=[{value:"#b6a179"},{value:"#272425"},{value:"#6389cb"},{value:"#f2c758"},{value:"#ffffff"}],M=function(e){var r=e.post;document.title="Harmony Oasis Center Clinic - Медицинский Центр Оазис Гармонии";var t=(0,A.c)(0),i=(0,A.c)(0),a=(0,I.H)(i,[-100,100],[30,-30]),s=(0,I.H)(t,[-100,100],[-30,30]);return(0,n.jsx)("div",{className:"ui__cardContainer--WxROd",children:(0,n.jsxs)(T.E.div,{style:{x:t,y:i,rotateX:a,rotateY:s,z:100},drag:!0,dragElastic:.18,dragConstraints:{top:0,left:0,right:0,bottom:0},whileTap:{cursor:"grabbing"},className:"ui__card--VdWik",children:[(0,n.jsxs)(T.E.div,{variants:("right",.4,{hidden:{y:0,opacity:0,x:-80},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.2,delay:.4,ease:[.25,.25,.25,.75]}}}),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"ui__containerSpan--MMxJw",children:[(0,n.jsx)("span",{className:"ui__span--kXK1H",children:"Пошевели 😀 "}),(0,n.jsx)(H.e,{style:{color:"#ff0000"},sequence:["меня",2e3,"",2e3],speed:50})]}),(0,n.jsx)("h1",{className:"ui__cardTitle--XVvQH",children:r.title}),(0,n.jsx)("p",{className:"ui__cardSubtitle--jbZsr",children:r.description}),(0,n.jsxs)("div",{className:"ui__priceWrapper--Ntk4F",children:[(0,n.jsxs)(C.rU,{to:"/",children:[" ",(0,n.jsx)(P,{className:"btn btn-outline-danger m-lg-1 ",children:"To back"})]}),(0,n.jsx)("div",{className:"ui__price--VlfiO",children:r.price})]}),(0,n.jsx)("ul",{className:"ui__colors--R4a3G",children:L.map((function(e,r){return(0,n.jsx)("div",{style:{backgroundColor:e.value},className:"ui__color--NMU8k"},r)}))}),(0,n.jsx)(T.E.div,{style:{x:t,y:i,rotateX:a,rotateY:s,z:1e5},className:"ui__cardImage--3xKnT",children:(0,n.jsx)("img",{width:300,className:"ui__img--JvS2b",src:"https://github.com/YaroslavlProhodimec/medical/raw/main/src/shared/assets/img/scare.png",draggable:"false",alt:""})})]})})},B=function(){var e=(0,b.UO)().serviceId,r=u(e?e.toString():""),t=r.isLoading,i=r.data;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"ui__centeredContainer--dEjtj",children:[t?(0,n.jsx)("h2",{children:(0,n.jsx)(h,{})}):"",i&&(0,n.jsx)(M,{post:i})]})})},F=function(){return(0,n.jsxs)(b.Z5,{children:[(0,n.jsx)(b.AW,{path:"/",element:(0,n.jsx)(E,{})}),(0,n.jsx)(b.AW,{path:"/service/:serviceId",element:(0,n.jsx)(B,{})})]})},U=function(){return(0,n.jsx)(a.zt,{store:_,children:(0,n.jsx)(F,{})})},W=t(745),q=t(405),z=(0,n.jsx)(i.StrictMode,{children:(0,n.jsx)(q.B6,{children:(0,n.jsx)(C.UT,{children:(0,n.jsx)(U,{})})})}),D=document.getElementById("root");(0,W.s)(D).render(z)}},s={};function o(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return a[e](t,t.exports,o),t.exports}o.m=a,e=[],o.O=(r,t,n,i)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,n,i]=e[d],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var l=n();void 0!==l&&(r=l)}}return r}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,n,i]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);o.r(i);var a={};r=r||[null,t({}),t([]),t(t)];for(var s=2&n&&e;"object"==typeof s&&!~r.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,o.d(i,a),i},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>e+".c7d4ff33f01d1d54d0c9.js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},i="rtk:",o.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var s,c;if(void 0!==t)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==i+t){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",i+t),s.src=e),n[e]=[r];var f=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var i=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(t))),r)return r(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/",(()=>{var e={179:0};o.f.j=(r,t)=>{var n=o.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(((t,i)=>n=e[r]=[t,i]));t.push(n[2]=i);var a=o.p+o.u(r),s=new Error;o.l(a,(t=>{if(o.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+r,r)}},o.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[a,s,c]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var d=c(o)}for(r&&r(t);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},t=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var c=o.O(void 0,[216],(()=>o(7291)));c=o.O(c)})();