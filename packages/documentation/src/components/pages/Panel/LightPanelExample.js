import React, { Component } from 'react';
import { Button, FlatButton, ButtonLink } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';
import { Flex } from 'uxi/Layout';
import { LightPanel, LightPanelHeader, LightPanelContent, LightPanelFooter } from 'uxi/Panel';

class LightPanelExample extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>
          light pannel can take a `closeLabel` prop to replace
          the default cross icon for the close button, in which case specifying hasClose become unecesssary
        </p>
        <div style={{ height: '400px', border: '4px solid rebeccapurple' }}>
          <LightPanel>
            <LightPanelHeader
              closeLabel={'Mark all as read'}
              title="LightPanel rocks!"
              onClose={() => console.log('Marked all as read')}
            />

            <LightPanelContent style={{ padding: '16px' }}>
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
      </div>
    );
  }
}

export default LightPanelExample;
