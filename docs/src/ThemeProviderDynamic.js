import React, { Component } from 'react';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { Datacleaning } from 'uxi/Icons';
import {
  TextField,
  RangeInput,
} from 'uxi/Input';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import Drawer from 'uxi/Drawer';


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

  // radiusRawChange = debounce((radius) => {
  //   this.setState({ radius });
  //   // console.log('change secondary');
  //   // this.setState({ secondary: color });
  // }, 15, { trailing: true, leading: true })

  render() {
    const {
      children,
    } = this.props;

    const {
      isOpen,
      primary,
      secondary,
      radius,
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
          palette: {
            primary,
            secondary,
          },
        }}
      >
        {children}
        <div
          style={{
            cursor: 'pointer',
            background: 'white',
            padding: '8px',
            borderRadius: '50%',
            boxSizing: 'border-box',
            width: '44px',
            height: '44px',
            boxShadow: '1px 4px 20px 0px #424242',
            position: 'absolute',
            zIndex: 50,
            right: '16px',
            bottom: '16px',
          }}
          onClick={() => {
            this.open();
          }}
        >
          <Datacleaning />
        </div>
        <Drawer isOpen={isOpen} onClose={() => this.setState({ isOpen: false })}>
          <Panel>
            <PanelHeader title="White Label" />
            <PanelContent style={{ padding: '16px' }}>
              <label>
                <h4>Primary color</h4>
                <input
                  id="primary"
                  type="color"
                  onChange={e => this.primaryChange(e.target.value)}
                  defaultValue={primary}
                />
                {primary}
              </label>
              <hr />
              <label>
                <h4>Secondary color</h4>
                <input
                  id="secondary"
                  type="color"
                  onChange={e => this.secondaryChange(e.target.value)}
                  defaultValue={secondary}
                />
                {secondary}
              </label>
              <hr />
              <label>
                <h4>Radius</h4>
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
                {radius}
              </label>
            </PanelContent>
            <PanelFooter />
          </Panel>
        </Drawer>
      </ThemeProvider>
    );
  }
}


export default ThemeProviderDynamic;
