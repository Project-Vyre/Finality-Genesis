// requires: fusion

ClientEvents.lang('en_us', event => {
  event.add(
    'kubejs',
    'block.kubejs.iridium_block_connecting',
    'Block of Iridium (Connecting)'
  )
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