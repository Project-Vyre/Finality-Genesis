/**
 * @file Server handler for Tinker's Construct.
 * @version 1.19.2-forge
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: tconstruct
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    {
      output: 'tconstruct:grout',
      type: 'minecraft:crafting_shapeless'
    },
    {
      output: 'tconstruct:nether_grout',
      type: 'minecraft:crafting_shapeless'
    },
    {
      output: 'tconstruct:seared_brick',
      type: 'minecraft:smelting',
      type: 'minecraft:blasting'
    },
    {
      outuput: 'tconstruct:scorched_brick',
      type: 'minecraft:smelting',
      type: 'minecraft:blasting'
    }
  ])
  // all the grout
  event.recipes.create.mixing('2x tconstruct:grout', [
    'minecraft:clay_ball',
    '#minecraft:sand',
    '#forge:gravel'
  ]).id('finality:tconstruct/mixing/grout')
  event.recipes.create.mixing('8x tconstruct:grout', [
    'minecraft:clay',
    '4x #minecraft:sand',
    '4x #forge:gravel'
  ]).id('finality:tconstruct/mixing/grout_bulk')
  event.recipes.create.mixing('2x tconstruct:nether_grout', [
    'minecraft:magma_cream',
    'minecraft:soul_sand',
    '#forge:gravel'
  ]).id('finality:tconstruct/mixing/nether_grout_from_soul_sand')
  event.recipes.create.mixing('2x tconstruct:nether_grout', [
    'minecraft:magma_cream',
    'minecraft:soul_soil',
    '#forge:gravel'
  ]).id('finality:tconstruct/mixing/nether_grout_from_soul_soil')
  event.recipes.create.mixing('8x tconstruct:nether_grout', [
    'minecraft:magma_block',
    '4x minecraft:soul_sand',
    '4x #forge:gravel'
  ]).id('finality:tconstruct/mixing/bulk_nether_grout_from_soul_sand')
  event.recipes.create.mixing('8x tconstruct:nether_grout', [
    'minecraft:magma_block',
    '4x minecraft:soul_soil',
    '4x #forge:gravel'
  ]).id('finality:tconstruct/mixing/bulk_nether_grout_from_soul_soil')

  event.recipes.create.compacting(
    'tconstruct:seared_brick',
    'tconstruct:grout'
  ).heated().id('finality:tconstruct/compacting/seared_brick_solidify')
})

ServerEvents.tags('fluid', event => {
  event.add('tconstruct:molten_iron', 'kubejs:molten_iron')
  event.add('tconstruct:molten_gold', 'kubejs:molten_gold')
  event.add('tconstruct:molten_copper', 'kubejs:molten_copper')
  event.add('tconstruct:molten_zinc', 'kubejs:molten_zinc')
  event.add('tconstruct:molten_brass', 'kubejs:molten_brass')
  event.add('tconstruct:molten_netherite', 'kubejs:molten_netherite')
  event.add('create:bottomless/allow', [
  ])
  event.add('create:bottomless/deny', [
    
  ])
})