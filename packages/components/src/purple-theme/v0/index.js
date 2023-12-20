import { css, classes } from "stylewars";
import { theme as defaultTheme } from "../../default-theme/v0/index.js";

export const theme = classes(
  defaultTheme,
  css`
    & {
      --dc-color-primary-0: rgb(105 31 183);
      --dc-color-primary-1: rgb(91 20 117);
      --dc-color-primary-2: rgb(44 15 84);

      --dc-color-secondary-1: rgb(101 31 183 / 8%);
      --dc-color-secondary-2: rgb(101 31 183 / 20%);

      --dc-color-focus: rgb(102 31 183 / 35%);
    }
  `,
);

export class ThemeProvider {
  render({ children }) {
    return html`<div className=${theme}>${children}</div>`;
  }
}
