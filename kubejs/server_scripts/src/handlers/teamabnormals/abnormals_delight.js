/**
 * @file Server handler for Abnormals Delight from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: abnormals_delight

ServerEvents.recipes(event => {
  event.remove({ id: 'abnormals_delight:atmospheric/laurel_cabinet' })
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