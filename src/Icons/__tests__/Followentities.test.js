import React from 'react';
import Followentities from '../Followentities';

describe('Icon : <Followentities />', () => {
  it('match snapshot', () => {
    expect(shallow(<Followentities />)).toMatchSnapshot();
  });
});


