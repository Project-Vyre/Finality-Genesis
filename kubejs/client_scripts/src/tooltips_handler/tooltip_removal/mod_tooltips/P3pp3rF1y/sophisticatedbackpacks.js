// requires: sophisticatedbackpacks
// requires: create
// ignored: false

let soph_backpacks_mono = [
  'stack_upgrade_starter_tier',
  'stack_upgrade_tier_1',
  'stack_upgrade_tier_2',
  'stack_upgrade_tier_3',
  'stack_upgrade_tier_4',
  'pickup_upgrade',
  'filter_upgrade',
  'magnet_upgrade',
  'feeding_upgrade',
  'void_upgrade',
  'restock_upgrade',
  'deposit_upgrade',
  'refill_upgrade',
  'inception_upgrade',
  'crafting_upgrade',
  'stonecutter_upgrade',
  'jukebox_upgrade',
  'tool_swapper_upgrade',
  'tank_upgrade',
  'battery_upgrade',
  'pump_upgrade',
  'xp_pump_upgrade',
  'anvil_upgrade'
]
let soph_backpacks_duo = [
  'advanced_pickup_upgrade',
  'advanced_filter_upgrade',
  'advanced_magnet_upgrade',
  'advanced_feeding_upgrade',
  'compacting_upgrade',
  'advanced_compacting_upgrade',
  'advanced_void_upgrade',
  'advanced_restock_upgrade',
  'advanced_deposit_upgrade',
  'everlasting_upgrade',
  'advanced_tool_swapper_upgrade'
]
let soph_backpacks_trio = [
  'advanced_refill_upgrade',
  'advanced_pump_upgrade'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < soph_backpacks_mono.length; i++) {
    let element = soph_backpacks_mono[i];
    event.addAdvanced('sophisticatedbackpacks:' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
  for (let i = 0; i < soph_backpacks_duo.length; i++) {
    let element = soph_backpacks_duo[i];
    event.addAdvanced('sophisticatedbackpacks:' + element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
    })
  }
  for (let i = 0; i < soph_backpacks_trio.length; i++) {
    let element = soph_backpacks_trio[i];
    event.addAdvanced('sophisticatedbackpacks:' + element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
      text.remove(1)
    })
  }
})