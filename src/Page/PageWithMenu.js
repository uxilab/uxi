import React, { PropTypes, Component } from 'react';
import Radium from 'radium';

const getMenuStyle = menuWidth => ({
  width: '100%',
  '@media (min-width: 768px)': {
    width: menuWidth,
    minWidth: menuWidth,
  },
});

const getContentStyle = style => ({
  '@media (min-width: 768px)': {
    display: 'flex',
  },
  ...style,
});

const PageWithMenuContent = ({ children, style = {}, menu, menuWidth }) => (
  <div style={getContentStyle(style)}>
    <div style={getMenuStyle(menuWidth)}>
      {menu}
    </div>
    <div style={{ flex: 1 }}>
      {children}
    </div>
  </div>
);

const RadiumPageWithMenuContent = Radium(PageWithMenuContent);

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
