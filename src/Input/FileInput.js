import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  // Done as SuccessIcon,
  // Issue as ErrorIcon,
  Upload as UploadIcon,
} from '../Icons';
import Button from '../Button';
// import { palette } from '../Theme/palette';

const FileInputWrapperUI = styled.div`
  display: inline-block;
  position: relative;
  /* outline: ${({ focussed }) => (focussed ? '-webkit-focus-ring-color auto 5px' : 'none')}; */
`;

const FileInputLabelUI = styled.label`
  display: block;
  padding: 0;
  width: 100%;
  cursor: pointer;
  /* &:hover  {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
  }; */
`;

const FileInputUI = styled.input.attrs((/* props */) => ({
  type: 'file',
}))`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

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
        // id,
        onChange,
        multiple,
        // success,
        // error,
        label,
      },
      state: {
        focussed,
      },
    } = this;

    /*
    const stateIcon = error // eslint-disable-line no-nested-ternary
      ? <ErrorIcon size="16" color={palette.semantic.error} />
      : (success ? <SuccessIcon size="16" color={palette.semantic.success} /> : null);
    */
    const finalLabel = label || 'UPLOAD';
    // const finalId = id || finalLabel; // TODO => uuid

    return (
      <FileInputWrapperUI
        focussed={focussed}
      >
        <FileInputLabelUI
          tabIndex="-1"
        >
          {/*
          the input is teh element getting the focus in this case,
          so avoid focus confiusion bny disableing focus on button
         */}
          <Button inert tabIndex="-1">
            <UploadIcon
              size="16" style={{ paddingRight: '8px', marginBottom: '-2px' }}
            />
            {finalLabel }
            <FileInputUI
              onFocus={(...a) => {
                this.setFocus(...a);
              }}
              onBlur={(...a) => {
                this.setFocus(...a);
              }}
              {...props}
              multiple={multiple}
              onChange={onChange}
              // onFocus={this.setFocus}
              // onBlur={this.setBlur}
            />
          </Button>
        </FileInputLabelUI>
      </FileInputWrapperUI>
    );
  }
}


FileInput.propTypes = {
};

FileInput.defaultProps = {
  multiple: false,
};

export default FileInput;
