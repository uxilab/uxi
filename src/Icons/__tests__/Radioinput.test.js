import React from 'react';
import Radioinput from '../Radioinput';

describe('Icon : <Radioinput />', () => {
  it('match snapshot', () => {
    expect(shallow(<Radioinput />)).toMatchSnapshot();
  });
});


