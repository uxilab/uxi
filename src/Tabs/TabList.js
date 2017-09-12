import React, { PropTypes } from 'react';
import cx from 'classnames';
import Tab from './Tab';

function renderChildren(props) {
  return React.Children.map(props.children, (child, index) => {
    // if child is not a tab we don't need to clone it
    // since we don't need to add custom props
    let isFirst = false;
    if (child.type !== Tab) {
      return child;
    }

    if (index === 0) {
      isFirst = true;
    }

    const clonedProps = {
      isMainStyle: props.isMainStyle,
      activeTabClassName: props.activeTabClassName,
      disabledTabClassName: props.disabledTabClassName,
      isFirst,
    };

    return React.cloneElement(child, clonedProps);
  });
}

const TabListStyle = {
  tabList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    background: '#EEEEEE',
  },
  tabListMain: {
    borderTop: 0,
    borderBottom: '1px solid #D4DAD1',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    background: '#fff',
  },
};

export default React.createClass({
  displayName: 'TabList',

  propTypes: {
    className: PropTypes.string,
    activeTabClassName: PropTypes.string,
    disabledTabClassName: PropTypes.string,
    isMainStyle: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  },

  render() {
    const {
      className,
      activeTabClassName,
      disabledTabClassName,
      children,
      isMainStyle,
      ...attributes } = this.props;

    let mergedStyle = TabListStyle.tabList;

    if (isMainStyle) {
      mergedStyle = TabListStyle.tabListMain;
    }
    return (
      <ul
        style={mergedStyle}
        {...attributes}
        className={cx(
          // 'ReactTabs__TabList',
          className,
        )}
        role="tablist"
      >
        {renderChildren({ activeTabClassName, isMainStyle, disabledTabClassName, children })}
      </ul>
    );
  },
});
