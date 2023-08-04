// requires: atmospheric
// requires: autumnity

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

// ServerEvents.recipes(event => {
//     AUT.forEach(insert => {
//         event.recipes.createItemApplication('create:andesite_casing', [`autumnity:stripped_${insert}`, 'create:andesite_alloy']).id(`finality:andesite_casing_${insert}_autumnity`)
//         event.recipes.createItemApplication('create:copper_casing', [`autumnity:stripped_${insert}`, 'minecraft:copper_ingot']).id(`finality:copper_casing_${insert}_autumnity`)
//         event.recipes.createItemApplication('create:brass_casing', [`autumnity:stripped_${insert}`, 'create:brass_ingot']).id(`finality:brass_casing_${insert}_autumnity`)
//     })
//     ATMO.forEach(insert => {
//         event.recipes.createItemApplication('create:andesite_casing', [`atmospheric:stripped_${insert}`, 'create:andesite_alloy']).id(`finality:andesite_casing_${insert}_atmospheric`)
//         event.recipes.createItemApplication('create:copper_casing', [`atmospheric:stripped_${insert}`, 'minecraft:copper_ingot']).id(`finality:copper_casing_${insert}_atmospheric`)
//         event.recipes.createItemApplication('create:brass_casing', [`atmospheric:stripped_${insert}`, 'create:brass_ingot']).id(`finality:brass_casing_${insert}_atmospheric`)
//     })
// })