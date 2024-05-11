// requires: grimoireofgaia
// requires: farmersdelight
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for Grimoire of Gaia.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log('Loading Grimoire of Gaia scripts...')

ServerEvents.recipes(event => {
  event.shapeless('9x grimoireofgaia:diamond_shard', [
    'minecraft:diamond'
  ]).id('finality:grimoireofgaia/diamond_decompression')
  event.shapeless('9x grimoireofgaia:emerald_shard', [
    'minecraft:emerald'
  ]).id('finality:grimoireofgaia/emerald_decompression')
  event.shapeless('4x grimoireofgaia:shiny_pearl', [
    'grimoireofgaia:pearl_block'
  ]).id('finality:pearl_block_decompression')
  event.recipes.create.crushing([
    Item.of('minecraft:iron_nugget').withChance(0.25),
    Item.of('minecraft:gold_nugget').withChance(0.25),
    Item.of('grimoireofgaia:diamond_shard').withChance(0.25),
    Item.of('grimoireofgaia:emerald_shard').withChance(0.25),
    Item.of('create:experience_nugget').withChance(0.25)
  ], 'grimoireofgaia:shiny_pearl').processingTime(25).id('finality:pearl_crushing')
  event.recipes.create.crushing([
    'minecraft:sand',
    Item.of('minecraft:iron_block').withChance(0.25),
    Item.of('minecraft:gold_block').withChance(0.25),
    Item.of('minecraft:diamond_block').withChance(0.25),
    Item.of('minecraft:emerald_block').withChance(0.25),
    Item.of('create:experience_block').withChance(0.25)
  ], 'grimoireofgaia:pearl_block').processingTime(50).id('finality:pearl_block_crushing')
  event.recipes.create.mixing(Fluid.of('kubejs:nether_wart_jam', 250), [
    '9x minecraft:nether_wart',
    '6x minecraft:sugar',
    Fluid.of('kubejs:lemon_juice', 25)
  ]).heated().id('finality:grimoireofgaia/mixing/nether_wart_jam')
  event.recipes.create.filling('grimoireofgaia:nether_wart_jam', [
    'minecraft:glass_bottle',
    Fluid.of('kubejs:nether_wart_jam', 250)
  ]).id('finality:grimoireofgaia/filling/nether_wart_jam_jar')
  if (Platform.isLoaded('some_assembly_required')) {
    event.recipes.create.mixing('grimoireofgaia:golden_apple_pie', [
      'some_assembly_required:golden_apple_slices',
      'minecraft:sugar',
      'create:dough'
    ]).heated().id('finality:grimoireofgaia/golden_apple_pie')
  }
  event.shapeless('minecraft:totem_of_undying', [
    '4x grimoireofgaia:totem_of_undying_fragment',
  ]).id('finality:grimoireofgaia/undying_totem')
  // headgear accessories
  event.shapeless('grimoireofgaia:headgear_arrow', [
    'minecraft:arrow'
  ]).id('finality:grimoireofgaia/headgear_arrow')
  event.shapeless('minecraft:arrow', [
    'grimoireofgaia:headgear_arrow'
  ]).id('finality:grimoireofgaia/headgear_arrow_revert')
  event.shapeless('grimoireofgaia:headgear_book', [
    'minecraft:book'
  ]).id('finality:grimoireofgaia/headgear_book')
  event.shapeless('minecraft:book', [
    'grimoireofgaia:headgear_book'
  ]).id('finality:grimoireofgaia/headgear_book_revert')
  event.shaped('grimoireofgaia:headgear_mob', [
    'BB',
    'BB'
  ], {
    B: 'minecraft:iron_bars'
  }).id('finality:grimoireofgaia/headgear_mob')
  event.shapeless('4x minecraft:iron_bars', [
    'grimoireofgaia:headgear_mob'
  ]).id('finality:grimoireofgaia/headgear_mob_revert')
  event.shapeless('grimoireofgaia:doll_maid', [
    'grimoireofgaia:headgear_doll'
  ]).id('finality:headgear_doll_revert')
})

ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', [
    'kubejs:nether_wart_jam'
  ])
})

LootJS.modifiers(event => {
  event.addEntityLootModifier('grimoireofgaia:mimic')
    .randomChance(0.01).addLoot('grimoireofgaia:doll_maid')
    .randomChanceWithEnchantment('minecraft:looting', [0, 0.05, 0.1, 0.25])
})

/**
 * To-Do
 *
 * Figure out how to implement conditionals properly for GoG and Goblin Traders
 */
if (Platform.isLoaded('goblintraders')) {
  ServerEvents.highPriorityData(event => {
    event.addJson('grimoireofgaia:trades/goblin_trader/rare', {
      "replace": false,
      "trades": [
        {
          "type": "goblintraders:basic",
          "offer_item": {
            "count": 1,
            "item": "grimoireofgaia:doll_maid"
          },
          "payment_item": {
            "count": 1,
            "item": "minecraft:white_wool"
          },
          "price_multiplier": 0.0,
          "secondary_payment_item": {
            "count": 1,
            "item": "grimoireofgaia:trader_token"
          }
        },
        {
          "type": "goblintraders:basic",
          "offer_item": {
            "count": 1,
            "item": "grimoireofgaia:spawn_slime_girl"
          },
          "payment_item": {
            "count": 1,
            "item": "minecraft:slime_ball"
          },
          "price_multiplier": 0.0,
          "max_trades": 1,
          "secondary_payment_item": {
            "count": 1,
            "item": "minecraft:egg"
          }
        },
        {
          "type": "goblintraders:basic",
          "offer_item": {
            "count": 1,
            "item": "grimoireofgaia:spawn_creeper_girl"
          },
          "payment_item": {
            "count": 1,
            "item": "minecraft:gunpowder"
          },
          "price_multiplier": 0.0,
          "max_trades": 1,
          "secondary_payment_item": {
            "count": 1,
            "item": "minecraft:egg"
          }
        },
        {
          "type": "goblintraders:basic",
          "offer_item": {
            "count": 1,
            "item": "grimoireofgaia:spawn_ender_girl"
          },
          "payment_item": {
            "count": 1,
            "item": "minecraft:ender_pearl"
          },
          "price_multiplier": 0.0,
          "max_trades": 1,
          "secondary_payment_item": {
            "count": 1,
            "item": "minecraft:egg"
          }
        },
        {
          "type": "goblintraders:basic",
          "offer_item": {
            "count": 1,
            "item": "grimoireofgaia:spawn_trader"
          },
          "payment_item": {
            "count": 1,
            "item": "minecraft:gold_ingot"
          },
          "price_multiplier": 0.0,
          "max_trades": 1,
          "secondary_payment_item": {
            "count": 1,
            "item": "minecraft:egg"
          }
        }
      ]
    })
  })
}