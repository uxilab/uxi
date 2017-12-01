import React from 'react';
import DateTimeInput from './DateTimeInput';

const DateInput = props =>
  <DateTimeInput {...props} inputType="Date" />;

DateInput.displayName = 'DateInput';

export default DateInput;
