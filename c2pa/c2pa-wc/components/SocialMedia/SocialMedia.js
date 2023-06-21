import{__decorate as o}from"../../b803f408.js";import{s as i,r as s,$ as e}from"../../e4c0417e.js";import{n as t}from"../../06170432.js";import{defaultStyles as c,baseSectionStyles as l}from"../../styles.js";import{ConfigurablePanelSection as a}from"../../mixins/configurablePanelSection.js";import"../PanelSection/PanelSection.js";import"../Icon/Icon.js";import"../../mixins/configurable.js";import"../../12d8f3c3.js";import"../../utils.js";import"../../mixins/panelSection.js";import"../Tooltip/Tooltip.js";import"../Popover/Popover.js";import"../../icons/monochrome/help.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";const r={stringMap:{"social-media.header":"Social media","social-media.helpText":"Social media accounts connected to the producer of this content"}};let n=class extends(a(i,{dataSelector:o=>null==o?void 0:o.socialAccounts,isEmpty:o=>!(null==o?void 0:o.length),config:r})){static get styles(){return[c,l,s`
        .section-social-media-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        .section-social-media-list-item {
          display: flex;
          align-items: center;
        }

        .section-social-media-list-item-link {
          color: var(--cai-social-media-item-color, var(--cai-primary-color));
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `]}render(){var o;return this.renderSection(e`<cai-panel-section
      header=${this._config.stringMap["social-media.header"]}
      helpText=${this._config.stringMap["social-media.helpText"]}
    >
      <ul class="section-social-media-list">
        ${null===(o=this._data)||void 0===o?void 0:o.map((o=>e`
            <li class="section-social-media-list-item">
              <cai-icon source="${o["@id"]}"></cai-icon>
              <a
                class="section-social-media-list-item-link"
                href=${o["@id"]}
                target="_blank"
              >
                @${o.name}
              </a>
            </li>
          `))}
      </ul>
    </cai-panel-section>`)}};n=o([t("cai-social-media")],n);
