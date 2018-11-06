import React from 'react';
import Text from 'uxi/Text';
import RequiredField from './RequiredField';
import InputFieldGroup from './InputFieldGroup';

const FormDecorator = (Input, props) => field => (
  <div>
    <div>
      {
        !props.noLabel && props.label &&
        (
          <label>
            {props.label}
            {props && props.isRequired && <RequiredField />}
          </label>
        )
      }
    </div>
    {props.helpText &&
      <div style={{ marginBottom: '12px' }}>
        <Text type="caption">
          {props.helpText}
        </Text>
      </div>
    }
    {
      field.meta.asyncValidating && 'Loadingg!!!'
    }
    <div style={{ marginBottom: '16px' }}>
      {
        (props.prefix || props.sufix) && (
          <InputFieldGroup prefix={props.prefix} sufix={props.sufix}>
            <Input
              {...props}
              {...field}
              {...field.input}
              value={undefined}
              defaultValue={field.input.value}
              success={field.meta.touched && !field.meta.error}
              error={field.meta.touched && field.meta.error}
            />
          </InputFieldGroup>
        )
      }
      {
        (!props.prefix && !props.sufix) && (
          <Input
            {...props}
            {...field}
            {...field.input}
            value={undefined}
            defaultValue={field.input.value}
            success={field.meta.touched && !field.meta.error}
            error={field.meta.touched && field.meta.error}
          />
        )
      }
    </div>
  </div>
);

export default FormDecorator;
