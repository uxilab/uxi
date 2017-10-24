'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.palette = undefined;

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _palette = require('./palette');

var _ThemeProvider = require('./ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _colorManipulator = require('./colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var palette = exports.palette = _palette.palette;

var fonts = {
  fontFamily: 'Open sans, sans-serif'
};

var marketingFontFamilly = '\'Fira Sans\', sans-serif';

var theme = exports.theme = {
  wrapper: {
    '.uxi_container': {
      width: '100%',
      margin: '0 auto'
    },
    mediaQueries: {
      '(min-width: 768px)': {
        '.uxi_container': {
          maxWidth: '750px',
          margin: '0 auto'
        }
      },
      '(min-width: 992px)': {
        '.uxi_container': {
          maxWidth: '970px',
          margin: '0 auto'
        }
      },
      '(min-width: 1200px)': {
        '.uxi_container': {
          maxWidth: '1170px',
          margin: '0 auto'
        }
      }
    },
    body: {
      height: '100%',
      margin: 0,
      padding: 0
    },
    html: {
      height: '100%',
      margin: 0,
      padding: 0,
      background: '#F3F3F2',
      fontFamily: '\'Source Sans Pro\', sans-serif',
      color: palette.darkGrey
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
    a: {
      color: palette.accent.main,
      textDecoration: 'none'
    },
    'a:hover': {
      color: (0, _colorManipulator.lighten)(palette.accent.main, 0.1),
      textDecoration: 'none'
    },
    'h1, h2, h3, h4': {
      color: palette.neutral.dark
    },
    '.uxi-root': {
      height: '100%'
    },
    table: {
      margin: 0,
      padding: 0
    },
    td: {
      padding: '5px 10px'
    }
  },
  root: {
    fontSize: '14p'
  },
  border: {
    default: '1px solid #e9e9e9'
  },
  palette: palette,
  background: {
    light: '#FFFFFF',
    dark: palette.primary.main
  },
  padding: {
    breathPadding: '48px',
    defaultPadding: '24px',
    title: '15px 0',
    heading: '10px 0'
  },
  dimensions: {
    mainHeaderHeight: '80px'
  },
  marketingText: {
    light: {
      title: {
        fontFamilly: marketingFontFamilly,
        fontSize: '30px',
        fontWeight: 'bold',
        color: (0, _colorManipulator.lighten)('#000000', 0.11)
      },
      heading: {
        fontSize: '18px',
        fontFamilly: marketingFontFamilly,
        fontWeight: 600,
        color: (0, _colorManipulator.lighten)('#000000', 0.11)
      },
      button: {
        fontSize: '14px',
        color: (0, _colorManipulator.lighten)('#000000', 0.21)
      },
      body: {
        fontSize: '16px',
        color: (0, _colorManipulator.lighten)('#000000', 0.21)
      }
    },
    dark: {
      title: {
        fontFamilly: marketingFontFamilly,
        fontSize: '30px',
        fontWeight: 'bold',
        color: (0, _colorManipulator.lighten)('#ffffff', 0.11)
      },
      heading: {
        fontSize: '18px',
        fontFamilly: marketingFontFamilly,
        fontWeight: 600,
        color: (0, _colorManipulator.lighten)('#ffffff', 0.11)
      },
      button: {
        fontSize: '14px',
        color: (0, _colorManipulator.lighten)('#ffffff', 0.21)
      },
      body: {
        fontSize: '16px',
        color: (0, _colorManipulator.lighten)('#ffffff', 0.21)
      }
    }
  },
  fontsAndColor: {
    default: (0, _simpleAssign2.default)({
      color: '#37373a'
    }, fonts),
    defaultOnDarkBg: (0, _simpleAssign2.default)({
      color: '#fff'
    }, fonts),
    light: {
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: (0, _colorManipulator.lighten)('#000000', 0.11)
      },
      heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: (0, _colorManipulator.lighten)('#000000', 0.11)
      },
      button: {
        fontSize: '14px',
        color: (0, _colorManipulator.lighten)('#000000', 0.21)
      },
      body: {
        fontSize: '14px',
        color: (0, _colorManipulator.lighten)('#000000', 0.21)
      },
      caption: {
        fontSize: '12px',
        color: (0, _colorManipulator.lighten)('#000000', 0.45)
      },
      disable: {
        color: (0, _colorManipulator.lighten)('#000000', 0.40)
      },
      link: {
        fontSize: '12px',
        color: '#15a9a9'
      }
    },
    dark: {
      title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: (0, _colorManipulator.darken)('#ffffff', 0.11)
      },
      heading: {
        fontSize: '16px',
        fontWeight: 600,
        color: (0, _colorManipulator.darken)('#ffffff', 0.11)
      },
      button: {
        fontSize: '14px',
        color: '#ffffff'
      },
      body: {
        fontSize: '14px',
        color: (0, _colorManipulator.darken)('#ffffff', 0.21)
      },
      caption: {
        fontSize: '12px',
        color: (0, _colorManipulator.darken)('#ffffff', 0.45)
      },
      disable: {
        color: (0, _colorManipulator.darken)('#ffffff', 0.40)
      },
      link: {
        fontSize: '12px',
        color: '#15a9a9'
      }
    }
  },
  title: {
    color: palette.lightBlack
  },
  button: {
    backgroundColor: palette.neutral.lightestDark,
    color: palette.neutral.darker,
    borderColor: palette.neutral.lightDark
  },
  'button:hover': {
    backgroundColor: palette.neutral.lightDark,
    color: palette.neutral.darker,
    borderColor: palette.neutral.neutral
  },
  'button:primary': {
    color: palette.white,
    backgroundColor: palette.accent.main,
    borderColor: palette.accent.dark
  },
  'button:primary:hover': {
    color: palette.accent.main,
    backgroundColor: palette.white,
    borderColor: palette.accent.dark
  },
  'button:secondary': {
    color: palette.white,
    backgroundColor: palette.primary.main,
    borderColor: palette.primary.dark
  },
  'button:secondary:hover': {
    color: palette.primary.main,
    backgroundColor: palette.white,
    borderColor: palette.primary.dark
  },
  link: {
    linkOnBgDark: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.white
    },
    linkOnBgDarktHover: {
      color: palette.primary
    },
    linkOnBgLight: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: palette.neutral.dark
    },
    linkOnBgLightHover: {
      color: palette.accent.main
    }
  }
};

exports.default = _ThemeProvider2.default;