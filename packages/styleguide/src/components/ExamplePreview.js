import { html } from "@dependable/view";
import { css } from "stylewars";

const styles = css`
  & {
    padding: 40px;
  }
`;

export class ExamplePreview {
  render({ children, noPadding }) {
    return html`<div className=${!noPadding && styles}>${children}</div>`;
  }
}
