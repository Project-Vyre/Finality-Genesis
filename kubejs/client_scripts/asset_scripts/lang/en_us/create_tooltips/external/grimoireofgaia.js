// requires: grimoireofgaia
// requires: create

ClientEvents.lang('en_us', event => {
  let gog_dolls = [
    'creeper_girl',
    'dryad',
    'dullahan',
    'ender_girl',
    'maid',
    'mermaid',
    'nine_tails',
    'slime_girl'
  ]
  gog_dolls.forEach(key => {
    YELLOW_PALETTE(`grimoireofgaia:doll_${key}`)
  })
  GREEN_PALETTE('grimoireofgaia:taproot')
  event.addAll('grimoireofgaia', {
    "item.grimoireofgaia.taproot.tooltip": "TAPROOT",
    "item.grimoireofgaia.taproot.tooltip.summary": "Commonly dropped by Dryads, Mandragora and Spriggans.",
    "item.grimoireofgaia.taproot.tooltip.condition1": "When eaten",
    "item.grimoireofgaia.taproot.tooltip.behaviour1": "Despite providing _no_ nutritional value, it serves as a _cure_ for _negative_ status effects."
  })
  let doll_lang = {
    doll_creeper_girl: 'DOLL CREEPER GIRL',
    doll_dryad: 'DOLL DRYAD',
    doll_dullahan: 'DOLL DULLAHAN',
    doll_ender_girl: 'DOLL ENDER GIRL',
    doll_mermaid: 'DOLL MERMAID',
    doll_nine_tails: 'DOLL NINE TAILS',
    doll_slime_girl: 'DOLL SLIME GIRL',
  }
  for (const [caps, CAPS] of Object.entries(doll_lang)) {
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip`, CAPS)
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.summary`, 'A cute plush doll decoration.')
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.condition1`, 'Acquisition Method')
    event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.behaviour1`, 'Can be acquired as a _loot drop_ from Grimoire of Gaia mobs.')
    if (Platform.isLoaded('goblintraders')) {
      event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.condition2`, 'Alternative Acquisition Method')
      event.add('grimoireofgaia', `block.grimoireofgaia.${caps}.tooltip.behaviour2`, 'Most now be acquired from the Goblin Trader as well, but it is a _rare_ trade.')
    }
  }
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip', 'DOLL MAID')
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.summary', 'A cute plush doll decoration.')
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.condition1', 'Acquisition Method')
  event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.behaviour1', 'Normally unobtainable, but can now drop from Mimics.')
  if (Platform.isLoaded('goblintraders')) {
    event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.condition2', 'Alternative Acquisition Method')
    event.add('grimoireofgaia', 'block.grimoireofgaia.doll_maid.tooltip.behaviour2', 'Can now be acquired from the Goblin Trader.')
  }
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book')
      .addSummary('Upon holding this book you feel _weight_ when you give it momentum... Perhaps it is a weapon? Looks can be _deceptive_ after all.')
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_freezing')
      .addSummary('Upon holding this book you instantly feel the _cold aura_ around it and the air begins to sink as white fog.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Slowness II_ is applied to them.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_nightmare')
      .addSummary('The book has a dark purple aura emanating from it.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Mining Fatigue II_ is applied to them.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_metal')
      .addSummary('Both the cover and pages appear to be composed of metal, and it appears hitting something is enough to apply some considerable force.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Nausea_ is applied to them.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_ender')
      .addSummary('The book has a black aura emanating from it, devoid of light.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Blindness_ is applied to them.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_hunger')
      .addSummary('The book appears to be made of flesh through and through, the cover composed of a red fleshy skin.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Hunger_ is applied to them.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_battle')
      .addSummary('The book transfers combat knowledge to you and you suddenly feel like a master of the ages.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Weakness II_ is applied to them.'
      ])
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_nature')
      .addSummary('The cover is rife with leaves, with a small red flower.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Poison II_ is applied to them.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_wither')
      .addSummary('The cover is made up of wither rib bones, the pages made up of black smoke.')
      .addBehaviour([
        'Usage',
        'Upon hitting an entity with the book in your main hand, _Withering_ is applied to them.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:weapon_book_buff')
      .addSummary('You feel empowered by combat knowledge...')
      .addBehaviour([
        'Usage',
        'Upon hitting a friend with the book in your main hand, _Strength_, _Resistance_ and _Regeneration_ are applied to them.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:minotaur_hammer')
      .addSummary('A _devastating_ weapon once wielded by the _Minotaur_.')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:cursed_metal_sword')
      .addSummary('A cursed sword once wielded by the _Dullahan_.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'grimoireofgaia',
    createTooltip('grimoireofgaia:metal_club')
      .addSummary('Once wielded by the _Oni_.')
      .setPalette($Palette.RED)
      .build()
  )
})