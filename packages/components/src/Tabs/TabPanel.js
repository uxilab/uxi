import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

export class TabPanel extends Component {
  static displayName = 'TabPanel'

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
    className: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool,
    style: PropTypes.object,
    tabId: PropTypes.string,
  }

  static defaultProps = {
    children: null,
    className: '',
    id: '',
    selected: false,
    style: {},
    tabId: '',
  }

  static contextTypes = {
    forceRenderTabPanel: PropTypes.bool,
  }

  getDefaultProps() {
    return {
      selected: false,
      id: null,
      tabId: null,
    };
  }

  render() {
    const { className, children, selected, id, tabId, style, ...attributes } = this.props;

    return (
      <div
        {...attributes}
        className={cx(
          // 'ReactTabs__TabPanel',
          className,
          {
            'ReactTabs__TabPanel--selected': selected,
          }
        )}
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        style={{ padding: '15px 0', ...style, display: selected ? null : 'none' }}
      >
        {(this.context.forceRenderTabPanel || selected) ? children : null}
      </div>
    );
  }
}

export default TabPanel;
