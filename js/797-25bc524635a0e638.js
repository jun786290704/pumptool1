"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{43203:function(e,t,n){let r=n(23663),o=n(37355),i=n(32109);class u{constructor(e){this.payer=e}static local(){let e=n(49079);if(!e.env.ANCHOR_WALLET||""===e.env.ANCHOR_WALLET)throw Error("expected environment variable `ANCHOR_WALLET` is not set.");return new u(o.Keypair.fromSecretKey(r.Buffer.from(JSON.parse(n(66793).readFileSync(e.env.ANCHOR_WALLET,{encoding:"utf-8"})))))}async signTransaction(e){return(0,i.isVersionedTransaction)(e)?e.sign([this.payer]):e.partialSign(this.payer),e}async signAllTransactions(e){return e.map(e=>((0,i.isVersionedTransaction)(e)?e.sign([this.payer]):e.partialSign(this.payer),e))}get publicKey(){return this.payer.publicKey}}t.Z=u},32109:function(e,t,n){var r,o=n(49079);Object.defineProperty(t,"__esModule",{value:!0}),t.isVersionedTransaction=t.chunks=t.isBrowser=void 0,t.isBrowser=o.env.ANCHOR_BROWSER||"undefined"!=typeof window&&!(null===(r=window.process)||void 0===r?void 0:r.hasOwnProperty("type")),t.chunks=function(e,t){return Array.apply(0,Array(Math.ceil(e.length/t))).map((n,r)=>e.slice(r*t,(r+1)*t))},t.isVersionedTransaction=e=>"version"in e},26582:function(e){let t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,u=RegExp("^"+i.source),a=RegExp(i.source+o.source,"gu"),s=RegExp("\\d+"+o.source,"gu"),l=(e,r,o)=>{let i=!1,u=!1,a=!1;for(let s=0;s<e.length;s++){let l=e[s];i&&t.test(l)?(e=e.slice(0,s)+"-"+e.slice(s),i=!1,a=u,u=!0,s++):u&&a&&n.test(l)?(e=e.slice(0,s-1)+"-"+e.slice(s-1),a=u,u=!1,i=!0):(i=r(l)===l&&o(l)!==l,a=u,u=o(l)===l&&r(l)!==l)}return e},c=(e,t)=>(r.lastIndex=0,e.replace(r,e=>t(e))),f=(e,t)=>(a.lastIndex=0,s.lastIndex=0,e.replace(a,(e,n)=>t(n)).replace(s,e=>t(e))),d=(e,t)=>{if(!("string"==typeof e||Array.isArray(e)))throw TypeError("Expected the input to be `string | string[]`");if(t={pascalCase:!1,preserveConsecutiveUppercase:!1,...t},0===(e=Array.isArray(e)?e.map(e=>e.trim()).filter(e=>e.length).join("-"):e.trim()).length)return"";let n=!1===t.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(t.locale),r=!1===t.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(t.locale);return 1===e.length?t.pascalCase?r(e):n(e):(e!==n(e)&&(e=l(e,n,r)),e=e.replace(u,""),e=t.preserveConsecutiveUppercase?c(e,n):n(e),t.pascalCase&&(e=r(e.charAt(0))+e.slice(1)),f(e,r))};e.exports=d,e.exports.default=d},35634:function(e,t,n){var r=n(23663).Buffer,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.map=t.array=t.rustEnum=t.str=t.vecU8=t.tagged=t.vec=t.bool=t.option=t.publicKey=t.i256=t.u256=t.i128=t.u128=t.i64=t.u64=t.struct=t.f64=t.f32=t.i32=t.u32=t.i16=t.u16=t.i8=t.u8=void 0;let i=n(49257),u=n(37355),a=o(n(34108));var s=n(49257);Object.defineProperty(t,"u8",{enumerable:!0,get:function(){return s.u8}}),Object.defineProperty(t,"i8",{enumerable:!0,get:function(){return s.s8}}),Object.defineProperty(t,"u16",{enumerable:!0,get:function(){return s.u16}}),Object.defineProperty(t,"i16",{enumerable:!0,get:function(){return s.s16}}),Object.defineProperty(t,"u32",{enumerable:!0,get:function(){return s.u32}}),Object.defineProperty(t,"i32",{enumerable:!0,get:function(){return s.s32}}),Object.defineProperty(t,"f32",{enumerable:!0,get:function(){return s.f32}}),Object.defineProperty(t,"f64",{enumerable:!0,get:function(){return s.f64}}),Object.defineProperty(t,"struct",{enumerable:!0,get:function(){return s.struct}});class l extends i.Layout{constructor(e,t,n){super(e,n),this.blob=(0,i.blob)(e),this.signed=t}decode(e,t=0){let n=new a.default(this.blob.decode(e,t),10,"le");return this.signed?n.fromTwos(8*this.span).clone():n}encode(e,t,n=0){return this.signed&&(e=e.toTwos(8*this.span)),this.blob.encode(e.toArrayLike(r,"le",this.span),t,n)}}function c(e){return new l(8,!1,e)}t.u64=c,t.i64=function(e){return new l(8,!0,e)},t.u128=function(e){return new l(16,!1,e)},t.i128=function(e){return new l(16,!0,e)},t.u256=function(e){return new l(32,!1,e)},t.i256=function(e){return new l(32,!0,e)};class f extends i.Layout{constructor(e,t,n,r){super(e.span,r),this.layout=e,this.decoder=t,this.encoder=n}decode(e,t){return this.decoder(this.layout.decode(e,t))}encode(e,t,n){return this.layout.encode(this.encoder(e),t,n)}getSpan(e,t){return this.layout.getSpan(e,t)}}t.publicKey=function(e){return new f((0,i.blob)(32),e=>new u.PublicKey(e),e=>e.toBuffer(),e)};class d extends i.Layout{constructor(e,t){super(-1,t),this.layout=e,this.discriminator=(0,i.u8)()}encode(e,t,n=0){return null==e?this.discriminator.encode(0,t,n):(this.discriminator.encode(1,t,n),this.layout.encode(e,t,n+1)+1)}decode(e,t=0){let n=this.discriminator.decode(e,t);if(0===n)return null;if(1===n)return this.layout.decode(e,t+1);throw Error("Invalid option "+this.property)}getSpan(e,t=0){let n=this.discriminator.decode(e,t);if(0===n)return 1;if(1===n)return this.layout.getSpan(e,t+1)+1;throw Error("Invalid option "+this.property)}}function p(e){if(0===e)return!1;if(1===e)return!0;throw Error("Invalid bool: "+e)}function m(e){return e?1:0}function v(e){let t=(0,i.u32)("length");return new f((0,i.struct)([t,(0,i.blob)((0,i.offset)(t,-t.span),"data")]),({data:e})=>e,e=>({data:e}),e)}t.option=function(e,t){return new d(e,t)},t.bool=function(e){return new f((0,i.u8)(),p,m,e)},t.vec=function(e,t){let n=(0,i.u32)("length");return new f((0,i.struct)([n,(0,i.seq)(e,(0,i.offset)(n,-n.span),"values")]),({values:e})=>e,e=>({values:e}),t)},t.tagged=function(e,t,n){return new f((0,i.struct)([c("tag"),t.replicate("data")]),function({tag:t,data:n}){if(!t.eq(e))throw Error("Invalid tag, expected: "+e.toString("hex")+", got: "+t.toString("hex"));return n},t=>({tag:e,data:t}),n)},t.vecU8=v,t.str=function(e){return new f(v(),e=>e.toString("utf-8"),e=>r.from(e,"utf-8"),e)},t.rustEnum=function(e,t,n){let r=(0,i.union)(null!=n?n:(0,i.u8)(),t);return e.forEach((e,t)=>r.addVariant(t,e,e.property)),r},t.array=function(e,t,n){return new f((0,i.struct)([(0,i.seq)(e,t,"values")]),({values:e})=>e,e=>({values:e}),n)};class y extends i.Layout{constructor(e,t,n){super(e.span+t.span,n),this.keyLayout=e,this.valueLayout=t}decode(e,t){return t=t||0,[this.keyLayout.decode(e,t),this.valueLayout.decode(e,t+this.keyLayout.getSpan(e,t))]}encode(e,t,n){n=n||0;let r=this.keyLayout.encode(e[0],t,n),o=this.valueLayout.encode(e[1],t,n+r);return r+o}getSpan(e,t){return this.keyLayout.getSpan(e,t)+this.valueLayout.getSpan(e,t)}}t.map=function(e,t,n){let r=(0,i.u32)("length");return new f((0,i.struct)([r,(0,i.seq)(new y(e,t),(0,i.offset)(r,-r.span),"values")]),({values:e})=>new Map(e),e=>({values:Array.from(e.entries())}),n)}},66806:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(70843).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},46457:function(e,t,n){n.d(t,{VY:function(){return eu},aV:function(){return eo},fC:function(){return er},xz:function(){return ei}});var r=n(2265),o=n.t(r,2);function i(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var u=n(57437);function a(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),a=n.length;function s(t){let{scope:n,children:o,...s}=t,l=n?.[e][a]||i,c=r.useMemo(()=>s,Object.values(s));return(0,u.jsx)(l.Provider,{value:c,children:o})}return n=[...n,o],s.displayName=t+"Provider",[s,function(n,u){let s=u?.[e][a]||i,l=r.useContext(s);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}function s(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return r.useCallback(s(...e),e)}var c=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),a=i.find(p);if(a){let e=a.props.children,n=i.map(t=>t!==a?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,u.jsx)(f,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,u.jsx)(f,{...o,ref:t,children:n})});c.displayName="Slot";var f=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,i;let u=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?s(t,u):u})}return r.Children.count(n)>1?r.Children.only(null):null});f.displayName="SlotClone";var d=({children:e})=>(0,u.jsx)(u.Fragment,{children:e});function p(e){return r.isValidElement(e)&&e.type===d}var m=globalThis?.document?r.useLayoutEffect:()=>{},v=o["useId".toString()]||(()=>void 0),y=0;function h(e){let[t,n]=r.useState(v());return m(()=>{e||n(e=>e??String(y++))},[e]),e||(t?`radix-${t}`:"")}var g=n(54887),b=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?c:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function w(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}function x({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),u=w(t);return r.useEffect(()=>{i.current!==o&&(u(o),i.current=o)},[o,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,a=u?e:o,s=w(n);return[a,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else i(t)},[u,e,i,s])]}var R=r.createContext(void 0);function E(e){let t=r.useContext(R);return e||t||"ltr"}var N="rovingFocusGroup.onEntryFocus",C={bubbles:!1,cancelable:!0},A="RovingFocusGroup",[L,O,S]=function(e){let t=e+"CollectionProvider",[n,o]=a(t),[i,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),f=e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return(0,u.jsx)(i,{scope:t,itemMap:a,collectionRef:o,children:n})};f.displayName=t;let d=e+"CollectionSlot",p=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=l(t,s(d,n).collectionRef);return(0,u.jsx)(c,{ref:o,children:r})});p.displayName=d;let m=e+"CollectionItemSlot",v="data-radix-collection-item",y=r.forwardRef((e,t)=>{let{scope:n,children:o,...i}=e,a=r.useRef(null),f=l(t,a),d=s(m,n);return r.useEffect(()=>(d.itemMap.set(a,{ref:a,...i}),()=>void d.itemMap.delete(a))),(0,u.jsx)(c,{[v]:"",ref:f,children:o})});return y.displayName=m,[{Provider:f,Slot:p,ItemSlot:y},function(t){let n=s(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}(A),[T,j]=a(A,[S]),[I,M]=T(A),_=r.forwardRef((e,t)=>(0,u.jsx)(L.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(L.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(P,{...e,ref:t})})}));_.displayName=A;var P=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:o,loop:a=!1,dir:s,currentTabStopId:c,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:d,onEntryFocus:p,preventScrollOnEntryFocus:m=!1,...v}=e,y=r.useRef(null),h=l(t,y),g=E(s),[R=null,A]=x({prop:c,defaultProp:f,onChange:d}),[L,S]=r.useState(!1),T=w(p),j=O(n),M=r.useRef(!1),[_,P]=r.useState(0);return r.useEffect(()=>{let e=y.current;if(e)return e.addEventListener(N,T),()=>e.removeEventListener(N,T)},[T]),(0,u.jsx)(I,{scope:n,orientation:o,dir:g,loop:a,currentTabStopId:R,onItemFocus:r.useCallback(e=>A(e),[A]),onItemShiftTab:r.useCallback(()=>S(!0),[]),onFocusableItemAdd:r.useCallback(()=>P(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>P(e=>e-1),[]),children:(0,u.jsx)(b.div,{tabIndex:L||0===_?-1:0,"data-orientation":o,...v,ref:h,style:{outline:"none",...e.style},onMouseDown:i(e.onMouseDown,()=>{M.current=!0}),onFocus:i(e.onFocus,e=>{let t=!M.current;if(e.target===e.currentTarget&&t&&!L){let t=new CustomEvent(N,C);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=j().filter(e=>e.focusable);U([e.find(e=>e.active),e.find(e=>e.id===R),...e].filter(Boolean).map(e=>e.ref.current),m)}}M.current=!1}),onBlur:i(e.onBlur,()=>S(!1))})})}),k="RovingFocusGroupItem",D=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:o=!0,active:a=!1,tabStopId:s,...l}=e,c=h(),f=s||c,d=M(k,n),p=d.currentTabStopId===f,m=O(n),{onFocusableItemAdd:v,onFocusableItemRemove:y}=d;return r.useEffect(()=>{if(o)return v(),()=>y()},[o,v,y]),(0,u.jsx)(L.ItemSlot,{scope:n,id:f,focusable:o,active:a,children:(0,u.jsx)(b.span,{tabIndex:p?0:-1,"data-orientation":d.orientation,...l,ref:t,onMouseDown:i(e.onMouseDown,e=>{o?d.onItemFocus(f):e.preventDefault()}),onFocus:i(e.onFocus,()=>d.onItemFocus(f)),onKeyDown:i(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){d.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return F[o]}(e,d.orientation,d.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=m().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let i=o.indexOf(e.currentTarget);o=d.loop?(n=o,r=i+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(i+1)}setTimeout(()=>U(o))}})})})});D.displayName=k;var F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function U(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var K=e=>{var t,n;let o,i;let{present:u,children:a}=e,s=function(e){var t,n;let[o,i]=r.useState(),u=r.useRef({}),a=r.useRef(e),s=r.useRef("none"),[l,c]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=V(u.current);s.current="mounted"===l?e:"none"},[l]),m(()=>{let t=u.current,n=a.current;if(n!==e){let r=s.current,o=V(t);e?c("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),a.current=e}},[e,c]),m(()=>{if(o){let e=e=>{let t=V(u.current).includes(e.animationName);e.target===o&&t&&g.flushSync(()=>c("ANIMATION_END"))},t=e=>{e.target===o&&(s.current=V(u.current))};return o.addEventListener("animationstart",t),o.addEventListener("animationcancel",e),o.addEventListener("animationend",e),()=>{o.removeEventListener("animationstart",t),o.removeEventListener("animationcancel",e),o.removeEventListener("animationend",e)}}c("ANIMATION_END")},[o,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),i(e)},[])}}(u),c="function"==typeof a?a({present:s.isPresent}):r.Children.only(a),f=l(s.ref,(o=null===(t=Object.getOwnPropertyDescriptor(c.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in o&&o.isReactWarning?c.ref:(o=null===(n=Object.getOwnPropertyDescriptor(c,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in o&&o.isReactWarning?c.props.ref:c.props.ref||c.ref);return"function"==typeof a||s.isPresent?r.cloneElement(c,{ref:f}):null};function V(e){return(null==e?void 0:e.animationName)||"none"}K.displayName="Presence";var W="Tabs",[B,$]=a(W,[j]),H=j(),[q,G]=B(W),Z=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",dir:s,activationMode:l="automatic",...c}=e,f=E(s),[d,p]=x({prop:r,onChange:o,defaultProp:i});return(0,u.jsx)(q,{scope:n,baseId:h(),value:d,onValueChange:p,orientation:a,dir:f,activationMode:l,children:(0,u.jsx)(b.div,{dir:f,"data-orientation":a,...c,ref:t})})});Z.displayName=W;var z="TabsList",J=r.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...o}=e,i=G(z,n),a=H(n);return(0,u.jsx)(_,{asChild:!0,...a,orientation:i.orientation,dir:i.dir,loop:r,children:(0,u.jsx)(b.div,{role:"tablist","aria-orientation":i.orientation,...o,ref:t})})});J.displayName=z;var Y="TabsTrigger",Q=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:o=!1,...a}=e,s=G(Y,n),l=H(n),c=et(s.baseId,r),f=en(s.baseId,r),d=r===s.value;return(0,u.jsx)(D,{asChild:!0,...l,focusable:!o,active:d,children:(0,u.jsx)(b.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":f,"data-state":d?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:c,...a,ref:t,onMouseDown:i(e.onMouseDown,e=>{o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(r)}),onKeyDown:i(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(r)}),onFocus:i(e.onFocus,()=>{let e="manual"!==s.activationMode;d||o||!e||s.onValueChange(r)})})})});Q.displayName=Y;var X="TabsContent",ee=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:o,forceMount:i,children:a,...s}=e,l=G(X,n),c=et(l.baseId,o),f=en(l.baseId,o),d=o===l.value,p=r.useRef(d);return r.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.jsx)(K,{present:i||d,children:n=>{let{present:r}=n;return(0,u.jsx)(b.div,{"data-state":d?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:f,tabIndex:0,...s,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:r&&a})}})});function et(e,t){return"".concat(e,"-trigger-").concat(t)}function en(e,t){return"".concat(e,"-content-").concat(t)}ee.displayName=X;var er=Z,eo=J,ei=Q,eu=ee}}]);