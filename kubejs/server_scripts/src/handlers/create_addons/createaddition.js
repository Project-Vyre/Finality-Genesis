// requires: createaddition
// requires: kubejs_create

/**
 * @file Server handler for Create Crafts & Additions.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('item', event => {
  event.add('create:blaze_burner_fuel/special', 'createaddition:bioethanol_bucket')
  event.add('create:blaze_burner_fuel/regular', 'createaddition:seed_oil_bucket')
  event.remove('create:sandpaper', 'createaddition:diamond_grit_sandpaper')
})

ServerEvents.recipes(event => {
  event.remove([
    { id: 'createaddition:rolling/brass_ingot' },
    { id: 'createaddition:mixing/bioethanol' },
    { id: 'createaddition:mixing/netherrack' },
    { id: 'createaddition:rolling/straw' },
    { id: 'createaddition:mixing/biomass_from_sticks' },
    { id: 'createaddition:mixing/biomass_from_honeycomb' },
    { type: 'createaddition:liquid_burning' },
    {
      type: 'create:pressing',
      output: 'createaddition:zinc_sheet'
    }
  ])
  // bioethanol balancing work in progress.
  event.recipes.create.mixing('3x createaddition:biomass', [
    '3x create:wheat_flour',
    Fluid.of('createaddition:seed_oil', 1000)
  ]).heated().id('finality:createaddition/mixing/biomass_from_wheat')
  event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 100), [
    '3x minecraft:sugar',
    '9x createaddition:biomass',
    '3x create:cinder_flour'
  ]).id('finality:createaddition/mixing/bioethanol')
  event.recipes.create.crushing([
    'kubejs:removed_item'
  ], [
    'minecraft:diamond'
  ]).processingTime(300).id('createaddition:crushing/diamond')
  event.shapeless('kubejs:removed_item', [
    'minecraft:paper',
    'createaddition:diamond_grit'
  ]).id('createaddition:crafting/diamond_grit_sandpaper')
})