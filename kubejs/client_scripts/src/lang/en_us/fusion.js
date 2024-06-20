// requires: fusion

ClientEvents.lang('en_us', event => {
  event.addAll('kubejs', {
    "block.kubejs.iridium_block_connecting": "Block of Iridium",
    "block.kubejs.ornate_iridium_block_connecting": "Ornate Iridium Block",
    "block.kubejs.iridium_quartz_block_connecting": "Iridium Quartz Block",
    "block.kubejs.ornate_iridium_pillar_connecting": "Ornate Iridium Pillar",
    "block.kubejs.iridium_tiles_connecting": "Iridium Tiles"
  })
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