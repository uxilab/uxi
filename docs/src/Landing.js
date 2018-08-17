import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageTitle, PageSubTitle } from 'uxi/Page';
import { SimpleList, ListItem } from 'uxi/List';
import { Button } from 'uxi/Button';
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
const Landing = props => (
  <div style={{ position: 'relative' }}>
    {/* <LandingBackgroundComponent /> */}
    <LandingVideo />

    <div style={{ display: 'flex', color: '#fff', height: '760px', height: '100vh', alignItems: 'center', padding: '0 32px' }}>
      <div style={{ maxWidth: '1040px', width: '100%', margin: '0 auto', marginTop: '-7%' }}>
        <h1 style={{ fontSize: '40px' }}>Welcome</h1>
        <p>UXI is a UI/UX framework to build web application faster.</p>
        <div>
          <Button
            type="primary"
            text="Get Started"
            readyLink={<Link to="/get-started">Get Started</Link>}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
