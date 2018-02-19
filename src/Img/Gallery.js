import React, { Component } from 'react';
import styled from 'styled-components';

const GalleryContainerUI = styled.div`
  --height: 60px;
  --heightMedium: 100px;
  --heightBig: 150px;

  max-width: 100%;
  overflow: hidden;
  background: red;
  padding: 8px;
  -webkit-overflow-scrolling: touch;
  position: relative;
  display: block;
`;

const GalleryListUI = styled.ul`
  --height: 60px;
  --heightMedium: 100px;
  --heightBig: 150px;

  overflow: hidden;
  overflow-y: hidden;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: column;
  min-height: var(--height);
`;

const GalleryListStyles = {
  overflow: 'hidden',
  overflowY: 'hidden',
  overflowX: 'auto',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  display: 'grid',
  gridGap: '8px',
  gridAutoFlow: 'column',
  minHeight: 'var(--height)',
}

const GalleryListItemUI = styled.li`
  display: grid;
  position: relative;
`;

const GalleryImageUI = styled.img`
  background-color: black;
  width: auto;
  height: var(--height);
`;

const GalleryButtonUI = styled.button`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000053;
  border:none;
  color: white;
  flex-shrink: 0;
  font-size: 3em;
  padding: 0 8px;
  position: absolute;
  top: 0;
  bottom:0;
  box-sizing: border-box;
  width: 40px;
  &[data-action="prev"] {
    &:before { content: '‹' }
    left: 0;
  }
  &[data-action="next"] {
    &:before { content: '›' }
    right: 0
  }
  &:before {
    transform: scale(1.0);
    transition: transform 80ms ease-in;
  }
  transition: background 80ms ease-in;
  &:hover {
    background: #00000083;
    transition: background 180ms ease-out;
    &:before {
      transform: scale(1.2);
      transition: transform 180ms ease-out;
    }
  }
`;


class Gallery extends Component {
  constructor(props) {
    super(props)

    this.listRef = null;
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext() {
    const { listRef } = this;
    if (listRef) {
      const width = listRef.getBoundingClientRect().width
      listRef.scrollLeft = listRef.scrollLeft + width
    }
  }

  handlePrevious() {
    const { listRef } = this;
    if (listRef) {
      const width = listRef.getBoundingClientRect().width
      listRef.scrollLeft = listRef.scrollLeft - width
    }
  }

  render() {
    const { galleryDescriptor } = this.props

    return (
      <GalleryContainerUI>
        <GalleryButtonUI data-action="prev" onClick={this.handlePrevious} />

        <GalleryListUI innerRef={node => this.listRef = node}>
        {/* <ul style={GalleryListStyles} ref={node => this.listRef = node}> */}
          {galleryDescriptor.map(image => (
            <GalleryListItemUI>
              <GalleryImageUI tabIndex="0" src={image.url} />
            </GalleryListItemUI>
          ))}
        {/* </ul> */}
        </GalleryListUI>

        <GalleryButtonUI data-action="next" onClick={this.handleNext} />
      </GalleryContainerUI>
    )
  }
};

Gallery.displayName = 'Gallery';

Gallery.defaultProps = {
  galleryDescriptor: [],
}

export default Gallery;
