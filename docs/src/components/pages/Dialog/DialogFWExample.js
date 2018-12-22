import React, { Component } from 'react';
import Dialog from 'uxi/Dialog';
import Button from 'uxi/Button';

class DialogExample extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.setState({ show: true })}>
          show dialog
        </Button>
        <Dialog show={this.state.show} isFullWidth>
          <div style={{ padding: '16px' }}> yo </div>
          <Button onClick={() => this.setState({ show: false })}>
            close dialog
          </Button>
        </Dialog>
      </div>
    )
  }
}

export default DialogExample;
