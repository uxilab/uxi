
import { palette } from './palette';
import { theme } from './';
import { lighten, darken } from './colorManipulator';

// eslint-disable-next-line no-shadow
export function mergeCustomPalette(mainPalette, customPalette) {
  let secondary = mainPalette.primary.main;
  let primary = mainPalette.accent.main;

  if (!customPalette) { return mainPalette; }
  if (customPalette.primary) { primary = customPalette.primary; }
  if (customPalette.secondary) { secondary = customPalette.secondary; }
  const palette = { // eslint-disable-line no-shadow
    ...mainPalette,
    primary: {
      main: secondary,
      light: lighten(secondary),
      dark: darken(secondary),
    },
    accent: {
      main: primary,
      light: lighten(primary),
      dark: darken(primary),
    },
  };
  return palette;
}

// eslint-disable-next-line no-use-before-define
export const getThemeWithCustomPalette = (customPalette = {}) => { // eslint-disable-line no-shadow
  const themeWithCustomPalette = {
    ...theme,
    palette: mergeCustomPalette(palette, customPalette),
  };

  return themeWithCustomPalette;
};
