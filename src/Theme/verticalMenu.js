import { css } from 'styled-components';
import { lighten } from './colorManipulator';

// TODO: use css grid
export const verticalMenu = css`
  .uxi-vertical-menu {
    .uxi-menu-item {
      border-right: 5px solid transparent;
    }
    .uxi-menu-item:hover {
      background: ${({ theme: { palette } }) => lighten(palette.accent.main, 0.9)};
      border-right: 4px solid transparent;
    }
    .uxi-menu-item a {
      color: ${({ theme: { palette } }) => palette.neutral.dark};
      text-decoration: none;
      display: block;
    }
    .uxi-menu-item a:hover {
      color: this.context.uxiTheme.palette.primary;
    }
    .uxi-menu-item.uxi-active: {
      background: ${({ theme: { palette } }) => lighten(palette.accent.main, 0.9)};
      border-right: ${({ theme: { palette } }) => `4px solid ${palette.accent.main}`};
      color: this.context.uxiTheme.palette.accent.dark;
    }
    .uxi-menu-item.uxi-active:hover {
      background: ${({ theme: { palette } }) => lighten(palette.accent.main, 0.7)};
      color: ${({ theme: { palette } }) => palette.neutral.darker };
    }
    .uxi-menu-item.uxi-active a {
      color: ${({ theme: { palette } }) => palette.accent.dark };
    }
  }
`;

export default verticalMenu
