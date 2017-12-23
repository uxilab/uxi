import React, { Component } from 'react';
import Backdrop from 'uxi/internal/Backdrop';
import Dialog, { DialogHeader, DialogFooter, ConfirmDialog } from 'uxi/Dialog';
import Button from 'uxi/Button';
import SlidePanel, { SlidePanelHeader, SlidePanelFooter } from 'uxi/SlidePanel';
import Slide from 'uxi/internal/Slide';
import Alert from 'uxi/Alert'
import { Flex } from 'uxi/Layout';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
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
        <ConfirmDialog
          show={this.state.showConfim}
          text="Are you sure to ?"
          onConfirm={() => { this.setState({ showConfim: false }); }}
          onCancel={() => { this.setState({ showConfim: false }); }}
        />

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
          <div style={{ padding: '15px' }}>
            Some Dialog content
          </div>
          <DialogFooter>
            <Button type="primary">Save</Button>
          </DialogFooter>
        </Dialog>
      </div>
    );
  }
}

export default ExampleSimple;
