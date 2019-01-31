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
  console.log('applyRules', width, height);
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
    .filter(({ minWidth, minHeight }) => (
      (!width || width >= minWidth)
      || (!height || height >= minHeight)
    ));

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

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      if (this.ref) {
        const {
          height,
          maxHeight,
        } = this.ref.style;

        this.ref.style.maxHeight = '100vh';
        this.ref.style.height = 'auto';
        const rect = this.ref.getBoundingClientRect();
        this.ref.style.maxHeight = maxHeight;
        this.ref.style.height = height;
        this.handleUpdate(rect);
      }
    }
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
    console.log('storeRef', node);
    this.ref = node;
    this.init();
  }

  handleUpdate = (contentRect) => {
    console.log('handleUpdate', 'contentRect', contentRect, this.ref);
    const { children, rules } = this.props;


    const { width, height } = contentRect;

    console.log('handleUpdate', width, height);

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
      this.setState({ mappedProps, width, height });
    }
  }

  init() {
    const {
      rules,
      children = {},
    } = this.props;

    if (this.observer) {
      // noop watch on unmount
    } else if (this.ref) {
      this.observer = new ResizeObserver((entries, observer) => {
        const last = entries[entries.length - 1];
        const { contentRect } = last;
        if (contentRect) {
          this.handleUpdate(contentRect);
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
