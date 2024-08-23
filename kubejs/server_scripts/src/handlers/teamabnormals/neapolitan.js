/**
 * @file Server handler for Neapolitan from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: neapolitan
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.minecraft.smoking(
    'neapolitan:dried_banana',
    'neapolitan:banana'
  ).cookingTime(100).xp(0.35).id('neapolitan:banana/dried_banana_from_smoking')
  event.remove({ id: 'neapolitan:banana/primal_armor_trim_smithing_template' })
  event.recipes.create.deploying('2x neapolitan:primal_armor_trim_smithing_template', [
    'neapolitan:primal_armor_trim_smithing_template',
    'kubejs:duplicator'
  ]).keepHeldItem().id('finality:neapolitan/deploying/primal_armor_trim_smithing_template')
  let neapolitan_sherds = [
    'reflection',
    'scream',
    'snack',
    'spider'
  ]
  for (let i = 0; i < neapolitan_sherds.length; i++) {
    let element = neapolitan_sherds[i];
    event.recipes.create.deploying([
      '2x neapolitan:' + element + '_pottery_sherd'
    ], [
      'neapolitan:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:neapolitan/deploying/' + element + '_pottery_sherd_duplication')
  }
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