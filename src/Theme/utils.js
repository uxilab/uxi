
import { palette } from './palette';

// eslint-disable-next-line no-shadow
function mergeCustomPalette(mainPalette, customPalette) {
  let primary = mainPalette.primary.main;
  let secondary = mainPalette.accent.main;

  if (!customPalette) { return mainPalette; }
  if (customPalette.primary) { primary = customPalette.primary; }
  if (customPalette.secondary) { secondary = customPalette.secondary; }

  const palette = { // eslint-disable-line no-shadow
    ...mainPalette,
    primary: {
      main: primary,
      light: lighten(primary),
      dark: darken(primary),
    },
    accent: {
      main: secondary,
      light: lighten(secondary),
      dark: darken(secondary),
    },
  };
  return palette;
}

// eslint-disable-next-line no-use-before-define
export const getThemeWithCustomPalette = (customPalette = {}) => { // eslint-disable-line no-shadow
  return {
    ...theme,
    palette: mergeCustomPalette(palette, customPalette),
  };
};
