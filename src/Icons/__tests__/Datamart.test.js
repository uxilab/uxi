import React from 'react';
import Datamart from '../Datamart';

describe('Icon : <Datamart />', () => {
  it('match snapshot', () => {
    expect(shallow(<Datamart />)).toMatchSnapshot();
  });
});

