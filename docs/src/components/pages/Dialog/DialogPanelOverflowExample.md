Panel uses AppLayout, which default to setting the `overflow-y: auto` on its second children.
In the case of the Panel, it should be the PanelContent. see AppLayout for more bout this decision.

In the case where you want something to overflow (like a dropdown that doesn't uses `position: fixed` you have to set the `overflow-y: visible` manually on the PanelContent

But be carrefull as this might have bad side effect
