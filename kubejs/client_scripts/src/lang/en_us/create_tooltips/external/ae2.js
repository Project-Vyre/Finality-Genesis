// requires: ae2
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('ae2:name_press')
      .addSummary('Can only be obtained from using any of AE2\'s knives and putting in an _Iron Ingot_ to inscribe.')
      .setPalette($Palette.GRAY)
      .build()
  )
})