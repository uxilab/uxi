import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from './TextField';
import { Button } from '../Button';
import { Search } from '../Icons';
import InputGroup from '../List/InputGroup';

const FormUI = styled.form`
  display: flex;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
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
      fullWidth,
      ...otherProps
    } = this.props;

    const inputProps = {
      ...otherProps,
      onChange: this.handleChange,
    };

    const finalIcon = icon || <Search style={{ margin: 0 }} />;

    return (
      <FormUI fullWidth={fullWidth} onSubmit={this.handleSubmit}>
        <InputGroup fullWidth={fullWidth}>
          <TextField {...inputProps} style={{ margin: 0 }} />
          <Button
            type="primary"
            icon={finalIcon}
          />
        </InputGroup>
      </FormUI>
    );
  }
}

SearchForm.displayName = 'SearchForm';

export default SearchForm;
