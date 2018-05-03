import React from 'react';
import MarkdownElement from './components/MarkdownElement/MarkDownElement';
import getStarted from './getStartedDoc.md';

const GetStarted = props => {
  return (
    <div>
      <h2>Get started</h2>
      <MarkdownElement text={"getStarted"} />
    </div>
  )
}

export default GetStarted;