// requires: malum
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('malum',
    createTooltip('malum:encyclopedia_arcana')
      .addSummary('Your guide to the _dark arts_ of _Malum_.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll('malum',
    createTooltip('malum:spirit_pouch')
      .addSummary('_Automatically stores souls_ that you acquire from slain entities. No longer will you have to worry about storage on your person.')
      .addBehaviour([
        'On R-Click',
        '_Opens_ the inventory of the Spirit Pouch.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll('malum',
    createTooltip('malum:tyrving')
      .addSummary('Deals _direct damage_ to the _soul_ of the entity that gets hit.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll('malum',
    createTooltip('malum:raw_soulstone')
      .addSummary('An _essential_ material for the dark magics in Malum.')
      .addBehaviour([
        'Renewal',
        'Throw other ores into the _Weeping Well_ to make _more_ Raw Soulstone.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'malum',
    createTooltip('malum:blazing_quartz')
      .addSummary('You can feel the heat within. Can be utilized as a fuel.')
      .addBehaviour([
        'Renewal',
        'Utilize an _Alchemical Impetus_ with 2x Infernal Spirit and 2x Arcane Spirit in a _Spirit Crucible_.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'malum',
    createTooltip('malum:cthonic_gold_ore')
      .addSummary('A very rare ore that can be crushed to produce other metals.')
      .addBehaviour([
        'Additional Info',
        'There are only a finite number of these in each world.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'malum',
    createTooltip('malum:cthonic_gold')
      .addSummary('A very rare ore that can be crushed to produce other metals.')
      .addBehaviour([
        'Additional Info',
        'There are only a finite number of these in each world.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  if (Platform.isLoaded('create_mechanical_extruder')) {
    event.addAll('malum', {
      "block.malum.cthonic_gold_ore.tooltip.condition2": "Renewal",
      "block.malum.cthonic_gold_ore.tooltip.behaviour2": "Can be _renewed_ with the Mechanical Extruder. Right click in the recipe viewer to see details.",
      "item.malum.cthonic_gold.tooltip.condition2": "Renewal",
      "item.malum.cthonic_gold.tooltip.behaviour2": "Can be _renewed_ with the Mechanical Extruder. Right click the _block form_ to see details as the recipe does not show itself reliably."
    })
  }
  /*
  event.addAll('malum',
      createTooltip('malum:runewood_sign')
          .addSummary('_DO NOT PLACE_ OR YOU WILL _SOFTLOCK ACCESS FROM YOUR WORLD_!')
          .setPalette($Palette.RED)
          .build()
  )
  event.addAll('malum',
      createTooltip('malum:soulwood_sign')
          .addSummary('_DO NOT PLACE_ OR YOU WILL _SOFTLOCK ACCESS FROM YOUR WORLD_!')
          .setPalette($Palette.RED)
          .build()
  )
  event.addAll('malum', {
      "item.malum.encyclopedia_arcana.tooltip": "ENCYCLOPEDIA ARCANA",
      "item.malum.encyclopedia_arcana.tooltip.summary": "Your guide to the _dark arts_ of _Malum_.",
      "item.malum.tyrving.tooltip": "TYRVING",
      "item.malum.tyrving.tooltip.summary": "Deals _direct damage_ to the _soul_ of the entity that gets hit."
  })
  */
})