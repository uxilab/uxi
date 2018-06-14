import React from 'react';
import Cloud from '../Cloud';

describe('Icon : <Cloud />', () => {
  it('match snapshot', () => {
    expect(shallow(<Cloud />)).toMatchSnapshot();
  });
});


