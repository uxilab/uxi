import React from 'react';
import Skill from '../Skill';

describe('Icon : <Skill />', () => {
  it('match snapshot', () => {
    expect(shallow(<Skill />)).toMatchSnapshot();
  });
});


