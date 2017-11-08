import React from 'react';
import Help from '../Help';

describe('Icon : <Help />', () => {
  it('match snapshot', () => {
    expect(shallow(<Help />)).toMatchSnapshot();
  });
});


