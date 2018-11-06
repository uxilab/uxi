import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import {
  reduxForm,
  Field,
} from 'redux-form';
import {
  TextField,
} from 'uxi/Input';
import {
  Loader
} from 'uxi/Indicator';
import Button from 'uxi/Button';
import FormDecoratorHoc from './FormDecoratorHoc';

const genreateFields = (fields = []) => {
  return fields.map(
    (field) => ({
      name: field.name,
      type: field.type,
      autoFocus: field.autoFocus,
      validate: (field.validate || []),
      component: FormDecoratorHoc(field.Input || TextField, field),
    })
  );
};

const generateFormHoc = (formName, fields = [], options = {}) => {
  const generatedFields = genreateFields(fields) || [];
  
  const GeneratedForm = ({
    isFetching,
    buttonLabel,
    onClick,
    handleSubmit,
    pristine,
    submitting,
  }) => (
    <div
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleSubmit(onClick)();
        }
      }}
    >
      {
        generatedFields.map((field) => {
          return (
            <Field
              key={field.name}
              name={field.name}
              type={field.type || 'text'}
              autoFocus={field.autoFocus || false}
              component={field.component}
              validate={field.validate || []}
            />
          );
        })
      }
      <div style={{ display: 'flex', justifyContent:'flex-end' }}>
        <Button
          disabled={pristine || submitting || isFetching}
          icon={ isFetching ? <Loader /> : null }
          type="primary"
          onClick={handleSubmit(onClick)}
          message={buttonLabel || 'Submit'}
        />
      </div>
    </div>
  );

  return reduxForm({ form: formName, ...options })(GeneratedForm);
};

export default generateFormHoc;
