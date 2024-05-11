// requires: goblintraders
// requires: create

/**
 * @file Server handler for Goblin Traders
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.highPriorityData(event => {
  // original file path goblintraders/trades/goblin_trader
  event.addJson('goblintraders:trades/goblin_trader/common', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 24,
        "offer_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 8,
          "item": "minecraft:apple"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 6,
        "max_trades": 30,
        "offer_item": {
          "count": 2,
          "item": "minecraft:iron_ingot"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:raw_iron"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 6,
        "max_trades": 30,
        "offer_item": {
          "count": 3,
          "item": "minecraft:gold_ingot"
        },
        "payment_item": {
          "count": 2,
          "item": "minecraft:raw_gold"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 6,
        "max_trades": 30,
        "offer_item": {
          "count": 2,
          "item": "minecraft:copper_ingot"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:raw_copper"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 24,
        "offer_item": {
          "count": 1,
          "item": "minecraft:coal"
        },
        "payment_item": {
          "count": 4,
          "item": "minecraft:rotten_flesh"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 32,
        "offer_item": {
          "count": 2,
          "item": "minecraft:flint"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:gravel"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 128,
        "offer_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 32,
          "item": "minecraft:cobblestone"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 2,
        "offer_item": {
          "count": 1,
          "item": "create:andesite_alloy"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:andesite"
        },
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:iron_nugget"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 6,
        "max_trades": 30,
        "offer_item": {
          "count": 2,
          "item": "create:zinc_ingot"
        },
        "payment_item": {
          "count": 1,
          "item": "create:raw_zinc"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:calcite"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:amethyst_shard"
        },
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:bone_meal"
        },
        "price_multiplier": 0.0
      }
    ]
  })
  event.addJson('goblintraders:trades/goblin_trader/uncommon', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 32,
        "offer_item": {
          "count": 2,
          "item": "minecraft:gunpowder"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "offer_item": {
          "count": 6,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:turtle_egg"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "max_trades": 4,
        "offer_item": {
          "count": 8,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:pufferfish_bucket"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "offer_item": {
          "count": 1,
          "item": "minecraft:sponge"
        },
        "payment_item": {
          "count": 8,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "max_trades": 2,
        "offer_item": {
          "count": 1,
          "item": "minecraft:chipped_anvil"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:damaged_anvil"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 4,
          "item": "minecraft:iron_ingot"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "max_trades": 2,
        "offer_item": {
          "count": 1,
          "item": "minecraft:anvil"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:chipped_anvil"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 4,
          "item": "minecraft:iron_ingot"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 64,
        "offer_item": {
          "count": 2,
          "item": "minecraft:terracotta"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:clay"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 32,
        "offer_item": {
          "count": 2,
          "item": "minecraft:book"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:leather"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 3,
          "item": "minecraft:paper"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 20,
        "offer_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 2,
          "item": "minecraft:amethyst_shard"
        },
        "price_multiplier": 0.0
      }
    ]
  })
  event.addJson('goblintraders:trades/goblin_trader/rare', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "max_trades": 64,
        "offer_item": {
          "count": 1,
          "item": "minecraft:experience_bottle"
        },
        "payment_item": {
          "count": 3,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "max_trades": 2,
        "offer_item": {
          "count": 1,
          "item": "minecraft:name_tag"
        },
        "payment_item": {
          "count": 24,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 8,
          "item": "minecraft:paper"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "max_trades": 64,
        "offer_item": {
          "count": 1,
          "item": "minecraft:blue_ice"
        },
        "payment_item": {
          "count": 4,
          "item": "minecraft:packed_ice"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:luck_of_the_sea",
            "level": 5
          }
        ],
        "experience": 30,
        "max_trades": 2,
        "offer_item": {
          "count": 1,
          "item": "minecraft:fishing_rod",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:fishing_rod",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:luck_of_the_sea\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:lure",
            "level": 5
          }
        ],
        "experience": 30,
        "max_trades": 2,
        "offer_item": {
          "count": 1,
          "item": "minecraft:fishing_rod",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:fishing_rod",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:lure\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:music_disc_cat"
        },
        "payment_item": {
          "count": 32,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:music_disc_blocks"
        },
        "payment_item": {
          "count": 32,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:music_disc_chirp"
        },
        "payment_item": {
          "count": 32,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:music_disc_mellohi"
        },
        "payment_item": {
          "count": 32,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:music_disc_stal"
        },
        "payment_item": {
          "count": 32,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:efficiency",
            "level": 6
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:efficiency\",lvl:5s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fortune",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:fortune\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:efficiency",
            "level": 6
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_axe",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_axe",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:efficiency\",lvl:5s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_axe",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_axe",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:efficiency",
            "level": 6
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_shovel",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_shovel",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:efficiency\",lvl:5s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_shovel",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_shovel",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      }
    ]
  })
  event.addJson('goblintraders:trades/goblin_trader/legendary', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fortune",
            "level": 5
          },
          {
            "id": "minecraft:unbreaking",
            "level": 5
          }
        ],
        "experience": 1000,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 5,
          "item": "minecraft:dragon_head"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:diamond_pickaxe",
          "nbt": "{Damage:0}"
        }
      }
    ]
  })
  // original file path goblintraders/trades/vein_goblin_trader
  event.addJson('goblintraders:trades/vein_goblin_trader/common', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 24,
        "offer_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:carrot"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 32,
        "offer_item": {
          "count": 4,
          "item": "minecraft:glowstone_dust"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:glowstone"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 64,
        "offer_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "payment_item": {
          "count": 64,
          "item": "minecraft:netherrack"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "offer_item": {
          "count": 2,
          "item": "minecraft:nether_wart"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      }
    ]
  })
  event.addJson('goblintraders:trades/vein_goblin_trader/uncommon', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 10,
        "offer_item": {
          "count": 1,
          "item": "minecraft:totem_of_undying"
        },
        "payment_item": {
          "count": 2,
          "item": "minecraft:netherite_ingot"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 50,
        "max_trades": 20,
        "offer_item": {
          "count": 5,
          "item": "minecraft:netherite_scrap"
        },
        "payment_item": {
          "count": 4,
          "item": "minecraft:ancient_debris"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 4,
        "max_trades": 128,
        "offer_item": {
          "count": 1,
          "item": "minecraft:red_nether_bricks"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:nether_wart"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:nether_brick"
        }
      },
      {
        "type": "goblintraders:basic",
        "max_trades": 16,
        "offer_item": {
          "count": 2,
          "item": "create:brass_ingot"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:copper_ingot"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "create:zinc_ingot"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 25,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "create:blaze_burner"
        },
        "payment_item": {
          "count": 1,
          "item": "create:empty_blaze_burner"
        },
        "secondary_payment_item": {
          "count": 32,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 5,
        "max_trades": 8,
        "offer_item": {
          "count": 8,
          "item": "create:polished_rose_quartz"
        },
        "payment_item": {
          "count": 8,
          "item": "create:rose_quartz"
        },
        "secondary_payment_item": {
          "count": 1,
          "item": "create:sand_paper"
        },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "experience": 0.2,
        "max_trades": 8,
        "offer_item": { "count": 1, "item": "minecraft:ghast_spawn_egg" },
        "payment_item": { "count": 1, "item": "create:brass_block" },
        "price_multiplier": 0.0
      }
    ]
  })
  event.addJson('goblintraders:trades/vein_goblin_trader/rare', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 0.2,
        "max_trades": 16,
        "offer_item": { "count": 1, "item": "minecraft:ghast_spawn_egg" },
        "payment_item": { "count": 1, "item": "create:electron_tube" },
        "price_multiplier": 0.0
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:sharpness",
            "level": 6
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:sharpness\",lvl:5s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:looting",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:looting\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:sweeping",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:sweeping\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fire_aspect",
            "level": 3
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_aspect\",lvl:2s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:knockback",
            "level": 3
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:knockback\",lvl:2s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:bane_of_arthropods",
            "level": 6
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:bane_of_arthropods\",lvl:5s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:smite",
            "level": 6
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:smite\",lvl:5s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:blast_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:blast_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fire_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:projectile_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:projectile_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_helmet",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:blast_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:blast_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fire_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:projectile_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:projectile_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_chestplate",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:blast_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:blast_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fire_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:projectile_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:projectile_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_leggings",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:blast_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:blast_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:fire_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:fire_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:projectile_protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:projectile_protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:protection",
            "level": 5
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:protection\",lvl:4s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:unbreaking",
            "level": 4
          }
        ],
        "experience": 200,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 1,
          "item": "minecraft:diamond_boots",
          "nbt": "{Damage:0}"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:enchanted_book",
          "nbt": "{StoredEnchantments:[{id:\"minecraft:unbreaking\",lvl:3s}]}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:extended_night_vision\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:extended_invisibility\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:powerful_jump_boost\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:extended_fire_resistance\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:powerful_speed\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:extended_water_breathing\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:powerful_instant_health\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:powerful_regeneration\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 8,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:extended_slow_falling\"}"
        },
        "payment_item": {
          "count": 15,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      }
    ]
  })
  event.addJson('goblintraders:trades/vein_goblin_trader/epic', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 4,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:haste\"}"
        },
        "payment_item": {
          "count": 25,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 4,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:absorption\"}"
        },
        "payment_item": {
          "count": 25,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 4,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:levitation\"}"
        },
        "payment_item": {
          "count": 25,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 4,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:luck\"}"
        },
        "payment_item": {
          "count": 25,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 4,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:dolphins_grace\"}"
        },
        "payment_item": {
          "count": 25,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      },
      {
        "type": "goblintraders:basic",
        "experience": 100,
        "max_trades": 4,
        "offer_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"goblintraders:powerful_strength\"}"
        },
        "payment_item": {
          "count": 25,
          "item": "minecraft:emerald"
        },
        "price_multiplier": 0.5,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:potion",
          "nbt": "{Potion:\"minecraft:awkward\"}"
        }
      }
    ]
  })
  event.addJson('goblintraders:trades/vein_goblin_trader/legendary', {
    "replace": true,
    "trades": [
      {
        "type": "goblintraders:basic",
        "enchantments": [
          {
            "id": "minecraft:sharpness",
            "level": 7
          },
          {
            "id": "minecraft:unbreaking",
            "level": 7
          }
        ],
        "experience": 1000,
        "max_trades": 1,
        "offer_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        },
        "payment_item": {
          "count": 5,
          "item": "minecraft:dragon_head"
        },
        "price_multiplier": 0.0,
        "secondary_payment_item": {
          "count": 1,
          "item": "minecraft:diamond_sword",
          "nbt": "{Damage:0}"
        }
      }
    ]
  })
})