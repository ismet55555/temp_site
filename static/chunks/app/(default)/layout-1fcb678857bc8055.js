(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[534],{9768:function(e,t,n){e.exports=function(){"use strict";var e="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},t="Expected a function",o=NaN,i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,d=l||u||Function("return this")(),m=Object.prototype.toString,f=Math.max,p=Math.min,v=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return o;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var l=a.test(e);return l||s.test(e)?c(e.slice(2),l?2:8):r.test(e)?o:+e}var g=function(e,n,o){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(t);return b(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),function(e,n,o){var i,r,a,s,c,l,u=0,d=!1,m=!1,g=!0;if("function"!=typeof e)throw TypeError(t);function w(t){var n=i,o=r;return i=r=void 0,u=t,s=e.apply(o,n)}function y(e){var t=e-l;return void 0===l||t>=n||t<0||m&&e-u>=a}function x(){var e,t=v();if(y(t))return k(t);c=setTimeout(x,(e=n-(t-l),m?p(e,a-(t-u)):e))}function k(e){return c=void 0,g&&i?w(e):(i=r=void 0,s)}function j(){var e,t=v(),o=y(t);if(i=arguments,r=this,l=t,o){if(void 0===c)return u=e=l,c=setTimeout(x,n),d?w(e):s;if(m)return c=setTimeout(x,n),w(l)}return void 0===c&&(c=setTimeout(x,n)),s}return n=h(n)||0,b(o)&&(d=!!o.leading,a=(m="maxWait"in o)?f(h(o.maxWait)||0,n):a,g="trailing"in o?!!o.trailing:g),j.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=l=r=c=void 0},j.flush=function(){return void 0===c?s:k(v())},j}(e,n,{leading:i,maxWait:n,trailing:r})},w=NaN,y=/^\s+|\s+$/g,x=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,j=/^0o[0-7]+$/i,N=parseInt,O="object"==typeof e&&e&&e.Object===Object&&e,E="object"==typeof self&&self&&self.Object===Object&&self,_=O||E||Function("return this")(),z=Object.prototype.toString,C=Math.max,L=Math.min,T=function(){return _.Date.now()};function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==z.call(t))return w;if(A(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=A(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(y,"");var o=k.test(e);return o||j.test(e)?N(e.slice(2),o?2:8):x.test(e)?w:+e}var M=function(e,t,n){var o,i,r,a,s,c,l=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=r}function v(){var e,n=T();if(p(n))return b(n);s=setTimeout(v,(e=t-(n-c),d?L(e,r-(n-l)):e))}function b(e){return s=void 0,m&&o?f(e):(o=i=void 0,a)}function h(){var e,n=T(),r=p(n);if(o=arguments,i=this,c=n,r){if(void 0===s)return l=e=c,s=setTimeout(v,t),u?f(e):a;if(d)return s=setTimeout(v,t),f(c)}return void 0===s&&(s=setTimeout(v,t)),a}return t=S(t)||0,A(n)&&(u=!!n.leading,r=(d="maxWait"in n)?C(S(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),h.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=i=s=void 0},h.flush=function(){return void 0===s?a:b(T())},h},q=function(){};function D(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1)if((o=t[n]).dataset&&o.dataset.aos||o.children&&e(o.children))return!0;return!1}(t.concat(n)))return q()})}function H(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var P={isSupported:function(){return!!H()},ready:function(e,t){var n=window.document,o=new(H())(D);q=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},$=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,I=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,R=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,X=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function Y(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){$(this,e)}return W(e,[{key:"phone",value:function(){var e=Y();return!(!F.test(e)&&!I.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=Y();return!(!R.test(e)&&!X.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},G=function(e){return e.forEach(function(e,t){var n,o,i,r,a,s;return n=window.pageYOffset,o=e.options,i=e.position,r=e.node,e.data,a=function(){var t;e.animated&&((t=o.animatedClassNames)&&t.forEach(function(e){return r.classList.remove(e)}),V("aos:out",r),e.options.id&&V("aos:in:"+e.options.id,r),e.animated=!1)},void(o.mirror&&n>=i.out&&!o.once?a():n>=i.in?e.animated||((s=o.animatedClassNames)&&s.forEach(function(e){return r.classList.add(e)}),V("aos:in",r),e.options.id&&V("aos:in:"+e.options.id,r),e.animated=!0):e.animated&&!o.once&&a())})},K=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},J=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},Q=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},Z=[],ee=!1,et={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},en=function(){return document.all&&!window.atob},eo=function(){var e,t;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ee=!0),ee&&(e=Z,t=et,e.forEach(function(e,n){var o,i,r,a,s,c=J(e.node,"mirror",t.mirror),l=J(e.node,"once",t.once),u=J(e.node,"id"),d=t.useClassNames&&e.node.getAttribute("data-aos"),m=[t.animatedClassName].concat(d?d.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=J(e,"anchor"),r=J(e,"anchor-placement"),a=Number(J(e,"offset",r?0:t)),s=r||n,c=e;i&&document.querySelectorAll(i)&&(c=document.querySelectorAll(i)[0]);var l=K(c).top-o;switch(s){case"top-bottom":break;case"center-bottom":l+=c.offsetHeight/2;break;case"bottom-bottom":l+=c.offsetHeight;break;case"top-center":l+=o/2;break;case"center-center":l+=o/2+c.offsetHeight/2;break;case"bottom-center":l+=o/2+c.offsetHeight;break;case"top-top":l+=o;break;case"bottom-top":l+=o+c.offsetHeight;break;case"center-top":l+=o+c.offsetHeight/2}return l+a}(e.node,t.offset,t.anchorPlacement),out:c&&(o=e.node,i=t.offset,window.innerHeight,r=J(o,"anchor"),a=J(o,"offset",i),s=o,r&&document.querySelectorAll(r)&&(s=document.querySelectorAll(r)[0]),K(s).top+s.offsetHeight-a)},e.options={once:l,mirror:c,animatedClassNames:m,id:u}}),G(Z=e),window.addEventListener("scroll",g(function(){G(Z,et.once)},et.throttleDelay)))},ei=function(){if(Z=Q(),ea(et.disable)||en())return er();eo()},er=function(){Z.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),et.initClassName&&e.node.classList.remove(et.initClassName),et.animatedClassName&&e.node.classList.remove(et.animatedClassName)})},ea=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return et=B(et,e),Z=Q(),et.disableMutationObserver||P.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),et.disableMutationObserver=!0),et.disableMutationObserver||P.ready("[data-aos]",ei),ea(et.disable)||en()?er():(document.querySelector("body").setAttribute("data-aos-easing",et.easing),document.querySelector("body").setAttribute("data-aos-duration",et.duration),document.querySelector("body").setAttribute("data-aos-delay",et.delay),-1===["DOMContentLoaded","load"].indexOf(et.startEvent)?document.addEventListener(et.startEvent,function(){eo(!0)}):window.addEventListener("load",function(){eo(!0)}),"DOMContentLoaded"===et.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&eo(!0),window.addEventListener("resize",M(eo,et.debounceDelay,!0)),window.addEventListener("orientationchange",M(eo,et.debounceDelay,!0)),Z)},refresh:eo,refreshHard:ei}}()},3411:function(e,t,n){Promise.resolve().then(n.bind(n,1999))},1999:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var o=n(9268),i=n(6006),r=n(9768),a=n.n(r);function s(){return(0,o.jsx)("footer",{children:(0,o.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,o.jsxs)("div",{className:"md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200",children:[(0,o.jsxs)("ul",{className:"flex mb-4 md:order-1 md:ml-4 md:mb-0",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Twitter",children:(0,o.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"})})})}),(0,o.jsx)("li",{className:"ml-4",children:(0,o.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Github",children:(0,o.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"})})})}),(0,o.jsx)("li",{className:"ml-4",children:(0,o.jsx)("a",{href:"#0",className:"flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out","aria-label":"Facebook",children:(0,o.jsx)("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"})})})})]}),(0,o.jsx)("div",{className:"text-sm text-gray-600 mr-4",children:"\xa9 XXXXX. All rights reserved."})]})})})}function c(e){let{children:t}=e;return(0,i.useEffect)(()=>{a().init({once:!0,disable:"phone",duration:700,easing:"ease-out-cubic"})}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("main",{className:"grow",children:t}),(0,o.jsx)(s,{})]})}n(3263)},3263:function(){},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(6006),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,r={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:i,type:e,key:l,ref:u,props:r,_owner:s.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[2,667,488,744],function(){return e(e.s=3411)}),_N_E=e.O()}]);