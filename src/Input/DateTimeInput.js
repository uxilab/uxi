import React from 'react';
import PropTypes from 'prop-types';

const pad = v => (v < 10 ? `0${v}` : v);

const styles = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '10px 5px',
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
      style={{ ...styles, ...('style' in props ? props.style : {}) }}
      type={inputType || 'date'}
      {...props}
      defaultValue={intialDateValue}
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


export default DateTimeInput;
