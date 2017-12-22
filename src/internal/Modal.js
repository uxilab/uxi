import React from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import Fade from './Fade';
import Backdrop from './Backdrop';
import Portal from './Portal';

export const styles = {
  root: {
  },
  hidden: {
    visibility: 'hidden',
  },
};

class Modal extends React.Component {
  handleDocumentKeyUp = (event) => {
    if (keycode(event) !== 'esc') {
      return;
    }

    const { onEscapeKeyUp, onClose, ignoreEscapeKeyUp } = this.props;

    if (onEscapeKeyUp) {
      onEscapeKeyUp(event);
    }

    if (onClose && !ignoreEscapeKeyUp) {
      onClose(event);
    }
  };

  handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    const { onBackdropClick, onClose, ignoreBackdropClick } = this.props;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose && !ignoreBackdropClick) {
      onClose(event);
    }
  };

  renderBackdrop() {
    const {
      BackdropComponent,
      BackdropInvisible,
      BackdropTransitionDuration,
      show,
    } = this.props;
    console.log('this.props', this.props);
    return (
      <Fade appear in={show} timeout={BackdropTransitionDuration}>
        <BackdropComponent
          invisible={BackdropInvisible}
          onClick={this.handleBackdropClick}
        />
      </Fade>
    );
  }

  render() {
    const {
      children,
      disableBackdrop,
      show,
    } = this.props;

    if (!show) {
      return null;
    }

    return (
      <Portal open >
        <div
          style={styles.root}
          ref={(node) => {
            this.modal = node;
          }}
        >
          <div className="modalContent">{children}</div>
          {!disableBackdrop &&
            (show) &&
            this.renderBackdrop()}
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = {
  BackdropComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  BackdropInvisible: PropTypes.bool,
  BackdropTransitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
  disableBackdrop: PropTypes.bool,
  ignoreBackdropClick: PropTypes.bool,
  ignoreEscapeKeyUp: PropTypes.bool,
  onBackdropClick: PropTypes.func,
  onClose: PropTypes.func,
  onEscapeKeyUp: PropTypes.func,
  show: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  BackdropComponent: Backdrop,
  BackdropInvisible: false,
  BackdropTransitionDuration: 300,
  disableBackdrop: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
};

export default Modal;
