import React from 'react';

import ThemeProvider, { getThemeWithCustomPalette } from '../../src/Theme';
import Header from 'uxi/Header';
import { H4 } from 'uxi/Classic';
import { HorizontalMenu, VerticalMenu, MenuItem } from 'uxi/Menu';
import { Link } from 'react-router-dom';
import { AppLayout, Flex, Layout, Col, Row } from 'uxi/Layout';
import { PageWithMenu } from 'uxi/Page';
import { ThemedBox } from 'uxi/Box';
import syntax from './styles/syntax';
import markdown from './styles/markdown';

const mainStyles = {
  width: '250px',
  width: '260px',
  padding: '0 16px',
  borderRight: '1px solid #bababa',
  height: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const Appshell = ({ children }) => {
  return (
    <div>
        <AppLayout>
          <Header isDark style={{ minHeight: '80px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto'}}>
              <HorizontalMenu isMain>
                <MenuItem>
                  <div style={mainStyles}>
                    <Link to="/" >UXI</Link>
                  </div>
                </MenuItem>
                <MenuItem>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/components">Components</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/get-started">Get Started</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/">Contact</Link>
                </MenuItem>
              </HorizontalMenu>
            </div>
          </Header>
          <div>
            {children}
          </div>
      </AppLayout>
      <style dangerouslySetInnerHTML={{
        __html: [
            markdown.join('\n'),
            syntax.join('\n')
          ].join('\n')
        }}
      />
      </div>
  );
};

export default Appshell;
