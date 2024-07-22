// requires: scannable
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('scannable:scanner')
      .addSummary('Used for scanning nearby points of interests.')
      .addBehaviour([
        'On held R-Click',
        'Charges up a _scan_ pulse.'
      ])
      .addBehaviour([
        'On Shift + R-Click',
        'Opens the module configuration GUI.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:range_module')
      .addSummary('Increases the range of scans.')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:entity_module')
      .addSummary('Detects _configured_ living entities.')
      .addBehaviour([
        'On R-Click on an entity',
        'Adds it to the module config.'
      ])
      .addBehaviour([
        'On R-Click on air',
        'Opens the module config.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:friendly_entity_module')
      .addSummary('Detects _friendly_ living entities.')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:hostile_entity_module')
      .addSummary('Detects _hostile_ living entities.')
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:block_module')
      .addSummary('Detects _configured_ blocks.')
      .addBehaviour([
        'On R-Click on block',
        'Adds it to the module config.'
      ])
      .addBehaviour([
        'On R-Click on air',
        'Opens the module config.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:common_ores_module')
      .addSummary('Detects _common_ ores.')
      .addBehaviour([
        'Specifically what?',
        'Coal, copper, iron, etc.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:rare_ores_module')
      .addSummary('Detects _rare_ ores.')
      .addBehaviour([
        'Specifically what?',
        'Diamond, emerald, iridium, etc.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:fluid_module')
      .addSummary('Detects _fluid_ blocks.')
      .addBehaviour([
        'Specifically what?',
        'Water, lava, etc.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('scannable:chest_module')
      .addSummary('Detects _storage_ blocks.')
      .addBehaviour([
        'Specifically what?',
        'Chests, barrels, shulker boxes, etc.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
})