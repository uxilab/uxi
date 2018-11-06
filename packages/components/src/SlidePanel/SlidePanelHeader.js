import React from 'react';
import ThemeComponent from '../Base/ThemeComponent';
import { palette } from '../Theme';
import { Close } from '../Icons';

const SlidePanelHeaderStyle = {
  root: {
    padding: '15px',
    background: palette.primary.dark,
    color: '#fff',
    display: 'flex',
  },
  title: {
    flex: 1,
  },
  close: {
    cursor: 'pointer',
  },
};

class SlidePanelHeader extends ThemeComponent {
  render() {
    const { title, hasClose, onClose } = this.props;
    const mainMergedStyle = this.getStyle('SlidePanelHeader', SlidePanelHeaderStyle.root);
    return (
      <div style={mainMergedStyle}>
        <div style={SlidePanelHeaderStyle.title}>
          {title}
        </div>
        {
          hasClose &&
          (
            <div onClick={onClose} style={SlidePanelHeaderStyle.close}>
              <Close size="14px" color="#ccc" hoverColor="#fff" />
            </div>
          )
        }
      </div>
    );
  }
}

SlidePanelHeader.defaultProps = {
  hasClose: true,
};

export default SlidePanelHeader;
