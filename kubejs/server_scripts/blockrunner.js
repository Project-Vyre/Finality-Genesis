// requires: blockrunner
// requires: create

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
    CREATE_PALETTE_BLOCKS.forEach(block => {
        event.add('blockrunner:very_quick_blocks', [
            `create:layered_${block}`,
            `create:${block}_pillar`,
            `create:polished_cut_${block}`
        ])
    })
})