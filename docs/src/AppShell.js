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
import syntax from './styles/syntax';
import markdown from './styles/markdown';

const Appshell = ({ children }) => {
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
            {children}
      </AppLayout>
      <style dangerouslySetInnerHTML={{
        __html: [
            markdown.join('\n'),
            syntax.join('\n')
          ].join('\n')
        }}
      />
    </UXISCThemeProvider>
  );
};

export default Appshell;
