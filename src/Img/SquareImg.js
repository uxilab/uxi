import React from 'react';
import RatioBox from '../Box/RatioBox';
import Img from './Img';

// assume the height basde on the width if no height is provided
const makeHeightStylePropIfNeeded = (props) => {
  const heightPropObj = {};

  if ('style' in props) {
    if ('width' in props.style) {
      if (!('height' in props.style)) {
        heightPropObj.height = props.style.width;
      }
    }
    return {
      ...props,
      style: {
        ...props.style,
        ...heightPropObj,
      },
    };
  }
  return props;
};

const SquareImg = props => (
  <RatioBox style={{
    width: makeHeightStylePropIfNeeded(props).style.width,
    height: makeHeightStylePropIfNeeded(props).style.height,
  }}
  >
    <Img {...makeHeightStylePropIfNeeded(props)} />
  </RatioBox>
);

export default SquareImg;
