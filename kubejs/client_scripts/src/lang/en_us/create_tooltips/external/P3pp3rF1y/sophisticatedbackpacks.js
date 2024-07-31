// requires: sophisticatedbackpacks
// requires: create

let default_advanced_filtering = ['Advanced Upgrade', 'Has more _filtering_ options.']
let stack_upgrade = 'Multiplies the number of stacks that can fit in a slot by '
let pickup_upgrade = 'Makes backpack automatically _pick up_ dropped items on _direct_ contact.'
let filter_upgrade = '_Filters_ items transported in and / or out of the backpack.'
let feeding_upgrade = 'Automatically _feeds_ player with food from the _backpack\'s inventory_.'
let compacting_upgrade = 'Compacts items into their _compressed_ variants.'
let void_upgrade = '_Voids_ items selected in the filter.'
let restock_upgrade = '_Restocks_ backpack with inventories interacted via _[Sneak]_ + R-Click.'
let deposit_upgrade = '_Deposits_ items from backpack into inventories interacted with via _[Sneak]_ + R-Click.'
let refill_upgrade = 'Keeps refilling stack of _selected_ items in player\'s inventory.'
let tool_swapper_upgrade = 'Automatically _swaps_ item in player\'s hand for the one effective on the block / entity on left click.'
let pump_upgrade = 'Pumps fluids between the backpack and adjacent blocks, if applicable.'

ClientEvents.lang('en_us', event => {
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_starter_tier')
      .addSummary(stack_upgrade + '_1.5x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_1')
      .addSummary(stack_upgrade + '_2x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_2')
      .addSummary(stack_upgrade + '_4x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_3')
      .addSummary(stack_upgrade + '_8x_.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:stack_upgrade_tier_4')
      .addSummary(stack_upgrade + '_16x_.')
      .build()
  )
  // UPGRADE MODULES
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:pickup_upgrade')
      .addSummary(pickup_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_pickup_upgrade')
      .addSummary(pickup_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:filter_upgrade')
      .addSummary(filter_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_filter_upgrade')
      .addSummary(filter_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:magnet_upgrade')
      .addSummary('Magnetically attracts items into your backpack.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_magnet_upgrade')
      .addSummary('Magnetically attracts items into your backpack with _greater_ range.')
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:feeding_upgrade')
      .addSummary(feeding_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_feeding_upgrade')
      .addSummary(feeding_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'More options for when food gets fed to player.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:compacting_upgrade')
      .addSummary(compacting_upgrade)
      .addBehaviour([
        'Basic Upgrade',
        'Only works for _2x2_ compacting recipes.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_compacting_upgrade')
      .addSummary(compacting_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with both _2x2_ and _3x3_ compacting recipes with more filtering options.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:void_upgrade')
      .addSummary(void_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_void_upgrade')
      .addSummary(void_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:restock_upgrade')
      .addSummary(restock_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_restock_upgrade')
      .addSummary(restock_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:deposit_upgrade')
      .addSummary(deposit_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_deposit_upgrade')
      .addSummary(deposit_upgrade)
      .addBehaviour(default_advanced_filtering)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:refill_upgrade')
      .addSummary(refill_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_refill_upgrade')
      .addSummary(refill_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Allows for more _precise_ target slot selection. Also allows _[Middle Click]_ block pick from the backpack.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:inception_upgrade')
      .addSummary('Makes it possible to put backpacks into the backpack. Backpack _inception_!')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:everlasting_upgrade')
      .addSummary('Backpack becomes _indestructible_ and can no longer despawn or fall into the void.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:crafting_upgrade')
      .addSummary('Adds a crafting grid in your backpack upgrade tab.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:stonecutter_upgrade')
      .addSummary('Adds a stonecutter in your backpack upgrade tab.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:anvil_upgrade')
      .addSummary('Adds an anvil in your backpack upgrade tab.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:jukebox_upgrade')
      .addSummary('Your very own _portable_ Jukebox, but on your backpack.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:tool_swapper_upgrade')
      .addSummary(tool_swapper_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_tool_swapper_upgrade')
      .addSummary(tool_swapper_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Has additional filter options and enables swapping to wrench-like tools for block / entity a player is looking at. _Requires_ a keybind to utilize!'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:tank_upgrade')
      .addSummary('Replaces part of the backpack\'s inventory with _fluid_ storage.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:battery_upgrade')
      .addSummary('Replaces part of the backpack\'s inventory with _energy_ storage.')
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:pump_upgrade')
      .addSummary(pump_upgrade)
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:advanced_pump_upgrade')
      .addSummary(pump_upgrade)
      .addBehaviour([
        'Advanced Upgrade',
        'Works with fluid containers in your hand and fluid blocks in the world. Also allows for filtering which fluids are pumped.'
      ])
      .build()
  )
  event.addAll(
    'kubejs',
    createTooltip('sophisticatedbackpacks:xp_pump_upgrade')
      .addSummary('Pumps experience between the backpack and the player.')
      .build()
  )
})