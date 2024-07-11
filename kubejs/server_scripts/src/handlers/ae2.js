/**
 * @file Server handler for AE2.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: ae2
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.minecraft.crafting_shapeless('ae2:fluix_upgrade_smithing_template', [
    'create:iron_sheet',
    'ae2:fluix_crystal'
  ]).id('ae2:tools/fluix_upgrade_smithing_template')
  event.recipes.minecraft.crafting_shaped('ae2:quartz_fiber', [
    'CGC',
    'GCG',
    'CGC'
  ], {
    C: 'ae2:certus_quartz_dust',
    G: '#forge:glass/colorless'
  }).id('ae2:network/parts/quartz_fiber_part')
  event.recipes.create.deploying('ae2:fluix_upgrade_smithing_template', [
    'create:iron_sheet',
    'ae2:fluix_crystal'
  ]).id('kubejs:ae2/deploying/tools/fluix_upgrade_smithing_template')
  event.forEachRecipe({ mod: 'ae2' }, recipe => {
    recipe.replaceInput('#forge:ingots/iron', 'kubejs:iridium_ingot')
    recipe.replaceInput('minecraft:redstone', 'kubejs:redstone_singularity')
    recipe.replaceInput('minecraft:glowstone_dust', 'kubejs:glowstone_singularity')
    recipe.replaceInput('minecraft:ender_pearl', 'kubejs:ender_pearl_singularity')
  })
  event.recipes.minecraft.crafting_shaped('kubejs:denied_result', [
    'AAB',
    'CD ',
    'A  '
  ], {
    A: 'kubejs:iridium_ingot',
    B: 'ae2:formation_core',
    C: 'ae2:cell_component_4k',
    D: 'ae2:energy_cell'
  }).id('ae2:tools/matter_cannon')
  event.recipes.create.mechanical_crafting('ae2:matter_cannon', [
    'ISIIIIF',
    'IEI    ',
    ' P     '
  ], {
    I: 'kubejs:iridium_ingot',
    S: 'ae2:cell_component_4k',
    F: 'ae2:formation_core',
    E: 'ae2:energy_cell',
    P: 'kubejs:iridium_sheet'
  }).id('kubejs:ae2/tools/matter_cannon')
})