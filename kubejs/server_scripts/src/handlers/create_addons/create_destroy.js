/**
 * @file Server handler for Create: Destroy
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: destroy
// requires: createaddition
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ id: 'destroy:compat/createaddition/crafting/diamond_grid_sandpaper' })
})