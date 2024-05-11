// requires: craftingautomat
// requires: create

/**
 * @file Server handler for Crafting Automat.
 * @deprecated The vanilla Crafter has been implemented in 1.20.2+.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove({ id: 'craftingautomat:autocrafter' });
  event.shaped('craftingautomat:autocrafter', [
    'III',
    'ICI',
    'RDR'
  ], {
    I: 'minecraft:iron_ingot',
    D: 'minecraft:dispenser',
    C: 'minecraft:crafting_table',
    R: 'minecraft:redstone'
  }).id('minecraft:autocrafter');
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', 'craftingautomat:autocrafter')
})