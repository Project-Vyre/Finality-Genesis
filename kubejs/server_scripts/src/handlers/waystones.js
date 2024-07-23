/**
 * @file Server handler for the Waystones mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: waystones
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'waystones:waystone' },
    { id: 'waystones:mossy_waystone' },
    { id: 'waystones:sandy_waystone' },
    { id: 'waystones:sharestone' },
    { id: 'waystones:portstone' },
    { id: 'waystones:warp_stone' },
    { id: 'waystones:warp_dust' },
    { id: 'waystones:return_scroll' },
    { id: 'waystones:bound_scroll' },
    { id: 'waystones:warp_scroll' },
    { id: 'waystones:warp_plate' }
  ])
  event.recipes.create.mechanical_crafting('waystones:waystone', [
    ' SSS ',
    'SSSSS',
    ' SSS ',
    ' SSS ',
    ' SWS ',
    ' SSS ',
    ' SSS ',
    'SOOOS'
  ], {
    S: 'minecraft:stone_bricks',
    W: 'waystones:warp_stone',
    O: 'minecraft:obsidian'
  }).id('kubejs:waystones/mechanical_crafting/waystone')
  event.recipes.create.mechanical_crafting('waystones:mossy_waystone', [
    ' SSS ',
    'SSSSS',
    ' SSS ',
    ' SSS ',
    ' SWS ',
    ' SSS ',
    ' SSS ',
    'SOOOS'
  ], {
    S: 'minecraft:mossy_stone_bricks',
    W: 'waystones:warp_stone',
    O: 'minecraft:obsidian'
  }).id('kubejs:waystones/mechanical_crafting/mossy_waystone')
  event.recipes.create.mechanical_crafting('waystones:sandy_waystone', [
    ' SSS ',
    'SSSSS',
    ' SSS ',
    ' SSS ',
    ' SWS ',
    ' SSS ',
    ' SSS ',
    'SOOOS'
  ], {
    S: 'minecraft:chiseled_sandstone',
    W: 'waystones:warp_stone',
    O: 'minecraft:obsidian'
  }).id('kubejs:waystones/mechanical_crafting/sandy_waystone')
  event.recipes.create.mechanical_crafting('waystones:sharestone', [
    'SSSSS',
    ' SSS ',
    ' S S ',
    ' SWS ',
    ' S S ',
    ' SSS ',
    'SOOOS'
  ], {
    S: 'minecraft:stone_bricks',
    W: 'waystones:warp_stone',
    O: 'minecraft:obsidian'
  }).id('kubejs:waystones/mechanical_crafting/sharestone')
  event.recipes.create.mechanical_crafting('waystones:portstone', [
    ' S ',
    'SWS',
    'AAA'
  ], {
    S: 'minecraft:stone_bricks',
    W: 'waystones:warp_stone',
    A: 'minecraft:polished_andesite'
  }).id('kubejs:waystones/mechanical_crafting/portstone')
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