(self["webpackChunkspidertech_website"]=self["webpackChunkspidertech_website"]||[]).push([[137],{4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,s,i,o=n(4019),a=n(9781),c=n(7854),u=n(614),h=n(111),l=n(2597),d=n(648),f=n(6330),g=n(8880),m=n(8052),p=n(3070).f,y=n(7976),w=n(9518),v=n(7674),b=n(5112),I=n(9711),E=n(9909),T=E.enforce,_=E.get,S=c.Int8Array,D=S&&S.prototype,A=c.Uint8ClampedArray,x=A&&A.prototype,C=S&&w(S),N=D&&w(D),k=Object.prototype,O=c.TypeError,R=b("toStringTag"),L=I("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",V=o&&!!v&&"Opera"!==d(c.opera),P=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},U=function(t){if(!h(t))return!1;var e=d(t);return"DataView"===e||l(F,e)||l(B,e)},q=function(t){var e=w(t);if(h(e)){var n=_(e);return n&&l(n,M)?n[M]:q(e)}},j=function(t){if(!h(t))return!1;var e=d(t);return l(F,e)||l(B,e)},K=function(t){if(j(t))return t;throw O("Target is not a typed array")},$=function(t){if(u(t)&&(!v||y(C,t)))return t;throw O(f(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var s in F){var i=c[s];if(i&&l(i.prototype,t))try{delete i.prototype[t]}catch(o){try{i.prototype[t]=e}catch(u){}}}N[t]&&!n||m(N,t,n?e:V&&D[t]||e,r)}},z=function(t,e,n){var r,s;if(a){if(v){if(n)for(r in F)if(s=c[r],s&&l(s,t))try{delete s[t]}catch(i){}if(C[t]&&!n)return;try{return m(C,t,n?e:V&&C[t]||e)}catch(i){}}for(r in F)s=c[r],!s||s[t]&&!n||m(s,t,e)}};for(r in F)s=c[r],i=s&&s.prototype,i?T(i)[M]=s:V=!1;for(r in B)s=c[r],i=s&&s.prototype,i&&(T(i)[M]=s);if((!V||!u(C)||C===Function.prototype)&&(C=function(){throw O("Incorrect invocation")},V))for(r in F)c[r]&&v(c[r],C);if((!V||!N||N===k)&&(N=C.prototype,V))for(r in F)c[r]&&v(c[r].prototype,N);if(V&&w(x)!==N&&v(x,N),a&&!l(N,R))for(r in P=!0,p(N,R,{get:function(){return h(this)?this[L]:void 0}}),F)c[r]&&g(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:V,TYPED_ARRAY_TAG:P&&L,aTypedArray:K,aTypedArrayConstructor:$,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:q,isView:U,isTypedArray:j,TypedArray:C,TypedArrayPrototype:N}},712:function(t,e,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,h,l=i(n),d=s(l),f=r(a,c),g=o(d);while(g-- >0)if(u=d[g],h=f(u,g,l),h)switch(t){case 0:return u;case 1:return g}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9974:function(t,e,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},9518:function(t,e,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,h=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=i(t);if(r(e,c))return e[c];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof u?h:null}},4590:function(t,e,n){var r=n(3002),s=RangeError;t.exports=function(t,e){var n=r(t);if(n%e)throw s("Wrong offset");return n}},3002:function(t,e,n){var r=n(9303),s=RangeError;t.exports=function(t){var e=r(t);if(e<0)throw s("The argument can't be less than 0");return e}},8675:function(t,e,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(t){var e=o(this),n=s(e),r=i(t),a=r>=0?r:n+r;return a<0||a>=n?void 0:e[a]}))},2958:function(t,e,n){"use strict";var r=n(260),s=n(712).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),s=n(712).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(t){return s(i(this),t,arguments.length>1?arguments[1]:void 0)}))},3462:function(t,e,n){"use strict";var r=n(7854),s=n(6916),i=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),h=r.RangeError,l=r.Int8Array,d=l&&l.prototype,f=d&&d.set,g=i.aTypedArray,m=i.exportTypedArrayMethod,p=!u((function(){var t=new Uint8ClampedArray(2);return s(f,t,{length:1,0:3},1),3!==t[1]})),y=p&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var t=new l(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));m("set",(function(t){g(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(p)return s(f,this,n,e);var r=this.length,i=o(n),u=0;if(i+e>r)throw h("Wrong length");while(u<i)this[e+u]=n[u++]}),!p||y)},1118:function(t,e,n){n(2958)},7380:function(t,e,n){n(3408)},6137:function(t,e,n){"use strict";n.d(e,{r4:function(){return av},lp:function(){return cv}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return D},SDK_VERSION:function(){return le},_DEFAULT_ENTRY_NAME:function(){return Jt},_addComponent:function(){return ne},_addOrOverwriteComponent:function(){return re},_apps:function(){return te},_clearComponents:function(){return ae},_components:function(){return ee},_getProvider:function(){return ie},_registerComponent:function(){return se},_removeServiceInstance:function(){return oe},deleteApp:function(){return me},getApp:function(){return fe},getApps:function(){return ge},initializeApp:function(){return de},onLog:function(){return ye},registerVersion:function(){return pe},setLogLevel:function(){return we}});n(1703),n(2801),n(6699);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,h=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(r.push(l),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},a=function(t){const e=s(t);return o.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&h(n)&&(t[n]=u(t[n],e[n]));return t}function h(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(t){return!1}}function p(){return"object"===typeof self&&self.self===self}function y(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return f().indexOf("Electron/")>=0}function b(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I(){return f().indexOf("MSAppHost/")>=0}function E(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}function _(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?x(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new D(r,o,n);return a}}function x(t,e){return t.replace(C,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(O(n)&&O(i)){if(!k(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function O(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){const n=new L(t,e);return n.subscribe.bind(n)}class L{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=M(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function M(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function V(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}class F{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(j(t))try{this.getOrInitializeService({instanceIdentifier:B})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=B){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=B){return this.instances.has(t)}getOptions(t=B){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(up){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:q(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(up){}return n||null}normalizeInstanceIdentifier(t=B){return this.component?this.component.multipleInstances?t:B:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function q(t){return t===B?void 0:t}function j(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new U(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=[];var G;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(G||(G={}));const z={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Q=G.INFO,H={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},W=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=H[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class Y{constructor(t){this.name=t,this._logLevel=Q,this._logHandler=W,this._userLogHandler=null,$.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?z[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}function X(t){$.forEach((e=>{e.setLogLevel(t)}))}function J(t,e){for(const n of $){let r=null;e&&e.level&&(r=z[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const i=s.map((t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}})).filter((t=>t)).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:G[n].toLowerCase(),message:i,args:s,type:e.name})}}}const Z=(t,e)=>e.some((e=>t instanceof e));let tt,et;function nt(){return tt||(tt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rt(){return et||(et=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const st=new WeakMap,it=new WeakMap,ot=new WeakMap,at=new WeakMap,ct=new WeakMap;function ut(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(mt(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&st.set(e,t)})).catch((()=>{})),ct.set(e,t),e}function ht(t){if(it.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));it.set(t,e)}let lt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return it.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ot.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function dt(t){lt=t(lt)}function ft(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?rt().includes(t)?function(...e){return t.apply(pt(this),e),mt(st.get(this))}:function(...e){return mt(t.apply(pt(this),e))}:function(e,...n){const r=t.call(pt(this),e,...n);return ot.set(r,e.sort?e.sort():[e]),mt(r)}}function gt(t){return"function"===typeof t?ft(t):(t instanceof IDBTransaction&&ht(t),Z(t,nt())?new Proxy(t,lt):t)}function mt(t){if(t instanceof IDBRequest)return ut(t);if(at.has(t))return at.get(t);const e=gt(t);return e!==t&&(at.set(t,e),ct.set(e,t)),e}const pt=t=>ct.get(t);function yt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=mt(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(mt(o.result),t.oldVersion,t.newVersion,mt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const wt=["get","getKey","getAll","getAllKeys","count"],vt=["put","add","delete","clear"],bt=new Map;function It(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(bt.get(e))return bt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!wt.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return bt.set(e,i),i}dt((t=>({...t,get:(e,n,r)=>It(e,n)||t.get(e,n,r),has:(e,n)=>!!It(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(Tt(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function Tt(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const _t="@firebase/app",St="0.7.29",Dt=new Y("@firebase/app"),At="@firebase/app-compat",xt="@firebase/analytics-compat",Ct="@firebase/analytics",Nt="@firebase/app-check-compat",kt="@firebase/app-check",Ot="@firebase/auth",Rt="@firebase/auth-compat",Lt="@firebase/database",Mt="@firebase/database-compat",Vt="@firebase/functions",Pt="@firebase/functions-compat",Ft="@firebase/installations",Bt="@firebase/installations-compat",Ut="@firebase/messaging",qt="@firebase/messaging-compat",jt="@firebase/performance",Kt="@firebase/performance-compat",$t="@firebase/remote-config",Gt="@firebase/remote-config-compat",zt="@firebase/storage",Qt="@firebase/storage-compat",Ht="@firebase/firestore",Wt="@firebase/firestore-compat",Yt="firebase",Xt="9.9.1",Jt="[DEFAULT]",Zt={[_t]:"fire-core",[At]:"fire-core-compat",[Ct]:"fire-analytics",[xt]:"fire-analytics-compat",[kt]:"fire-app-check",[Nt]:"fire-app-check-compat",[Ot]:"fire-auth",[Rt]:"fire-auth-compat",[Lt]:"fire-rtdb",[Mt]:"fire-rtdb-compat",[Vt]:"fire-fn",[Pt]:"fire-fn-compat",[Ft]:"fire-iid",[Bt]:"fire-iid-compat",[Ut]:"fire-fcm",[qt]:"fire-fcm-compat",[jt]:"fire-perf",[Kt]:"fire-perf-compat",[$t]:"fire-rc",[Gt]:"fire-rc-compat",[zt]:"fire-gcs",[Qt]:"fire-gcs-compat",[Ht]:"fire-fst",[Wt]:"fire-fst-compat","fire-js":"fire-js",[Yt]:"fire-js-all"},te=new Map,ee=new Map;function ne(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function re(t,e){t.container.addOrOverwriteComponent(e)}function se(t){const e=t.name;if(ee.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;ee.set(e,t);for(const n of te.values())ne(n,t);return!0}function ie(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function oe(t,e,n=Jt){ie(t,e).clearInstance(n)}function ae(){ee.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ue=new A("app","Firebase",ce);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new F("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=Xt;function de(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:Jt,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw ue.create("bad-app-name",{appName:String(r)});const s=te.get(r);if(s){if(k(t,s.options)&&k(n,s.config))return s;throw ue.create("duplicate-app",{appName:r})}const i=new K(r);for(const a of ee.values())i.addComponent(a);const o=new he(t,n,i);return te.set(r,o),o}function fe(t=Jt){const e=te.get(t);if(!e)throw ue.create("no-app",{appName:t});return e}function ge(){return Array.from(te.values())}async function me(t){const e=t.name;te.has(e)&&(te.delete(e),await Promise.all(t.container.getProviders().map((t=>t.delete()))),t.isDeleted=!0)}function pe(t,e,n){var r;let s=null!==(r=Zt[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${s}" with version "${e}":`];return i&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Dt.warn(t.join(" "))}se(new F(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}function ye(t,e){if(null!==t&&"function"!==typeof t)throw ue.create("invalid-log-argument");J(t,e)}function we(t){X(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="firebase-heartbeat-database",be=1,Ie="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=yt(ve,be,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ie)}}}).catch((t=>{throw ue.create("storage-open",{originalErrorMessage:t.message})}))),Ee}async function _e(t){var e;try{const e=await Te();return e.transaction(Ie).objectStore(Ie).get(De(t))}catch(n){throw ue.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function Se(t,e){var n;try{const n=await Te(),r=n.transaction(Ie,"readwrite"),s=r.objectStore(Ie);return await s.put(e,De(t)),r.done}catch(r){throw ue.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function De(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,xe=2592e6;class Ce{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Oe(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ne();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ne(),{heartbeatsToSend:e,unsentEntries:n}=ke(this._heartbeatsCache.heartbeats),r=c(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ne(){const t=new Date;return t.toISOString().substring(0,10)}function ke(t,e=Ae){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Re(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Re(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Oe{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!T()&&_().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await _e(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Re(t){return c(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){se(new F("platform-logger",(t=>new Et(t)),"PRIVATE")),se(new F("heartbeat",(t=>new Ce(t)),"PRIVATE")),pe(_t,St,t),pe(_t,St,"esm2017"),pe("fire-js","")}Le("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(t,e){this._delegate=t,this.firebase=e,ne(t,new F("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),me(this._delegate))))}_getService(t,e=Jt){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=Jt){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){ne(this._delegate,t)}_addOrOverwriteComponent(t){re(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Pe=new A("app-compat","Firebase",Ve);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:pe,setLogLevel:we,onLog:ye,apps:null,SDK_VERSION:le,INTERNAL:{registerComponent:c,removeApp:s,useAsService:h,modularAPIs:r}};function s(t){delete e[t]}function i(t){if(t=t||Jt,!N(e,t))throw Pe.create("no-app",{appName:t});return e[t]}function o(r,s={}){const i=de(r,s);if(N(e,i.name))return e[i.name];const o=new t(i,n);return e[i.name]=o,o}function a(){return Object.keys(e).map((t=>e[t]))}function c(e){const r=e.name,s=r.replace("-compat","");if(se(e)&&"PUBLIC"===e.type){const o=(t=i())=>{if("function"!==typeof t[s])throw Pe.create("invalid-app-argument",{appName:r});return t[s]()};void 0!==e.serviceProps&&u(o,e.serviceProps),n[s]=o,t.prototype[s]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[s]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),i["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){const t=Fe(Me);function e(e){u(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Be,extendNamespace:e,createSubscribe:R,ErrorFactory:A,deepExtend:u}),t}const Ue=Be(),qe=new Y("@firebase/app-compat"),je="@firebase/app-compat",Ke="0.1.30";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $e(t){pe(je,Ke,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(p()&&void 0!==self.firebase){qe.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&qe.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Ge=Ue;$e();var ze="firebase",Qe="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ge.registerVersion(ze,Qe,"app-compat");n(8675),n(3462),n(7380),n(1118),n(2262),n(4506);var He,We="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Ye={},Xe=Xe||{},Je=We||self;function Ze(){}function tn(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function en(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function nn(t){return Object.prototype.hasOwnProperty.call(t,rn)&&t[rn]||(t[rn]=++sn)}var rn="closure_uid_"+(1e9*Math.random()>>>0),sn=0;function on(t,e,n){return t.call.apply(t.bind,arguments)}function an(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function cn(t,e,n){return cn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?on:an,cn.apply(null,arguments)}function un(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function hn(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function ln(){this.s=this.s,this.o=this.o}var dn=0,fn={};ln.prototype.s=!1,ln.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=dn)){var t=nn(this);delete fn[t]}},ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mn=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function pn(t){t:{var e=Ri;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function yn(t){return Array.prototype.concat.apply([],arguments)}function wn(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vn(t){return/^[\s\xa0]*$/.test(t)}var bn,In=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function En(t,e){return-1!=t.indexOf(e)}function Tn(t,e){return t<e?-1:t>e?1:0}t:{var _n=Je.navigator;if(_n){var Sn=_n.userAgent;if(Sn){bn=Sn;break t}}bn=""}function Dn(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function An(t){const e={};for(const n in t)e[n]=t[n];return e}var xn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cn(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<xn.length;e++)n=xn[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nn(t){return Nn[" "](t),t}function kn(t){var e=$n;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Nn[" "]=Ze;var On,Rn=En(bn,"Opera"),Ln=En(bn,"Trident")||En(bn,"MSIE"),Mn=En(bn,"Edge"),Vn=Mn||Ln,Pn=En(bn,"Gecko")&&!(En(bn.toLowerCase(),"webkit")&&!En(bn,"Edge"))&&!(En(bn,"Trident")||En(bn,"MSIE"))&&!En(bn,"Edge"),Fn=En(bn.toLowerCase(),"webkit")&&!En(bn,"Edge");function Bn(){var t=Je.document;return t?t.documentMode:void 0}t:{var Un="",qn=function(){var t=bn;return Pn?/rv:([^\);]+)(\)|;)/.exec(t):Mn?/Edge\/([\d\.]+)/.exec(t):Ln?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Fn?/WebKit\/(\S+)/.exec(t):Rn?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(qn&&(Un=qn?qn[1]:""),Ln){var jn=Bn();if(null!=jn&&jn>parseFloat(Un)){On=String(jn);break t}}On=Un}var Kn,$n={};function Gn(){return kn((function(){let t=0;const e=In(String(On)).split("."),n=In("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=Tn(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Tn(0==s[2].length,0==i[2].length)||Tn(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(Je.document&&Ln){var zn=Bn();Kn=zn||(parseInt(On,10)||void 0)}else Kn=void 0;var Qn=Kn,Hn=function(){if(!Je.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Je.addEventListener("test",Ze,e),Je.removeEventListener("test",Ze,e)}catch(n){}return t}();function Wn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Yn(t,e){if(Wn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Pn){t:{try{Nn(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Xn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yn.Z.h.call(this)}}Wn.prototype.h=function(){this.defaultPrevented=!0},hn(Yn,Wn);var Xn={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Jn="closure_listenable_"+(1e6*Math.random()|0),Zn=0;function tr(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++Zn,this.ca=this.fa=!1}function er(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function nr(t){this.src=t,this.g={},this.h=0}function rr(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=gn(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(er(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function sr(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}nr.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=sr(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new tr(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var ir="closure_lm_"+(1e6*Math.random()|0),or={};function ar(t,e,n,r,s){if(r&&r.once)return hr(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)ar(t,e[i],n,r,s);return null}return n=yr(n),t&&t[Jn]?t.N(e,n,en(r)?!!r.capture:!!r,s):cr(t,e,n,!1,r,s)}function cr(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=en(s)?!!s.capture:!!s,a=mr(t);if(a||(t[ir]=a=new nr(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ur(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Hn||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(fr(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ur(){function t(n){return e.call(t.src,t.listener,n)}var e=gr;return t}function hr(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hr(t,e[i],n,r,s);return null}return n=yr(n),t&&t[Jn]?t.O(e,n,en(r)?!!r.capture:!!r,s):cr(t,e,n,!0,r,s)}function lr(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)lr(t,e[i],n,r,s);else r=en(r)?!!r.capture:!!r,n=yr(n),t&&t[Jn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=sr(i,n,r,s),-1<n&&(er(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=mr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sr(e,n,r,s)),(n=-1<t?e[t]:null)&&dr(n))}function dr(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Jn])rr(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fr(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=mr(e))?(rr(n,t),0==n.h&&(n.src=null,e[ir]=null)):er(t)}}}function fr(t){return t in or?or[t]:or[t]="on"+t}function gr(t,e){if(t.ca)t=!0;else{e=new Yn(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&dr(t),t=n.call(r,e)}return t}function mr(t){return t=t[ir],t instanceof nr?t:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function yr(t){return"function"===typeof t?t:(t[pr]||(t[pr]=function(e){return t.handleEvent(e)}),t[pr])}function wr(){ln.call(this),this.i=new nr(this),this.P=this,this.I=null}function vr(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new Wn(e,t);else if(e instanceof Wn)e.target=e.target||t;else{var s=e;e=new Wn(r,t),Cn(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=br(o,r,!0,e)&&s}if(o=e.g=t,s=br(o,r,!0,e)&&s,s=br(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=br(o,r,!1,e)&&s}function br(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&rr(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}hn(wr,ln),wr.prototype[Jn]=!0,wr.prototype.removeEventListener=function(t,e,n,r){lr(this,t,e,n,r)},wr.prototype.M=function(){if(wr.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)er(n[r]);delete e.g[t],e.h--}}this.I=null},wr.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},wr.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ir=Je.JSON.stringify;function Er(){var t=kr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tr{constructor(){this.h=this.g=null}add(t,e){const n=Sr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var _r,Sr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Dr),(t=>t.reset()));class Dr{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ar(t){Je.setTimeout((()=>{throw t}),0)}function xr(t,e){_r||Cr(),Nr||(_r(),Nr=!0),kr.add(t,e)}function Cr(){var t=Je.Promise.resolve(void 0);_r=function(){t.then(Or)}}var Nr=!1,kr=new Tr;function Or(){for(var t;t=Er();){try{t.h.call(t.g)}catch(n){Ar(n)}var e=Sr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nr=!1}function Rr(t,e){wr.call(this),this.h=t||1,this.g=e||Je,this.j=cn(this.kb,this),this.l=Date.now()}function Lr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Mr(t,e,n){if("function"===typeof t)n&&(t=cn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=cn(t.handleEvent,t)}return 2147483647<Number(e)?-1:Je.setTimeout(t,e||0)}function Vr(t){t.g=Mr((()=>{t.g=null,t.i&&(t.i=!1,Vr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}hn(Rr,wr),He=Rr.prototype,He.da=!1,He.S=null,He.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),vr(this,"tick"),this.da&&(Lr(this),this.start()))}},He.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},He.M=function(){Rr.Z.M.call(this),Lr(this),delete this.g};class Pr extends ln{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vr(this)}M(){super.M(),this.g&&(Je.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(t){ln.call(this),this.h=t,this.g={}}hn(Fr,ln);var Br=[];function Ur(t,e,n,r){Array.isArray(n)||(n&&(Br[0]=n.toString()),n=Br);for(var s=0;s<n.length;s++){var i=ar(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qr(t){Dn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&dr(t)}),t),t.g={}}function jr(){this.g=!0}function Kr(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function $r(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Gr(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Qr(t,n)+(r?" "+r:"")}))}function zr(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Qr(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ir(n)}catch(a){return e}}Fr.prototype.M=function(){Fr.Z.M.call(this),qr(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},jr.prototype.Aa=function(){this.g=!1},jr.prototype.info=function(){};var Hr={},Wr=null;function Yr(){return Wr=Wr||new wr}function Xr(t){Wn.call(this,Hr.Ma,t)}function Jr(t){const e=Yr();vr(e,new Xr(e,t))}function Zr(t,e){Wn.call(this,Hr.STAT_EVENT,t),this.stat=e}function ts(t){const e=Yr();vr(e,new Zr(e,t))}function es(t,e){Wn.call(this,Hr.Na,t),this.size=e}function ns(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Je.setTimeout((function(){t()}),e)}Hr.Ma="serverreachability",hn(Xr,Wn),Hr.STAT_EVENT="statevent",hn(Zr,Wn),Hr.Na="timingevent",hn(es,Wn);var rs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ss={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function is(){}function os(t){return t.h||(t.h=t.i())}function as(){}is.prototype.h=null;var cs,us={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function hs(){Wn.call(this,"d")}function ls(){Wn.call(this,"c")}function ds(){}function fs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Fr(this),this.P=ms,t=Vn?125:void 0,this.W=new Rr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new gs}function gs(){this.i=null,this.g="",this.h=!1}hn(hs,Wn),hn(ls,Wn),hn(ds,is),ds.prototype.g=function(){return new XMLHttpRequest},ds.prototype.i=function(){return{}},cs=new ds;var ms=45e3,ps={},ys={};function ws(t,e,n){t.K=1,t.v=Ks(Ps(e)),t.s=n,t.U=!0,vs(t,null)}function vs(t,e){t.F=Date.now(),Ts(t),t.A=Ps(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),si(n.h,"t",r),t.C=0,n=t.l.H,t.h=new gs,t.g=ho(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Pr(cn(t.Ia,t,t.g),t.O)),Ur(t.V,t.g,"readystatechange",t.gb),e=t.H?An(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Jr(1),Kr(t.j,t.u,t.A,t.m,t.X,t.s)}function bs(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Is(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Es(t,n),r==ys){4==e&&(t.o=4,ts(14),s=!1),Gr(t.j,t.m,null,"[Incomplete Response]");break}if(r==ps){t.o=4,ts(15),Gr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Gr(t.j,t.m,r,null),xs(t,r)}bs(t)&&r!=ys&&r!=ps&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ts(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),no(e),e.L=!0,ts(11))):(Gr(t.j,t.m,n,"[Invalid Chunked Response]"),As(t),Ds(t))}function Es(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?ys:(n=Number(e.substring(n,r)),isNaN(n)?ps:(r+=1,r+n>e.length?ys:(e=e.substr(r,n),t.C=r+n,e)))}function Ts(t){t.Y=Date.now()+t.P,_s(t,t.P)}function _s(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ns(cn(t.eb,t),e)}function Ss(t){t.B&&(Je.clearTimeout(t.B),t.B=null)}function Ds(t){0==t.l.G||t.I||io(t.l,t)}function As(t){Ss(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Lr(t.W),qr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||di(n.i,t)))if(n.I=t.N,!t.J&&di(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;so(n),zi(n)}eo(n),ts(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=ns(cn(n.ab,n),6e3));if(1>=li(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else ao(n,11)}else if((t.J||n.g==t)&&so(n),!vn(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(En(t,"spdy")||En(t,"quic")||En(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(fi(i,i.h),i.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,js(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=uo(r,r.H?r.la:null,r.W),o.J){gi(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ss(a),Ts(a)),r.g=o}else to(r);0<n.l.length&&Wi(n)}else"stop"!=u[0]&&"close"!=u[0]||ao(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ao(n,7):Gi(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Jr(4)}catch(u){}}function Cs(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(tn(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ns(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(tn(t)||"string"===typeof t)mn(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(tn(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Cs(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function ks(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ks)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Os(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Rs(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Rs(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Rs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}He=fs.prototype,He.setTimeout=function(t){this.P=t},He.gb=function(t){t=t.target;const e=this.L;e&&3==Bi(t)?e.l():this.Ia(t)},He.Ia=function(t){try{if(t==this.g)t:{const h=Bi(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||Vn||this.g&&(this.h.h||this.g.ga()||Ui(this.g)))){this.I||4!=h||7==e||Jr(8==e||0>=l?3:2),Ss(this);var n=this.g.ba();this.N=n;e:if(bs(this)){var r=Ui(this.g);t="";var s=r.length,i=4==Bi(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){As(this),Ds(this);var o="";break e}this.h.i=new Je.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,$r(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vn(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ts(12),As(this),Ds(this);break t}Gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xs(this,n)}this.U?(Is(this,h,o),Vn&&this.i&&3==h&&(Ur(this.V,this.W,"tick",this.fb),this.W.start())):(Gr(this.j,this.m,o,null),xs(this,o)),4==h&&As(this),this.i&&!this.I&&(4==h?io(this.l,this):(this.i=!1,Ts(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ts(12)):(this.o=0,ts(13)),As(this),Ds(this)}}}catch(h){}},He.fb=function(){if(this.g){var t=Bi(this.g),e=this.g.ga();this.C<e.length&&(Ss(this),Is(this,t,e),this.i&&4!=t&&Ts(this))}},He.cancel=function(){this.I=!0,As(this)},He.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zr(this.j,this.A),2!=this.K&&(Jr(3),ts(17)),As(this),this.o=2,Ds(this)):_s(this,this.Y-t)},He=ks.prototype,He.R=function(){Os(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},He.T=function(){return Os(this),this.g.concat()},He.get=function(t,e){return Rs(this.h,t)?this.h[t]:e},He.set=function(t,e){Rs(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},He.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Ls=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ms(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Vs(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Vs){this.g=void 0!==e?e:t.g,Fs(this,t.j),this.s=t.s,Bs(this,t.i),Us(this,t.m),this.l=t.l,e=t.h;var n=new ti;n.i=e.i,e.g&&(n.g=new ks(e.g),n.h=e.h),qs(this,n),this.o=t.o}else t&&(n=String(t).match(Ls))?(this.g=!!e,Fs(this,n[1]||"",!0),this.s=zs(n[2]||""),Bs(this,n[3]||"",!0),Us(this,n[4]),this.l=zs(n[5]||"",!0),qs(this,n[6]||"",!0),this.o=zs(n[7]||"")):(this.g=!!e,this.h=new ti(null,this.g))}function Ps(t){return new Vs(t)}function Fs(t,e,n){t.j=n?zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bs(t,e,n){t.i=n?zs(e,!0):e}function Us(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qs(t,e,n){e instanceof ti?(t.h=e,oi(t.h,t.g)):(n||(e=Qs(e,Js)),t.h=new ti(e,t.g))}function js(t,e,n){t.h.set(e,n)}function Ks(t){return js(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t){return t instanceof Vs?Ps(t):new Vs(t,void 0)}function Gs(t,e,n,r){var s=new Vs(null,void 0);return t&&Fs(s,t),e&&Bs(s,e),n&&Us(s,n),r&&(s.l=r),s}function zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qs(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Hs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Hs(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qs(e,Ws,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Qs(e,Ws,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Qs(n,"/"==n.charAt(0)?Xs:Ys,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qs(n,Zs)),t.join("")};var Ws=/[#\/\?@]/g,Ys=/[#\?:]/g,Xs=/[#\?]/g,Js=/[#\?@]/g,Zs=/#/g;function ti(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ei(t){t.g||(t.g=new ks,t.h=0,t.i&&Ms(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ni(t,e){ei(t),e=ii(t,e),Rs(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Rs(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Os(t)))}function ri(t,e){return ei(t),e=ii(t,e),Rs(t.g.h,e)}function si(t,e,n){ni(t,e),0<n.length&&(t.i=null,t.g.set(ii(t,e),wn(n)),t.h+=n.length)}function ii(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oi(t,e){e&&!t.j&&(ei(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ni(this,e),si(this,n,t))}),t)),t.j=e}He=ti.prototype,He.add=function(t,e){ei(this),this.i=null,t=ii(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},He.forEach=function(t,e){ei(this),this.g.forEach((function(n,r){mn(n,(function(n){t.call(e,n,r,this)}),this)}),this)},He.T=function(){ei(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},He.R=function(t){ei(this);var e=[];if("string"===typeof t)ri(this,t)&&(e=yn(e,this.g.get(ii(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=yn(e,t[n])}return e},He.set=function(t,e){return ei(this),this.i=null,t=ii(this,t),ri(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},He.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},He.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var ai=class{constructor(t,e){this.h=t,this.g=e}};function ci(t){this.l=t||ui,Je.PerformanceNavigationTiming?(t=Je.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Je.g&&Je.g.Ea&&Je.g.Ea()&&Je.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ui=10;function hi(t){return!!t.h||!!t.g&&t.g.size>=t.j}function li(t){return t.h?1:t.g?t.g.size:0}function di(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function fi(t,e){t.g?t.g.add(e):t.h=e}function gi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mi(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wn(t.i)}function pi(){}function yi(){this.g=new pi}function wi(t,e,n){const r=n||"";try{Ns(t,(function(t,n){let s=t;en(t)&&(s=Ir(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function vi(t,e){const n=new jr;if(Je.Image){const r=new Image;r.onload=un(bi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=un(bi,n,r,"TestLoadImage: error",!1,e),r.onabort=un(bi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=un(bi,n,r,"TestLoadImage: timeout",!1,e),Je.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function bi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Ii(t){this.l=t.$b||null,this.j=t.ib||!1}function Ei(t,e){wr.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ti,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ci.prototype.cancel=function(){if(this.i=mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},pi.prototype.stringify=function(t){return Je.JSON.stringify(t,void 0)},pi.prototype.parse=function(t){return Je.JSON.parse(t,void 0)},hn(Ii,is),Ii.prototype.g=function(){return new Ei(this.l,this.j)},Ii.prototype.i=function(t){return function(){return t}}({}),hn(Ei,wr);var Ti=0;function _i(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Si(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Di(t)}function Di(t){t.onreadystatechange&&t.onreadystatechange.call(t)}He=Ei.prototype,He.open=function(t,e){if(this.readyState!=Ti)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Di(this)},He.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Je).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},He.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Si(this)),this.readyState=Ti},He.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Je.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_i(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},He.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Si(this):Di(this),3==this.readyState&&_i(this)}},He.Ua=function(t){this.g&&(this.response=this.responseText=t,Si(this))},He.Ta=function(t){this.g&&(this.response=t,Si(this))},He.ha=function(){this.g&&Si(this)},He.setRequestHeader=function(t,e){this.v.append(t,e)},He.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},He.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ai=Je.JSON.parse;function xi(t){wr.call(this),this.headers=new ks,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ci,this.K=this.L=!1}hn(xi,wr);var Ci="",Ni=/^https?$/i,ki=["POST","PUT"];function Oi(t){return Ln&&Gn()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Ri(t){return"content-type"==t.toLowerCase()}function Li(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Mi(t),Pi(t)}function Mi(t){t.D||(t.D=!0,vr(t,"complete"),vr(t,"error"))}function Vi(t){if(t.h&&"undefined"!=typeof Xe&&(!t.C[1]||4!=Bi(t)||2!=t.ba()))if(t.v&&4==Bi(t))Mr(t.Fa,0,t);else if(vr(t,"readystatechange"),4==Bi(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(Ls)[1]||null;if(!s&&Je.self&&Je.self.location){var i=Je.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ni.test(s?s.toLowerCase():"")}n=r}if(n)vr(t,"complete"),vr(t,"success");else{t.m=6;try{var o=2<Bi(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Mi(t)}}finally{Pi(t)}}}function Pi(t,e){if(t.g){Fi(t);const r=t.g,s=t.C[0]?Ze:null;t.g=null,t.C=null,e||vr(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Fi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Je.clearTimeout(t.A),t.A=null)}function Bi(t){return t.g?t.g.readyState:0}function Ui(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ci:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function qi(t){let e="";return Dn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ji(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qi(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):js(t,e,n))}function Ki(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $i(t){this.za=0,this.l=[],this.h=new jr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ki("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ki("baseRetryDelayMs",5e3,t),this.$a=Ki("retryDelaySeedMs",1e4,t),this.Ya=Ki("forwardChannelMaxRetries",2,t),this.ra=Ki("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ci(t&&t.concurrentRequestLimit),this.Ca=new yi,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Gi(t){if(Qi(t),3==t.G){var e=t.V++,n=Ps(t.F);js(n,"SID",t.J),js(n,"RID",e),js(n,"TYPE","terminate"),Ji(t,n),e=new fs(t,t.h,e,void 0),e.K=2,e.v=Ks(Ps(n)),n=!1,Je.navigator&&Je.navigator.sendBeacon&&(n=Je.navigator.sendBeacon(e.v.toString(),"")),!n&&Je.Image&&((new Image).src=e.v,n=!0),n||(e.g=ho(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ts(e)}co(t)}function zi(t){t.g&&(no(t),t.g.cancel(),t.g=null)}function Qi(t){zi(t),t.u&&(Je.clearTimeout(t.u),t.u=null),so(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Je.clearTimeout(t.m),t.m=null)}function Hi(t,e){t.l.push(new ai(t.Za++,e)),3==t.G&&Wi(t)}function Wi(t){hi(t.i)||t.m||(t.m=!0,xr(t.Ha,t),t.C=0)}function Yi(t,e){return!(li(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ns(cn(t.Ha,t,e),oo(t,t.C)),t.C++,!0))}function Xi(t,e){var n;n=e?e.m:t.V++;const r=Ps(t.F);js(r,"SID",t.J),js(r,"RID",n),js(r,"AID",t.U),Ji(t,r),t.o&&t.s&&ji(r,t.o,t.s),n=new fs(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Zi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),fi(t.i,n),ws(n,r,e)}function Ji(t,e){t.j&&Ns({},(function(t,n){js(e,n,t)}))}function Zi(t,e,n){n=Math.min(t.l.length,n);var r=t.j?cn(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{wi(a,t,"req"+n+"_")}catch(qo){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function to(t){t.g||t.u||(t.Y=1,xr(t.Ga,t),t.A=0)}function eo(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ns(cn(t.Ga,t),oo(t,t.A)),t.A++,!0)}function no(t){null!=t.B&&(Je.clearTimeout(t.B),t.B=null)}function ro(t){t.g=new fs(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ps(t.oa);js(e,"RID","rpc"),js(e,"SID",t.J),js(e,"CI",t.N?"0":"1"),js(e,"AID",t.U),Ji(t,e),js(e,"TYPE","xmlhttp"),t.o&&t.s&&ji(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ks(Ps(e)),n.s=null,n.U=!0,vs(n,t)}function so(t){null!=t.v&&(Je.clearTimeout(t.v),t.v=null)}function io(t,e){var n=null;if(t.g==e){so(t),no(t),t.g=null;var r=2}else{if(!di(t.i,e))return;n=e.D,gi(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Yr(),vr(r,new es(r,n,e,s)),Wi(t)}else to(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&Yi(t,e)||2==r&&eo(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ao(t,5);break;case 4:ao(t,10);break;case 3:ao(t,6);break;default:ao(t,2)}}function oo(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ao(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=cn(t.jb,t);n||(n=new Vs("//www.google.com/images/cleardot.gif"),Je.location&&"http"==Je.location.protocol||Fs(n,"https"),Ks(n)),vi(n.toString(),r)}else ts(2);t.G=0,t.j&&t.j.va(e),co(t),Qi(t)}function co(t){t.G=0,t.I=-1,t.j&&(0==mi(t.i).length&&0==t.l.length||(t.i.i.length=0,wn(t.l),t.l.length=0),t.j.ua())}function uo(t,e,n){let r=$s(n);if(""!=r.i)e&&Bs(r,e+"."+r.i),Us(r,r.m);else{const t=Je.location;r=Gs(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Dn(t.aa,(function(t,e){js(r,e,t)})),e=t.D,n=t.sa,e&&n&&js(r,e,n),js(r,"VER",t.ma),Ji(t,r),r}function ho(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new xi(new Ii({ib:!0})):new xi(t.qa),e.L=t.H,e}function lo(){}function fo(){if(Ln&&!(10<=Number(Qn)))throw Error("Environmental error: no available transport.")}function go(t,e){wr.call(this),this.g=new $i(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!vn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vn(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yo(this)}function mo(t){hs.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function po(){ls.call(this),this.status=1}function yo(t){this.g=t}He=xi.prototype,He.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cs.g(),this.C=this.u?os(this.u):os(cs),this.g.onreadystatechange=cn(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void Li(this,i)}t=n||"";const s=new ks(this.headers);r&&Ns(r,(function(t,e){s.set(e,t)})),r=pn(s.T()),n=Je.FormData&&t instanceof Je.FormData,!(0<=gn(ki,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fi(this),0<this.B&&((this.K=Oi(this.g))?(this.g.timeout=this.B,this.g.ontimeout=cn(this.pa,this)):this.A=Mr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Li(this,i)}},He.pa=function(){"undefined"!=typeof Xe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vr(this,"timeout"),this.abort(8))},He.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vr(this,"complete"),vr(this,"abort"),Pi(this))},He.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pi(this,!0)),xi.Z.M.call(this)},He.Fa=function(){this.s||(this.F||this.v||this.l?Vi(this):this.cb())},He.cb=function(){Vi(this)},He.ba=function(){try{return 2<Bi(this)?this.g.status:-1}catch(t){return-1}},He.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},He.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ai(e)}},He.Da=function(){return this.m},He.La=function(){return"string"===typeof this.j?this.j:String(this.j)},He=$i.prototype,He.ma=8,He.G=1,He.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},He.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new fs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=An(i),Cn(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Zi(this,s,e),n=Ps(this.F),js(n,"RID",t),js(n,"CVER",22),this.D&&js(n,"X-HTTP-Session-Id",this.D),Ji(this,n),this.o&&i&&ji(n,this.o,i),fi(this.i,s),this.Ra&&js(n,"TYPE","init"),this.ja?(js(n,"$req",e),js(n,"SID","null"),s.$=!0,ws(s,n,null)):ws(s,n,e),this.G=2}}else 3==this.G&&(t?Xi(this,t):0==this.l.length||hi(this.i)||Xi(this))},He.Ga=function(){if(this.u=null,ro(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ns(cn(this.bb,this),t)}},He.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ts(10),zi(this),ro(this))},He.ab=function(){null!=this.v&&(this.v=null,zi(this),eo(this),ts(19))},He.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ts(2)):(this.h.info("Failed to ping google.com"),ts(1))},He=lo.prototype,He.xa=function(){},He.wa=function(){},He.va=function(){},He.ua=function(){},He.Oa=function(){},fo.prototype.g=function(t,e){return new go(t,e)},hn(go,wr),go.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),xr(cn(t.hb,t,e))),ts(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=uo(t,null,t.W),Wi(t)},go.prototype.close=function(){Gi(this.g)},go.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,Hi(this.g,e)}else this.v?(e={},e.__data__=Ir(t),Hi(this.g,e)):Hi(this.g,t)},go.prototype.M=function(){this.g.j=null,delete this.j,Gi(this.g),delete this.g,go.Z.M.call(this)},hn(mo,hs),hn(po,ls),hn(yo,lo),yo.prototype.xa=function(){vr(this.g,"a")},yo.prototype.wa=function(t){vr(this.g,new mo(t))},yo.prototype.va=function(t){vr(this.g,new po(t))},yo.prototype.ua=function(){vr(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,go.prototype.send=go.prototype.u,go.prototype.open=go.prototype.m,go.prototype.close=go.prototype.close,rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,ss.COMPLETE="complete",as.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",wr.prototype.listen=wr.prototype.N,xi.prototype.listenOnce=xi.prototype.O,xi.prototype.getLastError=xi.prototype.La,xi.prototype.getLastErrorCode=xi.prototype.Da,xi.prototype.getStatus=xi.prototype.ba,xi.prototype.getResponseJson=xi.prototype.Qa,xi.prototype.getResponseText=xi.prototype.ga,xi.prototype.send=xi.prototype.ea;var wo=Ye.createWebChannelTransport=function(){return new fo},vo=Ye.getStatEventTarget=function(){return Yr()},bo=Ye.ErrorCode=rs,Io=Ye.EventType=ss,Eo=Ye.Event=Hr,To=Ye.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_o=Ye.FetchXmlHttpFactory=Ii,So=Ye.WebChannel=as,Do=Ye.XhrIo=xi;const Ao="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}xo.UNAUTHENTICATED=new xo(null),xo.GOOGLE_CREDENTIALS=new xo("google-credentials-uid"),xo.FIRST_PARTY=new xo("first-party-uid"),xo.MOCK_USER=new xo("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Co="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Y("@firebase/firestore");function ko(){return No.logLevel}function Oo(t){No.setLogLevel(t)}function Ro(t,...e){if(No.logLevel<=G.DEBUG){const n=e.map(Vo);No.debug(`Firestore (${Co}): ${t}`,...n)}}function Lo(t,...e){if(No.logLevel<=G.ERROR){const n=e.map(Vo);No.error(`Firestore (${Co}): ${t}`,...n)}}function Mo(t,...e){if(No.logLevel<=G.WARN){const n=e.map(Vo);No.warn(`Firestore (${Co}): ${t}`,...n)}}function Vo(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+t;throw Lo(e),new Error(e)}function Fo(t,e){t||Po()}function Bo(t,e){t||Po()}function Uo(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jo extends D{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Go{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(xo.UNAUTHENTICATED)))}shutdown(){}}class zo{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Qo{constructor(t){this.t=t,this.currentUser=xo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Ko;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ko,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Ro("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ro("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ko)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ro("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Fo("string"==typeof e.accessToken),new $o(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Fo(null===t||"string"==typeof t),new xo(t)}}class Ho{constructor(t,e,n){this.type="FirstParty",this.user=xo.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Wo{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Ho(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(xo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xo{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Ro("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ro("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Ro("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Ro("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Fo("string"==typeof t.token),this.p=t.token,new Yo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jo(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Jo(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function ta(t,e){return t<e?-1:t>e?1:0}function ea(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}function na(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new jo(qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new jo(qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new jo(qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new jo(qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ra.fromMillis(Date.now())}static fromDate(t){return ra.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ra(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ta(this.nanoseconds,t.nanoseconds):ta(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this.timestamp=t}static fromTimestamp(t){return new sa(t)}static min(){return new sa(new ra(0,0))}static max(){return new sa(new ra(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e,n){void 0===e?e=0:e>t.length&&Po(),void 0===n?n=t.length-e:n>t.length-e&&Po(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ia.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ia?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class oa extends ia{construct(t,e,n){return new oa(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new jo(qo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new oa(e)}static emptyPath(){return new oa([])}}const aa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ca extends ia{construct(t,e,n){return new ca(t,e,n)}static isValidIdentifier(t){return aa.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ca.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ca(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new jo(qo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new jo(qo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new jo(qo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new jo(qo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ca(e)}static emptyPath(){return new ca([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t){this.path=t}static fromPath(t){return new ua(oa.fromString(t))}static fromName(t){return new ua(oa.fromString(t).popFirst(5))}static empty(){return new ua(oa.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===oa.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return oa.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ua(new oa(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}function la(t){return t.fields.find((t=>2===t.kind))}function da(t){return t.fields.filter((t=>2!==t.kind))}ha.UNKNOWN_ID=-1;class fa{constructor(t,e){this.fieldPath=t,this.kind=e}}class ga{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new ga(0,ya.min())}}function ma(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=sa.fromTimestamp(1e9===r?new ra(n+1,0):new ra(n,r));return new ya(s,ua.empty(),e)}function pa(t){return new ya(t.readTime,t.key,-1)}class ya{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ya(sa.min(),ua.empty(),-1)}static max(){return new ya(sa.max(),ua.empty(),-1)}}function wa(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ua.comparator(t.documentKey,e.documentKey),0!==n?n:ta(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ba{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){if(t.code!==qo.FAILED_PRECONDITION||t.message!==va)throw t;Ro("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Po(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ea(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ea?e:Ea.resolve(e)}catch(t){return Ea.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.reject(e)}static resolve(t){return new Ea(((e,n)=>{e(t)}))}static reject(t){return new Ea(((e,n)=>{n(t)}))}static waitFor(t){return new Ea(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Ea.resolve(!1);for(const n of t)e=e.next((t=>t?Ea.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ea(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ea(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.T=new Ko,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{e.error?this.T.reject(new Da(t,e.error)):this.T.resolve()},this.transaction.onerror=e=>{const n=ka(e.target.error);this.T.reject(new Da(t,n))}}static open(t,e,n,r){try{return new Ta(e,t.transaction(r,n))}catch(t){throw new Da(e,t)}}get A(){return this.T.promise}abort(t){t&&this.T.reject(t),this.aborted||(Ro("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const t=this.transaction;this.aborted||"function"!=typeof t.commit||t.commit()}store(t){const e=this.transaction.objectStore(t);return new xa(e)}}class _a{constructor(t,e,n){this.name=t,this.version=e,this.P=n,12.2===_a.v(f())&&Lo("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return Ro("SimpleDb","Removing database:",t),Ca(window.indexedDB.deleteDatabase(t)).toPromise()}static V(){if(!T())return!1;if(_a.S())return!0;const t=f(),e=_a.v(t),n=0<e&&e<10,r=_a.D(t),s=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||s)}static S(){var t;return"undefined"!=typeof process&&"YES"===(null===(t={NODE_ENV:"production",BASE_URL:"/"})||void 0===t?void 0:t.C)}static N(t,e){return t.store(e)}static v(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(t){return this.db||(Ro("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Da(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new jo(qo.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new jo(qo.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Da(t,r))},r.onupgradeneeded=t=>{Ro("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.P.O(e,r.transaction,t.oldVersion,this.version).next((()=>{Ro("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.M&&(this.db.onversionchange=t=>this.M(t)),this.db}F(t){this.M=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const s="readonly"===e;let i=0;for(;;){++i;try{this.db=await this.k(t);const e=Ta.open(this.db,t,s?"readonly":"readwrite",n),i=r(e).next((t=>(e.R(),t))).catch((t=>(e.abort(t),Ea.reject(t)))).toPromise();return i.catch((()=>{})),await e.A,i}catch(t){const e=t,n="FirebaseError"!==e.name&&i<3;if(Ro("SimpleDb","Transaction failed with error:",e.message,"Retrying:",n),this.close(),!n)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sa{constructor(t){this.$=t,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(t){this.$=t}done(){this.B=!0}q(t){this.L=t}delete(){return Ca(this.$.delete())}}class Da extends jo{constructor(t,e){super(qo.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Aa(t){return"IndexedDbTransactionError"===t.name}class xa{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(Ro("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(Ro("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ca(n)}add(t){return Ro("SimpleDb","ADD",this.store.name,t,t),Ca(this.store.add(t))}get(t){return Ca(this.store.get(t)).next((e=>(void 0===e&&(e=null),Ro("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return Ro("SimpleDb","DELETE",this.store.name,t),Ca(this.store.delete(t))}count(){return Ro("SimpleDb","COUNT",this.store.name),Ca(this.store.count())}K(t,e){const n=this.options(t,e);if(n.index||"function"!=typeof this.store.getAll){const t=this.cursor(n),e=[];return this.G(t,((t,n)=>{e.push(n)})).next((()=>e))}{const t=this.store.getAll(n.range);return new Ea(((e,n)=>{t.onerror=t=>{n(t.target.error)},t.onsuccess=t=>{e(t.target.result)}}))}}j(t,e){const n=this.store.getAll(t,null===e?void 0:e);return new Ea(((t,e)=>{n.onerror=t=>{e(t.target.error)},n.onsuccess=e=>{t(e.target.result)}}))}W(t,e){Ro("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const r=this.cursor(n);return this.G(r,((t,e,n)=>n.delete()))}J(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.G(r,e)}Y(t){const e=this.cursor({});return new Ea(((n,r)=>{e.onerror=t=>{const e=ka(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next((t=>{t?r.continue():n()})):n()}}))}G(t,e){const n=[];return new Ea(((r,s)=>{t.onerror=t=>{s(t.target.error)},t.onsuccess=t=>{const s=t.target.result;if(!s)return void r();const i=new Sa(s),o=e(s.primaryKey,s.value,i);if(o instanceof Ea){const t=o.catch((t=>(i.done(),Ea.reject(t))));n.push(t)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>Ea.waitFor(n)))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ca(t){return new Ea(((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=ka(t.target.error);n(e)}}))}let Na=!1;function ka(t){const e=_a.v(f());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new jo("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Na||(Na=!0,setTimeout((()=>{throw t}),0)),t}}return t}class Oa{constructor(t,e){this.asyncQueue=t,this.X=e,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(t){Ro("IndexBackiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{Ro("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(t){Aa(t)?Ro("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Ia(t)}await this.Z(1)}))}}class Ra{constructor(t,e){this.localStore=t,this.persistence=e}async tt(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.et(e,t)))}et(t,e){const n=new Set;let r=e,s=!0;return Ea.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((e=>{if(null!==e&&!n.has(e))return Ro("IndexBackiller",`Processing collection: ${e}`),this.nt(t,e,r).next((t=>{r-=t,n.add(e)}));s=!1})))).next((()=>e-r))}nt(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((r=>this.localStore.localDocuments.getNextDocuments(t,e,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(t,s).next((()=>this.st(r,n))).next((n=>(Ro("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(t,e,n)))).next((()=>s.size))}))))}st(t,e){let n=t;return e.changes.forEach(((t,e)=>{const r=pa(e);wa(r,n)>0&&(n=r)})),new ya(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Va(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Pa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */La.ot=-1;class Fa{constructor(t,e){this.comparator=t,this.root=e||Ua.EMPTY}insert(t,e){return new Fa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ua.BLACK,null,null))}remove(t){return new Fa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ua.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ba(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ba(this.root,t,this.comparator,!0)}}class Ba{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ua{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Ua.RED,this.left=null!=r?r:Ua.EMPTY,this.right=null!=s?s:Ua.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ua(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ua.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ua.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ua.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ua.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Po();if(this.right.isRed())throw Po();const t=this.left.check();if(t!==this.right.check())throw Po();return t+(this.isRed()?0:1)}}Ua.EMPTY=null,Ua.RED=!0,Ua.BLACK=!1,Ua.EMPTY=new class{constructor(){this.size=0}get key(){throw Po()}get value(){throw Po()}get color(){throw Po()}get left(){throw Po()}get right(){throw Po()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ua(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(t){this.comparator=t,this.data=new Fa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(t){return new ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof qa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new qa(this.comparator);return e.data=t,e}}class ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ka(t){return t.hasNext()?t.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this.fields=t,t.sort(ca.comparator)}static empty(){return new $a([])}unionWith(t){let e=new qa(ca.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new $a(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ea(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new za(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new za(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ta(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}za.EMPTY_BYTE_STRING=new za("");const Qa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ha(t){if(Fo(!!t),"string"==typeof t){let e=0;const n=Qa.exec(t);if(Fo(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Wa(t.seconds),nanos:Wa(t.nanos)}}function Wa(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ya(t){return"string"==typeof t?za.fromBase64String(t):za.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ja(t){const e=t.mapValue.fields.__previous_value__;return Xa(e)?Ja(e):e}function Za(t){const e=Ha(t.mapValue.fields.__local_write_time__.timestampValue);return new ra(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ec{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ec("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ec&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t){return null==t}function rc(t){return 0===t&&1/t==-1/0}function sc(t){return"number"==typeof t&&Number.isInteger(t)&&!rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},oc={nullValue:"NULL_VALUE"};function ac(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xa(t)?4:Ic(t)?9007199254740991:10:Po()}function cc(t,e){if(t===e)return!0;const n=ac(t);if(n!==ac(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Za(t).isEqual(Za(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ha(t.timestampValue),r=Ha(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ya(t.bytesValue).isEqual(Ya(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Wa(t.geoPointValue.latitude)===Wa(e.geoPointValue.latitude)&&Wa(t.geoPointValue.longitude)===Wa(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Wa(t.integerValue)===Wa(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Wa(t.doubleValue),r=Wa(e.doubleValue);return n===r?rc(n)===rc(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ea(t.arrayValue.values||[],e.arrayValue.values||[],cc);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ma(n)!==Ma(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!cc(n[s],r[s])))return!1;return!0}(t,e);default:return Po()}}function uc(t,e){return void 0!==(t.values||[]).find((t=>cc(t,e)))}function hc(t,e){if(t===e)return 0;const n=ac(t),r=ac(e);if(n!==r)return ta(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ta(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Wa(t.integerValue||t.doubleValue),r=Wa(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return lc(t.timestampValue,e.timestampValue);case 4:return lc(Za(t),Za(e));case 5:return ta(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ya(t),r=Ya(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=ta(n[s],r[s]);if(0!==t)return t}return ta(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ta(Wa(t.latitude),Wa(e.latitude));return 0!==n?n:ta(Wa(t.longitude),Wa(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=hc(n[s],r[s]);if(t)return t}return ta(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ic.mapValue&&e===ic.mapValue)return 0;if(t===ic.mapValue)return 1;if(e===ic.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=ta(r[o],i[o]);if(0!==t)return t;const e=hc(n[r[o]],s[i[o]]);if(0!==e)return e}return ta(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Po()}}function lc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ta(t,e);const n=Ha(t),r=Ha(e),s=ta(n.seconds,r.seconds);return 0!==s?s:ta(n.nanos,r.nanos)}function dc(t){return fc(t)}function fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ha(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ya(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ua.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=fc(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${fc(t.fields[s])}`;return n+"}"}(t.mapValue):Po();var e,n}function gc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mc(t){return!!t&&"integerValue"in t}function pc(t){return!!t&&"arrayValue"in t}function yc(t){return!!t&&"nullValue"in t}function wc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vc(t){return!!t&&"mapValue"in t}function bc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Va(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=bc(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ic(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}function Ec(t){return"nullValue"in t?oc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?gc(ec.empty(),ua.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Po()}function Tc(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?gc(ec.empty(),ua.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ic:Po()}function _c(t,e){const n=hc(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Sc(t,e){const n=hc(t.value,e.value);return 0!==n?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.value=t}static empty(){return new Dc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bc(e)}setAll(t){let e=ca.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=bc(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());vc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return cc(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];vc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Va(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Dc(bc(this.value))}}function Ac(t){const e=[];return Va(t.fields,((t,n)=>{const r=new ca([t]);if(vc(n)){const t=Ac(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new $a(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xc{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new xc(t,0,sa.min(),sa.min(),Dc.empty(),0)}static newFoundDocument(t,e,n){return new xc(t,1,e,sa.min(),n,0)}static newNoDocument(t,e){return new xc(t,2,e,sa.min(),Dc.empty(),0)}static newUnknownDocument(t,e){return new xc(t,3,e,sa.min(),Dc.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sa.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof xc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xc(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function Nc(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Cc(t,e,n,r,s,i,o)}function kc(t){const e=Uo(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+dc(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),nc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>dc(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>dc(t))).join(",")),e.ut=t}return e.ut}function Oc(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${dc(e.value)}`;var e})).join(", ")}]`),nc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>dc(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>dc(t))).join(",")),`Target(${e})`}function Rc(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!Wc(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!cc(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xc(t.startAt,e.startAt)&&Xc(t.endAt,e.endAt)}function Lc(t){return ua.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Mc(t,e){return t.filters.filter((t=>t instanceof Fc&&t.field.isEqual(e)))}function Vc(t,e,n){let r=oc,s=!0;for(const i of Mc(t,e)){let t=oc,e=!0;switch(i.op){case"<":case"<=":t=Ec(i.value);break;case"==":case"in":case">=":t=i.value;break;case">":t=i.value,e=!1;break;case"!=":case"not-in":t=oc}_c({value:r,inclusive:s},{value:t,inclusive:e})<0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];_c({value:r,inclusive:s},{value:t,inclusive:n.inclusive})<0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}function Pc(t,e,n){let r=ic,s=!0;for(const i of Mc(t,e)){let t=ic,e=!0;switch(i.op){case">=":case">":t=Tc(i.value),e=!1;break;case"==":case"in":case"<=":t=i.value;break;case"<":t=i.value,e=!1;break;case"!=":case"not-in":t=ic}Sc({value:r,inclusive:s},{value:t,inclusive:e})>0&&(r=t,s=e)}if(null!==n)for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const t=n.position[i];Sc({value:r,inclusive:s},{value:t,inclusive:n.inclusive})>0&&(r=t,s=n.inclusive);break}return{value:r,inclusive:s}}class Fc extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Bc(t,e,n):"array-contains"===e?new Kc(t,n):"in"===e?new $c(t,n):"not-in"===e?new Gc(t,n):"array-contains-any"===e?new zc(t,n):new Fc(t,e,n)}static ct(t,e,n){return"in"===e?new Uc(t,n):new qc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(hc(e,this.value)):null!==e&&ac(this.value)===ac(e)&&this.at(hc(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Po()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Bc extends Fc{constructor(t,e,n){super(t,e,n),this.key=ua.fromName(n.referenceValue)}matches(t){const e=ua.comparator(t.key,this.key);return this.at(e)}}class Uc extends Fc{constructor(t,e){super(t,"in",e),this.keys=jc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class qc extends Fc{constructor(t,e){super(t,"not-in",e),this.keys=jc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function jc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ua.fromName(t.referenceValue)))}class Kc extends Fc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pc(e)&&uc(e.arrayValue,this.value)}}class $c extends Fc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&uc(this.value.arrayValue,e)}}class Gc extends Fc{constructor(t,e){super(t,"not-in",e)}matches(t){if(uc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!uc(this.value.arrayValue,e)}}class zc extends Fc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>uc(this.value.arrayValue,t)))}}class Qc{constructor(t,e){this.position=t,this.inclusive=e}}class Hc{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Yc(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?ua.comparator(ua.fromName(o.referenceValue),n.key):hc(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Xc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cc(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Zc(t,e,n,r,s,i,o,a){return new Jc(t,e,n,r,s,i,o,a)}function tu(t){return new Jc(t)}function eu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function nu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ru(t){for(const e of t.filters)if(e.ht())return e.field;return null}function su(t){return null!==t.collectionGroup}function iu(t){const e=Uo(t);if(null===e.lt){e.lt=[];const t=ru(e),n=nu(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Hc(t)),e.lt.push(new Hc(ca.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Hc(ca.keyField(),t))}}}return e.lt}function ou(t){const e=Uo(t);if(!e.ft)if("F"===e.limitType)e.ft=Nc(e.path,e.collectionGroup,iu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of iu(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Hc(s.field,e))}const n=e.endAt?new Qc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qc(e.startAt.position,e.startAt.inclusive):null;e.ft=Nc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function au(t,e,n){return new Jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cu(t,e){return Rc(ou(t),ou(e))&&t.limitType===e.limitType}function uu(t){return`${kc(ou(t))}|lt:${t.limitType}`}function hu(t){return`Query(target=${Oc(ou(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ua.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Yc(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,iu(t),e))&&!(t.endAt&&!function(t,e,n){const r=Yc(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,iu(t),e))}(t,e)}function du(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fu(t){return(e,n)=>{let r=!1;for(const s of iu(t)){const t=gu(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function gu(t,e,n){const r=t.field.isKeyField()?ua.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?hc(r,s):Po()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Po()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function pu(t){return{integerValue:""+t}}function yu(t,e){return sc(e)?pu(e):mu(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this._=void 0}}function vu(t,e,n){return t instanceof Eu?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Tu?_u(t,e):t instanceof Su?Du(t,e):function(t,e){const n=Iu(t,e),r=xu(n)+xu(t._t);return mc(n)&&mc(t._t)?pu(r):mu(t.wt,r)}(t,e)}function bu(t,e,n){return t instanceof Tu?_u(t,e):t instanceof Su?Du(t,e):n}function Iu(t,e){return t instanceof Au?mc(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Eu extends wu{}class Tu extends wu{constructor(t){super(),this.elements=t}}function _u(t,e){const n=Cu(e);for(const r of t.elements)n.some((t=>cc(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Su extends wu{constructor(t){super(),this.elements=t}}function Du(t,e){let n=Cu(e);for(const r of t.elements)n=n.filter((t=>!cc(t,r)));return{arrayValue:{values:n}}}class Au extends wu{constructor(t,e){super(),this.wt=t,this._t=e}}function xu(t){return Wa(t.integerValue||t.doubleValue)}function Cu(t){return pc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e){this.field=t,this.transform=e}}function ku(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Tu&&e instanceof Tu||t instanceof Su&&e instanceof Su?ea(t.elements,e.elements,cc):t instanceof Au&&e instanceof Au?cc(t._t,e._t):t instanceof Eu&&e instanceof Eu}(t.transform,e.transform)}class Ou{constructor(t,e){this.version=t,this.transformResults=e}}class Ru{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ru}static exists(t){return new Ru(void 0,t)}static updateTime(t){return new Ru(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Lu(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Mu{}function Vu(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new zu(t.key,Ru.none()):new qu(t.key,t.data,Ru.none());{const n=t.data,r=Dc.empty();let s=new qa(ca.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new ju(t.key,r,new $a(s.toArray()),Ru.none())}}function Pu(t,e,n){t instanceof qu?function(t,e,n){const r=t.value.clone(),s=$u(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ju?function(t,e,n){if(!Lu(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=$u(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Ku(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Fu(t,e,n,r){return t instanceof qu?function(t,e,n,r){if(!Lu(t.precondition,e))return n;const s=t.value.clone(),i=Gu(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof ju?function(t,e,n,r){if(!Lu(t.precondition,e))return n;const s=Gu(t.fieldTransforms,r,e),i=e.data;return i.setAll(Ku(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Lu(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Bu(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Iu(r.transform,t||null);null!=s&&(null===n&&(n=Dc.empty()),n.set(r.field,s))}return n||null}function Uu(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ea(t,e,((t,e)=>ku(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qu extends Mu{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ju extends Mu{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ku(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function $u(t,e,n){const r=new Map;Fo(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,bu(o,a,n[s]))}return r}function Gu(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,vu(t,i,e))}return r}class zu extends Mu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qu extends Mu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wu,Yu;function Xu(t){switch(t){default:return Po();case qo.CANCELLED:case qo.UNKNOWN:case qo.DEADLINE_EXCEEDED:case qo.RESOURCE_EXHAUSTED:case qo.INTERNAL:case qo.UNAVAILABLE:case qo.UNAUTHENTICATED:return!1;case qo.INVALID_ARGUMENT:case qo.NOT_FOUND:case qo.ALREADY_EXISTS:case qo.PERMISSION_DENIED:case qo.FAILED_PRECONDITION:case qo.ABORTED:case qo.OUT_OF_RANGE:case qo.UNIMPLEMENTED:case qo.DATA_LOSS:return!0}}function Ju(t){if(void 0===t)return Lo("GRPC error has no .code"),qo.UNKNOWN;switch(t){case Wu.OK:return qo.OK;case Wu.CANCELLED:return qo.CANCELLED;case Wu.UNKNOWN:return qo.UNKNOWN;case Wu.DEADLINE_EXCEEDED:return qo.DEADLINE_EXCEEDED;case Wu.RESOURCE_EXHAUSTED:return qo.RESOURCE_EXHAUSTED;case Wu.INTERNAL:return qo.INTERNAL;case Wu.UNAVAILABLE:return qo.UNAVAILABLE;case Wu.UNAUTHENTICATED:return qo.UNAUTHENTICATED;case Wu.INVALID_ARGUMENT:return qo.INVALID_ARGUMENT;case Wu.NOT_FOUND:return qo.NOT_FOUND;case Wu.ALREADY_EXISTS:return qo.ALREADY_EXISTS;case Wu.PERMISSION_DENIED:return qo.PERMISSION_DENIED;case Wu.FAILED_PRECONDITION:return qo.FAILED_PRECONDITION;case Wu.ABORTED:return qo.ABORTED;case Wu.OUT_OF_RANGE:return qo.OUT_OF_RANGE;case Wu.UNIMPLEMENTED:return qo.UNIMPLEMENTED;case Wu.DATA_LOSS:return qo.DATA_LOSS;default:return Po()}}(Yu=Wu||(Wu={}))[Yu.OK=0]="OK",Yu[Yu.CANCELLED=1]="CANCELLED",Yu[Yu.UNKNOWN=2]="UNKNOWN",Yu[Yu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yu[Yu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yu[Yu.NOT_FOUND=5]="NOT_FOUND",Yu[Yu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yu[Yu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yu[Yu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yu[Yu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yu[Yu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yu[Yu.ABORTED=10]="ABORTED",Yu[Yu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yu[Yu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yu[Yu.INTERNAL=13]="INTERNAL",Yu[Yu.UNAVAILABLE=14]="UNAVAILABLE",Yu[Yu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Va(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Pa(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Fa(ua.comparator);function eh(){return th}const nh=new Fa(ua.comparator);function rh(...t){let e=nh;for(const n of t)e=e.insert(n.key,n);return e}function sh(t){let e=nh;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ih(){return ah()}function oh(){return ah()}function ah(){return new Zu((t=>t.toString()),((t,e)=>t.isEqual(e)))}const ch=new Fa(ua.comparator),uh=new qa(ua.comparator);function hh(...t){let e=uh;for(const n of t)e=e.add(n);return e}const lh=new qa(ta);function dh(){return lh}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,gh.createSynthesizedTargetChangeForCurrentChange(t,e)),new fh(sa.min(),n,dh(),eh(),hh())}}class gh{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new gh(za.EMPTY_BYTE_STRING,e,hh(),hh(),hh())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class ph{constructor(t,e){this.targetId=t,this.It=e}}class yh{constructor(t,e,n=za.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class wh{constructor(){this.Tt=0,this.Et=Ih(),this.At=za.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=hh(),e=hh(),n=hh();return this.Et.forEach(((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Po()}})),new gh(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Ih()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class vh{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=eh(),this.Bt=bh(),this.Lt=new qa(ta)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:Po()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(Lc(t))if(0===n){const n=new ua(t.path);this.Kt(e,n,xc.newNoDocument(n,sa.min()))}else Fo(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Lc(s.target)){const e=new ua(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,xc.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=hh();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new fh(t,e,this.Lt,this.$t,n);return this.$t=eh(),this.Bt=bh(),this.Lt=new qa(ta),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new wh,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new qa(ta),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||Ro("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new wh),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function bh(){return new Fa(ua.comparator)}function Ih(){return new Fa(ua.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Th=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class _h{constructor(t,e){this.databaseId=t,this.dt=e}}function Sh(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dh(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ah(t,e){return Sh(t,e.toTimestamp())}function xh(t){return Fo(!!t),sa.fromTimestamp(function(t){const e=Ha(t);return new ra(e.seconds,e.nanos)}(t))}function Ch(t,e){return function(t){return new oa(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Nh(t){const e=oa.fromString(t);return Fo(nl(e)),e}function kh(t,e){return Ch(t.databaseId,e.path)}function Oh(t,e){const n=Nh(e);if(n.get(1)!==t.databaseId.projectId)throw new jo(qo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new jo(qo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ua(Vh(n))}function Rh(t,e){return Ch(t.databaseId,e)}function Lh(t){const e=Nh(t);return 4===e.length?oa.emptyPath():Vh(e)}function Mh(t){return new oa(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vh(t){return Fo(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ph(t,e,n){return{name:kh(t,e),fields:n.value.mapValue.fields}}function Fh(t,e,n){const r=Oh(t,e.name),s=xh(e.updateTime),i=new Dc({mapValue:{fields:e.fields}}),o=xc.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Bh(t,e){return"found"in e?function(t,e){Fo(!!e.found),e.found.name,e.found.updateTime;const n=Oh(t,e.found.name),r=xh(e.found.updateTime),s=new Dc({mapValue:{fields:e.found.fields}});return xc.newFoundDocument(n,r,s)}(t,e):"missing"in e?function(t,e){Fo(!!e.missing),Fo(!!e.readTime);const n=Oh(t,e.missing),r=xh(e.readTime);return xc.newNoDocument(n,r)}(t,e):Po()}function Uh(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Po()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(Fo(void 0===e||"string"==typeof e),za.fromBase64String(e||"")):(Fo(void 0===e||e instanceof Uint8Array),za.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?qo.UNKNOWN:Ju(t.code);return new jo(e,t.message||"")}(o);n=new yh(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oh(t,r.document.name),i=xh(r.document.updateTime),o=new Dc({mapValue:{fields:r.document.fields}}),a=xc.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new mh(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oh(t,r.document),i=r.readTime?xh(r.readTime):sa.min(),o=xc.newNoDocument(s,i),a=r.removedTargetIds||[];n=new mh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oh(t,r.document),i=r.removedTargetIds||[];n=new mh([],i,s,null)}else{if(!("filter"in e))return Po();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new Hu(r),i=t.targetId;n=new ph(i,s)}}return n}function qh(t,e){let n;if(e instanceof qu)n={update:Ph(t,e.key,e.value)};else if(e instanceof zu)n={delete:kh(t,e.key)};else if(e instanceof ju)n={update:Ph(t,e.key,e.data),updateMask:el(e.fieldMask)};else{if(!(e instanceof Qu))return Po();n={verify:kh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Eu)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Tu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Su)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Au)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Po()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ah(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Po()}(t,e.precondition)),n}function jh(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ru.updateTime(xh(t.updateTime)):void 0!==t.exists?Ru.exists(t.exists):Ru.none()}(e.currentDocument):Ru.none(),r=e.updateTransforms?e.updateTransforms.map((e=>function(t,e){let n=null;if("setToServerValue"in e)Fo("REQUEST_TIME"===e.setToServerValue),n=new Eu;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new Tu(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new Su(t)}else"increment"in e?n=new Au(t,e.increment):Po();const r=ca.fromServerFormat(e.fieldPath);return new Nu(r,n)}(t,e))):[];if(e.update){e.update.name;const s=Oh(t,e.update.name),i=new Dc({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new $a(e.map((t=>ca.fromServerFormat(t))))}(e.updateMask);return new ju(s,i,t,n,r)}return new qu(s,i,n,r)}if(e.delete){const r=Oh(t,e.delete);return new zu(r,n)}if(e.verify){const r=Oh(t,e.verify);return new Qu(r,n)}return Po()}function Kh(t,e){return t&&t.length>0?(Fo(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?xh(t.updateTime):xh(e);return n.isEqual(sa.min())&&(n=xh(e)),new Ou(n,t.transformResults||[])}(t,e)))):[]}function $h(t,e){return{documents:[Rh(t,e.path)]}}function Gh(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Rh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(wc(t.value))return{unaryFilter:{field:Xh(t.field),op:"IS_NAN"}};if(yc(t.value))return{unaryFilter:{field:Xh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(wc(t.value))return{unaryFilter:{field:Xh(t.field),op:"IS_NOT_NAN"}};if(yc(t.value))return{unaryFilter:{field:Xh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xh(t.field),op:Yh(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Xh(t.field),direction:Wh(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||nc(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function zh(t){let e=Lh(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fo(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Hh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Hc(Jh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nc(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Qc(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Qc(n,e)}(n.endAt)),Zc(e,s,o,i,a,"F",c,u)}function Qh(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Po()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Hh(t){return t?void 0!==t.unaryFilter?[tl(t)]:void 0!==t.fieldFilter?[Zh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Hh(t))).reduce(((t,e)=>t.concat(e))):Po():[]}function Wh(t){return Eh[t]}function Yh(t){return Th[t]}function Xh(t){return{fieldPath:t.canonicalString()}}function Jh(t){return ca.fromServerFormat(t.fieldPath)}function Zh(t){return Fc.create(Jh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Po()}}(t.fieldFilter.op),t.fieldFilter.value)}function tl(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jh(t.unaryFilter.field);return Fc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jh(t.unaryFilter.field);return Fc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jh(t.unaryFilter.field);return Fc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jh(t.unaryFilter.field);return Fc.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Po()}}function el(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nl(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=il(e)),e=sl(t.get(n),e);return il(e)}function sl(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const e=t.charAt(s);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function il(t){return t+""}function ol(t){const e=t.length;if(Fo(e>=2),2===e)return Fo(""===t.charAt(0)&&""===t.charAt(1)),oa.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const e=t.indexOf("",i);switch((e<0||e>n)&&Po(),t.charAt(e+1)){case"":const n=t.substring(i,e);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=t.substring(i,e),s+="\0";break;case"":s+=t.substring(i,e+1);break;default:Po()}i=e+2}return new oa(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t,e){return[t,rl(e)]}function ul(t,e,n){return[t,rl(e),n]}const hl={},ll=["prefixPath","collectionGroup","readTime","documentId"],dl=["prefixPath","collectionGroup","documentId"],fl=["collectionGroup","readTime","prefixPath","documentId"],gl=["canonicalId","targetId"],ml=["targetId","path"],pl=["path","targetId"],yl=["collectionId","parent"],wl=["indexId","uid"],vl=["uid","sequenceNumber"],bl=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Il=["indexId","uid","orderedDocumentKey"],El=["userId","collectionPath","documentId"],Tl=["userId","collectionPath","largestBatchId"],_l=["userId","collectionGroup","largestBatchId"],Sl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Dl=[...Sl,"documentOverlays"],Al=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xl=Al,Cl=[...xl,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends ba{constructor(t,e){super(),this.ee=t,this.currentSequenceNumber=e}}function kl(t,e){const n=Uo(t);return _a.N(n.ee,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Pu(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Fu(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Fu(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=oh();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=Vu(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(sa.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),hh())}isEqual(t){return this.batchId===t.batchId&&ea(this.mutations,t.mutations,((t,e)=>Uu(t,e)))&&ea(this.baseMutations,t.baseMutations,((t,e)=>Uu(t,e)))}}class Rl{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Fo(t.mutations.length===n.length);let r=ch;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Rl(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e,n,r,s=sa.min(),i=sa.min(),o=za.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Ml(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ml(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ml(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.ne=t}}function Pl(t,e){let n;if(e.document)n=Fh(t.ne,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const t=ua.fromSegments(e.noDocument.path),r=ql(e.noDocument.readTime);n=xc.newNoDocument(t,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Po();{const t=ua.fromSegments(e.unknownDocument.path),r=ql(e.unknownDocument.version);n=xc.newUnknownDocument(t,r)}}return e.readTime&&n.setReadTime(function(t){const e=new ra(t[0],t[1]);return sa.fromTimestamp(e)}(e.readTime)),n}function Fl(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Bl(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(t,e){return{name:kh(t,e.key),fields:e.data.value.mapValue.fields,updateTime:Sh(t,e.version.toTimestamp())}}(t.ne,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ul(e.version)};else{if(!e.isUnknownDocument())return Po();r.unknownDocument={path:n.path.toArray(),version:Ul(e.version)}}return r}function Bl(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ul(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ql(t){const e=new ra(t.seconds,t.nanoseconds);return sa.fromTimestamp(e)}function jl(t,e){const n=(e.baseMutations||[]).map((e=>jh(t.ne,e)));for(let i=0;i<e.mutations.length-1;++i){const t=e.mutations[i];if(i+1<e.mutations.length&&void 0!==e.mutations[i+1].transform){const n=e.mutations[i+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((e=>jh(t.ne,e))),s=ra.fromMillis(e.localWriteTimeMs);return new Ol(e.batchId,s,n,r)}function Kl(t){const e=ql(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?ql(t.lastLimboFreeSnapshotVersion):sa.min();let r;var s;return void 0!==t.query.documents?(Fo(1===(s=t.query).documents.length),r=ou(tu(Lh(s.documents[0])))):r=function(t){return ou(zh(t))}(t.query),new Ml(r,t.targetId,0,t.lastListenSequenceNumber,e,n,za.fromBase64String(t.resumeToken))}function $l(t,e){const n=Ul(e.snapshotVersion),r=Ul(e.lastLimboFreeSnapshotVersion);let s;s=Lc(e.target)?$h(t.ne,e.target):Gh(t.ne,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:kc(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Gl(t){const e=zh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?au(e,e.limit,"L"):e}function zl(t,e){return new Ll(e.largestBatchId,jh(t.ne,e.overlayMutation))}function Ql(t,e){const n=e.path.lastSegment();return[t,rl(e.path.popLast()),n]}function Hl(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Ul(r.readTime),documentKey:rl(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{getBundleMetadata(t,e){return Yl(t).get(e).next((t=>{if(t)return{id:(e=t).bundleId,createTime:ql(e.createTime),version:e.version};var e}))}saveBundleMetadata(t,e){return Yl(t).put({bundleId:(n=e).id,createTime:Ul(xh(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Xl(t).get(e).next((t=>{if(t)return{name:(e=t).name,query:Gl(e.bundledQuery),readTime:ql(e.readTime)};var e}))}saveNamedQuery(t,e){return Xl(t).put(function(t){return{name:t.name,readTime:Ul(xh(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Yl(t){return kl(t,"bundles")}function Xl(t){return kl(t,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e){this.wt=t,this.userId=e}static se(t,e){const n=e.uid||"";return new Jl(t,n)}getOverlay(t,e){return Zl(t).get(Ql(this.userId,e)).next((t=>t?zl(this.wt,t):null))}getOverlays(t,e){const n=ih();return Ea.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){const r=[];return n.forEach(((n,s)=>{const i=new Ll(e,s);r.push(this.ie(t,i))})),Ea.waitFor(r)}removeOverlaysForBatchId(t,e,n){const r=new Set;e.forEach((t=>r.add(rl(t.getCollectionPath()))));const s=[];return r.forEach((e=>{const r=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,n+1],!1,!0);s.push(Zl(t).W("collectionPathOverlayIndex",r))})),Ea.waitFor(s)}getOverlaysForCollection(t,e,n){const r=ih(),s=rl(e),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zl(t).K("collectionPathOverlayIndex",i).next((t=>{for(const e of t){const t=zl(this.wt,e);r.set(t.getKey(),t)}return r}))}getOverlaysForCollectionGroup(t,e,n,r){const s=ih();let i;const o=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Zl(t).J({index:"collectionGroupOverlayIndex",range:o},((t,e,n)=>{const o=zl(this.wt,e);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(t,e){return Zl(t).put(function(t,e,n){const[r,s,i]=Ql(e,n.mutation.key);return{userId:e,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:qh(t.ne,n.mutation)}}(this.wt,this.userId,e))}}function Zl(t){return kl(t,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Wa(t.integerValue));else if("doubleValue"in t){const n=Wa(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),rc(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Ya(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Ic(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Po()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),ua.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}function ed(t){if(0===t)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function nd(t){const e=64-function(t){let e=0;for(let n=0;n<8;++n){const r=ed(255&t[n]);if(e+=r,8!==r)break}return e}(t);return Math.ceil(e/8)}td.ye=new td;class rd{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ie(n.value),n=e.next();this.Te()}Ee(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ae(n.value),n=e.next();this.Re()}be(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ie(t);else if(t<2048)this.Ie(960|t>>>6),this.Ie(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ie(480|t>>>12),this.Ie(128|63&t>>>6),this.Ie(128|63&t);else{const t=e.codePointAt(0);this.Ie(240|t>>>18),this.Ie(128|63&t>>>12),this.Ie(128|63&t>>>6),this.Ie(128|63&t)}}this.Te()}Pe(t){for(const e of t){const t=e.charCodeAt(0);if(t<128)this.Ae(t);else if(t<2048)this.Ae(960|t>>>6),this.Ae(128|63&t);else if(e<"\ud800"||"\udbff"<e)this.Ae(480|t>>>12),this.Ae(128|63&t>>>6),this.Ae(128|63&t);else{const t=e.codePointAt(0);this.Ae(240|t>>>18),this.Ae(128|63&t>>>12),this.Ae(128|63&t>>>6),this.Ae(128|63&t)}}this.Re()}ve(t){const e=this.Ve(t),n=nd(e);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=255&e[r]}De(t){const e=this.Ve(t),n=nd(e);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=e.length-n;r<e.length;++r)this.buffer[this.position++]=~(255&e[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(t){this.Se(t.length),this.buffer.set(t,this.position),this.position+=t.length}Oe(){return this.buffer.slice(0,this.position)}Ve(t){const e=function(t){const e=new DataView(new ArrayBuffer(8));return e.setFloat64(0,t,!1),new Uint8Array(e.buffer)}(t),n=0!=(128&e[0]);e[0]^=n?255:128;for(let r=1;r<e.length;++r)e[r]^=n?255:0;return e}Ie(t){const e=255&t;0===e?(this.xe(0),this.xe(255)):255===e?(this.xe(255),this.xe(0)):this.xe(e)}Ae(t){const e=255&t;0===e?(this.ke(0),this.ke(255)):255===e?(this.ke(255),this.ke(0)):this.ke(t)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(t){this.Se(1),this.buffer[this.position++]=t}ke(t){this.Se(1),this.buffer[this.position++]=~t}Se(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class sd{constructor(t){this.Me=t}de(t){this.Me.pe(t)}he(t){this.Me.be(t)}ae(t){this.Me.ve(t)}ue(){this.Me.Ce()}}class id{constructor(t){this.Me=t}de(t){this.Me.Ee(t)}he(t){this.Me.Pe(t)}ae(t){this.Me.De(t)}ue(){this.Me.Ne()}}class od{constructor(){this.Me=new rd,this.Fe=new sd(this.Me),this.$e=new id(this.Me)}seed(t){this.Me.seed(t)}Be(t){return 0===t?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,e,n,r){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=r}Le(){const t=this.directionalValue.length,e=0===t||255===this.directionalValue[t-1]?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new ad(this.indexId,this.documentKey,this.arrayValue,n)}}function cd(t,e){let n=t.indexId-e.indexId;return 0!==n?n:(n=ud(t.arrayValue,e.arrayValue),0!==n?n:(n=ud(t.directionalValue,e.directionalValue),0!==n?n:ua.comparator(t.documentKey,e.documentKey)))}function ud(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(0!==r)return r}return t.length-e.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t){this.collectionId=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment(),this.Ue=t.orderBy,this.qe=[];for(const e of t.filters){const t=e;t.ht()?this.Ke=t:this.qe.push(t)}}Ge(t){const e=la(t);if(void 0!==e&&!this.Qe(e))return!1;const n=da(t);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const t=n[r];if(!this.je(this.Ke,t)||!this.We(this.Ue[s++],t))return!1;++r}for(;r<n.length;++r){const t=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],t))return!1}return!0}Qe(t){for(const e of this.qe)if(this.je(e,t))return!0;return!1}je(t,e){if(void 0===t||!t.field.isEqual(e.fieldPath))return!1;const n="array-contains"===t.op||"array-contains-any"===t.op;return 2===e.kind===n}We(t,e){return!!t.field.isEqual(e.fieldPath)&&(0===e.kind&&"asc"===t.dir||1===e.kind&&"desc"===t.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(){this.ze=new dd}addToCollectionParentIndex(t,e){return this.ze.add(e),Ea.resolve()}getCollectionParents(t,e){return Ea.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Ea.resolve()}deleteFieldIndex(t,e){return Ea.resolve()}getDocumentsMatchingTarget(t,e){return Ea.resolve(null)}getIndexType(t,e){return Ea.resolve(0)}getFieldIndexes(t,e){return Ea.resolve([])}getNextCollectionGroupToUpdate(t){return Ea.resolve(null)}getMinOffset(t,e){return Ea.resolve(ya.min())}getMinOffsetFromCollectionGroup(t,e){return Ea.resolve(ya.min())}updateCollectionGroup(t,e,n){return Ea.resolve()}updateIndexEntries(t,e){return Ea.resolve()}}class dd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new qa(oa.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new qa(oa.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Uint8Array(0);class gd{constructor(t,e){this.user=t,this.databaseId=e,this.He=new dd,this.Je=new Zu((t=>kc(t)),((t,e)=>Rc(t,e))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.He.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener((()=>{this.He.add(e)}));const s={collectionId:n,parent:rl(r)};return md(t).put(s)}return Ea.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[na(e),""],!1,!0);return md(t).K(r).next((t=>{for(const r of t){if(r.collectionId!==e)break;n.push(ol(r.parent))}return n}))}addFieldIndex(t,e){const n=yd(t),r=function(t){return{indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map((t=>[t.fieldPath.canonicalString(),t.kind]))}}(e);delete r.indexId;const s=n.add(r);if(e.indexState){const n=wd(t);return s.next((t=>{n.put(Hl(t,this.user,e.indexState.sequenceNumber,e.indexState.offset))}))}return s.next()}deleteFieldIndex(t,e){const n=yd(t),r=wd(t),s=pd(t);return n.delete(e.indexId).next((()=>r.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}getDocumentsMatchingTarget(t,e){const n=pd(t);let r=!0;const s=new Map;return Ea.forEach(this.Ye(e),(e=>this.Xe(t,e).next((t=>{r&&(r=!!t),s.set(e,t)})))).next((()=>{if(r){let t=hh();const r=[];return Ea.forEach(s,((s,i)=>{var o;Ro("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((t=>`${t.fieldPath}:${t.kind}`)).join(",")}`} to execute ${kc(e)}`);const a=function(t,e){const n=la(e);if(void 0===n)return null;for(const r of Mc(t,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(t,e){const n=new Map;for(const r of da(e))for(const e of Mc(t,r.fieldPath))switch(e.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),e.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),e.value),Array.from(n.values())}return null}(i,s),u=function(t,e){const n=[];let r=!0;for(const s of da(e)){const e=0===s.kind?Vc(t,s.fieldPath,t.startAt):Pc(t,s.fieldPath,t.startAt);n.push(e.value),r&&(r=e.inclusive)}return new Qc(n,r)}(i,s),h=function(t,e){const n=[];let r=!0;for(const s of da(e)){const e=0===s.kind?Pc(t,s.fieldPath,t.endAt):Vc(t,s.fieldPath,t.endAt);n.push(e.value),r&&(r=e.inclusive)}return new Qc(n,r)}(i,s),l=this.Ze(s,i,u),d=this.Ze(s,i,h),f=this.tn(s,i,c),g=this.en(s.indexId,a,l,u.inclusive,d,h.inclusive,f);return Ea.forEach(g,(s=>n.j(s,e.limit).next((e=>{e.forEach((e=>{const n=ua.fromSegments(e.documentKey);t.has(n)||(t=t.add(n),r.push(n))}))}))))})).next((()=>r))}return Ea.resolve(null)}))}Ye(t){let e=this.Je.get(t);return e||(e=[t],this.Je.set(t,e),e)}en(t,e,n,r,s,i,o){const a=(null!=e?e.length:1)*Math.max(n.length,s.length),c=a/(null!=e?e.length:1),u=[];for(let h=0;h<a;++h){const a=e?this.nn(e[h/c]):fd,l=this.sn(t,a,n[h%c],r),d=this.rn(t,a,s[h%c],i),f=o.map((e=>this.sn(t,a,e,!0)));u.push(...this.createRange(l,d,f))}return u}sn(t,e,n,r){const s=new ad(t,ua.empty(),e,n);return r?s:s.Le()}rn(t,e,n,r){const s=new ad(t,ua.empty(),e,n);return r?s.Le():s}Xe(t,e){const n=new hd(e),r=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,r).next((t=>{let e=null;for(const r of t)n.Ge(r)&&(!e||r.fields.length>e.fields.length)&&(e=r);return e}))}getIndexType(t,e){let n=2;return Ea.forEach(this.Ye(e),(e=>this.Xe(t,e).next((t=>{t?0!==n&&t.fields.length<function(t){let e=new qa(ca.comparator),n=!1;for(const r of t.filters){const t=r;t.field.isKeyField()||("array-contains"===t.op||"array-contains-any"===t.op?n=!0:e=e.add(t.field))}for(const r of t.orderBy)r.field.isKeyField()||(e=e.add(r.field));return e.size+(n?1:0)}(e)&&(n=1):n=0})))).next((()=>n))}on(t,e){const n=new od;for(const r of da(t)){const t=e.data.field(r.fieldPath);if(null==t)return null;const s=n.Be(r.kind);td.ye.re(t,s)}return n.Oe()}nn(t){const e=new od;return td.ye.re(t,e.Be(0)),e.Oe()}un(t,e){const n=new od;return td.ye.re(gc(this.databaseId,e),n.Be(function(t){const e=da(t);return 0===e.length?0:e[e.length-1].kind}(t))),n.Oe()}tn(t,e,n){if(null===n)return[];let r=[];r.push(new od);let s=0;for(const i of da(t)){const t=n[s++];for(const n of r)if(this.cn(e,i.fieldPath)&&pc(t))r=this.an(r,i,t);else{const e=n.Be(i.kind);td.ye.re(t,e)}}return this.hn(r)}Ze(t,e,n){return this.tn(t,e,n.position)}hn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Oe();return e}an(t,e,n){const r=[...t],s=[];for(const i of n.arrayValue.values||[])for(const t of r){const n=new od;n.seed(t.Oe()),td.ye.re(i,n.Be(e.kind)),s.push(n)}return s}cn(t,e){return!!t.filters.find((t=>t instanceof Fc&&t.field.isEqual(e)&&("in"===t.op||"not-in"===t.op)))}getFieldIndexes(t,e){const n=yd(t),r=wd(t);return(e?n.K("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.K()).next((t=>{const e=[];return Ea.forEach(t,(t=>r.get([t.indexId,this.uid]).next((n=>{e.push(function(t,e){const n=e?new ga(e.sequenceNumber,new ya(ql(e.readTime),new ua(ol(e.documentKey)),e.largestBatchId)):ga.empty(),r=t.fields.map((([t,e])=>new fa(ca.fromServerFormat(t),e)));return new ha(t.indexId,t.collectionGroup,r,n)}(t,n))})))).next((()=>e))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((t=>0===t.length?null:(t.sort(((t,e)=>{const n=t.indexState.sequenceNumber-e.indexState.sequenceNumber;return 0!==n?n:ta(t.collectionGroup,e.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(t,e,n){const r=yd(t),s=wd(t);return this.ln(t).next((t=>r.K("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((e=>Ea.forEach(e,(e=>s.put(Hl(e.indexId,this.user,t,n))))))))}updateIndexEntries(t,e){const n=new Map;return Ea.forEach(e,((e,r)=>{const s=n.get(e.collectionGroup);return(s?Ea.resolve(s):this.getFieldIndexes(t,e.collectionGroup)).next((s=>(n.set(e.collectionGroup,s),Ea.forEach(s,(n=>this.fn(t,e,n).next((e=>{const s=this.dn(r,n);return e.isEqual(s)?Ea.resolve():this._n(t,r,n,e,s)})))))))}))}wn(t,e,n,r){return pd(t).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,e.key),documentKey:e.key.path.toArray()})}mn(t,e,n,r){return pd(t).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,e.key),e.key.path.toArray()])}fn(t,e,n){const r=pd(t);let s=new qa(cd);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,e)])},((t,r)=>{s=s.add(new ad(n.indexId,e,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(t,e){let n=new qa(cd);const r=this.on(e,t);if(null==r)return n;const s=la(e);if(null!=s){const i=t.data.field(s.fieldPath);if(pc(i))for(const s of i.arrayValue.values||[])n=n.add(new ad(e.indexId,t.key,this.nn(s),r))}else n=n.add(new ad(e.indexId,t.key,fd,r));return n}_n(t,e,n,r,s){Ro("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const i=[];return function(t,e,n,r,s){const i=t.getIterator(),o=e.getIterator();let a=Ka(i),c=Ka(o);for(;a||c;){let t=!1,e=!1;if(a&&c){const r=n(a,c);r<0?e=!0:r>0&&(t=!0)}else null!=a?e=!0:t=!0;t?(r(c),c=Ka(o)):e?(s(a),a=Ka(i)):(a=Ka(i),c=Ka(o))}}(r,s,cd,(r=>{i.push(this.wn(t,e,n,r))}),(r=>{i.push(this.mn(t,e,n,r))})),Ea.waitFor(i)}ln(t){let e=1;return wd(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((t,n,r)=>{r.done(),e=n.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((t,e)=>cd(t,e))).filter(((t,e,n)=>!e||0!==cd(t,n[e-1])));const r=[];r.push(t);for(const i of n){const n=cd(i,t),s=cd(i,e);if(0===n)r[0]=t.Le();else if(n>0&&s<0)r.push(i),r.push(i.Le());else if(s>0)break}r.push(e);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,fd,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,fd,[]]));return s}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(vd)}getMinOffset(t,e){return Ea.mapArray(this.Ye(e),(e=>this.Xe(t,e).next((t=>t||Po())))).next(vd)}}function md(t){return kl(t,"collectionParents")}function pd(t){return kl(t,"indexEntries")}function yd(t){return kl(t,"indexConfiguration")}function wd(t){return kl(t,"indexState")}function vd(t){Fo(0!==t.length);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;wa(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new ya(e.readTime,e.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Id{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Id(t,Id.DEFAULT_COLLECTION_PERCENTILE,Id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((t,e,n)=>(a++,n.delete())));i.push(c.next((()=>{Fo(1===a)})));const u=[];for(const h of n.mutations){const t=ul(e,h.key.path,n.batchId);i.push(s.delete(t)),u.push(h.key)}return Ea.waitFor(i).next((()=>u))}function Td(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Po();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Id.DEFAULT_COLLECTION_PERCENTILE=10,Id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Id.DEFAULT=new Id(41943040,Id.DEFAULT_COLLECTION_PERCENTILE,Id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Id.DISABLED=new Id(-1,0,0);class _d{constructor(t,e,n,r){this.userId=t,this.wt=e,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(t,e,n,r){Fo(""!==t.uid);const s=t.isAuthenticated()?t.uid:"";return new _d(s,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dd(t).J({index:"userMutationsIndex",range:n},((t,n,r)=>{e=!1,r.done()})).next((()=>e))}addMutationBatch(t,e,n,r){const s=Ad(t),i=Dd(t);return i.add({}).next((o=>{Fo("number"==typeof o);const a=new Ol(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map((e=>qh(t.ne,e))),s=n.mutations.map((e=>qh(t.ne,e)));return{userId:e,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),u=[];let h=new qa(((t,e)=>ta(t.canonicalString(),e.canonicalString())));for(const t of r){const e=ul(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(i.put(c)),u.push(s.put(e,hl))}return h.forEach((e=>{u.push(this.indexManager.addToCollectionParentIndex(t,e))})),t.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),Ea.waitFor(u).next((()=>a))}))}lookupMutationBatch(t,e){return Dd(t).get(e).next((t=>t?(Fo(t.userId===this.userId),jl(this.wt,t)):null))}yn(t,e){return this.gn[e]?Ea.resolve(this.gn[e]):this.lookupMutationBatch(t,e).next((t=>{if(t){const n=t.keys();return this.gn[e]=n,n}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Dd(t).J({index:"userMutationsIndex",range:r},((t,e,r)=>{e.userId===this.userId&&(Fo(e.batchId>=n),s=jl(this.wt,e)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Dd(t).J({index:"userMutationsIndex",range:e,reverse:!0},((t,e,r)=>{n=e.batchId,r.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dd(t).K("userMutationsIndex",e).next((t=>t.map((t=>jl(this.wt,t)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=cl(this.userId,e.path),r=IDBKeyRange.lowerBound(n),s=[];return Ad(t).J({range:r},((n,r,i)=>{const[o,a,c]=n,u=ol(a);if(o===this.userId&&e.path.isEqual(u))return Dd(t).get(c).next((t=>{if(!t)throw Po();Fo(t.userId===this.userId),s.push(jl(this.wt,t))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qa(ta);const r=[];return e.forEach((e=>{const s=cl(this.userId,e.path),i=IDBKeyRange.lowerBound(s),o=Ad(t).J({range:i},((t,r,s)=>{const[i,o,a]=t,c=ol(o);i===this.userId&&e.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),Ea.waitFor(r).next((()=>this.pn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,s=cl(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new qa(ta);return Ad(t).J({range:i},((t,e,s)=>{const[i,a,c]=t,u=ol(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(t,o)))}pn(t,e){const n=[],r=[];return e.forEach((e=>{r.push(Dd(t).get(e).next((t=>{if(null===t)throw Po();Fo(t.userId===this.userId),n.push(jl(this.wt,t))})))})),Ea.waitFor(r).next((()=>n))}removeMutationBatch(t,e){return Ed(t.ee,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.In(e.batchId)})),Ea.forEach(n,(e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))))}In(t){delete this.gn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return Ea.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Ad(t).J({range:n},((t,e,n)=>{if(t[0]===this.userId){const e=ol(t[1]);r.push(e)}else n.done()})).next((()=>{Fo(0===r.length)}))}))}containsKey(t,e){return Sd(t,this.userId,e)}Tn(t){return xd(t).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Sd(t,e,n){const r=cl(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Ad(t).J({range:i,H:!0},((t,n,r)=>{const[i,a,c]=t;i===e&&a===s&&(o=!0),r.done()})).next((()=>o))}function Dd(t){return kl(t,"mutations")}function Ad(t){return kl(t,"documentMutations")}function xd(t){return kl(t,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Cd(0)}static Rn(){return new Cd(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e){this.referenceDelegate=t,this.wt=e}allocateTargetId(t){return this.bn(t).next((e=>{const n=new Cd(e.highestTargetId);return e.highestTargetId=n.next(),this.Pn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.bn(t).next((t=>sa.fromTimestamp(new ra(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.bn(t).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.bn(t).next((r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.Pn(t,r))))}addTargetData(t,e){return this.vn(t,e).next((()=>this.bn(t).next((n=>(n.targetCount+=1,this.Vn(e,n),this.Pn(t,n))))))}updateTargetData(t,e){return this.vn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>kd(t).delete(e.targetId))).next((()=>this.bn(t))).next((e=>(Fo(e.targetCount>0),e.targetCount-=1,this.Pn(t,e))))}removeTargets(t,e,n){let r=0;const s=[];return kd(t).J(((i,o)=>{const a=Kl(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(t,a)))})).next((()=>Ea.waitFor(s))).next((()=>r))}forEachTarget(t,e){return kd(t).J(((t,n)=>{const r=Kl(n);e(r)}))}bn(t){return Od(t).get("targetGlobalKey").next((t=>(Fo(null!==t),t)))}Pn(t,e){return Od(t).put("targetGlobalKey",e)}vn(t,e){return kd(t).put($l(this.wt,e))}Vn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.bn(t).next((t=>t.targetCount))}getTargetData(t,e){const n=kc(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return kd(t).J({range:r,index:"queryTargetsIndex"},((t,n,r)=>{const i=Kl(n);Rc(e,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(t,e,n){const r=[],s=Rd(t);return e.forEach((e=>{const i=rl(e.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(t,n,e))})),Ea.waitFor(r)}removeMatchingKeys(t,e,n){const r=Rd(t);return Ea.forEach(e,(e=>{const s=rl(e.path);return Ea.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(t,n,e)])}))}removeMatchingKeysForTargetId(t,e){const n=Rd(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=Rd(t);let s=hh();return r.J({range:n,H:!0},((t,e,n)=>{const r=ol(t[1]),i=new ua(r);s=s.add(i)})).next((()=>s))}containsKey(t,e){const n=rl(e.path),r=IDBKeyRange.bound([n],[na(n)],!1,!0);let s=0;return Rd(t).J({index:"documentTargetsIndex",H:!0,range:r},(([t,e],n,r)=>{0!==t&&(s++,r.done())})).next((()=>s>0))}te(t,e){return kd(t).get(e).next((t=>t?Kl(t):null))}}function kd(t){return kl(t,"targets")}function Od(t){return kl(t,"targetGlobal")}function Rd(t){return kl(t,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld([t,e],[n,r]){const s=ta(t,n);return 0===s?ta(e,r):s}class Md{constructor(t){this.Sn=t,this.buffer=new qa(Ld),this.Dn=0}Cn(){return++this.Dn}xn(t){const e=[t,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Ld(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Vd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(t){Ro("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Aa(t)?Ro("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Ia(t)}await this.kn(3e5)}))}}class Pd{constructor(t,e){this.On=t,this.params=e}calculateTargetCount(t,e){return this.On.Mn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Ea.resolve(La.ot);const n=new Md(e);return this.On.forEachTarget(t,(t=>n.xn(t.sequenceNumber))).next((()=>this.On.Fn(t,(t=>n.xn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.On.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.On.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(Ro("LruGarbageCollector","Garbage collection skipped; disabled"),Ea.resolve(bd)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ro("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bd):this.$n(t,e)))}getCacheSize(t){return this.On.getCacheSize(t)}$n(t,e){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(Ro("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,i=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(s=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(c=Date.now(),ko()<=G.DEBUG&&Ro("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Ea.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Pd(t,e)}(this,e)}Mn(t){const e=this.Bn(t);return this.db.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}Bn(t){let e=0;return this.Fn(t,(t=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Fn(t,e){return this.Ln(t,((t,n)=>e(n)))}addReference(t,e,n){return Bd(t,n)}removeReference(t,e,n){return Bd(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Bd(t,e)}Un(t,e){return function(t,e){let n=!1;return xd(t).Y((r=>Sd(t,r,e).next((t=>(t&&(n=!0),Ea.resolve(!t)))))).next((()=>n))}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(t,((i,o)=>{if(o<=e){const e=this.Un(t,i).next((e=>{if(!e)return s++,n.getEntry(t,i).next((()=>(n.removeEntry(i,sa.min()),Rd(t).delete([0,rl(i.path)]))))}));r.push(e)}})).next((()=>Ea.waitFor(r))).next((()=>n.apply(t))).next((()=>s))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Bd(t,e)}Ln(t,e){const n=Rd(t);let r,s=La.ot;return n.J({index:"documentTargetsIndex"},(([t,n],{path:i,sequenceNumber:o})=>{0===t?(s!==La.ot&&e(new ua(ol(r)),s),s=o,r=i):s=La.ot})).next((()=>{s!==La.ot&&e(new ua(ol(r)),s)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Bd(t,e){return Rd(t).put(function(t,e){return{targetId:0,path:rl(t.path),sequenceNumber:e}}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.changes=new Zu((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xc.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ea.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.wt=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Gd(t).put(n)}removeEntry(t,e,n){return Gd(t).delete(function(t,e){const n=t.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Bl(e),n[n.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.qn(t,n))))}getEntry(t,e){let n=xc.newInvalidDocument(e);return Gd(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(zd(e))},((t,r)=>{n=this.Kn(e,r)})).next((()=>n))}Gn(t,e){let n={size:0,document:xc.newInvalidDocument(e)};return Gd(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(zd(e))},((t,r)=>{n={document:this.Kn(e,r),size:Td(r)}})).next((()=>n))}getEntries(t,e){let n=eh();return this.Qn(t,e,((t,e)=>{const r=this.Kn(t,e);n=n.insert(t,r)})).next((()=>n))}jn(t,e){let n=eh(),r=new Fa(ua.comparator);return this.Qn(t,e,((t,e)=>{const s=this.Kn(t,e);n=n.insert(t,s),r=r.insert(t,Td(e))})).next((()=>({documents:n,Wn:r})))}Qn(t,e,n){if(e.isEmpty())return Ea.resolve();let r=new qa(Hd);e.forEach((t=>r=r.add(t)));const s=IDBKeyRange.bound(zd(r.first()),zd(r.last())),i=r.getIterator();let o=i.getNext();return Gd(t).J({index:"documentKeyIndex",range:s},((t,e,r)=>{const s=ua.fromSegments([...e.prefixPath,e.collectionGroup,e.documentId]);for(;o&&Hd(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,e),o=i.hasNext()?i.getNext():null),o?r.q(zd(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(t,e,n){const r=[e.popLast().toArray(),e.lastSegment(),Bl(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[e.popLast().toArray(),e.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gd(t).K(IDBKeyRange.bound(r,s,!0)).next((t=>{let e=eh();for(const n of t){const t=this.Kn(ua.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);e=e.insert(t.key,t)}return e}))}getAllFromCollectionGroup(t,e,n,r){let s=eh();const i=Qd(e,n),o=Qd(e,ya.max());return Gd(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((t,e,n)=>{const i=this.Kn(ua.fromSegments(e.prefixPath.concat(e.collectionGroup,e.documentId)),e);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(t){return new Kd(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((t=>t.byteSize))}getMetadata(t){return $d(t).get("remoteDocumentGlobalKey").next((t=>(Fo(!!t),t)))}qn(t,e){return $d(t).put("remoteDocumentGlobalKey",e)}Kn(t,e){if(e){const t=Pl(this.wt,e);if(!t.isNoDocument()||!t.version.isEqual(sa.min()))return t}return xc.newInvalidDocument(t)}}function jd(t){return new qd(t)}class Kd extends Ud{constructor(t,e){super(),this.zn=t,this.trackRemovals=e,this.Hn=new Zu((t=>t.toString()),((t,e)=>t.isEqual(e)))}applyChanges(t){const e=[];let n=0,r=new qa(((t,e)=>ta(t.canonicalString(),e.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(e.push(this.zn.removeEntry(t,s,o.readTime)),i.isValidDocument()){const a=Fl(this.zn.wt,i);r=r.add(s.path.popLast());const c=Td(a);n+=c-o.size,e.push(this.zn.addEntry(t,s,a))}else if(n-=o.size,this.trackRemovals){const n=Fl(this.zn.wt,i.convertToNoDocument(sa.min()));e.push(this.zn.addEntry(t,s,n))}})),r.forEach((n=>{e.push(this.zn.indexManager.addToCollectionParentIndex(t,n))})),e.push(this.zn.updateMetadata(t,n)),Ea.waitFor(e)}getFromCache(t,e){return this.zn.Gn(t,e).next((t=>(this.Hn.set(e,{size:t.size,readTime:t.document.readTime}),t.document)))}getAllFromCache(t,e){return this.zn.jn(t,e).next((({documents:t,Wn:e})=>(e.forEach(((e,n)=>{this.Hn.set(e,{size:n,readTime:t.get(e).readTime})})),t)))}}function $d(t){return kl(t,"remoteDocumentGlobal")}function Gd(t){return kl(t,"remoteDocumentsV14")}function zd(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qd(t,e){const n=e.documentKey.path.toArray();return[t,Bl(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Hd(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ta(n[i],r[i]),s)return s;return s=ta(n.length,r.length),s||(s=ta(n[n.length-2],r[r.length-2]),s||ta(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Wd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Fu(n.mutation,t,$a.empty(),ra.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,hh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=hh()){const r=ih();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=rh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ih();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,hh())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=eh();const i=ah(),o=ah();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ju)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Fu(o.mutation,e,o.mutation.getFieldMask(),ra.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Wd(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ah();let r=new Fa(((t,e)=>t-e)),s=hh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||$a.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||hh()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=oh();c.forEach((t=>{if(!s.has(t)){const r=Vu(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ea.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ua.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):su(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Ea.resolve(ih());let o=-1,a=s;return i.next((e=>Ea.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Ea.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,hh()))).next((t=>({batchId:o,changes:sh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ua(e)).next((t=>{let e=rh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=rh();return this.indexManager.getCollectionParents(t,r).next((i=>Ea.forEach(i,(i=>{const o=function(t,e){return new Jc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,xc.newInvalidDocument(n)))}));let n=rh();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&Fu(i.mutation,s,$a.empty(),ra.now()),lu(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Ea.resolve(xc.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Ea.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:xh(n.createTime)}),Ea.resolve()}getNamedQuery(t,e){return Ea.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:Gl(t.bundledQuery),readTime:xh(t.readTime)}}(e)),Ea.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.overlays=new Fa(ua.comparator),this.Xn=new Map}getOverlay(t,e){return Ea.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ih();return Ea.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),Ea.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Ea.resolve()}getOverlaysForCollection(t,e,n){const r=ih(),s=e.length+1,i=new ua(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ea.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Fa(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ih(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ih(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ea.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ll(e,n));let s=this.Xn.get(e);void 0===s&&(s=hh(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(){this.Zn=new qa(tf.ts),this.es=new qa(tf.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new tf(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new tf(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new ua(new oa([])),n=new tf(e,t),r=new tf(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new ua(new oa([])),n=new tf(e,t),r=new tf(e,t+1);let s=hh();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new tf(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class tf{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return ua.comparator(t.key,e.key)||ta(t.ls,e.ls)}static ns(t,e){return ta(t.ls,e.ls)||ua.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new qa(tf.ts)}checkEmpty(t){return Ea.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ol(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new tf(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ea.resolve(i)}lookupMutationBatch(t,e){return Ea.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return Ea.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ea.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Ea.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new tf(e,0),r=new tf(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),Ea.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new qa(ta);return e.forEach((t=>{const e=new tf(t,0),r=new tf(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Ea.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ua.isDocumentKey(s)||(s=s.child(""));const i=new tf(new ua(s),0);let o=new qa(ta);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),Ea.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Fo(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ea.forEach(e.mutations,(r=>{const s=new tf(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new tf(e,0),r=this.ds.firstAfterOrEqual(n);return Ea.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ea.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.ps=t,this.docs=new Fa(ua.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ea.resolve(n?n.document.mutableCopy():xc.newInvalidDocument(e))}getEntries(t,e){let n=eh();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():xc.newInvalidDocument(t))})),Ea.resolve(n)}getAllFromCollection(t,e,n){let r=eh();const s=new ua(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||wa(pa(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Ea.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Po()}Is(t,e){return Ea.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new rf(this)}getSize(t){return Ea.resolve(this.size)}}class rf extends Ud{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),Ea.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.persistence=t,this.Ts=new Zu((t=>kc(t)),Rc),this.lastRemoteSnapshotVersion=sa.min(),this.highestTargetId=0,this.Es=0,this.As=new Zd,this.targetCount=0,this.Rs=Cd.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ea.resolve()}getLastRemoteSnapshotVersion(t){return Ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ea.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ea.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Ea.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Cd(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Ea.resolve()}updateTargetData(t,e){return this.vn(e),Ea.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Ea.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ea.waitFor(s).next((()=>r))}getTargetCount(t){return Ea.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ea.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ea.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Ea.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Ea.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ea.resolve(n)}containsKey(t,e){return Ea.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e){this.bs={},this.overlays={},this.Ps=new La(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new sf(this),this.indexManager=new ld,this.remoteDocumentCache=function(t){return new nf(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new Vl(e),this.Ds=new Xd(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Jd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new ef(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ro("MemoryPersistence","Starting transaction:",t);const r=new af(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return Ea.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class af extends ba{constructor(t){super(),this.currentSequenceNumber=t}}class cf{constructor(t){this.persistence=t,this.ks=new Zd,this.Os=null}static Ms(t){return new cf(t)}get Fs(){if(this.Os)return this.Os;throw Po()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Ea.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Ea.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Ea.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ea.forEach(this.Fs,(n=>{const r=ua.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,sa.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Ea.or([()=>Ea.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.wt=t}O(t,e,n,r){const s=new Ta("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore("owner")}(t),function(t){t.createObjectStore("mutationQueues",{keyPath:"userId"}),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",al,{unique:!0}),t.createObjectStore("documentMutations")}(t),hf(t),function(t){t.createObjectStore("remoteDocuments")}(t));let i=Ea.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore("targetDocuments"),t.deleteObjectStore("targets"),t.deleteObjectStore("targetGlobal")}(t),hf(t)),i=i.next((()=>function(t){const e=t.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:sa.min().toTimestamp(),targetCount:0};return e.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(t,e){return e.store("mutations").K().next((n=>{t.deleteObjectStore("mutations"),t.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",al,{unique:!0});const r=e.store("mutations"),s=n.map((t=>r.put(t)));return Ea.waitFor(s)}))}(t,s)))),i=i.next((()=>{!function(t){t.createObjectStore("clientMetadata",{keyPath:"clientId"})}(t)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(t){t.createObjectStore("remoteDocumentGlobal")}(t),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(t,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(t){t.createObjectStore("bundles",{keyPath:"bundleId"})}(t),function(t){t.createObjectStore("namedQueries",{keyPath:"name"})}(t)}))),n<12&&r>=12&&(i=i.next((()=>{!function(t){const e=t.createObjectStore("documentOverlays",{keyPath:El});e.createIndex("collectionPathOverlayIndex",Tl,{unique:!1}),e.createIndex("collectionGroupOverlayIndex",_l,{unique:!1})}(t)}))),n<13&&r>=13&&(i=i.next((()=>function(t){const e=t.createObjectStore("remoteDocumentsV14",{keyPath:ll});e.createIndex("documentKeyIndex",dl),e.createIndex("collectionGroupIndex",fl)}(t))).next((()=>this.Gs(t,s))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(t,s)))),n<15&&r>=15&&(i=i.next((()=>function(t){t.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),t.createObjectStore("indexState",{keyPath:wl}).createIndex("sequenceNumberIndex",vl,{unique:!1}),t.createObjectStore("indexEntries",{keyPath:bl}).createIndex("documentKeyIndex",Il,{unique:!1})}(t)))),i}Ls(t){let e=0;return t.store("remoteDocuments").J(((t,n)=>{e+=Td(n)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.K().next((e=>Ea.forEach(e,(e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>Ea.forEach(n,(n=>{Fo(n.userId===e.userId);const r=jl(this.wt,n);return Ed(t,e.userId,r).next((()=>{}))}))))}))))}Us(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((t=>{const r=[];return n.J(((n,s)=>{const i=new oa(n),o=function(t){return[0,rl(t)]}(i);r.push(e.get(o).next((n=>n?Ea.resolve():(n=>e.put({targetId:0,path:rl(n),sequenceNumber:t.highestListenSequenceNumber}))(i))))})).next((()=>Ea.waitFor(r)))}))}qs(t,e){t.createObjectStore("collectionParents",{keyPath:yl});const n=e.store("collectionParents"),r=new dd,s=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:rl(r)})}};return e.store("remoteDocuments").J({H:!0},((t,e)=>{const n=new oa(t);return s(n.popLast())})).next((()=>e.store("documentMutations").J({H:!0},(([t,e,n],r)=>{const i=ol(e);return s(i.popLast())}))))}Ks(t){const e=t.store("targets");return e.J(((t,n)=>{const r=Kl(n),s=$l(this.wt,r);return e.put(s)}))}Gs(t,e){const n=e.store("remoteDocuments"),r=[];return n.J(((t,n)=>{const s=e.store("remoteDocumentsV14"),i=(o=n,o.document?new ua(oa.fromString(o.document.name).popFirst(5)):o.noDocument?ua.fromSegments(o.noDocument.path):o.unknownDocument?ua.fromSegments(o.unknownDocument.path):Po()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>Ea.waitFor(r)))}Qs(t,e){const n=e.store("mutations"),r=jd(this.wt),s=new of(cf.Ms,this.wt.ne);return n.K().next((t=>{const n=new Map;return t.forEach((t=>{var e;let r=null!==(e=n.get(t.userId))&&void 0!==e?e:hh();jl(this.wt,t).keys().forEach((t=>r=r.add(t))),n.set(t.userId,r)})),Ea.forEach(n,((t,n)=>{const i=new xo(n),o=Jl.se(this.wt,i),a=s.getIndexManager(i),c=_d.se(i,this.wt,a,s.referenceDelegate);return new Yd(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Nl(e,La.ot),t).next()}))}))}}function hf(t){t.createObjectStore("targetDocuments",{keyPath:ml}).createIndex("documentTargetsIndex",pl,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gl,{unique:!0}),t.createObjectStore("targetGlobal")}const lf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class df{constructor(t,e,n,r,s,i,o,a,c,u,h=14){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=u,this.Hs=h,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=t=>Promise.resolve(),!df.V())throw new jo(qo.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Fd(this,r),this.ei=e+"main",this.wt=new Vl(a),this.ni=new _a(this.ei,this.Hs,new uf(this.wt)),this.Vs=new Nd(this.referenceDelegate,this.wt),this.remoteDocumentCache=jd(this.wt),this.Ds=new Wl,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&Lo("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new jo(qo.FAILED_PRECONDITION,lf);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.Vs.getHighestSequenceNumber(t)))})).then((t=>{this.Ps=new La(t,this.Ws)})).then((()=>{this.vs=!0})).catch((t=>(this.ni&&this.ni.close(),Promise.reject(t))))}ci(t){return this.ti=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ni.F((async e=>{null===e.newVersion&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>gf(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(t).next((t=>{t||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(t))).next((e=>this.isPrimary&&!e?this.li(t).next((()=>!1)):!!e&&this.fi(t).next((()=>!0)))))).catch((t=>{if(Aa(t))return Ro("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return Ro("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.js.enqueueRetryable((()=>this.ti(t))),this.isPrimary=t}))}ai(t){return ff(t).get("owner").next((t=>Ea.resolve(this.di(t))))}_i(t){return gf(t).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const e=kl(t,"clientMetadata");return e.K().next((t=>{const n=this.gi(t,18e5),r=t.filter((t=>-1===n.indexOf(t)));return Ea.forEach(r,(t=>e.delete(t.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const e of t)this.si.removeItem(this.yi(e.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(t){return!!t&&t.ownerId===this.clientId}hi(t){return this.zs?Ea.resolve(!0):ff(t).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)){if(this.di(e)&&this.networkEnabled)return!0;if(!this.di(e)){if(!e.allowTabSynchronization)throw new jo(qo.FAILED_PRECONDITION,lf);return!1}}return!(!this.networkEnabled||!this.inForeground)||gf(t).K().next((t=>void 0===this.gi(t,5e3).find((t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))))})).next((t=>(this.isPrimary!==t&&Ro("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Nl(t,La.ot);return this.li(e).next((()=>this._i(e)))})),this.ni.close(),this.Ai()}gi(t,e){return t.filter((t=>this.mi(t.updateTimeMs,e)&&!this.pi(t.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(t=>gf(t).K().next((t=>this.gi(t,18e5).map((t=>t.clientId))))))}get started(){return this.vs}getMutationQueue(t,e){return _d.se(t,this.wt,e,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new gd(t,this.wt.ne.databaseId)}getDocumentOverlayCache(t){return Jl.se(this.wt,t)}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ro("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite",s=15===(i=this.Hs)?Cl:14===i?xl:13===i?Al:12===i?Dl:11===i?Sl:void Po();var i;let o;return this.ni.runTransaction(t,r,s,(r=>(o=new Nl(r,this.Ps?this.Ps.next():La.ot),"readwrite-primary"===e?this.ai(o).next((t=>!!t||this.hi(o))).next((e=>{if(!e)throw Lo(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new jo(qo.FAILED_PRECONDITION,va);return n(o)})).next((t=>this.fi(o).next((()=>t)))):this.bi(o).next((()=>n(o)))))).then((t=>(o.raiseOnCommittedEvent(),t)))}bi(t){return ff(t).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)&&!this.di(t)&&!(this.zs||this.allowTabSynchronization&&t.allowTabSynchronization))throw new jo(qo.FAILED_PRECONDITION,lf)}))}fi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ff(t).put("owner",e)}static V(){return _a.V()}li(t){const e=ff(t);return e.get("owner").next((t=>this.di(t)?(Ro("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):Ea.resolve()))}mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Lo(`Detected an update time that is in the future: ${t} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Js=()=>{this.Ii(),E()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(t){var e;try{const n=null!==(null===(e=this.si)||void 0===e?void 0:e.getItem(this.yi(t)));return Ro("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return Lo("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(hn){Lo("Failed to set zombie client id.",hn)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(hn){}}yi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ff(t){return kl(t,"owner")}function gf(t){return kl(t,"clientMetadata")}function mf(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class pf{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=hh(),r=hh();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new pf(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Ea.resolve(null)}xi(t,e,n,r){return eu(e)||r.isEqual(sa.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):(ko()<=G.DEBUG&&Ro("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hu(e)),this.Mi(t,i,e,ma(r,-1)))}))}ki(t,e){let n=new qa(fu(t));return e.forEach(((e,r)=>{lu(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return ko()<=G.DEBUG&&Ro("QueryEngine","Using full collection scan to execute query:",hu(e)),this.Di.getDocumentsMatchingQuery(t,e,ya.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Fa(ta),this.Bi=new Zu((t=>kc(t)),Rc),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Yd(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function vf(t,e,n,r){return new wf(t,e,n,r)}async function bf(t,e){const n=Uo(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=hh();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function If(t,e){const n=Uo(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Ea.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Fo(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=hh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ef(t){const e=Uo(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Tf(t,e){const n=Uo(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(za.EMPTY_BYTE_STRING,sa.min()).withLastLimboFreeSnapshotVersion(sa.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))}));let a=eh(),c=hh();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(_f(t,i,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(sa.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Ea.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=s,t)))}function _f(t,e,n){let r=hh(),s=hh();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=eh();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(sa.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):Ro("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function Sf(t,e){const n=Uo(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Df(t,e){const n=Uo(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((s=>s?(r=s,Ea.resolve(r)):n.Vs.allocateTargetId(t).next((s=>(r=new Ml(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Af(t,e,n){const r=Uo(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(t=>r.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!Aa(t))throw t;Ro("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function xf(t,e,n){const r=Uo(t);let s=sa.min(),i=hh();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Uo(t),s=r.Bi.get(n);return void 0!==s?Ea.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,ou(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:sa.min(),n?i:hh()))).next((t=>(kf(r,du(e),t),{documents:t,ji:i})))))}function Cf(t,e){const n=Uo(t),r=Uo(n.Vs),s=n.$i.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(t=>r.te(t,e).next((t=>t?t.target:null))))}function Nf(t,e){const n=Uo(t),r=n.Li.get(e)||sa.min();return n.persistence.runTransaction("Get new document changes","readonly",(t=>n.Ui.getAllFromCollectionGroup(t,e,ma(r,-1),Number.MAX_SAFE_INTEGER))).then((t=>(kf(n,e,t),t)))}function kf(t,e,n){let r=sa.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}async function Of(t,e,n,r){const s=Uo(t);let i=hh(),o=eh();for(const u of n){const t=e.Wi(u.metadata.name);u.document&&(i=i.add(t));const n=e.zi(u);n.setReadTime(e.Hi(u.metadata.readTime)),o=o.insert(t,n)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await Df(s,function(t){return ou(tu(oa.fromString(`__bundle__/docs/${t}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(t=>_f(t,a,o).next((e=>(a.apply(t),e))).next((e=>s.Vs.removeMatchingKeysForTargetId(t,c.targetId).next((()=>s.Vs.addMatchingKeys(t,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(t,e.Gi,e.Qi))).next((()=>e.Gi))))))}async function Rf(t,e,n=hh()){const r=await Df(t,ou(Gl(e.bundledQuery))),s=Uo(t);return s.persistence.runTransaction("Save named query","readwrite",(t=>{const i=xh(e.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(t,e);const o=r.withResumeToken(za.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(t,o).next((()=>s.Vs.removeMatchingKeysForTargetId(t,r.targetId))).next((()=>s.Vs.addMatchingKeys(t,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(t,e)))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t,e){return`firestore_clients_${t}_${e}`}function Mf(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Vf(t,e){return`firestore_targets_${t}_${e}`}class Pf{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Ji(t,e,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new jo(r.error.code,r.error.message))),i?new Pf(t,e,r.state,s):(Lo("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Yi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Ff{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ji(t,e){const n=JSON.parse(e);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new jo(n.error.code,n.error.message))),s?new Ff(t,n.state,r):(Lo("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Yi(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Bf{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ji(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=dh();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=sc(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Bf(t,s):(Lo("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Uf{constructor(t,e){this.clientId=t,this.onlineState=e}static Ji(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Uf(e.clientId,e.onlineState):(Lo("SharedClientState",`Failed to parse online state: ${t}`),null)}}class qf{constructor(){this.activeTargetIds=dh()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class jf{constructor(t,e,n,r,s){this.window=t,this.js=e,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Fa(ta),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=Lf(this.persistenceKey,this.tr),this.ur=function(t){return`firestore_sequence_number_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new qf),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(t){return`firestore_online_state_${t}`}(this.persistenceKey),this.dr=function(t){return`firestore_bundle_loaded_v2_${t}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Ri();for(const n of t){if(n===this.tr)continue;const t=this.getItem(Lf(this.persistenceKey,n));if(t){const e=Bf.Ji(n,t);e&&(this.sr=this.sr.insert(e.clientId,e))}}this._r();const e=this.storage.getItem(this.lr);if(e){const t=this.wr(e);t&&this.mr(t)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.ur,JSON.stringify(t))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(t){let e=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.yr(t,"pending")}updateMutationState(t,e,n){this.yr(t,e,n),this.pr(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(Vf(this.persistenceKey,t));if(n){const r=Ff.Ji(t,n);r&&(e=r.state)}}return this.Ir.Xi(t),this._r(),e}removeLocalQueryTarget(t){this.Ir.Zi(t),this._r()}isLocalQueryTarget(t){return this.Ir.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Vf(this.persistenceKey,t))}updateQueryState(t,e,n){this.Tr(t,e,n)}handleUserChange(t,e,n){e.forEach((t=>{this.pr(t)})),this.currentUser=t,n.forEach((t=>{this.addPendingMutation(t)}))}setOnlineState(t){this.Er(t)}notifyBundleLoaded(t){this.Ar(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return Ro("SharedClientState","READ",t,e),e}setItem(t,e){Ro("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){Ro("SharedClientState","REMOVE",t),this.storage.removeItem(t)}nr(t){const e=t;if(e.storageArea===this.storage){if(Ro("SharedClientState","EVENT",e.key,e.newValue),e.key===this.rr)return void Lo("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==e.key)if(this.cr.test(e.key)){if(null==e.newValue){const t=this.Rr(e.key);return this.br(t,null)}{const t=this.Pr(e.key,e.newValue);if(t)return this.br(t.clientId,t)}}else if(this.ar.test(e.key)){if(null!==e.newValue){const t=this.vr(e.key,e.newValue);if(t)return this.Vr(t)}}else if(this.hr.test(e.key)){if(null!==e.newValue){const t=this.Sr(e.key,e.newValue);if(t)return this.Dr(t)}}else if(e.key===this.lr){if(null!==e.newValue){const t=this.wr(e.newValue);if(t)return this.mr(t)}}else if(e.key===this.ur){const t=function(t){let e=La.ot;if(null!=t)try{const n=JSON.parse(t);Fo("number"==typeof n),e=n}catch(t){Lo("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==La.ot&&this.sequenceNumberHandler(t)}else if(e.key===this.dr){const t=this.Cr(e.newValue);await Promise.all(t.map((t=>this.syncEngine.Nr(t))))}}else this.ir.push(e)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(t,e,n){const r=new Pf(this.currentUser,t,e,n),s=Mf(this.persistenceKey,this.currentUser,t);this.setItem(s,r.Yi())}pr(t){const e=Mf(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Er(t){const e={clientId:this.tr,onlineState:t};this.storage.setItem(this.lr,JSON.stringify(e))}Tr(t,e,n){const r=Vf(this.persistenceKey,t),s=new Ff(t,e,n);this.setItem(r,s.Yi())}Ar(t){const e=JSON.stringify(Array.from(t));this.setItem(this.dr,e)}Rr(t){const e=this.cr.exec(t);return e?e[1]:null}Pr(t,e){const n=this.Rr(t);return Bf.Ji(n,e)}vr(t,e){const n=this.ar.exec(t),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Pf.Ji(new xo(s),r,e)}Sr(t,e){const n=this.hr.exec(t),r=Number(n[1]);return Ff.Ji(r,e)}wr(t){return Uf.Ji(t)}Cr(t){return JSON.parse(t)}async Vr(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.kr(t.batchId,t.state,t.error);Ro("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Dr(t){return this.syncEngine.Or(t.targetId,t.state,t.error)}br(t,e){const n=e?this.sr.insert(t,e):this.sr.remove(t),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((t=>{r.has(t)||i.push(t)})),r.forEach((t=>{s.has(t)||o.push(t)})),this.syncEngine.Mr(i,o).then((()=>{this.sr=n}))}mr(t){this.sr.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}gr(t){let e=dh();return t.forEach(((t,n)=>{e=e.unionWith(n.activeTargetIds)})),e}}class Kf{constructor(){this.Fr=new qf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new qf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ro("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Ro("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);Ro("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(Ro("RestConnection","Received: ",t),t)),(e=>{throw Mo("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s,i){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Co,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=zf[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new Do;o.listenOnce(Io.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case bo.NO_ERROR:const e=o.getResponseJson();Ro("Connection","XHR received:",JSON.stringify(e)),s(e);break;case bo.TIMEOUT:Ro("Connection",'RPC "'+t+'" timed out'),i(new jo(qo.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const n=o.getStatus();if(Ro("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(qo).indexOf(e)>=0?e:qo.UNKNOWN}(t.status);i(new jo(e,t.message))}else i(new jo(qo.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new jo(qo.UNAVAILABLE,"Connection failed."));break;default:Po()}}finally{Ro("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=wo(),i=vo(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _o({})),this.uo(o.initMessageHeaders,e,n),g()||w()||v()||b()||I()||y()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Ro("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,h=!1;const l=new Qf({jr:t=>{h?Ro("Connection","Not sending because WebChannel is closed:",t):(u||(Ro("Connection","Opening WebChannel transport."),c.open(),u=!0),Ro("Connection","WebChannel sending:",t),c.send(t))},Wr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,So.EventType.OPEN,(()=>{h||Ro("Connection","WebChannel transport opened.")})),d(c,So.EventType.CLOSE,(()=>{h||(h=!0,Ro("Connection","WebChannel transport closed"),l.eo())})),d(c,So.EventType.ERROR,(t=>{h||(h=!0,Mo("Connection","WebChannel transport errored:",t),l.eo(new jo(qo.UNAVAILABLE,"The operation could not be completed")))})),d(c,So.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Fo(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){Ro("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Wu[t];if(void 0!==e)return Ju(e)}(t),n=s.message;void 0===e&&(e=qo.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,l.eo(new jo(e,n)),c.close()}else Ro("Connection","WebChannel received:",n),l.no(n)}})),d(i,Eo.STAT_EVENT,(t=>{t.stat===To.PROXY?Ro("Connection","Detected buffering proxy"):t.stat===To.NOPROXY&&Ro("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.Zr()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){return"undefined"!=typeof window?window:null}function Yf(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){return new _h(t,!0)}class Jf{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Ro("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Jf(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===qo.RESOURCE_EXHAUSTED?(Lo(e.toString()),Lo("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===qo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new jo(qo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Ro("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Ro("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tg extends Zf{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Uh(this.wt,t),n=function(t){if(!("targetChange"in t))return sa.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?sa.min():e.readTime?xh(e.readTime):sa.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Mh(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=Lc(r)?{documents:$h(t,r)}:{query:Gh(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Dh(t,e.resumeToken):e.snapshotVersion.compareTo(sa.min())>0&&(n.readTime=Sh(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Qh(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Mh(this.wt),e.removeTarget=t,this.Mo(e)}}class eg extends Zf{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Fo(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Kh(t.writeResults,t.commitTime),n=xh(t.commitTime);return this.listener.Jo(n,e)}return Fo(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Mh(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>qh(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new jo(qo.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jo(qo.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new jo(qo.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class rg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Lo(e),this.su=!1):Ro("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{fg(this)&&(Ro("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Uo(t);e.lu.add(4),await og(e),e._u.set("Unknown"),e.lu.delete(4),await ig(e)}(this))}))})),this._u=new rg(n,r)}}async function ig(t){if(fg(t))for(const e of t.fu)await e(!0)}async function og(t){for(const e of t.fu)await e(!1)}function ag(t,e){const n=Uo(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),dg(n)?lg(n):kg(n).Co()&&ug(n,e))}function cg(t,e){const n=Uo(t),r=kg(n);n.hu.delete(e),r.Co()&&hg(n,e),0===n.hu.size&&(r.Co()?r.ko():fg(n)&&n._u.set("Unknown"))}function ug(t,e){t.wu.Nt(e.targetId),kg(t).Qo(e)}function hg(t,e){t.wu.Nt(e),kg(t).jo(e)}function lg(t){t.wu=new vh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),kg(t).start(),t._u.iu()}function dg(t){return fg(t)&&!kg(t).Do()&&t.hu.size>0}function fg(t){return 0===Uo(t).lu.size}function gg(t){t.wu=void 0}async function mg(t){t.hu.forEach(((e,n)=>{ug(t,e)}))}async function pg(t,e){gg(t),dg(t)?(t._u.uu(e),lg(t)):t._u.set("Unknown")}async function yg(t,e,n){if(t._u.set("Online"),e instanceof yh&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){Ro("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await wg(t,n)}else if(e instanceof mh?t.wu.Ut(e):e instanceof ph?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(sa.min()))try{const e=await Ef(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(za.EMPTY_BYTE_STRING,n.snapshotVersion)),hg(t,e);const r=new Ml(n.target,e,1,n.sequenceNumber);ug(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ro("RemoteStore","Failed to raise snapshot:",e),await wg(t,e)}}async function wg(t,e,n){if(!Aa(e))throw e;t.lu.add(1),await og(t),t._u.set("Offline"),n||(n=()=>Ef(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ro("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ig(t)}))}function vg(t,e){return e().catch((n=>wg(t,n,e)))}async function bg(t){const e=Uo(t),n=Og(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Ig(e);)try{const t=await Sf(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,Eg(e,t)}catch(t){await wg(e,t)}Tg(e)&&_g(e)}function Ig(t){return fg(t)&&t.au.length<10}function Eg(t,e){t.au.push(e);const n=Og(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Tg(t){return fg(t)&&!Og(t).Do()&&t.au.length>0}function _g(t){Og(t).start()}async function Sg(t){Og(t).Xo()}async function Dg(t){const e=Og(t);for(const n of t.au)e.Ho(n.mutations)}async function Ag(t,e,n){const r=t.au.shift(),s=Rl.from(r,e,n);await vg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await bg(t)}async function xg(t,e){e&&Og(t).zo&&await async function(t,e){if(n=e.code,Xu(n)&&n!==qo.ABORTED){const n=t.au.shift();Og(t).No(),await vg(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await bg(t)}var n}(t,e),Tg(t)&&_g(t)}async function Cg(t,e){const n=Uo(t);n.asyncQueue.verifyOperationInProgress(),Ro("RemoteStore","RemoteStore received new credentials");const r=fg(n);n.lu.add(3),await og(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ig(n)}async function Ng(t,e){const n=Uo(t);e?(n.lu.delete(2),await ig(n)):e||(n.lu.add(2),await og(n),n._u.set("Unknown"))}function kg(t){return t.mu||(t.mu=function(t,e,n){const r=Uo(t);return r.tu(),new tg(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:mg.bind(null,t),Jr:pg.bind(null,t),Go:yg.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),dg(t)?lg(t):t._u.set("Unknown")):(await t.mu.stop(),gg(t))}))),t.mu}function Og(t){return t.gu||(t.gu=function(t,e,n){const r=Uo(t);return r.tu(),new eg(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Sg.bind(null,t),Jr:xg.bind(null,t),Yo:Dg.bind(null,t),Jo:Ag.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await bg(t)):(await t.gu.stop(),t.au.length>0&&(Ro("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rg{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Ko,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Rg(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jo(qo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lg(t,e){if(Lo("AsyncQueue",`${e}: ${t}`),Aa(t))return new jo(qo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ua.comparator(e.key,n.key):(t,e)=>ua.comparator(t.key,e.key),this.keyedMap=rh(),this.sortedSet=new Fa(this.comparator)}static emptySet(t){return new Mg(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Mg))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Mg;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.yu=new Fa(ua.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):Po():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Pg{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new Pg(t,e,Mg.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&cu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.Iu=void 0,this.listeners=[]}}class Bg{constructor(){this.queries=new Zu((t=>uu(t)),cu),this.onlineState="Unknown",this.Tu=new Set}}async function Ug(t,e){const n=Uo(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Fg),s)try{i.Iu=await n.onListen(r)}catch(t){const n=Lg(t,`Initialization of query '${hu(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&$g(n)}async function qg(t,e){const n=Uo(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function jg(t,e){const n=Uo(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(s)&&(r=!0);e.Iu=s}}r&&$g(n)}function Kg(t,e,n){const r=Uo(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function $g(t){t.Tu.forEach((t=>{t.next()}))}class Gg{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Pg(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=Pg.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(t,e){this.payload=t,this.byteLength=e}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t){this.wt=t}Wi(t){return Oh(this.wt,t)}zi(t){return t.metadata.exists?Fh(this.wt,t.document,!1):xc.newNoDocument(this.Wi(t.metadata.name),this.Hi(t.metadata.readTime))}Hi(t){return xh(t)}}class Hg{constructor(t,e,n){this.xu=t,this.localStore=e,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Wg(t)}Nu(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.payload.namedQuery)this.queries.push(t.payload.namedQuery);else if(t.payload.documentMetadata){this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e;const n=oa.fromString(t.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}ku(t){const e=new Map,n=new Qg(this.wt);for(const r of t)if(r.metadata.queries){const t=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||hh()).add(t);e.set(n,r)}}return e}async complete(){const t=await Of(this.localStore,new Qg(this.wt),this.documents,this.xu.id),e=this.ku(this.documents);for(const n of this.queries)await Rf(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:t}}}function Wg(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t){this.key=t}}class Xg{constructor(t){this.key=t}}class Jg{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=hh(),this.mutatedKeys=hh(),this.Lu=fu(t),this.Uu=new Mg(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Vg,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=lu(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Po()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Pg(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Vg,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=hh(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Xg(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new Yg(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=hh();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return Pg.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Zg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class tm{constructor(t){this.key=t,this.Xu=!1}}class em{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Zu((t=>uu(t)),cu),this.ec=new Map,this.nc=new Set,this.sc=new Fa(ua.comparator),this.ic=new Map,this.rc=new Zd,this.oc={},this.uc=new Map,this.cc=Cd.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function nm(t,e){const n=km(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await Df(n.localStore,ou(e));n.isPrimaryClient&&ag(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await rm(n,e,r,"current"===i)}return s}async function rm(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await xf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,s))));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return pm(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await xf(t.localStore,e,!0),i=new Jg(e,s.ji),o=i.Ku(s.documents),a=gh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);pm(t,n,c.zu);const u=new Zg(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function sm(t,e){const n=Uo(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((t=>!cu(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Af(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),cg(n.remoteStore,r.targetId),gm(n,r.targetId)})).catch(Ia)):(gm(n,r.targetId),await Af(n.localStore,r.targetId,!0))}async function im(t,e,n){const r=Om(t);try{const t=await function(t,e){const n=Uo(t),r=ra.now(),s=e.reduce(((t,e)=>t.add(e.key)),hh());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=eh(),c=hh();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=Bu(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new ju(t.key,e,Ac(e.value.mapValue),Ru.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:sh(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Fa(ta)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await vm(r,t.changes),await bg(r.remoteStore)}catch(t){const e=Lg(t,"Failed to persist write");n.reject(e)}}async function om(t,e){const n=Uo(t);try{const t=await Tf(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(Fo(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?Fo(r.Xu):t.removedDocuments.size>0&&(Fo(r.Xu),r.Xu=!1))})),await vm(n,t,e)}catch(t){await Ia(t)}}function am(t,e,n){const r=Uo(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Uo(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(r=!0)})),r&&$g(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cm(t,e,n){const r=Uo(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new Fa(ua.comparator);t=t.insert(i,xc.newNoDocument(i,sa.min()));const n=hh().add(i),s=new fh(sa.min(),new Map,new qa(ta),t,n);await om(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),wm(r)}else await Af(r.localStore,e,!1).then((()=>gm(r,e,n))).catch(Ia)}async function um(t,e){const n=Uo(t),r=e.batch.batchId;try{const t=await If(n.localStore,e);fm(n,r,null),dm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vm(n,t)}catch(t){await Ia(t)}}async function hm(t,e,n){const r=Uo(t);try{const t=await function(t,e){const n=Uo(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Fo(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);fm(r,e,n),dm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vm(r,t)}catch(n){await Ia(n)}}async function lm(t,e){const n=Uo(t);fg(n.remoteStore)||Ro("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=Uo(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(t=>e.mutationQueue.getHighestUnacknowledgedBatchId(t)))}(n.localStore);if(-1===t)return void e.resolve();const r=n.uc.get(t)||[];r.push(e),n.uc.set(t,r)}catch(t){const n=Lg(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function dm(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function fm(t,e,n){const r=Uo(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function gm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||mm(t,e)}))}function mm(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(cg(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),wm(t))}function pm(t,e,n){for(const r of n)r instanceof Yg?(t.rc.addReference(r.key,e),ym(t,r)):r instanceof Xg?(Ro("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||mm(t,r.key)):Po()}function ym(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(Ro("SyncEngine","New document in limbo: "+n),t.nc.add(r),wm(t))}function wm(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new ua(oa.fromString(e)),r=t.cc.next();t.ic.set(r,new tm(n)),t.sc=t.sc.insert(n,r),ag(t.remoteStore,new Ml(ou(tu(n.path)),r,2,La.ot))}}async function vm(t,e,n){const r=Uo(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=pf.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=Uo(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ea.forEach(e,(e=>Ea.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ea.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Aa(t))throw t;Ro("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function bm(t,e){const n=Uo(t);if(!n.currentUser.isEqual(e)){Ro("SyncEngine","User change. New user:",e.toKey());const t=await bf(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new jo(qo.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await vm(n,t.Ki)}}function Im(t,e){const n=Uo(t),r=n.ic.get(e);if(r&&r.Xu)return hh().add(r.key);{let t=hh();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}async function Em(t,e){const n=Uo(t),r=await xf(n.localStore,e.query,!0),s=e.view.Ju(r);return n.isPrimaryClient&&pm(n,e.targetId,s.zu),s}async function Tm(t,e){const n=Uo(t);return Nf(n.localStore,e).then((t=>vm(n,t)))}async function _m(t,e,n,r){const s=Uo(t),i=await function(t,e){const n=Uo(t),r=Uo(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(t=>r.yn(t,e).next((e=>e?n.localDocuments.getDocuments(t,e):Ea.resolve(null)))))}(s.localStore,e);null!==i?("pending"===n?await bg(s.remoteStore):"acknowledged"===n||"rejected"===n?(fm(s,e,r||null),dm(s,e),function(t,e){Uo(Uo(t).mutationQueue).In(e)}(s.localStore,e)):Po(),await vm(s,i)):Ro("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Sm(t,e){const n=Uo(t);if(km(n),Om(n),!0===e&&!0!==n.ac){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await Dm(n,t.toArray());n.ac=!0,await Ng(n.remoteStore,!0);for(const r of e)ag(n.remoteStore,r)}else if(!1===e&&!1!==n.ac){const t=[];let e=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?t.push(s):e=e.then((()=>(gm(n,s),Af(n.localStore,s,!0)))),cg(n.remoteStore,s)})),await e,await Dm(n,t),function(t){const e=Uo(t);e.ic.forEach(((t,n)=>{cg(e.remoteStore,n)})),e.rc.cs(),e.ic=new Map,e.sc=new Fa(ua.comparator)}(n),n.ac=!1,await Ng(n.remoteStore,!1)}}async function Dm(t,e,n){const r=Uo(t),s=[],i=[];for(const o of e){let t;const e=r.ec.get(o);if(e&&0!==e.length){t=await Df(r.localStore,ou(e[0]));for(const t of e){const e=r.tc.get(t),n=await Em(r,e);n.snapshot&&i.push(n.snapshot)}}else{const e=await Cf(r.localStore,o);t=await Df(r.localStore,e),await rm(r,Am(e),o,!1)}s.push(t)}return r.Zu.Go(i),s}function Am(t){return Zc(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function xm(t){const e=Uo(t);return Uo(Uo(e.localStore).persistence).Ri()}async function Cm(t,e,n,r){const s=Uo(t);if(s.ac)return void Ro("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const t=await Nf(s.localStore,du(i[0])),r=fh.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await vm(s,t,r);break}case"rejected":await Af(s.localStore,e,!0),gm(s,e,r);break;default:Po()}}async function Nm(t,e,n){const r=km(t);if(r.ac){for(const t of e){if(r.ec.has(t)){Ro("SyncEngine","Adding an already active target "+t);continue}const e=await Cf(r.localStore,t),n=await Df(r.localStore,e);await rm(r,Am(e),n.targetId,!1),ag(r.remoteStore,n)}for(const t of n)r.ec.has(t)&&await Af(r.localStore,t,!1).then((()=>{cg(r.remoteStore,t),gm(r,t)})).catch(Ia)}}function km(t){const e=Uo(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=om.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Im.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cm.bind(null,e),e.Zu.Go=jg.bind(null,e.eventManager),e.Zu.lc=Kg.bind(null,e.eventManager),e}function Om(t){const e=Uo(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=um.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hm.bind(null,e),e}function Rm(t,e,n){const r=Uo(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=Uo(t),r=xh(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(t=>n.Ds.getBundleMetadata(t,e.id))).then((t=>!!t&&t.createTime.compareTo(r)>=0))}(t.localStore,r))return await e.close(),n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Wg(r));const s=new Hg(r,t.localStore,e.wt);let i=await e.fc();for(;i;){const t=await s.Nu(i);t&&n._updateProgress(t),i=await e.fc()}const o=await s.complete();return await vm(t,o.Mu,void 0),await function(t,e){const n=Uo(t);return n.persistence.runTransaction("Save bundle","readwrite",(t=>n.Ds.saveBundleMetadata(t,e)))}(t.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(t){return Mo("SyncEngine",`Loading bundle failed with ${t}`),n._failWith(t),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then((t=>{r.sharedClientState.notifyBundleLoaded(t)}))}class Lm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Xf(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return vf(this.persistence,new yf,t.initialUser,this.wt)}_c(t){return new of(cf.Ms,this.wt)}dc(t){return new Kf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mm extends Lm{constructor(t,e,n){super(),this.yc=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.yc.initialize(this,t),await Om(this.yc.syncEngine),await bg(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(t){return vf(this.persistence,new yf,t.initialUser,this.wt)}mc(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Vd(n,t.asyncQueue,e)}gc(t,e){const n=new Ra(e,this.persistence);return new Oa(t.asyncQueue,n)}_c(t){const e=mf(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Id.withCacheSize(this.cacheSizeBytes):Id.DEFAULT;return new df(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Wf(),Yf(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(t){return new Kf}}class Vm extends Mm{constructor(t,e){super(t,e,!1),this.yc=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.yc.syncEngine;this.sharedClientState instanceof jf&&(this.sharedClientState.syncEngine={kr:_m.bind(null,e),Or:Cm.bind(null,e),Mr:Nm.bind(null,e),Ri:xm.bind(null,e),Nr:Tm.bind(null,e)},await this.sharedClientState.start()),await this.persistence.ci((async t=>{await Sm(this.yc.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start():t||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(t&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():t||this.indexBackfillerScheduler.stop())}))}dc(t){const e=Wf();if(!jf.V(e))throw new jo(qo.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=mf(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new jf(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Pm{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>am(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bm.bind(null,this.syncEngine),await Ng(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Bg}createDatastore(t){const e=Xf(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Hf(r));var r;return function(t,e,n,r){return new ng(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>am(this.syncEngine,t,0),i=Gf.V()?new Gf:new $f,new sg(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new em(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Uo(t);Ro("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await og(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,e){this.Ec=t,this.wt=e,this.metadata=new Ko,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((t=>{t&&t.Cu()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==t?void 0:t.payload)}`))}),(t=>this.metadata.reject(t)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const t=await this.bc();if(null===t)return null;const e=this.Ac.decode(t),n=Number(e);isNaN(n)&&this.Pc(`length string (${e}) is not valid number`);const r=await this.vc(n);return new zg(JSON.parse(r),t.length+n)}Vc(){return this.buffer.findIndex((t=>t==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const t=this.Vc();t<0&&this.Pc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async vc(t){for(;this.buffer.length<t;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const e=this.Ac.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}Pc(t){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${t}`)}async Sc(){const t=await this.Ec.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new jo(qo.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=Uo(t),r=Mh(n.wt)+"/documents",s={documents:e.map((t=>kh(n.wt,t)))},i=await n.ao("BatchGetDocuments",r,s,e.length),o=new Map;i.forEach((t=>{const e=Bh(n.wt,t);o.set(e.key.toString(),e)}));const a=[];return e.forEach((t=>{const e=o.get(t.toString());Fo(!!e),a.push(e)})),a}(this.datastore,t);return e.forEach((t=>this.recordVersion(t))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new zu(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((t,e)=>{const n=ua.fromPath(e);this.mutations.push(new Qu(n,this.precondition(n)))})),await async function(t,e){const n=Uo(t),r=Mh(n.wt)+"/documents",s={writes:e.map((t=>qh(n.wt,t)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw Po();e=sa.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new jo(qo.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ru.updateTime(e):Ru.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(sa.min()))throw new jo(qo.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ru.updateTime(e)}return Ru.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,e,n,r,s){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new Jf(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const t=new qm(this.datastore),e=this.xc(t);e&&e.then((e=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(e)})).catch((t=>{this.Nc(t)}))))})).catch((t=>{this.Nc(t)}))}))}xc(t){try{const e=this.updateFunction(t);return!nc(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Nc(t){this.Dc>0&&this.kc(t)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(t)}kc(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Xu(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=xo.UNAUTHENTICATED,this.clientId=Zo.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ro("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ro("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jo(qo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ko;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Lg(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function $m(t,e){t.asyncQueue.verifyOperationInProgress(),Ro("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await bf(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Gm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zm(t);Ro("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Cg(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Cg(e.remoteStore,n))),t.onlineComponents=e}async function zm(t){return t.offlineComponents||(Ro("FirestoreClient","Using default OfflineComponentProvider"),await $m(t,new Lm)),t.offlineComponents}async function Qm(t){return t.onlineComponents||(Ro("FirestoreClient","Using default OnlineComponentProvider"),await Gm(t,new Pm)),t.onlineComponents}function Hm(t){return zm(t).then((t=>t.persistence))}function Wm(t){return zm(t).then((t=>t.localStore))}function Ym(t){return Qm(t).then((t=>t.remoteStore))}function Xm(t){return Qm(t).then((t=>t.syncEngine))}async function Jm(t){const e=await Qm(t),n=e.eventManager;return n.onListen=nm.bind(null,e.syncEngine),n.onUnlisten=sm.bind(null,e.syncEngine),n}function Zm(t){return t.asyncQueue.enqueue((async()=>{const e=await Hm(t),n=await Ym(t);return e.setNetworkEnabled(!0),function(t){const e=Uo(t);return e.lu.delete(0),ig(e)}(n)}))}function tp(t){return t.asyncQueue.enqueue((async()=>{const e=await Hm(t),n=await Ym(t);return e.setNetworkEnabled(!1),async function(t){const e=Uo(t);e.lu.add(0),await og(e),e._u.set("Offline")}(n)}))}function ep(t,e){const n=new Ko;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await function(t,e){const n=Uo(t);return n.persistence.runTransaction("read document","readonly",(t=>n.localDocuments.getDocument(t,e)))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new jo(qo.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=Lg(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Wm(t),e,n))),n.promise}function np(t,e,n={}){const r=new Ko;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Bm({next:i=>{e.enqueueAndForget((()=>qg(t,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new jo(qo.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new jo(qo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Gg(tu(n.path),i,{includeMetadataChanges:!0,Du:!0});return Ug(t,o)}(await Jm(t),t.asyncQueue,e,n,r))),r.promise}function rp(t,e){const n=new Ko;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){try{const r=await xf(t,e,!0),s=new Jg(e,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(t){const r=Lg(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Wm(t),e,n))),n.promise}function sp(t,e,n={}){const r=new Ko;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,s){const i=new Bm({next:n=>{e.enqueueAndForget((()=>qg(t,o))),n.fromCache&&"server"===r.source?s.reject(new jo(qo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Gg(n,i,{includeMetadataChanges:!0,Du:!0});return Ug(t,o)}(await Jm(t),t.asyncQueue,e,n,r))),r.promise}function ip(t,e){const n=new Bm(e);return t.asyncQueue.enqueueAndForget((async()=>function(t,e){Uo(t).Tu.add(e),e.next()}(await Jm(t),n))),()=>{n.Tc(),t.asyncQueue.enqueueAndForget((async()=>function(t,e){Uo(t).Tu.delete(e)}(await Jm(t),n)))}}function op(t,e,n){const r=new Ko;return t.asyncQueue.enqueueAndForget((async()=>{const s=await function(t){return Qm(t).then((t=>t.datastore))}(t);new jm(t.asyncQueue,s,n,e,r).run()})),r.promise}function ap(t,e,n,r){const s=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Um(t,e)}(function(t,e){if(t instanceof Uint8Array)return Fm(t,e);if(t instanceof ArrayBuffer)return Fm(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Xf(e));t.asyncQueue.enqueueAndForget((async()=>{Rm(await Xm(t),s,r)}))}function cp(t,e){return t.asyncQueue.enqueue((async()=>function(t,e){const n=Uo(t);return n.persistence.runTransaction("Get named query","readonly",(t=>n.Ds.getNamedQuery(t,e)))}(await Wm(t),e)))}const up=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e,n){if(!n)throw new jo(qo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lp(t,e,n,r){if(!0===e&&!0===r)throw new jo(qo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dp(t){if(!ua.isDocumentKey(t))throw new jo(qo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fp(t){if(ua.isDocumentKey(t))throw new jo(qo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gp(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Po()}function mp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new jo(qo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gp(t);throw new jo(qo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function pp(t,e){if(e<=0)throw new jo(qo.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new jo(qo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new jo(qo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,lp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yp({}),this._settingsFrozen=!1,t instanceof ec?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new jo(qo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ec(t.options.projectId)}(t))}get app(){if(!this._app)throw new jo(qo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new jo(qo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yp(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Go;switch(t.type){case"gapi":const e=t.client;return Fo(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Wo(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new jo(qo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=up.get(t);e&&(Ro("ComponentProvider","Removing Datastore"),up.delete(t),e.terminate())}(this),Promise.resolve()}}function vp(t,e,n,r={}){var s;const i=(t=mp(t,wp))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&Mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=xo.MOCK_USER;else{e=d(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new jo(qo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new xo(i)}t._authCredentials=new zo(new $o(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ep(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bp(this.firestore,t,this._key)}}class Ip{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ip(this.firestore,t,this._query)}}class Ep extends Ip{constructor(t,e,n){super(t,e,tu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bp(this.firestore,null,new ua(t))}withConverter(t){return new Ep(this.firestore,t,this._path)}}function Tp(t,e,...n){if(t=P(t),hp("collection","path",e),t instanceof wp){const r=oa.fromString(e,...n);return fp(r),new Ep(t,null,r)}{if(!(t instanceof bp||t instanceof Ep))throw new jo(qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oa.fromString(e,...n));return fp(r),new Ep(t.firestore,null,r)}}function _p(t,e){if(t=mp(t,wp),hp("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new jo(qo.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ip(t,null,function(t){return new Jc(oa.emptyPath(),t)}(e))}function Sp(t,e,...n){if(t=P(t),1===arguments.length&&(e=Zo.I()),hp("doc","path",e),t instanceof wp){const r=oa.fromString(e,...n);return dp(r),new bp(t,null,new ua(r))}{if(!(t instanceof bp||t instanceof Ep))throw new jo(qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oa.fromString(e,...n));return dp(r),new bp(t.firestore,t instanceof Ep?t.converter:null,new ua(r))}}function Dp(t,e){return t=P(t),e=P(e),(t instanceof bp||t instanceof Ep)&&(e instanceof bp||e instanceof Ep)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Ap(t,e){return t=P(t),e=P(e),t instanceof Ip&&e instanceof Ip&&t.firestore===e.firestore&&cu(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xp{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Jf(this,"async_queue_retry"),this.Kc=()=>{const t=Yf();t&&Ro("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Yf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Yf();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Ko;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(hn){if(!Aa(hn))throw hn;Ro("AsyncQueue","Operation failed with retryable error: "+hn)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Lo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Rg.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Po()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function Cp(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Np{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ko,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=-1;class Op extends wp{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new xp,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lp(this),this._firestoreClient.terminate()}}function Rp(t){return t._firestoreClient||Lp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Lp(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new tc(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Km(t._authCredentials,t._appCheckCredentials,t._queue,r)}function Mp(t,e){$p(t=mp(t,Op));const n=Rp(t),r=t._freezeSettings(),s=new Pm;return Pp(n,s,new Mm(s,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function Vp(t){$p(t=mp(t,Op));const e=Rp(t),n=t._freezeSettings(),r=new Pm;return Pp(e,r,new Vm(r,n.cacheSizeBytes))}function Pp(t,e,n){const r=new Ko;return t.asyncQueue.enqueue((async()=>{try{await $m(t,n),await Gm(t,e),r.resolve()}catch(t){const n=t;if(!function(t){return"FirebaseError"===t.name?t.code===qo.FAILED_PRECONDITION||t.code===qo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(n))throw n;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function Fp(t){if(t._initialized&&!t._terminated)throw new jo(qo.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ko;return t._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(t){if(!_a.V())return Promise.resolve();const e=t+"main";await _a.delete(e)}(mf(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function Bp(t){return function(t){const e=new Ko;return t.asyncQueue.enqueueAndForget((async()=>lm(await Xm(t),e))),e.promise}(Rp(t=mp(t,Op)))}function Up(t){return Zm(Rp(t=mp(t,Op)))}function qp(t){return tp(Rp(t=mp(t,Op)))}function jp(t,e){const n=Rp(t=mp(t,Op)),r=new Np;return ap(n,t._databaseId,e,r),r}function Kp(t,e){return cp(Rp(t=mp(t,Op)),e).then((e=>e?new Ip(t,null,e.query):null))}function $p(t){if(t._initialized||t._terminated)throw new jo(qo.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new jo(qo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ca(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zp{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zp(za.fromBase64String(t))}catch(t){throw new jo(qo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new zp(za.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new jo(qo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new jo(qo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ta(this._lat,t._lat)||ta(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=/^__.*__$/;class Yp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ju(t,this.data,this.fieldMask,e,this.fieldTransforms):new qu(t,this.data,e,this.fieldTransforms)}}class Xp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ju(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Jp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Po()}}class Zp{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Zp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return vy(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Jp(this.Zc)&&Wp.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class ty{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Xf(t)}aa(t,e,n,r=!1){return new Zp({Zc:t,methodName:e,ca:n,path:ca.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ey(t){const e=t._freezeSettings(),n=Xf(t._databaseId);return new ty(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ny(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);my("Data must be an object, but it was:",o,r);const a=fy(r,o);let c,u;if(i.merge)c=new $a(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=py(e,r,n);if(!o.contains(s))throw new jo(qo.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);by(t,s)||t.push(s)}c=new $a(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Yp(new Dc(a),c,u)}class ry extends Qp{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(`${this._methodName}() can only appear at the top level of your update data`):t.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ry}}function sy(t,e,n){return new Zp({Zc:3,ca:e.settings.ca,methodName:t._methodName,na:n},e.databaseId,e.wt,e.ignoreUndefinedProperties)}class iy extends Qp{_toFieldTransform(t){return new Nu(t.path,new Eu)}isEqual(t){return t instanceof iy}}class oy extends Qp{constructor(t,e){super(t),this.ha=e}_toFieldTransform(t){const e=sy(this,t,!0),n=this.ha.map((t=>dy(t,e))),r=new Tu(n);return new Nu(t.path,r)}isEqual(t){return this===t}}class ay extends Qp{constructor(t,e){super(t),this.ha=e}_toFieldTransform(t){const e=sy(this,t,!0),n=this.ha.map((t=>dy(t,e))),r=new Su(n);return new Nu(t.path,r)}isEqual(t){return this===t}}class cy extends Qp{constructor(t,e){super(t),this.la=e}_toFieldTransform(t){const e=new Au(t.wt,yu(t.wt,this.la));return new Nu(t.path,e)}isEqual(t){return this===t}}function uy(t,e,n,r){const s=t.aa(1,e,n);my("Data must be an object, but it was:",s,r);const i=[],o=Dc.empty();Va(r,((t,r)=>{const a=wy(e,t,n);r=P(r);const c=s.ia(a);if(r instanceof ry)i.push(a);else{const t=dy(r,c);null!=t&&(i.push(a),o.set(a,t))}}));const a=new $a(i);return new Xp(o,a,s.fieldTransforms)}function hy(t,e,n,r,s,i){const o=t.aa(1,e,n),a=[py(e,r,n)],c=[s];if(i.length%2!=0)throw new jo(qo.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(py(e,i[d])),c.push(i[d+1]);const u=[],h=Dc.empty();for(let d=a.length-1;d>=0;--d)if(!by(u,a[d])){const t=a[d];let e=c[d];e=P(e);const n=o.ia(t);if(e instanceof ry)u.push(t);else{const r=dy(e,n);null!=r&&(u.push(t),h.set(t,r))}}const l=new $a(u);return new Xp(h,l,o.fieldTransforms)}function ly(t,e,n,r=!1){return dy(n,t.aa(r?4:3,e))}function dy(t,e){if(gy(t=P(t)))return my("Unsupported field value:",e,t),fy(t,e);if(t instanceof Qp)return function(t,e){if(!Jp(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=dy(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=P(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return yu(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ra.fromDate(t);return{timestampValue:Sh(e.wt,n)}}if(t instanceof ra){const n=new ra(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Sh(e.wt,n)}}if(t instanceof Hp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof zp)return{bytesValue:Dh(e.wt,t._byteString)};if(t instanceof bp){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ch(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${gp(t)}`)}(t,e)}function fy(t,e){const n={};return Pa(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Va(t,((t,r)=>{const s=dy(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function gy(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ra||t instanceof Hp||t instanceof zp||t instanceof bp||t instanceof Qp)}function my(t,e,n){if(!gy(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=gp(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function py(t,e,n){if((e=P(e))instanceof Gp)return e._internalPath;if("string"==typeof e)return wy(t,e);throw vy("Field path arguments must be of type string or ",t,!1,void 0,n)}const yy=new RegExp("[~\\*/\\[\\]]");function wy(t,e,n){if(e.search(yy)>=0)throw vy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gp(...e.split("."))._internalPath}catch(r){throw vy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vy(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new jo(qo.INVALID_ARGUMENT,a+t+c)}function by(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ey(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ty("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ey extends Iy{data(){return super.data()}}function Ty(t,e){return"string"==typeof e?wy(t,e):e instanceof Gp?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sy extends Iy{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ty("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Dy extends Sy{data(t={}){return super.data(t)}}class Ay{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new _y(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Dy(this._firestore,this._userDataWriter,n.key,n,new _y(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new jo(qo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Dy(t._firestore,t._userDataWriter,n.doc.key,n.doc,new _y(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Dy(t._firestore,t._userDataWriter,e.doc.key,e.doc,new _y(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:xy(e.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Po()}}function Cy(t,e){return t instanceof Sy&&e instanceof Sy?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ay&&e instanceof Ay&&t._firestore===e._firestore&&Ap(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new jo(qo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ky{}function Oy(t,...e){for(const n of e)t=n._apply(t);return t}class Ry extends ky{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=ey(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new jo(qo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Hy(o,i);const e=[];for(const n of o)e.push(Qy(r,t,n));a={arrayValue:{values:e}}}else a=Qy(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Hy(o,i),a=ly(n,e,o,"in"===i||"not-in"===i);const c=Fc.create(s,i,a);return function(t,e){if(e.ht()){const n=ru(t);if(null!==n&&!n.isEqual(e.field))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=nu(t);null!==r&&Wy(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new jo(qo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new jo(qo.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Ip(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Ly(t,e,n){const r=e,s=Ty("where",t);return new Ry(s,r,n)}class My extends ky{constructor(t,e){super(),this.fa=t,this.wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new jo(qo.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new jo(qo.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Hc(e,n);return function(t,e){if(null===nu(t)){const n=ru(t);null!==n&&Wy(t,n,e.field)}}(t,r),r}(t._query,this.fa,this.wa);return new Ip(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Jc(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Vy(t,e="asc"){const n=e,r=Ty("orderBy",t);return new My(r,n)}class Py extends ky{constructor(t,e,n){super(),this.type=t,this.ma=e,this.ga=n}_apply(t){return new Ip(t.firestore,t.converter,au(t._query,this.ma,this.ga))}}function Fy(t){return pp("limit",t),new Py("limit",t,"F")}function By(t){return pp("limitToLast",t),new Py("limitToLast",t,"L")}class Uy extends ky{constructor(t,e,n){super(),this.type=t,this.ya=e,this.pa=n}_apply(t){const e=zy(t,this.type,this.ya,this.pa);return new Ip(t.firestore,t.converter,function(t,e){return new Jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function qy(...t){return new Uy("startAt",t,!0)}function jy(...t){return new Uy("startAfter",t,!1)}class Ky extends ky{constructor(t,e,n){super(),this.type=t,this.ya=e,this.pa=n}_apply(t){const e=zy(t,this.type,this.ya,this.pa);return new Ip(t.firestore,t.converter,function(t,e){return new Jc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function $y(...t){return new Ky("endBefore",t,!1)}function Gy(...t){return new Ky("endAt",t,!0)}function zy(t,e,n,r){if(n[0]=P(n[0]),n[0]instanceof Iy)return function(t,e,n,r,s){if(!r)throw new jo(qo.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of iu(t))if(o.field.isKeyField())i.push(gc(e,r.key));else{const t=r.data.field(o.field);if(Xa(t))throw new jo(qo.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new jo(qo.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}i.push(t)}return new Qc(i,s)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=ey(t.firestore);return function(t,e,n,r,s,i){const o=t.explicitOrderBy;if(s.length>o.length)throw new jo(qo.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new jo(qo.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!su(t)&&-1!==i.indexOf("/"))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=t.path.child(oa.fromString(i));if(!ua.isDocumentKey(n))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new ua(n);a.push(gc(e,s))}else{const t=ly(n,r,i);a.push(t)}}return new Qc(a,i)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Qy(t,e,n){if("string"==typeof(n=P(n))){if(""===n)throw new jo(qo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!su(e)&&-1!==n.indexOf("/"))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oa.fromString(n));if(!ua.isDocumentKey(r))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gc(t,new ua(r))}if(n instanceof bp)return gc(t,n._key);throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gp(n)}.`)}function Hy(t,e){if(!Array.isArray(t)||0===t.length)throw new jo(qo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new jo(qo.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wy(t,e,n){if(!n.isEqual(e))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{convertValue(t,e="none"){switch(ac(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Wa(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ya(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Po()}}convertObject(t,e){const n={};return Va(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Hp(Wa(t.latitude),Wa(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Ja(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Za(t));default:return null}}convertTimestamp(t){const e=Ha(t);return new ra(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=oa.fromString(t);Fo(nl(n));const r=new ec(n.get(1),n.get(3)),s=new ua(n.popFirst(5));return r.isEqual(e)||Lo(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Zy extends Xy{constructor(t){super(),this.firestore=t}convertBytes(t){return new zp(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bp(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=ey(t)}set(t,e,n){this._verifyNotCommitted();const r=ew(t,this._firestore),s=Jy(r.converter,e,n),i=ny(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Ru.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const s=ew(t,this._firestore);let i;return i="string"==typeof(e=P(e))||e instanceof Gp?hy(this._dataReader,"WriteBatch.update",s._key,e,n,r):uy(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(i.toMutation(s._key,Ru.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ew(t,this._firestore);return this._mutations=this._mutations.concat(new zu(e._key,Ru.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new jo(qo.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ew(t,e){if((t=P(t)).firestore!==e)throw new jo(qo.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){t=mp(t,bp);const e=mp(t.firestore,Op);return np(Rp(e),t._key).then((n=>pw(e,t,n)))}class rw extends Xy{constructor(t){super(),this.firestore=t}convertBytes(t){return new zp(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bp(this.firestore,null,e)}}function sw(t){t=mp(t,bp);const e=mp(t.firestore,Op),n=Rp(e),r=new rw(e);return ep(n,t._key).then((n=>new Sy(e,r,t._key,n,new _y(null!==n&&n.hasLocalMutations,!0),t.converter)))}function iw(t){t=mp(t,bp);const e=mp(t.firestore,Op);return np(Rp(e),t._key,{source:"server"}).then((n=>pw(e,t,n)))}function ow(t){t=mp(t,Ip);const e=mp(t.firestore,Op),n=Rp(e),r=new rw(e);return Ny(t._query),sp(n,t._query).then((n=>new Ay(e,r,t,n)))}function aw(t){t=mp(t,Ip);const e=mp(t.firestore,Op),n=Rp(e),r=new rw(e);return rp(n,t._query).then((n=>new Ay(e,r,t,n)))}function cw(t){t=mp(t,Ip);const e=mp(t.firestore,Op),n=Rp(e),r=new rw(e);return sp(n,t._query,{source:"server"}).then((n=>new Ay(e,r,t,n)))}function uw(t,e,n){t=mp(t,bp);const r=mp(t.firestore,Op),s=Jy(t.converter,e,n);return mw(r,[ny(ey(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Ru.none())])}function hw(t,e,n,...r){t=mp(t,bp);const s=mp(t.firestore,Op),i=ey(s);let o;return o="string"==typeof(e=P(e))||e instanceof Gp?hy(i,"updateDoc",t._key,e,n,r):uy(i,"updateDoc",t._key,e),mw(s,[o.toMutation(t._key,Ru.exists(!0))])}function lw(t){return mw(mp(t.firestore,Op),[new zu(t._key,Ru.none())])}function dw(t,e){const n=mp(t.firestore,Op),r=Sp(t),s=Jy(t.converter,e);return mw(n,[ny(ey(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Ru.exists(!1))]).then((()=>r))}function fw(t,...e){var n,r,s;t=P(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Cp(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Cp(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,u,h;if(t instanceof bp)u=mp(t.firestore,Op),h=tu(t._key.path),c={next:n=>{e[o]&&e[o](pw(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=mp(t,Ip);u=mp(n.firestore,Op),h=n._query;const r=new rw(u);c={next:t=>{e[o]&&e[o](new Ay(u,r,n,t))},error:e[o+1],complete:e[o+2]},Ny(t._query)}return function(t,e,n,r){const s=new Bm(r),i=new Gg(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Ug(await Jm(t),i))),()=>{s.Tc(),t.asyncQueue.enqueueAndForget((async()=>qg(await Jm(t),i)))}}(Rp(u),h,a,c)}function gw(t,e){return ip(Rp(t=mp(t,Op)),Cp(e)?e:{next:e})}function mw(t,e){return function(t,e){const n=new Ko;return t.asyncQueue.enqueueAndForget((async()=>im(await Xm(t),e,n))),n.promise}(Rp(t),e)}function pw(t,e,n){const r=n.docs.get(e._key),s=new rw(t);return new Sy(t,s,e._key,r,new _y(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=ey(t)}get(t){const e=ew(t,this._firestore),n=new Zy(this._firestore);return this._transaction.lookup([e._key]).then((t=>{if(!t||1!==t.length)return Po();const r=t[0];if(r.isFoundDocument())return new Iy(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Iy(this._firestore,n,e._key,null,e.converter);throw Po()}))}set(t,e,n){const r=ew(t,this._firestore),s=Jy(r.converter,e,n),i=ny(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(t,e,n,...r){const s=ew(t,this._firestore);let i;return i="string"==typeof(e=P(e))||e instanceof Gp?hy(this._dataReader,"Transaction.update",s._key,e,n,r):uy(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,i),this}delete(t){const e=ew(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ew(t,this._firestore),n=new rw(this._firestore);return super.get(t).then((t=>new Sy(this._firestore,n,e._key,t._document,new _y(!1,!1),e.converter)))}}function ww(t,e,n){t=mp(t,Op);const r=Object.assign(Object.assign({},Yy),n);return function(t){if(t.maxAttempts<1)throw new jo(qo.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),op(Rp(t),(n=>e(new yw(t,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(){return new ry("deleteField")}function bw(){return new iy("serverTimestamp")}function Iw(...t){return new oy("arrayUnion",t)}function Ew(...t){return new ay("arrayRemove",t)}function Tw(t){return new cy("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Co=t}(le),se(new F("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Op(r,new Qo(t.getProvider("auth-internal")),new Xo(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),pe(Ao,"3.4.13",t),pe(Ao,"3.4.13","esm2017")}();const _w="@firebase/firestore-compat",Sw="0.1.22";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dw(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new jo("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(){if("undefined"===typeof Uint8Array)throw new jo("unimplemented","Uint8Arrays are not available in this environment.")}function xw(){if(!Ga())throw new jo("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Cw{constructor(t){this._delegate=t}static fromBase64String(t){return xw(),new Cw(zp.fromBase64String(t))}static fromUint8Array(t){return Aw(),new Cw(zp.fromUint8Array(t))}toBase64(){return xw(),this._delegate.toBase64()}toUint8Array(){return Aw(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){return kw(t,["next","error","complete"])}function kw(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{enableIndexedDbPersistence(t,e){return Mp(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Vp(t._delegate)}clearIndexedDbPersistence(t){return Fp(t._delegate)}}class Rw{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof ec||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Mo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){vp(this._delegate,t,e,n)}enableNetwork(){return Up(this._delegate)}disableNetwork(){return qp(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,lp("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Bp(this._delegate)}onSnapshotsInSync(t){return gw(this._delegate,t)}get app(){if(!this._appCompat)throw new jo("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new Hw(this,Tp(this._delegate,t))}catch(e){throw Uw(e,"collection()","Firestore.collection()")}}doc(t){try{return new Bw(this,Sp(this._delegate,t))}catch(e){throw Uw(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new Gw(this,_p(this._delegate,t))}catch(e){throw Uw(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return ww(this._delegate,(e=>t(new Vw(this,e))))}batch(){return Rp(this._delegate),new Pw(new tw(this._delegate,(t=>mw(this._delegate,t))))}loadBundle(t){return jp(this._delegate,t)}namedQuery(t){return Kp(this._delegate,t).then((t=>t?new Gw(this,t):null))}}class Lw extends Xy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Cw(new zp(t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return Bw.forKey(e,this.firestore,null)}}function Mw(t){Oo(t)}class Vw{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new Lw(t)}get(t){const e=Ww(t);return this._delegate.get(e).then((t=>new Kw(this._firestore,new Sy(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter))))}set(t,e,n){const r=Ww(t);return n?(Dw("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=Ww(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=Ww(t);return this._delegate.delete(e),this}}class Pw{constructor(t){this._delegate=t}set(t,e,n){const r=Ww(t);return n?(Dw("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const s=Ww(t);return 2===arguments.length?this._delegate.update(s,e):this._delegate.update(s,e,n,...r),this}delete(t){const e=Ww(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class Fw{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new Dy(this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new $w(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=Fw.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let s=r.get(e);return s||(s=new Fw(t,new Lw(t),e),r.set(e,s)),s}}Fw.INSTANCES=new WeakMap;class Bw{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Lw(t)}static forPath(t,e,n){if(t.length%2!==0)throw new jo("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new Bw(e,new bp(e._delegate,n,new ua(t)))}static forKey(t,e,n){return new Bw(e,new bp(e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new Hw(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new Hw(this.firestore,Tp(this._delegate,t))}catch(e){throw Uw(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=P(t),t instanceof bp&&Dp(this._delegate,t)}set(t,e){e=Dw("DocumentReference.set",e);try{return e?uw(this._delegate,t,e):uw(this._delegate,t)}catch(n){throw Uw(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?hw(this._delegate,t):hw(this._delegate,t,e,...n)}catch(r){throw Uw(r,"updateDoc()","DocumentReference.update()")}}delete(){return lw(this._delegate)}onSnapshot(...t){const e=qw(t),n=jw(t,(t=>new Kw(this.firestore,new Sy(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))));return fw(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?sw(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?iw(this._delegate):nw(this._delegate),e.then((t=>new Kw(this.firestore,new Sy(this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter))))}withConverter(t){return new Bw(this.firestore,t?this._delegate.withConverter(Fw.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Uw(t,e,n){return t.message=t.message.replace(e,n),t}function qw(t){for(const e of t)if("object"===typeof e&&!Nw(e))return e;return{}}function jw(t,e){var n,r;let s;return s=Nw(t[0])?t[0]:Nw(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{s.next&&s.next(e(t))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Kw{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new Bw(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Cy(this._delegate,t._delegate)}}class $w extends Kw{data(t){const e=this._delegate.data(t);return Bo(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class Gw{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new Lw(t)}where(t,e,n){try{return new Gw(this.firestore,Oy(this._delegate,Ly(t,e,n)))}catch(r){throw Uw(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new Gw(this.firestore,Oy(this._delegate,Vy(t,e)))}catch(n){throw Uw(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new Gw(this.firestore,Oy(this._delegate,Fy(t)))}catch(e){throw Uw(e,"limit()","Query.limit()")}}limitToLast(t){try{return new Gw(this.firestore,Oy(this._delegate,By(t)))}catch(e){throw Uw(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new Gw(this.firestore,Oy(this._delegate,qy(...t)))}catch(e){throw Uw(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new Gw(this.firestore,Oy(this._delegate,jy(...t)))}catch(e){throw Uw(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new Gw(this.firestore,Oy(this._delegate,$y(...t)))}catch(e){throw Uw(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new Gw(this.firestore,Oy(this._delegate,Gy(...t)))}catch(e){throw Uw(e,"endAt()","Query.endAt()")}}isEqual(t){return Ap(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?aw(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?cw(this._delegate):ow(this._delegate),e.then((t=>new Qw(this.firestore,new Ay(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))))}onSnapshot(...t){const e=qw(t),n=jw(t,(t=>new Qw(this.firestore,new Ay(this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot))));return fw(this._delegate,e,n)}withConverter(t){return new Gw(this.firestore,t?this._delegate.withConverter(Fw.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class zw{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new $w(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Qw{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new Gw(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((t=>new $w(this._firestore,t)))}docChanges(t){return this._delegate.docChanges(t).map((t=>new zw(this._firestore,t)))}forEach(t,e){this._delegate.forEach((n=>{t.call(e,new $w(this._firestore,n))}))}isEqual(t){return Cy(this._delegate,t._delegate)}}class Hw extends Gw{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new Bw(this.firestore,t):null}doc(t){try{return new Bw(this.firestore,void 0===t?Sp(this._delegate):Sp(this._delegate,t))}catch(e){throw Uw(e,"doc()","CollectionReference.doc()")}}add(t){return dw(this._delegate,t).then((t=>new Bw(this.firestore,t)))}isEqual(t){return Dp(this._delegate,t._delegate)}withConverter(t){return new Hw(this.firestore,t?this._delegate.withConverter(Fw.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Ww(t){return mp(t,bp)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(...t){this._delegate=new Gp(...t)}static documentId(){return new Yw(ca.keyField().canonicalString())}isEqual(t){return t=P(t),t instanceof Gp&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(t){this._delegate=t}static serverTimestamp(){const t=bw();return t._methodName="FieldValue.serverTimestamp",new Xw(t)}static delete(){const t=vw();return t._methodName="FieldValue.delete",new Xw(t)}static arrayUnion(...t){const e=Iw(...t);return e._methodName="FieldValue.arrayUnion",new Xw(e)}static arrayRemove(...t){const e=Ew(...t);return e._methodName="FieldValue.arrayRemove",new Xw(e)}static increment(t){const e=Tw(t);return e._methodName="FieldValue.increment",new Xw(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw={Firestore:Rw,GeoPoint:Hp,Timestamp:ra,Blob:Cw,Transaction:Vw,WriteBatch:Pw,DocumentReference:Bw,DocumentSnapshot:Kw,Query:Gw,QueryDocumentSnapshot:$w,QuerySnapshot:Qw,CollectionReference:Hw,FieldPath:Yw,FieldValue:Xw,setLogLevel:Mw,CACHE_SIZE_UNLIMITED:kp};function Zw(t,e){t.INTERNAL.registerComponent(new F("firestore-compat",(t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Jw)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){Zw(t,((t,e)=>new Rw(t,e,new Ow))),t.registerVersion(_w,Sw)}tv(Ge);var ev=n(4870),nv=n(3396);const rv={apiKey:"AIzaSyDuoWbv-liVwte7sfZMVNz-mmz-PmflNrE",authDomain:"spidertech-61552.firebaseapp.com",projectId:"spidertech-61552",storageBucket:"spidertech-61552.appspot.com",messagingSenderId:"910942759811",appId:"1:910942759811:web:80bfdf29eec637ad2e24b6",measurementId:"G-FS6GXF3SH2"},sv=Ge.initializeApp(rv),iv=sv.firestore(),ov=iv.collection("inquiry"),av=t=>ov.add(t),cv=()=>{const t=(0,ev.iH)([]),e=ov.onSnapshot((e=>{t.value=e.docs.map((t=>({id:t.id,...t.data()})))}));return(0,nv.Ah)(e),t}}}]);
//# sourceMappingURL=137.2d59d53d.js.map