// requires: culturaldelights

// test 1: Crabber's Delight and Nether's Delight don't cause the issue...
// test 2: Cultural Delights returns the error.
console.log("Please ignore com.google.gson.JsonParseException: java.io.EOFException as it is being caused by Cultural Delights.")
console.log("This was determined after doing a binary search to narrow down the cause.")

ServerEvents.recipes(event => {
  event.remove([
    { id: 'minecraft:beetroot_soup' },
    { id: 'minecraft:mushroom_stew' },
    { id: 'minecraft:rabbit_stew_from_brown_mushroom' },
    { id: 'minecraft:rabbit_stew_from_red_mushroom' }
  ])
  event.shapeless('minecraft:beetroot_soup', [
    '6x minecraft:beetroot',
    'minecraft:bowl'
  ]).id('finality:beetroot_soup')
  event.shapeless('minecraft:mushroom_stew', [
    'minecraft:red_mushroom',
    'minecraft:brown_mushroom',
    'minecraft:bowl'
  ]).id('finality:mushroom_stew')
  event.shapeless('minecraft:rabbit_stew', [
    'minecraft:baked_potato',
    ['minecraft:brown_mushroom', 'minecraft:red_mushroom'],
    'minecraft:rabbit',
    'minecraft:bowl',
    'minecraft:carrot',
  ]).id('finality:rabbit_stew_from_mushroom')
})

/**
 * The saplings were not tagged properly to the point that they would not work with
 * Create's Tree Fertilizer item.
 */

ServerEvents.tags('item', event => {
  event.add('minecraft:saplings', 'culturaldelights:avocado_sapling')
})

ServerEvents.tags('block', event => {
  event.add('minecraft:saplings', 'culturaldelights:avocado_sapling')
})

ServerEvents.highPriorityData(event => {
  event.addJson('culturaldelights:loot_tables/blocks/exotic_roll_medley_block', {
    "type": "minecraft:block",
    "pools": [
      {
        "name": "pool1",
        "rolls": 1,
        "entries": [
          {
            "type": "minecraft:item",
            "name": "culturaldelights:exotic_roll_medley"
          }
        ],
        "conditions": [
          {
            "condition": "minecraft:block_state_property",
            "block": "culturaldelights:exotic_roll_medley",
            "properties": {
              "servings": "8"
            }
          }
        ]
      },
      {
        "name": "pool2",
        "rolls": 1,
        "entries": [
          {
            "type": "minecraft:item",
            "name": "minecraft:bowl"
          }
        ],
        "conditions": [
          {
            "condition": "minecraft:inverted",
            "term": {
              "condition": "minecraft:block_state_property",
              "block": "culturaldelights:exotic_roll_medley",
              "properties": {
                "servings": "8"
              }
            }
          }
        ]
      }
    ]
  })
  event.addJson('culturaldelights:loot_tables/blocks/avocado_bundle', {
    "type": "minecraft:block",
    "pools": [
      {
        "rolls": 1,
        "entries": [
          {
            "type": "minecraft:alternatives",
            "children": [
              {
                "type": "minecraft:item",
                "conditions": [
                  {
                    "condition": "minecraft:match_tool",
                    "predicate": {
                      "enchantments": [
                        {
                          "enchantment": "minecraft:silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                ],
                "name": "culturaldelights:avocado_crate"
              },
              {
                "type": "minecraft:item",
                "functions": [
                  {
                    "function": "minecraft:set_count",
                    "count": {
                      "min": 2.0,
                      "max": 4.0,
                      "type": "minecraft:uniform"
                    }
                  },
                  {
                    "function": "minecraft:apply_bonus",
                    "enchantment": "minecraft:fortune",
                    "formula": "minecraft:uniform_bonus_count",
                    "parameters": {
                      "bonusMultiplier": 1
                    }
                  },
                  {
                    "function": "minecraft:limit_count",
                    "limit": {
                      "max": 8
                    }
                  },
                  {
                    "function": "minecraft:explosion_decay"
                  }
                ],
                "name": "culturaldelights:avocado"
              }
            ]
          }
        ]
      }
    ]
  })
  event.addJson('culturaldelights:loot_tables/blocks/avocado_leaf_carpet',
    {
      "type": "minecraft:block",
      "pools": [
        {
          "rolls": 1,
          "entries": [
            {
              "type": "minecraft:item",
              "name": "culturaldelights:avocado_leaves"
            }
          ],
          "conditions": [
            {
              "condition": "minecraft:survives_explosion"
            }
          ]
        }
      ]
    })
})