import React from 'react';
import {
    generateFormHoc,
} from 'uxi-business';
import { formValidation, withValidation } from 'uxi-business';
import { SelectInput } from 'uxi/Input';
const SelectInputWithValidation = withValidation(SelectInput);

const CustomSelect = ( props ) => (
    <div>
        <SelectInputWithValidation
            isFullWidth
            defaultValue={props.defaultValue || ""}
            style={{
                background:'#fff'
            }}
            meta={props.meta}
            onChange={(e, value) => {
                props.onChange(value);
            }}
        >
            <div style={{ padding: '5px' }} value="">
                Select data center location
            </div>
            {
            props.dataShards.map((dataLocation, i) => (
                <div
                    style={{ padding: '5px' }}
                    key={dataLocation.ShardName}
                    value={dataLocation.ShardName}
                >
                {dataLocation.Name}, {dataLocation.Location}
                </div>
            ))
            }
        </SelectInputWithValidation>
    </div>
);

const MyForm = generateFormHoc('FormWithPrevix', [
    {
      name: 'clientId',
      label: 'Team domain',
      sufix: '.cluedin.net',
      helpText: 'Keep it simple and in one word (only letters and numbers are allowed, max. 30 characters)',
      placeholder: 'mycompanyname',
      validate: [formValidation.required]
    },
    {
      name: 'dataShard',
      label: 'Data Center Location',
      helpText: 'Choose where you want your instance of the Cluedin engine to be installed.',
      Input: CustomSelect,
      dataShards: [{
        Name: 'us-01',
        Location: 'Nevada, USA',
        ShardName: '0200f2jf0jf'
      }, {
        Name: 'us-02',
        Location: 'Florida, USA',
        ShardName: '020222jf0jf'
      }],
      validate: [formValidation.required]
    },
]);

const FormWithSufix = () => {
  return (
    <MyForm
      onClick={(values) => { alert(JSON.stringify(values)); }}
      buttonLabel="NEXT →"
    />
  );
}

export default FormWithSufix;
