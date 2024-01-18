/**
 * @file Handles all recipes for custom made compression blocks.
 */

let mc_storage = [
    'cobblestone',
    'cobbled_deepslate',
    'gravel',
    'sand',
    'red_sand'
]

ServerEvents.recipes(event => {
    for (let i = 0; i < mc_storage.length; i++) {
        let insert = mc_storage[i];
        event.shaped(`kubejs:compressed_${insert}`, [
            'BBB',
            'BBB',
            'BBB'
        ], {
            B: `minecraft:${insert}`
        }).id(`finality:compressed_${insert}`)
        event.shaped(`kubejs:double_compressed_${insert}`, [
            'BBB',
            'BBB',
            'BBB'
        ], {
            B: `kubejs:compressed_${insert}`
        }).id(`finality:double_compressed_${insert}`)
        event.shaped(`kubejs:triple_compressed_${insert}`, [
            'BBB',
            'BBB',
            'BBB'
        ], {
            B: `kubejs:double_compressed_${insert}`
        }).id(`finality:triple_compressed_${insert}`)
        event.shapeless(`9x kubejs:double_compressed_${insert}`, `kubejs:triple_compressed_${insert}`).id(`finality:triple_compressed_${insert}_decompression`)
        event.shapeless(`9x kubejs:compressed_${insert}`, `kubejs:double_compressed_${insert}`).id(`finality:double_compressed_${insert}_decompression`)
        event.shapeless(`9x minecraft:${insert}`, `kubejs:compressed_${insert}`).id(`finality:compressed_${insert}_decompression`)
    }
})