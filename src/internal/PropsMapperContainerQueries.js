import React, { PureComponent } from 'react';
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

  rules
    // .filter(rule => 'minWidth' in rule)  // TODO improve
    /**
     * we only apply the mapper if the available width
     * is wider or equal than the 'minWidth' condition
     * if you order you rules correcty you get a nice
     * logical, ascending, flow of overwrite
     */
    .filter(({ minWidth }) => width >= minWidth)
    .forEach(({ minWidth, propsMapper }) => {
      result = {
        ...result,
        ...propsMapper(props),
      }
    })

  return result;
}

export class PropsMapperContainerQueries extends Component {
  constructor(props) {
    super(props)

    this.handleResize = debounce(this.handleResize.bind(this), 180).bind(this)
    this.applyRules = this.applyRules.bind(this).bind(this)

    this.ref = null;

    this.state = {
      width: null,
      height: null,
    }
  }

  static propTypes = {
    // rules: PropTypes.arrayOf Rules:
    // Rules => { minWidth: Number, css: Function(result of css``)}
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.forceUpdate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    if (this.ref) {
      const rect = this.ref.getBoundingClientRect()
      this.setState({
        width: rect.width,
        height: rect.height,
      })
    }

    const { rules, children } = this.props;
    const { width, height } = this.state;
  }

  render() {
    const { rules, children, childrenProps, inline } = this.props
    const { width, height } = this.state

    const type = inline ? 'span' : 'div';

    return React.createElement(
      type,
      { ref: node => this.ref = node },
      React.cloneElement(
        Component,
        applyRules(props, rules, width, height),
      )
    )
  }
}

export default PropsMapperContainerQueries
