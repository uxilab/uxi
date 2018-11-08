import React from 'react';
import {
    generateFormHoc,
} from 'uxi-business';

const MyForm = generateFormHoc('FormWithPrevix', [
    {
      name: 'clientId',
      label: 'Team domain',
      sufix: '.cluedin.net',
      helpText: 'Enter your team\'s CluedIn domain.',
      autoFocus: true,
      placeholder: 'myteamdomain'
    }
]);

const FormWithSufix = () => {
  return (
    <MyForm
      onClick={(values) => { alert(JSON.stringify(values)); }}
      buttonLabel="Continue"
    />
  );
}

export default FormWithSufix;
