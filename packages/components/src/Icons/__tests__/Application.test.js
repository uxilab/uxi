import React from 'react';
import Application from '../Application';

describe('Icon : <Application />', () => {
  it('match snapshot', () => {
    expect(shallow(<Application />)).toMatchSnapshot();
  });
});

