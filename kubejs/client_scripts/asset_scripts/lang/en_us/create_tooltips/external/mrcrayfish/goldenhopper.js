// requires: goldenhopper
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('goldenhopper',
    createTooltip('goldenhopper:golden_hopper')
      .addSummary('Has the ability to _filter_ items based on what is inside the extra item slot.')
      .addBehaviour([
        'Warning!',
        '_Does not_ filter items that are put in manually by the player.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
})

/* Json file archive
    YELLOW_PALETTE('goldenhopper:golden_hopper')
    event.addAll('goldenhopper', {
        "block.goldenhopper.golden_hopper.tooltip": "GOLDEN HOPPER",
        "block.goldenhopper.golden_hopper.tooltip.summary": "Has the ability to _filter_ items based on what is inside the extra item slot."
    })
*/