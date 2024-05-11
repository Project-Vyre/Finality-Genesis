// requires: aquamirae
// requires: kubejs_create

/**
 * @file Server handler for Aquamirae.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.shaped('aquamirae:oxygen_tank', [
    'IOI',
    'IOI',
    'IOI'
  ], {
    I: 'create:iron_sheet',
    O: 'aquamirae:oxygelium'
  }).id('aquamirae:oxygen_tank')
  event.recipes.create.mixing('aquamirae:ship_graveyard_echo', [
    'minecraft:soul_sand',
    'minecraft:kelp',
    '#minecraft:boats',
    Fluid.of('minecraft:water', 1000)
  ]).id('finality:mixing/ship_graveyard_echo')
})