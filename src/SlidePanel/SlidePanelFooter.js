import React from 'react';
import ThemeComponent from '../Base/ThemeComponent';
import Button from 'uxi/Button';

const SlidePanelFooterStyle = {
  root: {
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    // position: 'absolute',
    padding: '10px 15px',
    borderTop: '1px solid rgb(204, 204, 204)',
    background: '#cccccc1f',
    borderBottomLeftRadius: '2px',
    borderBottompRightRadius: '2px',
  },
  actions: {
    flex: 1,
    textAlign: 'right',
  },
  cancel: {
    paddingLeft: '10px',
    textAlign: 'right',
  },
  inverse: {

  },
};

class SlidePanelFooter extends ThemeComponent {
  render() {
    const { children, hasCancel, cancelLabel, onClose, anchor } = this.props;


    const mainMergedStyle = this.getStyle(
      'SlidePanelFooter',
      Object.assign(
        {},
        SlidePanelFooterStyle.root,
        (anchor === 'right') ? SlidePanelFooterStyle.inverse : {},
      ),
    );

    const cancel = (
      hasCancel && <div style={SlidePanelFooterStyle.cancel}>
        <Button onClick={onClose}>
          {cancelLabel || 'Cancel'}
        </Button>
      </div>
    );

    const other = (
      <div style={SlidePanelFooterStyle.actions}>
        {children}
      </div>
    );

    return (
      <div style={mainMergedStyle}>
        {other}
        {cancel}
      </div>
    );
  }
}

SlidePanelFooter.defaultProps = {
  hasCancel: true,
};

export default SlidePanelFooter;
