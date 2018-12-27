import React, { Component } from 'react';
import { Button, FlatButton, ButtonLink } from 'uxi/Button';
import styled from 'styled-components';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';
import { Flex } from 'uxi/Layout';
import { LightPanel, LightPanelHeader, LightPanelContent, LightPanelFooter } from 'uxi/Panel';
import data from '../data';

const Wrapper = styled.div`
  max-height: ${({ showMore }) => (showMore ? '65vh' : '200px')};
  height: ${({ showMore }) => (showMore ? '65vh' : '200px')};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
`;

class LightPanelControlledScrollExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
    };
  }

  render() {
    const { showMore } = this.state;

    return (
      <div>
        <Wrapper showMore={showMore}>
          <LightPanel>
            <LightPanelHeader
              hasClose
              title="LightPanel rocks!"
              onClose={() => console.log('closed')}
            />

            <LightPanelContent style={{ padding: '16px' }}>
              {
                data.map(n => (<h1>{n}</h1>))
              }
            </LightPanelContent>

            <LightPanelFooter hasCancel onClose={() => console.log('closed')}>
              <Flex>
                <ButtonLink
                  onClick={() => {
                    this.setState(
                      { showMore: !showMore }),
                    () => console.log('toggle');
                  }}
                  message={showMore ? 'Show Less' : 'Show More'}
                />
              </Flex>
            </LightPanelFooter>
          </LightPanel>
        </Wrapper>
      </div>
    );
  }
}

export default LightPanelControlledScrollExample;
