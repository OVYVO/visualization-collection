/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}var i;n.d(e,{Gh:()=>O,HS:()=>L,Oi:()=>s,Rr:()=>d,TM:()=>a,pX:()=>B,pb:()=>k,rc:()=>i,tH:()=>F,ue:()=>m,yD:()=>P}),function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(i||(i={}));const o="popstate";function a(t){return void 0===t&&(t={}),f((function(t,e){let{pathname:n="/",search:r="",hash:i=""}=d(t.location.hash.substr(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:i},e.state&&e.state.usr||null,e.state&&e.state.key||"default")}),(function(t,e){let n=t.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let e=t.location.href,n=e.indexOf("#");r=-1===n?e:e.slice(0,n)}return r+"#"+("string"==typeof e?e:h(e))}),(function(t,e){u("/"===t.pathname.charAt(0),"relative pathnames are not supported in hash history.push("+JSON.stringify(e)+")")}),t)}function s(t,e){if(!1===t||null==t)throw new Error(e)}function u(t,e){if(!t){"undefined"!=typeof console&&console.warn(e);try{throw new Error(e)}catch(t){}}}function l(t,e){return{usr:t.state,key:t.key,idx:e}}function c(t,e,n,i){return void 0===n&&(n=null),r({pathname:"string"==typeof t?t:t.pathname,search:"",hash:""},"string"==typeof e?d(e):e,{state:n,key:e&&e.key||i||Math.random().toString(36).substr(2,8)})}function h(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&"?"!==n&&(e+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(e+="#"===r.charAt(0)?r:"#"+r),e}function d(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function f(t,e,n,a){void 0===a&&(a={});let{window:u=document.defaultView,v5Compat:d=!1}=a,f=u.history,p=i.Pop,m=null,g=v();function v(){return(f.state||{idx:null}).idx}function y(){p=i.Pop;let t=v(),e=null==t?null:t-g;g=t,m&&m({action:p,location:x.location,delta:e})}function b(t){let e="null"!==u.location.origin?u.location.origin:u.location.href,n="string"==typeof t?t:h(t);return n=n.replace(/ $/,"%20"),s(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}null==g&&(g=0,f.replaceState(r({},f.state,{idx:g}),""));let x={get action(){return p},get location(){return t(u,f)},listen(t){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(o,y),m=t,()=>{u.removeEventListener(o,y),m=null}},createHref:t=>e(u,t),createURL:b,encodeLocation(t){let e=b(t);return{pathname:e.pathname,search:e.search,hash:e.hash}},push:function(t,e){p=i.Push;let r=c(x.location,t,e);n&&n(r,t),g=v()+1;let o=l(r,g),a=x.createHref(r);try{f.pushState(o,"",a)}catch(t){if(t instanceof DOMException&&"DataCloneError"===t.name)throw t;u.location.assign(a)}d&&m&&m({action:p,location:x.location,delta:1})},replace:function(t,e){p=i.Replace;let r=c(x.location,t,e);n&&n(r,t),g=v();let o=l(r,g),a=x.createHref(r);f.replaceState(o,"",a),d&&m&&m({action:p,location:x.location,delta:0})},go:t=>f.go(t)};return x}var p;!function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"}(p||(p={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function m(t,e,n){void 0===n&&(n="/");let r=k(("string"==typeof e?d(e):e).pathname||"/",n);if(null==r)return null;let i=g(t);!function(t){t.sort(((t,e)=>t.score!==e.score?e.score-t.score:function(t,e){let n=t.length===e.length&&t.slice(0,-1).every(((t,n)=>t===e[n]));return n?t[t.length-1]-e[e.length-1]:0}(t.routesMeta.map((t=>t.childrenIndex)),e.routesMeta.map((t=>t.childrenIndex)))))}(i);let o=null;for(let t=0;null==o&&t<i.length;++t){let e=T(r);o=M(i[t],e)}return o}function g(t,e,n,r){void 0===e&&(e=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(t,i,o)=>{let a={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};a.relativePath.startsWith("/")&&(s(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let u=L([r,a.relativePath]),l=n.concat(a);t.children&&t.children.length>0&&(s(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),g(t.children,e,l,u)),(null!=t.path||t.index)&&e.push({path:u,score:A(u,t.index),routesMeta:l})};return t.forEach(((t,e)=>{var n;if(""!==t.path&&null!=(n=t.path)&&n.includes("?"))for(let n of v(t.path))i(t,e,n);else i(t,e)})),e}function v(t){let e=t.split("/");if(0===e.length)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=v(r.join("/")),s=[];return s.push(...a.map((t=>""===t?o:[o,t].join("/")))),i&&s.push(...a),s.map((e=>t.startsWith("/")&&""===e?"/":e))}const y=/^:[\w-]+$/,b=3,x=2,w=1,_=10,S=-2,E=t=>"*"===t;function A(t,e){let n=t.split("/"),r=n.length;return n.some(E)&&(r+=S),e&&(r+=x),n.filter((t=>!E(t))).reduce(((t,e)=>t+(y.test(e)?b:""===e?w:_)),r)}function M(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let t=0;t<n.length;++t){let a=n[t],s=t===n.length-1,u="/"===i?e:e.slice(i.length)||"/",l=C({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!l)return null;Object.assign(r,l.params);let c=a.route;o.push({params:r,pathname:L([i,l.pathname]),pathnameBase:R(L([i,l.pathnameBase])),route:c}),"/"!==l.pathnameBase&&(i=L([i,l.pathnameBase]))}return o}function C(t,e){"string"==typeof t&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=function(t,e,n){void 0===e&&(e=!1);void 0===n&&(n=!0);u("*"===t||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were "'+t.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+t.replace(/\*$/,"/*")+'".');let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((t,e,n)=>(r.push({paramName:e,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));t.endsWith("*")?(r.push({paramName:"*"}),i+="*"===t||"/*"===t?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==t&&"/"!==t&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,e?void 0:"i");return[o,r]}(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((t,e,n)=>{let{paramName:r,isOptional:i}=e;if("*"===r){let t=s[n]||"";a=o.slice(0,o.length-t.length).replace(/(.)\/+$/,"$1")}const u=s[n];return t[r]=i&&!u?void 0:(u||"").replace(/%2F/g,"/"),t}),{}),pathname:o,pathnameBase:a,pattern:t}}function T(t){try{return t.split("/").map((t=>decodeURIComponent(t).replace(/\//g,"%2F"))).join("/")}catch(e){return u(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+e+")."),t}}function k(t,e){if("/"===e)return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&"/"!==r?null:t.slice(n)||"/"}function I(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified `to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function N(t){return t.filter(((t,e)=>0===e||t.route.path&&t.route.path.length>0))}function P(t,e){let n=N(t);return e?n.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)):n.map((t=>t.pathnameBase))}function O(t,e,n,i){let o;void 0===i&&(i=!1),"string"==typeof t?o=d(t):(o=r({},t),s(!o.pathname||!o.pathname.includes("?"),I("?","pathname","search",o)),s(!o.pathname||!o.pathname.includes("#"),I("#","pathname","hash",o)),s(!o.search||!o.search.includes("#"),I("#","search","hash",o)));let a,u=""===t||""===o.pathname,l=u?"/":o.pathname;if(null==l)a=n;else{let t=e.length-1;if(!i&&l.startsWith("..")){let e=l.split("/");for(;".."===e[0];)e.shift(),t-=1;o.pathname=e.join("/")}a=t>=0?e[t]:"/"}let c=function(t,e){void 0===e&&(e="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof t?d(t):t,o=n?n.startsWith("/")?n:function(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach((t=>{".."===t?n.length>1&&n.pop():"."!==t&&n.push(t)})),n.length>1?n.join("/"):"/"}(n,e):e;return{pathname:o,search:D(r),hash:z(i)}}(o,a),h=l&&"/"!==l&&l.endsWith("/"),f=(u||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!h&&!f||(c.pathname+="/"),c}const L=t=>t.join("/").replace(/\/\/+/g,"/"),R=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),D=t=>t&&"?"!==t?t.startsWith("?")?t:"?"+t:"",z=t=>t&&"#"!==t?t.startsWith("#")?t:"#"+t:"";class F extends Error{}function B(t){return null!=t&&"number"==typeof t.status&&"string"==typeof t.statusText&&"boolean"==typeof t.internal&&"data"in t}const U=["post","put","patch","delete"],j=(new Set(U),["get",...U]);new Set(j),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},67466:(t,e,n)=>{"use strict";n.d(e,{addImpl:()=>m,bincountImpl:()=>v,bincountReduceImpl:()=>y,bitwiseAndImpl:()=>b,castImpl:()=>h,ceilImpl:()=>S,concatImpl:()=>E,equalImpl:()=>A,expImpl:()=>M,expm1Impl:()=>C,floorDivImpl:()=>k,floorImpl:()=>T,gatherNdImpl:()=>I,gatherV2Impl:()=>N,greaterEqualImpl:()=>O,greaterImpl:()=>P,lessEqualImpl:()=>R,lessImpl:()=>L,linSpaceImpl:()=>D,logImpl:()=>z,maxImpl:()=>F,maximumImpl:()=>B,minimumImpl:()=>U,multiplyImpl:()=>j,negImpl:()=>H,notEqualImpl:()=>G,prodImpl:()=>X,raggedGatherImpl:()=>K,raggedRangeImpl:()=>Q,raggedTensorToTensorImpl:()=>rt,rangeImpl:()=>it,rsqrtImpl:()=>ot,scatterImpl:()=>at,sigmoidImpl:()=>st,simpleAbsImpl:()=>o,sliceImpl:()=>ut,sparseFillEmptyRowsImpl:()=>lt,sparseReshapeImpl:()=>ct,sparseSegmentReductionImpl:()=>ht,sqrtImpl:()=>dt,staticRegexReplaceImpl:()=>ft,stridedSliceImpl:()=>pt,stringNGramsImpl:()=>gt,stringSplitImpl:()=>yt,stringToHashBucketFastImpl:()=>bt,subImpl:()=>xt,tileImpl:()=>_t,topKImpl:()=>At,transposeImpl:()=>W,uniqueImpl:()=>Mt});var r=n(86748);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(t,e){Array.isArray(t)||(t=[t]),t.forEach((t=>{null!=t&&r.util.assert("complex64"!==t.dtype,(()=>`${e} does not support complex64 tensors in the CPU backend.`))}))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function o(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;++n)e[n]=Math.abs(t[n]);return e}r.Abs;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function a(t){return(e,n,i,o,a)=>{const s=r.backend_util.assertAndGetBroadcastShape(e,n),u=s.length,l=r.util.computeStrides(s),c=r.util.sizeFromShape(s),h=r.util.getTypedArrayFromDType(a,c),d=e.length,f=n.length,p=r.util.computeStrides(e),m=r.util.computeStrides(n),g=r.backend_util.getBroadcastDims(e,s),v=r.backend_util.getBroadcastDims(n,s);if(g.length+v.length===0)for(let e=0;e<h.length;++e)h[e]=t(i[e%i.length],o[e%o.length]);else for(let e=0;e<h.length;++e){const n=r.util.indexToLoc(e,u,l),a=n.slice(-d);g.forEach((t=>a[t]=0));const s=r.util.locToIndex(a,d,p),c=n.slice(-f);v.forEach((t=>c[t]=0));const y=r.util.locToIndex(c,f,m);h[e]=t(i[s],o[y])}return[h,s]}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function s(t){const{inputs:e,backend:n}=t,{real:r,imag:i}=e,o=n.data.get(r.dataId).values,a=n.data.get(i.dataId).values,s=n.makeTensorInfo(r.shape,"complex64");return n.data.get(s.dataId).complexTensorInfos={real:n.makeTensorInfo(r.shape,"float32",o),imag:n.makeTensorInfo(i.shape,"float32",a)},s}r.Complex;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function u(t,e,n="float32"){if("complex64"===n){return s({inputs:{real:u(t,e,"float32"),imag:u(t,e,"float32")},backend:t})}const i=r.util.makeZerosTypedArray(r.util.sizeFromShape(e),n);return t.makeTensorInfo(e,n,i)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function l(t){const{inputs:e,backend:n}=t,{x:r}=e;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}r.Identity;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function c(t){const{inputs:e,backend:n}=t,{input:r}=e,i=n.data.get(r.dataId).complexTensorInfos.real,o=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,o)}r.Real;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function h(t,e,n,i){if("int32"===i){return[e,"int32",Int32Array.from(t)]}if("bool"===i){const i=r.util.toTypedArray([0],n),[o,s]=a(((t,e)=>t!==e?1:0))(e,[],t,i,"bool");return[s,"bool",o]}throw new Error(`Error in Cast: failed to cast ${n} to ${i}`)}function d(t){const{inputs:e,backend:n,attrs:i}=t,{x:o}=e,{dtype:a}=i;if("complex64"===a){if("complex64"===o.dtype)return l({inputs:{x:o},backend:n});const t=u(n,o.shape,o.dtype),e=d({inputs:{x:o},backend:n,attrs:{dtype:"float32"}}),r=s({inputs:{real:e,imag:t},backend:n});return n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(e),r}if("complex64"===o.dtype){const t=c({inputs:{input:o},backend:n}),e=d({inputs:{x:t},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(t),e}if(!r.util.hasEncodingLoss(o.dtype,a)){const t=l({inputs:{x:o},backend:n});return{dataId:t.dataId,shape:t.shape,dtype:a}}const f=n.data.get(o.dataId).values,[p,m,g]=h(f,o.shape,o.dtype,a);return n.makeTensorInfo(p,m,g)}r.Cast;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function f(t,e,n,o){return null==n?({inputs:n,backend:a})=>{const{a:s,b:u}=n,l=a;i([s,u],t);const c=l.data.get(s.dataId).values,h=l.data.get(u.dataId).values,d="string"===s.dtype?r.backend_util.fromUint8ToStringArray(c):c,f="string"===s.dtype?r.backend_util.fromUint8ToStringArray(h):h,p=o||s.dtype,[m,g]=e(s.shape,u.shape,d,f,p);return l.makeTensorInfo(g,p,m)}:({inputs:t,backend:r})=>{const{a:i,b:a}=t,u=r;if("complex64"===i.dtype||"complex64"===a.dtype){const t=d({inputs:{x:i},backend:u,attrs:{dtype:"complex64"}}),e=u.data.get(t.dataId),r=e.complexTensorInfos.real,o=e.complexTensorInfos.imag,l=u.data.get(r.dataId).values,c=u.data.get(o.dataId).values,h=d({inputs:{x:a},backend:u,attrs:{dtype:"complex64"}}),f=u.data.get(h.dataId),p=f.complexTensorInfos.real,m=f.complexTensorInfos.imag,g=u.data.get(p.dataId).values,v=u.data.get(m.dataId).values,[y,b,x]=n(i.shape,a.shape,l,c,g,v),w=u.makeTensorInfo(x,"float32",y),_=u.makeTensorInfo(x,"float32",b),S=s({inputs:{real:w,imag:_},backend:u});return u.disposeIntermediateTensorInfo(t),u.disposeIntermediateTensorInfo(h),u.disposeIntermediateTensorInfo(w),u.disposeIntermediateTensorInfo(_),S}{const t=u.data.get(i.dataId).values,n=u.data.get(a.dataId).values,r=o||i.dtype,[s,l]=e(i.shape,a.shape,t,n,r);return u.makeTensorInfo(l,r,s)}}}function p(t){return(e,n,i,o,a,s)=>{const u=r.backend_util.assertAndGetBroadcastShape(e,n),l=r.util.sizeFromShape(u),c=u.length,h=r.util.computeStrides(u),d=r.util.getTypedArrayFromDType("float32",l),f=r.util.getTypedArrayFromDType("float32",l),p=r.backend_util.getBroadcastDims(e,u),m=r.backend_util.getBroadcastDims(n,u),g=r.backend_util.mergeRealAndImagArrays(i,o),v=r.backend_util.mergeRealAndImagArrays(a,s),y=e.length,b=r.util.computeStrides(e),x=n.length,w=r.util.computeStrides(n);if(p.length+m.length===0)for(let e=0;e<d.length;e++){const n=e%g.length,r=e%v.length,i=t(g[2*n],g[2*n+1],v[2*r],v[2*r+1]);d[e]=i.real,f[e]=i.imag}else for(let e=0;e<d.length;e++){const n=r.util.indexToLoc(e,c,h),i=n.slice(-y);p.forEach((t=>i[t]=0));const o=r.util.locToIndex(i,y,b),a=n.slice(-x);m.forEach((t=>a[t]=0));const s=r.util.locToIndex(a,x,w),u=t(g[2*o],g[2*o+1],v[2*s],v[2*s+1]);d[e]=u.real,f[e]=u.imag}return[d,f,u]}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const m=a(((t,e)=>t+e)),g=p(((t,e,n,r)=>({real:t+n,imag:e+r})));f(r.Add,m,g),r.Add;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function v(t,e,n,i,o){const a=r.util.sizeFromShape(i),s=r.util.makeZerosTypedArray(o,n);for(let n=0;n<t.length;n++){const r=t[n];if(r<0)throw new Error("Input x must be non-negative!");r>=o||(s[r]+=a>0?e[n]:1)}return s}function y(t,e,n,i=!1){const o=t.shape[0],a=t.shape[1],s=(0,r.buffer)([o,n],e.dtype);for(let r=0;r<o;r++)for(let o=0;o<a;o++){const a=t.get(r,o);if(a<0)throw new Error("Input x must be non-negative!");a>=n||(i?s.set(1,r,a):e.size>0?s.set(s.get(r,a)+e.get(r,o),r,a):s.set(s.get(r,a)+1,r,a))}return s}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const b=a(((t,e)=>t&e));f(r.BitwiseAnd,b),r.BitwiseAnd;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function x(t){return(e,n,i)=>{const o=r.util.getArrayFromDType(n,e.length);for(let n=0;n<e.length;++n)o[n]=t(e[n],i);return o}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function w(t,e,n){return _(t,x(e),n)}function _(t,e,n){return({inputs:o,attrs:a,backend:s})=>{const{x:u}=o;i(u,t);const l=s,c=l.data.get(u.dataId).values;let h;if("string"===u.dtype){if(!Array.isArray(c))throw new Error("String tensor's value was not an instance of Array");h=r.backend_util.fromUint8ToStringArray(c)}else h=c;const d=n||u.dtype,f=e(h,d,a);return l.makeTensorInfo(u.shape,d,f)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const S=x((t=>Math.ceil(t)));_(r.Ceil,S),r.Ceil;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function E(t,e,n,i){const o=r.util.getArrayFromDType(n,r.util.sizeFromShape(e));if(i&&"string"!==n){let e=0;t.forEach((t=>{const n=r.util.sizeFromShape(t.shape);o.set(t.vals,e),e+=n}))}else{let i=0;t.forEach((t=>{const a="string"===n?r.backend_util.fromUint8ToStringArray(t.vals):t.vals;let s=0;for(let n=0;n<t.shape[0];++n){const r=n*e[1]+i;for(let e=0;e<t.shape[1];++e)o[r+e]=a[s++]}i+=t.shape[1]}))}return o}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const A=a(((t,e)=>t===e?1:0)),M=(f(r.Equal,A,null,"bool"),r.Equal,x((t=>Math.exp(t)))),C=(_(r.Exp,M,"float32"),r.Exp,x((t=>Math.expm1(t)))),T=(_(r.Expm1,C),r.Expm1,x((t=>Math.floor(t)))),k=(_(r.Floor,T),r.Floor,a(((t,e)=>Math.floor(t/e))));f(r.FloorDiv,k,null,"int32"),r.FloorDiv;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function I(t,e,n,i,o,a,s,u,l){const c=(0,r.buffer)([i,a],n);for(let n=0;n<i;n++){const r=[];let i=0;for(let e=0;e<o;e++){const a=t[n*o+e];i+=a*s[e],r.push(a)}if(i<0||i>=l/a)throw new Error(`Invalid indices: ${r} does not index into ${u}`);for(let t=0;t<a;t++)c.values[n*a+t]=e.get(...e.indexToLoc(i*a+t))}return c}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function N(t,e,n){const i=(0,r.buffer)(n,t.dtype);for(let n=0;n<i.size;++n){const r=i.indexToLoc(n).slice(),o=r[0],a=r[2],s=e.locToIndex([o,a]);r[2]=e.values[s];const u=t.locToIndex(r);0<=u&&u<t.values.length&&(i.values[n]=t.values[u])}return i}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const P=a(((t,e)=>t>e?1:0)),O=(f(r.Greater,P,null,"bool"),r.Greater,a(((t,e)=>t>=e?1:0))),L=(f(r.GreaterEqual,O,null,"bool"),r.GreaterEqual,a(((t,e)=>t<e?1:0))),R=(f(r.Less,L,null,"bool"),r.Less,a(((t,e)=>t<=e?1:0)));f(r.LessEqual,R,null,"bool"),r.LessEqual;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function D(t,e,n){const i=(e-t)/(n-1),o=r.util.makeZerosTypedArray(n,"float32");o[0]=t;for(let t=1;t<o.length;t++)o[t]=o[t-1]+i;return o}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const z=x((t=>Math.log(t)));_(r.Log,z),r.Log;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function F(t,e,n,i){const o=r.util.getTypedArrayFromDType(i,r.util.sizeFromShape(n));for(let n=0;n<o.length;++n){const r=n*e;let i=t[r];for(let n=0;n<e;++n){const e=t[r+n];(Number.isNaN(e)||e>i)&&(i=e)}o[n]=i}return o}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const B=a(((t,e)=>Math.max(t,e))),U=(f(r.Maximum,B),r.Maximum,a(((t,e)=>Math.min(t,e)))),j=(f(r.Minimum,U),r.Minimum,a(((t,e)=>t*e))),V=p(((t,e,n,r)=>({real:t*n-e*r,imag:t*r+e*n})));f(r.Multiply,j,V),r.Multiply;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function H(t,e,n){const i=r.util.createScalarValue(-1,n);return j([],e,i,t,n)}r.Neg;const G=a(((t,e)=>t!==e?1:0));f(r.NotEqual,G,null,"bool"),r.NotEqual;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function W(t,e,n,i,o){const a=e.length,s=r.util.sizeFromShape(e),u=r.util.computeStrides(e),l=r.util.computeStrides(o),c=r.util.getTypedArrayFromDType(n,r.util.sizeFromShape(o));for(let e=0;e<s;++e){const n=r.util.indexToLoc(e,a,u),o=new Array(n.length);for(let t=0;t<o.length;t++)o[t]=n[i[t]];c[r.util.locToIndex(o,a,l)]=t[e]}return c}r.Transpose;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function X(t,e,n,i){const[o,a]=r.backend_util.computeOutAndReduceShapes(t,i),s=(0,r.upcastType)(e,"int32"),u=r.util.makeZerosTypedArray(r.util.sizeFromShape(o),s),l=r.util.sizeFromShape(a);for(let t=0;t<u.length;++t){const e=t*l;let r=1;for(let t=0;t<l;++t)r*=n[e+t];u[t]=r}return{outVals:u,outShape:o,outDtype:s}}r.Prod;function Y(t,e,n,r){const i=[];let o=0;const a=e.length-1+n.length,s=new Array(a).fill(null).map((()=>[0]));!function(t,e){for(let n=0;n<t.length;++n){const r=t[n],i=n===t.length-1?e:t[n+1].length;if(0===r.length)throw new Error("Ragged splits may not be empty");if(r[0]<0)throw new Error("Ragged splits must be non-negative");if(r[r.length-1]>i)throw new Error("Ragged splits must not point past values");for(let t=1;t<r.length;++t)if(r[t-1]>r[t])throw new Error("Ragged splits must be sorted in ascending order")}}(n,r);let u=1;for(let t=0;t<e.length-1;++t){u*=e[t];const n=e[t+1];for(let e=1;e<u+1;++e)s[t].push(e*n)}for(let r=0;r<t.length;++r){let a=t[r],u=t[r]+1;for(let t=0;t<n.length;++t){const r=n[t],i=t+e.length-1;if(i>=0){const t=s[i],e=t[t.length-1]-r[a];for(let t=a;t<u;++t)s[i].push(r[t+1]+e)}a=r[a],u=r[u]}u!==a&&(i.push([a,u]),o+=u-a)}return{outSplits:s,valueSlices:i,numValues:o}}function q(t,e){const n=t.slice(0,e);for(;n.length<e;)n.push(1);for(let r=e;r<t.length;r++)n[e-1]*=t[r];return n}function $(t,e,n,i,o){const a=e.slice();a[0]=o;const s=r.util.getArrayFromDType(n,r.util.sizeFromShape(a)),u=t.length;return function(t,e,n,r,i,o){const a=q(e,2)[1],s=q(o,2)[1];let u=0;for(const e of n)for(let n=e[0];n<e[1];++n){for(let e=0;e<r;++e)i[u*s+e]=t[n*a+e];++u}}(t,e,i,0===u?0:u/e[0],s,a),[s,a]}function K(t,e,n,i,o,a,s,u){if(0===t.length)throw new Error("paramsNestedSplits must be non empty");if(0===e[0].length)throw new Error("Split tensors must not be scalars");if(
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n){t.forEach(((t,i)=>{if(t<0||t>=n){const o=r.util.indexToLoc(i,e.length,r.util.computeStrides(e)).join(",");throw new Error(`indices[${o}] = ${t} is not in [0, ${n})`)}}))}(a,s,e[0][0]-1),0===i.length)throw new Error("params.rank must be nonzero");const l=i[0],{outSplits:c,valueSlices:h,numValues:d}=Y(a,s,t,l),f=function(t){const e=[];for(let n=0;n<t.length;++n){const i=t[n].length,o=r.util.getArrayFromDType("int32",i);e.push(o),t[n].forEach(((t,e)=>o[e]=t))}return e}(c),p=$(n,i,o,h,d);return[f,p[0],p[1]]}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Z=2147483647;function Q(t,e,n,i,o,a,s){if(e.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(s.length>1)throw new Error("deltas must be a scalar or vector");const u=0===e.length,l=0===o.length,c=0===s.length,h=[];u||h.push(e[0]),l||h.push(o[0]),c||h.push(s[0]);for(let t=1;t<h.length;++t)if(h[t]!==h[t-1])throw new Error("starts, limits, and deltas must have the same shape");const d=0===h.length?1:h[0],f=r.util.getArrayFromDType("int32",d+1);f[0]=0;for(let e=0;e<d;++e){const n=u?t[0]:t[e],r=l?i[0]:i[e],o=c?a[0]:a[e];if(0===o)throw new Error("Requires delta != 0");let s;if(o>0&&r<n||o<0&&r>n)s=0;else if(s=Math.ceil(Math.abs((r-n)/o)),s>Z)throw new Error(`Requires ((limit - start) / delta) <= ${Z}`);f[e+1]=f[e]+s}const p=f[d],m=r.util.getArrayFromDType(n,p);let g=0;for(let e=0;e<d;++e){const n=f[e+1]-f[e];let r=u?t[0]:t[e];const i=c?a[0]:a[e];for(let t=0;t<n;++t)m[g++]=r,r+=i}return[f,m]}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var J=r.backend_util.RowPartitionType;class tt{constructor(t,e,n,i,o,a,s,u,l,c){this.shape=t,this.shapeShape=e,this.values=n,this.valuesShape=i,this.valuesDType=o,this.defaultValue=a,this.defaultValueShape=s,this.rowPartitionValues=u,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=r.backend_util.getRowPartitionTypesHelper(c),this.raggedRank=r.backend_util.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===J.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===J.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){const e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case J.VALUE_ROWIDS:return tt.getMaxWidthValueRowID(e);case J.ROW_SPLITS:return tt.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${J[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){const e=t.length;if(0===e||1===e)return 0;let n=0;for(let r=0;r<e-1;++r){const e=t[r+1]-t[r];e>n&&(n=e)}return n}static getMaxWidthValueRowID(t){const e=t.length;if(0===e)return 0;let n=0,r=t[0],i=0;for(let o=1;o<e;++o){const e=t[o];e!==r&&(r=e,i=Math.max(o-n,i),n=o)}return Math.max(e-n,i)}tensorShapeFromTensor(t,e,n=!0){if(0===e.length){if(-1===t[0])return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return nt(t,n)}calculateOutputSize(t){const e=this.valuesShape,n=this.defaultValueShape;r.backend_util.validateDefaultValueShape(n,e);const i=this.tensorShapeFromTensor(this.shape,this.shapeShape),o=r.backend_util.combineRaggedTensorToTensorShapes(this.raggedRank,i,e);o[0]<0&&(o[0]=t);for(let t=1;t<=this.raggedRank;++t)o[t]<0&&(o[t]=this.getMaxWidth(t));return o}calculateFirstParentOutputIndex(t,e,n){const i=Math.min(t,n),o=[];let a=0;for(let t=0;t<i;++t,a+=e)o.push(a);for(let e=i;e<t;++e)o.push(-1);return r.util.assert(o.length===t,(()=>"Final length of result must be equal to firstDimension.")),o}calculateOutputIndexRowSplit(t,e,n,r){const i=t.length,o=[];for(let a=0;a<i-1;++a){const i=t[a+1]-t[a];let s=Math.min(r,i),u=e[a];-1===u&&(s=0);for(let t=0;t<s;++t)o.push(u),u+=n;for(let t=0;t<i-s;++t)o.push(-1)}if(i>0&&o.length!==t[i-1])throw new Error("Invalid row split size.");return o}calculateOutputIndexValueRowID(t,e,n,r){const i=t.length,o=[];if(0===i)return[];let a=0,s=t[0];if(s>=e.length)throw new Error(`Got currentValueRowId=${s}, which is not less than ${e.length}`);let u=e[s];o.push(u);for(let l=1;l<i;++l){const i=t[l];if(i===s)u>=0&&(++a,a<r?u+=n:u=-1);else{if(a=0,s=i,i>=e.length)throw new Error(`Got nextValueRowId=${i} which is not less than ${e.length}`);u=e[i]}o.push(u)}if(o.length!==t.length)throw new Error("Invalid row ids.");return o}calculateOutputIndex(t,e,n,r){const i=this.getRowPartitionTensor(t),o=this.getRowPartitionTypeByDimension(t);switch(o){case J.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,e,n,r);case J.ROW_SPLITS:if(i.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${i.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(i,e,n,r);default:throw new Error(`Unsupported partition type: ${J[o]}`)}}getFirstDimensionSize(){const t=this.rowPartitionValues[0];if(0===this.rowPartitionTypes.length)throw new Error("No row_partition_types given.");const e=this.rowPartitionTypes[0];switch(e){case J.FIRST_DIM_SIZE:return t[0];case J.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case J.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${J[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),e=this.calculateOutputSize(t),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let t=n.length-2;t>=0;--t)n[t]=n[t+1]*e[t+1];const i=nt(e,!1),o=r.util.getArrayFromDType(this.valuesDType,r.util.sizeFromShape(i));if(n[0]*e[0]>0){let r=this.calculateFirstParentOutputIndex(t,n[0],e[0]);for(let t=1;t<=this.raggedRank;++t){r=this.calculateOutputIndex(t-1,r,n[t],e[t])}this.setOutput(this.raggedRank,r,o,i)}return[i,o]}setOutput(t,e,n,i){if(0===n.length)return;const o=this.values,a=n;let s=i.slice();s=s.slice(t+1);const u=r.util.sizeFromShape(s),l=e.length;let c=this.defaultValue;if(c.length!==u&&1!==c.length){const t=this.defaultValueShape;(0,r.tidy)((()=>{const e=(0,r.reshape)(c,t),n=(0,r.broadcastTo)(e,s);c=n.dataSync()}))}let h=0,d=0,f=0;for(let t=0;t<=l;++t){let r=t<l?e[t]:-1;if(r!==f){if(d<f){const t=o.subarray(h*u);et(a.subarray(d*u),t,(f-d)*u)}if(t>=l){const t=n.length;r=Math.floor(t/u)}if(r>f)if(1===this.defaultValue.length)a.subarray(f*u,r*u).fill(this.defaultValue[0]),f=r;else for(;r>f;){et(a.slice(f*u),c,u),++f}r<0?(h=t+1,d=f):(h=t,d=f,f=d+1)}else++f}}}function et(t,e,n){for(let r=0;r<n;r++)t[r]=e[r]}function nt(t,e){const n=[];for(let r of t){if(r<0){if(!e)throw new Error(`Dimension ${r} must be >= 0`);if(r<-1)throw new Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function rt(t,e,n,r,i,o,a,s,u,l){return new tt(t,e,n,r,i,o,a,s,u,l).compute()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function it(t,e,n,i){if(t===e||t<e&&n<0||e<t&&n>1)return r.util.makeZerosTypedArray(0,i);const o=Math.abs(Math.ceil((e-t)/n)),a=r.util.makeZerosTypedArray(o,i);e<t&&1===n&&(n=-1),a[0]=t;for(let t=1;t<a.length;t++)a[t]=a[t-1]+n;return a}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ot=x((t=>1/Math.sqrt(t)));_(r.Rsqrt,ot),r.Rsqrt;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function at(t,e,n,i,o,a,s,u,l,c){const h=[i/o,o],d=t.values,f=e.values;if(0===i)return(0,r.buffer)(n,e.dtype);const p=l instanceof r.TensorBuffer?l:(0,r.buffer)(h,e.dtype);"string"==typeof l||"number"==typeof l?p.values.fill(l):"boolean"==typeof l&&p.values.fill(+l);for(let t=0;t<a;t++){const r=[];let a=0;for(let e=0;e<s;e++){const n=d[t*s+e];r.push(n),a+=n*u[e]}if(a<0||a>=i/o)throw new Error(`Invalid indices: ${r} does not index into ${n}`);for(let n=0;n<o;n++)c?p.values[a*o+n]+=f[t*o+n]:p.values[a*o+n]=0===e.rank?f[0]:f[t*o+n]}return p}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const st=x((t=>1/(1+Math.exp(-t))));w(r.Sigmoid,(t=>1/(1+Math.exp(-t)))),r.Sigmoid;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ut(t,e,n,i,o){const a=r.slice_util.isSliceContinous(i,e,n),s=r.util.sizeFromShape(n),u=r.util.computeStrides(i);if(a){const n=r.slice_util.computeFlatOffset(e,u);return"string"===o?t.slice(n,n+s):t.subarray(n,n+s)}const l="string"===o?r.backend_util.fromUint8ToStringArray(t):t,c=(0,r.buffer)(i,o,l),h=(0,r.buffer)(n,o);for(let t=0;t<h.size;++t){const n=h.indexToLoc(t),r=n.map(((t,n)=>t+e[n]));h.set(c.get(...r),...n)}return"string"===o?r.backend_util.fromStringArrayToUint8(h.values):h.values}r.Slice;
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function lt(t,e,n,i,o,a,s){const u=e[0],l=a[0],c=new Array(l),h=new Array(u),d=e[1];if(0===l){if(0!==u)throw new Error(r.backend_util.getSparseFillEmptyRowsIndicesDenseShapeMismatch(u));return[r.util.getArrayFromDType(n,0),[0,d],r.util.getArrayFromDType(o,0),c,h]}let f=!0,p=0;const m=new Array(l).fill(0);for(let e=0;e<u;++e){const n=t[e*d];if(n<0)throw new Error(r.backend_util.getSparseFillEmptyRowsNegativeIndexErrorMessage(e,n));if(n>=l)throw new Error(r.backend_util.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(e,n,l));++m[n],f=f&&n>=p,p=n}let g=!0;for(let t=0;t<l;++t){const e=0===m[t];c[t]=e,g=g&&!e,m[t]=Math.max(m[t],1),t>0&&(m[t]+=m[t-1])}if(g&&f){const e=t,n=i;for(let t=0;t<u;++t)h[t]=t;return[e,[u,d],n,c,h]}{const e=m[l-1],a=r.util.getArrayFromDType(n,e*d),f=r.util.getArrayFromDType(o,e),p=new Array(l).fill(0);for(let e=0;e<u;++e){const n=t[e*d],r=p[n],o=(0===n?0:m[n-1])+r;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=t[e*d+n];f[o]=i[e],h[e]=o}for(let t=0;t<l;++t){if(0===p[t]){const e=0===t?0:m[t-1];a[e*d+0]=t;for(let t=1;t<d;++t)a[e*d+t]=0;f[e]=s}}return[a,[e,d],f,c,h]}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ct(t,e,n,i,o){const a=r.util.sizeFromShape(i),s=e[0],u=o.length,l=[];let c=1,h=-1;for(let t=0;t<u;++t){const e=o[t];if(-1===e){if(-1!==h)throw new Error(r.backend_util.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(h,t));h=t,l.push(1)}else{if(e<0)throw new Error(r.backend_util.getSparseReshapeNegativeOutputDimErrorMessage(t,e));c*=e,l.push(e)}}if(-1!==h){if(c<=0)throw new Error(r.backend_util.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());const t=Math.trunc(a/c);if(c*t!==a)throw new Error(r.backend_util.getSparseReshapeInputOutputMultipleErrorMessage(i,l));l[h]=t}if(r.util.sizeFromShape(l)!==a)throw new Error(r.backend_util.getSparseReshapeInputOutputMismatchErrorMessage(i,l));const d=i.length,f=[];if(d>0){f[d-1]=1;for(let t=d-2;t>=0;--t)f[t]=f[t+1]*i[t+1]}const p=[];if(u>0){p[u-1]=1;for(let t=u-2;t>=0;--t)p[t]=p[t+1]*l[t+1]}const m=r.util.getArrayFromDType(n,s*u);for(let e=0;e<s;++e){let n=0;for(let r=0;r<d;++r)n+=t[e*d+r]*f[r];for(let t=0;t<u;++t)m[e*u+t]=Math.trunc(n/p[t]),n%=p[t]}return[m,[s,u],l]}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ht(t,e,n,i,o,a=!1,s=0){const u=i.length,l=[e[0],t.length/e[0]],c=l[1],h=u>0?o[u-1]+1:0;if(h<0)throw new Error(r.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());const d=e.slice();d[0]=h;const f=d.reduce(((t,e)=>t*e),1),p=r.util.getArrayFromDType(n,f);if(0===u)return h>0&&p.fill(s),[p,d];if(h<=0)throw new Error(r.backend_util.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=0,g=1,v=0,y=o[m];for(;;){let e=0;if(g<u){if(e=o[g],y===e){++g;continue}if(y>=e)throw new Error(r.backend_util.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=h)throw new Error(r.backend_util.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,h));y>v&&p.fill(s,v*c,y*c);for(let e=m;e<g;++e){const n=i[e];if(n<0||n>=l[0])throw new Error(r.backend_util.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(e,i[e],l[0]));for(let e=0;e<c;e++)p[y*c+e]+=t[n*c+e]}if(a)for(let t=0;t<c;t++)p[y*c+t]/=g-m;if(m=g,++g,v=y+1,y=e,g>u)break}return v<h&&p.fill(s,v*c,h*c),[p,d]}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const dt=x((t=>Math.sqrt(t))),ft=(w(r.Sqrt,(t=>Math.sqrt(t))),r.Sqrt,x(((t,e)=>{const{pattern:n,replaceGlobal:r,rewrite:i}=e;return t.replace(new RegExp(n,r?"g":""),i)})));_(r.StaticRegexReplace,ft),r.StaticRegexReplace;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function pt(t,e,n,i){const o=(0,r.buffer)(t,e.dtype);for(let t=0;t<o.size;t++){const r=o.indexToLoc(t),a=new Array(r.length);for(let t=0;t<a.length;t++)a[t]=r[t]*n[t]+i[t];o.set(e.get(...a),...r)}return o}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class mt{constructor(t,e,n,i,o,a){this.separator=r.util.encodeString(t),this.nGramWidths=e,this.leftPad=r.util.encodeString(n),this.rightPad=r.util.encodeString(i),this.padWidth=o,this.preserveShort=a}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){const n=this.getPadWidth(e);return Math.max(0,t+2*n-e+1)}createNGrams(t,e,n,r,i,o){for(let a=0;a<i;++a){const s=this.getPadWidth(o),u=Math.max(0,s-a),l=Math.max(0,s-(i-(a+1))),c=o-(u+l),h=e+(u>0?0:a-s);let d=0;d+=u*this.leftPad.length;for(let e=0;e<c;++e)d+=t[h+e].length;d+=l*this.rightPad.length;d+=(u+l+c-1)*this.separator.length,n[r+a]=new Uint8Array(d);const f=n[r+a];let p=0;const m=t=>t.forEach((t=>f[p++]=t));for(let t=0;t<u;++t)m(this.leftPad),m(this.separator);for(let e=0;e<c-1;++e)m(t[h+e]),m(this.separator);if(c>0){m(t[h+c-1]);for(let t=0;t<l;++t)m(this.separator),m(this.rightPad)}else{for(let t=0;t<l-1;++t)m(this.rightPad),m(this.separator);m(this.rightPad)}}}compute(t,e){const n=t.length,i=e.length;if(i>0){let t=e[0];if(0!==t)throw new Error(`First split value must be 0, got ${t}`);for(let r=1;r<i;++r){let i=e[r]>=t;if(i=i&&e[r]<=n,!i)throw new Error(`Invalid split value ${e[r]}, must be in [${t}, ${n}]`);t=e[r]}if(t!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${t}`)}const o=i-1,a=r.util.getArrayFromDType("int32",i);if(0===n||0===i){const t=new Array(n);for(let t=0;t<=o;++t)a[t]=0;return[t,a]}a[0]=0;for(let t=1;t<=o;++t){const n=e[t]-e[t-1];let r=0;this.nGramWidths.forEach((t=>{r+=this.getNumNGrams(n,t)})),this.preserveShort&&n>0&&0===r&&(r=1),a[t]=a[t-1]+r}const s=new Array(a[o]);for(let n=0;n<o;++n){const r=e[n];let i=a[n];if(this.nGramWidths.forEach((o=>{const a=e[n+1]-e[n],u=this.getNumNGrams(a,o);this.createNGrams(t,r,s,i,u,o),i+=u})),this.preserveShort&&i===a[n]){const o=e[n+1]-e[n];if(0===o)continue;const a=o+2*this.padWidth,u=1;this.createNGrams(t,r,s,i,u,a)}}return[s,a]}}function gt(t,e,n,r,i,o,a,s){return new mt(n,r,i,o,a,s).compute(t,e)}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vt(t,e,n,r){if(!t.length)return;if(0===e.length){for(let e=0;e<t.length;++e)r.push(t.subarray(e,e+1));return}if(1===e.length){const i=e[0];let o=t.indexOf(i);for(;-1!==o;){const e=t.subarray(0,o);n&&0===e.length||r.push(e),o=(t=t.subarray(o+1)).indexOf(i)}return void(n&&0===t.length||r.push(t))}let i=0;for(let o=0;o<t.length+1;o++)if(o===t.length||-1!==e.indexOf(t[o])){const e=t.subarray(i,o);n&&0===e.length||r.push(e),i=o+1}}function yt(t,e,n){const i=t.length,o=[];let a=0,s=0;const u=new Array(i);for(let r=0;r<i;++r){const i=o.length;vt(t[r],e,n,o);const l=o.length-i;u[r]=l,a+=l,s=Math.max(s,l)}const l=r.util.getArrayFromDType("int32",2*a),c=new Array(a),h=[i,s];let d=0;for(let t=0;t<i;++t)for(let e=0;e<u[t];++e)l[2*d]=t,l[2*d+1]=e,c[d]=o[d],++d;return[l,c,h]}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bt(t,e){const n=r.util.getArrayFromDType("int32",t.length);for(let i=0;i<t.length;++i)n[i]=r.util.fingerPrint64(t[i]).modulo(e).getLowBitsUnsigned();return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xt=a(((t,e)=>t-e)),wt=p(((t,e,n,r)=>({real:t-n,imag:e-r})));f(r.Sub,xt,wt),r.Sub;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _t(t,e){const n=new Array(t.rank);for(let r=0;r<n.length;r++)n[r]=t.shape[r]*e[r];const i=(0,r.buffer)(n,t.dtype);for(let e=0;e<i.values.length;++e){const n=i.indexToLoc(e),r=new Array(t.rank);for(let e=0;e<r.length;e++)r[e]=n[e]%t.shape[e];const o=t.locToIndex(r);i.values[e]=t.values[o]}return i}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const St=(t,e)=>{const n=e.value-t.value;return 0===n?t.index-e.index:n};function Et(t,e,n=0,i=t.length-1){for(;i>n;){if(i-n>600){const r=i-n+1,o=e-n+1,a=Math.log(r),s=.5*Math.exp(2*a/3),u=.5*Math.sqrt(a*s*(r-s)/r)*Math.sign(o-r/2);Et(t,e,Math.max(n,Math.floor(e-o*s/r+u)),Math.min(i,Math.floor(e+(r-o)*s/r+u)))}const o=t[e];let a=n,s=i;for(r.util.swap(t,n,e),St(t[i],o)>0&&r.util.swap(t,n,i);a<s;){for(r.util.swap(t,a,s),a++,s--;St(t[a],o)<0;)a+=1;for(;St(t[s],o)>0;)s-=1}0===St(t[n],o)?r.util.swap(t,n,s):(s+=1,r.util.swap(t,s,i)),s<=e&&(n=s+1),e<=s&&(i=s-1)}}function At(t,e,n,i,o){const a=e[e.length-1],[s,u]=[t.length/a,a],l=r.util.getTypedArrayFromDType(n,s*i),c=r.util.getTypedArrayFromDType("int32",s*i);for(let e=0;e<s;e++){const n=e*u,r=t.subarray(n,n+u);let a=new Array(r.length);r.forEach(((t,e)=>a[e]={value:t,index:e})),i<a.length&&(Et(a,i),a=a.slice(0,i)),o&&a.sort(St);const s=e*i,h=l.subarray(s,s+i),d=c.subarray(s,s+i);for(let t=0;t<i;t++)h[t]=a[t].value,d[t]=a[t].index}const h=e.slice();return h[h.length-1]=i,[(0,r.buffer)(h,n,l),(0,r.buffer)(h,"int32",c)]}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Mt(t,e,n,i){const o=r.util.parseAxisParam(e,n)[0],a=[1,n[0],1];for(let t=0;t<o;t++)a[0]*=n[t];a[1]=n[o];for(let t=o+1;t<n.length;t++)a[2]*=n[t];const s=new Map,u=new Int32Array(n[o]),l=new r.TensorBuffer(a,i,t),c=[],h=1===a[0]&&1===a[2];for(let e=0;e<n[o];e++){let n;if(h)n=t[e].toString();else{const t=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)t.push(l.get(n,e,r));n=t.join(",")}const r=s.get(n);if(null!=r)u[e]=r;else{const t=s.size;s.set(n,t),u[e]=t,c.push(e)}}const d=a.slice();d[1]=s.size;const f=new r.TensorBuffer(d,i);c.forEach(((t,e)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(l.get(n,t,r),n,e,r)}));const p=n.slice();return p[o]=d[1],{outputValues:f.values,outputShape:p,indices:u}}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,7511:(t,e,n)=>{"use strict";n.d(e,{l:()=>U,w:()=>r});var r={};n.r(r),n.d(r,{GPUBytesPerElement:()=>R,MatMulProgramType:()=>F,assertNotComplex:()=>z,computeDispatch:()=>I,computeWorkPerThreadForConv2d:()=>O,computeWorkgroupInfoForMatMul:()=>N,computeWorkgroupSizeForConv2d:()=>P,flatDispatchLayout:()=>L,isWebGPUSupported:()=>D,tilesFitEvenlyIntoShape:()=>k});var i=n(86748);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const o=(0,i.env)();o.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",(()=>15)),o.registerFlag("WEBGPU_CPU_FORWARD",(()=>!0)),o.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",(()=>-1)),o.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",(()=>!0)),o.registerFlag("WEBGPU_USE_LOW_POWER_GPU",(()=>!1)),o.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",(()=>1e3)),o.registerFlag("WEBGPU_USE_PROFILE_TOOL",(()=>!1)),o.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",(()=>!0)),o.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",(()=>!1)),o.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",(()=>-1)),o.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",(()=>!1)),o.registerFlag("WEBGPU_PRINT_SHADER",(()=>"")),o.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",(()=>!1));
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class a{constructor(t){t&&(this.vendor=t.vendor,this.architecture=t.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return"intel"===this.vendor}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class s{constructor(t){this.device=t,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(t,e,n=!1,r=!0){let i;const o=u(t,e);return r?(this.freeBuffers.has(o)||this.freeBuffers.set(o,[]),this.freeBuffers.get(o).length>0?(i=this.freeBuffers.get(o).pop(),this.numFreeBuffers--):(i=this.device.createBuffer({size:t,usage:e,mappedAtCreation:n}),this.numBytesAllocated+=t)):(i=this.device.createBuffer({size:t,usage:e,mappedAtCreation:n}),this.numBytesAllocated+=t),this.usedBuffers.has(o)||this.usedBuffers.set(o,[]),this.usedBuffers.get(o).push(i),this.numUsedBuffers++,this.numBytesUsed+=t,i}releaseBuffer(t,e=!0){if(0===this.freeBuffers.size)return;const n=t.size,r=u(n,t.usage),i=this.usedBuffers.get(r),o=i.indexOf(t);if(o<0)throw new Error("Cannot find the buffer in buffer manager");i[o]=i[i.length-1],i.pop(),this.numUsedBuffers--,this.numBytesUsed-=n,e?(this.freeBuffers.get(r).push(t),this.numFreeBuffers++):(t.destroy(),this.numBytesAllocated-=n)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach(((t,e)=>{t.forEach((t=>{t.destroy()}))})),this.usedBuffers.forEach(((t,e)=>{t.forEach((t=>{t.destroy()}))})),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function u(t,e){return`${t}_${e}`}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class l{constructor(t){this.device=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(t,e,n,r){const i=t*e*h(n),o=c(t,e,n,r);if(this.freeTextures.has(o)||this.freeTextures.set(o,[]),this.usedTextures.has(o)||this.usedTextures.set(o,[]),this.numBytesUsed+=i,this.numUsedTextures++,this.freeTextures.get(o).length>0){this.numFreeTextures--;const t=this.freeTextures.get(o).shift();return this.usedTextures.get(o).push(t),t}this.numBytesAllocated+=i;const a=this.device.createTexture({size:[t,e],format:n,usage:r});return this.usedTextures.get(o).push(a),a}releaseTexture(t){if(0===this.freeTextures.size)return;const e=t.width,n=t.height,r=t.format,i=c(e,n,r,t.usage);this.freeTextures.has(i)||this.freeTextures.set(i,[]),this.freeTextures.get(i).push(t),this.numFreeTextures++,this.numUsedTextures--;const o=this.usedTextures.get(i),a=o.indexOf(t);if(a<0)throw new Error("Cannot release a texture that was never provided by this texture manager");o.splice(a,1);const s=e*n*h(r);this.numBytesUsed-=s}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach(((t,e)=>{t.forEach((t=>{t.destroy()}))})),this.usedTextures.forEach(((t,e)=>{t.forEach((t=>{t.destroy()}))})),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function c(t,e,n,r){return`${t}_${e}_${n}_${r}`}function h(t){if("rgba8unorm"===t)return 16;throw new Error(`${t} is not supported!`)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function d(t,e){if(Math.max(...t)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const n=t.length,r=t.map((t=>`${e}.${"xyzwuv"[t]}`)),i=new Array(n-1);i[n-2]=r[n-1];for(let t=n-3;t>=0;--t)i[t]=`(${i[t+1]} * ${r[t+1]})`;return i}const f=(t,e,n)=>"int32"===n?`atomicAdd(${t}, bitcast<i32>(${e}));`:`\n          {\n            var oldValue = 0;\n            loop {\n              let newValueF32 = bitcast<f32>(oldValue) + (${e});\n              let newValue = bitcast<i32>(newValueF32);\n              let res = atomicCompareExchangeWeak(${t}, oldValue, newValue);\n              if res.exchanged {\n                break;\n              }\n              oldValue = res.old_value;\n            }\n          }`;
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var p;!function(t){t[t.FROM_PIXELS=0]="FROM_PIXELS",t[t.DRAW=1]="DRAW"}(p||(p={}));const m=(t,e,n,r,o)=>{const a=function(t,e,n){const r=[],o=n.workgroupSize[0]*n.workgroupSize[1]*n.workgroupSize[2];if(n.outputComponent=n.outputComponent?n.outputComponent:1,r.push(`\n\n      var<private> localId: vec3<u32>;\n      var<private> localIndex: u32;\n      var<private> globalId: vec3<u32>;\n      var<private> numWorkgroups: vec3<u32>;\n      var<private> workgroupId: vec3<u32>;\n\n      // Only used when the y/z dimension of workgroup size is 1.\n      fn getGlobalIndex() -> i32 {\n        ${A(n)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +\n                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${o}u +\n                localIndex);\n        `}\n      }\n    `),null!=n.pixelsOpType){const i=n.pixelsOpType===p.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${M(e.dtype,n.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${M(t[0].dtype,n.outputComponent)}>;`,o=3===e.shape.length?"vec2<i32>":"i32";r.push(`\n        struct Uniform {\n          outShapeStrides : ${o},\n          size            : i32,\n          numChannels     : i32,\n          alpha           : f32,\n        };\n\n        ${i}\n        @group(0) @binding(2) var<uniform> uniforms: Uniform;\n      `);const a=C(n);return[w,r.join("\n"),S(e.shape),n.getUserCode(),x(a,n)].join("\n")}let a,s,u="struct Uniforms { NAN : f32, INFINITY : f32, ";n.variableNames.forEach(((e,n)=>{const r=v(t[n].shape.length);u+=`${e.charAt(0).toLowerCase()+e.slice(1)}Shape : ${r}, `,a=t[n].shape.length-1,s=v(a),u+=`${e.charAt(0).toLowerCase()+e.slice(1)}ShapeStrides: ${s}, `}));const l=v(e.shape.length);u+=`outShape : ${l}, `,a=e.shape.length-1,s=v(a),u+=`\n         outShapeStrides: ${s}, `,n.size&&(u+="size : i32, ");n.uniforms&&(u+=n.uniforms);u+="};",u=function(t){const e=/(\w+)\s*:\s*vec(5|6)/g;t=t.replace(e,(t=>"@align(16) "+t));const n=/vec(5|6)\s*,\s*(\w+)/g;return t=t.replace(n,((t,e,n)=>`vec${e}, @align(16) ${n}`))}(u),r.push(u),n.atomic?r.push("\n      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;\n    "):r.push(`\n      @group(0) @binding(0) var<storage, read_write> result: array<${M(e.dtype,n.outputComponent)}>;\n    `);n.variableNames.forEach(((e,i)=>{r.push(`\n      @group(0) @binding(${1+i}) var<storage, read> ${e}: array<${n.variableComponents?M(t[i].dtype,n.variableComponents[i]):M(t[i].dtype,n.outputComponent)}>;\n        `)})),""!==u&&r.push(`\n      @group(0) @binding(${1+n.variableNames.length}) var<uniform> uniforms: Uniforms;\n      `);const c=function(t,e){const{x:n,y:r=[],z:i=[]}=e,o=t.length,a=n.length+r.length+i.length;if(a!==o)return"";if(n.length===o){return`fn getOutputCoords() -> ${v(o)}{\n    let globalIndex = getGlobalIndex();\n    return getCoordsFromIndex(globalIndex);\n  }\n  `}let s="";const u=[n,r,i];for(let t=0;t<u.length;t++){const e=u[t];if(0!==e.length)if(1===e.length)s+=`let d${e[0]} = i32(globalId[${t}]);`;else{const n=d(e,"uniforms.outShape");s+=`var index${t} = i32(globalId[${t}]);`;for(let r=0;r<n.length;r++)s+=`let d${e[r]} = index${t} / ${n[r]};`,r===n.length-1?s+=`let d${e[r+1]} = index${t} - d${e[r]} * ${n[r]};`:s+=`index${t} = index${t} - d${e[r]} * ${n[r]};`}}const l=[];for(let t=0;t<a;t++)l.push(`d${t}`);const c=v(a);let h=`fn getOutputCoords() -> ${c} {\n  ${s}\n`;0===l.length?h+=`return ${c}(0); }`:h+=`return ${c}(${l.join(",")}); }`;return h}(e.shape,n.dispatchLayout),h=[w,r.join("\n")+_,S(e.shape),c,E(e.shape.length)];n.atomic||h.push(function(t,e,n){const r=t.length,i=M(e,n);let o=`fn setOutputAtIndex(flatIndex : i32, value : ${g(n)}) {\n      result[flatIndex] = ${i}(value);\n    }\n\n    fn setOutputAtIndexI32(flatIndex : i32, value : ${g(n,"i32")}) {\n      result[flatIndex] = ${i}(value);\n    }\n    `;if(r>=2){const t=["d0","d1","d2","d3","d4","d5"].slice(0,r),e=v(r);o+=`\n      fn setOutputAtCoords(${t.map((t=>`${t} : i32`)).join(", ")}, value : ${g(n)}) {\n        let flatIndex = getOutputIndexFromCoords(${e}(${t.join(", ")}));\n        setOutputAtIndex(flatIndex${1===n?"":` / ${n}`}, value);\n      }\n      fn setOutputAtCoordsI32(${t.map((t=>`${t} : i32`)).join(", ")}, value : ${g(n,"i32")}) {\n        let flatIndex = getOutputIndexFromCoords(${e}(${t.join(", ")}));\n        setOutputAtIndexI32(flatIndex${1===n?"":` / ${n}`}, value);\n      }\n    `}return o}(e.shape,e.dtype,n.outputComponent));n.variableNames.forEach(((e,n)=>{h.push(`${S(t[n].shape,e)}`)}));const f=t.map(((t,r)=>function(t,e,n,r){let o=function(t,e){const n=t.name,r=t.shape.length,i=v(r),o="get"+n.charAt(0).toUpperCase()+n.slice(1),a=["d0","d1","d2","d3","d4","d5"].slice(0,r),s=a.map((t=>`${t} : i32`)).join(", ");if(r<1)return`\n      fn ${o}() -> ${g(e)} {\n        return ${g(e)}(${n}[0]);\n      }\n    `;const u=`uniforms.${n.charAt(0).toLowerCase()+n.slice(1)}Shape`;let l=`${r}D`;0===r&&(l="1D");return`\n    fn ${o}(${s}) -> ${g(e)} {\n      return ${g(e)}(${n}[getIndexFromCoords${l}(${i}(${a.join(",")}),\n        ${u})${1===e?"":` / ${e}`}]);\n    }\n   `}(t,n);const a=t.shape;a.length<=e.length&&(o+=function(t,e,n,r){const o=t.name,a=o.charAt(0).toUpperCase()+o.slice(1),s="get"+a+"ByOutput",u=t.shape.length,l=e.length,c=v(l);if(i.util.arraysEqual(t.shape,e)&&r)return`\n    fn ${s}Index(globalIndex : i32) -> ${g(n)} {\n      return ${g(n)}(${o}[globalIndex]);\n    }\n\n    fn ${s}Coords(coords : ${c}) -> ${g(n)} {\n      return ${g(n)}(${o}[${l>1?"getOutputIndexFromCoords(coords)":"coords"}${1===n?"":` / ${n}`}]);\n    }\n    `;const h=i.backend_util.getBroadcastDims(t.shape,e),d=l-u;let f="";if(0===u)return`\n    fn ${s}Index(globalIndex : i32) -> ${g(n)}{\n      return get${a}();\n    }\n\n    fn ${s}Coords(coords : ${c}) -> ${g(n)}{\n      return get${a}();\n    }\n  `;f=l<2&&h.length>=1?"coords = 0;":h.map((t=>`coords.${y(t+d)} = 0;`)).join("\n");let p="";if(l<2&&u>0)p="coords";else if(l>1){const e=v(u),n=t.shape.map(((t,e)=>`coords.${y(e+d)}`)).join(", ");p=`${e}(${n})`}else p="coords";const m=`uniforms.${o.charAt(0).toLowerCase()+o.slice(1)}Shape`,b=`${u}D`;return`\n  fn ${s}Index(globalIndex : i32) -> ${g(n)} {\n    var coords = getCoordsFromIndex(globalIndex);\n    ${f}\n    return ${g(n)}(${o}[getIndexFromCoords${b}(${p}, ${m})${1===n?"":` / ${n}`}]);\n  }\n\n  fn ${s}Coords(coordsIn : ${c}) -> ${g(n)} {\n    var coords = coordsIn;\n    ${f}\n    return ${g(n)}(${o}[getIndexFromCoords${b}(${p}, ${m})${1===n?"":` / ${n}`}]);\n  }\n`}(t,e,n,r));return o}(t,e.shape,n.variableComponents?n.variableComponents[r]:n.outputComponent,n.dispatchLayout.x.length===e.shape.length))).join("\n");h.push(f),h.push(n.getUserCode());const m=C(n);h.push(x(m,n));const b=h.join("\n");return b}(n,{dtype:r.dtype,shape:r.shape},e),s=t.createShaderModule({code:a,label:e.constructor.name});let u=(0,i.env)().get("WEBGPU_PRINT_SHADER");if(""!==u){u=u.toLowerCase();const t=u.split(",");("all"===u||t.some((t=>e.shaderKey.toLowerCase().includes(t))))&&(console.group(e.shaderKey),console.debug(a),console.groupEnd())}return o?t.createComputePipelineAsync({compute:{module:s,entryPoint:"_start"},label:e.constructor.name,layout:"auto"}):t.createComputePipeline({compute:{module:s,entryPoint:"_start"},label:e.constructor.name,layout:"auto"})},g=(t,e="f32")=>{switch(t){case 1:return`${e}`;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${t}-component ${e} is not supported.`)}};function v(t){if(t<=1)return"i32";if(2===t)return"vec2<i32>";if(3===t)return"vec3<i32>";if(4===t)return"vec4<i32>";if(5===t)return"vec5";if(6===t)return"vec6";throw Error(`GPU for rank ${t} is not yet supported`)}function y(t){if(0===t)return"x";if(1===t)return"y";if(2===t)return"z";if(3===t)return"w";if(4===t)return"u";if(5===t)return"v";throw Error(`Index ${t} is not yet supported`)}function b(...t){let e;switch(t.length){case 0:e="\n        fn main()\n      ";break;case 1:e=`\n        fn main(${t[0]} : i32)\n      `;break;default:throw Error("Unreachable")}return e}function x(t,e){let n;return n=`\n     ${function(t){return`\n  @compute @workgroup_size(${t.workgroupSize[0]}, ${t.workgroupSize[1]}, ${t.workgroupSize[2]})\n`}(e)}\n      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,\n                @builtin(global_invocation_id) GlobalId : vec3<u32>,\n                @builtin(local_invocation_index) LocalIndex: u32,\n                @builtin(workgroup_id) WorkgroupId : vec3<u32>,\n                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {\n        localId = LocalId;\n        localIndex = LocalIndex;\n        globalId = GlobalId;\n        numWorkgroups = NumWorkgroups;\n        workgroupId = WorkgroupId;\n        ${t?"main(getGlobalIndex());":"main();"};\n      }\n    `,n}const w="\n  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};\n  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};\n\n  // Checks whether coordinates lie within the bounds of the shape.\n  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {\n    return all(coord >= vec2<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {\n    return all(coord >= vec3<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {\n    return all(coord >= vec4<i32>(0)) && all(coord < shape);\n  }\n\n  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {\n    return coord;\n  }\n  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {\n    return dot(coords, vec2<i32>(shape.y, 1));\n  }\n  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {\n    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));\n  }\n  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {\n    return dot(coords, vec4<i32>(\n        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));\n  }\n  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {\n    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;\n  }\n  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {\n    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;\n  }\n\n  // NaN defination in IEEE 754-1985 is :\n  //   - sign = either 0 or 1.\n  //   - biased exponent = all 1 bits.\n  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).\n  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers\n  fn isnan(val: f32) -> bool {\n    let floatToUint: u32 = bitcast<u32>(val);\n    return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n  }\n  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {\n    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);\n    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);\n  }\n",_="\n  fn isinf(val: f32) -> bool {\n    return abs(val) == uniforms.INFINITY;\n  }\n";function S(t,e=""){const n=t.length,r=""!==e?`get${e.charAt(0).toUpperCase()+e.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",o=""!==e?`${e.charAt(0).toLowerCase()+e.slice(1)}ShapeStrides`:"outShapeStrides";if(n<=1)return`fn ${r}(index : i32) -> i32 { return index; }`;const a=i.util.computeStrides(t),s=v(n),u=[];for(let t=0;t<n;t++)u.push(`d${t}`);if(1===a.length)return`    fn ${r}(index : i32) -> vec2<i32> {\n      let d0 = index / uniforms.${o}; let d1 = index - d0 * uniforms.${o};\n      return vec2<i32>(d0, d1);\n    }`;let l;return l="var index2 = index;"+a.map(((t,e)=>`${`let ${u[e]} = index2 / uniforms.${o}.${y(e)}`}; ${e===a.length-1?`let ${u[e+1]} = index2 - ${u[e]} * uniforms.${o}.${y(e)}`:`index2 = index2 - ${u[e]} * uniforms.${o}.${y(e)}`};`)).join(""),`\n    fn ${r}(index : i32) -> ${s} {\n      ${l}\n      return ${s}(${u.join(",")});\n    }\n  `}function E(t){let e="";switch(t){case 0:case 1:e+="\n        fn getOutputIndexFromCoords(coords : i32) -> i32 {\n          return coords;\n        }\n        ";break;case 2:e+="\n        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {\n          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));\n        }\n        ";break;case 3:e+="\n        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {\n          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));\n        }\n        ";break;case 4:e+="\n        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {\n          return dot(coords, vec4<i32>(\n            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));\n        }\n        ";break;case 5:e+="\n        fn getOutputIndexFromCoords(coords : vec5) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u;\n        }\n        ";break;case 6:e+="\n        fn getOutputIndexFromCoords(coords : vec6) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u * uniforms.outShapeStrides.u +\n              coords.v;\n        }\n        ";break;default:i.util.assert(!1,(()=>`Unsupported ${t}D shape`))}return e}function A(t){return 1===t.dispatch[1]&&1===t.dispatch[2]}function M(t,e=1){if("float32"===t)return g(e,"f32");if("int32"===t||"bool"===t)return g(e,"i32");throw new Error(`type ${t} is not supported.`)}function C(t){return(!t.dispatchLayout.hasOwnProperty("y")||0===t.dispatchLayout.y.length)&&(!t.dispatchLayout.hasOwnProperty("z")||0===t.dispatchLayout.z.length)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const T=t=>{let e=1;for(let n=0;n<t.length;n++)e*=t[n];return e};function k(t,e){if(t.length!==e.length)throw new Error(`Cannot compute whether rank ${t.length} tiles fit evenly into rank ${e.length} shape - ranks must match.`);return e.every(((e,n)=>e%t[n]==0))}function I(t,e,n=[1,1,1],r=[1,1,1]){const[i,o,a]=[Math.ceil(T(t.x.map((t=>e[t])))/(n[0]*r[0])),t.y?Math.ceil(T(t.y.map((t=>e[t])))/(n[1]*r[1])):1,t.z?Math.ceil(T(t.z.map((t=>e[t])))/(n[2]*r[2])):1];return[i,o,a]}function N(t,e,n,r=!1){const i=[8,8,1],o=[4,4,1];return r||(t<=8&&(o[1]=1),e<=16&&n<=16&&(i[0]=4)),{workgroupSize:i,elementsPerThread:o}}function P(t,e,n=!1){if(n)return[8,8,1];const r=T(t.x.map((t=>e[t]))),i=T(t.y.map((t=>e[t])));return r<=4?[4,16,1]:i<=4?[16,4,1]:[16,16,1]}function O(t,e,n=!1){if(n)return[4,4,1];const r=T(t.x.map((t=>e[t]))),i=T(t.y.map((t=>e[t])));return r<=4?[1,2,1]:i<=4?[2,1,1]:[2,2,1]}function L(t){return{x:t.map(((t,e)=>e))}}function R(t){if("float32"===t||"int32"===t||"bool"===t||"string"===t)return 4;if("complex64"===t)return 8;throw new Error(`Unknown dtype ${t}`)}function D(){return!("undefined"==typeof globalThis||!globalThis.navigator||!globalThis.navigator.gpu)}function z(t,e){Array.isArray(t)||(t=[t]),t.forEach((t=>{null!=t&&i.util.assert("complex64"!==t.dtype,(()=>`${e} does not support complex64 tensors in the WebGPU backend.`))}))}var F;!function(t){t[t.MatMulReduceProgram=0]="MatMulReduceProgram",t[t.MatMulSplitKProgram=1]="MatMulSplitKProgram",t[t.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",t[t.MatMulPackedProgram=3]="MatMulPackedProgram",t[t.MatMulMax=4]="MatMulMax"}(F||(F={}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const B=(0,i.env)().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD");class U extends i.KernelBackend{nextDataId(){return U.nextDataId++}constructor(t,e){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!D())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=t,this.queue=t.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new a(e),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new s(this.device),this.textureManager=new l(this.device),this.tensorMap=new i.DataStorage(this,(0,i.engine)()),(0,i.env)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:t,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(t,e=!1){if(!this.tensorMap.has(t))return!0;const n=this.tensorMap.get(t);return e?n.refCount=0:n.refCount--,!(n.refCount>0)&&(null!=n.complexTensorInfos&&(this.disposeData(n.complexTensorInfos.real.dataId),this.disposeData(n.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(t)?(this.tensorDataPendingDisposal.push(t),!0):(this.releaseResource(t),this.tensorMap.delete(t),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(t){const e=this.tensorMap.get(t);e&&e.resource&&(e.external||(e.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(e.resource):e.resource instanceof GPUTexture&&this.textureManager.releaseTexture(e.resource)),e.resource=null)}refCount(t){if(this.tensorMap.has(t)){return this.tensorMap.get(t).refCount}return 0}incRef(t){this.tensorMap.get(t).refCount++}decRef(t){if(this.tensorMap.has(t)){this.tensorMap.get(t).refCount--}}write(t,e,n){if("complex64"===n&&null!=t)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const r={id:this.nextDataId()};return this.tensorMap.set(r,{dtype:n,shape:e,values:t,refCount:1}),r}move(t,e,n,r,i){if("complex64"===r)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(t,{dtype:r,shape:n,values:e,refCount:i})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach((t=>{this.releaseResource(t),this.tensorMap.delete(t)})),this.uniformPendingDisposal.forEach((t=>this.bufferManager.releaseBuffer(t))),this.stagingPendingDisposal.forEach((t=>this.bufferManager.releaseBuffer(t,!1))),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let t;try{t=await Promise.all(Object.values(this.pipelineCache))}catch(t){throw new Error(t.message)}Object.keys(this.pipelineCache).map(((e,n)=>{this.pipelineCache[e]=t[n]}))}async getBufferData(t){if((0,i.env)().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const e=t.size,n=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,n,0,e),this.submitQueue(),await n.mapAsync(GPUMapMode.READ);const r=n.getMappedRange().slice(0);return n.unmap(),null!=n&&this.bufferManager.releaseBuffer(n),(0,i.env)().getBool("WEBGPU_USE_PROFILE_TOOL")&&(i.util.assert(void 0!==this.dummyContext,(()=>"Fail to get context for profiling tool")),this.dummyContext.getCurrentTexture()),r}convertAndCacheOnCPU(t,e){const n=this.tensorMap.get(t);return n.values=e,n.values}readSync(t){const e=this.tensorMap.get(t),{values:n,complexTensorInfos:r}=e;if(null!=n||"string"===e.dtype)return n;if("complex64"===e.dtype){const e=this.readSync(r.real.dataId),n=this.readSync(r.imag.dataId),o=i.util.convertBackendValuesAndArrayBuffer(i.backend_util.mergeRealAndImagArrays(e,n).buffer,"float32");return this.convertAndCacheOnCPU(t,o),o}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const o=["opaque","premultiplied"],a=e.resource,s=a.size;i.util.assert(s%4==0,(()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4."));const u=s/4,l=new ArrayBuffer(s),c=256,h=256,d=o.map((t=>new OffscreenCanvas(c,h))),f=new OffscreenCanvas(c,h);this.endComputePassEncoder(),d.map(((t,e)=>{const n=t.getContext("webgpu");return n.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:o[e]}),n.getCurrentTexture()})).map(((t,e)=>{const n=(n,r,i)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:a,bytesPerRow:1024,offset:i},{texture:t},{width:n,height:r}),this.submitQueue();const s=f.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,n,r),s.drawImage(d[e],0,0);const u=s.getImageData(0,0,n,r).data,c=o[e],h=new Uint8ClampedArray(l,i,n*r*4);for(let t=0;t<h.length;t+=4)if("premultiplied"===c)h[t+3]=u[t+3];else{const e=u[t];h[t]=u[t+2],h[t+1]=u[t+1],h[t+2]=e}},r=Math.floor(u/65536);let i=c,s=h,p=0;for(let t=0;t<r;t++)n(i,s,p),p+=262144;const m=u%65536;s=Math.floor(m/c),s>0&&(n(i,s,p),p+=1024*s),i=m%c,i>0&&n(i,1,p)}));const p=i.util.convertBackendValuesAndArrayBuffer(l,e.dtype);return this.convertAndCacheOnCPU(t,p),p}async read(t){if(!this.tensorMap.has(t))throw new Error(`Tensor ${t} was not registered!`);const e=this.tensorMap.get(t),{values:n}=e;if(null!=n)return n;let r;if("complex64"===e.dtype){const t=await Promise.all([this.read(e.complexTensorInfos.real.dataId),this.read(e.complexTensorInfos.imag.dataId)]),n=t[0],o=t[1];r=i.backend_util.mergeRealAndImagArrays(n,o)}else{const t=await this.getBufferData(e.resource);r=i.util.convertBackendValuesAndArrayBuffer(t,e.dtype)}return this.convertAndCacheOnCPU(t,r),r}copyBuffer(t){const e=t.size,n=t.usage,r=this.bufferManager.acquireBuffer(e,n);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,r,0,e),this.submitQueue(),r}createTensorFromGPUData(t,e,n){let r=t.buffer;if("complex64"===n)throw new Error("Cannot write to a complex64 dtype. ");const o={id:this.nextDataId()};this.tensorMap.set(o,{dtype:n,shape:e,values:null,refCount:1,external:t.zeroCopy});const a=this.tensorMap.get(o),s=R(a.dtype)*i.util.sizeFromShape(a.shape);if(t.buffer.size<s)throw new Error(`GPUBuffer size(${t.buffer.size}) is smaller than tensor size(${s})!`);if((t.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!=(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return!0!==t.zeroCopy&&(r=this.copyBuffer(r)),a.resource=r,(0,i.engine)().makeTensorFromDataId(o,e,n,this)}readToGPU(t){const e=this.tensorMap.get(t),{values:n,dtype:r,shape:o,resource:a}=e;if("complex64"===r)throw new Error("Does not support reading buffer for complex64 dtype.");if(null==a)throw null!=n?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const s=a,u=s.size,l=s.usage,c=this.bufferManager.acquireBuffer(u,l);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,c,0,u),this.submitQueue();const h=this.makeTensorInfo(o,r),d=(0,i.engine)().makeTensorFromTensorInfo(h);return this.tensorMap.get(h.dataId).resource=c,{tensorRef:d,buffer:c}}bufferSync(t){const e=this.readSync(t.dataId);if("string"===t.dtype)try{const n=e.map((t=>i.util.decodeString(t)));return(0,i.buffer)(t.shape,t.dtype,n)}catch(t){throw new Error("Failed to decode encoded string bytes into utf-8")}return(0,i.buffer)(t.shape,t.dtype,e)}async time(t){this.supportTimestampQuery||this.hasTimestampQueryWarned||(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const e=this.activeTimers,n=[];let r=!1;null==this.programTimersStack?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,t();const o=i.util.flatten(this.activeTimers.map((t=>t.query))).filter((t=>null!=t)),a=i.util.flatten(this.activeTimers.map((t=>t.name))).filter((t=>null!=t));this.activeTimers=e,r&&(this.programTimersStack=null);const s={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},u=await Promise.all(o);return s.kernelMs=i.util.sum(u),s.getExtraProfileInfo=()=>u.map(((t,e)=>({name:a[e],ms:t}))).map((t=>`${t.name}: ${t.ms}`)).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,s}makeTensorInfo(t,e,n){"string"===e&&null!=n&&n.length>0&&i.util.isString(n[0])&&(n=n.map((t=>i.util.encodeString(t))));return{dataId:this.write(n,t,e),shape:t,dtype:e}}tensorToBinding(t){if(!t)return null;const e=this.tensorMap.get(t.dataId).resource;return e instanceof GPUBuffer?{buffer:e}:e instanceof GPUTexture?e.createView():e}uploadToGPU(t){const e=this.tensorMap.get(t);if(null!=e.resource)return;const n=R(e.dtype)*i.util.sizeFromShape(e.shape);let r;const o=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(e.values){if(r=this.bufferManager.acquireBuffer(n,o,!0),"unmapped"===r.mapState){const t=this.bufferManager.acquireBuffer(n,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),i=t.getMappedRange();"int32"===e.dtype||"bool"===e.dtype?new Int32Array(i).set(e.values):new Float32Array(i).set(e.values),t.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,r,0,n),this.stagingPendingDisposal.push(t)}else{const t=r.getMappedRange();"int32"===e.dtype||"bool"===e.dtype?new Int32Array(t).set(e.values):new Float32Array(t).set(e.values),r.unmap()}e.values=null}else r=this.bufferManager.acquireBuffer(n,o);e.resource=r}makeUniforms(t){let e=0,n=0;const r=[];let o=1;t.forEach((t=>{let a;switch(0===t.data.length&&(t.data=[1]),t.data.length){case 1:a=4;break;case 2:a=8;break;case 3:case 4:case 5:case 6:a=16;break;default:i.util.assert(!1,(()=>`Unsupported ${t.data.length}D shape`))}5!==n&&6!==n||(a=16),a>o&&(o=a),e=Math.ceil(e/a)*a,n=t.data.length,r.push(e),e+=4*t.data.length})),e=Math.ceil(e/o)*o;const a=new ArrayBuffer(e);t.forEach(((t,e)=>{const n=r[e];"int32"===t.type?new Int32Array(a,n,t.data.length).set(t.data):"uint32"===t.type?new Uint32Array(a,n,t.data.length).set(t.data):new Float32Array(a,n,t.data.length).set(t.data)}));const s=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(s,0,a,0,e),this.uniformPendingDisposal.push(s),{offset:0,size:e,buffer:s}}runWebGPUProgram(t,e,n,r,o){if(o||(o=this.makeTensorInfo(t.outputShape,n)),0===i.util.sizeFromShape(o.shape))return this.tensorMap.get(o.dataId).values=i.util.getTypedArrayFromDType(o.dtype,0),o;this.uploadToGPU(o.dataId),t.dispatch=((t,e)=>{const n=t.limits.maxComputeWorkgroupsPerDimension,r=e.dispatchLayout,o=e.dispatch;if(o.every((t=>t<=n)))return o;i.util.assert(o[0]>n&&void 0===r.y&&void 0===r.z,(()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension."));let a=Math.ceil(Math.sqrt(o[0]));return a>n?(a=Math.ceil(Math.cbrt(o[0])),i.util.assert(a<=n,(()=>"Total dispatch size exceeds WebGPU maximum.")),[a,a,a]):[a,a,1]})(this.device,t);const a=e.map(((e,n)=>{if("complex64"===e.dtype)throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(e.dataId),{dtype:this.tensorMap.get(e.dataId).dtype,shape:e.shape,name:t.variableNames[n]}}));t.shaderKey=function(t,e,n){let r=t.shaderKey;if(null!=t.pixelsOpType)return r;const o=[],a=[];e.forEach((t=>{o.push(t.shape),a.push(t.dtype)})),o.push(n.shape),a.push(n.dtype);const s=e.map((t=>i.backend_util.getBroadcastDims(t.shape,n.shape))),u=e.map((t=>i.util.arraysEqual(t.shape,n.shape))).join("_"),l=s.map((t=>t.join("_"))).join(";"),c=A(t)?"flatDispatch":"";return r+="_"+(t.workgroupSize?t.workgroupSize.join(","):"")+o.map((t=>t.length)).join(",")+a.join(",")+t.variableNames.join(",")+l+u+c,r}(t,a,o);const s=(0,i.env)().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return t.shaderKey in this.pipelineCache||(this.pipelineCache[t.shaderKey]=m(this.device,t,a,o,s)),t.pipeline=this.pipelineCache[t.shaderKey],s||this.recordAndSubmit(t,o,e,r),o}recordAndSubmit(t,e,n,r){if(t.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let o=[],a=[];const s="int32";if(null==t.pixelsOpType){o.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),a=n.concat(e).map((t=>t.shape));const t="int32";a.map((e=>{o.push({type:t,data:e});const n=i.util.computeStrides(e);o.push({type:t,data:n})}))}else{const t=i.util.computeStrides(e.shape);o.push({type:s,data:t})}if(t.size){const e=i.util.sizeFromShape(t.outputShape);o.push({type:s,data:[t.outputComponent?e/t.outputComponent:e]})}r&&(o=[...o,...r]);const u=[this.tensorToBinding(e),...n.map((t=>this.tensorToBinding(t))),this.makeUniforms(o)];n.forEach((t=>{this.commandQueueOwnedIds.add(t.dataId)})),this.commandQueueOwnedIds.add(e.dataId);const l=this.device.createBindGroup({layout:t.pipeline.getBindGroupLayout(0),entries:u.map(((t,e)=>({binding:e,resource:t})))}),c=null!=this.activeTimers;this.ensureCommandEncoderReady();const h={};c&&this.supportTimestampQuery?(this.endComputePassEncoder(),null==this.querySet&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),h.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(h)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(h)),this.computePassEncoder.setPipeline(t.pipeline),this.computePassEncoder.setBindGroup(0,l),this.computePassEncoder.dispatchWorkgroups(t.dispatch[0],t.dispatch[1],t.dispatch[2]),this.dispatchCountInPass++,(c||(0,i.env)().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||t.pixelsOpType===p.DRAW)&&(this.endComputePassEncoder(),c?this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;null==this.queryResolveBuffer&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const t=this.bufferManager.acquireBuffer(8*this.querySetCount,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,8*this.querySetCount),this.submitQueue(),await t.mapAsync(GPUMapMode.READ);const e=new BigUint64Array(t.getMappedRange()),n=Number(e[1]-e[0])/1e6;return t.unmap(),this.bufferManager.releaseBuffer(t),n}shouldExecuteOnCPU(t,e=B){return(0,i.env)().getBool("WEBGPU_CPU_FORWARD")&&t.every((t=>null==this.tensorMap.get(t.dataId).resource&&i.util.sizeFromShape(t.shape)<e))}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(null!=this.querySet&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var j;U.nextDataId=0,
/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
D()&&(0,i.registerBackend)("webgpu",(async()=>{const t={powerPreference:(0,i.env)().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},e=await navigator.gpu.requestAdapter(t),n={},r=[];e.features.has("timestamp-query")&&r.push("timestamp-query"),e.features.has("bgra8unorm-storage")&&r.push(["bgra8unorm-storage"]),n.requiredFeatures=r;const o=e.limits;n.requiredLimits={maxComputeWorkgroupStorageSize:o.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:o.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:o.maxStorageBufferBindingSize,maxBufferSize:o.maxBufferSize,maxComputeWorkgroupSizeX:o.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:o.maxComputeInvocationsPerWorkgroup};const a=await e.requestDevice(n),s=await e.requestAdapterInfo();return new U(a,s)}),3),function(t){t[t.ADD=0]="ADD",t[t.ATAN2=1]="ATAN2",t[t.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",t[t.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",t[t.DIV=4]="DIV",t[t.ELU_DER=5]="ELU_DER",t[t.EQUAL=6]="EQUAL",t[t.FLOOR_DIV=7]="FLOOR_DIV",t[t.GREATER=8]="GREATER",t[t.GREATER_EQUAL=9]="GREATER_EQUAL",t[t.LESS=10]="LESS",t[t.LESS_EQUAL=11]="LESS_EQUAL",t[t.LOGICAL_AND=12]="LOGICAL_AND",t[t.LOGICAL_OR=13]="LOGICAL_OR",t[t.MAX=14]="MAX",t[t.MIN=15]="MIN",t[t.MOD=16]="MOD",t[t.MUL=17]="MUL",t[t.NOT_EQUAL=18]="NOT_EQUAL",t[t.POW=19]="POW",t[t.PRELU=20]="PRELU",t[t.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",t[t.SUB=22]="SUB"}(j||(j={}));const V="let resultTemp = a + b;",H="let resultTemp = atan2(a, b);",G="let resultTemp = areal * breal - aimag * bimag;",W="let resultTemp = areal * bimag + aimag * breal;",X="let resultTemp = a / b;",Y="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",q="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a == b);\n",$="\n  let remainder =\n      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));\n  let quotient = (a - remainder) / b;\n  let resultTemp =\n      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));\n",K="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a > b);\n",Z="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a >= b);\n",Q="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a < b);\n",J="\n  let zero = sign(a) * 0 + 0;\n  let one = sign(b) * 0 + 1;\n  let resultTemp = select(zero, one, a <= b);\n",tt="return f32(a >= 1.0 && b >= 1.0);",et="return (vec4<f32>(a >= vec4<f32>(1.0)) *\n  vec4<f32>(b >= vec4<f32>(1.0)));",nt="return f32(a >= 1.0 || b >= 1.0);",rt="return min(vec4<f32>(a >= vec4<f32>(1.0)) +\n  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));",it="let resultTemp = max(a, b);",ot="let resultTemp = min(a, b);",at="\n  let isNaN = b == 0.;\n  var resultTemp = a % b;\n  resultTemp = select((resultTemp + b) % b, resultTemp,\n      (a < 0. && b < 0.) || (a >= 0. && b > 0.));\n",st="\n  let isNaN = !vec4<bool>(b);\n  var resultTemp = vec4<f32>(a % b);\n  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {\n    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];\n  }\n  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {\n    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];\n  }\n  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {\n    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];\n  }\n  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {\n    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];\n  }\n",ut="let resultTemp = a * b;",lt="\n  var resultTemp = f32(a != b);\n  let valueForNaN = 1.0;\n",ct="\n  var resultTemp = vec4<f32>(a != b);\n  let valueForNaN = 1.0;\n",ht="\n  let isNaN = a < 0.0 && floor(b) < b;\n  if (b == 0.0) {\n    return 1.0;\n  }\n  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),\n      round(abs(b) % 2.0) != 1.0);\n",dt="\n  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);\n  let isModRound1 = vec4<f32>(isModRound1Bool);\n  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);\n  var resultTemp = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  let isExpZero = b == vec4<f32>(0.0);\n  if (isExpZero.r) {\n    resultTemp.r = 1.0;\n  }\n  if (isExpZero.g) {\n    resultTemp.g = 1.0;\n  }\n  if (isExpZero.b) {\n    resultTemp.b = 1.0;\n  }\n  if (isExpZero.a) {\n    resultTemp.a = 1.0;\n  }\n  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);\n",ft="if (a < 0.0) { return b * a; }  return a;",pt="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",mt="let resultTemp = (a - b) * (a - b);",gt="let resultTemp = a - b;";function vt(t,e){let n;do{switch(t){case j.ATAN2:n=H;break;case j.MAX:n=it;break;case j.MIN:n=ot;break;case j.MOD:n=e?st:at;break;case j.NOT_EQUAL:n=e?ct:lt;break;case j.POW:n=e?dt:ht;break;default:continue}let r,i,o;return e?(r="isnanVec4",i="vec4<f32>",o="vec4<bool>"):(r="isnan",i="f32",o="bool"),`\n      let aIsNaN = ${r}(a);\n      let aPostLegalization = select(a, ${i}(42), aIsNaN);\n      let bIsNaN = ${r}(b);\n      let bPostLegalization = select(b, ${i}(42), bIsNaN);\n      let isNaN = false;\n      let valueForNaN = uniforms.NAN;\n      {\n        let a = aPostLegalization;\n        let b = bPostLegalization;\n        ${n}\n        return select(\n            resultTemp, ${i}(valueForNaN),\n            ${o}(isNaN) | aIsNaN | bIsNaN);\n      }\n    `}while(0);switch(t){case j.ADD:n=V;break;case j.COMPLEX_MULTIPLY_IMAG:n=W;break;case j.COMPLEX_MULTIPLY_REAL:n=G;break;case j.DIV:n=X;break;case j.ELU_DER:n=Y;break;case j.EQUAL:n=q;break;case j.FLOOR_DIV:n=$;break;case j.GREATER:n=K;break;case j.GREATER_EQUAL:n=Z;break;case j.LESS:n=Q;break;case j.LESS_EQUAL:n=J;break;case j.LOGICAL_AND:return e?et:tt;case j.LOGICAL_OR:return e?rt:nt;case j.MUL:n=ut;break;case j.PRELU:return e?pt:ft;case j.SQUARED_DIFFERENCE:n=mt;break;case j.SUB:n=gt}return`\n    ${n}\n    return resultTemp;\n  `}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var yt;!function(t){t[t.ABS=0]="ABS",t[t.ACOS=1]="ACOS",t[t.ACOSH=2]="ACOSH",t[t.ASIN=3]="ASIN",t[t.ASINH=4]="ASINH",t[t.ATAN=5]="ATAN",t[t.ATANH=6]="ATANH",t[t.CEIL=7]="CEIL",t[t.COS=8]="COS",t[t.COSH=9]="COSH",t[t.ELU=10]="ELU",t[t.ERF=11]="ERF",t[t.EXP=12]="EXP",t[t.EXPM1=13]="EXPM1",t[t.FLOOR=14]="FLOOR",t[t.IS_FINITE=15]="IS_FINITE",t[t.IS_INF=16]="IS_INF",t[t.IS_NAN=17]="IS_NAN",t[t.LINEAR=18]="LINEAR",t[t.LOG=19]="LOG",t[t.LOG1P=20]="LOG1P",t[t.LOGICAL_NOT=21]="LOGICAL_NOT",t[t.NEG=22]="NEG",t[t.RELU=23]="RELU",t[t.RELU6=24]="RELU6",t[t.LEAKYRELU=25]="LEAKYRELU",t[t.RECIPROCAL=26]="RECIPROCAL",t[t.ROUND=27]="ROUND",t[t.RSQRT=28]="RSQRT",t[t.SELU=29]="SELU",t[t.SIGMOID=30]="SIGMOID",t[t.SIGN=31]="SIGN",t[t.SIN=32]="SIN",t[t.SINH=33]="SINH",t[t.SOFTPLUS=34]="SOFTPLUS",t[t.SQRT=35]="SQRT",t[t.SQUARE=36]="SQUARE",t[t.STEP=37]="STEP",t[t.TAN=38]="TAN",t[t.TANH=39]="TANH",t[t.TO_INT=40]="TO_INT"}(yt||(yt={}));const bt="return abs(a);",xt="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return acos(a);\n",wt="\n  if (a < 1.) {\n    return uniforms.NAN;\n  }\n  return acosh(a);\n",_t="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  return asin(a);\n",St="return asinh(a);",Et="\n  if (isnan(a)) {\n    return uniforms.NAN;\n  }\n  return atan(a);\n",At="\n  if (abs(a) > 1.) {\n    return uniforms.NAN;\n  }\n  if (a == 1.) {\n    return uniforms.INFINITY;\n  }\n  if (a == -1.) {\n    return -uniforms.INFINITY;\n  }\n  return atanh(a);\n",Mt="return ceil(a);",Ct="return cos(a);",Tt="\n  let e2x = exp(-a);\n  return (e2x + 1.0 / e2x) / 2.0;\n",kt="return exp(a) - 1.0;",It="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",Nt="\n  var resFloat = exp(a) - vec4<f32>(1.0);\n  if (a.r >= 0.0) {\n    resFloat.r = a.r;\n  }\n  if (a.g >= 0.0) {\n    resFloat.g = a.g;\n  }\n  if (a.b >= 0.0) {\n    resFloat.b = a.b;\n  }\n  if (a.a >= 0.0) {\n    resFloat.a = a.a;\n  }\n  return resFloat;\n",Pt=`\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  let p = ${i.backend_util.ERF_P};\n  let a1 = ${i.backend_util.ERF_A1};\n  let a2 = ${i.backend_util.ERF_A2};\n  let a3 = ${i.backend_util.ERF_A3};\n  let a4 = ${i.backend_util.ERF_A4};\n  let a5 = ${i.backend_util.ERF_A5};\n\n  let sign = sign(a);\n  let absA = abs(a);\n  let t = 1.0 / (1.0 + p * absA);\n  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));\n`,Ot="return exp(a);",Lt="return floor(a);",Rt="return f32(!isnan(a) && !isinf(a));",Dt="return f32(isinf(a));",zt="return f32(isnan(a));",Ft="return a;",Bt="if (a < 0.0) { return uniforms.NAN; }\n  return log(a);",Ut="\n  if (isnan(a)) { return a; }\n  return log(1.0 + a);\n",jt="return f32(!(a >= 1.0));",Vt="return -a;",Ht="if (a < 0.0) { return uniforms.alpha * a; } return a;",Gt="\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n",Wt="return 1.0 / a;",Xt="return select(a, 0.0, a < 0.0);",Yt="return clamp(a, 0.0, 6.0);",qt="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",$t="\n  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));\n",Kt="return round(a);",Zt="return inverseSqrt(a);",Qt=`\n  if (a >= 0.0) {\n    return ${i.backend_util.SELU_SCALE} * a;\n  } else {\n    return ${i.backend_util.SELU_SCALEALPHA} * (exp(a) - 1.0);\n  }\n`,Jt="return 1.0 / (1.0 + exp(-1.0 * a));",te="return sign(a);",ee="return sin(a);",ne="\n  let e2x = exp(a);\n  return (e2x - 1.0 / e2x) / 2.0;\n",re="\n  let epsilon = 1.1920928955078125e-7;\n  let threshold = log(epsilon) + 2.0;\n\n  let too_large = a > -threshold;\n  let too_small = a < threshold;\n  let exp_a = exp(a);\n\n  if (too_large) {\n    return a;\n  } else if (too_small) {\n    return exp_a;\n  } else {\n    return log(exp_a + 1.0);\n  }\n",ie="return sqrt(a);",oe="return a * a;",ae="\n  if (isnan(a)) {\n    return a;\n  }\n\n  return select(uniforms.stepAlpha, 1.0, a > 0.0);\n",se="return tan(a);",ue="\n  let e2x = exp(-2.0 * abs(a));\n  return sign(a) * (1.0 - e2x) / (1.0 + e2x);\n",le="return f32(i32((a)));";function ce(t,e){switch(t){case yt.ABS:return bt;case yt.ACOS:return xt;case yt.ACOSH:return wt;case yt.ASIN:return _t;case yt.ASINH:return St;case yt.ATAN:return Et;case yt.ATANH:return At;case yt.COS:return Ct;case yt.COSH:return Tt;case yt.CEIL:return Mt;case yt.ELU:return e?Nt:It;case yt.ERF:return Pt;case yt.EXP:return Ot;case yt.EXPM1:return kt;case yt.FLOOR:return Lt;case yt.IS_FINITE:return Rt;case yt.IS_INF:return Dt;case yt.IS_NAN:return zt;case yt.LINEAR:return Ft;case yt.LOG:return Bt;case yt.LOG1P:return Ut;case yt.LOGICAL_NOT:return jt;case yt.NEG:return Vt;case yt.LEAKYRELU:return e?Gt:Ht;case yt.RECIPROCAL:return Wt;case yt.RELU:return e?$t:Xt;case yt.RELU6:return e?qt:Yt;case yt.ROUND:return Kt;case yt.RSQRT:return Zt;case yt.SELU:return Qt;case yt.SIGMOID:return Jt;case yt.SIGN:return te;case yt.SIN:return ee;case yt.SINH:return ne;case yt.SOFTPLUS:return re;case yt.SQRT:return ie;case yt.SQUARE:return oe;case yt.STEP:return ae;case yt.TAN:return se;case yt.TANH:return ue;case yt.TO_INT:return le;default:throw new Error(`BinaryType ${t} is not implemented!`)}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function he(t,e=!1,n=!1,r=3){if(null===t)return"";let i="";if("linear"===t)i=ce(yt.LINEAR);else if("relu"===t)i=ce(yt.RELU,n);else if("elu"===t)i=ce(yt.ELU,n);else if("relu6"===t)i=ce(yt.RELU6,n);else if("prelu"===t)i=vt(j.PRELU,n);else if("sigmoid"===t)i=ce(yt.SIGMOID,n);else{if("leakyrelu"!==t)throw new Error(`Activation ${t} has not been implemented for the WebGPU backend.`);i=ce(yt.LEAKYRELU,n)}const o=g(n?4:1);let a="";return a=e?`\n      fn activation(a : ${o}, coords : vec${r}<i32>) -> ${o} {\n        let b = getPreluActivationWeightsByOutputCoords(coords);\n        ${i}\n      }`:`\n      fn activation(a : ${o}, coords : vec${r}<i32>) -> ${o} {\n        ${i}\n      }`,a}function de(t,e){return`\n      ${t?"value = value + getBiasByOutputCoords(coords);":""}\n      ${e?"value = activation(value, coords);":""}\n      `}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fe(t,e,n=!1,r=!1,o=!1,a=1){i.util.assert(t&&1===a||!t,(()=>`transposeA ${t} is not compatible with component size ${a}`));const s=`\n      ${t?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}\n\n    `,u=e?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`\n  fn mm_readA(batch: i32, row: i32, col: i32) -> ${g(a)} {\n    var value = ${g(a)}(0.0);\n    ${n&&o?s:`\n    ${t?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}\n    {\n      ${s}\n    }\n    `}\n    return value;\n  }\n\n  fn mm_readB(batch: i32, row: i32, col: i32) -> ${g(a)} {\n    var value = ${g(a)}(0.0);\n    ${u}\n    return value;\n  }\n  `}function pe(t,e,n,r,i=!1,o=!1,a=!1,s=1){return`\n  ${fe(n,r,i,o,a,s)}\n  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${g(s)}) {\n    ${i&&o?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}\n    {\n      var value = valueIn;\n      let coords = vec3<i32>(batch, row, col);\n      ${de(t,e)}\n      setOutputAtCoords(coords[0], coords[1], coords[2], value);\n    }\n  }\n  `}function me(t,e,n=!1,r=32,o=!1,a=32,s=!1){const u=e[1]*t[1],l=e[0]*t[0],c=n?u:r,h=n?r:u,d=c/e[0],f=r/e[1],p=t[1],m=t[0];return i.util.assert((n&&4===d&&4===t[1]||!n&&(3===d||4===d))&&c%e[0]==0&&r%e[1]==0&&4===t[0],(()=>`If transposeA ${n} is true, innerElementSize ${d} and workPerThread[1] ${t[1]} must be 4.\n          Otherwise, innerElementSize ${d} must be 3 or 4.\n      tileAWidth ${c} must be divisible by workgroupSize[0]${e[0]}. tileInner ${r} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${t[0]} must be 4.`)),`\n  var<workgroup> mm_Asub : array<array<vec${d}<f32>, ${c/d}>, ${h}>;\n  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${l/t[0]}>, ${r}>;\n\n  ${b()} {\n    let localRow = i32(localId.y);\n    let tileRow = localRow * ${p};\n    let tileCol = i32(localId.x);\n\n    let globalRow = i32(globalId.y) * ${p};\n    let globalCol = i32(globalId.x) * ${m};\n    let batch = ${o?"0":"i32(globalId.z)"};\n    let batchA = ${o||!s?"batch":"batch % uniforms.aShape[0]"};\n    let batchB = ${o||!s?"batch":"batch % uniforms.bShape[0]"};\n    let globalRowStart = i32(workgroupId.y) * ${u};\n\n    let numTiles = ${o?`${Math.ceil(a/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};\n    var kStart = ${o?`i32(globalId.z) * ${a}`:"0"};\n\n    var acc: array<vec4<f32>, ${p}>;\n\n    // Loop over shared dimension.\n    let tileRowB = localRow * ${f};\n    for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var innerRow = 0; innerRow < ${p}; innerRow++) {\n            let inputRow = tileRow + innerRow;\n            let inputCol = tileCol;\n            ${((t,e)=>t?`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol * ${e});\n        `:`\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRow + innerRow,\n          kStart + inputCol * ${e});\n        `)(n,d)}\n        }\n\n        // Load one tile of B into local memory.\n        for (var innerRow = 0; innerRow < ${f}; innerRow++) {\n            let inputRow = tileRowB + innerRow;\n            let inputCol = tileCol;\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);\n        }\n        kStart = kStart + ${r};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        ${((t,e,n,r)=>{if(t)return`\n      for (var k = 0; k < ${r}; k++) {\n        let BCached0 = mm_Bsub[k][tileCol];\n        let ACached0 = mm_Asub[k][localRow];\n        for (var i = 0; i < ${n}; i++) {\n          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);\n        }\n      }`;{let t="",i="";for(let n=0;n<e;n++)t+=`let BCached${n} = mm_Bsub[k * ${e} + ${n}][tileCol];`,i+=`acc[i] = fma(BCached${n}, vec4<f32>(ACached[${n}]), acc[i]);`;return`\n      for (var k = 0; k < ${r/e}; k++) {\n        ${t}\n        for (var i = 0; i < ${n}; i++) {\n          let ACached = mm_Asub[tileRow + i][k];\n          ${i}\n        }\n      }`}})(n,d,p,r)}\n        workgroupBarrier();\n    }\n\n    for (var innerRow = 0; innerRow < ${p}; innerRow++) {\n        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);\n    }\n  }`}const ge=t=>t?"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          kStart + inputRow,\n          globalRowStart + inputCol);\n        ":"\n        mm_Asub[inputRow][inputCol] = mm_readA(batchA,\n          globalRowStart + inputRow,\n          kStart + inputCol);\n        ";function ve(t,e,n=!1,r=32,o=!1,a=32,s=!1,u=!1){const l=t[1]*e[1],c=t[0]*e[0],h=n?l:r,d=n?r:l;i.util.assert(d%e[1]==0&&h%e[0]==0&&r%e[1]==0,(()=>`tileAHight ${d} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${e[0]}, tileInner ${r} must be divisible by workgroupSize[1]${e[1]}`));const f=d/e[1],p=h/e[0],m=r/e[1],g=t[1],v=t[0],y=s?`\n      let localRow = i32(localId.y);\n      let localCol = i32(localId.x);\n      let globalRowStart = i32(workgroupId.y) * ${l};\n      let globalColStart = i32(workgroupId.x) * ${c};\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${e[1]}) {\n          for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${e[0]}) {\n            ${ge(n)}\n          }\n        }\n        // Load one tile of B into local memory.\n        for (var inputRow = localRow; inputRow < ${r}; inputRow = inputRow + ${e[1]}) {\n              for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${e[0]}) {\n            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n              kStart + inputRow,\n              globalColStart + inputCol);\n          }\n        }\n        kStart = kStart + ${r};\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        var BCached : array<f32, ${v}>;\n        for (var k = 0; k < ${r}; k++) {\n          for (var inner = 0; inner < ${v}; inner++) {\n            BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];\n          }\n          for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n            let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}\n            for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n              acc[innerRow][innerCol] =\n                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n            }\n          }\n        }\n        workgroupBarrier();\n      }\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        let gRow = globalRowStart + localRow + innerRow * ${e[1]};\n        for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n          let gCol = globalColStart + localCol + innerCol * ${e[0]};\n          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);\n        }\n      }\n      `:`\n  let tileRow = i32(localId.y) * ${g};\n  let tileCol = i32(localId.x) * ${v};\n\n  let globalRow = i32(globalId.y) * ${g};\n  let globalCol = i32(globalId.x) * ${v};\n  let globalRowStart = i32(workgroupId.y) * ${l};\n\n  let tileRowA = i32(localId.y) * ${f};\n  let tileColA = i32(localId.x) * ${p};\n  let tileRowB = i32(localId.y) * ${m};\n  // Loop over shared dimension.\n  for (var t = 0; t < numTiles; t++) {\n    // Load one tile of A into local memory.\n    for (var innerRow = 0; innerRow < ${f}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${p}; innerCol++) {\n        let inputRow = tileRowA + innerRow;\n        let inputCol = tileColA + innerCol;\n        ${ge(n)}\n      }\n    }\n\n    // Load one tile of B into local memory.\n    for (var innerRow = 0; innerRow < ${m}; innerRow++) {\n      for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n        let inputRow = tileRowB + innerRow;\n        let inputCol = tileCol + innerCol;\n        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,\n          kStart + inputRow,\n          globalCol + innerCol);\n      }\n    }\n    kStart = kStart + ${r};\n    workgroupBarrier();\n\n    // Compute acc values for a single thread.\n    var BCached : array<f32, ${v}>;\n    for (var k = 0; k < ${r}; k++) {\n      for (var inner = 0; inner < ${v}; inner++) {\n        BCached[inner] = mm_Bsub[k][tileCol + inner];\n      }\n\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        ${(t=>t?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];")(n)}\n        for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n          acc[innerRow][innerCol] =\n              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);\n        }\n      }\n    }\n\n    workgroupBarrier();\n  }\n\n  for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n    for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n      mm_write(batch, globalRow + innerRow, globalCol + innerCol,\n          acc[innerRow][innerCol]);\n    }\n  }\n  `;return`\n    var<workgroup> mm_Asub : array<array<f32, ${h}>, ${d}>;\n    var<workgroup> mm_Bsub : array<array<f32, ${c}>, ${r}>;\n\n    ${b()} {\n      let batch = ${o?"0":"i32(globalId.z)"};\n      let batchA = ${o||!u?"batch":"batch % uniforms.aShape[0]"};\n      let batchB = ${o||!u?"batch":"batch % uniforms.bShape[0]"};\n      let numTiles = ${o?`${Math.ceil(a/r)}`:`(uniforms.dimInner - 1) / ${r} + 1`};\n      var kStart = ${o?`i32(globalId.z) * ${a}`:"0"};\n\n      var acc : array<array<f32, ${v}>, ${g}>;\n\n      // Without this initialization strange values show up in acc.\n      for (var innerRow = 0; innerRow < ${g}; innerRow++) {\n        for (var innerCol = 0; innerCol < ${v}; innerCol++) {\n          acc[innerRow][innerCol] = 0.0;\n        }\n      }\n      ${y}\n    }\n  `}class ye{constructor(t,e,n=!1,r=!1,i=null,o=null,a=null,s=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0]};const u=n?t[1]:t[2];if(this.isVec4=(u%4==0&&!n||e[1]%4==0&&n)&&e[2]%4==0&&!r,this.outputComponent=this.isVec4?4:1,this.isVectorA=1===e[1]&&!n,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const t=N(e[1],u,e[2],n);this.workgroupSize=t.workgroupSize,this.elementsPerThread=t.elementsPerThread}this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const l=null!=i,c=null!=a;l&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=s,this.transposeA=n,this.transposeB=r,this.addBias=l,this.activation=o,this.hasPreluActivationWeights=c,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(e[1],e[2],u),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${n}_${r}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(t,e,n){const r=this.workgroupSize[1]*this.elementsPerThread[1],i=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=4*this.workgroupSize[0]:this.tileInner=i;return[t%r==0,e%i==0,n%this.tileInner==0]}getUserCode(){const t=`\n      ${he(this.activation,this.hasPreluActivationWeights,this.isVec4)}\n      ${pe(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}\n      ${this.isVec4?me(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?function(t,e=!1){i.util.assert(1===t[1]&&1===t[2],(()=>`A linear work group size is required. But got ${t}.`));const n=4*t[0];return`\n    var<workgroup> mm_Asub : array<vec4<f32>, ${t[0]}>;\n\n    ${b()} {\n      let tileCol = i32(localId.x);\n      let globalCol = i32(globalId.x);\n      let globalRow = i32(globalId.y);\n\n      let numTiles = (uniforms.dimInner - 1) / ${n} + 1;\n      let batch = i32(globalId.z);\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      // Without this initialization strange values show up in acc.\n      var acc = 0.0;\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t++) {\n        // Load one tile of A into local memory.\n        let colA = t * ${n} + tileCol * 4;\n        mm_Asub[tileCol] = vec4<f32>(${(t=>t?"\n      mm_readA(batchA, colA, globalRow),\n      mm_readA(batchA, colA + 1, globalRow),\n      mm_readA(batchA, colA + 2, globalRow),\n      mm_readA(batchA, colA + 3, globalRow)\n  ":"\n      mm_readA(batchA, globalRow, colA),\n      mm_readA(batchA, globalRow, colA + 1),\n      mm_readA(batchA, globalRow, colA + 2),\n      mm_readA(batchA, globalRow, colA + 3)\n  ")(e)});\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < ${n/4}; k++) {\n          let rowB = t * ${n} + k * 4;\n          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),\n                              mm_readB(batchB, rowB + 1, globalCol),\n                              mm_readB(batchB, rowB + 2, globalCol),\n                              mm_readB(batchB, rowB + 3, globalCol));\n\n          let ACached = mm_Asub[k];\n          acc = acc + dot(ACached, BCached);\n        }\n\n        workgroupBarrier();\n      }\n\n      mm_write(batch, globalRow, globalCol, acc);\n    }\n  `}(this.workgroupSize,this.transposeA):ve(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}\n    `;return t}}class be{constructor(t,e=!1,n=!1,r=null,i=null,o=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize);const a=null!=r,s=null!=o;a&&this.variableNames.push("bias"),s&&this.variableNames.push("preluActivationWeights"),this.transposeA=e,this.transposeB=n,this.addBias=a,this.activation=i,this.hasPreluActivationWeights=s,this.shaderKey=`matMulReduce_${this.activation}_${e}_${n}`}getUserCode(){
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var t;return`\n      ${he(this.activation,this.hasPreluActivationWeights)}\n      ${pe(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${t=this.workgroupSize[0],`\n    var<workgroup> sumValues : array<f32, ${t}>;\n    ${b()} {\n      let coords = getOutputCoords();\n      let batch = coords[0];\n      let batchA = batch % uniforms.aShape[0];\n      let batchB = batch % uniforms.bShape[0];\n      let row = coords[1];\n      let col = coords[2];\n      var sum = 0.0;\n      let Length = uniforms.dimInner;\n      for (var k = i32(localId.x); k < Length; k = k + ${t}) {\n        let dataA = mm_readA(batchA, row, k);\n        let dataB = mm_readB(batchB, k, col);\n        sum = sum + dataA * dataB;\n      }\n      sumValues[localId.x] = sum;\n      workgroupBarrier();\n\n      for(var currentSize = ${t/2}u; currentSize > 1u;\n          currentSize = currentSize / 2u) {\n        if (localId.x < currentSize)\n        {\n          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (localId.x == 0u) {\n        sum = sumValues[0] + sumValues[1];\n        mm_write(batch, row, col, sum);\n      }\n    }\n  `}\n    `}}class xe{constructor(t,e,n,r=!1,i=!1,o=null,a=null,s=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=n,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(n[2]/this.workgroupSize[0]),Math.ceil(n[1]/this.workgroupSize[1]),n[0]];const u=null!=o;u&&this.variableNames.push("bias");const l=null!=s;l&&this.variableNames.push("preluActivationWeights"),this.transposeA=r,this.transposeB=i,this.addBias=u,this.activation=a,this.hasPreluActivationWeights=l,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${r}_${i}`}getUserCode(){return`\n      ${he(this.activation,this.hasPreluActivationWeights)}\n      ${pe(this.addBias,this.activation,this.transposeA,this.transposeB)}\n      ${
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const e=t[1],n=t[0],r=e>n?e:n;return`\n  var<workgroup> mm_Asub : array<array<f32, ${r}>, ${e}>;\n  var<workgroup> mm_Bsub : array<array<f32, ${n}>, ${r}>;\n\n  // If the output size is small for matrix multiplication, avoid to use vec4\n  // and handle some elements per thread to optimally utilize the ALU.\n  // Read data from global memory to registers firstly, then store them into\n  // shared memory, so it is instruction-Level parallelism for arithmetic\n  // operations and others handle IO operations between barrier api, makes ALU\n  // and load/store units work simultaneously, could improves the performance.\n  ${b()} {\n    let tileRow = i32(localId.y);\n    let tileCol = i32(localId.x);\n    let globalRow = i32(globalId.y);\n    let globalCol = i32(globalId.x);\n    let batch = i32(globalId.z);\n    let batchA = batch % uniforms.aShape[0];\n    let batchB = batch % uniforms.bShape[0];\n\n    // uniforms.dimInner should be greater than 0.\n    let numTiles = (uniforms.dimInner - 1) / ${r} + 1;\n    var acc = 0.0;\n\n    var globalColA = tileCol;\n    var globalRowB = 0;\n    var regA = mm_readA(batchA, globalRow, globalColA);\n    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n    globalColA = globalColA + ${r};\n    globalRowB = globalRowB + ${r};\n\n    for (var t = 0; t < numTiles; t = t + 1) {\n      mm_Asub[tileRow][tileCol] = regA;\n      mm_Bsub[2 * tileRow][tileCol] = regB0;\n      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;\n\n      workgroupBarrier();\n\n      regA = mm_readA(batchA, globalRow, globalColA);\n      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);\n      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);\n      globalColA = globalColA + ${r};\n      globalRowB = globalRowB + ${r};\n\n      for (var k = 0; k < ${r}; k = k + 1) {\n        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];\n      }\n      workgroupBarrier();\n    }\n\n    mm_write(batch, globalRow, globalCol, acc);\n  }\n  `}(this.workgroupSize)}\n    `}}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class we{constructor(t,e,n=!1,r=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,i.util.assert(1===t[0],(()=>"MatMulSplitKProgram only supports batch = 1.")),this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const o=(n&&this.outputShape[1]%4==0||!n&&e%4==0)&&this.outputShape[2]%4==0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=o?4:1,o||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=I(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],e],this.workgroupSize,this.elementsPerThread),this.transposeA=n,this.transposeB=r,this.shaderKey=`matMulSplitK_${n}_${r}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const t=this.outputComponent;return`\n      ${fe(!1,this.transposeB,!1,!1,!1,t)}\n      fn mm_write(batch: i32, row : i32, col : i32, value : ${g(t)}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n          let coords = vec3<i32>(batch, row, col);\n          let flatIndex = getOutputIndexFromCoords(coords);\n          // The problem is that we should initialize output to zero before using.\n          // Otherwise, the original value will be added to the result.\n          for (var i = 0; i < ${t}; i = i + 1) {\n            ${f("&result[flatIndex + i]",""+(t>1?"value[i]":"value"),"float32")}\n          }\n        }\n      }\n      ${4===t?me(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):ve(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}\n    `}}class _e{constructor(t,e=null,n=null,r=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=null!=e,this.hasPreluActivationWeights=null!=r,this.activation=n,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${n}`}getUserCode(){return`\n    ${he(this.activation,this.hasPreluActivationWeights)}\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        var value = getXByOutputIndex(index);\n        ${de(this.addBias,this.activation)}\n        setOutputAtIndex(index, value);\n      }\n    }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Se{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        setOutputAtIndex(index, uniforms.value);\n      }\n    }\n  `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ee(t){const{backend:e,attrs:n}=t,{shape:r,value:o}=n;let{dtype:a}=n;if(a=a||i.util.inferDtype(o),"string"===a){const t=i.util.getArrayFromDType(a,i.util.sizeFromShape(r));return t.fill(o),e.makeTensorInfo(r,a,t)}{const t=new Se(r),n=[{type:"float32",data:[o]}];return e.runWebGPUProgram(t,[],a,n)}}const Ae={kernelName:i.Fill,backendName:"webgpu",kernelFunc:Ee};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Me(t){const{inputs:e,attrs:n}=t,{x:r}=e,{shape:o}=n,a=i.util.sizeFromShape(r.shape),s=i.util.inferFromImplicitShape(o,a),u=i.util.sizeFromShape(s);return i.util.assert(a===u,(()=>`The new shape (${s}) has ${u} elements and the old shape (${r.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`)),t.backend.incRef(r.dataId),{dataId:r.dataId,shape:s,dtype:r.dtype}}const Ce={kernelName:i.Reshape,backendName:"webgpu",kernelFunc:Me};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Te({a:t,b:e,transposeA:n,transposeB:r,backend:o,bias:a=null,preluActivationWeights:s=null,leakyreluAlpha:u=0,activation:l=null}){const c=t.shape.length,h=e.shape.length,d=n?t.shape[c-2]:t.shape[c-1],f=r?e.shape[h-1]:e.shape[h-2],p=n?t.shape[c-1]:t.shape[c-2],m=r?e.shape[h-2]:e.shape[h-1],g=t.shape.slice(0,-2),v=e.shape.slice(0,-2),y=i.util.sizeFromShape(g),b=i.util.sizeFromShape(v),x=i.broadcast_util.assertAndGetBroadcastShape(t.shape.slice(0,-2),e.shape.slice(0,-2)).concat([p,m]);i.util.assert(d===f,(()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${t.shape} and ${e.shape} and transposeA=${n} and transposeB=${r} must match.`));const w=n?[y,d,p]:[y,p,d],_=r?[b,m,f]:[b,f,m],S=Me({inputs:{x:t},backend:o,attrs:{shape:w}}),E=Me({inputs:{x:e},backend:o,attrs:{shape:_}}),A=[S,E],M=Math.max(y,b),C=[S,E],T=[{type:"int32",data:[p]},{type:"int32",data:[m]},{type:"int32",data:[d]}];let k,I;const N=[M,p,m];let P=(0,i.env)().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(P<0){const t=(0,i.env)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),e=t>0?t:o.thresholdToIncreaseWorkgroups,n=M*Math.ceil(p/32)*Math.ceil(m/32);P=n<=e||p<=8&&n<=2*e?M*p*m<=128?F.MatMulReduceProgram:1===M&&f>=2e3?F.MatMulSplitKProgram:F.MatMulSmallOutputSizeProgram:F.MatMulPackedProgram}switch(P){case F.MatMulReduceProgram:k=new be(N,n,r,a,l,s);break;case F.MatMulSplitKProgram:if(I=Ee({backend:o,attrs:{shape:N,value:0,dtype:t.dtype}}),k=new we(N,f,n,r),a||l){I=o.runWebGPUProgram(k,C,t.dtype,T,I);const e=new _e(I.shape,a,l,s);let n=null;const r=[I];a&&r.push(a),s&&r.push(s),"leakyrelu"===l&&(n=[{type:"float32",data:[u]}],e.uniforms+=" alpha : f32,");const i=o.runWebGPUProgram(e,r,I.dtype,n);A.push(I);const c=Me({inputs:{x:i},backend:o,attrs:{shape:x}});A.push(i);for(const t of A)o.disposeData(t.dataId);return c}break;case F.MatMulSmallOutputSizeProgram:k=new xe(w,_,N,n,r,a,l,s);break;case F.MatMulPackedProgram:const e=o.adapterInfo.isIntel();k=new ye(w,N,n,r,a,l,s,e);break;default:throw new Error(`Unsupported MatMulProgramType ${P}.`)}a&&C.push(a),s&&C.push(s),"leakyrelu"===l&&(T.push({type:"float32",data:[u]}),k.uniforms+=" alpha : f32,"),I=o.runWebGPUProgram(k,C,t.dtype,T,I);const O=Me({inputs:{x:I},backend:o,attrs:{shape:x}});A.push(I);for(const t of A)o.disposeData(t.dataId);return O}const ke={kernelName:i._FusedMatMul,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{a:i,b:o,bias:a,preluActivationWeights:s}=e,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:h}=r;return Te({a:i,b:o,transposeA:u,transposeB:l,backend:n,bias:a,preluActivationWeights:s,leakyreluAlpha:h,activation:c})}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ie{constructor(t,e,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=i.backend_util.assertAndGetBroadcastShape(e,n),this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${t}`,this.op=t}getUserCode(){return`\n      fn binaryOpComplex(\n          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {\n        ${vt(this.op,!1)}\n      }\n\n      ${b("index")} {\n        if(index < uniforms.size) {\n          let areal = getARealByOutputIndex(index);\n          let aimag = getAImagByOutputIndex(index);\n          let breal = getBRealByOutputIndex(index);\n          let bimag = getBImagByOutputIndex(index);\n          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ne{constructor(t,e,n){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=i.backend_util.assertAndGetBroadcastShape(e,n),this.dispatchLayout=L(this.outputShape),this.op=t,this.useSharedMemoryWithA=e.length<=1&&n.length>1&&e[0]<128,this.useSharedMemoryWithB=n.length<=1&&e.length>1&&n[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?n[0]:e[0],this.shaderKey=`binary_${t}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const r=e.length>0&&e[e.length-1]%4==0,o=n.length>0&&n[n.length-1]%4==0;r&&o?(this.outputComponent=4,this.variableComponents=[4,4]):r&&(i.util.isScalarShape(n)||1===n[n.length-1])||o&&(i.util.isScalarShape(e)||1===e[e.length-1])?(this.outputComponent=4,this.variableComponents=r?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${t}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let t;const e=4===this.outputComponent?"vec4<f32>":"f32",n=`\n    fn binaryOperation(a : ${e}, b : ${e}) -> ${e} {\n      ${vt(this.op,4===this.outputComponent)}\n    };\n    `;if("shared"===this.type){const e=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",r=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);\n          let b = sharedBuf[${e}];`:`let a = sharedBuf[${e}];\n          let b = getBByOutputIndex(index);`;t=`\n        ${n}\n        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;\n        ${b("index")} {\n          // Fill in the shared memory buffer.\n          let localIndex = i32(localId.x);\n          if(localIndex < ${this.lastDimensionSize}) {\n            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);\n          }\n          workgroupBarrier();\n\n          if(index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            ${r}\n            setOutputAtIndex(index, binaryOperation(a, b));\n          }\n        }\n        `}else t=`\n       ${n}\n       ${b("index")} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index * ${this.outputComponent});\n           let a = ${e}(getAByOutputCoords(coords));\n           let b = ${e}(getBByOutputCoords(coords));\n           setOutputAtIndex(index, binaryOperation(a, b));\n         }\n       }\n       `;return t}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pe(t){const{inputs:e}=t,{x:n}=e;return t.backend.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}const Oe={kernelName:i.Identity,backendName:"webgpu",kernelFunc:Pe};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Le(t){const{inputs:e,backend:n}=t,{real:r,imag:i}=e,o=n.makeTensorInfo(r.shape,"complex64"),a=n.tensorMap.get(o.dataId),s=Pe({inputs:{x:r},backend:n}),u=Pe({inputs:{x:i},backend:n});return a.complexTensorInfos={real:s,imag:u},o}const Re={kernelName:i.Complex,backendName:"webgpu",kernelFunc:Le};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class De{constructor(t,e,n=""){this.variableNames=["A"],this.size=!0;this.workgroupSize=[128,1,1],this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=e,""!==n&&(this.uniforms=n),this.shaderKey=`unary_${e}`}getUserCode(){return`\n      fn unaryOperation(a : f32) -> f32 {\n        ${ce(this.op,!1)}\n      }\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          setOutputAtIndex(index, unaryOperation(a));\n        }\n      }\n      `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ze({opType:t,cpuKernelImpl:e,dtype:n}){return({inputs:r,backend:i})=>{const{x:o}=r,a=i,s=n||o.dtype;if(a.shouldExecuteOnCPU([o])&&null!=e){const t=a.tensorMap.get(o.dataId),n=e(t.values,s);return a.makeTensorInfo(o.shape,s,n)}const u=new De(o.shape,t);return a.runWebGPUProgram(u,[o],s)}}function Fe({opType:t,cpuKernelImpl:e,supportsComplex:n=!1,dtype:r}){return({inputs:o,backend:a})=>{const{a:s,b:u}=o,l=a;if(n&&"complex64"===s.dtype){const e=l.tensorMap.get(s.dataId),n=l.tensorMap.get(u.dataId);let r,o;if(t!==j.MUL)[r,o]=[[e.complexTensorInfos.real,n.complexTensorInfos.real],[e.complexTensorInfos.imag,n.complexTensorInfos.imag]].map((e=>{const[n,r]=e,o={dataId:n.dataId,dtype:n.dtype,shape:s.shape},a={dataId:r.dataId,dtype:r.dtype,shape:u.shape},c=new Ne(t,s.shape,u.shape);return l.runWebGPUProgram(c,[o,a],(0,i.upcastType)(n.dtype,r.dtype))}));else{const t=new Ie(j.COMPLEX_MULTIPLY_REAL,s.shape,u.shape),i=new Ie(j.COMPLEX_MULTIPLY_IMAG,s.shape,u.shape),a=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:s.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:u.shape},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:u.shape}];r=l.runWebGPUProgram(t,a,"float32"),o=l.runWebGPUProgram(i,a,"float32")}const a=Le({inputs:{real:r,imag:o},backend:l});return l.disposeData(r.dataId),l.disposeData(o.dataId),a}const c=r||(0,i.upcastType)(s.dtype,u.dtype);if(("string"===s.dtype||"string"===u.dtype||l.shouldExecuteOnCPU([s,u]))&&null!=e){const t=l.tensorMap.get(s.dataId).values,n=l.tensorMap.get(u.dataId).values,r="string"===s.dtype?i.backend_util.fromUint8ToStringArray(t):t,o="string"===s.dtype?i.backend_util.fromUint8ToStringArray(n):n,[a,h]=e(s.shape,u.shape,r,o,c);return l.makeTensorInfo(h,c,a)}const h=new Ne(t,s.shape,u.shape);return l.runWebGPUProgram(h,[s,u],c)}}var Be=n(67466);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const{addImpl:Ue,castImpl:je,ceilImpl:Ve,concatImpl:He,equalImpl:Ge,expImpl:We,expm1Impl:Xe,floorImpl:Ye,floorDivImpl:qe,gatherNdImpl:$e,gatherV2Impl:Ke,greaterEqualImpl:Ze,greaterImpl:Qe,lessEqualImpl:Je,lessImpl:tn,logImpl:en,maxImpl:nn,maximumImpl:rn,minimumImpl:on,multiplyImpl:an,negImpl:sn,notEqualImpl:un,prodImpl:ln,rangeImpl:cn,rsqrtImpl:hn,scatterImpl:dn,simpleAbsImpl:fn,sliceImpl:pn,stridedSliceImpl:mn,stringNGramsImpl:gn,subImpl:vn,tileImpl:yn,topKImpl:bn,transposeImpl:xn,uniqueImpl:wn}=Be,_n=ze({opType:yt.ABS,cpuKernelImpl:fn}),Sn={kernelName:i.Abs,backendName:"webgpu",kernelFunc:_n},En=ze({opType:yt.ACOS}),An={kernelName:i.Acos,backendName:"webgpu",kernelFunc:En},Mn=ze({opType:yt.ACOSH}),Cn={kernelName:i.Acosh,backendName:"webgpu",kernelFunc:Mn},Tn=Fe({opType:j.ADD,cpuKernelImpl:Ue,supportsComplex:!0}),kn={kernelName:i.Add,backendName:"webgpu",kernelFunc:Tn};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class In{constructor(t){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t[0],this.variableNames=t.map(((t,e)=>`T${e}`)),this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const t=[];this.variableNames.forEach((e=>{t.push(`let v${e} = get${e}ByOutputCoords(coords);`)}));const e=this.variableNames.map((t=>`v${t}`)).join(" + ");return`\n      ${b("index")} {\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if (flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            ${t.join("\n        ")}\n            setOutputAtIndex(flatIndex, ${e});\n          }\n        }\n      }\n    `}}const Nn={kernelName:i.AddN,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,r=e;if(1===r.length)return Pe({inputs:{x:r[0]},backend:n});const o=r.map((t=>t.dtype)).reduce(((t,e)=>(0,i.upcastType)(t,e))),a=r.map((t=>t.shape)),s=new In(a);return n.runWebGPUProgram(s,r,o)}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Pn{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[16,16,1];const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t[e[r]];this.outputShape=n,this.dispatchLayout={x:[0],y:[1]},this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){i.util.assert(this.workgroupSize[0]===this.workgroupSize[1],(()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`));const t=this.workgroupSize[0];return`\n      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;\n      ${b()} {\n        var x = i32(workgroupId.x) * ${t} + i32(localId.x);\n        var y = i32(workgroupId.y) * ${t} + i32(localId.y);\n        let width = uniforms.outShape[0];\n        let height = uniforms.outShape[1];\n        if (x < width && y < height) {\n          tile[localId.y][localId.x] = f32(A[y * width + x]);\n        }\n        workgroupBarrier();\n\n        x = i32(workgroupId.y) * ${t} + i32(localId.x);\n        y = i32(workgroupId.x) * ${t} + i32(localId.y);\n        if (x < height && y < width) {\n          setOutputAtIndex((y * height + x), tile[localId.x]\n            [localId.y]);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class On{constructor(t,e){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t[e[r]];this.outputShape=n,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=e,this.shaderKey=`transpose_${e}`}getUserCode(){const t=v(this.outputShape.length),e=Ln(this.newDim);return`\n      ${b("index")} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(\n              ${t}(${e}), uniforms.aShape)]);\n          }\n        }\n      }\n    `}}function Ln(t){const e=t.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const n=new Array(e);for(let e=0;e<t.length;e++)n[t[e]]=`coords.${y(e)}`;return n.join()}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Rn(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{perm:a}=r,s=n,u=o.shape.length,l=new Array(u);for(let t=0;t<l.length;t++)l[t]=o.shape[a[t]];if(n.shouldExecuteOnCPU([o])){const t=s.tensorMap.get(o.dataId).values,e=xn(t,o.shape,o.dtype,a,l);return n.makeTensorInfo(l,o.dtype,e)}if(2===o.shape.length&&i.util.arraysEqual(a,[1,0])){const t=new Pn(o.shape,a);return s.runWebGPUProgram(t,[o],o.dtype)}const c=new On(o.shape,a);return s.runWebGPUProgram(c,[o],o.dtype)}const Dn={kernelName:i.Transpose,backendName:"webgpu",kernelFunc:Rn};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class zn{constructor(t,e,n){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[t.batchSize,t.inSize];const[r]=i.backend_util.computeOutAndReduceShapes(this.inputShape,[1]);this.outputShape=0===r.length?[1]:r,t.inSize>=32768&&n>=512?this.workgroupSize=[512,1,1]:t.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=e,this.shaderKey=`reduce_${e}`}getUserCode(){let t="",e="0.0";const n=this.workgroupSize[0];"min"===this.reduceType||"max"===this.reduceType?(t=`\n         if (isnan(candidate)) {\n          bestValue = uniforms.NAN;\n         } else if (!isnan(bestValue) && candidate ${"min"===this.reduceType?"<":">"} bestValue)\n           {  bestValue = candidate; }`,e="f32(x[offset])"):"sum"===this.reduceType||"mean"===this.reduceType?t=" bestValue = bestValue + candidate; ":"prod"===this.reduceType?(t=" bestValue = bestValue * candidate; ",e="1.0"):"all"===this.reduceType?(t=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",e="1.0"):"any"===this.reduceType&&(t=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",e="0.0");const r="mean"===this.reduceType?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`\n       fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n       }\n\n       ${`\n         var<workgroup> xBestValues : array<f32, ${n}>;\n       `}\n       fn getOffset(outputIndex : i32) -> i32 {\n         let outputCoords = getCoordsFromIndex(outputIndex);\n         let offset = ${1===this.outputShape.length?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;\n          return offset;\n       }\n       ${b("index")} {\n         let outputIndex = index / ${n};\n         let offset = getOffset(outputIndex);\n         var bestValue = ${e};\n         let Length = uniforms.reduceSize;\n         let WorkPerThread = DIV_CEIL(u32(Length), ${n}u);\n         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;\n             k = k + ${n}) {\n           let candidate = f32(x[offset + k]);\n           ${t}\n         }\n         xBestValues[localId.x] = bestValue;\n         workgroupBarrier();\n\n         var reduceSize = min(u32(Length), ${n}u);\n         for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n             currentSize = reduceSize / 2u) {\n           let interval = DIV_CEIL(reduceSize, 2u);\n           if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            ${t}\n            xBestValues[localId.x] = bestValue;\n           }\n           reduceSize = interval;\n           workgroupBarrier();\n         }\n\n         if (localId.x == 0u && outputIndex < uniforms.size) {\n          ${r}\n        }\n       }\n     `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Fn={mean:"float32",all:"bool",any:"bool"};function Bn(t,e,n,r,o){const a=t.shape.length,s=[],u=i.util.parseAxisParam(e,t.shape);let l=u;const c=i.backend_util.getAxesPermutation(l,a);let h=t;null!=c&&(h=Rn({inputs:{x:t},attrs:{perm:c},backend:o}),l=i.backend_util.getInnerMostAxes(l.length,a),s.push(h)),i.backend_util.assertAxesAreInnerMostDims(r,l,a);const[d,f]=i.backend_util.computeOutAndReduceShapes(h.shape,l);let p,m=d;if(n&&(m=i.backend_util.expandShapeToKeepDim(d,u)),"max"!==r&&"prod"!==r||!o.shouldExecuteOnCPU([h])){const e=i.util.sizeFromShape(f),n={windowSize:e,inSize:e,batchSize:i.util.sizeFromShape(h.shape)/e,outSize:1},a=Fn[r]||(0,i.sumOutType)(t.dtype),u=[{type:"int32",data:[e]}],l=new zn(n,r,o.device.limits.maxComputeWorkgroupSizeX),c=o.runWebGPUProgram(l,[h],a,u);s.push(c),p=Me({inputs:{x:c},attrs:{shape:m},backend:o})}else{const e=o.tensorMap.get(h.dataId).values;switch(r){case"max":const n=nn(e,i.util.sizeFromShape(f),m,t.dtype);p=o.makeTensorInfo(m,t.dtype,n);break;case"prod":const{outVals:a,outShape:s,outDtype:u}=ln(h.shape,h.dtype,e,l);p=o.makeTensorInfo(s,u,a);break;default:throw new Error(`${r} CPU implementation is not yet supported.`)}}return s.forEach((t=>o.disposeData(t.dataId))),p}const Un={kernelName:i.All,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{keepDims:o,axis:a}=r;return Bn(i,a,o,"all",n)}};const jn={kernelName:i.Any,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{keepDims:o,axis:a}=r;return Bn(i,a,o,"any",n)}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Vn{constructor(t,e,n){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const r=[e];this.op="min"===n?"<":">";const[o,a]=i.backend_util.computeOutAndReduceShapes(t,r);this.outputShape=0===o.length?[1]:o,this.dispatchLayout=L(this.outputShape),i.util.sizeFromShape(a)<32?(this.type="plain",this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=I(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=t,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const t=this.workgroupSize[0],e=()=>1===this.inputShape.length?"uniforms.xShape":`uniforms.xShape.${y(this.inputShape.length-1)}`,n=()=>{let t="";if(1===this.outputShape.length)1!==this.inputShape.length&&(t+="outputCoords,");else for(let e=0;e<this.outputShape.length;e++)t+=`outputCoords.${y(e)},`;return t};if("shared"===this.type){return`\n      fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n      }\n\n      ${`\n      var<workgroup> xBestIndices : array<i32, ${t}>;\n      var<workgroup> xBestValues : array<f32, ${t}>;\n    `}\n\n      ${b("index")} {\n        let outputIndex = index / ${t};\n        let reduceLength = ${e()};\n\n        var bestIndex = i32(localId.x);\n        var bestValue = uniforms.infinityValue;\n        let outputCoords = getCoordsFromIndex(outputIndex);\n        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;\n            k = k + ${t}) {\n          let candidate = getX(${n()} k);\n          if (!isnan(candidate) && candidate ${this.op} bestValue) {\n            bestValue = candidate;\n            bestIndex = k;\n          }\n        }\n        xBestValues[localId.x] = bestValue;\n        xBestIndices[localId.x] = bestIndex;\n        workgroupBarrier();\n\n        var reduceSize = min(u32(reduceLength), ${t}u);\n        for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n            currentSize = reduceSize / 2u) {\n          let interval = DIV_CEIL(reduceSize, 2u);\n          if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              xBestValues[localId.x] = bestValue;\n              xBestIndices[localId.x] = xBestIndices[localId.x + interval];\n            }\n          }\n          reduceSize = interval;\n          workgroupBarrier();\n        }\n\n        if (localId.x == 0u && outputIndex < uniforms.size) {\n          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);\n        }\n      }\n    `}return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let outputCoords = getCoordsFromIndex(index);\n          var bestIndex = 0;\n          var bestValue = getX(${n()} 0);\n          let reduceLength = ${e()};\n          for (var i = 1; i < reduceLength; i++) {\n            let candidate = getX(${n()} i);\n            if (candidate ${this.op} bestValue) {\n              bestValue = candidate;\n              bestIndex = i;\n            }\n          }\n          setOutputAtIndexI32(index, bestIndex);\n        }\n      }\n      `}}const Hn={kernelName:i.ArgMax,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{axis:a}=r;let s=i.util.parseAxisParam(a,o.shape);const u=i.backend_util.getAxesPermutation(s,o.shape.length);let l=o;const c=[];null!=u&&(l=Rn({inputs:{x:o},backend:n,attrs:{perm:u}}),c.push(l),s=i.backend_util.getInnerMostAxes(s.length,l.shape.length)),i.backend_util.assertAxesAreInnerMostDims("argMax",[s[0]],l.shape.length);const h=new Vn(l.shape,s[0],"max"),d=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],f=n.runWebGPUProgram(h,[l],"int32",d);return c.forEach((t=>n.disposeData(t.dataId))),f}};const Gn={kernelName:i.ArgMin,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{axis:a}=r;let s=i.util.parseAxisParam(a,o.shape);const u=i.backend_util.getAxesPermutation(s,o.shape.length);let l=o;const c=[];null!=u&&(l=Rn({inputs:{x:o},backend:n,attrs:{perm:u}}),c.push(l),s=i.backend_util.getInnerMostAxes(s.length,l.shape.length)),i.backend_util.assertAxesAreInnerMostDims("argMin",[s[0]],l.shape.length);const h=new Vn(l.shape,s[0],"min"),d=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],f=n.runWebGPUProgram(h,[l],"int32",d);return c.forEach((t=>n.disposeData(t.dataId))),f}},Wn=ze({opType:yt.ASIN}),Xn={kernelName:i.Asin,backendName:"webgpu",kernelFunc:Wn},Yn=ze({opType:yt.ASINH}),qn={kernelName:i.Asinh,backendName:"webgpu",kernelFunc:Yn},$n=ze({opType:yt.ATAN}),Kn={kernelName:i.Atan,backendName:"webgpu",kernelFunc:$n},Zn=Fe({opType:j.ATAN2}),Qn={kernelName:i.Atan2,backendName:"webgpu",kernelFunc:Zn},Jn=ze({opType:yt.ATANH}),tr={kernelName:i.Atanh,backendName:"webgpu",kernelFunc:Jn};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class er{constructor(t){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n\n          let xRCCorner = coords.yz * uniforms.strides;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          let value = getX(batch, xRCorner, xCCorner, d);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class nr{constructor(t,e,n=!1,r=!1,i=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=n,this.flattenPositions=r,this.includeBatchIndex=i,this.shaderKey=`pool2D_${e}_${n}_${r}_${i}`}getUserCode(){let t;if("avg"===this.poolType)t="resultValue = resultValue + value; count = count + 1.0;";else if(this.computePositions){t=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};\n      }`}else t="resultValue = max(value, resultValue);";let e="resultValue";"avg"===this.poolType&&(e="resultValue / max(count, 1.0)");return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}\n\n          var count = 0.0;\n          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {\n            let xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {\n              let xC = xCCorner + wC;\n              if (xC < 0 || xC >= uniforms.convDims.y) {\n                continue;\n              }\n\n              let value = getX(batch, xR, xC, d);\n              ${t}\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}\n        }\n      }\n    `}}class rr{constructor(t,e,n=!1,r=!1,i=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,"avg"===e&&n)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=n,this.flattenPositions=r,this.includeBatchIndex=i,this.shaderKey=`pool3D_${e}_${n}_${r}_${i}`}getUserCode(){let t;if("avg"===this.poolType)t="resultValue += value; count += 1.0;";else if(this.computePositions){t=`let currMaxValue = mix(value, maxValue, maxValueFound);\n      if (value >= currMaxValue) {\n        maxValue = value;\n        maxValueFound = 1.0;\n        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};\n      }`}else t="resultValue = max(value, resultValue);";let e="resultValue";"avg"===this.poolType&&(e="resultValue / max(count, 1.0)");return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords.x;\n          let ch = coords.u;\n\n          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n          let xDCorner = xCorner.x;\n          let xRCorner = xCorner.y;\n          let xCCorner = xCorner.z;\n\n          ${this.computePositions?"var maxValue = 0.0;\n            var maxValueFound = 0.0;\n            var maxPosition = 0;":`var resultValue = ${"avg"===this.poolType?"0.0":"-1.0 / pow(10.0, -20.0)"};`}\n\n          var count = 0.0;\n          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {\n            let xD = xDCorner + wD;\n            if (xD < 0 || xD >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {\n              let xR = xRCorner + wR;\n              if (xR < 0 || xR >= uniforms.convDims.y) {\n                continue;\n              }\n\n              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {\n                let xC = xCCorner + wC;\n                if (xC < 0 || xC >= uniforms.convDims.z) {\n                  continue;\n                }\n\n                let value = getX(batch, xD, xR, xC, ch);\n                ${t}\n              }\n            }\n          }\n\n          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ir(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{reductionIndices:o,keepDims:a}=r;return Bn(i,o,a,"max",n)}const or={kernelName:i.Max,backendName:"webgpu",kernelFunc:ir};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ar(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{keepDims:o,axis:a}=r;return Bn(i,a,o,"mean",n)}const sr={kernelName:i.Mean,backendName:"webgpu",kernelFunc:ar};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ur(t,e,n,r){if(1===e.filterWidth&&1===e.filterHeight&&i.util.arraysEqual(e.inShape,e.outShape))return Pe({inputs:{x:t},backend:r});if(e.filterWidth===e.inWidth&&e.filterHeight===e.inHeight&&1===e.batchSize&&"VALID"===e.padInfo.type){const o=t.shape.length,a=Me({inputs:{x:t},backend:r,attrs:{shape:[t.shape[o-3]*t.shape[o-2],t.shape[o-1]]}});let s;"avg"===n?s=ar({inputs:{x:a},backend:r,attrs:{axis:0,keepDims:!1}}):(i.util.assert("max"===n,(()=>`Invalid pool type ${n}`)),s=ir({inputs:{x:a},backend:r,attrs:{reductionIndices:0,keepDims:!1}}));const u=Me({inputs:{x:s},backend:r,attrs:{shape:e.outShape}});return r.disposeData(a.dataId),r.disposeData(s.dataId),u}let o;const a=[{type:"int32",data:[e.strideHeight,e.strideWidth]}];return 1===e.filterHeight&&1===e.filterWidth?o=new er(e):("avg"===n?o=new nr(e,"avg"):(i.util.assert("max"===n,(()=>`Invalid pool type ${n}`)),o=new nr(e,"max")),a.push({type:"int32",data:[e.padInfo.top,e.padInfo.left]},{type:"int32",data:[e.dilationHeight,e.dilationWidth]},{type:"int32",data:[e.inHeight,e.inWidth]},{type:"int32",data:[e.effectiveFilterHeight,e.effectiveFilterWidth]})),r.runWebGPUProgram(o,[t],t.dtype,a)}const lr={kernelName:i.AvgPool,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{filterSize:a,strides:s,pad:u,dimRoundingMode:l}=r;return ur(o,i.backend_util.computePool2DInfo(o.shape,a,s,1,u,l),"avg",n)}};const cr={kernelName:i.AvgPool3D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{filterSize:a,strides:s,pad:u,dataFormat:l,dimRoundingMode:c}=r,h=i.backend_util.computePool3DInfo(o.shape,a,s,[1,1,1],u,c,l),d=new rr(h,"avg"),f=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];return n.runWebGPUProgram(d,[o],o.dtype,f)}};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class hr{constructor(t){this.variableNames=["dy"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n\n            dotProd = dotProd + dyValue * uniforms.avgMultiplier;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}class dr{constructor(t){this.variableNames=["dy"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              dotProd += dyValue * uniforms.avgMultiplier;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}const fr={kernelName:i.AvgPool3DGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,input:a}=e,s=a,{filterSize:u,strides:l,pad:c,dimRoundingMode:h}=r,d=i.backend_util.computePool3DInfo(s.shape,u,l,1,c,h),f=new dr(d),p=1/(d.filterDepth*d.filterHeight*d.filterWidth),m=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterDepth-1-d.padInfo.front,d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"float32",data:[p]}];return n.runWebGPUProgram(f,[o],s.dtype,m)}};const pr={kernelName:i.AvgPoolGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,input:a}=e,s=a;z([o,a],"avgPoolGrad");const{filterSize:u,strides:l,pad:c}=r,h=i.backend_util.computePool2DInfo(s.shape,u,l,1,c),d=new hr(h),f=1/(h.filterHeight*h.filterWidth),p=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.effectiveFilterHeight-1-h.padInfo.top,h.effectiveFilterWidth-1-h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"float32",data:[f]}];return n.runWebGPUProgram(d,[o],s.dtype,p)}};const mr={kernelName:i.BatchMatMul,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{a:i,b:o}=e,{transposeA:a,transposeB:s}=r;return Te({a:i,b:o,transposeA:a,transposeB:s,backend:n})}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class gr{constructor(t,e){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.rank=e.length,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=t,this.uniforms=`start : ${v(t.length)}, `,this.shaderKey="slice"}getUserCode(){const t=v(this.rank),e=function(t){if(1===t)return"sourceLoc";if(t<=6)return vr.slice(0,t).map((t=>`sourceLoc.${t}`)).join(",");throw Error(`Slicing for rank ${t} is not yet supported`)}(this.rank);let n;n=1===this.start.length?this.outputShape.map(((t,e)=>"sourceLoc = uniforms.start + coords;")):this.outputShape.map(((t,e)=>`sourceLoc.${vr[e]} = uniforms.start.${y(e)} + coords.${vr[e]};`));return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          var sourceLoc : ${t};\n          let coords = getCoordsFromIndex(index);\n          ${n.join("\n")}\n          setOutputAtIndex(index, getSource(${e}));\n        }\n      }\n    `}}const vr=["x","y","z","w","u","v"];
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yr(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{begin:a,size:s}=r,[u,l]=i.slice_util.parseSliceParams(o,a,s);if(i.slice_util.assertParamsValid(o,u,l),n.shouldExecuteOnCPU([o])||"string"===o.dtype){const t=n.tensorMap.get(o.dataId),e=pn(t.values,u,l,o.shape,o.dtype);return n.makeTensorInfo(l,o.dtype,e)}if(0===i.util.sizeFromShape(l))return n.makeTensorInfo(l,o.dtype,[]);const c=new gr(u,l),h=[{type:"int32",data:u}];return n.runWebGPUProgram(c,[o],o.dtype,h)}const br={kernelName:i.Slice,backendName:"webgpu",kernelFunc:yr},xr={kernelName:i.BatchToSpaceND,backendName:"webgpu",kernelFunc:t=>{const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{blockShape:a,crops:s}=r;i.util.assert(o.shape.length<=4,(()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet"));const u=a.reduce(((t,e)=>t*e)),l=i.backend_util.getReshaped(o.shape,a,u),c=i.backend_util.getPermuted(l.length,a.length),h=i.backend_util.getReshapedPermuted(o.shape,a,u),d=i.backend_util.getSliceBeginCoords(s,a.length),f=i.backend_util.getSliceSize(h,s,a.length),p=[],m=Me({inputs:{x:o},backend:n,attrs:{shape:l}}),g=Rn({inputs:{x:m},backend:n,attrs:{perm:c}}),v=Me({inputs:{x:g},backend:n,attrs:{shape:h}}),y=yr({inputs:{x:v},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(g),p.push(v),p.forEach((t=>n.disposeData(t.dataId))),y}},wr=`\n  fn bincount_write(index: i32, value: f32) {\n    ${f("&result[index]","value","float32")}\n  }\n`;class _r{constructor(t,e,n=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=t,this.rank=t.length,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=n,n&&(this.atomic=!1),this.hasWeights=e,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`\n    ${this.binaryOutput?"\n  fn bincount_write(index: i32, value: f32) {\n    atomicStore(&result[index], bitcast<i32>(value));\n  }\n":wr}\n  ${b("index")} {\n    ${1===this.rank?`if (index < uniforms.xShape) {\n      let indexVal = i32(getX(index));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};\n        bincount_write(indexVal, value);\n      }\n    }`:`let coord = getCoordsFromIndex(index);\n    if (coordsInBounds2D(coord, uniforms.xShape)) {\n      let indexVal = i32(getX(coord[0], coord[1]));\n      if (indexVal < uniforms.binCountSize) {\n        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};\n        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);\n      }\n    }`}\n  }\n  `}}const Sr={kernelName:i.Bincount,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,weights:a}=e,{size:s}=r,u=i.util.sizeFromShape(o.shape),l=i.util.sizeFromShape(a.shape)>0,c=[s],h=a.dtype,d=Ee({backend:n,attrs:{shape:c,value:0,dtype:h}}),f=new _r([u],l),p=[{type:"int32",data:[s]}],m=l?[o,a]:[o];return n.runWebGPUProgram(f,m,h,p,d)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Er{constructor(t){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`\n  ${b("index")} {\n    if (index < uniforms.size) {\n      var s0 = 1.0;\n      var s1 = 1.0;\n      let indexS0 = index - uniforms.size + uniforms.s0Size;\n      let indexS1 = index - uniforms.size + uniforms.s1Size;\n      if (indexS0 >= 0) {\n        s0 = getS0(indexS0);\n      }\n      if (indexS1 >= 0) {\n        s1 = getS1(indexS1);\n      }\n\n      if (s0 == 1.0) {\n        setOutputAtIndex(index, s1);\n      } else if (s1 == 1.0) {\n        setOutputAtIndex(index, s0);\n      } else if (s0 != s1) {\n        setOutputAtIndex(index, uniforms.NAN);\n      } else {\n        setOutputAtIndex(index, s0);\n      }\n    }\n  }\n  `}}const Ar={kernelName:i.BroadcastArgs,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{s0:r,s1:o}=e;if(n.shouldExecuteOnCPU([r,o])){const t=n.tensorMap.get(r.dataId),e=n.tensorMap.get(o.dataId),a=t.values,s=e.values,u=i.backend_util.assertAndGetBroadcastShape(Array.from(a),Array.from(s));return n.makeTensorInfo([u.length],"int32",Int32Array.from(u))}const a=i.util.sizeFromShape(r.shape),s=i.util.sizeFromShape(o.shape),u=Math.max(a,s),l=new Er(u),c=[{type:"int32",data:[a]},{type:"int32",data:[s]}];return n.runWebGPUProgram(l,[r,o],"int32",c)}},Mr=Fe({opType:j.NOT_EQUAL,dtype:"bool",cpuKernelImpl:un}),Cr={kernelName:i.NotEqual,backendName:"webgpu",kernelFunc:Mr};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Tr(t){const{inputs:e,backend:n}=t,{input:r}=e;return Pe({inputs:{x:n.tensorMap.get(r.dataId).complexTensorInfos.real},backend:n})}const kr={kernelName:i.Real,backendName:"webgpu",kernelFunc:Tr};const Ir={kernelName:i.Cast,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function t(e){const{inputs:n,backend:r,attrs:o}=e,{x:a}=n,{dtype:s}=o;if("complex64"===s){if("complex64"===a.dtype)return Pe({inputs:{x:a},backend:r});const e=i.zeros(a.shape),n=t({inputs:{x:a},backend:r,attrs:{dtype:"float32"}}),o=Le({inputs:{real:n,imag:e},backend:r});return e.dispose(),r.disposeData(n.dataId),o}if("complex64"===a.dtype){const e=Tr({inputs:{input:a},backend:r}),n=t({inputs:{x:e},backend:r,attrs:{dtype:s}});return r.disposeData(e.dataId),n}if(!i.util.hasEncodingLoss(a.dtype,s)){const t=Pe({inputs:{x:a},backend:r});return{dataId:t.dataId,shape:t.shape,dtype:s}}if(r.shouldExecuteOnCPU([a])){const t=r.tensorMap.get(a.dataId).values,[e,n,i]=je(t,a.shape,a.dtype,s);return r.makeTensorInfo(e,n,i)}if("int32"===s)
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
return function(t,e){const n=new De(t.shape,yt.TO_INT),r=e.runWebGPUProgram(n,[t],"int32");return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}(a,r);if("bool"===s){const t=r.makeTensorInfo([],"bool",i.util.getTypedArrayFromDType("bool",1)),e=Mr({inputs:{a,b:t},backend:r});return r.disposeData(t.dataId),e}throw new Error(`Error in Cast: failed to cast ${a.dtype} to ${s}`)}},Nr=ze({opType:yt.CEIL,cpuKernelImpl:Ve}),Pr={kernelName:i.Ceil,backendName:"webgpu",kernelFunc:Nr};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Or{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`\n      ${b("index")} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          var clampedValue = clamp(\n              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));\n          clampedValue = select(clampedValue, value, isnanVec4(value));\n          setOutputAtIndex(index, clampedValue);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Lr{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`\n      ${b("index")} {\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          if (isnan(value)) {\n            setOutputAtIndex(index, value);\n            return;\n          }\n          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));\n        }\n      }\n    `}}const Rr={kernelName:i.ClipByValue,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{clipValueMin:a,clipValueMax:s}=r;let u;const l=[{type:"float32",data:[a]},{type:"float32",data:[s]}];return u=i.util.sizeFromShape(o.shape)%4==0?new Or(o.shape):new Lr(o.shape),n.runWebGPUProgram(u,[o],o.dtype,l)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Dr{constructor(t){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let re = abs(getRealByOutputIndex(index));\n        let im = abs(getImagByOutputIndex(index));\n        let mx = max(re, im);\n\n        // The length function in wgsl may be not underflow-safe on some GPUs.\n        // So the safe solution is to ensure underflow-safety in all cases.\n        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));\n      }\n    }\n  `}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function zr(t,e){return{dataId:e.dataId,dtype:e.dtype,shape:t.shape}}const Fr={kernelName:i.ComplexAbs,backendName:"webgpu",kernelFunc:function(t){const{inputs:e,backend:n}=t,{x:r}=e,i=n.tensorMap.get(r.dataId),o=new Dr(r.shape),a=[zr(r,i.complexTensorInfos.real),zr(r,i.complexTensorInfos.imag)];return n.runWebGPUProgram(o,a,a[0].dtype)}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Br{constructor(t){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=i.backend_util.computeOutShape(t,1),this.variableNames=t.map(((t,e)=>`T${e}`)),this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=t.length-1;for(let t=0;t<this.offsetLength;t++)this.uniforms+=`offset${t} : i32,`;this.shaderKey="concat"}getUserCode(){const t=[];if(this.offsetLength>0){t.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let e=1;e<this.offsetLength;e++)t.push(`else if (yC < uniforms.offset${[e]}){ setOutputAtCoords(coords.x, coords.y, getT${e}(yR, yC - uniforms.offset${e-1})); }`);const e=this.offsetLength,n=this.offsetLength-1;t.push(`else { setOutputAtCoords(coords.x, coords.y, getT${e}(yR, yC - uniforms.offset${n})); }`)}else t.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`\n      ${b("index")} {\n        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let flatIndex = index * ${this.workPerThread} + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            let yR = coords.x;\n            let yC = coords.y;\n\n            ${t.join("\n        ")}\n          }\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ur(t){const{inputs:e,backend:n}=t,{input:r}=e;return Pe({inputs:{x:n.tensorMap.get(r.dataId).complexTensorInfos.imag},backend:n})}const jr={kernelName:i.Imag,backendName:"webgpu",kernelFunc:Ur};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vr(t,e,n){const r=t[0].dtype;if("complex64"===r){const r=t.map((t=>Tr({inputs:{input:t},backend:n}))),i=t.map((t=>Ur({inputs:{input:t},backend:n}))),o=Vr(r,e,n),a=Vr(i,e,n),s=Le({inputs:{real:o,imag:a},backend:n});return r.forEach((t=>n.disposeData(t.dataId))),i.forEach((t=>n.disposeData(t.dataId))),n.disposeData(o.dataId),n.disposeData(a.dataId),s}let o=n.shouldExecuteOnCPU(t);if("string"===r&&(o=!0),o){const o=t.map((t=>{const r=i.util.sizeFromShape(t.shape.slice(e));return Me({inputs:{x:t},backend:n,attrs:{shape:[-1,r]}})})),a=o.map((t=>({vals:n.readSync(t.dataId),shape:t.shape}))),s=i.backend_util.computeOutShape(o.map((t=>t.shape)),1),u=1===o[0].shape[0],l=He(a,s,r,u),c=i.backend_util.computeOutShape(t.map((t=>t.shape)),e),h=n.makeTensorInfo(c,r,l);return o.forEach((t=>n.disposeData(t.dataId))),h}const a=n.device.limits.maxStorageBuffersPerShaderStage-1;if(t.length>a){const r=[];for(let i=0;i<t.length;i+=a){const o=t.slice(i,i+a);r.push(Vr(o,e,n))}const i=Vr(r,e,n);for(const t of r)n.disposeData(t.dataId);return i}const{tensors2D:s,outShape:u}=function(t,e,n){const r=i.backend_util.computeOutShape(t.map((t=>t.shape)),e),o=t.map((t=>Me({inputs:{x:t},backend:n,attrs:{shape:[i.util.sizeFromShape(t.shape.slice(0,e)),i.util.sizeFromShape(t.shape.slice(e))]}})));return{tensors2D:o,outShape:r}}(t,e,n),l=s.map((t=>t.shape)),c=new Br(l),h=[],d=new Array(l.length-1);if(d.length>0){d[0]=l[0][1],h.push({type:"int32",data:[d[0]]});for(let t=1;t<d.length;t++)d[t]=d[t-1]+l[t][1],h.push({type:"int32",data:[d[t]]})}const f=n.runWebGPUProgram(c,s,s[0].dtype,h);s.forEach((t=>n.disposeData(t.dataId)));const p=Me({inputs:{x:f},backend:n,attrs:{shape:u}});return n.disposeData(f.dataId),p}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Hr(t){const{inputs:e,backend:n,attrs:r}=t,{axis:o}=r,a=i.util.parseAxisParam(o,e[0].shape)[0],s=e.map((t=>t.shape));i.backend_util.assertParamsConsistent(s,a);const u=i.backend_util.computeOutShape(e.map((t=>t.shape)),a);if(0===i.util.sizeFromShape(u))return n.makeTensorInfo(u,e[0].dtype,[]);const l=e.filter((t=>i.util.sizeFromShape(t.shape)>0));return 1===l.length?Pe({inputs:{x:l[0]},backend:n}):Vr(l,a,n)}const Gr={kernelName:i.Concat,backendName:"webgpu",kernelFunc:Hr};class Wr{constructor(t,e,n,r,i=!1,o=null,a=!1,s=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.outShape,this.isChannelsLast="channelsLast"===t.dataFormat,this.isVec4=((t.inChannels%4==0||t.inChannels%3==0)&&this.isChannelsLast||t.outWidth%4==0&&!this.isChannelsLast)&&t.outChannels%4==0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=P(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=O(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&t.inChannels%4!=0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),i&&(this.variableNames.push("bias"),this.variableComponents.push(4)),a&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],i&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=s,this.addBias=i,this.activation=o,this.hasPreluActivationWeights=a,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=e%this.tileAOuter==0,this.fitBOuter=n%this.tileBOuter==0,this.fitInner=r%this.tileInner==0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const t=this.isVec4?me(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):ve(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),e=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`\n    ${
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t,e,n,r,i=!1,o=null,a=!1,s=4,u=4,l=4){const c=t?"\n      let coord = vec4<i32>(batch, xRow, xCol, xCh);\n      ":"\n      let coord = vec4<i32>(batch, xCh, xRow, xCol);\n      ",h=t?"\n      let coords = vec4<i32>(\n        batch,\n        row / outWidth,\n        row % outWidth,\n        col);\n      ":"\n      let coords = vec4<i32>(\n        batch,\n        row,\n        col / outWidth,\n        col % outWidth);\n      ",d=t?"uniforms.xShape[1]":"uniforms.xShape[2]",f=t?"uniforms.xShape[2]":"uniforms.xShape[3]",p=t?"row":"col",m=t?"col":"row",v=`\n      let inChannels = uniforms.wShape[2];\n      let outWidth = ${t?"uniforms.outShape[2]":"uniforms.outShape[3]"};\n      let outRow = ${p} / outWidth;\n      let outCol = ${p} % outWidth;\n\n      let WRow = ${m} / (uniforms.filterDims[1] * inChannels);\n      let WCol = ${m} / inChannels % uniforms.filterDims[1];\n      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];\n      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];\n      let xCh = ${m} % inChannels;\n      var resData = ${g(s)}(0.0);\n      // The bounds checking is always needed since we use it to pad zero for\n      // the 'same' padding type.\n      if (xRow >= 0 && xRow < ${d} && xCol >= 0 && xCol < ${f}) {\n        ${c}\n        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);\n        ${(t=>{switch(t){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${t} is not supported.`)}})(s)}\n      }\n      return resData;`,y=t?e&&r?`\n      ${v}`:`\n      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        ${v}\n      }\n      return ${g(s)}(0.0);`:r&&n?`\n      ${v}`:`\n      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {\n        ${v}\n      }\n      return ${g(s)}(0.0);`,b=`${(t=>{switch(t){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${t} is not supported.`)}})(u)}`,x=g(l),w=g(t?s:u),_=g(t?u:s);return`\n      ${he(o,a,4===l,4)}\n      fn mm_readA(batch: i32, row : i32, col : i32) -> ${w} {\n        ${t?y:b}\n      }\n\n      fn mm_readB(batch: i32, row : i32, col : i32) -> ${_} {\n        ${t?b:y}\n      }\n\n      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${x}) {\n        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)\n        {\n        var value = valueIn;\n        let outWidth = ${t?"uniforms.outShape[2]":"uniforms.outShape[3]"};\n        ${h}\n        ${de(i,o)}\n        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }`}(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,e[0],e[1],e[2])}\n    ${t}\n  `}}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Xr{constructor(t,e=!1,n=null,r=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=t.outShape,this.isChannelsLast="channelsLast"===t.dataFormat,this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e,this.activation=n,this.hasPreluActivationWeights=r,e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`\n       ${he(this.activation,this.hasPreluActivationWeights,!1,4)}\n       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{\n         let coords = vec4<i32>(batch, row, col, chan);\n         if (coordsInBounds4D(coords, uniforms.xShape)) {\n           return  getX(batch, row, col, chan);\n         } else {\n          return 0.0;\n         }\n       }\n       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{\n         let coords = vec4<i32>(row, col, xChannel, outChannel);\n         if(coordsInBounds4D(coords, uniforms.wShape)) {\n           return getW(row, col, xChannel, outChannel);\n          } else {\n            return 0.0;\n          }\n       }\n       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {\n         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}\n         if (coordsInBounds4D(coords, uniforms.outShape)) {\n           var value = valueIn;\n           ${de(this.addBias,this.activation)}\n           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);\n         }\n       }\n       ${b("index")} {\n         let coords = getOutputCoords();\n         let batch = coords[0];\n         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}\n         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}\n         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}\n         var acc : f32 = 0.0;\n         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {\n           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {\n             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];\n             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];\n             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {\n               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}\n               let f = readFilt(row, col, xChannel, outChannel);\n               acc = acc + v * f;\n             }\n           }\n         }\n         writeResult(batch, outRow, outCol, outChannel, acc);\n       }\n     `}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Yr{constructor(t,e){this.variableNames=["x"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,\n       inChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=e,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,n=this.isChannelsLast?"coords[1]":"coords[2]",r=this.isChannelsLast?"coords[2]":"coords[1]",i=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`\n    ${b("index")} {\n      let coords = getCoordsFromIndex(index);\n      if(index < uniforms.size) {\n        let batch = coords[0];\n        let row = ${n};\n        let col = ${r};\n        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];\n        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);\n        var value = 0.0;\n        if(xRow < uniforms.xShape[${t}] && xRow >= 0) {\n          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -\n              uniforms.pads[1];\n          let xCol = offsetX + uniforms.dilations[1] * ((col %\n              uniforms.itemsPerBlockRow) / uniforms.inChannels);\n          let ch = col % uniforms.inChannels;\n          if(xCol < uniforms.xShape[${e}] && xCol >= 0) {\n            value = ${i};\n          }\n        }\n        setOutputAtIndex(index, value);\n      }\n    }\n   `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qr(t,e){const n=t.length;return n>=3?e?[...t.slice(0,-3),t[n-3]*t[n-2],t[n-1]]:[...t.slice(0,-3),t[n-3],t[n-2]*t[n-1]]:!e&&1===n&&t[0]>1?[t[0],1]:null}function $r({x:t,filter:e,convInfo:n,backend:r,bias:o=null,preluActivationWeights:a=null,leakyreluAlpha:s=0,activation:u=null}){const l=null!=o,c=null!=a,h="channelsLast"===n.dataFormat,d=h&&n.filterHeight===n.inHeight&&n.filterWidth===n.inWidth&&"VALID"===n.padInfo.type,f=(0,i.env)().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!f&&(d||1===n.filterHeight&&1===n.filterWidth&&1===n.dilationHeight&&1===n.dilationWidth&&1===n.strideHeight&&1===n.strideWidth&&("SAME"===n.padInfo.type||"VALID"===n.padInfo.type)))return function({x:t,filter:e,convInfo:n,backend:r,bias:i=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){const u="channelsLast"===n.dataFormat,l=!u,c=[];let h,d;if(u&&n.filterHeight===n.inHeight&&n.filterWidth===n.inWidth&&"VALID"===n.padInfo.type){const i=n.inHeight*n.inWidth*n.inChannels;h=Me({inputs:{x:t},backend:r,attrs:{shape:[1,n.batchSize,i]}}),d=Me({inputs:{x:e},backend:r,attrs:{shape:[1,i,n.outChannels]}})}else h=Me({inputs:{x:t},backend:r,attrs:{shape:u?[n.batchSize,n.inHeight*n.inWidth,n.inChannels]:[n.batchSize,n.inChannels,n.inHeight*n.inWidth]}}),d=Me({inputs:{x:e},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});if(c.push(h),c.push(d),null!=o){const t=qr(o.shape,u);null!=t&&(o=Me({inputs:{x:o},backend:r,attrs:{shape:t}}),c.push(o))}if(null!=i){const t=qr(i.shape,u);null!=t&&(i=Me({inputs:{x:i},backend:r,attrs:{shape:t}}),c.push(i))}const f=Te({a:u?h:d,b:u?d:h,transposeA:l,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:o,leakyreluAlpha:a}),p=Me({inputs:{x:f},backend:r,attrs:{shape:n.outShape}});c.push(f);for(const t of c)r.disposeData(t.dataId);return p}({x:t,filter:e,convInfo:n,backend:r,bias:o,activation:u,preluActivationWeights:a,leakyreluAlpha:s});const p=(0,i.env)().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),m=p>-1?p:r.thresholdToIncreaseWorkgroups,g=n.batchSize*Math.ceil(n.outHeight*n.outWidth/32)*Math.ceil(n.outChannels/32);if((0,i.env)().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||g<=m)return function({x:t,filter:e,convInfo:n,backend:r,bias:i=null,preluActivationWeights:o=null,leakyreluAlpha:a=0,activation:s=null}){const{filterWidth:u,filterHeight:l,inChannels:c,strideWidth:h,strideHeight:d,padInfo:f,outWidth:p,outHeight:m,dilationWidth:g,dilationHeight:v,dataFormat:y}=n,b="channelsLast"===y,x=u*l*c,w=m*p,_=b?[n.batchSize,w,x]:[n.batchSize,x,w],S=new Yr(_,b),E=[{type:"int32",data:[f.top,f.left]},{type:"int32",data:[d,h]},{type:"int32",data:[v,g]},{type:"int32",data:[p]},{type:"int32",data:[c*u]},{type:"int32",data:[c]}],A=r.runWebGPUProgram(S,[t],t.dtype,E),M=[];M.push(A);const C=Me({inputs:{x:e},backend:r,attrs:{shape:[1,x,-1]}});if(M.push(C),null!=o){const t=qr(o.shape,b);null!=t&&(o=Me({inputs:{x:o},backend:r,attrs:{shape:t}}),M.push(o))}if(null!=i){const t=qr(i.shape,b);null!=t&&(i=Me({inputs:{x:i},backend:r,attrs:{shape:t}}),M.push(i))}const T=Te({a:b?A:C,b:b?C:A,transposeA:!b,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:o,leakyreluAlpha:a}),k=Me({inputs:{x:T},backend:r,attrs:{shape:n.outShape}});M.push(T);for(const t of M)r.disposeData(t.dataId);return k}({x:t,filter:e,convInfo:n,backend:r,bias:o,preluActivationWeights:a,leakyreluAlpha:s,activation:u});let v;const y=[n.padInfo.top,n.padInfo.left],b=[{type:"int32",data:[n.filterHeight,n.filterWidth]},{type:"int32",data:[...y]},{type:"int32",data:[n.strideHeight,n.strideWidth]},{type:"int32",data:[n.dilationHeight,n.dilationWidth]}];if(f)v=new Xr(n,l,u,c);else{const t=h?n.outHeight*n.outWidth:n.outChannels,e=h?n.outChannels:n.outHeight*n.outWidth,i=n.filterHeight*n.filterWidth*n.inChannels;b.push({type:"int32",data:[t]},{type:"int32",data:[e]},{type:"int32",data:[i]});const o=r.adapterInfo.isIntel();v=new Wr(n,t,e,i,l,u,c,o)}const x=[],w=[t,e];l&&(h||1!==o.shape.length||(o=Me({inputs:{x:o},backend:r,attrs:{shape:[o.shape[0],1,1]}}),x.push(o)),w.push(o)),c&&(h||1!==a.shape.length||(a=Me({inputs:{x:a},backend:r,attrs:{shape:[a.shape[0],1,1]}}),x.push(a)),w.push(a)),"leakyrelu"===u&&(b.push({type:"float32",data:[s]}),v.uniforms+=" alpha : f32,");const _=r.runWebGPUProgram(v,w,t.dtype,b);for(const t of x)r.disposeData(t.dataId);return _}const Kr={kernelName:i.Conv2D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,attrs:n,backend:r}=t,{x:o,filter:a}=e,{strides:s,pad:u,dataFormat:l,dilations:c,dimRoundingMode:h}=n,d=i.backend_util.convertConv2DDataFormat(l);return $r({x:o,filter:a,convInfo:i.backend_util.computeConv2DInfo(o.shape,a.shape,s,c,u,h,!1,d),backend:r})}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Zr{constructor(t){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=t.inShape,this.isChannelsLast="channelsLast"===t.dataFormat,this.isVec4=this.isChannelsLast&&t.outChannels%4==0&&t.inChannels%4==0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,n=this.isChannelsLast?3:1,r=`\n    ${b()} {\n      let batch = i32(globalId.z) / uniforms.outShape[1];\n      let r = i32(globalId.z) % uniforms.outShape[1];\n      let c = i32(globalId.y) * ${this.workPerThread};\n      let d1 = i32(globalId.x) * 4;\n\n      let dyCorner = vec2<i32>(r, c) - uniforms.pads;\n\n      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n      // ? = to be determined. : = across all values in that axis.\n      var dotProd: array<vec4<f32>, ${this.workPerThread}>;\n      for (var i = 0; i < ${this.workPerThread}; i++) {\n        dotProd[i] = vec4<f32>(0.0);\n      }\n      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);\n        let wRPerm = uniforms.filterDims.x - 1 - wR;\n        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||\n            fract(dyR) > 0.0) {\n          continue;\n        }\n        let idyR = i32(dyR);\n\n        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);\n          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);\n          let wCPerm = uniforms.filterDims.y - 1 - wC;\n          var bDyCVal = true;\n          var bDyCVal2 = true;\n          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC) > 0.0) {\n            bDyCVal = false;\n          }\n          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||\n              fract(dyC2) > 0.0) {\n            bDyCVal2 = false;\n          }\n\n          let idyC = i32(dyC);\n          let idyC2 = i32(dyC2);\n          if (bDyCVal && bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n              xValue = getDy(batch, idyR, idyC2, d2);\n              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),\n                                                  dot(xValue, wValue1),\n                                                  dot(xValue, wValue2),\n                                                  dot(xValue, wValue3));\n            }\n          } else if (bDyCVal) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[0] = dotProd[0] + tmpval;\n            }\n          } else if (bDyCVal2) {\n            let d2Length = uniforms.outBackprop[3];\n            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {\n              let wValue0 = getW(wRPerm, wCPerm, d1, d2);\n              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);\n              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);\n              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);\n              var xValue =  getDy(batch, idyR, idyC2, d2);\n              let tmpval = vec4<f32>(dot(xValue, wValue0),\n                                     dot(xValue, wValue1),\n                                     dot(xValue, wValue2),\n                                     dot(xValue, wValue3));\n              dotProd[1] = dotProd[1] + tmpval;\n            }\n          }\n        }\n      }\n\n      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n        let coords = vec4<i32>(batch, r, c + i, d1);\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);\n        }\n      }\n    }\n    `;return this.isVec4?`\n    ${r}\n    `:`\n    ${b("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[${n}];\n\n        let dyCorner = vec2<i32>(coords[${t}], coords[${e}]) - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);\n          let wRPerm = uniforms.filterDims.x - 1 - wR;\n          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||\n              wRPerm < 0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);\n            let wCPerm = uniforms.filterDims.y - 1 - wC;\n            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n                fract(dyC) > 0.0 || wCPerm < 0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {\n              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};\n              let wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd = dotProd + xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class Qr{constructor(t){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===t.dataFormat,this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`\n    ${b("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let d2 = coords[3];\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b = b + 1) {\n          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              if (${this.isChannelsLast}) {\n                let dyValue = getDy(b, yR, yC, d2);\n                let xValue = getX(b, xR, xC, d1);\n                dotProd = dotProd + xValue * dyValue;\n              } else {\n                let dyValue = getDy(b, d2, yR, yC);\n                let xValue = getX(b, d1, xR, xC);\n                dotProd = dotProd + xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class Jr{constructor(t){this.variableNames=["x","dy"],this.uniforms="pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,\n       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`\n    ${b("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wF = coords.x;\n        let wR = coords.y;\n        let wC = coords.z;\n        let d1 = coords.w;\n        let d2 = coords.u;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yF = 0; yF < uniforms.outDepth; yF++) {\n            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];\n            if (xF < 0 || xF >= uniforms.inDepth) {\n              continue;\n            }\n\n            for (var yR = 0; yR < uniforms.outHeight; yR++) {\n              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];\n              if (xR < 0 || xR >= uniforms.inHeight) {\n                continue;\n              }\n\n              for (var yC = 0; yC < uniforms.outWidth; yC++) {\n                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];\n                if (xC < 0 || xC >= uniforms.inWidth) {\n                  continue;\n                }\n\n                let dyValue = getDy(b, yF, yR, yC, d2);\n                let xValue = getX(b, xF, xR, xC, d1);\n                dotProd += xValue * dyValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}class ti{constructor(t){this.variableNames=["dy","W"],this.uniforms="filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`\n    ${b("index")} {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let d1 = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyFCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);\n          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {\n            continue;\n          }\n          let idyF = i32(dyF);\n\n          let wFPerm = uniforms.filterDims[0] - 1 - wF;\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            let wRPerm = uniforms.filterDims[1] - 1 - wR;\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let wCPerm = uniforms.filterDims[2] - 1 - wC;\n\n              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {\n                let xValue = getDy(batch, idyF, idyR, idyC, d2);\n                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  `}}const ei={kernelName:i.Conv2DBackpropFilter,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,dy:a}=e,{strides:s,pad:u,dataFormat:l,dimRoundingMode:c,filterShape:h}=r,d=i.backend_util.convertConv2DDataFormat(l),f=i.backend_util.computeConv2DInfo(o.shape,h,s,1,u,c,!1,d),p=new Qr(f),m=[{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.batchSize]},{type:"int32",data:[f.outHeight]},{type:"int32",data:[f.outWidth]},{type:"int32",data:[f.inHeight]},{type:"int32",data:[f.inWidth]}];return n.runWebGPUProgram(p,[o,a],o.dtype,m)}};class ni{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.inShape,i.util.assert("channelsLast"===t.dataFormat,(()=>"TODO: NCHW is unimplemented")),this.isVec4=t.inChannels%4==0&&t.outChannels%4==0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=P(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=O(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const t=this.isVec4?me(this.elementsPerThread,this.workgroupSize):ve(this.elementsPerThread,this.workgroupSize);return`\n    ${
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t=4){const e=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n        \n      let outRow = row / uniforms.outShape[2];\n      let outCol = row % uniforms.outShape[2];\n\n      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];\n      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);\n      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);\n      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {\n        return ${g(t)}(0.0);\n      }\n      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {\n        return ${g(t)}(0.0);\n      }\n      let coord = vec4<i32>(\n          batch,\n          i32(xR),\n          i32(xC),\n          col % uniforms.outBackprop[3]);\n      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${t}];\n      }\n      return ${g(t)}(0.0);`;return`\n  fn mm_readA(batch: i32, row : i32, col : i32) -> ${g(t)} {\n    ${e}\n  }\n\n  fn mm_readB(batch: i32, row : i32, col : i32) -> ${g(t)} {\n    let coordX = uniforms.filterDims.x - 1 -\n        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n    let coordY = uniforms.filterDims.y - 1 -\n        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];\n    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&\n        coordX >= 0 && coordY >= 0) {\n      let rowInner = row % uniforms.outBackprop[3];\n      let coord = vec4<i32>(coordX, coordY, col, rowInner);\n      ${(t=>{switch(t){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return"\n            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);\n            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);\n            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);\n            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];\n            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];\n            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];\n            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];\n            return vec4<f32>(v0, v1, v2, v3);\n            ";default:throw new Error(`innerElementSize ${t} is not supported.`)}})(t)}\n    }\n    return ${g(t)}(0.0);\n  }\n\n  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${g(t)}) {\n    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {\n      var value = valueInput;\n      let outCoord = vec4<i32>(\n          batch,\n          row / uniforms.outShape[2],\n          row % uniforms.outShape[2],\n          col);\n      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${t}] = value;\n    }\n  }`}(this.isVec4?4:1)}\n    ${t}\n    `}}const ri={kernelName:i.Conv2DBackpropInput,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,filter:a}=e,{inputShape:s,strides:u,pad:l,dataFormat:c,dimRoundingMode:h}=r,d=i.backend_util.convertConv2DDataFormat(c),f=i.backend_util.computeConv2DInfo(s,a.shape,u,1,l,h,!1,d),p=[{type:"int32",data:[f.filterHeight,f.filterWidth]},{type:"int32",data:[f.filterHeight-1-f.padInfo.top,f.filterWidth-1-f.padInfo.left]},{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.batchSize,f.outHeight,f.outWidth,f.outChannels]}];let m;if((0,i.env)().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||"channelsLast"!==f.dataFormat)m=new Zr(f);else{m=new ni(f);const t=f.inHeight*f.inWidth,e=f.inChannels,n=f.filterHeight*f.filterWidth*f.outChannels;p.push({type:"uint32",data:[t]},{type:"uint32",data:[e]},{type:"uint32",data:[n]})}return n.runWebGPUProgram(m,[o,a],"float32",p)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ii{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords.x;\n        let d2 = coords.u;\n\n        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;\n        let xFCorner = xFRCCorner.x;\n        let xRCorner = xFRCCorner.y;\n        let xCCorner = xFRCCorner.z;\n\n        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;\n        let inputDepthVec4Remainder = uniforms.xShape.u % 4;\n\n        var dotProd = 0.0;\n        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {\n          let xF = xFCorner + wF * uniforms.dilations[0];\n          if (xF < 0 || xF >= uniforms.xShape.y) {\n            continue;\n          }\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let xR = xRCorner + wR * uniforms.dilations[1];\n            if (xR < 0 || xR >= uniforms.xShape.z) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let xC = xCCorner + wC * uniforms.dilations[2];\n              if (xC < 0 || xC >= uniforms.xShape.w) {\n                continue;\n              }\n\n              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {\n                let xValues = vec4<f32>(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                let wValues = vec4<f32>(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (inputDepthVec4Remainder == 1) {\n                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2);\n              } else if (inputDepthVec4Remainder == 2) {\n                let xValues = vec2<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)\n                );\n                let wValues = vec2<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (inputDepthVec4Remainder == 3) {\n                let xValues = vec3<f32>(\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),\n                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)\n                );\n                let wValues = vec3<f32>(\n                  getW(wF, wR, wC, inputDepthNearestVec4, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),\n                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }`}}const oi={kernelName:i.Conv3D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a}=e,{strides:s,pad:u,dilations:l}=r,c=i.backend_util.computeConv3DInfo(o.shape,a.shape,s,l,u),h=[c.padInfo.front,c.padInfo.top,c.padInfo.left],d=[{type:"int32",data:[c.filterDepth,c.filterHeight,c.filterWidth]},{type:"int32",data:[...h]},{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.dilationDepth,c.dilationHeight,c.dilationWidth]}],f=new ii(c),p=(0,i.upcastType)(o.dtype,a.dtype);return n.runWebGPUProgram(f,[o,a],p,d)}};const ai={kernelName:i.Conv3DBackpropFilterV2,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,dy:a}=e,{strides:s,pad:u,filterShape:l}=r,c=i.backend_util.computeConv3DInfo(o.shape,l,s,1,u),h=new Jr(c),d=[{type:"int32",data:[c.padInfo.front,c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.batchSize]},{type:"int32",data:[c.outDepth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.inDepth]},{type:"int32",data:[c.inHeight]},{type:"int32",data:[c.inWidth]}];return n.runWebGPUProgram(h,[o,a],a.dtype,d)}};const si={kernelName:i.Conv3DBackpropInputV2,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,filter:a}=e,{strides:s,pad:u,inputShape:l}=r,c=i.backend_util.computeConv3DInfo(l,a.shape,s,1,u),h=new ti(c),d=[{type:"int32",data:[c.filterDepth,c.filterHeight,c.filterWidth]},{type:"int32",data:[c.filterDepth-1-c.padInfo.front,c.filterHeight-1-c.padInfo.top,c.filterWidth-1-c.padInfo.left]},{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.outDepth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.outChannels]}];return n.runWebGPUProgram(h,[o,a],o.dtype,d)}},ui=ze({opType:yt.COS}),li={kernelName:i.Cos,backendName:"webgpu",kernelFunc:ui},ci=ze({opType:yt.COSH}),hi={kernelName:i.Cosh,backendName:"webgpu",kernelFunc:ci};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class di{constructor(t,e,n,r){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[i]=e;this.outputShape=[i,n[0],n[1],t],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId="bilinear"===r?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[t,e]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[n,r,i]=this.cropHeightBiggerThan1?[`(${t} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${t} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${t}`],[o,a,s]=this.cropWidthBiggerThan1?[`(${e} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${e} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${e}`];return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let height_ratio = f32(${n});\n        let width_ratio = f32(${o});\n        let b = coords[0];\n        let y = coords[1];\n        let x = coords[2];\n        let d = coords[3];\n        // get box vals\n        let y1 = getBoxes(b, 0);\n        let x1 = getBoxes(b, 1);\n        let y2 = getBoxes(b, 2);\n        let x2 = getBoxes(b, 3);\n        // get image in batch index\n        let bInd = i32(round(getBoxInd(b)));\n        if(bInd < 0 || bInd >= uniforms.outShape[0]) {\n          return;\n        }\n        let height_scale = ${r};\n        let width_scale = ${a};\n        let in_y = ${i};\n        if( in_y < 0.0 || in_y > ${t} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let in_x = ${s};\n        if( in_x < 0.0 || in_x > ${e} ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let sourceFracIndexCR = vec2<f32>(in_x,in_y);\n        if(${this.methodId} == 1) {\n          // Compute the four integer indices.\n          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);\n          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));\n          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);\n          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);\n          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);\n          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);\n          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);\n          let top = topLeft + (topRight - topLeft) * fracCR.x;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          let newValue = top + (bottom - top) * fracCR.y;\n          setOutputAtIndex(index, newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          let sourceNearestCR = vec2<i32>(floor(\n            sourceFracIndexCR + vec2<f32>(0.5,0.5)));\n          let newValue = getImage(\n            bInd, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fi={kernelName:i.CropAndResize,backendName:"webgpu",kernelFunc:t=>{const{inputs:e,backend:n,attrs:r}=t,{image:i,boxes:o,boxInd:a}=e,{cropSize:s,method:u,extrapolationValue:l}=r,c=new di(i.shape[3],o.shape,s,u),h=[{type:"float32",data:[l]}];return n.runWebGPUProgram(c,[i,o,a],"float32",h)}};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var pi;!function(t){t.Prod="*",t.Sum="+"}(pi||(pi={}));class mi{constructor(t,e,n,r){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=e,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=n,this.reverse=r,this.op=t,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const t=this.outputShape.length,e=this.op===pi.Prod?"1.0":"0.0",n=this.exclusive?e:`getX(${gi(t,"coords",this.op)})`,r=this.outputShape[this.outputShape.length-1];let i="",o="";return this.exclusive?(i=this.reverse?"end != "+(r-1):"end != 0",o=this.reverse?"end + 1":"end - 1"):(i=this.reverse?`end + pow2 < ${r}`:"end >= pow2",o=this.reverse?"end + pow2":"end - pow2"),`\n      ${b("index")} {\n       if (index < uniforms.size) {\n         var coords = getCoordsFromIndex(index);\n\n         let end = ${vi(t,"coords",this.op)};\n         var val = ${n};\n         let pow2 = i32(pow(2.0, uniforms.index));\n         if (${i}) {\n           let idx = ${o};\n           ${vi(t,"coords",this.op)} = idx;\n           val ${this.op}= getX(${gi(t,"coords",this.op)});\n         }\n         setOutputAtIndex(index, val);\n       }\n      }\n    `}}function gi(t,e,n){if(1===t)return`${e}`;if(2===t)return`${e}.x, ${e}.y`;if(3===t)return`${e}.x, ${e}.y, ${e}.z`;if(4===t)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw Error(`Cumulative ${n} for rank ${t} is not yet supported`)}function vi(t,e,n){if(1===t)return`${e}`;if(2===t)return`${e}.y`;if(3===t)return`${e}.z`;if(4===t)return`${e}.w`;throw Error(`Cumulative ${n} for rank ${t} is not yet supported`)}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yi(t,e,n,r,o,a){const s=e.shape.length,u=i.backend_util.getAxesPermutation([r],s);let l=e;null!=u&&(l=Rn({inputs:{x:e},backend:n,attrs:{perm:u}}));const c=i.backend_util.getInnerMostAxes(1,s)[0];if(c!==s-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${r}`);const h=l.shape[c];let d=Pe({inputs:{x:l},backend:n});for(let e=0;e<=Math.ceil(Math.log2(h))-1;e++){const r=new mi(t,l.shape,!1,a),i=d,o=[{type:"float32",data:[e]}];d=n.runWebGPUProgram(r,[d],d.dtype,o),n.disposeData(i.dataId)}if(o){const e=new mi(t,l.shape,o,a),r=d,i=[{type:"float32",data:[0]}];d=n.runWebGPUProgram(e,[d],d.dtype,i),n.disposeData(r.dataId)}if(null!=u){const t=Rn({inputs:{x:d},backend:n,attrs:{perm:i.backend_util.getUndoAxesPermutation(u)}});return n.disposeData(d.dataId),n.disposeData(l.dataId),t}return d}const bi={kernelName:i.Cumprod,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{axis:o,exclusive:a,reverse:s}=r;return yi(pi.Prod,i,n,o,a,s)}};const xi={kernelName:i.Cumsum,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{axis:o,exclusive:a,reverse:s}=r;return yi(pi.Sum,i,n,o,a,s)}};const wi={kernelName:i.DenseBincount,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,weights:a}=e,{size:s,binaryOutput:u}=r,l=1===o.shape.length,c=i.util.sizeFromShape(a.shape)>0,h=a.dtype,d=l?[o.shape[0]]:[o.shape[0],o.shape[1]],f=Ee({backend:n,attrs:{shape:l?[s]:[o.shape[0],s],value:0,dtype:h}}),p=new _r(d,c,u),m=[{type:"int32",data:[s]}],g=c?[o,a]:[o];return n.runWebGPUProgram(p,g,h,m,f)}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class _i{constructor(t,e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${e}`,this.dataFormat=e}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let h = ${this.getHeightCoordString()};\n          let w = ${this.getWidthCoordString()};\n          let d = ${this.getDepthCoordString()};\n\n          let in_h = h / uniforms.blockSize;\n          let offset_h = h % uniforms.blockSize;\n          let in_w = w / uniforms.blockSize;\n          let offset_w = w % uniforms.blockSize;\n          let offset_d = (offset_h * uniforms.blockSize + offset_w) *\n            ${this.getOutputDepthSize()};\n          let in_d = d + offset_d;\n\n          let rlt = ${this.getInputSamplingString()};\n          setOutputAtIndex(index, rlt);\n        }\n      }`}getHeightCoordString(){return"NHWC"===this.dataFormat?"coords[1]":"coords[2]"}getWidthCoordString(){return"NHWC"===this.dataFormat?"coords[2]":"coords[3]"}getDepthCoordString(){return"NHWC"===this.dataFormat?"coords[3]":"coords[1]"}getOutputDepthSize(){return"NHWC"===this.dataFormat?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return"NHWC"===this.dataFormat?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}const Si={kernelName:i.DepthToSpace,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{blockSize:o,dataFormat:a}=r,s=i.shape[0],u=("NHWC"===a?i.shape[1]:i.shape[2])*o,l=("NHWC"===a?i.shape[2]:i.shape[3])*o,c=("NHWC"===a?i.shape[3]:i.shape[1])/(o*o),h=[{type:"int32",data:[o]}],d=new _i("NHWC"===a?[s,u,l,c]:[s,c,u,l],a);return n.runWebGPUProgram(d,[i],i.dtype,h)}};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ei{constructor(t,e,n,r=!1,i=null,o=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=t,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),r&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.addBias=r,this.activation=i,this.hasPreluActivation=o,this.filterHeight=e,this.filterWidth=n,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const t=this.filterWidth*this.filterHeight,e=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],n=this.workgroupSize[1]+this.filterHeight-1,r=this.workgroupSize[0]+this.filterWidth-1;return`\n      ${he(this.activation,this.hasPreluActivation,!1,4)}\n\n      var<workgroup> mm_Asub : array<array<f32, ${r}>, ${n}>;\n      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;\n      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {\n        var value = 0.0;\n        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])\n        {\n          value = getX(batch, channel, row, col);\n        }\n        return value;\n      }\n\n      ${b()} {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;\n        let channelMul = uniforms.wShape[3];\n        let d1 = coords[1] / channelMul;\n        let q = coords[1] % channelMul;\n\n        let inputRowStart = xRCCorner.x;\n        let inputColStart = xRCCorner.y;\n\n        let localRow = i32(localId.y);\n        let localCol = i32(localId.x);\n\n        // Load one tile of X into local memory.\n        for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${this.workgroupSize[1]}) {\n          for (var inputCol = localCol; inputCol < ${r}; inputCol = inputCol + ${this.workgroupSize[0]}) {\n            let rowOffset = inputRow - localRow;\n            let colOffset = inputCol - localCol;\n            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);\n          }\n        }\n\n        // Load one tile of W into local memory.\n        var wIndex = i32(localIndex);\n        ${t<e?`if (wIndex < ${t})`:`for(; wIndex < ${t}; wIndex = wIndex + ${e})`}\n\n        {\n          let wRow = wIndex / ${this.filterWidth};\n          let wCol = wIndex % ${this.filterWidth};\n          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);\n        }\n\n        workgroupBarrier();\n\n        var value = 0.0;\n        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {\n          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {\n            let xVal = mm_Asub[localRow + wR][localCol + wC];\n            let wVal = mm_Bsub[wR][wC];\n            value = fma(xVal, wVal, value);\n          }\n        }\n        ${de(this.addBias,this.activation)}\n        if (coordsInBounds4D(coords, uniforms.outShape)) {\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ai{constructor(t,e=!1,n=null,r=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=t.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const o=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=L(o),this.dispatch=I(this.dispatchLayout,o,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),i.util.assert("channelsLast"===t.dataFormat,(()=>"TODO: NCHW is unimplemented")),e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=n,this.hasPreluActivation=r,this.shaderKey=`depthwiseVec4_${n}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const t=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,e=this.convInfo.strideHeight,n=this.convInfo.strideWidth;return`\n      ${he(this.activation,this.hasPreluActivation,!0,4)}\n      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {\n        var value = vec4<f32>(0.0);\n        if (col >=0 && col < uniforms.inDims[1]) {\n          value = getX(batch, row, col, channel);\n        }\n        return value;\n      }\n\n      ${b("index")} {\n        let width0 = uniforms.outShape[3] / ${this.outputComponent};\n        let d1 = (index % width0) * ${this.outputComponent};\n        var index1 = index / width0;\n        let width1 = uniforms.virtualWidth / ${this.workPerThread};\n        let c = (index1 % width1) * ${this.workPerThread};\n        index1 = index1 / width1;\n        let r = index1 % uniforms.outShape[1];\n        let batch = index1 / uniforms.outShape[1];\n\n        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${e}, ${n}) - uniforms.pads;\n\n        let xRCorner = xRCCorner.x;\n        let xCCorner = xRCCorner.y;\n        var xVals : array<vec4<f32>, ${t}>;\n        var dotProd : array<vec4<f32>, ${this.workPerThread}>;\n        for (var i = 0; i < ${this.workPerThread}; i++) {\n          dotProd[i] = vec4<f32>(0.0);\n        }\n\n        // Use constant instead of uniform can give better performance.\n        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {\n          let xR = xRCorner + wR;\n          if (xR >=0 && xR < uniforms.inDims[0]) {\n            for (var i = 0; i < ${t}; i++) {\n              xVals[i] = readX(batch, xR, xCCorner + i, d1);\n            }\n            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {\n              let wValue = getW(wR, wC, d1, 0);\n              for (var i = 0; i < ${this.workPerThread}; i++) {\n                dotProd[i] = fma(xVals[i * ${n} + wC], wValue, dotProd[i]);\n              }\n            }\n          }\n        }\n\n        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {\n          let coords = vec4<i32>(batch, r, c + i, d1);\n          if (coordsInBounds4D(coords, uniforms.outShape)) {\n            var value = dotProd[i];\n            ${de(this.addBias,this.activation)}\n            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n          }\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Mi{constructor(t,e=!1,n=null,r=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,\n      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast="channelsLast"===t.dataFormat,e&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=n,this.hasPreluActivation=r,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`\n      ${he(this.activation,this.hasPreluActivation,!1,4)}\n\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let batch = coords[0];\n          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;\n          let d2 = coords[${this.isChannelsLast?3:1}];\n          let channelMul = uniforms.wShape[3];\n          let d1 = d2 / channelMul;\n          let q = d2 % channelMul;\n\n          let inputRowStart = xRCCorner.x;\n          let inputColStart = xRCCorner.y;\n          let inputRowEnd = inputRowStart + uniforms.filterHeight *\n              uniforms.dilations[0];\n          let inputColEnd = inputColStart + uniforms.filterWidth *\n              uniforms.dilations[1];\n\n          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get\n          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all\n          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.\n          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.\n          var value = 0.0;\n\n          // Extract if checking out of for loop for performance.\n          if (inputRowStart >= 0 && inputColStart >= 0 &&\n            inputRowEnd < uniforms.inDims[0] &&\n                inputColEnd < uniforms.inDims[1]) {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  let xVal = ${t};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            } else {\n              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n                let xR = inputRowStart + wR * uniforms.dilations[0];\n\n                if (xR < 0 || xR >= uniforms.inDims[0]) {\n                  continue;\n                }\n\n                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                  let xC = inputColStart + wC * uniforms.dilations[1];\n\n                  if (xC < 0 || xC >= uniforms.inDims[1]) {\n                    continue;\n                  }\n\n                  let xVal = ${t};\n                  let wVal = getW(wR, wC, d1, q);\n                  value = value + xVal * wVal;\n                }\n              }\n            }\n            ${de(this.addBias,this.activation)}\n          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);\n        }\n      }\n    `}}const Ci={kernelName:i.DepthwiseConv2dNative,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a}=e,{strides:s,pad:u,dataFormat:l,dilations:c,dimRoundingMode:h}=r,d=i.backend_util.convertConv2DDataFormat(l);let f=c;null==f&&(f=[1,1]);const p=i.backend_util.computeConv2DInfo(o.shape,a.shape,s,f,u,h,!0,d),m=[{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.inHeight,p.inWidth]}],g="channelsLast"===p.dataFormat;let v;return!g&&p.inHeight>16&&p.inWidth>16&&1===p.strideHeight&&1===p.strideWidth&&1===p.dilationWidth&&1===p.dilationHeight&&p.inChannels===p.outChannels?v=new Ei(p.outShape,p.filterHeight,p.filterWidth):g&&p.outHeight>4&&p.outWidth>4&&p.strideWidth<=2&&p.inChannels===p.outChannels&&1===p.dilationHeight&&1===p.dilationWidth&&p.inChannels%4==0?(v=new Ai(p),m.push({type:"int32",data:[v.virtualWidth]})):(v=new Mi(p),m.push({type:"int32",data:[p.filterHeight]},{type:"int32",data:[p.filterWidth]},{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]})),n.runWebGPUProgram(v,[o,a],o.dtype,m)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ti{constructor(t){this.variableNames=["x","dy"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,\n      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let wR = coords[0];\n        let wC = coords[1];\n        let d1 = coords[2];\n        let dm = coords[3];\n        let d2 = d1 * uniforms.channelMul + dm;\n\n        var dotProd = 0.0;\n        for (var b = 0; b < uniforms.batchSize; b++) {\n          for (var yR = 0; yR < uniforms.outHeight; yR++) {\n            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];\n\n            if (xR < 0 || xR >= uniforms.inHeight) {\n              continue;\n            }\n\n            for (var yC = 0; yC < uniforms.outWidth; yC++) {\n              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];\n\n              if (xC < 0 || xC >= uniforms.inWidth) {\n                continue;\n              }\n\n              let dyValue = getDy(b, yR, yC, d2);\n              let xValue = getX(b, xR, xC, d1);\n              dotProd += xValue * dyValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}class ki{constructor(t){this.variableNames=["dy","W"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32, channelMul : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[3];\n        let dyCorner = coords.yz - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n\n          let idyR = i32(dyR);\n          let wRPerm = uniforms.filterDims[0] - 1 - wR;\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n\n            let idyC = i32(dyC);\n            let wCPerm = uniforms.filterDims[1] - 1 - wC;\n\n            for (var dm = 0; dm < uniforms.channelMul; dm++) {\n              let d2 = d1 * uniforms.channelMul + dm;\n              let xValue = getDy(batch, idyR, idyC, d2);\n              let wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}const Ii={kernelName:i.DepthwiseConv2dNativeBackpropFilter,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,dy:a}=e,{strides:s,dilations:u,pad:l,dimRoundingMode:c,filterShape:h}=r,d=i.backend_util.computeConv2DInfo(o.shape,h,s,u,l,c,!0),f=new Ti(d),p=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.inHeight]},{type:"int32",data:[d.inWidth]},{type:"int32",data:[d.batchSize]},{type:"int32",data:[d.outChannels/d.inChannels]}];return n.runWebGPUProgram(f,[o,a],"float32",p)}};const Ni={kernelName:i.DepthwiseConv2dNativeBackpropInput,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,filter:a}=e,{strides:s,dilations:u,pad:l,dimRoundingMode:c,inputShape:h}=r,d=i.backend_util.computeConv2DInfo(h,a.shape,s,u,l,c,!0),f=new ki(d),p=[{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.filterHeight-1-d.padInfo.top,d.filterWidth-1-d.padInfo.left]},{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.outChannels/d.inChannels]}];return n.runWebGPUProgram(f,[o,a],o.dtype,p)}};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Pi{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,t],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);\n          setOutputAtIndex(index, value);\n        }\n      }\n    `}}const Oi={kernelName:i.Diag,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{x:r}=e,o=[...r.shape,...r.shape],a=i.util.sizeFromShape(r.shape),s=Me({inputs:{x:r},backend:n,attrs:{shape:[a]}}),u=new Pi(a),l=n.runWebGPUProgram(u,[s],s.dtype),c=Me({inputs:{x:l},backend:n,attrs:{shape:o}});return n.disposeData(s.dataId),n.disposeData(l.dataId),c}};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Li{constructor(t){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`\n       ${b("index")} {\n         if (index < uniforms.size) {\n           let neg_infinity = -3.4e38;\n           let coords = getOutputCoords();\n           let batch = coords.x;\n           let d1 = coords.w;\n           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;\n           let hBeg = outTopLeftCorner.x;\n           let wBeg = outTopLeftCorner.y;\n\n           var curVal = neg_infinity;\n           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {\n             let hIn = hBeg + h * uniforms.dilations[0];\n\n             if (hIn >= 0 && hIn < uniforms.xShape[1]) {\n               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {\n                 let wIn = wBeg + w * uniforms.dilations[1];\n\n                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {\n                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);\n                   if (val > curVal) {\n                     curVal = val;\n                   }\n                 }\n               }\n             }\n           }\n\n           setOutputAtIndex(index, curVal);\n         }\n       }\n     `}}const Ri={kernelName:i.Dilation2D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a}=e,{strides:s,pad:u,dilations:l}=r,c=i.backend_util.computeDilation2DInfo(o.shape,a.shape,s,u,"NHWC",l),h=[c.padInfo.top,c.padInfo.left],d=[{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[...h]},{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.dilationHeight,c.dilationWidth]}],f=new Li(c);return n.runWebGPUProgram(f,[o,a],o.dtype,d)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Di{constructor(t,e){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.inShape,this.dispatchLayout=L(t.outShape),this.dispatch=I(this.dispatchLayout,t.outShape,this.workgroupSize),"float32"!==e&&"int32"!==e)throw new Error(`Dilation2DBackpropInput only supports float32 and int32\n          types, does not support ${e} type.`);this.type=e,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`\n       ${b("index")} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var xRMax = 0;\n           var xCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     xRMax = xR;\n                     xCMax = xC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.xShape[3] *\n               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));\n           let value = getDy(b, r, c, d);\n           ${f("&result[flatIndexIn]","value",this.type)}\n         }\n       }\n     `}}class zi{constructor(t,e,n){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.filterShape,this.dispatchLayout=L(t.outShape),this.dispatch=I(this.dispatchLayout,t.outShape,this.workgroupSize),"float32"!==n&&"int32"!==n)throw new Error(`Dilation2DBackpropFilter only supports float32 and int32\n          types, does not support ${n} type.`);this.type=n,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`\n       ${b("index")} {\n         if (index < uniforms.dySize) {\n           let coords = getDyCoordsFromIndex(index);\n           let b = coords[0];\n           let r = coords[1];\n           let c = coords[2];\n           let d = coords[3];\n\n           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;\n           var curVal = -3.4e38;  // neg_infinity\n           var wRMax = 0;\n           var wCMax = 0;\n\n           // In the case of multiple argmax branches, we only back-propagate\n           // along the last branch, i.e., the one with largest value of\n           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling\n           // backward routines.\n           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {\n             let xR = dyCorner.x + wR * uniforms.dilations[0];\n\n             if (xR >= 0 && xR < uniforms.xShape[1]) {\n               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {\n                 let xC = dyCorner.y + wC * uniforms.dilations[1];\n\n                 if (xC >= 0 && xC < uniforms.xShape[2]) {\n                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);\n                   if (val > curVal) {\n                     curVal = val;\n                     wRMax = wR;\n                     wCMax = wC;\n                   }\n                 }\n               }\n             }\n           }\n\n           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);\n           let value = getDy(b, r, c, d);\n           ${f("&result[flatIndexIn]","value",this.type)}\n         }\n       }\n     `}}const Fi={kernelName:i.Dilation2DBackpropFilter,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a,dy:s}=e,{strides:u,pad:l,dilations:c}=r,h=i.backend_util.computeDilation2DInfo(o.shape,a.shape,u,l,"NHWC",c),d=a.dtype,f=new zi(h,a.shape,d),p=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[i.util.sizeFromShape(h.outShape)]}],m=Ee({backend:n,attrs:{shape:a.shape,value:0,dtype:d}});return n.runWebGPUProgram(f,[o,a,s],d,p,m)}};const Bi={kernelName:i.Dilation2DBackpropInput,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a,dy:s}=e,{strides:u,pad:l,dilations:c}=r,h=i.backend_util.computeDilation2DInfo(o.shape,a.shape,u,l,"NHWC",c),d=o.dtype,f=new Di(h,d),p=[{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[i.util.sizeFromShape(h.outShape)]}],m=Ee({backend:n,attrs:{shape:h.inShape,value:0,dtype:d}});return n.runWebGPUProgram(f,[o,a,s],d,p,m)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ui{constructor(t,e,n){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=p.DRAW,this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=e,this.textureFormat=n,this.shaderKey=`draw_${e}_${n}`}getUserCode(){let t;const e="float32"===this.type?"value":"value / 255.0";t=`\n      if (uniforms.numChannels == 1) {\n        rgba[0] = ${e};\n        rgba[1] = ${e};\n        rgba[2] = ${e};\n      } else {\n        rgba[d] = ${e};\n      }`;return`\n       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;\n       ${b("index")} {\n         if (index < uniforms.size) {\n           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);\n           for (var d = 0; d < uniforms.numChannels; d = d + 1) {\n             let value = f32(inBuf[index * uniforms.numChannels + d]);\n             ${t}\n           }\n           rgba.x = rgba.x * rgba.w;\n           rgba.y = rgba.y * rgba.w;\n           rgba.z = rgba.z * rgba.w;\n           let coords = getCoordsFromIndex(index);\n           textureStore(outImage, vec2<i32>(coords.yx), rgba);\n         }\n       }\n      `}}const ji={kernelName:i.Draw,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{image:i}=e,{canvas:o,options:a}=r,[s,u]=i.shape.slice(0,2),{imageOptions:l}=a||{},c=(null==l?void 0:l.alpha)||1,h=n.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",d=[s,u],f=new Ui(d,i.dtype,h);o.width=u,o.height=s;const p="webgpu";let m,g=o.getContext(p);g||(m=new OffscreenCanvas(u,s),g=m.getContext(p));const v=3===i.shape.length?i.shape[2]:1;g.configure({device:n.device,format:h,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const y="int32",b=n.makeTensorInfo(d,y),x=n.tensorMap.get(b.dataId);x.resource=g.getCurrentTexture(),x.external=!0;const w=[{type:"uint32",data:[v]},{type:"float32",data:[c]}];if(n.runWebGPUProgram(f,[i],y,w,b),m){const t=o.getContext("2d");if(!t)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");t.drawImage(m,0,0)}return n.disposeData(b.dataId),i}},Vi=Fe({opType:j.MUL,cpuKernelImpl:an,supportsComplex:!0}),Hi={kernelName:i.Multiply,backendName:"webgpu",kernelFunc:Vi};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gi(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{axis:o,keepDims:a}=r;return Bn(i,o,a,"sum",n)}const Wi={kernelName:i.Sum,backendName:"webgpu",kernelFunc:Gi};const Xi={kernelName:i.Einsum,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{equation:o}=r,a=e,{allDims:s,summedDims:u,idDims:l}=i.backend_util.decodeEinsumEquation(o,a.length);i.backend_util.checkEinsumDimSizes(s.length,l,a);const{path:c,steps:h}=i.backend_util.getEinsumComputePath(u,l),d=h.length;let f=null,p=s.length;const m=[];for(let t=0;t<d;++t){for(const e of h[t]){const{permutationIndices:t,expandDims:r}=i.backend_util.getEinsumPermutation(p,l[e]);let o;i.backend_util.isIdentityPermutation(t)?o=a[e]:(o=Rn({inputs:{x:a[e]},backend:n,attrs:{perm:t}}),m.push(o));const s=o.shape.slice();for(let t=0;t<r.length;++t)s.splice(r[t],0,1);i.util.arraysEqual(o.shape,s)||(o=Me({inputs:{x:o},backend:n,attrs:{shape:s}}),m.push(o)),null===f?f=o:(f=Vi({inputs:{a:o,b:f},backend:n}),m.push(f))}t<d-1&&(c[t]>=0&&(f=Gi({inputs:{x:f},backend:n,attrs:{axis:c[t]-(s.length-p),keepDims:!1}}),m.push(f)),p--)}for(const t of m)t!==f&&n.disposeData(t.dataId);return f}},Yi=ze({opType:yt.ELU}),qi={kernelName:i.Elu,backendName:"webgpu",kernelFunc:Yi},$i={kernelName:i.EluGrad,backendName:"webgpu",kernelFunc:t=>{const{inputs:e,backend:n}=t,{dy:r,y:i}=e,o=new Ne(j.ELU_DER,r.shape,i.shape);return n.runWebGPUProgram(o,[r,i],r.dtype)}},Ki=Fe({opType:j.EQUAL,dtype:"bool",cpuKernelImpl:Ge}),Zi={kernelName:i.Equal,backendName:"webgpu",kernelFunc:Ki},Qi=ze({opType:yt.ERF}),Ji={kernelName:i.Erf,backendName:"webgpu",kernelFunc:Qi},to=ze({opType:yt.EXP,cpuKernelImpl:We,dtype:"float32"}),eo={kernelName:i.Exp,backendName:"webgpu",kernelFunc:to};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function no(t){const{inputs:e,attrs:n,backend:r}=t,{dim:o}=n,{input:a}=e,s=a.shape.length,u=a.shape.slice();let l=o;return o<0&&(i.util.assert(-(s+1)<=o,(()=>`Axis must be in the interval [${-(s+1)}, ${s}]`)),l=s+o+1),u.splice(l,0,1),Me({inputs:{x:a},backend:r,attrs:{shape:u}})}const ro={kernelName:i.ExpandDims,backendName:"webgpu",kernelFunc:no},io=ze({opType:yt.EXPM1,cpuKernelImpl:Xe}),oo={kernelName:i.Expm1,backendName:"webgpu",kernelFunc:io};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ao{constructor(t,e){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=t,this.shaderKey=`fft_${t}`}getUserCode(){return`\n    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {\n      ${"real"===this.component?"return real * expR - imag * expI;":"return real * expI + imag * expR;"}\n    }\n\n    fn mulMatDFT(batch: i32, index: i32) -> f32 {\n      let indexRatio = f32(index) / f32(uniforms.realShape[1]);\n      let exponentMultiplierTimesIndexRatio =\n          uniforms.exponentMultiplier * indexRatio;\n\n      var result = 0.0;\n\n      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {\n        // x = (-2|2 * PI / N) * index * i;\n        let x = exponentMultiplierTimesIndexRatio * f32(i);\n        let expR = cos(x);\n        let expI = sin(x);\n        let real = getReal(batch, i);\n        let imag = getImag(batch, i);\n\n        result = result +\n            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;\n      }\n\n      return result;\n    }\n\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));\n      }\n    }\n  `}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function so(t,e,n){const r=n.tensorMap.get(t.dataId),o=i.util.sizeFromShape(t.shape),a=t.shape[t.shape.length-1],s=[],u=Me({inputs:{x:t},backend:n,attrs:{shape:[o/a,a]}});s.push(u);const l=u.shape,c=new ao("real",l),h=new ao("imag",l),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:l},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:l}],f=[{type:"float32",data:[e?2*Math.PI:-2*Math.PI]},{type:"float32",data:[e?l[1]:1]}],p=n.runWebGPUProgram(c,d,"float32",f);s.push(p);const m=n.runWebGPUProgram(h,d,"float32",f);s.push(m);const g=Le({inputs:{real:p,imag:m},backend:n});s.push(g);const v=Me({inputs:{x:g},backend:n,attrs:{shape:t.shape}});return s.forEach((t=>n.disposeData(t.dataId))),v}const uo={kernelName:i.FFT,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{input:r}=e;return so(r,!1,n)}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class lo{constructor(t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let coordX = uniforms.xShape[2] - coords[2] - 1;\n          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);\n          setOutputAtIndex(index, outputValue);\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const co={kernelName:i.FlipLeftRight,backendName:"webgpu",kernelFunc:({inputs:t,backend:e})=>{const{image:n}=t,r=e,i=new lo(n.shape);return r.runWebGPUProgram(i,[n],n.dtype)}},ho=ze({opType:yt.FLOOR,cpuKernelImpl:Ye}),fo={kernelName:i.Floor,backendName:"webgpu",kernelFunc:ho},po=Fe({opType:j.FLOOR_DIV,cpuKernelImpl:qe,dtype:"int32"}),mo={kernelName:i.FloorDiv,backendName:"webgpu",kernelFunc:po};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class go{constructor(t,e,n=!1){this.pixelsOpType=p.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[e,1,1]),this.importVideo=n,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const t=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)";return`\n      @binding(1) @group(0) var src: ${this.importVideo?"texture_external":"texture_2d<f32>"};\n      ${b("index")} {\n        let flatIndex = index * uniforms.numChannels;\n        if (flatIndex < uniforms.size) {\n          let coords = getCoordsFromIndex(flatIndex);\n          let values = ${t};\n          for (var i = 0; i < uniforms.numChannels; i = i + 1) {\n            result[flatIndex + i] = i32(floor(255.0 * values[i]));\n          }\n        }\n      }\n  `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const vo={kernelName:i.FromPixels,backendName:"webgpu",kernelFunc:function(t){const{inputs:e,backend:n,attrs:r}=t;let{pixels:o}=e;const{numChannels:a}=r;if(null==o)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const s="undefined"!=typeof HTMLVideoElement&&o instanceof HTMLVideoElement,u="undefined"!=typeof HTMLImageElement&&o instanceof HTMLImageElement,l="undefined"!=typeof HTMLCanvasElement&&o instanceof HTMLCanvasElement||"undefined"!=typeof OffscreenCanvas&&o instanceof OffscreenCanvas,c="undefined"!=typeof ImageBitmap&&o instanceof ImageBitmap,[h,d]=s?[o.videoWidth,o.videoHeight]:[o.width,o.height],f=[d,h,a],p=(0,i.env)().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&s,m=s||u;if(c||l||m){let t;if(p)t=n.device.importExternalTexture({source:o});else{if(m){const t=(0,i.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");null!=yo&&t===bo||(bo=t,yo=document.createElement("canvas").getContext("2d",{willReadFrequently:bo})),yo.canvas.width=h,yo.canvas.height=d,yo.drawImage(o,0,0,h,d),o=yo.canvas}const e=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,r="rgba8unorm",a=n.textureManager.acquireTexture(f[1],f[0],r,e);n.queue.copyExternalImageToTexture({source:o},{texture:a},[f[1],f[0]]),t=a}const e=i.util.sizeFromShape(f),r=i.util.computeStrides(f),s=new go(f,a,p),u=[{type:"uint32",data:[e]},{type:"uint32",data:[a]},{type:"uint32",data:[...r]}],l=n.makeTensorInfo([d,h],"int32");n.tensorMap.get(l.dataId).resource=t;const c=n.runWebGPUProgram(s,[l],"int32",u);return n.disposeData(l.dataId),c}const g=o.data;let v=g;if(null!=a&&4!==a){v=new Uint8Array(o.width*o.height*a);const t=g.length;let e=0;for(let n=0;n<t;n++)n%4<a&&(v[e++]=g[n])}const y=n.makeTensorInfo(f,"int32",new Int32Array(v));return n.uploadToGPU(y.dataId),y}};let yo,bo=(0,i.env)().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xo{constructor(t,e,n,r,o){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],i.backend_util.assertAndGetBroadcastShape(t,e),i.backend_util.assertAndGetBroadcastShape(t,n),this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),null!=r&&(i.backend_util.assertAndGetBroadcastShape(t,r),this.variableNames.push("offset")),null!=o&&(i.backend_util.assertAndGetBroadcastShape(t,o),this.variableNames.push("scale")),this.offsetShape=r,this.scaleShape=o,this.shaderKey="batchNorm"}getUserCode(){let t="0.0";null!=this.offsetShape&&(t="getOffsetByOutputIndex(index)");let e="1.0";null!=this.scaleShape&&(e="getScaleByOutputIndex(index)");return`\n      ${b("index")} {\n        if (index < uniforms.size)\n        {\n          let xValue = getXByOutputIndex(index);\n          let meanValue = getMeanByOutputIndex(index);\n          let varianValue = getVarianceByOutputIndex(index);\n          let offsetValue = ${t};\n          let scaleValue = ${e};\n          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));\n          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));\n        }\n      }\n  `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const wo={kernelName:i.FusedBatchNorm,backendName:"webgpu",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:r,scale:i,offset:o,mean:a,variance:s}=t,{varianceEpsilon:u}=e,l=n,c=[r,a,s];let h=null;null!=o&&(h=o.shape,c.push(o));let d=null;null!=i&&(d=i.shape,c.push(i));const f=new xo(r.shape,a.shape,s.shape,h,d),p=[{type:"float32",data:[u]}];return l.runWebGPUProgram(f,c,r.dtype,p)}};const _o={kernelName:i.FusedConv2D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a,bias:s,preluActivationWeights:u}=e,{strides:l,pad:c,dataFormat:h,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,g=i.backend_util.convertConv2DDataFormat(h);return $r({x:o,filter:a,convInfo:i.backend_util.computeConv2DInfo(o.shape,a.shape,l,d,c,f,!1,g),backend:n,bias:s,preluActivationWeights:u,leakyreluAlpha:m,activation:p})}};const So={kernelName:i.FusedDepthwiseConv2D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,filter:a,bias:s,preluActivationWeights:u}=e,{strides:l,pad:c,dilations:h,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r;let m=h;null==m&&(m=[1,1]),i.util.assert(i.backend_util.eitherStridesOrDilationsAreOne(l,m),(()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${m}'`));const g=i.backend_util.computeConv2DInfo(o.shape,a.shape,l,m,c,d,!0),v=[o,a],y=null!=s,b=null!=u;y&&v.push(s),b&&v.push(u);const x=[{type:"int32",data:[g.padInfo.top,g.padInfo.left]},{type:"int32",data:[g.inHeight,g.inWidth]}];let w;return g.outHeight>4&&g.outWidth>4&&g.strideWidth<=2&&g.inChannels===g.outChannels&&1===g.dilationHeight&&1===g.dilationWidth&&g.inChannels%4==0?(w=new Ai(g,y,f,b),x.push({type:"int32",data:[w.virtualWidth]})):(w=new Mi(g,y,f,b),x.push({type:"int32",data:[g.filterHeight]},{type:"int32",data:[g.filterWidth]},{type:"int32",data:[g.strideHeight,g.strideWidth]},{type:"int32",data:[g.dilationHeight,g.dilationWidth]})),"leakyrelu"===f&&(x.push({type:"float32",data:[p]}),w.uniforms+=" alpha : f32,"),n.runWebGPUProgram(w,v,"float32",x)}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Eo{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${t}`,this.sliceDim=t,this.uniforms=`sliceDim : i32, strides : ${v(t)},`}getUserCode(){let t;t=this.sliceDim>1?"uniforms.strides[j]":"uniforms.strides";return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          var flattenIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexTemp = i32(round(getIndices(coords[0], j)));\n            let strideNum = ${t};\n            flattenIndex = flattenIndex + indexTemp * strideNum;\n          }\n\n          setOutputAtIndex(index, getA(flattenIndex, coords[1]));\n        }\n      }\n      `}}const Ao={kernelName:i.GatherNd,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{params:r,indices:o}=e,a=o.shape,s=a[a.length-1],u=i.util.sizeFromShape(r.shape),[l,c,h,d]=i.backend_util.prepareAndValidate(r,o),f=Me({inputs:{x:o},backend:n,attrs:{shape:[c,s]}}),p=Me({inputs:{x:r},backend:n,attrs:{shape:[i.util.sizeFromShape(r.shape)/h,h]}});if(n.shouldExecuteOnCPU([r,o])||"string"===r.dtype){const t=n.readSync(o.dataId),e=n.bufferSync(r),i=$e(t,e,r.dtype,c,s,h,d,r.shape,u);return n.makeTensorInfo(l,r.dtype,i.values)}const m=new Eo(s,[c,h]),g=[{type:"int32",data:[s]},{type:"int32",data:d}],v=n.runWebGPUProgram(m,[p,f],p.dtype,g),y=Me({inputs:{x:v},backend:n,attrs:{shape:l}});return n.disposeData(f.dataId),n.disposeData(p.dataId),n.disposeData(v.dataId),y}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Mo{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.slice(),this.aShape=t,this.outputShape=e,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const t=function(t){const e=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[];for(let r=0;r<t.length;r++)2===r?n.push("indexZ"):n.push(`${e[r]}`);return n.join()}(this.aShape);return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let indexZ = i32(getIndices(resRC.x, resRC.z));\n          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);\n          setOutputAtIndex(index, inBounds * getA(${t}));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Co(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,indices:a}=e,{axis:s,batchDims:u}=r,l=i.util.parseAxisParam(s,o.shape)[0],c=i.backend_util.segment_util.collectGatherOpShapeInfo(o,a,l,u),h=i.util.sizeFromShape(a.shape),d=[],f=Me({inputs:{x:o},backend:n,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),p=Me({inputs:{x:a},backend:n,attrs:{shape:[c.batchSize,h/c.batchSize]}});d.push(f),d.push(p);const m=[c.batchSize,c.outerSize,h/c.batchSize,c.sliceSize];if(n.shouldExecuteOnCPU([o,a])){const t=n.tensorMap.get(p.dataId).values,e=(0,i.buffer)(p.shape,p.dtype,t),r=n.tensorMap.get(f.dataId).values,o=(0,i.buffer)(f.shape,f.dtype,r),a=Ke(o,e,m);return d.forEach((t=>n.disposeData(t.dataId))),n.makeTensorInfo(c.outputShape,a.dtype,a.values)}const g=new Mo(f.shape,m),v=n.runWebGPUProgram(g,[f,p],f.dtype);d.push(v);const y=Me({inputs:{x:v},backend:n,attrs:{shape:c.outputShape}});return d.forEach((t=>n.disposeData(t.dataId))),y}const To={kernelName:i.GatherV2,backendName:"webgpu",kernelFunc:Co},ko=Fe({opType:j.GREATER,cpuKernelImpl:Qe,dtype:"bool"}),Io={kernelName:i.Greater,backendName:"webgpu",kernelFunc:ko},No=Fe({opType:j.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:Ze}),Po={kernelName:i.GreaterEqual,backendName:"webgpu",kernelFunc:No};const Oo={kernelName:i.IFFT,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{input:r}=e;return so(r,!0,n)}},Lo=ze({opType:yt.IS_FINITE,dtype:"bool"}),Ro={kernelName:i.IsFinite,backendName:"webgpu",kernelFunc:Lo},Do=ze({opType:yt.IS_INF,dtype:"bool"}),zo={kernelName:i.IsInf,backendName:"webgpu",kernelFunc:Do},Fo=ze({opType:yt.IS_NAN,dtype:"bool"}),Bo={kernelName:i.IsNan,backendName:"webgpu",kernelFunc:Fo};const Uo={kernelName:i.LeakyRelu,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{alpha:o}=r,a=[{type:"float32",data:[o]}],s=new De(i.shape,yt.LEAKYRELU,"alpha : f32,");return n.runWebGPUProgram(s,[i],"float32",a)}},jo=Fe({opType:j.LESS,dtype:"bool",cpuKernelImpl:tn}),Vo={kernelName:i.Less,backendName:"webgpu",kernelFunc:jo},Ho=Fe({opType:j.LESS_EQUAL,dtype:"bool",cpuKernelImpl:Je}),Go={kernelName:i.LessEqual,backendName:"webgpu",kernelFunc:Ho};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Wo{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);\n        }\n      }\n    `}}const Xo={kernelName:i.LinSpace,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{backend:e,attrs:n}=t,{start:r,stop:i,num:o}=n,a=(i-r)/(o-1),s=new Wo(o),u=[{type:"float32",data:[r]},{type:"float32",data:[a]}];return e.runWebGPUProgram(s,[],"float32",u)}},Yo=ze({opType:yt.LOG,cpuKernelImpl:en}),qo={kernelName:i.Log,backendName:"webgpu",kernelFunc:Yo},$o=ze({opType:yt.LOG1P}),Ko={kernelName:i.Log1p,backendName:"webgpu",kernelFunc:$o},Zo=Fe({opType:j.LOGICAL_AND,dtype:"bool"}),Qo={kernelName:i.LogicalAnd,backendName:"webgpu",kernelFunc:Zo},Jo=ze({opType:yt.LOGICAL_NOT}),ta={kernelName:i.LogicalNot,backendName:"webgpu",kernelFunc:Jo},ea=Fe({opType:j.LOGICAL_OR}),na={kernelName:i.LogicalOr,backendName:"webgpu",kernelFunc:ea},ra="\n  var powValue = 0.0;\n  let basis = uniforms.bias + uniforms.alpha * sum;\n  if (uniforms.beta == 0.5) {\n    powValue = inverseSqrt(basis);\n  } else if (uniforms.beta == 1.0) {\n    powValue = 1.0 / basis;\n  } else {\n    powValue = exp(log(basis) * (-uniforms.beta));\n  }\n";class ia{constructor(t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n        let d = coords[3];\n\n        let x = getX(b, r, c, d);\n        var sum = 0.0;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let idx = d + i;\n          if (idx >= 0 && idx < uniforms.xShape[3]) {\n            let z = getX(b, r, c, idx);\n            sum = sum + z * z;\n          }\n        }\n        ${ra}\n\n        setOutputAtIndex(index, x * powValue);\n      }\n    }\n  `}}class oa{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,i.util.assert(e<=this.maxAllowRadius,(()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${e}`)),this.outputShape=t,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=I(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`\n    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;\n    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};\n    const maxAllowRadius = ${this.maxAllowRadius};\n\n    ${b()} {\n      let localDepth = i32(localId.x);\n      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;\n      let xDepth = workgroupDepth + localDepth - maxAllowRadius;\n      let b = i32(globalId.z) / uniforms.xShape[1];\n      let r = i32(globalId.z) - b * uniforms.xShape[1];\n      let c = i32(globalId.y);\n      let d = workgroupDepth + localDepth;\n\n      var x = 0.0;\n      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {\n        x = getX(b, r, c, xDepth);\n      }\n      lrnSub[localDepth] = x;\n      workgroupBarrier();\n\n      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {\n        var sum = 0.0;\n        let index = localDepth + maxAllowRadius;\n        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {\n          let z = lrnSub[index + i];\n          sum = sum + z * z;\n        }\n        ${ra}\n\n        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);\n      }\n    } `}}const aa={kernelName:i.LRN,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{depthRadius:o,bias:a,alpha:s,beta:u}=r;let l;l=o>16?new ia(i.shape):new oa(i.shape,o);const c=[{type:"int32",data:[o]},{type:"float32",data:[a]},{type:"float32",data:[s]},{type:"float32",data:[u]}];return n.runWebGPUProgram(l,[i],i.dtype,c)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class sa{constructor(t){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let b = coords[0];\n        let r = coords[1];\n        let c = coords[2];\n\n        let MIN_DEPTH_BEGIN = 0;\n        let MAX_DEPTH_END = uniforms.outShape[3];\n        var result = 0.0;\n        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {\n          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);\n          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);\n\n          var norm = 0.0;\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            } else {\n              break;\n            }\n          }\n\n          norm = uniforms.alpha * norm + uniforms.bias;\n\n          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {\n            if (k < depthBegin) {\n              continue;\n            } else if (k >= depthBegin && k < depthEnd) {\n              var dyi = -2.0 * uniforms.alpha * uniforms.beta\n                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * uniforms.beta);\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            } else {\n              break;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, result);\n      }\n    }\n  `}}const ua={kernelName:i.LRNGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i,y:o,dy:a}=e,{depthRadius:s,bias:u,alpha:l,beta:c}=r,h=new sa(i.shape),d=[{type:"int32",data:[s]},{type:"float32",data:[u]},{type:"float32",data:[l]},{type:"float32",data:[c]}];return n.runWebGPUProgram(h,[i,o,a],i.dtype,d)}},la=Fe({opType:j.MAX,cpuKernelImpl:rn}),ca={kernelName:i.Maximum,backendName:"webgpu",kernelFunc:la};const ha={kernelName:i.MaxPool,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{filterSize:a,strides:s,pad:u,dimRoundingMode:l}=r;return ur(o,i.backend_util.computePool2DInfo(o.shape,a,s,1,u,l),"max",n)}};const da={kernelName:i.MaxPool3D,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{filterSize:a,strides:s,pad:u,dataFormat:l,dimRoundingMode:c}=r,h=i.backend_util.computePool3DInfo(o.shape,a,s,[1,1,1],u,c,l),d=new rr(h,"max"),f=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];return n.runWebGPUProgram(d,[o],o.dtype,f)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class fa{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,\n       outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d = coords[3];\n\n        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;\n        let dyRCorner = dyRCCorner.x;\n        let dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;\n        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {\n          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);\n\n          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n            continue;\n          }\n          let idyR = i32(dyR);\n\n          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {\n            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);\n\n            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n              continue;\n            }\n            let idyC = i32(dyC);\n\n            let dyValue = getDy(batch, idyR, idyC, d);\n            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            let curPosValue = wR * uniforms.filterDims[1] + wC;\n            let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}class pa{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,\n      outDepth : i32, outHeight : i32, outWidth : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`\n      ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords.x;\n        let ch = coords.u;\n\n        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;\n        let dyDCorner = dyCorner.x;\n        let dyRCorner = dyCorner.y;\n        let dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;\n\n        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {\n          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);\n\n          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {\n            continue;\n          }\n          let idyD = i32(dyD);\n\n          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {\n            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);\n\n            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {\n              continue;\n            }\n            let idyR = i32(dyR);\n\n            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {\n              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);\n\n              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {\n                continue;\n              }\n              let idyC = i32(dyC);\n\n              let dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;\n              let mask = select(0.0, 1.0, maxPosValue == curPosValue);\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n    `}}const ma={kernelName:i.MaxPool3DGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,input:a}=e,s=a,{filterSize:u,strides:l,pad:c,dimRoundingMode:h}=r,d=i.backend_util.computePool3DInfo(s.shape,u,l,[1,1,1],c,h),f=new rr(d,"max",!0);let p=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.inDepth,d.inHeight,d.inWidth]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]}];const m=n.runWebGPUProgram(f,[s],"int32",p),g=new pa(d);p=[{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.effectiveFilterDepth-1-d.padInfo.front,d.effectiveFilterHeight-1-d.padInfo.top,d.effectiveFilterWidth-1-d.padInfo.left]},{type:"int32",data:[d.effectiveFilterDepth,d.effectiveFilterHeight,d.effectiveFilterWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]}];const v=n.runWebGPUProgram(g,[o,m],s.dtype,p);return n.disposeData(m.dataId),v}};const ga={kernelName:i.MaxPoolGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{dy:o,input:a,output:s}=e,u=a;z([a,s],"maxPoolGrad");const{filterSize:l,strides:c,pad:h,dimRoundingMode:d}=r,f=i.backend_util.computePool2DInfo(u.shape,l,c,1,h,d),p=new nr(f,"max",!0);let m=[{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.padInfo.top,f.padInfo.left]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]},{type:"int32",data:[f.inHeight,f.inWidth]},{type:"int32",data:[f.effectiveFilterHeight,f.effectiveFilterWidth]}];const g=n.runWebGPUProgram(p,[u],"int32",m),v=new fa(f);m=[{type:"int32",data:[f.strideHeight,f.strideWidth]},{type:"int32",data:[f.effectiveFilterHeight-1-f.padInfo.top,f.effectiveFilterWidth-1-f.padInfo.left]},{type:"int32",data:[f.dilationHeight,f.dilationWidth]},{type:"int32",data:[f.effectiveFilterHeight,f.effectiveFilterWidth]},{type:"int32",data:[f.outHeight]},{type:"int32",data:[f.outWidth]}];const y=n.runWebGPUProgram(v,[o,g],u.dtype,m);return n.disposeData(g.dataId),y}};const va={kernelName:i.MaxPoolWithArgmax,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{filterSize:o,strides:a,pad:s,includeBatchInIndex:u}=r,{x:l}=e;i.util.assert(4===l.shape.length,(()=>`Error in maxPool: input must be rank 4 but got rank ${l.shape.length}.`));const c=[1,1];i.util.assert(i.backend_util.eitherStridesOrDilationsAreOne(a,c),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${c}'`));const h=i.backend_util.computePool2DInfo(l.shape,o,a,c,s),d=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.dilationHeight,h.dilationWidth]},{type:"int32",data:[h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterHeight,h.effectiveFilterWidth]}];let f=new nr(h,"max",!1);const p=n.runWebGPUProgram(f,[l],l.dtype,d);return f=new nr(h,"max",!0,!0,u),[p,n.runWebGPUProgram(f,[l],"int32",d)]}};const ya={kernelName:i.Min,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{axis:o,keepDims:a}=r;return Bn(i,o,a,"min",n)}},ba=Fe({opType:j.MIN,cpuKernelImpl:on}),xa={kernelName:i.Minimum,backendName:"webgpu",kernelFunc:ba};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class wa{constructor(t,e,n){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map(((e,n)=>e[0]+t[n]+e[1])),this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,e.map(((t,e)=>{this.uniforms+=` pad${e} : vec2<i32>,`})),this.offset="reflect"===n?0:1,this.shaderKey=`mirrorPad_${n}`}getUserCode(){const t=this.xShape.length,e=this.xShape.map(((t,e)=>`uniforms.pad${e}[0]`)).join(","),n=this.xShape.map(((e,n)=>`uniforms.pad${n}[0] + uniforms.xShape${t>1?`[${n}]`:""}`)).join(","),r=1===t?"start":"start[i]",i=1===t?"end":"end[i]",o=1===t?"outC":"outC[i]",a=v(t),s=t>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t):"coords";return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let start = ${a}(${e});\n          let end = ${a}(${n});\n          var outC = getCoordsFromIndex(index);\n          for (var i = 0; i < ${t}; i = i + 1) {\n            if (${o} < ${r}) {\n              ${o} = ${r} * 2 - ${o} - ${this.offset};\n            } else if(${o} >= ${i}) {\n              ${o} = (${i} - 1) * 2 - ${o} + ${this.offset};\n            }\n          }\n          let coords = outC - start;\n          setOutputAtIndex(index, getX(${s}));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _a={kernelName:i.MirrorPad,backendName:"webgpu",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:r}=t,{paddings:i,mode:o}=e,a=n,s=i.map((t=>({type:"int32",data:[t[0],t[1]]}))),u=new wa(r.shape,i,o);return a.runWebGPUProgram(u,[r],r.dtype,s)}},Sa=Fe({opType:j.MOD}),Ea={kernelName:i.Mod,backendName:"webgpu",kernelFunc:Sa};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Aa{constructor(t,e){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {\n      let HASHSCALE1 = 443.8975;\n      let p = resultUV * seed;\n      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);\n      p3 = p3 + dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let coords = getOutputCoords();\n        let batch = coords[0];\n\n        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),\n            f32(coords[0]) / f32(uniforms.outShape[0]));\n        let r = random(uniforms.seed, resUV);\n        var cdf = 0.0;\n        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {\n          cdf = cdf + getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutputAtIndexI32(index, i);\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);\n      }\n    }\n  `}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ma{constructor(t){this.variableNames=["logits"],this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`\n    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;\n    var<workgroup> rowMaxShared : f32;\n    var<workgroup> rowSumShared : f32;\n    const blockSize = ${this.workgroupSize[0]};\n    ${b("index")} {\n      let row = index / blockSize;\n      let tid = i32(localId.x);\n      let cols = uniforms.outShape[1];\n\n      var threadMax = -3.402823e+38f;\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = getLogits(row, col);\n        threadMax = max(threadMax, value);\n      }\n      if (tid < cols) {\n        buf[tid] = threadMax;\n      }\n      workgroupBarrier();\n\n      var reduceSize = min(cols, blockSize);\n      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {\n        reduceSize = currSize + (reduceSize & 1);\n        if (tid < currSize) {\n          buf[tid] = max(buf[tid], buf[tid + reduceSize]);\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowMaxShared = buf[0];\n      }\n      workgroupBarrier();\n\n      var threadSum = 0.0;\n      for (var col = tid; col < cols; col += blockSize) {\n        let subExp = exp(getLogits(row, col) - rowMaxShared);\n        threadSum += subExp;\n      }\n      buf[tid] = threadSum;\n      workgroupBarrier();\n\n      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {\n        if (tid < currSize) {\n          buf[tid] = buf[tid] + buf[tid + currSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (tid == 0) {\n        rowSumShared = buf[0];\n      }\n      workgroupBarrier();\n\n      for (var col = tid; col < cols; col += blockSize) {\n        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;\n        setOutputAtCoords(row, col, value);\n      }\n  }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ca(t){const{inputs:e,backend:n,attrs:r}=t,{logits:o}=e,{dim:a}=r,s=Me({inputs:{x:o},backend:n,attrs:{shape:[i.util.sizeFromShape(o.shape)/o.shape[a],o.shape[a]]}}),u=new Ma(s.shape),l=n.runWebGPUProgram(u,[s],o.dtype),c=Me({inputs:{x:l},backend:n,attrs:{shape:o.shape}});return n.disposeData(s.dataId),n.disposeData(l.dataId),c}const Ta={kernelName:i.Softmax,backendName:"webgpu",kernelFunc:Ca};const ka={kernelName:i.Multinomial,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{logits:i}=e,{numSamples:o,seed:a,normalized:s}=r,u=s?i:Ca({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=u.shape[0],c=u.shape[1],h=new Aa(l,o),d=[{type:"float32",data:[a]},{type:"int32",data:[c]}],f=n.runWebGPUProgram(h,[u],"int32",d);return s||n.disposeData(u.dataId),f}};const Ia={kernelName:i.Neg,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{x:r}=e;if(n.shouldExecuteOnCPU([r])){const t=n.tensorMap.get(r.dataId),[e,i]=sn(t.values,r.shape,r.dtype);return n.makeTensorInfo(i,r.dtype,e)}const i=new De(r.shape,yt.NEG);return n.runWebGPUProgram(i,[r],r.dtype)}};const Na={kernelName:i.NonMaxSuppressionV3,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:r}=t,{boxes:o,scores:a}=e,{maxOutputSize:s,iouThreshold:u,scoreThreshold:l}=r,c=n.readSync(o.dataId),h=n.readSync(a.dataId),{selectedIndices:d}=i.kernel_impls.nonMaxSuppressionV3Impl(c,h,s,u,l);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}};const Pa={kernelName:i.NonMaxSuppressionV5,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:r}=t,{boxes:o,scores:a}=e,{maxOutputSize:s,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=r,h=n.readSync(o.dataId),d=n.readSync(a.dataId),f=s,p=u,m=l,g=c,{selectedIndices:v,selectedScores:y}=i.kernel_impls.nonMaxSuppressionV5Impl(h,d,f,p,m,g);return[n.makeTensorInfo([v.length],"int32",new Int32Array(v)),n.makeTensorInfo([y.length],"float32",new Float32Array(y))]}};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Oa{constructor(t,e){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`\n      ${b("index")} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,\n                                      f32(i32(round(getX(coords.x))) == coords.y)));\n        }\n      }\n    `}}const La={kernelName:i.OneHot,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{indices:o}=e,{dtype:a,depth:s,onValue:u,offValue:l}=r,c=i.util.sizeFromShape(o.shape),h=new Oa(c,s),d=Me({inputs:{x:o},backend:n,attrs:{shape:[c]}}),f=[{type:"float32",data:[u]},{type:"float32",data:[l]}],p=n.runWebGPUProgram(h,[d],a,f);n.disposeData(d.dataId);const m=Me({inputs:{x:p},backend:n,attrs:{shape:[...o.shape,s]}});return n.disposeData(p.dataId),m}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ra(t){const{inputs:e,backend:n}=t,{x:r}=e;if("complex64"===r.dtype){const t=Tr({inputs:{input:r},backend:n}),e=Ra({inputs:{x:t},backend:n}),i=Ur({inputs:{input:r},backend:n}),o=Ra({inputs:{x:i},backend:n}),a=Le({inputs:{real:e,imag:o},backend:n});return n.disposeData(t.dataId),n.disposeData(e.dataId),n.disposeData(i.dataId),n.disposeData(o.dataId),a}return Ee({attrs:{shape:r.shape,dtype:r.dtype,value:"string"===r.dtype?"":0},backend:n})}const Da={kernelName:i.ZerosLike,backendName:"webgpu",kernelFunc:Ra};const za={kernelName:i.OnesLike,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function t(e){const{inputs:n,backend:r}=e,{x:i}=n;if("string"===i.dtype)throw new Error("onesLike is not supported under string dtype");if("complex64"===i.dtype){const e=Tr({inputs:{input:i},backend:r}),n=t({inputs:{x:e},backend:r}),o=Ur({inputs:{input:i},backend:r}),a=Ra({inputs:{x:o},backend:r}),s=Le({inputs:{real:n,imag:a},backend:r});return r.disposeData(e.dataId),r.disposeData(n.dataId),r.disposeData(o.dataId),r.disposeData(a.dataId),s}return Ee({attrs:{shape:i.shape,dtype:i.dtype,value:1},backend:r})}};const Fa={kernelName:i.Pack,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{axis:o}=r;if(1===e.length)return no({inputs:{input:e[0]},backend:n,attrs:{dim:o}});const a=e[0].shape,s=e[0].dtype;e.forEach((t=>{i.util.assertShapesMatch(a,t.shape,"All tensors passed to stack must have matching shapes"),i.util.assert(s===t.dtype,(()=>"All tensors passed to stack must have matching dtypes"))}));const u=[],l=Hr({inputs:e.map((t=>{const e=no({inputs:{input:t},backend:n,attrs:{dim:o}});return u.push(e),e})),backend:n,attrs:{axis:o}});return u.forEach((t=>n.disposeData(t.dataId))),l}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ba(t,e=!1){const n=t.length,r=v(n),i=t.map(((t,e)=>`uniforms.pad${e}[0]`)).join(","),o=t.map(((t,e)=>`uniforms.pad${e}[0] + uniforms.xShape${n>1?`[${e}]`:""}`)).join(",");return`\n        let start = ${n>1?`${r}(${i})`:`${i}`};\n        let end = ${n>1?`${r}(${o})`:`${o}`};\n        if (${n>1?"any(paddedCoords < start)":"paddedCoords < start"} || ${n>1?"any(paddedCoords >= end)":"paddedCoords >= end"}) {\n          setOutputAtIndex(index, ${e?0:"uniforms.constantValue"});\n        } else {\n          let coords = paddedCoords - start;\n          setOutputAtIndex(index, getX(${n>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n):"coords"}));\n        }\n  `}class Ua{constructor(t,e){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map(((e,n)=>e[0]+t[n]+e[1])),this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),e.map(((t,e)=>{this.uniforms+=` pad${e} : vec2<i32>,`})),this.xShape=t,this.shaderKey="pad"}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let paddedCoords = getCoordsFromIndex(index);\n          ${Ba(this.xShape)}\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ja={kernelName:i.PadV2,backendName:"webgpu",kernelFunc:t=>{const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{paddings:a,constantValue:s}=r;if(a.every((t=>i.util.arraysEqual(t,[0,0]))))return Pe({inputs:{x:o},backend:n});if(0===i.util.sizeFromShape(o.shape)){return Ee({backend:n,attrs:{shape:a.map(((t,e)=>t[0]+o.shape[e]+t[1])),value:s,dtype:o.dtype}})}const u=[{type:"float32",data:[s]}];a.map((t=>u.push({type:"int32",data:[t[0],t[1]]})));const l=new Ua(o.shape,a);return n.runWebGPUProgram(l,[o],o.dtype,u)}},Va=Fe({opType:j.POW}),Ha={kernelName:i.Pow,backendName:"webgpu",kernelFunc:Va};const Ga={kernelName:i.Prelu,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{x:r,alpha:i}=e,o=new Ne(j.PRELU,r.shape,i.shape);return n.runWebGPUProgram(o,[r,i],"float32")}};const Wa={kernelName:i.Prod,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:i}=e,{axis:o,keepDims:a}=r;return Bn(i,o,a,"prod",n)}},Xa={kernelName:i.Range,backendName:"webgpu",kernelFunc:t=>{const{backend:e,attrs:n}=t,{start:r,stop:i,step:o,dtype:a}=n,s=cn(r,i,o,a);return e.makeTensorInfo([s.length],a,s)}},Ya=Fe({opType:j.DIV}),qa={kernelName:i.RealDiv,backendName:"webgpu",kernelFunc:Ya},$a=ze({opType:yt.RECIPROCAL}),Ka={kernelName:i.Reciprocal,backendName:"webgpu",kernelFunc:$a},Za=ze({opType:yt.RELU}),Qa={kernelName:i.Relu,backendName:"webgpu",kernelFunc:Za},Ja=ze({opType:yt.RELU6}),ts={kernelName:i.Relu6,backendName:"webgpu",kernelFunc:Ja};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class es{constructor(t,e,n){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,n,t[3]],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC =\n            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *\n            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);\n\n          // Compute the four integer indices.\n          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);\n          let sourceCeilRC = vec2<i32>(\n            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));\n\n          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);\n\n          let top = topLeft + (topRight - topLeft) * fracRC.y;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          let newValue = top + (bottom - top) * fracRC.x;\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `}}const ns={kernelName:i.ResizeBilinear,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{images:i}=e,{alignCorners:o,size:a,halfPixelCenters:s}=r,[u,l]=a,c=[{type:"float32",data:[o&&u>1?1:0,o&&l>1?1:0]},{type:"float32",data:[s?.5:0]}],h=new es(i.shape,u,l);return n.runWebGPUProgram(h,[i],"float32",c)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class rs{constructor(t,e){this.variableNames=["dy"],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,\n       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeBilinearBackprop_${e}`}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let dxR = f32(dyR) * uniforms.heightScale;\n              let topDxRIndex = i32(floor(dxR));\n              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));\n              let dxRLerp = dxR - f32(topDxRIndex);\n              let inverseDxRLerp = 1.0 - dxRLerp;\n\n              let dxC = f32(dyC) * uniforms.widthScale;\n              let leftDxCIndex = i32(floor(dxC));\n              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));\n              let dxCLerp = dxC - f32(leftDxCIndex);\n              let inverseDxCLerp = 1.0 - dxCLerp;\n\n              if (r == topDxRIndex && c == leftDxCIndex) {\n                // topLeft\n                accumulator +=\n                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n              }\n\n              if (r == topDxRIndex && c == rightDxCIndex) {\n                // topRight\n                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == leftDxCIndex) {\n                // bottomLeft\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n              }\n\n              if (r == bottomDxRIndex && c == rightDxCIndex) {\n                // bottomRight\n                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `}}const is={kernelName:i.ResizeBilinearGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{images:i,dy:o}=e,{alignCorners:a}=r,[,s,u]=i.shape,[,l,c]=o.shape,h=[a&&l>1?s-1:s,a&&c>1?u-1:u],d=[a&&l>1?l-1:l,a&&c>1?c-1:c],f=h[0]/d[0],p=h[1]/d[1],m=1/f,g=1/p,v=2*Math.ceil(m)+2,y=2*Math.ceil(g)+2,b=new rs(i.shape,a),x=[{type:"int32",data:h},{type:"int32",data:d},{type:"float32",data:[f]},{type:"float32",data:[p]},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[v]},{type:"int32",data:[y]}];return n.runWebGPUProgram(b,[o],o.dtype,x)}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class os{constructor(t,e,n,r){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,n,t[3]],this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=r,this.shaderKey=`resizeNearest_${r}`}getUserCode(){let t;t=this.halfPixelCenters?"max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":"vec2<f32>(rc) * effectiveInputOverOutputRatioRC";return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC = ${t};\n\n          // Compute the coordinators of nearest neighbor point.\n          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));\n          let sourceNearestRC = vec2<i32>(\n            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));\n          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    `}}const as={kernelName:i.ResizeNearestNeighbor,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{images:i}=e,{alignCorners:o,halfPixelCenters:a,size:s}=r,[u,l]=s,c=[{type:"float32",data:[o&&u>1?1:0,o&&l>1?1:0]},{type:"float32",data:[o?.5:0]}],h=new os(i.shape,u,l,a);return n.runWebGPUProgram(h,[i],i.dtype,c)}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ss{constructor(t,e){this.variableNames=["dy"],this.uniforms="effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,\n       winHeight : i32, winWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeNearestNeigborBackprop_${e}`}getUserCode(){return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getOutputCoords();\n          let b = coords[0];\n          let d = coords[3];\n          let r = coords[1];\n          let c = coords[2];\n\n          var accumulator = 0.0;\n\n          // Compute bounds for where in dy we will look\n          let startRLerp = floor(f32(r) * uniforms.invHeightScale);\n          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));\n\n          let startCLerp = floor(f32(c) * uniforms.invWidthScale);\n          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));\n\n          // Loop over dy\n          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {\n            let dyR = startDyR + dyROffset;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {\n              continue;\n            }\n\n            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {\n              let dyC = startDyC + dyCOffset;\n\n              // Guard against the window exceeding the bounds of dy\n              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {\n                continue;\n              }\n\n              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *\n                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));\n\n              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *\n                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));\n\n              let sourceNearestRow =\n                  i32(min(f32(uniforms.outShape[1] - 1),\n                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));\n\n              let sourceNearestCol =\n                  i32(min(f32(uniforms.outShape[2] - 1),\n                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));\n\n              if (r == sourceNearestRow && c == sourceNearestCol) {\n                accumulator += getDy(b, dyR, dyC, d);\n              }\n            }\n          }\n          // End loop over dy\n\n          setOutputAtIndex(index, accumulator);\n        }\n      }\n    `}}const us={kernelName:i.ResizeNearestNeighborGrad,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{images:i,dy:o}=e,{alignCorners:a}=r,[,s,u]=i.shape,[,l,c]=o.shape,h=[a&&l>1?s-1:s,a&&c>1?u-1:u],d=[a&&l>1?l-1:l,a&&c>1?c-1:c],f=1/(h[0]/d[0]),p=1/(h[1]/d[1]),m=2*Math.ceil(f)+2,g=2*Math.ceil(p)+2,v=new ss(i.shape,a),y=[{type:"int32",data:h},{type:"int32",data:d},{type:"float32",data:[f]},{type:"float32",data:[p]},{type:"int32",data:[m]},{type:"int32",data:[g]}];return n.runWebGPUProgram(v,[o],o.dtype,y)}};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ls{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){return`\n      \n      // Using uniform variables as judging conditions, so the function has\n      // coherent execution within all threads.\n      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {\n        var reverseCoords = coords;\n        if (uniforms.axis[0] == 1) {\n          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;\n        }\n        if (uniforms.axis[1] == 1) {\n          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;\n        }\n        if (uniforms.axis[2] == 1) {\n          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;\n        }\n        if (uniforms.axis[3] == 1) {\n          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;\n        }\n\n        return reverseCoords;\n      }\n    \n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let reverseCoords = getReverseCoords(coords);\n          setOutputAtIndex(index, getX(reverseCoords[0],\n              reverseCoords[1], reverseCoords[2], reverseCoords[3]));\n        }\n      }\n    `}}const cs={kernelName:i.Reverse,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{dims:a}=r,s=o.shape.length;if(0===s)return Pe({inputs:{x:o},backend:n});const u=o.shape,l=[1,1,1,1];u.forEach(((t,e)=>{l[e+4-s]=t}));const c=i.util.parseAxisParam(a,o.shape),h=[0,0,0,0];c.forEach((t=>{h[t+4-s]=1}));const d=[{type:"int32",data:h}],f=Me({inputs:{x:o},backend:n,attrs:{shape:l}}),p=new ls(l),m=n.runWebGPUProgram(p,[f],f.dtype,d);n.disposeData(f.dataId);const g=Me({inputs:{x:m},backend:n,attrs:{shape:u}});return n.disposeData(m.dataId),g}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class hs{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="centerX : f32, centerY : f32, sinRadians : f32,\n          cosRadians : f32,",this.shaderKey="rotate",this.outputShape=t,"number"==typeof e?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`\n        ${b("index")} {\n          if (index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *\n                uniforms.sinRadians;\n            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *\n                uniforms.cosRadians;\n            let coordX = i32(round(coordXFloat + uniforms.centerX));\n            let coordY = i32(round(coordYFloat + uniforms.centerY));\n            ${this.fillSnippet}\n            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&\n                coordY < uniforms.xShape[1]) {\n              outputValue = getX(coords[0], coordY, coordX, coords[3]);\n            }\n            setOutputAtIndex(index, outputValue);\n          }\n        }\n      `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ds={kernelName:i.RotateWithOffset,backendName:"webgpu",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{image:r}=t,{radians:o,fillValue:a,center:s}=e,u=n,l=new hs(r.shape,a),[c,h]=i.backend_util.getImageCenter(s,r.shape[1],r.shape[2]),d=[{type:"float32",data:[c]},{type:"float32",data:[h]},{type:"float32",data:[Math.sin(o)]},{type:"float32",data:[Math.cos(o)]}];"number"==typeof a?d.push({type:"float32",data:[Number.parseFloat(a.toFixed(2))]}):d.push({type:"float32",data:a});return u.runWebGPUProgram(l,[r],r.dtype,d)}},fs=ze({opType:yt.ROUND}),ps={kernelName:i.Round,backendName:"webgpu",kernelFunc:fs},ms=ze({opType:yt.RSQRT,cpuKernelImpl:hn}),gs={kernelName:i.Rsqrt,backendName:"webgpu",kernelFunc:ms};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class vs{constructor(t,e,n,r,i,o,a,s=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=o,this.type=a,this.sumDupeIndices=s,this.dispatchLayout=L(t),this.dispatch=I(this.dispatchLayout,t,this.workgroupSize),this.sliceDimGreaterThanOne=e>1,this.shaderKey=`scatter_${n}_${r}_${this.sliceDimGreaterThanOne}_${a}_${s}_${i.length}`;const u=v(i.length);this.uniforms=`sliceDim : i32, strides: ${u}, updatesSize: i32,`,this.updatesRank=r,this.indicesRank=n}getUserCode(){let t="";1===this.indicesRank?t="coords[0]":2===this.indicesRank&&(t="coords[0], j");const e=`getIndices(${t})`,n=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let r="",i="";1===this.dispatchLayout.x.length?(r="flattenedIndex",i="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {\n        return index;\n      }\n      "):2===this.dispatchLayout.x.length&&(r="vec2<i32>(flattenedIndex, coords[1])",i="\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {\n        // N.B. |updates| could be a scalar tensor, conceptually representing a\n        // 2D tensor with all values equal to that. By design, its size must be\n        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|\n        // gives the other.\n        let sliceSize = uniforms.outShape[1];\n        let d0 = index / sliceSize;\n        let d1 = index - d0 * sliceSize;\n        return vec2<i32>(d0, d1);\n      }\n      ");const o=`getUpdates(${Array.from({length:this.updatesRank},((t,e)=>`coords[${e}]`)).join(", ")})`;return`\n    ${i}\n      ${b("index")} {\n        if (index < uniforms.updatesSize) {\n          let coords = getUpdatesCoordsFromFlatIndex(index);\n          var flattenedIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexInside = i32(round(${e}));\n            flattenedIndex = flattenedIndex + indexInside * ${n};\n          }\n          let updateValue =\n              ${M(this.type)}(${o});\n          let flatIndex = getOutputIndexFromCoords(${r});\n\n          ${this.sumDupeIndices?f("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}\n        }\n      }`}}const ys={kernelName:i.ScatterNd,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{indices:o,updates:a}=e,{shape:s}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:h,outputSize:d}=i.backend_util.calculateShapes(a,o,s),f=[d/c,c];if(0===d)return n.makeTensorInfo(s,o.dtype);const p=Me({inputs:{x:o},backend:n,attrs:{shape:[l,u]}}),m=Me({inputs:{x:a},backend:n,attrs:{shape:[l,c]}}),g=m.dtype,v=Ee({backend:n,attrs:{shape:f,value:0,dtype:g}}),y=[{type:"int32",data:[u]},{type:"int32",data:h},{type:"int32",data:[i.util.sizeFromShape(m.shape)]}],b=new vs(m.shape,u,p.shape.length,m.shape.length,h,f,g),x=n.runWebGPUProgram(b,[m,p],g,y,v),w=Me({inputs:{x},backend:n,attrs:{shape:s}});return n.disposeData(p.dataId),n.disposeData(m.dataId),n.disposeData(x.dataId),w}};
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class bs{constructor(t,e){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=e,this.shaderKey=`search_sorted_${e}`}getUserCode(){return`\n      fn findBound(batch: i32, value: f32) -> i32 {\n        var left = i32(0);\n        var right = uniforms.numInputs;\n        while (left < right) {\n          var mid = (left + right) / 2;\n          if (getSortedSequence(batch, mid) ${"left"===this.side?"<":"<="} value) {\n            left = mid + 1;\n          } else {\n            right = mid;\n          }\n        }\n        return right;\n      }\n\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let value = getValuesByOutputIndex(index);\n          setOutputAtIndexI32(index, findBound(coords[0], value));\n        }\n      }\n    `}}const xs={kernelName:i.SearchSorted,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{sortedSequence:i,values:o}=e,{side:a}=r,s=new bs([o.shape[0],o.shape[1]],a),u=[{type:"int32",data:[i.shape[1]]}];return n.runWebGPUProgram(s,[i,o],"int32",u)}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ws{constructor(t,e,n){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=t,this.rank=n,this.shaderKey="select"}getUserCode(){let t,e;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(1===this.rank)e="resRC",t="resRC";else{const n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[],i=[];for(let t=0;t<this.outputShape.length;t++)i.push(`${n[t]}`),t<this.cRank&&r.push(`${n[t]}`);t=r.join(),e=i.join()}return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let cVal = getC(${t});\n          if (cVal >= 1.0) {\n            setOutputAtIndex(index, getA(${e}));\n          } else {\n            setOutputAtIndex(index, getB(${e}));\n          }\n        }\n      }\n    `}}const _s={kernelName:i.Select,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{condition:r,t:o,e:a}=e,s=new ws(r.shape.length,o.shape,o.shape.length);return n.runWebGPUProgram(s,[r,o,a],(0,i.upcastType)(o.dtype,a.dtype))}},Ss=ze({opType:yt.SELU}),Es={kernelName:i.Selu,backendName:"webgpu",kernelFunc:Ss},As=ze({opType:yt.SIGMOID}),Ms={kernelName:i.Sigmoid,backendName:"webgpu",kernelFunc:As},Cs=ze({opType:yt.SIGN}),Ts={kernelName:i.Sign,backendName:"webgpu",kernelFunc:Cs},ks=ze({opType:yt.SIN}),Is={kernelName:i.Sin,backendName:"webgpu",kernelFunc:ks},Ns=ze({opType:yt.SINH}),Ps={kernelName:i.Sinh,backendName:"webgpu",kernelFunc:Ns},Os=ze({opType:yt.SOFTPLUS}),Ls={kernelName:i.Softplus,backendName:"webgpu",kernelFunc:Os};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Rs{constructor(t,e,n,r,i,o){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const a=new Array(r.length);for(let t=0;t<a.length;t++)a[t]=r[i[t]];this.outputShape=a,this.newDim=i,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,this.paddedXShape=e,this.uniforms+=`reshapedPaddedXShape : ${v(r.length)}, paddedXShapeStrides : ${v(o)}, `,n.map(((t,e)=>{this.uniforms+=` pad${e} : vec2<i32>,`})),this.shaderKey=`spaceToBatchND_${i}`}getUserCode(){const t=v(this.outputShape.length),e=Ln(this.newDim);return`\n      ${S(this.paddedXShape,"PaddedX")}\n      ${b("index")} {\n        if(index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${t}(${e}), uniforms.reshapedPaddedXShape);\n          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);\n          ${Ba(this.xShape,!0)}\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ds={kernelName:i.SpaceToBatchND,backendName:"webgpu",kernelFunc:t=>{const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{blockShape:a,paddings:s}=r;i.util.assert(o.shape.length<=4,(()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet"));const u=a.reduce(((t,e)=>t*e)),l=[[0,0]];l.push(...s);for(let t=1+a.length;t<o.shape.length;++t)l.push([0,0]);const c=l.map(((t,e)=>t[0]+o.shape[e]+t[1])),h=i.backend_util.getReshaped(c,a,u,!1),d=i.backend_util.getPermuted(h.length,a.length,!1),f=i.backend_util.getReshapedPermuted(c,a,u,!1),p=i.util.computeStrides(c),m=new Rs(o.shape,c,l,h,d,p.length),g=[{type:"int32",data:h},{type:"int32",data:p}];l.map((t=>g.push({type:"int32",data:[t[0],t[1]]})));const v=n.runWebGPUProgram(m,[o],o.dtype,g),y=Me({inputs:{x:v},backend:n,attrs:{shape:f}});return n.disposeData(v.dataId),y}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class zs{constructor(t,e,n){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.type=n,this.dispatchLayout=L([e]),this.dispatch=I(this.dispatchLayout,[e],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.sparseSize) {\n        let indexInSegmentIds = index / uniforms.segmentSize;\n        let indexInSegment = index % uniforms.segmentSize;\n        let indexInInput = indices[indexInSegmentIds];\n        let segmentId = segmentIds[indexInSegmentIds];\n\n        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];\n        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;\n        ${f("&result[outIndex]","value",this.type)}\n      }\n    }\n  `}}class Fs{constructor(t,e){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[t],this.dispatchLayout=L(e),this.dispatch=I(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.segmentIdsShape) {\n        let segmentId = segmentIds[index];\n        ${f("&result[segmentId]","1","int32")}\n      }\n    }\n  `}}class Bs{constructor(t,e){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.type=e,this.dispatchLayout=L(t),this.dispatch=I(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.size) {\n        let segmentId = index / uniforms.segmentSize;\n        let count = sameSegmentIdCount[segmentId];\n        if (count != 0) {\n          ${"float32"===this.type?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}\n        }\n      }\n    }\n  `}}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Us(t,e,n,r=!1,o){const a=i.util.sizeFromShape(t.shape)/t.shape[0],s=t.dtype,u=i.util.sizeFromShape(e.shape),l=o.readSync(n.dataId),c=u>0?l[u-1]+1:0;let h;const d=t.shape.slice();d[0]=c;const f=u*a,p=Ee({backend:o,attrs:{shape:d,value:0,dtype:s}});h=new zs(d,f,s);let m=[{type:"int32",data:[a]},{type:"int32",data:[f]}];const g=o.runWebGPUProgram(h,[t,e,n],s,m,p);if(r)return g;const v=Ee({backend:o,attrs:{shape:[c],value:0,dtype:"int32"}});h=new Fs(c,n.shape);const y=o.runWebGPUProgram(h,[n],"int32",null,v),b=Ee({backend:o,attrs:{shape:d,value:0,dtype:s}});h=new Bs(d,s),m=[{type:"int32",data:[a]}];const x=o.runWebGPUProgram(h,[g,y],s,m,b);return o.disposeData(g.dataId),o.disposeData(y.dataId),x}const js={kernelName:i.SparseSegmentMean,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{data:r,indices:i,segmentIds:o}=e;return Us(r,i,o,!1,n)}};const Vs={kernelName:i.SparseSegmentSum,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n}=t,{data:r,indices:i,segmentIds:o}=e;return Us(r,i,o,!0,n)}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Hs{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t[r]*e[r];this.outputShape=n,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const t=function(t,e=""){if(t>=5)throw Error(`Tile for rank ${t} is not yet supported`);if(1===t)return`(resRC % ${e}aShape)`;const n=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[];for(let i=0;i<t;i++)r.push(`(${n[i]} % ${e}aShape[${i}])`);return r.join()}(this.rank,"uniforms.");return`\n      ${b("index")} {\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          setOutputAtIndex(index, getA(${t}));\n        }\n      }\n    `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gs(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{reps:a}=r;if(n.shouldExecuteOnCPU([o])||"string"===o.dtype||o.shape.length>=5){const t=n.readSync(o.dataId),e="string"===o.dtype?t.map((t=>i.util.decodeString(t))):t,r=(0,i.buffer)(o.shape,o.dtype,e),s=yn(r,a);return n.makeTensorInfo(s.shape,s.dtype,s.values)}const s=new Hs(o.shape,a);return n.runWebGPUProgram(s,[o],o.dtype)}const Ws={kernelName:i.Tile,backendName:"webgpu",kernelFunc:Gs};const Xs={kernelName:i.SparseToDense,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{sparseIndices:o,sparseValues:a,defaultValue:s}=e,{outputShape:u}=r,{sliceRank:l,numUpdates:c,sliceSize:h,strides:d,outputSize:f}=i.backend_util.calculateShapes(a,o,u),p=!1;if("string"===a.dtype){const t=n.bufferSync(o),e=n.bufferSync(a),r=i.util.decodeString(n.readSync(s.dataId)[0]),m=dn(t,e,u,f,h,c,l,d,r,p);return n.makeTensorInfo(u,m.dtype,m.values)}const m=[f/h,h],g=Me({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),v=a.shape.length?Me({inputs:{x:a},backend:n,attrs:{shape:[c,h]}}):Pe({inputs:{x:a},backend:n}),y=v.dtype,b=n.makeTensorInfo([],y,i.util.makeZerosTypedArray(1,y)),x=Me({inputs:{x:s},backend:n,attrs:{shape:Array(m.length).fill(1)}}),w=Gs({inputs:{x},backend:n,attrs:{reps:m}}),_=[{type:"int32",data:[l]},{type:"int32",data:d},{type:"int32",data:[i.util.sizeFromShape([c,h])]}];switch(c){case 0:break;case 1:{const t=new vs([c,h],l,g.shape.length,v.shape.length,d,m,y,p);n.runWebGPUProgram(t,[v,g],y,_,w)}break;default:{const t=new vs([c,h],l,g.shape.length,b.shape.length,d,m,y,p);n.runWebGPUProgram(t,[b,g],y,_,w)}{const t=new vs([c,h],l,g.shape.length,v.shape.length,d,m,y);n.runWebGPUProgram(t,[v,g],y,_,w)}}const S=Me({inputs:{x:w},backend:n,attrs:{shape:u}});return n.disposeData(g.dataId),n.disposeData(v.dataId),n.disposeData(x.dataId),n.disposeData(b.dataId),n.disposeData(w.dataId),S}};const Ys={kernelName:i.SplitV,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{numOrSizeSplits:a,axis:s}=r,u=i.util.parseAxisParam(s,o.shape)[0],l=i.backend_util.prepareSplitSize(o,a,u),c=o.shape.length,h=new Array(c).fill(0),d=o.shape.slice();return l.map((t=>{const e=[...d];e[u]=t;const r=yr({inputs:{x:o},backend:n,attrs:{begin:h,size:e}});return h[u]+=t,r}))}},qs=ze({opType:yt.SQRT}),$s={kernelName:i.Sqrt,backendName:"webgpu",kernelFunc:qs},Ks={kernelName:i.Square,backendName:"webgpu",kernelFunc:({inputs:t,backend:e})=>{const{x:n}=t,r=e,i=new De(n.shape,yt.SQUARE);return r.runWebGPUProgram(i,[n],n.dtype)}},Zs=Fe({opType:j.SQUARED_DIFFERENCE}),Qs={kernelName:i.SquaredDifference,backendName:"webgpu",kernelFunc:Zs};const Js={kernelName:i.Step,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function({inputs:t,attrs:e,backend:n}){const{x:r}=t,i=new De(r.shape,yt.STEP,"stepAlpha : f32,"),o=[{type:"float32",data:[e.alpha]}];return n.runWebGPUProgram(i,[r],r.dtype,o)}};
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class tu{constructor(t){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const e=v(this.outputShape.length);this.uniforms=`begin : ${e},  strides : ${e}, `,this.shaderKey="stridedSlice"}getUserCode(){let t="";if(1===this.outputShape.length)t="coords * uniforms.strides + uniforms.begin";else{let e=0;t=this.outputShape.map(((t,n)=>(e++,1===this.outputShape.length?`coords * uniforms.strides[${n}] + uniforms.begin[${n}]`:`coords[${e-1}] * uniforms.strides[${n}] + uniforms.begin[${n}]`))).join(",")}return`\n       ${b("index")} {\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index);\n           setOutputAtIndex(index, getX(${t}));\n         }\n       }\n     `}}const eu={kernelName:i.StridedSlice,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{begin:a,end:s,strides:u,beginMask:l,endMask:c,ellipsisMask:h,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:g,sliceDim0:v,isSimpleSlice:y,begin:b,end:x,strides:w}=i.slice_util.sliceInfo(o.shape,a,s,u,l,c,h,d,f);let _;if(g)_=Me({inputs:{x:o},backend:n,attrs:{shape:m}});else if(v||y){i.util.assert(o.shape.length>=1,(()=>`Input must have rank at least 1, got: ${o.shape.length}`));const t=i.slice_util.computeOutShape(b,x,w),e=yr({inputs:{x:o},backend:n,attrs:{begin:b,size:t}});_=Me({inputs:{x:e},backend:n,attrs:{shape:m}}),n.disposeData(e.dataId)}else{if(n.shouldExecuteOnCPU([o])){const t=n.readSync(o.dataId),e=(0,i.buffer)(o.shape,o.dtype,t),r=mn(p,e,w,b);_=n.makeTensorInfo(m,o.dtype,r.values)}else{const t=new tu(p),e=[{type:"int32",data:b},{type:"int32",data:w}],r=n.runWebGPUProgram(t,[o],o.dtype,e);_=Me({inputs:{x:r},backend:n,attrs:{shape:m}}),n.disposeData(r.dataId)}}return _}};const nu={kernelName:i.StringNGrams,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{separator:i,nGramWidths:o,leftPad:a,rightPad:s,padWidth:u,preserveShortSequences:l}=r,{data:c,dataSplits:h}=e,d=n.readSync(c.dataId),f=n.readSync(h.dataId),[p,m]=gn(d,f,i,o,a,s,u,l);return[n.makeTensorInfo([p.length],"string",p),n.makeTensorInfo(h.shape,"int32",m)]}},ru=Fe({opType:j.SUB,cpuKernelImpl:vn,supportsComplex:!0}),iu={kernelName:i.Sub,backendName:"webgpu",kernelFunc:ru},ou=ze({opType:yt.TAN}),au={kernelName:i.Tan,backendName:"webgpu",kernelFunc:ou},su=ze({opType:yt.TANH}),uu={kernelName:i.Tanh,backendName:"webgpu",kernelFunc:su};const lu={kernelName:i.TensorScatterUpdate,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{tensor:o,indices:a,updates:s}=e,{}=r,{sliceRank:u,numUpdates:l,sliceSize:c,strides:h,outputSize:d}=i.backend_util.calculateShapes(s,a,o.shape),f=[d/c,c];if(0===d)return n.makeTensorInfo(o.shape,a.dtype);const p=[],m=Me({inputs:{x:a},backend:n,attrs:{shape:[l,u]}});p.push(m);const g=Me({inputs:{x:s},backend:n,attrs:{shape:[l,c]}});p.push(g);const v=Me({inputs:{x:o},backend:n,attrs:{shape:f}});p.push(v);const y=Gs({inputs:{x:v},backend:n,attrs:{reps:Array(f.length).fill(1)}}),b=new vs([l,c],u,m.shape.length,g.shape.length,h,f,o.dtype,!1),x=[{type:"int32",data:[u]},{type:"int32",data:h},{type:"int32",data:[i.util.sizeFromShape([l,c])]}],w=n.runWebGPUProgram(b,[g,m],v.dtype,x,y);p.push(w);const _=Me({inputs:{x:w},backend:n,attrs:{shape:o.shape}});return p.forEach((t=>n.disposeData(t.dataId))),_}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class cu{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, negativeInf : f32,\n        dir : i32, inc : i32,",this.shaderKey="swap"}getUserCode(){return`\n        ${b("index")} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // We compare elements pair-wise within a group of size 2 * inc.\n            // The comparing rule for each group alternates between ascending\n            // and descending. Within each group, we compare each pair at\n            // positions i and i+inc. To decide whether an element at position i\n            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n            // inc, it is in the first half of the group, we denote it as x0,\n            // otherwise we denote it as x1.\n            // For example, as shown in the Bitonic top K paper referenced\n            // above, Figure5(a) shows that element[1] is in the second half of\n            // the group when group size is 2, but it is in the first half of\n            // the group when group size is 4.\n            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;\n            var i = 0;\n            if (isFirstInPair) {\n              i = elemIdx;\n            } else {\n              i = elemIdx - uniforms.inc;\n            }\n\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.inc;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.inc));\n            }\n\n            var x0 = f32(0.0);\n            var x1 = f32(0.0);\n            if (i0 < uniforms.inputSize) {\n              x0 = getX(batch, i0);\n            } else {\n              x0 = uniforms.negativeInf;\n            }\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = uniforms.negativeInf;\n            }\n\n            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;\n            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n            if (reverse == isGreater) {\n              // Elements in opposite order of direction\n              let iTemp = i0;\n              i0 = i1;\n              i1 = iTemp;\n            }\n            if (isFirstInPair) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `}}class hu{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`\n        ${b("index")} {\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // The output size is half of the previous size.\n            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _\n            // (k=4), we only need to output the indices at positions |, the\n            // indices at positions _ can be thrown away, see Figure5(b) After\n            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced\n            // above.\n            // For example, the paper shows we only need to output the orange\n            // bars. The output sequence should look like this | | | | | | | |.\n            // Because the sequence is halved, to map the output index back to\n            // the previous sequence to find the corresponding value, we need\n            // to double the index. When we double the index, we basically\n            // interpolate a position, so 2i looks like\n            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k\n            // position of each 2k positions by - elemIdx % k. E.g. for output\n            // at index 4,5,6,7, we want to get the corresponding element at\n            // original index 8,9,10,11, for output at index 8,9,10,11,\n            // we want to get the corresponding element at original index\n            // 16,17,18,19, so on and so forth.\n\n            var i = 0;\n            if (elemIdx < uniforms.k) {\n              i = elemIdx;\n            } else {\n              i = elemIdx * 2 - elemIdx % uniforms.k;\n            }\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.k;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.k));\n            }\n\n            let x0 = getX(batch, i0);\n            var x1 = f32(0.0);\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = x0;\n            }\n\n            if (x0 >= x1) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      `}}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function du(t,e){null!==e&&t.disposeData(e.dataId)}function fu(t){let e=1;for(;e<t;)e*=2;return e}const pu={kernelName:i.TopK,backendName:"webgpu",kernelFunc:function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o}=e,{k:a,sorted:s}=r,u=o.shape,l=u[u.length-1];if(n.shouldExecuteOnCPU([o])){const t=n.readSync(o.dataId),[e,r]=bn(t,u,o.dtype,a,s);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(r.shape,r.dtype,r.values)]}if(0===a)return u[u.length-1]=0,[n.makeTensorInfo(u,o.dtype,[]),n.makeTensorInfo(u,"int32",[])];if(1===l)return[o,Ee({attrs:{shape:u,dtype:"int32",value:0},backend:n})];const c=i.util.sizeFromShape(u)/l,h=Me({inputs:{x:o},attrs:{shape:[c,l]},backend:n}),d=fu(a),f=fu(l);let p=null;const m=()=>null===p?[h,h]:[h,p],g=(t,e,r)=>{const i=m(),o=new cu(r),a=[{type:"int32",data:[l]},{type:"int32",data:[null===p?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[t]},{type:"int32",data:[e]}],s=p;p=n.runWebGPUProgram(o,i,"int32",a),du(n,s)};for(let t=1;t<d;t*=2){const e=2*t;for(let n=t;n>=1;n/=2)g(e,n,[c,f])}for(let t=f;t>d;t/=2){const e=m(),r=new hu([c,t/2]),i=[{type:"int32",data:[l]},{type:"int32",data:[null===p?1:0]},{type:"int32",data:[d]}],o=p;p=n.runWebGPUProgram(r,e,"int32",i),du(n,o);const a=d/2,s=2*a;for(let t=a;t>=1;t/=2)g(s,t,p.shape)}let v=p;p=yr({inputs:{x:p},backend:n,attrs:{begin:0,size:[c,a]}}),du(n,v);let y=Co({inputs:{x:h,indices:p},backend:n,attrs:{axis:1,batchDims:1}});du(n,h);const b=u.slice(0,-1);b.push(a),v=p,p=Me({inputs:{x:p},attrs:{shape:b},backend:n}),du(n,v);const x=y;return y=Me({inputs:{x:y},attrs:{shape:b},backend:n}),du(n,x),[y,p]}};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class mu{constructor(t){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=L(this.outputShape),this.dispatch=I(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`\n          fn mapCoord(outCoord : f32, len : f32) -> f32{\n            var inCoord = outCoord;\n            if(uniforms.fillModeId == 2) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  if (inCoord < sz2) {\n                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +\n                    inCoord;\n                  }\n                  if (inCoord < -len) {\n                    inCoord = inCoord + sz2;\n                  } else {\n                    inCoord = -inCoord - 1.0;\n                  }\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));\n                  if (inCoord >= len) {\n                    inCoord = sz2 - inCoord - 1.0;\n                  }\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 3) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 4) {\n              return clamp(outCoord, 0.0, len - 1.0);\n            }\n            return outCoord;\n          }\n          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,\n            channel : i32) -> f32 {\n            var outputValue : f32;\n            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {\n                outputValue = getImage(batch, coordY, coordX, channel);\n            } else {\n              outputValue = uniforms.fillValue;\n            }\n            return outputValue;\n          }\n\n          ${b("index")} {\n            if (index < uniforms.size) {\n              let coords = getCoordsFromIndex(index);\n              var outputValue : f32;\n              let batch = coords[0];\n              let x = coords[2];\n              let y = coords[1];\n              let channel = coords[3];\n              let xf = f32(x);\n              let yf = f32(y);\n              let a1 = getTransforms(batch, 0);\n              let a2 = getTransforms(batch, 1);\n              let a3 = getTransforms(batch, 2);\n              let b1 = getTransforms(batch, 3);\n              let b2 = getTransforms(batch, 4);\n              let b3 = getTransforms(batch, 5);\n              let c1 = getTransforms(batch, 6);\n              let c2 = getTransforms(batch, 7);\n              let projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = uniforms.fillValue;\n              } else {\n                let inX = (a1 * xf + a2 * yf + a3) / projection;\n                let inY = (b1 * xf + b2 * yf + b3) / projection;\n                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));\n                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));\n\n                if (uniforms.interpolationModeId == 1) {\n                  let coordY = i32(round(mapY));\n                  let coordX = i32(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  let yFloor = floor(mapY);\n                  let xFloor = floor(mapX);\n                  let yCeil = yFloor + 1.0;\n                  let xCeil = xFloor + 1.0;\n                  let valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);\n                  let valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutputAtIndex(index, outputValue);\n            }\n          }\n        `}}const gu={kernelName:i.Transform,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{image:i,transforms:o}=e,{interpolation:a,fillMode:s,fillValue:u,outputShape:l}=r,[c,h,d,f]=i.shape,[p,m]=null!=l?l:[h,d],g=new mu([c,p,m,f]),v="nearest"===a?1:2;let y;switch(s){case"constant":default:y=1;break;case"reflect":y=2;break;case"wrap":y=3;break;case"nearest":y=4}const b=[{type:"int32",data:[v]},{type:"int32",data:[y]},{type:"float32",data:[u]}];return n.runWebGPUProgram(g,[i,o],"float32",b)}};const vu={kernelName:i.Unpack,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{value:i}=e;let{axis:o}=r;o<0&&(o+=i.shape.length);const a=i,s=a.shape.length,u=i.shape[o],l=new Array(s-1);let c=0;for(let t=0;t<s;t++)t!==o&&(l[c++]=a.shape[t]);const h=[],d=new Array(s).fill(0),f=a.shape.slice();f[o]=1;const p=new Array(u);for(let t=0;t<p.length;t++){d[o]=t;const e=yr({inputs:{x:a},backend:n,attrs:{begin:d,size:f}}),r=Me({inputs:{x:e},backend:n,attrs:{shape:l}});p[t]=r,h.push(e)}return h.forEach((t=>n.disposeData(t.dataId))),p}};
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class yu{constructor(t,e,n){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.dispatchLayout=L(t),this.dispatch=I(this.dispatchLayout,t,this.workgroupSize),"float32"!==n&&"int32"!==n)throw new Error(`UnsortedSegmentSum only supports float32 and int32\n              types, does not support ${n} type.`);this.type=n,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`\n    ${b("index")} {\n      if (index < uniforms.xSize) {\n        let coords = getXCoordsFromIndex(index);\n        let b = coords[0];\n        let inCol = coords[1];\n\n        let segmentId = i32(getSegmentIds(inCol));\n        if (segmentId >= 0) {\n          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;\n          let value = getX(b, inCol);\n\n          ${f("&result[flatIndex]","value",this.type)}\n        }\n      }\n    }\n  `}}const bu=[ke,Sn,An,Cn,kn,Nn,Un,jn,Hn,Gn,Xn,qn,Kn,Qn,tr,lr,cr,fr,pr,mr,xr,Sr,Ar,Ir,Pr,Rr,Re,Fr,Gr,Kr,ei,ri,oi,ai,si,li,hi,fi,bi,xi,wi,Si,Ii,Ni,Ci,Oi,Ri,Fi,Bi,ji,Xi,qi,$i,Zi,Ji,eo,ro,oo,uo,Ae,co,vo,fo,mo,wo,_o,So,Ao,To,Io,Po,Oe,Oo,jr,Ro,zo,Bo,Uo,Vo,Go,Xo,Ko,qo,Qo,ta,na,aa,ua,or,ca,ha,ga,da,ma,va,sr,ya,xa,_a,Ea,ka,Hi,Ia,Na,Pa,Cr,La,za,Fa,ja,Ha,Ga,Wa,Xa,kr,qa,Ka,Qa,ts,Ce,ns,is,as,us,cs,ds,ps,gs,ys,xs,_s,Es,Ms,Ts,Is,Ps,br,Js,eu,nu,Ta,Ls,Ds,js,Vs,Xs,Ys,$s,Ks,Qs,iu,Wi,au,uu,lu,Ws,pu,gu,Dn,vu,{kernelName:i.UnsortedSegmentSum,backendName:"webgpu",kernelFunc:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(t){const{inputs:e,backend:n,attrs:r}=t,{x:o,segmentIds:a}=e,{numSegments:s}=r,u=o.shape.length,l=[];let c=0;const h=i.backend_util.getAxesPermutation([c],u);let d=o;null!=h&&(d=Rn({inputs:{x:o},backend:n,attrs:{perm:h}}),l.push(d),c=i.backend_util.getInnerMostAxes(1,u)[0]);const f=i.backend_util.segment_util.computeOutShape(d.shape,c,s),p=i.util.sizeFromShape([d.shape[c]]),m=Me({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});l.push(m);const g=o.dtype,v=[m.shape[0],s],y=Ee({backend:n,attrs:{shape:v,value:0,dtype:g}}),b=new yu(m.shape,v,g),x=[{type:"int32",data:[s]},{type:"int32",data:[i.util.sizeFromShape(m.shape)]}],w=n.runWebGPUProgram(b,[m,a],g,x,y),_=Me({inputs:{x:w},backend:n,attrs:{shape:f}});l.push(w);let S=_;if(null!=h){l.push(_);const t=i.backend_util.getUndoAxesPermutation(h);S=Rn({inputs:{x:S},backend:n,attrs:{perm:t}})}return l.forEach((t=>n.disposeData(t.dataId))),S}},Da];for(const t of bu)(0,i.registerKernel)(t)}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,5805:(t,e,n)=>{"use strict";n.d(e,{ox:()=>Wt});var r={};n.r(r),n.d(r,{json:()=>R});var i={};n.r(i),n.d(i,{json:()=>D});var o={};n.r(o),n.d(o,{json:()=>z});var a={};n.r(a),n.d(a,{json:()=>F});var s={};n.r(s),n.d(s,{json:()=>B});var u={};n.r(u),n.d(u,{json:()=>U});var l={};n.r(l),n.d(l,{json:()=>j});var c={};n.r(c),n.d(c,{json:()=>V});var h={};n.r(h),n.d(h,{json:()=>H});var d={};n.r(d),n.d(d,{json:()=>G});var f={};n.r(f),n.d(f,{json:()=>W});var p={};n.r(p),n.d(p,{json:()=>X});var m={};n.r(m),n.d(m,{json:()=>Y});var g={};n.r(g),n.d(g,{json:()=>q});var v={};n.r(v),n.d(v,{json:()=>$});var y={};n.r(y),n.d(y,{json:()=>K});var b={};n.r(b),n.d(b,{json:()=>Z});var x={};n.r(x),n.d(x,{json:()=>Q});var w={};n.r(w),n.d(w,{json:()=>J});var _=n(86748);
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
var S,E;(0,_.env)().registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(t=>{t&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),function(t){t[t.DT_INVALID=0]="DT_INVALID",t[t.DT_FLOAT=1]="DT_FLOAT",t[t.DT_DOUBLE=2]="DT_DOUBLE",t[t.DT_INT32=3]="DT_INT32",t[t.DT_UINT8=4]="DT_UINT8",t[t.DT_INT16=5]="DT_INT16",t[t.DT_INT8=6]="DT_INT8",t[t.DT_STRING=7]="DT_STRING",t[t.DT_COMPLEX64=8]="DT_COMPLEX64",t[t.DT_INT64=9]="DT_INT64",t[t.DT_BOOL=10]="DT_BOOL",t[t.DT_QINT8=11]="DT_QINT8",t[t.DT_QUINT8=12]="DT_QUINT8",t[t.DT_QINT32=13]="DT_QINT32",t[t.DT_BFLOAT16=14]="DT_BFLOAT16",t[t.DT_QINT16=15]="DT_QINT16",t[t.DT_QUINT16=16]="DT_QUINT16",t[t.DT_UINT16=17]="DT_UINT16",t[t.DT_COMPLEX128=18]="DT_COMPLEX128",t[t.DT_HALF=19]="DT_HALF",t[t.DT_RESOURCE=20]="DT_RESOURCE",t[t.DT_VARIANT=21]="DT_VARIANT",t[t.DT_UINT32=22]="DT_UINT32",t[t.DT_UINT64=23]="DT_UINT64",t[t.DT_FLOAT_REF=101]="DT_FLOAT_REF",t[t.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",t[t.DT_INT32_REF=103]="DT_INT32_REF",t[t.DT_UINT8_REF=104]="DT_UINT8_REF",t[t.DT_INT16_REF=105]="DT_INT16_REF",t[t.DT_INT8_REF=106]="DT_INT8_REF",t[t.DT_STRING_REF=107]="DT_STRING_REF",t[t.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",t[t.DT_INT64_REF=109]="DT_INT64_REF",t[t.DT_BOOL_REF=110]="DT_BOOL_REF",t[t.DT_QINT8_REF=111]="DT_QINT8_REF",t[t.DT_QUINT8_REF=112]="DT_QUINT8_REF",t[t.DT_QINT32_REF=113]="DT_QINT32_REF",t[t.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",t[t.DT_QINT16_REF=115]="DT_QINT16_REF",t[t.DT_QUINT16_REF=116]="DT_QUINT16_REF",t[t.DT_UINT16_REF=117]="DT_UINT16_REF",t[t.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",t[t.DT_HALF_REF=119]="DT_HALF_REF",t[t.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",t[t.DT_VARIANT_REF=121]="DT_VARIANT_REF",t[t.DT_UINT32_REF=122]="DT_UINT32_REF",t[t.DT_UINT64_REF=123]="DT_UINT64_REF"}(S||(S={})),function(t){let e;!function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"}(e=t.CheckpointFormatVersion||(t.CheckpointFormatVersion={}))}(E||(E={}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const A={};function M(t){return A[t]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function C(t,e,n,r,i){const o=e.inputParams[t];if(o&&void 0!==o.inputIndexStart){const t=o.inputIndexStart,a=0===o.inputIndexEnd?void 0:void 0===o.inputIndexEnd?t+1:o.inputIndexEnd,s=t<0?e.inputNames.length+t:t;if("tensor"===o.type)return T(e.inputNames[s],n,r,i);if("tensors"===o.type){const o=e.inputs.slice(t,a);return e.inputNames.slice(t,a).filter(((t,e)=>{var n;return"NoOp"!==(null===(n=o[e])||void 0===n?void 0:n.op)})).map((t=>T(t,n,r,i)))}const u=T(e.inputNames[s],n,r,i),l=u.dataSync();return"number"===o.type?l[0]:_.util.toNestedArray(u.shape,l)}const a=e.attrParams[t];return a&&a.value}function T(t,e,n,r){const[i,o]=P(t,n);if(null!=r){const t=r.getHashTableHandleByName(i);if(null!=t)return t}const a=n.currentContextIds.find((t=>!!e[N(i,t)]));return void 0!==a?e[N(i,a)][o]:void 0}function k(t,e,n){return e[N(t,n.currentContextId)]}function I(t,e){const[n,r,i]=P(t,e);return[N(n,e&&e.currentContextId),r,i]}function N(t,e){return e?`${t}-${e}`:t}function P(t,e){if(""===t)return["",0,void 0];const n=null!=e&&null!=e.parseNodeNameCache;if(n){const n=e.parseNodeNameCache.get(t);if(null!=n)return n}const r=t.split(":");let i;if(1===r.length)i=[t,0,void 0];else{const t=r[0],e=3===r.length?r[1]:void 0;i=[t,Number(r[r.length-1]),e]}return n&&e.parseNodeNameCache.set(t,i),i}function O(t,e,n){let r=C("pad",t,e,n);if("explicit"===r){r=C("explicitPaddings",t,e,n);const i=[[0,0],[0,0],[0,0],[0,0]];for(let t=0;t<4;t++)i[t][0]=r[2*t],i[t][1]=r[2*t+1];return i}return r}function L(t){return t.kept?t:(0,_.clone)(t)}
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const R=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],D=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],z=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}],F=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}],B=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}],U=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}],j=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}],V=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}],H=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],G=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}],W=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}],X=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}],Y=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}],q=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}],$=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}],K=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}],Z=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}],Q=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}],J=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class tt{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const t=[].concat(...[r,i,o,a,s,u,l,c,h,d,f,p,m,g,v,y,b,x,w].map((t=>t.json)));this.opMappers=t.reduce(((t,e)=>(t[e.tfOpName]=e,t)),{})}transformGraph(t,e={}){const n=t.node,r=[],i=[],o=[],a=n.reduce(((t,e)=>(t[e.name]=this.mapNode(e),e.op.startsWith("Placeholder")?r.push(t[e.name]):"Const"===e.op?i.push(t[e.name]):null!=e.input&&0!==e.input.length||o.push(t[e.name]),t)),{});let s=[];const u=[];let l={},c={};null!=e&&(l=this.mapSignatureEntries(e.inputs),c=this.mapSignatureEntries(e.outputs));const h=Object.keys(a);h.forEach((t=>{const e=a[t];e.inputNames.forEach(((t,n)=>{const[r,,i]=I(t),o=a[r];if(null!=o.outputs){const t=o.outputs.indexOf(i);if(-1!==t){const i=`${r}:${t}`;e.inputNames[n]=i}}e.inputs.push(o),o.children.push(e)}))})),0===Object.keys(c).length?h.forEach((t=>{const e=a[t];0===e.children.length&&u.push(e)})):Object.keys(c).forEach((t=>{const[e]=I(t),n=a[e];null!=n&&(n.signatureKey=c[t],u.push(n))})),Object.keys(l).length>0?Object.keys(l).forEach((t=>{const[e]=I(t),n=a[e];n&&(n.signatureKey=l[t],s.push(n))})):s=r;let d={};null!=t.library&&null!=t.library.function&&(d=t.library.function.reduce(((t,e)=>(t[e.signature.name]=this.mapFunction(e),t)),{}));const f={nodes:a,inputs:s,outputs:u,weights:i,placeholders:r,signature:e,functions:d};return o.length>0&&(f.initNodes=o),f}mapSignatureEntries(t){return Object.keys(t||{}).reduce(((e,n)=>(e[t[n].name]=n,e)),{})}mapNode(t){const e=M(t.op)||this.opMappers[t.op]||{};null==t.attr&&(t.attr={});const n={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map((t=>t.startsWith("^")?t.slice(1):t)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return null!=e.inputs&&(n.inputParams=e.inputs.reduce(((t,e)=>(t[e.name]={type:e.type,inputIndexStart:e.start,inputIndexEnd:e.end},t)),{})),null!=e.attrs&&(n.attrParams=e.attrs.reduce(((e,n)=>{const r=n.type;let i;switch(n.type){case"string":i=nt(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=nt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":i=dt(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=dt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":i=it(t.attr,n.tfName,n.defaultValue||0),void 0===i&&n.tfDeprecatedName&&(i=it(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":i=ht(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=ht(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":i=rt(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=rt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":i=pt(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=pt(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":i=ct(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=ct(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":i=ft(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=ft(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":i=st(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=st(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":i=ut(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=ut(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":i=at(t.attr,n.tfName,n.defaultValue),void 0===i&&n.tfDeprecatedName&&(i=at(t.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${t.op}`)}return e[n.name]={value:i,type:r},e}),{})),n}mapFunction(t){const e=t.nodeDef,n=[];let r={};null!=e&&(r=e.reduce(((t,e)=>(t[e.name]=this.mapNode(e),"Const"===e.op&&n.push(t[e.name]),t)),{}));const i=[],o=[];t.signature.inputArg.forEach((t=>{const[e]=I(t.name),n={name:e,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ot(t.type),type:"dtype"}},children:[]};n.signatureKey=t.name,i.push(n),r[e]=n}));Object.keys(r).forEach((t=>{const e=r[t];e.inputNames.forEach(((t,n)=>{const[i,,o]=I(t),a=r[i];if(null!=a.outputs){const t=a.outputs.indexOf(o);if(-1!==t){const r=`${i}:${t}`;e.inputNames[n]=r}}e.inputs.push(a),a.children.push(e)}))}));const a=t.ret;t.signature.outputArg.forEach((t=>{const[e,n]=I(a[t.name]),i=r[e];null!=i&&(i.defaultOutput=n,o.push(i))}));const s=this.mapArgsToSignature(t);return{nodes:r,inputs:i,outputs:o,weights:n,placeholders:[],signature:s}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce(((t,e)=>(t[e.name]=this.mapArgToTensorInfo(e),t)),{}),outputs:t.signature.outputArg.reduce(((e,n)=>(e[n.name]=this.mapArgToTensorInfo(n,t.ret),e)),{})}}mapArgToTensorInfo(t,e){let n=t.name;return null!=e&&(n=e[n]),{name:n,dtype:t.type}}}function et(t,e){const n=Array.isArray(t)?String.fromCharCode.apply(null,t):function(t){const e=(0,_.env)().global;if(void 0!==e.atob)return e.atob(t);if("undefined"!=typeof Buffer)return new Buffer(t,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(t);return e?n:n.toLowerCase()}function nt(t,e,n,r=!1){const i=t[e];return null!=i?et(i.s,r):n}function rt(t,e,n){const r=t[e];return r?r.b:n}function it(t,e,n){const r=t[e]||{},i=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof i?i:parseInt(i,10)}function ot(t){switch("string"==typeof t&&(t=S[t]),t){case S.DT_FLOAT:case S.DT_HALF:return"float32";case S.DT_INT32:case S.DT_INT64:case S.DT_INT8:case S.DT_UINT8:return"int32";case S.DT_BOOL:return"bool";case S.DT_DOUBLE:return"float32";case S.DT_STRING:return"string";case S.DT_COMPLEX64:case S.DT_COMPLEX128:return"complex64";default:return null}}function at(t,e,n){const r=t[e];return r&&r.func?r.func.name:n}function st(t,e,n){const r=t[e];return r&&r.type?ot(r.type):n}function ut(t,e,n){const r=t[e];return r&&r.list&&r.list.type?r.list.type.map((t=>ot(t))):n}function lt(t){if(!t.unknownRank)return null!=t.dim?t.dim.map((t=>"number"==typeof t.size?t.size:parseInt(t.size,10))):[]}function ct(t,e,n){const r=t[e];return r&&r.shape?lt(r.shape):n}function ht(t,e,n){const r=t[e];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map((t=>"number"==typeof t?t:parseInt(t,10))):n}function dt(t,e,n,r=!1){const i=t[e];return i&&i.list&&i.list.s?i.list.s.map((t=>et(t,r))):n}function ft(t,e,n){const r=t[e];return r&&r.list&&r.list.shape?r.list.shape.map((t=>lt(t))):n}function pt(t,e,n){const r=t[e];return r&&r.list&&r.list.b?r.list.b:n}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class mt{constructor(t,e,n){this.node=t,this.tensorMap=e,this.context=n,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map((t=>this.getInput(t))),null!=t.rawAttrs&&(this.attrs=Object.keys(t.rawAttrs).reduce(((t,e)=>(t[e]=this.getAttr(e),t)),{}))}getInput(t){return T(t,this.tensorMap,this.context)}getAttr(t,e){const n=this.node.rawAttrs[t];if(null!=n.tensor)return T(t,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return it(this.node.rawAttrs,t,e);if(null!=n.s)return nt(this.node.rawAttrs,t,e);if(null!=n.b)return rt(this.node.rawAttrs,t,e);if(null!=n.shape)return ct(this.node.rawAttrs,t,e);if(null!=n.type)return st(this.node.rawAttrs,t,e);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return ht(this.node.rawAttrs,t,e);if(null!=n.list.s)return dt(this.node.rawAttrs,t,e);if(null!=n.list.shape)return ft(this.node.rawAttrs,t,e);if(null!=n.list.b)return pt(this.node.rawAttrs,t,e);if(null!=n.list.type)return ut(this.node.rawAttrs,t,e)}return e}}var gt=n(9951);
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vt(t,e,n=""){if("number"!=typeof t&&"number"!=typeof e){_.util.assert(t.length===e.length,(()=>n+` Shapes ${t} and ${e} must match`));for(let r=0;r<t.length;r++){const i=t[r],o=e[r];_.util.assert(i<0||o<0||i===o,(()=>n+` Shapes ${t} and ${e} must match`))}}}function yt(t){return"number"!=typeof t&&!t.some((t=>t<0))}function bt(t,e,n){let r=xt(t,n);const i=!yt(r);if(i&&0===e.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(i&&e.forEach((t=>{r=xt(t.shape,r)})),!yt(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function xt(t,e){if("number"==typeof t)return e;if("number"==typeof e)return t;if(t.length!==e.length)throw new Error(`Incompatible ranks during merge: ${t} vs. ${e}`);const n=[];for(let r=0;r<t.length;++r){const i=t[r],o=e[r];if(i>=0&&o>=0&&i!==o)throw new Error(`Incompatible shape during merge: ${t} vs. ${e}`);n[r]=i>=0?i:o}return n}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class wt{constructor(t,e,n,r,i,o,a){this.name=t,this.dtype=e,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=i,this.dynamicSize=o,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=(0,_.scalar)(0),(0,_.keep)(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach((e=>{null!=t&&t.has(e.tensor.id)||e.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);const e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map((t=>this.read(t)))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},\n          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=e.shape),vt(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);n.tensor=e,(0,_.keep)(e),n.written=!0,this.tensors[t]=n}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach(((t,n)=>this.write(t,e[n])))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let e=0;e<this.size();e++)t.push(e)}if(0===t.length)return(0,_.tensor)([],[0].concat(this.elementShape));const n=this.readMany(t);return vt(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),(0,_.stack)(n,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(0===this.size())return(0,_.tensor)([],[0].concat(this.elementShape));const e=[];for(let t=0;t<this.size();t++)e.push(t);const n=this.readMany(e);return vt(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),(0,_.concat)(n,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const n=Math.max(...t);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(t,(0,_.unstack)(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let n=0;const r=t.map((t=>(n+=t,n)));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);const i=0===n?0:e.size/n,o=[];(0,_.tidy)((()=>{e=(0,_.reshape)(e,[1,n,i]);for(let n=0;n<t.length;++n){const a=[0,0===n?0:r[n-1],0],s=[1,t[n],i];o[n]=(0,_.reshape)((0,_.slice)(e,a,s),this.elementShape)}return o}));const a=[];for(let e=0;e<t.length;e++)a[e]=e;this.writeMany(a,o)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Et(t,e,n){const[r,i]=C("fusedOps",t,e,n),o="biasadd"===r,a=!o,s="prelu"===i,u="fusedbatchnorm"===r,l=C("numArgs",t,e,n);if(o){if(s&&2!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!s&&o&&1!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=C("strides",t,e,n),h=O(t,e,n),d=C("dataFormat",t,e,n).toUpperCase(),f=C("dilations",t,e,n);let[p,m]=C("args",t,e,n);a&&(m=p,p=void 0);return{stride:c,pad:h,dataFormat:d,dilations:f,biasArg:p,preluArg:m,activationFunc:i,leakyreluAlpha:C("leakyreluAlpha",t,e,n)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 *