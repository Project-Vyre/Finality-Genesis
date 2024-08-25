// requires: sophisticatedstorage
// requires: create

let default_advanced_filtering = ['Advanced Upgrade', 'Has more _filtering_ options.']
let stack_upgrade = 'Multiplies the number of stacks that can fit in a slot by '
let pickup_upgrade = 'Makes the storage block automatically _pick up_ dropped items on _direct_ contact.'
let filter_upgrade = '_Filters_ items transported in and / or out of the storage block.'
let feeding_upgrade = 'Automatically _feeds_ player with food from the _storage block\'s inventory_.'
let compacting_upgrade = 'Compacts items into their _compressed_ variants.'
let void_upgrade = '_Voids_ items selected in the filter.'
let pump_upgrade = 'Pumps fluids between the storage block and adjacent blocks, if applicable.'
let hopper_upgrade = 'Pulls items from storage blocks on top and / or pushes them to storage blocks below.'

let storage_blocks = [
  'barrel',
  'copper_barrel',
  'iron_barrel',
  'gold_barrel',
  'diamond_barrel',
  'netherite_barrel',
  'chest',
  'copper_chest',
  'iron_chest',
  'gold_chest',
  'diamond_chest',
  'netherite_chest',
  'limited_barrel_1',
  'limited_copper_barrel_1',
  'limited_iron_barrel_1',
  'limited_gold_barrel_1',
  'limited_diamond_barrel_1',
  'limited_netherite_barrel_1',
  'limited_barrel_2',
  'limited_copper_barrel_2',
  'limited_iron_barrel_2',
  'limited_gold_barrel_2',
  'limited_diamond_barrel_2',
  'limited_netherite_barrel_2',
  'limited_barrel_3',
  'limited_copper_barrel_3',
  'limited_iron_barrel_3',
  'limited_gold_barrel_3',
  'limited_diamond_barrel_3',
  'limited_netherite_barrel_3',
  'limited_barrel_4',
  'limited_copper_barrel_4',
  'limited_iron_barrel_4',
  'limited_gold_barrel_4',
  'limited_diamond_barrel_4',
  'limited_netherite_barrel_4'
]

ClientEvents.lang('en_us', event => {
  for (let i = 0; i < storage_blocks.length; i++) {
    let element = storage_blocks[i];
    event.addAll(
      'kubejs',
      createTooltip('sophisticatedstorage:' + element)
        .addSummary('An advanced* storage solution!')
        .addBehaviour([
          'Additional Info',
          '*Requires _Packing Tape_ to prevent item spillage into the world.'
        ])
        .build()
    )
  }
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:basic_tier_upgrade')
      .addSummary('Upgrades _vanilla_ inventories to their _sophisticated_ version.')
      .addBehaviour([
        'Additional Info',
        'Does not work with _Quark_ or _Woodworks_ chests! There are recipes to convert them back to the vanilla chest.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_1')
      .addSummary(stack_upgrade + '_2x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_1_plus')
      .addSummary(stack_upgrade + '_3x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_2')
      .addSummary(stack_upgrade + '_4x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_3')
      .addSummary(stack_upgrade + '_8x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_4')
      .addSummary(stack_upgrade + '_16x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stack_upgrade_tier_5')
      .addSummary(stack_upgrade + '_32x_.')
      .build()
  )
  // UPGRADE MODULES
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:pickup_upgrade')
      .addSummary(pickup_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_pickup_upgrade')
      .addSummary(pickup_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:filter_upgrade')
      .addSummary(filter_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_filter_upgrade')
      .addSummary(filter_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:magnet_upgrade')
      .addSummary('Magnetically attracts items into the storage block.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_magnet_upgrade')
      .addSummary('Magnetically attracts items into the storage block with _greater_ range.')
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:feeding_upgrade')
      .addSummary(feeding_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_feeding_upgrade')
      .addSummary(feeding_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'More options for when food gets fed to player.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:compacting_upgrade')
      .addSummary(compacting_upgrade)
      .addBehaviour([
        'Basic Upgrade',
        'Only works for _2x2_ compacting recipes.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_compacting_upgrade')
      .addSummary(compacting_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with both _2x2_ and _3x3_ compacting recipes with more filtering options.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:void_upgrade')
      .addSummary(void_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_void_upgrade')
      .addSummary(void_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:crafting_upgrade')
      .addSummary('Adds a crafting grid in your storage upgrade tab.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:stonecutter_upgrade')
      .addSummary('Adds a stonecutter in your storage upgrade tab.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:jukebox_upgrade')
      .addSummary('Your very own _portable_ Jukebox, but in storage.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:pump_upgrade')
      .addSummary(pump_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_pump_upgrade')
      .addSummary(pump_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with fluid containers in your hand and fluid blocks in the world. Also allows for filtering which fluids are pumped.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:xp_pump_upgrade')
      .addSummary('Pumps experience between the storage block and the player.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:compression_upgrade')
      .addSummary('Automatically compresses / decompresses items. Recommended for use in Limited Barrels.')
      .addBehaviour([
        'Additional Info - 1',
        'When in Barrels, Chests or Shulker Boxes, the compression order is from most compacted form on the _leftmost_ side to the most uncompressed form on the _rightmost_ slots with an indicator.'
      ])
      .addBehaviour([
        'Additional Info - 2',
        'Slots marked with an _X_ after an item is placed inside a compression slot indicate that the item is unable to be compressed / decompressed any further. However, you can reposition the item itself on any of the five slots when in a Barrel, Chest or Shulker Box.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:hopper_upgrade')
      .addSummary(hopper_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:advanced_hopper_upgrade')
      .addSummary(hopper_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        '_Faster_ and with input / output options.'
      ])
      .build()
  )
  // Controller Blocks
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:controller')
      .addSummary('Allows depositing and transporting items to and from a _connected multiblock_ of storage blocks.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedstorage:storage_link')
      .addSummary('Connects separate storage multiblocks to the _Controller_.')
      .addBehaviour([
        'Linking',
        'Use the _Storage Tool_ to link to the _Controller_.'
      ])
      .build()
  )
})