import{__decorate as o}from"../../b803f408.js";import{s as i,r as t,$ as n}from"../../e4c0417e.js";import{n as s}from"../../06170432.js";import{ConfigurablePanelSection as e}from"../../mixins/configurablePanelSection.js";import{defaultStyles as r,baseSectionStyles as c}from"../../styles.js";import"../../icons/monochrome/generic-info.js";import"../Icon/Icon.js";import"../PanelSection/PanelSection.js";import"../../mixins/configurable.js";import"../../12d8f3c3.js";import"../../utils.js";import"../../mixins/panelSection.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../Tooltip/Tooltip.js";import"../Popover/Popover.js";import"../../icons/monochrome/help.js";const a={stringMap:{"content-summary.header":"Content summary","content-summary.content.aiGenerated":"This content was generated with an AI tool."}};let m=class extends(e(i,{dataSelector:o=>null==o?void 0:o.generativeInfo,config:a})){static get styles(){return[r,c,t`
        .section-process-content {
          display: flex;
          align-items: center;
        }
        .section-icon-content {
          display: flex;
          align-items: flex-start;
          gap: var(--cai-icon-spacing, 8px);
        }
      `]}render(){return this.renderSection(n`<cai-panel-section
      header=${this._config.stringMap["content-summary.header"]}
      helpText=${this._config.stringMap["content-summary.helpText"]}
    >
      <div class="section-icon-content">
        <cai-icon-generic-info></cai-icon-generic-info>
        <span>
          ${this._config.stringMap["content-summary.content.aiGenerated"]}
        </span>
      </div>
    </cai-panel-section>`)}};m=o([s("cai-content-summary")],m);
