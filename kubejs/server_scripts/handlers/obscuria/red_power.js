// requires: red_power
// requires: create
// requires: createaddition

/**
 * @file Server handler for Red Power.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.shaped('4x red_power:node', [
    'IAI',
    'IEI'
  ], {
    I: '#forge:ingots/iron',
    A: 'minecraft:amethyst_shard',
    E: 'create:electron_tube'
  }).id('red_power:nodes/node')
  event.shaped('16x red_power:wires', [
    'RRR',
    'CCC',
    'RRR'
  ], {
    R: 'minecraft:redstone',
    C: 'createaddition:copper_wire'
  }).id('red_power:wires/wires')
  event.shaped('red_power:safety_glasses', [
    'RLR',
    'GIG'
  ], {
    R: 'minecraft:red_dye',
    I: 'create:iron_sheet',
    L: '#forge:leather',
    G: '#forge:glass/black'
  }).id('red_power:safety_glasses')
})