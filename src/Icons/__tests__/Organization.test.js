import React from 'react';
import Organization from '../Organization';

describe('Icon : <Organization />', () => {
  it('match snapshot', () => {
    expect(shallow(<Organization />)).toMatchSnapshot();
  });
});


