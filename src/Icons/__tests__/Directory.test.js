import React from 'react';
import Directory from '../Directory';

describe('Icon : <Directory />', () => {
  it('match snapshot', () => {
    expect(shallow(<Directory />)).toMatchSnapshot();
  });
});


