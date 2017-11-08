import React from 'react';
import Sourcebranch from '../Sourcebranch';

describe('Icon : <Sourcebranch />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sourcebranch />)).toMatchSnapshot();
  });
});


