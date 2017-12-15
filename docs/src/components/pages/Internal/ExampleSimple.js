import React, { Component } from 'react';
import Backdrop from 'uxi/internal/Backdrop';
import Dialog, { DialogHeader, DialogFooter } from 'uxi/Dialog';
import Button from 'uxi/Button';
import SlidePanel, { SlidePanelHeader, SlidePanelFooter } from 'uxi/SlidePanel';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => { this.setState({ show: true }); }}>
         Show Dialog
        </Button>
        <Button onClick={() => { this.setState({ showSidePanel: true }); }}>
         Show SidePanel
        </Button>
        <SlidePanel
          onClose={() => { this.setState({ showSidePanel: false }); }}
          open={this.state.showSidePanel}
        >
          <SlidePanelHeader title="Some Slide Title" />
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>
        <SlidePanel
          anchor="left"
          onClose={() => { this.setState({ showSidePanel: false }); }}
          open={this.state.showSidePanel}
        >
          <SlidePanelHeader title="Some Slide Title" />
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>
        <Dialog
          show={this.state.show}
          onClose={() => { this.setState({ show: false }); }}
        >
          <DialogHeader title="Some Title" />
          <div style={{ padding: '15px' }}>
            Some Dialog content
          </div>
          <DialogFooter>
            <Button type="primary">Save</Button>
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
}

export default ExampleSimple;
