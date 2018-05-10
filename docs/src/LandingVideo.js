import React, { Component } from 'react';
import { RatioBox } from 'uxi/Box';
import styled from 'styled-components';
import bcg from './bcg.base64';

const Wrapper = styled.div`
  z-index: -1;
  height:100%;
  width: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(27, 60, 79);
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 10px red;
    pointer-events: none;
  }
`;

const VideoBg = styled.div`
  /* background-image: url('/public/staticbcg.png');
  background-repeat: no-repeat;
  background-size: cover; */
  /* background-position */
  /* background: red; */
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 1;

  @supports (object-fit: cover) {
    & video {
      object-fit: cover;
    }
  }
`;

const VideoFg = styled.div`
  /* background: blue; */
  /* background-image: url('/public/staticbcg.png'); */
  background-image: url(data:image/png;base64,${bcg});
  background-repeat: no-repeat;
  /* background-size: 1920 1080; */
  background-position: top left;

  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;

  @media (min-aspect-ratio: 16/9) {
    height: 300%; top: -100%;
  }
  @media (max-aspect-ratio: 16/9) {
    width: 300%; left: -100%;
  }
  @media (max-aspect-ratio: 20/9) and (max-width: 500px) {
    width: 300vh; left: -100vh;
  }

  @supports (object-fit: cover) {
    width: 100%;
    height: 100%;
    top: 0; left: 0;
  }
}
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
    position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;

`;

class LandingVideo extends Component {
  constructor(props) {
    super(props)
    this.storeRef = this.storeRef.bind(this)
  }

  componentDidMount() {
    if (this.ref) {
      this.ref.ontimeupdate = function () {
        if (this.currentTime >= 9.99) {
          this.currentTime = 0.0;
        }
      }
    }
  }

  storeRef(node) {
    this.ref = node
    this.componentDidMount()
  }

  render() {
    return (
      <Wrapper>
        <VideoBg>
          <VideoFg>
            {/* <IFrame
          src="https://www.youtube.com/embed/q21XwbwtWd8?autoplay=1&modestbranding=1&controls=0&disablekb=1&loop=1&playsinline=1&rel=0?&playlist=q21XwbwtWd8"
        /> */}
            <video ref={this.storeRef} autoplay="" loop="" src="/public/uxibcg.mp4"></video>
            {/* <video style={{ position: 'absolute', top: 0, zIndex: -1 }} src="/public/uxibcg.mp4"></video> */}

          </VideoFg>
        </VideoBg>
      </Wrapper>
    )
  }
}

export default LandingVideo

/*
<iframe src="https://player.vimeo.com/video/202929248?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/202929248">The Line Animation Studio - Reel 2017</a> from <a href="https://vimeo.com/thelineanimation">The Line</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
*/
