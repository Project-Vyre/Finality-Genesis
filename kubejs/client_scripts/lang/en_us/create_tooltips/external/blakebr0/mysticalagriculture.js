// requires: mysticalagriculture
// requires: create

ClientEvents.lang('en_us', event => {
  STANDARD_PALETTE('mysticalagriculture:infusion_altar')
  event.addAll('mysticalagriculture', {
    "block.mysticalagriculture.infusion_altar.tooltip": "INFUSION ALTAR",
    "block.mysticalagriculture.infusion_altar.tooltip.summary": "The _gateway_ to infinity.",
    "block.mysticalagriculture.infusion_altar.tooltip.condition1": "Usage",
    "block.mysticalagriculture.infusion_altar.tooltip.behaviour1": "Requires a total of eight _Infusion Pedestals_ to function and a _redstone_ power source like a _lever_ to initialize the process.",
  })
  event.addAll('mysticalagriculture',
    createTooltip('mysticalagriculture:prosperity_shard')
      .addSummary('Serves as the base for all things Mystical Agriculture related, such as _seeds_.')
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
})