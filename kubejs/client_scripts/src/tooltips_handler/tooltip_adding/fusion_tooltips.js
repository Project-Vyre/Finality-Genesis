/**
 * @file Tooltip generation for Fusion blocks only.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: fusion

let blocks = [
  'iridium_block_connecting',
  'iridium_quartz_block_connecting',
  'iridium_tiles_connecting',
  'ornate_iridium_block_connecting',
  'ornate_iridium_pillar_connecting',
  'high_entropy_alloy_block_connecting'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < blocks.length; i++) {
    let id = blocks[i];
    event.add('kubejs:' + id, Text.gray('Connecting'))
  }
})