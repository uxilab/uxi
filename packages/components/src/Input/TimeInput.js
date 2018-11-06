import React from 'react';
import DateTimeInput from './DateTimeInput';

const TimeInput = props =>
  <DateTimeInput {...props} inputType="time" />;

TimeInput.displayName = 'TimeInput';

export default TimeInput;
