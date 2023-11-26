// requires: goldenhopper
// requires: create

/**
 * @file Server handler for the Golden Hopper.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.shaped('goldenhopper:golden_hopper', [
        'ACA',
        'AHA',
        'RAR'
    ], {
        A: 'create:golden_sheet',
        C: 'minecraft:comparator',
        H: 'minecraft:hopper',
        R: 'minecraft:redstone'
    }).id('goldenhopper:golden_hopper')
})