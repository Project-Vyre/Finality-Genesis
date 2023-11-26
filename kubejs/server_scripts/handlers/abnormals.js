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
    WOOD_TYPES.forEach(insert => {
        event.shapeless(`woodworks:${insert}_chest`, [
            'minecraft:chest'
        ]).id(`finality:woodworks/vanilla_chest_to_${insert}_chest_conversion`)
        event.shapeless(`woodworks:${insert}_trapped_chest`, [
            'minecraft:trapped_chest'
        ]).id(`finality:woodworks/vanilla_trapped_chest_to_${insert}_trapped_chest_conversion`)
        event.shapeless(`minecraft:${insert}_planks`, [
            `woodworks:${insert}_boards`
        ]).id(`finality:woodworks/${insert}_boards_revert`)
    })
    event.remove({ id: 'abnormals_delight:atmospheric/laurel_cabinet' })
    if (Platform.isLoaded('incubation') && Platform.isLoaded('farmersdelight')) {
        console.log('Removing Incubation Fried Egg recipes to avoid conflicts.')
        event.remove([
            { id: 'incubation:fried_egg' },
            { id: 'incubation:fried_egg_from_smoking' },
            { id: 'incubation:fried_egg_from_campfire_cooking' }
        ])
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

ServerEvents.tags('item', event => {
    AUTLOG.forEach(insert => {
        event.add('forge:stripped_logs', `autumnity:stripped_${insert}`)
    })
    AUTWOOD.forEach(insert => {
        event.add('forge:stripped_wood', `autumnity:stripped_${insert}`)
    })
    ATMOLOG.forEach(insert => {
        event.add('forge:stripped_logs', `atmospheric:stripped_${insert}`)
    })
    ATMOWOOD.forEach(insert => {
        event.add('forge:stripped_wood', `atmospheric:stripped_${insert}`)
    })
})

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        'woodworks:spruce_ladder',
        'woodworks:birch_ladder',
        'woodworks:jungle_ladder',
        'woodworks:acacia_ladder',
        'woodworks:dark_oak_ladder',
        'woodworks:mangrove_ladder', // mangrove, crimson, warped
        'woodworks:crimson_ladder',
        'woodworks:warped_ladder'
    ])
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