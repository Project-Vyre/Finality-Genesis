// priority: 0

/**
 * @file Block tag handler for required tool tiers.
 */

ServerEvents.tags('block', event => {
  event.add('minecraft:needs_stone_tool', 'minecraft:deepslate')
})