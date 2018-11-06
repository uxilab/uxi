import React from 'react';
import Done from '../Done';

describe('Icon : <Done />', () => {
  it('match snapshot', () => {
    expect(shallow(<Done />)).toMatchSnapshot();
  });
});

