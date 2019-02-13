import React, { Component } from 'react';
import { Checkbox } from 'uxi/Input';
import withConfirmDialog from 'uxi/Dialog/withConfirmDialog';

const CheckboxWithConfirm = withConfirmDialog(Checkbox);

class ExampleCheckboxWithConfirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };
  }
  // bypassConfirmation
  render() {
    return (
      <CheckboxWithConfirm
        checked={this.state.checked}
        bypass={this.state.checked}
        confirmText="Are you sure you want to delete the entire database ?"
        confirmLabel="BLOW IT UP"
        type="error"
        onClick={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}

export default ExampleCheckboxWithConfirm;
