import React from 'react';

const PageSubTitleStyle = {
  fontSize: '22px',
  fontWeight: 500,
  marginBottom: '24px',
  marginTop: '8px',
};

const PageSubTitle = ({ children }) => (
  <h1 style={PageSubTitleStyle} className="uxi-page-subTitle">
    {children}
  </h1>
);

export default PageSubTitle;
