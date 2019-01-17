import React from 'react';
import Smileyneutral from '../Smileyneutral';

describe('Icon : <Smileyneutral />', () => {
  it('match snapshot', () => {
    expect(shallow(<Smileyneutral />)).toMatchSnapshot();
  });
});

