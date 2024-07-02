/**
 * @file Server handler for Tetra.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: tetra
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.mixing('tetra:forged_bolt', [
    '2x kubejs:iridium_nugget',
    'minecraft:deepslate',
    Fluid.of('kubejs:molten_netherite', 20)
  ]).superheated().id('kubejs:tetra/mixing/bolt')

  event.recipes.create.mixing('tetra:forged_beam', [
    'kubejs:iridium_rod',
    'minecraft:deepslate',
    Fluid.of('kubejs:molten_netherite', 10)
  ]).superheated().id('kubejs:tetra/mixing/forged_beam')

  event.recipes.create.compacting('tetra:forged_mesh', [
    'kubejs:iridium_sheet',
    'minecraft:deepslate',
    Fluid.of('kubejs:molten_netherite', 90)
  ]).superheated().id('kubejs:tetra/mixing/forged_mesh')

  event.recipes.create.mixing('tetra:quick_latch', [
    'kubejs:iridium_nugget',
    'minecraft:tripwire_hook',
    'minecraft:deepslate',
    Fluid.of('kubejs:molten_netherite', 10)
  ]).superheated().id('kubejs:tetra/mixing/quick_latch')

  event.recipes.create.mixing('tetra:vent_plate', [
    'kubejs:iridium_sheet',
    'kubejs:netherite_nugget',
    'minecraft:deepslate',
    Fluid.of('kubejs:molten_netherite', 90)
  ]).superheated().id('kubejs:tetra/mixing/vent_plate')
})