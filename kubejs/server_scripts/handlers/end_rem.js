// requires: endrem
// requires: kubejs_create

/**
 * @file Server handler for End Remastered.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.remove([
        { id: 'endrem:exotic_eye' },
        { id: 'endrem:witch_eye' }
    ])
    if (!Platform.isLoaded('extendedcrafting')) {
        event.recipes.create.mixing('endrem:exotic_eye', [
            '4x minecraft:glow_ink_sac',
            'minecraft:fire_coral',
            'minecraft:bubble_coral',
            'minecraft:tube_coral',
            'minecraft:horn_coral',
            'minecraft:conduit',
            Fluid.of('kubejs:shimmer', 250)
        ]).id('finality:endrem/mixing/exotic_eye')
        event.recipes.create.mixing('endrem:witch_eye', [
            'minecraft:ender_eye',
            'endrem:witch_pupil',
            'minecraft:redstone',
            'minecraft:glowstone_dust',
        ]).heated().id('finality:endrem/mixing/witch_eye')
    }
    if (Platform.isLoaded('extendedcrafting')) {
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
    }
})