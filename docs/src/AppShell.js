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
    { path: '/color', label: 'Colors' },
    { path: '/alert', label: 'Alert' },
    { path: '/autocomplete', label: 'AutoComplete' },
    { path: '/badge', label: 'Badge' },
    { path: '/breadcrumbs', label: 'BreadCrumbs' },
    { path: '/classic', label: 'Classic' },
    { path: '/box', label: 'Box' },
    { path: '/button', label: 'Button' },
    { path: '/dashboard', label: 'Dashboard' },
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
