import React, { PureComponent } from 'react';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

const applyRules = (rules, width, height) => {
  if (!rules || (rules.length === 0)) return ''
  return rules
    .filter(({ minWidth }) => width >= minWidth)
    .map(({ css }) => css)
}

const ContainerQueryUI = styled.div`
  &>*{
    ${({ rules, width, height }) => applyRules(rules, width, height)}
  }
`;

class ContainerQuery extends PureComponent {
  constructor(props) {
    super(props)

    this.handleResize = debounce(this.handleResize.bind(this), 180).bind(this)

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
    window.addEventListener('resize', this.handleResize)
    this.forceUpdate()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    if (this.ref) {
      const rect = this.ref.getBoundingClientRect()
      console.log('rect', rect)
      this.setState({
        width: rect.width,
        height: rect.height,
      })
    }

    const { rules, children } = this.props;
    const { width, height } = this.state;
    console.log('rules', rules)
    console.log(applyRules(rules, width, height))
  }

  render() {
    const { rules, children, childrenProps } = this.props
    const { width, height } = this.state

    return (
      <ContainerQueryUI
        {...childrenProps}
        innerRef={node => { this.ref = node; this.handleResize() }}
        width={width}
        height={height}
        rules={rules}
      >
        {children}
      </ContainerQueryUI>
    )
  }
}

export default ContainerQuery
