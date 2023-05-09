"use strict";(self["webpackChunkspidertech_website"]=self["webpackChunkspidertech_website"]||[]).push([[137],{6137:function(e,t,n){n.d(t,{r4:function(){return av},lp:function(){return cv}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return D},SDK_VERSION:function(){return lt},_DEFAULT_ENTRY_NAME:function(){return Je},_addComponent:function(){return nt},_addOrOverwriteComponent:function(){return rt},_apps:function(){return et},_clearComponents:function(){return at},_components:function(){return tt},_getProvider:function(){return it},_registerComponent:function(){return st},_removeServiceInstance:function(){return ot},deleteApp:function(){return gt},getApp:function(){return ft},getApps:function(){return mt},initializeApp:function(){return dt},onLog:function(){return yt},registerVersion:function(){return pt},setLogLevel:function(){return wt}});n(1703),n(2801),n(6699);
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
const s=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,h=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(s(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,h=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==h)throw Error();const l=t<<2|o>>4;if(r.push(l),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==h){const e=c<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},a=function(e){const t=s(e);return o.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")};
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
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=u(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
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
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
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
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function m(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function g(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function p(){return"object"===typeof self&&self.self===self}function y(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function w(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return f().indexOf("Electron/")>=0}function b(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return f().indexOf("MSAppHost/")>=0}function E(){return!g()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}function _(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const S="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=S,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?A(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new D(r,o,n);return a}}function A(e,t){return e.replace(C,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
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
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function k(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(O(n)&&O(i)){if(!k(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function O(e){return null!==e&&"object"===typeof e}
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
 */function R(e,t){const n=new L(e,t);return n.subscribe.bind(n)}class L{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=M(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function M(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
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
function P(e){return e&&e._delegate?e._delegate:e}class F{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class U{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new l;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(j(e))try{this.getOrInitializeService({instanceIdentifier:B})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=B){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=B){return this.instances.has(e)}getOptions(e=B){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(up){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:q(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(up){}return n||null}normalizeInstanceIdentifier(e=B){return this.component?this.component.multipleInstances?e:B:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function q(e){return e===B?void 0:e}function j(e){return"EAGER"===e.instantiationMode}
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
 */class K{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new U(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
const $=[];var G;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(G||(G={}));const z={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Q=G.INFO,H={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},W=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=H[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class X{constructor(e){this.name=e,this._logLevel=Q,this._logHandler=W,this._userLogHandler=null,$.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?z[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}function Y(e){$.forEach((t=>{t.setLogLevel(e)}))}function J(e,t){for(const n of $){let r=null;t&&t.level&&(r=z[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const i=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:G[n].toLowerCase(),message:i,args:s,type:t.name})}}}const Z=(e,t)=>t.some((t=>e instanceof t));let ee,te;function ne(){return ee||(ee=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function re(){return te||(te=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const se=new WeakMap,ie=new WeakMap,oe=new WeakMap,ae=new WeakMap,ce=new WeakMap;function ue(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(ge(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&se.set(t,e)})).catch((()=>{})),ce.set(t,e),t}function he(e){if(ie.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));ie.set(e,t)}let le={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ie.get(e);if("objectStoreNames"===t)return e.objectStoreNames||oe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function de(e){le=e(le)}function fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?re().includes(e)?function(...t){return e.apply(pe(this),t),ge(se.get(this))}:function(...t){return ge(e.apply(pe(this),t))}:function(t,...n){const r=e.call(pe(this),t,...n);return oe.set(r,t.sort?t.sort():[t]),ge(r)}}function me(e){return"function"===typeof e?fe(e):(e instanceof IDBTransaction&&he(e),Z(e,ne())?new Proxy(e,le):e)}function ge(e){if(e instanceof IDBRequest)return ue(e);if(ae.has(e))return ae.get(e);const t=me(e);return t!==e&&(ae.set(e,t),ce.set(t,e)),t}const pe=e=>ce.get(e);function ye(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ge(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ge(o.result),e.oldVersion,e.newVersion,ge(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const we=["get","getKey","getAll","getAllKeys","count"],ve=["put","add","delete","clear"],be=new Map;function Ie(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(be.get(t))return be.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ve.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!we.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return be.set(t,i),i}de((e=>({...e,get:(t,n,r)=>Ie(t,n)||e.get(t,n,r),has:(t,n)=>!!Ie(t,n)||e.has(t,n)})));
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
class Ee{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Te(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Te(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const _e="@firebase/app",Se="0.7.29",De=new X("@firebase/app"),xe="@firebase/app-compat",Ae="@firebase/analytics-compat",Ce="@firebase/analytics",Ne="@firebase/app-check-compat",ke="@firebase/app-check",Oe="@firebase/auth",Re="@firebase/auth-compat",Le="@firebase/database",Me="@firebase/database-compat",Ve="@firebase/functions",Pe="@firebase/functions-compat",Fe="@firebase/installations",Be="@firebase/installations-compat",Ue="@firebase/messaging",qe="@firebase/messaging-compat",je="@firebase/performance",Ke="@firebase/performance-compat",$e="@firebase/remote-config",Ge="@firebase/remote-config-compat",ze="@firebase/storage",Qe="@firebase/storage-compat",He="@firebase/firestore",We="@firebase/firestore-compat",Xe="firebase",Ye="9.9.1",Je="[DEFAULT]",Ze={[_e]:"fire-core",[xe]:"fire-core-compat",[Ce]:"fire-analytics",[Ae]:"fire-analytics-compat",[ke]:"fire-app-check",[Ne]:"fire-app-check-compat",[Oe]:"fire-auth",[Re]:"fire-auth-compat",[Le]:"fire-rtdb",[Me]:"fire-rtdb-compat",[Ve]:"fire-fn",[Pe]:"fire-fn-compat",[Fe]:"fire-iid",[Be]:"fire-iid-compat",[Ue]:"fire-fcm",[qe]:"fire-fcm-compat",[je]:"fire-perf",[Ke]:"fire-perf-compat",[$e]:"fire-rc",[Ge]:"fire-rc-compat",[ze]:"fire-gcs",[Qe]:"fire-gcs-compat",[He]:"fire-fst",[We]:"fire-fst-compat","fire-js":"fire-js",[Xe]:"fire-js-all"},et=new Map,tt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){De.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rt(e,t){e.container.addOrOverwriteComponent(t)}function st(e){const t=e.name;if(tt.has(t))return De.debug(`There were multiple attempts to register component ${t}.`),!1;tt.set(t,e);for(const n of et.values())nt(n,e);return!0}function it(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function ot(e,t,n=Je){it(e,t).clearInstance(n)}function at(){tt.clear()}
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
 */const ct={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ut=new x("app","Firebase",ct);
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
class ht{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new F("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}
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
 */const lt=Ye;function dt(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Je,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw ut.create("bad-app-name",{appName:String(r)});const s=et.get(r);if(s){if(k(e,s.options)&&k(n,s.config))return s;throw ut.create("duplicate-app",{appName:r})}const i=new K(r);for(const a of tt.values())i.addComponent(a);const o=new ht(e,n,i);return et.set(r,o),o}function ft(e=Je){const t=et.get(e);if(!t)throw ut.create("no-app",{appName:e});return t}function mt(){return Array.from(et.values())}async function gt(e){const t=e.name;et.has(t)&&(et.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function pt(e,t,n){var r;let s=null!==(r=Ze[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void De.warn(e.join(" "))}st(new F(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function yt(e,t){if(null!==e&&"function"!==typeof e)throw ut.create("invalid-log-argument");J(e,t)}function wt(e){Y(e)}
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
 */const vt="firebase-heartbeat-database",bt=1,It="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=ye(vt,bt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(It)}}}).catch((e=>{throw ut.create("storage-open",{originalErrorMessage:e.message})}))),Et}async function _t(e){var t;try{const t=await Tt();return t.transaction(It).objectStore(It).get(Dt(e))}catch(n){throw ut.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function St(e,t){var n;try{const n=await Tt(),r=n.transaction(It,"readwrite"),s=r.objectStore(It);return await s.put(t,Dt(e)),r.done}catch(r){throw ut.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function Dt(e){return`${e.name}!${e.options.appId}`}
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
 */const xt=1024,At=2592e6;class Ct{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ot(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Nt(),{heartbeatsToSend:t,unsentEntries:n}=kt(this._heartbeatsCache.heartbeats),r=c(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nt(){const e=new Date;return e.toISOString().substring(0,10)}function kt(e,t=xt){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Rt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ot{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!T()&&_().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await _t(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Rt(e){return c(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Lt(e){st(new F("platform-logger",(e=>new Ee(e)),"PRIVATE")),st(new F("heartbeat",(e=>new Ct(e)),"PRIVATE")),pt(_e,Se,e),pt(_e,Se,"esm2017"),pt("fire-js","")}Lt("");
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
class Mt{constructor(e,t){this._delegate=e,this.firebase=t,nt(e,new F("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),gt(this._delegate))))}_getService(e,t=Je){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Je){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){nt(this._delegate,e)}_addOrOverwriteComponent(e){rt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const Vt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Pt=new x("app-compat","Firebase",Vt);
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
function Ft(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:pt,setLogLevel:wt,onLog:yt,apps:null,SDK_VERSION:lt,INTERNAL:{registerComponent:c,removeApp:s,useAsService:h,modularAPIs:r}};function s(e){delete t[e]}function i(e){if(e=e||Je,!N(t,e))throw Pt.create("no-app",{appName:e});return t[e]}function o(r,s={}){const i=dt(r,s);if(N(t,i.name))return t[i.name];const o=new e(i,n);return t[i.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,s=r.replace("-compat","");if(st(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!==typeof e[s])throw Pt.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&u(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),i["App"]=e,n}
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
 */function Bt(){const e=Ft(Mt);function t(t){u(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Bt,extendNamespace:t,createSubscribe:R,ErrorFactory:x,deepExtend:u}),e}const Ut=Bt(),qt=new X("@firebase/app-compat"),jt="@firebase/app-compat",Kt="0.1.30";
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
function $t(e){pt(jt,Kt,e)}
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
 */if(p()&&void 0!==self.firebase){qt.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&qt.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Gt=Ut;$t();var zt="firebase",Qt="9.9.1";
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
Gt.registerVersion(zt,Qt,"app-compat");n(8675),n(3462),n(7380),n(1118),n(2262),n(4506);var Ht,Wt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Xt={},Yt=Yt||{},Jt=Wt||self;function Zt(){}function en(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function tn(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function nn(e){return Object.prototype.hasOwnProperty.call(e,rn)&&e[rn]||(e[rn]=++sn)}var rn="closure_uid_"+(1e9*Math.random()>>>0),sn=0;function on(e,t,n){return e.call.apply(e.bind,arguments)}function an(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function cn(e,t,n){return cn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?on:an,cn.apply(null,arguments)}function un(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function hn(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function ln(){this.s=this.s,this.o=this.o}var dn=0,fn={};ln.prototype.s=!1,ln.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=dn)){var e=nn(this);delete fn[e]}},ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mn=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},gn=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"===typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function pn(e){e:{var t=Ri;const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function yn(e){return Array.prototype.concat.apply([],arguments)}function wn(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function vn(e){return/^[\s\xa0]*$/.test(e)}var bn,In=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function En(e,t){return-1!=e.indexOf(t)}function Tn(e,t){return e<t?-1:e>t?1:0}e:{var _n=Jt.navigator;if(_n){var Sn=_n.userAgent;if(Sn){bn=Sn;break e}}bn=""}function Dn(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function xn(e){const t={};for(const n in e)t[n]=e[n];return t}var An="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cn(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<An.length;t++)n=An[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Nn(e){return Nn[" "](e),e}function kn(e){var t=$n;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}Nn[" "]=Zt;var On,Rn=En(bn,"Opera"),Ln=En(bn,"Trident")||En(bn,"MSIE"),Mn=En(bn,"Edge"),Vn=Mn||Ln,Pn=En(bn,"Gecko")&&!(En(bn.toLowerCase(),"webkit")&&!En(bn,"Edge"))&&!(En(bn,"Trident")||En(bn,"MSIE"))&&!En(bn,"Edge"),Fn=En(bn.toLowerCase(),"webkit")&&!En(bn,"Edge");function Bn(){var e=Jt.document;return e?e.documentMode:void 0}e:{var Un="",qn=function(){var e=bn;return Pn?/rv:([^\);]+)(\)|;)/.exec(e):Mn?/Edge\/([\d\.]+)/.exec(e):Ln?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Fn?/WebKit\/(\S+)/.exec(e):Rn?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(qn&&(Un=qn?qn[1]:""),Ln){var jn=Bn();if(null!=jn&&jn>parseFloat(Un)){On=String(jn);break e}}On=Un}var Kn,$n={};function Gn(){return kn((function(){let e=0;const t=In(String(On)).split("."),n=In("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=Tn(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Tn(0==s[2].length,0==i[2].length)||Tn(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(Jt.document&&Ln){var zn=Bn();Kn=zn||(parseInt(On,10)||void 0)}else Kn=void 0;var Qn=Kn,Hn=function(){if(!Jt.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Jt.addEventListener("test",Zt,t),Jt.removeEventListener("test",Zt,t)}catch(n){}return e}();function Wn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Xn(e,t){if(Wn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Pn){e:{try{Nn(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Yn[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Xn.Z.h.call(this)}}Wn.prototype.h=function(){this.defaultPrevented=!0},hn(Xn,Wn);var Yn={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Jn="closure_listenable_"+(1e6*Math.random()|0),Zn=0;function er(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++Zn,this.ca=this.fa=!1}function tr(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function nr(e){this.src=e,this.g={},this.h=0}function rr(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=mn(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(tr(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function sr(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}nr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=sr(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new er(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var ir="closure_lm_"+(1e6*Math.random()|0),or={};function ar(e,t,n,r,s){if(r&&r.once)return hr(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ar(e,t[i],n,r,s);return null}return n=yr(n),e&&e[Jn]?e.N(t,n,tn(r)?!!r.capture:!!r,s):cr(e,t,n,!1,r,s)}function cr(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=tn(s)?!!s.capture:!!s,a=gr(e);if(a||(e[ir]=a=new nr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=ur(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Hn||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(fr(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ur(){function e(n){return t.call(e.src,e.listener,n)}var t=mr;return e}function hr(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)hr(e,t[i],n,r,s);return null}return n=yr(n),e&&e[Jn]?e.O(t,n,tn(r)?!!r.capture:!!r,s):cr(e,t,n,!0,r,s)}function lr(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)lr(e,t[i],n,r,s);else r=tn(r)?!!r.capture:!!r,n=yr(n),e&&e[Jn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=sr(i,n,r,s),-1<n&&(tr(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=gr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=sr(t,n,r,s)),(n=-1<e?t[e]:null)&&dr(n))}function dr(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Jn])rr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(fr(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=gr(t))?(rr(n,e),0==n.h&&(n.src=null,t[ir]=null)):tr(e)}}}function fr(e){return e in or?or[e]:or[e]="on"+e}function mr(e,t){if(e.ca)e=!0;else{t=new Xn(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&dr(e),e=n.call(r,t)}return e}function gr(e){return e=e[ir],e instanceof nr?e:null}var pr="__closure_events_fn_"+(1e9*Math.random()>>>0);function yr(e){return"function"===typeof e?e:(e[pr]||(e[pr]=function(t){return e.handleEvent(t)}),e[pr])}function wr(){ln.call(this),this.i=new nr(this),this.P=this,this.I=null}function vr(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new Wn(t,e);else if(t instanceof Wn)t.target=t.target||e;else{var s=t;t=new Wn(r,e),Cn(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=br(o,r,!0,t)&&s}if(o=t.g=e,s=br(o,r,!0,t)&&s,s=br(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=br(o,r,!1,t)&&s}function br(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&rr(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}hn(wr,ln),wr.prototype[Jn]=!0,wr.prototype.removeEventListener=function(e,t,n,r){lr(this,e,t,n,r)},wr.prototype.M=function(){if(wr.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)tr(n[r]);delete t.g[e],t.h--}}this.I=null},wr.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},wr.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ir=Jt.JSON.stringify;function Er(){var e=kr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Tr{constructor(){this.h=this.g=null}add(e,t){const n=Sr.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var _r,Sr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Dr),(e=>e.reset()));class Dr{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function xr(e){Jt.setTimeout((()=>{throw e}),0)}function Ar(e,t){_r||Cr(),Nr||(_r(),Nr=!0),kr.add(e,t)}function Cr(){var e=Jt.Promise.resolve(void 0);_r=function(){e.then(Or)}}var Nr=!1,kr=new Tr;function Or(){for(var e;e=Er();){try{e.h.call(e.g)}catch(n){xr(n)}var t=Sr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Nr=!1}function Rr(e,t){wr.call(this),this.h=e||1,this.g=t||Jt,this.j=cn(this.kb,this),this.l=Date.now()}function Lr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Mr(e,t,n){if("function"===typeof e)n&&(e=cn(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=cn(e.handleEvent,e)}return 2147483647<Number(t)?-1:Jt.setTimeout(e,t||0)}function Vr(e){e.g=Mr((()=>{e.g=null,e.i&&(e.i=!1,Vr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}hn(Rr,wr),Ht=Rr.prototype,Ht.da=!1,Ht.S=null,Ht.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),vr(this,"tick"),this.da&&(Lr(this),this.start()))}},Ht.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ht.M=function(){Rr.Z.M.call(this),Lr(this),delete this.g};class Pr extends ln{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Vr(this)}M(){super.M(),this.g&&(Jt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fr(e){ln.call(this),this.h=e,this.g={}}hn(Fr,ln);var Br=[];function Ur(e,t,n,r){Array.isArray(n)||(n&&(Br[0]=n.toString()),n=Br);for(var s=0;s<n.length;s++){var i=ar(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function qr(e){Dn(e.g,(function(e,t){this.g.hasOwnProperty(t)&&dr(e)}),e),e.g={}}function jr(){this.g=!0}function Kr(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function $r(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function Gr(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Qr(e,n)+(r?" "+r:"")}))}function zr(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Qr(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ir(n)}catch(a){return t}}Fr.prototype.M=function(){Fr.Z.M.call(this),qr(this)},Fr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},jr.prototype.Aa=function(){this.g=!1},jr.prototype.info=function(){};var Hr={},Wr=null;function Xr(){return Wr=Wr||new wr}function Yr(e){Wn.call(this,Hr.Ma,e)}function Jr(e){const t=Xr();vr(t,new Yr(t,e))}function Zr(e,t){Wn.call(this,Hr.STAT_EVENT,e),this.stat=t}function es(e){const t=Xr();vr(t,new Zr(t,e))}function ts(e,t){Wn.call(this,Hr.Na,e),this.size=t}function ns(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Jt.setTimeout((function(){e()}),t)}Hr.Ma="serverreachability",hn(Yr,Wn),Hr.STAT_EVENT="statevent",hn(Zr,Wn),Hr.Na="timingevent",hn(ts,Wn);var rs={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ss={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function is(){}function os(e){return e.h||(e.h=e.i())}function as(){}is.prototype.h=null;var cs,us={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function hs(){Wn.call(this,"d")}function ls(){Wn.call(this,"c")}function ds(){}function fs(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Fr(this),this.P=gs,e=Vn?125:void 0,this.W=new Rr(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ms}function ms(){this.i=null,this.g="",this.h=!1}hn(hs,Wn),hn(ls,Wn),hn(ds,is),ds.prototype.g=function(){return new XMLHttpRequest},ds.prototype.i=function(){return{}},cs=new ds;var gs=45e3,ps={},ys={};function ws(e,t,n){e.K=1,e.v=Ks(Ps(t)),e.s=n,e.U=!0,vs(e,null)}function vs(e,t){e.F=Date.now(),Ts(e),e.A=Ps(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),si(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ms,e.g=ho(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Pr(cn(e.Ia,e,e.g),e.O)),Ur(e.V,e.g,"readystatechange",e.gb),t=e.H?xn(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Jr(1),Kr(e.j,e.u,e.A,e.m,e.X,e.s)}function bs(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Is(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Es(e,n),r==ys){4==t&&(e.o=4,es(14),s=!1),Gr(e.j,e.m,null,"[Incomplete Response]");break}if(r==ps){e.o=4,es(15),Gr(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Gr(e.j,e.m,r,null),As(e,r)}bs(e)&&r!=ys&&r!=ps&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,es(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),no(t),t.L=!0,es(11))):(Gr(e.j,e.m,n,"[Invalid Chunked Response]"),xs(e),Ds(e))}function Es(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?ys:(n=Number(t.substring(n,r)),isNaN(n)?ps:(r+=1,r+n>t.length?ys:(t=t.substr(r,n),e.C=r+n,t)))}function Ts(e){e.Y=Date.now()+e.P,_s(e,e.P)}function _s(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ns(cn(e.eb,e),t)}function Ss(e){e.B&&(Jt.clearTimeout(e.B),e.B=null)}function Ds(e){0==e.l.G||e.I||io(e.l,e)}function xs(e){Ss(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Lr(e.W),qr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function As(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||di(n.i,e)))if(n.I=e.N,!e.J&&di(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;so(n),zi(n)}to(n),es(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=ns(cn(n.ab,n),6e3));if(1>=li(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else ao(n,11)}else if((e.J||n.g==e)&&so(n),!vn(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(En(e,"spdy")||En(e,"quic")||En(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(fi(i,i.h),i.h=null))}if(r.D){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,js(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=uo(r,r.H?r.la:null,r.W),o.J){mi(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ss(a),Ts(a)),r.g=o}else eo(r);0<n.l.length&&Wi(n)}else"stop"!=u[0]&&"close"!=u[0]||ao(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ao(n,7):Gi(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Jr(4)}catch(u){}}function Cs(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(en(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ns(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(en(e)||"string"===typeof e)gn(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(en(e)||"string"===typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=Cs(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function ks(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof ks)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Os(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Rs(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],Rs(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Rs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Ht=fs.prototype,Ht.setTimeout=function(e){this.P=e},Ht.gb=function(e){e=e.target;const t=this.L;t&&3==Bi(e)?t.l():this.Ia(e)},Ht.Ia=function(e){try{if(e==this.g)e:{const h=Bi(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>h)&&(3!=h||Vn||this.g&&(this.h.h||this.g.ga()||Ui(this.g)))){this.I||4!=h||7==t||Jr(8==t||0>=l?3:2),Ss(this);var n=this.g.ba();this.N=n;t:if(bs(this)){var r=Ui(this.g);e="";var s=r.length,i=4==Bi(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xs(this),Ds(this);var o="";break t}this.h.i=new Jt.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,$r(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vn(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,es(12),xs(this),Ds(this);break e}Gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,As(this,n)}this.U?(Is(this,h,o),Vn&&this.i&&3==h&&(Ur(this.V,this.W,"tick",this.fb),this.W.start())):(Gr(this.j,this.m,o,null),As(this,o)),4==h&&xs(this),this.i&&!this.I&&(4==h?io(this.l,this):(this.i=!1,Ts(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,es(12)):(this.o=0,es(13)),xs(this),Ds(this)}}}catch(h){}},Ht.fb=function(){if(this.g){var e=Bi(this.g),t=this.g.ga();this.C<t.length&&(Ss(this),Is(this,e,t),this.i&&4!=e&&Ts(this))}},Ht.cancel=function(){this.I=!0,xs(this)},Ht.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(zr(this.j,this.A),2!=this.K&&(Jr(3),es(17)),xs(this),this.o=2,Ds(this)):_s(this,this.Y-e)},Ht=ks.prototype,Ht.R=function(){Os(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Ht.T=function(){return Os(this),this.g.concat()},Ht.get=function(e,t){return Rs(this.h,e)?this.h[e]:t},Ht.set=function(e,t){Rs(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Ht.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Ls=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ms(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Vs(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Vs){this.g=void 0!==t?t:e.g,Fs(this,e.j),this.s=e.s,Bs(this,e.i),Us(this,e.m),this.l=e.l,t=e.h;var n=new ei;n.i=t.i,t.g&&(n.g=new ks(t.g),n.h=t.h),qs(this,n),this.o=e.o}else e&&(n=String(e).match(Ls))?(this.g=!!t,Fs(this,n[1]||"",!0),this.s=zs(n[2]||""),Bs(this,n[3]||"",!0),Us(this,n[4]),this.l=zs(n[5]||"",!0),qs(this,n[6]||"",!0),this.o=zs(n[7]||"")):(this.g=!!t,this.h=new ei(null,this.g))}function Ps(e){return new Vs(e)}function Fs(e,t,n){e.j=n?zs(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bs(e,t,n){e.i=n?zs(t,!0):t}function Us(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function qs(e,t,n){t instanceof ei?(e.h=t,oi(e.h,e.g)):(n||(t=Qs(t,Js)),e.h=new ei(t,e.g))}function js(e,t,n){e.h.set(t,n)}function Ks(e){return js(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function $s(e){return e instanceof Vs?Ps(e):new Vs(e,void 0)}function Gs(e,t,n,r){var s=new Vs(null,void 0);return e&&Fs(s,e),t&&Bs(s,t),n&&Us(s,n),r&&(s.l=r),s}function zs(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qs(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Hs),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Hs(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Vs.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qs(t,Ws,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qs(t,Ws,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qs(n,"/"==n.charAt(0)?Ys:Xs,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qs(n,Zs)),e.join("")};var Ws=/[#\/\?@]/g,Xs=/[#\?:]/g,Ys=/[#\?]/g,Js=/[#\?@]/g,Zs=/#/g;function ei(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ti(e){e.g||(e.g=new ks,e.h=0,e.i&&Ms(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ni(e,t){ti(e),t=ii(e,t),Rs(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Rs(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Os(e)))}function ri(e,t){return ti(e),t=ii(e,t),Rs(e.g.h,t)}function si(e,t,n){ni(e,t),0<n.length&&(e.i=null,e.g.set(ii(e,t),wn(n)),e.h+=n.length)}function ii(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function oi(e,t){t&&!e.j&&(ti(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ni(this,t),si(this,n,e))}),e)),e.j=t}Ht=ei.prototype,Ht.add=function(e,t){ti(this),this.i=null,e=ii(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Ht.forEach=function(e,t){ti(this),this.g.forEach((function(n,r){gn(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Ht.T=function(){ti(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},Ht.R=function(e){ti(this);var t=[];if("string"===typeof e)ri(this,e)&&(t=yn(t,this.g.get(ii(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=yn(t,e[n])}return t},Ht.set=function(e,t){return ti(this),this.i=null,e=ii(this,e),ri(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Ht.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},Ht.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};var ai=class{constructor(e,t){this.h=e,this.g=t}};function ci(e){this.l=e||ui,Jt.PerformanceNavigationTiming?(e=Jt.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Jt.g&&Jt.g.Ea&&Jt.g.Ea()&&Jt.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ui=10;function hi(e){return!!e.h||!!e.g&&e.g.size>=e.j}function li(e){return e.h?1:e.g?e.g.size:0}function di(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fi(e,t){e.g?e.g.add(t):e.h=t}function mi(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gi(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return wn(e.i)}function pi(){}function yi(){this.g=new pi}function wi(e,t,n){const r=n||"";try{Ns(e,(function(e,n){let s=e;tn(e)&&(s=Ir(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function vi(e,t){const n=new jr;if(Jt.Image){const r=new Image;r.onload=un(bi,n,r,"TestLoadImage: loaded",!0,t),r.onerror=un(bi,n,r,"TestLoadImage: error",!1,t),r.onabort=un(bi,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=un(bi,n,r,"TestLoadImage: timeout",!1,t),Jt.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function bi(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Ii(e){this.l=e.$b||null,this.j=e.ib||!1}function Ei(e,t){wr.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ti,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ci.prototype.cancel=function(){if(this.i=gi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},pi.prototype.stringify=function(e){return Jt.JSON.stringify(e,void 0)},pi.prototype.parse=function(e){return Jt.JSON.parse(e,void 0)},hn(Ii,is),Ii.prototype.g=function(){return new Ei(this.l,this.j)},Ii.prototype.i=function(e){return function(){return e}}({}),hn(Ei,wr);var Ti=0;function _i(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Si(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Di(e)}function Di(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Ht=Ei.prototype,Ht.open=function(e,t){if(this.readyState!=Ti)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Di(this)},Ht.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Jt).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Ht.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Si(this)),this.readyState=Ti},Ht.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Jt.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_i(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Ht.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Si(this):Di(this),3==this.readyState&&_i(this)}},Ht.Ua=function(e){this.g&&(this.response=this.responseText=e,Si(this))},Ht.Ta=function(e){this.g&&(this.response=e,Si(this))},Ht.ha=function(){this.g&&Si(this)},Ht.setRequestHeader=function(e,t){this.v.append(e,t)},Ht.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Ht.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var xi=Jt.JSON.parse;function Ai(e){wr.call(this),this.headers=new ks,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ci,this.K=this.L=!1}hn(Ai,wr);var Ci="",Ni=/^https?$/i,ki=["POST","PUT"];function Oi(e){return Ln&&Gn()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Ri(e){return"content-type"==e.toLowerCase()}function Li(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mi(e),Pi(e)}function Mi(e){e.D||(e.D=!0,vr(e,"complete"),vr(e,"error"))}function Vi(e){if(e.h&&"undefined"!=typeof Yt&&(!e.C[1]||4!=Bi(e)||2!=e.ba()))if(e.v&&4==Bi(e))Mr(e.Fa,0,e);else if(vr(e,"readystatechange"),4==Bi(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Ls)[1]||null;if(!s&&Jt.self&&Jt.self.location){var i=Jt.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ni.test(s?s.toLowerCase():"")}n=r}if(n)vr(e,"complete"),vr(e,"success");else{e.m=6;try{var o=2<Bi(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Mi(e)}}finally{Pi(e)}}}function Pi(e,t){if(e.g){Fi(e);const r=e.g,s=e.C[0]?Zt:null;e.g=null,e.C=null,t||vr(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Fi(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Jt.clearTimeout(e.A),e.A=null)}function Bi(e){return e.g?e.g.readyState:0}function Ui(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Ci:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function qi(e){let t="";return Dn(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function ji(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qi(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):js(e,t,n))}function Ki(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function $i(e){this.za=0,this.l=[],this.h=new jr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ki("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ki("baseRetryDelayMs",5e3,e),this.$a=Ki("retryDelaySeedMs",1e4,e),this.Ya=Ki("forwardChannelMaxRetries",2,e),this.ra=Ki("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ci(e&&e.concurrentRequestLimit),this.Ca=new yi,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Gi(e){if(Qi(e),3==e.G){var t=e.V++,n=Ps(e.F);js(n,"SID",e.J),js(n,"RID",t),js(n,"TYPE","terminate"),Ji(e,n),t=new fs(e,e.h,t,void 0),t.K=2,t.v=Ks(Ps(n)),n=!1,Jt.navigator&&Jt.navigator.sendBeacon&&(n=Jt.navigator.sendBeacon(t.v.toString(),"")),!n&&Jt.Image&&((new Image).src=t.v,n=!0),n||(t.g=ho(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ts(t)}co(e)}function zi(e){e.g&&(no(e),e.g.cancel(),e.g=null)}function Qi(e){zi(e),e.u&&(Jt.clearTimeout(e.u),e.u=null),so(e),e.i.cancel(),e.m&&("number"===typeof e.m&&Jt.clearTimeout(e.m),e.m=null)}function Hi(e,t){e.l.push(new ai(e.Za++,t)),3==e.G&&Wi(e)}function Wi(e){hi(e.i)||e.m||(e.m=!0,Ar(e.Ha,e),e.C=0)}function Xi(e,t){return!(li(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=ns(cn(e.Ha,e,t),oo(e,e.C)),e.C++,!0))}function Yi(e,t){var n;n=t?t.m:e.V++;const r=Ps(e.F);js(r,"SID",e.J),js(r,"RID",n),js(r,"AID",e.U),Ji(e,r),e.o&&e.s&&ji(r,e.o,e.s),n=new fs(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Zi(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),fi(e.i,n),ws(n,r,t)}function Ji(e,t){e.j&&Ns({},(function(e,n){js(t,n,e)}))}function Zi(e,t,n){n=Math.min(e.l.length,n);var r=e.j?cn(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{wi(a,e,"req"+n+"_")}catch(qo){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function eo(e){e.g||e.u||(e.Y=1,Ar(e.Ga,e),e.A=0)}function to(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=ns(cn(e.Ga,e),oo(e,e.A)),e.A++,!0)}function no(e){null!=e.B&&(Jt.clearTimeout(e.B),e.B=null)}function ro(e){e.g=new fs(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ps(e.oa);js(t,"RID","rpc"),js(t,"SID",e.J),js(t,"CI",e.N?"0":"1"),js(t,"AID",e.U),Ji(e,t),js(t,"TYPE","xmlhttp"),e.o&&e.s&&ji(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ks(Ps(t)),n.s=null,n.U=!0,vs(n,e)}function so(e){null!=e.v&&(Jt.clearTimeout(e.v),e.v=null)}function io(e,t){var n=null;if(e.g==t){so(e),no(e),e.g=null;var r=2}else{if(!di(e.i,t))return;n=t.D,mi(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=Xr(),vr(r,new ts(r,n,t,s)),Wi(e)}else eo(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==r&&Xi(e,t)||2==r&&to(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:ao(e,5);break;case 4:ao(e,10);break;case 3:ao(e,6);break;default:ao(e,2)}}function oo(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function ao(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=cn(e.jb,e);n||(n=new Vs("//www.google.com/images/cleardot.gif"),Jt.location&&"http"==Jt.location.protocol||Fs(n,"https"),Ks(n)),vi(n.toString(),r)}else es(2);e.G=0,e.j&&e.j.va(t),co(e),Qi(e)}function co(e){e.G=0,e.I=-1,e.j&&(0==gi(e.i).length&&0==e.l.length||(e.i.i.length=0,wn(e.l),e.l.length=0),e.j.ua())}function uo(e,t,n){let r=$s(n);if(""!=r.i)t&&Bs(r,t+"."+r.i),Us(r,r.m);else{const e=Jt.location;r=Gs(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Dn(e.aa,(function(e,t){js(r,t,e)})),t=e.D,n=e.sa,t&&n&&js(r,t,n),js(r,"VER",e.ma),Ji(e,r),r}function ho(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Ai(new Ii({ib:!0})):new Ai(e.qa),t.L=e.H,t}function lo(){}function fo(){if(Ln&&!(10<=Number(Qn)))throw Error("Environmental error: no available transport.")}function mo(e,t){wr.call(this),this.g=new $i(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!vn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!vn(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yo(this)}function go(e){hs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function po(){ls.call(this),this.status=1}function yo(e){this.g=e}Ht=Ai.prototype,Ht.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cs.g(),this.C=this.u?os(this.u):os(cs),this.g.onreadystatechange=cn(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Li(this,i)}e=n||"";const s=new ks(this.headers);r&&Ns(r,(function(e,t){s.set(t,e)})),r=pn(s.T()),n=Jt.FormData&&e instanceof Jt.FormData,!(0<=mn(ki,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Fi(this),0<this.B&&((this.K=Oi(this.g))?(this.g.timeout=this.B,this.g.ontimeout=cn(this.pa,this)):this.A=Mr(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Li(this,i)}},Ht.pa=function(){"undefined"!=typeof Yt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vr(this,"timeout"),this.abort(8))},Ht.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,vr(this,"complete"),vr(this,"abort"),Pi(this))},Ht.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pi(this,!0)),Ai.Z.M.call(this)},Ht.Fa=function(){this.s||(this.F||this.v||this.l?Vi(this):this.cb())},Ht.cb=function(){Vi(this)},Ht.ba=function(){try{return 2<Bi(this)?this.g.status:-1}catch(e){return-1}},Ht.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Ht.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),xi(t)}},Ht.Da=function(){return this.m},Ht.La=function(){return"string"===typeof this.j?this.j:String(this.j)},Ht=$i.prototype,Ht.ma=8,Ht.G=1,Ht.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Ht.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new fs(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=xn(i),Cn(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zi(this,s,t),n=Ps(this.F),js(n,"RID",e),js(n,"CVER",22),this.D&&js(n,"X-HTTP-Session-Id",this.D),Ji(this,n),this.o&&i&&ji(n,this.o,i),fi(this.i,s),this.Ra&&js(n,"TYPE","init"),this.ja?(js(n,"$req",t),js(n,"SID","null"),s.$=!0,ws(s,n,null)):ws(s,n,t),this.G=2}}else 3==this.G&&(e?Yi(this,e):0==this.l.length||hi(this.i)||Yi(this))},Ht.Ga=function(){if(this.u=null,ro(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=ns(cn(this.bb,this),e)}},Ht.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,es(10),zi(this),ro(this))},Ht.ab=function(){null!=this.v&&(this.v=null,zi(this),to(this),es(19))},Ht.jb=function(e){e?(this.h.info("Successfully pinged google.com"),es(2)):(this.h.info("Failed to ping google.com"),es(1))},Ht=lo.prototype,Ht.xa=function(){},Ht.wa=function(){},Ht.va=function(){},Ht.ua=function(){},Ht.Oa=function(){},fo.prototype.g=function(e,t){return new mo(e,t)},hn(mo,wr),mo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ar(cn(e.hb,e,t))),es(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=uo(e,null,e.W),Wi(e)},mo.prototype.close=function(){Gi(this.g)},mo.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,Hi(this.g,t)}else this.v?(t={},t.__data__=Ir(e),Hi(this.g,t)):Hi(this.g,e)},mo.prototype.M=function(){this.g.j=null,delete this.j,Gi(this.g),delete this.g,mo.Z.M.call(this)},hn(go,hs),hn(po,ls),hn(yo,lo),yo.prototype.xa=function(){vr(this.g,"a")},yo.prototype.wa=function(e){vr(this.g,new go(e))},yo.prototype.va=function(e){vr(this.g,new po(e))},yo.prototype.ua=function(){vr(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,mo.prototype.send=mo.prototype.u,mo.prototype.open=mo.prototype.m,mo.prototype.close=mo.prototype.close,rs.NO_ERROR=0,rs.TIMEOUT=8,rs.HTTP_ERROR=6,ss.COMPLETE="complete",as.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",wr.prototype.listen=wr.prototype.N,Ai.prototype.listenOnce=Ai.prototype.O,Ai.prototype.getLastError=Ai.prototype.La,Ai.prototype.getLastErrorCode=Ai.prototype.Da,Ai.prototype.getStatus=Ai.prototype.ba,Ai.prototype.getResponseJson=Ai.prototype.Qa,Ai.prototype.getResponseText=Ai.prototype.ga,Ai.prototype.send=Ai.prototype.ea;var wo=Xt.createWebChannelTransport=function(){return new fo},vo=Xt.getStatEventTarget=function(){return Xr()},bo=Xt.ErrorCode=rs,Io=Xt.EventType=ss,Eo=Xt.Event=Hr,To=Xt.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_o=Xt.FetchXmlHttpFactory=Ii,So=Xt.WebChannel=as,Do=Xt.XhrIo=Ai;const xo="@firebase/firestore";
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
 */class Ao{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ao.UNAUTHENTICATED=new Ao(null),Ao.GOOGLE_CREDENTIALS=new Ao("google-credentials-uid"),Ao.FIRST_PARTY=new Ao("first-party-uid"),Ao.MOCK_USER=new Ao("mock-user");
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
 */const No=new X("@firebase/firestore");function ko(){return No.logLevel}function Oo(e){No.setLogLevel(e)}function Ro(e,...t){if(No.logLevel<=G.DEBUG){const n=t.map(Vo);No.debug(`Firestore (${Co}): ${e}`,...n)}}function Lo(e,...t){if(No.logLevel<=G.ERROR){const n=t.map(Vo);No.error(`Firestore (${Co}): ${e}`,...n)}}function Mo(e,...t){if(No.logLevel<=G.WARN){const n=t.map(Vo);No.warn(`Firestore (${Co}): ${e}`,...n)}}function Vo(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function Po(e="Unexpected state"){const t=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+e;throw Lo(t),new Error(t)}function Fo(e,t){e||Po()}function Bo(e,t){e||Po()}function Uo(e,t){return e}
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
 */const qo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class jo extends D{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Ko{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class $o{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Go{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ao.UNAUTHENTICATED)))}shutdown(){}}class zo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qo{constructor(e){this.t=e,this.currentUser=Ao.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Ko;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ko,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ro("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ro("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ko)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ro("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fo("string"==typeof t.accessToken),new $o(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fo(null===e||"string"==typeof e),new Ao(e)}}class Ho{constructor(e,t,n){this.type="FirstParty",this.user=Ao.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Wo{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Ho(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ao.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yo{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Ro("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Ro("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Ro("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Ro("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Fo("string"==typeof e.token),this.p=e.token,new Xo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Jo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Zo{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Jo(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function ea(e,t){return e<t?-1:e>t?1:0}function ta(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function na(e){return e+"\0"}
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
 */class ra{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new jo(qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new jo(qo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new jo(qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new jo(qo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ra.fromMillis(Date.now())}static fromDate(e){return ra.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ra(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ea(this.nanoseconds,e.nanoseconds):ea(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class sa{constructor(e){this.timestamp=e}static fromTimestamp(e){return new sa(e)}static min(){return new sa(new ra(0,0))}static max(){return new sa(new ra(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class ia{constructor(e,t,n){void 0===t?t=0:t>e.length&&Po(),void 0===n?n=e.length-t:n>e.length-t&&Po(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ia.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oa extends ia{construct(e,t,n){return new oa(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new jo(qo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new oa(t)}static emptyPath(){return new oa([])}}const aa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ca extends ia{construct(e,t,n){return new ca(e,t,n)}static isValidIdentifier(e){return aa.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ca.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ca(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new jo(qo.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new jo(qo.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new jo(qo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new jo(qo.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ca(t)}static emptyPath(){return new ca([])}}
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
 */class ua{constructor(e){this.path=e}static fromPath(e){return new ua(oa.fromString(e))}static fromName(e){return new ua(oa.fromString(e).popFirst(5))}static empty(){return new ua(oa.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===oa.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return oa.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ua(new oa(e.slice()))}}
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
 */class ha{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function la(e){return e.fields.find((e=>2===e.kind))}function da(e){return e.fields.filter((e=>2!==e.kind))}ha.UNKNOWN_ID=-1;class fa{constructor(e,t){this.fieldPath=e,this.kind=t}}class ma{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ma(0,ya.min())}}function ga(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=sa.fromTimestamp(1e9===r?new ra(n+1,0):new ra(n,r));return new ya(s,ua.empty(),t)}function pa(e){return new ya(e.readTime,e.key,-1)}class ya{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ya(sa.min(),ua.empty(),-1)}static max(){return new ya(sa.max(),ua.empty(),-1)}}function wa(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ua.comparator(e.documentKey,t.documentKey),0!==n?n:ea(e.largestBatchId,t.largestBatchId))}
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
 */const va="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ba{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function Ia(e){if(e.code!==qo.FAILED_PRECONDITION||e.message!==va)throw e;Ro("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ea{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Po(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ea(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ea?t:Ea.resolve(t)}catch(e){return Ea.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ea.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ea.reject(t)}static resolve(e){return new Ea(((t,n)=>{t(e)}))}static reject(e){return new Ea(((t,n)=>{n(e)}))}static waitFor(e){return new Ea(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=Ea.resolve(!1);for(const n of e)t=t.next((e=>e?Ea.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ea(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ea(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
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
 */class Ta{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new Ko,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new Da(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=ka(t.target.error);this.T.reject(new Da(e,n))}}static open(e,t,n,r){try{return new Ta(t,e.transaction(r,n))}catch(e){throw new Da(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(Ro("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Aa(t)}}class _a{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===_a.v(f())&&Lo("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Ro("SimpleDb","Removing database:",e),Ca(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!T())return!1;if(_a.S())return!0;const e=f(),t=_a.v(e),n=0<t&&t<10,r=_a.D(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(Ro("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Da(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new jo(qo.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new jo(qo.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Da(e,r))},r.onupgradeneeded=e=>{Ro("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.O(t,r.transaction,e.oldVersion,this.version).next((()=>{Ro("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.M&&(this.db.onversionchange=e=>this.M(e)),this.db}F(e){this.M=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=Ta.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),Ea.reject(e)))).toPromise();return i.catch((()=>{})),await t.A,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(Ro("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sa{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return Ca(this.$.delete())}}class Da extends jo{constructor(e,t){super(qo.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xa(e){return"IndexedDbTransactionError"===e.name}class Aa{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Ro("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Ro("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ca(n)}add(e){return Ro("SimpleDb","ADD",this.store.name,e,e),Ca(this.store.add(e))}get(e){return Ca(this.store.get(e)).next((t=>(void 0===t&&(t=null),Ro("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Ro("SimpleDb","DELETE",this.store.name,e),Ca(this.store.delete(e))}count(){return Ro("SimpleDb","COUNT",this.store.name),Ca(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ea(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ea(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){Ro("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new Ea(((n,r)=>{t.onerror=e=>{const t=ka(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new Ea(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new Sa(s),o=t(s.primaryKey,s.value,i);if(o instanceof Ea){const e=o.catch((e=>(i.done(),Ea.reject(e))));n.push(e)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>Ea.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ca(e){return new Ea(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ka(e.target.error);n(t)}}))}let Na=!1;function ka(e){const t=_a.v(f());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new jo("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Na||(Na=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Oa{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){Ro("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Ro("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){xa(e)?Ro("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ia(e)}await this.Z(1)}))}}class Ra{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,s=!0;return Ea.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Ro("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));s=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.st(r,n))).next((n=>(Ro("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>s.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=pa(t);wa(r,n)>0&&(n=r)})),new ya(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
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
 */class La{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
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
 */function Ma(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Va(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Pa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */La.ot=-1;class Fa{constructor(e,t){this.comparator=e,this.root=t||Ua.EMPTY}insert(e,t){return new Fa(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ua.BLACK,null,null))}remove(e){return new Fa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ua.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ba(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ba(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ba(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ba(this.root,e,this.comparator,!0)}}class Ba{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ua{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Ua.RED,this.left=null!=r?r:Ua.EMPTY,this.right=null!=s?s:Ua.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Ua(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ua.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ua.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ua.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ua.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Po();if(this.right.isRed())throw Po();const e=this.left.check();if(e!==this.right.check())throw Po();return e+(this.isRed()?0:1)}}Ua.EMPTY=null,Ua.RED=!0,Ua.BLACK=!1,Ua.EMPTY=new class{constructor(){this.size=0}get key(){throw Po()}get value(){throw Po()}get color(){throw Po()}get left(){throw Po()}get right(){throw Po()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Ua(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class qa{constructor(e){this.comparator=e,this.data=new Fa(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ja(this.data.getIterator())}getIteratorFrom(e){return new ja(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof qa))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qa(this.comparator);return t.data=e,t}}class ja{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ka(e){return e.hasNext()?e.getNext():void 0}
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
 */class $a{constructor(e){this.fields=e,e.sort(ca.comparator)}static empty(){return new $a([])}unionWith(e){let t=new qa(ca.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new $a(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ta(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class za{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new za(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new za(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ea(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}za.EMPTY_BYTE_STRING=new za("");const Qa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ha(e){if(Fo(!!e),"string"==typeof e){let t=0;const n=Qa.exec(e);if(Fo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Wa(e.seconds),nanos:Wa(e.nanos)}}function Wa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Xa(e){return"string"==typeof e?za.fromBase64String(e):za.fromUint8Array(e)}
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
 */function Ya(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ja(e){const t=e.mapValue.fields.__previous_value__;return Ya(t)?Ja(t):t}function Za(e){const t=Ha(e.mapValue.fields.__local_write_time__.timestampValue);return new ra(t.seconds,t.nanos)}
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
 */class ec{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class tc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new tc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof tc&&e.projectId===this.projectId&&e.database===this.database}}
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
 */function nc(e){return null==e}function rc(e){return 0===e&&1/e==-1/0}function sc(e){return"number"==typeof e&&Number.isInteger(e)&&!rc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */const ic={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},oc={nullValue:"NULL_VALUE"};function ac(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ya(e)?4:Ic(e)?9007199254740991:10:Po()}function cc(e,t){if(e===t)return!0;const n=ac(e);if(n!==ac(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Za(e).isEqual(Za(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ha(e.timestampValue),r=Ha(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Xa(e.bytesValue).isEqual(Xa(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Wa(e.geoPointValue.latitude)===Wa(t.geoPointValue.latitude)&&Wa(e.geoPointValue.longitude)===Wa(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Wa(e.integerValue)===Wa(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Wa(e.doubleValue),r=Wa(t.doubleValue);return n===r?rc(n)===rc(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ta(e.arrayValue.values||[],t.arrayValue.values||[],cc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ma(n)!==Ma(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!cc(n[s],r[s])))return!1;return!0}(e,t);default:return Po()}}function uc(e,t){return void 0!==(e.values||[]).find((e=>cc(e,t)))}function hc(e,t){if(e===t)return 0;const n=ac(e),r=ac(t);if(n!==r)return ea(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ea(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Wa(e.integerValue||e.doubleValue),r=Wa(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return lc(e.timestampValue,t.timestampValue);case 4:return lc(Za(e),Za(t));case 5:return ea(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Xa(e),r=Xa(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=ea(n[s],r[s]);if(0!==e)return e}return ea(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ea(Wa(e.latitude),Wa(t.latitude));return 0!==n?n:ea(Wa(e.longitude),Wa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=hc(n[s],r[s]);if(e)return e}return ea(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ic.mapValue&&t===ic.mapValue)return 0;if(e===ic.mapValue)return 1;if(t===ic.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=ea(r[o],i[o]);if(0!==e)return e;const t=hc(n[r[o]],s[i[o]]);if(0!==t)return t}return ea(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Po()}}function lc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ea(e,t);const n=Ha(e),r=Ha(t),s=ea(n.seconds,r.seconds);return 0!==s?s:ea(n.nanos,r.nanos)}function dc(e){return fc(e)}function fc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ha(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Xa(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ua.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=fc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${fc(e.fields[s])}`;return n+"}"}(e.mapValue):Po();var t,n}function mc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function gc(e){return!!e&&"integerValue"in e}function pc(e){return!!e&&"arrayValue"in e}function yc(e){return!!e&&"nullValue"in e}function wc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vc(e){return!!e&&"mapValue"in e}function bc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Va(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=bc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=bc(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ic(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Ec(e){return"nullValue"in e?oc:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?mc(tc.empty(),ua.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Po()}function Tc(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?mc(tc.empty(),ua.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?ic:Po()}function _c(e,t){const n=hc(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Sc(e,t){const n=hc(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
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
 */class Dc{constructor(e){this.value=e}static empty(){return new Dc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=bc(t)}setAll(e){let t=ca.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=bc(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());vc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];vc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Va(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Dc(bc(this.value))}}function xc(e){const t=[];return Va(e.fields,((e,n)=>{const r=new ca([e]);if(vc(n)){const e=xc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new $a(t)
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
 */}class Ac{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Ac(e,0,sa.min(),sa.min(),Dc.empty(),0)}static newFoundDocument(e,t,n){return new Ac(e,1,t,sa.min(),n,0)}static newNoDocument(e,t){return new Ac(e,2,t,sa.min(),Dc.empty(),0)}static newUnknownDocument(e,t){return new Ac(e,3,t,sa.min(),Dc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sa.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ac&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ac(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Cc{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function Nc(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Cc(e,t,n,r,s,i,o)}function kc(e){const t=Uo(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+dc(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),nc(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>dc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>dc(e))).join(",")),t.ut=e}return t.ut}function Oc(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${dc(t.value)}`;var t})).join(", ")}]`),nc(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>dc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>dc(e))).join(",")),`Target(${t})`}function Rc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!Wc(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!cc(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Yc(e.startAt,t.startAt)&&Yc(e.endAt,t.endAt)}function Lc(e){return ua.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Mc(e,t){return e.filters.filter((e=>e instanceof Fc&&e.field.isEqual(t)))}function Vc(e,t,n){let r=oc,s=!0;for(const i of Mc(e,t)){let e=oc,t=!0;switch(i.op){case"<":case"<=":e=Ec(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=oc}_c({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];_c({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Pc(e,t,n){let r=ic,s=!0;for(const i of Mc(e,t)){let e=ic,t=!0;switch(i.op){case">=":case">":e=Tc(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=ic}Sc({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];Sc({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}class Fc extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Bc(e,t,n):"array-contains"===t?new Kc(e,n):"in"===t?new $c(e,n):"not-in"===t?new Gc(e,n):"array-contains-any"===t?new zc(e,n):new Fc(e,t,n)}static ct(e,t,n){return"in"===t?new Uc(e,n):new qc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(hc(t,this.value)):null!==t&&ac(this.value)===ac(t)&&this.at(hc(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Po()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Bc extends Fc{constructor(e,t,n){super(e,t,n),this.key=ua.fromName(n.referenceValue)}matches(e){const t=ua.comparator(e.key,this.key);return this.at(t)}}class Uc extends Fc{constructor(e,t){super(e,"in",t),this.keys=jc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class qc extends Fc{constructor(e,t){super(e,"not-in",t),this.keys=jc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function jc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ua.fromName(e.referenceValue)))}class Kc extends Fc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pc(t)&&uc(t.arrayValue,this.value)}}class $c extends Fc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&uc(this.value.arrayValue,t)}}class Gc extends Fc{constructor(e,t){super(e,"not-in",t)}matches(e){if(uc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!uc(this.value.arrayValue,t)}}class zc extends Fc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>uc(this.value.arrayValue,e)))}}class Qc{constructor(e,t){this.position=e,this.inclusive=t}}class Hc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Xc(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?ua.comparator(ua.fromName(o.referenceValue),n.key):hc(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Yc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!cc(e.position[n],t.position[n]))return!1;return!0}
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
 */class Jc{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Zc(e,t,n,r,s,i,o,a){return new Jc(e,t,n,r,s,i,o,a)}function eu(e){return new Jc(e)}function tu(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function nu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ru(e){for(const t of e.filters)if(t.ht())return t.field;return null}function su(e){return null!==e.collectionGroup}function iu(e){const t=Uo(e);if(null===t.lt){t.lt=[];const e=ru(t),n=nu(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Hc(e)),t.lt.push(new Hc(ca.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Hc(ca.keyField(),e))}}}return t.lt}function ou(e){const t=Uo(e);if(!t.ft)if("F"===t.limitType)t.ft=Nc(t.path,t.collectionGroup,iu(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of iu(t)){const t="desc"===s.dir?"asc":"desc";e.push(new Hc(s.field,t))}const n=t.endAt?new Qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qc(t.startAt.position,t.startAt.inclusive):null;t.ft=Nc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function au(e,t,n){return new Jc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function cu(e,t){return Rc(ou(e),ou(t))&&e.limitType===t.limitType}function uu(e){return`${kc(ou(e))}|lt:${e.limitType}`}function hu(e){return`Query(target=${Oc(ou(e))}; limitType=${e.limitType})`}function lu(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ua.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Xc(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,iu(e),t))&&!(e.endAt&&!function(e,t,n){const r=Xc(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,iu(e),t))}(e,t)}function du(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function fu(e){return(t,n)=>{let r=!1;for(const s of iu(e)){const e=mu(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function mu(e,t,n){const r=e.field.isKeyField()?ua.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?hc(r,s):Po()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Po()}}
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
 */function gu(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(t)?"-0":t}}function pu(e){return{integerValue:""+e}}function yu(e,t){return sc(t)?pu(t):gu(e,t)}
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
 */class wu{constructor(){this._=void 0}}function vu(e,t,n){return e instanceof Eu?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Tu?_u(e,t):e instanceof Su?Du(e,t):function(e,t){const n=Iu(e,t),r=Au(n)+Au(e._t);return gc(n)&&gc(e._t)?pu(r):gu(e.wt,r)}(e,t)}function bu(e,t,n){return e instanceof Tu?_u(e,t):e instanceof Su?Du(e,t):n}function Iu(e,t){return e instanceof xu?gc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Eu extends wu{}class Tu extends wu{constructor(e){super(),this.elements=e}}function _u(e,t){const n=Cu(t);for(const r of e.elements)n.some((e=>cc(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Su extends wu{constructor(e){super(),this.elements=e}}function Du(e,t){let n=Cu(t);for(const r of e.elements)n=n.filter((e=>!cc(e,r)));return{arrayValue:{values:n}}}class xu extends wu{constructor(e,t){super(),this.wt=e,this._t=t}}function Au(e){return Wa(e.integerValue||e.doubleValue)}function Cu(e){return pc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Nu{constructor(e,t){this.field=e,this.transform=t}}function ku(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Tu&&t instanceof Tu||e instanceof Su&&t instanceof Su?ta(e.elements,t.elements,cc):e instanceof xu&&t instanceof xu?cc(e._t,t._t):e instanceof Eu&&t instanceof Eu}(e.transform,t.transform)}class Ou{constructor(e,t){this.version=e,this.transformResults=t}}class Ru{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ru}static exists(e){return new Ru(void 0,e)}static updateTime(e){return new Ru(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Mu{}function Vu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new zu(e.key,Ru.none()):new qu(e.key,e.data,Ru.none());{const n=e.data,r=Dc.empty();let s=new qa(ca.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new ju(e.key,r,new $a(s.toArray()),Ru.none())}}function Pu(e,t,n){e instanceof qu?function(e,t,n){const r=e.value.clone(),s=$u(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ju?function(e,t,n){if(!Lu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=$u(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Ku(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Fu(e,t,n,r){return e instanceof qu?function(e,t,n,r){if(!Lu(e.precondition,t))return n;const s=e.value.clone(),i=Gu(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof ju?function(e,t,n,r){if(!Lu(e.precondition,t))return n;const s=Gu(e.fieldTransforms,r,t),i=t.data;return i.setAll(Ku(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Lu(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Bu(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Iu(r.transform,e||null);null!=s&&(null===n&&(n=Dc.empty()),n.set(r.field,s))}return n||null}function Uu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ta(e,t,((e,t)=>ku(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qu extends Mu{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ju extends Mu{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ku(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function $u(e,t,n){const r=new Map;Fo(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,bu(o,a,n[s]))}return r}function Gu(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,vu(e,i,t))}return r}class zu extends Mu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qu extends Mu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Hu{constructor(e){this.count=e}}
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
 */var Wu,Xu;function Yu(e){switch(e){default:return Po();case qo.CANCELLED:case qo.UNKNOWN:case qo.DEADLINE_EXCEEDED:case qo.RESOURCE_EXHAUSTED:case qo.INTERNAL:case qo.UNAVAILABLE:case qo.UNAUTHENTICATED:return!1;case qo.INVALID_ARGUMENT:case qo.NOT_FOUND:case qo.ALREADY_EXISTS:case qo.PERMISSION_DENIED:case qo.FAILED_PRECONDITION:case qo.ABORTED:case qo.OUT_OF_RANGE:case qo.UNIMPLEMENTED:case qo.DATA_LOSS:return!0}}function Ju(e){if(void 0===e)return Lo("GRPC error has no .code"),qo.UNKNOWN;switch(e){case Wu.OK:return qo.OK;case Wu.CANCELLED:return qo.CANCELLED;case Wu.UNKNOWN:return qo.UNKNOWN;case Wu.DEADLINE_EXCEEDED:return qo.DEADLINE_EXCEEDED;case Wu.RESOURCE_EXHAUSTED:return qo.RESOURCE_EXHAUSTED;case Wu.INTERNAL:return qo.INTERNAL;case Wu.UNAVAILABLE:return qo.UNAVAILABLE;case Wu.UNAUTHENTICATED:return qo.UNAUTHENTICATED;case Wu.INVALID_ARGUMENT:return qo.INVALID_ARGUMENT;case Wu.NOT_FOUND:return qo.NOT_FOUND;case Wu.ALREADY_EXISTS:return qo.ALREADY_EXISTS;case Wu.PERMISSION_DENIED:return qo.PERMISSION_DENIED;case Wu.FAILED_PRECONDITION:return qo.FAILED_PRECONDITION;case Wu.ABORTED:return qo.ABORTED;case Wu.OUT_OF_RANGE:return qo.OUT_OF_RANGE;case Wu.UNIMPLEMENTED:return qo.UNIMPLEMENTED;case Wu.DATA_LOSS:return qo.DATA_LOSS;default:return Po()}}(Xu=Wu||(Wu={}))[Xu.OK=0]="OK",Xu[Xu.CANCELLED=1]="CANCELLED",Xu[Xu.UNKNOWN=2]="UNKNOWN",Xu[Xu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xu[Xu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xu[Xu.NOT_FOUND=5]="NOT_FOUND",Xu[Xu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xu[Xu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xu[Xu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xu[Xu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xu[Xu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xu[Xu.ABORTED=10]="ABORTED",Xu[Xu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xu[Xu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xu[Xu.INTERNAL=13]="INTERNAL",Xu[Xu.UNAVAILABLE=14]="UNAVAILABLE",Xu[Xu.DATA_LOSS=15]="DATA_LOSS";
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
class Zu{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Va(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return Pa(this.inner)}size(){return this.innerSize}}
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
 */const eh=new Fa(ua.comparator);function th(){return eh}const nh=new Fa(ua.comparator);function rh(...e){let t=nh;for(const n of e)t=t.insert(n.key,n);return t}function sh(e){let t=nh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ih(){return ah()}function oh(){return ah()}function ah(){return new Zu((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ch=new Fa(ua.comparator),uh=new qa(ua.comparator);function hh(...e){let t=uh;for(const n of e)t=t.add(n);return t}const lh=new qa(ea);function dh(){return lh}
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
 */class fh{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,mh.createSynthesizedTargetChangeForCurrentChange(e,t)),new fh(sa.min(),n,dh(),th(),hh())}}class mh{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new mh(za.EMPTY_BYTE_STRING,t,hh(),hh(),hh())}}
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
 */class gh{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class ph{constructor(e,t){this.targetId=e,this.It=t}}class yh{constructor(e,t,n=za.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class wh{constructor(){this.Tt=0,this.Et=Ih(),this.At=za.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=hh(),t=hh(),n=hh();return this.Et.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Po()}})),new mh(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=Ih()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class vh{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=th(),this.Bt=bh(),this.Lt=new qa(ea)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Ot(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Po()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(Lc(e))if(0===n){const n=new ua(e.path);this.Kt(t,n,Ac.newNoDocument(n,sa.min()))}else Fo(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Lc(s.target)){const t=new ua(s.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,Ac.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=hh();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new fh(e,t,this.Lt,this.$t,n);return this.$t=th(),this.Bt=bh(),this.Lt=new qa(ea),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new wh,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new qa(ea),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||Ro("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new wh),this.Mt.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Mt.getRemoteKeysForTarget(e).has(t)}}function bh(){return new Fa(ua.comparator)}function Ih(){return new Fa(ua.comparator)}
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
 */const Eh=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Th=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class _h{constructor(e,t){this.databaseId=e,this.dt=t}}function Sh(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Dh(e,t){return e.dt?t.toBase64():t.toUint8Array()}function xh(e,t){return Sh(e,t.toTimestamp())}function Ah(e){return Fo(!!e),sa.fromTimestamp(function(e){const t=Ha(e);return new ra(t.seconds,t.nanos)}(e))}function Ch(e,t){return function(e){return new oa(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Nh(e){const t=oa.fromString(e);return Fo(nl(t)),t}function kh(e,t){return Ch(e.databaseId,t.path)}function Oh(e,t){const n=Nh(t);if(n.get(1)!==e.databaseId.projectId)throw new jo(qo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new jo(qo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ua(Vh(n))}function Rh(e,t){return Ch(e.databaseId,t)}function Lh(e){const t=Nh(e);return 4===t.length?oa.emptyPath():Vh(t)}function Mh(e){return new oa(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Vh(e){return Fo(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ph(e,t,n){return{name:kh(e,t),fields:n.value.mapValue.fields}}function Fh(e,t,n){const r=Oh(e,t.name),s=Ah(t.updateTime),i=new Dc({mapValue:{fields:t.fields}}),o=Ac.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Bh(e,t){return"found"in t?function(e,t){Fo(!!t.found),t.found.name,t.found.updateTime;const n=Oh(e,t.found.name),r=Ah(t.found.updateTime),s=new Dc({mapValue:{fields:t.found.fields}});return Ac.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){Fo(!!t.missing),Fo(!!t.readTime);const n=Oh(e,t.missing),r=Ah(t.readTime);return Ac.newNoDocument(n,r)}(e,t):Po()}function Uh(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Po()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.dt?(Fo(void 0===t||"string"==typeof t),za.fromBase64String(t||"")):(Fo(void 0===t||t instanceof Uint8Array),za.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?qo.UNKNOWN:Ju(e.code);return new jo(t,e.message||"")}(o);n=new yh(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oh(e,r.document.name),i=Ah(r.document.updateTime),o=new Dc({mapValue:{fields:r.document.fields}}),a=Ac.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new gh(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Oh(e,r.document),i=r.readTime?Ah(r.readTime):sa.min(),o=Ac.newNoDocument(s,i),a=r.removedTargetIds||[];n=new gh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Oh(e,r.document),i=r.removedTargetIds||[];n=new gh([],i,s,null)}else{if(!("filter"in t))return Po();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Hu(r),i=e.targetId;n=new ph(i,s)}}return n}function qh(e,t){let n;if(t instanceof qu)n={update:Ph(e,t.key,t.value)};else if(t instanceof zu)n={delete:kh(e,t.key)};else if(t instanceof ju)n={update:Ph(e,t.key,t.data),updateMask:tl(t.fieldMask)};else{if(!(t instanceof Qu))return Po();n={verify:kh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Eu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Tu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Su)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xu)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Po()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:xh(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Po()}(e,t.precondition)),n}function jh(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Ru.updateTime(Ah(e.updateTime)):void 0!==e.exists?Ru.exists(e.exists):Ru.none()}(t.currentDocument):Ru.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Fo("REQUEST_TIME"===t.setToServerValue),n=new Eu;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Tu(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Su(e)}else"increment"in t?n=new xu(e,t.increment):Po();const r=ca.fromServerFormat(t.fieldPath);return new Nu(r,n)}(e,t))):[];if(t.update){t.update.name;const s=Oh(e,t.update.name),i=new Dc({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new $a(t.map((e=>ca.fromServerFormat(e))))}(t.updateMask);return new ju(s,i,e,n,r)}return new qu(s,i,n,r)}if(t.delete){const r=Oh(e,t.delete);return new zu(r,n)}if(t.verify){const r=Oh(e,t.verify);return new Qu(r,n)}return Po()}function Kh(e,t){return e&&e.length>0?(Fo(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ah(e.updateTime):Ah(t);return n.isEqual(sa.min())&&(n=Ah(t)),new Ou(n,e.transformResults||[])}(e,t)))):[]}function $h(e,t){return{documents:[Rh(e,t.path)]}}function Gh(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Rh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Rh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(wc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NAN"}};if(yc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(wc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NOT_NAN"}};if(yc(e.value))return{unaryFilter:{field:Yh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yh(e.field),op:Xh(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Yh(e.field),direction:Wh(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.dt||nc(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function zh(e){let t=Lh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fo(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Hh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Hc(Jh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,nc(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Qc(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Qc(n,t)}(n.endAt)),Zc(t,s,o,i,a,"F",c,u)}function Qh(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Po()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Hh(e){return e?void 0!==e.unaryFilter?[el(e)]:void 0!==e.fieldFilter?[Zh(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Hh(e))).reduce(((e,t)=>e.concat(t))):Po():[]}function Wh(e){return Eh[e]}function Xh(e){return Th[e]}function Yh(e){return{fieldPath:e.canonicalString()}}function Jh(e){return ca.fromServerFormat(e.fieldPath)}function Zh(e){return Fc.create(Jh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Po()}}(e.fieldFilter.op),e.fieldFilter.value)}function el(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Jh(e.unaryFilter.field);return Fc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Jh(e.unaryFilter.field);return Fc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jh(e.unaryFilter.field);return Fc.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Jh(e.unaryFilter.field);return Fc.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Po()}}function tl(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function nl(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function rl(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=il(t)),t=sl(e.get(n),t);return il(t)}function sl(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function il(e){return e+""}function ol(e){const t=e.length;if(Fo(t>=2),2===t)return Fo(""===e.charAt(0)&&""===e.charAt(1)),oa.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&Po(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:Po()}i=t+2}return new oa(r)}
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
 */function cl(e,t){return[e,rl(t)]}function ul(e,t,n){return[e,rl(t),n]}const hl={},ll=["prefixPath","collectionGroup","readTime","documentId"],dl=["prefixPath","collectionGroup","documentId"],fl=["collectionGroup","readTime","prefixPath","documentId"],ml=["canonicalId","targetId"],gl=["targetId","path"],pl=["path","targetId"],yl=["collectionId","parent"],wl=["indexId","uid"],vl=["uid","sequenceNumber"],bl=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Il=["indexId","uid","orderedDocumentKey"],El=["userId","collectionPath","documentId"],Tl=["userId","collectionPath","largestBatchId"],_l=["userId","collectionGroup","largestBatchId"],Sl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Dl=[...Sl,"documentOverlays"],xl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Al=xl,Cl=[...Al,"indexConfiguration","indexState","indexEntries"];
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
 */class Nl extends ba{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function kl(e,t){const n=Uo(e);return _a.N(n.ee,t)}
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
 */class Ol{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Pu(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Fu(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Fu(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=oh();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Vu(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(sa.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),hh())}isEqual(e){return this.batchId===e.batchId&&ta(this.mutations,e.mutations,((e,t)=>Uu(e,t)))&&ta(this.baseMutations,e.baseMutations,((e,t)=>Uu(e,t)))}}class Rl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Fo(e.mutations.length===n.length);let r=ch;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Rl(e,t,n,r)}}
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
 */class Ll{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Ml{constructor(e,t,n,r,s=sa.min(),i=sa.min(),o=za.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Ml(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ml(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ml(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class Vl{constructor(e){this.ne=e}}function Pl(e,t){let n;if(t.document)n=Fh(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ua.fromSegments(t.noDocument.path),r=ql(t.noDocument.readTime);n=Ac.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Po();{const e=ua.fromSegments(t.unknownDocument.path),r=ql(t.unknownDocument.version);n=Ac.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ra(e[0],e[1]);return sa.fromTimestamp(t)}(t.readTime)),n}function Fl(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Bl(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:kh(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Sh(e,t.version.toTimestamp())}}(e.ne,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ul(t.version)};else{if(!t.isUnknownDocument())return Po();r.unknownDocument={path:n.path.toArray(),version:Ul(t.version)}}return r}function Bl(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Ul(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function ql(e){const t=new ra(e.seconds,e.nanoseconds);return sa.fromTimestamp(t)}function jl(e,t){const n=(t.baseMutations||[]).map((t=>jh(e.ne,t)));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map((t=>jh(e.ne,t))),s=ra.fromMillis(t.localWriteTimeMs);return new Ol(t.batchId,s,n,r)}function Kl(e){const t=ql(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?ql(e.lastLimboFreeSnapshotVersion):sa.min();let r;var s;return void 0!==e.query.documents?(Fo(1===(s=e.query).documents.length),r=ou(eu(Lh(s.documents[0])))):r=function(e){return ou(zh(e))}(e.query),new Ml(r,e.targetId,0,e.lastListenSequenceNumber,t,n,za.fromBase64String(e.resumeToken))}function $l(e,t){const n=Ul(t.snapshotVersion),r=Ul(t.lastLimboFreeSnapshotVersion);let s;s=Lc(t.target)?$h(e.ne,t.target):Gh(e.ne,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:kc(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Gl(e){const t=zh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?au(t,t.limit,"L"):t}function zl(e,t){return new Ll(t.largestBatchId,jh(e.ne,t.overlayMutation))}function Ql(e,t){const n=t.path.lastSegment();return[e,rl(t.path.popLast()),n]}function Hl(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Ul(r.readTime),documentKey:rl(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class Wl{getBundleMetadata(e,t){return Xl(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:ql(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Xl(e).put({bundleId:(n=t).id,createTime:Ul(Ah(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Yl(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Gl(t.bundledQuery),readTime:ql(t.readTime)};var t}))}saveNamedQuery(e,t){return Yl(e).put(function(e){return{name:e.name,readTime:Ul(Ah(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Xl(e){return kl(e,"bundles")}function Yl(e){return kl(e,"namedQueries")}
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
 */class Jl{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new Jl(e,n)}getOverlay(e,t){return Zl(e).get(Ql(this.userId,t)).next((e=>e?zl(this.wt,e):null))}getOverlays(e,t){const n=ih();return Ea.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,s)=>{const i=new Ll(t,s);r.push(this.ie(e,i))})),Ea.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(rl(e.getCollectionPath()))));const s=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Zl(e).W("collectionPathOverlayIndex",r))})),Ea.waitFor(s)}getOverlaysForCollection(e,t,n){const r=ih(),s=rl(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zl(e).K("collectionPathOverlayIndex",i).next((e=>{for(const t of e){const e=zl(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const s=ih();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Zl(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=zl(this.wt,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(e,t){return Zl(e).put(function(e,t,n){const[r,s,i]=Ql(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:qh(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function Zl(e){return kl(e,"documentOverlays")}
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
 */class ed{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(Wa(e.integerValue));else if("doubleValue"in e){const n=Wa(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),rc(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(Xa(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?Ic(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Po()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),ua.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function td(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function nd(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=td(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}ed.ye=new ed;class rd{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=nd(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),n=nd(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Oe(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class sd{constructor(e){this.Me=e}de(e){this.Me.pe(e)}he(e){this.Me.be(e)}ae(e){this.Me.ve(e)}ue(){this.Me.Ce()}}class id{constructor(e){this.Me=e}de(e){this.Me.Ee(e)}he(e){this.Me.Pe(e)}ae(e){this.Me.De(e)}ue(){this.Me.Ne()}}class od{constructor(){this.Me=new rd,this.Fe=new sd(this.Me),this.$e=new id(this.Me)}seed(e){this.Me.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}
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
 */class ad{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new ad(this.indexId,this.documentKey,this.arrayValue,n)}}function cd(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=ud(e.arrayValue,t.arrayValue),0!==n?n:(n=ud(e.directionalValue,t.directionalValue),0!==n?n:ua.comparator(e.documentKey,t.documentKey)))}function ud(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
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
 */class hd{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=la(e);if(void 0!==t&&!this.Qe(t))return!1;const n=da(e);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[s++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
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
 */class ld{constructor(){this.ze=new dd}addToCollectionParentIndex(e,t){return this.ze.add(t),Ea.resolve()}getCollectionParents(e,t){return Ea.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return Ea.resolve()}deleteFieldIndex(e,t){return Ea.resolve()}getDocumentsMatchingTarget(e,t){return Ea.resolve(null)}getIndexType(e,t){return Ea.resolve(0)}getFieldIndexes(e,t){return Ea.resolve([])}getNextCollectionGroupToUpdate(e){return Ea.resolve(null)}getMinOffset(e,t){return Ea.resolve(ya.min())}getMinOffsetFromCollectionGroup(e,t){return Ea.resolve(ya.min())}updateCollectionGroup(e,t,n){return Ea.resolve()}updateIndexEntries(e,t){return Ea.resolve()}}class dd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new qa(oa.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new qa(oa.comparator)).toArray()}}
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
 */const fd=new Uint8Array(0);class md{constructor(e,t){this.user=e,this.databaseId=t,this.He=new dd,this.Je=new Zu((e=>kc(e)),((e,t)=>Rc(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const s={collectionId:n,parent:rl(r)};return gd(e).put(s)}return Ea.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[na(t),""],!1,!0);return gd(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(ol(r.parent))}return n}))}addFieldIndex(e,t){const n=yd(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=wd(e);return s.next((e=>{n.put(Hl(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=yd(e),r=wd(e),s=pd(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=pd(e);let r=!0;const s=new Map;return Ea.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),s.set(t,e)})))).next((()=>{if(r){let e=hh();const r=[];return Ea.forEach(s,((s,i)=>{var o;Ro("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${kc(t)}`);const a=function(e,t){const n=la(t);if(void 0===n)return null;for(const r of Mc(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of da(t))for(const t of Mc(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of da(t)){const t=0===s.kind?Vc(e,s.fieldPath,e.startAt):Pc(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Qc(n,r)}(i,s),h=function(e,t){const n=[];let r=!0;for(const s of da(t)){const t=0===s.kind?Pc(e,s.fieldPath,e.endAt):Vc(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Qc(n,r)}(i,s),l=this.Ze(s,i,u),d=this.Ze(s,i,h),f=this.tn(s,i,c),m=this.en(s.indexId,a,l,u.inclusive,d,h.inclusive,f);return Ea.forEach(m,(s=>n.j(s,t.limit).next((t=>{t.forEach((t=>{const n=ua.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ea.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),u=[];for(let h=0;h<a;++h){const a=t?this.nn(t[h/c]):fd,l=this.sn(e,a,n[h%c],r),d=this.rn(e,a,s[h%c],i),f=o.map((t=>this.sn(e,a,t,!0)));u.push(...this.createRange(l,d,f))}return u}sn(e,t,n,r){const s=new ad(e,ua.empty(),t,n);return r?s:s.Le()}rn(e,t,n,r){const s=new ad(e,ua.empty(),t,n);return r?s.Le():s}Xe(e,t){const n=new hd(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return Ea.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new qa(ca.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new od;for(const r of da(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Be(r.kind);ed.ye.re(e,s)}return n.Oe()}nn(e){const t=new od;return ed.ye.re(e,t.Be(0)),t.Oe()}un(e,t){const n=new od;return ed.ye.re(mc(this.databaseId,t),n.Be(function(e){const t=da(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Oe()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new od);let s=0;for(const i of da(e)){const e=n[s++];for(const n of r)if(this.cn(t,i.fieldPath)&&pc(e))r=this.an(r,i,e);else{const t=n.Be(i.kind);ed.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Oe();return t}an(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new od;n.seed(e.Oe()),ed.ye.re(i,n.Be(t.kind)),s.push(n)}return s}cn(e,t){return!!e.filters.find((e=>e instanceof Fc&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=yd(e),r=wd(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return Ea.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new ma(t.sequenceNumber,new ya(ql(t.readTime),new ua(ol(t.documentKey)),t.largestBatchId)):ma.empty(),r=e.fields.map((([e,t])=>new fa(ca.fromServerFormat(e),t)));return new ha(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ea(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=yd(e),s=wd(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ea.forEach(t,(t=>s.put(Hl(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ea.forEach(t,((t,r)=>{const s=n.get(t.collectionGroup);return(s?Ea.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),Ea.forEach(s,(n=>this.fn(e,t,n).next((t=>{const s=this.dn(r,n);return t.isEqual(s)?Ea.resolve():this._n(e,r,n,t,s)})))))))}))}wn(e,t,n,r){return pd(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return pd(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=pd(e);let s=new qa(cd);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{s=s.add(new ad(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(e,t){let n=new qa(cd);const r=this.on(t,e);if(null==r)return n;const s=la(t);if(null!=s){const i=e.data.field(s.fieldPath);if(pc(i))for(const s of i.arrayValue.values||[])n=n.add(new ad(t.indexId,e.key,this.nn(s),r))}else n=n.add(new ad(t.indexId,e.key,fd,r));return n}_n(e,t,n,r,s){Ro("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Ka(i),c=Ka(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Ka(o)):t?(s(a),a=Ka(i)):(a=Ka(i),c=Ka(o))}}(r,s,cd,(r=>{i.push(this.wn(e,t,n,r))}),(r=>{i.push(this.mn(e,t,n,r))})),Ea.waitFor(i)}ln(e){let t=1;return wd(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>cd(e,t))).filter(((e,t,n)=>!t||0!==cd(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=cd(i,e),s=cd(i,t);if(0===n)r[0]=e.Le();else if(n>0&&s<0)r.push(i),r.push(i.Le());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,fd,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,fd,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(vd)}getMinOffset(e,t){return Ea.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||Po())))).next(vd)}}function gd(e){return kl(e,"collectionParents")}function pd(e){return kl(e,"indexEntries")}function yd(e){return kl(e,"indexConfiguration")}function wd(e){return kl(e,"indexState")}function vd(e){Fo(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;wa(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new ya(t.readTime,t.documentKey,n)}
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
 */const bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Id{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Id(e,Id.DEFAULT_COLLECTION_PERCENTILE,Id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function Ed(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{Fo(1===a)})));const u=[];for(const h of n.mutations){const e=ul(t,h.key.path,n.batchId);i.push(s.delete(e)),u.push(h.key)}return Ea.waitFor(i).next((()=>u))}function Td(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Po();t=e.noDocument}return JSON.stringify(t).length}
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
 */Id.DEFAULT_COLLECTION_PERCENTILE=10,Id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Id.DEFAULT=new Id(41943040,Id.DEFAULT_COLLECTION_PERCENTILE,Id.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Id.DISABLED=new Id(-1,0,0);class _d{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){Fo(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new _d(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Dd(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=xd(e),i=Dd(e);return i.add({}).next((o=>{Fo("number"==typeof o);const a=new Ol(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>qh(e.ne,t))),s=n.mutations.map((t=>qh(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),u=[];let h=new qa(((e,t)=>ea(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ul(this.userId,e.key.path,o);h=h.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,hl))}return h.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),Ea.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Dd(e).get(t).next((e=>e?(Fo(e.userId===this.userId),jl(this.wt,e)):null))}yn(e,t){return this.gn[t]?Ea.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Dd(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Fo(t.batchId>=n),s=jl(this.wt,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Dd(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Dd(e).K("userMutationsIndex",t).next((e=>e.map((e=>jl(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=cl(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return xd(e).J({range:r},((n,r,i)=>{const[o,a,c]=n,u=ol(a);if(o===this.userId&&t.path.isEqual(u))return Dd(e).get(c).next((e=>{if(!e)throw Po();Fo(e.userId===this.userId),s.push(jl(this.wt,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qa(ea);const r=[];return t.forEach((t=>{const s=cl(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=xd(e).J({range:i},((e,r,s)=>{const[i,o,a]=e,c=ol(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),Ea.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=cl(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new qa(ea);return xd(e).J({range:i},((e,t,s)=>{const[i,a,c]=e,u=ol(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Dd(e).get(t).next((e=>{if(null===e)throw Po();Fo(e.userId===this.userId),n.push(jl(this.wt,e))})))})),Ea.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Ed(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),Ea.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ea.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return xd(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=ol(e[1]);r.push(t)}else n.done()})).next((()=>{Fo(0===r.length)}))}))}containsKey(e,t){return Sd(e,this.userId,t)}Tn(e){return Ad(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Sd(e,t,n){const r=cl(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return xd(e).J({range:i,H:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function Dd(e){return kl(e,"mutations")}function xd(e){return kl(e,"documentMutations")}function Ad(e){return kl(e,"mutationQueues")}
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
 */class Cd{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Cd(0)}static Rn(){return new Cd(-1)}}
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
 */class Nd{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new Cd(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>sa.fromTimestamp(new ra(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>kd(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(Fo(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return kd(e).J(((i,o)=>{const a=Kl(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>Ea.waitFor(s))).next((()=>r))}forEachTarget(e,t){return kd(e).J(((e,n)=>{const r=Kl(n);t(r)}))}bn(e){return Od(e).get("targetGlobalKey").next((e=>(Fo(null!==e),e)))}Pn(e,t){return Od(e).put("targetGlobalKey",t)}vn(e,t){return kd(e).put($l(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=kc(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return kd(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const i=Kl(n);Rc(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=Rd(e);return t.forEach((t=>{const i=rl(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ea.waitFor(r)}removeMatchingKeys(e,t,n){const r=Rd(e);return Ea.forEach(t,(t=>{const s=rl(t.path);return Ea.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Rd(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Rd(e);let s=hh();return r.J({range:n,H:!0},((e,t,n)=>{const r=ol(e[1]),i=new ua(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=rl(t.path),r=IDBKeyRange.bound([n],[na(n)],!1,!0);let s=0;return Rd(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}te(e,t){return kd(e).get(t).next((e=>e?Kl(e):null))}}function kd(e){return kl(e,"targets")}function Od(e){return kl(e,"targetGlobal")}function Rd(e){return kl(e,"targetDocuments")}
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
 */function Ld([e,t],[n,r]){const s=ea(e,n);return 0===s?ea(t,r):s}class Md{constructor(e){this.Sn=e,this.buffer=new qa(Ld),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ld(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Vd{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){Ro("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xa(e)?Ro("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ia(e)}await this.kn(3e5)}))}}class Pd{constructor(e,t){this.On=e,this.params=t}calculateTargetCount(e,t){return this.On.Mn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ea.resolve(La.ot);const n=new Md(t);return this.On.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.On.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.On.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.On.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ro("LruGarbageCollector","Garbage collection skipped; disabled"),Ea.resolve(bd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ro("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bd):this.$n(e,t)))}getCacheSize(e){return this.On.getCacheSize(e)}$n(e,t){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Ro("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),ko()<=G.DEBUG&&Ro("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Ea.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
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
 */class Fd{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Pd(e,t)}(this,t)}Mn(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return Bd(e,n)}removeReference(e,t,n){return Bd(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Bd(e,t)}Un(e,t){return function(e,t){let n=!1;return Ad(e).Y((r=>Sd(e,r,t).next((e=>(e&&(n=!0),Ea.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(e,((i,o)=>{if(o<=t){const t=this.Un(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i,sa.min()),Rd(e).delete([0,rl(i.path)]))))}));r.push(t)}})).next((()=>Ea.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Bd(e,t)}Ln(e,t){const n=Rd(e);let r,s=La.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==La.ot&&t(new ua(ol(r)),s),s=o,r=i):s=La.ot})).next((()=>{s!==La.ot&&t(new ua(ol(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Bd(e,t){return Rd(e).put(function(e,t){return{targetId:0,path:rl(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
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
 */class Ud{constructor(){this.changes=new Zu((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ac.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ea.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class qd{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Gd(e).put(n)}removeEntry(e,t,n){return Gd(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Bl(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=Ac.newInvalidDocument(t);return Gd(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(zd(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:Ac.newInvalidDocument(t)};return Gd(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(zd(t))},((e,r)=>{n={document:this.Kn(t,r),size:Td(r)}})).next((()=>n))}getEntries(e,t){let n=th();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=th(),r=new Fa(ua.comparator);return this.Qn(e,t,((e,t)=>{const s=this.Kn(e,t);n=n.insert(e,s),r=r.insert(e,Td(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return Ea.resolve();let r=new qa(Hd);t.forEach((e=>r=r.add(e)));const s=IDBKeyRange.bound(zd(r.first()),zd(r.last())),i=r.getIterator();let o=i.getNext();return Gd(e).J({index:"documentKeyIndex",range:s},((e,t,r)=>{const s=ua.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Hd(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.q(zd(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Bl(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gd(e).K(IDBKeyRange.bound(r,s,!0)).next((e=>{let t=th();for(const n of e){const e=this.Kn(ua.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let s=th();const i=Qd(t,n),o=Qd(t,ya.max());return Gd(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((e,t,n)=>{const i=this.Kn(ua.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(e){return new Kd(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return $d(e).get("remoteDocumentGlobalKey").next((e=>(Fo(!!e),e)))}qn(e,t){return $d(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=Pl(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(sa.min()))return e}return Ac.newInvalidDocument(e)}}function jd(e){return new qd(e)}class Kd extends Ud{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new Zu((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new qa(((e,t)=>ea(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(t.push(this.zn.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=Fl(this.zn.wt,i);r=r.add(s.path.popLast());const c=Td(a);n+=c-o.size,t.push(this.zn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=Fl(this.zn.wt,i.convertToNoDocument(sa.min()));t.push(this.zn.addEntry(e,s,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),Ea.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function $d(e){return kl(e,"remoteDocumentGlobal")}function Gd(e){return kl(e,"remoteDocumentsV14")}function zd(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Qd(e,t){const n=t.documentKey.path.toArray();return[e,Bl(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Hd(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ea(n[i],r[i]),s)return s;return s=ea(n.length,r.length),s||(s=ea(n[n.length-2],r[r.length-2]),s||ea(n[n.length-1],r[r.length-1]))
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
 */}class Wd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Xd{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Fu(n.mutation,e,$a.empty(),ra.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,hh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=hh()){const r=ih();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=rh();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ih();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,hh())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=th();const i=ah(),o=ah();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ju)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),Fu(o.mutation,t,o.mutation.getFieldMask(),ra.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Wd(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ah();let r=new Fa(((e,t)=>e-t)),s=hh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||$a.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||hh()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=oh();c.forEach((e=>{if(!s.has(e)){const r=Vu(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ea.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ua.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):su(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Ea.resolve(ih());let o=-1,a=s;return i.next((t=>Ea.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ea.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,hh()))).next((e=>({batchId:o,changes:sh(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ua(t)).next((e=>{let t=rh();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=rh();return this.indexManager.getCollectionParents(e,r).next((i=>Ea.forEach(i,(i=>{const o=function(e,t){return new Jc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Ac.newInvalidDocument(n)))}));let n=rh();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&Fu(i.mutation,s,$a.empty(),ra.now()),lu(t,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Ea.resolve(Ac.newInvalidDocument(t))}}
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
 */class Yd{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return Ea.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ah(n.createTime)}),Ea.resolve()}getNamedQuery(e,t){return Ea.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:Gl(e.bundledQuery),readTime:Ah(e.readTime)}}(t)),Ea.resolve()}}
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
 */class Jd{constructor(){this.overlays=new Fa(ua.comparator),this.Xn=new Map}getOverlay(e,t){return Ea.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ih();return Ea.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),Ea.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),Ea.resolve()}getOverlaysForCollection(e,t,n){const r=ih(),s=t.length+1,i=new ua(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ea.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Fa(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=ih(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ih(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ea.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ll(t,n));let s=this.Xn.get(t);void 0===s&&(s=hh(),this.Xn.set(t,s)),this.Xn.set(t,s.add(n.key))}}
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
 */class Zd{constructor(){this.Zn=new qa(ef.ts),this.es=new qa(ef.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new ef(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new ef(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new ua(new oa([])),n=new ef(t,e),r=new ef(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new ua(new oa([])),n=new ef(t,e),r=new ef(t,e+1);let s=hh();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new ef(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ef{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return ua.comparator(e.key,t.key)||ea(e.ls,t.ls)}static ns(e,t){return ea(e.ls,t.ls)||ua.comparator(e.key,t.key)}}
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
 */class tf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new qa(ef.ts)}checkEmpty(e){return Ea.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Ol(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new ef(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ea.resolve(i)}lookupMutationBatch(e,t){return Ea.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),s=r<0?0:r;return Ea.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ea.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return Ea.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ef(t,0),r=new ef(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);s.push(t)})),Ea.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qa(ea);return t.forEach((e=>{const t=new ef(e,0),r=new ef(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),Ea.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;ua.isDocumentKey(s)||(s=s.child(""));const i=new ef(new ua(s),0);let o=new qa(ea);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),Ea.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Fo(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ea.forEach(t.mutations,(r=>{const s=new ef(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new ef(t,0),r=this.ds.firstAfterOrEqual(n);return Ea.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ea.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class nf{constructor(e){this.ps=e,this.docs=new Fa(ua.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ea.resolve(n?n.document.mutableCopy():Ac.newInvalidDocument(t))}getEntries(e,t){let n=th();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ac.newInvalidDocument(e))})),Ea.resolve(n)}getAllFromCollection(e,t,n){let r=th();const s=new ua(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||wa(pa(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Ea.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Po()}Is(e,t){return Ea.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rf(this)}getSize(e){return Ea.resolve(this.size)}}class rf extends Ud{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),Ea.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
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
 */class sf{constructor(e){this.persistence=e,this.Ts=new Zu((e=>kc(e)),Rc),this.lastRemoteSnapshotVersion=sa.min(),this.highestTargetId=0,this.Es=0,this.As=new Zd,this.targetCount=0,this.Rs=Cd.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Ea.resolve()}getLastRemoteSnapshotVersion(e){return Ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ea.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Ea.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),Ea.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Cd(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,Ea.resolve()}updateTargetData(e,t){return this.vn(t),Ea.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,Ea.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ea.waitFor(s).next((()=>r))}getTargetCount(e){return Ea.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Ea.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Ea.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),Ea.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),Ea.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Ea.resolve(n)}containsKey(e,t){return Ea.resolve(this.As.containsKey(t))}}
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
 */class of{constructor(e,t){this.bs={},this.overlays={},this.Ps=new La(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new sf(this),this.indexManager=new ld,this.remoteDocumentCache=function(e){return new nf(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new Vl(t),this.Ds=new Yd(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jd,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new tf(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){Ro("MemoryPersistence","Starting transaction:",e);const r=new af(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return Ea.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class af extends ba{constructor(e){super(),this.currentSequenceNumber=e}}class cf{constructor(e){this.persistence=e,this.ks=new Zd,this.Os=null}static Ms(e){return new cf(e)}get Fs(){if(this.Os)return this.Os;throw Po()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),Ea.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),Ea.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),Ea.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Os=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ea.forEach(this.Fs,(n=>{const r=ua.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,sa.min())}))})).next((()=>(this.Os=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return Ea.or([()=>Ea.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
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
 */class uf{constructor(e){this.wt=e}O(e,t,n,r){const s=new Ta("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",al,{unique:!0}),e.createObjectStore("documentMutations")}(e),hf(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=Ea.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),hf(e)),i=i.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:sa.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",al,{unique:!0});const r=t.store("mutations"),s=n.map((e=>r.put(e)));return Ea.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(i=i.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:El});t.createIndex("collectionPathOverlayIndex",Tl,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",_l,{unique:!1})}(e)}))),n<13&&r>=13&&(i=i.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ll});t.createIndex("documentKeyIndex",dl),t.createIndex("collectionGroupIndex",fl)}(e))).next((()=>this.Gs(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(e,s)))),n<15&&r>=15&&(i=i.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:wl}).createIndex("sequenceNumberIndex",vl,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:bl}).createIndex("documentKeyIndex",Il,{unique:!1})}(e)))),i}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=Td(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>Ea.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>Ea.forEach(n,(n=>{Fo(n.userId===t.userId);const r=jl(this.wt,n);return Ed(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,s)=>{const i=new oa(n),o=function(e){return[0,rl(e)]}(i);r.push(t.get(o).next((n=>n?Ea.resolve():(n=>t.put({targetId:0,path:rl(n),sequenceNumber:e.highestListenSequenceNumber}))(i))))})).next((()=>Ea.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:yl});const n=t.store("collectionParents"),r=new dd,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:rl(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new oa(e);return s(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const i=ol(t);return s(i.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=Kl(n),s=$l(this.wt,r);return t.put(s)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const s=t.store("remoteDocumentsV14"),i=(o=n,o.document?new ua(oa.fromString(o.document.name).popFirst(5)):o.noDocument?ua.fromSegments(o.noDocument.path):o.unknownDocument?ua.fromSegments(o.unknownDocument.path):Po()).path.toArray();var o;
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
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>Ea.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=jd(this.wt),s=new of(cf.Ms,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:hh();jl(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ea.forEach(n,((e,n)=>{const i=new Ao(n),o=Jl.se(this.wt,i),a=s.getIndexManager(i),c=_d.se(i,this.wt,a,s.referenceDelegate);return new Xd(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Nl(t,La.ot),e).next()}))}))}}function hf(e){e.createObjectStore("targetDocuments",{keyPath:gl}).createIndex("documentTargetsIndex",pl,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ml,{unique:!0}),e.createObjectStore("targetGlobal")}const lf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class df{constructor(e,t,n,r,s,i,o,a,c,u,h=14){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=u,this.Hs=h,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!df.V())throw new jo(qo.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Fd(this,r),this.ei=t+"main",this.wt=new Vl(a),this.ni=new _a(this.ei,this.Hs,new uf(this.wt)),this.Vs=new Nd(this.referenceDelegate,this.wt),this.remoteDocumentCache=jd(this.wt),this.Ds=new Wl,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&Lo("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new jo(qo.FAILED_PRECONDITION,lf);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new La(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>mf(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(xa(e))return Ro("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Ro("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return ff(e).get("owner").next((e=>Ea.resolve(this.di(e))))}_i(e){return mf(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=kl(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ea.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?Ea.resolve(!0):ff(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new jo(qo.FAILED_PRECONDITION,lf);return!1}}return!(!this.networkEnabled||!this.inForeground)||mf(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Ro("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Nl(e,La.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>mf(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return _d.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new md(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Jl.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){Ro("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=15===(i=this.Hs)?Cl:14===i?Al:13===i?xl:12===i?Dl:11===i?Sl:void Po();var i;let o;return this.ni.runTransaction(e,r,s,(r=>(o=new Nl(r,this.Ps?this.Ps.next():La.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw Lo(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new jo(qo.FAILED_PRECONDITION,va);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return ff(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new jo(qo.FAILED_PRECONDITION,lf)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ff(e).put("owner",t)}static V(){return _a.V()}li(e){const t=ff(e);return t.get("owner").next((e=>this.di(e)?(Ro("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ea.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Lo(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),E()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return Ro("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Lo("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(hn){Lo("Failed to set zombie client id.",hn)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(hn){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ff(e){return kl(e,"owner")}function mf(e){return kl(e,"clientMetadata")}function gf(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
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
 */}class pf{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=hh(),r=hh();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new pf(e,t.fromCache,n,r)}}
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
 */class yf{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((s=>s||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){return Ea.resolve(null)}xi(e,t,n,r){return tu(t)||r.isEqual(sa.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((s=>{const i=this.ki(t,s);return this.Oi(t,i,n,r)?this.Ni(e,t):(ko()<=G.DEBUG&&Ro("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hu(t)),this.Mi(e,i,t,ga(r,-1)))}))}ki(e,t){let n=new qa(fu(e));return t.forEach(((t,r)=>{lu(e,r)&&(n=n.add(r))})),n}Oi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,t){return ko()<=G.DEBUG&&Ro("QueryEngine","Using full collection scan to execute query:",hu(t)),this.Di.getDocumentsMatchingQuery(e,t,ya.min())}Mi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class wf{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new Fa(ea),this.Bi=new Zu((e=>kc(e)),Rc),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xd(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function vf(e,t,n,r){return new wf(e,t,n,r)}async function bf(e,t){const n=Uo(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=hh();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function If(e,t){const n=Uo(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ea.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Fo(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=hh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Ef(e){const t=Uo(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function Tf(e,t){const n=Uo(e),r=t.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(za.EMPTY_BYTE_STRING,sa.min()).withLastLimboFreeSnapshotVersion(sa.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(e,u))}));let a=th(),c=hh();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(_f(e,i,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(sa.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ea.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=s,e)))}function _f(e,t,n){let r=hh(),s=hh();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=th();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(sa.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Ro("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function Sf(e,t){const n=Uo(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Df(e,t){const n=Uo(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((s=>s?(r=s,Ea.resolve(r)):n.Vs.allocateTargetId(e).next((s=>(r=new Ml(t,s,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function xf(e,t,n){const r=Uo(e),s=r.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!xa(e))throw e;Ro("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(s.target)}function Af(e,t,n){const r=Uo(e);let s=sa.min(),i=hh();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Uo(e),s=r.Bi.get(n);return void 0!==s?Ea.resolve(r.$i.get(s)):r.Vs.getTargetData(t,n)}(r,e,ou(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?s:sa.min(),n?i:hh()))).next((e=>(kf(r,du(t),e),{documents:e,ji:i})))))}function Cf(e,t){const n=Uo(e),r=Uo(n.Vs),s=n.$i.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function Nf(e,t){const n=Uo(e),r=n.Li.get(t)||sa.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,ga(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(kf(n,t,e),e)))}function kf(e,t,n){let r=sa.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function Of(e,t,n,r){const s=Uo(e);let i=hh(),o=th();for(const u of n){const e=t.Wi(u.metadata.name);u.document&&(i=i.add(e));const n=t.zi(u);n.setReadTime(t.Hi(u.metadata.readTime)),o=o.insert(e,n)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await Df(s,function(e){return ou(eu(oa.fromString(`__bundle__/docs/${e}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>_f(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.Vs.addMatchingKeys(e,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}async function Rf(e,t,n=hh()){const r=await Df(e,ou(Gl(t.bundledQuery))),s=Uo(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=Ah(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(za.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(e,o).next((()=>s.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(e,t)))}))}
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
 */function Lf(e,t){return`firestore_clients_${e}_${t}`}function Mf(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Vf(e,t){return`firestore_targets_${e}_${t}`}class Pf{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new jo(r.error.code,r.error.message))),i?new Pf(e,t,r.state,s):(Lo("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ff{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new jo(n.error.code,n.error.message))),s?new Ff(e,n.state,r):(Lo("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bf{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=dh();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=sc(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Bf(e,s):(Lo("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Uf{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Uf(t.clientId,t.onlineState):(Lo("SharedClientState",`Failed to parse online state: ${e}`),null)}}class qf{constructor(){this.activeTargetIds=dh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jf{constructor(e,t,n,r,s){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Fa(ea),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=Lf(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
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
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new qf),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const n of e){if(n===this.tr)continue;const e=this.getItem(Lf(this.persistenceKey,n));if(e){const t=Bf.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Vf(this.persistenceKey,e));if(n){const r=Ff.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Vf(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Ro("SharedClientState","READ",e,t),t}setItem(e,t){Ro("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Ro("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(Ro("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Lo("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=La.ot;if(null!=e)try{const n=JSON.parse(e);Fo("number"==typeof n),t=n}catch(e){Lo("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==La.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new Pf(this.currentUser,e,t,n),s=Mf(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Yi())}pr(e){const t=Mf(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=Vf(this.persistenceKey,e),s=new Ff(e,t,n);this.setItem(r,s.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return Bf.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Pf.Ji(new Ao(s),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return Ff.Ji(r,t)}wr(e){return Uf.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);Ro("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Mr(i,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=dh();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Kf{constructor(){this.Fr=new qf,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new qf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class $f{Br(e){}shutdown(){}}
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
 */class Gf{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ro("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){Ro("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */class Qf{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
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
 */class Hf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,s){const i=this.oo(e,t);Ro("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(e,i,o,n).then((e=>(Ro("RestConnection","Received: ",e),e)),(t=>{throw Mo("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ao(e,t,n,r,s,i){return this.ro(e,t,n,r,s)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Co,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=zf[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((s,i)=>{const o=new Do;o.listenOnce(Io.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case bo.NO_ERROR:const t=o.getResponseJson();Ro("Connection","XHR received:",JSON.stringify(t)),s(t);break;case bo.TIMEOUT:Ro("Connection",'RPC "'+e+'" timed out'),i(new jo(qo.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const n=o.getStatus();if(Ro("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(qo).indexOf(t)>=0?t:qo.UNKNOWN}(e.status);i(new jo(t,e.message))}else i(new jo(qo.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new jo(qo.UNAVAILABLE,"Connection failed."));break;default:Po()}}finally{Ro("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=wo(),i=vo(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _o({})),this.uo(o.initMessageHeaders,t,n),m()||w()||v()||b()||I()||y()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Ro("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,h=!1;const l=new Qf({jr:e=>{h?Ro("Connection","Not sending because WebChannel is closed:",e):(u||(Ro("Connection","Opening WebChannel transport."),c.open(),u=!0),Ro("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,So.EventType.OPEN,(()=>{h||Ro("Connection","WebChannel transport opened.")})),d(c,So.EventType.CLOSE,(()=>{h||(h=!0,Ro("Connection","WebChannel transport closed"),l.eo())})),d(c,So.EventType.ERROR,(e=>{h||(h=!0,Mo("Connection","WebChannel transport errored:",e),l.eo(new jo(qo.UNAVAILABLE,"The operation could not be completed")))})),d(c,So.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Fo(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Ro("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Wu[e];if(void 0!==t)return Ju(t)}(e),n=s.message;void 0===t&&(t=qo.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),h=!0,l.eo(new jo(t,n)),c.close()}else Ro("Connection","WebChannel received:",n),l.no(n)}})),d(i,Eo.STAT_EVENT,(e=>{e.stat===To.PROXY?Ro("Connection","Detected buffering proxy"):e.stat===To.NOPROXY&&Ro("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.Zr()}),0),l}}
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
 */function Wf(){return"undefined"!=typeof window?window:null}function Xf(){return"undefined"!=typeof document?document:null}
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
 */function Yf(e){return new _h(e,!0)}class Jf{constructor(e,t,n=1e3,r=1.5,s=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&Ro("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class Zf{constructor(e,t,n,r,s,i,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Jf(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===qo.RESOURCE_EXHAUSTED?(Lo(t.toString()),Lo("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===qo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new jo(qo.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return Ro("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(Ro("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class em extends Zf{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.wt=s}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=Uh(this.wt,e),n=function(e){if(!("targetChange"in e))return sa.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?sa.min():t.readTime?Ah(t.readTime):sa.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=Mh(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=Lc(r)?{documents:$h(e,r)}:{query:Gh(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Dh(e,t.resumeToken):t.snapshotVersion.compareTo(sa.min())>0&&(n.readTime=Sh(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=Qh(this.wt,e);n&&(t.labels=n),this.Mo(t)}jo(e){const t={};t.database=Mh(this.wt),t.removeTarget=e,this.Mo(t)}}class tm extends Zf{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Fo(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Kh(e.writeResults,e.commitTime),n=Ah(e.commitTime);return this.listener.Jo(n,t)}return Fo(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Mh(this.wt),this.Mo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>qh(this.wt,e)))};this.Mo(t)}}
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
 */class nm extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new jo(qo.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jo(qo.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===qo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new jo(qo.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class rm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Lo(t),this.su=!1):Ro("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class sm{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((e=>{n.enqueueAndForget((async()=>{fm(this)&&(Ro("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Uo(e);t.lu.add(4),await om(t),t._u.set("Unknown"),t.lu.delete(4),await im(t)}(this))}))})),this._u=new rm(n,r)}}async function im(e){if(fm(e))for(const t of e.fu)await t(!0)}async function om(e){for(const t of e.fu)await t(!1)}function am(e,t){const n=Uo(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),dm(n)?lm(n):km(n).Co()&&um(n,t))}function cm(e,t){const n=Uo(e),r=km(n);n.hu.delete(t),r.Co()&&hm(n,t),0===n.hu.size&&(r.Co()?r.ko():fm(n)&&n._u.set("Unknown"))}function um(e,t){e.wu.Nt(t.targetId),km(e).Qo(t)}function hm(e,t){e.wu.Nt(t),km(e).jo(t)}function lm(e){e.wu=new vh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),km(e).start(),e._u.iu()}function dm(e){return fm(e)&&!km(e).Do()&&e.hu.size>0}function fm(e){return 0===Uo(e).lu.size}function mm(e){e.wu=void 0}async function gm(e){e.hu.forEach(((t,n)=>{um(e,t)}))}async function pm(e,t){mm(e),dm(e)?(e._u.uu(t),lm(e)):e._u.set("Unknown")}async function ym(e,t,n){if(e._u.set("Online"),t instanceof yh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){Ro("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wm(e,n)}else if(t instanceof gh?e.wu.Ut(t):t instanceof ph?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(sa.min()))try{const t=await Ef(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.hu.get(r);s&&e.hu.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(za.EMPTY_BYTE_STRING,n.snapshotVersion)),hm(e,t);const r=new Ml(n.target,t,1,n.sequenceNumber);um(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ro("RemoteStore","Failed to raise snapshot:",t),await wm(e,t)}}async function wm(e,t,n){if(!xa(t))throw t;e.lu.add(1),await om(e),e._u.set("Offline"),n||(n=()=>Ef(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ro("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await im(e)}))}function vm(e,t){return t().catch((n=>wm(e,n,t)))}async function bm(e){const t=Uo(e),n=Om(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Im(t);)try{const e=await Sf(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,Em(t,e)}catch(e){await wm(t,e)}Tm(t)&&_m(t)}function Im(e){return fm(e)&&e.au.length<10}function Em(e,t){e.au.push(t);const n=Om(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Tm(e){return fm(e)&&!Om(e).Do()&&e.au.length>0}function _m(e){Om(e).start()}async function Sm(e){Om(e).Xo()}async function Dm(e){const t=Om(e);for(const n of e.au)t.Ho(n.mutations)}async function xm(e,t,n){const r=e.au.shift(),s=Rl.from(r,t,n);await vm(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await bm(e)}async function Am(e,t){t&&Om(e).zo&&await async function(e,t){if(n=t.code,Yu(n)&&n!==qo.ABORTED){const n=e.au.shift();Om(e).No(),await vm(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await bm(e)}var n}(e,t),Tm(e)&&_m(e)}async function Cm(e,t){const n=Uo(e);n.asyncQueue.verifyOperationInProgress(),Ro("RemoteStore","RemoteStore received new credentials");const r=fm(n);n.lu.add(3),await om(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await im(n)}async function Nm(e,t){const n=Uo(e);t?(n.lu.delete(2),await im(n)):t||(n.lu.add(2),await om(n),n._u.set("Unknown"))}function km(e){return e.mu||(e.mu=function(e,t,n){const r=Uo(e);return r.tu(),new em(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
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
 */}(e.datastore,e.asyncQueue,{zr:gm.bind(null,e),Jr:pm.bind(null,e),Go:ym.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),dm(e)?lm(e):e._u.set("Unknown")):(await e.mu.stop(),mm(e))}))),e.mu}function Om(e){return e.gu||(e.gu=function(e,t,n){const r=Uo(e);return r.tu(),new tm(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:Sm.bind(null,e),Jr:Am.bind(null,e),Yo:Dm.bind(null,e),Jo:xm.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await bm(e)):(await e.gu.stop(),e.au.length>0&&(Ro("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
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
 */}class Rm{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Ko,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Rm(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new jo(qo.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lm(e,t){if(Lo("AsyncQueue",`${t}: ${e}`),xa(e))return new jo(qo.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Mm{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ua.comparator(t.key,n.key):(e,t)=>ua.comparator(e.key,t.key),this.keyedMap=rh(),this.sortedSet=new Fa(this.comparator)}static emptySet(e){return new Mm(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mm))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Mm;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Vm{constructor(){this.yu=new Fa(ua.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Po():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Pm{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Pm(e,t,Mm.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Fm{constructor(){this.Iu=void 0,this.listeners=[]}}class Bm{constructor(){this.queries=new Zu((e=>uu(e)),cu),this.onlineState="Unknown",this.Tu=new Set}}async function Um(e,t){const n=Uo(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Fm),s)try{i.Iu=await n.onListen(r)}catch(e){const n=Lm(e,`Initialization of query '${hu(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&$m(n)}async function qm(e,t){const n=Uo(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function jm(e,t){const n=Uo(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(s)&&(r=!0);t.Iu=s}}r&&$m(n)}function Km(e,t,n){const r=Uo(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function $m(e){e.Tu.forEach((e=>{e.next()}))}class Gm{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Pm(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Pm.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
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
 */class zm{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
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
 */class Qm{constructor(e){this.wt=e}Wi(e){return Oh(this.wt,e)}zi(e){return e.metadata.exists?Fh(this.wt,e.document,!1):Ac.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return Ah(e)}}class Hm{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Wm(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=oa.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new Qm(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||hh()).add(e);t.set(n,r)}}return t}async complete(){const e=await Of(this.localStore,new Qm(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await Rf(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:e}}}function Wm(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
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
 */class Xm{constructor(e){this.key=e}}class Ym{constructor(e){this.key=e}}class Jm{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=hh(),this.mutatedKeys=hh(),this.Lu=fu(e),this.Uu=new Mm(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new Vm,r=t?t.Uu:this.Uu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),h=lu(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Qu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Lu(h,a)>0||c&&this.Lu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Po()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const i=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Pm(this.query,e.Uu,r,s,e.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Vm,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=hh(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Ym(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new Xm(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=hh();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Pm.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Zm{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class eg{constructor(e){this.key=e,this.Xu=!1}}class tg{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Zu((e=>uu(e)),cu),this.ec=new Map,this.nc=new Set,this.sc=new Fa(ua.comparator),this.ic=new Map,this.rc=new Zd,this.oc={},this.uc=new Map,this.cc=Cd.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function ng(e,t){const n=kg(e);let r,s;const i=n.tc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const e=await Df(n.localStore,ou(t));n.isPrimaryClient&&am(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await rg(n,t,r,"current"===i)}return s}async function rg(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ku(n);s.Oi&&(s=await Af(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return pg(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const s=await Af(e.localStore,t,!0),i=new Jm(t,s.ji),o=i.Ku(s.documents),a=mh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);pg(e,n,c.zu);const u=new Zm(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function sg(e,t){const n=Uo(e),r=n.tc.get(t),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((e=>!cu(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xf(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),cm(n.remoteStore,r.targetId),mg(n,r.targetId)})).catch(Ia)):(mg(n,r.targetId),await xf(n.localStore,r.targetId,!0))}async function ig(e,t,n){const r=Og(e);try{const e=await function(e,t){const n=Uo(e),r=ra.now(),s=t.reduce(((e,t)=>e.add(t.key)),hh());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=th(),c=hh();return n.Ui.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=Bu(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new ju(e.key,t,xc(t.value.mapValue),Ru.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:sh(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new Fa(ea)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await vg(r,e.changes),await bm(r.remoteStore)}catch(e){const t=Lm(e,"Failed to persist write");n.reject(t)}}async function og(e,t){const n=Uo(e);try{const e=await Tf(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(Fo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?Fo(r.Xu):e.removedDocuments.size>0&&(Fo(r.Xu),r.Xu=!1))})),await vg(n,e,t)}catch(e){await Ia(e)}}function ag(e,t,n){const r=Uo(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Uo(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.Eu(t)&&(r=!0)})),r&&$m(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cg(e,t,n){const r=Uo(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ic.get(t),i=s&&s.key;if(i){let e=new Fa(ua.comparator);e=e.insert(i,Ac.newNoDocument(i,sa.min()));const n=hh().add(i),s=new fh(sa.min(),new Map,new qa(ea),e,n);await og(r,s),r.sc=r.sc.remove(i),r.ic.delete(t),wg(r)}else await xf(r.localStore,t,!1).then((()=>mg(r,t,n))).catch(Ia)}async function ug(e,t){const n=Uo(e),r=t.batch.batchId;try{const e=await If(n.localStore,t);fg(n,r,null),dg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vg(n,e)}catch(e){await Ia(e)}}async function hg(e,t,n){const r=Uo(e);try{const e=await function(e,t){const n=Uo(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Fo(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);fg(r,t,n),dg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await vg(r,e)}catch(n){await Ia(n)}}async function lg(e,t){const n=Uo(e);fm(n.remoteStore)||Ro("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Uo(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=Lm(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function dg(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function fg(e,t,n){const r=Uo(e);let s=r.oc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function mg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||gg(e,t)}))}function gg(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(cm(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),wg(e))}function pg(e,t,n){for(const r of n)r instanceof Xm?(e.rc.addReference(r.key,t),yg(e,r)):r instanceof Ym?(Ro("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||gg(e,r.key)):Po()}function yg(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(Ro("SyncEngine","New document in limbo: "+n),e.nc.add(r),wg(e))}function wg(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new ua(oa.fromString(t)),r=e.cc.next();e.ic.set(r,new eg(n)),e.sc=e.sc.insert(n,r),am(e.remoteStore,new Ml(ou(eu(n.path)),r,2,La.ot))}}async function vg(e,t,n){const r=Uo(e),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=pf.Vi(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(e,t){const n=Uo(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ea.forEach(t,(t=>Ea.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ea.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!xa(e))throw e;Ro("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,s)}}}(r.localStore,i))}async function bg(e,t){const n=Uo(e);if(!n.currentUser.isEqual(t)){Ro("SyncEngine","User change. New user:",t.toKey());const e=await bf(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new jo(qo.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await vg(n,e.Ki)}}function Ig(e,t){const n=Uo(e),r=n.ic.get(t);if(r&&r.Xu)return hh().add(r.key);{let e=hh();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function Eg(e,t){const n=Uo(e),r=await Af(n.localStore,t.query,!0),s=t.view.Ju(r);return n.isPrimaryClient&&pg(n,t.targetId,s.zu),s}async function Tg(e,t){const n=Uo(e);return Nf(n.localStore,t).then((e=>vg(n,e)))}async function _g(e,t,n,r){const s=Uo(e),i=await function(e,t){const n=Uo(e),r=Uo(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Ea.resolve(null)))))}(s.localStore,t);null!==i?("pending"===n?await bm(s.remoteStore):"acknowledged"===n||"rejected"===n?(fg(s,t,r||null),dg(s,t),function(e,t){Uo(Uo(e).mutationQueue).In(t)}(s.localStore,t)):Po(),await vg(s,i)):Ro("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Sg(e,t){const n=Uo(e);if(kg(n),Og(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Dg(n,e.toArray());n.ac=!0,await Nm(n.remoteStore,!0);for(const r of t)am(n.remoteStore,r)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(mg(n,s),xf(n.localStore,s,!0)))),cm(n.remoteStore,s)})),await t,await Dg(n,e),function(e){const t=Uo(e);t.ic.forEach(((e,n)=>{cm(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new Fa(ua.comparator)}(n),n.ac=!1,await Nm(n.remoteStore,!1)}}async function Dg(e,t,n){const r=Uo(e),s=[],i=[];for(const o of t){let e;const t=r.ec.get(o);if(t&&0!==t.length){e=await Df(r.localStore,ou(t[0]));for(const e of t){const t=r.tc.get(e),n=await Eg(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await Cf(r.localStore,o);e=await Df(r.localStore,t),await rg(r,xg(t),o,!1)}s.push(e)}return r.Zu.Go(i),s}function xg(e){return Zc(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Ag(e){const t=Uo(e);return Uo(Uo(t.localStore).persistence).Ri()}async function Cg(e,t,n,r){const s=Uo(e);if(s.ac)return void Ro("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await Nf(s.localStore,du(i[0])),r=fh.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await vg(s,e,r);break}case"rejected":await xf(s.localStore,t,!0),mg(s,t,r);break;default:Po()}}async function Ng(e,t,n){const r=kg(e);if(r.ac){for(const e of t){if(r.ec.has(e)){Ro("SyncEngine","Adding an already active target "+e);continue}const t=await Cf(r.localStore,e),n=await Df(r.localStore,t);await rg(r,xg(t),n.targetId,!1),am(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await xf(r.localStore,e,!1).then((()=>{cm(r.remoteStore,e),mg(r,e)})).catch(Ia)}}function kg(e){const t=Uo(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=og.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ig.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cg.bind(null,t),t.Zu.Go=jm.bind(null,t.eventManager),t.Zu.lc=Km.bind(null,t.eventManager),t}function Og(e){const t=Uo(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ug.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hg.bind(null,t),t}function Rg(e,t,n){const r=Uo(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Uo(e),r=Ah(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Wm(r));const s=new Hm(r,e.localStore,t.wt);let i=await t.fc();for(;i;){const e=await s.Nu(i);e&&n._updateProgress(e),i=await t.fc()}const o=await s.complete();return await vg(e,o.Mu,void 0),await function(e,t){const n=Uo(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(e){return Mo("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
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
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Lg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Yf(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return vf(this.persistence,new yf,e.initialUser,this.wt)}_c(e){return new of(cf.Ms,this.wt)}dc(e){return new Kf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mg extends Lg{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Og(this.yc.syncEngine),await bm(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return vf(this.persistence,new yf,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Vd(n,e.asyncQueue,t)}gc(e,t){const n=new Ra(t,this.persistence);return new Oa(e.asyncQueue,n)}_c(e){const t=gf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Id.withCacheSize(this.cacheSizeBytes):Id.DEFAULT;return new df(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Wf(),Xf(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new Kf}}class Vg extends Mg{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof jf&&(this.sharedClientState.syncEngine={kr:_g.bind(null,t),Or:Cg.bind(null,t),Mr:Ng.bind(null,t),Ri:Ag.bind(null,t),Nr:Tg.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await Sg(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=Wf();if(!jf.V(t))throw new jo(qo.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=gf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new jf(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Pg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ag(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=bg.bind(null,this.syncEngine),await Nm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bm}createDatastore(e){const t=Yf(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Hf(r));var r;return function(e,t,n,r){return new nm(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>ag(this.syncEngine,e,0),i=Gf.V()?new Gf:new $f,new sm(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new tg(e,t,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Uo(e);Ro("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await om(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
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
 */function Fg(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class Bg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class Ug{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new Ko,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new zm(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
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
 */class qg{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new jo(qo.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Uo(e),r=Mh(n.wt)+"/documents",s={documents:t.map((e=>kh(n.wt,e)))},i=await n.ao("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach((e=>{const t=Bh(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Fo(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new zu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=ua.fromPath(t);this.mutations.push(new Qu(n,this.precondition(n)))})),await async function(e,t){const n=Uo(e),r=Mh(n.wt)+"/documents",s={writes:t.map((e=>qh(n.wt,e)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Po();t=sa.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new jo(qo.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Ru.updateTime(t):Ru.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(sa.min()))throw new jo(qo.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ru.updateTime(t)}return Ru.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
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
 */class jg{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new Jf(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new qg(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!nc(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Yu(t)}return!1}}
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
 */class Kg{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ao.UNAUTHENTICATED,this.clientId=Zo.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ro("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Ro("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new jo(qo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ko;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Lm(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function $g(e,t){e.asyncQueue.verifyOperationInProgress(),Ro("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await bf(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Gg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await zg(e);Ro("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Cm(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Cm(t.remoteStore,n))),e.onlineComponents=t}async function zg(e){return e.offlineComponents||(Ro("FirestoreClient","Using default OfflineComponentProvider"),await $g(e,new Lg)),e.offlineComponents}async function Qg(e){return e.onlineComponents||(Ro("FirestoreClient","Using default OnlineComponentProvider"),await Gg(e,new Pg)),e.onlineComponents}function Hg(e){return zg(e).then((e=>e.persistence))}function Wg(e){return zg(e).then((e=>e.localStore))}function Xg(e){return Qg(e).then((e=>e.remoteStore))}function Yg(e){return Qg(e).then((e=>e.syncEngine))}async function Jg(e){const t=await Qg(e),n=t.eventManager;return n.onListen=ng.bind(null,t.syncEngine),n.onUnlisten=sg.bind(null,t.syncEngine),n}function Zg(e){return e.asyncQueue.enqueue((async()=>{const t=await Hg(e),n=await Xg(e);return t.setNetworkEnabled(!0),function(e){const t=Uo(e);return t.lu.delete(0),im(t)}(n)}))}function ep(e){return e.asyncQueue.enqueue((async()=>{const t=await Hg(e),n=await Xg(e);return t.setNetworkEnabled(!1),async function(e){const t=Uo(e);t.lu.add(0),await om(t),t._u.set("Offline")}(n)}))}function tp(e,t){const n=new Ko;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Uo(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new jo(qo.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Lm(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Wg(e),t,n))),n.promise}function np(e,t,n={}){const r=new Ko;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Bg({next:i=>{t.enqueueAndForget((()=>qm(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new jo(qo.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new jo(qo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Gm(eu(n.path),i,{includeMetadataChanges:!0,Du:!0});return Um(e,o)}(await Jg(e),e.asyncQueue,t,n,r))),r.promise}function rp(e,t){const n=new Ko;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Af(e,t,!0),s=new Jm(t,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=Lm(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Wg(e),t,n))),n.promise}function sp(e,t,n={}){const r=new Ko;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Bg({next:n=>{t.enqueueAndForget((()=>qm(e,o))),n.fromCache&&"server"===r.source?s.reject(new jo(qo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Gm(n,i,{includeMetadataChanges:!0,Du:!0});return Um(e,o)}(await Jg(e),e.asyncQueue,t,n,r))),r.promise}function ip(e,t){const n=new Bg(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Uo(e).Tu.add(t),t.next()}(await Jg(e),n))),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Uo(e).Tu.delete(t)}(await Jg(e),n)))}}function op(e,t,n){const r=new Ko;return e.asyncQueue.enqueueAndForget((async()=>{const s=await function(e){return Qg(e).then((e=>e.datastore))}(e);new jg(e.asyncQueue,s,n,t,r).run()})),r.promise}function ap(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Ug(e,t)}(function(e,t){if(e instanceof Uint8Array)return Fg(e,t);if(e instanceof ArrayBuffer)return Fg(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
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
 */(n,Yf(t));e.asyncQueue.enqueueAndForget((async()=>{Rg(await Yg(e),s,r)}))}function cp(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Uo(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await Wg(e),t)))}const up=new Map;
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
 */function hp(e,t,n){if(!n)throw new jo(qo.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lp(e,t,n,r){if(!0===t&&!0===r)throw new jo(qo.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function dp(e){if(!ua.isDocumentKey(e))throw new jo(qo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fp(e){if(ua.isDocumentKey(e))throw new jo(qo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mp(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Po()}function gp(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new jo(qo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mp(e);throw new jo(qo.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function pp(e,t){if(t<=0)throw new jo(qo.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */class yp{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new jo(qo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new jo(qo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class wp{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yp({}),this._settingsFrozen=!1,e instanceof tc?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new jo(qo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(e.options.projectId)}(e))}get app(){if(!this._app)throw new jo(qo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new jo(qo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yp(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Go;switch(e.type){case"gapi":const t=e.client;return Fo(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Wo(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new jo(qo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=up.get(e);t&&(Ro("ComponentProvider","Removing Datastore"),up.delete(e),t.terminate())}(this),Promise.resolve()}}function vp(e,t,n,r={}){var s;const i=(e=gp(e,wp))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Mo("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ao.MOCK_USER;else{t=d(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new jo(qo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ao(i)}e._authCredentials=new zo(new $o(t,n))}}
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
 */class bp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ep(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bp(this.firestore,e,this._key)}}class Ip{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ip(this.firestore,e,this._query)}}class Ep extends Ip{constructor(e,t,n){super(e,t,eu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bp(this.firestore,null,new ua(e))}withConverter(e){return new Ep(this.firestore,e,this._path)}}function Tp(e,t,...n){if(e=P(e),hp("collection","path",t),e instanceof wp){const r=oa.fromString(t,...n);return fp(r),new Ep(e,null,r)}{if(!(e instanceof bp||e instanceof Ep))throw new jo(qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(oa.fromString(t,...n));return fp(r),new Ep(e.firestore,null,r)}}function _p(e,t){if(e=gp(e,wp),hp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new jo(qo.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ip(e,null,function(e){return new Jc(oa.emptyPath(),e)}(t))}function Sp(e,t,...n){if(e=P(e),1===arguments.length&&(t=Zo.I()),hp("doc","path",t),e instanceof wp){const r=oa.fromString(t,...n);return dp(r),new bp(e,null,new ua(r))}{if(!(e instanceof bp||e instanceof Ep))throw new jo(qo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(oa.fromString(t,...n));return dp(r),new bp(e.firestore,e instanceof Ep?e.converter:null,new ua(r))}}function Dp(e,t){return e=P(e),t=P(t),(e instanceof bp||e instanceof Ep)&&(t instanceof bp||t instanceof Ep)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function xp(e,t){return e=P(e),t=P(t),e instanceof Ip&&t instanceof Ip&&e.firestore===t.firestore&&cu(e._query,t._query)&&e.converter===t.converter
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
 */}class Ap{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Jf(this,"async_queue_retry"),this.Kc=()=>{const e=Xf();e&&Ro("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Xf();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Xf();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new Ko;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Mc.push(e),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(hn){if(!xa(hn))throw hn;Ro("AsyncQueue","Operation failed with retryable error: "+hn)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Oc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Lo("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Oc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=Rm.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&Po()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Oc,await e}while(e!==this.Oc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Cp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}class Np{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ko,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
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
 */const kp=-1;class Op extends wp{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Ap,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lp(this),this._firestoreClient.terminate()}}function Rp(e){return e._firestoreClient||Lp(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Lp(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ec(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Kg(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Mp(e,t){$p(e=gp(e,Op));const n=Rp(e),r=e._freezeSettings(),s=new Pg;return Pp(n,s,new Mg(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Vp(e){$p(e=gp(e,Op));const t=Rp(e),n=e._freezeSettings(),r=new Pg;return Pp(t,r,new Vg(r,n.cacheSizeBytes))}function Pp(e,t,n){const r=new Ko;return e.asyncQueue.enqueue((async()=>{try{await $g(e,n),await Gg(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===qo.FAILED_PRECONDITION||e.code===qo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function Fp(e){if(e._initialized&&!e._terminated)throw new jo(qo.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Ko;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!_a.V())return Promise.resolve();const t=e+"main";await _a.delete(t)}(gf(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Bp(e){return function(e){const t=new Ko;return e.asyncQueue.enqueueAndForget((async()=>lg(await Yg(e),t))),t.promise}(Rp(e=gp(e,Op)))}function Up(e){return Zg(Rp(e=gp(e,Op)))}function qp(e){return ep(Rp(e=gp(e,Op)))}function jp(e,t){const n=Rp(e=gp(e,Op)),r=new Np;return ap(n,e._databaseId,t,r),r}function Kp(e,t){return cp(Rp(e=gp(e,Op)),t).then((t=>t?new Ip(e,null,t.query):null))}function $p(e){if(e._initialized||e._terminated)throw new jo(qo.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class Gp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new jo(qo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ca(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class zp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zp(za.fromBase64String(e))}catch(e){throw new jo(qo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new zp(za.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Qp{constructor(e){this._methodName=e}}
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
 */class Hp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new jo(qo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new jo(qo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ea(this._lat,e._lat)||ea(this._long,e._long)}}
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
 */const Wp=/^__.*__$/;class Xp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ju(e,this.data,this.fieldMask,t,this.fieldTransforms):new qu(e,this.data,t,this.fieldTransforms)}}class Yp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ju(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Jp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Po()}}class Zp{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Zp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return vy(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(Jp(this.Zc)&&Wp.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class ey{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||Yf(e)}aa(e,t,n,r=!1){return new Zp({Zc:e,methodName:t,ca:n,path:ca.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function ty(e){const t=e._freezeSettings(),n=Yf(e._databaseId);return new ey(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ny(e,t,n,r,s,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,s);gy("Data must be an object, but it was:",o,r);const a=fy(r,o);let c,u;if(i.merge)c=new $a(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=py(t,r,n);if(!o.contains(s))throw new jo(qo.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);by(e,s)||e.push(s)}c=new $a(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Xp(new Dc(a),c,u)}class ry extends Qp{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ry}}function sy(e,t,n){return new Zp({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class iy extends Qp{_toFieldTransform(e){return new Nu(e.path,new Eu)}isEqual(e){return e instanceof iy}}class oy extends Qp{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=sy(this,e,!0),n=this.ha.map((e=>dy(e,t))),r=new Tu(n);return new Nu(e.path,r)}isEqual(e){return this===e}}class ay extends Qp{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=sy(this,e,!0),n=this.ha.map((e=>dy(e,t))),r=new Su(n);return new Nu(e.path,r)}isEqual(e){return this===e}}class cy extends Qp{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new xu(e.wt,yu(e.wt,this.la));return new Nu(e.path,t)}isEqual(e){return this===e}}function uy(e,t,n,r){const s=e.aa(1,t,n);gy("Data must be an object, but it was:",s,r);const i=[],o=Dc.empty();Va(r,((e,r)=>{const a=wy(t,e,n);r=P(r);const c=s.ia(a);if(r instanceof ry)i.push(a);else{const e=dy(r,c);null!=e&&(i.push(a),o.set(a,e))}}));const a=new $a(i);return new Yp(o,a,s.fieldTransforms)}function hy(e,t,n,r,s,i){const o=e.aa(1,t,n),a=[py(t,r,n)],c=[s];if(i.length%2!=0)throw new jo(qo.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(py(t,i[d])),c.push(i[d+1]);const u=[],h=Dc.empty();for(let d=a.length-1;d>=0;--d)if(!by(u,a[d])){const e=a[d];let t=c[d];t=P(t);const n=o.ia(e);if(t instanceof ry)u.push(e);else{const r=dy(t,n);null!=r&&(u.push(e),h.set(e,r))}}const l=new $a(u);return new Yp(h,l,o.fieldTransforms)}function ly(e,t,n,r=!1){return dy(n,e.aa(r?4:3,t))}function dy(e,t){if(my(e=P(e)))return gy("Unsupported field value:",t,e),fy(e,t);if(e instanceof Qp)return function(e,t){if(!Jp(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=dy(s,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=P(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return yu(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ra.fromDate(e);return{timestampValue:Sh(t.wt,n)}}if(e instanceof ra){const n=new ra(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Sh(t.wt,n)}}if(e instanceof Hp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof zp)return{bytesValue:Dh(t.wt,e._byteString)};if(e instanceof bp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ch(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${mp(e)}`)}(e,t)}function fy(e,t){const n={};return Pa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Va(e,((e,r)=>{const s=dy(r,t.ea(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function my(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ra||e instanceof Hp||e instanceof zp||e instanceof bp||e instanceof Qp)}function gy(e,t,n){if(!my(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=mp(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function py(e,t,n){if((t=P(t))instanceof Gp)return t._internalPath;if("string"==typeof t)return wy(e,t);throw vy("Field path arguments must be of type string or ",e,!1,void 0,n)}const yy=new RegExp("[~\\*/\\[\\]]");function wy(e,t,n){if(t.search(yy)>=0)throw vy(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Gp(...t.split("."))._internalPath}catch(r){throw vy(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vy(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new jo(qo.INVALID_ARGUMENT,a+e+c)}function by(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Iy{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ey(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ty("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ey extends Iy{data(){return super.data()}}function Ty(e,t){return"string"==typeof t?wy(e,t):t instanceof Gp?t._internalPath:t._delegate._internalPath}
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
 */class _y{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sy extends Iy{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ty("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Dy extends Sy{data(e={}){return super.data(e)}}class xy{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new _y(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Dy(this._firestore,this._userDataWriter,n.key,n,new _y(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new jo(qo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Dy(e._firestore,e._userDataWriter,n.doc.key,n.doc,new _y(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Dy(e._firestore,e._userDataWriter,t.doc.key,t.doc,new _y(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Ay(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Ay(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Po()}}function Cy(e,t){return e instanceof Sy&&t instanceof Sy?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof xy&&t instanceof xy&&e._firestore===t._firestore&&xp(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
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
 */function Ny(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new jo(qo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ky{}function Oy(e,...t){for(const n of t)e=n._apply(e);return e}class Ry extends ky{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=ty(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new jo(qo.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Hy(o,i);const t=[];for(const n of o)t.push(Qy(r,e,n));a={arrayValue:{values:t}}}else a=Qy(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Hy(o,i),a=ly(n,t,o,"in"===i||"not-in"===i);const c=Fc.create(s,i,a);return function(e,t){if(t.ht()){const n=ru(e);if(null!==n&&!n.isEqual(t.field))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=nu(e);null!==r&&Wy(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new jo(qo.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new jo(qo.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new Ip(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Jc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Ly(e,t,n){const r=t,s=Ty("where",e);return new Ry(s,r,n)}class My extends ky{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new jo(qo.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new jo(qo.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Hc(t,n);return function(e,t){if(null===nu(e)){const n=ru(e);null!==n&&Wy(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new Ip(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Jc(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Vy(e,t="asc"){const n=t,r=Ty("orderBy",e);return new My(r,n)}class Py extends ky{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new Ip(e.firestore,e.converter,au(e._query,this.ma,this.ga))}}function Fy(e){return pp("limit",e),new Py("limit",e,"F")}function By(e){return pp("limitToLast",e),new Py("limitToLast",e,"L")}class Uy extends ky{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=zy(e,this.type,this.ya,this.pa);return new Ip(e.firestore,e.converter,function(e,t){return new Jc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function qy(...e){return new Uy("startAt",e,!0)}function jy(...e){return new Uy("startAfter",e,!1)}class Ky extends ky{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=zy(e,this.type,this.ya,this.pa);return new Ip(e.firestore,e.converter,function(e,t){return new Jc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function $y(...e){return new Ky("endBefore",e,!1)}function Gy(...e){return new Ky("endAt",e,!0)}function zy(e,t,n,r){if(n[0]=P(n[0]),n[0]instanceof Iy)return function(e,t,n,r,s){if(!r)throw new jo(qo.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of iu(e))if(o.field.isKeyField())i.push(mc(t,r.key));else{const e=r.data.field(o.field);if(Ya(e))throw new jo(qo.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new jo(qo.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Qc(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=ty(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new jo(qo.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new jo(qo.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!su(e)&&-1!==i.indexOf("/"))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(oa.fromString(i));if(!ua.isDocumentKey(n))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new ua(n);a.push(mc(t,s))}else{const e=ly(n,r,i);a.push(e)}}return new Qc(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function Qy(e,t,n){if("string"==typeof(n=P(n))){if(""===n)throw new jo(qo.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!su(t)&&-1!==n.indexOf("/"))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(oa.fromString(n));if(!ua.isDocumentKey(r))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mc(e,new ua(r))}if(n instanceof bp)return mc(e,n._key);throw new jo(qo.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mp(n)}.`)}function Hy(e,t){if(!Array.isArray(e)||0===e.length)throw new jo(qo.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new jo(qo.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Wy(e,t,n){if(!n.isEqual(t))throw new jo(qo.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */const Xy={maxAttempts:5};
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
 */class Yy{convertValue(e,t="none"){switch(ac(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Wa(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Po()}}convertObject(e,t){const n={};return Va(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Hp(Wa(e.latitude),Wa(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ja(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Za(e));default:return null}}convertTimestamp(e){const t=Ha(e);return new ra(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=oa.fromString(e);Fo(nl(n));const r=new tc(n.get(1),n.get(3)),s=new ua(n.popFirst(5));return r.isEqual(t)||Lo(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function Jy(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Zy extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new zp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bp(this.firestore,null,t)}}
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
 */class ew{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ty(e)}set(e,t,n){this._verifyNotCommitted();const r=tw(e,this._firestore),s=Jy(r.converter,t,n),i=ny(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Ru.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=tw(e,this._firestore);let i;return i="string"==typeof(t=P(t))||t instanceof Gp?hy(this._dataReader,"WriteBatch.update",s._key,t,n,r):uy(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,Ru.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=tw(e,this._firestore);return this._mutations=this._mutations.concat(new zu(t._key,Ru.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new jo(qo.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tw(e,t){if((e=P(e)).firestore!==t)throw new jo(qo.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
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
 */function nw(e){e=gp(e,bp);const t=gp(e.firestore,Op);return np(Rp(t),e._key).then((n=>pw(t,e,n)))}class rw extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new zp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bp(this.firestore,null,t)}}function sw(e){e=gp(e,bp);const t=gp(e.firestore,Op),n=Rp(t),r=new rw(t);return tp(n,e._key).then((n=>new Sy(t,r,e._key,n,new _y(null!==n&&n.hasLocalMutations,!0),e.converter)))}function iw(e){e=gp(e,bp);const t=gp(e.firestore,Op);return np(Rp(t),e._key,{source:"server"}).then((n=>pw(t,e,n)))}function ow(e){e=gp(e,Ip);const t=gp(e.firestore,Op),n=Rp(t),r=new rw(t);return Ny(e._query),sp(n,e._query).then((n=>new xy(t,r,e,n)))}function aw(e){e=gp(e,Ip);const t=gp(e.firestore,Op),n=Rp(t),r=new rw(t);return rp(n,e._query).then((n=>new xy(t,r,e,n)))}function cw(e){e=gp(e,Ip);const t=gp(e.firestore,Op),n=Rp(t),r=new rw(t);return sp(n,e._query,{source:"server"}).then((n=>new xy(t,r,e,n)))}function uw(e,t,n){e=gp(e,bp);const r=gp(e.firestore,Op),s=Jy(e.converter,t,n);return gw(r,[ny(ty(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Ru.none())])}function hw(e,t,n,...r){e=gp(e,bp);const s=gp(e.firestore,Op),i=ty(s);let o;return o="string"==typeof(t=P(t))||t instanceof Gp?hy(i,"updateDoc",e._key,t,n,r):uy(i,"updateDoc",e._key,t),gw(s,[o.toMutation(e._key,Ru.exists(!0))])}function lw(e){return gw(gp(e.firestore,Op),[new zu(e._key,Ru.none())])}function dw(e,t){const n=gp(e.firestore,Op),r=Sp(e),s=Jy(e.converter,t);return gw(n,[ny(ty(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,Ru.exists(!1))]).then((()=>r))}function fw(e,...t){var n,r,s;e=P(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Cp(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Cp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,u,h;if(e instanceof bp)u=gp(e.firestore,Op),h=eu(e._key.path),c={next:n=>{t[o]&&t[o](pw(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=gp(e,Ip);u=gp(n.firestore,Op),h=n._query;const r=new rw(u);c={next:e=>{t[o]&&t[o](new xy(u,r,n,e))},error:t[o+1],complete:t[o+2]},Ny(e._query)}return function(e,t,n,r){const s=new Bg(r),i=new Gm(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>Um(await Jg(e),i))),()=>{s.Tc(),e.asyncQueue.enqueueAndForget((async()=>qm(await Jg(e),i)))}}(Rp(u),h,a,c)}function mw(e,t){return ip(Rp(e=gp(e,Op)),Cp(t)?t:{next:t})}function gw(e,t){return function(e,t){const n=new Ko;return e.asyncQueue.enqueueAndForget((async()=>ig(await Yg(e),t,n))),n.promise}(Rp(e),t)}function pw(e,t,n){const r=n.docs.get(t._key),s=new rw(e);return new Sy(e,s,t._key,r,new _y(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */class yw extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ty(e)}get(e){const t=tw(e,this._firestore),n=new Zy(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Po();const r=e[0];if(r.isFoundDocument())return new Iy(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Iy(this._firestore,n,t._key,null,t.converter);throw Po()}))}set(e,t,n){const r=tw(e,this._firestore),s=Jy(r.converter,t,n),i=ny(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=tw(e,this._firestore);let i;return i="string"==typeof(t=P(t))||t instanceof Gp?hy(this._dataReader,"Transaction.update",s._key,t,n,r):uy(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=tw(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=tw(e,this._firestore),n=new rw(this._firestore);return super.get(e).then((e=>new Sy(this._firestore,n,t._key,e._document,new _y(!1,!1),t.converter)))}}function ww(e,t,n){e=gp(e,Op);const r=Object.assign(Object.assign({},Xy),n);return function(e){if(e.maxAttempts<1)throw new jo(qo.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),op(Rp(e),(n=>t(new yw(e,n))),r)}
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
 */function vw(){return new ry("deleteField")}function bw(){return new iy("serverTimestamp")}function Iw(...e){return new oy("arrayUnion",e)}function Ew(...e){return new ay("arrayRemove",e)}function Tw(e){return new cy("increment",e)}
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
 */!function(e,t=!0){!function(e){Co=e}(lt),st(new F("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Op(r,new Qo(e.getProvider("auth-internal")),new Yo(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),pt(xo,"3.4.13",e),pt(xo,"3.4.13","esm2017")}();const _w="@firebase/firestore-compat",Sw="0.1.22";
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
function Dw(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new jo("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
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
 */function xw(){if("undefined"===typeof Uint8Array)throw new jo("unimplemented","Uint8Arrays are not available in this environment.")}function Aw(){if(!Ga())throw new jo("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Cw{constructor(e){this._delegate=e}static fromBase64String(e){return Aw(),new Cw(zp.fromBase64String(e))}static fromUint8Array(e){return xw(),new Cw(zp.fromUint8Array(e))}toBase64(){return Aw(),this._delegate.toBase64()}toUint8Array(){return xw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function Nw(e){return kw(e,["next","error","complete"])}function kw(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
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
 */class Ow{enableIndexedDbPersistence(e,t){return Mp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Vp(e._delegate)}clearIndexedDbPersistence(e){return Fp(e._delegate)}}class Rw{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof tc||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Mo("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){vp(this._delegate,e,t,n)}enableNetwork(){return Up(this._delegate)}disableNetwork(){return qp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,lp("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Bp(this._delegate)}onSnapshotsInSync(e){return mw(this._delegate,e)}get app(){if(!this._appCompat)throw new jo("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Hw(this,Tp(this._delegate,e))}catch(t){throw Uw(t,"collection()","Firestore.collection()")}}doc(e){try{return new Bw(this,Sp(this._delegate,e))}catch(t){throw Uw(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Gw(this,_p(this._delegate,e))}catch(t){throw Uw(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ww(this._delegate,(t=>e(new Vw(this,t))))}batch(){return Rp(this._delegate),new Pw(new ew(this._delegate,(e=>gw(this._delegate,e))))}loadBundle(e){return jp(this._delegate,e)}namedQuery(e){return Kp(this._delegate,e).then((e=>e?new Gw(this,e):null))}}class Lw extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cw(new zp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Bw.forKey(t,this.firestore,null)}}function Mw(e){Oo(e)}class Vw{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Lw(e)}get(e){const t=Ww(e);return this._delegate.get(t).then((e=>new Kw(this._firestore,new Sy(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Ww(e);return n?(Dw("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Ww(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Ww(e);return this._delegate.delete(t),this}}class Pw{constructor(e){this._delegate=e}set(e,t,n){const r=Ww(e);return n?(Dw("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Ww(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Ww(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Fw{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Dy(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new $w(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Fw.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let s=r.get(t);return s||(s=new Fw(e,new Lw(e),t),r.set(t,s)),s}}Fw.INSTANCES=new WeakMap;class Bw{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lw(e)}static forPath(e,t,n){if(e.length%2!==0)throw new jo("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Bw(t,new bp(t._delegate,n,new ua(e)))}static forKey(e,t,n){return new Bw(t,new bp(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Hw(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Hw(this.firestore,Tp(this._delegate,e))}catch(t){throw Uw(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=P(e),e instanceof bp&&Dp(this._delegate,e)}set(e,t){t=Dw("DocumentReference.set",t);try{return t?uw(this._delegate,e,t):uw(this._delegate,e)}catch(n){throw Uw(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?hw(this._delegate,e):hw(this._delegate,e,t,...n)}catch(r){throw Uw(r,"updateDoc()","DocumentReference.update()")}}delete(){return lw(this._delegate)}onSnapshot(...e){const t=qw(e),n=jw(e,(e=>new Kw(this.firestore,new Sy(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return fw(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?sw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?iw(this._delegate):nw(this._delegate),t.then((e=>new Kw(this.firestore,new Sy(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Bw(this.firestore,e?this._delegate.withConverter(Fw.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Uw(e,t,n){return e.message=e.message.replace(t,n),e}function qw(e){for(const t of e)if("object"===typeof t&&!Nw(t))return t;return{}}function jw(e,t){var n,r;let s;return s=Nw(e[0])?e[0]:Nw(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Kw{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Bw(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Cy(this._delegate,e._delegate)}}class $w extends Kw{data(e){const t=this._delegate.data(e);return Bo(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Gw{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Lw(e)}where(e,t,n){try{return new Gw(this.firestore,Oy(this._delegate,Ly(e,t,n)))}catch(r){throw Uw(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Gw(this.firestore,Oy(this._delegate,Vy(e,t)))}catch(n){throw Uw(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Gw(this.firestore,Oy(this._delegate,Fy(e)))}catch(t){throw Uw(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Gw(this.firestore,Oy(this._delegate,By(e)))}catch(t){throw Uw(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Gw(this.firestore,Oy(this._delegate,qy(...e)))}catch(t){throw Uw(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Gw(this.firestore,Oy(this._delegate,jy(...e)))}catch(t){throw Uw(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Gw(this.firestore,Oy(this._delegate,$y(...e)))}catch(t){throw Uw(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Gw(this.firestore,Oy(this._delegate,Gy(...e)))}catch(t){throw Uw(t,"endAt()","Query.endAt()")}}isEqual(e){return xp(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?aw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?cw(this._delegate):ow(this._delegate),t.then((e=>new Qw(this.firestore,new xy(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=qw(e),n=jw(e,(e=>new Qw(this.firestore,new xy(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return fw(this._delegate,t,n)}withConverter(e){return new Gw(this.firestore,e?this._delegate.withConverter(Fw.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zw{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new $w(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Qw{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Gw(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new $w(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new zw(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new $w(this._firestore,n))}))}isEqual(e){return Cy(this._delegate,e._delegate)}}class Hw extends Gw{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Bw(this.firestore,e):null}doc(e){try{return new Bw(this.firestore,void 0===e?Sp(this._delegate):Sp(this._delegate,e))}catch(t){throw Uw(t,"doc()","CollectionReference.doc()")}}add(e){return dw(this._delegate,e).then((e=>new Bw(this.firestore,e)))}isEqual(e){return Dp(this._delegate,e._delegate)}withConverter(e){return new Hw(this.firestore,e?this._delegate.withConverter(Fw.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ww(e){return gp(e,bp)}
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
 */class Xw{constructor(...e){this._delegate=new Gp(...e)}static documentId(){return new Xw(ca.keyField().canonicalString())}isEqual(e){return e=P(e),e instanceof Gp&&this._delegate._internalPath.isEqual(e._internalPath)}}
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
 */class Yw{constructor(e){this._delegate=e}static serverTimestamp(){const e=bw();return e._methodName="FieldValue.serverTimestamp",new Yw(e)}static delete(){const e=vw();return e._methodName="FieldValue.delete",new Yw(e)}static arrayUnion(...e){const t=Iw(...e);return t._methodName="FieldValue.arrayUnion",new Yw(t)}static arrayRemove(...e){const t=Ew(...e);return t._methodName="FieldValue.arrayRemove",new Yw(t)}static increment(e){const t=Tw(e);return t._methodName="FieldValue.increment",new Yw(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
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
 */const Jw={Firestore:Rw,GeoPoint:Hp,Timestamp:ra,Blob:Cw,Transaction:Vw,WriteBatch:Pw,DocumentReference:Bw,DocumentSnapshot:Kw,Query:Gw,QueryDocumentSnapshot:$w,QuerySnapshot:Qw,CollectionReference:Hw,FieldPath:Xw,FieldValue:Yw,setLogLevel:Mw,CACHE_SIZE_UNLIMITED:kp};function Zw(e,t){e.INTERNAL.registerComponent(new F("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Jw)))}
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
 */function ev(e){Zw(e,((e,t)=>new Rw(e,t,new Ow))),e.registerVersion(_w,Sw)}ev(Gt);var tv=n(4870),nv=n(3396);const rv={apiKey:"AIzaSyDuoWbv-liVwte7sfZMVNz-mmz-PmflNrE",authDomain:"spidertech-61552.firebaseapp.com",projectId:"spidertech-61552",storageBucket:"spidertech-61552.appspot.com",messagingSenderId:"910942759811",appId:"1:910942759811:web:80bfdf29eec637ad2e24b6",measurementId:"G-FS6GXF3SH2"},sv=Gt.initializeApp(rv),iv=sv.firestore(),ov=iv.collection("inquiry"),av=e=>ov.add(e),cv=()=>{const e=(0,tv.iH)([]),t=ov.onSnapshot((t=>{e.value=t.docs.map((e=>({id:e.id,...e.data()})))}));return(0,nv.Ah)(t),e}}}]);
//# sourceMappingURL=137.f8c60fee.js.map