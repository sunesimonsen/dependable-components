import { html } from "@dependable/htm";
import { css } from "stylewars";
import { color, colorMix } from "@dependable/components/theming/v0";

const colorPreviewStyles = (name, procentage) => css`
  & {
    background: var(--dc-color-${name}-${procentage});
    border-width: 1px;
    border-style: solid;
    border-color: ${colorMix(`${name}-${procentage}`, "foreground", 95)};
    height: 4em;
    width: 4em;
    cursor: pointer;
  }
`;

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = (text) => {
  interceptCopy = text;
  document.execCommand("copy");
  interceptCopy = null;
};

export class ColorPreview {
  constructor() {
    this.onClick = () => {
      const { name, procentage } = this.props;
      copy(`var(--dc-color-${name}-${procentage})`);
    };
  }

  render({ name, procentage }) {
    return html`
      <button
        className=${colorPreviewStyles(name, procentage)}
        onClick=${this.onClick}
      />
    `;
  }
}
