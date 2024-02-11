// requires: skillslots
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'skillslots',
    createTooltip('skillslots:unlock_slot')
      .addSummary('An item used to unlock innate _skill slots_.')
      .addBehaviour([
        'On pressing H',
        'Opens the UI for your skill slots.'
      ])
      .addBehaviour([
        'On pressing Sneak + H',
        'Opens the UI for putting in items that have skills that you can use.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
})