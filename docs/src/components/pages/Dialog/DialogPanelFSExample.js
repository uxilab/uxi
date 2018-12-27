import React, { Component } from 'react';
import Dialog from 'uxi/Dialog';
import { P, H3 } from 'uxi/Classic';
import Button from 'uxi/Button';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import ExampleSimpleTableWithSpecialCell from '../Table/ExampleSimpleTableWithSpecialCell';


class DialogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showSmall: false,
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ showSmall: true })}>
          show fullscreen dialog with panel
        </Button>
        <br />
        <Button onClick={() => this.setState({ show: true })}>
          show small dialog with panel
        </Button>

        <Dialog show={this.state.show}>
          <Panel onClose={() => this.setState({ show: false })}>
            <PanelHeader title="Panel title" />
            <PanelContent style={{ padding: '16px' }}>

              <ExampleSimpleTableWithSpecialCell />
              <ExampleSimpleTableWithSpecialCell />
              <ExampleSimpleTableWithSpecialCell />
              <ExampleSimpleTableWithSpecialCell />

            </PanelContent>
            <PanelFooter>
              <Button onClick={() => console.log('clicked')}>
                action
              </Button>
            </PanelFooter>
          </Panel>
        </Dialog>

        <Dialog show={this.state.showSmall} isFullScreen>
          <Panel onClose={() => this.setState({ showSmall: false })} >
            <PanelHeader title="Panel title" />
            <PanelContent style={{ padding: '16px' }}>

              <ExampleSimpleTableWithSpecialCell />
              <ExampleSimpleTableWithSpecialCell />
              <ExampleSimpleTableWithSpecialCell />
              <ExampleSimpleTableWithSpecialCell />

            </PanelContent>
            <PanelFooter>
              <Button onClick={() => console.log('clicked')}>
                action
              </Button>
            </PanelFooter>
          </Panel>
        </Dialog>
      </div>
    );
  }
}

export default DialogExample;
