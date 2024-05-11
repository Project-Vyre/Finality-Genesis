// requires: travelanchors
// requires: create

/**
 * @file Server handler for the Travel Anchors mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log('Travel Anchors detected! Correcting Travel Staff recipe.')
console.log('Please let me know on GitHub if the Travel Staff ever uses 2 Ender Pearls and 1 Iron Ingot again for whatever reason.')

ServerEvents.recipes(event => {
  event.shaped('travelanchors:travel_staff', [
    '  E',
    ' I ',
    'I  '
  ], {
    E: 'minecraft:ender_pearl',
    I: 'minecraft:iron_ingot'
  }).id('travelanchors:travel_staff')
})