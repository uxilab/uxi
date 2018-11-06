import React from 'react';

const Col = ({ size, mobileSize, children }) => {
  let className = 'uxi_col';

  if (size) {
    className += (` m${size}`);
  }

  if (mobileSize) {
    className += (` s${mobileSize}`);
  } else {
    className += (` s${12}`);
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Col;
