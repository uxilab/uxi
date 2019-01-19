import React, { Component } from 'react';
// import styled from 'styled-components';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

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
    // rules: PropTypes.arrayOf Rules:
    // Rules => { minWidth: Number, css: Function(result of css``)}
  }

  constructor(props) {
    super(props);
    const { debounceDelay } = this.props;

    const delay = debounceDelay !== undefined ? debounceDelay : 180;
    this.handleResize = debounce(this.handleResize.bind(this), delay).bind(this);
    this.storeRef = this.storeRef.bind(this);

    this.ref = null;

    this.state = {
      // width: null,
      // height: null,
      mappedProps: null,
    };
  }

  componentWillMount() {
    if (window && window.addEventListener) {
      window.addEventListener('resize', this.handleResize);
    }
    this.handleResize();
    // this.forceUpdate();
  }

  componentDidMount() {
    if (window && window.addEventListener) {
      window.addEventListener('resize', this.handleResize);
    }
    this.handleResize();
    // this.forceUpdate();
  }

  componentWillUnmount() {
    if (window && window.removeEventListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  storeRef(node) {
    this.ref = node;
    this.handleResize();
    // this.forceUpdate();
  }

  handleResize() {
    console.log('PropsMapperContainerQueries', 'handleResize');
    if (this.ref) {
      const { rules, children = {} } = this.props;
      const { width, height } = this.ref.getBoundingClientRect() || {};
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
        this.setState({
          mappedProps,
        });
      }
    }
  }

  render() {
    console.log('PropsMapperContainerQueries', 'render');
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
        // ...(children.props || {}),
        ...mappedProps,
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
