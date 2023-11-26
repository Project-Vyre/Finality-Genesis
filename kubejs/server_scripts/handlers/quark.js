// requires: quark
// requires: create

/**
 * @file Server handler for Quark.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.shaped('kubejs:denied_result', [
        'ILI',
        'ILI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        L: '#minecraft:logs'
    }).id('quark:tweaks/crafting/utility/misc/easy_hopper')
    event.shaped('4x kubejs:denied_result', [
        'LLL',
        'L L',
        'LLL'
    ], {
        L: '#minecraft:logs'
    }).id('quark:tweaks/crafting/utility/chests/mixed_chest_wood_but_without_exclusions')  
})

ServerEvents.tags('block', event => {
    event.add('create:fan_transparent', [
        'quark:gold_bars'
    ])
    event.add('create:wrench_pickup', [
        'quark:gold_bars'
    ])
})