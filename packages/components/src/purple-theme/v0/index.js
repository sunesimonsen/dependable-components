import { html } from "@dependable/htm";
import { css, classes } from "stylewars";
import { color, colorMix } from "../../theming/v0";
import { baseTheme } from "../../base-theme/v0";

export const theme = classes(
  css`
    & {
      --dc-color-foreground: #111;
      --dc-color-background: white;

      --dc-color-saturation: 71;

      --dc-color-primary-hue: 271;

      --dc-color-error-hue: 0;

      --dc-color-warning-hue: 33;
      --dc-color-warning-saturation: 85;

      --dc-color-success-hue: 158;
      --dc-color-success-saturation: 55;

      --dc-color-dark-saturation: 60;

      --dc-color-dark-background-hue: calc(var(--dc-color-primary-hue) - 15);
      --dc-color-dark-background: hsl(
        var(--dc-color-dark-background-hue),
        50%,
        10%
      );
      --dc-color-dark-foreground: hsl(
        var(--dc-color-dark-background-hue),
        50%,
        95%
      );

      --dc-color-dark-saturation: 91;

      --dc-color-dark-primary-hue: 271;
      --dc-color-dark-primary-saturation: var(--dc-color-dark-saturation);

      --dc-color-dark-error-hue: 0;
      --dc-color-dark-error-saturation: 50;

      --dc-color-dark-warning-hue: 33;
      --dc-color-dark-warning-saturation: var(--dc-color-dark-saturation);

      --dc-color-dark-success-hue: 158;
      --dc-color-dark-success-saturation: var(--dc-color-dark-saturation);
    }
  `,
  baseTheme,
);

export class ThemeProvider {
  render({ children, ...other }) {
    return html`<div className=${theme} ...${other}>${children}</div>`;
  }
}
