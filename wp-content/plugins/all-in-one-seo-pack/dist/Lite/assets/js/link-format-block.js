!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){!function(){e.exports=this.wp.url}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===c)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.wp.richText}()},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){!function(){e.exports=this.wp.primitives}()},function(e,t,n){var r=n(21);e.exports=function(e,t){if(null==e)return{};var n,o,c=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(22);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(23),o=n(2);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){var r=n(30),o=n(31),c=n(32),i=n(34);e.exports=function(e,t){return r(e)||o(e,t)||c(e,t)||i()}},function(e,t){!function(){e.exports=this.regeneratorRuntime}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){function n(e,t,n,r,o,c,i){try{var l=e[c](i),a=l.value}catch(e){return void n(e)}l.done?t(a):Promise.resolve(a).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,c){var i=e.apply(t,r);function l(e){n(i,o,c,l,a,"next",e)}function a(e){n(i,o,c,l,a,"throw",e)}l(void 0)}))}}},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},,function(e,t){!function(){e.exports=this.wp.htmlEntities}()},function(e,t){!function(){e.exports=this.wp.compose}()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){!function(){e.exports=this.wp.dom}()},function(e,t){!function(){e.exports=this.wp.editor}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}return n}}},function(e,t,n){var r=n(33);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,function(e,t,n){"use strict";n.r(t);var r=n(11),o=n.n(r),c=n(12),i=n.n(c),l=n(13),a=n.n(l),s=n(2),u=n.n(s),p=n(14),f=n.n(p),b=n(15),d=n.n(b),m=n(7),O=n.n(m),h=n(0),g=n(1),v=n(4),j=n(8),y=n(3),k=n(19),_=n(25),w=n(10),E=Object(h.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(h.createElement)(w.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),x=Object(h.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(h.createElement)(w.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),S=n(16),P=n.n(S),C=n(17),T=n.n(C),N=n(5),L=n(9),R=n.n(L),A=n(18),H=n.n(A),I=n(20),F=n.n(I),z=n(6),D=n.n(z),M=n(26),V=n(27),U=n(28);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=[{id:"opensInNewTab",title:Object(g.__)("Open in new tab"),type:"ToggleControl"},{id:"nofollow",title:Object(g.__)('Add "nofollow" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"sponsored",title:Object(g.__)('Add "sponsored" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"ugc",title:Object(g.__)('Add "ugc" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"title",title:Object(g.__)("Add title attribute to link","all-in-one-seo-pack"),type:"TextControl"}],Q=function(e){var t=e.value,n=e.onChange,r=void 0===n?N.noop:n,o=e.settings,c=void 0===o?G:o;if(!c||!c.length)return null;var i=function(e){return function(n){r(W(W({},t),{},P()({},e.id,n)))}},l=c.map((function(e){if("TextControl"===e.type){var n=Object(h.useState)(),o=T()(n,2),c=o[0],l=o[1];return Object(h.createElement)(v.TextControl,{"data-aioseop":"true",className:"block-editor-link-control__setting",key:e.id,label:e.title,onChange:function(e){l(e)},onBlur:function(n){r(W(W({},t),{},P()({},e.id,n.target.value)))},value:c||t[e.id]})}if("ToggleControl"===e.type)return Object(h.createElement)(v.ToggleControl,{className:"block-editor-link-control__setting",key:e.id,label:e.title,onChange:i(e),checked:!!t&&!!t[e.id]})}));return Object(h.createElement)("fieldset",{className:"block-editor-link-control__settings"},Object(h.createElement)(v.VisuallyHidden,{as:"legend"},Object(g.__)("Currently selected link settings")),l)};function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var K=function(e){var t=e.icon,n=e.size,r=void 0===n?24:n,o=$(e,["icon","size"]);return Object(h.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o))},X=Object(h.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(h.createElement)(w.Path,{d:"M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"})),Y=function(e){var t=e.itemProps,n=e.suggestion,r=e.isSelected,o=void 0!==r&&r,c=e.onClick,i=e.isURL,l=void 0!==i&&i,a=e.searchTerm,s=void 0===a?"":a;return Object(h.createElement)(v.Button,R()({},t,{onClick:c,className:D()("block-editor-link-control__search-item",{"is-selected":o,"is-url":l,"is-entity":!l})}),l&&Object(h.createElement)(K,{className:"block-editor-link-control__search-item-icon",icon:X}),Object(h.createElement)("span",{className:"block-editor-link-control__search-item-header"},Object(h.createElement)("span",{className:"block-editor-link-control__search-item-title"},Object(h.createElement)(v.TextHighlight,{text:n.title,highlight:s})),Object(h.createElement)("span",{"aria-hidden":!l,className:"block-editor-link-control__search-item-info"},!l&&(Object(y.safeDecodeURI)(n.url)||""),l&&Object(g.__)("Press ENTER to add this link"))),n.type&&Object(h.createElement)("span",{className:"block-editor-link-control__search-item-type"},n.type))},Z=Object(h.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(h.createElement)(w.Path,{d:"M16 4h2v9H7v3l-5-4 5-4v3h9V4z"})),ee=n(29),te=function(e){var t=e.value,n=e.onChange,r=e.onSelect,o=e.renderSuggestions,c=e.fetchSuggestions,i=e.showInitialSuggestions,l=e.errorMessage,a=Object(h.useState)(),s=T()(a,2),u=s[0],p=s[1];return Object(h.createElement)("form",{onSubmit:function(e){e.preventDefault(),r(u||{url:t})}},Object(h.createElement)("div",{className:"block-editor-link-control__search-input-wrapper"},Object(h.createElement)(ee.URLInput,{className:"block-editor-link-control__search-input",value:t,onChange:function(e,t){n(e),p(t)},placeholder:Object(g.__)("Search or type url"),__experimentalRenderSuggestions:o,__experimentalFetchLinkSuggestions:c,__experimentalHandleURLSuggestions:!0,__experimentalShowInitialSuggestions:i}),Object(h.createElement)("div",{className:"block-editor-link-control__search-actions"},Object(h.createElement)(v.Button,{type:"submit",label:Object(g.__)("Submit"),icon:Z,className:"block-editor-link-control__search-submit"}))),l&&Object(h.createElement)(v.Notice,{className:"block-editor-link-control__search-error",status:"error",isDismissible:!1},l))},ne=function(e){var t=e.searchTerm,n=e.onClick,r=e.itemProps,o=e.isSelected;return t?Object(h.createElement)(v.Button,R()({},r,{className:D()("block-editor-link-control__search-create block-editor-link-control__search-item",{"is-selected":o}),onClick:n}),Object(h.createElement)(v.Icon,{className:"block-editor-link-control__search-item-icon",icon:"insert"}),Object(h.createElement)("span",{className:"block-editor-link-control__search-item-header"},Object(h.createElement)("span",{className:"block-editor-link-control__search-item-title"},Object(h.createInterpolateElement)(Object(g.sprintf)(Object(g.__)("New page: <mark>%s</mark>"),t),{mark:Object(h.createElement)("mark",null)})))):null};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=Object(v.createSlotFill)("BlockEditorLinkControlViewer"),ie=ce.Slot,le=ce.Fill,ae=function(e){var t=!1;return{promise:new Promise((function(n,r){e.then((function(e){return t?r({isCanceled:!0}):n(e)}),(function(e){return r(t?{isCanceled:!0}:e)}))})),cancel:function(){t=!0}}};function se(e){var t=e.value,n=e.settings,r=e.onChange,o=void 0===r?N.noop:r,c=e.showSuggestions,i=void 0===c||c,l=e.showInitialSuggestions,a=e.forceIsEditingLink,s=e.createSuggestion,u=Object(h.useRef)(),p=Object(h.useRef)(),f=Object(h.useRef)(),b=Object(M.useInstanceId)(se),d=Object(h.useState)(t&&t.url||""),m=T()(d,2),O=m[0],j=m[1],k=Object(h.useState)(void 0!==a?a:!t||!t.url),_=T()(k,2),w=_[0],E=_[1],x=Object(h.useState)(!1),S=T()(x,2),P=S[0],C=S[1],L=Object(h.useState)(null),A=T()(L,2),I=A[0],z=A[1],B=Object(h.useRef)(!1),W=Object(V.useSelect)((function(e){return{fetchSearchSuggestions:(0,e("core/block-editor").getSettings)().__experimentalFetchLinkSuggestions}}),[]).fetchSearchSuggestions,G=t&&Object(y.filterURLForDisplay)(Object(y.safeDecodeURI)(t.url))||"";Object(h.useEffect)((function(){void 0!==a&&a!==w&&E(a)}),[a]),Object(h.useEffect)((function(){B.current&&f.current&&!f.current.contains(document.activeElement)&&(U.focus.focusable.find(f.current)[0]||f.current).focus();B.current=!1}),[w]),Object(h.useEffect)((function(){return function(){u.current&&u.current.cancel(),p.current&&p.current.cancel()}}),[]);var q=function(e){var t="URL",n=Object(y.getProtocol)(e)||"";return n.includes("mailto")&&(t="mailto"),n.includes("tel")&&(t="tel"),Object(N.startsWith)(e,"#")&&(t="internal"),Promise.resolve([{id:e,title:e,url:"URL"===t?Object(y.prependHTTP)(e):e,type:t}])},$=function(){var e=F()(H.a.mark((function e(t,n){var r,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([W(t,oe({},n.isInitialSuggestions?{perPage:3}:{})),q(t)]);case 2:return r=e.sent,o=!t.includes(" "),r=o&&!n.isInitialSuggestions?r[0].concat(r[1]):r[0],e.abrupt("return",K(t)?r:r.concat({title:t,url:t,type:"__CREATE__"}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function J(){B.current=!!f.current&&f.current.contains(document.activeElement),E(!1)}function K(e){var t=Object(N.startsWith)(e,"#");return Object(y.isURL)(e)||e&&e.includes("www.")||t}var X=Object(h.useCallback)((function(e,t){return i?K(e)?q(e):$(e,t):Promise.resolve([])}),[q,W]),Z=function(){var e=F()(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),z(null),e.prev=2,p.current=ae(Promise.resolve(s(t))),e.next=6,p.current.promise;case 6:n=e.sent,C(!1),n?(o(n),J()):E(!0),e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(2),!e.t0||!e.t0.isCanceled){e.next=15;break}return e.abrupt("return");case 15:z(e.t0.message||Object(g.__)("An unknown error occurred during creation. Please try again.")),C(!1),E(!0);case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};E(!1),o(oe(oe({},t),e))},re=Object(h.useMemo)((function(){return{url:t&&t.url}}),[t&&t.url]);return Object(h.createElement)("div",{tabIndex:-1,ref:f,className:"block-editor-link-control"},P&&Object(h.createElement)("div",{className:"block-editor-link-control__loading"},Object(h.createElement)(v.Spinner,null)," ",Object(g.__)("Creating"),"…"),(w||!t)&&!P&&Object(h.createElement)(te,{value:O,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";j(e)},onSelect:function(){var e=F()(H.a.mark((function e(n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("__CREATE__"!==n.type){e.next=5;break}return e.next=3,Z(O);case 3:e.next=7;break;case 5:ee(n,t),J();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),renderSuggestions:i?function(e){var n=e.suggestionsListProps,r=e.buildSuggestionItemProps,c=e.suggestions,i=e.selectedSuggestion,l=e.isLoading,a=e.isInitialSuggestions,u=D()("block-editor-link-control__search-results",{"is-loading":l}),p=["url","mailto","tel","internal"],f=1===c.length&&p.includes(c[0].type.toLowerCase()),d=s&&!f&&!a,m="block-editor-link-control-search-results-label-".concat(b),j=a?Object(g.__)("Recently updated"):Object(g.sprintf)(Object(g.__)('Search results for "%s"'),O),y=Object(h.createElement)(a?h.Fragment:v.VisuallyHidden,{},Object(h.createElement)("span",{className:"block-editor-link-control__search-results-label",id:m},j));return Object(h.createElement)("div",{className:"block-editor-link-control__search-results-wrapper"},y,Object(h.createElement)("div",R()({},n,{className:u,"aria-labelledby":m}),c.map((function(e,n){return d&&"__CREATE__"===e.type?Object(h.createElement)(ne,{searchTerm:O,onClick:F()(H.a.mark((function t(){return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(e.title);case 2:case"end":return t.stop()}}),t)}))),key:e.type,itemProps:r(e,n),isSelected:n===i}):"__CREATE__"===e.type?null:Object(h.createElement)(Y,{key:"".concat(e.id,"-").concat(e.type),itemProps:r(e,n),suggestion:e,index:n,onClick:function(){J(),o(oe(oe({},t),e))},isSelected:n===i,isURL:p.includes(e.type.toLowerCase()),searchTerm:O})}))))}:null,fetchSuggestions:X,showInitialSuggestions:l,errorMessage:I}),t&&!w&&!P&&Object(h.createElement)(h.Fragment,null,Object(h.createElement)("div",{"aria-label":Object(g.__)("Currently selected"),"aria-selected":"true",className:D()("block-editor-link-control__search-item",{"is-current":!0})},Object(h.createElement)("span",{className:"block-editor-link-control__search-item-header"},Object(h.createElement)(v.ExternalLink,{className:"block-editor-link-control__search-item-title",href:t.url},t&&t.title||G),t&&t.title&&Object(h.createElement)("span",{className:"block-editor-link-control__search-item-info"},G)),Object(h.createElement)(v.Button,{isSecondary:!0,onClick:function(){return E(!0)},className:"block-editor-link-control__search-item-action"},Object(g.__)("Edit")),Object(h.createElement)(ie,{fillProps:re}))),Object(h.createElement)(Q,{key:"aioseop-settings-drawer",value:t,settings:n,onChange:o}))}se.ViewerFill=le;var ue=se;function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var be=Object(v.withSpokenMessages)((function(e){var t=e.isActive,n=e.activeAttributes,r=e.addingLink,o=e.value,c=e.onChange,i=e.speak,l=e.stopAddingLink,a=Object(h.useMemo)(N.uniqueId,[r]),s=Object(h.useState)(),u=T()(s,2),p=u[0],f=u[1],b=Object(h.useMemo)((function(){var e=window.getSelection();if(e.rangeCount){var n=e.getRangeAt(0);if(r&&!t)return n;var o=n.startContainer;for(o=o.nextElementSibling||o;o.nodeType!==window.Node.ELEMENT_NODE;)o=o.parentNode;return o.closest("a")}}),[r,o.start,o.end]);n.rel&&n.rel.includes("nofollow"),n.rel&&n.rel.includes("sponsored"),n.rel&&n.rel.includes("ugc");var d=fe({url:n.url,opensInNewTab:"_blank"===n.target,nofollow:!!n.rel&&n.rel.includes("nofollow"),sponsored:!!n.rel&&n.rel.includes("sponsored"),ugc:!!n.rel&&n.rel.includes("ugc"),title:n.title},p);return Object(h.createElement)(v.Popover,{key:a,anchorRef:b,focusOnMount:!!r&&"firstElement",onClose:l,position:"bottom center"},Object(h.createElement)(ue,{value:d,onChange:function(e){e=fe(fe({},p),e);var n=(d.opensInNewTab!==e.opensInNewTab||d.sponsored!==e.sponsored||d.nofollow!==e.nofollow||d.ugc!==e.ugc)&&d.url===e.url,r=n&&void 0===e.url;if(f(r?e:void 0),!r){var a=Object(y.prependHTTP)(e.url),s=function(e){var t=e.url,n=e.opensInNewWindow,r=e.nofollow,o=e.sponsored,c=e.ugc,i=e.title,l={type:"core/link",attributes:{url:t}},a=[];return n&&(l.attributes.target="_blank",a.push("noreferrer noopener")),r&&a.push("nofollow"),o&&a.push("sponsored"),c&&a.push("ugc"),a.length>0&&(l.attributes.rel=a.join(" ")),i&&(l.attributes.title=i),l}({url:a,opensInNewWindow:e.opensInNewTab,nofollow:e.nofollow,sponsored:e.sponsored,ugc:e.ugc,title:e.title});if(Object(j.isCollapsed)(o)&&!t){var u=e.title||a,b=Object(j.applyFormat)(Object(j.create)({text:u}),s,0,u.length);c(Object(j.insert)(o,b))}else c(Object(j.applyFormat)(o,s));n||l(),!function(e){if(!e)return!1;var t=e.trim();if(!t)return!1;if(/^\S+:/.test(t)){var n=Object(y.getProtocol)(t);if(!Object(y.isValidProtocol)(n))return!1;if(Object(N.startsWith)(n,"http")&&!/^https?:\/\/[^\/\s]/i.test(t))return!1;var r=Object(y.getAuthority)(t);if(!Object(y.isValidAuthority)(r))return!1;var o=Object(y.getPath)(t);if(o&&!Object(y.isValidPath)(o))return!1;var c=Object(y.getQueryString)(t);if(c&&!Object(y.isValidQueryString)(c))return!1;var i=Object(y.getFragment)(t);if(i&&!Object(y.isValidFragment)(i))return!1}return!(Object(N.startsWith)(t,"#")&&!Object(y.isValidFragment)(t))}(a)?i(Object(g.__)("Warning: the link has been inserted but may have errors. Please test it.","all-in-one-seo-pack"),"assertive"):i(t?Object(g.__)("Link edited.","all-in-one-seo-pack"):Object(g.__)("Link inserted.","all-in-one-seo-pack"),"assertive")}},forceIsEditingLink:r}))}));function de(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O()(e);if(t){var o=O()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var me=Object(g.__)("Link","all-in-one-seo-pack"),Oe={name:"core/link",title:me,tagName:"a",className:null,attributes:{url:"href",target:"target",rel:"rel",title:"title"},__unstablePasteRule:function(e,t){var n=t.html,r=t.plainText;if(Object(j.isCollapsed)(e))return e;var o=(n||r).replace(/<[^>]+>/g,"").trim();return Object(y.isURL)(o)?(window.console.log("Created link:\n\n",o),Object(j.applyFormat)(e,{type:"core/link",attributes:{url:Object(_.decodeEntities)(o)}})):e},edit:Object(v.withSpokenMessages)(function(e){f()(n,e);var t=de(n);function n(){var e;return i()(this,n),(e=t.apply(this,arguments)).addLink=e.addLink.bind(u()(e)),e.stopAddingLink=e.stopAddingLink.bind(u()(e)),e.onRemoveFormat=e.onRemoveFormat.bind(u()(e)),e.state={addingLink:!1},e}return a()(n,[{key:"addLink",value:function(){var e=this.props,t=e.value,n=e.onChange,r=Object(j.getTextContent)(Object(j.slice)(t));r&&Object(y.isURL)(r)?n(Object(j.applyFormat)(t,{type:"core/link",attributes:{url:r}})):r&&Object(y.isEmail)(r)?n(Object(j.applyFormat)(t,{type:"core/link",attributes:{url:"mailto:".concat(r)}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function(){this.setState({addingLink:!1}),this.props.onFocus()}},{key:"onRemoveFormat",value:function(){var e=this.props,t=e.value,n=e.onChange,r=e.speak;n(Object(j.removeFormat)(t,"core/link")),r(Object(g.__)("Link removed.","all-in-one-seo-pack"),"assertive")}},{key:"render",value:function(){var e=this.props,t=e.isActive,n=e.activeAttributes,r=e.value,o=e.onChange;return Object(h.createElement)(h.Fragment,null,Object(h.createElement)(k.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),Object(h.createElement)(k.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),t&&Object(h.createElement)(k.RichTextToolbarButton,{name:"link",icon:E,title:Object(g.__)("Unlink","all-in-one-seo-pack"),onClick:this.onRemoveFormat,isActive:t,shortcutType:"primaryShift",shortcutCharacter:"k"}),!t&&Object(h.createElement)(k.RichTextToolbarButton,{name:"link",icon:x,title:me,onClick:this.addLink,isActive:t,shortcutType:"primary",shortcutCharacter:"k"}),(this.state.addingLink||t)&&Object(h.createElement)(be,{key:"aioseop-inline-link-ui",addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:t,activeAttributes:n,value:r,onChange:o}))}}]),n}(h.Component))},he=wp.richText,ge=he.registerFormatType,ve=he.unregisterFormatType;[Oe].forEach((function(e){var t=e.name,n=o()(e,["name"]);t&&(ve("core/link"),ge(t,n))}))}]);