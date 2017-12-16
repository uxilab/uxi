import React from 'react';
import UXISCThemeProvider from 'uxi/Theme/ThemeProvider/UXISCThemeProvider';
import ThemeProvider, { getThemeWithCustomPalette } from '../../src/Theme';
import Header from 'uxi/Header';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';


const makeMenuItem = ({ path, label }) => (
  <MenuItem key={`${path}`}> <Link to={path.toString()}>{label}</Link></MenuItem>
);

const AppShell = ({ children }) => {
  const routes = [
    { path: '/font', label: 'Fonts' },
    { path: '/color', label: 'color' },
    { path: '/button', label: 'button' },
    { path: '/layouts', label: 'Layout' },
    // {/* { path: '/sublayout', label: 'SubLayout' }, */ },
    { path: '/box', label: 'box' },
    { path: '/sociallinks', label: 'sociallinks' },
    { path: '/inputs', label: 'inputs' },
    { path: '/icons', label: 'icons' },
    { path: '/table', label: 'table' },
    { path: '/switch', label: 'switch' },
    { path: '/alert', label: 'Alert' },
    { path: '/loader', label: 'Loader' },
    { path: '/img', label: 'img' },
    { path: '/menu', label: 'Menu' },
    { path: '/internal', label: 'Internal' },
    { path: '/badge', label: 'badge' },
    { path: '/indicator', label: 'indicator' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  const mainMenu = (
    <VerticalMenu style={{ borderRight: '1px solid #e9e9e9', height: '100%' }}>
      {routes.map(makeMenuItem) }
    </VerticalMenu>
  );

  return (
    <UXISCThemeProvider theme={getThemeWithCustomPalette()} >
      <ThemeProvider palette={{ /* primary: '#663399', secondary: '#7fff00' */ }}>
        <div>
          <Header isDark>
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
          <PageWithMenu
            style={{ marginTop: '110px', marginLeft: '45px', marginRight: '45px', borderRadius: '5px', padding: '30px 15px', background: '#fff' }}
            menu={mainMenu}
          >
            <Layout>
              <Row>
                <Col>
                  {children}
                </Col>
              </Row>
            </Layout>
          </PageWithMenu>
        </div>
      </ThemeProvider>
    </UXISCThemeProvider>
  );
};

export default AppShell;
