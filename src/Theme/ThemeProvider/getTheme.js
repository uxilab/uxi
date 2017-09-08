/**
 * Get CluedIn Theme
 */
import { theme as defaultTheme } from '../index';

export default function getTheme(overriddenTheme = {}) {
  const theme = Object.assign({}, defaultTheme, {
    //introduce theme
  }, overriddenTheme);
  
  return theme;
}
