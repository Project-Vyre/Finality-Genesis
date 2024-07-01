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
    createTooltip('rats:plastic_waste')
      .addSummary('Can be _recycled_ by smelting.')
      .addBehaviour([
        'Renewal',
        'Can be purchased from the Rats pet shop owner.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('rats:raw_plastic')
      .addSummary('It\'s recycled plastic! Can now be used to make decorations and toys for your _adorable_ and _loving_ pet rats.')
      .setPalette($Palette.GREEN)
      .build()
  )
  if (Platform.isLoaded('neapolitan')) {
    event.addAll('kubejs', {
      'item.rats.cheese.tooltip.condition2': 'Recipe Conflict - Neapolitan',
      'item.rats.cheese.tooltip.behaviour2': 'Due to Neapolitan overriding the cauldron\'s expected behaviour, a recipe has been generated as a workaround.'
    })
  }
  event.addAll(
    'kubejs',
    createTooltip('rats:raw_rat')
      .addSummary('The cold and lifeless body of a rat. You find it very repulsive.')
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