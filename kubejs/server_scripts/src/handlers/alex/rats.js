/**
 * @file Server handler for the Rats mod
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: rats
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'rats:potato_pancake' },
  ])
  event.recipes.create.pressing(
    'rats:potato_pancake',
    'minecraft:baked_potato'
  ).id('kubejs:rats/pressing/potato_pancake')
  event.recipes.create.mixing(
    'rats:block_of_cheese',
    Fluid.of('minecraft:milk')
  ).id('kubejs:rats/mixing/cheese_curdling_from_milk')
})