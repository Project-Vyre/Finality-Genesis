// requires: fusion

ClientEvents.lang('en_us', event => {
  event.add(
    'kubejs',
    'block.kubejs.iridium_block_connecting',
    'Block of Iridium (Connecting)'
  )
  event.add(
    'kubejs',
    'block.kubejs.ornate_iridium_block_connecting',
    'Ornate Iridium Block (Connecting)'
  )
  event.add(
    'kubejs',
    'block.kubejs.iridium_quartz_block_connecting',
    'Iridium Quartz Block (Connecting)'
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