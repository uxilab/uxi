import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../CodeExample';
import PropTypeDescription from '../../PropTypeDescription';
import MarkdownElement from '../../MarkDownElement';
import ReadmeText from './README.md';
import ExampleSimple from './ExampleSimple';
import ExampleSimpleCode from '!raw!./ExampleSimple';
import Code from '!raw!../../../../../src/Button/Button';

const descriptions = {
	simple: 'Multiple examples of Alerts. '
};

const AlertPage = () => (
	<div>
		<Title render={(previousTitle) => `Button - ${previousTitle}`}/>
		<MarkdownElement text={ReadmeText}/>
		<CodeExample
			title="Simple examples"
			description={descriptions.simple}
			code={ExampleSimpleCode}
		>
			<ExampleSimple />
		</CodeExample>
		<PropTypeDescription code={Code}/>
	</div>
);

export default AlertPage;
