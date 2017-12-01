import React from 'react';
import { palette } from '../Theme/palette';

const styles = {
  color: palette.semantic.error,
};
const ErrorText = ({ inline, children, text, style }) => (inline
  ? <span style={{ ...styles, ...style }}> { text || children } </span>
  : <div style={{ ...styles, ...style }}> { text || children } </div>);

export default ErrorText;
