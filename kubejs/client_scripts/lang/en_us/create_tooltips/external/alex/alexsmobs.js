// requires: alexsmobs
// requires: create

ClientEvents.lang('en_us', event => {
  YELLOW_PALETTE('minecraft:pumpkin')
  event.addAll('alexsmobs', {
    "block.minecraft.pumpkin.tooltip": "PUMPKIN",
    "block.minecraft.pumpkin.tooltip.summary": "In addition to being used as an ingredient, it now has other uses.",
    "block.minecraft.pumpkin.tooltip.condition1": "When carved",
    "block.minecraft.pumpkin.tooltip.behaviour1": "_Scares_ away crows who are likely to take your crops."
  })
  event.addAll('alexsmobs',
    createTooltip('minecraft:carved_pumpkin')
      .addSummary('Scares away crows from taking your crops.')
      .setPalette($Palette.YELLOW)
      .build()
  )
})