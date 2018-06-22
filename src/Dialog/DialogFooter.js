import React from 'react';
import ThemeComponent from '../Base/ThemeComponent';
import Button from '../Button'; // eslint-disable-line import/no-named-as-default

const DialogFooterStyle = {
  root: {
    padding: '10px 15px',
    borderTop: '1px solid rgb(204, 204, 204)',
    background: '#cccccc1f',
    borderBottomLeftRadius: '2px',
    borderBottompRightRadius: '2px',
    display: 'flex',
  },
  actions: {
    flex: 1,
    textAlign: 'right',
  },
  cancel: {
    paddingLeft: '10px',
    textAlign: 'right',
  },
};

class DialogFooter extends ThemeComponent {
  render() {
    const { children, hasCancel, cancelLabel, onClose } = this.props;
    const mainMergedStyle = this.getStyle('DialogHeader', DialogFooterStyle.root);
    return (
      <div style={mainMergedStyle}>
        <div style={DialogFooterStyle.actions}>
          {children}
        </div>
        { hasCancel && <div style={DialogFooterStyle.cancel}>
          <Button onClick={onClose}>
            {cancelLabel || 'Cancel'}
          </Button>
        </div> }
      </div>
    );
  }
}

DialogFooter.defaultProps = {
  hasCancel: true,
};

export default DialogFooter;
