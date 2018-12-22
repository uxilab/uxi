import React, { Component } from 'react';
import Dialog from 'uxi/Dialog';
import { P, H3 } from 'uxi/Classic';
import Button from 'uxi/Button';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';

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
        <Dialog show={this.state.show}>
          <Panel onClose={() => this.setState({ show: false })}>
            <PanelHeader title="Panel title" />
            <PanelContent style={{ padding: '16px' }}>
              <H3>Lorem ipsum</H3>
              <P>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </P>
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
