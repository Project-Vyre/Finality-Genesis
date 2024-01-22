/**
 * @file Handles generation of all compressed blocks.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let STONE_COMPACTING_INCEPTION = {
    cobblestone: 'Cobblestone',
}
let DEEPSLATE_COMPACTING_INCEPTION = {
    cobbled_deepslate: 'Cobbled Deepslate',
}
let GRAVEL_COMPACTING_INCEPTION = {
    gravel: 'Gravel'
}
let SAND_COMPACTING_INCEPTION = {
    sand: 'Sand'
}
let RED_SAND_COMPACTING_INCEPTION = {
    red_sand: 'Red Sand'
}
let NETHERRACK_COMPACTING_INCEPTION = {
    netherrack: 'Netherrack'
}

StartupEvents.registry('block', event => {
    /**
     * 
     * @param {string} object 
     * @param {string} soundtype 
     * @param {Internal.BlockBuilder.tagBlock} blockTag 
     * @example 'minecraft:mineable/pickaxe'
     * @example 'minecraft:mineable/axe'
     * @example 'minecraft:mineable/shovel'
     */
    function customCompressed(object, sound, blockTag) {
        for (let [insert, name] of Object.entries(object)) {
            event.create(`kubejs:compressed_${insert}`)
                .displayName(`Compressed ${name}`)
                .textureAll(`kubejs:block/compression/compressed_${insert}`)
                .soundType(sound)
                .hardness(25)
                .resistance(1000)
                .requiresTool(true)
                .tagBlock(blockTag) // block tag
            event.create(`kubejs:double_compressed_${insert}`)
                .displayName(`<shake>Double Compressed</shake> ${name}`)
                .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
                .soundType(sound)
                .hardness(50)
                .resistance(1000)
                .requiresTool(true)
                .tagBlock(blockTag)
            event.create(`kubejs:triple_compressed_${insert}`)
                .displayName(`<shake>Triple Compressed</shake> ${name}`)
                .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
                .soundType(sound)
                .hardness(75)
                .resistance(1000)
                .requiresTool(true)
                .tagBlock(blockTag)
        }
    }
    for (let [insert, name] of Object.entries(STONE_COMPACTING_INCEPTION)) {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${name}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('stone')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('stone')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('stone')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    }
    for (let [insert, name] of Object.entries(DEEPSLATE_COMPACTING_INCEPTION)) {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${name}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('deepslate')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('deepslate')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('deepslate')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    }
    for (let [insert, name] of Object.entries(GRAVEL_COMPACTING_INCEPTION)) {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${name}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('gravel')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('gravel')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('gravel')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    }
    for (let [insert, name] of Object.entries(SAND_COMPACTING_INCEPTION)) {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${name}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('sand')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('sand')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('sand')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    }
    for (let [insert, name] of Object.entries(RED_SAND_COMPACTING_INCEPTION)) {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${name}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('sand')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('sand')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${name}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('sand')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    }
    customCompressed(NETHERRACK_COMPACTING_INCEPTION, 'netherrack', 'minecraft:mineable/pickaxe')
})