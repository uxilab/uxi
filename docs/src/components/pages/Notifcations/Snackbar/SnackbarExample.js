import React, { Component } from 'react';
import Snackbar from 'uxi/Notifications/Snackbar';
import Toast from 'uxi/Notifications/Toast';
import Button from 'uxi/Button';


class SnackbarExample extends Component {
  constructor(props) {
    super(props);

    this.state = { things: [] };
  }

  render() {
    const { things } = this.state;

    return (
      <div>
        <Button
          text="push a toast"
          onClick={() => {
            this.setState({ things: [...this.state.things, 1] });
          }}
        />
        <Button
          text="clear All"
          onClick={() => {
            this.setState({ things: [] });
          }}
        />
        <br />
        <Snackbar>
          {
            things.map((thing, i) => (
              <Toast key={`${i}`}>
                hello world {i}
                {
                  i % 2 === 0
                    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    : null
                }
              </Toast>
            ))
          }
        </Snackbar>
      </div>
    );
  }
}

export default SnackbarExample;
