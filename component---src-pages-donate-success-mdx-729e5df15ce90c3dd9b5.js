(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"8jRI":function(e,r,t){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,r){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;r=r||1;var t=e.slice(0,r),n=e.slice(r);return Array.prototype.concat.call([],o(t),o(n))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var r=e.match(n),t=1;t<r.length;t++)r=(e=o(r,t).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(r){var o=i(n[0]);o!==n[0]&&(t[n[0]]=o)}n=a.exec(e)}t["%C2"]="�";for(var c=Object.keys(t),u=0;u<c.length;u++){var l=c[u];e=e.replace(new RegExp(l,"g"),t[l])}return e}(e)}}},"8yz6":function(e,r,t){"use strict";e.exports=function(e,r){if("string"!=typeof e||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];var t=e.indexOf(r);return-1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},"Am/z":function(e,r,t){"use strict";t.r(r),t.d(r,"_frontmatter",(function(){return h})),t.d(r,"default",(function(){return O}));var n=t("wx14"),a=t("zLVn"),o=t("q1tI"),i=t.n(o),c=t("7ljp"),u=t("dR/1"),l=t("dI71"),s=t("xTzf"),f=t("OsCL"),m=t("WgLi"),d=t("nBjs"),p=t("k/hM"),y=t("qKvR"),b=t("cr+I"),v=function(e){function r(r){var t;t=e.call(this,r)||this;var n="",a="noval";"undefined"!=typeof window&&window.document&&(n=b.parse(window.location.search).amount,document.referrer.includes("stripe.com")&&(a="success"));return t.state={forumusername:"",donorwallname:"",amount:n,validated:a},t.handleForumUsernameChange=function(e){t.setState({forumusername:e})},t.handleDonorWallNameChange=function(e){t.setState({forumusername:e})},t}return Object(l.a)(r,e),r.prototype.render=function(){var e=this.state,r=e.forumusername,t=e.donorwallname,n=e.amount,a=e.validated;return Object(y.a)(s.a,{isHorizontal:!0},Object(y.a)("input",{type:"hidden",name:"amount",value:n}),Object(y.a)("input",{type:"hidden",name:"validated",value:a}),Object(y.a)(f.a,{label:"Forum username",type:"text",fieldId:"forumusername"},Object(y.a)(m.a,{value:r,id:"forumusername",name:"forumusername","aria-describedby":"Forum username",onChange:this.handleForumUsernameChange})),Object(y.a)(f.a,{label:"Donor wall name",type:"text",fieldId:"donorwallname"},Object(y.a)(m.a,{value:t,id:"donorwallname",name:"donorwallname","aria-describedby":"Donor wall name",onChange:this.handleDonorWallNameChange})),Object(y.a)(d.a,null,Object(y.a)(p.a,{isDisabled:"success"!==a,variant:"primary",type:"submit"},"Submit")))},r}(i.a.Component),h={},g={_frontmatter:h},j=u.a;function O(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)(j,Object(n.a)({},g,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"donation-successful"},"Donation Successful"),Object(c.b)("p",null,"Thank you for your donation to the Kodi Foundation.  If you live in the USA, your donation may qualify as a charitable contribution."),Object(c.b)("p",null,"If you would like your donation to appear on our donor wall or receive acknowledgement on your forum profile, please complete the form below."),Object(c.b)(v,{mdxType:"FormDonorWall"}))}O.isMDXComponent=!0},Bnag:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,r){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,r,t){var n=t("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},J4zp:function(e,r,t){var n=t("wTVA"),a=t("m0LI"),o=t("ZhPi"),i=t("wkBT");e.exports=function(e,r){return n(e)||a(e,r)||o(e,r)||i()}},OsCL:function(e,r,t){"use strict";t.d(r,"a",(function(){return l}));var n=t("mrSG"),a=t("q1tI"),o=t("C6xQ"),i=t.n(o),c=t("awUK"),u=t("7Be5"),l=function(e){var r=e.children,t=void 0===r?null:r,o=e.className,l=void 0===o?"":o,s=e.label,f=e.labelIcon,m=e.isRequired,d=void 0!==m&&m,p=e.validated,y=void 0===p?"default":p,b=e.isInline,v=void 0!==b&&b,h=e.hasNoPaddingTop,g=void 0!==h&&h,j=e.helperText,O=e.helperTextInvalid,w=e.helperTextIcon,I=e.helperTextInvalidIcon,x=e.fieldId,N=Object(n.__rest)(e,["children","className","label","labelIcon","isRequired","validated","isInline","hasNoPaddingTop","helperText","helperTextInvalid","helperTextIcon","helperTextInvalidIcon","fieldId"]),S="string"!=typeof j?j:a.createElement("div",{className:Object(c.a)(i.a.formHelperText,y===u.d.success&&i.a.modifiers.success,y===u.d.warning&&i.a.modifiers.warning),id:"".concat(x,"-helper"),"aria-live":"polite"},w&&a.createElement("span",{className:Object(c.a)(i.a.formHelperTextIcon)},w),j),E="string"!=typeof O?O:a.createElement("div",{className:Object(c.a)(i.a.formHelperText,i.a.modifiers.error),id:"".concat(x,"-helper"),"aria-live":"polite"},I&&a.createElement("span",{className:Object(c.a)(i.a.formHelperTextIcon)},I),O);return a.createElement("div",Object.assign({},N,{className:Object(c.a)(i.a.formGroup,l)}),s&&a.createElement("div",{className:Object(c.a)(i.a.formGroupLabel,g&&i.a.modifiers.noPaddingTop)},a.createElement("label",{className:Object(c.a)(i.a.formLabel),htmlFor:x},a.createElement("span",{className:Object(c.a)(i.a.formLabelText)},s),d&&a.createElement("span",{className:Object(c.a)(i.a.formLabelRequired),"aria-hidden":"true"}," ","*"))," ",a.isValidElement(f)&&f),a.createElement("div",{className:Object(c.a)(i.a.formGroupControl,v&&i.a.modifiers.inline)},t,y===u.d.error&&O?E:y!==u.d.error&&j?S:""))};l.displayName="FormGroup"},Pmem:function(e,r,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(e,r,t){var n=t("Ijbi"),a=t("EbDI"),o=t("ZhPi"),i=t("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},WkPL:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},ZhPi:function(e,r,t){var n=t("WkPL");e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},"cr+I":function(e,r,t){"use strict";var n=t("J4zp"),a=t("RIqP");function o(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw o}}}}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c=t("Pmem"),u=t("8jRI"),l=t("8yz6");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,r){return r.encode?r.strict?c(e):encodeURIComponent(e):e}function m(e,r){return r.decode?u(e):e}function d(e){var r=e.indexOf("#");return-1!==r&&(e=e.slice(0,r)),e}function p(e){var r=(e=d(e)).indexOf("?");return-1===r?"":e.slice(r+1)}function y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!r.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function b(e,r){s((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var t=function(e){var r;switch(e.arrayFormat){case"index":return function(e,t,n){r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),r?(void 0===n[e]&&(n[e]={}),n[e][r[1]]=t):n[e]=t};case"bracket":return function(e,t,n){r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),r?void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=[t]:n[e]=t};case"comma":case"separator":return function(r,t,n){var a="string"==typeof t&&t.split("").indexOf(e.arrayFormatSeparator)>-1?t.split(e.arrayFormatSeparator).map((function(r){return m(r,e)})):null===t?t:m(t,e);n[r]=a};default:return function(e,r,t){void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=r}}}(r),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var i,c=o(e.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value,f=l(r.decode?u.replace(/\+/g," "):u,"="),d=n(f,2),p=d[0],b=d[1];b=void 0===b?null:["comma","separator"].includes(r.arrayFormat)?b:m(b,r),t(m(p,r),b,a)}}catch(x){c.e(x)}finally{c.f()}for(var v=0,h=Object.keys(a);v<h.length;v++){var g=h[v],j=a[g];if("object"==typeof j&&null!==j)for(var O=0,w=Object.keys(j);O<w.length;O++){var I=w[O];j[I]=y(j[I],r)}else a[g]=y(j,r)}return!1===r.sort?a:(!0===r.sort?Object.keys(a).sort():Object.keys(a).sort(r.sort)).reduce((function(e,r){var t=a[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((function(e,r){return Number(e)-Number(r)})).map((function(e){return r[e]})):r}(t):e[r]=t,e}),Object.create(null))}r.extract=p,r.parse=b,r.stringify=function(e,r){if(!e)return"";s((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var t=function(t){return r.skipNull&&null==e[t]||r.skipEmptyString&&""===e[t]},n=function(e){switch(e.arrayFormat){case"index":return function(r){return function(t,n){var o=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[f(r,e),"[",o,"]"].join("")]:[[f(r,e),"[",f(o,e),"]=",f(n,e)].join("")])}};case"bracket":return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[[f(r,e),"[]"].join("")]:[[f(r,e),"[]=",f(n,e)].join("")])}};case"comma":case"separator":return function(r){return function(t,n){return null==n||0===n.length?t:0===t.length?[[f(r,e),"=",f(n,e)].join("")]:[[t,f(n,e)].join(e.arrayFormatSeparator)]}};default:return function(r){return function(t,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:[].concat(a(t),null===n?[f(r,e)]:[[f(r,e),"=",f(n,e)].join("")])}}}}(r),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];t(u)||(o[u]=e[u])}var l=Object.keys(o);return!1!==r.sort&&l.sort(r.sort),l.map((function(t){var a=e[t];return void 0===a?"":null===a?f(t,r):Array.isArray(a)?a.reduce(n(t),[]).join("&"):f(t,r)+"="+f(a,r)})).filter((function(e){return e.length>0})).join("&")},r.parseUrl=function(e,r){r=Object.assign({decode:!0},r);var t=l(e,"#"),a=n(t,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:b(p(e),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,r)}:{})},r.stringifyUrl=function(e,t){t=Object.assign({encode:!0,strict:!0},t);var n=d(e.url).split("?")[0]||"",a=r.extract(e.url),o=r.parse(a,{sort:!1}),i=Object.assign(o,e.query),c=r.stringify(i,t);c&&(c="?".concat(c));var u=function(e){var r="",t=e.indexOf("#");return-1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(u="#".concat(f(e.fragmentIdentifier,t))),"".concat(n).concat(c).concat(u)}},"dR/1":function(e,r,t){"use strict";t("q1tI");var n=t("j4Tf"),a=t("M85z"),o=t("Mzll"),i=t("qKvR");r.a=function(e){var r=e.children;return Object(i.a)(n.a,null,Object(i.a)(a.a,{variant:a.b.light},Object(i.a)(o.a,null,r)))}},m0LI:function(e,r){e.exports=function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}}},nBjs:function(e,r,t){"use strict";t.d(r,"a",(function(){return u}));var n=t("mrSG"),a=t("q1tI"),o=t("C6xQ"),i=t.n(o),c=t("awUK"),u=function(e){var r=e.children,t=void 0===r?null:r,o=e.className,u=void 0===o?"":o,l=Object(n.__rest)(e,["children","className"]),s=Object(c.a)(i.a.formGroup,i.a.modifiers.action,u),f=a.createElement("div",{className:Object(c.a)(i.a.formActions)},t);return a.createElement("div",Object.assign({},l,{className:s}),a.createElement("div",{className:Object(c.a)(i.a.formGroupControl)},f))};u.displayName="ActionGroup"},wTVA:function(e,r){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-donate-success-mdx-729e5df15ce90c3dd9b5.js.map