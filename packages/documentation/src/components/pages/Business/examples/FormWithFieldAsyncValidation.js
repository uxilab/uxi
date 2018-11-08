import React from 'react';
import {
    generateFormHoc,
} from 'uxi-business';
import {
    Checkbox,
} from 'uxi/Input';

const asyncValidate = (values) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(values.username === 'toto') {
                reject({
                    username: 'Username is taken'
                });
            } else {
                resolve({});
            }
        }, 200);
    });
};

const MyForm = generateFormHoc('FormWithFIeldAsyncValidation', [
    {
      name: 'username',
      label: 'Username'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
    },
    {
      name: 'tos',
      label: 'I agree the TOS',
      Input: Checkbox,
      noLabel: true,
    },
], {
    asyncValidate,
    asyncChangeFields: ['username'],
});
  
const FormWithFieldAsyncValidation = () => {
  return (
    <MyForm
      onClick={(values) => { alert(JSON.stringify(values)); }}
    />
  );
}

export default FormWithFieldAsyncValidation;
