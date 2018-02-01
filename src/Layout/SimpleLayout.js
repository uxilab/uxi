import React from 'react';
import SimpleLayoutObject from './SimpleLayout.style';

const SimpleLayout = ({ columnNumber = 1, children = [], desktopColumnNumber, tabletColumnNumber }) => {
  const simplayLayoutContent = [];
  const mobileSize = parseInt(12 / columnNumber, 10);
  const tabletSize = parseInt(12 / tabletColumnNumber, 10);
  const desktopSize = parseInt(12 / desktopColumnNumber, 10);

  React.Children.forEach(children, (child, index) => {
    if (!React.isValidElement(child)) return;

    const classNameMobile = mobileSize ? `uxi_s_col s${mobileSize}` : '';
    const classNameTablet = tabletColumnNumber ? `uxi_m_col m${tabletSize}` : '';
    const classNameDesktop = desktopColumnNumber ? `uxi_l_col l${desktopSize}` : '';

    simplayLayoutContent.push(
      <div key={`simpleLayout-row-${index}`} className={`${classNameMobile} ${classNameTablet} ${classNameDesktop}`}>
        {child}
      </div>,
    );
  });

  return (
    <div>
      <div className="uxi_s_row">
        {simplayLayoutContent}
      </div>
    </div>
  );
};

export default SimpleLayout;

