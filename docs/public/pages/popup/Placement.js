import { html } from "@dependable/htm";
import { Button } from "@dependable/components/Button/v0";
import { Center } from "@dependable/components/Center/v0";
import { Popup } from "@dependable/components/Popup/v0";
import { css } from "stylewars";

const popupStyles = css`
  & {
    border-radius: 4px;
    background: var(--dc-color-neutral-20);
    color: var(--dc-color-neutral-95);
    padding: 0.5em;
    width: 120px;
    text-align: center;
  }
`;

const anchorStyles = css`
  & {
    height: 200px;
    width: 60%;
    border: thin solid grey;
    border-radius: 4px;
  }
`;

const containerStyles = css`
  & {
    height: 300px;
  }
`;

const placements = [
  "bottom",
  "bottom-start",
  "bottom-end",
  "start",
  "start-top",
  "start-bottom",
  "end",
  "end-top",
  "end-bottom",
  "top",
  "top-start",
  "top-end",
];

export default class Example {
  constructor() {
    this.createRef = (name) => (ref) => {
      this[name] = ref;
    };
  }

  didMount() {
    for (const placement of placements) {
      this[`${placement}-popup`] = new Popup(
        this.anchorRef,
        this[`${placement}-popup-ref`],
        {
          placement,
          margins: 4,
        },
      );

      this[`${placement}-popup`].show();
    }
  }

  willUnmount() {
    for (const placement of placements) {
      this[`${placement}-popup`].hide();
    }
  }

  popupElements() {
    return placements.map(
      (placement) => html`
        <div
          key=${placement}
          id=${placement}
          ref=${this.createRef(`${placement}-popup-ref`)}
          className=${popupStyles}
        >
          ${placement}
        </div>
      `,
    );
  }

  render() {
    return html`
      <${Center} className=${containerStyles}>
        <${Center} className=${anchorStyles} ref=${this.createRef("anchorRef")}>
          Anchor
        <//>
        ${this.popupElements()}
      <//>
    `;
  }
}
