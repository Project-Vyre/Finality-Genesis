/**
 * @file Server handler for Alex's Caves
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// requires: alexscaves
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove({ id: 'alexscaves:polarity_armor_trim_smithing_template' })
  event.recipes.create.deploying('2x alexscaves:polarity_armor_trim_smithing_template', [
    'alexscaves:polarity_armor_trim_smithing_template',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/polarity_armor_trim_smithing_template')
})