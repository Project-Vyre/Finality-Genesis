// requires: sophisticatedstorage
// requires: create
// ignored: false

let soph_storage_mono = [
  'basic_tier_upgrade',
  'stack_upgrade_tier_1',
  'stack_upgrade_tier_1_plus',
  'stack_upgrade_tier_2',
  'stack_upgrade_tier_3',
  'stack_upgrade_tier_4',
  'stack_upgrade_tier_5',
  'pickup_upgrade',
  'filter_upgrade',
  'magnet_upgrade',
  'feeding_upgrade',
  'void_upgrade',
  'crafting_upgrade',
  'stonecutter_upgrade',
  'jukebox_upgrade',
  'pump_upgrade',
  'xp_pump_upgrade',
  'compression_upgrade',
  'hopper_upgrade',
  'controller'
]
let soph_storage_duo = [
  'advanced_pickup_upgrade',
  'advanced_filter_upgrade',
  'advanced_magnet_upgrade',
  'advanced_feeding_upgrade',
  'compacting_upgrade',
  'advanced_compacting_upgrade',
  'advanced_void_upgrade',
  'advanced_hopper_upgrade',
  'storage_link'
]
let soph_storage_trio = [
  'advanced_pump_upgrade'
]

ItemEvents.tooltip(event => {
  for (let i = 0; i < soph_storage_mono.length; i++) {
    let element = soph_storage_mono[i];
    event.addAdvanced('sophisticatedstorage:' + element, (item, advanced, text) => {
      text.remove(1)
    })
  }
  for (let i = 0; i < soph_storage_duo.length; i++) {
    let element = soph_storage_duo[i];
    event.addAdvanced('sophisticatedstorage:' + element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
    })
  }
  for (let i = 0; i < soph_storage_trio.length; i++) {
    let element = soph_storage_trio[i];
    event.addAdvanced('sophisticatedstorage:' + element, (item, advanced, text) => {
      text.remove(1)
      text.remove(1)
      text.remove(1)
    })
  }
})