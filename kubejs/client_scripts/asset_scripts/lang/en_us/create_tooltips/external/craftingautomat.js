// requires: craftingautomat
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'craftingautomat',
    createTooltip('craftingautomat:autocrafter')
      .addSummary('Automatic crafting, just need to _place ingredients_ in the crafting slots. Requires ingredients from its own inventory.')
      .addBehaviour([
        'On redstone signal',
        'Crafts the specified recipe if _sufficient material_ is available.'
      ])
      .build()
  )
})