import React, { Component } from 'react';
// import styled from 'styled-components';
import debounce from 'lodash.debounce';

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
    .filter(({ minWidth }) => width >= minWidth);

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
      width: null,
      height: null,
    };
  }

  componentWillMount() {
    if (window && window.addEventListener) {
      window.addEventListener('resize', this.handleResize);
    }
    this.handleResize();
    this.forceUpdate();
  }

  componentDidMount() {
    if (window && window.addEventListener) {
      window.addEventListener('resize', this.handleResize);
    }
    this.handleResize();
    this.forceUpdate();
  }

  componentWillUnmount() {
    if (window && window.removeEventListener) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  storeRef(node) {
    this.ref = node;
    this.handleResize();
    this.forceUpdate();
  }

  handleResize() {
    if (this.ref) {
      const rect = this.ref.getBoundingClientRect();
      this.setState({
        width: rect.width,
        height: rect.height,
      });
    }
  }

  render() {
    const { rules, children, inline, style /* , ...restOfProps */ } = this.props;
    const { width, height } = this.state;


    const type = inline ? 'span' : 'div';

    const extendedChildren = React.Children.map(
      children,
      child => React.cloneElement(child, applyRules(child.props, rules, width, height))
    );

    return React.createElement(
      type,
      { ref: this.storeRef, style },
      extendedChildren,
    );
  }
}

export default PropsMapperContainerQueries;
