// requires: endrem
// requires: extendedcrafting

/**
 * @file Server handler for End Remastered.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.remove([
        { id: 'endrem:exotic_eye' },
        { id: 'endrem:witch_eye' }
    ])
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'minecraft:ender_eye'
        },
        ingredients: [
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:fire_coral').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:conduit').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:bubble_coral').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:conduit').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:tube_coral').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:conduit').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:horn_coral').toJson(),
            Ingredient.of('minecraft:glow_ink_sac').toJson(),
            Ingredient.of('minecraft:conduit').toJson()
        ],
        result: {
            item: 'endrem:exotic_eye'
        }
    }).id('endrem:ritual_exotic_eye')
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'endrem:witch_pupil'
        },
        ingredients: [
            Ingredient.of('minecraft:ender_eye').toJson(),
            Ingredient.of('minecraft:ender_eye').toJson(),
            Ingredient.of('minecraft:ender_eye').toJson(),
            Ingredient.of('minecraft:ender_eye').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
        ],
        result: {
            item: 'endrem:witch_eye'
        }
    }).id('finality:ritual_witch_eye')
})