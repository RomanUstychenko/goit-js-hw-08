var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,u,f,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(w,t),l?b(e):a}function h(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=r}function w(){var e=d();if(h(e))return x(e);u=setTimeout(w,function(e){var n=t-(e-f);return v?m(n,r-(e-c)):n}(e))}function x(e){return u=void 0,y&&i?b(e):(i=o=void 0,a)}function O(){var e=d(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(v)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=g(t)||0,p(n)&&(l=!!n.leading,r=(v="maxWait"in n)?s(g(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:x(d())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};document.querySelector("button");const y=document.querySelector("form"),b={};function j(e){e.preventDefault(),b.email=y.elements.email.value,b.message=y.elements.message.value,localStorage.setItem("feedback-form-state",JSON.stringify(b)),h()}function h(){b.textcontent=localStorage.getItem("feedback-form-state")||""}h(),y.addEventListener("submit",j),y.addEventListener("input",t(j,1e3)),y.reset(),function(){if(""!==b.message||""!==b.email){const e=JSON.parse(b.textcontent);y.elements.message.value=e.message,y.elements.email.value=e.email}}();
//# sourceMappingURL=03-feedback.99fb7e35.js.map