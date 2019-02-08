import React from 'react';
import Dataretention from '../Dataretention';

describe('Icon : <Dataretention />', () => {
  it('match snapshot', () => {
    expect(shallow(<Dataretention />)).toMatchSnapshot();
  });
});

