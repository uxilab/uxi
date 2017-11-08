import React from 'react';
import Spreadsheet from '../Spreadsheet';

describe('Icon : <Spreadsheet />', () => {
  it('match snapshot', () => {
    expect(shallow(<Spreadsheet />)).toMatchSnapshot();
  });
});


