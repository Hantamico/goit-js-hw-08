var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var i,r,o,a,f,u,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(T,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-l>=o}function T(){var e=m();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-u);return v?d(n,o-(e-l)):n}(e))}function w(e){return f=void 0,b&&i?y(e):(i=r=void 0,a)}function O(){var e=m(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(v)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("form"),y=t((function(e){if(e.preventDefault()," "===b.email.value||" "===b.message.value)return console.log("Please fill in all the fields!");const t={email:b.email.value,message:b.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),e.currentTarget.reset()}),500);if(b.addEventListener("submit",y),localStorage.getItem("feedback-form-state")){FormData=JSON.parse(localStorage.getItem("feedback-form-state"));for(let e in FormData)b.elements[e].value=FormData[e]}
//# sourceMappingURL=03-feedback.5b0f7f26.js.map
