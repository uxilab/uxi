import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'uxi/Header';
import { H4 } from 'uxi/Classic';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { AppLayout, Flex, Layout, Col, Row } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';
import styled from 'styled-components';
import AutoComplete from 'uxi/AutoComplete';
import { ThemedBox } from 'uxi/Box';
import syntax from './styles/syntax';
import markdown from './styles/markdown';
import { routes } from './ComponentShell';
import UXILogo from './UXILogo';
import GithubLink from './GithubLink';
import SuggestAnEdit from './components/SuggestAnEdit';

const LogoWrapper = styled.div`
  width: 250px;
  width: 260px;
  padding: 0 16px;
  /* borderRight: 1px solid #bababa; */
  height: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    right: 0;
    height: 60%;
    display: inline-block;
    border-right: 1px solid white;
  }
`;

const AutoCompleteWrapper = styled.div`
  & > *,
  & *,
  & span {
    color: grey;
  }
`;

const mainStyles = {
  width: '250px',
  width: '260px',
  padding: '0 16px',
  borderRight: '1px solid #bababa',
  height: '60%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Appshell = (props) => {
  const { children } = props;

  return (
    <div>
      <AppLayout>
        <Header isDark style={{ width: '100%', minHeight: '80px', position: 'sticky', zIndex: 100 }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <HorizontalMenu isMain style={{ display: 'flex', alignItems: 'center' }}>
              <MenuItem>
                <LogoWrapper>
                  <Link to="/" >
                    <UXILogo />
                  </Link>
                </LogoWrapper>
              </MenuItem>
              <MenuItem>
                <Link to="/components">Components</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/get-started">Get Started</Link>
              </MenuItem>
              <MenuItem style={{ marginLeft: 'auto', lineHeight: 1, color: 'grey' }}>
                <AutoCompleteWrapper style={{ marginTop: '24px' }}>
                  <AutoComplete
                    items={routes}
                    filterOn="path"
                    onChange={({ value }) => this.props.history.push(`/components${value}`)}
                  />
                </AutoCompleteWrapper>
              </MenuItem>
              <MenuItem style={{ marginLeft: 'auto', lineHeight: 1, color: 'grey' }}>
                <GithubLink />
              </MenuItem>
            </HorizontalMenu>
          </div>
        </Header>
        <div>
          {children}
        </div>
        <footer>
          <SuggestAnEdit />
        </footer>
      </AppLayout>
      <style
        dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
          __html: [
            markdown.join('\n'),
            syntax.join('\n'),
          ].join('\n'),
        }}
      />
    </div>
  );
};

export default withRouter(Appshell);
