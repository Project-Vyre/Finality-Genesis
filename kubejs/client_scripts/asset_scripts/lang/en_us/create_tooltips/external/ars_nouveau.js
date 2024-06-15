// requires: ars_nouveau
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:enchanters_sword')
      .addSummary('Can be inscribed with a spell at the _Scribes Table_.')
      .addBehaviour([
        'To Inscribe',
        'Place on Scribes Table first then [Shift] + [R-Click] with a _Spell Book_ in your main hand.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:spell_bow')
      .addSummary('Can be inscribed with a spell at the _Scribes Table_.')
      .addBehaviour([
        'To Inscribe',
        'Place on Scribes Table first then [Shift] + [R-Click] with a _Spell Book_ in your main hand.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wand')
      .addSummary('Can be inscribed with a spell at the _Scribes Table_.')
      .addBehaviour([
        'To Inscribe',
        'Place on Scribes Table first then [Shift] + [R-Click] with a _Spell Book_ in your main hand.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})