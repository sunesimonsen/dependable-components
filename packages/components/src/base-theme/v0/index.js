import { css } from "stylewars";
import { color, colorMix, transparentColor } from "../../theming/v0";

const createPrimaryColors = (offset = 0) => `
  --dc-color-primary-20: ${color("primary", 20 + offset)};
  --dc-color-primary-30: ${color("primary", 30 + offset)};
  --dc-color-primary-40: ${color("primary", 40 + offset)};
  --dc-color-primary-50: ${color("primary", 50 + offset)};
  --dc-color-primary-60: ${color("primary", 60 + offset)};
  --dc-color-primary-70: ${color("primary", 70 + offset)};
  --dc-color-primary-80: ${color("primary", 80 + offset)};
  --dc-color-primary-90: ${color("primary", 90 + offset)};
  --dc-color-primary-95: ${color("primary", 95 + offset)};
`;

const createErrorColors = (offset = 0) => `
  --dc-color-error-20: ${color("error", 20 + offset)};
  --dc-color-error-30: ${color("error", 30 + offset)};
  --dc-color-error-40: ${color("error", 40 + offset)};
  --dc-color-error-50: ${color("error", 50 + offset)};
  --dc-color-error-60: ${color("error", 60 + offset)};
  --dc-color-error-70: ${color("error", 70 + offset)};
  --dc-color-error-80: ${color("error", 80 + offset)};
  --dc-color-error-90: ${color("error", 90 + offset)};
  --dc-color-error-95: ${color("error", 95 + offset)};
`;

const createWarningColors = (offset = 0) => `
  --dc-color-warning-20: ${color("warning", 20 + offset)};
  --dc-color-warning-30: ${color("warning", 30 + offset)};
  --dc-color-warning-40: ${color("warning", 40 + offset)};
  --dc-color-warning-50: ${color("warning", 50 + offset)};
  --dc-color-warning-60: ${color("warning", 60 + offset)};
  --dc-color-warning-70: ${color("warning", 70 + offset)};
  --dc-color-warning-80: ${color("warning", 80 + offset)};
  --dc-color-warning-90: ${color("warning", 90 + offset)};
  --dc-color-warning-95: ${color("warning", 95 + offset)};
`;

const createSuccessColors = (offset = 0) => `
  --dc-color-success-20: ${color("success", 20 + offset)};
  --dc-color-success-30: ${color("success", 30 + offset)};
  --dc-color-success-40: ${color("success", 40 + offset)};
  --dc-color-success-50: ${color("success", 50 + offset)};
  --dc-color-success-60: ${color("success", 60 + offset)};
  --dc-color-success-70: ${color("success", 70 + offset)};
  --dc-color-success-80: ${color("success", 80 + offset)};
  --dc-color-success-90: ${color("success", 90 + offset)};
  --dc-color-success-95: ${color("success", 95 + offset)};
`;

const createNeutralColors = (offset = 0) => `
  --dc-color-neutral-10: ${colorMix("background", "foreground", 10 + offset)};
  --dc-color-neutral-20: ${colorMix("background", "foreground", 20 + offset)};
  --dc-color-neutral-30: ${colorMix("background", "foreground", 30 + offset)};
  --dc-color-neutral-40: ${colorMix("background", "foreground", 40 + offset)};
  --dc-color-neutral-50: ${colorMix("background", "foreground", 50 + offset)};
  --dc-color-neutral-60: ${colorMix("background", "foreground", 60 + offset)};
  --dc-color-neutral-70: ${colorMix("background", "foreground", 70 + offset)};
  --dc-color-neutral-80: ${colorMix("background", "foreground", 80 + offset)};
  --dc-color-neutral-85: ${colorMix("background", "foreground", 85 + offset)};
  --dc-color-neutral-90: ${colorMix("background", "foreground", 90 + offset)};
  --dc-color-neutral-95: ${colorMix("background", "foreground", 95 + offset)};
  --dc-color-neutral-97: ${colorMix("background", "foreground", 97 + offset)};
`;

const darkMode = `
  --dc-color-foreground: var(--dc-color-dark-foreground);
  --dc-color-background: var(--dc-color-dark-background);

  --dc-color-saturation: var(--dc-color-dark-saturation);

  --dc-color-primary-hue: var(--dc-color-dark-primary-hue);
  --dc-color-primary-saturation: var(--dc-color-dark-primary-saturation);

  --dc-color-error-hue: var(--dc-color-dark-error-hue);
  --dc-color-error-saturation: var(--dc-color-dark-error-saturation);

  --dc-color-warning-hue: var(--dc-color-dark-warning-hue);
  --dc-color-warning-saturation: var(--dc-color-dark-warning-saturation);

  --dc-color-success-hue: var(--dc-color-dark-success-hue);
  --dc-color-success-saturation: var(--dc-color-dark-success-saturation);

  ${createPrimaryColors()}
  ${createErrorColors()}
  ${createWarningColors()}
  ${createSuccessColors()}
  ${createNeutralColors()}

  color: var(--dc-color-foreground);
  background: var(--dc-color-background);
`;

const createSpacingVar = (n, base) => {
  if (n === 1) return `--dc-spacing-${n}: var(--dc-base);`;
  if (n === 2) return `--dc-spacing-${n}: calc(2 * var(--dc-base));`;
  return `--dc-spacing-${n}: calc(var(--dc-spacing-${n - 1}) + var(--dc-spacing-${n - 2}));`;
};

const createSpacing = () => {
  const result = [];

  for (let i = 1; i < 8; i++) {
    result.push(createSpacingVar(i));
  }

  return result.join("\n");
};

export const baseTheme = css`
  & {
    --dc-base: 4px;

    ${createSpacing()}

    ${createPrimaryColors()}
    ${createErrorColors()}
    ${createWarningColors()}
    ${createSuccessColors()}
    ${createNeutralColors()}

    --dc-focus-ring-color: ${transparentColor("primary-50", 35)};
    --dc-focus-ring-style: solid;
    --dc-focus-ring-width: 3px;

    --dc-focus-ring: var(--dc-focus-ring-width) var(--dc-focus-ring-style)
      var(--dc-focus-ring-color);

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

    box-sizing: border-box;

    --dc-component-border-radius: 4px;

    color: var(--dc-color-foreground);
    background: var(--dc-color-background);
  }

  body[data-prefers-color-scheme="dark"] & {
    ${darkMode}
  }

  @media (prefers-color-scheme: dark) {
    body:not([data-prefers-color-scheme="light"]) & {
      ${darkMode}
    }
  }
`;
