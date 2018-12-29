Sometimes you might want to attach an event (click, tap) handler to an element.

adding a click handler on a div element will not work well regarding keyboard support and accessibility.

That's why the UnstyledButton exists.

It allows you easily create a "dynamic" element.

note:
if you intend to put another dynamic element (like an input or another button) 
you might want to use `inert` prop on some element, so that only one dynmaic (focusable) element will be rendered as such.
If you want to look further, the SelectInput uses this technique of UnstyledButton and `inert` prop on an "inner button".
