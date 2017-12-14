import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {
  Done as SuccessIcon,
  Issue as ErrorIcon,
  Upload as UploadIcon,
} from '../Icons';
import { Button } from '../Button';
import { palette } from '../Theme/palette';

const { semantic } = palette;

const styles = {
  wrapper: {
    position: 'relative',
  },
  innerWrapper: {
  },
  input: {
    width: '0.1px',
    height: '0.1px',
    opacity: '0',
    position: 'absolute',
    zIndex: '-1',
  },
  label: {
    width: '100%',
    cursor: 'pointer',
    padding: '8px 16px',
    ':hover': {
      outline: '1px dotted #000',
      outline: '-webkit-focus-ring-color auto 5px', // eslint-disable-line no-dupe-keys
    },
  },
};

const getDynamicStyles = focussed => ({
  outline: focussed ? '1px dotted #000' : 'none',
  outline: focussed ? '-webkit-focus-ring-color auto 5px' : 'none', // eslint-disable-line no-dupe-keys
});
/* eslint-disable no-nested-ternary */

/* eslint-disable jsx-a11y/label-has-for */
class FileInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focussed: false,
    };
    this.setBlur = this.setBlur.bind(this);
    this.setFocus = this.setFocus.bind(this);
  }

  setFocus() {
    this.setState({ focussed: true });
  }

  setBlur() {
    this.setState({ focussed: false });
  }

  render() {
    const {
      props,
      props: {
        onChange,
        style,
        success,
        error,
        label,
      },
      state: {
        focussed,
      },
    } = this;

    const stateIcon = error // eslint-disable-line no-nested-ternary
      ? <ErrorIcon size="16" color={palette.semantic.error} />
      : (success ? <SuccessIcon size="16" color={palette.semantic.success} /> : null);

    const inputStyles = { ...styles.input, ...style };
    const finalLabel = label || 'UPLOAD';

    return (
      <div style={{ ...styles.wrapper }}>
        <span style={{ ...getDynamicStyles(focussed) }}>
          <input
            {...props}
            type="file"
            style={{ ...inputStyles }}
            onChange={onChange}
            id={finalLabel}
            onFocus={this.setFocus}
            onBlur={this.setBlur}
          />
          <Button style={{ paddingLeft: 0, paddingRight: 0 }}>
            <label htmlFor={finalLabel} style={{ ...styles.label }}>
              <UploadIcon size="16" style={{ paddingRight: '8px', marginBottom: '-2px' }} />
              {finalLabel }
            </label>
          </Button>

          {/* Error Message/node */}
          <div style={styles.errorWrapper}>
            {error}
          </div>

          {/* state icon (succes/error/none) */}
          <div style={styles.stateIconWrapper}>
            {stateIcon}
          </div>
        </span>
      </div>
    );
  }
}


FileInput.propTypes = {
};

FileInput.defaultProps = {
};

export default Radium(FileInput);
