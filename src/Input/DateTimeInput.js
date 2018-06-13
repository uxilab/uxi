import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputUI = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #dcdcdc;
  padding: 6.75px 6.75px 6.75px 6.75px;
`;

const pad = v => (v < 10 ? `0${v}` : v);


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
    <InputUI
      type={inputType || 'date'}
      {...props}
      defaultValue={intialDateValue}
      style={{ ...('style' in props ? props.style : {}) }}
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
