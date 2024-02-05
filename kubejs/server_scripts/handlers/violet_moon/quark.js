// requires: quark
// requires: kubejs_create

/**
 * @file Server handler for Quark.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let quarkWoods = [
    'ancient',
    'blossom',
    'azalea'
]

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
    for (let i = 0; i < quarkWoods.length; i++) {
        let element = quarkWoods[i]
        event.recipes.create.cutting(
            `quark:stripped_${element}_log`,
            `quark:${element}_log`
        ).processingTime(50).id(`create:cutting/compat/quark/${element}_log`)
        event.recipes.create.cutting(
            `quark:stripped_${element}_wood`,
            `quark:${element}_wood`
        ).processingTime(50).id(`create:cutting/compat/quark/${element}_wood`)
    }
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
    if (Platform.isLoaded('woodworks')) {
        for (let i = 0; i < WOOD_TYPES.length; i++) {
            let element = WOOD_TYPES[i];
            event.remove({
                mod: 'quark',
                output: 'quark:' + element + '_chest'
            })
        }
        event.shaped('4x quark:bamboo_ladder', [
            'S S',
            'SPS',
            'S S'
        ], {
            S: '#forge:rods/wooden',
            P: 'quark:bamboo_planks'
        }).id('finality:quark/bamboo_ladder')
        event.shaped('4x quark:ancient_ladder', [
            'S S',
            'SPS',
            'S S'
        ], {
            S: '#forge:rods/wooden',
            P: 'quark:bamboo_planks'
        }).id('finality:quark/ancient_ladder')
        // deprecate in 1.20.1+
        event.shaped('4x quark:blossom_ladder', [
            'S S',
            'SPS',
            'S S'
        ], {
            S: '#forge:rods/wooden',
            P: 'quark:bamboo_planks'
        }).id('finality:quark/blossom_ladder')
        event.shaped('4x quark:azalea_ladder', [
            'S S',
            'SPS',
            'S S'
        ], {
            S: '#forge:rods/wooden',
            P: 'quark:bamboo_planks'
        }).id('finality:quark/azalea_ladder')
    }
})

ServerEvents.tags('item', event => {
    for (let i = 0; i < quarkWoods.length; i++) {
        let element = quarkWoods[i];
        event.add('create:modded_stripped_logs', 'quark:stripped_' + element + '_log')
        event.add('create:modded_stripped_wood', 'quark:stripped_' + element + '_wood')
    }
})

ServerEvents.tags('block', event => {
    event.add('create:fan_transparent', [
        'quark:gold_bars'
    ])
    event.add('create:wrench_pickup', [
        'quark:gold_bars',
        'quark:deepslate_furnace',
        'quark:blackstone_furnace'
    ])
})