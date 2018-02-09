import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WapperUI = styled.div`
  @media (min-width: 768px) {
    display: flex;
  };
`;

const MenuUI = styled.div`
  width: 100%;
  min-width: ${({ menuWidth }) => menuWidth};
  @media (min-width: 768px) {
    width: ${({ menuWidth }) => menuWidth};
    min-width: ${({ menuWidth }) => menuWidth};
    max-width: ${({ menuWidth }) => menuWidth};
  };
`;

const ContentUI = styled.div`
  flex: 1;
  width: 100%;
  @media (min-width: 768px) {
    max-width: ${({ menuWidth }) => `calc(100% - ${menuWidth})`};
  };
`;

const PageWithMenu = ({ children, style = {}, menu, menuWidth }) => (
  <WapperUI style={style}>
    <MenuUI menuWidth={menuWidth}>
      {menu}
    </MenuUI>
    <ContentUI menuWidth={menuWidth}>
      {children}
    </ContentUI>
  </WapperUI>
);

PageWithMenu.defaultProps = {
  menuWidth: '250px',
};

export default PageWithMenu;
