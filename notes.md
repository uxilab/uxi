# on dropdown, autocomplete, autosuggest, filtered select input and such


All those components share some identical or similar traits, whether "conceptually" or "visually".

### vocab:

**trigger**: used to refer to the element that will be responsbile for registering the event that will, when disaptched, reveal the subcontent (e.g the 'button' of a select input)

**revealed**: used to refer to the element that is being revealed (e.g. the options list in a selectInput)


## traits:
- reveal on focus
- reveal on click
- reveal on hover
- hide on select
- hide on click (trigger)
- hide on click (revealed)
- allow selection amongst a list of item
  - could be a multiple selection
  - could be a single selection
- allow user to filter down the selectable items
  - usualy using a text field the user can type in


## Usages:
- SelectInput
- Menu (drop down, potentially recursive/nLeveldeep)
- Tooltip
- Popover
- SelectInputExtra
  - filterable selectInput
  - auto complete
  - suggestion box
 


| Compos/traits    | selection | searcheable | show onClick | show onFocus | show onHover | hide onSelect | hide onClick (trigger) | hide onClick (revealed) |
| :--------------- | :-------: | :---------: | :----------: | :----------: | :----------: | :----------:  | :-------------------:  | :---------------------: |
| Menu             |     ✗     |      ✗      |       ✓      |       ✗      |       ✗      |       ✗       |           ✓            |             ✓           |
| Tooltip          |     ✗     |      ✗      |       ✓      |       ✗      |       ✓      |       ✗       |           ✓            |             ✓           |
| Popover          |     ✗     |      ✗      |       ✓      |       ✗      |       ✗      |       ✗       |           ✓            |             ✓           |
| SelectInput      |     ✓     |      ✗      |       ✓      |       ✗      |       ✗      |       ✗       |           ✓            |             ✓           |
| SelectInputExtra |     ✓     |      ✓      |       ✓      |       ✓      |       ✗      |       ✓       |           ✓            |             ✓           |
| AutoComplete     |     ✓     |      ✓      |       ✓      |       ✓      |       ✗      |       ✓       |           ✓            |             ✓           |
| SuggestionBox    |     ✓     |      ✓      |       ✓      |       ✓      |       ✗      |       ✓       |           ✓            |             ✓           |



# Components
## low-level
internal component should not have any structural/positioning styles that influence in any way the props passed by the consumer
### DropDown
The DropDown sole concern is to take care of the revealing part.
That includes:
  - render the trigger (passed as a prop `button`)
  - render the revealed (passed as props `content`)
  - support controlled AND uncontrolled behaviour for `isOpen` props
  - support anchor props (to defined the alignment of the reveal in relation to the trigger e.g. right anchored, left anchored)
  - support a fixed position mode as well as a relative>absolute positionning mode



### ListWithNavigation (listbox)
The ListWithNavigation sole concern is to take care of the navigation/selection behaviour
  - takes an iterable collection and renders it (wrapping it with to extend with the necessary functionnalities, without removing any of the original functionnalities) 


## mid-level comp
### listbox (selectInput - role listbox>option)
### buttonmenu (menu - role menu>menuitem)
### combobox (textfield + listbox popup)



## High-level comp
  ### showMore
  ### Menu
  ### Tooltip
  ### Popover
  ### SelectInput
  ### SelectInputExtra
  ### AutoComplete
  ### SuggestionBox
