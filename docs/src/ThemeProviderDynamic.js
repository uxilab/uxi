import React, { Component } from 'react';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { Datacleaning } from 'uxi/Icons';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import Drawer from 'uxi/Drawer';


class ThemeProviderDynamic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isOpen: false,
      isOpen: false,
      primary: null,
      secondary: null,
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
    console.log('change primary');
    this.setState({ primary: color });
  }, 15, { trailing: true, leading: true })

  secondaryChange = debounce((color) => {
    this.setState({ primary: color });
    console.log('change secondary');
    this.setState({ secondary: color });
  }, 15, { trailing: true, leading: true })

  render() {
    const {
      children,
    } = this.props;

    const {
      isOpen,
      primary,
      secondary,
    } = this.state;

    return (
      <ThemeProvider
        palette={{
          primary,
          secondary,
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
                <input id="primary" type="color" onChange={e => this.primaryChange(e.target.value)} />
                {primary}
              </label>
              <label>
                <h4>Secondary color</h4>
                <input id="secondary" type="color" onChange={e => this.secondaryChange(e.target.value)} />
                {secondary}
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
