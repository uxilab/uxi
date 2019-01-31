import React, { Component } from 'react';
import Button from 'uxi/Button';
import Drawer from 'uxi/Drawer';
import TextField from 'uxi/Input/TextField';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import { Close } from 'uxi/Icons';

class ExampleWithPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidePanelLeft: false,
      showSidePanelRight: false,
      showSidePanelBottom: false,
      showSidePanelTop: false,
    };
  }

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <Button
          onClick={() => { this.setState({ showSidePanelLeft: true }); }}
          text="Show Drawer with Panel from the left"
        /><br />
        <Button
          onClick={() => { this.setState({ showSidePanelRight: true }); }}
          text="Show Drawer with Panel from the right (no footer)"
        /><br />
        <Button
          onClick={() => { this.setState({ showSidePanelBottom: true }); }}
          text="Show Drawer with Panel from the bottom"
        /><br />
        <Button
          onClick={() => { this.setState({ showSidePanelTop: true }); }}
          text="Show Drawer with Panel from the top"
        />

        <Drawer
          anchor="left"
          onClose={() => { this.setState({ showSidePanelLeft: false }); }}
          open={this.state.showSidePanelLeft}
        >
          <Panel onClose={() => this.setState({ showSidePanelLeft: false })}>
            <PanelHeader title={'Notifications'} />
            <PanelContent>
              first focusable element inside drawer gets focus on open
              <Button>button</Button>
            </PanelContent>
            <PanelFooter />
          </Panel>
        </Drawer>

        <Drawer
          anchor="right"
          onClose={() => { this.setState({ showSidePanelRight: false }); }}
          open={this.state.showSidePanelRight}
        >
          <Panel onClose={() => this.setState({ showSidePanelRight: false })}>
            <PanelHeader title={'Notifications'} />
            <PanelContent>
              first focusable element inside drawer gets focus on open
              <TextField placeholder="an input" />
              <Button>button</Button>
            </PanelContent>
          </Panel>
        </Drawer>

        <Drawer
          anchor="bottom"
          onClose={() => { this.setState({ showSidePanelBottom: false }); }}
          open={this.state.showSidePanelBottom}
        >
          <Panel onClose={undefined} >
            <PanelHeader title={'Review Changes'} />
            <PanelContent style={{ padding: '16px' }}>
              <h3>old list:</h3>
              <ul>
                <li> - banana</li>
                <li> - oranges</li>
              </ul>

              <h3>New list</h3>
              <ul>
                <li><strong> - apple </strong> <small> (+) </small></li>
                <li> - banana</li>
                <li> - oranges</li>
              </ul>
            </PanelContent>
            <PanelFooter
              cancelLabel="Exit without saving"
              onClose={() => this.setState({ showSidePanelBottom: false })}
            >
              <Button
                type="primary"
                text="Save changes"
                onClick={() => this.setState({ showSidePanelBottom: false })}
              />
            </PanelFooter>
          </Panel>
        </Drawer>

        <Drawer
          anchor="top"
          onClose={() => { this.setState({ showSidePanelTop: false }); }}
          open={this.state.showSidePanelTop}
        >
          <Panel>
            <PanelHeader title={'Review Changes'} />
            <PanelContent style={{ padding: '16px' }}>
              <h3>old list:</h3>
              <ul>
                <li> - banana</li>
                <li> - oranges</li>
              </ul>

              <h3>New list</h3>
              <ul>
                <li><strong> - apple </strong> <small> (+) </small></li>
                <li> - banana</li>
                <li> - oranges</li>
              </ul>
            </PanelContent>
            <PanelFooter
              cancelLabel="Exit without saving"
              onClose={() => this.setState({ showSidePanelTop: false })}
            >
              <Button
                type="primary"
                text="Save changes"
                onClick={() => this.setState({ showSidePanelTop: false })}
              />
            </PanelFooter>
          </Panel>
        </Drawer>
      </div>
    );
  }
}

export default ExampleWithPanel;
