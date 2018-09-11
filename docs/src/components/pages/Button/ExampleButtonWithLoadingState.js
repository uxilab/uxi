import React, { Component } from 'react';
import { Button } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';

class ExampleSimpleFlat extends Component {
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
        <Button
          type="primary"
          onClick={this.onClick}
          message="Send"
          loading={this.state.loading}
        />
        <Button
          onClick={this.onClick}
          message="Send"
          loading={this.state.loading}
          icon={<Upload />}
          iconPosition="after"
        />
        <Button
          type="secondary"
          onClick={this.onClick}
          message="Send"
          loading={this.state.loading}
          icon={<Upload />}
          iconPosition="after"
        />
      </List>
    );
  }
}

export default ExampleSimpleFlat;
