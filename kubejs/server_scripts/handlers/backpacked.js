// requires: backpacked
// requires: create

/**
 * @file Server handler for Backpacked.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
To-Do List

- Planning on changing the recipes later at some point.
*/

ServerEvents.recipes(event => {
    event.shaped('backpacked:backpack', [
        'HHH',
        'SIS',
        'HHH'
    ], {
        H: 'minecraft:rabbit_hide',
        S: 'minecraft:string',
        I: 'minecraft:iron_ingot'
    }).id('backpacked:backpack')
    event.shaped('backpacked:backpack', [
        'LLL',
        'SIS',
        'LLL'
    ], {
        L: 'minecraft:leather',
        S: 'minecraft:string',
        I: 'minecraft:iron_ingot'
    }).id('finality:backpack_alt')
})

ServerEvents.tags('block', event => {
    WOOD_TYPES.forEach(wood => {
        event.add('create:wrench_pickup', `backpacked:${wood}_backpack_shelf`)
    })
})