import React from 'react';
import styled from 'styled-components';
import Header from 'uxi/Header';
import { H4 } from 'uxi/Classic';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { AppLayout, Flex, Layout, Col, Row, ContentWithExtra } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';
import { ThemedBox } from 'uxi/Box';
import Menu from './Menu';
import Footer from './Footer';
import { routes } from './routes';
import Search from './Search'


const MainContentWrapper = styled.div`
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  /* --- searchBox */
  & > div:nth-child(1) {
    box-shadow: 1px 3px 16px rgba(0, 0, 0, .5);
    margin-bottom: 64px;
    z-index: 1;
    position: absolute;
    position: sticky;
    top: -16px;
    margin-top: -16px;
    margin-left: -16px;
    margin-right: -16px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 92px;
      margin-top: -32px;
      margin-left: -32px;
      margin-right: -32px;
      top: -32px;
    }
    & * { font-size: 1.1em; border-radius: 0;  }
    & ul * { font-size: 1em; padding: 2px 0; }
    /* max-width: 960px;
    margin: 0 auto; */
  }
  /* --- main content */
  & > div:nth-child(2) {
    max-width: 960px;
    margin: 0 auto;
  }

  max-height: calc(100vh - 80px);
  overflow-y: auto;

  @media screen and (min-width: 1024px) {
    padding: 32px;
  }
`;


const pageWithMenuStyles = { marginTop: '110px', marginLeft: '45px', marginRight: '45px', borderRadius: '5px', padding: '30px 15px', background: '#fff', overflow: 'visible' };

const isActive = (path, currentLocation) =>
  path.toLowerCase() === currentLocation.toLowerCase();

const makeMenuItem = ({ path, label }, currentLocation) => (
  <MenuItem isActive={isActive(path, currentLocation)} key={`/components/${path}`}> <Link to={`/components${path.toString()}`}>{label}</Link></MenuItem>
);

const ComponentShell = ({ children }) => {
  const pathname = window.location.pathname;
  const mainMenu = (
    <VerticalMenu style={{ borderRight: '1px solid #e9e9e9', height: '100%' }}>
      {routes.map(x => makeMenuItem(x, pathname)) }
    </VerticalMenu>
  );

  return (
    <div>
      <ContentWithExtra
        extraMinWidth="68px"
        contentMinWidth="200px"
        contentStyle={{ boxShadow: 'inset 1px 3px 16px rgba(0, 0, 0, .5)' }}
        extra={(
          <div style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
            <Menu />
          </div>
        )}
      >
        <MainContentWrapper>
          <div>
            <Search />
          </div>
          <div>
            <div>{children}</div>
            <Footer />
          </div>
        </MainContentWrapper>
      </ContentWithExtra>
    </div>
  );

  return children

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto' }} >

        <div style={{ padding: '16px' }}>
          <Layout>
            <Row>
              <Col>{children}</Col>
            </Row>
          </Layout>
        </div>
    </div>
  );
};

export default ComponentShell;
