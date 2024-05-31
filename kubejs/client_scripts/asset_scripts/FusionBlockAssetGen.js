/**
 * @file Lang generation for Fusion connected blocks.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: fusion

ClientEvents.lang('en_us', event => {
  event.add(
    'kubejs',
    'block.kubejs.iridium_block_connecting',
    'Block of Iridium'
  )
  event.add(
    'kubejs',
    'block.kubejs.ornate_iridium_block_connecting',
    'Ornate Iridium Block'
  )
  event.add(
    'kubejs',
    'block.kubejs.iridium_quartz_block_connecting',
    'Iridium Quartz Block'
  )
  event.add(
    'kubejs',
    'block.kubejs.ornate_iridium_pillar_connecting',
    'Ornate Iridium Pillar'
  )
  event.add(
    'kubejs',
    'block.kubejs.iridium_tiles_connecting',
    'Iridium Tiles'
  )
  if (Platform.isLoaded('textanimator')) {
    event.add(
      'kubejs',
      'block.kubejs.high_entropy_alloy_block_connecting',
      '<rainb>Block of High Entropy Alloy</rainb>'
    )
  }
  if (!Platform.isLoaded('textanimator')) {
    event.add(
      'kubejs',
      'block.kubejs.high_entropy_alloy_block_connecting',
      'Block of High Entropy Alloy'
    )
  }
})