import React from 'react';
import { Button, FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { P } from 'uxi/Classic';
import { Flex } from 'uxi/Layout';
import { Upload } from 'uxi/Icons';
import { Panel, PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';

const PanelHeaderWithExtraExample = () => (
  <ul>
    <li>
      <P>
        You can pass children to the PanelHeader.
        <br />
        The PanelHeader layout is set to flex, so the child you will pass to PanelHeader will behave as a flex child.
      </P>
    </li>

    <li>
      <PanelHeader
        hasClose
        title="Panel rocks!"
        onClose={() => console.log('closed')}
      >
        <div>
          <span>👉</span>
          <span>
            <FlatButton
              text={'CLICK ME'}
              style={{ margin: '0 8px' }}
              onClick={() => console.log('clicked')}
            />
          </span>
          <span>👈</span>
        </div>
      </PanelHeader>
    </li>
    <li><br /></li>
    <li>
      <P>
        {'Use the <Flex /> component as a child to get vertical alignment automatically.'}
      </P>
    </li>
    <li>
      <PanelHeader
        hasClose
        title="Panel rocks!"
        onClose={() => console.log('closed')}
      >
        <Flex style={{ justifyContent: 'flex-start' }}>
          <div>👉</div>
          <FlatButton
            text={'CLICK ME'}
            style={{ margin: '0 8px' }}
            onClick={() => console.log('clicked')}
          />
          <div>👈</div>
        </Flex>
      </PanelHeader>
    </li>
    <li><br /></li>
    <li>
      <P>
        And easily set up the alignment along the x axis
      </P>
    </li>
    <li>
      <PanelHeader
        hasClose
        title="Panel rocks!"
        onClose={() => console.log('closed')}
      >
        <Flex style={{ justifyContent: 'flex-end' }}>
          <div>👉</div>
          <FlatButton
            text={'CLICK ME'}
            style={{ margin: '0 8px' }}
            onClick={() => console.log('clicked')}
          />
          <div>👈</div>
        </Flex>
      </PanelHeader>
    </li>
    <li><br /></li>
    <li>
      <P>
        Overwriting background color is possible but be carrefull if you do so.
        <br />
        (notice the contrast is not strong enough)
      </P>
    </li>
    <li>
      <PanelHeader
        hasClose
        title="Panel rocks!"
        onClose={() => console.log('closed')}
        style={{ background: '#cecece' }}
      >
        <Flex>
          <div>👉</div>
          <Button
            text={'CLICK ME'}
            type="primary"
            style={{ margin: '0 8px' }}
            onClick={() => console.log('clicked')}
          />
          <div>👈</div>
        </Flex>
      </PanelHeader>
    </li>
    <li><br /></li>
    <li>
      <P>
        Pass background (or backgroundColor) <strong>AND</strong> color prop in the style of the PanelHeader.
        <br />
        text and icon are designed to inherit color.
      </P>
    </li>
    <li>
      <PanelHeader
        hasClose
        title="Panel rocks!"
        onClose={() => console.log('closed')}
        style={{ background: '#cecece', color: '#343434' }}
      >
        <Flex style={{ justifyContent: 'center' }}>
          <div style={{ marginLeft: '16px' }}>👉</div>
          <Flex style={{ flexGrow: 99 }} >
            <Button
              text={'CLICK ME'}
              type="primary"
              style={{ margin: '0 8px', flexGrow: 99 }}
              onClick={() => console.log('clicked')}
            />
            <Button
              text={'OR CLICK ME'}
              type="primary"
              style={{ margin: '0 8px', flexGrow: 99 }}
              onClick={() => console.log('clicked')}
            />
          </Flex>
          <div style={{ marginRight: '16px' }}>👈</div>
        </Flex>
      </PanelHeader>
    </li>
  </ul>
);

export default PanelHeaderWithExtraExample;
