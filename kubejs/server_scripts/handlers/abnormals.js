// requires: atmospheric
// requires: autumnity
// requires: woodworks
// requires: create

/**
 * @file Server handler for Team Abnormals related mods.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    console.log('Applying chest compat recipes for Woodworks...')
    for (let i = 0; i < WOOD_TYPES.length; i++) {
        let insert = WOOD_TYPES[i];
        event.shapeless(`woodworks:${insert}_chest`, [
            'minecraft:chest'
        ]).id(`finality:woodworks/vanilla_chest_to_${insert}_chest_conversion`)
        event.shapeless(`woodworks:${insert}_trapped_chest`, [
            'minecraft:trapped_chest'
        ]).id(`finality:woodworks/vanilla_trapped_chest_to_${insert}_trapped_chest_conversion`)
        event.shapeless(`minecraft:${insert}_planks`, [
            `woodworks:${insert}_boards`
        ]).id(`finality:woodworks/${insert}_boards_revert`)
    }
    event.remove({ id: 'abnormals_delight:atmospheric/laurel_cabinet' })
    if (Platform.isLoaded('incubation') && Platform.isLoaded('farmersdelight')) {
        console.log('Removing Incubation Fried Egg recipes to avoid conflicts.')
        event.remove([
            { id: 'incubation:fried_egg' },
            { id: 'incubation:fried_egg_from_smoking' },
            { id: 'incubation:fried_egg_from_campfire_cooking' }
        ])
    }
    if (Platform.isLoaded('mysticalagriculture')) {
        event.recipes.minecraft.crafting_shapeless('mysticalagriculture:nature_agglomeratio', [
            'minecraft:pumpkin',
            'minecraft:potato',
            'atmospheric:barrel_cactus',
            'minecraft:sugar_cane'
        ]).id('finality:mysticalagriculture/crafting/atmospheric_cactus_agglomeratio')
    }
    if (Platform.isLoaded('neapolitan')) {
        console.log('Neapolitan detected! Forcefully overriding recipe to use Create\'s Bar of Chocolate.')
        event.recipes.create.compacting(
            'create:bar_of_chocolate',
            Fluid.of('create:chocolate', 250)
        ).id('create:compacting/chocolate')
    }
})

console.log('Applying recipes and tags for Team Abnormals mods...')

let AUTLOG = [
    'maple_log'
]
let AUTWOOD = [
    'maple_wood'
]
let ATMOLOG = [
    'rosewood_log',
    'morado_log',
    'yucca_log',
    'aspen_log',
]
let ATMOWOOD = [
    'rosewood',
    'morado_wood',
    'yucca_wood',
    'aspen_wood'
]
let ATMO_WOOD_TYPES = [
    'rosewood',
    'morado',
    'yucca',
    'kousa',
    'aspen',
    'grimwood'
]

ServerEvents.tags('item', event => {
    for (let i = 0; i < AUTLOG.length; i++) {
        let insert = AUTLOG[i];
        event.add('forge:stripped_logs', `autumnity:stripped_${insert}`)
    }
    for (let i = 0; i < AUTWOOD.length; i++) {
        let insert = AUTWOOD[i];
        event.add('forge:stripped_wood', `autumnity:stripped_${insert}`)
    }
    for (let i = 0; i < ATMOLOG.length; i++) {
        let insert = ATMOLOG[i];
        event.add('forge:stripped_logs', `atmospheric:stripped_${insert}`)
    }
    for (let i = 0; i < ATMOWOOD.length; i++) {
        let insert = ATMOWOOD[i];
        event.add('forge:stripped_wood', `atmospheric:stripped_${insert}`)
    }
})

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', 'woodworks:sawmill')
    // mangrove, crimson, warped
    for (let i = 0; i < WOOD_TYPES.length; i++) {
        let element = WOOD_TYPES[i];
        event.add('create:wrench_pickup', [
            `woodworks:${element}_ladder`,
            `woodworks:${element}_beehive`,
            `woodworks:${element}_boards`
        ])
    }
    for (let i = 0; i < ATMO_WOOD_TYPES.length; i++) {
        let element = ATMO_WOOD_TYPES[i];
        event.add('create:wrench_pickup', `atmospheric:${element}_beehive`)
    }
    event.add('create:wrench_pickup', 'autumnity:maple_beehive')
})

/* Old code that should not be used.
ServerEvents.recipes(event => {
    AUT.forEach(insert => {
        event.recipes.createItemApplication('create:andesite_casing', [`autumnity:stripped_${insert}`, 'create:andesite_alloy']).id(`finality:andesite_casing_${insert}_autumnity`)
        event.recipes.createItemApplication('create:copper_casing', [`autumnity:stripped_${insert}`, 'minecraft:copper_ingot']).id(`finality:copper_casing_${insert}_autumnity`)
        event.recipes.createItemApplication('create:brass_casing', [`autumnity:stripped_${insert}`, 'create:brass_ingot']).id(`finality:brass_casing_${insert}_autumnity`)
    })
    ATMO.forEach(insert => {
        event.recipes.createItemApplication('create:andesite_casing', [`atmospheric:stripped_${insert}`, 'create:andesite_alloy']).id(`finality:andesite_casing_${insert}_atmospheric`)
        event.recipes.createItemApplication('create:copper_casing', [`atmospheric:stripped_${insert}`, 'minecraft:copper_ingot']).id(`finality:copper_casing_${insert}_atmospheric`)
        event.recipes.createItemApplication('create:brass_casing', [`atmospheric:stripped_${insert}`, 'create:brass_ingot']).id(`finality:brass_casing_${insert}_atmospheric`)
    })
})
*/