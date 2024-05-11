// requires: headhunter_mod

ClientEvents.lang('en_us', event => {
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:hh_vanilla_difficulty')
      .addSummary('A formiddable foe that is _stronger_ than the Wither.')
      .addBehaviour([
        'Advice from the mod author pt.1',
        'Check the advancements tab for more information before you start the fight!'
      ])
      .addBehaviour([
        'Advice from the mod author pt.2',
        ' You are also recommended to read the _guide book_ which can be crafted using 6x paper and 1x book.'
      ])
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:hh_hard_difficulty')
      .addSummary('Your strength has drawn the gaze of _one_ of the strongest Head Hunters in existence. Victory will not come easily this time.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:hhv_hard_difficulty')
      .addSummary('Was the previous Head Hunter not elite enough?')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:hh_true_difficulty')
      .addSummary('This Head Hunter has been tasked to _attempt_ to _ensure_ your swift death.')
      .addBehaviour([
        'On successful defeat',
        'Drops _Unstable Entropy Particles_ as a reward.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:headhunteritems_bloodied_diamond')
      .addSummary('Unspeakable chaos resides _within_ this gem...')
      .addBehaviour([
        'On R-Click with a weapon with the gem in your offhand',
        '_Imbues_ a special enchantment on your weapon. Not compatible with certain weapons at the moment.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:headhunteritems_guidebook_basic')
      .addSummary('A strange book crafted out of blank paper. It seems to cover basic information about the HeadHunter.')
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:headhunteritems_guidebook_intermediate')
      .addSummary('This book records the HeadHunter\'s _additional_ behaviours.')
      .build()
  )
  event.addAll(
    'headhunter_mod',
    createTooltip('headhunter_mod:headhunteritems_guidebook_advanced')
      .addSummary('The final edition of the series, though it appears to be empty at the moment. A _stench of blood_ also emanates from this...')
      .addBehaviour([
        'Additional Info',
        'Does not serve any purpose at the _current_ moment.'
      ])
      .build()
  )
})