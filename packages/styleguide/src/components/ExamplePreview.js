import { html } from "@dependable/view";
import { css } from "stylewars";

const paddingStyles = css`
  & {
    padding: 40px;
  }
`;

export class ExamplePreview {
  render({ children, noPadding }) {
    return html`
      <div className=${!noPadding && paddingStyles}>${children}</div>
    `;
  }
}
