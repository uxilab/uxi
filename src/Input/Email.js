import React from 'react';

const styles = {
  borderRadius: '3px',
  fontSize: '16px',
  border: 'none',
  background: '#ececec',
  padding: '8px 16px',
};

const EmailInput = ({ onChange }) => (
  <input
    type="email"
    style={styles}
    placeholder="Email"
    onChange={onChange}
  />
);

export default EmailInput;
