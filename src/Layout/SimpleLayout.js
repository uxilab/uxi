import React from 'react';
import { Style } from 'radium';
import SimpleLayoutObject from './SimpleLayout.style';

const SimpleLayout = ({ columnNumber = 1, children = [] }) => {
  const simplayLayoutContent = [];
  const size = parseInt(12 / columnNumber, 10);

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) return;

    simplayLayoutContent.push(
      <div key={`simpleLayout-row-${index}`} className={`uxi_s_col s${size}`}>
        {child}
      </div>,
    );
  });

  return (
    <div>
      <Style rules={SimpleLayoutObject} />
      <div className="uxi_s_row">
        {simplayLayoutContent}
      </div>
    </div>
  );
};

export default SimpleLayout;

