import React, { Component } from 'react';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { Datacleaning, Start } from 'uxi/Icons';
import { Flex } from 'uxi/Layout';
import styled from 'styled-components';
import {
  TextField,
  RangeInput,
  SearchForm,
} from 'uxi/Input';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import Drawer from 'uxi/Drawer';

const CTAWrapper = styled.div`
  cursor: pointer;
  background: white;
  background: ${({ theme: { palette } }) => palette.primary.main};
  svg, svg path {
    fill: ${({ theme: { palette } }) => palette.accent.main};
  }
  padding: 8px;
  border-radius: 50%;
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  box-shadow: 1px 4px 20px 0px #424242;
  position: absolute;
  z-index: 50;
  right: 16px;
  bottom: 16px;
`;

class ThemeProviderDynamic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isOpen: false,
      isOpen: false,
      // isOpen: true,
      primary: '#ff9315',
      secondary: '#272727',
      radius: '3px',
      transition: '450ms cubic-bezier(0.23, 1, 0.32, 1) ',
    };

    this.open = this.open.bind(this);
    // this.primaryChange = this.primaryChange.bind(this);
    // this.secondaryChange = this.secondaryChange.bind(this);
    // this.primaryChange = debounce(this.primaryChange.bind(this), 300, { leading: true, trailing: true });
    // this.secondaryChange = debounce(this.secondaryChange.bind(this), 300, { leading: true, trailing: true });
  }

  open() { this.setState({ isOpen: true }); }

  primaryChange = debounce((color) => {
    this.setState({ primary: color });
    // console.log('change primary');
    // this.setState({ primary: color });
  }, 15, { trailing: true, leading: true })

  secondaryChange = debounce((color) => {
    this.setState({ secondary: color });
    // console.log('change secondary');
    // this.setState({ secondary: color });
  }, 15, { trailing: true, leading: true })

  radiusChange = debounce((radius) => {
    this.setState({ radius: `${radius}px` });
    // console.log('change secondary');
    // this.setState({ secondary: color });
  }, 15, { trailing: true, leading: true })

  defaultTransitionChange = (transition) => {
    this.setState({ transition });
    // console.log('change secondary');
    // this.setState({ secondary: color });
  }

  render() {
    const {
      children,
    } = this.props;

    const {
      isOpen,
      primary,
      secondary,
      radius,
      transition,
    } = this.state;

    return (
      <ThemeProvider
        // palette={{
        //   primary,
        //   secondary,
        //   radius,
        // }}
        theme={{
          radius,
          transition: {
            default: transition,
          },
          palette: {
            primary,
            secondary,
          },
        }}
      >
        {children}
        <CTAWrapper
          onClick={() => {
            this.open();
          }}
        >
          <Datacleaning />
        </CTAWrapper>
        <Drawer isOpen={isOpen} onClose={() => this.setState({ isOpen: false })}>
          <Panel>
            <PanelHeader title="White Label" />
            <PanelContent style={{ padding: '16px' }}>
              <h2>Styles</h2>
              <label>
                <h4>Primary color</h4>
                <Flex style={{ justifyContent: 'flex-start' }}>
                  <input
                    id="primary"
                    type="color"
                    onChange={e => this.primaryChange(e.target.value)}
                    defaultValue={primary}
                  />
                  <div style={{ paddingLeft: '16px' }}>{primary}</div>
                </Flex>

              </label>
              <label>
                <h4>Secondary color</h4>
                <Flex style={{ justifyContent: 'flex-start' }}>
                  <input
                    id="secondary"
                    type="color"
                    onChange={e => this.secondaryChange(e.target.value)}
                    defaultValue={secondary}
                  />
                  <div style={{ paddingLeft: '16px' }}>{secondary}</div>
                </Flex>

              </label>
              <h />
              <label>
                <h4>Radius</h4>
                <Flex style={{ justifyContent: 'flex-start' }}>
                  <div style={{ paddingRight: '16px' }}>{radius}</div>
                  <RangeInput
                    id="radius"
                    min={0}
                    max={32}
                    onChange={(e, v) => this.radiusChange(e.target.value)}
                    defaultValue={radius.replace('px', '')}
                  />
                  {/* <TextField
                  placeholder="Or type radius value (e.g. single value '50%')"
                  onChange={(e, v) => this.radiusRawChange(e.target.value)}
                /> */}
                </Flex>

              </label>
              <hr />
              <br />
              <h2>Behaviour</h2>
              <h4>default transition</h4>
              <p>{transition}</p>
              <br />
              <SearchForm
                isFullWidth
                icon={<Start />}
                id="transition"
                defaultValue={transition}
                placeholder="default transition value (e.g. '450ms cubic-bezier(0.23, 1, 0.32, 1) ')"
                onSubmit={(e, v) => this.defaultTransitionChange(e.target.value)}
              />
            </PanelContent>
            <PanelFooter />
          </Panel>
        </Drawer>
      </ThemeProvider>
    );
  }
}


export default ThemeProviderDynamic;
