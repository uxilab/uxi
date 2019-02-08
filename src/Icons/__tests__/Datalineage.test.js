import React from 'react';
import Datalineage from '../Datalineage';

describe('Icon : <Datalineage />', () => {
  it('match snapshot', () => {
    expect(shallow(<Datalineage />)).toMatchSnapshot();
  });
});

