/**
 * @file Server handler for Atmospheric from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: atmospheric
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.deploying('atmospheric:grimwood_sapling', [
    '#minecraft:saplings',
    'minecraft:echo_shard'
  ]).id('finality:deploying/atmospheric/grimwood_sapling')
  event.recipes.create.deploying('atmospheric:yucca_sapling', [
    '#minecraft:saplings',
    '#minecraft:sand'
  ]).id('finality:deploying/atmospheric/yucca_sapling')
  if (Platform.isLoaded('mysticalagriculture')) {
    event.recipes.minecraft.crafting_shapeless('mysticalagriculture:nature_agglomeratio', [
      'minecraft:pumpkin',
      'minecraft:potato',
      'atmospheric:barrel_cactus',
      'minecraft:sugar_cane'
    ]).id('finality:mysticalagriculture/crafting/atmospheric_cactus_agglomeratio')
  }
})

let ATMOLOG = [
  'rosewood_log',
  'morado_log',
  'yucca_log',
  'aspen_log',
  'laurel_log'
]
let ATMOWOOD = [
  'rosewood',
  'morado_wood',
  'yucca_wood',
  'aspen_wood',
  'laurel_wood'
]
let ATMO_WOOD_TYPES = [
  'rosewood',
  'morado',
  'yucca',
  'kousa',
  'aspen',
  'laurel',
  'grimwood'
]

ServerEvents.tags('item', event => {
  for (let i = 0; i < ATMOLOG.length; i++) {
    let insert = ATMOLOG[i];
    event.add('forge:stripped_logs', `atmospheric:stripped_${insert}`)
  }
  for (let i = 0; i < ATMOWOOD.length; i++) {
    let insert = ATMOWOOD[i];
    event.add('forge:stripped_wood', `atmospheric:stripped_${insert}`)
  }
})

ServerEvents.tags('block', event => {
  for (let i = 0; i < ATMO_WOOD_TYPES.length; i++) {
    let element = ATMO_WOOD_TYPES[i];
    event.add('create:wrench_pickup', `atmospheric:${element}_beehive`)
  }
})