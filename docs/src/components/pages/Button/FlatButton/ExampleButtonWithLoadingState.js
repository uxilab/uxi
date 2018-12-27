import React, { Component } from 'react';
import { FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';

class ExampleButtonWithLoadingState extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1600);
  }

  render() {
    return (
      <List>
        <FlatButton
          onClick={this.onClick}
          message="Send"
          loading={this.state.loading}
          icon={<Upload />}
          iconPosition="after"
        />
        <FlatButton
          type="secondary"
          onClick={this.onClick}
          message="Send"
          loading={this.state.loading}
          icon={<Upload />}
          iconPosition="after"
        />
        <FlatButton
          type="primary"
          onClick={this.onClick}
          message="Send"
          loading={this.state.loading}
        />
      </List>
    );
  }
}

export default ExampleButtonWithLoadingState;
