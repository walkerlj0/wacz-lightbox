import{__decorate as o}from"../../b803f408.js";import{r as s,$ as i,s as t}from"../../e4c0417e.js";import{n as e}from"../../06170432.js";import{defaultStyles as r,baseSectionStyles as n}from"../../styles.js";import{getBadgeFromIngredient as c}from"../../badge.js";import{ConfigurablePanelSection as a}from"../../mixins/configurablePanelSection.js";import"../Thumbnail/Thumbnail.js";import"../PanelSection/PanelSection.js";import"../../mixins/configurable.js";import"../../12d8f3c3.js";import"../../utils.js";import"../../mixins/panelSection.js";import"../Tooltip/Tooltip.js";import"../Popover/Popover.js";import"../../icons/monochrome/help.js";import"../Icon/Icon.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../../icons/monochrome/broken-image.js";import"../../icons/color/info.js";import"../../icons/color/alert.js";import"../../icons/color/missing.js";const l={stringMap:{"assets-used.header":"Assets used","assets-used.helpText":"Any assets used or added to this content"}};let m=class extends(a(t,{dataSelector:o=>o.ingredients,isEmpty:o=>!o.length,config:l})){static get styles(){return[r,n,s`
        .section-assets-used {
          --cai-thumbnail-size: 48px;
          display: grid;
          color: blue;
          grid-template-columns: repeat(
            auto-fill,
            var(--cai-thumbnail-size, 48px)
          );
          grid-gap: 10px;
          text-align: left;
        }
      `]}render(){var o;return this.renderSection(i` <cai-panel-section
      header=${this._config.stringMap["assets-used.header"]}
      helpText=${this._config.stringMap["assets-used.helpText"]}
    >
      <div class="section-assets-used">
        ${null===(o=this._data)||void 0===o?void 0:o.map((o=>i`
            <cai-thumbnail
              class="section-assets-used-thumbnail"
              src=${o.thumbnail}
              badge=${c(o)}
            ></cai-thumbnail>
          `))}
      </div>
    </cai-panel-section>`)}};m=o([e("cai-assets-used")],m);
