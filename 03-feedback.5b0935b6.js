!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,f=setTimeout(S,t),s?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function S(){var e=p();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function T(e){return f=void 0,v&&i?y(e):(i=o=void 0,u)}function w(){var e=p(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return h(l);if(d)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?u:T(p())},w}function b(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var h=document.querySelector("form"),O="feedback-form-state",S=n((function(){var e={email:h.email.value,message:h.message.value};localStorage.setItem(O,JSON.stringify(e))}),500);!function(){if(localStorage.getItem(O))for(var e in FormData=JSON.parse(localStorage.getItem(O)),FormData)h.elements[e].value=FormData[e]}(),h.addEventListener("submit",(function(e){if(e.preventDefault(),""===h.email.value||""===h.message.value)return alert("Please fill in all the fields!");console.log("Email: ".concat(h.email.value," Message: ").concat(h.message.value)),e.currentTarget.reset(),localStorage.removeItem(O)})),h.addEventListener("input",S)}();
//# sourceMappingURL=03-feedback.5b0935b6.js.map
