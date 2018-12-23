import React, { Component } from 'react';
import Dialog from 'uxi/Dialog';
import Button from 'uxi/Button';
import { Flex } from 'uxi/Layout';

class DialogFSExample extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.setState({ show: true })}>
          show full screen dialog
        </Button>
        <Dialog show={this.state.show} isFullScreen>
          <div style={{ padding: '16px' }}> yo </div>
          <Button onClick={() => this.setState({ show: false })}>
            close dialog
          </Button>
        </Dialog>
      </div>
    )
  }
}

export default DialogFSExample;
