import React, { Component } from 'react';
import Dialog from 'uxi/Dialog';
import { P, H3 } from 'uxi/Classic';
import Button from 'uxi/Button';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import ExampleSimpleTableWithSpecialCell from '../Table/ExampleSimpleTableWithSpecialCell'


class DialogExample extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.setState({ show: true })}>
          show dialog with panel
        </Button>
        <Dialog show={this.state.show} isFullScreen>
          <Panel onClose={() => this.setState({ show: false })} ertg='srg'>
            <PanelHeader title="Panel title" />
            <PanelContent style={{ padding: '16px' }}>

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
    )
  }
}

export default DialogExample;
