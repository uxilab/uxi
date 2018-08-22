import React, { Component } from 'react';
import CompactSlide from 'uxi/internal/CompactSlide';
import Alert from 'uxi/Alert';
import Button from 'uxi/Button';
import uuid from 'uuid/v4';

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    // const initId = uuid().slice(0, 7);
    this.state = {
      notifs: [
        // this.getNotif(initId),
      ],
    };

    this.pushNotif = this.pushNotif.bind(this);
  }

  getNotif = id => ({
    id,
    notif: (
      <Alert
        onClose={() => this.removeNotif(id)}
        type="error"
        id={id}
      >
        Some Error {id}
      </Alert>
    ),
  })

  pushNotif() {
    console.log('add notif');
    this.setState({
      notifs: this.state.notifs.concat([this.getNotif(uuid().slice(0, 7))]),
    });
  }

  removeNotif(id) {
    console.log('removing notif');
    this.setState({
      notifs: this.state.notifs.filter(x => x.id !== id),
    });
  }

  render() {
    const { notifs } = this.state;

    return (
      <div>
        <Button text="push notif" onClick={this.pushNotif} />
        <ul>


          {/* BOTOM RIGHT Anchor */}
          {/* <li>
            <CompactSlide anchor="bottom-right" direction="left" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          <li>
            <CompactSlide anchor="bottom-right" direction="bottom" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li>
          {/* <li>
            <CompactSlide anchor="bottom-right" direction="top" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="bottom-right" direction="right" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}


          {/* BOTOM LEFT Anchor */}
          {/* <li>
            <CompactSlide anchor="bottom-left" direction="left" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          <li>
            <CompactSlide anchor="bottom-left" direction="bottom" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li>
          {/* <li>
            <CompactSlide anchor="bottom-left" direction="top" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="bottom-left" direction="right" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}


          {/* TOP RIGHT Anchor */}
          <li>
            <CompactSlide anchor="top-right" direction="left" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li>
          {/* <li>
            <CompactSlide anchor="top-right" direction="bottom" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="top-right" direction="top" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="top-right" direction="right" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}


          {/* TOP LEFT Anchor */}
          {/* <li>
            <CompactSlide anchor="top-left" direction="left" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="top-left" direction="bottom" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="top-left" direction="top" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          <li>
            <CompactSlide anchor="top-left" direction="right" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li>


          {/* TOP Anchor */}
          {/* <li>
            <CompactSlide anchor="top" direction="left" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="top" direction="bottom" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          {/* <li>
            <CompactSlide anchor="top" direction="top" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li> */}
          <li>
            <CompactSlide anchor="top" direction="right" inAttr={notifs.length > 0}>
              {notifs.map(({ notif }) => notif)}
            </CompactSlide>
          </li>


        </ul>
      </div>
    );
  }
}

export default ExampleSimple;
