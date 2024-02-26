import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import { Center } from "@dependable/components/Center/v0";
import { ColumnLayout } from "@dependable/components/ColumnLayout/v0";
import { ColorPreview } from "./ColorPreview.js";
import { colorMix } from "@dependable/components/theming/v0";

const tableStyles = css`
  & {
    border-spacing: 6px;
    margin-inline: auto;
    margin-block: 40px;
    padding: 20px;
    border-radius: 10px;
    border: thin solid var(--dc-color-neutral-90);
  }

  & th {
    font-weight: normal;
  }

  & tbody th {
    text-align: end;
    padding-inline-end: 10px;
  }
`;

const createProcentages = () => {
  const procentages = [];
  for (let i = 20; i <= 90; i += 10) {
    procentages.push(i);
  }
  procentages.push(95);
  return procentages;
};

export class Colors {
  constructor() {
    this.procentages = createProcentages();
  }

  renderColorHeader() {
    const cells = this.procentages.map((p) => html`<th>${p}%</th>`);

    return html`
      <tr>
        <th></th>
        ${cells}
      </tr>
    `;
  }

  renderColorRow(name) {
    const cells = this.procentages.map(
      (p) => html`
        <td>
          <${ColorPreview} name=${name} procentage=${p} />
        </td>
      `,
    );

    return html`
      <tr>
        <th>${name}</th>
        ${cells}
      </tr>
    `;
  }

  renderColorRows() {
    return ["primary", "error", "warning", "success", "neutral"].map((name) =>
      this.renderColorRow(name),
    );
  }

  render({ className }) {
    return html`
      <table className=${classes(className, tableStyles)}>
        <thead>
          ${this.renderColorHeader()}
        </thead>
        <tbody>
          ${this.renderColorRows()}
        </tbody>
      </table>
    `;
  }
}
