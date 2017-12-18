import React from 'react';
import Button from './Button';
import radium from 'radium';

const styles = {
  backgroundColor: 'rgba(255, 255, 255, 0) !important',
  borderColor: 'transparent',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0) !important',
    borderColor: 'transparent',
  },
  ':active': {
    backgroundColor: 'rgba(255, 255, 255, 0) !important',
    borderColor: 'transparent',
  },
};

const FlatButton = props => (
  <Button
    {...props}
    style={styles}
  />
);

FlatButton.displayName = 'FlatButton';

export default radium(FlatButton);
