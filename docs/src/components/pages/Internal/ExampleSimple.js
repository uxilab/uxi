import React, { Component } from 'react';
import Backdrop from 'uxi/internal/Backdrop';
import Dialog, { DialogHeader, DialogFooter, ConfirmDialog } from 'uxi/Dialog';
import { ButtonWithConfirm } from 'uxi/Button';
import Button from 'uxi/Button';
import SlidePanel, { SlidePanelHeader, SlidePanelFooter } from 'uxi/SlidePanel';
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel';
import Slide from 'uxi/internal/Slide';
import Alert from 'uxi/Alert'
import { Flex } from 'uxi/Layout';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showPanelDialog: false,
      showConfim: true,
      showSidePanel: false,
      showSidePanelLeft: false,
      showSidePanelRight: false,
      showSidePanelRight2: false,
      showSidePanelTop: false,
      showSidePanelTop2: false,
      showSidePanelTop3: false,
      showSidePanelBottom: false,
    };
  }

  render() {
    return (
      <div>
        <Button style={{ margin: '0 8px' }} text="WithConfirmDialog" />
        <Button style={{ margin: '0 8px' }} text="WithConfirmDialog" />
        <Button style={{ margin: '0 8px' }} text="WithConfirmDialog" />
        <Button style={{ margin: '0 8px' }} text="WithConfirmDialog" />
        <ButtonWithConfirm text={'bar'} confirmText={'foo'} onClick={() => console.log('rrr')} />
        <Button style={{ margin: '0 8px' }} text="WithConfirmDialog" />
        <Button style={{ margin: '0 8px' }} text="WithConfirmDialog"/>
        <br />
        <br />
        <br />
        <br />
        {/* <ConfirmDialog
          show={this.state.showConfim}
          text="Are you sure to ?"
          onConfirm={() => { this.setState({ showConfim: false }); }}
          onCancel={() => { this.setState({ showConfim: false }); }}
        /> */}

        <Button onClick={() => { this.setState({ show: true }); }}>
         Show Dialog
        </Button>
        <br/>
        <Button onClick={() => { this.setState({ showSidePanelTop: true }); }}> Show SidePanel Top </Button><br/>
        <Button onClick={() => { this.setState({ showSidePanelTop2: !this.state.showSidePanelTop2 }); }}> Show SidePanel Top 2 </Button><br/>
        <Button onClick={() => { this.setState({ showSidePanelTop3: !this.state.showSidePanelTop3 }); }}> Show SidePanel Top 3 </Button><br/>
        <Button onClick={() => { this.setState({ showSidePanelRight: true }); }}> Show SidePanel Right </Button><br/>
        <Button onClick={() => { this.setState({ showSidePanelRight2: true }); }}> Show SidePanel Right 2 </Button><br/>
        <Button onClick={() => { this.setState({ showSidePanelBottom: true }); }}> Show SidePanel Bottom </Button><br/>
        <Button onClick={() => { this.setState({ showSidePanelLeft: true }); }}> Show SidePanel Left </Button><br/>
        <Button onClick={() => { this.setState({ showPanelDialog: true }); }}> Show PanelDialog </Button><br/>
        <SlidePanel
          onClose={() => { this.setState({ showSidePanelRight: false }); }}
          open={this.state.showSidePanelRight}
        >
          <SlidePanelHeader title="Some Slide Title" />
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>
        <SlidePanel
          onClose={() => { this.setState({ showSidePanelRight2: false }); }}
          open={this.state.showSidePanelRight2}
        >
          <SlidePanelHeader title="Some Slide Title" />''
          <div> something goes here </div>
          <div> something goes here </div>
          <div> something goes here </div>
          <div> something goes here </div>
          <div> something goes here </div>
          <div> something goes here </div>
          <div> something goes here </div>
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>
        <SlidePanel
          anchor="left"
          onClose={() => { console.log(this); this.setState({ showSidePanelLeft: false }); }}
          open={this.state.showSidePanelLeft}
        >
          <SlidePanelHeader title="Some Slide Title" />
          <div> something goes here </div>
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>

        <SlidePanel
          anchor="top"
          onClose={() => { console.log(this); this.setState({ showSidePanelTop: false }); }}
          open={this.state.showSidePanelTop}
        >
          <SlidePanelHeader title="I'm coming from the top" />
          <Alert title="Some Slide Title" hideClose>
            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
          </Alert>
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>
      <SlidePanel
          anchor="top"
          direction="bottom"
          onClose={() => { console.log(this); this.setState({ showSidePanelTop2: false }); }}
          in={this.state.showSidePanelTop2}
          open={this.state.showSidePanelTop2}
        >
            <Alert
              type="error"
              title="Some SlidePanel Title"
              onClose={() => { console.log(this); this.setState({ showSidePanelTop2: false }); }}
            >
              Snap! An error occured... <br />
              in a {'<SlidePanel />'}, we get shaodws and full width
            </Alert>
        </SlidePanel>
       <Slide
          anchor="top"
          direction="bottom"
          onClose={() => { console.log(this); this.setState({ showSidePanelTop3: false }); }}
          in={this.state.showSidePanelTop3}
          open={this.state.showSidePanelTop3}
        >
          <Flex>
            <Alert
              type="error"
              title="Some Slide Title"
              onClose={() => { console.log(this); this.setState({ showSidePanelTop3: false }); }}
            >
            in a {'<Flex><Slide /></Flex>'}, <br />
            we get no shadow and intrinsic content width;<br />
            This is pretty cool. The text defines the size @#############################@####@@#
            But it's still fluid
            </Alert>
          </Flex>
        </Slide>
        <SlidePanel
          anchor="bottom"
          onClose={() => { console.log(this); this.setState({ showSidePanelBottom: false }); }}
          open={this.state.showSidePanelBottom}
        >
          <SlidePanelHeader title="I'm coming from the Bottom" />
          <Alert title="Some Slide Title" hideClose>
            Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
          </Alert>
          <SlidePanelFooter>
            <Button type="primary">Save</Button>
          </SlidePanelFooter>
        </SlidePanel>
        <Dialog
          show={this.state.show}
          onClose={() => { console.log(this); this.setState({ show: false }); }}
        >
          <DialogHeader title="Some Title" />
          <div style={{ padding: '15px', overflowY: 'scroll', maxHeight: '400px' }}>
            Some Dialog content.
            Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
          </div>
          <DialogFooter>
            <Button type="primary">Save</Button>
          </DialogFooter>
        </Dialog>
        <Dialog
          show={this.state.showPanelDialog}
          onClose={() => { console.log(this); this.setState({ showPanelDialog: false }); }}
        >
          <Panel>
            <PanelHeader
              hasClose
              title="Some Title"
              onClose={() => { console.log(this); this.setState({ showPanelDialog: false }); }}
            />
            <PanelContent style={{ padding: '15px', maxHeight: 'calc(80vh - calc( 2 * 50px ))', }}>
              Some PanelDialog content.
              Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
            </PanelContent>
            <PanelFooter
              hasCancel
              onClose={() => { console.log(this); this.setState({ showPanelDialog: false }); }}
            >
              <Button
                onClick={() => {
                  console.log('clicked PanelDialog save btn');
                  this.setState({ showPanelDialog: false });
                }}
                type="primary"
              >
                Save
              </Button>
            </PanelFooter>
          </Panel>
        </Dialog>
      </div>
    );
  }
}

export default ExampleSimple;
