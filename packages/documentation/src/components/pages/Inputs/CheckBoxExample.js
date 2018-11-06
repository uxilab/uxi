import React from 'react';
import { Checkbox } from 'uxi/Input';
import { List } from 'uxi/List';

const CheckBoxExample = ({ style, handleFormChange }) => {
    const formDescriptor = [
    {
      name: 'pre-existing',
      label: "test 1",
      onChange: handleFormChange,
    }, {
      name: 'first-request',
      label: "test 2",
      onChange: handleFormChange,
    }, {
      name: 'is-eu-resident',
      label: "test 3",
      onChange: handleFormChange,
    }, {
      name: 'is-properly-identified',
      label: "test 4",
      onChange: handleFormChange,
    }, {
      name: 'has-consent',
      label: "test 5",
      onChange: handleFormChange,
    },
  ]
  return (
    <div style={style}>
      <List type="vertical">
        {formDescriptor.map(({ name, onChange, label }) => (
          <Checkbox
            key={name}
            name={name}
            label={label}
            onChange={onChange}
          />
        ))}
      </List>
    </div>
  );
};

CheckBoxExample.displayName = 'CheckBoxExample';

export default CheckBoxExample;
