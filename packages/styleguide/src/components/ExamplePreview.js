import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import { theme } from "@dependable/components/default-theme/v0";

const paddingStyles = css`
  & {
    padding: 40px;
  }
`;

export class ExamplePreview {
  render({ children, noPadding }) {
    return html`
      <div className=${classes(theme, !noPadding && paddingStyles)}>
        ${children}
      </div>
    `;
  }
}
