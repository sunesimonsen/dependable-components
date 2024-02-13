import { html } from "@dependable/view";
import { css } from "stylewars";

export const theme = css`
  & {
    --dc-color-primary-0: rgb(31, 115, 183);
    --dc-color-primary-1: rgb(20, 74, 117);
    --dc-color-primary-2: rgb(15, 53, 84);

    --dc-color-secondary-0: transparent;
    --dc-color-secondary-1: rgba(31, 115, 183, 0.08);
    --dc-color-secondary-2: rgba(31, 115, 183, 0.2);

    --dc-color-danger-primary-0: rgb(204, 51, 64);
    --dc-color-danger-primary-1: rgb(140, 35, 44);
    --dc-color-danger-primary-2: rgb(104, 18, 25);

    --dc-color-danger-secondary-0: transparent;
    --dc-color-danger-secondary-1: rgba(204, 51, 64, 0.08);
    --dc-color-danger-secondary-2: rgba(204, 51, 64, 0.2);

    --dc-color-neutral-0: rgb(255, 255, 255);
    --dc-color-neutral-1: rgb(248, 249, 249);
    --dc-color-neutral-2: rgb(233, 235, 237);
    --dc-color-neutral-3: rgb(216, 220, 222);
    --dc-color-neutral-4: rgb(194, 200, 204);
    --dc-color-neutral-5: rgb(135, 146, 157);
    --dc-color-neutral-6: rgb(104, 115, 125);

    --dc-text-color-0: rgb(47, 57, 65);
    --dc-text-color-1: rgb(104, 115, 125);
    --dc-text-color-0-a-10: rgba(47, 57, 65, 0.1);

    --dc-focus-ring-color: rgba(31, 115, 183, 0.35);
    --dc-focus-ring-color-danger: rgba(204, 51, 64, 0.35);
    --dc-focus-ring-style: solid;
    --dc-focus-ring-width: 3px;

    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      var(--dc-focus-ring-color);

    --dc-component-border-radius: 4px;

    font-family: Verdana, Geneva, sans-serif;

    font-family:
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      Arial,
      sans-serif;

    color: var(--dc-text-color-0);

    box-sizing: border-box;
  }
`;

export class ThemeProvider {
  render({ children, ...other }) {
    return html`<div className=${theme} ...${other}>${children}</div>`;
  }
}
