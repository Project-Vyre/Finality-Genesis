// priority: 0

/**
 * @file Item tagging for mod mechanics.
 */

ServerEvents.tags('item', event => {
  if (Platform.isLoaded('aether')) {
    event.add('aether:slider_damaging_items', 'kubejs:final_pickaxe')
  }
})