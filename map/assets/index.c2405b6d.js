import{r as h,j as P,F as W,a as se,R as x,b as ae}from"./index.ff59af53.js";var y;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(y||(y={}));var pe={key:"f97efc35164149d0c0f299e7a8adb3d2",AMap:{version:"2.0",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"2.0.0"}};function de(e){return"//webapi.amap.com/maps?callback=__amap_init_callback"+"&v=".concat(e.AMap.version)+"&key=".concat(e.key)+"&plugin=".concat(e.AMap.plugins.join(","))}function V(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function ve(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?V(Object(n),!0).forEach(function(t){ge(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ge(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var b={AMap:y.notload,AMapUI:y.notload,Loca:y.notload},S={AMap:[],AMapUI:[],Loca:[]},m=ve({},pe),K=[];function he(e){if(typeof e=="function"){if(b.AMap===y.loaded){e(window.AMap);return}K.push(e)}}function U(e){var r=[];return e.AMapUI&&r.push(me(e.AMapUI)),e.Loca&&r.push(ye(e.Loca)),Promise.all(r)}function me(e){return new Promise(function(r,n){var t=[];if(e.plugins)for(var a=0;a<e.plugins.length;a+=1)m.AMapUI.plugins.indexOf(e.plugins[a])==-1&&t.push(e.plugins[a]);if(b.AMapUI===y.failed){n("\u524D\u6B21\u8BF7\u6C42 AMapUI \u5931\u8D25");return}if(b.AMapUI===y.notload){b.AMapUI=y.loading,m.AMapUI.version=e.version||m.AMapUI.version;var i=m.AMapUI.version,l=document.body||document.head,o=document.createElement("script");o.type="text/javascript",o.src="https://webapi.amap.com/ui/".concat(i,"/main.js"),o.onerror=function(u){b.AMapUI=y.failed,n("\u8BF7\u6C42 AMapUI \u5931\u8D25")},o.onload=function(){if(b.AMapUI=y.loaded,t.length)window.AMapUI.loadUI(t,function(){for(var u=0,v=t.length;u<v;u++){var g=t[u],s=g.split("/").slice(-1)[0];window.AMapUI[s]=arguments[u]}for(r();S.AMapUI.length;)S.AMapUI.splice(0,1)[0]()});else for(r();S.AMapUI.length;)S.AMapUI.splice(0,1)[0]()},l.appendChild(o);return}if(b.AMapUI===y.loaded){e.version&&e.version!==m.AMapUI.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):t.length?window.AMapUI.loadUI(t,function(){for(var u=0,v=t.length;u<v;u++){var g=t[u],s=g.split("/").slice(-1)[0];window.AMapUI[s]=arguments[u]}r()}):r();return}e.version&&e.version!==m.AMapUI.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C AMapUI \u6DF7\u7528"):S.AMapUI.push(function(u){u?n(u):t.length?window.AMapUI.loadUI(t,function(){for(var v=0,g=t.length;v<g;v++){var s=t[v],p=s.split("/").slice(-1)[0];window.AMapUI[p]=arguments[v]}r()}):r()})})}function ye(e){return new Promise(function(r,n){if(b.Loca===y.failed){n("\u524D\u6B21\u8BF7\u6C42 Loca \u5931\u8D25");return}if(b.Loca===y.notload){b.Loca=y.loading,m.Loca.version=e.version||m.Loca.version;var t=m.Loca.version,a=m.AMap.version.startsWith("2"),i=t.startsWith("2");if(a&&!i||!a&&i){n("JSAPI \u4E0E Loca \u7248\u672C\u4E0D\u5BF9\u5E94\uFF01\uFF01");return}var l=m.key,o=document.body||document.head,u=document.createElement("script");u.type="text/javascript",u.src="https://webapi.amap.com/loca?v=".concat(t,"&key=").concat(l),u.onerror=function(){b.Loca=y.failed,n("\u8BF7\u6C42 Loca \u5931\u8D25")},u.onload=function(){for(b.Loca=y.loaded,r();S.Loca.length;)S.Loca.splice(0,1)[0]()},o.appendChild(u);return}if(b.Loca===y.loaded){e.version&&e.version!==m.Loca.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):r();return}e.version&&e.version!==m.Loca.version?n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C Loca \u6DF7\u7528"):S.Loca.push(function(v){v?n(v):n()})})}function be(e){return new Promise(function(r,n){if(b.AMap==y.failed){n();return}if(b.AMap==y.notload){var t=e.key,a=t===void 0?m.key:t,i=e.version,l=i===void 0?m.AMap.version:i,o=e.plugins,u=o===void 0?[]:o;m.key=a,m.AMap.version=l,m.AMap.plugins=u,b.AMap=y.loading;var v=document.body||document.head;window.__amap_init_callback=function(c){if(delete window.__amap_init_callback,c){b.AMap=y.failed,n(c);return}for(b.AMap=y.loaded,U(e).then(function(){r(window.AMap)}).catch(n);K.length;)K.splice(0,1)[0]()};var g=document.createElement("script");g.type="text/javascript",g.src=de(m),g.onerror=function(c){b.AMap=y.failed,n(c)},v.appendChild(g);return}if(b.AMap==y.loaded){if(e.key&&e.key!==m.key){n("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");return}if(e.version&&e.version!==m.AMap.version){n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");return}var s=[];if(e.plugins)for(var p=0;p<e.plugins.length;p+=1)m.AMap.plugins.indexOf(e.plugins[p])==-1&&s.push(e.plugins[p]);s.length?window.AMap.plugin(s,function(){U(e).then(function(){r(window.AMap)}).catch(n)}):U(e).then(function(){r(window.AMap)}).catch(n);return}if(e.key&&e.key!==m.key){n("\u591A\u4E2A\u4E0D\u4E00\u81F4\u7684 key");return}if(e.version&&e.version!==m.AMap.version){n("\u4E0D\u5141\u8BB8\u591A\u4E2A\u7248\u672C JSAPI \u6DF7\u7528");return}var f=[];if(e.plugins)for(var p=0;p<e.plugins.length;p+=1)m.AMap.plugins.indexOf(e.plugins[p])==-1&&f.push(e.plugins[p]);he(function(){f.length?window.AMap.plugin(f,function(){U(e).then(function(){r(window.AMap)}).catch(n)}):U(e).then(function(){r(window.AMap)}).catch(n)})})}var ie=typeof window!="undefined",Me=function(r){return r[0].toUpperCase()+r.slice(1,r.length)},D=function(){return window.AMap||window.proxy.AMap},oe=function(r){if(!r)return null;if("getLng"in r&&"getLat"in r)return r;var n=0,t=0;Array.isArray(r)?(n=r[0],t=r[1]):"lng"in r&&"lat"in r?(n=r.lng,t=r.lat):"longitude"in r&&"latitude"in r&&(n=r.longitude,t=r.latitude);var a=D();return ie&&a?new a.LngLat(n,t):null},ue=function(r){if(!r)return null;if("getX"in r&&"getY"in r)return r;var n=0,t=0;Array.isArray(r)?(n=r[0],t=r[1]):"x"in r&&"y"in r&&(n=r.x,t=r.y);var a=D();return ie&&a?new a.Pixel(n,t):null};function Oe(e,r){var n=h.exports.useRef(),t=h.exports.useRef(),a=typeof r=="function"?r(t.current,e):!0;return a&&(n.current=t.current,t.current=e),n.current}function we(e,r){return Ce(e)||Ie(e,r)||Pe(e,r)||Ae()}function Ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e,r){if(!!e){if(typeof e=="string")return Z(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,r)}}function Z(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Ie(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],a=!0,i=!1,l,o;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(t.push(l.value),!(r&&t.length===r));a=!0);}catch(u){i=!0,o=u}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return t}}function Ce(e){if(Array.isArray(e))return e}function k(e,r){var n,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.setterMap,i=a===void 0?{}:a,l=t.converterMap,o=l===void 0?{}:l,u=(n=Oe(e))!==null&&n!==void 0?n:{},v=h.exports.useRef([]),g=h.exports.useState(!1),s=we(g,2),p=s[0],f=s[1];h.exports.useEffect(function(){!r.current||d(e,!0)},[e]),h.exports.useEffect(function(){return function(){if(!!r.current)try{"destroy"in r.current&&r.current.destroy(),"hide"in r.current&&r.current.hide(),"map"in e&&"setMap"in r.current&&r.current.setMap(null)}catch{}}},[]);var c=function(M){if(f(!0),"events"in e&&M){var C,A;(C=(A=e.events).created)===null||C===void 0||C.call(A,M)}d(e,!1)},d=function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,A=r.current;if(!!A)try{Object.keys(M).forEach(function(O){if(O==="events")return I(M);var E=!0;if(C&&(E=_(O,M,u)),!!E){var j=M[O];if(O in o&&(j=o[O](M[O])),O in i)i[O](j,A);else{var L="set".concat(Me(O));L in A&&A[L](j)}}})}catch{}},I=function(M){var C=r.current,A=Object.keys(M.events||{});A.length&&A.forEach(function(O){v.current.indexOf(O)===-1&&(v.current.push(O),C.on(O,function(E){return function(){if(M.events&&E in M.events){for(var j=arguments.length,L=new Array(j),$=0;$<j;$++)L[$]=arguments[$];M.events[E].apply(null,L)}}}(O)))})},_=function(M,C,A){return C[M]!==A[M]};return{loaded:p,prevProps:u,onInstanceCreated:c}}var xe=["loading","children","onComplete"];function B(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function F(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?B(Object(n),!0).forEach(function(t){Se(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Se(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function J(e,r){return Le(e)||Ee(e,r)||je(e,r)||_e()}function _e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(e,r){if(!!e){if(typeof e=="string")return N(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,r)}}function N(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Ee(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],a=!0,i=!1,l,o;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(t.push(l.value),!(r&&t.length===r));a=!0);}catch(u){i=!0,o=u}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return t}}function Le(e){if(Array.isArray(e))return e}function Ue(e,r){if(e==null)return{};var n=$e(e,r),t,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],!(r.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function $e(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,i;for(i=0;i<t.length;i++)a=t[i],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var De=function(r){var n=r.loading,t=r.children,a=r.onComplete,i=Ue(r,xe),l=h.exports.useState(!1),o=J(l,2),u=o[0],v=o[1],g=h.exports.useState(!0),s=J(g,2),p=s[0],f=s[1];return h.exports.useEffect(function(){be(F(F({},i),{},{key:i.mapKey})).then(function(){var c=D();a==null||a(c),v(!0),f(!1)}).catch(function(c){f(!1)})},[JSON.stringify(i)]),p&&n?P(W,{children:n}):P(W,{children:u&&t})},ke=function(){},le=function(r){return!!r&&typeof r=="function"},Re=["layers","zoom","zooms","center","labelzIndex","lang","mapStyle","features","cursor","pitch","mask","defaultLayer"],ce=["animateEnable","doubleClickZoom","dragEnable","isHotspot","jogEnable","keyboardEnable","pitchEnable","resizeEnable","rotateEnable","scrollWheel","touchZoom","zoomEnable"],ze=["view","showIndoorMap","indoorMap","expandZoomRange","touchZoomCenter","showBuildingBlock","viewMode","buildingAnimation","skyColor"],Te={width:"100%",height:"100%",position:"relative"},We={width:"100%",height:"100%"},Ke=Re.concat(ce,ze),He={zoom:function(r,n){n&&n.setZoom(r)},cursor:function(r,n){n&&n.setDefaultCursor(r)},labelzIndex:function(r,n){n&&n.setLabelzIndex(r)}},R={center:oe,mapStyle:function(r){return r.indexOf("amap://styles")===0?r:"amap://styles/".concat(r)}},Ve=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=h.exports.useRef(),t=h.exports.useRef(),a=k(r,t,{setterMap:He,converterMap:R}),i=a.loaded,l=a.prevProps,o=a.onInstanceCreated;h.exports.useEffect(function(){u().then(function(){var f;(f=r.onMapCreate)===null||f===void 0||f.call(r,t.current),o==null||o(t.current)})},[]),h.exports.useEffect(function(){i&&s(l,r)},[r]);var u=function(){var c=v(),d=D();return t.current=new d.Map(n.current,c),Promise.resolve()},v=function(){var c={};return Ke.forEach(function(d){d in r&&(c[d]=g(d,r))}),c},g=function(c,d){return c in R?R[c](d[c]):d[c]},s=function(c,d){var I={},_=!1;ce.forEach(function(w){w in d&&p(w,c,d)&&(_=!0,I[w]=d[w])}),_&&t.current.setStatus(I)},p=function(c,d,I){return d[c]!==I[c]};return se("div",{style:Te,children:[P("div",{ref:n,style:We,children:i?null:r.loading}),P("div",{children:i?r.children:null})]})},fe=x.createContext({}),H=function(){return x.useContext(fe)},Ze=["mapKey","version","plugins","AMapUI","Loca","loading","onMapCreate"];function X(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function Y(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?X(Object(n),!0).forEach(function(t){Be(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Be(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function q(e,r){return Xe(e)||Ne(e,r)||Je(e,r)||Fe()}function Fe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Je(e,r){if(!!e){if(typeof e=="string")return G(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(e,r)}}function G(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function Ne(e,r){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t=[],a=!0,i=!1,l,o;try{for(n=n.call(e);!(a=(l=n.next()).done)&&(t.push(l.value),!(r&&t.length===r));a=!0);}catch(u){i=!0,o=u}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return t}}function Xe(e){if(Array.isArray(e))return e}function Ye(e,r){if(e==null)return{};var n=qe(e,r),t,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],!(r.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function qe(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,i;for(i=0;i<t.length;i++)a=t[i],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}var Ge=x.forwardRef(function(e,r){var n=e.mapKey,t=e.version,a=e.plugins,i=e.AMapUI,l=e.Loca,o=e.loading;e.onMapCreate;var u=Ye(e,Ze),v=h.exports.useState(),g=q(v,2),s=g[0],p=g[1],f=h.exports.useState(),c=q(f,2),d=c[0],I=c[1];return h.exports.useImperativeHandle(r,function(){return d},[d]),P(fe.Provider,{value:{AMap:s,map:d},children:P(De,{mapKey:n,version:t,plugins:a,Loca:l,AMapUI:i,loading:o,onComplete:function(w){p(w)},children:P(Ve,Y(Y({loading:o},u),{},{onMapCreate:function(w){I(w)}}))})})});function Qe(e,r,n){var t={},a=function(l,o){return l in n?n[l](o[l]):o[l]};return r.forEach(function(i){i in e&&i!=="visible"&&(t[i]=a(i,e))}),t}var er=["content"],rr=er.concat([]),nr={},Q={};function ee(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function re(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ee(Object(n),!0).forEach(function(t){tr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function tr(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var ar=x.forwardRef(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=H(),t=n.map,a=n.AMap,i=h.exports.useRef(null),l=k(e,i,{setterMap:nr,converterMap:Q}),o=l.loaded,u=l.onInstanceCreated;h.exports.useEffect(function(){return t&&v().then(function(){t.on("rightclick",g),u==null||u(i.current)}),function(){i.current&&(i.current.off("rightclick",g),t.remove(i.current))}},[t]),h.exports.useImperativeHandle(r,function(){return i.current},[i.current]);var v=function(){var f=Qe(e,rr,Q);return i.current=new a.ContextMenu(f),Promise.resolve()},g=function(f){i.current&&i.current.open(t,f.lnglat)},s=function(){var f=x.Children.toArray(e.children);return P(W,{children:f.map(function(c,d){return x.isValidElement(c)?x.cloneElement(c,re(re({},c.props),{},{map:t,contextMenu:i.current,key:d})):null})})};return o?s():null}),ir=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=r.text,t=n===void 0?"":n,a=r.contextMenu,i=r.onClick,l=i===void 0?ke:i;return h.exports.useEffect(function(){return a&&a.addItem(t,l),function(){a&&a.removeItem(t,l)}},[r.contextMenu,r.text,r.onClick]),null},or=ar;or.Item=ir;function ne(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function te(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?ne(Object(n),!0).forEach(function(t){ur(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ur(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var lr=function(r,n,t){var a=n.marker,i=n.data,l=r;t&&t.length===2&&a.setOffset(ue(t)),le(r)&&(l=r(i[0])),l&&ae.exports.render(P("div",{children:l}),a.getContentDom())},cr=function(r,n,t){var a=n.marker,i=n.clusterData,l=n.count,o;t&&t.length===2&&a.setOffset(ue(t)),le(r)?o=r({count:l,list:i}):o=r,o&&ae.exports.render(P("div",{children:o}),a.getContentDom())},fr=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.map(function(n){var t=oe(n.lnglat||n.position);if(!!t)return te(te({},n),{},{lnglat:[t.getLng(),t.getLat()]})}).filter(function(n){return n})},sr={data:function(r,n){n.setData(fr(r))}},z={},pr=["styles","gridSize","maxZoom","averageCenter","data"],dr=pr.concat(["clusterByZoomChange","renderClusterMarker","renderMarker"]),vr=x.forwardRef(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=H(),t=n.map,a=n.AMap,i=h.exports.useRef(null),l=k(e,i,{setterMap:sr,converterMap:z}),o=l.loaded,u=l.onInstanceCreated;h.exports.useImperativeHandle(r,function(){return i.current},[o]),h.exports.useEffect(function(){t&&v().then(function(){u==null||u(i.current),i.current.on("click",function(s){!e.zoomOnClick||Array.isArray(s.clusterData)&&s.clusterData.length>1&&(t.setCenter(s.lnglat),t.zoomIn())})})},[t]);var v=function(){return new Promise(function(p){a.plugin(["AMap.MarkerCluster"],function(){var f=g();i.current=new a.MarkerCluster(t,[],f),p()})})},g=function(){var p={},f=function(d,I){return d in z?z[d](I[d]):I[d]};return dr.forEach(function(c){c in e&&(p[c]=f(c,e))}),e.render&&(p.renderMarker=function(c){lr(e.render,c,e.offset)}),e.renderCluster&&(p.renderClusterMarker=function(c){cr(e.renderCluster,c,e.clusterOffset||e.offset)}),p};return null});vr.defaultProps={zoomOnClick:!0};var gr={visible:function(r,n){n&&(r?n.show():n.hide())}},T={},hr=["zIndex","opacity","zooms","style","data","visible"],mr=hr.concat(["cursor"]),yr=x.forwardRef(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=H(),t=n.map,a=h.exports.useRef(null),i=k(e,a,{setterMap:gr,converterMap:T}),l=i.loaded,o=i.onInstanceCreated;h.exports.useEffect(function(){t&&v().then(function(){a.current.setMap(t),o==null||o(a.current)})},[t]),h.exports.useImperativeHandle(r,function(){return a.current},[l]);var u=function(){var s={},p=function(c,d){return c in T?T[c](d[c]):d[c]};return mr.forEach(function(f){f!=="data"&&f in e&&(s[f]=p(f,e))}),s},v=function(){var s=u();return a.current=new AMap.MassMarks([],s),Promise.resolve()};return null});yr.defaultProps={visible:!0};function Mr(){return P("div",{style:{height:"100vh"},children:P(Ge,{})})}export{Mr as default};