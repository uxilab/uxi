import React from 'react';
import { Button } from 'uxi/Button';
import { Flex } from 'uxi/Layout';
import { PanelContent } from 'uxi/Panel';

const PanelContentExample = () => (
  <div>
    <div style={{ height: '200px' }}>
      <PanelContent onClose={() => console.log('closed')}>
        Hello
      </PanelContent>
    </div>

    <br />

    <div style={{ height: '200px' }}>
      <PanelContent>
        <Flex>
          <Button
            type="primary"
            text="centred content"
            onClick={() => console.log('clicked')}
          />
        </Flex>
      </PanelContent>
    </div>
  </div>
);

export default PanelContentExample;
