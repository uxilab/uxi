
Pass the main action hander component as the children.

The cancel button is automatically shown if:
- onClose handler has been passed to the Panel
- onClose handler has been passed to the PanelHeader


If you desire to only show the close handler on the PanelHeader and not the PanelFooter do not pass a onClose handler to the panel, and pass one exclusivley to the PanelHeader.
