import React, { Component } from 'react';
import { Button, FlatButton, ButtonLink } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';
import { Flex } from 'uxi/Layout';
import { LightPanel, LightPanelHeader, LightPanelContent, LightPanelFooter } from 'uxi/Panel';

class LightPanelExample extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div style={{ height: '200px' }}>
        <LightPanel>
          <LightPanelHeader
            closeLabel={'Mark all as read'}
            title="LightPanel rocks!"
            onClose={() => console.log('Marked all as read')}
          />

          <LightPanelContent style={{ padding: '16px' }}>
            wuut
            <br />
            wuut
          </LightPanelContent>

          <LightPanelFooter hasCancel onClose={() => console.log('closed')}>
            <Flex>
              <ButtonLink
                type="primary"
                onClick={() => console.log('action clicked')}
                message={'Action'}
              />
            </Flex>
          </LightPanelFooter>
        </LightPanel>
      </div>
    );
  }
}

export default LightPanelExample;
