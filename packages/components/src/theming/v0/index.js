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

export const colorMix = (primaryColor, secondaryColor, procentage) =>
  `
    color-mix(
      in srgb,
      var(--dc-color-${primaryColor}) ${procentage}%,
      var(--dc-color-${secondaryColor})
    )
  `;

export const transparentColor = (name, procentage) => `
  color-mix(
    in hsl,
    var(--dc-color-${name}) ${procentage}%,
    transparent
  )
`;
