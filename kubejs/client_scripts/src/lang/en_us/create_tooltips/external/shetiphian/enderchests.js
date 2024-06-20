// requires: enderchests
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'enderchests',
    createTooltip('enderchests:ender_chest')
      .addSummary('Convenient _trans-dimensional_ item _storage_ or _transportation_ depending on your use case.')
      .addBehaviour([
        'On R-Click stripe with any dye',
        'Sets the _color channel_ to the dye that is used. Ensure that _both_ Ender Chests have _matching color channels_.'
      ])
      .addBehaviour([
        'Capacity Expansion',
        '_Right click_ with either _Ender Pearls_ or _Ender Eyes_ to upgrade capacity.'
      ])
      .addBehaviour([
        'Privacy Toggle',
        '_Right click_ with a _Diamond_ to make your Ender Chest _private_. As in it is only accessible to _you_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})

/*
    event.addAll(
        'enderchests',
        createTooltip('enderchests:ender_bag')
            .addSummary('Think of it as an _on-person_ access panel to a matching _Ender Chest_.')
            .addBehaviour([
                'On Sneak + R-Click on an Ender Chest',
                '_Copies_ color channels from the Ender Chest onto the pouch.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
*/