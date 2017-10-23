import React from 'react';
import ThemProvider from 'uxi/Theme';
import Header from 'uxi/Header';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';

const AppShell = ({ children }) => {
  // need active route styling system
  const mainMenu = (
    <VerticalMenu style={{ borderRight: '1px solid #e9e9e9', height: '100%' }}>
      <MenuItem>
        <Link to="/font">Fonts</Link>
      </MenuItem>
      <MenuItem isActive>
        <Link to="/button">Button</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/menu">Menu</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/tabs">Tabs</Link>
      </MenuItem>
    </VerticalMenu>
  );

  return (
    <ThemProvider>
      <div>
        <Header>
          <HorizontalMenu isMain>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Component</Link>
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
          <Layout style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <Row>
              <Col>
                {children}
              </Col>
            </Row>
          </Layout>
        </PageWithMenu>s
      </div>
    </ThemProvider>
  );
};

export default AppShell;
