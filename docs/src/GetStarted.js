import React from 'react';
import MarkdownElement from './components/MarkdownElement/MarkdownElement';
import getStarted from '!raw-loader!./getStarted.md';

const GetStarted = props => {
  return (
    <div>
      <h2>Get started</h2>
      <MarkdownElement text={getStarted} />
    </div>
  )
}

export default GetStarted;
