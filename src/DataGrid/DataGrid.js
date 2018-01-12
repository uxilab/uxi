/**
 *
 * Data grid is much more complex than a Table.
 * The Data Grid is a really complex component which plays with the idea of showing a List of Entities
 * The Data Grid is complex and should not be missMatched with the Table
 * The Table is used for simpler usecases whereas the Data Grid is more close to an XLS like component.
 * Under the hood, the Data Grid is using the Table.
 *
 * Data GRID can be extends - as we work by Entity, we can create custom cell or column defition to show extra content.
 * Data GRID APIS:
 *
 * data <= the data
 * actions = [], a list of actions with an Icon, a name, a promoted (boolean to mention must be visible) and an action
 * batchActions = [], a list of actions with an Icon, a name and an action,
 * sortingKyes=[], a list of Keys that needs to be sorted
 * selectable
 * activable
 * multiSelectable
 * noDataText,
 * fixedHeight => setup the correct overflow
 * tileConfig: {
 * }
 * detailViewConfig: {
 * }
 * iconViewConfig: {
 *
 * },
 * tableConfig: {
 *   fixedHeader,
 *   columnConfig: {
 *   },
 *   resizable,
 *   extraColumnConfig: {
 *     candidate: [],
 *     extraColumns: [
 *       colimnConfig,
 *     ]
 *   }
 * }
 */
