!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},,function(e,t,n){"use strict";var r,o,a,i=n(0)(n(3));function l(){var e=r.localStorage;return a&&(e=os.localStorage()),e}function s(e,t,n,r){return"function"==typeof t&&(r=n,n=t,t=void 0),"function"!=typeof n&&(r=n,n=void 0),{url:e,data:t,fnSuc:n,dataType:r}}r=window,o={},a=/android/gi.test(navigator.appVersion),o.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},o.trimAll=function(e){return e.replace(/\s*/g,"")},o.isElement=function(e){return!(!e||1!=e.nodeType)},o.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},o.isEmptyObject=function(e){return"{}"===JSON.stringify(e)},o.addEvt=function(e,t,n,r){o.isElement(e)?(r=r||!1,e.addEventListener&&e.addEventListener(t,n,r)):console.warn("$api.addEvt Function need el param, el param must be DOM Element")},o.rmEvt=function(e,t,n,r){o.isElement(e)?(r=r||!1,e.removeEventListener&&e.removeEventListener(t,n,r)):console.warn("$api.rmEvt Function need el param, el param must be DOM Element")},o.one=function(e,t,n,r){if(o.isElement(e)){r=r||!1;var a=this;a.addEvt(e,t,function o(){n&&n(),a.rmEvt(e,t,o,r)},r)}else console.warn("$api.one Function need el param, el param must be DOM Element")},o.dom=function(e,t){if(1===arguments.length&&"string"==typeof e){if(document.querySelector)return document.querySelector(e)}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},o.domAll=function(e,t){if(1===arguments.length&&"string"==typeof e){if(document.querySelectorAll)return document.querySelectorAll(e)}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},o.byId=function(e){return document.getElementById(e)},o.first=function(e,t){return 1===arguments.length?o.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,t+":first-child"):void 0},o.last=function(e,t){if(1===arguments.length){if(!o.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var n=e.children;return n[n.length-1]}if(2===arguments.length)return this.dom(e,t+":last-child")},o.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},o.not=function(e,t){return this.domAll(e,":not("+t+")")},o.prev=function(e){if(o.isElement(e)){var t=e.previousSibling;return t.nodeType&&3===t.nodeType?t=t.previousSibling:void 0}console.warn("$api.prev Function need el param, el param must be DOM Element")},o.next=function(e){if(o.isElement(e)){var t=e.nextSibling;return t.nodeType&&3===t.nodeType?t=t.nextSibling:void 0}console.warn("$api.next Function need el param, el param must be DOM Element")},o.closest=function(e,t){var n,r;if(o.isElement(e))return function e(t,a){for(n=o.domAll(t.parentNode,a),r=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n].isEqualNode(t))return e[n];return!1}(n,t);!r;){if(null!=(t=t.parentNode)&&t.nodeType==t.DOCUMENT_NODE)return!1;e(t,a)}return r}(e,t);console.warn("$api.closest Function need el param, el param must be DOM Element")},o.contains=function(e,t){var n=!1;if(t===e)return!0;do{if((t=t.parentNode)===e)return!0}while(t===document.body||t===document.documentElement);return n},o.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},o.attr=function(e,t,n){if(o.isElement(e))return 2==arguments.length?e.getAttribute(t):3==arguments.length?(e.setAttribute(t,n),e):void 0;console.warn("$api.attr Function need el param, el param must be DOM Element")},o.removeAttr=function(e,t){o.isElement(e)?2===arguments.length&&e.removeAttribute(t):console.warn("$api.removeAttr Function need el param, el param must be DOM Element")},o.hasCls=function(e,t){if(o.isElement(e))return-1<e.className.indexOf(t);console.warn("$api.hasCls Function need el param, el param must be DOM Element")},o.addCls=function(e,t){if(o.isElement(e)){if("classList"in e)e.classList.add(t);else{var n=e.className+" "+t;e.className=n}return e}console.warn("$api.addCls Function need el param, el param must be DOM Element")},o.removeCls=function(e,t){if(o.isElement(e)){if("classList"in e)e.classList.remove(t);else{var n=e.className.replace(t,"");e.className=n}return e}console.warn("$api.removeCls Function need el param, el param must be DOM Element")},o.toggleCls=function(e,t){if(o.isElement(e))return"classList"in e?e.classList.toggle(t):o.hasCls(e,t)?o.removeCls(e,t):o.addCls(e,t),e;console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},o.val=function(e,t){if(o.isElement(e)){if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=t,e;case"INPUT":case"TEXTAREA":return e.value=t,e}}else console.warn("$api.val Function need el param, el param must be DOM Element")},o.prepend=function(e,t){if(o.isElement(e))return e.insertAdjacentHTML("afterbegin",t),e;console.warn("$api.prepend Function need el param, el param must be DOM Element")},o.append=function(e,t){if(o.isElement(e))return e.insertAdjacentHTML("beforeend",t),e;console.warn("$api.append Function need el param, el param must be DOM Element")},o.before=function(e,t){if(o.isElement(e))return e.insertAdjacentHTML("beforebegin",t),e;console.warn("$api.before Function need el param, el param must be DOM Element")},o.after=function(e,t){if(o.isElement(e))return e.insertAdjacentHTML("afterend",t),e;console.warn("$api.after Function need el param, el param must be DOM Element")},o.html=function(e,t){if(o.isElement(e))return 1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=t,e):void 0;console.warn("$api.html Function need el param, el param must be DOM Element")},o.text=function(e,t){if(o.isElement(e))return 1===arguments.length?e.textContent:2===arguments.length?(e.textContent=t,e):void 0;console.warn("$api.text Function need el param, el param must be DOM Element")},o.offset=function(e){if(o.isElement(e)){var t=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=Math.max(document.documentElement.scrollTop,document.body.scrollTop),r=e.getBoundingClientRect();return{l:r.left+t,t:r.top+n,w:e.offsetWidth,h:e.offsetHeight}}console.warn("$api.offset Function need el param, el param must be DOM Element")},o.css=function(e,t){o.isElement(e)?"string"==typeof t&&0<t.indexOf(":")&&e.style&&(e.style.cssText+=";"+t):console.warn("$api.css Function need el param, el param must be DOM Element")},o.cssVal=function(e,t){if(o.isElement(e)){if(2===arguments.length)return r.getComputedStyle(e,null).getPropertyValue(t)}else console.warn("$api.cssVal Function need el param, el param must be DOM Element")},o.jsonToStr=function(e){if("object"===(0,i.default)(e))return JSON&&JSON.stringify(e)},o.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},o.setStorage=function(e,t){if(2===arguments.length){var n=t;n="object"==(0,i.default)(n)?"obj-"+(n=JSON.stringify(n)):"str-"+n;var r=l();r&&r.setItem(e,n)}},o.getStorage=function(e){var t=l();if(t){var n=t.getItem(e);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}},o.rmStorage=function(e){var t=l();t&&e&&t.removeItem(e)},o.clearStorage=function(){var e=l();e&&e.clear()},o.fixIos7Bar=function(e){if(o.isElement(e)){if("ios"==api.systemType){var t=api.systemVersion,n=parseInt(t,10),r=api.fullScreen,a=api.iOS7StatusBarAppearance;7<=n&&!r&&a&&(e.style.paddingTop="20px")}}else console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element")},o.fixStatusBar=function(e){if(o.isElement(e)){var t=api.systemType;if("ios"==t)o.fixIos7Bar(e);else if("android"==t){var n=api.systemVersion;4.4<=(n=parseFloat(n))&&(e.style.paddingTop="25px")}}else console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element")},o.toast=function(e,t,n){function r(e,t){api.showProgress(e),setTimeout(function(){api.hideProgress()},t)}var o={};1===arguments.length?(n=n||500,"number"==typeof e?n=e:o.title=e+"",r(o,n)):2===arguments.length&&(n=n||500,"number"==typeof(t=t)&&(n=t,t=null),e&&(o.title=e),t&&(o.text=t),r(o,n)),e&&(o.title=e),t&&(o.text=t),r(o,n=n||500)},o.post=function(){var e=s.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.data&&(t.data=e.data),e.dataType){var r=e.dataType.toLowerCase();"text"!=r&&"json"!=r||(t.dataType=r)}else t.dataType="json";t.method="post",api.ajax(t,function(e,t){e&&n&&n(e)})},o.get=function(){var e=s.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.dataType){var r=e.dataType.toLowerCase();"text"!=r&&"json"!=r||(t.dataType=r)}else t.dataType="text";t.method="get",api.ajax(t,function(e,t){e&&n&&n(e)})},r.$api=o},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r}]);