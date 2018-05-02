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
  <MenuItem isActive={isActive(path, currentLocation)} key={`${path}`}> <Link to={path.toString()}>{label}</Link></MenuItem>
);

export const routes = [
  { path: '/font', label: 'Fonts' },
  { path: '/color', label: 'Colors' },
  { path: '/alert', label: 'Alert' },
  { path: '/autocomplete', label: 'AutoComplete' },
  { path: '/badge', label: 'Badge' },
  { path: '/breadcrumbs', label: 'BreadCrumbs' },
  { path: '/box', label: 'Box' },
  { path: '/button', label: 'Button' },
  { path: '/classic', label: 'Classic' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/datagrid', label: 'Data Grid' },
  { path: '/icons', label: 'Icons' },
  { path: '/indicator', label: 'Indicator' },
  { path: '/inputs', label: 'Inputs' },
  { path: '/internal', label: 'Internal' },
  { path: '/img', label: 'Image' },
  { path: '/layouts', label: 'Layout' },
  { path: '/list', label: 'List' },
  { path: '/loader', label: 'Loader' },
  { path: '/menu', label: 'Menu' },
  // {/* { path: '/sublayout', label: 'SubLayout' }, */ },
  { path: '/radio', label: 'Radio' },
  { path: '/sociallinks', label: 'Sociallinks' },
  { path: '/stepper', label: 'Stepper' },
  { path: '/switch', label: 'Switch' },
  { path: '/table', label: 'Table' },
  { path: '/globalmenu', label: 'Global Menu' },
  { path: '/widget', label: 'Widget' },
  { path: '/personalizedmenu', label: 'Personalized Menu' },
  { path: '/panel', label: 'Panel' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/carrousel', label: 'Carrousel' },
  { path: '/tile', label: 'Tile' },
  { path: '/Motion', label: 'Motion' },
]

const AppShell = ({ children }) => {
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

export default AppShell;
