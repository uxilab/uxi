import React, { Component } from 'react';
import TextField from './TextField';
import styled from 'styled-components';
import { IconButton, Button } from 'uxi/Button';
import { Merge } from 'uxi/Icons';
import { InputGroup } from 'uxi/Input';

const TextFieldWithIconUI = styled.div`
  disaply: flex;
  align-items: center;
`;

const FormUI = styled.form`
  display: flex,
`;

class TextFieldWithIcon extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { value, defaultValue } = this.props;
    const valueToInitStoreWith = value || defaultValue || '';
    this.setState({ value: valueToInitStoreWith });
  }

  handleChange(event) {
    const { value } = event.target;
    const { onChange } = this.props;

    this.setState({ value });

    if (onChange) { onChange(event); }
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = event.target.querySelector('input').value;
    const { onClick, onSubmit, onEnter } = this.props;
    if (onClick) { onClick(value); }
    if (onSubmit) { onSubmit(value); }
    if (onEnter) { onEnter(value); }
  }

  render() {
    const {
      icon,
      onChange,
      ...otherProps
    } = this.props;

    const inputProps = {
      ...otherProps,
    };

    return (
      <FormUI onSubmit={this.handleSubmit}>
        <InputGroup>
          <TextField {...inputProps} />
          <Button
            type="primary"
            style={{ minHeight: '100%' }}
            icon={icon}
          />
        </InputGroup>
      </FormUI>
    );
  }
}

TextFieldWithIcon.displayName = 'TextFieldWithIcon';

export default TextFieldWithIcon;
