export default {
  alert: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    color: '#fff',
    backgroundColor: 'rgb(49, 112, 143)',
    borderColor: 'rgb(49, 112, 143)',
  },
  danger: {
    backgroundColor: '#EF5858',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#FF9800',
    color: '#fff',
  },
  success: {
    backgroundColor: '#009688',
    color: '#fff',
  },
  icon: {
    marginLeft: '16px',
    minWidth: '24px',

    // fontSize: '24px',
    // color: '#fff',
    // position: 'absolute',
    // left: '15px',
    // top: '13px',
    // width: '20px',
    // textAlign: 'center',
  },
  alertContent: {
    display: 'inline-block',
    boxSizing: 'border-box',
    padding: '15px',
    // width: '100%',
  },
  closeWrapper: {
    position: 'absolute',
    cursor: 'pointer',
    right: '15px',
    top: '13px',
    ':hover': {
      opacity: '0.6',
    },
    padding: 0,
    margin: 0,
    border: 'none',
    background: 'transparent',
  },
};
