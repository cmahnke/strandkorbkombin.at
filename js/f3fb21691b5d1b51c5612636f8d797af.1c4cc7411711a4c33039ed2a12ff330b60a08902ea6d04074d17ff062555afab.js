"use strict";(()=>{})();

;
"use strict";(()=>{var Xe="http://www.w3.org/2000/svg";function ce(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function z(e){return JSON.parse(JSON.stringify(e))}function Pe(e,t){for(let[n,r]of Object.entries(t))r!==void 0&&(ce(r)?(ce(e[n])||(e[n]={}),Pe(e[n],r)):e[n]=z(r))}function M(e,...t){let n=z(e);for(let r of t)ce(r)&&Pe(n,r);return n}function h(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function le(e){let t=.75+e/32;return{curlFactor:t,curlHalf:24*t,blockDepth:Math.min(27,3+e)}}function H(e){let t=String(e),n=2166136261;for(let r=0;r<t.length;r+=1)n^=t.charCodeAt(r),n=Math.imul(n,16777619);return n>>>0}function C(e){let t=H(e)||1;return()=>{t+=1831565813;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function x(e){return document.createElementNS(Xe,e)}function w(e,t){for(let[n,r]of Object.entries(t))e.setAttribute(n,String(r))}function R(e){if(e instanceof HTMLElement)return e;let t=document.querySelector(e);if(!t)throw new Error(`Archive Scan source was not found: ${e}`);return t}function $e(){return typeof SVGFEColorMatrixElement<"u"&&typeof SVGFEComponentTransferElement<"u"&&typeof CSS<"u"&&CSS.supports("filter","grayscale(1)")}var G=class{constructor(t,n){Object.defineProperty(this,"label",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"requireName",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"definitions",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}load(t){for(let[n,r]of Object.entries(t))this.set(n,r)}define(t,n){if(this.definitions.has(t))throw new Error(`${this.label} "${t}" already exists.`);this.set(t,n)}set(t,n){if(this.requireName&&!t.trim())throw new Error(`${this.label} names may not be empty.`);this.definitions.set(t,z(n))}update(t,n){this.set(t,M(this.get(t),n))}get(t){let n=this.definitions.get(t);if(!n)throw new Error(`Unknown ${this.label.toLowerCase()} "${t}".`);return z(n)}has(t){return this.definitions.has(t)}names(){return[...this.definitions.keys()]}remove(t){return this.definitions.delete(t)}};var Qe={paper:{tone:.97,texture:.04},exposure:{brightness:1,contrast:1,gamma:1,unevenness:0,blownHighlights:0,crushedShadows:0},ink:{spread:0,erosion:0,blur:0},tone:{mode:"continuous",levels:256,threshold:.55,dither:"none",ditherAmount:0},artifacts:{grain:0,dust:0,scratches:0,bleedThrough:0,shineThrough:0,verticalStreaks:0,horizontalBands:0,edgeNoise:0},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:0},border:{enabled:!0,darkness:.9,thickness:24,roughness:.25,sides:{top:!0,right:!0,bottom:!0,left:!0}}},Ze={clean:{},"book-photo":{paper:{tone:.96,texture:.09},exposure:{brightness:1.02,contrast:.96,gamma:1.02,unevenness:.18,blownHighlights:.04,crushedShadows:.02},artifacts:{grain:.025,dust:.025,scratches:.01,bleedThrough:.02,shineThrough:.15,verticalStreaks:0,horizontalBands:0,edgeNoise:.04},capture:{grayscale:!0,rotation:.08,perspective:.04,rotationJitter:.3}},"bound-volume":{extends:"book-photo",exposure:{contrast:1.03,unevenness:.13},artifacts:{grain:.035,dust:.04,edgeNoise:.1}},"microfilm-journal":{paper:{tone:.91,texture:.22},exposure:{brightness:1.06,contrast:1.3,gamma:.94,unevenness:.4,blownHighlights:.2,crushedShadows:.32},ink:{spread:.22,erosion:.04,blur:.1},tone:{mode:"continuous",levels:256,threshold:.55,dither:"random",ditherAmount:.05},artifacts:{grain:.09,dust:.24,scratches:.38,bleedThrough:.15,shineThrough:.35,verticalStreaks:.72,horizontalBands:.08,edgeNoise:.7},capture:{grayscale:!0,rotation:-.14,perspective:.02,rotationJitter:.55},border:{enabled:!0,darkness:.94,thickness:38,roughness:.72}},"early-office-bitonal":{paper:{tone:1,texture:.07},exposure:{brightness:1.02,contrast:1.58,gamma:.9,unevenness:.15,blownHighlights:.24,crushedShadows:.42},ink:{spread:.38,erosion:.05,blur:.03},tone:{mode:"bitonal",levels:2,threshold:.61,dither:"random",ditherAmount:.1},artifacts:{grain:.063,dust:.11,scratches:.05,bleedThrough:.025,shineThrough:.22,verticalStreaks:.07,horizontalBands:.035,edgeNoise:.22},capture:{grayscale:!0,rotation:.04,perspective:0,rotationJitter:.45}},"xerox-zine":{extends:"early-office-bitonal",exposure:{contrast:1.9,unevenness:.22,blownHighlights:.34,crushedShadows:.58},ink:{spread:.62,erosion:.09,blur:.025},tone:{threshold:.64,ditherAmount:.16},artifacts:{grain:.076,dust:.2,scratches:.12,shineThrough:.3,edgeNoise:.46},border:{enabled:!0,darkness:1,thickness:20,roughness:.86}},"analog-gray-copy":{paper:{tone:.98,texture:.08},exposure:{brightness:1.01,contrast:1.2,gamma:.96,unevenness:.12,blownHighlights:.1,crushedShadows:.14},ink:{spread:.14,erosion:.025,blur:.07},tone:{mode:"quantized",levels:8,threshold:.55,dither:"random",ditherAmount:.32},artifacts:{grain:.05,dust:.05,scratches:.015,bleedThrough:.02,shineThrough:.12,verticalStreaks:.025,horizontalBands:.02,edgeNoise:.09},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:.3}},"digital-gray-copy":{paper:{tone:.99,texture:.02},exposure:{brightness:1,contrast:1.08,gamma:1,unevenness:.035,blownHighlights:.04,crushedShadows:.06},ink:{spread:.05,erosion:.01,blur:.02},tone:{mode:"quantized",levels:32,threshold:.55,dither:"random",ditherAmount:.16},artifacts:{grain:.016,dust:.008,scratches:0,bleedThrough:0,shineThrough:.04,verticalStreaks:.008,horizontalBands:.006,edgeNoise:.02},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:.12}}},pe=class extends G{constructor(t={}){super("Preset",!0),this.load(t)}update(t,n){super.update(t,n)}async fromUrl(t,n){let r=await fetch(t);if(!r.ok)throw new Error(`Failed to load presets from "${t}": ${r.status} ${r.statusText}.`);let o=await r.json();if(typeof o!="object"||o===null)throw new Error(`The preset document "${t}" is not a JSON object.`);if(n)return this.set(n,o),[n];if(["paper","exposure","ink","tone","artifacts","capture","border","extends"].some(i=>i in o))throw new Error(`The preset document "${t}" contains a single preset definition; pass a preset name to presets.fromUrl().`);return this.import(o),Object.keys(o)}import(t){for(let[n,r]of Object.entries(t))this.set(n,r)}export(t){if(t)return this.get(t);let n={};for(let r of this.names())n[r]=this.get(r);return n}resolve(t="clean"){let n=new Set,r=o=>{if(n.has(o))throw new Error(`Circular preset inheritance involving "${o}".`);n.add(o);let c=this.get(o),a=c.extends,i={...c};delete i.extends;let d;return a?d=M(r(a),i):d=i,n.delete(o),d};return M(Qe,r(t))}},L=new pe(Ze);var ue={subtle:{width:18,darkness:.28,blur:10,curvature:.14,highlight:.06},"bound-volume":{width:32,darkness:.58,blur:13,curvature:.46,highlight:.1},"deep-bound-volume":{width:48,darkness:.82,blur:16,curvature:.72,highlight:.15}},he=class extends G{constructor(t={}){super("Binding style",!1),this.load(t)}},ge=new he(ue);var Q="cr-book-page",et="data-page-break";function tt(e){return e.hasAttribute(et)?!0:window.getComputedStyle(e).breakAfter==="page"}function nt(e){return window.getComputedStyle(e).breakBefore==="page"}function Ee(e,t={}){let n=R(e),r=n.parentNode;if(!r)throw new Error("The book source element must be attached to the document.");let o=Array.from(n.childNodes),c=[[]],a=[];for(let p of o){let k=c[c.length-1];if(p instanceof HTMLHRElement){a.push(p),c.push([]);continue}if(p instanceof Element){nt(p)&&c.push([]),c[c.length-1].push(p),tt(p)&&c.push([]);continue}k.push(p)}let i=(Array.isArray(t.hostClasses)?t.hostClasses:t.hostClasses!==void 0?[t.hostClasses]:[]).flatMap(p=>p.split(/\s+/)).filter(p=>p!==""&&p!==Q),d=n.nextSibling,v=[];for(let[p]of c.entries()){if(p===0){v.push(n);continue}let k=document.createElement("div");k.className=[Q,...i].join(" "),r.insertBefore(k,d),v.push(k)}let u=!n.classList.contains(Q);u&&n.classList.add(Q);for(let[p,k]of c.entries())v[p].append(...k);for(let p of a)p.remove();let y=!1;return{pages:v,restore(){if(!y){y=!0;for(let p of o)n.append(p);for(let[p,k]of v.entries())p>0&&k.remove();u&&n.classList.remove(Q)}}}}var rt=["0.2126 0.7152 0.0722 0 0","0.2126 0.7152 0.0722 0 0","0.2126 0.7152 0.0722 0 0","0 0 0 1 0"].join(" "),ot=["1 0 0 0 0","0 1 0 0 0","0 0 1 0 0","0 0 0 1 0"].join(" ");function Ce(e){let t=x("svg");t.classList.add("archive-scan-svg"),w(t,{"aria-hidden":"true",width:0,height:0,focusable:"false"});let n=x("defs"),r=x("filter");return w(r,{id:e,x:"-10%",y:"-10%",width:"120%",height:"120%","color-interpolation-filters":"sRGB"}),r.style.colorInterpolationFilters="sRGB",n.append(r),t.append(n),{svg:t,filter:r}}function at(e,t){let n=x("feColorMatrix");w(n,{in:"SourceGraphic",type:"matrix",values:t?rt:ot,result:"archive-gray"}),e.append(n)}function Re(e,t,n,r){let o=x("feComponentTransfer");w(o,{in:t,result:n});for(let c of["R","G","B"]){let a=x(`feFunc${c}`);w(a,{type:"table",tableValues:r}),o.append(a)}e.append(o)}function Fe(e,t){let n=x("feComposite");w(n,{in:t,in2:"SourceGraphic",operator:"in"}),e.append(n)}function Me(e,t,n,r,o,c){let a=x("feComposite");w(a,{in:t,in2:n,operator:"arithmetic",k1:0,k2:r.toFixed(4),k3:o.toFixed(4),k4:0,result:c}),e.append(a)}function Ae(e,t,n,r,o){let c=x("feMorphology");if(w(c,{in:t,operator:n,radius:1,result:`${o}-1`}),e.append(c),r<1)Me(e,t,`${o}-1`,1-r,r,o);else{let a=x("feMorphology");w(a,{in:`${o}-1`,operator:n,radius:1,result:`${o}-2`}),e.append(a),Me(e,`${o}-1`,`${o}-2`,2-r,r-1,o)}}function it(e,t=128){let n=[];for(let r=0;r<t;r+=1){let o=r/(t-1);o*=e.exposure.brightness,o=(o-.5)*e.exposure.contrast+.5,o=Math.pow(h(o),1/Math.max(.01,e.exposure.gamma));let c=h(e.exposure.crushedShadows);c>0&&o<c*.45&&(o*=1-c);let a=h(e.exposure.blownHighlights);if(a>0){let i=1-a*.45;o>i&&(o=i+(o-i)*(1+a*2.5))}n.push(h(o).toFixed(4))}return n.join(" ")}function Le(e,t=128){let n=[],r=e.tone.mode;for(let o=0;o<t;o+=1){let c=o/(t-1),a=c;if(r==="bitonal")a=c<e.tone.threshold?0:1;else if(r==="quantized"){let i=Math.max(2,Math.floor(e.tone.levels));a=Math.round(c*(i-1))/(i-1)}n.push(a.toFixed(4))}return n.join(" ")}function st(e){return e.tone.mode==="bitonal"?1:e.tone.mode==="quantized"?1/Math.max(1,Math.floor(e.tone.levels)-1):.16}function dt(e,t,n,r,o){let c=x("feTurbulence");w(c,{type:"fractalNoise",baseFrequency:"0.72",numOctaves:1,seed:r,stitchTiles:"stitch",result:"archive-noise"}),e.append(c);let a=x("feColorMatrix");w(a,{in:"archive-noise",type:"matrix",values:["0 0 0 1 0","0 0 0 1 0","0 0 0 1 0","0 0 0 0 1"].join(" "),result:"archive-noise-gray"}),e.append(a);let i=h(n.tone.ditherAmount)*2*st(n),d=x("feComposite");w(d,{in:t,in2:"archive-noise-gray",operator:"arithmetic",k1:0,k2:1,k3:i.toFixed(4),k4:(-i/2).toFixed(4),result:o}),e.append(d)}function qe(e,t){let{svg:n,filter:r}=Ce(e);at(r,t.capture.grayscale),Re(r,"archive-gray","archive-exposed",it(t));let o="archive-exposed";if(t.ink.spread>0&&(Ae(r,o,"erode",h(t.ink.spread)*2,"archive-spread"),o="archive-spread"),t.ink.erosion>0&&(Ae(r,o,"dilate",h(t.ink.erosion)*2,"archive-eroded"),o="archive-eroded"),t.ink.blur>0){let c=x("feGaussianBlur");w(c,{in:o,stdDeviation:(h(t.ink.blur)*.7).toFixed(3),result:"archive-blurred"}),r.append(c),o="archive-blurred"}return Fe(r,o),n}function me(e,t,n){let{svg:r,filter:o}=Ce(e),c="SourceGraphic";return t.tone.dither==="random"&&t.tone.ditherAmount>0&&(dt(o,c,t,n,"archive-dithered"),c="archive-dithered"),t.tone.mode!=="continuous"&&(Re(o,c,"archive-toned",Le(t)),c="archive-toned"),Fe(o,c),r}var Ne=64;function fe(e,t,n,r,o){let c=`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${o}"><filter id="n" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="${t}" numOctaves="${n}" seed="${e}" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="discrete" tableValues="0 1"/><feFuncG type="discrete" tableValues="0 1"/><feFuncB type="discrete" tableValues="0 1"/><feFuncA type="discrete" tableValues="${r}"/></feComponentTransfer></filter><rect width="${o}" height="${o}" filter="url(#n)"/></svg>`;return`url("data:image/svg+xml,${encodeURIComponent(c)}")`}function ze(e,t,n){let r=[];for(let o=0;o<Ne;o+=1){let c=(o+.5)/Ne,a=h((c-.5)*e+.5),i=t<1?(a-t)/(1-t):0;r.push((h(i)*n).toFixed(3))}return r.join(" ")}function Be(e){let t=.89-h(e)*.39;return ze(1.2,t,.5)}function Ie(){return ze(1.6,0,.3)}var Oe=`.archive-scan-page,
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
`;var De="archive-scan-core-styles";function re(){if(document.getElementById(De))return;let e=document.createElement("style");e.id=De,e.textContent=Oe,document.head.append(e)}var Ve=0;function Z(e){let t=document.createElement("div");return t.className=`archive-scan-overlay ${e}`,t.setAttribute("aria-hidden","true"),t}function P(e,t,n){return(e()*2-1)*t*n}function je(e,t){let n=document.createElement("div");n.className="archive-scan-generated-artifacts",n.setAttribute("aria-hidden","true");let r=Math.floor(h(e.artifacts.dust)*80);for(let i=0;i<r;i+=1){let d=document.createElement("i");d.className="archive-scan-dust",d.style.setProperty("--x",`${(t()*100).toFixed(2)}%`),d.style.setProperty("--y",`${(t()*100).toFixed(2)}%`),d.style.setProperty("--size",`${(.7+t()*3.5).toFixed(2)}px`),d.style.setProperty("--opacity",`${(.14+t()*.6).toFixed(3)}`),d.style.setProperty("--blur",`${(t()*.6).toFixed(2)}px`),n.append(d)}let o=Math.floor(h(e.artifacts.scratches)*16);for(let i=0;i<o;i+=1){let d=document.createElement("i");d.className="archive-scan-scratch",d.style.setProperty("--x",`${(t()*100).toFixed(2)}%`),d.style.setProperty("--y",`${(t()*100).toFixed(2)}%`),d.style.setProperty("--width",`${(.4+t()*1.3).toFixed(2)}px`),d.style.setProperty("--height",`${(5+t()*45).toFixed(2)}%`),d.style.setProperty("--opacity",`${(.08+t()*e.artifacts.scratches*.75).toFixed(3)}`),d.style.setProperty("--rotation",`${(-2+t()*4).toFixed(2)}deg`),n.append(d)}let c=Math.floor(h(e.artifacts.verticalStreaks)*18);for(let i=0;i<c;i+=1){let d=document.createElement("i");d.className="archive-scan-streak";let u=t()<.5?t()*10:90+t()*10;d.style.setProperty("--x",`${u.toFixed(2)}%`),d.style.setProperty("--width",`${(.5+t()*2.5).toFixed(2)}px`),d.style.setProperty("--opacity",`${(e.artifacts.verticalStreaks*(.08+t()*.45)).toFixed(3)}`),n.append(d)}let a=Math.floor(h(e.artifacts.horizontalBands)*10);for(let i=0;i<a;i+=1){let d=document.createElement("i");d.className="archive-scan-band",d.style.setProperty("--y",`${(t()*100).toFixed(2)}%`),d.style.setProperty("--height",`${(.5+t()*3).toFixed(2)}px`),d.style.setProperty("--opacity",`${(e.artifacts.horizontalBands*(.05+t()*.22)).toFixed(3)}`),n.append(d)}return n}function ct(e){let t=document.createElement("div");t.className="archive-scan-shinethru",t.setAttribute("aria-hidden","true"),t.setAttribute("inert","");let n=e.cloneNode(!0);n.removeAttribute("id"),n.style.background="transparent";for(let r of n.querySelectorAll("[id]"))r.removeAttribute("id");return t.append(n),t}function He(e,t={}){re();let n=R(e),r=n.parentNode;if(!r)throw new Error("The source element must be attached to the document.");let o=t.registry??L,c=t.preset??"clean",a=M(o.resolve(c),t.overrides??{}),i=t.seed??`${c}:${Ve}`,d=C(i),v=document.createComment("archive-scan-original-position");r.insertBefore(v,n);let u=document.createElement("div");u.className="archive-scan-page";let y=document.createElement("div");y.className="archive-scan-content";let p=document.createElement("div");p.className="archive-scan-stage",r.insertBefore(u,n);let k=ct(n);y.append(k,n),p.append(y),u.append(p);let J=Z("archive-scan-paper-texture"),q=Z("archive-scan-exposure"),F=Z("archive-scan-bleed"),B=Z("archive-scan-grain"),I=Z("archive-scan-edge");p.append(J,q,F,B,I);let O=je(a,d);p.append(O);let D=`archive-scan-filter-${++Ve}`,$=null,T=null,V=!1,U=t.enhancement??"auto",W=U==="css"?"css":U==="svg"||$e()?"svg":"css";u.dataset.enhancement=W;function s(){let l=Math.round(h(a.paper.tone)*255);u.style.setProperty("--archive-paper",`rgb(${l}, ${l}, ${l})`),u.style.setProperty("--archive-texture",String(h(a.paper.texture))),u.style.setProperty("--archive-texture-image",fe(H(`${i}:texture`)%1e5,.35,3,Ie(),260)),u.style.setProperty("--archive-grain-image",fe(H(`${i}:grain`)%1e5,.45,3,Be(h(a.artifacts.grain)),320)),u.style.setProperty("--archive-unevenness",String(h(a.exposure.unevenness))),u.style.setProperty("--archive-bleed",String(h(a.artifacts.bleedThrough))),u.style.setProperty("--archive-shinethru",String(h(a.artifacts.shineThrough)*.38)),u.style.setProperty("--archive-edge-noise",String(h(a.artifacts.edgeNoise)));let m=C(`${i}:unevenness`),g=h(a.exposure.unevenness);q.style.setProperty("--archive-unevenness-x",`${(44+P(m,g,24)).toFixed(2)}%`),q.style.setProperty("--archive-unevenness-y",`${(37+P(m,g,18)).toFixed(2)}%`),q.style.setProperty("--archive-unevenness-angle-a",`${(96+P(m,g,30)).toFixed(2)}deg`),q.style.setProperty("--archive-unevenness-angle-b",`${P(m,g,24).toFixed(2)}deg`);let f=C(`${i}:bleed`),b=h(a.artifacts.bleedThrough);F.style.setProperty("--archive-bleed-angle",`${(2+P(f,b,6)).toFixed(2)}deg`),F.style.setProperty("--archive-bleed-x",`${(63+P(f,b,18)).toFixed(2)}%`),F.style.setProperty("--archive-bleed-y",`${(24+P(f,b,14)).toFixed(2)}%`);let A=C(`${i}:offsets`);J.style.setProperty("--archive-texture-position",`${(A()*260).toFixed(1)}px ${(A()*260).toFixed(1)}px`),B.style.setProperty("--archive-grain-position",`${(A()*320).toFixed(1)}px ${(A()*320).toFixed(1)}px`);let N=C(`${i}:edge`),j=h(a.artifacts.edgeNoise),K={left:.6+P(N,j,.3),right:.6+P(N,j,.3),top:.4+P(N,j,.3),bottom:.4+P(N,j,.3)};for(let[E,ne]of Object.entries(K))I.style.setProperty(`--archive-edge-blur-${E}`,ne.toFixed(3));let Ue=a.border.enabled?h(a.border.darkness):0,We=a.border.enabled?Math.max(0,a.border.thickness):0;u.style.setProperty("--archive-border-darkness",String(Ue)),u.style.setProperty("--archive-border-width",`${We}px`);let Y=Math.max(0,a.border.thickness),ie=a.border.enabled&&Y>0;if(ie){let E=C(i),ne=h(a.border.darkness),se=Math.round((1-ne)*255),Ke=[a.border.sides.top,a.border.sides.right,a.border.sides.bottom,a.border.sides.left],Se=[Y*(.82+E()*.36),Y*(.82+E()*.36),Y*(.82+E()*.36),Y*(.82+E()*.36)].map((X,de)=>Ke[de]?X:0);p.style.padding=Se.map(X=>`${X.toFixed(1)}px`).join(" "),p.style.background=`rgb(${se}, ${se}, ${se})`;let Ye=["top","right","bottom","left"];for(let[X,de]of Ye.entries())u.style.setProperty(`--archive-frame-${de}`,`${Se[X].toFixed(1)}px`);let Te=h(a.border.roughness);Te>0?y.style.boxShadow=`inset 0 0 ${(Te*16).toFixed(1)}px rgba(0, 0, 0, ${(ne*.55).toFixed(3)})`:y.style.removeProperty("box-shadow")}else{p.style.removeProperty("padding"),p.style.removeProperty("background"),y.style.removeProperty("box-shadow");for(let E of["top","right","bottom","left"])u.style.removeProperty(`--archive-frame-${E}`)}u.style.setProperty("--archive-grayscale",a.capture.grayscale?"1":"0"),u.style.setProperty("--archive-brightness",String(a.exposure.brightness)),u.style.setProperty("--archive-contrast",String(a.exposure.contrast)),u.style.setProperty("--archive-blur",`${h(a.ink.blur)*.6}px`);let ee=[];a.capture.perspective&&(ee.push("perspective(1200px)"),ee.push(`rotateY(${a.capture.perspective}deg)`));let te=a.capture.rotation,we=h(a.capture.rotationJitter);if(we>0){let E=C(i);te+=(E()*2-1)*we*1.2}te&&ee.push(`rotate(${te.toFixed(3)}deg)`);let ke=ee.join(" ");ie?(u.style.removeProperty("transform"),y.style.transform=ke):(y.style.removeProperty("transform"),u.style.transform=ke),u.style.setProperty("--archive-rotation",ie?`${te.toFixed(3)}deg`:"0deg"),$?.remove(),$=null,T?.remove(),T=null,W==="svg"?(T=qe(`${D}-content`,a),$=me(D,a,H(i)%1e4),u.prepend(T,$),y.style.filter=`url("#${D}-content")`,p.style.filter=`url("#${D}")`):(y.style.removeProperty("filter"),p.style.removeProperty("filter")),O.remove(),O=je(a,C(i)),p.append(O)}return s(),{element:u,content:n,get settings(){return z(a)},update(l){V||(a=M(a,l),s())},destroy(){if(V)return;V=!0;let l=v.parentNode;l&&(l.insertBefore(n,v),v.remove()),u.remove()}}}function ve(e){for(let t of e)if(window.matchMedia(t.query).matches)return t;return e[Math.max(0,e.length-1)]??{query:"all",mode:"single"}}function lt(e,t){return e===void 0||e===!1?!1:typeof e=="string"?t.get(e):M(ue.subtle,e)}function pt(e,t){let n=document.createElement("div");return n.className="archive-scan-gutter",n.dataset.edge=e,n.setAttribute("aria-hidden","true"),n.style.setProperty("--gutter-width",`${t.width}px`),n.style.setProperty("--gutter-darkness",String(h(t.darkness))),n.style.setProperty("--gutter-middle",String(h(t.darkness)*.55)),n.style.setProperty("--gutter-highlight",String(h(t.highlight))),n.style.setProperty("--gutter-blur",`${Math.max(0,t.blur)*.12}px`),n.style.setProperty("--gutter-curve",`${32+h(t.curvature)*20}%`),n}function ht(e,t){t?e.element.dataset.spineSide=t:delete e.element.dataset.spineSide}function _(e,t,n){let r=document.createElement("div");if(r.className="archive-scan-slot",r.dataset.side=t,e)r.append(e.element),n&&t!=="single"&&e.element.querySelector(".archive-scan-content")?.append(pt(t==="left"?"right":"left",n));else{let o=document.createElement("div");o.className="archive-scan-empty",r.append(o)}return r}function ut(e,t){if(Array.isArray(e))return{book:null,sourcePages:e.map(R)};let n=Ee(e,{hostClasses:t});return{book:n,sourcePages:n.pages.map(R)}}function be(e,t){re();let n=R(e),{book:r,sourcePages:o}=ut(t.pages,t.bookHostClasses);if(o.length===0)throw r?.restore(),new Error("Archive viewer requires at least one page.");let c=t.registry??L,a=t.bindingRegistry??ge,i=document.createElement("div");i.className="archive-scan-viewer",n.append(i);let d=o.map((s,l)=>He(s,{preset:t.preset,overrides:t.overrides,seed:`${t.seed??t.preset??"page"}:${l}`,registry:c,enhancement:t.enhancement})),v=Math.max(0,Math.min(d.length-1,Math.floor(t.initialPage??0))),u=!1;if(t.spinePages!==void 0){let s=le(t.spinePages);i.style.setProperty("--archive-curl-half",`${s.curlHalf.toFixed(1)}px`),i.style.setProperty("--archive-block-depth",`${s.blockDepth}px`)}let y=t.layouts.map(s=>window.matchMedia(s.query));function p(s){return s.spread?.firstPageSide??"left"}function k(s,l){return p(s)==="right"?l===0?[null,0]:[2*l-1,2*l]:[2*l,2*l+1]}function J(s){return p(s)==="right"?1+Math.ceil((d.length-1)/2):Math.ceil(d.length/2)}function q(s,l){return p(s)==="right"?l===0?0:Math.ceil(l/2):Math.floor(l/2)}function F(s,l){let[m,g]=k(s,l);return[m!==null&&m<d.length?m:null,g!==null&&g<d.length?g:null]}function B(s,l){let m=new Set,g=new Set;if(s)for(let[f,b]of l)f!==null&&m.add(f),b!==null&&g.add(b);for(let[f,b]of d.entries())b.update({border:{sides:{right:!m.has(f),left:!g.has(f)}}})}function I(s){let l=new Set,m=new Set;for(let[g,f]of s)g!==null&&l.add(g),f!==null&&m.add(f);for(let[g,f]of d.entries())ht(f,l.has(g)?"left":m.has(g)?"right":null)}function O(s,l,m){let[g,f]=F(s,l),b=document.createElement("div");return b.className="archive-scan-row",b.append(_(g===null?null:d[g],"left",m),_(f===null?null:d[f],"right",m)),b}function D(s){let l=document.createElement("div");return l.className="archive-scan-row",l.append(_(s,"single",!1)),l}function $(){d[v]?.element.scrollIntoView({block:"start"})}async function T(){if(u)return;let s=ve(t.layouts),l=lt(s.gutter,a),m=t.continuous===!0;i.dataset.mode=s.mode,i.dataset.fit=s.pageFit??"contain",m?i.dataset.continuous="true":delete i.dataset.continuous,i.style.setProperty("--archive-gap",`${s.gap??0}px`);for(let A of d)A.element.querySelector(".archive-scan-gutter")?.remove();if(s.background?i.style.background=s.background:i.style.removeProperty("background"),s.mode==="single"){B(!1,[]),I([]),m?i.replaceChildren(...d.map(D)):i.replaceChildren(_(d[v],"single",!1)),m&&$();return}if(m){let A=J(s),N=Array.from({length:A},(j,K)=>F(s,K));B(l!==!1,N),I(N),i.replaceChildren(...Array.from({length:A},(j,K)=>O(s,K,l))),$();return}let g=F(s,q(s,v)),[f,b]=g;B(l!==!1,[g]),I([g]),i.replaceChildren(_(f===null?null:d[f],"left",l),_(b===null?null:d[b],"right",l))}function V(){T()}async function U(s){if(v=Math.max(0,Math.min(d.length-1,Math.floor(s))),t.continuous===!0){$();return}await T()}function W(s){if(!(s.target instanceof Element))return;let l=s.target.closest("a[href]");if(!(l instanceof HTMLAnchorElement)||s.button!==0||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||l.target==="_blank")return;let m=l.getAttribute("href");if(!m||!m.startsWith("#"))return;let g=m.slice(1);if(!g)return;let f=o.findIndex(b=>b.id===g||b.querySelector(`#${CSS.escape(g)}`)!==null);f!==-1&&(s.preventDefault(),U(f))}for(let s of y)s.addEventListener("change",V);return t.followLinks===!0&&i.addEventListener("click",W),T(),{element:i,pageCount:d.length,getPage(){return v},async goTo(s){await U(s)},async next(){let l=ve(t.layouts).mode==="spread"?2:1;if(v=Math.min(d.length-1,v+l),t.continuous===!0){$();return}await T()},async previous(){let l=ve(t.layouts).mode==="spread"?2:1;if(v=Math.max(0,v-l),t.continuous===!0){$();return}await T()},async refresh(){await T()},destroy(){if(!u){u=!0;for(let s of y)s.removeEventListener("change",V);i.removeEventListener("click",W);for(let s of d)s.destroy();r?.restore(),i.remove()}}}}var oe=3,mt=[{key:"paper",heading:"Paper"},{key:"exposure",heading:"Exposure"},{key:"ink",heading:"Ink"},{key:"tone",heading:"Tone"},{key:"artifacts",heading:"Artifacts"},{key:"capture",heading:"Capture"},{key:"border",heading:"Border"}],Je=[{kind:"range",id:"control-contrast",label:"Contrast",hint:"Pushes midtones toward black or white as part of the exposure curve, before tone reduction.",tier:"basic",min:.5,max:2.5,step:.05,read:e=>e.exposure.contrast,apply:e=>({exposure:{contrast:e}})},{kind:"range",id:"control-levels",label:"Gray levels",hint:"Limits the page to a fixed number of gray levels: 2 is pure black and white, 256 is effectively continuous. Moving it switches the page to quantized tone.",tier:"basic",tone:!0,min:0,max:1,step:.01,read:(e,t)=>t.layout==="spread"?_e(t.intendedTone.levels):_e(e.tone.levels),apply:e=>({tone:{mode:"quantized",levels:Ge(e)}}),format:e=>String(Ge(e)),disabled:e=>e.ditheredGray},{kind:"range",id:"control-threshold",label:"Threshold",hint:"The black point of two-tone output: pixels below the threshold turn black, above it white. Higher values produce more black. Moving it switches the page to bitonal tone.",tier:"basic",tone:!0,min:.3,max:.9,step:.01,read:(e,t)=>t.layout==="spread"?t.intendedTone.threshold:e.tone.threshold,apply:e=>({tone:{mode:"bitonal",threshold:e}}),disabled:e=>e.ditheredGray},{kind:"range",id:"control-ink-spread",label:"Ink spread",hint:"Thickens dark marks, as if the toner gained weight on a well-used copier.",tier:"basic",min:0,max:1,step:.02,read:e=>e.ink.spread,apply:e=>({ink:{spread:e}})},{kind:"range",id:"control-blur",label:"Blur",hint:"Soft-focus blur applied to the inked sheet before tone reduction, as if the scanner lens were slightly out of focus.",tier:"basic",min:0,max:1,step:.02,read:e=>e.ink.blur,apply:e=>({ink:{blur:e}})},{kind:"range",id:"control-grain",label:"Grain",hint:"Fine toner and paper noise across the sheet.",tier:"basic",min:0,max:1,step:.02,read:e=>e.artifacts.grain,apply:e=>({artifacts:{grain:e}})},{kind:"range",id:"control-dither",label:"Dither amount",hint:"Random noise applied before tone reduction. It keeps detail alive in coarse gray levels.",tier:"basic",tone:!0,min:0,max:1,step:.02,read:(e,t)=>t.layout==="spread"?t.intendedTone.ditherAmount:e.tone.ditherAmount,apply:e=>e>0?{tone:{dither:"random",ditherAmount:e}}:{tone:{ditherAmount:0}},disabled:e=>e.ditheredGray},{kind:"range",id:"control-rotation-left",label:"Rotation \u2014 left page",hint:"Manual rotation of the left (verso) sheet. The center is straight; sliding left or right sets the direction and angle. In facing-pages mode each page rotates independently.",tier:"basic",min:-oe,max:oe,step:.05,read:(e,t)=>t.rotationLeft,apply:e=>({capture:{rotation:e}}),format:e=>`${e.toFixed(2)}\xB0`,onInput:(e,t)=>{if(t.pageRotation.left=e,t.ringBinder()){t.applyBindingTilt();return}t.pages()[0]?.update({capture:{rotation:e}})}},{kind:"range",id:"control-rotation-right",label:"Rotation \u2014 right page",hint:"Manual rotation of the right (recto) sheet. The center is straight; sliding left or right sets the direction and angle. In single-page mode the left setting applies.",tier:"basic",min:-oe,max:oe,step:.05,read:(e,t)=>t.layout==="spread"?t.rotationRight:0,apply:e=>({capture:{rotation:e}}),format:e=>`${e.toFixed(2)}\xB0`,disabled:e=>e.layout!=="spread"||e.ringBinder,onInput:(e,t)=>{t.pageRotation.right=e,t.layout()==="spread"&&!t.ringBinder()&&t.pages()[1]?.update({capture:{rotation:e}})}},{kind:"range",id:"control-shinethru",label:"Shine-through",hint:"Mirrored ghost of the reverse side of the page showing through the sheet.",tier:"basic",min:0,max:1,step:.02,read:e=>e.artifacts.shineThrough,apply:e=>({artifacts:{shineThrough:e}})},{kind:"toggle",id:"control-frame",label:"Copier frame",hint:"The dark surround of the copier bed captured around the sheet. In spreads the binding side is suppressed so facing pages meet at the spine.",tier:"basic",read:e=>e.border.enabled,apply:e=>({border:{enabled:e}})},{kind:"range",id:"control-paper-tone",label:"Paper tone",hint:"Luminance of the paper base, independent of the exposure treatment.",tier:"advanced",group:"paper",min:0,max:1,step:.02,read:e=>e.paper.tone,apply:e=>({paper:{tone:e}})},{kind:"range",id:"control-paper-texture",label:"Paper texture",hint:"Subtle visual texture of the paper fibers.",tier:"advanced",group:"paper",min:0,max:1,step:.02,read:e=>e.paper.texture,apply:e=>({paper:{texture:e}})},{kind:"range",id:"control-brightness",label:"Brightness",hint:"Overall brightness multiplier in the exposure curve. 1 leaves the sheet unchanged.",tier:"advanced",group:"exposure",min:.5,max:2,step:.02,read:e=>e.exposure.brightness,apply:e=>({exposure:{brightness:e}})},{kind:"range",id:"control-gamma",label:"Gamma",hint:"Midtone response of the exposure curve. Below 1 darkens midtones, above 1 lightens them.",tier:"advanced",group:"exposure",min:.5,max:2,step:.02,read:e=>e.exposure.gamma,apply:e=>({exposure:{gamma:e}})},{kind:"range",id:"control-unevenness",label:"Unevenness",hint:"Uneven illumination across the sheet, like a copier lamp losing calibration.",tier:"advanced",group:"exposure",min:0,max:1,step:.02,read:e=>e.exposure.unevenness,apply:e=>({exposure:{unevenness:e}})},{kind:"range",id:"control-blown-highlights",label:"Blown highlights",hint:"Highlight clipping. Higher values turn more bright areas pure white.",tier:"advanced",group:"exposure",min:0,max:1,step:.02,read:e=>e.exposure.blownHighlights,apply:e=>({exposure:{blownHighlights:e}})},{kind:"range",id:"control-crushed-shadows",label:"Crushed shadows",hint:"Shadow clipping. Higher values turn more dark areas pure black.",tier:"advanced",group:"exposure",min:0,max:1,step:.02,read:e=>e.exposure.crushedShadows,apply:e=>({exposure:{crushedShadows:e}})},{kind:"range",id:"control-ink-erosion",label:"Ink erosion",hint:"Thins dark marks, as if the toner ran low and copies came out faint.",tier:"advanced",group:"ink",min:0,max:1,step:.02,read:e=>e.ink.erosion,apply:e=>({ink:{erosion:e}})},{kind:"select",id:"control-tone-mode",label:"Tone mode",hint:"Tone reduction applied to the finished scan: continuous keeps every gray, quantized limits the palette, bitonal prints in pure black and white.",tier:"advanced",group:"tone",tone:!0,options:[{value:"continuous",label:"continuous"},{value:"quantized",label:"quantized"},{value:"bitonal",label:"bitonal"}],read:(e,t)=>t.layout==="spread"?t.intendedTone.mode:e.tone.mode,apply:e=>({tone:{mode:e}}),disabled:e=>e.ditheredGray},{kind:"select",id:"control-tone-dither",label:"Dither pattern",hint:"Noise pattern mixed into the sheet before tone reduction to keep banding from appearing in coarse tones.",tier:"advanced",group:"tone",tone:!0,options:[{value:"none",label:"none"},{value:"random",label:"random"}],read:(e,t)=>t.layout==="spread"?t.intendedTone.dither:e.tone.dither,apply:e=>({tone:{dither:e}}),disabled:e=>e.ditheredGray},{kind:"range",id:"control-dust",label:"Dust",hint:"Density of dust specks caught on the glass.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.dust,apply:e=>({artifacts:{dust:e}})},{kind:"range",id:"control-scratches",label:"Scratches",hint:"Density of scratches across the scan.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.scratches,apply:e=>({artifacts:{scratches:e}})},{kind:"range",id:"control-bleedthrough",label:"Bleed-through",hint:"Ink from the reverse side bleeding through the paper.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.bleedThrough,apply:e=>({artifacts:{bleedThrough:e}})},{kind:"range",id:"control-streaks",label:"Vertical streaks",hint:"Vertical streaks from a dirty copier glass or drum.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.verticalStreaks,apply:e=>({artifacts:{verticalStreaks:e}})},{kind:"range",id:"control-bands",label:"Horizontal bands",hint:"Horizontal banding from a tired scanner or copier transport.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.horizontalBands,apply:e=>({artifacts:{horizontalBands:e}})},{kind:"range",id:"control-edgenoise",label:"Edge noise",hint:"Noise and smudges along the sheet edges.",tier:"advanced",group:"artifacts",min:0,max:1,step:.02,read:e=>e.artifacts.edgeNoise,apply:e=>({artifacts:{edgeNoise:e}})},{kind:"toggle",id:"control-grayscale",label:"Grayscale",hint:"Converts the content to grayscale before tone treatment.",tier:"advanced",group:"capture",read:e=>e.capture.grayscale,apply:e=>({capture:{grayscale:e}})},{kind:"range",id:"control-perspective",label:"Perspective",hint:"Keystone distortion, as if the sheet lay skewed on the glass.",tier:"advanced",group:"capture",min:0,max:1,step:.02,read:e=>e.capture.perspective,apply:e=>({capture:{perspective:e}}),disabled:e=>e.ringBinder},{kind:"range",id:"control-rotation-jitter",label:"Rotation jitter",hint:"Seeded random misalignment added on top of the fixed rotation, different for every seed.",tier:"advanced",group:"capture",min:0,max:1,step:.02,read:e=>e.capture.rotationJitter,apply:e=>({capture:{rotationJitter:e}}),disabled:e=>e.ringBinder},{kind:"range",id:"control-frame-darkness",label:"Frame darkness",hint:"Darkness of the copier frame band around the sheet.",tier:"advanced",group:"border",min:0,max:1,step:.02,read:e=>e.border.darkness,apply:e=>({border:{darkness:e}})},{kind:"range",id:"control-frame-thickness",label:"Frame thickness",hint:"Thickness of the copier frame band in pixels.",tier:"advanced",group:"border",min:0,max:60,step:1,read:e=>e.border.thickness,apply:e=>({border:{thickness:e}})},{kind:"range",id:"control-frame-roughness",label:"Frame roughness",hint:"Irregularity of the frame edges.",tier:"advanced",group:"border",min:0,max:1,step:.02,read:e=>e.border.roughness,apply:e=>({border:{roughness:e}})},{kind:"toggle",id:"control-border-top",label:"Frame \u2014 top side",hint:"Whether the top edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.top,apply:e=>({border:{sides:{top:e}}})},{kind:"toggle",id:"control-border-right",label:"Frame \u2014 right side",hint:"Whether the right edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.right,apply:e=>({border:{sides:{right:e}}})},{kind:"toggle",id:"control-border-bottom",label:"Frame \u2014 bottom side",hint:"Whether the bottom edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.bottom,apply:e=>({border:{sides:{bottom:e}}})},{kind:"toggle",id:"control-border-left",label:"Frame \u2014 left side",hint:"Whether the left edge of the sheet receives the copier frame.",tier:"advanced",group:"border",read:e=>e.border.sides.left,apply:e=>({border:{sides:{left:e}}})}];function Ge(e){let t=Math.min(1,Math.max(0,e));return Math.max(2,Math.min(256,Math.round(Math.pow(2,1+t*7))))}function _e(e){let t=Math.max(2,Math.min(256,e));return(Math.log2(t)-1)/7}function ft(e){return`output-${e.id.replace(/^control-/,"")}`}function ye(e){return`
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
    </span>`}function xe(e){return`
    <span class="demo-popover" role="tooltip"
      >${e.hint}</span
    >`}function S(e){let t=Je.find(r=>r.id===e);if(!t)throw new Error(`Unknown playground control: ${e}`);if(t.kind==="range")return`
    <label class="demo-slider">
      ${ye(t)}

      <input
        id="${t.id}"
        type="range"
        min="${t.min}"
        max="${t.max}"
        step="${t.step}"
        value="0"
      />

      <output id="${ft(t)}">\u2013</output>
      ${xe(t)}
    </label>`;if(t.kind==="toggle")return`
    <label class="demo-slider demo-toggle">
      ${ye(t)}

      <input id="${t.id}" type="checkbox" />
      ${xe(t)}
    </label>`;let n=t.options.map(r=>`<option value="${r.value}">${r.label}</option>`).join(`
      `);return`
    <label class="demo-slider demo-select">
      ${ye(t)}

      <select id="${t.id}">
        ${n}
      </select>
      ${xe(t)}
    </label>`}function vt(){return`
    <details class="demo-advanced">
      <summary>Advanced settings</summary>
      <div class="demo-advanced-groups">${mt.map(({key:t,heading:n})=>{let r=Je.filter(o=>o.tier==="advanced"&&o.group===t).map(o=>S(o.id)).join(`
`);return r?`
    <div class="demo-advanced-group">
      <p class="demo-advanced-heading">${n}</p>
      ${r}
    </div>`:""}).join(`
`)}
      </div>
    </details>`}var vn=`
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

  <fieldset>
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

    ${S("control-contrast")}
    ${S("control-levels")}
    ${S("control-threshold")}
    ${S("control-ink-spread")}
    ${S("control-blur")}
    ${S("control-grain")}
    ${S("control-dither")}

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

    ${S("control-rotation-left")}
    ${S("control-rotation-right")}
    ${S("control-shinethru")}
    ${S("control-frame")}

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

    ${vt()}
  </fieldset>

  <button id="control-destroy" type="button">Destroy effect</button>
  <button id="control-to-viewer" type="button">Show in viewer</button>
  <button id="control-download" type="button">Download preset</button>

  <fieldset>
    <legend>Resolved settings</legend>
    <pre id="control-settings" aria-label="Resolved scan settings"></pre>
  </fieldset>
`;var ae={paper:{tone:1,texture:.07},exposure:{brightness:1.02,contrast:1.9,gamma:.9,unevenness:.22,blownHighlights:.34,crushedShadows:.58},ink:{spread:.28,erosion:.09,blur:.025},tone:{mode:"bitonal",levels:2,threshold:.64,dither:"random",ditherAmount:.34},artifacts:{grain:.58,dust:.2,scratches:.12,bleedThrough:.025,shineThrough:.3,verticalStreaks:.07,horizontalBands:.035,edgeNoise:.46},capture:{grayscale:!0,rotation:0,perspective:0,rotationJitter:0},border:{enabled:!0,darkness:1,thickness:20,roughness:.86,sides:{top:!0,right:!1,bottom:!0,left:!0}}};var yt=["paper","exposure","ink","tone","artifacts","capture","border","extends"];yt.some(e=>e in ae)?L.set("strandkorb",ae):L.import(ae);function xt(e,t){return be(e,t)}window.bookViewer=xt;})();
