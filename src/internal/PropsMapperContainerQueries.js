import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * Mobile first (intended to work only with minWidth)
 *
 * const myPropsMapper = props => { return (do stuff) };
 * const myPropsMapper = ({ shouldTooltipBeVisible }) => { return (do stuff) };
 *
 * const rules = [{
 *   minWidth: 700, // number
 *   propsMapper: myPropsMapper,
 * }]
 *
 * <PropsContainerQuery rules={rules} />
 */

const applyRules = (props, rules, width, height) => {
  if (!rules || (rules.length === 0)) {
    return props;
  }

  let result = { ...props };

  const internalRules = rules
    // .filter(rule => 'minWidth' in rule)  // TODO improve
    /**
     * we only apply the mapper if the available width
     * is wider or equal than the 'minWidth' condition
     * if you order you rules correcty you get a nice
     * logical, ascending, flow of overwrite
     * !!!avoid cyclic dependent constraint!!
     */
    .filter(({ minWidth }) => !width || width >= minWidth);

  internalRules.forEach(({ mapper }) => {
    result = {
      ...result,
      ...mapper({ ...result, containerWidth: width, containerHeight: height }),
    };
  });

  return result;
};

export class PropsMapperContainerQueries extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.storeRef = this.storeRef.bind(this);

    this.ref = null;
    this.observer = null;

    this.state = {
      mappedProps: null,
    };
  }

  componentDidMount() {
    if (window && window.addEventListener) {
      window.addEventListener('resize', this.handleResize);
    }
    this.init();
  }

  componentWillUnmount() {
    if (window && window.removeEventListener) {
      window.removeEventListener('resize', this.handleResize);
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  storeRef(node) {
    this.ref = node;
    this.init();
  }

  init() {
    const {
      rules,
      children = {},
    } = this.props;

    if (this.observer) {
      // noop watch on unmount
    } else if (this.ref) {
      this.observer = new ResizeObserver((entries/* , observer */) => {
        const last = entries[entries.length - 1];

        const { width, height } = last.contentRect;

        const mappedProps = applyRules(
          {
            ...this.props,
            ...(children.props || {}),
          },
          rules,
          width,
          height
        );
        if (!isEqual(this.state.mappedProps, mappedProps)) {
          this.setState({ mappedProps });
        }
      });

      this.observer.observe(this.ref);
    }
  }

  render() {
    const { children, inline, style } = this.props;
    const { mappedProps } = this.state;


    const type = inline ? 'span' : 'div';

    try {
      React.Children.only(children);
    } catch (err) {
      console.error('PropsMapperContainerQueries accept a single child, see this SO https://goo.gl/2sF2eb');
      return null;
    }

    const extendedChildren = React.cloneElement(
      children,
      {
        ...(mappedProps || {}),
        rules: undefined,
      }
    );

    return React.createElement(
      type,
      {
        ref: this.storeRef,
        style: {
          ...(style || {}),
          ...((this.ref && mappedProps) ? {} : { opacity: 0 }),
        },
      },
      extendedChildren,
    );
  }
}

export default PropsMapperContainerQueries;
