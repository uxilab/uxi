import React from 'react';
import SquareImg from './SquareImg';

/**
 * rounded img is assumed to be square in ratio I guess...
 */
const RoundedImg = props => (
  <SquareImg style={{ borderRadius: '50%', overflow: 'hidden' }} {...props} />
);

export default RoundedImg;
