// requires: create_power_loader
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('create_power_loader',
    createTooltip('create_power_loader:empty_andesite_chunk_loader')
      .addSummary('Looks like it\'s _missing something_.')
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'create_power_loader',
    createTooltip('create_power_loader:empty_brass_chunk_loader')
      .addSummary('Looks like it\'s _missing something_.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll('create_power_loader',
    createTooltip('create_power_loader:andesite_chunk_loader')
      .addSummary('Loads a single chunk when given _rotational_ energy. _Does not_ work on _moving_ contraptions!')
      .addBehaviour([
        'Requirements',
        'An absolute minimum threshold of _60 RPM_ is required for operation.'
      ])
      .addBehaviour([
        'Conversion',
        'Can be converted to a _Brass Chunk Loader_ later on.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll('create_power_loader',
    createTooltip('create_power_loader:brass_chunk_loader')
      .addSummary('Loads up to a maximum region size of _5x5_ chunks when given rotational energy. Works on _moving_ contraptions!')
      .addBehaviour([
        'Requirements',
        'An absolute minimum threshold of _60 RPM_ is required for operation. Larger chunk loading settings require _higher_ RPM.'
      ])
      .build()
  )
})

/**
    event.addAll('create_power_loader', {
        "block.create_power_loader.andesite_chunk_loader.tooltip": "ANDESITE CHUNK LOADER",
        "block.create_power_loader.andesite_chunk_loader.tooltip.summary": "Loads a single chunk when given _rotational_ energy. Also works on _moving_ contraptions!",
        "block.create_power_loader.andesite_chunk_loader.tooltip.condition1": "Requirements",
        "block.create_power_loader.andesite_chunk_loader.tooltip.behaviour1": "A _minimum_ RPM threshold of _60_ is needed for operation.",
        "block.create_power_loader.brass_chunk_loader.tooltip": "BRASS CHUNK LOADER",
        "block.create_power_loader.brass_chunk_loader.tooltip.summary": "Highly _configurable_. Loads a _maximum_ region size of _5x5_ chunks when given _rotational_ energy and works on _moving_ contraptions.",
        "block.create_power_loader.brass_chunk_loader.tooltip.condition1": "Requirements",
        "block.create_power_loader.brass_chunk_loader.tooltip.behaviour1": "A _minimum_ RPM threshold of _60_ is needed for operation. Larger chunk loading settings require more RPM.",
    })
*/