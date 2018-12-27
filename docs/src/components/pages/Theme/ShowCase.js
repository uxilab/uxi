import React from 'react';
import ExampleButtonWithLoadingState from '../Button/ExampleButtonWithLoadingState';
import ExampleSimpleOutline from '../Button/OutlineButton/ExampleSimpleOutline';
import ExampleSimpleFlat from '../Button/FlatButton/ExampleSimpleFlat';
import ExampleSimpleWithWidth from '../Inputs/SelectInput/ExampleSimpleWithWidth';
import ExampleSearchForm from '../Inputs/SearchForm/ExampleSearchForm';
import ExampleCheckbox from '../Inputs/Checkbox/ExampleCheckbox';
import ExampleSimpleRadioGroup from '../Inputs/Radio/ExampleSimpleRadioGroup';
import ExampleWithPanel from '../Drawer/ExampleWithPanel';
import DialogPanelFSExample from '../Dialog/DialogPanelFSExample';

const ShowCase = () => (
  <div>
    <ExampleButtonWithLoadingState /> <br />
    <ExampleSimpleOutline /> <br />
    <ExampleSimpleFlat /> <br />
    <ExampleSimpleWithWidth /> <br />
    <ExampleSearchForm /> <br />
    <ExampleCheckbox /> <br />
    <ExampleSimpleRadioGroup /> <br />
    <ExampleWithPanel /> <br />
    <DialogPanelFSExample /> <br />
  </div>
);

export default ShowCase;
