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
  Checkbox,
} from 'uxi/Input';
import {
  Loader
} from 'uxi/Indicator';
import Button from 'uxi/Button';
import FormDecoratorHoc from '../../form/FormDecoratorHoc';
import { required, email } from '../../form/validation';

const EmailInput = FormDecoratorHoc(TextField, {
  label: (
    <FormattedMessage
      id="uxi-business-Email"
      defaultMessage="Email"
    />
  ),
  helpText: (
    <FormattedMessage
      id="uxi-business-forgotPasswordExplanation"
      defaultMessage="We will email you a reset link."
    />
  ),
});


const ForgotPasswordForm = ({
    isFetching,
    onClick,
    handleSubmit,
    pristine,
    submitting,
    loginLink,
    loginUrl,
  }) => (
  <div
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        handleSubmit(onClick)();
      }
    }}
    >
    <div>
      <Field
          name="email"
          type="email"
          autoFocus
          component={EmailInput}
          validate={[required, email]}
        />
      </div>
      <div style={{ paddingTop: '16px' }}>
          <Button
            disabled={pristine || submitting || isFetching}
            isFullWidth
            icon={ isFetching ? <Loader /> : null }
            type="primary"
            onClick={handleSubmit(onClick)}
            message={
              <FormattedMessage
                id="uxi-business-sendMagicLink"
                defaultMessage="Send magic email"
              />
            }
          />
        </div>
        <div style={{ paddingTop: '16px' }}>
            {
                !loginLink &&
                (
                  <a href={ loginUrl ? loginUrl : '/signin' }>
                    <FormattedMessage
                      id="uxi-business-backtoLogin"
                      defaultMessage="Return to sign in"
                    />
                  </a>
                )
            }
            {loginLink && loginLink}
        </div>
  </div>
);

export default reduxForm({ form: 'uxi-business-forgot' })(ForgotPasswordForm);
