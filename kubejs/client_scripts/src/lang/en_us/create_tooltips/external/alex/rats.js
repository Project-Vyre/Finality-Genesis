/**
 * @file Generate Create tooltips for the Rats mod when present.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: rats

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('rats:cheese')
      .addSummary('Used to _tame_ rats.')
      .addBehaviour([
        'When dropped',
        'Wild Rats will eat it and eventually become tamed.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('rats:raw_rat')
      .addSummary('Very repulsive.')
      .addBehaviour([
        'If it was your pet rat...',
        'You _monster_.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('rats:cooked_rat')
      .addSummary('Tastes like rabbit.')
      .addBehaviour([
        'If it was your pet rat...',
        'You _monster_.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('rats:little_black_worm')
      .addSummary('Soooo uhm... the Gemcutter rat upgrade does not seem to exist.')
      .addBehaviour([
        'When given to a Gemcutter Rat',
        'Turns into a centipede.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('rats:centipede')
      .addSummary('This is supposed to be food, right?')
      .addBehaviour([
        'When given to a Chef Rat',
        'Turns into Potato Knishes.'
      ])
      .build()
  )
  // rat nugget
  event.addAll(
    'kubejs',
    createTooltip('rats:rat_nugget')
      .addSummary('You do know what this is... right?')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('rats:rat_nugget_ore')
      .addSummary('You do know what this is... right?')
      .addBehaviour([
        'On R-Click',
        'Find out what\'s inside...'
      ])
      .build()
  )
})