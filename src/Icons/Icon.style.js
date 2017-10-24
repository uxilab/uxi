export default {
  sizes: {
    S: { width: '14px', height: '14px' },
    M: { width: '24px', height: '24px' },
    L: { width: '48px', height: '48px' },
  },
  fontSizes: {
    S: { fontSize: '15px' },
    // M: { fontSize: '16px' }, ?? what's this for ?
    L: { fontSize: '24px' },
  },
  wrapper: {
    display: 'inline-block',
    marginRight: 0,
    marginLeft: 0,
    boxSizing: 'border-box',
  },
  borderRadius: {
    borderRadius: '50%',
  },
  border: {
    border: '1px #ccc solid',
  },
  icon: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleIconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  // THIS IS FOR RADIUM!!!!
  styleIcon: {
    i: {
      fontSize: '28px',
      marginTop: '3px',
      paddingTop: 0,
      color: '#646464',
      display: 'block',
      paddingLeft: '1px',
    },
  },
};
