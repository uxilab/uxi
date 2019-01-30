import React, { Component } from 'react';
import Button from 'uxi/Button';
import { P } from 'uxi/Classic';
import { CompactDrawer } from 'uxi/Drawer';
import { Close } from 'uxi/Icons';
import Alert from 'uxi/Alert';


class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false,
      show14: false,
    };
  }

  render() {
    return (
      <div style={{ padding: '16px' }}>
        <Button
          onClick={() => { this.setState({ show1: true }); }}
          text="Show default behaviour (anchor: bottom-left, direction: top)"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show2: true }); }}
          text="Show direction right (default anchor: bottom-left)"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show3: true }); }}
          text="Show dir: top, anchor: bottom"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show4: true }); }}
          text="Show dir: top, anchor: bottom-right"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show5: true }); }}
          text="Show dir: left, anchor: bottom-right"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show6: true }); }}
          text="Show dir: right, anchor: left"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show7: true }); }}
          text="Show dir: left, anchor: right"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show8: true }); }}
          text="Show dir: bottom, anchor: top"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show9: true }); }}
          text="Show dir: bottom, anchor: top-left"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show10: true }); }}
          text="Show dir: right, anchor: top-left"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show11: true }); }}
          text="Show dir: bottom, anchor: top-right"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show12: true }); }}
          text="Show dir: left, anchor: top-right"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show13: true }); }}
          text="Show dir: top, anchor: center"
        /><br /><br />
        <Button
          onClick={() => { this.setState({ show14: true }); }}
          text="Show dir: top, anchor: center"
        />

        <CompactDrawer
          inAttr={this.state.show1}
          onClose={() => { this.setState({ show1: false }); }}
        >
          <Alert type="error" >
            <div style={{ width: '260px' }} >
              Something went wrong!
            </div>
          </Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show2}
          direction="right"
          onClose={() => { this.setState({ show2: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show3}
          direction="top"
          anchor="bottom"
          onClose={() => { this.setState({ show3: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show4}
          direction="top"
          anchor="bottom-right"
          onClose={() => { this.setState({ show4: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show5}
          direction="left"
          anchor="bottom-right"
          onClose={() => { this.setState({ show5: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show6}
          direction="right"
          anchor="left"
          onClose={() => { this.setState({ show6: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show7}
          direction="left"
          anchor="right"
          onClose={() => { this.setState({ show7: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show8}
          direction="bottom"
          anchor="top"
          onClose={() => { this.setState({ show8: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show9}
          direction="bottom"
          anchor="top-left"
          onClose={() => { this.setState({ show9: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show10}
          direction="right"
          anchor="top-left"
          onClose={() => { this.setState({ show10: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show11}
          direction="bottom"
          anchor="top-right"
          onClose={() => { this.setState({ show11: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show12}
          direction="left"
          anchor="top-right"
          onClose={() => { this.setState({ show12: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show13}
          direction="top"
          anchor="center"
          onClose={() => { this.setState({ show13: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

        <CompactDrawer
          inAttr={this.state.show14}
          direction="bottom"
          anchor="center"
          onClose={() => { this.setState({ show14: false }); }}
        >
          <Alert type="error" >Something went wrong!</Alert>
        </CompactDrawer>

      </div>
    );
  }
}

export default ExampleSimple;
