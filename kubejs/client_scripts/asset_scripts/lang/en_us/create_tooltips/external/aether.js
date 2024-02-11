// requires: aether
// requires: create

ClientEvents.lang('en_us', event => {
  GRAY_PALETTE('aether:book_of_lore')
  event.addAll('aether', {
    "item.aether.book_of_lore.tooltip": "BOOK OF LORE",
    "item.aether.book_of_lore.tooltip.summary": "Place an item from _The Aether_ mod in the slot to _learn more_ about it."
  })
  event.addAll(
    'aether',
    createTooltip('aether:icestone')
      .addSummary('It\'s so _cold_ that it turns lava into obsidian and water into ice from a distance.')
      .addBehaviour([
        'Renewal',
        'Enchanting _Blue Ice_ in an _Altar_ converts it into Icestone.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:altar')
      .addSummary('Used to _enchant_ certain items and _repair_ damaged armor and tools. Uses _Ambrosium Shards_ as its fuel source.')
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:incubator')
      .addSummary('Hatches _Moa Eggs_ that you may find in the Aether.')
      .addBehaviour([
        'Fuel source',
        'Uses _Ambrosium torches_ as fuel.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:holystone')
      .addSummary('A stone only found in the Aether.')
      .addBehaviour([
        'Renewal',
        'Any _stone_ can be _enchanted_ in the _Altar_ to convert it into Holystone.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:ambrosium_shard')
      .addSummary('The coal equivalent of the Aether, with an additional uses.')
      .addBehaviour([
        'When eaten',
        'Restores a small amount of health, but does not restore saturation.'
      ])
      .addBehaviour([
        'Renewal',
        'Tools made of _Holystone_ have a chance of dropping _Ambrosium Shards_ while they are being used.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:aechor_petal')
      .addSummary('The petal of an Aechor Plant; they a _sweet aroma_ to them.')
      .addBehaviour([
        'Uses',
        'Aechor Petals are a Moa\'s favorite food and can also be used to _feed_ baby Moas.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  // Darts and Dart Shooters
  event.addAll(
    'aether',
    createTooltip('aether:golden_dart')
      .addSummary('Used by _Golden_ Dart Shooters.')
      .addBehaviour([
        'Acquisition',
        'Crafted with a _Skyroot Stick_, _Feathers_ and _Golden Amber_. '
      ])
      .addBehaviour([
        'When enchanted by the Altar',
        'Increases _damage_ dealt by the dart.'
      ])
      .addBehaviour([
        'When crafted with Aechor Petals',
        'Applies Aechor Plant poison to the dart.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:golden_dart_shooter')
      .addSummary('A dart shooter that shoots _Golden Darts_. The dart shooter itself can be enchanted on an _Altar_ to improve its attack power.')
      .addBehaviour([
        'On holding R-Click',
        'Effortlessly and _automatically_ fires darts in succession.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:poison_dart')
      .addSummary('Used by _Poison_ Dart Shooters.')
      .addBehaviour([
        'On hit',
        'Applies the _Inebriation_ posion effect, which causes entities to be unable to move correctly.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:poison_dart_shooter')
      .addSummary('A dart shooter that shoots _Poison Darts_, which poisons entities with _Aechor Plant_ poison.')
      .addBehaviour([
        'On holding R-Click',
        'Effortlessly and _automatically_ fires darts in succession.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:enchanted_dart')
      .addSummary('Used by _Enchanted_ Dart Shooters. It is the _strongest_ type of dart.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:enchanted_dart_shooter')
      .addSummary('The _strongest_ dart shooter. Requires _Enchanted Darts_.')
      .addBehaviour([
        'On holding R-Click',
        'Effortlessly and _automatically_ fires darts in succession.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:white_apple')
      .addSummary('One of the _only_ known cures for the Aechor Plant poison. Found on _Crystal Trees_ which have _blueish_ leaves.')
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:candy_cane_sword')
      .addSummary('A sword made from _brittle_ candy cane.')
      .addBehaviour([
        'Acquisition',
        'Dropped by _presents_ under _Holiday Trees_ around the Aether.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  /**
   * Skyroot Items
   */
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_pickaxe')
      .addSummary('A pickaxe made from _Skyroot_, the wooden equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Skyroot',
        'When mining Holystone or Ambrosium Ore, there is a chance for drops to be _doubled_. This effect is increased when enchanted with _Fortune_.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_axe')
      .addSummary('An axe made from _Skyroot_, the wooden equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Skyroot',
        'When mining Skyroot logs, there is a chance for drops to be _doubled_. This effect is increased when enchanted with _Fortune_.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_shovel')
      .addSummary('A shovel made from _Skyroot_, the wooden equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Skyroot',
        'When mining _Aether Dirt_ or _Quicksoil_, there is a chance for drops to be _doubled_. This effect is increased when enchanted with _Fortune_.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_hoe')
      .addSummary('A hoe made from _Skyroot_, the wooden equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Skyroot',
        'When harvesting _organic blocks_ or seeds_, there is a chance for drops to be _doubled_. This effect is increased when enchanted with _Fortune_.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_sword')
      .addSummary('A sword made from _Skyroot_, the wooden equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Skyroot',
        'Has a chance for drops from slain entities to be _doubled_. This effect is increased when enchanted with _Fortune_.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_bucket')
      .addSummary('A handcrafted bucket made from _Skyroot_. Is able to contain either _water_, _poison_ from _Aechor Plants_ that you may encounter throughout the Aether.')
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:skyroot_poison_bucket')
      .addSummary('Do _not_ drink this!')
      .addBehaviour([
        'When enchanted by the Altar while containing poison',
        'The Aechor Plant poison turns into a _soothing remedy_ instead and is able to cure effects from the same poison it was made from.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  // Holystone Tools
  event.addAll(
    'aether',
    createTooltip('aether:holystone_pickaxe')
      .addSummary('A pickaxe made from _Holystone_, the stone equivalent of the Aether. It can mine _Zanite_.')
      .addBehaviour([
        'During use',
        'Randomly drops _Ambrosium Shards_.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:holystone_axe')
      .addSummary('An axe made from _Holystone_, the stone equivalent of the Aether.')
      .addBehaviour([
        'During use',
        'Randomly drops _Ambrosium Shards_.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:holystone_shovel')
      .addSummary('A shovel made from _Holystone_, the stone equivalent of the Aether.')
      .addBehaviour([
        'During use',
        'Randomly drops _Ambrosium Shards_.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:holystone_hoe')
      .addSummary('A hoe made from _Holystone_, the stone equivalent of the Aether.')
      .addBehaviour([
        'During use',
        'Randomly drops _Ambrosium Shards_.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:holystone_sword')
      .addSummary('A sword made from _Holystone_, the stone equivalent of the Aether.')
      .addBehaviour([
        'During use',
        'Randomly drops _Ambrosium Shards_.'
      ])
      .setPalette($Palette.GRAY_AND_WHITE)
      .build()
  )
  // Zanite Items
  event.addAll(
    'aether',
    createTooltip('aether:zanite_gemstone')
      .addSummary('A material with _special properties_ that allow tools to become more efficient or armor to grow in strength _as they lose durability_. It is the iron equivalent of the Aether.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_pickaxe')
      .addSummary('A pickaxe made from _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Mining speed _increases_ as the durability lowers. This unfortunately means that it will be slower once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_axe')
      .addSummary('An axe made from _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Mining speed _increases_ as the durability lowers. This unfortunately means that it will be slower once fully repaired.'
      ])
      .addBehaviour([
        'Additional Interactions - Golden Oak Log',
        'When _stripping_ or _breaking_ a _Golden Oak Log_ it will result in some _Golden Amber_ being dropped.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_shovel')
      .addSummary('A shovel made from _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Mining speed _increases_ as the durability lowers. This unfortunately means that it will be slower once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_hoe')
      .addSummary('A hoe made from _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Mining speed _increases_ as the durability lowers. This unfortunately means that it will be slower once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_sword')
      .addSummary('A sword made from _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Attack damage _increases_ as the durability lowers. This unfortunately means that it will do less damage once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_helmet')
      .addSummary('An armor piece made from _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Protection _increases_ as the durability lowers. This unfortunately means that it will do less damage reduction once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_chestplate')
      .addSummary('An armor piece made _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Protection _increases_ as the durability lowers. This unfortunately means that it will do less damage reduction once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_leggings')
      .addSummary('An armor piece made _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Protection _increases_ as the durability lowers. This unfortunately means that it will do less damage reduction once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_boots')
      .addSummary('An armor piece made _Zanite_, the iron equivalent of the Aether.')
      .addBehaviour([
        'Special Trait - Zanite',
        'Protection _increases_ as the durability lowers. This unfortunately means that it will do less damage reduction once fully repaired.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_ring')
      .addSummary('A ring made from _Zanite_ which lets the wearer mine _faster_. It has _limited_ uses, so be careful!')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:zanite_pendant')
      .addSummary('A pendant made from _Zanite_ which lets the wearer mine _faster_. It has _limited_ uses, so be careful!')
      .setPalette($Palette.PURPLE)
      .build()
  )
  // Gravitite Items
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_ore')
      .addSummary('Must be enchanted by the _Altar_ to enchant it into _Enchanted Gravitite_ for further usage.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:enchanted_gravitite')
      .addSummary('Now in its _enchanted_ form, it can be made into _Gravitite_ tools and armor which have their own _special properties_ as indicated by the name.')
      .addBehaviour([
        'When powered by redstone',
        'Floats into the air. Be _careful_ not to send it to the sky to be lost forever!'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_pickaxe')
      .addSummary('A pickaxe made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'On R-Click on a block',
        'Causes the _reversal_ of gravity to that specific block, likely to _never_ return if you don\'t have a ceiling to catch that block.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_axe')
      .addSummary('An axe made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'Inconvenient Trait - Gravitite',
        'Before stripping any logs, _ensure_ that there is a _ceiling_ to prevent the loss of those blocks as they will float up before you are able to do anything.'
      ])
      .addBehaviour([
        'Additional Inconvenience - Golden Oak Log',
        'Here is a _second_ warning. Before stripping any logs, _ensure_ that there is a _ceiling_ to prevent the loss of those blocks. When _stripping_ or _breaking_ a _Golden Oak Log_ it will result in some _Golden Amber_ being dropped.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_shovel')
      .addSummary('A shovel made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'Inconvenient Trait - Gravitite',
        'Before right clicking, _ensure_ that there is a _ceiling_ to prevent the loss of those blocks as they will float up before you are able to do anything.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_hoe')
      .addSummary('A hoe made from _Gravitite_, the diamond equivalent of the Aether. _Does not_ send seeds or dirt blocks into the sky.')
      .addBehaviour([
        'Inconvenient Trait - Gravitite',
        'Before right clicking, _ensure_ that there is a _ceiling_ to prevent the loss of those blocks as they will float up before you are able to do anything.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_sword')
      .addSummary('A sword made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'On hit',
        'Temporarily _reverses_ gravity on the entity hit which sends them into the air to deal some fall damage.'
      ])
      .addBehaviour([
        'Inconvenient Trait - Gravitite',
        'Before right clicking, _ensure_ that there is a _ceiling_ to prevent the loss of those blocks as they will float up before you are able to do anything.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_helmet')
      .addSummary('A helmet made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'Upon wearing the full set',
        'Gravity reverses temporarily to make your own jumps _higher_ than normal.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_chestplate')
      .addSummary('A chestplate made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'Upon wearing the full set',
        'Gravity reverses temporarily to make your own jumps _higher_ than normal.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_leggings')
      .addSummary('Leggings made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'Upon wearing the full set',
        'Gravity reverses temporarily to make your own jumps _higher_ than normal.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:gravitite_boots')
      .addSummary('Boots made from _Gravitite_, the diamond equivalent of the Aether.')
      .addBehaviour([
        'Upon wearing the full set',
        'Gravity reverses temporarily to make your own jumps _higher_ than normal.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  /**
   * Dungeon Loot
   */
  // Valkyrie Items
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_pickaxe')
      .addSummary('A tool that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Special Trait - Valkyrie Reach',
        'All _Valkyrie_ tools have _double_ the normal reach.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_axe')
      .addSummary('A tool that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Special Trait - Valkyrie Reach',
        'All _Valkyrie_ tools have _double_ the normal reach.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_shovel')
      .addSummary('A tool that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Special Trait - Valkyrie Reach',
        'All _Valkyrie_ tools have _double_ the normal reach.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_hoe')
      .addSummary('A tool that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Special Trait - Valkyrie Reach',
        'All _Valkyrie_ tools have _double_ the normal reach.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_lance')
      .addSummary('Interestingly can only be found in the _Bronze Dungeon_ where the Slider resides.')
      .addBehaviour([
        'Special Trait - Valkyrie Reach',
        'This weapon has _double_ the normal reach.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_helmet')
      .addSummary('An armor piece that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _temporary_ flight. _Requires_ the Valkryie Gloves to complete the 5 piece armor set.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_chestplate')
      .addSummary('An armor piece that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _temporary_ flight. _Requires_ the Valkryie Gloves to complete the 5 piece armor set.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_leggings')
      .addSummary('An armor piece that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _temporary_ flight. _Requires_ the Valkryie Gloves to complete the 5 piece armor set.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_boots')
      .addSummary('An armor piece that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _temporary_ flight. _Requires_ the Valkryie Gloves to complete the 5 piece armor set.'
      ])
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:valkyrie_gloves')
      .addSummary('An armor piece that can only be found in the _Silver Dungeon_ where the Valkyrie Queen resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _temporary_ flight.'
      ])
      .build()
  )
  // Phoenix Armor
  event.addAll(
    'aether',
    createTooltip('aether:phoenix_helmet')
      .addSummary('An armor piece that can only be found in the _Gold Dungeon_ where the Sun God resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _fire resistance_ and allows the ability to swim in lava as well. _Requires_ the Phoenix Gloves to complete the 5 piece armor set.'
      ])
      .addBehaviour([
        'On contact with water',
        'Cools down into an _Obsidian_ armor piece.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:phoenix_chestplate')
      .addSummary('An armor piece that can only be found in the _Gold Dungeon_ where the Sun God resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _fire resistance_ and allows the ability to swin in lava as well. _Requires_ the Phoenix Gloves to complete the 5 piece armor set.'
      ])
      .addBehaviour([
        'On contact with water',
        'Cools down into an _Obsidian_ armor piece.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:phoenix_leggings')
      .addSummary('An armor piece that can only be found in the _Gold Dungeon_ where the Sun God resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _fire resistance_ and allows the ability to swin in lava as well. _Requires_ the Phoenix Gloves to complete the 5 piece armor set.'
      ])
      .addBehaviour([
        'On contact with water',
        'Cools down into an _Obsidian_ armor piece.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:phoenix_boots')
      .addSummary('An armor piece that can only be found in the _Gold Dungeon_ where the Sun God resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _fire resistance_ and allows the ability to swin in lava as well. _Requires_ the Phoenix Gloves to complete the 5 piece armor set.'
      ])
      .addBehaviour([
        'On contact with water',
        'Cools down into an _Obsidian_ armor piece.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:phoenix_gloves')
      .addSummary('An armor piece that can only be found in the _Gold Dungeon_ where the Sun God resides.')
      .addBehaviour([
        'Upon wearing the full set',
        'Grants _fire resistance_ and allows the ability to swin in lava as well.'
      ])
      .addBehaviour([
        'On contact with water',
        'Cools down into an _Obsidian_ armor piece.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:obsidian_helmet')
      .addSummary('Originally a Phoenix Armor piece, now _stronger_ than Diamond Armor.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:obsidian_chestplate')
      .addSummary('Originally a Phoenix Armor piece, now _stronger_ than Diamond Armor.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:obsidian_leggings')
      .addSummary('Originally a Phoenix Armor piece, now _stronger_ than Diamond Armor.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:obsidian_boots')
      .addSummary('Originally a Phoenix Armor piece, now _stronger_ than Diamond Armor.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:obsidian_gloves')
      .addSummary('Originally a Phoenix Armor piece, now _stronger_ than Diamond Armor.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  // Other Dungeon Loot
  event.addAll(
    'aether',
    createTooltip('aether:sentry_boots')
      .addSummary('Protects the wearer from _fall damage_ from _any_ height.')
      .addBehaviour([
        'Acquisition',
        'Only obtained as loot from the _Bronze Dungeon_.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:regeneration_stone')
      .addSummary('A gemstone that can only be found in _Silver Dungeons_.')
      .addBehaviour([
        'When equipped',
        'Regenerates the health of the wearer. The effect can _stack_ with other Regeneration Stones.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:life_shard')
      .addSummary('A _rare_ item that is usually only found in _Gold Dungeons_.')
      .addBehaviour([
        'When used',
        'Gives an additional heart that is _permanent_. However, the feeling while using one is difficult to describe.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  if (Platform.isLoaded('bhc')) {
    event.addAll('aether', {
      "item.aether.life_shard.tooltip.condition2": "Renewal",
      "item.aether.life_shard.tooltip.behaviour2": "Can be made with _Red Hearts_ and _Amethyst Shards_."
    })
  }
  event.addAll(
    'aether',
    createTooltip('aether:vampire_blade')
      .addSummary('A mysterious sword that has _life-stealing_ properties. While holding it, you feel _empty_ inside.')
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:flaming_sword')
      .addSummary('An ancient sword found as dungeon loot that causes enemies to be _ignited_.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:phoenix_bow')
      .addSummary('An ancient bow found as dungeon loot that causes arrows to be _ignited_ automatically.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:lightning_sword')
      .addSummary('An ancient sword found as dungeon loot that casts down _lightning bolts_ on foes hit by it.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:sun_altar')
      .addSummary('An altar containing the power to _control_ the sun itself and as a consequence, the time of day. Dropped by the _Sun Spirit_ who resides within the _Gold Dungeon_ after defeat.')
      .setPalette($Palette.YELLOW)
      .build()
  )
  // Neptune Armor and Iron Bubble
  event.addAll(
    'aether',
    createTooltip('aether:iron_bubble')
      .addSummary('A common dungeon loot item.')
      .addBehaviour([
        'When equipped',
        'Allows the wearer to breathe underwater _indefinitely_.'
      ])
      .setPalette($Palette.GRAY)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:neptune_helmet')
      .addSummary('An armor piece exclusively found in _Bronze Dungeons_.')
      .addBehaviour([
        'Upon wearing the full set',
        'Allows for _faster swimming_. Can also be combined with the _Iron Bubble_ to make underwater exploration trivial.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:neptune_chestplate')
      .addSummary('An armor piece exclusively found in _Bronze Dungeons_.')
      .addBehaviour([
        'Upon wearing the full set',
        'Allows for _faster swimming_. Can also be combined with the _Iron Bubble_ to make underwater exploration trivial.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:neptune_leggings')
      .addSummary('An armor piece exclusively found in _Bronze Dungeons_.')
      .addBehaviour([
        'Upon wearing the full set',
        'Allows for _faster swimming_. Can also be combined with the _Iron Bubble_ to make underwater exploration trivial.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:neptune_boots')
      .addSummary('An armor piece exclusively found in _Bronze Dungeons_.')
      .addBehaviour([
        'Upon wearing the full set',
        'Allows for _faster swimming_. Can also be combined with the _Iron Bubble_ to make underwater exploration trivial.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  // Ice Accessories
  event.addAll(
    'aether',
    createTooltip('aether:ice_pendant')
      .addSummary('A pendant when worn that allows you to _freeze_ water and cause lava to _turn into obsidian_ when walked on.')
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'aether',
    createTooltip('aether:ice_ring')
      .addSummary('A ring when worn that allows you to _freeze_ water and cause lava to _turn into obsidian_ when walked on.')
      .setPalette($Palette.BLUE)
      .build()
  )
})