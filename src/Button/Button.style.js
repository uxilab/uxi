import { palette } from '../Theme';

export default {
  baseButton: {
    outline: '0 !important',
    display: 'inline-block',
    marginBottom: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    backgroundImage: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    whiteSpace: 'nowrap',
    paddingTop: '6px',
    paddingBottom: '6px',
    paddingLeft: '12px',
    paddingRight: '12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    borderRadius: '2px',
    userSelect: 'none',
    transition: 'all 0.5s ease-in',
    textTransform: 'uppercase',
    fontFamily: '\'Fira sans\', sans-serif',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: '0.0075em',
  },
  disabled: {
    opacity: '0.6',
    transition: 'none',
    outline: '0 !important',
  },
  button: {
    backgroundColor: palette.lightWhite,
    color: palette.lightBlack,
    borderColor: palette.grey,
  },
  'button:hover': {
    color: palette.lightBlack,
    backgroundColor: palette.white,
  },
  'button:primary': {
    color: palette.white,
    backgroundColor: palette.primary,
    borderColor: palette.primary,
  },
  'button:primary:hover': {
    color: palette.primary,
    backgroundColor: palette.white,
    borderColor: palette.primaryDark,
  },
  'button:secondary': {
    color: palette.white,
    backgroundColor: palette.secondary,
    borderColor: palette.secondary,
  },
  'button:secondary:hover': {
    color: palette.secondary,
    backgroundColor: palette.white,
    borderColor: palette.secondaryDark,
  },
};
