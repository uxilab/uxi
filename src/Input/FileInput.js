import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Done as SuccessIcon,
  Issue as ErrorIcon,
  Upload as UploadIcon,
} from '../Icons';
import { Button } from '../Button';
import { palette } from '../Theme/palette';

const { semantic } = palette;

const FileInputWrapperUI = styled.div`
  display: inline-block;
  position: relative;
  outline: ${({ focussed }) => focussed ? '-webkit-focus-ring-color auto 5px' : 'none'}
`;

const FileInputLabelUI = styled.label`
  /* padding: '8px 16px', */
  padding: 0;
  width: '100%';
  cursor: 'pointer';
  &:hover  {
    outline: '1px dotted #000';
    outline: '-webkit-focus-ring-color auto 5px';
  },
`;

const FileInputUI = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    z-index: -1;
`;

const styles = {
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
      <FileInputWrapperUI focussed={focussed}>
        <FileInputUI
          {...props}
          type="file"
          onChange={onChange}
          id={finalLabel}
          onFocus={this.setFocus}
          onBlur={this.setBlur}
        />
        <Button>
          <FileInputLabelUI htmlFor={finalLabel}>
            <UploadIcon size="16" style={{ paddingRight: '8px', marginBottom: '-2px' }} />
            {finalLabel }
          </FileInputLabelUI>
        </Button>
      </FileInputWrapperUI>
    );
  }
}


FileInput.propTypes = {
};

FileInput.defaultProps = {
};

export default FileInput;
