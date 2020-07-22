import React from 'react';
import Error from '../Error';

describe('Icon : <Error />', () => {
  it('match snapshot', () => {
    expect(shallow(<Error />)).toMatchSnapshot();
  });
});

