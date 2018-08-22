import React, { Component } from 'react';
import uuid from 'uuid/v4';
import CompactSlide from 'uxi/internal/CompactSlide';
import Alert from 'uxi/Alert';
import Button from 'uxi/Button';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: 'top',
      direction: 'bottom',
      notifs: [],
    };

    this.pushNotif = this.pushNotif.bind(this);
  }

  getNotif = id => ({
    id,
    notif: (
      <Alert
        onClose={() => this.removeNotif(id)}
        type="error"
        id={id}
      >
        Some Error {id}
      </Alert>
    ),
  })

  pushNotif() {
    this.setState({
      notifs: this.state.notifs.concat([this.getNotif(uuid().slice(0, 7))]),
    });
  }

  removeNotif(id) {
    this.setState({
      notifs: this.state.notifs.filter(x => x.id !== id),
    });
  }

  render() {
    const { notifs, anchor, direction } = this.state;

    return (
      <div>
        <h1>SnackBar kinda of thing</h1>
        <Button text="push notif" onClick={this.pushNotif} />
        <Button text="clear all notifs" onClick={() => this.setState({ notifs: [] })} />

        <h3>Set anchor</h3>
        <Button text="top" onClick={() => this.setState({ anchor: 'top' })} />
        <Button text="top-left" onClick={() => this.setState({ anchor: 'top-left' })} />
        <Button text="top-right" onClick={() => this.setState({ anchor: 'top-right' })} />
        <Button text="bottom" onClick={() => this.setState({ anchor: 'bottom' })} />
        <Button text="bottom-left" onClick={() => this.setState({ anchor: 'bottom-left' })} />
        <Button text="bottom-right" onClick={() => this.setState({ anchor: 'bottom-right' })} />

        <h3>Set direction</h3>
        <Button text="top" onClick={() => this.setState({ direction: 'top' })} />
        <Button text="bottom" onClick={() => this.setState({ direction: 'bottom' })} />
        <Button text="left" onClick={() => this.setState({ direction: 'left' })} />
        <Button text="right" onClick={() => this.setState({ direction: 'right' })} />

        <h3>Rules</h3>
        <strong>anchor:</strong> {anchor}<br />
        <strong>direction:</strong> {direction}

        <CompactSlide anchor={anchor} direction={direction} inAttr={notifs.length > 0}>
          {notifs.map(({ notif }) => notif)}
        </CompactSlide>
      </div>
    );
  }
}

export default ExampleSimple;
