import React from 'react';
import ThemProvider from 'uxi/Theme';
import Header from 'uxi/Header';
import { HorizontalMenu, VerticallMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';

const AppShell = ({ children }) => {
  const mainMenu = (
    <VerticallMenu style={{ borderRight: '1px solid #e9e9e9', height: '100%' }}>
      <MenuItem isActive>
        <Link to="/button">Button</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/button">Layout</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/button">SubLayout</Link>
      </MenuItem>
    </VerticallMenu>
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
          <Layout>
            <Row>
              <Col>
                {children}
              </Col>
            </Row>
          </Layout>
        </PageWithMenu>
      </div>
    </ThemProvider>
  );
};

export default AppShell;
