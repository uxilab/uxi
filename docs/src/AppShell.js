import React from 'react';
import UXISCThemeProvider from 'uxi/Theme/ThemeProvider/UXISCThemeProvider';
import ThemeProvider, { getThemeWithCustomPalette } from '../../src/Theme';
import Header from 'uxi/Header';
import { H4 } from 'uxi/Classic';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { AppLayout, Flex, Layout, Col, Row } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';
import { ThemedBox } from 'uxi/Box';

const pageWithMenuStyles = { marginTop: '110px', marginLeft: '45px', marginRight: '45px', borderRadius: '5px', padding: '30px 15px', background: '#fff', overflow: 'visible' }

const isActive = (path, currentLocation) =>
  path.toLowerCase() === currentLocation.toLowerCase();

const makeMenuItem = ({ path, label }, currentLocation) => (
  <MenuItem isActive={isActive(path, currentLocation)} key={`/components/${path}`}> <Link to={`/components${path.toString()}`}>{label}</Link></MenuItem>
);

export const routes = [
  { path: '/components/font', label: 'Fonts' },
  { path: '/components/color', label: 'Colors' },
  { path: '/components/alert', label: 'Alert' },
  { path: '/components/autocomplete', label: 'AutoComplete' },
  { path: '/components/badge', label: 'Badge' },
  { path: '/components/breadcrumbs', label: 'BreadCrumbs' },
  { path: '/components/box', label: 'Box' },
  { path: '/components/button', label: 'Button' },
  { path: '/components/classic', label: 'Classic' },
  { path: '/components/dashboard', label: 'Dashboard' },
  { path: '/components/datagrid', label: 'Data Grid' },
  { path: '/components/icons', label: 'Icons' },
  { path: '/components/indicator', label: 'Indicator' },
  { path: '/components/inputs', label: 'Inputs' },
  { path: '/components/internal', label: 'Internal' },
  { path: '/components/img', label: 'Image' },
  { path: '/components/layouts', label: 'Layout' },
  { path: '/components/list', label: 'List' },
  { path: '/components/loader', label: 'Loader' },
  { path: '/components/menu', label: 'Menu' },
  // {/* { path: '/components/sublayout', label: 'SubLayout' }, */ },
  { path: '/components/radio', label: 'Radio' },
  { path: '/components/sociallinks', label: 'Sociallinks' },
  { path: '/components/stepper', label: 'Stepper' },
  { path: '/components/switch', label: 'Switch' },
  { path: '/components/table', label: 'Table' },
  { path: '/components/globalmenu', label: 'Global Menu' },
  { path: '/components/widget', label: 'Widget' },
  { path: '/components/personalizedmenu', label: 'Personalized Menu' },
  { path: '/components/panel', label: 'Panel' },
  { path: '/components/gallery', label: 'Gallery' },
  { path: '/components/carrousel', label: 'Carrousel' },
  { path: '/components/tile', label: 'Tile' },
  { path: '/components/Motion', label: 'Motion' },
]

const ComponentShell = ({ children }) => {
  const pathname = window.location.pathname;
  const mainMenu = (
    <VerticalMenu style={{ borderRight: '1px solid #e9e9e9', height: '100%' }}>
      {routes.map(x => makeMenuItem(x, pathname)) }
    </VerticalMenu>
  );

  return (
    <UXISCThemeProvider>
        <AppLayout>
          <Header isDark style={{ minHeight: '80px' }}>
            <HorizontalMenu isMain>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Components</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/">Contact</Link>
              </MenuItem>
            </HorizontalMenu>
          </Header>
          <PageWithMenu style={pageWithMenuStyles} menu={mainMenu} >
            <Layout>
              <Row>
                <Col>
                  {children}
                </Col>
              </Row>
            </Layout>
          </PageWithMenu>
          <ThemedBox isDark>
            <Flex><H4><strong>uxi</strong></H4></Flex>
          </ThemedBox>
        </AppLayout>
    </UXISCThemeProvider>
  );
};

export default ComponentShell;
