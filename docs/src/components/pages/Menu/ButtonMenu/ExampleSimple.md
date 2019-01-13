Simple ButtonMenu

**Do not use an elment that is displayed flex as the "button"**

If you want flex, add a wrapper div


**Children cannot be mixed, for the all component combo (ButtonMenu + ButtonMenuItem) to work as expected.**

Use the same element for every children (element.nodeName).  
The only exception (and the reason this rule exists) is dividers.  
To add divider, use a different element, and don't forget to add the `aria-hidden=true` attr.  


The height is limited to 400px and the menu will create a scrolling contenxt if needed


The default width is 280px 

You can declare a width by passing a `menuWidth` prop to the ButtonMenu (also `menuMinWidth` and `menuMaxWidth`).

If the children you pass to ButtonMenuItem are string, or not too complex, the text-ellipsis should take care of text too long (with a title attribute for native tooltip of full content - only when string)


