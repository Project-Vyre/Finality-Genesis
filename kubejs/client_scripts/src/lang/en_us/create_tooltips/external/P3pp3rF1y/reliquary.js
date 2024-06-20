// requires: reliquary
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('reliquary:holy_hand_grenade')
      .addSummary('A _powerful_ explosive that doesn\'t break blocks or hurt the wielder.')
      .addBehaviour([
        'The Fine Text',
        'Certain mobs don\'t get hurt by this explosive.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:shears_of_winter')
      .addSummary('Shears that can harvest with the power of the cold air.')
      .addBehaviour([
        'On L-Click',
        'Harvest _individual_ blocks like usual.'
      ])
      .addBehaviour([
        'On held R-Click',
        'Shears in a large area of effect around the player.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/exorcism_bullet')
      .addSummary('Highly effective against the _Undead_.')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/blaze_bullet')
      .addSummary('Deals only _fire_ damage.')
      .addBehaviour([
        'Additional Info',
        'Obviously does _not_ work against Blazes or other mobs made of the fire element.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/ender_bullet')
      .addSummary('Pierces _through_ enemies in addition to _seeking_ targets.')
      .addBehaviour([
        'Additional Info',
        '_Faster_ projectile speed compared to Seeker Shots and _tighter_ tracking.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/concussive_bullet')
      .addSummary('Small AoE damage.')
      .addBehaviour([
        'Additional Info',
        'Also _destroys_ blocks upon contact.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/buster_bullet')
      .addSummary('Large AoE damage.')
      .addBehaviour([
        'Additional Info',
        'Also _destroys_ blocks upon contact.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/seeker_bullet')
      .addSummary('Seeks targets.')
      .addBehaviour([
        'Additional Info',
        '_Slow_ projectile speed and loose tracking compared to _Ender Shots_.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/sand_bullet')
      .addSummary('_Blinds_ targets.')
      .addBehaviour([
        'Additional Info',
        'Also _irritates_ Creepers.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('reliquary:bullets/storm_bullet')
      .addSummary('Stronger during _thunder storms_.')
      .addBehaviour([
        'Additional Info',
        'Also _charges_ Creepers... I\'ll leave you to deal with that.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
})