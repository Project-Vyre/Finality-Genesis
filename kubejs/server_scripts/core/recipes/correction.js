/**
 * @version 1.20.1
 */

// requires: kubejs_create

ServerEvents.recipes(event => {
  if (Platform.isLoaded('farmersdelight')) {
    console.log("Farmer's Delight detected, correcting to recipes to 1:1 ratio.")
    event.shapeless('create:dough', [
      'minecraft:water_bucket',
      'create:wheat_flour'
    ]).id('create:crafting/appliances/dough')
    event.recipes.create.mixing('create:dough', [
      'create:wheat_flour',
      Fluid.of('minecraft:water', 1000)
    ]).id('create:mixing/dough_by_mixing')
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
  }
  // nether wart
  if (!Platform.isLoaded('quark')) {
    event.shapeless('9x minecraft:nether_wart', [
      'minecraft:nether_wart_block'
    ]).id('finality:nether_wart_block_decompression')
  }
  if (Platform.isLoaded('quark')) {
    event.shapeless('4x minecraft:nether_wart', [
      'minecraft:nether_wart_block'
    ]).id('finality:quark_compat_nether_wart_block_decompression')
  }
  // cherry planks
  if (Platform.isLoaded('biomesoplenty')) {
    event.remove([
      { id: 'create:cutting/compat/biomesoplenty/stripped_cherry_log' },
      { id: 'create:cutting/compat/biomesoplenty/cherry_wood' },
      { id: 'create:cutting/compat/biomesoplenty/stripped_cherry_wood' },
      { id: 'create:cutting/compat/biomesoplenty/cherry_log' }
    ])
  }
})