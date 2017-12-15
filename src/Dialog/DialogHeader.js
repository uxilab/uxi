import React from 'react';
import ThemeComponent from '../Base/ThemeComponent';
import { palette } from '../Theme';
import { Close } from '../Icons';

const DialogHeaderStyle = {
  root: {
    padding: '15px',
    background: palette.primary.dark,
    color: '#fff',
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    display: 'flex',
  },
  title: {
    flex: 1,
  },
  close: {
    cursor: 'pointer',
  },
};

class DialogHeader extends ThemeComponent {
  render() {
    const { title, hasClose, onClose } = this.props;
    const mainMergedStyle = this.getStyle('DialogHeader', DialogHeaderStyle.root);
    return (
      <div style={mainMergedStyle}>
        <div style={DialogHeaderStyle.title}>
          {title}
        </div>
        {
          hasClose &&
          (
            <div onClick={onClose} style={DialogHeaderStyle.close}>
              <Close size="14px" color="#ccc" hoverColor="#fff" />
            </div>
          )
        }
      </div>
    );
  }
}

DialogHeader.defaultProps = {
  hasClose: true,
};

export default DialogHeader;
