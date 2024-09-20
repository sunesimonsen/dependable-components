import { css } from "stylewars";

export const color = (name, lightness = 50, saturation) => {
  const saturationString =
    typeof saturation === "number"
      ? saturation
      : `var(--dc-color-${name}-saturation, var(--dc-color-saturation))`;
  return `
    hsl(
      var(--dc-color-${name}-hue),
      calc(${saturationString} * 1%),
      ${lightness}%
    )
  `;
};

export const colorMix = (primaryColor, secondaryColor, procentage) => `
    color-mix(
      in srgb,
      var(--dc-color-${primaryColor}) ${procentage}%,
      var(--dc-color-${secondaryColor})
    )
  `;

export const transparentColor = (name, procentage) => `
  color-mix(
    in srgb,
    var(--dc-color-${name}) ${procentage}%,
    transparent
  )
`;

const withDirection = (field, direction) =>
  direction ? field + "-" + direction : field;

export const margin = (n, direction) => css`
  & {
    ${withDirection("margin", direction)}: var(--dc-spacing-${n});
  }
`;

export const padding = (n, direction) => css`
  & {
    ${withDirection("padding", direction)}: var(--dc-spacing-${n});
  }
`;

export const textAlign = (direction) => css`
  & {
    text-align: ${direction};
  }
`;

export const width = (value) => css`
  & {
    width: ${value};
  }
`;
