import React from 'react';
import Alert from '../Alert';

describe('Icon : <Alert />', () => {
  it('match snapshot', () => {
    expect(shallow(<Alert />)).toMatchSnapshot();
  });
});


