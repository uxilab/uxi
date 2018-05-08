import React, { PureComponent } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

/**
 * Mobile first (intended to work only with minWidth)
 *
 * import { css } from 'styled-components'
 *
 * const queryRule = css` ... some css rules ... `;
 *
 * const rules = [{
 *   minWidth: 600, // number
 *   css: queryRule,
 * }]
 *
 * <CssContainerQueries rules = {rules} />
 *
 * This would work great for the PageWithMenu we use in the gdpr page
 * it could account for the lateral menu using this
 */

const applyRules = (rules, width, height) => {
  if (!rules || (rules.length === 0)) return '';
  return rules
    .filter(({ minWidth }) => width >= minWidth)
    .map(({ css }) => css);
};

const CssContainerQueriesUI = styled.div`
  &>*{
    ${({ rules, width, height }) => applyRules(rules, width, height)}
  }
`;

export class CssContainerQueries extends PureComponent {
  constructor(props) {
    super(props);

    this.handleResize = debounce(this.handleResize.bind(this), 180).bind(this);

    this.state = {
      width: null,
      height: null,
    };
  }

  static propTypes = {
    // rules: PropTypes.arrayOf Rules:
    // Rules => { minWidth: Number, css: Function(result of css``)}
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
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
    const { rules, children, childrenProps } = this.props;
    const { width, height } = this.state;

    return (
      <CssContainerQueriesUI
        {...childrenProps}
        innerRef={(node) => { this.ref = node; this.handleResize(); }}
        width={width}
        height={height}
        rules={rules}
      >
        {children}
      </CssContainerQueriesUI>
    );
  }
}

export default CssContainerQueries;
