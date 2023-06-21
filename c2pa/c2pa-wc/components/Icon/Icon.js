import{__decorate as o,e as i}from"../../b803f408.js";import{$ as c,s as t,r as n,w as r}from"../../e4c0417e.js";import{n as a}from"../../06170432.js";import{t as s}from"../../12d8f3c3.js";import{defaultStyles as e}from"../../styles.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";var p;let m=p=class extends t{constructor(){super(...arguments),this.source=""}updated(o){var i;o.has("source")&&(this.icon=null===(i=p.matchers.find((({pattern:o})=>o.test(this.source))))||void 0===i?void 0:i.icon)}static get styles(){return[e,n`
        :host {
          max-height: var(--cai-icon-size, 16px);
        }
        #container {
          display: inline-block;
          width: var(--cai-icon-size, 16px);
          height: var(--cai-icon-size, 16px);
          --cai-icon-width: var(--cai-icon-size, 16px);
          --cai-icon-height: var(--cai-icon-size, 16px);
          margin-right: var(--cai-icon-spacing, 8px);
        }
      `]}render(){return this.icon?c`<div id="container">${this.icon}</div>`:r}};m.matchers=[{pattern:/photoshop/i,icon:c`<cai-icon-photoshop></cai-icon-photoshop>`},{pattern:/adobe\sstock/i,icon:c`<cai-icon-adobe-stock></cai-icon-adobe-stock>`},{pattern:/adobe/i,icon:c`<cai-icon-adobe></cai-icon-adobe>`},{pattern:/behance\.net/i,icon:c`<cai-icon-behance></cai-icon-behance>`},{pattern:/facebook\.com/i,icon:c`<cai-icon-facebook></cai-icon-facebook>`},{pattern:/instagram\.com/i,icon:c`<cai-icon-instagram></cai-icon-instagram>`},{pattern:/truepic/i,icon:c`<cai-icon-truepic></cai-icon-truepic>`},{pattern:/twitter\.com/i,icon:c`<cai-icon-twitter></cai-icon-twitter>`},{pattern:/lightroom/i,icon:c`<cai-icon-lightroom></cai-icon-lightroom>`}],o([i({type:String})],m.prototype,"source",void 0),o([s()],m.prototype,"icon",void 0),m=p=o([a("cai-icon")],m);
