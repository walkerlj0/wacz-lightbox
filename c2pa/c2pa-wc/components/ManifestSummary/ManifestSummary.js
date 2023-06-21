import{__decorate as o,e as i}from"../../b803f408.js";import{r as t,$ as e,w as r,s}from"../../e4c0417e.js";import{n}from"../../06170432.js";import{defaultStyles as a}from"../../styles.js";import{hasChanged as c,defaultDateFormatter as m}from"../../utils.js";import{Configurable as d}from"../../mixins/configurable.js";import"../ContentSummary/ContentSummary.js";import"../AssetsUsed/AssetsUsed.js";import"../ProducedBy/ProducedBy.js";import"../ProducedWith/ProducedWith.js";import"../SocialMedia/SocialMedia.js";import"../EditsAndActivity/EditsAndActivity.js";import"../MinimumViableProvenance/MinimumViableProvenance.js";import"../../12d8f3c3.js";import"../../mixins/configurablePanelSection.js";import"../../mixins/panelSection.js";import"../../icons/monochrome/generic-info.js";import"../Icon/Icon.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../PanelSection/PanelSection.js";import"../Tooltip/Tooltip.js";import"../Popover/Popover.js";import"../../icons/monochrome/help.js";import"../../badge.js";import"../Thumbnail/Thumbnail.js";import"../../icons/monochrome/broken-image.js";import"../../icons/color/info.js";import"../../icons/color/alert.js";import"../../icons/color/missing.js";var l;const p={stringMap:{"manifest-summary.viewMore":"View more","manifest-summary.error":"Content Credentials unavailable or invalid"},dateFormatter:m,showDescriptions:!0,sections:{assetsUsed:!0,editsAndActivity:!0,producedBy:!0,producedWith:!0,socialMedia:!0,contentSummary:!0}};let v=l=class extends(d(s,p)){constructor(){super(...arguments),this.viewMoreUrl=""}static get styles(){return[a,t`
        #container {
          width: var(--cai-manifest-summary-width, 320px);
        }

        #content-container {
          padding: var(--cai-manifest-summary-content-padding, 20px);
          max-height: var(--cai-manifest-summary-content-max-height, 550px);
          border-bottom-width: var(
            --cai-manifest-summary-content-border-bottom-width,
            1px
          );
          border-bottom-style: var(
            --cai-manifest-summary-content-border-bottom-style,
            solid
          );
          border-bottom-color: var(
            --cai-manifest-summary-content-border-bottom-color,
            #e1e1e1
          );

          overflow-y: auto;
          overflow-x: hidden;
        }

        #content-container > *:not(:first-child):not([empty]),
        ::slotted(*) {
          padding-top: var(--cai-manifest-summary-section-spacing, 20px);
          margin-top: var(--cai-manifest-summary-section-spacing, 20px);
          border-top-width: var(
            --cai-manifest-summary-section-border-width,
            1px
          ) !important;
          border-top-style: var(
            --cai-manifest-summary-section-border-style,
            solid
          ) !important;
          border-top-color: var(
            --cai-manifest-summary-section-border-color,
            #e1e1e1
          ) !important;
        }

        #view-more-container {
          padding: var(--cai-manifest-summary-view-more-padding, 20px);
        }

        #view-more {
          display: block;
          transition: all 150ms ease-in-out;
          background-color: transparent;
          border-radius: 9999px;
          border: 2px solid #b3b3b3;
          padding: 8px 0;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          width: 100%;
          color: var(--cai-primary-color);
        }

        #view-more:hover {
          background-color: #eeeeee;
        }
      `]}render(){var o,i,t,s,n,a,c,m,d,p,v,f;return this.manifestStore?e`<div id="container">
      <div id="content-container">
        <cai-minimum-viable-provenance
          .manifestStore=${this.manifestStore}
          .config=${this._config}
        ></cai-minimum-viable-provenance>
        <slot name="pre"></slot>
        ${"error"===this.manifestStore.error?e`
              <div>${this._config.stringMap["manifest-summary.error"]}</div>
            `:e`
              ${(null===(i=null===(o=this._config)||void 0===o?void 0:o.sections)||void 0===i?void 0:i.contentSummary)?e`
                    <cai-content-summary
                      .manifestStore=${this.manifestStore}
                      .config=${this._config}
                    ></cai-content-summary>
                  `:r}
              ${(null===(s=null===(t=this._config)||void 0===t?void 0:t.sections)||void 0===s?void 0:s.producedBy)?e`
                    <cai-produced-by
                      .manifestStore=${this.manifestStore}
                      .config=${this._config}
                    ></cai-produced-by>
                  `:r}
              ${(null===(a=null===(n=this._config)||void 0===n?void 0:n.sections)||void 0===a?void 0:a.producedWith)?e`
                    <cai-produced-with
                      .manifestStore=${this.manifestStore}
                      .config=${this._config}
                    ></cai-produced-with>
                  `:r}
              ${(null===(m=null===(c=this._config)||void 0===c?void 0:c.sections)||void 0===m?void 0:m.editsAndActivity)?e`
                    <cai-edits-and-activity
                      .manifestStore=${this.manifestStore}
                      .config=${this._config}
                    ></cai-edits-and-activity>
                  `:r}
              ${(null===(p=null===(d=this._config)||void 0===d?void 0:d.sections)||void 0===p?void 0:p.assetsUsed)?e`
                    <cai-assets-used
                      .manifestStore=${this.manifestStore}
                      .config=${this._config}
                    ></cai-assets-used>
                  `:r}
              ${(null===(f=null===(v=this._config)||void 0===v?void 0:v.sections)||void 0===f?void 0:f.socialMedia)?e`
                    <cai-social-media
                      .manifestStore=${this.manifestStore}
                      .config=${this._config}
                    ></cai-social-media>
                  `:r}
            `}
        <slot></slot>
        <slot name="post"></slot>
      </div>
      <div id="view-more-container">
        ${this.viewMoreUrl?e`
              <a
                id="view-more"
                part=${l.cssParts.viewMore}
                href=${this.viewMoreUrl}
                target="_blank"
              >
                ${this._config.stringMap["manifest-summary.viewMore"]}
              </a>
            `:r}
      </div>
    </div>`:null}};v.cssParts={viewMore:"manifest-summary-view-more"},o([i({type:Object,hasChanged:c})],v.prototype,"manifestStore",void 0),o([i({type:String,attribute:"view-more-url"})],v.prototype,"viewMoreUrl",void 0),v=l=o([n("cai-manifest-summary")],v);
