// requires: create_central_kitchen

/**
 * @file Server handler for Create Central Kitchen.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
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
