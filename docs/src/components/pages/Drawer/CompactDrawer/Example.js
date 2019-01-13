import React, { Component } from 'react';
import Button from 'uxi/Button';
import { P } from 'uxi/Classic';
import { CompactDrawer } from 'uxi/Drawer';
import { Close } from 'uxi/Icons';
import Alert from 'uxi/Alert';


class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
    };
  }

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <Button
          onClick={() => { this.setState({ show1: true }); }}
          text="Show SidePanel with no visual way out"
        /><br />
        <Button
          onClick={() => { this.setState({ show2: true }); }}
          text="Show SidePanel with no visual way out"
        />

        <CompactDrawer
          onClose={() => { this.setState({ show1: false }); }}
          inAttr={this.state.show1}
        >
          <Alert type="error" >
            <div style={{ width: '260px' }} >
              Something went wrong!
            </div>
          </Alert>
        </CompactDrawer>

        <CompactDrawer
          direction="bottom"
          onClose={() => { this.setState({ show2: false }); }}
          inAttr={this.state.show2}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>
      </div>
    );
  }
}

export default ExampleSimple;
