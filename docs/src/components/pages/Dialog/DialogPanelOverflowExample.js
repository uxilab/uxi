import React, { Component } from 'react';
import Dialog from 'uxi/Dialog';
import { P, H3 } from 'uxi/Classic';
import Button from 'uxi/Button';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import Search from '../../../Search';

class DialogPanelOverflowExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show2: false,
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ show: true })}>
          show dialog with panel with `overflow-y` set to visible
        </Button>
        <Button onClick={() => this.setState({ show2: true })}>
          show bad potential side effect for dynamic panel content
        </Button>
        <Dialog show={this.state.show}>
          <Panel onClose={() => this.setState({ show: false })}>
            <PanelHeader title="Panel title" />
            <PanelContent style={{ padding: '16px', overflowY: 'visible' }}>
              <H3>Search documentation</H3>
              <P>
                <Search />
              </P>
            </PanelContent>
            {/* <PanelFooter>
              <Button onClick={() => console.log('clicked')}>
                action
              </Button>
            </PanelFooter> */}
          </Panel>
        </Dialog>
        <Dialog show={this.state.show2}>
          <Panel onClose={() => this.setState({ show2: false })}>
            <PanelHeader title="Panel title" />
            <PanelContent style={{ padding: '16px', overflowY: 'visible' }}>
              <H3>There is actually a search box after all this text</H3>
              <P>
                but since scrolling isn't working, it's not accessbile.
              </P>
              <br />
              <br />
              <P style={{ maxHeight: '60vh' }} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </P>
              <P>
                <Search />
              </P>
            </PanelContent>
            {/* <PanelFooter>
              <Button onClick={() => console.log('clicked')}>
                action
              </Button>
            </PanelFooter> */}
          </Panel>
        </Dialog>
      </div>
    );
  }
}

export default DialogPanelOverflowExample;
