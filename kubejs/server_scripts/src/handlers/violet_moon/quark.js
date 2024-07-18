// requires: quark
// requires: kubejs_create

/**
 * @file Server handler for Quark.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let quarkWoods = [
  'ancient',
  'blossom',
  'azalea'
]

ServerEvents.recipes(event => {
  event.remove([
    { id: 'quark:tweaks/crafting/utility/misc/easy_hopper' }
  ])
  event.recipes.create.compacting(
    '3x minecraft:iron_ingot',
    '8x quark:iron_plate'
  ).id('finality:quark/compacting/iron_plate_revert')
  for (let i = 0; i < quarkWoods.length; i++) {
    let element = quarkWoods[i]
    event.recipes.create.cutting(
      `quark:stripped_${element}_log`,
      `quark:${element}_log`
    ).processingTime(50).id(`create:cutting/compat/quark/${element}_log`)
    event.recipes.create.cutting(
      `quark:stripped_${element}_wood`,
      `quark:${element}_wood`
    ).processingTime(50).id(`create:cutting/compat/quark/${element}_wood`)
  }
  event.remove({ id: 'quark:tools/crafting/rune_duplication' })
  event.recipes.create.deploying('2x quark:smithing_template_rune', [
    'quark:smithing_template_rune',
    'kubejs:duplicator'
  ]).keepHeldItem().id('kubejs:deploying/smithing_template_rune_duplication')
  if (Platform.isLoaded('aether')) {
    event.shaped('minecraft:chest', [
      'WWW',
      'W W',
      'WWW'
    ], {
      W: [
        'quark:ancient_planks',
        'minecraft:blossom_planks',
        'quark:azalea_planks',
        'minecraft:bamboo_planks' // deprecate in 1.20.x+
      ]
    }).id('finality:quark/crafting/vanilla_chest_fallback')
  }
  if (Platform.isLoaded('woodworks')) {
    for (let i = 0; i < WOOD_TYPES.length; i++) {
      let element = WOOD_TYPES[i];
      event.remove({
        mod: 'quark',
        output: 'quark:' + element + '_chest'
      })
    }
    event.shaped('4x quark:bamboo_ladder', [
      'S S',
      'SPS',
      'S S'
    ], {
      S: '#forge:rods/wooden',
      P: 'minecraft:bamboo_planks'
    }).id('finality:quark/bamboo_ladder')
    event.shaped('4x quark:ancient_ladder', [
      'S S',
      'SPS',
      'S S'
    ], {
      S: '#forge:rods/wooden',
      P: 'quark:ancient_planks'
    }).id('finality:quark/ancient_ladder')
    // deprecate in 1.20.1+
    event.shaped('4x quark:blossom_ladder', [
      'S S',
      'SPS',
      'S S'
    ], {
      S: '#forge:rods/wooden',
      P: 'quark:blossom_planks'
    }).id('finality:quark/blossom_ladder')
    event.shaped('4x quark:azalea_ladder', [
      'S S',
      'SPS',
      'S S'
    ], {
      S: '#forge:rods/wooden',
      P: 'quark:azalea_planks'
    }).id('finality:quark/azalea_ladder')
  }
  if (Platform.isLoaded('productivebees')) {
    event.recipes.minecraft.crafting_shaped('productivebees:inactive_dragon_egg', [
      'SSS',
      'SES',
      'SSS'
    ], {
      S: 'quark:dragon_scale',
      E: '#forge:eggs'
    }).id('kubejs:productivebees/inactive_dragon_egg')
  }
  if (Platform.isLoaded('woodworks')) {
    for (let i = 0; i < WOOD_TYPES.length; i++) {
      let element = WOOD_TYPES[i];
      event.recipes.minecraft.crafting_shapeless('woodworks:' + element + '_chest', [
        'quark:' + element + '_chest'
      ]).id('kubejs:' + element + 'quark_chest_to_' + element + '_woodworks_chest')
    }
  }
})

ServerEvents.tags('item', event => {
  for (let i = 0; i < quarkWoods.length; i++) {
    let element = quarkWoods[i];
    event.add('create:modded_stripped_logs', 'quark:stripped_' + element + '_log')
    event.add('create:modded_stripped_wood', 'quark:stripped_' + element + '_wood')
  }
})

ServerEvents.tags('block', event => {
  event.add('create:fan_transparent', [
    'quark:gold_bars'
  ])
  event.add('create:wrench_pickup', [
    'quark:gold_bars',
    'quark:deepslate_furnace',
    'quark:blackstone_furnace'
  ])
})