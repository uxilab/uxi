import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styled, { css } from 'styled-components';
import ContainerQuery from '../internal/ContainerQuery'

const PageWithMenuUI = styled.div`
    & > div { width: 100%; }
  /* @media (min-width: 768px) { */
/*     display: flex;
    justify-content: center;
    flex-flow: row wrap;
    &>div:first-child {
      min-width: ${({ menuWidth }) => menuWidth};
      max-width: ${({ menuWidth }) => menuWidth};
      flex-grow: 1;
    }
    &>div:last-child {
      min-width: ${({ menuWidth }) => menuWidth};
      min-width: ${({ contentWidth }) => contentWidth};
      max-width: ${({ menuWidth }) => `calc(100% - ${ menuWidth })`};
      flex-grow: 1; */
    }
  /* }; */
`;


const PageWithMenuContent = (props) => {
  const {
    children,
    style = {},
    menu,
    menuWidth,
    contentWidth
  } = props

  const queryRule = css`
    &>div:last-child { color: red !important }

    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    /* flex: 1 1 100%; */
    &>div:first-child {
      min-width: ${({ menuWidth }) => menuWidth};
      /* width: ${({ menuWidth }) => menuWidth}; */
      max-width: ${({ menuWidth }) => menuWidth};
      flex-grow: 1;
    }
    &>div:last-child {
      min-width: ${({ menuWidth }) => menuWidth};
      min-width: ${({ contentWidth }) => contentWidth};
      max-width: ${({ menuWidth }) => `calc(100% - ${menuWidth})`};
      /* width: auto; */
      flex-grow: 1;
    }
  `;

  const containerQueryRules = [
    {
      minWidth: 600, // number
      // css: queryRule,
      // css: css` &>div:last-child { color: red !important }`,
      css: queryRule,
    }
  ]

  return (
    <ContainerQuery childrenProps={props} rules={containerQueryRules} >
      <PageWithMenuUI menuWidth={menuWidth} contentWidth={contentWidth} style={style}>
        <div> {menu} </div>
        <div> {children} </div>
      </PageWithMenuUI>
    </ContainerQuery>
  )
};

PageWithMenuContent.propTypes = {
  menuWidth: PropTypes.string,
}

PageWithMenuContent.defaultProps = {
  menuWidth: '250px',
}

const RadiumPageWithMenuContent = Radium(PageWithMenuContent);

/* eslint-disable react/prefer-stateless-function */
class PageWithMenu extends Component {
  static contextTypes = {
    isFixedWidth: PropTypes.func,
  };

  render() {
    const { menu, isContained, children, style = {}, menuWidth } = this.props;
    const isContainedResult = isContained ? true : this.context.isFixedWidth();

    if (isContainedResult) {
      return (
        <div className="uxi_container">
          <RadiumPageWithMenuContent menu={menu} menuWidth={menuWidth} style={style}>
            {children}
          </RadiumPageWithMenuContent>
        </div>
      );
    }
    return (
      <RadiumPageWithMenuContent menu={menu} menuWidth={menuWidth} style={style}>
        {children}
      </RadiumPageWithMenuContent>
    );
  }
}

export default Radium(PageWithMenu);
