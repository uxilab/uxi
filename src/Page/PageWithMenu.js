import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const getMenuStyle = menuWidth => ({
  width: '100%',
  '@media (min-width: 768px)': {
    width: menuWidth,
    minWidth: menuWidth,
  },
});

const getContentStyle = menuWidth => ({
  flex: '1',
  width: '100%',
  '@media (min-width: 768px)': {
    width: `calc(100% - ${menuWidth})`,
    maxWidth: `calc(100% - ${menuWidth})`,
  },
});

const getContextStyle = style => ({
  '@media (min-width: 768px)': {
    display: 'flex',
  },
  ...style,
});

const PageWithMenuContent = ({ children, style = {}, menu, menuWidth }) => (
  <div style={getContextStyle(style)}>
    <div style={getMenuStyle(menuWidth)}>
      {menu}
    </div>
    <div style={getContentStyle(menuWidth)}>
      {children}
    </div>
  </div>
);

const RadiumPageWithMenuContent = Radium(PageWithMenuContent);

/* eslint-disable react/prefer-stateless-function */
class PageWithMenu extends Component {
  static contextTypes = {
    isFixedWidth: PropTypes.func,
  };

  render() {
    const { menu, isContained, children, style = {}, menuWidth = '250px' } = this.props;
    const isContainedResult = isContained ? true : this.context.isFixedWidth();

    if (isContainedResult) {
      return (
        <div className="uxi_container">
          <RadiumPageWithMenuContent menu={menu} menuWidth={menuWidth} style={style}>
            {children}
          </RadiumPageWithMenuContent>
        </div>
      );
    }
    return (
      <RadiumPageWithMenuContent menu={menu} menuWidth={menuWidth} style={style}>
        {children}
      </RadiumPageWithMenuContent>
    );
  }
}

export default Radium(PageWithMenu);
