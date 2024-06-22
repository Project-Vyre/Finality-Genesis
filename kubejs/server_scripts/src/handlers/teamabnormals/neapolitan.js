/**
 * @file Server handler for Neapolitan from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: neapolitan
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.deploying('2x neapolitan:primal_armor_trim_smithing_template', [
    'neapolitan:primal_armor_trim_smithing_template',
    'kubejs:duplicator'
  ]).keepHeldItem().id('finality:neapolitan/deploying/primal_armor_trim_smithing_template')
  console.log('Neapolitan detected! Forcefully overriding recipe to use Create\'s Bar of Chocolate.')
  event.recipes.create.compacting(
    'create:bar_of_chocolate',
    Fluid.of('create:chocolate', 250)
  ).id('create:compacting/chocolate')
  console.log('Also adding compatibility recipes...')
  event.shaped('neapolitan:chocolate_block', [
    'CCC',
    'CCC',
    'CCC'
  ], {
    C: '#forge:bars/chocolate'
  }).id('neapolitan:chocolate/chocolate_block')
})