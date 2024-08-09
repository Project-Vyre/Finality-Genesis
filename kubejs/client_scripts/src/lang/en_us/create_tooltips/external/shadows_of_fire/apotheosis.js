// requires: apotheosis
// requires: create

let reforging_default = 'Uses Sigils of Rebirth and Rarity Materials to _reforge_ items, granting them an affixed name or reforging them if they already have one.'

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:salvaging_table')
      .addSummary('Breaks down _Affix_ items into _Rarity Materials_ or Gems into _Gem Dust_.')
      .addBehaviour([
        'When connected to an item output',
        '_Automatically_ salvages an item with no player intervention. Useful for mob farms that produce affixed items, armor and gems.'
      ])
      .addBehaviour([
        'Additional Info',
        'Items _without_ an Affix will _not_ be automatically salvaged. There are exceptions, however, such as Horse Armor. For more info in any recipe viewer, check uses by pressing _[R]_.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:sigil_of_socketing')
      .addSummary('A sigil utilized in _adding_ an additional Gem socket to an affixed item.')
      .addBehaviour([
        'When used in Smithing Table',
        'Adds one _Gem Socket_ to an affixed item.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:sigil_of_withdrawal')
      .addSummary('A sigil utilized in removing _all_ socketed Gems from an item.')
      .addBehaviour([
        'When used in Smithing Table',
        'Removes all socketed _Gems_ from an affixed item.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:sigil_of_rebirth')
      .addSummary('A sigil utilized as _fuel_ with _Reforging Tables_.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:sigil_of_enhancement')
      .addSummary('A sigil utilized as _fuel_ with the _Augmentation Table_.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:sigil_of_unnaming')
      .addSummary('A sigil utilized to remove the affixed name from an item.')
      .addBehaviour([
        'When used in Smithing Table',
        '_Removes_ the affixed name from an item.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:simple_reforging_table')
      .addSummary(reforging_default)
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:reforging_table')
      .addSummary(reforging_default)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('apotheosis:augmenting_table')
      .addSummary('Uses Sigils of Enhancement to augment _individual_ affixes in an affixed item.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:eversor_gem_info')
      .addSummary('An extremely rare but _powerful_ gem. Momentum seems to be multiplied around it.')
      .addBehaviour([
        'Gem Attributes for Melee Weapons',
        'Multiplicatively increases _damage_, _critical chance_ and _critical damage_.'
      ])
      .addBehaviour([
        'Gem Attributes for Ranged Weapons',
        'Multiplicatively increases _velocity_, _damage_, _critical chance_, and _critical damage_.'
      ])
      .addBehaviour([
        'Gem Attributes for Tools',
        'Multiplicatively increases _reach distance_.'
      ])
      .addBehaviour([
        'Other Sources',
        'Can be crafted by either _crushing_ or _mixing_ Stable Entropy Particles.'
      ])
      .addBehaviour([
        'Why does this item exist?',
        'This information is stated here due to Apotheosis _stretching_ the item tooltip _past_ the screen bounds.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('kubejs:acuti_ora_gem_info')
      .addSummary('An extremely rare but _powerful_ gem. It gives the sensation of slicing into your bones despite nothing happening.')
      .addBehaviour([
        'Gem Attributes for Melee Weapons',
        'Multiplicatively increases armor and protection _shred_. However, some enemies appear resistant to this due to mechanics outside of my control.'
      ])
      .addBehaviour([
        'Gem Attributes for Ranged Weapons',
        'Multiplicatively increases armor and protection _shred_. However, some enemies appear resistant to this due to mechanics outside of my control.'
      ])
      .addBehaviour([
        'Other Sources',
        'Can be obtained from using _Mechanical Saws_ to cut _existing_ Eversor gems.'
      ])
      .addBehaviour([
        'Why does this item exist?',
        'This information is stated here due to Apotheosis _stretching_ the item tooltip _past_ the screen bounds.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
})