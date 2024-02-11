// priority: 0
// requires: bosses_of_mass_destruction

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:soul_star')
      .addSummary('Where does it lead?')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:ancient_anima')
      .addSummary('Crafting material.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:blazing_eye')
      .addSummary('Crafting material.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:obsidian_heart')
      .addSummary('Crafting material.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:void_thorn')
      .addSummary('Crafting material')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:earthdive_spear') // Item.of('bosses_of_mass_destruction:earthdive_spear', '{Damage:0}')
      .addSummary('Grants _short range teleportation_ through solid blocks.')
      .addBehaviour([
        'On holding R-Click',
        '_Orange particles_ will show if the wall you are attempting to teleport through is able to be teleported to.'
      ])
      .addBehaviour([
        'Other usage notes',
        ' _DOES NOT_ work as a regular teleportation staff that lets you teleport as you please.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:crystal_fruit')
      .addSummary('Grants brief regen and resistance when eaten.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:charged_ender_pearl')
      .addSummary('_Reusable_ and gives a brief period of _resistance_ after teleportation.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:brimstone_nectar')
      .addSummary('Resets nearby _Boss of Mass Destructrion_ boss structures structures on use.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:mob_ward')
      .addSummary('When placed, _suppresses_ mob spawning in 64 blocks in any direction.')
      .addBehaviour([
        'On R-Click on top of a block',
        '_Places staff_ on the ground.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:monolith_block')
      .addSummary('When placed, _increases explosion power_ by _30_ in 64 blocks in any direction. The effect _DOES NOT_ stack.')
      .addBehaviour([
        'On R-Click on top of a block',
        '_Places the monolith_ on the ground.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:levitation_block')
      .addSummary('When placed, grants creative flight in a _7x7 column_.')
      .addBehaviour([
        'On R-Click on top of a block',
        '_Places block_ on ground.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('bosses_of_mass_destruction:void_lily')
      .addSummary('Where does the pollen lead?')
      .setPalette($Palette.GREEN)
      .build()
  )
})