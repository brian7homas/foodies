!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/wp-content/themes/recipes/bundled-assets/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1),n(2)},function(t,e,n){},function(t,e,n){
/*!
 * Draggable 3.4.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t){"use strict";function e(t,n){if(t.parentNode&&(o||h(t))){var r=b(t),i=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",l=r?n?"rect":"g":"div",c=2!==n?0:100,u=3===n?100:0,d="position:absolute;display:block;pointer-events:none;",p=o.createElementNS?o.createElementNS(i.replace(/^https/,"http"),l):o.createElement(l);return n&&(r?(s=s||e(t),p.setAttribute("width",.01),p.setAttribute("height",.01),p.setAttribute("transform","translate("+c+","+u+")"),s.appendChild(p)):(a||((a=e(t)).style.cssText=d),p.style.cssText=d+"width:0.1px;height:0.1px;top:"+u+"px;left:"+c+"px",a.appendChild(p))),p}throw"Need document and parent."}function n(t,e,n,o,r,i,l){return t.a=e,t.b=n,t.c=o,t.d=r,t.e=i,t.f=l,t}var o,r,i,l,a,s,c,u,d,p="transform",f=p+"Origin",h=function(t){var e=t.ownerDocument||t;!(p in t.style)&&"msTransform"in t.style&&(f=(p="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(r=window,c=new M,e){i=(o=e).documentElement,l=e.body;var n=e.createElement("div"),a=e.createElement("div");l.appendChild(n),n.appendChild(a),n.style.position="static",n.style[p]="translate3d(0,0,1px)",u=a.offsetParent!==n,l.removeChild(n)}return e},g=function(t){for(var e,n;t&&t!==l;)(n=t._gsap)&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},x=[],m=[],y=function(){return r.pageYOffset||o.scrollTop||i.scrollTop||l.scrollTop||0},v=function(){return r.pageXOffset||o.scrollLeft||i.scrollLeft||l.scrollLeft||0},b=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},w=function t(e){return"fixed"===r.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)},T=function(t,n){var o,i,l,d,h,g=b(t),y=t===g,v=g?x:m;if(t===r)return t;if(v.length||v.push(e(t,1),e(t,2),e(t,3)),o=g?s:a,g)l=y?{x:0,y:0}:t.getBBox(),h=(i=t.transform?t.transform.baseVal:{}).numberOfItems?(d=(i=1<i.numberOfItems?function(t){for(var e=new M,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(i):i.getItem(0).matrix).a*l.x+i.c*l.y,i.b*l.x+i.d*l.y):(i=c,d=l.x,l.y),n&&"g"===t.tagName.toLowerCase()&&(d=h=0),o.setAttribute("transform","matrix("+i.a+","+i.b+","+i.c+","+i.d+","+(i.e+d)+","+(i.f+h)+")"),(y?g:t.parentNode).appendChild(o);else{if(d=h=0,u)for(i=t.offsetParent,l=t;(l=l&&l.parentNode)&&l!==i&&l.parentNode;)4<(r.getComputedStyle(l)[p]+"").length&&(d=l.offsetLeft,h=l.offsetTop,l=0);(l=o.style).top=t.offsetTop-h+"px",l.left=t.offsetLeft-d+"px",i=r.getComputedStyle(t),l[p]=i[p],l[f]=i[f],l.border=i.border,l.borderLeftStyle=i.borderLeftStyle,l.borderTopStyle=i.borderTopStyle,l.borderLeftWidth=i.borderLeftWidth,l.borderTopWidth=i.borderTopWidth,l.position="fixed"===i.position?"fixed":"absolute",t.parentNode.appendChild(o)}return o},M=((d=E.prototype).inverse=function(){var t=this.a,e=this.b,o=this.c,r=this.d,i=this.e,l=this.f,a=t*r-e*o||1e-10;return n(this,r/a,-e/a,-o/a,t/a,(o*l-r*i)/a,-(t*l-e*i)/a)},d.multiply=function(t){var e=this.a,o=this.b,r=this.c,i=this.d,l=this.e,a=this.f,s=t.a,c=t.c,u=t.b,d=t.d,p=t.e,f=t.f;return n(this,s*e+u*r,s*o+u*i,c*e+d*r,c*o+d*i,l+p*e+f*r,a+p*o+f*i)},d.clone=function(){return new E(this.a,this.b,this.c,this.d,this.e,this.f)},d.equals=function(t){var e=this.a,n=this.b,o=this.c,r=this.d,i=this.e,l=this.f;return e===t.a&&n===t.b&&o===t.c&&r===t.d&&i===t.e&&l===t.f},d.apply=function(t,e){void 0===e&&(e={});var n=t.x,o=t.y,r=this.a,i=this.b,l=this.c,a=this.d,s=this.e,c=this.f;return e.x=n*r+o*l+s||0,e.y=n*i+o*a+c||0,e},E);function E(t,e,o,r,i,l){void 0===t&&(t=1),void 0===e&&(e=0),void 0===o&&(o=0),void 0===r&&(r=1),void 0===i&&(i=0),void 0===l&&(l=0),n(this,t,e,o,r,i,l)}function S(t,e,n){if(!t||!t.parentNode||(o||h(t)).documentElement===t)return new M;var r=g(t.parentNode),i=b(t)?x:m,l=T(t,n),a=i[0].getBoundingClientRect(),s=i[1].getBoundingClientRect(),c=i[2].getBoundingClientRect(),u=l.parentNode,d=w(t),p=new M((s.left-a.left)/100,(s.top-a.top)/100,(c.left-a.left)/100,(c.top-a.top)/100,a.left+(d?0:v()),a.top+(d?0:y()));if(u.removeChild(l),r)for(a=r.length;a--;)(s=r[a]).scaleX=s.scaleY=0,s.renderTransform(1,s);return e?p.inverse():p}function X(){return"undefined"!=typeof window}function Y(){return it||X()&&(it=window.gsap)&&it.registerPlugin&&it}function L(t){return"function"==typeof t}function D(t){return"object"==typeof t}function k(t){return void 0===t}function P(){return!1}function N(t){return Math.round(1e4*t)/1e4}function C(t,e){var n=at.createElementNS?at.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):at.createElement(t);return n.style?n:at.createElement(t)}function O(t,e){var n,o={};for(n in t)o[n]=e?t[n]*e:t[n];return o}function _(){return Ot.forEach((function(t){return t()}))}function R(){return!Ot.length&&it.ticker.remove(_)}function A(t){for(var e=Ot.length;e--;)Ot[e]===t&&Ot.splice(e,1);it.to(R,{overwrite:!0,delay:15,duration:0,onComplete:R,data:"_draggable"})}function B(t,e,n,o){if(t.addEventListener){var r=mt[e];o=o||(gt?{passive:!1}:null),t.addEventListener(r||e,n,o),r&&e!==r&&t.addEventListener(e,n,o)}}function I(t,e,n){if(t.removeEventListener){var o=mt[e];t.removeEventListener(o||e,n),o&&e!==o&&t.removeEventListener(e,n)}}function W(t){t.preventDefault&&t.preventDefault(),t.preventManipulation&&t.preventManipulation()}function H(t){vt=t.touches&&yt<t.touches.length,I(t.target,"touchend",H)}function F(t){vt=t.touches&&yt<t.touches.length,B(t.target,"touchend",H)}function j(t){return lt.pageYOffset||t.scrollTop||t.documentElement.scrollTop||t.body.scrollTop||0}function z(t){return lt.pageXOffset||t.scrollLeft||t.documentElement.scrollLeft||t.body.scrollLeft||0}function V(t,e){B(t,"scroll",e),Ht(t.parentNode)||V(t.parentNode,e)}function K(t,e){I(t,"scroll",e),Ht(t.parentNode)||K(t.parentNode,e)}function G(t,e){var n="x"===e?"Width":"Height",o="scroll"+n,r="client"+n;return Math.max(0,Ht(t)?Math.max(st[o],ct[o])-(lt["inner"+n]||st[r]||ct[r]):t[o]-t[r])}function U(t,e){var n=G(t,"x"),o=G(t,"y");Ht(t)?t=Wt:U(t.parentNode,e),t._gsMaxScrollX=n,t._gsMaxScrollY=o,e||(t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0)}function q(t,e,n){var o=t.style;o&&(k(o[e])&&(e=ft(e,t)||e),null==n?o.removeProperty&&o.removeProperty(e.replace(/([A-Z])/g,"-$1").toLowerCase()):o[e]=n)}function $(t){return lt.getComputedStyle(t instanceof Element?t:t.host||(t.parentNode||{}).host||t)}function Z(t){if(t===lt)return Ft.left=Ft.top=0,Ft.width=Ft.right=st.clientWidth||t.innerWidth||ct.clientWidth||0,Ft.height=Ft.bottom=(t.innerHeight||0)-20<st.clientHeight?st.clientHeight:t.innerHeight||ct.clientHeight||0,Ft;var e=t.ownerDocument||at,n=k(t.pageX)?t.nodeType||k(t.left)||k(t.top)?ht(t)[0].getBoundingClientRect():t:{left:t.pageX-z(e),top:t.pageY-j(e),right:t.pageX-z(e)+1,bottom:t.pageY-j(e)+1};return k(n.right)&&!k(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):k(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n}function J(t,e,n){var o,r=t.vars,i=r[n],l=t._listeners[e];return L(i)&&(o=i.apply(r.callbackScope||t,r[n+"Params"]||[t.pointerEvent])),l&&!1===t.dispatchEvent(e)&&(o=!1),o}function Q(t,e){var n,o,r,i=ht(t)[0];return i.nodeType||i===lt?zt(i,e):k(t.left)?{left:o=t.min||t.minX||t.minRotation||0,top:n=t.min||t.minY||0,width:(t.max||t.maxX||t.maxRotation||0)-o,height:(t.max||t.maxY||0)-n}:(r={x:0,y:0},{left:t.left-r.x,top:t.top-r.y,width:t.width,height:t.height})}function tt(t,e,n,o,r,i){var l,a,s,c={};if(e)if(1!==r&&e instanceof Array){if(c.end=l=[],s=e.length,D(e[0]))for(a=0;a<s;a++)l[a]=O(e[a],r);else for(a=0;a<s;a++)l[a]=e[a]*r;n+=1.1,o-=1.1}else L(e)?c.end=function(n){var o,i,l=e.call(t,n);if(1!==r)if(D(l)){for(i in o={},l)o[i]=l[i]*r;l=o}else l*=r;return l}:c.end=e;return!n&&0!==n||(c.max=n),!o&&0!==o||(c.min=o),i&&(c.velocity=0),c}function et(t){var e;return!(!t||!t.getAttribute||t===ct)&&(!("true"!==(e=t.getAttribute("data-clickable"))&&("false"===e||!t.onclick&&!At.test(t.nodeName+"")&&"true"!==t.getAttribute("contentEditable")))||et(t.parentNode))}function nt(t,e){for(var n,o=t.length;o--;)(n=t[o]).ondragstart=n.onselectstart=e?null:P,it.set(n,{lazy:!0,userSelect:e?"text":"none"})}function ot(t,e){t=it.utils.toArray(t)[0],e=e||{};var n,o,r,i,l,a,s=document.createElement("div"),c=s.style,u=t.firstChild,d=0,p=0,f=t.scrollTop,h=t.scrollLeft,g=t.scrollWidth,x=t.scrollHeight,m=0,y=0,v=0;Et&&!1!==e.force3D?(l="translate3d(",a="px,0px)"):Yt&&(l="translate(",a="px)"),this.scrollTop=function(t,e){if(!arguments.length)return-this.top();this.top(-t,e)},this.scrollLeft=function(t,e){if(!arguments.length)return-this.left();this.left(-t,e)},this.left=function(n,o){if(!arguments.length)return-(t.scrollLeft+p);var r=t.scrollLeft-h,i=p;if((2<r||r<-2)&&!o)return h=t.scrollLeft,it.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-h),void(e.onKill&&e.onKill());(n=-n)<0?(p=n-.5|0,n=0):y<n?(p=n-y|0,n=y):p=0,(p||i)&&(this._skip||(c[Yt]=l+-p+"px,"+-d+a),0<=p+m&&(c.paddingRight=p+m+"px")),t.scrollLeft=0|n,h=t.scrollLeft},this.top=function(n,o){if(!arguments.length)return-(t.scrollTop+d);var r=t.scrollTop-f,i=d;if((2<r||r<-2)&&!o)return f=t.scrollTop,it.killTweensOf(this,{top:1,scrollTop:1}),this.top(-f),void(e.onKill&&e.onKill());(n=-n)<0?(d=n-.5|0,n=0):v<n?(d=n-v|0,n=v):d=0,(d||i)&&(this._skip||(c[Yt]=l+-p+"px,"+-d+a)),t.scrollTop=0|n,f=t.scrollTop},this.maxScrollTop=function(){return v},this.maxScrollLeft=function(){return y},this.disable=function(){for(u=s.firstChild;u;)i=u.nextSibling,t.appendChild(u),u=i;t===s.parentNode&&t.removeChild(s)},this.enable=function(){if((u=t.firstChild)!==s){for(;u;)i=u.nextSibling,s.appendChild(u),u=i;t.appendChild(s),this.calibrate()}},this.calibrate=function(e){var i,l,a,u=t.clientWidth===n;f=t.scrollTop,h=t.scrollLeft,u&&t.clientHeight===o&&s.offsetHeight===r&&g===t.scrollWidth&&x===t.scrollHeight&&!e||((d||p)&&(l=this.left(),a=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),i=$(t),u&&!e||(c.display="block",c.width="auto",c.paddingRight="0px",(m=Math.max(0,t.scrollWidth-t.clientWidth))&&(m+=parseFloat(i.paddingLeft)+(St?parseFloat(i.paddingRight):0))),c.display="inline-block",c.position="relative",c.overflow="visible",c.verticalAlign="top",c.boxSizing="content-box",c.width="100%",c.paddingRight=m+"px",St&&(c.paddingBottom=i.paddingBottom),n=t.clientWidth,o=t.clientHeight,g=t.scrollWidth,x=t.scrollHeight,y=t.scrollWidth-n,v=t.scrollHeight-o,r=s.offsetHeight,c.display="block",(l||a)&&(this.left(l),this.top(a)))},this.content=s,this.element=t,this._skip=!1,this.enable()}function rt(t){if(X()&&document.body){var e=window&&window.navigator;lt=window,at=document,st=at.documentElement,ct=at.body,ut=C("div"),Mt=!!window.PointerEvent,(dt=C("div")).style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",Tt="grab"===dt.style.cursor?"grab":"move",bt=e&&-1!==e.userAgent.toLowerCase().indexOf("android"),xt="ontouchstart"in st&&"orientation"in lt||e&&(0<e.MaxTouchPoints||0<e.msMaxTouchPoints),o=C("div"),i=(r=C("div")).style,l=ct,i.display="inline-block",i.position="relative",o.style.cssText=r.innerHTML="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",o.appendChild(r),l.appendChild(o),n=r.offsetHeight+18>o.scrollHeight,l.removeChild(o),St=n,mt=function(t){for(var e=t.split(","),n=(k(ut.onpointerdown)?k(ut.onmspointerdown)?t:"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":"pointerdown,pointermove,pointerup,pointercancel").split(","),o={},r=4;-1<--r;)o[e[r]]=n[r],o[n[r]]=e[r];try{st.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){gt=1}}))}catch(t){}return o}("touchstart,touchmove,touchend,touchcancel"),B(at,"touchcancel",P),B(lt,"touchmove",P),ct&&ct.addEventListener("touchstart",P),B(at,"contextmenu",(function(){for(var t in _t)_t[t].isPressed&&_t[t].endDrag()})),it=pt=Y()}var n,o,r,i,l;it?(wt=it.plugins.inertia,ft=it.utils.checkPrefix,Yt=ft(Yt),Lt=ft(Lt),ht=it.utils.toArray,Et=!!ft("perspective")):t&&console.warn("Please gsap.registerPlugin(Draggable)")}var it,lt,at,st,ct,ut,dt,pt,ft,ht,gt,xt,mt,yt,vt,bt,wt,Tt,Mt,Et,St,Xt,Yt="transform",Lt="transformOrigin",Dt=Array.isArray,kt=180/Math.PI,Pt=1e20,Nt=new M,Ct=Date.now||function(){return(new Date).getTime()},Ot=[],_t={},Rt=0,At=/^(?:a|input|textarea|button|select)$/i,Bt=0,It={},Wt={},Ht=function(t){return!(t&&t!==st&&9!==t.nodeType&&t!==at.body&&t!==lt&&t.nodeType&&t.parentNode)},Ft={},jt={},zt=function(t,e){e=ht(e)[0];var n,o,r,i,l,a,s,c,u,d,p,f,h,g,x=t.getBBox&&t.ownerSVGElement,m=t.ownerDocument||at;if(t===lt)r=j(m),o=(n=z(m))+(m.documentElement.clientWidth||t.innerWidth||m.body.clientWidth||0),i=r+((t.innerHeight||0)-20<m.documentElement.clientHeight?m.documentElement.clientHeight:t.innerHeight||m.body.clientHeight||0);else{if(e===lt||k(e))return t.getBoundingClientRect();n=r=0,x?(p=(d=t.getBBox()).width,f=d.height):(t.viewBox&&(d=t.viewBox.baseVal)&&(n=d.x||0,r=d.y||0,p=d.width,f=d.height),p||(d="border-box"===(h=$(t)).boxSizing,p=(parseFloat(h.width)||t.clientWidth||0)+(d?0:parseFloat(h.borderLeftWidth)+parseFloat(h.borderRightWidth)),f=(parseFloat(h.height)||t.clientHeight||0)+(d?0:parseFloat(h.borderTopWidth)+parseFloat(h.borderBottomWidth)))),o=p,i=f}return t===e?{left:n,top:r,width:o-n,height:i-r}:(a=(l=S(e,!0).multiply(S(t))).apply({x:n,y:r}),s=l.apply({x:o,y:r}),c=l.apply({x:o,y:i}),u=l.apply({x:n,y:i}),n=Math.min(a.x,s.x,c.x,u.x),r=Math.min(a.y,s.y,c.y,u.y),{left:n+((g=e.parentNode||{}).scrollLeft||0),top:r+(g.scrollTop||0),width:Math.max(a.x,s.x,c.x,u.x)-n,height:Math.max(a.y,s.y,c.y,u.y)-r})},Vt=((Xt=Kt.prototype).addEventListener=function(t,e){var n=this._listeners[t]||(this._listeners[t]=[]);~n.indexOf(e)||n.push(e)},Xt.removeEventListener=function(t,e){var n=this._listeners[t],o=n&&n.indexOf(e)||-1;-1<o&&n.splice(o,1)},Xt.dispatchEvent=function(t){var e,n=this;return(this._listeners[t]||[]).forEach((function(o){return!1===o.call(n,{type:t,target:n.target})&&(e=!1)})),e},Kt);function Kt(t){this._listeners={},this.target=t||this}var Gt,Ut=(function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(qt,Gt=Vt),qt.register=function(t){it=t,rt()},qt.create=function(t,e){return pt||rt(!0),ht(t).map((function(t){return new qt(t,e)}))},qt.get=function(t){return _t[(ht(t)[0]||{})._gsDragID]},qt.timeSinceDrag=function(){return(Ct()-Bt)/1e3},qt.hitTest=function(t,e,n){if(t===e)return!1;var o,r,i,l=Z(t),a=Z(e),s=l.top,c=l.left,u=l.right,d=l.bottom,p=l.width,f=l.height,h=a.left>u||a.right<c||a.top>d||a.bottom<s;return h||!n?!h:(i=-1!==(n+"").indexOf("%"),n=parseFloat(n)||0,(o={left:Math.max(c,a.left),top:Math.max(s,a.top)}).width=Math.min(u,a.right)-o.left,o.height=Math.min(d,a.bottom)-o.top,!(o.width<0||o.height<0)&&(i?p*f*(n*=.01)<=(r=o.width*o.height)||r>=a.width*a.height*n:o.width>n&&o.height>n))},qt);function qt(t,e){var n;function o(e,n){return parseFloat(ve.get(t,e,n))}function r(t){return W(t),t.stopImmediatePropagation&&t.stopImmediatePropagation(),!1}function i(e){if(se.autoScroll&&se.isDragging&&(pe||gt)){var n,o,r,l,a,s,c,u,d=t,p=15*se.autoScroll;for(pe=!1,Wt.scrollTop=null!=lt.pageYOffset?lt.pageYOffset:null!=we.documentElement.scrollTop?we.documentElement.scrollTop:we.body.scrollTop,Wt.scrollLeft=null!=lt.pageXOffset?lt.pageXOffset:null!=we.documentElement.scrollLeft?we.documentElement.scrollLeft:we.body.scrollLeft,l=se.pointerX-Wt.scrollLeft,a=se.pointerY-Wt.scrollTop;d&&!o;)n=(o=Ht(d.parentNode))?Wt:d.parentNode,r=o?{bottom:Math.max(st.clientHeight,lt.innerHeight||0),right:Math.max(st.clientWidth,lt.innerWidth||0),left:0,top:0}:n.getBoundingClientRect(),s=c=0,le&&((u=n._gsMaxScrollY-n.scrollTop)<0?c=u:a>r.bottom-ge&&u?(pe=!0,c=Math.min(u,p*(1-Math.max(0,r.bottom-a)/ge)|0)):a<r.top+fe&&n.scrollTop&&(pe=!0,c=-Math.min(n.scrollTop,p*(1-Math.max(0,a-r.top)/fe)|0)),c&&(n.scrollTop+=c)),ie&&((u=n._gsMaxScrollX-n.scrollLeft)<0?s=u:l>r.right-he&&u?(pe=!0,s=Math.min(u,p*(1-Math.max(0,r.right-l)/he)|0)):l<r.left+xe&&n.scrollLeft&&(pe=!0,s=-Math.min(n.scrollLeft,p*(1-Math.max(0,l-r.left)/xe)|0)),s&&(n.scrollLeft+=s)),o&&(s||c)&&(lt.scrollTo(n.scrollLeft,n.scrollTop),Ee(se.pointerX+s,se.pointerY+c)),d=n}if(gt){var f=se.x,h=se.y;ne?(se.deltaX=f-parseFloat(ve.rotation),se.rotation=f,ve.rotation=f+"deg",ve.renderTransform(1,ve)):b?(le&&(se.deltaY=h-b.top(),b.top(h)),ie&&(se.deltaX=f-b.left(),b.left(f))):ee?(le&&(se.deltaY=h-parseFloat(ve.y),ve.y=h+"px"),ie&&(se.deltaX=f-parseFloat(ve.x),ve.x=f+"px"),ve.renderTransform(1,ve)):(le&&(se.deltaY=h-parseFloat(t.style.top||0),t.style.top=h+"px"),ie&&(se.deltaY=f-parseFloat(t.style.left||0),t.style.left=f+"px")),!P||e||$t||(!($t=!0)===J(se,"drag","onDrag")&&(ie&&(se.x-=se.deltaX),le&&(se.y-=se.deltaY),i(!0)),$t=!1)}gt=!1}function l(e,n){var o,r,l=se.x,a=se.y;t._gsap||(ve=it.core.getCache(t)),ee?(se.x=parseFloat(ve.x),se.y=parseFloat(ve.y)):ne?se.x=se.rotation=parseFloat(ve.rotation):b?(se.y=b.top(),se.x=b.left()):(se.y=parseInt(t.style.top||(r=$(t))&&r.top,10)||0,se.x=parseInt(t.style.left||(r||{}).left,10)||0),(St||Xt||Yt)&&!n&&(se.isDragging||se.isThrowing)&&(Yt&&(It.x=se.x,It.y=se.y,(o=Yt(It)).x!==se.x&&(se.x=o.x,gt=!0),o.y!==se.y&&(se.y=o.y,gt=!0)),St&&(o=St(se.x))!==se.x&&(se.x=o,ne&&(se.rotation=o),gt=!0),Xt&&((o=Xt(se.y))!==se.y&&(se.y=o),gt=!0)),gt&&i(!0),e||(se.deltaX=se.x-l,se.deltaY=se.y-a,J(se,"throwupdate","onThrowUpdate"))}function a(t,e,n,o){return null==e&&(e=-Pt),null==n&&(n=Pt),L(t)?function(r){var i=se.isPressed?1-se.edgeResistance:1;return t.call(se,n<r?n+(r-n)*i:r<e?e+(r-e)*i:r)*o}:Dt(t)?function(o){for(var r,i,l=t.length,a=0,s=Pt;-1<--l;)(i=(r=t[l])-o)<0&&(i=-i),i<s&&e<=r&&r<=n&&(a=l,s=i);return t[a]}:isNaN(t)?function(t){return t}:function(){return t*o}}function s(){var n,r,i,l;Y=!1,b?(b.calibrate(),se.minX=H=-b.maxScrollLeft(),se.minY=ct=-b.maxScrollTop(),se.maxX=R=se.maxY=G=0,Y=!0):e.bounds&&(n=Q(e.bounds,t.parentNode),ne?(se.minX=H=n.left,se.maxX=R=n.left+n.width,se.minY=ct=se.maxY=G=0):k(e.bounds.maxX)&&k(e.bounds.maxY)?(r=Q(t,t.parentNode),se.minX=H=Math.round(o(oe,"px")+n.left-r.left-.5),se.minY=ct=Math.round(o(re,"px")+n.top-r.top-.5),se.maxX=R=Math.round(H+(n.width-r.width)),se.maxY=G=Math.round(ct+(n.height-r.height))):(n=e.bounds,se.minX=H=n.minX,se.minY=ct=n.minY,se.maxX=R=n.maxX,se.maxY=G=n.maxY),R<H&&(se.minX=R,se.maxX=R=H,H=se.minX),G<ct&&(se.minY=G,se.maxY=G=ct,ct=se.minY),ne&&(se.minRotation=H,se.maxRotation=R),Y=!0),e.liveSnap&&(i=!0===e.liveSnap?e.snap||{}:e.liveSnap,l=Dt(i)||L(i),ne?(St=a(l?i:i.rotation,H,R,1),Xt=null):i.points?Yt=function(t,e,n,o,r,i,l){return i=i&&i<Pt?i*i:Pt,L(t)?function(a){var s,c,u,d=se.isPressed?1-se.edgeResistance:1,p=a.x,f=a.y;return a.x=p=n<p?n+(p-n)*d:p<e?e+(p-e)*d:p,a.y=f=r<f?r+(f-r)*d:f<o?o+(f-o)*d:f,(s=t.call(se,a))!==a&&(a.x=s.x,a.y=s.y),1!==l&&(a.x*=l,a.y*=l),i<Pt&&(c=a.x-p,u=a.y-f,i<c*c+u*u&&(a.x=p,a.y=f)),a}:Dt(t)?function(e){for(var n,o,r,l,a=t.length,s=0,c=Pt;-1<--a;)(l=(n=(r=t[a]).x-e.x)*n+(o=r.y-e.y)*o)<c&&(s=a,c=l);return c<=i?t[s]:e}:function(t){return t}}(l?i:i.points,H,R,ct,G,i.radius,b?-1:1):(ie&&(St=a(l?i:i.x||i.left||i.scrollLeft,H,R,b?-1:1)),le&&(Xt=a(l?i:i.y||i.top||i.scrollTop,ct,G,b?-1:1))))}function c(){se.isThrowing=!1,J(se,"throwcomplete","onThrowComplete")}function u(){se.isThrowing=!1}function d(n,o){var r,i,a,s;n&&wt?(!0===n&&(r=e.snap||e.liveSnap||{},i=Dt(r)||L(r),n={resistance:(e.throwResistance||e.resistance||1e3)/(ne?10:1)},ne?n.rotation=tt(se,i?r:r.rotation,R,H,1,o):(ie&&(n[oe]=tt(se,i?r:r.points||r.x||r.left,R,H,b?-1:1,o||"x"===se.lockedAxis)),le&&(n[re]=tt(se,i?r:r.points||r.y||r.top,G,ct,b?-1:1,o||"y"===se.lockedAxis)),(r.points||Dt(r)&&D(r[0]))&&(n.linkedProps=oe+","+re,n.radius=r.radius))),se.isThrowing=!0,s=isNaN(e.overshootTolerance)?1===e.edgeResistance?0:1-se.edgeResistance+.2:e.overshootTolerance,n.duration||(n.duration={max:Math.max(e.minDuration||0,"maxDuration"in e?e.maxDuration:2),min:isNaN(e.minDuration)?0===s||D(n)&&1e3<n.resistance?0:.5:e.minDuration,overshoot:s}),se.tween=a=it.to(b||t,{inertia:n,data:"_draggable",onComplete:c,onInterrupt:u,onUpdate:e.fastMode?J:l,onUpdateParams:e.fastMode?[se,"onthrowupdate","onThrowUpdate"]:r&&r.radius?[!1,!0]:[]}),e.fastMode||(b&&(b._skip=!0),a.render(1e9,!0,!0),l(!0,!0),se.endX=se.x,se.endY=se.y,ne&&(se.endRotation=se.x),a.play(0),l(!0,!0),b&&(b._skip=!1))):Y&&se.applyBounds()}function p(e){var n,o=zt;zt=S(t.parentNode,!0),e&&se.isPressed&&!zt.equals(o||new M)&&(n=o.inverse().apply({x:w,y:T}),zt.apply(n,n),w=n.x,T=n.y),zt.equals(Nt)&&(zt=null)}function f(){var e,n,r,a=1-se.edgeResistance;p(!1),zt&&(jt.x=se.pointerX,jt.y=se.pointerY,zt.apply(jt,jt),w=jt.x,T=jt.y),gt&&(Ee(se.pointerX,se.pointerY),i(!0)),b?(s(),X=b.top(),E=b.left()):(Te()?(l(!0,!0),s()):se.applyBounds(),ne?(e=t.ownerSVGElement?[ve.xOrigin-t.getBBox().x,ve.yOrigin-t.getBBox().y]:($(t)[Lt]||"0 0").split(" "),ft=se.rotationOrigin=S(t).apply({x:parseFloat(e[0])||0,y:parseFloat(e[1])||0}),l(!0,!0),n=se.pointerX-ft.x,r=ft.y-se.pointerY,be&&(n-=z(we),r+=j(we)),E=se.x,X=se.y=Math.atan2(r,n)*kt):(X=o(re,"px"),E=o(oe,"px"))),Y&&a&&(R<E?E=R+(E-R)/a:E<H&&(E=H-(H-E)/a),ne||(G<X?X=G+(X-G)/a:X<ct&&(X=ct-(ct-X)/a))),se.startX=E,se.startY=X}function h(){!dt.parentNode||Te()||se.isDragging||dt.parentNode.removeChild(dt)}function g(n,o){var r;if(!v||se.isPressed||!n||!("mousedown"!==n.type&&"pointerdown"!==n.type||o)&&Ct()-ye<30&&mt[se.pointerEvent.type])Qt&&n&&v&&W(n);else{if(Vt=Te(),se.pointerEvent=n,mt[n.type]?(B(Ft=~n.type.indexOf("touch")?n.currentTarget||n.target:we,"touchend",Se),B(Ft,"touchmove",Me),B(Ft,"touchcancel",Se),B(we,"touchstart",F)):(Ft=null,B(we,"mousemove",Me)),Ut=null,Mt&&Ft||(B(we,"mouseup",Se),n&&n.target&&B(n.target,"mouseup",Se)),At=me.call(se,n.target)&&!1===e.dragClickables&&!o)return B(n.target,"change",Se),J(se,"pressInit","onPressInit"),J(se,"press","onPress"),void nt(ce,!0);if(Kt=!(!Ft||ie==le||!1===se.vars.allowNativeTouchScrolling||se.vars.allowContextMenu&&n&&(n.ctrlKey||2<n.which))&&(ie?"y":"x"),(Qt=!Kt&&!se.allowEventDefault)&&(W(n),B(lt,"touchforcechange",W)),n.changedTouches?(n=ut=n.changedTouches[0],pt=n.identifier):n.pointerId?pt=n.pointerId:ut=pt=null,yt++,function(t){Ot.push(t),1===Ot.length&&it.ticker.add(_)}(i),T=se.pointerY=n.pageY,w=se.pointerX=n.pageX,J(se,"pressInit","onPressInit"),(Kt||se.autoScroll)&&U(t.parentNode),!t.parentNode||!se.autoScroll||b||ne||!t.parentNode._gsMaxScrollX||dt.parentNode||t.getBBox||(dt.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(dt)),f(),se.tween&&se.tween.kill(),se.isThrowing=!1,it.killTweensOf(b||t,ue,!0),b&&it.killTweensOf(t,{scrollTo:1},!0),se.tween=se.lockedAxis=null,!e.zIndexBoost&&(ne||b||!1===e.zIndexBoost)||(t.style.zIndex=qt.zIndex++),se.isPressed=!0,P=!(!e.onDrag&&!se._listeners.drag),C=!(!e.onMove&&!se._listeners.move),!ne&&(!1!==e.cursor||e.activeCursor))for(r=ce.length;-1<--r;)it.set(ce[r],{cursor:e.activeCursor||e.cursor||("grab"===Tt?"grabbing":Tt)});J(se,"press","onPress")}}function x(e){if(e&&se.isDragging&&!b){var n=e.target||t.parentNode,o=n.scrollLeft-n._gsScrollX,r=n.scrollTop-n._gsScrollY;(o||r)&&(zt?(w-=o*zt.a+r*zt.c,T-=r*zt.d+o*zt.b):(w-=o,T-=r),n._gsScrollX+=o,n._gsScrollY+=r,Ee(se.pointerX,se.pointerY))}}function m(t){var e=Ct(),n=e-ye<40,o=e-de<40,r=n&&Zt===ye,i=se.pointerEvent&&se.pointerEvent.defaultPrevented,l=n&&Jt===ye,a=t.isTrusted||null==t.isTrusted&&n&&r;if((r||o&&!1!==se.vars.suppressClickOnDrag)&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),n&&(!se.pointerEvent||!se.pointerEvent.defaultPrevented)&&(!r||a&&!l))return a&&r&&(Jt=ye),void(Zt=ye);(se.isPressed||o||n)&&(a&&t.detail&&n&&!i||W(t))}function y(t){return zt?{x:t.x*zt.a+t.y*zt.c+zt.e,y:t.x*zt.b+t.y*zt.d+zt.f}:{x:t.x,y:t.y}}n=Gt.call(this)||this,it||rt(1),t=ht(t)[0],wt=wt||it.plugins.inertia,n.vars=e=O(e||{}),n.target=t,n.x=n.y=n.rotation=0,n.dragResistance=parseFloat(e.dragResistance)||0,n.edgeResistance=isNaN(e.edgeResistance)?1:parseFloat(e.edgeResistance)||0,n.lockAxis=e.lockAxis,n.autoScroll=e.autoScroll||0,n.lockedAxis=null,n.allowEventDefault=!!e.allowEventDefault,it.getProperty(t,"x");var v,b,w,T,E,X,Y,P,C,R,H,G,ct,ut,pt,ft,gt,Et,St,Xt,Yt,At,Ft,zt,Vt,Kt,Ut,$t,Zt,Jt,Qt,te=(e.type||"x,y").toLowerCase(),ee=~te.indexOf("x")||~te.indexOf("y"),ne=-1!==te.indexOf("rotation"),oe=ne?"rotation":ee?"x":"left",re=ee?"y":"top",ie=!(!~te.indexOf("x")&&!~te.indexOf("left")&&"scroll"!==te),le=!(!~te.indexOf("y")&&!~te.indexOf("top")&&"scroll"!==te),ae=e.minimumMovement||2,se=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n),ce=ht(e.trigger||e.handle||t),ue={},de=0,pe=!1,fe=e.autoScrollMarginTop||40,he=e.autoScrollMarginRight||40,ge=e.autoScrollMarginBottom||40,xe=e.autoScrollMarginLeft||40,me=e.clickableTest||et,ye=0,ve=t._gsap||it.core.getCache(t),be=function t(e){return"fixed"===$(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)}(t),we=t.ownerDocument||at,Te=function(){return se.tween&&se.tween.isActive()},Me=function(t){var e,n,o,r,i,l,a=t;if(v&&!vt&&se.isPressed&&t){if(e=(se.pointerEvent=t).changedTouches){if((t=e[0])!==ut&&t.identifier!==pt){for(r=e.length;-1<--r&&(t=e[r]).identifier!==pt;);if(r<0)return}}else if(t.pointerId&&pt&&t.pointerId!==pt)return;Ft&&Kt&&!Ut&&(jt.x=t.pageX,jt.y=t.pageY,zt&&zt.apply(jt,jt),n=jt.x,o=jt.y,((i=Math.abs(n-w))!==(l=Math.abs(o-T))&&(ae<i||ae<l)||bt&&Kt===Ut)&&(Ut=l<i&&ie?"x":"y",Kt&&Ut!==Kt&&B(lt,"touchforcechange",W),!1!==se.vars.lockAxisOnTouchScroll&&ie&&le&&(se.lockedAxis="x"===Ut?"y":"x",L(se.vars.onLockAxis)&&se.vars.onLockAxis.call(se,a)),bt&&Kt===Ut))?Se(a):(Qt=se.allowEventDefault||Kt&&(!Ut||Kt===Ut)||!1===a.cancelable?Qt&&!1:(W(a),!0),se.autoScroll&&(pe=!0),Ee(t.pageX-(be&&ne?z(we):0),t.pageY-(be&&ne?j(we):0),C))}else Qt&&t&&v&&W(t)},Ee=function(t,e,n){var o,r,i,l,a,s,c=1-se.dragResistance,u=1-se.edgeResistance,d=se.pointerX,p=se.pointerY,f=X,h=se.x,g=se.y,x=se.endX,m=se.endY,y=se.endRotation,v=gt;se.pointerX=t,se.pointerY=e,ne?(l=Math.atan2(ft.y-e,t-ft.x)*kt,180<(a=se.y-l)?(X-=360,se.y=l):a<-180&&(X+=360,se.y=l),i=se.x!==E||Math.abs(X-l)>ae?(se.y=l,E+(X-l)*c):E):(zt&&(s=t*zt.a+e*zt.c+zt.e,e=t*zt.b+e*zt.d+zt.f,t=s),(r=e-T)<ae&&-ae<r&&(r=0),(o=t-w)<ae&&-ae<o&&(o=0),(se.lockAxis||se.lockedAxis)&&(o||r)&&((s=se.lockedAxis)||(se.lockedAxis=s=ie&&Math.abs(o)>Math.abs(r)?"y":le?"x":null,s&&L(se.vars.onLockAxis)&&se.vars.onLockAxis.call(se,se.pointerEvent)),"y"===s?r=0:"x"===s&&(o=0)),i=N(E+o*c),l=N(X+r*c)),(St||Xt||Yt)&&(se.x!==i||se.y!==l&&!ne)?(Yt&&(It.x=i,It.y=l,i=N((s=Yt(It)).x),l=N(s.y)),St&&(i=N(St(i))),Xt&&(l=N(Xt(l)))):Y&&(R<i?i=R+Math.round((i-R)*u):i<H&&(i=H+Math.round((i-H)*u)),ne||(G<l?l=Math.round(G+(l-G)*u):l<ct&&(l=Math.round(ct+(l-ct)*u)))),se.x===i&&(se.y===l||ne)||(ne?(se.endRotation=se.x=se.endX=i,gt=!0):(le&&(se.y=se.endY=l,gt=!0),ie&&(se.x=se.endX=i,gt=!0)),n&&!1===J(se,"move","onMove")?(se.pointerX=d,se.pointerY=p,X=f,se.x=h,se.y=g,se.endX=x,se.endY=m,se.endRotation=y,gt=v):!se.isDragging&&se.isPressed&&(se.isDragging=!0,J(se,"dragstart","onDragStart")))},Se=function n(o,r){if(v&&se.isPressed&&(!o||null==pt||r||!(o.pointerId&&o.pointerId!==pt||o.changedTouches&&!function(t,e){for(var n=t.length;n--;)if(t[n].identifier===e)return!0}(o.changedTouches,pt)))){se.isPressed=!1;var l,a,s,c,u,p=o,f=se.isDragging,g=se.vars.allowContextMenu&&o&&(o.ctrlKey||2<o.which),x=it.delayedCall(.001,h);if(Ft?(I(Ft,"touchend",n),I(Ft,"touchmove",Me),I(Ft,"touchcancel",n),I(we,"touchstart",F)):I(we,"mousemove",Me),I(lt,"touchforcechange",W),Mt&&Ft||(I(we,"mouseup",n),o&&o.target&&I(o.target,"mouseup",n)),gt=!1,At&&!g)return o&&(I(o.target,"change",n),se.pointerEvent=p),nt(ce,!1),J(se,"release","onRelease"),J(se,"click","onClick"),void(At=!1);if(A(i),!ne)for(a=ce.length;-1<--a;)q(ce[a],"cursor",e.cursor||(!1!==e.cursor?Tt:null));if(f&&(de=Bt=Ct(),se.isDragging=!1),yt--,o){if((l=o.changedTouches)&&(o=l[0])!==ut&&o.identifier!==pt){for(a=l.length;-1<--a&&(o=l[a]).identifier!==pt;);if(a<0)return}se.pointerEvent=p,se.pointerX=o.pageX,se.pointerY=o.pageY}return g&&p?(W(p),Qt=!0,J(se,"release","onRelease")):p&&!f?(Qt=!1,Vt&&(e.snap||e.bounds)&&d(e.inertia||e.throwProps),J(se,"release","onRelease"),bt&&"touchmove"===p.type||-1!==p.type.indexOf("cancel")||(J(se,"click","onClick"),Ct()-ye<300&&J(se,"doubleclick","onDoubleClick"),c=p.target||t,ye=Ct(),u=function(){ye===Zt||!se.enabled()||se.isPressed||p.defaultPrevented||(c.click?c.click():we.createEvent&&((s=we.createEvent("MouseEvents")).initMouseEvent("click",!0,!0,lt,1,se.pointerEvent.screenX,se.pointerEvent.screenY,se.pointerX,se.pointerY,!1,!1,!1,!1,0,null),c.dispatchEvent(s)))},bt||p.defaultPrevented||it.delayedCall(.05,u))):(d(e.inertia||e.throwProps),se.allowEventDefault||!p||!1===e.dragClickables&&me.call(se,p.target)||!f||Kt&&(!Ut||Kt!==Ut)||!1===p.cancelable?Qt=!1:(Qt=!0,W(p)),J(se,"release","onRelease")),Te()&&x.duration(se.tween.duration()),f&&J(se,"dragend","onDragEnd"),!0}Qt&&o&&v&&W(o)};return(Et=qt.get(t))&&Et.kill(),n.startDrag=function(e,n){var o,r,i,l;g(e||se.pointerEvent,!0),n&&!se.hitTest(e||se.pointerEvent)&&(o=Z(e||se.pointerEvent),r=Z(t),i=y({x:o.left+o.width/2,y:o.top+o.height/2}),l=y({x:r.left+r.width/2,y:r.top+r.height/2}),w-=i.x-l.x,T-=i.y-l.y),se.isDragging||(se.isDragging=!0,J(se,"dragstart","onDragStart"))},n.drag=Me,n.endDrag=function(t){return Se(t||se.pointerEvent,!0)},n.timeSinceDrag=function(){return se.isDragging?0:(Ct()-de)/1e3},n.timeSinceClick=function(){return(Ct()-ye)/1e3},n.hitTest=function(t,e){return qt.hitTest(se.target,t,e)},n.getDirection=function(e,n){var o,r,i,l,a,s,c="velocity"===e&&wt?e:D(e)&&!ne?"element":"start";return"element"===c&&(a=Z(se.target),s=Z(e)),o="start"===c?se.x-E:"velocity"===c?wt.getVelocity(t,oe):a.left+a.width/2-(s.left+s.width/2),ne?o<0?"counter-clockwise":"clockwise":(n=n||2,r="start"===c?se.y-X:"velocity"===c?wt.getVelocity(t,re):a.top+a.height/2-(s.top+s.height/2),l=(i=Math.abs(o/r))<1/n?"":o<0?"left":"right",i<n&&(""!==l&&(l+="-"),l+=r<0?"up":"down"),l)},n.applyBounds=function(n,o){var r,a,c,u,p,f;if(n&&e.bounds!==n)return e.bounds=n,se.update(!0,o);if(l(!0),s(),Y&&!Te()){if(r=se.x,a=se.y,R<r?r=R:r<H&&(r=H),G<a?a=G:a<ct&&(a=ct),(se.x!==r||se.y!==a)&&(c=!0,se.x=se.endX=r,ne?se.endRotation=r:se.y=se.endY=a,i(gt=!0),se.autoScroll&&!se.isDragging))for(U(t.parentNode),u=t,Wt.scrollTop=null!=lt.pageYOffset?lt.pageYOffset:null!=we.documentElement.scrollTop?we.documentElement.scrollTop:we.body.scrollTop,Wt.scrollLeft=null!=lt.pageXOffset?lt.pageXOffset:null!=we.documentElement.scrollLeft?we.documentElement.scrollLeft:we.body.scrollLeft;u&&!f;)p=(f=Ht(u.parentNode))?Wt:u.parentNode,le&&p.scrollTop>p._gsMaxScrollY&&(p.scrollTop=p._gsMaxScrollY),ie&&p.scrollLeft>p._gsMaxScrollX&&(p.scrollLeft=p._gsMaxScrollX),u=p;se.isThrowing&&(c||se.endX>R||se.endX<H||se.endY>G||se.endY<ct)&&d(e.inertia||e.throwProps,c)}return se},n.update=function(e,n,o){var r=se.x,a=se.y;return p(!n),e?se.applyBounds():(gt&&o&&i(!0),l(!0)),n&&(Ee(se.pointerX,se.pointerY),gt&&i(!0)),se.isPressed&&!n&&(ie&&.01<Math.abs(r-se.x)||le&&.01<Math.abs(a-se.y)&&!ne)&&f(),se.autoScroll&&(U(t.parentNode,se.isDragging),pe=se.isDragging,i(!0),K(t,x),V(t,x)),se},n.enable=function(n){var o,i,l,a={lazy:!0};if(ne||!1===e.cursor||(a.cursor=e.cursor||Tt),it.utils.checkPrefix("touchCallout")&&(a.touchCallout="none"),a.touchAction=ie==le?"none":e.allowNativeTouchScrolling||e.allowEventDefault?"manipulation":ie?"pan-y":"pan-x","soft"!==n){for(i=ce.length;-1<--i;)l=ce[i],Mt||B(l,"mousedown",g),B(l,"touchstart",g),B(l,"click",m,!0),it.set(l,a),l.getBBox&&l.ownerSVGElement&&it.set(l.ownerSVGElement,{touchAction:ie==le?"none":e.allowNativeTouchScrolling||e.allowEventDefault?"manipulation":ie?"pan-y":"pan-x"}),e.allowContextMenu||B(l,"contextmenu",r);nt(ce,!1)}return V(t,x),v=!0,wt&&"soft"!==n&&wt.track(b||t,ee?"x,y":ne?"rotation":"top,left"),t._gsDragID=o="d"+Rt++,_t[o]=se,b&&(b.enable(),b.element._gsDragID=o),(e.bounds||ne)&&f(),e.bounds&&se.applyBounds(),se},n.disable=function(e){var n,o,l=se.isDragging;if(!ne)for(n=ce.length;-1<--n;)q(ce[n],"cursor",null);if("soft"!==e){for(n=ce.length;-1<--n;)q(o=ce[n],"touchCallout",null),q(o,"touchAction",null),I(o,"mousedown",g),I(o,"touchstart",g),I(o,"click",m),I(o,"contextmenu",r);nt(ce,!0),Ft&&(I(Ft,"touchcancel",Se),I(Ft,"touchend",Se),I(Ft,"touchmove",Me)),I(we,"mouseup",Se),I(we,"mousemove",Me)}return K(t,x),v=!1,wt&&"soft"!==e&&wt.untrack(b||t,ee?"x,y":ne?"rotation":"top,left"),b&&b.disable(),A(i),se.isDragging=se.isPressed=At=!1,l&&J(se,"dragend","onDragEnd"),se},n.enabled=function(t,e){return arguments.length?t?se.enable(e):se.disable(e):v},n.kill=function(){return se.isThrowing=!1,se.tween&&se.tween.kill(),se.disable(),it.set(ce,{clearProps:"userSelect"}),delete _t[t._gsDragID],se},~te.indexOf("scroll")&&(b=n.scrollProxy=new ot(t,function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}({onKill:function(){se.isPressed&&Se(null)}},e)),t.style.overflowY=le&&!xt?"auto":"hidden",t.style.overflowX=ie&&!xt?"auto":"hidden",t=b.content),ne?ue.rotation=1:(ie&&(ue[oe]=1),le&&(ue[re]=1)),ve.force3D=!("force3D"in e)||e.force3D,n.enable(),n}(function(t,e){for(var n in e)n in t||(t[n]=e[n])})(Ut.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Ut.zIndex=1e3,Ut.version="3.4.0",Y()&&it.registerPlugin(Ut),t.Draggable=Ut,t.default=Ut,"undefined"==typeof window||window!==t?Object.defineProperty(t,"__esModule",{value:!0}):delete t.default}(e)}]);