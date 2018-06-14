import React from 'react';
import Creditcard from '../Creditcard';

describe('Icon : <Creditcard />', () => {
  it('match snapshot', () => {
    expect(shallow(<Creditcard />)).toMatchSnapshot();
  });
});


