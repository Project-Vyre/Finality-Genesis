/**
 * @file Server handler for Pipez.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: pipez
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ mod: 'pipez' })
  event.recipes.create.mechanical_crafting('16x pipez:item_pipe', [
    'IIII',
    'CCCC',
    'IIII'
  ], {
    I: 'create:industrial_iron_block',
    C: 'create:chute'
  }).id('kubejs:pipez/item_pipe')
  event.recipes.create.mechanical_crafting('16x pipez:fluid_pipe', [
    'IIII',
    'FFFF',
    'IIII'
  ], {
    I: 'create:industrial_iron_block',
    F: 'create:fluid_pipe'
  }).id('kubejs:pipez/fluid_pipe')
  event.recipes.create.mechanical_crafting('16x pipez:energy_pipe', [
    'IIII',
    'RRRR',
    'IIII'
  ], {
    I: 'create:industrial_iron_block',
    R: 'minecraft:redstone_block'
  }).id('kubejs:pipez/energy_pipe')
  event.recipes.create.mechanical_crafting('15x pipez:universal_pipe', [
    'RRRRR',
    'IIIII',
    'EEEEE',
    'FFFFF',
    'RRRRR'
  ], {
    R: 'create:industrial_iron_block',
    I: 'pipez:item_pipe',
    E: 'pipez:energy_pipe',
    F: 'pipez:fluid_pipe'
  }).id('kubejs:pipez/universal_pipe')
  event.recipes.create.mechanical_crafting('pipez:filter_destination_tool', [
    'III',
    'RGR',
    'IBI'
  ], {
    I: 'create:sturdy_sheet',
    R: 'create:electron_tube',
    G: '#forge:glass_panes/colorless',
    B: '#minecraft:buttons'
  }).id('kubejs:pipez/filter_destination_tool')
  if (Platform.isLoaded('mekanism')) {
    event.recipes.create.mechanical_crafting('pipez:gas_pipe', [
      'IIII',
      'AAAA',
      'IIII'
    ], {
      I: 'create:industrial_iron_block',
      A: 'mekanism:alloy_infused'
    }).id('kubejs:pipez/gas_pipe')
  }
  // upgrades
  event.recipes.create.mechanical_crafting('pipez:basic_upgrade', [
    'IRI',
    'RUR',
    'IRI'
  ], {
    U: 'pipez:universal_pipe',
    I: 'minecraft:iron_block',
    R: 'create:iron_sheet'
  }).id('kubejs:pipez/basic_upgrade')
  event.recipes.create.mechanical_crafting('pipez:improved_upgrade', [
    'GGG',
    'GUG',
    'GGG'
  ], {
    G: 'kubejs:gold_singularity',
    U: 'pipez:basic_upgrade'
  }).id('kubejs:pipez/improved_upgrade')
  event.recipes.create.mechanical_crafting('pipez:advanced_upgrade', [
    'DDD',
    'DUD',
    'DDD'
  ], {
    D: 'kubejs:diamond_singularity',
    U: 'pipez:improved_upgrade'
  }).id('kubejs:pipez/advanced_upgrade')
  event.recipes.create.mechanical_crafting('pipez:ultimate_upgrade', [
    'NNN',
    'NUN',
    'NNN'
  ], {
    N: 'kubejs:netherite_singularity',
    U: 'pipez:advanced_upgrade'
  }).id('kubejs:pipez/ultimate_upgrade')
  event.recipes.create.mechanical_crafting('pipez:infinity_upgrade', [
    'FFF',
    'FUF',
    'FFF'
  ], {
    F: 'kubejs:final_singularity',
    U: 'pipez:ultimate_upgrade'
  }).id('kubejs:pipez/infinity_upgrade')
})