
You can pass more than just the action handler.

The PanelFooter layout is set to flex (right-align by default),  
so the child(ren) you will pass to PanelHeader will behave as a flex child.

If you pass more than a single child, pass the action handler as last child,  
and leave it right aligned (for Ux and a11y consistncy purpose accross the library).


Use the `<Flex />` component as a child to get vertical alignment automatically.
