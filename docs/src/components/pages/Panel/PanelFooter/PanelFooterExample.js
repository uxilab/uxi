import React from 'react';
import { Button } from 'uxi/Button';
import { Flex } from 'uxi/Layout';
import { PanelFooter } from 'uxi/Panel';

const PanelFooterExample = () => (
  <div>
    <PanelFooter onClose={() => console.log('closed')}>
      <Button
        type="primary"
        onClick={() => console.log('action clicked')}
        message={'Action'}
      />
    </PanelFooter>

    <br />

    <PanelFooter
      cancelLabel="close without saving"
      onClose={() => console.log('closed')}
    >
      <Button
        type="primary"
        onClick={() => console.log('action clicked')}
        message={'Save'}
      />
    </PanelFooter>

    <br />

    <PanelFooter>
      <Button
        type="primary"
        onClick={() => console.log('action clicked')}
        message={'Action'}
      />
    </PanelFooter>

    <br />

    <PanelFooter>
      <Flex style={{ width: '100%' }}>
        —footer—
      </Flex>
    </PanelFooter>
  </div>
);

export default PanelFooterExample;
