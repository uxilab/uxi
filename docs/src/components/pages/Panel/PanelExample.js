import React from 'react';
import { Button, FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';

const PanelExample = () => (
  <div>
    <div style={{ height: '400px' }}>
      <Panel>
        <PanelHeader hasClose title="Panel rocks!" onClose={() => console.log('closed')}/>

        <PanelContent style={{ padding: '16px' }}>
          wuut
        </PanelContent>

        <PanelFooter hasCancel onClose={() => console.log('closed')}>
          <Button
            type="primary"
            onClick={() => console.log('action clicked')}
            message={'Action'}
          />
        </PanelFooter>
      </Panel>
    </div>
  </div>
);

export default PanelExample;
