import React from 'react';
import styled from 'styled-components';
import Header from 'uxi/Header';
import { H4 } from 'uxi/Classic';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
// import { SearchForm } from 'uxi/Input';
import { AppLayout, Flex, Layout, Col, Row, ContentWithExtra } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';
import { ThemedBox } from 'uxi/Box';
import Menu from './Menu';
import Footer from './Footer';
import { routes } from './routes';
// import AutoComplete from 'uxi/AutoComplete';
// import BetaLookup from 'uxi/internal/BETALookup';
// import BETAAutoComplete from 'uxi/Input/BETAAutoComplete';
import Search from './Search'


const MainContentWrapper = styled.div`
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  /* --- searchBox */
  & > div:nth-child(1) {
    z-index: 99;
    position: absolute;
    position: sticky;
    top: -16px;
    margin-top: -16px;
    margin-left: -16px;
    margin-right: -16px;
    @media screen and (min-width: 1024px) {
      margin-top: -32px;
      margin-left: -32px;
      margin-right: -32px;
      top: -32px;
    }
    & * { font-size: 1.1em; }
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


const AutoCompleteWrapper = styled.div`
  /* margin-top: -32px; */
  /* margin-left: -32px; */
  /* margin-right: -32px; */
  /* & * { font-size: 1.1em; } */
 /*  & > *,
  & *,
  & span {
    color: grey;
  } */
`;


const pageWithMenuStyles = { marginTop: '110px', marginLeft: '45px', marginRight: '45px', borderRadius: '5px', padding: '30px 15px', background: '#fff', overflow: 'visible' };

const isActive = (path, currentLocation) =>
  path.toLowerCase() === currentLocation.toLowerCase();

const makeMenuItem = ({ path, label }, currentLocation) => (
  <MenuItem isActive={isActive(path, currentLocation)} key={`/components/${path}`}> <Link to={`/components${path.toString()}`}>{label}</Link></MenuItem>
);

// export const routes = [
//   { path: '/panel', label: 'Panel', childRoutes: [
//       { path: '/panel/PanelHeader', label: 'PanelHeader' }
//       ,{ path: '/panel/PanelContent', label: 'PanelContent' }
//       ,{ path: '/panel/PanelFooter', label: 'PanelFooter' }
//       ,{ path: '/panel/LightPanel', label: 'LightPanel' }
//   ]},
//   { path: '/Dialog', label: 'Dialog', childRoutes: [
//       { path: '/dialog/withConfirmDialog', label: 'withConfirmDialog' }
//   ]},
//   { path: '/icons', label: 'Icons' },
//   { path: '/inputs', label: 'Inputs', childRoutes: [
//       { path: '/inputs/Checkbox', label: 'Checkbox' }
//       ,{ path: '/inputs/radio', label: 'Radio' }
//       ,{ path: '/inputs/selectinput', label: 'SelectInput' }
//       ,{ path: '/inputs/FileInput', label: 'FileInput' }
//       ,{ path: '/inputs/TextField', label: 'TextField' }
//       ,{ path: '/inputs/Range', label: 'Range' }
//       ,{ path: '/inputs/Datetime', label: 'Datetime' }
//       ,{ path: '/inputs/SearchForm', label: 'SearchForm' }
//       // ,{ path: '/inputs/switch', label: 'Switch' }
//   ]},
//   { path: '/button', label: 'Button' },
//   { path: '/Drawer', label: 'Drawer', childRoutes: [
//     { path: '/Drawer/CompactDrawer', label: 'CompactDrawer' }
//   ]},
//   { path: '/alert', label: 'Alert' },
//   { path: '/badge', label: 'Badge' },
//   { path: '/layouts', label: 'Layout' },
//   // { path: '/internal', label: 'Internal' },
//   { path: '/breadcrumbs', label: 'BreadCrumbs' },
//   { path: '/classic', label: 'Classic' },
//   { path: '/gallery', label: 'Gallery' },
//   { path: '/Motion', label: 'Motion' },
//   { path: '/datagrid', label: 'Data Grid' },
//   { path: '/spacer', label: 'Spacer' },
//   { path: '/img', label: 'Image' },
//   { path: '/stepper', label: 'Stepper' },
//   { path: '/carrousel', label: 'Carrousel' },
//   { path: '/table', label: 'Table' },
//   { path: '/BETAAutoComplete', label: 'BETAAutoComplete' },
//   { path: '/popover', label: 'PopOver' },
//   { path: '/compactslide', label: 'CompactSlide' },
//   { path: '/MenuDropDown', label: 'MenuDropDown' },
//   { path: '/font', label: 'Fonts' },
//   { path: '/color', label: 'Colors' },
//   { path: '/dropdown', label: 'Dropdown' },
//   { path: '/autocomplete', label: 'AutoComplete' },
//   { path: '/box', label: 'Box' },
//   { path: '/dashboard', label: 'Dashboard' },
//   { path: '/indicator', label: 'Indicator' },
//   { path: '/tree', label: 'Tree' },
//   { path: '/list', label: 'List' },
//   { path: '/loader', label: 'Loader' },
//   { path: '/menu', label: 'Menu' },
//   // {/* { path: '/sublayout', label: 'SubLayout' }, */ },
//   { path: '/sociallinks', label: 'Sociallinks' },
//   { path: '/globalmenu', label: 'Global Menu' },
//   { path: '/widget', label: 'Widget' },
//   { path: '/personalizedmenu', label: 'Personalized Menu' },
//   { path: '/tile', label: 'Tile' },
// ];

console.log('routes in ComponentShell ', routes)


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

      {/* <PageWithMenu style={pageWithMenuStyles} menu={mainMenu} > */}
        <div style={{ padding: '16px' }}>
          <Layout>
            <Row>
              <Col>{children}</Col>
            </Row>
          </Layout>
        </div>
      {/* </PageWithMenu> */}
    </div>
  );
};

export default ComponentShell;
