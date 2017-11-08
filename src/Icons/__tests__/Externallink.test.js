import React from 'react';
import Externallink from '../Externallink';

describe('Icon : <Externallink />', () => {
  it('match snapshot', () => {
    expect(shallow(<Externallink />)).toMatchSnapshot();
  });
});


