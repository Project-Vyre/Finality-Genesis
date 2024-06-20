/**
 * @file Handles generation of all compressed blocks.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let compressedBlockProperties = {
  cobblestone: { sound: 'stone', tag: 'minecraft:mineable/pickaxe' },
  cobbled_deepslate: { sound: 'deepslate', tag: 'minecraft:mineable/pickaxe' },
  gravel: { sound: 'gravel', tag: 'minecraft:mineable/shovel' },
  sand: { sound: 'sand', tag: 'minecraft:mineable/shovel' },
  red_sand: { sound: 'sand', tag: 'minecraft:mineable/shovel' },
  netherrack: { sound: 'netherrack', tag: 'minecraft:mineable/pickaxe' }
}
let compressedBlocks = [
  'cobblestone',
  'cobbled_deepslate',
  'gravel',
  'sand',
  'red_sand',
  'netherrack'
]

StartupEvents.registry('block', event => {
  for (let element of compressedBlocks) {
    event.create(`kubejs:compressed_${element}`)
      .textureAll(`kubejs:block/compression/compressed_${element}`)
      .soundType(compressedBlockProperties[element].sound)
      .hardness(25)
      .resistance(1000)
      .requiresTool(true)
      .tagBlock(compressedBlockProperties[element].tag)

    event.create(`kubejs:double_compressed_${element}`)
      .textureAll(`kubejs:block/compression/double_compressed_${element}`)
      .soundType(`${compressedBlockProperties[element].sound}`)
      .hardness(50)
      .resistance(1000)
      .requiresTool(true)
      .tagBlock(compressedBlockProperties[element].tag)

    event.create(`kubejs:triple_compressed_${element}`)
      .textureAll(`kubejs:block/compression/triple_compressed_${element}`)
      .soundType(compressedBlockProperties[element].sound)
      .hardness(75)
      .resistance(1000)
      .requiresTool(true)
      .tagBlock(compressedBlockProperties[element].tag)
  }
})