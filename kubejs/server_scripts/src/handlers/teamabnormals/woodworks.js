/**
 * @file Server handler for Woodworks from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: woodworks
// requires: kubejs_create

let logs = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']
let hyphae = ['crimson', 'warped']

ServerEvents.recipes(event => {
  console.log('Applying chest compat recipes for Woodworks...')
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let insert = WOOD_TYPES[i];
    event.shapeless(`woodworks:${insert}_chest`, [
      'minecraft:chest'
    ]).id(`finality:woodworks/vanilla_chest_to_${insert}_chest_conversion`)
    event.shapeless('minecraft:chest', [
      `woodworks:${insert}_chest`
    ]).id(`finality:woodworks/woodworks_${insert}_chest_to_vanilla_conversion`)
    event.shapeless(`woodworks:trapped_${insert}_chest`, [
      'minecraft:trapped_chest'
    ]).id(`finality:woodworks/vanilla_trapped_chest_to_${insert}_trapped_chest_conversion`)
    event.shapeless('minecraft:trapped_chest', [
      `woodworks:trapped_${insert}_chest`
    ]).id(`finality:woodworks/woodworks_trapped_${insert}_chest_to_vanilla_conversion`)
    event.shapeless(`minecraft:${insert}_planks`, [
      `woodworks:${insert}_boards`
    ]).id(`finality:woodworks/${insert}_boards_revert`)
  }
  for (let i = 0; i < logs.length; i++) {
    let insert = logs[i];
    event.recipes.minecraft.crafting_shaped(`4x woodworks:${insert}_chest`, [
      'PPP',
      'P P',
      'PPP'
    ], {
      P: `minecraft:${insert}_log`
    }).id(`finality:woodworks/${insert}_chests_from_logs`)
  }
  for (let i = 0; i < hyphae.length; i++) {
    let insert = hyphae[i];
    event.recipes.minecraft.crafting_shaped(`4x woodworks:${insert}_chest`, [
      'PPP',
      'P P',
      'PPP'
    ], {
      P: `minecraft:${insert}_hyphae`
    }).id(`finality:woodworks/${insert}_chests_from_hyphae`)
  }
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'woodworks:sawmill')
  // mangrove, crimson, warped
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let element = WOOD_TYPES[i];
    event.add('create:wrench_pickup', [
      `woodworks:${element}_ladder`,
      `woodworks:${element}_beehive`,
      `woodworks:${element}_boards`
    ])
  }
})