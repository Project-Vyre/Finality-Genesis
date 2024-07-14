// requires: bhc
// requires: kubejs_create
// requires: supplementaries

/**
 * @file Server handler for Baubley Heart Canisters.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove([
    { id: 'bhc:canister' },
    { id: 'bhc:relic_apple' },
    { id: 'bhc:god_apple' },
    { id: 'bhc:red_heart_canister' },
    { id: 'bhc:blade_of_vitality' }
  ])
  event.shaped('bhc:canister', [
    ' I ',
    'ICI',
    ' I '
  ], {
    I: 'create:iron_sheet',
    C: 'minecraft:soul_sand'
  }).id('kubejs:bhc/canister')
  event.shaped('bhc:relic_apple', [
    ' D ',
    'EAE',
    ' D '
  ], {
    D: 'minecraft:diamond',
    E: 'minecraft:emerald',
    A: 'minecraft:golden_apple'
  }).id('kubejs:bhc/relic_apple')
  event.shapeless('bhc:relic_apple', [
    '2x minecraft:diamond',
    '2x minecraft:emerald',
    'minecraft:golden_apple'
  ]).id('kubejs:bhc/relic_apple_shapeless')
  event.recipes.create.haunting([
    Item.of('bhc:wither_bone').withChance(0.25),
    Item.of('minecraft:coal').withChance(0.25),
    Item.of('supplementaries:ash').withChance(0.25)
  ], 'minecraft:bone').id('kubejs:bhc/haunting/wither_bone')
  event.shapeless('bhc:red_heart_canister', [
    'bhc:red_heart',
    '#forge:wither_bones',
    'bhc:relic_apple',
    'bhc:canister'
  ]).id('kubejs:bhc/red_heart_canister')
  event.recipes.minecraft.crafting_shaped('bhc:blade_of_vitality', [
    'RSY',
    'GAB',
    ' I '
  ], {
    R: 'bhc:red_heart_canister',
    S: 'bhc:soul_heart_crystal',
    Y: 'bhc:yellow_heart_canister',
    G: 'bhc:green_heart_canister',
    A: 'bhc:heart_amulet',
    B: 'bhc:blue_heart_canister',
    I: 'kubejs:iridium_sword'
  }).id('kubejs:blade_of_vitality')
})