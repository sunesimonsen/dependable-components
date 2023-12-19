import { html } from "@dependable/view";
import { css, classes } from "stylewars";
import { defaultTheme } from "@dependable/components/default-theme/v0";

const paddingStyles = css`
  & {
    padding: 40px;
  }
`;

export class ExamplePreview {
  render({ children, noPadding }) {
    return html`
      <div className=${classes(defaultTheme, !noPadding && paddingStyles)}>
        ${children}
      </div>
    `;
  }
}
