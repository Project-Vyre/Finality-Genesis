// requires: alexscaves
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll('alexscaves',
    createTooltip('alexscaves:cave_tablet')
      .addSummary('The mysterious stone tablet has the ancient Galactic Alphabet carved into it. The glyphs are visibly faded with time.')
      .addBehaviour([
        'Deciphering',
        'Utilize a _Spelunkery Table_ to decipher. Keep note of each letter for each failed attempt as you only have a total of _3_ attempts before the tablet breaks.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll('alexscaves',
    createTooltip('alexscaves:cave_codex')
      .addSummary('You have _successfully_ translated the Cave Tablet!')
      .addBehaviour([
        'When combined with a map',
        'Charts course for the _nearest_ Alex\'s Caves biome. This does _not_ mean it is closeby.'
      ])
      .addBehaviour([
        'When used',
        'Grants knowledge and unlocks _additional_ entries in your _Cave Compendium_.'
      ])
      .build()
  )
  event.addAll('alexscaves',
    createTooltip('alexscaves:galena_gauntlet')
      .addSummary('A _magnetic_ gauntlet.')
      .addBehaviour([
        'Warning!',
        'Has a habit of deleting drawer inventory!'
      ])
      .addAction([
        'On held R-Click',
        'Holds your _metal_ tool in a _beam_ that gradually extends and _manipulates_ it as if it was your second arm.'
      ])
      .addAction([
        'On R-Click release',
        'Shortens the beam for tool _retrieval_.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
})