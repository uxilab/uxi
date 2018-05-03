import React from 'react';
import MarkdownElement from './components/MarkdownElement/MarkDownElement';
import getStarted from './getStartedDoc.md';
import { PageWithMenu } from 'uxi/Page';

const pageWithMenuStyles = { marginBottom: '64px', marginTop: '110px', marginLeft: '45px', marginRight: '45px', borderRadius: '5px', padding: '30px 15px', background: '#fff', overflow: 'visible' }

const GetStarted = props => {
  return (
    <PageWithMenu menuWidth={0} style={pageWithMenuStyles} >
      <div style={{ margin: '48px auto', maxWidth: '800px' }}>
        <h2>Get started</h2>
        <MarkdownElement text={getStarted} />
      </div>
    </PageWithMenu>
  )
}

export default GetStarted;
