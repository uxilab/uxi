## Panel
* It uses the AppLayout
* It expects 3 direct children (PanelHeader, PanelContent, PanelFooter)

      <Panel>
        <PanelHeader />
        <PanelContent />
        <PanelFooter />
      </Panel>

* Panel will pass a onClose prop to it's children

  but allow final user overwrite, this is nice if
  you want a different behaviour for the button
  that is automatically added to the PanelFooter


### PanelHeader
* has a background color of `theme.primary.main`
* has a font color of `theme.primary.pureWhite`
* display a close icon in the upper right
* props:
  * required
    * title
    * hasClose (should default to true => TODO)
  * optional
    * onClose

### PanelContent
props:

### PanelFooter
* has a background color of `theme.primary.white`
* display a button icon in the upper right
* props:
  * cancelLabel
  * hasCancel (should default to true => TODO)
