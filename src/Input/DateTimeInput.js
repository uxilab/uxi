import React from 'react';
import PropTypes from 'prop-types';

const pad = v => (v < 10 ? `0${v}` : v);

const styles = {
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '3px',
  border: '1px solid #dcdcdc',
  padding: '6.75px 6.75px 6.75px 6.75px',

};
const DateTimeInput = (props) => {
  let intialDateValue = null;
  const { inputType } = props;
  if (props.defaultValue) {
    const initialDateValueAsDate = new Date(props.defaultValue);// .toISOString();

    intialDateValue = props.defaultValue
      ? `${pad(initialDateValueAsDate.getFullYear())}-${
        pad(initialDateValueAsDate.getMonth())}-${
        pad(initialDateValueAsDate.getDate())}`
      : '';
  }

  return (
    <input
      type={inputType || 'date'}
      {...props}
      defaultValue={intialDateValue}
      style={{ ...styles, ...('style' in props ? props.style : {}) }}
    />
  );
};

DateTimeInput.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};

DateTimeInput.defaultProps = {
  defaultValue: null,
};

DateTimeInput.displayName = 'DateTimeInput';

export default DateTimeInput;
