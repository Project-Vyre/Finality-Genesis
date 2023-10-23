// requires: create_central_kitchen

/**
 * Authors
 * 
 * @CelestialAbyss
 */

console.log("Removing unnecessary recipes from Create Central Kitchen.")

ServerEvents.recipes(event => {
    event.remove([
        { id: 'create_central_kitchen:crafting/dough_1' },
        { id: 'create_central_kitchen:crafting/dough_2' },
        { id: 'create_central_kitchen:crafting/dough_3' },
        { id: 'create_central_kitchen:crafting/dough_4' }
    ])
})