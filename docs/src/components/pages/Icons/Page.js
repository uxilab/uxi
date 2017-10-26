import React from 'react';
// import Title from 'react-title-component';
// import CodeExample from '../../CodeExample';
// import PropTypeDescription from '../../PropTypeDescription';
// import MarkdownElement from '../../MarkdownElement/MarkDownElement';
// import readmeText from './README.md';
import IconsExample from './Icons';
import ExampleSimple from './ExampleSimple';
// import ExampleSimpleCode from '!raw!./ExampleSimple';
// import IconsCode from '!raw!./ExampleSimple';
// import OrganizationCode from '!raw!../../../../../src/Icons/Organization';
// import SvgIconCode from '!raw!../../../../../src/SvgIcon';


const descriptions = {
  simple: 'Cluedin-ui Icons. ',
};

export const Page = () => (
  <div>
    {/* <Title render={(previousTitle) => `Icons - ${previousTitle}`} /> */}
    {/* <MarkdownElement text={readmeText} /> */}
    {/* <CodeExample
      title="Frame"
      description={descriptions.simple}
      code={ExampleSimpleCode}
    > */}
    <ExampleSimple />
    {/* </CodeExample> */}
    <IconsExample />
    {/* <PropTypeDescription code={SvgIconCode} /> */}
  </div>
);

export default Page;
