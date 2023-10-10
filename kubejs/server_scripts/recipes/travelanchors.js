// requires: travelanchors
// requires: create

/**
 * Authors
 * 
 * @CelestialAbyss
 */

console.log('Correcting Travel Staff recipe. Please let me know if the Travel Staff ever uses 2 Ender Pearls and 1 Iron Ingot for whatever reason.')

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