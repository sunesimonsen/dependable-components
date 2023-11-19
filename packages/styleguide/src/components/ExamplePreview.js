import { html } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    padding: 20px;
  }
`;

export class ExamplePreview {
  render({ children }) {
    return html`<div className=${styles}>${children}</div>`;
  }
}
