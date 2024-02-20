// requires: fusion

ClientEvents.lang('en_us', event => {
  if (Platform.isLoaded('textanimator')) {
    event.add(
      'kubejs',
      'block.kubejs.high_entropy_alloy_block_connecting',
      '<rainb>Block of High Entropy Alloy (Connecting)</rainb>'
    )
  }
  if (!Platform.isLoaded('textanimator')) {
    event.add(
      'kubejs',
      'block.kubejs.high_entropy_alloy_block_connecting',
      'Block of High Entropy Alloy (Connecting)'
    )
  }
})

ClientEvents.highPriorityAssets(event => {
  event.add('kubejs:models/block/high_entropy_alloy_block_connecting', {
    "loader": "fusion:model",
    "type": "fusion:connecting",
    "connections": [
      { "type": "is_same_block" }
    ],
    "parent": "minecraft:block/cube_all",
    "textures": {
      "all": "kubejs:block/high_entropy_alloy_block_connecting"
    }
  })
})