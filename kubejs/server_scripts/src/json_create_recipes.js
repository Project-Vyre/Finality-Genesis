// ignored: true
// requires: create

/**
 * @file In case KubeJS is absent or has not updated yet, this handles Create's recipes in JSON.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {*} event 
 * @param {Internal.JsonArray[]} outputs 
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
  }).id()
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
    type: 'create:splashing',
    ingredients: input,
    results: outputs
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
 * @param {Internal.JsonArray[]} outputs 
 * @param {Internal.JsonArray[]} inputs 
 * @param {string} recipeId 
 */
function jsonCreateMixing(event, outputs, inputs, recipeId) {
  event.custom({
    type: 'create:mixing',
    ingredients: inputs,
    results: outputs
  }).id(recipeId)
}