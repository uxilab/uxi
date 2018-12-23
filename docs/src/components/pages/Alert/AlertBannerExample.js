import React, { Component } from 'react';
import Alert from 'uxi/Alert';
import Button from 'uxi/Button';
import { P } from 'uxi/Classic';

class AlertBannerExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      show1: false,
      show2: false,
    }
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.setState({ show1: true }) } text="show A" />
        <br />
        <Button onClick={() => this.setState({ show2: true }) } text="show B" />

        {
          this.state.show1 && (
            <Alert isBanner >
              This is a banner Alert!
            </Alert>
          )
        }
        {
          this.state.show2 && (
            <Alert type="danger" isBanner>
              This is a banner Alert with too much text!
              Sunt reprehenderit incididunt occaecat laborum elit consequat reprehenderit.
              Velit nulla fugiat adipisicing proident aliqua culpa ex fugiat.
              Ipsum tempor nostrud amet officia consequat consectetur do labore.
              Incididunt culpa est irure nisi commodo adipisicing.
              Quis culpa ullamco est occaecat deserunt culpa occaecat.
              Officia elit qui ullamco do ipsum mollit aliquip sit excepteur.
              Elit deserunt magna pariatur deserunt culpa duis minim ex ad proident amet.
            </Alert>
          )
        }
    </div>
    )
  }
}

export default AlertBannerExample;
