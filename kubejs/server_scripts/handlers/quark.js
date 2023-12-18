// requires: quark
// requires: kubejs_create

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
    event.recipes.create.compacting(
        '3x minecraft:iron_ingot',
        '8x quark:iron_plate'
    ).id('finality:quark/compacting/iron_plate_revert')
    if (Platform.isLoaded('aether')) {
        event.shaped('minecraft:chest', [
            'WWW',
            'W W',
            'WWW'
        ], {
            W: [
                'quark:ancient_planks',
                'quark:blossom_planks',
                'quark:azalea_planks',
                'quark:bamboo_planks' // deprecate in 1.20.x+
            ]
        }).id('finality:quark/crafting/vanilla_chest_fallback')
    }
})

ServerEvents.tags('block', event => {
    event.add('create:fan_transparent', [
        'quark:gold_bars'
    ])
    event.add('create:wrench_pickup', [
        'quark:gold_bars'
    ])
})