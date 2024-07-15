// requires: ars_nouveau
// requires: create

ClientEvents.lang('en_us', event => {
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
    createTooltip('ars_nouveau:scribes_table')
      .addSummary('Primarily used for crafting new Glyphs and scribing spells into Enchanter\'s items.')
      .addBehaviour([
        'On R-Click with a Spell Book',
        'Presents the selection of Glyphs that can be crafted for that tier of Spell Book.'
      ])
      .addBehaviour([
        'Additional Info',
        'Please refer to your _Worn Notebook_ for additional information that will not be able to fit into this tooltip.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:source_jar')
      .addSummary('Behaves as the storage vessel for Source _collected from_ Sourcelinks. May also _recieve_ Source from Source Relays.')
      .addBehaviour([
        'Configuration',
        'Requires the _Dominion Wand_ along with Sourcelinks and Source Relays.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:agronomic_sourcelink')
      .addSummary('Generates Source from the _natural growth_ of crops and trees within 15 blocks.')
      .addBehaviour([
        'Source Output Info',
        'Source will be output from the Sourcelink to nearby Source Jars within 5 blocks.'
      ])
      .addBehaviour([
        'Additional Info',
        'Bonus Source is generated for magical plants such as Mageblooms, Source Berry Bushes and Archwood Saplings.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:alchemical_sourcelink')
      .addSummary('Generates Source by _consuming potions_ from adjacent Potion Jars. Amount of Source varies per potion depending on its _brewing complexity_.')
      .addBehaviour([
        'Additional Info',
        'Bonus Source is given for the _length_ and _level_ of the potion. Utilizing _Wixies_ and _Potion Melders_ is recommended for creating highly complex potions.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:mycelial_sourcelink')
      .addSummary('Generates a _moderate_ amount of Source from nearby food, generating more for _more nourishing_ food. Can also _pull_ items from nearby Arcane Pedestals.')
      .addBehaviour([
        'Additional Info',
        'Source Berry food is worth far more than other mundane foods. Additionally, the Mycelial Sourcelink will _convert_ Grass or Dirt in the 3x3 below it into Mycelium and will grow mushrooms around it given that the space is _empty.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:vitalic_sourcelink')
      .addSummary('Generates a _moderate_ amount of Source from nearby _mob death_ and _animal breeding_.')
      .addBehaviour([
        'Additional Info',
        'Also generates passive Source from nearby baby animals and will _accelerate_ their growth.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:volcanic_sourcelink')
      .addSummary('Generates Source by consuming _burnable_ items.')
      .addBehaviour([
        'While generating Source...',
        'Produces _heat_ which converts stone into lava. Eventually, Lava Lilies will appear on top of the lava given that the lava is not covered.'
      ])
      .addBehaviour([
        'Additional Info',
        'Archwood logs will generate Source, with Blazing Archwood generating the most.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:imbuement_chamber')
      .addSummary('Utilized in recipes that require the Imbuement Chamber. Imbuement process can be _accelerated_ with the presence of nearby _Source Jars_.')
      .addBehaviour([
        'On R-Click',
        'Begins the imbuement process.'
      ])
      .addBehaviour([
        'Recipe Requirements',
        'If a recipe requires ingredients, they _must_ be placed on _Arcane Pedestals_ or _Arcane Platforms_ before putting in the recipe catalyst.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:enchanting_apparatus')
      .addSummary('Utilized in recipes that require the Enchanting Apparatus. Ingredients _must_ be placed first on _Arcane Pedestals_ or _Arcane Platforms_.')
      .addBehaviour([
        'On R-Click with item',
        '_Attempts_ to start the enchanting process. Check the recipe viewer for the _catalyst_ that starts this.'
      ])
      .addBehaviour([
        'Requirements',
        'An _Arcane Core_ must be placed _below_ the Enchanting Apparatus, along with _Arcane Pedestals_ surrounding it. _Source Jars_ may also be required if the recipe needs Source.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_brazier')
      .addSummary('Requires the use of any ritual item to ignite.')
      .addBehaviour([
        'On R-Click when ignited',
        '_Starts_ the ritual. You _must_ drop any ingredients beforehand onto the Ritual Brazier itself.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
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
    createTooltip('ars_nouveau:storage_lectern')
      .addSummary('Storage management, with magic!')
      .addBehaviour([
        'Requirements',
        'Both a _Bookwyrm Charm_ and _Dominion Wand_ are required to utilize its basic function to behave as a storage interface.'
      ])
      .addBehaviour([
        'Linking',
        'Shift + right click a chest or storage inventory first with the _Dominion Wand_ then right click the Storage Lectern to link.'
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
  /**
   * ARMOR RELATED
   */
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:alteration_table')
      .addSummary('Used for altering your magic armor.')
      .addBehaviour([
        'On R-Click with armor piece',
        'Prepares that armor piece for _alteration_ with any _threads_ you may have on hand.'
      ])
      .addBehaviour([
        'On R-Click with thread with armor piece',
        'Applies the thread onto the armor piece. Can be taken out at any time by right clicking again.'
      ])
      .addBehaviour([
        'Additional Info',
        'The order of alteration matters if your armor piece is Tier II or III.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:blank_thread')
      .addSummary('Used to craft threads that may be used to _empower_ your magical armor.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_depths')
      .addSummary('Greatly increases the amount of time you may breathe underwater by reducing the chance your air will decrease.')
      .addBehaviour([
        'If in Tier III slot',
        'You will _no longer_ lose air and your swimming speed is _greatly_ increased.'
      ])
      .addBehaviour([
        'Additional Info',
        '_Stacks_ with Respiration enchantments.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_heights')
      .addSummary('Allows you to jump _higher_ and increases how far you may fall before taking damage.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_whirlisprig')
      .addSummary('Increases the _saturation_ of consumed food by 30 percent each level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_drygmy')
      .addSummary('Grants an _additional_ stack of Looting.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_high_step')
      .addSummary('Increases _step height_ by one for each level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_spellpower')
      .addSummary('Grants an _increasing amount_ of Spell Damage per level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_life_drain')
      .addSummary('Dealing damage with spells _heals_ you for 20 percent per level of the damage dealt.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_starbuncle')
      .addSummary('Increases the _speed_ of the player by 20 percent per level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_chilling')
      .addSummary('Damaging effects inflict _Freezing_ on the target _before_ the spell resolves.')
      .addBehaviour([
        'Additional Info',
        'Freezing lasts for 10 seconds per level, and becomes _Freezing II_ at a level 3 slot.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_undying')
      .addSummary('Every time you sleep, you will _nullify_ death _once_ as if holding a Totem of Undying.')
      .addBehaviour([
        'Requirements',
        'Must be equipped in a _Tier III_ slot.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_feather')
      .addSummary('_Decreases_ the amount of _fall damage_ taken by a percentage.')
      .addBehaviour([
        'Additional Info',
        '_Stacks_ with Feather Falling enchantments.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_warding')
      .addSummary('Reduces the amount of magic damage taken by a _flat_ percentage each level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_gliding')
      .addSummary('Allows you to glide as if you are wearing an _Elytra_.')
      .addBehaviour([
        'Requirements',
        'Must be equipped in a Tier III slot.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_immolation')
      .addSummary('If the user is on fire or standing in fire, the fire will be extinguished when the user casts a spell and will be granted the _Immolation_ potion effect.')
      .addBehaviour([
        'Additional Info',
        'Fire spells will deal _additional_ damage and last longer for _each level_ of Immolation.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_amethyst_golem')
      .addSummary('Grants 15 percent _knockback resistance_ per level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_magic_capacity')
      .addSummary('Increases the user\'s _maximum mana_ by 10 percent per level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_kindling')
      .addSummary('Damaging effects cause the target to _burn_ for a short duration of time _before_ the effect resolves.')
      .addBehaviour([
        'Additional Info',
        'Burn time is _increased_ by V seconds per level.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_wixie')
      .addSummary('Increases the _duration_ of potions by 15 percent per level.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:thread_repairing')
      .addSummary('Allows the wearer to repair _any_ magical armor or enchanter\'s items by consuming _Mana_ over time.')
      .addBehaviour([
        'Additional Info',
        'Additional levels increase the speed at which the items repair. This perk applies to _all_ relevant items, not only the item within this perk.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})