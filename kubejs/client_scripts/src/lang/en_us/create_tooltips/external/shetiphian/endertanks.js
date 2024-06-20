// requires: endertanks
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'endertanks',
    createTooltip('endertanks:ender_tank')
      .addSummary('Convenient _trans-dimensional_ liquid _storage_ or _transportation_ depending on your use case.')
      .addBehaviour([
        'On R-Click stripe with any dye',
        'Sets the _color channel_ to the dye that is used. Ensure that _both_ Ender Tanks have _matching color channels_.'
      ])
      .addBehaviour([
        'Capacity Expansion',
        '_Right click_ with either _Ender Pearls_ or _Ender Eyes_ to upgrade capacity.'
      ])
      .addBehaviour([
        'Privacy Toggle',
        '_Right click_ with a _Diamond_ to make your Ender Tank _private_. As in it is only accessible to _you_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})

/*
    event.addAll(
        'endertanks',
        createTooltip('endertanks:ender_bucket')
            .addSummary('Think of it as an _on-person_ bucket to a matching _Ender Tank_.')
            .addBehaviour([
                'On Sneak + R-Click on an Ender Tank',
                '_Copies_ color channels from the Ender Tank onto the bucket.'
            ])
            .setPalette($Palette.PURPLE)
            .build()
    )
*/