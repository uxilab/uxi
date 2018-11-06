import React, { Component } from 'react';
import ConfirmDialog from './ConfirmDialog';

const WithConfirmDialogHOC = (Comp) => {
  class WithConfirmDialog extends Component {
    constructor(props) {
      super(props);

      this.state = { showDialog: false };

      this.handleConfirm = this.handleConfirm.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
    }

    handleConfirm() {
      const { onClick } = this.props;
      this.setState({ showDialog: false });
      if (onClick) {
        onClick();
      }
    }

    handleCancel() {
      const { onCancel } = this.props;
      this.setState({ showDialog: false });
      if (onCancel) {
        (
          onCancel()
        );
      }
    }

    render() {
      const {
        confirmText,
        confirmLabel,
        cancelLabel,
      } = this.props;

      const { showDialog } = this.state;

      return ([
        <Comp {...this.props} onClick={() => this.setState({ showDialog: true })} />,
        <ConfirmDialog
          show={showDialog}
          onConfirm={this.handleConfirm}
          onCancel={this.handleCancel}
          text={confirmText}
          confirmLabel={confirmLabel}
          cancelLabel={cancelLabel}
        />,
      ]
      );
    }
  }

  return WithConfirmDialog;
};

export default WithConfirmDialogHOC;
