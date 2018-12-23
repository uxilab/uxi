import React from 'react';
import { Button, FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';

const PanelHeaderExample = () => (
  <div>
    <PanelHeader title="Panel rocks!" onClose={() => console.log('closed')} />
    <br />
    <PanelHeader title="Panel rocks!" />
  </div>
);

export default PanelHeaderExample;
