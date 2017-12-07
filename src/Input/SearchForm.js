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

class SearchForm extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { value, defaultValue } = this.props;
    const valueToInitStoreWith = value || defaultValue || '';// || value === '' ? value : '';
    this.setState({ value: valueToInitStoreWith });
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    const { onClick, onSubmit } = this.props;
    const { value } = this.state;
    if (onClick) { onClick(value); }
    if (onSubmit) { onSubmit(value); }
  }

  render() {
    const {
      icon,
      // onClick,
      onChange,
      // value,
      ...otherProps
    } = this.props;

    const inputProps = {
      ...otherProps,
      // ...{ onChange: this.handleChange },
    };

    return (
      <InputGroup>
        <form onSubmit={this.handleSubmit}>
          <TextField {...inputProps} />
          <Button
            type="primary"
            style={{ height: '100%' }}
            icon={icon}
          />
        </form>
      </InputGroup>
    );
  }
}

SearchForm.displayName = 'SearchForm';

export default SearchForm;
