Simple ButtonMenu

If you don't control the width, it will usually have the intrinsic width of its content.

The height is limited to 300px and the menu will create a scrolling contenxt if needed

You can declare a width by passing a `menuWidth` prop to the ButtonMenu (also `menuMinWidth` and `menuMaxWidth`).

If the children you pass to ButtonMenuItem are string, or not too complex, the text-ellipsis should take care of text too long (with a title attribute for native tooltip of full content - only when string)


