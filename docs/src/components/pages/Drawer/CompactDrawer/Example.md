Sometimes you want to show thing using a "Drawer like" component but that does not take the entire width or height of the viewport (think "snack notifcation").

That's why the CompactDrawer exists.


When, in opposition to the Drawer where you can set offsets on the sides, you don't know the size of the  content you want to show in the "Drawer like component" user the CompactDrawer, or you don't want it to be defined as being a portion of the viewport width, use the compactDrawer.
It will size itself accodring to its children content

It accepts offsets too, but be carreful to set them smartly, as the component can behave baddly if offsets are badley set.

