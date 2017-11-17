import React from 'react';
import { palette } from '../Theme/palette';

console.log(palette);

const styles = {
  color: palette.semantic.error,
};
const ErrorText = ({ inline, children, text }) => (inline
  ? <span style={styles}> { text || children } </span>
  : <div style={styles}> { text || children } </div>);

export default ErrorText;
