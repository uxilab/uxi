import React, { Component } from 'react';
import Button from 'uxi/Button';
import { P } from 'uxi/Classic';
import Drawer from 'uxi/Drawer';
import { Close } from 'uxi/Icons';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidePanelRight: false,
      showSidePanelBottom: false,
    };
  }

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <Button
          onClick={() => { this.setState({ showSidePanelRight: true }); }}
          text="Show SidePanel with no visual way out"
        /><br />
        <Button
          onClick={() => { this.setState({ showSidePanelBottom: true }); }}
          text="Show SidePanel from the bottom"
        />

        <Drawer
          onClose={() => { this.setState({ showSidePanelRight: false }); }}
          open={this.state.showSidePanelRight}
        >
          <div>Press escape key to close</div>
        </Drawer>

        <Drawer
          anchor="bottom"
          onClose={() => { this.setState({ showSidePanelBottom: false }); }}
          open={this.state.showSidePanelBottom}
        >
          <div style={{ position: 'relative' }}>
            <h3>Some content</h3>
            <div style={{ position: 'absolute', right: '16px', top: '16px' }} >
              <Button
                icon={<Close />}
                onClick={() => this.setState({ showSidePanelBottom: false })}
              />
            </div>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </P>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default ExampleSimple;
