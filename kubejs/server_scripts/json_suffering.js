// ignored: true

/**
 * @file In case KubeJS is absent or has not updated yet, this handles Create's recipes in JSON.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {*} event 
 * @param {object[]} outputs 
 * @param {object[]} inputs 
 * @param {string} recipeId 
 */
function jsonCreateBlasting(event, outputs, inputs, recipeId) {
    event.custom({
        type: 'create:blasting',
        ingredients: inputs,
        results: outputs
    }).id(recipeId)
}
/**
 * 
 * @param {*} event 
 * @param {*} outputs 
 * @param {*} inputs 
 * @param {*} recipeId 
 */
function jsonCreateSmoking(event, outputs, inputs, recipeId) {
    event.custom({
        type: 'create:smoking',
        ingredients: inputs,
        results: outputs
    })
}
/**
 * 
 * @param {*} event 
 * @param {*} outputs 
 * @param {*} input 
 * @param {*} recipeId 
 */
function jsonCreateSplashing(event, outputs, input, recipeId) {
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:gravel"
            }
        ],
        "results": [
            {
                "chance": 0.25,
                "item": "minecraft:flint"
            },
            {
                "chance": 0.125,
                "item": "minecraft:iron_nugget"
            }
        ]
    }).id(recipeId)
}

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 * @param {Internal.Json} output 
 * @param {number} outputQuantity 
 * @param {string[]} arrangement 
 * @param {object} ingredientKeys 
 * @param {boolean} mirrored 
 * @param {string} recipeId 
 */
function jsonCreateMechanicalCrafting(event, output, outputQuantity, arrangement, ingredientKeys, mirrored, recipeId) {
    event.custom({
        type: 'create:mechanical_crafting',
        pattern: arrangement,
        key: ingredientKeys,
        result: Item.of(output, outputQuantity).toJson(),
        acceptMirrored: mirrored
    }).id(recipeId)
}

/**
 * 
 * @param {*} event 
 * @param {*} outputs 
 * @param {*} inputs 
 * @param {*} recipeId 
 */
function jsonCreateMixing(event, outputs, inputs, recipeId) {
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:andesite"
            },
            {
                "tag": "forge:nuggets/iron"
            }
        ],
        "results": [
            {
                "item": "create:andesite_alloy"
            }
        ]
    }).id(recipeId)
}