import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  // let internalRules = rules.filter(rule => 'minWidth' in rule); // TODO improve
  /**
     * we only apply the mapper if the available
     * WINDOW/VIEWPORT width
     * is wider or equal than the 'minWidth' condition
     * if you order you rules correcty you get a nice
     * logical, ascending, flow of overwrite
     * Mobile first FTW
     */
  const internalRules = rules
    .filter(({ minWidth, minHeight }) => (
      width >= minWidth || height >= minHeight
    ));

  if (internalRules.length === 0) {
    return props;
  }

  internalRules.forEach(({ mapper }) => {
    result = {
      ...result,
      ...mapper(props),
    };
  });


  return result;
};

export class PropsMapperMediaQueries extends Component {
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

  constructor(props) {
    super(props);

    const { debounceDelay } = this.props;

    this.handleResize = debounce(this.handleResize.bind(this), debounceDelay).bind(this);

    this.state = {
      mappedProps: null,
    };
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
      const { rules, children = {} } = this.props;
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
        const {
          rules, // eslint-disable-line no-shadow, no-unused-vars
          ...restOfMappedProps
        } = mappedProps;

        this.setState({
          mappedProps: restOfMappedProps,
        });
      }
    }
  }

  render() {
    const { children /* ...restOfProps */} = this.props;
    const { mappedProps } = this.state;

    const theChild = React.Children.only(children);

    return React.cloneElement(
      theChild,
      {
        // ...(theChild.props || {}),
        ...mappedProps,
      }
    );
  }
}

export default PropsMapperMediaQueries;
