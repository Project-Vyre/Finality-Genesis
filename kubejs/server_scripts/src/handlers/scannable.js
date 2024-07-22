/**
 * @file Server handler for Scannable.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: scannable
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ mod: 'scannable' })
  event.recipes.minecraft.crafting_shaped('scannable:scanner', [
    'I I',
    'TET',
    ' T '
  ], {
    I: '#forge:ingots/iron',
    T: '#forge:plates/iron',
    E: 'create:electron_tube'
  }).id('kubejs:scannable/scanner')
  event.recipes.minecraft.crafting_shaped('scannable:blank_module', [
    'GGG',
    'GEG',
    'AAA'
  ], {
    G: 'minecraft:green_dye',
    E: 'create:electron_tube',
    A: '#forge:nuggets/gold'
  }).id('kubejs:scannable/blank_module')
  // modules
  event.recipes.minecraft.crafting_shapeless('scannable:range_module', [
    'scannable:blank_module',
    'minecraft:ender_pearl',
    'minecraft:ender_pearl'
  ]).id('kubejs:scannable/range_module')
  event.recipes.minecraft.crafting_shapeless('scannable:entity_module', [
    'scannable:blank_module',
    'minecraft:lead'
  ]).id('kubejs:scannable/entity_module')
  event.recipes.minecraft.crafting_shapeless('scannable:friendly_entity_module', [
    'scannable:blank_module',
    '#forge:seeds'
  ]).id('kubejs:scannable/friendly_entity_module')
  event.recipes.minecraft.crafting_shapeless('scannable:hostile_entity_module', [
    'scannable:blank_module',
    'minecraft:bone',
    'minecraft:rotten_flesh'
  ]).id('kubejs:scannable/hostile_entity_module')
  event.recipes.minecraft.crafting_shapeless('scannable:block_module', [
    'scannable:blank_module',
    '#forge:stone'
  ]).id('kubejs:scannable/block_module')
  event.recipes.minecraft.crafting_shapeless('scannable:common_ores_module', [
    'scannable:blank_module',
    'minecraft:coal',
    'minecraft:copper_ingot'
  ]).id('kubejs:scannable/common_ores_module')
  event.recipes.minecraft.crafting_shapeless('scannable:rare_ores_module', [
    'scannable:blank_module',
    'minecraft:diamond',
    'kubejs:netherite_nugget'
  ]).id('kubejs:scannable/rare_ores_module')
  event.recipes.minecraft.crafting_shapeless('scannable:fluid_module', [
    'scannable:blank_module',
    'minecraft:bucket'
  ]).id('kubejs:scannable/fluid_module')
  event.recipes.minecraft.crafting_shapeless('scannable:chest_module', [
    'scannable:blank_module',
    '#forge:chests/wooden',
    'minecraft:barrel'
  ]).id('kubejs:scannable/chest_module')
})