// requires: ars_nouveau
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:magebloom')
      .addSummary('It feels soft to the touch.')
      .addBehaviour([
        'Acquisition',
        'Grown from special seeds created with the _Enchanting Apparatus_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:worn_notebook')
      .addSummary('You arrived in this world with this in your possession, though you have no prior recollection of the past.')
      .addBehaviour([
        'Purpose',
        'Serves as in-game _documentation_ for Ars Nouveau.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:mundane_belt')
      .addSummary('A mundane belt. There is nothing special about it, for now.')
      .addBehaviour([
        'Purpose',
        'Used as a crafting ingredient.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ring_of_potential')
      .addSummary('A dull ring. There is nothing special about it, for now.')
      .addBehaviour([
        'Purpose',
        'Used as a crafting ingredient.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wyrm_charm')
      .addSummary('Obtained by augmenting a _Ritual of Awakening_ with Book and Quills.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:dull_trinket')
      .addSummary('A dull trinket. There is nothing special about it, for now.')
      .addBehaviour([
        'Purpose',
        'Used as a crafting ingredient.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:starbuncle_shards')
      .addSummary('Obtained by giving a _wild_ Starbuncle a Gold Nugget.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:starbuncle_shades')
      .addSummary('A small but _ultra cool_ pair of shades.')
      .addBehaviour([
        'When worn',
        'While it may increase the coolness of a Starbuncle, it will _disable_ their ability to pick up items off the ground or pick Sourceberries.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:whirlisprig_shards')
      .addSummary('Obtained by growing a tree near a _wild_ Whirlisprig')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:source_gem')
      .addSummary('A magical gem.')
      .addBehaviour([
        'Acquisition',
        'Can only be obtained by placing either _Lapis Lazuli_ or _Amethyst_ inside an _Imbuement Chamber_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:dowsing_rod')
      .addSummary('Grants _Magic Find_ and _Scrying_ on use, causing magical creatures to _glow_ and Amethyst to be revealed through blocks.')
      .addBehaviour([
        'Other Information',
        'Can be used on _Imbuement Chamber_ and _Enchanting Apparatus_ to highlight any _linked_ pedestals.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:enchanters_sword')
      .addSummary('Can be inscribed with a spell at the _Scribes Table_.')
      .addBehaviour([
        'To Inscribe',
        'Place on the Scribes Table first then _Shift_ + R-Click_ with a _Spell Book_ in your main hand that has a configured spell.'
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
        'Place on the Scribes Table first then _Shift_ + _R-Click_ with a _Spell Book_ in your main hand that has a configured spell.'
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
        'Place on the Scribes Table first then _Shift_ + _R-Click_ with a _Spell Book_ in your main hand that has a configured spell.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wixie_shards')
      .addSummary('Obtained by using _Dispel_ on a witch while they are at less than half health.')
      .setPalette($Palette.PURPLE)
      .build()
  )
})