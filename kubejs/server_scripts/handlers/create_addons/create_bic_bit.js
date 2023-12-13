// requires: create_bic_bit
// requires: kubejs_create
// ignored: true

/**
 * @file Server handler for the Create: Bitterballen addon.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

//console.log('Please ignore any recipe JSON parsing errors from Create: Bitterballen, thank you.')
console.log('Recipe errors have been fixed as of 0.0.61')

ServerEvents.recipes(event => {
    event.remove([
        { id: 'create_bic_bit:frikandel_sandwich_deploying' },
        { id: 'create_bic_bit:kroket_sandwich_deploying' }
    ])
    event.recipes.minecraft.crafting_shapeless('create_bic_bit:frikandel_sandwich', [
        'minecraft:bread',
        'create_bic_bit:frikandel'
    ]).id('create_bic_bit:frikandel_sandwich_recipe')
    event.recipes.minecraft.crafting_shapeless('create_bic_bit:kroket_sandwich', [
        'minecraft:bread',
        'create_bic_bit:kroket'
    ]).id('create_bic_bit:kroket_sandwich_recipe')
    event.recipes.create.deploying('create_bic_bit:frikandel_sandwich', [
        'minecraft:bread',
        'create_bic_bit:frikandel'
    ]).id('create_bic_bit:frikandel_sandwich_deploying')
    event.recipes.create.deploying('create_bic_bit:kroket_sandwich', [
        'minecraft:bread',
        'create_bic_bit:kroket'
    ]).id('create_bic_bit:kroket_sandwich_deploying')
})