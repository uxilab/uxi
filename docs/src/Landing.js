import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageTitle, PageSubTitle } from 'uxi/Page';
import { SimpleList, ListItem } from 'uxi/List';
import { FlatButton, Button } from 'uxi/Button';
import LandingVideo from './LandingVideo';

const LandingBackground = styled.div`
  background: linear-gradient(150deg, rgb(27, 60, 79) 15%, #2f546b 70%, #26a29a 94%);
  transform: skewY(-12deg);
  height:100%;
  width: 100%;
  position: absolute;
  transform-origin: 0;
  z-index:-1;
  overflow-x: hidden;
  span {
    height: 190px;
    position: absolute;
  }
  span:first-child {
    width: 33.33333%;
    left: -16.66666%;
    background: #1e3644;
  }
  span:nth-child(2) {
    width: 33.33333%;
    top: 0;
    left: 16.66666%;
    right: auto;
    background: #2b4f65;
  }
  span:nth-child(3) {
    width: 33.33333%;
    left: 49.99999%;
    bottom: auto;
    background: #25475c;
  }
  span:nth-child(4){
    width: 33.33333%;
    top: 380px;
    right: -16.66666%;
    background: #289391;
  }
  span:nth-child(5) {
    width: 33.33333%;
    bottom: 0;
    background: #2b4f65;
  }
`;

/* const LandingBackgroundComponent = () => (
  <LandingBackground>
    <span />
    <span />
    <span />
    <span />
    <span />
  </LandingBackground>
); */

const ContentWrapper = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  margin-top: -7%;
  @media (min-width: 1024px) {
    padding-left: 64px;
  }
  @media (min-width: 1300px) {
    padding-left: 64px;
  }
`;


const Landing = props => (
  <div style={{ position: 'relative' }}>
    {/* <LandingBackgroundComponent /> */}
    <LandingVideo />

    <div style={{ display: 'flex', color: '#fff', height: '760px', height: 'calc(100vh - 80px)', alignItems: 'center', padding: '0 32px' }}>
      <ContentWrapper>
        <h1 style={{ fontSize: '48px' }}>uxi component library</h1>
        <p style={{ fontSize: '18px' }}>UXI is a Ui/Ux framework to build react application faster</p>
        <div style={{ marginTop: '64px' }}>
          <Button
            type="primary"
            readyLink={<Link to="/get-started">Get Started</Link>}
          />
          <Button
            style={{ marginLeft: '16px' }}
            readyLink={<Link to="/components">View doc</Link>}
          />
        </div>
      </ContentWrapper>
    </div>
  </div>
);

export default Landing;
