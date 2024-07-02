/**
 * @file Server handler for the Waystones mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: waystones
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'waystones:warp_stone' },
    { id: 'waystones:warp_dust' },
    { id: 'waystones:return_scroll' },
    { id: 'waystones:bound_scroll' },
    { id: 'waystones:warp_scroll' },
    { id: 'waystones:warp_plate' }
  ])
  event.recipes.minecraft.crafting_shaped('waystones:warp_stone', [
    'AAA',
    'AEA',
    'AAA'
  ], {
    A: 'minecraft:amethyst_shard',
    E: 'minecraft:ender_pearl'
  }).id('kubejs:waystones/warpstone')
  event.recipes.create.milling(
    'waystones:warp_dust',
    'waystones:warp_stone'
  ).processingTime(250).id('kubejs:waystones/milling/warp_dust')
  event.recipes.minecraft.crafting_shaped('3x waystones:return_scroll', [
    'ABA',
    'CCC'
  ], {
    A: 'minecraft:gold_nugget',
    B: 'waystones:warp_dust',
    C: 'minecraft:paper'
  }).id('kubejs:waystones/return_scroll')
  event.recipes.minecraft.crafting_shaped('3x waystones:bound_scroll', [
    'AAA',
    'BCB',
    'DDD'
  ], {
    A: 'waystones:warp_dust',
    B: 'minecraft:gold_nugget',
    C: 'minecraft:ender_pearl',
    D: 'minecraft:paper'
  }).id('kubejs:waystones/bound_scroll')
  event.recipes.minecraft.crafting_shaped('3x waystones:warp_scroll', [
    'ABA',
    'ACA',
    'DDD'
  ], {
    A: 'minecraft:gold_nugget',
    B: 'waystones:warp_dust',
    C: 'minecraft:ender_pearl',
    D: 'minecraft:paper'
  }).id('kubejs:waystones/warp_scroll')
  event.recipes.create.deploying('waystones:warp_plate', [
    'minecraft:stone_pressure_plate',
    'waystones:warp_dust'
  ]).id('kubejs:waystones/deploying/warp_plate')
})