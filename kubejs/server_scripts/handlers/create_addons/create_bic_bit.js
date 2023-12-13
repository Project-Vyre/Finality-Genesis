// requires: create_bic_bit
// requires: kubejs_create
// ignored: false

/**
 * @file Server handler for the Create: Bitterballen addon.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

//console.log('Please ignore any recipe JSON parsing errors from Create: Bitterballen, thank you.')
console.log('Recipe errors related to Create: Bitterballen have been fixed as of 0.0.61')

ServerEvents.recipes(event => {
    event.remove([
        { id: 'create_bic_bit:frikandel_sandwich_deploying' },
        { id: 'create_bic_bit:kroket_sandwich_deploying' }
    ])
    event.recipes.minecraft.crafting_shaped('create_bic_bit:frikandel_sandwich', [
        'A',
        'B'
    ], {
        B: 'minecraft:bread',
        A: 'create_bic_bit:frikandel'
    }).id('create_bic_bit:frikandel_sandwich_recipe')
    event.recipes.minecraft.crafting_shaped('create_bic_bit:kroket_sandwich', [
        'A',
        'B'
    ], {
        B: 'minecraft:bread',
        A: 'create_bic_bit:kroket'
    }).id('create_bic_bit:kroket_sandwich_recipe')
    event.recipes.create.deploying('create_bic_bit:frikandel_sandwich', [
        'minecraft:bread',
        'create_bic_bit:frikandel'
    ]).id('create_bic_bit:frikandel_sandwich_deploying')
    event.recipes.create.deploying('create_bic_bit:kroket_sandwich', [
        'minecraft:bread',
        'create_bic_bit:kroket'
    ]).id('create_bic_bit:kroket_sandwich_deploying')
    // triple sandwich making
    event.recipes.minecraft.crafting_shaped('3x create_bic_bit:frikandel_sandwich', [
        'AAA',
        'BBB'
    ], {
        B: 'minecraft:bread',
        A: 'create_bic_bit:frikandel'
    }).id('finality:create_bic_bit/crafting/triple_frikandel_sandwich')
    event.recipes.minecraft.crafting_shaped('3x create_bic_bit:kroket_sandwich', [
        'AAA',
        'BBB'
    ], {
        B: 'minecraft:bread',
        A: 'create_bic_bit:kroket'
    }).id('finality:create_bic_bit/crafting/triple_kroket_sandwich')
    if (Platform.isLoaded('farmersdelight')) {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [Ingredient.of('minecraft:potato').toJson()],
            result: [Ingredient.of('create_bic_bit:raw_fries').toJson()],
            tool: Item.of('#forge:tools/knives').toJson()
        }).id('finality:create_bic_bit/cutting/raw_fries')
    }
})