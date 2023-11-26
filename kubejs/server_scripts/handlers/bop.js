// requires: biomesoplenty
// requires: kubejs_create

/**
 * @file Server handler for Biomes O' Plenty.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('item', event => {
    event.add('biomesoplenty:flesh', [
        'biomesoplenty:flesh',
        'biomesoplenty:porous_flesh'
    ])
})

ServerEvents.recipes(event => {
    event.shapeless('create:rose_quartz', [
        '3x biomesoplenty:rose_quartz_shard'
    ]).id('finality:bop/rose_quartz_conversion')
    event.shapeless('4x biomesoplenty:rose_quartz_shard', [
        'biomesoplenty:rose_quartz_block'
    ]).id('finality:bop/rose_quartz_block_decompression')
    event.recipes.create.cutting([
        '2x minecraft:rotten_flesh',
        Item.of('biomesoplenty:flesh_tendons', 2).withChance(0.75)
    ], '#biomesoplenty:flesh').id('finality:bop/flesh_cutting')
    event.recipes.create.mixing('biomesoplenty:flesh', [
        'create:cinder_flour',
        '8x minecraft:rotten_flesh'
    ]).id('finality:bop/flesh_block')
    event.recipes.create.mixing('biomesoplenty:porous_flesh', [
        'minecraft:wet_sponge',
        '8x minecraft:rotten_flesh'
    ]).id('finality:bop/porous_flesh_block')
})