import{__decorate as i}from"../../b803f408.js";import{s as t,r as o,$ as s}from"../../e4c0417e.js";import{n as e}from"../../06170432.js";import{o as n}from"../Popover/Popover.js";import{defaultStyles as c,baseSectionStyles as a}from"../../styles.js";import{ConfigurablePanelSection as l}from"../../mixins/configurablePanelSection.js";import"../PanelSection/PanelSection.js";import"../../12d8f3c3.js";import"../../icons/monochrome/help.js";import"../../mixins/configurable.js";import"../../utils.js";import"../../mixins/panelSection.js";import"../Tooltip/Tooltip.js";import"../Icon/Icon.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";const r={stringMap:{"edits-and-activity.header":"Edits and activity","edits-and-activity.helpText":"Changes and actions taken to produce this content"},showDescriptions:!1};let d=class extends(l(t,{dataSelector:i=>i.editsAndActivity,isEmpty:i=>!(null==i?void 0:i.length),config:r})){static get styles(){return[c,a,o`
        .section-edits-and-activity-content {
          display: flex;
          flex-direction: column;
        }

        .section-edits-and-activity-list {
          display: flex;
          flex-direction: column;
          gap: var(--cai-edits-and-activity-item-spacing, 6px);
          list-style: none;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        .section-edits-and-activity-list-item-term {
          display: flex;
          align-items: center;
        }

        .section-edits-and-activity-list-item-icon {
          margin-right: 8px;
          width: 16px;
        }

        .section-edits-and-activity-list-item-label {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .section-edits-and-activity-list-item-description {
          color: var(--cai-secondary-color);
          margin-left: 0px;
        }

        .section-edits-and-activity-list-item-description.has-icon {
          margin-left: 24px;
        }
      `]}render(){var i;return this.renderSection(s`
      <cai-panel-section
        header=${this._config.stringMap["edits-and-activity.header"]}
        helpText=${this._config.stringMap["edits-and-activity.helpText"]}
      >
        <dl class="section-edits-and-activity-list">
          ${null===(i=this._data)||void 0===i?void 0:i.map((({icon:i,label:t,description:o})=>s`
              <div class="section-edits-and-activity-list-item">
                <dt class="section-edits-and-activity-list-item-term">
                  ${i?s`<img
                        class="section-edits-and-activity-list-item-icon"
                        src=${i}
                        alt=${t}
                      />`:null}
                  <span class="section-edits-and-activity-list-item-label">
                    ${t}
                  </span>
                </dt>
                ${this._config.showDescriptions?s`
                      <dd
                        class=${n({"section-edits-and-activity-list-item-description":!0,"has-icon":!!i})}
                      >
                        ${o}
                      </dd>
                    `:null}
              </div>
            `))}
        </dl>
      </cai-panel-section>
    `)}};d=i([e("cai-edits-and-activity")],d);
