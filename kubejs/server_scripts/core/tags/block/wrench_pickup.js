// priority: 0
// requires: create

/**
 * @file Block tag handler for Create's wrench pickup tag.
 */

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'create:peculiar_bell',
    'create:haunted_bell',
    '#create:seats',
    'minecraft:iron_bars',
    'minecraft:bell',
    'minecraft:barrel',
    'minecraft:redstone_lamp',
    'minecraft:crafting_table',
    'minecraft:smithing_table',
    'minecraft:stonecutter',
    'minecraft:grindstone',
    'minecraft:furnace',
    'minecraft:blast_furnace',
    'minecraft:smoker',
    'minecraft:lantern',
    'minecraft:soul_lantern',
    'minecraft:lectern',
    'minecraft:note_block',
    'minecraft:jukebox',
    'minecraft:dispenser',
    'minecraft:dropper',
    'minecraft:cauldron',
    'minecraft:anvil',
    'minecraft:chipped_anvil',
    'minecraft:damaged_anvil',
    'minecraft:loom',
    'minecraft:fletching_table',
    'minecraft:ender_chest',
    'minecraft:lightning_rod',
    '#minecraft:doors',
    '#minecraft:trapdoors',
    '#forge:chests',
    '#minecraft:shulker_boxes',
    '#minecraft:planks',
    '#minecraft:wooden_slabs',
    '#minecraft:wooden_stairs',
    '#minecraft:wool_carpets',
    '#minecraft:signs',
    '#minecraft:beds',
    '#minecraft:fence_gates',
    '#minecraft:fences',
    'minecraft:beacon',
    'minecraft:beehive',
    'minecraft:chain',
    'minecraft:cartography_table',
    'minecraft:ladder'
  ])
})