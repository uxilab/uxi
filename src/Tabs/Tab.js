import React from 'react';
import PropTypes from 'prop-types';

import { findDOMNode } from 'react-dom';
import cx from 'classnames';

const TabStyle = {
  liMainStyle: {
    margin: 0,
    padding: '15px 30px',
    display: 'inline-block',
    cursor: 'pointer',
    fontFamily: '\'Fira sans\', sans-serif',
    color: '#37373a',
    fontSize: '16px',
    background: '#fff',
  },
  borderFirst: {
    borderLeft: '1px solid #D4DAD1',
    borderRight: '1px solid #D4DAD1',
  },
  border: {
    borderRight: '1px solid #D4DAD1',
  },
  li: {
    margin: 0,
    padding: '15px 30px',
    display: 'inline-block',
    cursor: 'pointer',
  },
  liSelected: {
    color: '#06979e',
    background: '#fff',
  },
  liMainStyleSelected: {
    color: '#000000',
    background: '#F3F3F2',
  },
};

export default React.createClass({
  displayName: 'Tab',

  propTypes: {
    className: PropTypes.string,
    id: PropTypes.string,
    isMainStyle: PropTypes.bool,
    isFirst: PropTypes.bool,
    focus: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    activeTabClassName: PropTypes.string,
    disabledTabClassName: PropTypes.string,
    panelId: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  },

  getDefaultProps() {
    return {
      focus: false,
      selected: false,
      id: null,
      panelId: null,
      activeTabClassName: 'ReactTabs__Tab--selected',
      disabledTabClassName: 'ReactTabs__Tab--disabled',
    };
  },

  componentDidMount() {
    this.checkFocus();
  },

  componentDidUpdate() {
    this.checkFocus();
  },

  checkFocus() {
    if (this.props.selected && this.props.focus) {
      findDOMNode(this).focus();
    }
  },

  render() {
    const {
      selected,
      disabled,
      panelId,
      activeTabClassName,
      disabledTabClassName,
      className,
      children,
      id,
      isMainStyle,
      isFirst,
      ...attributes
    } = this.props;

    let mergedStyle = Object.assign({}, TabStyle.li, isFirst ? {} : {});

    if (isMainStyle) {
      mergedStyle = Object.assign(
        {},
        TabStyle.liMainStyle,
        isFirst
          ? TabStyle.borderFirst
          : TabStyle.border
      );
    }

    delete attributes.focus;

    if (selected) {
      if (!isMainStyle) {
        mergedStyle = Object.assign(
          {},
          mergedStyle,
          TabStyle.liSelected, isFirst
            ? TabStyle.borderFirst
            : TabStyle.border
        );
      } else {
        mergedStyle = Object.assign(
          {},
          mergedStyle,
          TabStyle.liMainStyleSelected,
          isFirst ? {} : {}
        );
      }
    }

    return (
      <li
        {...attributes}
        style={mergedStyle}
        className={cx(
          // 'ReactTabs__Tab',
          className,
          {
            [activeTabClassName]: selected,
            [disabledTabClassName]: disabled,
          },
        )}
        role="tab"
        id={id}
        aria-selected={selected ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        aria-controls={panelId}
        tabIndex={selected ? '0' : null}
      >
        {children}
      </li>
    );
  },
});
