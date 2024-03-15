import{r as l,j as w,a as we}from"./app-DpFO1aOT.js";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},E.apply(this,arguments)}function $e(e,r=[]){let t=[];function o(n,s){const i=l.createContext(s),d=t.length;t=[...t,s];function u(g){const{scope:h,children:v,...y}=g,m=(h==null?void 0:h[e][d])||i,x=l.useMemo(()=>y,Object.values(y));return l.createElement(m.Provider,{value:x},v)}function b(g,h){const v=(h==null?void 0:h[e][d])||i,y=l.useContext(v);if(y)return y;if(s!==void 0)return s;throw new Error(`\`${g}\` must be used within \`${n}\``)}return u.displayName=n+"Provider",[u,b]}const a=()=>{const n=t.map(s=>l.createContext(s));return function(i){const d=(i==null?void 0:i[e])||n;return l.useMemo(()=>({[`__scope${e}`]:{...i,[e]:d}}),[i,d])}};return a.scopeName=e,[o,Ce(a,...r)]}function Ce(...e){const r=e[0];if(e.length===1)return r;const t=()=>{const o=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(n){const s=o.reduce((i,{useScope:d,scopeName:u})=>{const g=d(n)[`__scope${u}`];return{...i,...g}},{});return l.useMemo(()=>({[`__scope${r.scopeName}`]:s}),[s])}};return t.scopeName=r.scopeName,t}function Se(e){const r=l.useRef(e);return l.useEffect(()=>{r.current=e}),l.useMemo(()=>(...t)=>{var o;return(o=r.current)===null||o===void 0?void 0:o.call(r,...t)},[])}const se=globalThis!=null&&globalThis.document?l.useLayoutEffect:()=>{};function Ae(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function ke(...e){return r=>e.forEach(t=>Ae(t,r))}const ae=l.forwardRef((e,r)=>{const{children:t,...o}=e,a=l.Children.toArray(t),n=a.find(ze);if(n){const s=n.props.children,i=a.map(d=>d===n?l.Children.count(s)>1?l.Children.only(null):l.isValidElement(s)?s.props.children:null:d);return l.createElement(F,E({},o,{ref:r}),l.isValidElement(s)?l.cloneElement(s,void 0,i):null)}return l.createElement(F,E({},o,{ref:r}),t)});ae.displayName="Slot";const F=l.forwardRef((e,r)=>{const{children:t,...o}=e;return l.isValidElement(t)?l.cloneElement(t,{...Me(o,t.props),ref:r?ke(r,t.ref):t.ref}):l.Children.count(t)>1?l.Children.only(null):null});F.displayName="SlotClone";const Ee=({children:e})=>l.createElement(l.Fragment,null,e);function ze(e){return l.isValidElement(e)&&e.type===Ee}function Me(e,r){const t={...r};for(const o in r){const a=e[o],n=r[o];/^on[A-Z]/.test(o)?a&&n?t[o]=(...i)=>{n(...i),a(...i)}:a&&(t[o]=a):o==="style"?t[o]={...a,...n}:o==="className"&&(t[o]=[a,n].filter(Boolean).join(" "))}return{...e,...t}}const Re=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],H=Re.reduce((e,r)=>{const t=l.forwardRef((o,a)=>{const{asChild:n,...s}=o,i=n?ae:r;return l.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),l.createElement(i,E({},s,{ref:a}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{}),ie="Avatar",[je,vr]=$e(ie),[Pe,le]=je(ie),Ie=l.forwardRef((e,r)=>{const{__scopeAvatar:t,...o}=e,[a,n]=l.useState("idle");return l.createElement(Pe,{scope:t,imageLoadingStatus:a,onImageLoadingStatusChange:n},l.createElement(H.span,E({},o,{ref:r})))}),_e="AvatarImage",ce=l.forwardRef((e,r)=>{const{__scopeAvatar:t,src:o,onLoadingStatusChange:a=()=>{},...n}=e,s=le(_e,t),i=Te(o),d=Se(u=>{a(u),s.onImageLoadingStatusChange(u)});return se(()=>{i!=="idle"&&d(i)},[i,d]),i==="loaded"?l.createElement(H.img,E({},n,{ref:r,src:o})):null}),Ne="AvatarFallback",Le=l.forwardRef((e,r)=>{const{__scopeAvatar:t,delayMs:o,...a}=e,n=le(Ne,t),[s,i]=l.useState(o===void 0);return l.useEffect(()=>{if(o!==void 0){const d=window.setTimeout(()=>i(!0),o);return()=>window.clearTimeout(d)}},[o]),s&&n.imageLoadingStatus!=="loaded"?l.createElement(H.span,E({},a,{ref:r})):null});function Te(e){const[r,t]=l.useState("idle");return se(()=>{if(!e){t("error");return}let o=!0;const a=new window.Image,n=s=>()=>{o&&t(s)};return t("loading"),a.onload=n("loaded"),a.onerror=n("error"),a.src=e,()=>{o=!1}},[e]),r}const de=Ie,ue=ce,pe=Le;function fe(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(r=0;r<a;r++)e[r]&&(t=fe(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Ge(){for(var e,r,t=0,o="",a=arguments.length;t<a;t++)(e=arguments[t])&&(r=fe(e))&&(o&&(o+=" "),o+=r);return o}const q="-";function Ve(e){const r=We(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function a(s){const i=s.split(q);return i[0]===""&&i.length!==1&&i.shift(),be(i,r)||Oe(s)}function n(s,i){const d=t[s]||[];return i&&o[s]?[...d,...o[s]]:d}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function be(e,r){var s;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),a=o?be(e.slice(1),o):void 0;if(a)return a;if(r.validators.length===0)return;const n=e.join(q);return(s=r.validators.find(({validator:i})=>i(n)))==null?void 0:s.classGroupId}const oe=/^\[(.+)\]$/;function Oe(e){if(oe.test(e)){const r=oe.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function We(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Fe(Object.entries(e.classGroups),t).forEach(([n,s])=>{U(s,o,n,r)}),o}function U(e,r,t,o){e.forEach(a=>{if(typeof a=="string"){const n=a===""?r:ne(r,a);n.classGroupId=t;return}if(typeof a=="function"){if(Be(a)){U(a(o),r,t,o);return}r.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([n,s])=>{U(s,ne(r,n),t,o)})})}function ne(e,r){let t=e;return r.split(q).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Be(e){return e.isThemeGetter}function Fe(e,r){return r?e.map(([t,o])=>{const a=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([s,i])=>[r+s,i])):n);return[t,a]}):e}function Ue(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function a(n,s){t.set(n,s),r++,r>e&&(r=0,o=t,t=new Map)}return{get(n){let s=t.get(n);if(s!==void 0)return s;if((s=o.get(n))!==void 0)return a(n,s),s},set(n,s){t.has(n)?t.set(n,s):a(n,s)}}}const ge="!";function He(e){const r=e.separator,t=r.length===1,o=r[0],a=r.length;return function(s){const i=[];let d=0,u=0,b;for(let m=0;m<s.length;m++){let x=s[m];if(d===0){if(x===o&&(t||s.slice(m,m+a)===r)){i.push(s.slice(u,m)),u=m+a;continue}if(x==="/"){b=m;continue}}x==="["?d++:x==="]"&&d--}const g=i.length===0?s:s.substring(u),h=g.startsWith(ge),v=h?g.substring(1):g,y=b&&b>u?b-u:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:v,maybePostfixModifierPosition:y}}}function qe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function Ze(e){return{cache:Ue(e.cacheSize),splitModifiers:He(e),...Ve(e)}}const Je=/\s+/;function Ke(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:a}=r,n=new Set;return e.trim().split(Je).map(s=>{const{modifiers:i,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:b}=t(s);let g=o(b?u.substring(0,b):u),h=!!b;if(!g){if(!b)return{isTailwindClass:!1,originalClassName:s};if(g=o(u),!g)return{isTailwindClass:!1,originalClassName:s};h=!1}const v=qe(i).join(":");return{isTailwindClass:!0,modifierId:d?v+ge:v,classGroupId:g,originalClassName:s,hasPostfixModifier:h}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:i,classGroupId:d,hasPostfixModifier:u}=s,b=i+d;return n.has(b)?!1:(n.add(b),a(d,u).forEach(g=>n.add(i+g)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Xe(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=me(r))&&(o&&(o+=" "),o+=t);return o}function me(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=me(e[o]))&&(t&&(t+=" "),t+=r);return t}function Qe(e,...r){let t,o,a,n=s;function s(d){const u=r.reduce((b,g)=>g(b),e());return t=Ze(u),o=t.cache.get,a=t.cache.set,n=i,i(d)}function i(d){const u=o(d);if(u)return u;const b=Ke(d,t);return a(d,b),b}return function(){return n(Xe.apply(null,arguments))}}function p(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const he=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ye=/^\d+\/\d+$/,De=new Set(["px","full","screen"]),er=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,rr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,tr=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,or=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,nr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function C(e){return z(e)||De.has(e)||Ye.test(e)}function A(e){return M(e,"length",pr)}function z(e){return!!e&&!Number.isNaN(Number(e))}function T(e){return M(e,"number",z)}function P(e){return!!e&&Number.isInteger(Number(e))}function sr(e){return e.endsWith("%")&&z(e.slice(0,-1))}function c(e){return he.test(e)}function k(e){return er.test(e)}const ar=new Set(["length","size","percentage"]);function ir(e){return M(e,ar,xe)}function lr(e){return M(e,"position",xe)}const cr=new Set(["image","url"]);function dr(e){return M(e,cr,br)}function ur(e){return M(e,"",fr)}function I(){return!0}function M(e,r,t){const o=he.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function pr(e){return rr.test(e)&&!tr.test(e)}function xe(){return!1}function fr(e){return or.test(e)}function br(e){return nr.test(e)}function gr(){const e=p("colors"),r=p("spacing"),t=p("blur"),o=p("brightness"),a=p("borderColor"),n=p("borderRadius"),s=p("borderSpacing"),i=p("borderWidth"),d=p("contrast"),u=p("grayscale"),b=p("hueRotate"),g=p("invert"),h=p("gap"),v=p("gradientColorStops"),y=p("gradientColorStopPositions"),m=p("inset"),x=p("margin"),S=p("opacity"),$=p("padding"),J=p("saturate"),G=p("scale"),K=p("sepia"),X=p("skew"),Q=p("space"),Y=p("translate"),V=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",c,r],f=()=>[c,r],D=()=>["",C,A],_=()=>["auto",z,c],ee=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],N=()=>["solid","dashed","dotted","double","none"],re=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],B=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",c],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[z,T],L=()=>[z,c];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[C,A],blur:["none","",k,c],brightness:j(),borderColor:[e],borderRadius:["none","","full",k,c],borderSpacing:f(),borderWidth:D(),contrast:j(),grayscale:R(),hueRotate:L(),invert:R(),gap:f(),gradientColorStops:[e],gradientColorStopPositions:[sr,A],inset:W(),margin:W(),opacity:j(),padding:f(),saturate:j(),scale:j(),sepia:R(),skew:L(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ee(),c]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,c]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",P,c]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",P,c]},c]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[P,c]},c]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[$]}],px:[{px:[$]}],py:[{py:[$]}],ps:[{ps:[$]}],pe:[{pe:[$]}],pt:[{pt:[$]}],pr:[{pr:[$]}],pb:[{pb:[$]}],pl:[{pl:[$]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[Q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,r]}],"min-w":[{"min-w":[c,r,"min","max","fit"]}],"max-w":[{"max-w":[c,r,"none","full","min","max","fit","prose",{screen:[k]},k]}],h:[{h:[c,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,r,"auto","min","max","fit"]}],"font-size":[{text:["base",k,A]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",T]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",z,T]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...N(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,A]}],"underline-offset":[{"underline-offset":["auto",C,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ee(),lr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ir]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},dr]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...N(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:N()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...N()]}],"outline-offset":[{"outline-offset":[C,c]}],"outline-w":[{outline:[C,A]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[C,A]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",k,ur]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":re()}],"bg-blend":[{"bg-blend":re()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",k,c]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[g]}],saturate:[{saturate:[J]}],sepia:[{sepia:[K]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[J]}],"backdrop-sepia":[{"backdrop-sepia":[K]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:L()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:L()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[G]}],"scale-x":[{"scale-x":[G]}],"scale-y":[{"scale-y":[G]}],rotate:[{rotate:[P,c]}],"translate-x":[{"translate-x":[Y]}],"translate-y":[{"translate-y":[Y]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,A,T]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const mr=Qe(gr);function Z(...e){return mr(Ge(e))}const ve=l.forwardRef(({className:e,...r},t)=>w.jsx(de,{ref:t,className:Z("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));ve.displayName=de.displayName;const hr=l.forwardRef(({className:e,...r},t)=>w.jsx(ue,{ref:t,className:Z("aspect-square h-full w-full",e),...r}));hr.displayName=ue.displayName;const ye=l.forwardRef(({className:e,...r},t)=>w.jsx(pe,{ref:t,className:Z("flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800",e),...r}));ye.displayName=pe.displayName;function yr(){return w.jsxs(w.Fragment,{children:[w.jsx(we,{title:"Welcome to Root page"}),w.jsxs("div",{children:[w.jsxs(ve,{children:[w.jsx(ce,{src:"https://github.com/davian27.png"}),w.jsx(ye,{children:"DAP"})]}),w.jsx("h1",{children:"Hello world"})]})]})}export{yr as default};