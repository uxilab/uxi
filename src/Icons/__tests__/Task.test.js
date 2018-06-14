import React from 'react';
import Task from '../Task';

describe('Icon : <Task />', () => {
  it('match snapshot', () => {
    expect(shallow(<Task />)).toMatchSnapshot();
  });
});


