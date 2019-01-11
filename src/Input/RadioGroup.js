import React, { Component } from 'react';
// import type { Node } from 'react';
// import FormGroup from '../Form/FormGroup';
// import { find } from '../utils/helpers';

class RadioGroup extends Component {
  // state = {
  //   selectedValue: null,
  // }
  componentWillMount() {
    this.isControlled = this.props.value !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      // check for defaultValue
      const { defaultValue } = this.props;
      this.setState({
        selectedValue: (defaultValue !== undefined ? defaultValue : null),
      });
    }
  }

  radios = [];

  focus = () => {
    if (!this.radios || !this.radios.length) {
      return;
    }

    const focusRadios = this.radios.filter(n => !n.disabled);

    if (!focusRadios.length) {
      return;
    }

    const selectedRadio = this.radios.find(n => n.checked);

    if (selectedRadio) {
      selectedRadio.focus();
      return;
    }

    focusRadios[0].focus();
  }

  handleRadioChange = (event/* , checked */) => {
    this.setState({
      selectedValue: event.target.value,
    });

    if (this.props.onChange) {
      this.props.onChange(event, event.target.value);
    }
  }

  render() {
    const { children, name, value, onChange, ...other } = this.props;
    this.radios = [];

    const selectedValue = this.isControlled ? value : this.state.selectedValue;

    return (
      <div
        role="radiogroup"
        {...other}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }

          const checked = selectedValue === child.props.value;

          return React.cloneElement(child, {
            ...child.props,
            key: index,
            name,
            // inputRef: (node) => {
            //   if (node) {
            //     this.radios.push(node);
            //   }
            // },
            checked,
            onChange: (e) => {
              this.handleRadioChange(e);
              if (child.props.onChange) {
                child.props.onChange(e);
              }
            },
          });
        })}
      </div>
    );
  }
}

export default RadioGroup;
