let AUT = [
    'maple_log',
    'maple_wood'
]
// let ATMO = ['atmospheric:stripped']
ServerEvents.recipes(event => {
    AUT.forEach(insert => {
        event.recipes.createItemApplication('create:andesite_casing', [`autumnity:stripped_${insert}`, 'create:andesite_alloy']).id(`finality:andesite_casing_${insert}_autumnity`)
        event.recipes.createItemApplication('create:copper_casing', [`autumnity:stripped_${insert}`, 'minecraft:copper_ingot']).id(`finality:copper_casing_${insert}_autumnity`)
        event.recipes.createItemApplication('create:brass_casing', [`autumnity:stripped_${insert}`, 'create:brass_ingot']).id(`finality:brass_casing_${insert}_autumnity`)
    })
})