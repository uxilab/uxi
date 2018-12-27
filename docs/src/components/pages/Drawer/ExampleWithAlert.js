import React, { Component } from 'react';
import Button from 'uxi/Button';
import Drawer from 'uxi/Drawer';
import Alert from 'uxi/Alert';

class ExampleWithAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawerA: false,
      showDrawerB: false,
      showDrawerC: false,
    };
  }

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <Button
          onClick={() => { this.setState({ showDrawerA: true }); }}
          text="Show"
        /><br />
        <Button
          onClick={() => { this.setState({ showDrawerB: true }); }}
          text="Show"
        /><br />
        <Button
          onClick={() => { this.setState({ showDrawerC: true }); }}
          text="Show"
        />

        <Drawer
          anchor="top"
          onClose={() => { this.setState({ showDrawerA: false }); }}
          open={this.state.showDrawerA}
        >
          <Alert>All is good!</Alert>
        </Drawer>

        <Drawer
          anchor="top"
          onClose={() => { this.setState({ showDrawerB: false }); }}
          open={this.state.showDrawerB}
        >
          <Alert type="error">Something went wrong!</Alert>
        </Drawer>

        <Drawer
          anchor="bottom"
          onClose={() => { this.setState({ showDrawerC: false }); }}
          open={this.state.showDrawerC}
        >
          <Alert type="into">
            <div style={{ padding: '16px 0' }} >
            Could not connect to server!
            </div>
          </Alert>
        </Drawer>

      </div>
    );
  }
}

export default ExampleWithAlert;
