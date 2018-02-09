import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

/**
 * Mobile first (intended to work only with minWidth)
 *
 * const myPropsMapper = props => { return (do stuff) };
 * const myPropsMapper = ({ shouldTooltipBeVisible }) => { return (do stuff) };
 *
 * const rules = [{
 *   minWidth: 700, // number
 *   mapper: myPropsMapper,
 * }]
 *
 * <PropsContainerQuery rules={rules} />
 */

const applyRules = (props, rules, width, height) => {
  if (rules.length === 0) {
    return props;
  }

  let result = { ...props };

  rules = rules.filter(rule => 'minWidth' in rule); // TODO improve
  /**
     * we only apply the mapper if the available
     * WINDOW/VIEWPORT width
     * is wider or equal than the 'minWidth' condition
     * if you order you rules correcty you get a nice
     * logical, ascending, flow of overwrite
     * Mobile first FTW
     */
  rules = rules.filter(({ minWidth }) => (width >= minWidth));
  rules && rules.forEach(({ minWidth, mapper }) => {
    result = {
      ...result,
      ...mapper(props),
    };
  });

  return result;
};

export class PropsMapperMediaQueriesHOC extends Component {
  constructor(props) {
    super(props);

    const { debounceDelay } = this.props;

    this.handleResize = debounce(this.handleResize.bind(this), debounceDelay).bind(this);

    this.state = {
      width: null,
      height: null,
    };
  }

  static propTypes = {
    rules: PropTypes.array,
    children: PropTypes.node,
    debounceDelay: PropTypes.number,
  }

  static defaultProps = {
    rules: [],
    children: null,
    debounceDelay: 180,
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('resize', this.handleResize);
      this.forceUpdate();
    }
    this.handleResize();
    this.forceUpdate();
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  handleResize() {
    if (window) {
      const {
        innerHeight: height,
        innerWidth: width,
      } = window;

      this.setState({
        width,
        height,
      });
    }
  }

  render() {
    const { children, rules, ...restOfProps } = this.props;
    const { width, height } = this.state;

    const theChild = React.Children.only(children);

    const mappedProps = applyRules(
      {
        ...restOfProps,
        // allowing restOfProps make the use more semantic
        // you can explicitely put the props you intend to map
        // on the HOC when instanciating it
        ...theChild.props,
      },
      rules,
      width,
      height,
    );

    return React.cloneElement(
      theChild,
      mappedProps,
    );
  }
}

export default PropsMapperMediaQueriesHOC;
