import{S as Di,i as Vi,s as Ri,e as Fi,c as Bi,a as qi,d as Ne,K as je,L as Hi,M as ze,f as Zi,n as te,l as Ji,g as Wi}from"./index.da907017.js";var Ut=window,be=Ut.ShadowRoot&&(Ut.ShadyCSS===void 0||Ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),De=new WeakMap,ri=class{constructor(e,i,o){if(this._$cssResult$=!0,o!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o,i=this.t;if(be&&e===void 0){let o=i!==void 0&&i.length===1;o&&(e=De.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&De.set(i,e))}return e}toString(){return this.cssText}},Ki=t=>new ri(typeof t=="string"?t:t+"",void 0,we),Gi=(t,...e)=>{let i=t.length===1?t[0]:e.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[r+1],t[0]);return new ri(i,t,we)},Qi=(t,e)=>{be?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{let o=document.createElement("style"),n=Ut.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)})},Ve=be?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(let o of e.cssRules)i+=o.cssText;return Ki(i)})(t):t,ee,zt=window,Re=zt.trustedTypes,Xi=Re?Re.emptyScript:"",Yi=zt.reactiveElementPolyfillSupport,de={toAttribute(t,e){switch(e){case Boolean:t=t?Xi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},si=(t,e)=>e!==t&&(e==e||t==t),ie={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:si},ue="finalized",ft=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=ie){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ie}static finalize(){if(this.hasOwnProperty(ue))return!1;this[ue]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Ve(o))}else t!==void 0&&e.push(Ve(t));return e}static _$Ep(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qi(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ie){var o;let n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){let r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:de).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){let r=o.getPropertyOptions(n),s=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:de;this._$El=n,this[n]=s.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||si)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ft[ue]=!0,ft.elementProperties=new Map,ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},Yi?.({ReactiveElement:ft}),((ee=zt.reactiveElementVersions)!==null&&ee!==void 0?ee:zt.reactiveElementVersions=[]).push("1.6.3");var oe,Dt=window,yt=Dt.trustedTypes,Fe=yt?yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ce="$lit$",it=`lit$${(Math.random()+"").slice(9)}$`,ai="?"+it,to=`<${ai}>`,ht=document,kt=()=>ht.createComment(""),xt=t=>t===null||typeof t!="object"&&typeof t!="function",li=Array.isArray,eo=t=>li(t)||typeof t?.[Symbol.iterator]=="function",ne=`[ 	
\f\r]`,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,qe=/>/g,st=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),He=/'/g,Ze=/"/g,hi=/^(?:script|style|textarea|title)$/i,io=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),y=io(1),gt=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Je=new WeakMap,at=ht.createTreeWalker(ht,129,null,!1);function di(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fe!==void 0?Fe.createHTML(e):e}var oo=(t,e)=>{let i=t.length-1,o=[],n,r=e===2?"<svg>":"",s=Lt;for(let a=0;a<i;a++){let h=t[a],d,l,u=-1,c=0;for(;c<h.length&&(s.lastIndex=c,l=s.exec(h),l!==null);)c=s.lastIndex,s===Lt?l[1]==="!--"?s=Be:l[1]!==void 0?s=qe:l[2]!==void 0?(hi.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=st):l[3]!==void 0&&(s=st):s===st?l[0]===">"?(s=n??Lt,u=-1):l[1]===void 0?u=-2:(u=s.lastIndex-l[2].length,d=l[1],s=l[3]===void 0?st:l[3]==='"'?Ze:He):s===Ze||s===He?s=st:s===Be||s===qe?s=Lt:(s=st,n=void 0);let f=s===st&&t[a+1].startsWith("/>")?" ":"";r+=s===Lt?h+to:u>=0?(o.push(d),h.slice(0,u)+ce+h.slice(u)+it+f):h+it+(u===-2?(o.push(void 0),a):f)}return[di(t,r+(t[i]||"<?>")+(e===2?"</svg>":"")),o]},Vt=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0,s=t.length-1,a=this.parts,[h,d]=oo(t,e);if(this.el=Vt.createElement(h,i),at.currentNode=this.el.content,e===2){let l=this.el.content,u=l.firstChild;u.remove(),l.append(...u.childNodes)}for(;(o=at.nextNode())!==null&&a.length<s;){if(o.nodeType===1){if(o.hasAttributes()){let l=[];for(let u of o.getAttributeNames())if(u.endsWith(ce)||u.startsWith(it)){let c=d[r++];if(l.push(u),c!==void 0){let f=o.getAttribute(c.toLowerCase()+ce).split(it),m=/([.?@])?(.*)/.exec(c);a.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?ro:m[1]==="?"?ao:m[1]==="@"?lo:Ht})}else a.push({type:6,index:n})}for(let u of l)o.removeAttribute(u)}if(hi.test(o.tagName)){let l=o.textContent.split(it),u=l.length-1;if(u>0){o.textContent=yt?yt.emptyScript:"";for(let c=0;c<u;c++)o.append(l[c],kt()),at.nextNode(),a.push({type:2,index:++n});o.append(l[u],kt())}}}else if(o.nodeType===8)if(o.data===ai)a.push({type:2,index:n});else{let l=-1;for(;(l=o.data.indexOf(it,l+1))!==-1;)a.push({type:7,index:n}),l+=it.length-1}n++}}static createElement(t,e){let i=ht.createElement("template");return i.innerHTML=t,i}};function bt(t,e,i=t,o){var n,r,s,a;if(e===gt)return e;let h=o!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[o]:i._$Cl,d=xt(e)?void 0:e._$litDirective$;return h?.constructor!==d&&((r=h?._$AO)===null||r===void 0||r.call(h,!1),d===void 0?h=void 0:(h=new d(t),h._$AT(t,i,o)),o!==void 0?((s=(a=i)._$Co)!==null&&s!==void 0?s:a._$Co=[])[o]=h:i._$Cl=h),h!==void 0&&(e=bt(t,h._$AS(t,e.values),h,o)),e}var no=class{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var i;let{el:{content:o},parts:n}=this._$AD,r=((i=e?.creationScope)!==null&&i!==void 0?i:ht).importNode(o,!0);at.currentNode=r;let s=at.nextNode(),a=0,h=0,d=n[0];for(;d!==void 0;){if(a===d.index){let l;d.type===2?l=new qt(s,s.nextSibling,this,e):d.type===1?l=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(l=new ho(s,this,e)),this._$AV.push(l),d=n[++h]}a!==d?.index&&(s=at.nextNode(),a++)}return at.currentNode=ht,r}v(e){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,i),i+=o.strings.length-2):o._$AI(e[i])),i++}},qt=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=(n=o?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=bt(this,t,e),xt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==gt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):eo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==E&&xt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ht.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Vt.createElement(di(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{let r=new no(n,this),s=r.u(this.options);r.v(i),this.$(s),this._$AH=r}}_$AC(t){let e=Je.get(t.strings);return e===void 0&&Je.set(t.strings,e=new Vt(t)),e}T(t){li(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let n of t)o===e.length?e.push(i=new qt(this.k(kt()),this.k(kt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ht=class{constructor(t,e,i,o,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(n===void 0)t=bt(this,t,e,0),r=!xt(t)||t!==this._$AH&&t!==gt,r&&(this._$AH=t);else{let s=t,a,h;for(t=n[0],a=0;a<n.length-1;a++)h=bt(this,s[i+a],e,a),h===gt&&(h=this._$AH[a]),r||(r=!xt(h)||h!==this._$AH[a]),h===E?t=E:t!==E&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ro=class extends Ht{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},so=yt?yt.emptyScript:"",ao=class extends Ht{constructor(){super(...arguments),this.type=4}j(e){e&&e!==E?this.element.setAttribute(this.name,so):this.element.removeAttribute(this.name)}},lo=class extends Ht{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=bt(this,t,e,0))!==null&&i!==void 0?i:E)===gt)return;let o=this._$AH,n=t===E&&o!==E||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==E&&(o===E||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ho=class{constructor(e,i,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){bt(this,e)}},uo=Dt.litHtmlPolyfillSupport;uo?.(Vt,qt),((oe=Dt.litHtmlVersions)!==null&&oe!==void 0?oe:Dt.litHtmlVersions=[]).push("2.8.0");var co=(t,e,i)=>{var o,n;let r=(o=i?.renderBefore)!==null&&o!==void 0?o:e,s=r._$litPart$;if(s===void 0){let a=(n=i?.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new qt(e.insertBefore(kt(),a),a,void 0,i??{})}return s._$AI(t),s},re,se,$t=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,i;let o=super.createRenderRoot();return(e=(i=this.renderOptions).renderBefore)!==null&&e!==void 0||(i.renderBefore=o.firstChild),o}update(e){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=co(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return gt}};$t.finalized=!0,$t._$litElement$=!0,(re=globalThis.litElementHydrateSupport)===null||re===void 0||re.call(globalThis,{LitElement:$t});var po=globalThis.litElementPolyfillSupport;po?.({LitElement:$t});((se=globalThis.litElementVersions)!==null&&se!==void 0?se:globalThis.litElementVersions=[]).push("3.3.3");var fo=Gi`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  * {
    box-sizing: border-box;
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const mo="modulepreload",vo=function(t){return"/talk-animation-techniques/"+t},We={},H=function(e,i,o){if(!i||i.length===0)return e();const n=document.getElementsByTagName("link");return Promise.all(i.map(r=>{if(r=vo(r),r in We)return;We[r]=!0;const s=r.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!o)for(let l=n.length-1;l>=0;l--){const u=n[l];if(u.href===r&&(!s||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":mo,s||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),s)return new Promise((l,u)=>{d.addEventListener("load",l),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var Ke={},_o=function(t,e,i,o,n){var r=new Worker(Ke[e]||(Ke[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(s){var a=s.data,h=a.$e$;if(h){var d=new Error(h[0]);d.code=h[1],d.stack=h[2],n(d,null)}else n(null,a)},r.postMessage(i,o),r},N=Uint8Array,lt=Uint16Array,ui=Int32Array,Ce=new N([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Le=new N([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ci=new N([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),pi=function(t,e){for(var i=new lt(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];for(var n=new ui(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},fi=pi(Ce,2),$e=fi.b,yo=fi.r;$e[28]=258,yo[258]=28;var go=pi(Le,0),mi=go.b,Rt=new lt(32768);for(b=0;b<32768;++b)Y=(b&43690)>>1|(b&21845)<<1,Y=(Y&52428)>>2|(Y&13107)<<2,Y=(Y&61680)>>4|(Y&3855)<<4,Rt[b]=((Y&65280)>>8|(Y&255)<<8)>>1;var Y,b,vt=function(t,e,i){for(var o=t.length,n=0,r=new lt(e);n<o;++n)t[n]&&++r[t[n]-1];var s=new lt(e);for(n=1;n<e;++n)s[n]=s[n-1]+r[n-1]<<1;var a;if(i){a=new lt(1<<e);var h=15-e;for(n=0;n<o;++n)if(t[n])for(var d=n<<4|t[n],l=e-t[n],u=s[t[n]-1]++<<l,c=u|(1<<l)-1;u<=c;++u)a[Rt[u]>>h]=d}else for(a=new lt(o),n=0;n<o;++n)t[n]&&(a[n]=Rt[s[t[n]-1]++]>>15-t[n]);return a},Pt=new N(288);for(b=0;b<144;++b)Pt[b]=8;var b;for(b=144;b<256;++b)Pt[b]=9;var b;for(b=256;b<280;++b)Pt[b]=7;var b;for(b=280;b<288;++b)Pt[b]=8;var b,vi=new N(32);for(b=0;b<32;++b)vi[b]=5;var b,_i=vt(Pt,9,1),yi=vt(vi,5,1),Nt=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},R=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(e&7)&i},jt=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(e&7)},gi=function(t){return(t+7)/8|0},Zt=function(t,e,i){(e==null||e<0)&&(e=0),(i==null||i>t.length)&&(i=t.length);var o=new N(i-e);return o.set(t.subarray(e,i)),o},bi=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],U=function(t,e,i){var o=new Error(e||bi[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,U),!i)throw o;return o},wi=function(t,e,i,o){var n=t.length,r=o?o.length:0;if(!n||e.f&&!e.l)return i||new N(0);var s=!i||e.i!=2,a=e.i;i||(i=new N(n*3));var h=function(Me){var Te=i.length;if(Me>Te){var Ue=new N(Math.max(Te*2,Me));Ue.set(i),i=Ue}},d=e.f||0,l=e.p||0,u=e.b||0,c=e.l,f=e.d,m=e.m,p=e.n,_=n*8;do{if(!c){d=R(t,l,1);var v=R(t,l+1,3);if(l+=3,v)if(v==1)c=_i,f=yi,m=9,p=5;else if(v==2){var L=R(t,l,31)+257,C=R(t,l+10,15)+4,D=L+R(t,l+5,31)+1;l+=14;for(var T=new N(D),X=new N(19),S=0;S<C;++S)X[ci[S]]=R(t,l+S*3,7);l+=C*3;for(var K=Nt(X),B=(1<<K)-1,nt=vt(X,K,1),S=0;S<D;){var j=nt[R(t,l,B)];l+=j&15;var k=j>>4;if(k<16)T[S++]=k;else{var tt=0,rt=0;for(k==16?(rt=3+R(t,l,3),l+=2,tt=T[S-1]):k==17?(rt=3+R(t,l,7),l+=3):k==18&&(rt=11+R(t,l,127),l+=7);rt--;)T[S++]=tt}}var q=T.subarray(0,L),I=T.subarray(L);m=Nt(q),p=Nt(I),c=vt(q,m,1),f=vt(I,p,1)}else U(1);else{var k=gi(l)+4,Wt=t[k-4]|t[k-3]<<8,Kt=k+Wt;if(Kt>n){a&&U(0);break}s&&h(u+Wt),i.set(t.subarray(k,Kt),u),e.b=u+=Wt,e.p=l=Kt*8,e.f=d;continue}if(l>_){a&&U(0);break}}s&&h(u+131072);for(var Ni=(1<<m)-1,ji=(1<<p)-1,Gt=l;;Gt=l){var tt=c[jt(t,l)&Ni],ct=tt>>4;if(l+=tt&15,l>_){a&&U(0);break}if(tt||U(2),ct<256)i[u++]=ct;else if(ct==256){Gt=l,c=null;break}else{var Ie=ct-254;if(ct>264){var S=ct-257,Ct=Ce[S];Ie=R(t,l,(1<<Ct)-1)+$e[S],l+=Ct}var Qt=f[jt(t,l)&ji],Xt=Qt>>4;Qt||U(3),l+=Qt&15;var I=mi[Xt];if(Xt>3){var Ct=Le[Xt];I+=jt(t,l)&(1<<Ct)-1,l+=Ct}if(l>_){a&&U(0);break}s&&h(u+131072);var Yt=u+Ie;if(u<I){var Oe=r-I,zi=Math.min(I,Yt);for(Oe+u<0&&U(3);u<zi;++u)i[u]=o[Oe+u]}for(;u<Yt;u+=4)i[u]=i[u-I],i[u+1]=i[u+1-I],i[u+2]=i[u+2-I],i[u+3]=i[u+3-I];u=Yt}}e.l=c,e.p=Gt,e.b=u,e.f=d,c&&(d=1,e.m=m,e.d=f,e.n=p)}while(!d);return u==i.length?i:Zt(i,0,u)},bo=new N(0),wo=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i},Ge=function(t,e,i){for(var o=t(),n=t.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<o.length;++s){var a=o[s],h=r[s];if(typeof a=="function"){e+=";"+h+"=";var d=a.toString();if(a.prototype)if(d.indexOf("[native code]")!=-1){var l=d.indexOf(" ",8)+1;e+=d.slice(l,d.indexOf("(",l))}else{e+=d;for(var u in a.prototype)e+=";"+h+".prototype."+u+"="+a.prototype[u].toString()}else e+=d}else i[h]=a}return e},Tt=[],Co=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},Lo=function(t,e,i,o){if(!Tt[i]){for(var n="",r={},s=t.length-1,a=0;a<s;++a)n=Ge(t[a],n,r);Tt[i]={c:Ge(t[s],n,r),e:r}}var h=wo({},Tt[i].e);return _o(Tt[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,h,Co(h),o)},$o=function(){return[N,lt,ui,Ce,Le,ci,$e,mi,_i,yi,Rt,bi,vt,Nt,R,jt,gi,Zt,U,wi,Se,Ci,Li]},Ci=function(t){return postMessage(t,[t.buffer])},Li=function(t){return t&&{out:t.size&&new N(t.size),dictionary:t.dictionary}},So=function(t,e,i,o,n,r){var s=Lo(i,o,n,function(a,h){s.terminate(),r(a,h)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},G=function(t,e){return t[e]|t[e+1]<<8},Z=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},ae=function(t,e){return Z(t,e)+Z(t,e+4)*4294967296};function Ao(t,e,i){return i||(i=e,e={}),typeof i!="function"&&U(7),So(t,e,[$o],function(o){return Ci(Se(o.data[0],Li(o.data[1])))},1,i)}function Se(t,e){return wi(t,{i:2},e&&e.out,e&&e.dictionary)}var pe=typeof TextDecoder<"u"&&new TextDecoder,ko=0;try{pe.decode(bo,{stream:!0}),ko=1}catch{}var xo=function(t){for(var e="",i=0;;){var o=t[i++],n=(o>127)+(o>223)+(o>239);if(i+n>t.length)return{s:e,r:Zt(t,i-1)};n?n==3?(o=((o&15)<<18|(t[i++]&63)<<12|(t[i++]&63)<<6|t[i++]&63)-65536,e+=String.fromCharCode(55296|o>>10,56320|o&1023)):n&1?e+=String.fromCharCode((o&31)<<6|t[i++]&63):e+=String.fromCharCode((o&15)<<12|(t[i++]&63)<<6|t[i++]&63):e+=String.fromCharCode(o)}};function wt(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}else{if(pe)return pe.decode(t);var n=xo(t),r=n.s,i=n.r;return i.length&&U(8),r}}var Po=function(t,e){return e+30+G(t,e+26)+G(t,e+28)},Eo=function(t,e,i){var o=G(t,e+28),n=wt(t.subarray(e+46,e+46+o),!(G(t,e+8)&2048)),r=e+46+o,s=Z(t,e+20),a=i&&s==4294967295?Io(t,r):[s,Z(t,e+24),Z(t,e+42)],h=a[0],d=a[1],l=a[2];return[G(t,e+10),h,d,n,r+G(t,e+30)+G(t,e+32),l]},Io=function(t,e){for(;G(t,e)!=1;e+=4+G(t,e+2));return[ae(t,e+12),ae(t,e+4),ae(t,e+20)]},Qe=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function Oo(t,e,i){i||(i=e,e={}),typeof i!="function"&&U(7);var o=[],n=function(){for(var _=0;_<o.length;++_)o[_]()},r={},s=function(_,v){Qe(function(){i(_,v)})};Qe(function(){s=i});for(var a=t.length-22;Z(t,a)!=101010256;--a)if(!a||t.length-a>65558)return s(U(13,0,1),null),n;var h=G(t,a+8);if(h){var d=h,l=Z(t,a+16),u=l==4294967295||d==65535;if(u){var c=Z(t,a-12);u=Z(t,c)==101075792,u&&(d=h=Z(t,c+32),l=Z(t,c+48))}for(var f=e&&e.filter,m=function(_){var v=Eo(t,l,u),L=v[0],C=v[1],D=v[2],T=v[3],X=v[4],S=v[5],K=Po(t,S);l=X;var B=function(j,k){j?(n(),s(j,null)):(k&&(r[T]=k),--h||s(null,r))};if(!f||f({name:T,size:C,originalSize:D,compression:L}))if(!L)B(null,Zt(t,K,K+C));else if(L==8){var nt=t.subarray(K,K+C);if(C<32e4)try{B(null,Se(nt,{out:new N(D)}))}catch(j){B(j,null)}else o.push(Ao(nt,{size:D},B))}else B(U(14,"unknown compression type "+L,1),null);else B(null,null)},p=0;p<d;++p)m(p)}else s(null,{});return n}function Mo(t){return(Array.isArray(t)?t:t.issues).reduce((e,i)=>{if(i.path){let o=i.path.map(({key:n})=>n).join(".");e.nested[o]=[...e.nested[o]||[],i.message]}else e.root=[...e.root||[],i.message];return e},{nested:{}})}var To=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function Uo(t,e){return{reason:t?.reason,validation:e.validation,origin:t?.origin||"value",message:e.message,input:e.input,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}}function No(t,e){return{reason:e,origin:t?.origin,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}}function ot(t,e,i,o){if(!e||!e.length)return{output:t};let n,r,s=t;for(let a of e){let h=a(s);if(h.issue){n=n||No(i,o);let d=Uo(n,h.issue);if(r?r.push(d):r=[d],n.abortEarly||n.abortPipeEarly)break}else s=h.output}return r?{issues:r}:{output:s}}function W(t,e){return!t||typeof t=="string"?[t,e]:[void 0,t]}function Q(t,e,i,o,n,r){return{issues:[{reason:e,validation:i,origin:t?.origin||"value",message:o,input:n,issues:r,abortEarly:t?.abortEarly,abortPipeEarly:t?.abortPipeEarly}]}}function jo(t=[]){return{schema:"any",async:!1,_parse(e,i){return ot(e,t,i,"any")}}}function St(t,e,i){let[o,n]=W(e,i);return{schema:"array",array:{item:t},async:!1,_parse(r,s){if(!Array.isArray(r))return Q(s,"type","array",o||"Invalid type",r);let a,h=[];for(let d=0;d<r.length;d++){let l=r[d],u=t._parse(l,s);if(u.issues){let c={schema:"array",input:r,key:d,value:l};for(let f of u.issues)f.path?f.path.unshift(c):f.path=[c],a?.push(f);if(a||(a=u.issues),s?.abortEarly)break}else h.push(u.output)}return a?{issues:a}:ot(h,n,s,"array")}}}function le(t,e){let[i,o]=W(t,e);return{schema:"boolean",async:!1,_parse(n,r){return typeof n!="boolean"?Q(r,"type","boolean",i||"Invalid type",n):ot(n,o,r,"boolean")}}}function Xe(t,e){return{schema:"literal",literal:t,async:!1,_parse(i,o){return i!==t?Q(o,"type","literal",e||"Invalid type",i):{output:i}}}}function zo(t,e){return{schema:"native_enum",nativeEnum:t,async:!1,_parse(i,o){return Object.values(t).includes(i)?{output:i}:Q(o,"type","native_enum",e||"Invalid type",i)}}}function J(t,e){let[i,o]=W(t,e);return{schema:"number",async:!1,_parse(n,r){return typeof n!="number"?Q(r,"type","number",i||"Invalid type",n):ot(n,o,r,"number")}}}function F(t,e,i){let[o,n]=W(e,i),r;return{schema:"object",object:t,async:!1,_parse(s,a){if(!s||typeof s!="object")return Q(a,"type","object",o||"Invalid type",s);r=r||Object.entries(t);let h,d={};for(let[l,u]of r){let c=s[l],f=u._parse(c,a);if(f.issues){let m={schema:"object",input:s,key:l,value:c};for(let p of f.issues)p.path?p.path.unshift(m):p.path=[m],h?.push(p);if(h||(h=f.issues),a?.abortEarly)break}else d[l]=f.output}return h?{issues:h}:ot(d,n,a,"object")}}}function w(t){return{schema:"optional",wrapped:t,async:!1,_parse(e,i){return e===void 0?{output:e}:t._parse(e,i)}}}function M(t,e){let[i,o]=W(t,e);return{schema:"string",async:!1,_parse(n,r){return typeof n!="string"?Q(r,"type","string",i||"Invalid type",n):ot(n,o,r,"string")}}}function Do(t,e,i,o){if(typeof e=="object"&&!Array.isArray(e)){let[s,a]=W(i,o);return[t,e,s,a]}let[n,r]=W(e,i);return[M(),t,n,r]}var Vo=["__proto__","prototype","constructor"];function Ro(t,e,i,o){let[n,r,s,a]=Do(t,e,i,o);return{schema:"record",record:{key:n,value:r},async:!1,_parse(h,d){if(!h||typeof h!="object")return Q(d,"type","record",s||"Invalid type",h);let l,u={};for(let[c,f]of Object.entries(h))if(!Vo.includes(c)){let m,p=n._parse(c,{origin:"key",abortEarly:d?.abortEarly,abortPipeEarly:d?.abortPipeEarly});if(p.issues){m={schema:"record",input:h,key:c,value:f};for(let v of p.issues)v.path=[m],l?.push(v);if(l||(l=p.issues),d?.abortEarly)break}let _=r._parse(f,d);if(_.issues){m=m||{schema:"record",input:h,key:c,value:f};for(let v of _.issues)v.path?v.path.unshift(m):v.path=[m],l?.push(v);if(l||(l=_.issues),d?.abortEarly)break}!p.issues&&!_.issues&&(u[p.output]=_.output)}return l?{issues:l}:ot(u,a,d,"record")}}}function Fo(t,e,i){if(typeof t=="object"&&!Array.isArray(t)){let[r,s]=W(e,i);return[t,r,s]}let[o,n]=W(t,e);return[void 0,o,n]}function Ye(t,e,i,o){let[n,r,s]=Fo(e,i,o);return{schema:"tuple",tuple:{items:t,rest:n},async:!1,_parse(a,h){if(!Array.isArray(a)||!n&&t.length!==a.length||n&&t.length>a.length)return Q(h,"type","tuple",r||"Invalid type",a);let d,l=[];for(let u=0;u<t.length;u++){let c=a[u],f=t[u]._parse(c,h);if(f.issues){let m={schema:"tuple",input:a,key:u,value:c};for(let p of f.issues)p.path?p.path.unshift(m):p.path=[m],d?.push(p);if(d||(d=f.issues),h?.abortEarly)break}else l[u]=f.output}if(n)for(let u=t.length;u<a.length;u++){let c=a[u],f=n._parse(c,h);if(f.issues){let m={schema:"tuple",input:a,key:u,value:c};for(let p of f.issues)p.path?p.path.unshift(m):p.path=[m],d?.push(p);if(d||(d=f.issues),h?.abortEarly)break}else l[u]=f.output}return d?{issues:d}:ot(l,s,h,"tuple")}}}function fe(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let n,r;for(let s of t){let a=s._parse(i,o);if(a.issues)if(n)for(let h of a.issues)n.push(h);else n=a.issues;else{r=[a.output];break}}return r?{output:r[0]}:Q(o,"type","union",e||"Invalid type",i,n)}}}function Et(t,e,i){let[o,n]=W(e,i);return F(t.reduce((r,s)=>({...r,...s.object}),{}),o,n)}function Bo(t,e,i,o){let[n,r]=W(i,o);return F(Object.entries(t.object).reduce((s,[a,h])=>e.includes(a)?s:{...s,[a]:h},{}),n,r)}function qo(t,e,i){let o=t._parse(e,i);return o.issues?{success:!1,error:new To(o.issues),issues:o.issues}:{success:!0,data:o.output,output:o.output}}function me(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function ve(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var Ho=Object.create,Ae=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,$i=Object.getOwnPropertyNames,Jo=Object.getPrototypeOf,Wo=Object.prototype.hasOwnProperty,Ko=(t,e,i)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,It=(t,e)=>function(){return e||(0,t[$i(t)[0]])((e={exports:{}}).exports,e),e.exports},Go=(t,e,i,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of $i(e))!Wo.call(t,n)&&n!==i&&Ae(t,n,{get:()=>e[n],enumerable:!(o=Zo(e,n))||o.enumerable});return t},Qo=(t,e,i)=>(i=t!=null?Ho(Jo(t)):{},Go(e||!t||!t.__esModule?Ae(i,"default",{value:t,enumerable:!0}):i,t)),Xo=(t,e,i)=>(Ko(t,typeof e!="symbol"?e+"":e,i),i),Yo=It({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0;var e=(i,o,n=0,r=0,s=i.width-n,a=i.height-r,h=0,d=0)=>{if(n=n|0,r=r|0,s=s|0,a=a|0,h=h|0,d=d|0,s<=0||a<=0)return;let l=new Uint32Array(i.data.buffer),u=new Uint32Array(o.data.buffer);for(let c=0;c<a;c++){let f=r+c;if(f<0||f>=i.height)continue;let m=d+c;if(!(m<0||m>=o.height))for(let p=0;p<s;p++){let _=n+p;if(_<0||_>=i.width)continue;let v=h+p;if(v<0||v>=o.width)continue;let L=f*i.width+_,C=m*o.width+v;u[C]=l[L]}}};t.copy=e}}),tn=It({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(e=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in e)||e.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);e=new Uint8ClampedArray(e).slice(0,i);let o=e.every(n=>n===0);return(n,r,s)=>{if(n===void 0||r===void 0)throw TypeError("Not enough arguments");if(n=Math.floor(n),r=Math.floor(r),isNaN(n)||n<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let a=n*r*i;if(s===void 0&&(s=new Uint8ClampedArray(a)),s instanceof Uint8ClampedArray){if(s.length!==a)throw TypeError("Index or size is negative or greater than the allowed amount");if(!o)for(let h=0;h<r;h++)for(let d=0;d<n;d++){let l=(h*n+d)*i;for(let u=0;u<i;u++)s[l+u]=e[u]}return{get width(){return n},get height(){return r},get data(){return s}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),en=It({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=14,i=(r,s)=>{if(r<=-s||r>=s||r==0)return 0;let a=r*Math.PI;return Math.sin(a)/a*Math.sin(a/s)/(a/s)},o=r=>Math.round(r*((1<<e)-1)),n=(r,s,a,h,d)=>{let l=d?2:3,u=1/a,c=Math.min(1,a),f=l/c,m=Math.floor((f+1)*2),p=new Int16Array((m+2)*s),_=0;for(let v=0;v<s;v++){let L=(v+.5)*u+h,C=Math.max(0,Math.floor(L-f)),D=Math.min(r-1,Math.ceil(L+f)),T=D-C+1,X=new Float32Array(T),S=new Int16Array(T),K=0,B=0;for(let q=C;q<=D;q++){let I=i((q+.5-L)*c,l);K+=I,X[B]=I,B++}let nt=0;for(let q=0;q<X.length;q++){let I=X[q]/K;nt+=I,S[q]=o(I)}S[s>>1]+=o(1-nt);let j=0;for(;j<S.length&&S[j]===0;)j++;let k=S.length-1;for(;k>0&&S[k]===0;)k--;let tt=C+j,rt=k-j+1;p[_++]=tt,p[_++]=rt,p.set(S.subarray(j,k+1),_),_+=rt}return p};t.filters=n}}),on=It({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0;var e=14,i=(o,n,r,s,a,h)=>{let d=0,l=0;for(let u=0;u<s;u++){let c=0;for(let f=0;f<a;f++){let m=h[c++],p=d+m*4|0,_=0,v=0,L=0,C=0;for(let D=h[c++];D>0;D--){let T=h[c++];_=_+T*o[p]|0,v=v+T*o[p+1]|0,L=L+T*o[p+2]|0,C=C+T*o[p+3]|0,p=p+4|0}n[l]=_+8192>>e,n[l+1]=v+8192>>e,n[l+2]=L+8192>>e,n[l+3]=C+8192>>e,l=l+s*4|0}l=(u+1)*4|0,d=(u+1)*r*4|0}};t.convolve=i}}),nn=It({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=Yo(),i=tn(),o=en(),n=on(),r=(h,d,l=!1)=>{let u=d.width/h.width,c=d.height/h.height,f=o.filters(h.width,d.width,u,0,l),m=o.filters(h.height,d.height,c,0,l),p=new Uint8ClampedArray(d.width*h.height*4);n.convolve(h.data,p,h.width,h.height,d.width,f),n.convolve(p,d.data,h.height,d.width,d.height,m)},s=(h,d,l=0,u=0,c=h.width-l,f=h.height-u,m=0,p=0,_=d.width-m,v=d.height-p)=>{if(l=l|0,u=u|0,c=c|0,f=f|0,m=m|0,p=p|0,_=_|0,v=v|0,c<=0||f<=0||_<=0||v<=0)return;if(l===0&&u===0&&c===h.width&&f===h.height&&m===0&&p===0&&_===d.width&&v===d.height){r(h,d);return}let L=i.createImage(c,f),C=i.createImage(_,v);e.copy(h,L,l,u),r(L,C),e.copy(C,d,0,0,C.width,C.height,m,p)};t.lanczos=s;var a=(h,d,l=0,u=0,c=h.width-l,f=h.height-u,m=0,p=0,_=d.width-m,v=d.height-p)=>{if(l=l|0,u=u|0,c=c|0,f=f|0,m=m|0,p=p|0,_=_|0,v=v|0,c<=0||f<=0||_<=0||v<=0)return;if(l===0&&u===0&&c===h.width&&f===h.height&&m===0&&p===0&&_===d.width&&v===d.height){r(h,d,!0);return}let L=i.createImage(c,f),C=i.createImage(_,v);e.copy(h,L,l,u),r(L,C,!0),e.copy(C,d,0,0,C.width,C.height,m,p)};t.lanczos2=a}}),Si=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Si||{}),rn=zo(Si),Ai=F({autoplay:w(le()),defaultTheme:w(M()),direction:w(fe([Xe(1),Xe(-1)])),hover:w(le()),id:M(),intermission:w(J()),loop:w(fe([le(),J()])),playMode:w(rn),speed:w(J()),themeColor:w(M())}),sn=F({animations:St(M()),id:M()}),an=F({activeAnimationId:w(M()),animations:St(Ai),author:w(M()),custom:w(Ro(M(),jo())),description:w(M()),generator:w(M()),keywords:w(M()),revision:w(J()),themes:w(St(sn)),states:w(St(M())),version:w(M())}),ki=Bo(Ai,["id"]),dt=F({state:M()}),ln=dt,hn=Et([dt,F({ms:J()})]),dn=Et([dt,F({count:J()})]),un=dt,cn=dt,pn=dt,fn=Et([dt,F({threshold:w(St(J([ve(0),me(1)])))})]),mn=F({onAfter:w(hn),onClick:w(ln),onComplete:w(pn),onEnter:w(dn),onMouseEnter:w(un),onMouseLeave:w(cn),onShow:w(fn)}),vn=Et([ki,F({playOnScroll:w(Ye([J([ve(0),me(1)]),J([ve(0),me(1)])])),segments:w(fe([Ye([J(),J()]),M()]))})]);Et([mn,F({animationId:w(M()),playbackSettings:vn})]);var _n={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},ti={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},yn=t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1);typeof window>"u"?e=Buffer.from(o,"base64").toString("binary"):e=atob(o);let n=new Uint8Array(e.length);for(let r=0;r<e.length;r+=1)n[r]=e.charCodeAt(r);i=Array.from(n.subarray(0,8));for(let r in ti){let s=ti[r];if(s&&i.every((a,h)=>a===s[h]))return _n[r]}return null},ke=class extends Error{constructor(t,e){super(t),Xo(this,"code"),this.name="[dotlottie-js]",this.code=e}};function xi(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else{let i=Array.prototype.map.call(t,o=>String.fromCharCode(o)).join("");e=window.btoa(i)}return`data:${yn(e)};base64,${e}`}function ei(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function _e(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function Ot(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new ke("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{Oo(t,{filter:e},(n,r)=>{n&&o(n),i(r)})})}async function xe(t,e,i){if(!(t instanceof Uint8Array))throw new ke("DotLottie not found","INVALID_DOTLOTTIE");return(await Ot(t,o=>o.name===e&&(!i||i(o))))[e]}async function ye(t){let e="manifest.json",i=(await Ot(t,o=>o.name===e))[e];if(!(typeof i>"u"))return JSON.parse(wt(i,!1))}async function gn(t){if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let e=await ye(t);if(typeof e>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=qo(an,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(Mo(i.error).nested,null,2)}`}}async function ii(t){let e=new Uint8Array(t),i=await gn(e);if(i.error)throw new ke(i.error,"INVALID_DOTLOTTIE");return e}async function bn(t,e){let i=await Ot(t,n=>{let r=n.name.replace("audio/","");return n.name.startsWith("audio/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("audio/","");o[s]=xi(r)}}return o}async function wn(t,e){let i=new Map;for(let[n,r]of Object.entries(e))for(let s of r.assets||[])if(_e(s)){let a=s.p;i.has(a)||i.set(a,new Set),i.get(a)?.add(n)}let o=await bn(t,n=>i.has(n.name));for(let[n,r]of i){let s=o[n];if(s)for(let a of r){let h=e[a];for(let d of h?.assets||[])_e(d)&&d.p===n&&(d.p=s,d.u="",d.e=1)}}}async function Cn(t,e){let i=await Ot(t,n=>{let r=n.name.replace("images/","");return n.name.startsWith("images/")&&(!e||e({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("images/","");o[s]=xi(r)}}return o}async function Ln(t,e){let i=new Map;for(let[n,r]of Object.entries(e))for(let s of r.assets||[])if(ei(s)){let a=s.p;i.has(a)||i.set(a,new Set),i.get(a)?.add(n)}let o=await Cn(t,n=>i.has(n.name));for(let[n,r]of i){let s=o[n];if(s)for(let a of r){let h=e[a];for(let d of h?.assets||[])ei(d)&&d.p===n&&(d.p=s,d.u="",d.e=1)}}}async function $n(t,e,{inlineAssets:i}={},o){let n=`animations/${e}.json`,r=await xe(t,n,o);if(typeof r>"u")return;let s=JSON.parse(wt(r,!1));if(!i)return s;let a={[e]:s};return await Ln(t,a),await wn(t,a),s}async function Sn(t,e,i){let o=`themes/${e}.lss`,n=await xe(t,o,i);if(!(typeof n>"u"))return wt(n,!1)}async function An(t,e){let i={},o=await Ot(t,n=>{let r=n.name.replace("states/","").replace(".json","");return n.name.startsWith("states/")&&(!e||e({...n,name:r}))});for(let n in o){let r=o[n];if(r instanceof Uint8Array){let s=n.replace("states/","").replace(".json","");i[s]=wt(r,!1)}}return i}async function kn(t,e,i){let o=`states/${e}.json`,n=await xe(t,o,i);return typeof n>"u"?void 0:JSON.parse(wt(n,!1))}Qo(nn());function g(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function pt(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function $(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function xn(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),n=o.indexOf(".");return n!==-1?o.substring(0,n):o}function Ft(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function Pn(t){let e=t.assets;return e?e.some(i=>_e(i)):!1}function En(t){try{let e=JSON.parse(t);return Ft(e)}catch{return!1}}function or(t,e){let i=Object.keys(t).find(o=>t[o]===e);if(i===void 0)throw new Error("Value not found in the object.");return i}var In=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);if(e.headers.get("content-type")?.includes("application/json")){let i=await e.json();if(!Ft(i))throw new Error(`Invalid lottie JSON at ${t}`);let o=xn(t);this._animationsMap.set(o,i);let n={activeAnimationId:o,animations:[{id:o}]};this._manifest=n}else{this._dotLottie=await ii(await e.arrayBuffer());let i=await ye(this._dotLottie);if(!i)throw new Error("Manifest not found");this._manifest=i}}loadFromLottieJSON(t){if(!Ft(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i}async loadFromArrayBuffer(t){this._dotLottie=await ii(t);let e=await ye(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await $n(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await Sn(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await An(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let o=JSON.parse(i);if(o){let n=o.descriptor.id;this._stateMachinesMap.get(n)||this._stateMachinesMap.set(n,o)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await kn(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};async function On(t,e){let[{relottie:i},{default:o}]=await Promise.all([H(()=>import("./dist-AIQGIF54-ZRQFFVOU.7a957ed0.js"),["_astro/dist-AIQGIF54-ZRQFFVOU.7a957ed0.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]),H(()=>import("./dist-4JHQ5UB4-ADENUQD3.8e240750.js"),["_astro/dist-4JHQ5UB4-ADENUQD3.8e240750.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"])]),n=await i().use(o,{lss:e}).process(JSON.stringify(t));return JSON.parse(n.value)}function Jt(){throw new Error("Cycle detected")}function Pe(){if(_t>1)_t--;else{for(var t,e=!1;At!==void 0;){var i=At;for(At=void 0,ge++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Ei(i))try{i.c()}catch(n){e||(t=n,e=!0)}i=o}}if(ge=0,_t--,e)throw t}}var A=void 0,At=void 0,_t=0,ge=0,Bt=0;function Pi(t){if(A!==void 0){var e=t.n;if(e===void 0||e.t!==A)return e={i:0,S:t,p:A.s,n:void 0,t:A,e:void 0,x:void 0,r:e},A.s!==void 0&&(A.s.n=e),A.s=e,t.n=e,32&A.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=A.s,e.n=void 0,A.s.n=e,A.s=e),e}}function z(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}z.prototype.h=function(){return!0};z.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};z.prototype.U=function(t){if(this.t!==void 0){var e=t.e,i=t.x;e!==void 0&&(e.x=i,t.e=void 0),i!==void 0&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}};z.prototype.subscribe=function(t){var e=this;return Un(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})};z.prototype.valueOf=function(){return this.value};z.prototype.toString=function(){return this.value+""};z.prototype.toJSON=function(){return this.value};z.prototype.peek=function(){return this.v};Object.defineProperty(z.prototype,"value",{get:function(){var t=Pi(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(A instanceof ut&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){ge>100&&Jt(),this.v=t,this.i++,Bt++,_t++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Pe()}}}});function Mn(t){return new z(t)}function Ei(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function Ii(t){for(var e=t.s;e!==void 0;e=e.n){var i=e.S.n;if(i!==void 0&&(e.r=i),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function Oi(t){for(var e=t.s,i=void 0;e!==void 0;){var o=e.p;e.i===-1?(e.S.U(e),o!==void 0&&(o.n=e.n),e.n!==void 0&&(e.n.p=o)):i=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=o}t.s=i}function ut(t){z.call(this,void 0),this.x=t,this.s=void 0,this.g=Bt-1,this.f=4}(ut.prototype=new z).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Bt))return!0;if(this.g=Bt,this.f|=1,this.i>0&&!Ei(this))return this.f&=-2,!0;var t=A;try{Ii(this),A=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return A=t,Oi(this),this.f&=-2,!0};ut.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}z.prototype.S.call(this,t)};ut.prototype.U=function(t){if(this.t!==void 0&&(z.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};ut.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};ut.prototype.peek=function(){if(this.h()||Jt(),16&this.f)throw this.v;return this.v};Object.defineProperty(ut.prototype,"value",{get:function(){1&this.f&&Jt();var t=Pi(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function Mi(t){var e=t.u;if(t.u=void 0,typeof e=="function"){_t++;var i=A;A=void 0;try{e()}catch(o){throw t.f&=-2,t.f|=8,Ee(t),o}finally{A=i,Pe()}}}function Ee(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,Mi(t)}function Tn(t){if(A!==this)throw new Error("Out-of-order effect");Oi(this),A=t,this.f&=-2,8&this.f&&Ee(this),Pe()}function Mt(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Mt.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};Mt.prototype.S=function(){1&this.f&&Jt(),this.f|=1,this.f&=-9,Mi(this),Ii(this),_t++;var t=A;return A=this,Tn.bind(this,t)};Mt.prototype.N=function(){2&this.f||(this.f|=2,this.o=At,At=this)};Mt.prototype.d=function(){this.f|=8,1&this.f||Ee(this)};function Un(t){var e=new Mt(t);try{e.c()}catch(i){throw e.d(),i}return e.d.bind(e)}var Nn=class{_state;_prevState;constructor(t){this._prevState=t,this._state=Mn(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function jn(t,e){let[{DotLottieStateMachineManager:i}]=await Promise.all([H(()=>import("./dotlottie-state-machine-manager-EQLJDSHN-GQNUJPNH.aa755514.js"),["_astro/dotlottie-state-machine-manager-EQLJDSHN-GQNUJPNH.aa755514.js","_astro/index.da907017.js"])]);if(!t.length)throw g("No state machines available inside this .lottie!");return new i(t,e)}var zn={name:"@dotlottie/common",version:"0.7.0",type:"module",description:"",author:"Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",license:"MIT",private:!0,engines:{node:">18.0.0"},module:"dist/index.js",types:"dist/index.d.ts",files:["dist"],keywords:[],scripts:{build:"tsup",dev:"tsup --watch",lint:"eslint .","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/dotlottie-js":"0.6.0","@lottiefiles/relottie":"1.0.0","@lottiefiles/relottie-style":"0.4.1","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"},devDependencies:{"@lottiefiles/lottie-types":"^1.2.0","@types/howler":"^2.2.8",tsup:"^6.1.3",typescript:"^4.7.4"},publishConfig:{access:"restricted"}},et=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))(et||{}),mt=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(mt||{}),Ti=(t=>(t.Bounce="bounce",t.Normal="normal",t))(Ti||{}),V={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Ui={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},oi=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new Nn(Ui);_light=!1;_worker=!1;_dotLottieLoader=new In;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){this._src=structuredClone(t),i?.testId&&(this._testId=i.testId),this._defaultTheme=i?.defaultTheme||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof i?.activeAnimationId=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,typeof i?.background=="string"&&this.setBackground(i.background),typeof i?.activeStateId<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},i?.light&&(this._light=i.light),i?.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){let t=()=>{this._hover&&this.currentState!=="playing"&&this.play()},e=()=>{this._hover&&this.currentState==="playing"&&this.stop()};this._container?.removeEventListener("mouseenter",t),this._container?.removeEventListener("mouseleave",e),this._container?.addEventListener("mouseleave",e),this._container?.addEventListener("mouseenter",t)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let e=this._dotLottieLoader.manifest?.animations.find(i=>i.id===this._currentAnimationId);return e&&typeof e[t]<"u"?e[t]:V[t]}_getPlaybackOptions(){let t={};for(let e in V)typeof V[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){let e=t(this._getPlaybackOptions());try{ki._parse(e)}catch{$(`Invalid PlaybackOptions, ${JSON.stringify(e,null,2)}`);return}typeof e.defaultTheme<"u"&&(this._defaultTheme=e.defaultTheme),typeof e.playMode<"u"&&(this._mode=e.playMode),typeof e.intermission<"u"&&(this._intermission=e.intermission),typeof e.hover<"u"&&(this._hover=e.hover),typeof e.loop<"u"&&(this.clearCountTimer(),this._loop=e.loop,this._counter=0,this._lottie?.setLoop(typeof e.loop=="number"?!0:e.loop)),typeof e.speed<"u"&&this._lottie?.setSpeed(e.speed),typeof e.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=e.autoplay),typeof e.direction<"u"&&this._lottie?.setDirection(e.direction)}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...V,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){return t.split(".").pop()?.toLowerCase()==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(this._src=structuredClone(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){typeof t=="boolean"&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){typeof t=="string"&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){$("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){$("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){$("seek() Can't use whilst loading.");return}let e=t;typeof e=="number"&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];o!==void 0&&(this._lottie.goToAndPlay(o,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,n]=t??[0,this.totalFrames-1],[r,s]=e??[0,1];if(!this._areNumbersInRange(r,s)){pt("threshold values must be between 0 and 1");return}if(this.container){let{height:a,top:h}=this.container.getBoundingClientRect(),d=window.innerHeight-h,l=window.innerHeight+a,u=d/l,c=o+Math.round((u-r)/(s-r)*(n-o));i&&i(u),this.goToAndStop(c,!0),(c>=n||u>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t?.segments,t?.threshold,t?.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw g("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t?.threshold?t.threshold:[0,1]},i=o=>{o.forEach(n=>{this._visibilityPercentage=n.intersectionRatio*100,n.isIntersecting?(t?.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),this._container?.dispatchEvent(new Event("visibilityChange"))):t?.callbackOnIntersect&&(t.callbackOnIntersect(0),this._container?.dispatchEvent(new Event("visibilityChange")))})};this._onShowIntersectionObserver=new IntersectionObserver(i,e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){if(this.stop(),!this.container)throw g("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:t?.threshold??[],callbackOnIntersect:e=>{e===0?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":typeof o=="boolean"&&(e.autoplay=o);break;case"direction":typeof o=="number"&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":(typeof o=="boolean"||typeof o=="number")&&(e.loop=o);break;case"playMode":typeof o=="string"&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":typeof o=="number"&&(e.speed=o);break;case"themeColor":typeof o=="string"&&(e.themeColor=o);break;case"hover":typeof o=="boolean"&&(e.hover=o);break;case"intermission":typeof o=="number"&&(e.intermission=o);break;case"defaultTheme":typeof o=="string"&&(e.defaultTheme=o);break}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){if(!this._dotLottieLoader.manifest?.animations.length)throw g("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw g("No animations have been loaded.")}async play(t,e){if(["initial","loading"].includes(this._currentState)){$("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof t=="number"){let i=this._dotLottieLoader.manifest?.animations[t];if(!i)throw g("animation not found.");typeof e=="function"?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}if(typeof t=="string"){let i=this._dotLottieLoader.manifest?.animations.find(o=>o.id===t);if(!i)throw g("animation not found.");typeof e=="function"?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){$("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){$("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){this.currentState==="playing"?this.pause():this.play()}_getAnimationByIdOrIndex(t){if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof t=="number"){let e=this._dotLottieLoader.manifest?.animations[t];if(!e)throw g("animation not found.");return e}if(typeof t=="string"){let e=this._dotLottieLoader.manifest?.animations.find(i=>i.id===t);if(!e)throw g("animation not found.");return e}throw g("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){pt("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw g("No interactivity states are available.");if(t==="undefined")throw g("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await jn(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&this._stateMachineManager?.stop(),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw g("stateId must be a non-empty string.")}exitInteractiveMode(){this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",this._stateMachineManager?.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){let t=this._getActiveAnimationId(),e=this._dotLottieLoader.manifest?.animations.find(i=>i.id===t);if(this._inInteractiveMode&&this.exitInteractiveMode(),!e)throw g("animation not found.");this.play(t)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw g("manifest not found.");if(this._inInteractiveMode){$("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw g("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw g("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw g("manifest not found.");if(this._inInteractiveMode){$("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(e===-1)throw g("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw g("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){$("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){$("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){$("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){$("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){$("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause()}destroy(){this._container?.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(t=>{t.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,this._lottie?.destroy()}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${zn.dependencies["lottie-web"]}`}addEventListener(t,e){this._listeners.has(t)||this._listeners.set(t,new Set),this._listeners.get(t)?.add(e);try{t==="complete"?this._container?.addEventListener(t,e):this._lottie?.addEventListener(t,e)}catch(i){pt(`addEventListener ${i}`)}}getState(){return{autoplay:this._lottie?.autoplay??!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:this._lottie?.playDirection??1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:this._lottie?.playSpeed??1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:this._activeStateId??""}}_notify(){this.state.setState(this.getState())}get totalFrames(){return this._lottie?.totalFrames||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){return this._lottie?.playSpeed||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){return this._lottie?.autoplay??!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){$("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){$("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){$("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){let e;!Array.isArray(t)||t.length===0?e=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:e=t;let i=!1;if(e.includes("activeAnimationId")){let o=this._dotLottieLoader.manifest?.activeAnimationId,n=this._getAnimationByIdOrIndex(o||0);this._activeAnimationId=o,await this._setCurrentAnimation(n.id),i=!0}e.forEach(o=>{switch(o){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),i&&this.render()}removeEventListener(t,e){try{t==="complete"?this._container?.removeEventListener(t,e):this._lottie?.removeEventListener(t,e),this._listeners.get(t)?.delete(e)}catch(i){pt("removeEventListener",i)}}_handleAnimationComplete(){typeof this._loop=="number"&&this.stop();let t=this.direction===-1?0:this.totalFrames;this.goToAndStop(t,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),this._container?.dispatchEvent(new Event("complete"))}addEventListeners(){if(!this._lottie||["loading"].includes(this._currentState)){$("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{if(!this._lottie){$("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&(this._container?.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{if(!this._lottie){$("loopComplete event : Lottie is undefined.");return}this._container?.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let t=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof t=="number"&&(t=Number(t)*-1);let e=t===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(e,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0))},this._intermission)):(this._setPlayerState(()=>({direction:t})),this.goToAndPlay(t===-1?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;this._mode==="bounce"&&typeof t=="number"&&(t=Number(t)*-1);let e=t===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[t,e]of this._listeners)if(t==="complete")for(let i of e)this._container?.addEventListener(t,i);else for(let i of e)this._lottie.addEventListener(t,i)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&Pn(this._animation)){let{DotLottieAudio:t}=await H(()=>import("./dotlottie-audio-FLUSZPLH.34243ffb.js"),["_astro/dotlottie-audio-FLUSZPLH.34243ffb.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]);return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){if(t?.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw g("no animation selected");let e=V.loop,i=V.autoplay,o=V.playMode,n=V.intermission,r=V.hover,s=V.direction,a=V.speed,h=V.defaultTheme;e=t?.loop??this._getOption("loop"),i=t?.autoplay??this._getOption("autoplay"),o=t?.playMode??this._getOption("playMode"),n=t?.intermission??this._getOption("intermission"),r=t?.hover??this._getOption("hover"),s=t?.direction??this._getOption("direction"),a=t?.speed??this._getOption("speed"),h=t?.defaultTheme??this._getOption("defaultTheme");let d={...this._animationConfig,autoplay:r?!1:i,loop:typeof e=="number"?!0:e,renderer:this._worker?"svg":this._animationConfig.renderer??"svg"},[l,u,c]=await Promise.all([this._dotLottieLoader.getTheme(h),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(l&&this._animation?this._animation=await On(this._animation,l):this._animation=await this._dotLottieLoader.getAnimation(this._currentAnimationId??""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:h,playMode:o,intermission:n,hover:r,loop:e})),c?this._lottie=u.loadAnimation({...d,container:this._container,animationData:this._animation,audioFactory:c}):this._lottie=u.loadAnimation({...d,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{this._lottie?.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:s,speed:a})),i&&!r&&this.play(),this._updateTestData()}async _getLottiePlayerInstance(){let t=this._animationConfig.renderer??"svg",e;if(this._worker)return t!=="svg"&&$("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),e=await H(()=>import("./lottie_worker-WHOD5EO7-64CFFH2E.96a49dc6.js"),["_astro/lottie_worker-WHOD5EO7-64CFFH2E.96a49dc6.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]),e.default;switch(t){case"svg":{this._light?e=await H(()=>import("./lottie_light-IOYK46WR-ECBCRPFC.b3b804e4.js"),["_astro/lottie_light-IOYK46WR-ECBCRPFC.b3b804e4.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]):e=await H(()=>import("./lottie_svg-NPHRPZVQ-H7F42BXO.088570af.js"),["_astro/lottie_svg-NPHRPZVQ-H7F42BXO.088570af.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]);break}case"canvas":{this._light?e=await H(()=>import("./lottie_light_canvas-JOJMVDMY-WR7KP7PE.0f6d71df.js"),["_astro/lottie_light_canvas-JOJMVDMY-WR7KP7PE.0f6d71df.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]):e=await H(()=>import("./lottie_canvas-MBHU2YSW-QKDI7L4D.931a4551.js"),["_astro/lottie_canvas-MBHU2YSW-QKDI7L4D.931a4551.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]);break}case"html":{this._light?e=await H(()=>import("./lottie_light_html-QXO6XUZK-DGMP7OWN.7b282902.js"),["_astro/lottie_light_html-QXO6XUZK-DGMP7OWN.7b282902.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]):e=await H(()=>import("./lottie_html-DEQZ7JWN-7DH66MZZ.0bf71882.js"),["_astro/lottie_html-DEQZ7JWN-7DH66MZZ.0bf71882.js","_astro/chunk-U2GK2GFR.2d4e7f2d.js"]);break}default:throw new Error(`Invalid renderer: ${t}`)}return e.default}_getActiveAnimationId(){let t=this._dotLottieLoader.manifest;return this._activeAnimationId??t?.activeAnimationId??t?.animations[0]?.id??void 0}async load(t){if(this._currentState==="loading"){$("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(En(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i)}else{let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString())}else if(typeof this._src=="object"&&Ft(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw g("Invalid src provided");if(!this._dotLottieLoader.manifest)throw g("No manifest found");let e=this._getActiveAnimationId();if(!e)throw g("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(e){this.setCurrentState("error"),e instanceof Error&&pt(`Error loading animation: ${e.message}`)}}setErrorState(t){this.setCurrentState("error"),pt(t)}_requireValidDirection(t){if(t!==-1&&t!==1)throw g("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw g("intermission must be a positive number")}_requireValidLoop(t){if(typeof t=="number"&&(!Number.isInteger(t)||t<0))throw g("loop must be a positive number or boolean")}_requireValidSpeed(t){if(typeof t!="number")throw g("speed must be a number")}_requireValidBackground(t){if(typeof t!="string")throw g("background must be a string")}_requireValidAutoplay(t){if(typeof t!="boolean")throw g("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}},Dn=Object.defineProperty,Vn=Object.getOwnPropertyDescriptor,P=(t,e,i,o)=>{for(var n=o>1?void 0:o?Vn(e,i):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(o?s(e,i,n):s(n))||n);return o&&n&&Dn(e,i,n),n},Rn=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}},Fn=(t,e,i)=>{e.constructor.createProperty(i,t)};function O(t){return(e,i)=>i!==void 0?Fn(t,e,i):Rn(t,e)}function Bn(t){return O({...t,state:!0})}var qn=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(o===void 0){let r=(n=i.originalKey)!==null&&n!==void 0?n:i.key,s=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return t!=null&&(s.finisher=function(a){t(a,r)}),s}{let r=i.constructor;e!==void 0&&Object.defineProperty(i,o,e(o)),t?.(r,o)}};function Hn(t,e){return qn({descriptor:i=>{let o={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(t))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){let n=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var r,s;return this[n]===void 0&&(this[n]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&s!==void 0?s:null),this[n]}}return o}})}var he;((he=window.HTMLSlotElement)===null||he===void 0?void 0:he.prototype.assignedElements)!=null;var Zn={name:"@dotlottie/player-component",version:"2.7.0",description:"dotLottie animation player web component.",repository:"https://github.com/dotlottie/player-component.git",homepage:"https://dotlottie.com/players",bugs:"https://github.com/dotlottie/player-component/issues",author:"Jawish Hameed <jawish@lottiefiles.com>",license:"MIT",main:"dist/dotlottie-player.js",module:"dist/dotlottie-player.mjs",types:"dist/dotlottie-player.d.ts",files:["dist"],keywords:["dotlottie","animation","web component","component","lit-element","player"],scripts:{build:"tsup","cypress:open":"cypress open --component",dev:"tsup --watch",lint:"eslint .","lint:fix":"eslint --fix",test:"cypress run --component","type-check":"tsc --noEmit"},dependencies:{lit:"^2.7.5"},devDependencies:{"@dotlottie/common":"workspace:^","@vitejs/plugin-legacy":"^4.1.0","axe-core":"^4.7.2",cypress:"^12.11.0","cypress-axe":"^1.4.0","cypress-ct-lit":"^0.3.2","lottie-web":"^5.12.2",terser:"^5.19.0",tsup:"^6.1.3",typescript:"^4.7.4",vite:"^4.3.9"},publishConfig:{access:"public"},browserslist:["> 3%"]},ni="dotlottie-player",x=class extends $t{defaultTheme="";container;playMode=Ti.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):typeof t=="string"&&["true","false"].includes(t)?(this._loop=t==="true",this._loop):($("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let i=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let o=i/100*this._dotLottieCommonPlayer.totalFrames;this.seek(o)}catch{throw g("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(t===void 0){$("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((e,i)=>{this._seeker=e.seeker,this.requestUpdate(),i.currentState!==e.currentState&&this.dispatchEvent(new CustomEvent(e.currentState)),this.dispatchEvent(new CustomEvent(et.Frame,{detail:{frame:e.frame,seeker:e.seeker}})),this.dispatchEvent(new CustomEvent(et.VisibilityChange,{detail:{visibilityPercentage:e.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(et.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(et.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let e=this.getManifest();e&&e.themes&&(this._themesForCurrentAnimation=e.themes.filter(i=>i.animations.includes(this.getCurrentAnimationId()||""))),e&&e.states&&(this._hasMultipleStates=e.states.length>0,this._statesForCurrentAnimation=[],e.states.forEach(i=>{this._statesForCurrentAnimation.push(i)})),this.dispatchEvent(new CustomEvent(et.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(et.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(et.DataFail))}),window&&window.addEventListener("click",e=>this._clickOutListener(e))}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new oi(t,this.container,{rendererSettings:e??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let o=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,o&&(o.themes&&(this._themesForCurrentAnimation=o.themes.filter(n=>n.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=o.themes.length>0),o.states&&(this._hasMultipleStates=o.states.length>0,this._statesForCurrentAnimation=[],o.states.forEach(n=>{this._statesForCurrentAnimation.push(n)}))),this._initListeners()}getCurrentAnimationId(){return this._dotLottieCommonPlayer?.currentAnimationId}animationCount(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.getManifest()?.animations.length||0}animations(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getManifest()?.animations.map(t=>t.id)||[]:[]}currentAnimation(){return!this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():Ui}getManifest(){return this._dotLottieCommonPlayer?.getManifest()}getLottie(){return this._dotLottieCommonPlayer?.getAnimationInstance()}getVersions(){return{lottieWebVersion:oi.getLottieWebVersion(),dotLottiePlayerVersion:`${Zn.version}`}}previous(t){this._dotLottieCommonPlayer?.previous(t)}next(t){this._dotLottieCommonPlayer?.next(t)}reset(){this._dotLottieCommonPlayer?.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=new XMLSerializer().serializeToString(e);if(t){let o=document.createElement("a");o.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,o.download=`download_${this._seeker}.svg`,document.body.appendChild(o),o.click(),document.body.removeChild(o)}return i}setTheme(t){this._dotLottieCommonPlayer?.setDefaultTheme(t)}themes(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getManifest()?.themes?.map(t=>t.id)||[]:[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){this._dotLottieCommonPlayer?.revertToManifestValues(t)}static get styles(){return fo}async firstUpdated(){this.container=this.shadowRoot?.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(t=>{t[0]!==void 0&&t[0].isIntersecting?this._dotLottieCommonPlayer?.currentState===mt.Frozen&&this.play():this._dotLottieCommonPlayer?.currentState===mt.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){this._io&&(this._io.disconnect(),this._io=void 0),this._dotLottieCommonPlayer?.destroy(),this._unsubscribeListeners?.(),window&&window.removeEventListener("click",t=>this._clickOutListener(t))}_clickOutListener(t){!t.composedPath().some(e=>e instanceof HTMLElement?e.classList.contains("popover")||e.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){let t=this._dotLottieCommonPlayer?.currentState===mt.Playing,e=this._dotLottieCommonPlayer?.currentState===mt.Paused;return y`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?y`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:y``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${t||e?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${t?y`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:y`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?y`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:y``}
        <input
          id="lottie-seeker-input"
          class="seeker ${this._dotLottieCommonPlayer?.direction===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${i=>this._handleSeekChange(i)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{this._dotLottieCommonPlayer?.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${this._dotLottieCommonPlayer?.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?y`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:y``}
      </div>
      ${this._popoverIsOpen?y`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?y`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${i=>{(i.code==="Space"||i.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:y``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?y` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${i=>{(i.code==="Space"||i.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?y` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${i=>{(i.code==="Space"||i.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?y`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(i=>y`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${i}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(i),this.requestUpdate()}}
                                @keydown=${o=>{(o.code==="Space"||o.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(i),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===i?y`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:y`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${i}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:y``}
              ${this._styleTabIsOpen?y`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${this._dotLottieCommonPlayer?.defaultTheme===""?y``:y`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(i=>y`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${i.id}"
                                @click=${()=>{this.setTheme(i.id)}}
                                @keydown=${o=>{(o.code==="Space"||o.code==="Enter")&&this.setTheme(i.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===i.id?y`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:y`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${i.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:y``}
              ${this._statesTabIsOpen?y`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(i=>y`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${i}"
                                @click=${()=>{this.enterInteractiveMode(i)}}
                                @keydown=${o=>{(o.code==="Space"||o.code==="Enter")&&this.enterInteractiveMode(i)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===i?y`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:y`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${i}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:y``}
            </div>
          `:y``}
    `}render(){let t=this.controls?"main controls":"main",e=this.controls?"animation controls":"animation";return y`
      <div id="animation-container" class=${t} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${e} style="background:${this.background};">
          ${this._dotLottieCommonPlayer?.currentState===mt.Error?y` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};P([O({type:String})],x.prototype,"defaultTheme",2),P([Hn("#animation")],x.prototype,"container",2),P([O()],x.prototype,"playMode",2),P([O({type:Boolean})],x.prototype,"autoplay",2),P([O({type:String})],x.prototype,"background",2),P([O({type:Boolean})],x.prototype,"controls",2),P([O({type:Number})],x.prototype,"direction",2),P([O({type:Boolean})],x.prototype,"hover",2),P([O({type:String})],x.prototype,"loop",2),P([O({type:String})],x.prototype,"renderer",2),P([O({type:Number})],x.prototype,"speed",2),P([O({type:String})],x.prototype,"src",2),P([O()],x.prototype,"intermission",2),P([O({type:String})],x.prototype,"activeAnimationId",2),P([O({type:Boolean})],x.prototype,"light",2),P([O({type:Boolean})],x.prototype,"worker",2),P([O({type:String})],x.prototype,"activeStateId",2),P([Bn()],x.prototype,"_seeker",2);customElements.get(ni)||customElements.define(ni,x);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const Jn="/talk-animation-techniques/_astro/LottieDemoCity.82e17b71.lottie";function Wn(t){let e,i;return{c(){e=Fi("dotlottie-player"),this.h()},l(o){e=Bi(o,"DOTLOTTIE-PLAYER",{loop:!0,src:!0,style:!0}),qi(e).forEach(Ne),this.h()},h(){je(e,"loop","true"),Hi(e.src,i=Jn)||je(e,"src",i),ze(e,"height","100%"),ze(e,"width","100%")},m(o,n){Zi(o,e,n),t[1](e)},p:te,i:te,o:te,d(o){o&&Ne(e),t[1](null)}}}function Kn(t,e,i){let o;Ji(()=>(o.closest("section:not(.stack).present")?o.play():o.pause(),!0));function n(r){Wi[r?"unshift":"push"](()=>{o=r,i(0,o)})}return[o,n]}class nr extends Di{constructor(e){super(),Vi(this,e,Kn,Wn,Ri,{})}}export{V as F,nr as L,or as n,pt as t,g as v};
