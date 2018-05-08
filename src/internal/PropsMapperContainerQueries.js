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

  rules = rules
    // .filter(rule => 'minWidth' in rule)  // TODO improve
    /**
     * we only apply the mapper if the available width
     * is wider or equal than the 'minWidth' condition
     * if you order you rules correcty you get a nice
     * logical, ascending, flow of overwrite
     */
    .filter(({ minWidth }) => width >= minWidth);

  rules.forEach(({ minWidth, mapper }) => {
    result = {
      ...result,
      ...mapper(result),
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

    this.ref = null;

    this.state = {
      width: null,
      height: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.forceUpdate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
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
    const { rules, children, inline, ...restOfProps } = this.props;
    const { width, height } = this.state;

    const props = {
      ...React.Children.only(children).props,
      ...restOfProps,
    };

    const mappedProps = applyRules(props, rules, width, height);

    const type = inline ? 'span' : 'div';

    return React.createElement(
      type,
      { ref: node => this.ref = node },
      React.cloneElement(
        React.Children.only(children),
        mappedProps,
      ),
    );
  }
}

export default PropsMapperContainerQueries;
