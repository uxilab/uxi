import React from 'react';
import ReacDOM from 'react-dom';
import RAWReadme from '!raw-loader!./README.md';
import MarkdownElement from './MarkdownElement';

ReacDOM.render(<MarkdownElement text={RAWReadme} />, document.getElementById('root'));
