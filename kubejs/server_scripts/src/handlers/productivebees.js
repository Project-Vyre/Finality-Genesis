/**
 * @file Productive Bees server handler.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: productivebees
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'productivebees:upgrades/base' },
    { id: 'productivebees:upgrades/comb_block' },
    { id: 'productivebees:upgrades/anti_teleport' },
    { id: 'productivebees:upgrades/simulator' },
    {
      mod: 'productivebees',
      output: 'minecraft:obsidian'
    }
  ])
  event.shaped('productivebees:upgrade_base', [
    'H',
    'P'
  ], {
    H: 'productivebees:honey_treat',
    P: 'create:placard'
  }).id('kubejs:productivebees/upgrade_base')
  // Other Upgrades
  event.shaped('productivebees:upgrade_comb_block', [
    'GWG',
    'WUW',
    'GWG'
  ], {
    G: 'productivebees:inactive_dragon_egg',
    W: 'productivebees:wax_block',
    U: 'productivebees:upgrade_productivity_4'
  }).id('kubejs:productivebees/upgrades/upgrade_comb_block')
  event.shaped('productivebees:upgrade_anti_teleport', [
    'HEH',
    'EUE',
    'HEH'
  ], {
    H: '#forge:storage_blocks/honeycombs',
    E: 'kubejs:ender_pearl_singularity',
    U: 'productivebees:upgrade_base'
  }).id('kubejs:productivebees/upgrades/upgrade_anti_teleport')
  event.shaped('productivebees:upgrade_simulator', [
    'HEH',
    'BUB',
    'HBH'
  ], {
    H: '#forge:storage_blocks/honeycombs',
    E: 'kubejs:chromatic_concrete_singularity',
    U: 'productivebees:upgrade_base',
    B: 'kubejs:blaze_cake_singularity'
  }).id('kubejs:productivebees/upgrades/upgrade_simulator')
  // combs
  event.recipes.create.mixing([
    Item.of('minecraft:raw_copper', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:copper"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_copper')
  event.recipes.create.mixing([
    Item.of('minecraft:raw_iron', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:iron"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_iron')
  event.recipes.create.mixing([
    Item.of('minecraft:redstone', 8).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:redstone"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_redstone')
  event.recipes.create.mixing([
    Item.of('minecraft:raw_gold', 4).withChance(0.40),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:gold"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_gold')
  event.recipes.create.mixing([
    Item.of('minecraft:diamond', 4).withChance(0.25),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:diamond"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_diamond')
  event.recipes.create.mixing([
    Item.of('minecraft:netherite_scrap', 4).withChance(0.25),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:netherite"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_netherite')
  event.recipes.create.mixing([
    Item.of('minecraft:snowball', 16).withChance(0.75),
    Item.of('minecraft:ice', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:frosty"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_frosty')

  event.recipes.create.mixing([
    Item.of('minecraft:ghast_tear', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], 'productivebees:comb_ghostly').heated().id('kubejs:productivebees/mixing/comb_ghostly')

  event.recipes.create.mixing(
    Fluid.of('minecraft:milk', 400),
    'productivebees:comb_milky'
  ).heated().id('kubejs:productivebees/mixing/comb_milky')

  event.recipes.create.mixing([
    Item.of('minecraft:gunpowder', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], 'productivebees:comb_powdery').heated().id('kubejs:productivebees/mixing/comb_powdery')

  event.recipes.create.mixing([
    Item.of('minecraft:bone_meal', 4).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:skeletal"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_skeletal')

  event.recipes.create.mixing([
    Item.of('minecraft:string', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:silky"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_silky')

  event.recipes.create.mixing([
    Item.of('minecraft:ender_pearl', 4).withChance(0.25),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:ender"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_ender')

  event.recipes.create.mixing([
    Item.of('create:rose_quartz', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:rose_quartz"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_rose_quartz')
  event.custom({
    "type": "productivebees:centrifuge",
    "ingredient": {
      "type": "forge:nbt",
      "item": "productivebees:configurable_honeycomb",
      "nbt": {
        "EntityTag": {
          "type": "productivebees:obsidian"
        }
      }
    },
    "outputs": [
      {
        "item": {
          "item": "minecraft:obsidian"
        },
        "chance": 40
      },
      {
        "item": {
          "tag": "forge:wax"
        }
      },
      {
        "fluid": {
          "fluid": "productivebees:honey"
        },
        "amount": 50
      }
    ],
    "conditions": [
      {
        "type": "forge:not",
        "value": {
          "type": "forge:tag_empty",
          "tag": "forge:dusts/obsidian"
        }
      }
    ]
  }).id('productivebees:centrifuge/honeycomb_obsidian_dust')
  event.recipes.create.mixing([
    Item.of('minecraft:obsidian', 4).withChance(0.40),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:obsidian"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_obsidian')
  event.recipes.create.mixing([
    '4x minecraft:glowstone_dust',
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:glowing"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_glowing')
  event.recipes.create.mixing([
    Item.of('minecraft:quartz', 12).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:crystalline"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_crystalline')
  event.recipes.create.mixing([
    Item.of('minecraft:lapis_lazuli', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:lapis"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_lapis')
  event.recipes.create.mixing([
    Item.of('create:brass_nugget', 24).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:brass"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_brass')
  event.recipes.create.mixing([
    Item.of('productivebees:wither_skull_chip', 4).withChance(0.30),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:withered"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_wither')
  event.recipes.create.mixing([
    Item.of('productivebees:draconic_dust', 4).withChance(0.30),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:draconic"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_draconic')

  if (Platform.isLoaded('reliquary')) {
    event.recipes.create.mixing(
      Fluid.of('reliquary:xp_juice_still', 400),
      Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:experience"}}').strongNBT()
    ).heated().id('kubejs:productivebees/mixing/comb_experience')
  }

  event.recipes.create.mixing([
    Item.of('minecraft:amethyst_shard', 4).withChance(0.30),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:amethyst"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_amethyst')

  event.recipes.create.mixing([
    Item.of('minecraft:blaze_powder', 4).withChance(0.30),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:blazing"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_blazing')
  if (Platform.isLoaded('ars_nouveau')) {
    event.recipes.create.mixing([
      Item.of('ars_nouveau:source_gem', 4).withChance(0.50),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:arcane"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_arcane')
  }
  event.recipes.create.mixing([
    Item.of('minecraft:slime_ball', 4).withChance(0.25),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:slimy"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_slimy')

  event.recipes.create.mixing([
    Item.of('minecraft:coal', 4).withChance(0.60),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:coal"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_coal')

  event.recipes.create.mixing([
    Item.of('minecraft:prismarine_shard', 4).withChance(0.25),
    Item.of('minecraft:prismarine_crystals', 4).withChance(0.125),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:prismarine"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_prismarine')
  event.recipes.create.mixing([
    Item.of('minecraft:echo_shard', 4).withChance(0.30),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:sculk"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_sculk')
  if (Platform.isLoaded('salt')) {
    event.recipes.create.mixing([
      '4x salt:salt',
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:salty"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_salty')
  }
  if (Platform.isLoaded('enigmaticlegacy')) {
    event.recipes.create.mixing([
      Item.of('enigmaticlegacy:etherium_ore', 4).withChance(0.75),
      Fluid.of('productivebees:honey', 100)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:etherium_ore"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_etherium_ore')
    event.recipes.create.mixing([
      Item.of('enigmaticlegacy:astral_dust', 4).withChance(0.125),
      Fluid.of('productivebees:honey', 100)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:astral"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_astral_dust')
  }
  event.recipes.create.mixing([
    Item.of('minecraft:crimson_fungus', 4).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:crimson"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_crimson')
  event.recipes.create.mixing([
    Item.of('minecraft:warped_fungus', 4).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:warped"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_warped')
  event.recipes.create.mixing([
    Item.of('minecraft:brown_mushroom', 4).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:brown_shroom"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_brown')
  event.recipes.create.mixing([
    Item.of('minecraft:red_mushroom', 4).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:red_shroom"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_red')

  if (Platform.isLoaded('create_enchantment_industry')) {
    event.recipes.create.mixing(
      Fluid.of('create_enchantment_industry:hyper_experience', 40),
      Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:hyper_experience"}}').strongNBT()
    ).heated().id('kubejs:productivebees/mixing/comb_hyper_experience')
  }
  if (Platform.isLoaded('alexscaves')) {
    event.recipes.create.mixing([
      Item.of('alexscaves:uranium', 4).withChance(0.25),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:radioactive"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_radioactive')
    event.recipes.create.mixing([
      '4x alexscaves:sulfur',
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:sulfur"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_sulfur')
  }
  event.recipes.create.mixing([
    Item.of('minecraft:emerald', 4).withChance(0.25),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:emerald"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_emerald')

  event.recipes.create.mixing([
    Item.of('create:raw_zinc', 4).withChance(0.50),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:zinc"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_zinc')
  event.recipes.create.mixing(
    Fluid.of('create:tea', 400),
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:tea"}}').strongNBT()
  ).heated().id('kubejs:productivebees/mixing/comb_tea')
  event.recipes.create.mixing(
    Fluid.of('create:chocolate', 400),
    Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:chocolate"}}').strongNBT()
  ).heated().id('kubejs:productivebees/mixing/comb_chocolate')
  event.recipes.create.mixing([
    Item.of('minecraft:rotten_flesh', 4).withChance(0.75),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:zombie"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_zombie')
  event.recipes.create.mixing([
    Item.of('minecraft:magma_cream', 4).withChance(0.30),
    Fluid.of('productivebees:honey', 200)
  ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:magmatic"}}').strongNBT())
    .heated()
    .id('kubejs:productivebees/mixing/comb_magmatic')
  if (Platform.isLoaded('ae2')) {
    event.recipes.create.mixing([
      Item.of('ae2:certus_quartz_dust', 4).withChance(0.50),
      Item.of('ae2:certus_quartz_crystal', 8).withChance(0.75),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:spacial"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_spatial')
    event.recipes.create.mixing([
      Item.of('ae2:fluix_crystal').withChance(0.25),
      'productivebees:wax',
      Fluid.of('productivebees:honey', 20)
    ], Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:fluix"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/honeycomb_fluix')
    event.recipes.create.mixing([
      Item.of('ae2:fluix_crystal', 4).withChance(0.25),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:fluix"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_fluix')
    event.recipes.create.mixing(
      Item.of('ae2:silicon', 4).withChance(0.50),
      Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:silicon"}}').strongNBT()
    ).heated().id('kubejs:productivebees/mixing/comb_silicon')
  }
  if (Platform.isLoaded('destroy')) {
    event.recipes.create.mixing([
      Item.of('destroy:raw_nickel', 4).withChance(0.50),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:nickel"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_nickel')
    event.recipes.create.mixing([
      Item.of('destroy:platinum_powder', 4).withChance(0.50),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:platinum"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_platinum')
  }
  if (Platform.isLoaded('tetra')) {
    event.recipes.create.mixing([
      Item.of('tetra:metal_scrap', 4).withChance(0.125),
      Fluid.of('productivebees:honey', 200)
    ], Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:scrapped"}}').strongNBT())
      .heated()
      .id('kubejs:productivebees/mixing/comb_scrapped')
  }
})