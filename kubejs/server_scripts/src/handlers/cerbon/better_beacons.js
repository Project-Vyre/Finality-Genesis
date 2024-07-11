// requires: better_beacons
// requires: fusion

ServerEvents.tags('item', event => {
  event.add('minecraft:beacon_payment_items', 'kubejs:high_entropy_alloy')
})

ServerEvents.tags('block', event => {
  event.add('minecraft:beacon_base_blocks', [
    'kubejs:iridium_block',
    'kubejs:iridium_block_connecting',
    'kubejs:high_entropy_alloy_block',
    'kubejs:high_entropy_alloy_block_connecting'
  ])
})

ServerEvents.highPriorityData(event => {
  event.addJson('better_beacons:payment_items_range/better_beacons', {
    "values": [
      {
        "item": "minecraft:iron_ingot",
        "range": 10
      },
      {
        "item": "minecraft:gold_ingot",
        "range": 20
      },
      {
        "item": "minecraft:emerald",
        "range": 25
      },
      {
        "item": "minecraft:diamond",
        "range": 40
      },
      {
        "item": "minecraft:netherite_ingot",
        "range": 60
      }
    ]
  })
  event.addJson('better_beacons:base_blocks_amplifier/better_beacons', {
    "values": [
      {
        "block": "minecraft:iron_block",
        "amplifier": 0
      },
      {
        "block": "minecraft:gold_block",
        "amplifier": 0
      },
      {
        "block": "minecraft:emerald_block",
        "amplifier": 1
      },
      {
        "block": "minecraft:diamond_block",
        "amplifier": 2
      },
      {
        "block": "minecraft:netherite_block",
        "amplifier": 3
      }
    ]
  })
  event.addJson('better_beacons:payment_items_range/kubejs', {
    "values": [
      {
        "item": "kubejs:iridium_ingot",
        "range": 128
      },
      {
        "item": "kubejs:high_entropy_alloy",
        "range": 512
      }
    ]
  })
  event.addJson('better_beacons:base_blocks_amplifier/kubejs', {
    "values": [
      {
        "block": "kubejs:iridium_block",
        "amplifier": 32
      },
      {
        "block": "kubejs:iridium_block_connecting",
        "amplifier": 64
      },
      {
        "block": "kubejs:high_entropy_alloy_block",
        "amplifier": 128
      },
      {
        "block": "kubejs:high_entropy_alloy_block_connecting",
        "amplifier": 254
      }
    ]
  })
})