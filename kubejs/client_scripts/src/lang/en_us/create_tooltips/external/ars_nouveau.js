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
  // SOURCE RELAYS
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:redstone_relay')
      .addSummary('Operates _similarly_ to the Source Relay, but exclusively for wireless redstone signal transport. Has to be linked with other _Redstone Relays_.')
      .addBehaviour([
        'Additional Info',
        'Takes input from one side and outputs in all other directions. Multiple Redstone Relays _can_ be connected together.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:relay')
      .addSummary('Enables the _transport_ of Source between Source Jars and other Source Relays.')
      .addBehaviour([
        'To pull from Source Jars',
        'First use the _Dominion Wand_ on the Source Jar, and then on the _Relay_.'
      ])
      .addBehaviour([
        'To send',
        'First use the _Dominion Wand_ on the _Relay_, and then on the Source Jar _or_ another _Relay_ that you want to send the _Source_ to.'
      ])
      .addBehaviour([
        'To clear connections',
        'Sneak and _right click_ with the Dominion Wand _on_ the Relay.'
      ])
      .addBehaviour([
        'Additional Info',
        'Has a range limit of 30 blocks, which all variations of Source Relays share _except_ the Warper variant.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:relay_collector')
      .addSummary('Operates _similarly_ to the Source Relay.')
      .addBehaviour([
        'Passive - Collector',
        'Automatically _takes_ from Source Jars that it is not linked to within 5 blocks.'
      ])
      .addAction([
        'Control Info',
        'See the _instructions_ or _tooltip_ for the Source Relay for more information.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:relay_deposit')
      .addSummary('Operates _similarly_ to the Source Relay.')
      .addBehaviour([
        'Passive - Depositor',
        'Automatically _deposits_ from Source Jars that it is not linked to within 5 blocks.'
      ])
      .addAction([
        'Control Info',
        'See the _instructions_ or _tooltip_ for the Source Relay for more information.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:relay_splitter')
      .addSummary('Operates _similarly_ to the Source Relay. Also has a _larger_ through-put than the Source Relay which aids in helping split the Source amongst all assigned Source Jars.')
      .addBehaviour([
        'Passive - Splitter',
        'Supports taking from _and_ transferring to multiple Source Jars at once.'
      ])
      .addAction([
        'Control Info',
        'See the _instructions_ or _tooltip_ for the Source Relay for more information.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:relay_warp')
      .addSummary('Operates _similarly_ to the Source Relay, but with infinite range between _other_ Warp relays.')
      .addBehaviour([
        'Additional Info',
        'For distances _beyond_ 30 blocks, there is a chance that some Source will be _lost_ during warp.'
      ])
      .addAction([
        'Control Info',
        'See the _instructions_ or _tooltip_ for the Source Relay for more information.'
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
      .addBehaviour([
        'Starbuncle Transport',
        'If you wish to _take out_ items from an _Enchanting Apparatus_ after it is done crafting, you can _link_ them to a chest where you will then replace it with the _Enchanting Apparatus_.'
      ])
      .addBehaviour([
        'Additional Info',
        'Please note that Create\'s Mechanical Arms do not work with these!'
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
  /**
   * Enchanter's Items
   */
  let enchanter_default = 'Can be _inscribed_ with a spell at the _Scribe\'s Table_.'
  let enchanter_inscribe = [
    'To Inscribe',
    'Place on the Scribes Table first then _Shift_ + R-Click_ with a _Spell Book_ in your main hand that has a configured spell.'
  ]
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:enchanters_sword')
      .addSummary(enchanter_default)
      .addBehaviour(enchanter_inscribe)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:spell_bow')
      .addSummary(enchanter_default)
      .addBehaviour(enchanter_inscribe)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:spell_crossbow')
      .addSummary(enchanter_default)
      .addBehaviour(enchanter_inscribe)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wand')
      .addSummary(enchanter_default)
      .addBehaviour(enchanter_inscribe)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:enchanters_mirror')
      .addSummary(enchanter_default)
      .addBehaviour(enchanter_inscribe)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:enchanters_shield')
      .addSummary('An enhanced shield that _repairs itself_ over time using the wearer\'s mana.')
      .addBehaviour([
        'On blocking damage',
        'Grants increased _Mana Regeneration_ and _Spell Damage_ for a short duration.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  // augment arrows
  let arrow_augment = '_Augments_ spells when used with either an Enchanter\'s Bow or Crossbow.'
  let enchanter_arrows = [
    'amplify',
    'split',
    'pierce'
  ]
  for (let i = 0; i < enchanter_arrows.length; i++) {
    let element = enchanter_arrows[i];
    event.addAll(
      'kubejs',
      createTooltip('ars_nouveau:' + element + '_arrow')
        .addSummary(arrow_augment)
        .setPalette($Palette.PURPLE)
        .build()
    )
  }
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
  // wilden drops
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wilden_horn')
      .addSummary('Drops from _Wilden Hunters_ found in Wilden Dens.')
      .addBehaviour([
        'Alternatively...',
        'Can be summoned with the _Tablet of Summon Wilden_.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wilden_spike')
      .addSummary('Drops from _Wilden Guardians_ found in Wilden Dens.')
      .addBehaviour([
        'Alternatively...',
        'Can be summoned with the _Tablet of Summon Wilden_.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wilden_wing')
      .addSummary('Drops from _Wilden Stalkers_ found in Wilden Dens.')
      .addBehaviour([
        'Alternatively...',
        'Can be summoned with the _Tablet of Summon Wilden_.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:wilden_tribute')
      .addSummary('Obtained by defeating the _Wilden Chimera_ which is summoned with an augmented _Ritual of Summon Wilden_.')
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:drygmy_shard')
      .addSummary('Obtained by giving a Drygmy a _Wilden Horn_.')
      .build()
  )
  // ESSENCES
  let essences_default = 'Magical Essences _created_ in an _Imbuement Chamber_.'
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:abjuration_essence')
      .addSummary(essences_default)
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:conjuration_essence')
      .addSummary(essences_default)
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:air_essence')
      .addSummary(essences_default)
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:earth_essence')
      .addSummary(essences_default)
      .addBehaviour([
        'On R-Click on Dirt',
        'Converts it into a Grass Block'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:fire_essence')
      .addSummary(essences_default)
      .addBehaviour([
        'Additional Info',
        'Can be used as a _fuel_ source.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:manipulation_essence')
      .addSummary(essences_default)
      .addBehaviour([
        'Additional Info',
        'Can be scribed onto a _Spell Parchment_ or _Caster_ tool to permanently _hide_ the spell glyphs.'
      ])
      .setPalette($Palette.YELLOW)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:water_essence')
      .addSummary(essences_default)
      .setPalette($Palette.BLUE)
      .build()
  )
  // CHARMS
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:bookwyrm_charm')
      .addSummary('Used to summon a Bookwyrm.')
      .addBehaviour([
        'Acquisition',
        'Obtained by augmenting a _Ritual of Awakening_ by dropping a Book and Quill into the _Ritual Brazier_ before finishing the ritual.'
      ])
      .addBehaviour([
        'On R-Click on Storage Lectern',
        'Connects inventories to the _Storage Lectern_. See the Storage Lectern tooltip for additional information.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:amethyst_golem_charm')
      .addSummary('Used to summon an Amethyst Golem.')
      .addBehaviour([
        'Acquisition',
        'Obtained by performing the _Ritual of Awakening_ near Budding Amethyst.'
      ])
      .build()
  )
  // PARCHMENT
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:spell_parchment')
      .addSummary('Can be _inscribed_ with a spell at the _Scribes Table_.')
      .build()
  )
  /**
   * RITUAL TABLETS
   */
  let ritual_default = 'A tablet used with the _Ritual Brazier_. _Consumed_ on use. Augmentation items _may_ be required beforehand.'
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_burrowing')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Digs four adjacent holes to bedrock, dropping any blocks.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_challenge')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Summons an illager raid when used inside a village.'
      ])
      .addBehaviour([
        'Augmentation I',
        'An _Emerald_ may be dropped into the _Ritual Brazier_ to _increase_ the difficulty of the raid to the _maximum_ amount, making Totems of Undying accessible on _easier_ world difficulties.'
      ])
      .addBehaviour([
        'Augmentation II',
        'Augmenting has _no effect_ on Hard difficulty.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_binding')
      .addSummary(ritual_default)
      .addBehaviour([
        'Usage',
        'The Ritual of Binding converts nearby _eligible_ entities into _Bound Scripts_ which are then used for summoning a _Familiar_. For more information, see the section on Familiars in the _Worn Notebook_ or _Spell Book_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_awakening')
      .addSummary(ritual_default)
      .addBehaviour([
        'When used with nearby Archwood trees at the base',
        'Awakens them into _Weald Walkers_ which can be given a position in the world to _guard_ against hostile mobs. They will _heal_ over time and turn into _Weald Waddlers_ if they die.'
      ])
      .addBehaviour([
        'When used with Budding Amethyst nearby',
        'Awakens them into _Amethyst Golems_.'
      ])
      .addBehaviour([
        'When augmented with a Book and Quill',
        'Creates a _Bookwyrm Charm_.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_disintegration')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Destroys nearby monsters and _converts_ them into _Experience Gems_ worth _twice_ as much experience. Monsters destroyed this way will _not_ drop items.'
      ])
      .addBehaviour([
        'Additional Info',
        'This ritual _consumes_ Source each time a monster is destroyed.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_sunrise')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Sets the _time_ to day.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_cloudshaping')
      .addSummary(ritual_default)
      .addBehaviour([
        'Usage',
        'This ritual can _change_ the weather at a moment\'s notice. By _default_ this ritual will set the weather to _clear_.'
      ])
      .addBehaviour([
        'Augmentation I',
        'Augmenting with _Gunpowder_ will cause rain to fall from the skies.'
      ])
      .addBehaviour([
        'Augmentation II',
        'Augmenting with a _Lapis Block_ will cause a storm.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_flight')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Grants nearby players the _Flight_ effect when they _jump_, allowing Creative Flight for a short time. If the player is nearby, this ritual will _refresh_ their Flight buff.'
      ])
      .addBehaviour([
        'Additional Info',
        'Each time this ritual grants _or_ refreshes flight, it will expend source from _nearby_ Source Jars.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_conjure_island_plains')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Creates an _island_ of grass and dirt in a circle around the ritual, converting the area to a _Plains biome_. Default radius is 7 blocks.'
      ])
      .addBehaviour([
        'Augmentation I',
        'Augmenting with a _Frostaya_ will create a _Snow Plains biome_ instead.'
      ])
      .addBehaviour([
        'Augmentation II',
        'Augmenting with _Source Gems_ will increase the radius by 1 for each gem.'
      ])
      .addBehaviour([
        'Requirements',
        'Source _must_ be provided nearby as blocks are generated.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_restoration')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        '_Heals_ nearby entities or _harms_ undead over time.'
      ])
      .addBehaviour([
        'Additional Info',
        'Zombie Villagers will be _instantly_ cured and will offer discounts if a player was nearby.'
      ])
      .addBehaviour([
        'Requirements',
        'This ritual requires Source to operate.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_animal_summon')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Summon a _random variety_ of wild animals _native_ to the biome the ritual occurs in.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_forestation')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Places _grown_ Oak and Birch trees, and applies bonemeal in a 7x7 circular area.'
      ])
      .addBehaviour([
        'Augmentation I',
        'Augmenting with a Source Gem will _increase_ the radius by 1 for each gem.'
      ])
      .addBehaviour([
        'Augmentation II',
        'Augmenting with a _Brown Mushroom_ will convert the area to Podzol and spawn Taiga biome resources.'
      ])
      .addBehaviour([
        'Augmentation III',
        'Augmenting with _Glow Berries_ will spawn Jungle biome resources.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_warping')
      .addSummary(ritual_default)
      .addBehaviour([
        'Requirements',
        '_Before_ starting the ritual, you must first augment the ritual with an _inscribed_ Warp Scroll with a set location.'
      ])
      .addBehaviour([
        'On ritual success',
        'Warps all nearby entities to the set location on a _Warp Scroll_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_moonfall')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Sets the _time_ to night.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_containment')
      .addSummary(ritual_default)
      .addBehaviour([
        'Requirements',
        'Mobs and Containment Jars must be _within 3 blocks_ of the Ritual Brazier.'
      ])
      .addBehaviour([
        'On ritual success',
        'Captures a nearby entity and places it into any nearby _placed_ Containment Jars.'
      ])
      .addBehaviour([
        'Additional Info',
        'After the first capture, this ritual requires additional Source to continue.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_scrying')
      .addSummary(ritual_default)
      .addBehaviour([
        'Requirements',
        'Throw the block you are searching for into the _Ritual Brazier_ before starting.'
      ])
      .addBehaviour([
        'Augmentation - Duration Extension',
        'Drop _Manipulation Essence_ to increase the duration to _15 minutes_.'
      ])
      .addBehaviour([
        'On ritual success',
        'Grants vision of a given block through any other block for a given time.'
      ])
      .addBehaviour([
        'Vision Info',
        '_White particles_ signify that you are _very_ close. _Green_ is semi-far. _Blue particles_ signify that the blocks are very far from you.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_gravity')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Grants nearby players the _Gravity_ effect, forcing them to the ground for a short time. If the player is nearby, this ritual will refresh their Gravity debuff.'
      ])
      .addBehaviour([
        'Additional Info',
        'Each time this ritual grants _or_ refreshes gravity, it will expend Source from nearby Source Jars.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_flowering')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Populates the nearby area with flowers and grass.'
      ])
      .addBehaviour([
        'Augmentation I',
        'Augmenting with a _Source Gem_ will increase the radius by 1 for each gem.'
      ])
      .addBehaviour([
        'Augmentation II',
        'Augmenting with _Sand_ will replace flowers with Cacti and Dead Bushes.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_sanctuary')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        '_Denies_ hostile mobs from naturally spawning in a 32 block radius.'
      ])
      .addBehaviour([
        'Augmentation I',
        'Augment with _Rotten Flesh_ to increase the radius by 1 each, up to a maximum of 128.'
      ])
      .addBehaviour([
        'Requirements',
        'Costs Source if a spawn is denied.'
      ])
      .setPalette($Palette.BLUE)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_fertility')
      .addSummary(ritual_default)
      .addBehaviour([
        'Usage',
        'Periodically causes nearby animals to _breed_ if possible.'
      ])
      .addBehaviour([
        'Requirements',
        'Requires Source to operate, and will also have no effect if there are _twenty or more_ animals nearby.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_overgrowth')
      .addSummary(ritual_default)
      .addBehaviour([
        'Usage',
        'Occasionally bone meals blocks in the area around it.'
      ])
      .addBehaviour([
        'Requirements',
        'This ritual requires Source to operate.'
      ])
      .addBehaviour([
        'Augmentation I',
        'If _augmented_ with a _Bone Block_, this ritual will instead force baby animals to grow faster.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_conjure_island_desert')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Creates an _island_ of sand and sandstone in a circle around the ritual, converting the area to a _Desert biome_. Default radius is 7 blocks.'
      ])
      .addBehaviour([
        'Augmentation I',
        'Augmenting with a _Terracotta_ will create a _Badlands biome_ instead.'
      ])
      .addBehaviour([
        'Augmentation II',
        'Augmenting with _Source Gems_ will increase the radius by 1 for each gem.'
      ])
      .addBehaviour([
        'Requirements',
        'Source _must_ be provided nearby as blocks are generated.'
      ])
      .setPalette($Palette.RED)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_harvest')
      .addSummary(ritual_default)
      .addBehaviour([
        'On ritual success',
        'Casts the _Harvest_ effect on nearby crops.'
      ])
      .addBehaviour([
        'Requirements',
        'Consumes Source each time a set of crops is harvested.'
      ])
      .addBehaviour([
        'Additional Info',
        'If an inventory is adjacent to the _Ritual Brazier_, the items will be automaitcally be _deposited_ in them before dropping on the ground if the storage is full.'
      ])
      .setPalette($Palette.GREEN)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('ars_nouveau:ritual_wilden_summon')
      .addSummary(ritual_default)
      .addBehaviour([
        'Without augments',
        'This ritual will summon a _random variety_ of Wilden monsters for a short duration.'
      ])
      .addBehaviour([
        'With augments',
        'When augmented with a _Wilden Spike_, _Wilden Horn_ and a _Wilden Wing_, this ritual will summon the _Wilden Chimera_, a challenging and destructive monster. Please note that summoning the Wilden Chimera will _destroy blocks_ around the _Ritual Brazier_.'
      ])
      .setPalette($Palette.PURPLE)
      .build()
  )
})