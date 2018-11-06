import React from 'react';

const PageTitleStyle = {
  fontSize: '28px',
  fontWeight: 500,
  marginBottom: '24px',
  marginTop: '8px',
};

const PageTitle = ({ children }) => (
  <h1 style={PageTitleStyle} className="uxi-page-title">
    {children}
  </h1>
);

export default PageTitle;
