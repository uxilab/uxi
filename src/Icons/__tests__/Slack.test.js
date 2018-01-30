import React from 'react';
import Slack from '../Slack';

describe('Icon : <Slack />', () => {
  it('match snapshot', () => {
    expect(shallow(<Slack />)).toMatchSnapshot();
  });
});

