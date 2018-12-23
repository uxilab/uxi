import React from 'react';
import { Button, FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { P, H2 } from 'uxi/Classic';
import { Flex } from 'uxi/Layout';
import { PanelFooter } from 'uxi/Panel';

const PanelFooterWithExtraExample = () => (
  <ul>
    <li>
      <PanelFooter onClose={() => console.log('closed')}>
        <div>
          <span>👉</span>
          <span>
            <Button
              text={"CLICK ME"}
              style={{ margin: '0 8px' }}
              onClick={() => console.log('clicked')}
            />
          </span>
          <span>👈</span>
        </div>
        <Button
          type="primary"
          onClick={() => console.log('action clicked')}
          message={'Action'}
        />
      </PanelFooter>
    </li>
    <li><br /></li>
    <li>
      <PanelFooter onClose={() => console.log('closed')}>
        <div style={{ marginRight: 'auto' }}>
          <span>👉</span>
          <span>
            <Button
              text={"CLICK ME"}
              style={{ margin: '0 8px' }}
              onClick={() => console.log('clicked')}
            />
          </span>
          <span>👈</span>
        </div>
        <Button
          type="primary"
          onClick={() => console.log('action clicked')}
          message={'Action'}
        />
      </PanelFooter>
    </li>
    <li><br /></li>
    <li>
      <PanelFooter onClose={() => console.log('closed')}>
        <Flex style={{ width: '100%' }}>
          <div>👉</div>
          <div>
            <Button
              text={"CLICK ME"}
              style={{ margin: '0 8px' }}
              onClick={() => console.log('clicked')}
            />
          </div>
          <div>👈</div>
        </Flex>
        <Button
          type="primary"
          onClick={() => console.log('action clicked')}
          message={'Action'}
        />
      </PanelFooter>
    </li>
    <li><br /></li>
    <li>
      <PanelFooter onClose={() => console.log('closed')}>
        <Flex style={{ width: '100%' }}>
          <div>👉</div>
          <Flex style={{ flexGrow: 99 }}>
            <Button
              text={"CLICK ME"}
              style={{ margin: '0 8px' }}
              onClick={() => console.log('clicked')}
            />
          </Flex>
          <div>👈</div>
        </Flex>
        <Button
          type="primary"
          onClick={() => console.log('action clicked')}
          message={'Action'}
        />
      </PanelFooter>
    </li>
    <li><br /></li>
    <li>
    </li>
  </ul>
);

export default PanelFooterWithExtraExample;
