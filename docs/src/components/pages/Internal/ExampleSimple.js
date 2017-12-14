import React, { Component } from 'react';
import Backdrop from 'uxi/internal/Backdrop';
import Modal from 'uxi/internal/Modal';
import Button from 'uxi/Button';
import SlidePanel from 'uxi/Panel/SlidePanel';

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
        <SlidePanel open={this.state.showSidePanel}>
          <div className="content of slide">
            <h1>TOTO</h1>
          </div>
        </SlidePanel>
        <Modal
          show={this.state.show}
          onClose={() => { this.setState({ show: false }); }}
        >
          <div style={{ zIndex: '14', width: '500px', margin: '15px', position: 'fixed', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff' }}>
            <div>
              <h1>TOTO</h1>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ExampleSimple;
