import React from 'react';
import Checkbox from '../Checkbox';

describe('Icon : <Checkbox />', () => {
  it('match snapshot', () => {
    expect(shallow(<Checkbox />)).toMatchSnapshot();
  });
});


