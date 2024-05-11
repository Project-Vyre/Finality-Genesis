// priority: 5
// requires: blockrunner
// requires: create

/**
 * @file Server handler for Blockrunner.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
{
  "#blockrunner:very_slow_blocks": 0.45,
  "#blockrunner:slightly_slow_blocks": 0.85,
  "#blockrunner:quick_blocks": 1.35,
  "#blockrunner:very_quick_blocks": 1.55,
  "#blockrunner:slightly_quick_blocks": 1.15,
  "#blockrunner:slow_blocks": 0.65
}
*/

let CREATE_PALETTE_BLOCKS = [
  'granite',
  'diorite',
  'andesite',
  'calcite',
  'dripstone',
  'deepslate',
  'tuff',
  'asurine',
  'crimsite',
  'limestone',
  'ochrum',
  'scoria',
  'scorchia',
  'veridium'
]

ServerEvents.tags('block', event => {
  event.add('blockrunner:very_slow_blocks', [
    'minecraft:sculk',
    'minecraft:mud'
  ])
  event.add('blockrunner:slow_blocks', [
    'minecraft:clay'
  ])
  event.add('blockrunner:slightly_slow_blocks', [
    'minecraft:sand',
    'minecraft:red_sand',
    'minecraft:snow_block'
  ])
  event.add('blockrunner:slightly_quick_blocks', [
    'minecraft:cobblestone',
    'minecraft:gravel',
    'minecraft:bricks',
    'minecraft:mud_bricks',
    'minecraft:smooth_basalt',
    'minecraft:deepslate_bricks',
    'minecraft:deepslate_tiles',
    'minecraft:cracked_deepslate_bricks',
    'minecraft:cracked_deepslate_tiles',
    'minecraft:prismarine_bricks',
    'minecraft:dark_prismarine',
    'minecraft:nether_bricks',
    'minecraft:chiseled_nether_bricks',
    'minecraft:red_nether_bricks',
    'minecraft:polished_blackstone_bricks',
    'minecraft:cracked_polished_blackstone_bricks'
  ])
  event.add('blockrunner:quick_blocks', [
    'minecraft:polished_andesite',
    'minecraft:polished_diorite',
    'minecraft:polished_granite',
    'minecraft:polished_deepslate',
    'minecraft:polished_blackstone'
  ])
  event.add('blockrunner:very_quick_blocks', [
    'minecraft:crying_obsidian',
    'minecraft:white_concrete',
    'minecraft:orange_concrete',
    'minecraft:magenta_concrete',
    'minecraft:light_blue_concrete',
    'minecraft:yellow_concrete',
    'minecraft:lime_concrete',
    'minecraft:pink_concrete',
    'minecraft:gray_concrete',
    'minecraft:light_gray_concrete',
    'minecraft:cyan_concrete',
    'minecraft:purple_concrete',
    'minecraft:blue_concrete',
    'minecraft:brown_concrete',
    'minecraft:green_concrete',
    'minecraft:red_concrete',
    'minecraft:black_concrete'
  ])
  for (let i = 0; i < CREATE_PALETTE_BLOCKS.length; i++) {
    let block = CREATE_PALETTE_BLOCKS[i];
    event.add('blockrunner:very_quick_blocks', [
      `create:layered_${block}`,
      `create:${block}_pillar`,
      `create:polished_cut_${block}`
    ])
  }
  if (Platform.isLoaded('architects_palette')) {
    event.add('blockrunner:slightly_quick_blocks', [
      'architects_palette:abyssaline_plating',
      'architects_palette:ancient_plating',
      'architects_palette:hadaline_plating',
      'architects_palette:plating_block',
      'architects_palette:sunmetal_block',
      'architects_palette:sunmetal_pillar',
      'architects_palette:chiseled_sunmetal_block'
    ])
    event.add('blockrunner:quick_blocks', [
      'architects_palette:heavy_stone_bricks',
      'architects_palette:heavy_end_stone_bricks'
    ])
    event.add('blockrunner:very_quick_blocks', [
      'architects_palette:entwine',
      'architects_palette:entwine_pillar',
      'architects_palette:chiseled_entwine',
      'architects_palette:unobtanium_block'
    ])
  }
  if (Platform.isLoaded('supplementaries')) {
    event.add('blockrunner:very_quick_blocks', [
      'supplementaries:stone_tile',
      'supplementaries:blackstone_tiles'
    ])
  }
})