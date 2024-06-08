/**
 * @file Server handler for Sophisticated Backpacks.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: sophisticatedbackpacks
// requires: kubejs_create
// ignored: true

let recipeIds = [
  'pickup',
  'filter',
  'magnet',
  'feeding',
  'compacting',
  'void',
  'restock',
  'deposit',
  'refill',
  'tool_swapper',
  'pump'
]

let singleStep = [
  'inception',
  'everlasting',
  'crafting',
  'stonecutter',
  'jukebox',
  'tank',
  'battery',
  'anvil'
]

let autoIds = [
  'smelting',
  'smoking',
  'blasting'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < recipeIds.length; i++) {
    let element = recipeIds[i];
    event.remove([
      {
        id: 'sophisticatedbackpacks:' + element + '_upgrade',
        output: 'sophisticatedbackpacks:' + element + '_upgrade'
      },
      {
        id: 'sophisticatedbackpacks:advanced_' + element + '_upgrade',
        output: 'sophisticatedbackpacks:advanced_' + element + '_upgrade'
      }
    ])
  }
  event.remove({ id: 'sophisticatedbackpacks:upgrade_base' })
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:upgrade_base', [
    'SIS',
    'ILI',
    'SIS'
  ], {
    S: 'minecraft:string',
    I: 'create:iron_sheet',
    L: 'minecraft:leather'
  }).id('kubejs:sophisticatedbackpacks/upgrade_base')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:pickup_upgrade', [
    ' M ',
    'PBP',
    ' E '
  ], {
    M: 'create:mechanical_piston',
    P: 'minecraft:string',
    B: 'sophisticatedbackpacks:upgrade_base',
    E: 'create:electron_tube'
  }).id('kubejs:sophisticatedbackpacks/pickup_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_pickup_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:brass_sheet',
    B: 'sophisticatedbackpacks:pickup_upgrade'
  }).id('kubejs:sophisticatedbackpacks/advanced_pickup_upgrade')
})