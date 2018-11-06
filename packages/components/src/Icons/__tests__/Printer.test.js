import React from 'react';
import Printer from '../Printer';

describe('Icon : <Printer />', () => {
  it('match snapshot', () => {
    expect(shallow(<Printer />)).toMatchSnapshot();
  });
});

