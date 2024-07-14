// requires: summoningrituals
// requires: kubejs_create
// ignored: false

/**
 * @file Server handler for everything Summoning Rituals related.
 */

ServerEvents.recipes(event => {
  event.recipes.kubejs.shapeless('summoningrituals:altar', [
    'minecraft:wither_skeleton_skull',
    '#minecraft:wool_carpets',
    '#minecraft:candles',
    '#minecraft:candles',
    '#forge:plates/gold',
    '#minecraft:candles',
    '#minecraft:wooden_slabs',
    '#minecraft:logs',
    '#minecraft:wooden_slabs'
  ]).id('kubejs:summoning_altar_i_tried_fitting')

  event.recipes.summoningrituals.altar('minecraft:echo_shard')
    .input([
      'minecraft:soul_sand',
      '6x minecraft:bone_block'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:warden')
        .offset(0, 3, 0)
        .spread(3, 0, 3)
        .data({
          PersistenceRequired: 1,
          Brain: {
            memories: {
              "minecraft:dig_cooldown": {
                value: {},
                ttl: 1200
              }
            }
          }
        })
    )
    .recipeTime(10)
    .id('kubejs:altar/warden')

  event.recipes.summoningrituals.altar('minecraft:emerald')
    .input([
      'minecraft:glass_bottle',
      'minecraft:redstone',
      'minecraft:glowstone_dust',
      'minecraft:nether_wart'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:witch')
        .count(12)
        .offset(0, 2, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(25)
    .id('kubejs:altar/witch')

  event.recipes.summoningrituals.altar('minecraft:bow')
    .input([
      'minecraft:snowball',
      'minecraft:bone'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:stray')
        .count(12)
        .offset(0, 2, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(25)
    .id('kubejs:altar/stray')

  event.recipes.summoningrituals.altar('minecraft:rotten_flesh')
    .input([
      'minecraft:kelp',
      'minecraft:prismarine_shard'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:drowned')
        .count(12)
        .offset(0, 2, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(25)
    .id('kubejs:altar/drowned')

  event.recipes.summoningrituals.altar('minecraft:rotten_flesh')
    .input([
      'minecraft:sand',
      'minecraft:cactus'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:husk')
        .count(12)
        .offset(0, 2, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(25)
    .id('kubejs:altar/husk')

  event.recipes.summoningrituals.altar('minecraft:black_dye')
    .input([
      'minecraft:water_bucket',
      'minecraft:kelp'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:squid')
        .count(12)
        .offset(0, 2, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(25)
    .id('kubejs:altar/squid')

  event.recipes.summoningrituals.altar('minecraft:black_dye')
    .input([
      'minecraft:water_bucket',
      'minecraft:kelp',
      'minecraft:deepslate'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:glow_squid')
        .count(12)
        .offset(0, 2, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(25)
    .id('kubejs:altar/glow_squid')

  event.recipes.summoningrituals.altar('create:dough')
    .input([
      '#minecraft:saplings',
      'minecraft:phantom_membrane',
      'minecraft:rotten_flesh',
      'minecraft:spider_eye'
    ])
    .mobOutput(
      SummoningOutput.mob('minecraft:slime')
        .count(12)
        .offset(0, 3, 0)
        .spread(3, 0, 3)
        .data({ Size: 3 })
    )
    .recipeTime(25)
    .id('kubejs:altar/slime')

  event.recipes.summoningrituals.altar('kubejs:iridium_sword')
    .itemOutput('kubejs:crimson_moons_semblance')
    .input([
      '64x kubejs:bloodfire_bars',
      '4x create:brass_nugget',
      '64x create:cogwheel',
      '64x create:large_cogwheel',
      '64x kubejs:null_matter',
      'kubejs:blaze_cake_singularity'
    ])
    .dayTime('night')
    .recipeTime(250)
    .id('kubejs:altar/crimson_moons_semblance')

  if (Platform.isLoaded('lilwings')) {

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:brown_mushroom',
        'minecraft:mycelium'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:aponi_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/aponi_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:dandelion',
        'minecraft:milk_bucket'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:butter_gold_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/butter_gold_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:slime_ball',
        'minecraft:pink_dye'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:cloudy_puff_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/cloudy_puff_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        '4x minecraft:amethyst_shard'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:crystal_puff_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/crystal_puff_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:dripstone_block',
        'minecraft:clay',
        'minecraft:moss_block'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:grayling_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/grayling_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:cocoa_beans',
        'minecraft:beetroot'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:painted_panther_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/painted_panther_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:apple',
        Ingredient.of('#minecraft:leaves')
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:red_applefly_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/red_applefly_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:red_mushroom',
        'minecraft:mycelium'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:shroom_skipper_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/shroom_skipper_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:wheat_seeds',
        'minecraft:pumpkin_seeds',
        'minecraft:melon_seeds',
        'minecraft:beetroot_seeds',
        'minecraft:string'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:swallow_tail_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/swallow_tail_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:glow_ink_sac',
        'minecraft:lily_pad'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:swamp_hopper_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/swamp_hopper_butterfly')

    event.recipes.summoningrituals.altar('lilwings:paper_wings')
      .input([
        'minecraft:snowball',
        'minecraft:ice'
      ])
      .mobOutput(
        SummoningOutput.mob('lilwings:white_fox_butterfly')
          .count(3)
          .offset(0, 3, 0)
          .spread(3, 0, 3)
      )
      .recipeTime(25)
      .id('kubejs:altar/white_fox_butterfly')

  }
})

/*
    // original recipe
    event.recipes.create.mechanical_crafting('summoningrituals:altar', [
        'CSC',
        'GAG',
        'LLL',
        ' O ',
        'PPP'
    ], {
        A: '#minecraft:wool_carpets',
        C: '#minecraft:candles',
        S: 'minecraft:wither_skeleton_skull',
        L: '#minecraft:wooden_slabs',
        O: '#minecraft:logs',
        P: '#minecraft:planks',
        G: '#forge:plates/gold'
    }).id('finality:mechanical_crafting/summoning_altar')

    Example below.

    event.recipes.summoningrituals.altar('minecraft:stick') // replace stick catalyst with something later.
        .itemOutput()
        .mobOutput()
        .itemOutput(
            SummoningOutput.item(Item.of('stone_sword', 2, { Damage: 5 }))
                .offset(5, 2, 3)
                .spread(3, 0, 3)
        )
        .mobOutput(
            SummoningOutput.mob('blaze')
                .count(3)
                .offset(5, 2, 3)
                .spread(3, 0, 3)
                // gives all three blazes 50 health
                .data({ Health: 50, Attributes: [{ Name: 'generic.max_health', Base: 50 }] })
        )
        .input('64x minecraft:stone')
        .input(Item.of('stone_sword', 2, { Damage: 5 }).strongNBT())
        .input(Item.of('amethyst_shard', 10))
        .input(Ingredient.of('#forge:glass'))
        .input('stone', '2x apple', 'thermal:blizz_powder')
        // adds 3 Pigs as sacrifice
        .sacrifice('pig', 3)
        // adds a single Sheep as sacrifice
        .sacrifice('sheep')
        // adds a single Blizz from Thermal as sacrifice
        .sacrifice('thermal:blizz')
*/