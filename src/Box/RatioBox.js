import React from 'react';

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    overflow: 'hidden',
  },
  contentBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

const getRatioValue = (ratio) => {
  let res = '100%';
  let vals;
  try {
    vals = ratio.match(/\d+/g); // 16/9 => [16, 9]
  } catch (err) {
    return res;
  }
  res = (100 * vals[1]) / vals[0];
  return res;
};

const getWrapperStyles = ({ ratio }) => ({
  ...styles.wrapper,
  paddingBottom: ratio ? `${getRatioValue(ratio)}%` : '100%',
});
/**
 * the purpose of this compo is to provide a box (DOM div)
 * that enforce an apsect ratio
 * default to square (1/1), accept a custom ratio (e.g. '16/9', '2/1' ...)
 */
const RatioBox = ({ children, ratio, style }) => (
  <div style={{ ...getWrapperStyles({ ratio }), ...style }} >
    <div style={styles.contentBox}>
      {children}
    </div>
  </div>
);

export default RatioBox;
