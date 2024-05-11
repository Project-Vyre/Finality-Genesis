// requires: biomesoplenty
// requires: kubejs_create

/**
 * @file Server handler for Biomes O' Plenty.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('item', event => {
  event.add('biomesoplenty:flesh', [
    'biomesoplenty:flesh',
    'biomesoplenty:porous_flesh'
  ])
})

ServerEvents.recipes(event => {
  event.recipes.create.sandpaper_polishing(
    'create:polished_rose_quartz',
    'biomesoplenty:rose_quartz_chunk'
  ).id('finality:create/sandpaper_polishing/bop_rose_quartz')
  event.shapeless('4x biomesoplenty:rose_quartz_chunk', [
    'biomesoplenty:rose_quartz_block'
  ]).id('finality:bop/rose_quartz_block_decompression')
  event.recipes.create.cutting([
    '2x minecraft:rotten_flesh',
    Item.of('biomesoplenty:flesh_tendons', 2).withChance(0.75)
  ], '#biomesoplenty:flesh').id('finality:bop/flesh_cutting')
  event.recipes.create.mixing('biomesoplenty:flesh', [
    'create:cinder_flour',
    '8x minecraft:rotten_flesh'
  ]).id('finality:bop/flesh_block')
  event.recipes.create.mixing('biomesoplenty:porous_flesh', [
    'minecraft:wet_sponge',
    '8x minecraft:rotten_flesh'
  ]).id('finality:bop/porous_flesh_block')
  if (Platform.isLoaded('aether')) {
    event.shaped('minecraft:chest', [
      'WWW',
      'W W',
      'WWW'
    ], {
      W: [
        'biomesoplenty:fir_planks',
        'biomesoplenty:redwood_planks',
        'biomesoplenty:cherry_planks', // deprecate in 1.20.x+
        'biomesoplenty:mahogany_planks',
        'biomesoplenty:jacaranda_planks',
        'biomesoplenty:palm_planks',
        'biomesoplenty:willow_planks',
        'biomesoplenty:dead_planks',
        'biomesoplenty:magic_planks',
        'biomesoplenty:umbran_planks',
        'biomesoplenty:hellbark_planks',
      ]
    }).id(`finality:biomesoplenty/crafting/vanilla_chest_fallback`)
  }
})

ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', 'biomesoplenty:blood')
})