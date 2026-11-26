"use strict";(()=>{})();

;
"use strict";(()=>{var Ze="http://www.w3.org/2000/svg";function oe(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function z(e){return JSON.parse(JSON.stringify(e))}function Me(e,n){for(let[t,r]of Object.entries(n))r!==void 0&&(oe(r)?(oe(e[t])||(e[t]={}),Me(e[t],r)):e[t]=z(r))}function S(e,...n){let t=z(e);for(let r of n)oe(r)&&Me(t,r);return t}function h(e,n=0,t=1){return Math.max(n,Math.min(t,e))}function Re(e,n,t){if(Array.isArray(e)){if(!(e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"&&Number.isFinite(e[0])&&Number.isFinite(e[1])))throw new Error(`Invalid numeric range at "${n}": expected [min, max] with numeric bounds.`);if(e[0]>e[1])throw new Error(`Invalid numeric range at "${n}": minimum ${e[0]} exceeds maximum ${e[1]}.`);let o=R(`${t}:${n}`);return e[0]+o()*(e[1]-e[0])}if(oe(e)){let r={};for(let[o,s]of Object.entries(e))r[o]=Re(s,n?`${n}.${o}`:o,t);return r}return e}function H(e,n){return Re(e,"",n)}function ue(e){let n=.75+e/32;return{curlFactor:n,curlHalf:24*n,blockDepth:Math.min(27,3+e)}}function j(e){let n=String(e),t=2166136261;for(let r=0;r<n.length;r+=1)t^=n.charCodeAt(r),t=Math.imul(t,16777619);return t>>>0}function R(e){let n=j(e)||1;return()=>{n+=1831565813;let t=n;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function w(e){return document.createElementNS(Ze,e)}function k(e,n){for(let[t,r]of Object.entries(n))e.setAttribute(t,String(r))}function C(e){if(e instanceof HTMLElement)return e;let n=document.querySelector(e);if(!n)throw new Error(`Archive Scan source was not found: ${e}`);return n}function Ae(){return typeof SVGFEColorMatrixElement<"u"&&typeof SVGFEComponentTransferElement<"u"&&typeof CSS<"u"&&CSS.supports("filter","grayscale(1)")}var G=class{constructor(n,t){Object.defineProperty(this,"label",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"requireName",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"definitions",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}load(n){for(let[t,r]of Object.entries(n))this.set(t,r)}define(n,t){if(this.definitions.has(n))throw new Error(`${this.label} "${n}" already exists.`);this.set(n,t)}set(n,t){if(this.requireName&&!n.trim())throw new Error(`${this.label} names may not be empty.`);this.definitions.set(n,z(t))}update(n,t){this.set(n,S(this.get(n),t))}get(n){let t=this.definitions.get(n);if(!t)throw new Error(`Unknown ${this.label.toLowerCase()} "${n}".`);return z(t)}has(n){return this.definitions.has(n)}names(){return[...this.definitions.keys()]}remove(n){return this.definitions.delete(n)}};var en={paper:{tone:.97,texture:.04},exposure:{brightness:1,contrast:1,gamma:1,unevenness:0,blownHighlights:0,crushedShadows:0},ink:{spread:0,erosion:0,blur:0},tone:{mode:"continuous",levels:256,threshold:.55,dither:"none",ditherAmount:0},artifacts:{grain:0,dust:0,scratches:0,bleedThrough:0,shineThrough:0,verticalStreaks:0,horizontalBands:0,edgeNoise:0},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:0},border:{enabled:!0,darkness:.9,thickness:24,roughness:.25,sides:{top:!0,right:!0,bottom:!0,left:!0}}},nn={clean:{},"book-photo":{paper:{tone:.96,texture:.09},exposure:{brightness:1.02,contrast:.96,gamma:1.02,unevenness:.18,blownHighlights:.04,crushedShadows:.02},artifacts:{grain:.025,dust:.025,scratches:.01,bleedThrough:.02,shineThrough:.15,verticalStreaks:0,horizontalBands:0,edgeNoise:.04},capture:{grayscale:!0,rotation:.08,perspective:.04,rotationJitter:.3}},"bound-volume":{extends:"book-photo",exposure:{contrast:1.03,unevenness:.13},artifacts:{grain:.035,dust:.04,edgeNoise:.1}},"microfilm-journal":{paper:{tone:.91,texture:.22},exposure:{brightness:1.06,contrast:1.3,gamma:.94,unevenness:.4,blownHighlights:.2,crushedShadows:.32},ink:{spread:.22,erosion:.04,blur:.1},tone:{mode:"continuous",levels:256,threshold:.55,dither:"random",ditherAmount:.05},artifacts:{grain:.09,dust:.24,scratches:.38,bleedThrough:.15,shineThrough:.35,verticalStreaks:.72,horizontalBands:.08,edgeNoise:.7},capture:{grayscale:!0,rotation:-.14,perspective:.02,rotationJitter:.55},border:{enabled:!0,darkness:.94,thickness:38,roughness:.72}},"early-office-bitonal":{paper:{tone:1,texture:.07},exposure:{brightness:1.02,contrast:1.58,gamma:.9,unevenness:.15,blownHighlights:.24,crushedShadows:.42},ink:{spread:.38,erosion:.05,blur:.03},tone:{mode:"bitonal",levels:2,threshold:.61,dither:"random",ditherAmount:.1},artifacts:{grain:.063,dust:.11,scratches:.05,bleedThrough:.025,shineThrough:.22,verticalStreaks:.07,horizontalBands:.035,edgeNoise:.22},capture:{grayscale:!0,rotation:.04,perspective:0,rotationJitter:.45}},"xerox-zine":{extends:"early-office-bitonal",exposure:{contrast:1.9,unevenness:.22,blownHighlights:.34,crushedShadows:.58},ink:{spread:.62,erosion:.09,blur:.025},tone:{threshold:.64,ditherAmount:.16},artifacts:{grain:.076,dust:.2,scratches:.12,shineThrough:.3,edgeNoise:.46},border:{enabled:!0,darkness:1,thickness:20,roughness:.86}},"analog-gray-copy":{paper:{tone:.98,texture:.08},exposure:{brightness:1.01,contrast:1.2,gamma:.96,unevenness:.12,blownHighlights:.1,crushedShadows:.14},ink:{spread:.14,erosion:.025,blur:.07},tone:{mode:"quantized",levels:8,threshold:.55,dither:"random",ditherAmount:.32},artifacts:{grain:.05,dust:.05,scratches:.015,bleedThrough:.02,shineThrough:.12,verticalStreaks:.025,horizontalBands:.02,edgeNoise:.09},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:.3}},"digital-gray-copy":{paper:{tone:.99,texture:.02},exposure:{brightness:1,contrast:1.08,gamma:1,unevenness:.035,blownHighlights:.04,crushedShadows:.06},ink:{spread:.05,erosion:.01,blur:.02},tone:{mode:"quantized",levels:32,threshold:.55,dither:"random",ditherAmount:.16},artifacts:{grain:.016,dust:.008,scratches:0,bleedThrough:0,shineThrough:.04,verticalStreaks:.008,horizontalBands:.006,edgeNoise:.02},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:.12}}},ge=class extends G{constructor(n={}){super("Preset",!0),this.load(n)}update(n,t){super.update(n,t)}async fromUrl(n,t){let r=await fetch(n);if(!r.ok)throw new Error(`Failed to load presets from "${n}": ${r.status} ${r.statusText}.`);let o=await r.json();if(typeof o!="object"||o===null)throw new Error(`The preset document "${n}" is not a JSON object.`);if(t)return this.set(t,o),[t];if(["paper","exposure","ink","tone","artifacts","capture","border","extends"].some(a=>a in o))throw new Error(`The preset document "${n}" contains a single preset definition; pass a preset name to presets.fromUrl().`);return this.import(o),Object.keys(o)}import(n){for(let[t,r]of Object.entries(n))this.set(t,r)}export(n){if(n)return this.get(n);let t={};for(let r of this.names())t[r]=this.get(r);return t}resolve(n="clean"){let t=new Set,r=o=>{if(t.has(o))throw new Error(`Circular preset inheritance involving "${o}".`);t.add(o);let s=this.get(o),l=s.extends,a={...s};delete a.extends;let d;return l?d=S(r(l),a):d=a,t.delete(o),d};return S(en,r(n))}},F=new ge(nn);var fe={subtle:{width:18,darkness:.28,blur:10,curvature:.14,highlight:.06},"bound-volume":{width:32,darkness:.58,blur:13,curvature:.46,highlight:.1},"deep-bound-volume":{width:48,darkness:.82,blur:16,curvature:.72,highlight:.15}},me=class extends G{constructor(n={}){super("Binding style",!1),this.load(n)}},ve=new me(fe);var Z="cr-book-page",tn="data-page-break";function rn(e){return e.hasAttribute(tn)?!0:window.getComputedStyle(e).breakAfter==="page"}function on(e){return window.getComputedStyle(e).breakBefore==="page"}function Ce(e,n={}){let t=C(e),r=t.parentNode;if(!r)throw new Error("The book source element must be attached to the document.");let o=Array.from(t.childNodes),s=[[]],l=[];for(let u of o){let x=s[s.length-1];if(u instanceof HTMLHRElement){l.push(u),s.push([]);continue}if(u instanceof Element){on(u)&&s.push([]),s[s.length-1].push(u),rn(u)&&s.push([]);continue}x.push(u)}let a=(Array.isArray(n.hostClasses)?n.hostClasses:n.hostClasses!==void 0?[n.hostClasses]:[]).flatMap(u=>u.split(/\s+/)).filter(u=>u!==""&&u!==Z),d=t.nextSibling,g=[];for(let[u]of s.entries()){if(u===0){g.push(t);continue}let x=document.createElement("div");x.className=[Z,...a].join(" "),r.insertBefore(x,d),g.push(x)}let p=!t.classList.contains(Z);p&&t.classList.add(Z);for(let[u,x]of s.entries())g[u].append(...x);for(let u of l)u.remove();let y=!1;return{pages:g,restore(){if(!y){y=!0;for(let u of o)t.append(u);for(let[u,x]of g.entries())u>0&&x.remove();p&&t.classList.remove(Z)}}}}var an=["0.2126 0.7152 0.0722 0 0","0.2126 0.7152 0.0722 0 0","0.2126 0.7152 0.0722 0 0","0 0 0 1 0"].join(" "),sn=["1 0 0 0 0","0 1 0 0 0","0 0 1 0 0","0 0 0 1 0"].join(" ");function qe(e){let n=w("svg");n.classList.add("archive-scan-svg"),k(n,{"aria-hidden":"true",width:0,height:0,focusable:"false"});let t=w("defs"),r=w("filter");return k(r,{id:e,x:"-10%",y:"-10%",width:"120%",height:"120%","color-interpolation-filters":"sRGB"}),r.style.colorInterpolationFilters="sRGB",t.append(r),n.append(t),{svg:n,filter:r}}function dn(e,n){let t=w("feColorMatrix");k(t,{in:"SourceGraphic",type:"matrix",values:n?an:sn,result:"archive-gray"}),e.append(t)}function Ne(e,n,t,r){let o=w("feComponentTransfer");k(o,{in:n,result:t});for(let s of["R","G","B"]){let l=w(`feFunc${s}`);k(l,{type:"table",tableValues:r}),o.append(l)}e.append(o)}function ze(e,n){let t=w("feComposite");k(t,{in:n,in2:"SourceGraphic",operator:"in"}),e.append(t)}function Le(e,n,t,r,o,s){let l=w("feComposite");k(l,{in:n,in2:t,operator:"arithmetic",k1:0,k2:r.toFixed(4),k3:o.toFixed(4),k4:0,result:s}),e.append(l)}function Fe(e,n,t,r,o){let s=w("feMorphology");if(k(s,{in:n,operator:t,radius:1,result:`${o}-1`}),e.append(s),r<1)Le(e,n,`${o}-1`,1-r,r,o);else{let l=w("feMorphology");k(l,{in:`${o}-1`,operator:t,radius:1,result:`${o}-2`}),e.append(l),Le(e,`${o}-1`,`${o}-2`,2-r,r-1,o)}}function ln(e,n=128){let t=[];for(let r=0;r<n;r+=1){let o=r/(n-1);o*=e.exposure.brightness,o=(o-.5)*e.exposure.contrast+.5,o=Math.pow(h(o),1/Math.max(.01,e.exposure.gamma));let s=h(e.exposure.crushedShadows);s>0&&o<s*.45&&(o*=1-s);let l=h(e.exposure.blownHighlights);if(l>0){let a=1-l*.45;o>a&&(o=a+(o-a)*(1+l*2.5))}t.push(h(o).toFixed(4))}return t.join(" ")}function Be(e,n=128){let t=[],r=e.tone.mode;for(let o=0;o<n;o+=1){let s=o/(n-1),l=s;if(r==="bitonal")l=s<e.tone.threshold?0:1;else if(r==="quantized"){let a=Math.max(2,Math.floor(e.tone.levels));l=Math.round(s*(a-1))/(a-1)}t.push(l.toFixed(4))}return t.join(" ")}function cn(e){return e.tone.mode==="bitonal"?1:e.tone.mode==="quantized"?1/Math.max(1,Math.floor(e.tone.levels)-1):.16}function pn(e,n,t,r,o){let s=w("feTurbulence");k(s,{type:"fractalNoise",baseFrequency:"0.72",numOctaves:1,seed:r,stitchTiles:"stitch",result:"archive-noise"}),e.append(s);let l=w("feColorMatrix");k(l,{in:"archive-noise",type:"matrix",values:["0 0 0 1 0","0 0 0 1 0","0 0 0 1 0","0 0 0 0 1"].join(" "),result:"archive-noise-gray"}),e.append(l);let a=h(t.tone.ditherAmount)*2*cn(t),d=w("feComposite");k(d,{in:n,in2:"archive-noise-gray",operator:"arithmetic",k1:0,k2:1,k3:a.toFixed(4),k4:(-a/2).toFixed(4),result:o}),e.append(d)}function Ie(e,n){let{svg:t,filter:r}=qe(e);dn(r,n.capture.grayscale),Ne(r,"archive-gray","archive-exposed",ln(n));let o="archive-exposed";if(n.ink.spread>0&&(Fe(r,o,"erode",h(n.ink.spread)*2,"archive-spread"),o="archive-spread"),n.ink.erosion>0&&(Fe(r,o,"dilate",h(n.ink.erosion)*2,"archive-eroded"),o="archive-eroded"),n.ink.blur>0){let s=w("feGaussianBlur");k(s,{in:o,stdDeviation:(h(n.ink.blur)*.7).toFixed(3),result:"archive-blurred"}),r.append(s),o="archive-blurred"}return ze(r,o),t}function be(e,n,t){let{svg:r,filter:o}=qe(e),s="SourceGraphic";return n.tone.dither==="random"&&n.tone.ditherAmount>0&&(pn(o,s,n,t,"archive-dithered"),s="archive-dithered"),n.tone.mode!=="continuous"&&(Ne(o,s,"archive-toned",Be(n)),s="archive-toned"),ze(o,s),r}var Oe=64;function ye(e,n,t,r,o){let s=`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}"><filter id="n" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${n}" numOctaves="${t}" seed="${e}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="discrete" tableValues="0 1"/><feFuncG type="discrete" tableValues="0 1"/><feFuncB type="discrete" tableValues="0 1"/><feFuncA type="discrete" tableValues="${r}"/></feComponentTransfer></filter><rect width="${o}" height="${o}" filter="url(#n)"/></svg>`;return`url("data:image/svg+xml,${encodeURIComponent(s)}")`}function De(e,n,t){let r=[];for(let o=0;o<Oe;o+=1){let s=(o+.5)/Oe,l=h((s-.5)*e+.5),a=n<1?(l-n)/(1-n):0;r.push((h(a)*t).toFixed(3))}return r.join(" ")}function Ve(e){let n=.89-h(e)*.39;return De(1.2,n,.5)}function He(){return De(1.6,0,.3)}var je=`.archive-scan-page,
.archive-scan-page *,
.archive-scan-viewer,
.archive-scan-viewer * {
  box-sizing: border-box;
}

.archive-scan-page {
  --archive-paper: rgb(247 247 247);
  --archive-texture: 0;
  --archive-grain: 0;
  --archive-edge-noise: 0;
  --archive-border-darkness: 0;
  --archive-border-width: 0px;
  --archive-unevenness: 0;
  --archive-bleed: 0;

  position: relative;
  isolation: isolate;
  min-width: 0;
  background: var(--archive-paper);
  transform-origin: center center;
  counter-increment: cr-folio;
}

.archive-scan-stage {
  position: relative;
  min-width: 0;
  overflow: hidden;
  background: var(--archive-paper);
}

.archive-scan-content {
  position: relative;
  z-index: 1;
  min-width: 0;
  background: var(--archive-paper);
}

/*
 * Links read as ink, like every other mark on the copy: the
 * browser's default link, visited and hover colours would survive
 * the tone processing as mid-gray. An underline is reserved for
 * mouseover and keyboard focus.
 */
.archive-scan-page a {
  color: inherit;
  text-decoration: none;
}

.archive-scan-page a:visited {
  color: inherit;
}

.archive-scan-page a:hover,
.archive-scan-page a:focus-visible {
  color: inherit;
  text-decoration: underline;
}

/*
 * The show-through ghost mirrors the content behind the paper: its
 * links are part of the print, not interactive \u2014 solid ink, no
 * affordances, in every state. Declared after the rules above so
 * it wins the equal-specificity cascade.
 */
.archive-scan-content .archive-scan-shinethru a,
.archive-scan-content .archive-scan-shinethru a:link,
.archive-scan-content .archive-scan-shinethru a:visited,
.archive-scan-content .archive-scan-shinethru a:hover,
.archive-scan-content .archive-scan-shinethru a:focus-visible,
.archive-scan-content .archive-scan-shinethru a:active {
  color: black;
  text-decoration: none;
}

.archive-scan-shinethru {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  opacity: var(--archive-shinethru, 0);
  filter: blur(1.1px);
  transform: scaleX(-1);
  pointer-events: none;
  user-select: none;
}

/*
     * The enhancement filter covers the whole stage, so overlays,
     * artifacts and the paper background pass through the same
     * tone processing as the content. This is what makes strict
     * bitonal output possible across all elements.
     */
.archive-scan-page[data-enhancement="css"] > .archive-scan-stage {
  filter: grayscale(var(--archive-grayscale, 1))
    brightness(var(--archive-brightness, 1))
    contrast(var(--archive-contrast, 1)) blur(var(--archive-blur, 0));
}

.archive-scan-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}

.archive-scan-paper-texture {
  opacity: var(--archive-texture);
  mix-blend-mode: multiply;
  background-image: var(--archive-texture-image, none);
  background-position: var(--archive-texture-position, 0 0);
  background-size: 260px 260px;
}

.archive-scan-exposure {
  opacity: var(--archive-unevenness);
  mix-blend-mode: multiply;
  background:
    radial-gradient(
      ellipse at var(--archive-unevenness-x, 44%)
        var(--archive-unevenness-y, 37%),
      rgb(255 255 255 / 8%),
      transparent 45%
    ),
    linear-gradient(
      var(--archive-unevenness-angle-a, 96deg),
      rgb(0 0 0 / 20%),
      transparent 12%,
      transparent 81%,
      rgb(0 0 0 / 13%)
    ),
    linear-gradient(
      var(--archive-unevenness-angle-b, 0deg),
      rgb(0 0 0 / 10%),
      transparent 17%,
      transparent 86%,
      rgb(255 255 255 / 8%)
    );
}

.archive-scan-grain {
  mix-blend-mode: multiply;
  background-image: var(--archive-grain-image, none);
  background-position: var(--archive-grain-position, 0 0);
  background-size: 320px 320px;
}

.archive-scan-bleed {
  opacity: var(--archive-bleed);
  mix-blend-mode: multiply;
  background:
    repeating-linear-gradient(
      var(--archive-bleed-angle, 2deg),
      transparent 0 12px,
      rgb(0 0 0 / 7%) 13px,
      transparent 14px 25px
    ),
    radial-gradient(
      ellipse at var(--archive-bleed-x, 63%) var(--archive-bleed-y, 24%),
      rgb(0 0 0 / 8%),
      transparent 35%
    );
  transform: scaleX(-1);
}

.archive-scan-edge {
  box-shadow:
    inset var(--archive-border-width) 0
      calc(var(--archive-border-width) * var(--archive-edge-blur-left, 0.6))
      rgb(0 0 0 / var(--archive-border-darkness)),
    inset calc(var(--archive-border-width) * -1) 0
      calc(var(--archive-border-width) * var(--archive-edge-blur-right, 0.6))
      rgb(0 0 0 / var(--archive-border-darkness)),
    inset 0 var(--archive-border-width)
      calc(var(--archive-border-width) * var(--archive-edge-blur-top, 0.4))
      rgb(0 0 0 / var(--archive-border-darkness)),
    inset 0 calc(var(--archive-border-width) * -1)
      calc(var(--archive-border-width) * var(--archive-edge-blur-bottom, 0.4))
      rgb(0 0 0 / var(--archive-border-darkness));
  opacity: var(--archive-edge-noise);
}

.archive-scan-generated-artifacts {
  position: absolute;
  inset: 0;
  z-index: 4;
  overflow: hidden;
  pointer-events: none;
}

.archive-scan-dust {
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: var(--x);
  top: var(--y);
  border-radius: 50%;
  opacity: var(--opacity);
  background: #111;
  filter: blur(var(--blur));
}

.archive-scan-scratch {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--width);
  height: var(--height);
  opacity: var(--opacity);
  background: #111;
  transform: rotate(var(--rotation));
  transform-origin: top;
}

.archive-scan-streak {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--x);
  width: var(--width);
  opacity: var(--opacity);
  background: repeating-linear-gradient(
    0deg,
    #111 0 7px,
    transparent 7px 10px,
    #111 10px 19px
  );
}

.archive-scan-band {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--y);
  height: var(--height);
  opacity: var(--opacity);
  background: #111;
}

.archive-scan-svg {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  pointer-events: none;
}

.archive-scan-viewer {
  --archive-gap: 0px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--archive-gap);
  width: 100%;
  min-width: 0;
  overflow: hidden;
  counter-reset: cr-folio;
}

.archive-scan-slot {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 0 1 auto;
  min-width: 0;
}

.archive-scan-viewer[data-mode="single"] .archive-scan-slot {
  width: 100%;
}

.archive-scan-viewer[data-mode="spread"] .archive-scan-slot {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: calc((100% - var(--archive-gap)) / 2);
}

/*
     * In spread mode both slots share one height \u2014 the taller
     * page defines it \u2014 and each page, stage and content
     * wrapper stretches to fill its slot, so facing pages meet
     * head and tail like a real open book.
     */
.archive-scan-viewer[data-mode="spread"] {
  align-items: stretch;
}

.archive-scan-viewer[data-fit="width"] .archive-scan-page {
  width: 100%;
}

.archive-scan-viewer[data-fit="contain"] .archive-scan-page {
  width: auto;
  max-width: 100%;
}

.archive-scan-viewer[data-fit="height"] .archive-scan-page {
  width: auto;
  max-height: 100%;
}

.archive-scan-viewer[data-mode="spread"]
  .archive-scan-slot
  > .archive-scan-page {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.archive-scan-viewer[data-mode="spread"]
  .archive-scan-page
  > .archive-scan-stage {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.archive-scan-viewer[data-mode="spread"]
  .archive-scan-stage
  > .archive-scan-content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

/*
 * Continuous mode stacks every seat \u2014 pages in single mode,
 * spread rows in spread mode \u2014 and scrolls inside the viewer, so
 * the surrounding chrome stays put while the stack moves. Each
 * row carries the page gap between its slots, matching the gap
 * the viewer applies between rows.
 */
.archive-scan-viewer[data-continuous] {
  flex-direction: column;
  align-items: stretch;
  min-height: 0;
  overflow-y: auto;
}

.archive-scan-row {
  display: flex;
  justify-content: center;
  gap: var(--archive-gap);
  width: 100%;
}

/*
 * The binding shadow belongs to the sheet: inside the content it
 * stops at the sheet's head and tail, sits under the spine curl
 * and passes through the same tone processing as the paper.
 */
.archive-scan-gutter {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  width: var(--gutter-width);
  pointer-events: none;
  filter: blur(var(--gutter-blur));
}

.archive-scan-gutter[data-edge="left"] {
  left: 0;
  background: linear-gradient(
    to right,
    rgb(0 0 0 / var(--gutter-darkness)),
    rgb(0 0 0 / var(--gutter-middle)) var(--gutter-curve),
    rgb(255 255 255 / var(--gutter-highlight)) 82%,
    transparent
  );
}

.archive-scan-gutter[data-edge="right"] {
  right: 0;
  background: linear-gradient(
    to left,
    rgb(0 0 0 / var(--gutter-darkness)),
    rgb(0 0 0 / var(--gutter-middle)) var(--gutter-curve),
    rgb(255 255 255 / var(--gutter-highlight)) 82%,
    transparent
  );
}

/*
 * Spine chrome for facing pages, shared by the playground desk
 * and the viewer: each sheet renders its own curl half at the
 * seam and the stacked page-block edges at the outer sides. The
 * chrome is keyed on the sheet's spread side and anchored to the
 * sheet's content, so it follows the sheet's rotation and passes
 * through the page's own tone processing. The curl width and
 * block depth scale with the spine page count through custom
 * properties.
 */
.archive-scan-page[data-spine-side="left"] .archive-scan-content::before,
.archive-scan-page[data-spine-side="right"] .archive-scan-content::after {
  /* Page-block fore-edges: the stacked edges of the surrounding
     pages, visible at the outer sides of an open book. Each
     sheet edge is a thin vertical line; the block sits a touch
     shorter than the open sheets and its inner side falls into
     shadow. The strips anchor to the sheet edge \u2014 sliding under
     a copier frame when one surrounds the sheet \u2014 so the block
     belongs to the pages, not to the frame. */
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--archive-block-depth, 11px);
  border-radius: 2px;
  z-index: 1;
  box-shadow: 0 2px 9px rgb(0 0 0 / 35%);
}

.archive-scan-page[data-spine-side="left"] .archive-scan-content::before {
  left: calc(3px - var(--archive-block-depth, 11px));
  transform: skewY(1.5deg);
  background:
    linear-gradient(
      90deg,
      rgb(255 255 255 / 14%),
      rgb(0 0 0 / 0%) 45%,
      rgb(0 0 0 / 26%)
    ),
    repeating-linear-gradient(
      90deg,
      #f4f2ec 0 1.1px,
      #d9d6ce 1.1px 1.9px,
      #b8b4ab 1.9px 2.4px,
      #f4f2ec 2.4px 3.3px
    );
}

.archive-scan-page[data-spine-side="right"] .archive-scan-content::after {
  right: calc(3px - var(--archive-block-depth, 11px));
  transform: skewY(-1.5deg);
  background:
    linear-gradient(
      270deg,
      rgb(255 255 255 / 14%),
      rgb(0 0 0 / 0%) 45%,
      rgb(0 0 0 / 26%)
    ),
    repeating-linear-gradient(
      90deg,
      #f4f2ec 0 1.1px,
      #d9d6ce 1.1px 1.9px,
      #b8b4ab 1.9px 2.4px,
      #f4f2ec 2.4px 3.3px
    );
}

/* Spine curl: each sheet renders its own half of the binding,
   anchored to the paper's vertical extent. The curl therefore
   stays contained to the book, terminates at the sheet's head
   and tail, and covers the wedges that per-page rotation opens
   at the seam. */
.archive-scan-page[data-spine-side="left"] .archive-scan-content::after,
.archive-scan-page[data-spine-side="right"] .archive-scan-content::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--archive-curl-half, 24px);
  z-index: 5;
  pointer-events: none;
  filter: blur(2px);
}

.archive-scan-page[data-spine-side="left"] .archive-scan-content::after {
  right: 0;
  background:
    linear-gradient(
      to right,
      rgb(244 242 236 / 0%) 0%,
      rgb(244 242 236 / var(--archive-curl-light-1, 0.55)) 52%,
      rgb(244 242 236 / var(--archive-curl-light-2, 0.25)) 92%,
      rgb(244 242 236 / var(--archive-curl-light-2, 0.25)) 100%
    ),
    linear-gradient(
      to right,
      rgb(0 0 0 / 0%) 0%,
      rgb(0 0 0 / var(--archive-curl-edge, 0.34)) 32%,
      rgb(24 22 19 / var(--archive-curl-mid, 0.9)) 56%,
      rgb(10 9 8 / var(--archive-curl-core, 0.96)) 100%
    );
}

.archive-scan-page[data-spine-side="right"] .archive-scan-content::before {
  left: 0;
  background:
    linear-gradient(
      to left,
      rgb(244 242 236 / 0%) 0%,
      rgb(244 242 236 / var(--archive-curl-light-1, 0.55)) 52%,
      rgb(244 242 236 / var(--archive-curl-light-2, 0.25)) 92%,
      rgb(244 242 236 / var(--archive-curl-light-2, 0.25)) 100%
    ),
    linear-gradient(
      to left,
      rgb(0 0 0 / 0%) 0%,
      rgb(0 0 0 / var(--archive-curl-edge, 0.34)) 32%,
      rgb(24 22 19 / var(--archive-curl-mid, 0.9)) 56%,
      rgb(10 9 8 / var(--archive-curl-core, 0.96)) 100%
    );
}

.archive-scan-empty {
  width: 100%;
  aspect-ratio: 0.72;
  visibility: hidden;
}

@media print {
  .archive-scan-grain,
  .archive-scan-generated-artifacts {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}

/* ==========================================================================
 * Book conventions
 *
 * Classes for typesetting continuous documents as books. They lean
 * on the document's own semantics (h1\u2013h3, hgroup, address, aside,
 * blockquote) and add the print furniture HTML lacks: page
 * counters, dropcaps, small caps, sidenotes. Everything inherits
 * the paper's type family; only alignment, emphasis and counters
 * are set here.
 * ========================================================================== */

/*
 * The folio counter increments on every sheet (see
 * \`.archive-scan-page\` above), so \`.cr-folio\` elements number
 * themselves in reading order \u2014 in the viewer and for a single
 * standalone page alike.
 */
.cr-folio:empty::after {
  content: counter(cr-folio);
}

/*
 * Title pages and their furniture. The classes map the classic
 * parts of a title page; the elements beneath stay the author's
 * choice (h1 with hgroup, address for the imprint).
 */
.cr-titlepage {
  text-align: center;
}

.cr-book-title,
.cr-part-title,
.cr-chapter-title {
  text-wrap: balance;
}

.cr-subtitle {
  font-style: italic;
  text-wrap: balance;
}

.cr-kicker,
.cr-running-head,
.cr-author {
  font-variant-caps: all-small-caps;
  letter-spacing: 0.08em;
}

.cr-running-head {
  text-align: center;
}

.cr-imprint {
  font-size: 0.85em;
}

/*
 * Epigraphs sit inset from the measure and read ragged, whatever
 * the surrounding prose does.
 */
.cr-epigraph {
  margin-inline: 12%;
  font-size: 0.9em;
  text-align: start;
  hyphens: none;
}

/*
 * Prose defaults for text pages: justified measure, hyphenation
 * and widow and orphan control. \`.cr-ragged\` returns to left-set
 * ragged text for pages that mix prose with lists and tables.
 */
.cr-prose p {
  text-align: justify;
  hyphens: auto;
  orphans: 2;
  widows: 2;
  text-wrap: pretty;
}

.cr-ragged p {
  text-align: start;
  hyphens: none;
}

/*
 * Dropcaps float the initial letter into the measure, sized in em
 * so it scales with the paper's type.
 */
.cr-dropcap::first-letter {
  float: left;
  font-size: 3em;
  line-height: 0.8;
  padding-inline-end: 0.08em;
}

.cr-smallcaps {
  font-variant-caps: all-small-caps;
  letter-spacing: 0.06em;
}

/*
 * Sidenotes float into the outer margin the way printed marginalia
 * do; footnotes set smaller beneath the prose they annotate.
 */
.cr-sidenote {
  float: inline-end;
  clear: inline-end;
  width: 28%;
  margin-inline-start: 4%;
  font-size: 0.85em;
}

.cr-footnote {
  font-size: 0.85em;
}

/*
 * Verse keeps its line breaks and reads ragged, indented from the
 * measure like a quoted poem. Hanging indents set reference lists
 * the way bibliographies print them.
 */
.cr-verse {
  margin-inline-start: 12%;
  text-align: start;
  hyphens: none;
}

.cr-hanging-indent {
  padding-inline-start: 2em;
  text-indent: -2em;
}
`;var Ge="archive-scan-core-styles";function ae(){if(document.getElementById(Ge))return;let e=document.createElement("style");e.id=Ge,e.textContent=je,document.head.append(e)}var _e=0;function ee(e){let n=document.createElement("div");return n.className=`archive-scan-overlay ${e}`,n.setAttribute("aria-hidden","true"),n}function $(e,n,t){return(e()*2-1)*n*t}function Je(e,n){let t=document.createElement("div");t.className="archive-scan-generated-artifacts",t.setAttribute("aria-hidden","true");let r=Math.floor(h(e.artifacts.dust)*80);for(let a=0;a<r;a+=1){let d=document.createElement("i");d.className="archive-scan-dust",d.style.setProperty("--x",`${(n()*100).toFixed(2)}%`),d.style.setProperty("--y",`${(n()*100).toFixed(2)}%`),d.style.setProperty("--size",`${(.7+n()*3.5).toFixed(2)}px`),d.style.setProperty("--opacity",`${(.14+n()*.6).toFixed(3)}`),d.style.setProperty("--blur",`${(n()*.6).toFixed(2)}px`),t.append(d)}let o=Math.floor(h(e.artifacts.scratches)*16);for(let a=0;a<o;a+=1){let d=document.createElement("i");d.className="archive-scan-scratch",d.style.setProperty("--x",`${(n()*100).toFixed(2)}%`),d.style.setProperty("--y",`${(n()*100).toFixed(2)}%`),d.style.setProperty("--width",`${(.4+n()*1.3).toFixed(2)}px`),d.style.setProperty("--height",`${(5+n()*45).toFixed(2)}%`),d.style.setProperty("--opacity",`${(.08+n()*e.artifacts.scratches*.75).toFixed(3)}`),d.style.setProperty("--rotation",`${(-2+n()*4).toFixed(2)}deg`),t.append(d)}let s=Math.floor(h(e.artifacts.verticalStreaks)*18);for(let a=0;a<s;a+=1){let d=document.createElement("i");d.className="archive-scan-streak";let p=n()<.5?n()*10:90+n()*10;d.style.setProperty("--x",`${p.toFixed(2)}%`),d.style.setProperty("--width",`${(.5+n()*2.5).toFixed(2)}px`),d.style.setProperty("--opacity",`${(e.artifacts.verticalStreaks*(.08+n()*.45)).toFixed(3)}`),t.append(d)}let l=Math.floor(h(e.artifacts.horizontalBands)*10);for(let a=0;a<l;a+=1){let d=document.createElement("i");d.className="archive-scan-band",d.style.setProperty("--y",`${(n()*100).toFixed(2)}%`),d.style.setProperty("--height",`${(.5+n()*3).toFixed(2)}px`),d.style.setProperty("--opacity",`${(e.artifacts.horizontalBands*(.05+n()*.22)).toFixed(3)}`),t.append(d)}return t}function hn(e){let n=document.createElement("div");n.className="archive-scan-shinethru",n.setAttribute("aria-hidden","true"),n.setAttribute("inert","");let t=e.cloneNode(!0);t.removeAttribute("id"),t.style.background="transparent";for(let r of t.querySelectorAll("[id]"))r.removeAttribute("id");return n.append(t),n}function Ue(e,n={}){ae();let t=C(e),r=t.parentNode;if(!r)throw new Error("The source element must be attached to the document.");let o=n.registry??F,s=n.preset??"clean",l=n.seed??`${s}:${_e}`,a=H(S(o.resolve(s),n.overrides??{}),l),d=R(l),g=document.createComment("archive-scan-original-position");r.insertBefore(g,t);let p=document.createElement("div");p.className="archive-scan-page";let y=document.createElement("div");y.className="archive-scan-content";let u=document.createElement("div");u.className="archive-scan-stage",r.insertBefore(p,t);let x=hn(t);y.append(x,t),u.append(y),p.append(u);let J=ee("archive-scan-paper-texture"),q=ee("archive-scan-exposure"),B=ee("archive-scan-bleed"),I=ee("archive-scan-grain"),O=ee("archive-scan-edge");u.append(J,q,B,I,O);let L=Je(a,d);u.append(L);let D=`archive-scan-filter-${++_e}`,V=null,P=null,E=!1,U=n.enhancement??"auto",W=U==="css"?"css":U==="svg"||Ae()?"svg":"css";p.dataset.enhancement=W;function K(){let i=Math.round(h(a.paper.tone)*255);p.style.setProperty("--archive-paper",`rgb(${i}, ${i}, ${i})`),p.style.setProperty("--archive-texture",String(h(a.paper.texture))),p.style.setProperty("--archive-texture-image",ye(j(`${l}:texture`)%1e5,.35,3,He(),260)),p.style.setProperty("--archive-grain-image",ye(j(`${l}:grain`)%1e5,.45,3,Ve(h(a.artifacts.grain)),320)),p.style.setProperty("--archive-unevenness",String(h(a.exposure.unevenness))),p.style.setProperty("--archive-bleed",String(h(a.artifacts.bleedThrough))),p.style.setProperty("--archive-shinethru",String(h(a.artifacts.shineThrough)*.38)),p.style.setProperty("--archive-edge-noise",String(h(a.artifacts.edgeNoise)));let c=R(`${l}:unevenness`),f=h(a.exposure.unevenness);q.style.setProperty("--archive-unevenness-x",`${(44+$(c,f,24)).toFixed(2)}%`),q.style.setProperty("--archive-unevenness-y",`${(37+$(c,f,18)).toFixed(2)}%`),q.style.setProperty("--archive-unevenness-angle-a",`${(96+$(c,f,30)).toFixed(2)}deg`),q.style.setProperty("--archive-unevenness-angle-b",`${$(c,f,24).toFixed(2)}deg`);let m=R(`${l}:bleed`),v=h(a.artifacts.bleedThrough);B.style.setProperty("--archive-bleed-angle",`${(2+$(m,v,6)).toFixed(2)}deg`),B.style.setProperty("--archive-bleed-x",`${(63+$(m,v,18)).toFixed(2)}%`),B.style.setProperty("--archive-bleed-y",`${(24+$(m,v,14)).toFixed(2)}%`);let b=R(`${l}:offsets`);J.style.setProperty("--archive-texture-position",`${(b()*260).toFixed(1)}px ${(b()*260).toFixed(1)}px`),I.style.setProperty("--archive-grain-position",`${(b()*320).toFixed(1)}px ${(b()*320).toFixed(1)}px`);let A=R(`${l}:edge`),N=h(a.artifacts.edgeNoise),le={left:.6+$(A,N,.3),right:.6+$(A,N,.3),top:.4+$(A,N,.3),bottom:.4+$(A,N,.3)};for(let[M,re]of Object.entries(le))O.style.setProperty(`--archive-edge-blur-${M}`,re.toFixed(3));let Y=a.border.enabled?h(a.border.darkness):0,Ye=a.border.enabled?Math.max(0,a.border.thickness):0;p.style.setProperty("--archive-border-darkness",String(Y)),p.style.setProperty("--archive-border-width",`${Ye}px`);let X=Math.max(0,a.border.thickness),ce=a.border.enabled&&X>0;if(ce){let M=R(l),re=h(a.border.darkness),pe=Math.round((1-re)*255),Xe=[a.border.sides.top,a.border.sides.right,a.border.sides.bottom,a.border.sides.left],Pe=[X*(.82+M()*.36),X*(.82+M()*.36),X*(.82+M()*.36),X*(.82+M()*.36)].map((Q,he)=>Xe[he]?Q:0);u.style.padding=Pe.map(Q=>`${Q.toFixed(1)}px`).join(" "),u.style.background=`rgb(${pe}, ${pe}, ${pe})`;let Qe=["top","right","bottom","left"];for(let[Q,he]of Qe.entries())p.style.setProperty(`--archive-frame-${he}`,`${Pe[Q].toFixed(1)}px`);let Ee=h(a.border.roughness);Ee>0?y.style.boxShadow=`inset 0 0 ${(Ee*16).toFixed(1)}px rgba(0, 0, 0, ${(re*.55).toFixed(3)})`:y.style.removeProperty("box-shadow")}else{u.style.removeProperty("padding"),u.style.removeProperty("background"),y.style.removeProperty("box-shadow");for(let M of["top","right","bottom","left"])p.style.removeProperty(`--archive-frame-${M}`)}p.style.setProperty("--archive-grayscale",a.capture.grayscale?"1":"0"),p.style.setProperty("--archive-brightness",String(a.exposure.brightness)),p.style.setProperty("--archive-contrast",String(a.exposure.contrast)),p.style.setProperty("--archive-blur",`${h(a.ink.blur)*.6}px`);let ne=[];a.capture.perspective&&(ne.push("perspective(1200px)"),ne.push(`rotateY(${a.capture.perspective}deg)`));let te=a.capture.rotation,Te=h(a.capture.rotationJitter);if(Te>0){let M=R(l);te+=(M()*2-1)*Te*1.2}te&&ne.push(`rotate(${te.toFixed(3)}deg)`);let $e=ne.join(" ");ce?(p.style.removeProperty("transform"),y.style.transform=$e):(y.style.removeProperty("transform"),p.style.transform=$e),p.style.setProperty("--archive-rotation",ce?`${te.toFixed(3)}deg`:"0deg"),V?.remove(),V=null,P?.remove(),P=null,W==="svg"?(P=Ie(`${D}-content`,a),V=be(D,a,j(l)%1e4),p.prepend(P,V),y.style.filter=`url("#${D}-content")`,u.style.filter=`url("#${D}")`):(y.style.removeProperty("filter"),u.style.removeProperty("filter")),L.remove(),L=Je(a,R(l)),u.append(L)}return K(),{element:p,content:t,get settings(){return z(a)},update(i){E||(a=H(S(a,i),l),K())},destroy(){if(E)return;E=!0;let i=g.parentNode;i&&(i.insertBefore(t,g),g.remove()),p.remove()}}}function xe(e){for(let n of e)if(window.matchMedia(n.query).matches)return n;return e[Math.max(0,e.length-1)]??{query:"all",mode:"single"}}function un(e,n){return e===void 0||e===!1?!1:typeof e=="string"?n.get(e):S(fe.subtle,e)}function gn(e,n){let t=document.createElement("div");return t.className="archive-scan-gutter",t.dataset.edge=e,t.setAttribute("aria-hidden","true"),t.style.setProperty("--gutter-width",`${n.width}px`),t.style.setProperty("--gutter-darkness",String(h(n.darkness))),t.style.setProperty("--gutter-middle",String(h(n.darkness)*.55)),t.style.setProperty("--gutter-highlight",String(h(n.highlight))),t.style.setProperty("--gutter-blur",`${Math.max(0,n.blur)*.12}px`),t.style.setProperty("--gutter-curve",`${32+h(n.curvature)*20}%`),t}function mn(e,n){n?e.element.dataset.spineSide=n:delete e.element.dataset.spineSide}function _(e,n,t){let r=document.createElement("div");if(r.className="archive-scan-slot",r.dataset.side=n,e)r.append(e.element),t&&n!=="single"&&e.element.querySelector(".archive-scan-content")?.append(gn(n==="left"?"right":"left",t));else{let o=document.createElement("div");o.className="archive-scan-empty",r.append(o)}return r}function fn(e,n){if(Array.isArray(e))return{book:null,sourcePages:e.map(C)};let t=Ce(e,{hostClasses:n});return{book:t,sourcePages:t.pages.map(C)}}function we(e,n){ae();let t=C(e),{book:r,sourcePages:o}=fn(n.pages,n.bookHostClasses);if(o.length===0)throw r?.restore(),new Error("Archive viewer requires at least one page.");let s=n.registry??F,l=n.bindingRegistry??ve,a=H(S(s.resolve(n.preset??"clean"),n.overrides??{}),n.seed??n.preset??"page"),d=document.createElement("div");d.className="archive-scan-viewer",t.append(d);let g=o.map((i,c)=>Ue(i,{preset:n.preset,overrides:a,seed:`${n.seed??n.preset??"page"}:${c}`,registry:s,enhancement:n.enhancement})),p=Math.max(0,Math.min(g.length-1,Math.floor(n.initialPage??0))),y=!1;if(n.spinePages!==void 0){let i=ue(n.spinePages);d.style.setProperty("--archive-curl-half",`${i.curlHalf.toFixed(1)}px`),d.style.setProperty("--archive-block-depth",`${i.blockDepth}px`)}let u=n.layouts.map(i=>window.matchMedia(i.query));function x(i){return i.spread?.firstPageSide??"left"}function J(i,c){return x(i)==="right"?c===0?[null,0]:[2*c-1,2*c]:[2*c,2*c+1]}function q(i){return x(i)==="right"?1+Math.ceil((g.length-1)/2):Math.ceil(g.length/2)}function B(i,c){return x(i)==="right"?c===0?0:Math.ceil(c/2):Math.floor(c/2)}function I(i,c){let[f,m]=J(i,c);return[f!==null&&f<g.length?f:null,m!==null&&m<g.length?m:null]}function O(i,c){let f=new Set,m=new Set;if(i)for(let[v,b]of c)v!==null&&f.add(v),b!==null&&m.add(b);for(let[v,b]of g.entries())b.update({border:{sides:{right:!f.has(v),left:!m.has(v)}}})}function L(i){let c=new Set,f=new Set;for(let[m,v]of i)m!==null&&c.add(m),v!==null&&f.add(v);for(let[m,v]of g.entries())mn(v,c.has(m)?"left":f.has(m)?"right":null)}function D(i,c,f){let[m,v]=I(i,c),b=document.createElement("div");return b.className="archive-scan-row",b.append(_(m===null?null:g[m],"left",f),_(v===null?null:g[v],"right",f)),b}function V(i){let c=document.createElement("div");return c.className="archive-scan-row",c.append(_(i,"single",!1)),c}function P(){g[p]?.element.scrollIntoView({block:"start"})}async function E(){if(y)return;let i=xe(n.layouts),c=un(i.gutter,l),f=n.continuous===!0;d.dataset.mode=i.mode,d.dataset.fit=i.pageFit??"contain",f?d.dataset.continuous="true":delete d.dataset.continuous,d.style.setProperty("--archive-gap",`${i.gap??0}px`);for(let A of g)A.element.querySelector(".archive-scan-gutter")?.remove();if(i.background?d.style.background=i.background:d.style.removeProperty("background"),i.mode==="single"){O(!1,[]),L([]),f?d.replaceChildren(...g.map(V)):d.replaceChildren(_(g[p],"single",!1)),f&&P();return}if(f){let A=q(i),N=Array.from({length:A},(le,Y)=>I(i,Y));O(c!==!1,N),L(N),d.replaceChildren(...Array.from({length:A},(le,Y)=>D(i,Y,c))),P();return}let m=I(i,B(i,p)),[v,b]=m;O(c!==!1,[m]),L([m]),d.replaceChildren(_(v===null?null:g[v],"left",c),_(b===null?null:g[b],"right",c))}function U(){E()}async function W(i){if(p=Math.max(0,Math.min(g.length-1,Math.floor(i))),n.continuous===!0){P();return}await E()}function K(i){if(!(i.target instanceof Element))return;let c=i.target.closest("a[href]");if(!(c instanceof HTMLAnchorElement)||i.button!==0||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||c.target==="_blank")return;let f=c.getAttribute("href");if(!f||!f.startsWith("#"))return;let m=f.slice(1);if(!m)return;let v=o.findIndex(b=>b.id===m||b.querySelector(`#${CSS.escape(m)}`)!==null);v!==-1&&(i.preventDefault(),W(v))}for(let i of u)i.addEventListener("change",U);return n.followLinks===!0&&d.addEventListener("click",K),E(),{element:d,pageCount:g.length,getPage(){return p},async goTo(i){await W(i)},async next(){let c=xe(n.layouts).mode==="spread"?2:1;if(p=Math.min(g.length-1,p+c),n.continuous===!0){P();return}await E()},async previous(){let c=xe(n.layouts).mode==="spread"?2:1;if(p=Math.max(0,p-c),n.continuous===!0){P();return}await E()},async refresh(){await E()},destroy(){if(!y){y=!0;for(let i of u)i.removeEventListener("change",U);d.removeEventListener("click",K);for(let i of g)i.destroy();r?.restore(),d.remove()}}}}var ie=3;var bn=[{key:"paper",heading:"Paper"},{key:"exposure",heading:"Exposure"},{key:"ink",heading:"Ink"},{key:"tone",heading:"Tone"},{key:"artifacts",heading:"Artifacts"},{key:"capture",heading:"Capture"},{key:"border",heading:"Border"}],Ke=[{kind:"range",id:"control-contrast",label:"Contrast",hint:"Pushes midtones toward black or white as part of the exposure curve, before tone reduction.",tier:"basic",min:.5,max:2.5,step:.05,read:e=>e.exposure.contrast,apply:e=>({exposure:{contrast:e}}),applyRange:(e,n)=>({exposure:{contrast:[e,n]}})},{kind:"range",id:"control-levels",label:"Gray levels",hint:"Limits the page to a fixed number of gray levels: 2 is pure black and white, 256 is effectively continuous. Moving it switches the page to quantized tone.",tier:"basic",tone:!0,min:0,max:1,step:.01,read:(e,n)=>n.layout==="spread"?We(n.intendedTone.levels):We(e.tone.levels),apply:e=>({tone:{mode:"quantized",levels:se(e)}}),applyRange:(e,n)=>({tone:{mode:"quantized",levels:[se(e),se(n)]}}),format:e=>String(se(e)),disabled:e=>e.ditheredGray},{kind:"range",id:"control-threshold",label:"Threshold",hint:"The black point of two-tone output: pixels below the threshold turn black, above it white. Higher values produce more black. Moving it switches the page to bitonal tone.",tier:"basic",tone:!0,min:.3,max:.9,step:.01,read:(e,n)=>n.layout==="spread"?n.intendedTone.threshold:e.tone.threshold,apply:e=>({tone:{mode:"bitonal",threshold:e}}),applyRange:(e,n)=>({tone:{mode:"bitonal",threshold:[e,n]}}),disabled:e=>e.ditheredGray},{kind:"range",id:"control-ink-spread",label:"Ink spread",hint:"Thickens dark marks, as if the toner gained weight on a well-used copier.",tier:"basic",min:0,max:1,step:.02,read:e=>e.ink.spread,apply:e=>({ink:{spread:e}}),applyRange:(e,n)=>({ink:{spread:[e,n]}})},{kind:"range",id:"control-blur",label:"Blur",hint:"Soft-focus blur applied to the inked sheet before tone reduction, as if the scanner lens were slightly out of focus.",tier:"basic",min:0,max:1,step:.02,read:e=>e.ink.blur,apply:e=>({ink:{blur:e}}),applyRange:(e,n)=>({ink:{blur:[e,n]}})},{kind:"range",id:"control-grain",label:"Grain",hint:"Fine toner and paper noise across the sheet.",tier:"basic",min:0,max:1,step:.02,read:e=>e.artifacts.grain,apply:e=>({artifacts:{grain:e}}),applyRange:(e,n)=>({artifacts:{grain:[e,n]}})},{kind:"range",id:"control-dither",label:"Dither amount",hint:"Random noise applied before tone reduction. It keeps detail alive in coarse gray levels.",tier:"basic",tone:!0,min:0,max:1,step:.02,read:(e,n)=>n.layout==="spread"?n.intendedTone.ditherAmount:e.tone.ditherAmount,apply:e=>e>0?{tone:{dither:"random",ditherAmount:e}}:{tone:{ditherAmount:0}},applyRange:(e,n)=>e>0||n>0?{tone:{dither:"random",ditherAmount:[e,n]}}:{tone:{ditherAmount:0}},disabled:e=>e.ditheredGray},{kind:"range",id:"control-rotation-left",label:"Rotation \u2014 left page",hint:"Manual rotation of the left (verso) sheet. The center is straight; sliding left or right sets the direction and angle. In facing-pages mode each page rotates independently.",tier:"basic",min:-ie,max:ie,step:.05,read:(e,n)=>n.rotationLeft,apply:e=>({capture:{rotation:e}}),format:e=>`${e.toFixed(2)}\xB0`,onInput:(e,n)=>{if(n.pageRotation.left=e,n.ringBinder()){n.applyBindingTilt();return}n.pages()[0]?.update({capture:{rotation:e}})}},{kind:"range",id:"control-rotation-right",label:"Rotation \u2014 right page",hint:"Manual rotation of the right (recto) sheet. The center is straight; sliding left or right sets the direction and angle. In single-page mode the left setting applies.",tier:"basic",min:-ie,max:ie,step:.05,read:(e,n)=>n.layout==="spread"?n.rotationRight:0,apply:e=>({capture:{rotation:e}}),format:e=>`${e.toFixed(2)}\xB0`,disabled:e=>e.layout!=="spread"||e.ringBinder,onInput:(e,n)=>{n.pageRotation.right=e,n.layout()==="spread"&&!n.ringBinder()&&n.pages()[1]?.update({capture:{rotation:e}})}},{kind:"range",id:"control-shinethru",label:"Shine-through",hint:"Mirrored ghost of the reverse side of the page showing through the sheet.",tier:"basic",min:0,max:1,step:.02,read:e=>e.artifacts.shineThrough,apply:e=>({artifacts:{shineThrough:e}}),applyRange:(e,n)=>({artifacts:{shineThrough:[e,n]}})},{kind:"toggle",id:"control-frame",label:"Copier frame",hint:"The dark surround of the copier bed captured around the sheet. In spreads the binding side is suppressed so facing pages meet at the spine.",tier:"basic",read:e=>e.border.enabled,apply:e=>({border:{enabled:e}})},{kind:"range",id:"control-paper-tone",label:"Paper tone",hint:"Luminance of the paper base, independent of the exposure treatment.",tier:"advanced",group:"paper",min:0,max:1,step:.02,read:e=>e.paper.tone,apply:e=>({paper:{tone:e}}),applyRange:(e,n)=>({paper:{tone:[e,n]}})},{kind:"range",id:"control-paper-texture",label:"Paper texture",hint:"Subtle visual texture of the paper fibers.",tier:"advanced",group:"paper",min:0,max:1,step:.02,read:e=>e.paper.texture,apply:e=>({paper:{texture:e}}),applyRange:(e,n)=>({paper:{texture:[e,n]}})},{kind:"range",id:"control-brightness",label:"Brightness",hint:"Overall brightness multiplier in the exposure curve. 1 leaves the sheet unchanged.",tier:"advanced",group:"exposure",min:.5,max:2,step:.02,read:e=>e.exposure.brightness,apply:e=>({exposure:{brightness:e}}),applyRange:(e,n)=>({exposure:{brightness:[e,n]}})},{kind:"range",id:"control-gamma",label:"Gamma",hint:"Midtone response of the exposure curve. Below 1 darkens midtones, above 1 lightens them.",tier:"advanced",group:"exposure",min:.5,max:2,step:.02,read:e=>e.exposure.gamma,apply:e=>({exposure:{gamma:e}}),applyRange:(e,n)=>({exposure:{gamma:[e,n]}})},{kind:"range",id:"control-unevenness",label:"Unevenness",hint:"Uneven illumination across the sheet, like a copier lamp losing calibration.",tier:"advanced",group:"exposure",min:0,max:1,step:.02,read:e=>e.exposure.unevenness,apply:e=>({exposure:{unevenness:e}}),applyRange:(e,n)=>({exposure:{unevenness:[e,n]}})},{kind:"range",id:"control-blown-highlights",label:"Blown highlights",hint:"Highlight clipping. Higher values turn more bright areas pure white.",tier:"advanced",group:"exposure",min:0,max:1,step:.02,read:e=>e.exposure.blownHighlights,apply:e=>({exposure:{blownHighlights:e}}),applyRange:(e,n)=>({exposure:{blownHighlights:[e,n]}})},{kind:"range",id:"control-crushed-shadows",label:"Crushed shadows",hint:"Shadow clipping. Higher values turn more dark areas pure black.",tier:"advanced",group:"exposure",min:0,max:1,step:.02,read:e=>e.exposure.crushedShadows,apply:e=>({exposure:{crushedShadows:e}}),applyRange:(e,n)=>({exposure:{crushedShadows:[e,n]}})},{kind:"range",id:"control-ink-erosion",label:"Ink erosion",hint:"Thins dark marks, as if the toner ran low and copies came out faint.",tier:"advanced",group:"ink",min:0,max:1,step:.02,read:e=>e.ink.erosion,apply:e=>({ink:{erosion:e}}),applyRange:(e,n)=>({ink:{erosion:[e,n]}})},{kind:"select",id:"control-tone-mode",label:"Tone mode",hint:"Tone reduction applied to the finished scan: continuous keeps every gray, quantized limits the palette, bitonal prints in pure black and white.",tier:"advanced",group:"tone",tone:!0,options:[{value:"continuous",label:"continuous"},{value:"quantized",label:"quantized"},{value:"bitonal",label:"bitonal"}],read:(e,n)=>n.layout==="spread"?n.intendedTone.mode:e.tone.mode,apply:e=>({tone:{mode:e}}),disabled:e=>e.ditheredGray},{kind:"select",id:"control-tone-dither",label:"Dither pattern",hint:"Noise pattern mixed into the sheet before tone reduction to keep banding from appearing in coarse tones.",tier:"advanced",group:"tone",tone:!0,options:[{value:"none",label:"none"},{value:"random",label:"random"}],read:(e,n)=>n.layout==="spread"?n.intendedTone.dither:e.tone.dither,apply:e=>({tone:{dither:e}}),disabled:e=>e.ditheredGray},{kind:"range",id:"control-dust",label:"Dust",hint:"Density of dust specks caught on the glass.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.dust,apply:e=>({artifacts:{dust:e}}),applyRange:(e,n)=>({artifacts:{dust:[e,n]}})},{kind:"range",id:"control-scratches",label:"Scratches",hint:"Density of scratches across the scan.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.scratches,apply:e=>({artifacts:{scratches:e}}),applyRange:(e,n)=>({artifacts:{scratches:[e,n]}})},{kind:"range",id:"control-bleedthrough",label:"Bleed-through",hint:"Ink from the reverse side bleeding through the paper.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.bleedThrough,apply:e=>({artifacts:{bleedThrough:e}}),applyRange:(e,n)=>({artifacts:{bleedThrough:[e,n]}})},{kind:"range",id:"control-streaks",label:"Vertical streaks",hint:"Vertical streaks from a dirty copier glass or drum.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.verticalStreaks,apply:e=>({artifacts:{verticalStreaks:e}}),applyRange:(e,n)=>({artifacts:{verticalStreaks:[e,n]}})},{kind:"range",id:"control-bands",label:"Horizontal bands",hint:"Horizontal banding from a tired scanner or copier transport.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.horizontalBands,apply:e=>({artifacts:{horizontalBands:e}}),applyRange:(e,n)=>({artifacts:{horizontalBands:[e,n]}})},{kind:"range",id:"control-edgenoise",label:"Edge noise",hint:"Noise and smudges along the sheet edges.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.edgeNoise,apply:e=>({artifacts:{edgeNoise:e}}),applyRange:(e,n)=>({artifacts:{edgeNoise:[e,n]}})},{kind:"toggle",id:"control-grayscale",label:"Grayscale",hint:"Converts the content to grayscale before tone treatment.",tier:"advanced",group:"capture",read:e=>e.capture.grayscale,apply:e=>({capture:{grayscale:e}})},{kind:"range",id:"control-perspective",label:"Perspective",hint:"Keystone distortion, as if the sheet lay skewed on the glass.",tier:"advanced",group:"capture",min:0,max:1,step:.02,read:e=>e.capture.perspective,apply:e=>({capture:{perspective:e}}),applyRange:(e,n)=>({capture:{perspective:[e,n]}}),disabled:e=>e.ringBinder},{kind:"range",id:"control-rotation-jitter",label:"Rotation jitter",hint:"Seeded random misalignment added on top of the fixed rotation, different for every seed.",tier:"advanced",group:"capture",min:0,max:1,step:.02,read:e=>e.capture.rotationJitter,apply:e=>({capture:{rotationJitter:e}}),applyRange:(e,n)=>({capture:{rotationJitter:[e,n]}}),disabled:e=>e.ringBinder},{kind:"range",id:"control-frame-darkness",label:"Frame darkness",hint:"Darkness of the copier frame band around the sheet.",tier:"advanced",group:"border",min:0,max:1,step:.02,read:e=>e.border.darkness,apply:e=>({border:{darkness:e}}),applyRange:(e,n)=>({border:{darkness:[e,n]}})},{kind:"range",id:"control-frame-thickness",label:"Frame thickness",hint:"Thickness of the copier frame band in pixels.",tier:"advanced",group:"border",min:0,max:60,step:1,read:e=>e.border.thickness,apply:e=>({border:{thickness:e}}),applyRange:(e,n)=>({border:{thickness:[e,n]}})},{kind:"range",id:"control-frame-roughness",label:"Frame roughness",hint:"Irregularity of the frame edges.",tier:"advanced",group:"border",min:0,max:1,step:.02,read:e=>e.border.roughness,apply:e=>({border:{roughness:e}}),applyRange:(e,n)=>({border:{roughness:[e,n]}})},{kind:"toggle",id:"control-border-top",label:"Frame \u2014 top side",hint:"Whether the top edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.top,apply:e=>({border:{sides:{top:e}}})},{kind:"toggle",id:"control-border-right",label:"Frame \u2014 right side",hint:"Whether the right edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.right,apply:e=>({border:{sides:{right:e}}})},{kind:"toggle",id:"control-border-bottom",label:"Frame \u2014 bottom side",hint:"Whether the bottom edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.bottom,apply:e=>({border:{sides:{bottom:e}}})},{kind:"toggle",id:"control-border-left",label:"Frame \u2014 left side",hint:"Whether the left edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.left,apply:e=>({border:{sides:{left:e}}})}];function se(e){let n=Math.min(1,Math.max(0,e));return Math.max(2,Math.min(256,Math.round(Math.pow(2,1+n*7))))}function We(e){let n=Math.max(2,Math.min(256,e));return(Math.log2(n)-1)/7}function yn(e){return`output-${e.id.replace(/^control-/,"")}`}function ke(e){return`
    <span class="demo-slider-title"
      >${e.label}
      <button
        class="demo-info"
        type="button"
        aria-label="About ${e.label}"
        aria-expanded="false"
      >
        i
      </button>
    </span>`}function Se(e){return`
    <span class="demo-popover" role="tooltip"
      >${e.hint}</span
    >`}function T(e){let n=Ke.find(r=>r.id===e);if(!n)throw new Error(`Unknown playground control: ${e}`);if(n.kind==="range"){let r=n.applyRange!==void 0?`
      <span class="demo-slider-dual" id="${n.id}-dual">
        <input
          id="${n.id}-range-min"
          type="range"
          min="${n.min}"
          max="${n.max}"
          step="${n.step}"
          value="0"
          aria-label="${n.label} minimum"
        />
        <input
          id="${n.id}-range-max"
          type="range"
          min="${n.min}"
          max="${n.max}"
          step="${n.step}"
          value="0"
          aria-label="${n.label} maximum"
        />
      </span>`:"";return`
    <label class="demo-slider">
      ${ke(n)}

      <input
        id="${n.id}"
        type="range"
        min="${n.min}"
        max="${n.max}"
        step="${n.step}"
        value="0"
      />
      ${r}

      <output id="${yn(n)}">\u2013</output>
      ${Se(n)}
    </label>`}if(n.kind==="toggle")return`
    <label class="demo-slider demo-toggle">
      ${ke(n)}

      <input id="${n.id}" type="checkbox" />
      ${Se(n)}
    </label>`;let t=n.options.map(r=>`<option value="${r.value}">${r.label}</option>`).join(`
      `);return`
    <label class="demo-slider demo-select">
      ${ke(n)}

      <select id="${n.id}">
        ${t}
      </select>
      ${Se(n)}
    </label>`}function xn(){let e=`
    <label class="demo-slider demo-toggle demo-ranges-toggle">
      <span class="demo-slider-title"
        >Ranges (expert)
        <button
          class="demo-info"
          type="button"
          aria-label="About range mode"
          aria-expanded="false"
        >
          i
        </button>
      </span>
      <input id="control-ranges" type="checkbox" />
      <span class="demo-popover" role="tooltip"
        >Turns every numeric slider into a two-handle range. Instead
        of fixing one value, the renderer picks one value between
        the handles \u2014 derived from the seed and shared by every
        sheet of the copy run \u2014 while grain and artifacts still
        differ per sheet.</span
      >
    </label>`,n=bn.map(({key:t,heading:r})=>{let o=Ke.filter(s=>s.tier==="advanced"&&s.group===t).map(s=>T(s.id)).join(`
`);return o?`
    <div class="demo-advanced-group">
      <p class="demo-advanced-heading">${r}</p>
      ${o}
    </div>`:""}).join(`
`);return`
    <details class="demo-advanced">
      <summary>Advanced settings</summary>
      ${e}
      <div class="demo-advanced-groups">${n}
      </div>
    </details>`}var yt=`
  <fieldset>
    <legend>Preset</legend>
    <select id="control-preset" aria-label="Scan preset"></select>
    <p class="demo-hint">
      Custom presets registered through
      <code>presets.define()</code> appear here too.
    </p>
  </fieldset>

  <fieldset>
    <legend>Enhancement</legend>
    <select id="control-enhancement" aria-label="Enhancement mode">
      <option value="auto">auto (SVG if supported)</option>
      <option value="svg">svg (force SVG filters)</option>
      <option value="css">css (plain fallback)</option>
    </select>
  </fieldset>

  <fieldset>
    <legend>Layout</legend>
    <select id="control-layout" aria-label="Page layout">
      <option value="single">Single page</option>
      <option value="spread" selected>Facing pages</option>
    </select>
    <p class="demo-hint">
      Facing pages scan two sheets with a shared binding shadow.
    </p>
  </fieldset>

  <fieldset>
    <legend>Binding</legend>
    <label class="demo-slider">
      <span class="demo-slider-title"
        >Pages per side
        <button
          class="demo-info"
          type="button"
          aria-label="About pages per side"
          aria-expanded="false"
        >
          i
        </button>
      </span>
      <input id="control-page-count" type="range" min="1" max="16" step="1" value="8" />
      <output id="output-page-count">\u2013</output>
      <span class="demo-popover" role="tooltip"
        >Stacks more sheets at the left and right fore-edges and
        deepens the spine fold. The default of 8 matches the
        original look.</span
      >
    </label>
  </fieldset>

  <fieldset class="demo-seed-row">
    <legend>Seed</legend>
    <input
      id="control-seed"
      type="text"
      value="demo-1971"
      aria-label="Effect seed"
    />
    <button id="control-seed-random" type="button">Randomize</button>
  </fieldset>

  <fieldset id="control-overrides">
    <legend>Live overrides (update)</legend>

    ${T("control-contrast")}
    ${T("control-levels")}
    ${T("control-threshold")}
    ${T("control-ink-spread")}
    ${T("control-blur")}
    ${T("control-grain")}
    ${T("control-dither")}

    <label class="demo-slider demo-toggle">
      <span class="demo-slider-title"
        >Grayscale dithering
        <button
          class="demo-info"
          type="button"
          aria-label="About grayscale dithering"
          aria-expanded="false"
        >
          i
        </button>
      </span>
      <input id="control-dithered-gray" type="checkbox" />
      <span class="demo-popover" role="tooltip"
        >Reproduces every gray tone as random black dots (stochastic
        screening): darker areas get more dots, lighter areas fewer.
        The sheet stays a live document while all tones come from
        random dithering.</span
      >
    </label>

    ${T("control-rotation-left")}
    ${T("control-rotation-right")}
    ${T("control-shinethru")}
    ${T("control-frame")}

    <label class="demo-slider demo-toggle">
      <span class="demo-slider-title"
        >Ring binder
        <button
          class="demo-info"
          type="button"
          aria-label="About the ring binder"
          aria-expanded="false"
        >
          i
        </button>
      </span>
      <input id="control-ring-binder" type="checkbox" />
      <span class="demo-popover" role="tooltip"
        >Hangs the sheets from a plastic comb binding at the head. The
        binding is part of the copy, so it receives the same tone
        treatment as the sheet.</span
      >
    </label>

    ${xn()}
  </fieldset>

  <button id="control-destroy" type="button">Destroy effect</button>
  <button id="control-to-viewer" type="button">Show in viewer</button>
  <button id="control-download" type="button">Download preset</button>

  <fieldset>
    <legend>Resolved settings</legend>
    <div class="demo-settings-editor">
      <pre id="control-settings-highlight" aria-hidden="true"></pre>
      <textarea
        id="control-settings"
        spellcheck="false"
        wrap="off"
        aria-label="Resolved scan settings"
        aria-invalid="false"
      ></textarea>
    </div>
  </fieldset>
`;var de={paper:{tone:1,texture:.07},exposure:{brightness:1.02,contrast:2.1,gamma:.9,unevenness:.22,blownHighlights:.34,crushedShadows:.58},ink:{spread:.04,erosion:.09,blur:.3},tone:{mode:"bitonal",levels:2,threshold:.64,dither:"random",ditherAmount:.34},artifacts:{grain:.84,dust:.2,scratches:.12,bleedThrough:.025,shineThrough:.3,verticalStreaks:.07,horizontalBands:.035,edgeNoise:.46},capture:{grayscale:!0,rotation:.6,perspective:0,rotationJitter:0},border:{enabled:!0,darkness:1,thickness:20,roughness:.86,sides:{top:!0,right:!1,bottom:!0,left:!0}}};var kn=["paper","exposure","ink","tone","artifacts","capture","border","extends"];kn.some(e=>e in de)?F.set("strandkorb",de):F.import(de);function Sn(e,n){return we(e,n)}window.bookViewer=Sn;})();
