import React, { Component } from 'react';
import TextField from './TextField';
import styled from 'styled-components';
import { IconButton, Button } from 'uxi/Button';
import { Search } from 'uxi/Icons';
import { InputGroup } from 'uxi/Input';

const TextFieldWithIconUI = styled.div`
  disaply: flex;
  align-items: center;
`;

const FormUI = styled.form`
  display: flex,
`;

class SearchForm extends Component {
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

    if (onChange) { onChange(event, value); }
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = event.target.querySelector('input').value;
    const { onClick, onSubmit, onEnter } = this.props;

    const fakeEvent = {
      target: { value },
      currentTarget: { value },
    };

    if (onClick) { onClick(fakeEvent, value); }
    if (onSubmit) { onSubmit(fakeEvent, value); }
    if (onEnter) { onEnter(fakeEvent, value); }
  }

  render() {
    const {
      icon,
      onChange,
      ...otherProps
    } = this.props;

    const inputProps = {
      ...otherProps,
      onChange: this.handleChange,
    };

    const finalIcon = icon || <Search style={{ margin: 0 }} />;

    return (
      <FormUI onSubmit={this.handleSubmit}>
        <InputGroup>
          <TextField {...inputProps} />
          <Button
            type="primary"
            style={{ minHeight: '100%' }}
            icon={finalIcon}
          />
        </InputGroup>
      </FormUI>
    );
  }
}

SearchForm.displayName = 'SearchForm';

export default SearchForm;
