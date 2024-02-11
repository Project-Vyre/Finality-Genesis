// requires: bhc
// requires: create

ClientEvents.lang('en_us', event => {
  event.addAll(
    'bhc',
    createTooltip('bhc:red_heart')
      .addSummary('Adds more health when used with the _Heart Amulet_ as a Red Heart Canister.')
      .addBehaviour([
        'Drop source',
        '_Commonly_ drops from _normal_ enemies like _zombies_, _skeletons_, _creepers_, etc.'
      ])
      .addBehaviour([
        'When melted',
        'Used for making Melted Yellow Hearts which can then be _upgraded_ further.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'bhc',
    createTooltip('bhc:yellow_heart')
      .addSummary('Adds more health when used with the _Heart Amulet_ as a Yellow Heart Canister.')
      .addBehaviour([
        'Drop source',
        '_Exclusively_ drops from _bosses_.'
      ])
      .addBehaviour([
        'When melted',
        'Used for making Melted Green Hearts which can then be _upgraded_ further.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'bhc',
    createTooltip('bhc:green_heart')
      .addSummary('Adds more health when used with the _Heart Amulet_ as a Green Heart Canister.')
      .addBehaviour([
        'Drop source',
        '_Exclusively_ drops from the _Ender Dragon_.'
      ])
      .addBehaviour([
        'When melted',
        'Used for making Melted Blue Hearts which can then be _upgraded_ further.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'bhc',
    createTooltip('bhc:blue_heart')
      .addSummary('Adds more health when used with the _Heart Amulet_ as a Blue Heart Canister.')
      .addBehaviour([
        'Drop source',
        '_Exclusively_ drops from the _Warden_.'
      ])
      .addBehaviour([
        'Upgradeability',
        'Used for making Purple Heart Canisters which each behave like an Undying Totem.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})

/*
    RED_PALETTE('bhc:red_heart')
    event.addAll('bhc', {
        "item.bhc.red_heart.tooltip": "RED HEART",
        "item.bhc.red_heart.tooltip.summary": "Adds more health when used with the _Heart Amulet_ as a Red Heart Canister.",
        "item.bhc.red_heart.tooltip.condition2": "When melted",
        "item.bhc.red_heart.tooltip.behaviour2": "Used for making Melted Yellow Hearts which can then be _upgraded_ further.",
    })
*/