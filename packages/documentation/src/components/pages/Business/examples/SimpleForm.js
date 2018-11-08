import React from 'react';
import {
    generateFormHoc,
} from 'uxi-business';

const MyForm = generateFormHoc('SimpleForm', [
    {
      name: 'firstName',
      label: 'First Name'
    },
    {
      name: 'lastName',
      label: 'Last Name'
    },
]);
  
const SimpleForm = () => {
  return (
    <MyForm
      initialValues={{ 'test': 'oefkeofkeofkeofk' }}
      onClick={(values) => { alert(JSON.stringify(values)); }}
    />
  );
}

export default SimpleForm;
