import React from 'react';
import Language from '../Language';

describe('Icon : <Language />', () => {
  it('match snapshot', () => {
    expect(shallow(<Language />)).toMatchSnapshot();
  });
});


