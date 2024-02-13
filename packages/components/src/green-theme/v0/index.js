import { css, classes } from "stylewars";
import { theme as defaultTheme } from "../../default-theme/v0/index.js";

export const theme = classes(
  defaultTheme,
  css`
    & {
      --dc-color-primary-0: rgb(28 175 146);
      --dc-color-primary-1: rgb(16 156 129);
      --dc-color-primary-2: rgb(5 136 111);

      --dc-color-secondary-1: rgb(28 175 146 / 8%);
      --dc-color-secondary-2: rgb(28 175 146 / 20%);

      --dc-color-danger-primary-0: rgb(197 73 84);

      --dc-focus-ring-color: rgb(31 183 153 / 45%);
    }
  `,
);

export class ThemeProvider {
  render({ children, ...other }) {
    return html`<div className=${theme} ...${other}>${children}</div>`;
  }
}
