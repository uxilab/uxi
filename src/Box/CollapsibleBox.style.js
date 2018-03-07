export default {
  wrapper: {
    background: '#fff',
    borderRadius: '2px',
    border: '1px solid #ccc',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  header: {
    border: '1px solid #ccc',
    borderRadius: '3px',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: '5px  15px',
    cursor: 'pointer',
    // width: '100%',
    textAlign: 'left',
  },
  container: {
    transition: 'max-height .4s ease-out',
    maxHeight: 2000,
    overflow: 'hidden',
  },
};
