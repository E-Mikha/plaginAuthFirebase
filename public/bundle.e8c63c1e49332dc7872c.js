(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n/**\n  * Sidebar CSS\n  */\n\n#sidebar {\n  background-color: #2196f3;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n/**\n  * Content CSS\n  */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n\n.author {\n  font-size: 0.8rem;\n}\n\n.floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n\n.modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n\n.modal > h1 {\n  text-align: center;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}\n\n.error {\n  color: red;\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],u=a[c]||0,l="".concat(c," ").concat(u);a[c]=u+1;var p=t(l),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var d=o(n,r),c=0;c<a.length;c++){var u=t(a[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{class n{static create(t){return fetch("https://pluginauth-a6cca-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((n=>(t.id=n.name,t))).then(e).then(n.renderList)}static fetch(n){return n?fetch(`https://pluginauth-a6cca-default-rtdb.asia-southeast1.firebasedatabase.app/questions.json?auth=${n}`).then((n=>n.json())).then((n=>n&&n.error?`<p class="error">${n.error}</p>`:n?Object.keys(n).map((e=>({...n[e],id:e}))):[])):Promise.resolve('<p class="error">You dont have a token</p>')}static renderList(){const n=o(),e=n.length?n.map(r).join(""):'<div class="mui--text-headline">You didn\'t ask a single question</div>';document.getElementById("list").innerHTML=e}static listToHTML(n){return n.length?`<ol>${n.map((n=>`<li>${n.text}</li>`)).join("")}</ol>`:"<p>No questions yet</p>"}}function e(n){const e=o();e.push(n),localStorage.setItem("questions",JSON.stringify(e))}function o(){return JSON.parse(localStorage.getItem("questions")||"[]")}function r(n){return`\n        <div class="mui--text-black-54">\n        ${new Date(n.date).toLocaleDateString()}\n        ${new Date(n.date).toLocaleTimeString()}\n        </div>\n        <div>${n.text}</div>\n        <br />\n  `}var a=t(379),i=t.n(a),s=t(795),d=t.n(s),c=t(569),u=t.n(c),l=t(565),p=t.n(l),f=t(216),m=t.n(f),h=t(589),v=t.n(h),b=t(426),g={};function y(n){return n.length>=10}function x(n,e){const t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`\n  <h1>${n}</h1>\n  <div class="modal-content">${e}</div>\n  `,mui.overlay("on",t)}g.styleTagTransform=v(),g.setAttributes=p(),g.insert=u().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=m(),i()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S.querySelector("#question-input"),E=S.querySelector("#submit");function L(e){e.preventDefault();const t=e.target.querySelector("button"),o=e.target.querySelector("#email").value,r=e.target.querySelector("#password").value;t.disabled=!0,function(n,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDQ2mjdKQO9x4GOY6w5KsU0nM7h37EDJE",{method:"POST",body:JSON.stringify({email:n,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((n=>n.json())).then((n=>n.idToken))}(o,r).then(n.fetch).then(q).then((()=>t.disabled=!1))}function q(e){"string"==typeof e?x("Error!",e):x("Your list of questions",n.listToHTML(e))}window.addEventListener("load",n.renderList),S.addEventListener("submit",(function(e){if(e.preventDefault(),y(T.value)){const e={text:T.value.trim(),date:(new Date).toJSON()};E.disabled=!0,n.create(e).then((()=>{T.value="",T.className="",E.disabled=!1}))}})),w.addEventListener("click",(function(){x("Sign in",'\n    <form class="mui-form" id="auth-form">\n            <div class="mui-textfield mui-textfield--float-label">\n              <input\n                type="email"\n                id="email"\n                required      \n              />\n              <label for="email">Email</label>\n            </div>\n\n            <div class="mui-textfield mui-textfield--float-label">\n            <input\n              type="password"\n              id="password"\n              required      \n            />\n            <label for="password">Password</label>\n          </div>\n\n            <button\n              type="submit"\n              class="mui-btn mui-btn--raised mui-btn--primary"\n            >\n              Log in\n            </button>\n          </form>\n    '),document.getElementById("auth-form").addEventListener("submit",L,{once:!0})})),T.addEventListener("input",(()=>{E.disabled=!y(T.value)}))})()})();