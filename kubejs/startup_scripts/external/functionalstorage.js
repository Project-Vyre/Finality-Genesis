// requires: functionalstorage

/**
 * @file Register these when Functional Storage is present.
 */

StartupEvents.registry('item', event => {
  event.create('kubejs:ender_drawer_linking_guide')
    .displayName('Ender Drawer Linking Guide')
    .texture('kubejs:item/info/ender_drawer_linking_guide')
})