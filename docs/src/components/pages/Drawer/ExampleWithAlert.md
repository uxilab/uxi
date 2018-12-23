Compose well with a lot of existig component, like Alert


The Drawer will pass its onClose props to its direct children But leaves teh ability to overwrite it if explicitely passed on the children (thrid example does not have a close btn in the header - see PanelHeader page for more infos).


But sometimes you want to show thing using a drawer like component but thatdoes not take the entire width or heighjt of the viewport (think "snack notifcation").

That's why the CompactDrawer exists.
