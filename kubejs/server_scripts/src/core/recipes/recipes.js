/**
 * @file Handler for core recipes.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Helped a lot early on in development. Thank you. Also helped translate my ideas into scripts!
 * @author pietro-lopes <https://github.com/pietro-lopes> AKA Uncandango in the KubeJS Discord. Fixed issues related to damage cancel script
 * @author MundM2007 <https://github.com/MundM2007> for helping with troubleshooting with fixing || statements
 * @author puu7693 <https://github.com/puu7693> for writing the script that grants potion effects when wearing a specific set of armor
 * @author MaxNeedsSnacks <https://github.com/MaxNeedsSnacks> Fixing KubeJS Create bugs
 */

// priority: 100
// requires: fusion
// requires: kubejs_create
// requires: farmersdelight
// requires: salt
// requires: supplementaries

const WOOD_TYPES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped', 'cherry']
const STANDARD_ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
const STANDARD_TOOLS_ALL = ['pickaxe', 'axe', 'hoe', 'shovel', 'sword']
let STONEPLATES = ['stone', 'polished_blackstone']
let FOUNDATION_NONMETAL = ['coal', 'redstone', 'quartz', 'diamond', 'emerald', 'lapis_lazuli']
let CURSEDRECIPES = [
  'iron_ingot_from_smelting_iron_ore',
  'iron_ingot_from_blasting_iron_ore',
  'iron_ingot_from_smelting_deepslate_iron_ore',
  'iron_ingot_from_blasting_deepslate_iron_ore',
  'copper_ingot_from_smelting_copper_ore',
  'copper_ingot_from_blasting_copper_ore',
  'copper_ingot_from_smelting_deepslate_copper_ore',
  'copper_ingot_from_blasting_deepslate_copper_ore',
  'gold_ingot_from_smelting_gold_ore',
  'gold_ingot_from_blasting_gold_ore',
  'gold_ingot_from_smelting_deepslate_gold_ore',
  'gold_ingot_from_blasting_deepslate_gold_ore',
]
const COLOR = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'lime',
  'pink',
  'purple',
  'light_gray',
  'gray',
  'cyan',
  'brown',
  'green',
  'blue',
  'red',
  'black',
  'yellow'
]

let template_duplication = [
  'netherite_upgrade_smithing_template',
  'sentry_armor_trim_smithing_template',
  'vex_armor_trim_smithing_template',
  'wild_armor_trim_smithing_template',
  'coast_armor_trim_smithing_template',
  'dune_armor_trim_smithing_template',
  'wayfinder_armor_trim_smithing_template',
  'raiser_armor_trim_smithing_template',
  'shaper_armor_trim_smithing_template',
  'host_armor_trim_smithing_template',
  'ward_armor_trim_smithing_template',
  'silence_armor_trim_smithing_template',
  'tide_armor_trim_smithing_template',
  'snout_armor_trim_smithing_template',
  'rib_armor_trim_smithing_template',
  'eye_armor_trim_smithing_template',
  'spire_armor_trim_smithing_template'
]
let item_duplication = {
  blue_ice: 'minecraft:blue_ice',
  asurine: 'create:asurine',
  crimsite: 'create:crimsite',
  ochrum: 'create:ochrum',
  veridium: 'create:veridium',
  iridium_upgrade_smithing_template: 'kubejs:iridium_upgrade_smithing_template'
}
let sherd_duplication = [
  'angler',
  'archer',
  'arms_up',
  'blade',
  'brewer',
  'burn',
  'danger',
  'explorer',
  'friend',
  'heart',
  'heartbreak',
  'howl',
  'miner',
  'mourner',
  'plenty',
  'prize',
  'sheaf',
  'shelter',
  'skull',
  'snort'
]

let iridium_blocks = [
  'iridium_block_connecting',
  'ornate_iridium_block_connecting',
  'ornate_iridium_pillar_connecting',
  'iridium_quartz_block_connecting',
  'iridium_tiles',
  'iridium_tiles_connecting'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < FOUNDATION_NONMETAL.length; i++) {
    // why can you even smelt and blast these ores? YOU LITERALLY LOSE SO MUCH!
    let insert = FOUNDATION_NONMETAL[i];
    event.remove([
      {
        type: 'minecraft:smelting',
        output: `minecraft:${insert}`
      },
      {
        type: 'minecraft:blasting',
        output: `minecraft:${insert}`
      }
    ])
  }
  for (let i = 0; i < CURSEDRECIPES.length; i++) {
    // removing cursed recipes pt2
    let insert = CURSEDRECIPES[i];
    event.remove({ id: `minecraft:${insert}` })
  }
  for (let i = 0; i < STONEPLATES.length; i++) {
    let stone = STONEPLATES[i];
    event.recipes.create.cutting([
      `minecraft:${stone}_pressure_plate`,
      `minecraft:${stone}_slab`
    ], `${stone}`).processingTime(50).id(`finality:${stone}_pressure_plate`)
  }
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let wood = WOOD_TYPES[i];
    event.recipes.create.cutting([
      `minecraft:${wood}_pressure_plate`,
      `minecraft:${wood}_slab`
    ], `${wood}_planks`).processingTime(50).id(`finality:${wood}_pressure_plate`)
  }
  event.shaped('minecraft:light_weighted_pressure_plate', [
    'G',
    'R'
  ], {
    G: 'create:golden_sheet',
    R: 'minecraft:redstone'
  }).id('minecraft:light_weighted_pressure_plate')
  event.shaped('minecraft:heavy_weighted_pressure_plate', [
    'G',
    'R'
  ], {
    G: 'create:iron_sheet',
    R: 'minecraft:redstone'
  }).id('minecraft:heavy_weighted_pressure_plate')
  // denied
  let vanilla_recipes = [
    'minecraft:netherite_ingot',
    'minecraft:clock',
    'minecraft:compass',
    'minecraft:piston',
    'minecraft:hopper',
    'minecraft:beacon',
    'minecraft:bucket'
  ]
  for (let i = 0; i < vanilla_recipes.length; i++) {
    let recipeIds = vanilla_recipes[i];
    event.remove({ id: recipeIds })
  }
  event.shaped('minecraft:beacon', [
    'GGG',
    'GNG',
    'OOO'
  ], {
    G: '#forge:glass/colorless',
    N: 'minecraft:end_crystal',
    O: 'minecraft:obsidian'
  }).id('finality:beacon')
  event.shaped('minecraft:bucket', [
    'I I',
    ' I '
  ], {
    I: 'create:iron_sheet'
  }).id('finality:bucket')
  event.shaped('minecraft:clock', [
    ' G ',
    'GMG',
    ' G '
  ], {
    G: 'create:golden_sheet',
    M: 'create:precision_mechanism'
  }).id('finality:clock')
  event.shaped('minecraft:compass', [
    ' I ',
    'IRI',
    ' I '
  ], {
    I: 'create:iron_sheet',
    R: 'minecraft:redstone'
  }).id('finality:compass')
  event.shaped('minecraft:piston', [
    'WWW',
    'CEC',
    'CRC'
  ], {
    W: '#minecraft:planks',
    C: 'minecraft:cobblestone',
    E: 'create:piston_extension_pole',
    R: 'minecraft:redstone'
  }).id('finality:piston')
  event.shaped('minecraft:hopper', [
    'H',
    'C'
  ], {
    H: 'create:chute',
    C: '#forge:chests/wooden'
  }).id('finality:hopper')
  event.shaped('6x minecraft:rail', [
    'I I',
    'ISI',
    'I I'
  ], {
    I: '#forge:ingots/iron',
    S: '#forge:rods/wooden'
  }).id('minecraft:rail')
  event.shaped('minecraft:trident', [
    'PPP',
    ' A ',
    ' A '
  ], {
    P: 'kubejs:trident_prong',
    A: 'kubejs:trident_pole'
  }).id('finality:trident')
  event.shaped('kubejs:trident_pole', [
    'S',
    'S'
  ], {
    S: 'minecraft:prismarine_shard'
  }).id('finality:trident_pole')
  event.shapeless('kubejs:trident_prong', [
    'minecraft:pointed_dripstone',
    'minecraft:prismarine_crystals'
  ]).id('finality:trident_prong')
  event.shaped('minecraft:saddle', [
    'LLL',
    'LSL'
  ], {
    L: 'minecraft:leather',
    S: 'minecraft:string'
  }).id('finality:saddle')
  event.shaped('minecraft:iron_horse_armor', [
    'I I',
    'III',
    'I I'
  ], {
    I: 'minecraft:iron_ingot'
  }).id('finality:iron_horse_armor')
  event.shaped('minecraft:golden_horse_armor', [
    'G G',
    'GGG',
    'G G'
  ], {
    G: 'minecraft:gold_ingot'
  }).id('finality:golden_horse_armor')
  event.shaped('minecraft:diamond_horse_armor', [
    'D D',
    'DDD',
    'D D'
  ], {
    D: 'minecraft:diamond'
  }).id('finality:diamond_horse_armor')
  event.shaped('minecraft:grindstone', [
    'SLS',
    'P P'
  ], {
    S: '#forge:rods/wooden',
    L: '#kubejs:slabs/stone',
    P: '#minecraft:planks'
  }).id('minecraft:grindstone')
  event.shapeless('2x minecraft:diorite', [
    'minecraft:cobblestone',
    '#forge:gems/quartz',
    '#forge:gems/quartz',
    'minecraft:cobblestone'
  ]).id('finality:crafting/shapeless_diorite')
  event.shapeless(
    '4x minecraft:quartz',
    '#forge:storage_blocks/quartz'
  ).id('finality:quartz_block_revert')
  event.shapeless(
    '4x minecraft:amethyst_shard',
    '#forge:storage_blocks/amethyst'
  ).id('finality:amethyst_block_revert')
  event.shapeless(
    '4x minecraft:pointed_dripstone',
    'minecraft:dripstone_block'
  ).id('finality:pointed_dripstone_from_block')
  event.shaped('create:brown_toolbox', [
    ' W ',
    'SBS',
    ' L '
  ], {
    W: 'create:cogwheel',
    S: 'create:golden_sheet',
    B: 'minecraft:barrel',
    L: '#forge:leather'
  }).id('finality:crafting/toolbox_from_barrel')
  event.shaped('minecraft:bell', [
    'B',
    'T'
  ], {
    B: '#forge:storage_blocks/gold',
    T: '#forge:plates/gold'
  }).id('minecraft:bell')
  event.recipes.minecraft.crafting_shapeless('minecraft:end_crystal', [
    '4x #forge:glass/colorless',
    'minecraft:nether_star',
    'minecraft:ghast_tear',
    'minecraft:fermented_spider_eye'
  ]).id('minecraft:end_crystal')
  event.recipes.minecraft.crafting_shapeless('minecraft:end_crystal', [
    '4x #forge:glass/colorless',
    'kubejs:awakened_singularity_core',
    'minecraft:respawn_anchor',
    'create:experience_nugget'
  ]).id('finality:end_crystal_from_respawn_anchor')
  event.shaped('kubejs:deconstructor', [
    'DSS'
  ], {
    D: 'minecraft:crying_obsidian',
    S: 'create:shaft'
  }).id('finality:deconstructor')
  event.recipes.create.mechanical_crafting('kubejs:duplicator', [
    'NC',
    'SN'
  ], {
    C: 'create:clipboard',
    S: 'create:sturdy_sheet',
    N: '#forge:nuggets/netherite'
  }).id('finality:mechanical_crafting/duplicator')
  /**
   * QoL
   */
  event.recipes.minecraft.smelting('create:zinc_block', 'create:raw_zinc_block')
    .cookingTime(1000).xp(6.3)
    .id('finality:smelting/zinc_block_from_raw_zinc_block')
  event.recipes.minecraft.blasting('create:zinc_block', 'create:raw_zinc_block')
    .cookingTime(900).xp(6.3)
    .id('finality:blasting/zinc_block_from_raw_zinc_block')
  for (let i = 0; i < template_duplication.length; i++) {
    let element = template_duplication[i];
    event.remove({ id: 'minecraft:' + element })
    event.recipes.create.deploying('2x minecraft:' + element, [
      'minecraft:' + element,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_duplication')
  }
  for (let [recipeId, itemId] of Object.entries(item_duplication)) {
    event.recipes.create.deploying(Item.of(itemId, 2), [
      itemId,
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + recipeId + '_duplication')
  }
  for (let i = 0; i < sherd_duplication.length; i++) {
    let element = sherd_duplication[i];
    event.recipes.create.deploying([
      '2x minecraft:' + element + '_pottery_sherd'
    ], [
      'minecraft:' + element + '_pottery_sherd',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/' + element + '_pottery_sherd_duplication')
  }
  event.recipes.minecraft.crafting_shaped('minecraft:ender_pearl', [
    'TTT',
    'TNT',
    'TTT'
  ], {
    T: 'minecraft:tinted_glass',
    N: 'kubejs:null_matter'
  }).id('finality:ender_pearl_from_null_matter')
  /**
   * BLASTING
   * 
   * Notice: Blasting recipes are automatically added by Create!
   */
  event.recipes.minecraft.blasting('minecraft:skeleton_skull', 'minecraft:zombie_head').id('finality:blasting/zombie_head_flesh_burning')
  /**
   * CAMPFIRE COOKING / SMOKING
   * 
   * Notice: Smoking recipes are automatically added by Create!
   */
  /**
   * COMPACTING
   */
  event.recipes.create.compacting([
    'minecraft:sponge',
    Fluid.of('minecraft:water', 1000)
  ], 'minecraft:wet_sponge').id('finality:compacting/sponge_squeezing')
  event.recipes.create.compacting('minecraft:basalt', [
    'minecraft:blue_ice',
    Fluid.of('minecraft:lava', 500)
  ]).id('finality:compacting/basalt')
  event.recipes.create.compacting('minecraft:tuff', [
    '9x minecraft:gravel',
    Fluid.of('minecraft:lava', 250)
  ]).superheated().id('finality:compacting/renew_tuff')
  event.recipes.create.compacting('minecraft:tuff', [
    '9x minecraft:deepslate',
    Fluid.of('minecraft:lava', 250)
  ]).heated().id('finality:compacting/renew_deepslate_tuff')
  event.recipes.create.compacting('minecraft:calcite', [
    'minecraft:amethyst_shard',
    'minecraft:cobbled_deepslate',
    'minecraft:bone_meal'
  ]).heated().id('finality:compacting/renew_calcite')
  event.recipes.create.compacting('minecraft:ice', '9x minecraft:snow_block').id('finality:snow_compacting')
  /*
  Watch me question myself later after writing this recipe 
  for making Lapis Lazuli automatable with just Create...
  */
  event.recipes.create.compacting([
    'minecraft:lapis_lazuli',
    Item.of('minecraft:lapis_ore').withChance(0.12),
    Item.of('minecraft:deepslate_lapis_ore').withChance(0.06),
  ], [
    Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:awkward"}'),
    Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}'),
    ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:deepslate', 'minecraft:cobbled_deepslate'],
    ['minecraft:poisonous_potato', 'minecraft:gunpowder'],
    'salt:salt',
  ]).heated().id('finality:compacting/artificial_lapis_lazuli')
  event.recipes.create.compacting('minecraft:obsidian', [
    Fluid.water(1000),
    Fluid.lava(1000)
  ]).id('finality:compacting/cursed_obsidian')
  event.recipes.create.compacting('create:blaze_cake_base', [
    'farmersdelight:rice',
    'minecraft:sugar',
    'create:cinder_flour',
    'minecraft:potato'
  ]).id('finality:compacting/blaze_cake_base_from_rice')
  /**
   * CRUSHING
   */
  event.recipes.create.crushing([
    'minecraft:clay_ball',
    Item.of('minecraft:clay_ball', 2).withChance(0.25),
    Item.of('create:copper_nugget').withChance(0.12),
    Item.of('minecraft:iron_nugget').withChance(0.12),
    Item.of('create:experience_nugget').withChance(0.25)
  ], 'minecraft:dripstone_block').processingTime(250).id('finality:crushing/dripstone')
  event.recipes.create.crushing([
    Item.of('create:copper_nugget').withChance(0.05),
    Item.of('minecraft:gunpowder').withChance(0.10)
  ], 'minecraft:basalt').processingTime(250).id('finality:crushing/basalt')
  event.remove({ id: 'create:crushing/netherrack' })
  event.recipes.create.crushing([
    'create:cinder_flour',
    Item.of('create:cinder_flour').withChance(0.50),
    Item.of('minecraft:netherite_scrap').withChance(0.0002)
  ], 'minecraft:netherrack').processingTime(250).id('finality:crushing/netherrack')
  event.recipes.create.crushing([
    '18x minecraft:gold_nugget',
    Item.of('create:experience_nugget').withChance(0.75)
  ], 'minecraft:gilded_blackstone').processingTime(400).id('create:crushing/gilded_blackstone')
  event.recipes.create.crushing([
    '2x minecraft:coal',
    Item.of('minecraft:coal').withChance(0.25),
    Item.of('create:experience_nugget').withChance(0.125)
  ], 'minecraft:deepslate_coal_ore').processingTime(300).id('create:crushing/deepslate_coal_ore')
  event.recipes.create.crushing([
    Item.of('kubejs:deepslate_shard', 9).withChance(0.75),
    Item.of('minecraft:gravel').withChance(0.12)
  ], 'minecraft:deepslate').processingTime(250).id('finality:crushing/deepslate_shard_from_deepslate')
  event.recipes.create.crushing([
    Item.of('kubejs:deepslate_shard', 9).withChance(0.25),
    Item.of('minecraft:gravel').withChance(0.24)
  ], 'minecraft:cobbled_deepslate').processingTime(250).id('finality:crushing/deepslate_shard_from_cobbled_deepslate')
  /**
   * FILLING
   */
  event.recipes.create.filling('minecraft:netherrack', [
    'minecraft:cobblestone',
    Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
  ]).id('finality:filling/living_flesh_stone')
  event.recipes.create.filling('minecraft:prismarine', [
    'minecraft:cobblestone',
    Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:water_breathing"}')
  ]).id('finality:filling/prismarine_from_cobblestone')
  event.recipes.create.filling('minecraft:netherite_ingot', [
    'minecraft:netherite_scrap',
    Fluid.of('kubejs:molten_gold', 90)
  ]).id('finality:filling/netherite_ingot_from_spout')
  event.recipes.create.filling('minecraft:gilded_blackstone', [
    'minecraft:blackstone',
    Fluid.of('kubejs:molten_gold', 180)
  ]).id('finality:filling/gilded_blackstone')
  /**
   * HAUNTING
   */
  event.recipes.create.haunting('minecraft:deepslate', 'minecraft:andesite').id('finality:haunting/andesite_to_deepslate')
  event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian').id('finality:haunting/obsidian')
  event.recipes.create.haunting('minecraft:name_tag', 'minecraft:writable_book').id('finality:haunting/soul_nametag')
  event.recipes.create.haunting('minecraft:phantom_membrane', 'minecraft:rotten_flesh').id('finality:haunting/rotten_flesh')
  event.recipes.create.haunting([
    Item.of('minecraft:echo_shard').withChance(0.02),
    Item.of('minecraft:disc_fragment_5').withChance(0.01)
  ], 'kubejs:deepslate_shard').id('finality:haunting/echo_shard')
  event.recipes.create.haunting(
    'minecraft:skeleton_skull',
    'minecraft:bone_block'
  ).id('finality:haunting/skeleton_skull_from_bone_block')
  event.recipes.create.haunting([
    'minecraft:wither_skeleton_skull',
    Item.of('minecraft:coal').withChance(0.25)
  ], 'minecraft:skeleton_skull').id('finality:haunting/wither_skeleton_skull')
  event.recipes.create.haunting([
    'kubejs:bloodfire_bars',
    Item.of('minecraft:blaze_powder').withChance(0.12)
  ], 'minecraft:iron_bars').id('finality:haunting/bloodfire_bars')
  /**
   * ITEM APPLICATION
   */
  event.recipes.create.item_application('minecraft:tinted_glass', [
    '#forge:glass/colorless', 'minecraft:amethyst_shard'
  ]).id('minecraft:tinted_glass')
  event.recipes.create.item_application('minecraft:chest_minecart', [
    '#forge:chests/wooden', 'minecraft:minecart'
  ]).id('finality:item_application/chest_minecart')
  event.recipes.create.item_application('minecraft:sculk_sensor', [
    'minecraft:warped_roots',
    'minecraft:echo_shard'
  ]).id('finality:item_application/sculk_sensor_conversion')
  /**
   * SPLASHING
   */
  event.recipes.create.splashing(
    'minecraft:piston',
    'minecraft:sticky_piston'
  ).id('finality:splashing/sticky_piston')
  event.recipes.create.splashing(
    'create:mechanical_piston',
    'create:sticky_mechanical_piston'
  ).id('finality:splashing/sticky_mechanical_piston')
  event.recipes.create.splashing([
    Item.of('minecraft:glowstone_dust').withChance(0.25),
    Item.of('minecraft:bone').withChance(0.12)
  ], 'minecraft:soul_soil').id('finality:splashing/soul_soil')
  event.recipes.create.splashing(
    '2x minecraft:blue_ice',
    'minecraft:blue_ice'
  ).id('kubejs:splashing/blue_ice_crystal_growth')
  /**
   * MILLING
   */
  event.recipes.create.milling(
    'minecraft:dirt',
    'minecraft:coarse_dirt'
  ).processingTime(120).id('finality:milling/dirt')
  /**
   * MIXING
   * 
   * Notice: Shapeless recipes are automatically added by Create, unless if .damageIngredient or .keepIngredient() are used.
   */
  event.recipes.create.mixing('2x create:brass_nugget', [
    'create:copper_nugget',
    'create:zinc_nugget'
  ]).heated().id('finality:mixing/brass_nugget_from_copper_and_zinc_nuggets')
  event.recipes.create.mixing('2x create:brass_block', [
    'minecraft:copper_block',
    'create:zinc_block'
  ]).heated().id('finality:mixing/brass_blocks_from_copper_and_zinc_blocks')
  event.recipes.create.mixing('minecraft:dirt', [
    'minecraft:gravel',
    '3x minecraft:bone_meal'
  ]).id('finality:dirt_from_gravel')
  event.recipes.create.mixing('minecraft:dirt', [
    'minecraft:gravel',
    '3x #kubejs:compost_eligible'
  ]).id('finality:mixing/dirt_compost')
  event.recipes.create.mixing('2x minecraft:coarse_dirt', [
    'minecraft:dirt',
    'minecraft:gravel'
  ]).id('finality:mixing/coarse_dirt')
  event.recipes.create.mixing('8x minecraft:netherrack', [
    '8x minecraft:cobblestone',
    Fluid.of('create:potion', 1000, '{Bottle:"REGULAR",Potion:"minecraft:strong_healing"}')
  ]).id('finality:mixing/bulk_netherrack_from_cobblestone')
  event.recipes.create.mixing('8x minecraft:prismarine', [
    '8x minecraft:cobblestone',
    Fluid.of('create:potion', 1000, '{Bottle:"REGULAR",Potion:"minecraft:water_breathing"}')
  ]).id('finality:mixing/bulk_prismarine_from_cobblestone')
  event.recipes.create.mixing('4x minecraft:netherite_ingot', [
    '4x minecraft:netherite_scrap',
    Fluid.of('kubejs:molten_gold', 360)
  ]).heated().id('finality:mixing/netherite_ingot_from_mixing')
  // Be3Al2(SiO3)6
  event.recipes.create.mixing('minecraft:emerald', [
    'minecraft:quartz',
    'minecraft:glass',
    '3x minecraft:iron_nugget'
  ]).superheated().id('finality:renew_emerald')
  event.recipes.create.mixing('minecraft:amethyst_shard', [
    'minecraft:quartz',
    'minecraft:glass',
    'minecraft:smooth_basalt',
    'minecraft:iron_nugget',
  ]).superheated().id('finality:renew_amethyst')
  // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
  event.recipes.create.mixing('minecraft:nether_gold_ore', [
    'create:cinder_flour',
    '18x minecraft:gold_nugget',
    Fluid.of('minecraft:lava', 180)
  ]).id('finality:nether_gold_ore_deco')
  event.recipes.create.mixing('minecraft:cobblestone', [
    Fluid.water(1000),
    Fluid.lava(1000)
  ]).id('finality:mixing/cobblestone')
  event.recipes.create.mixing('8x minecraft:glowstone_dust', [
    '8x create:cinder_flour',
    Fluid.of('create:potion', 200, '{Bottle:"REGULAR",Potion:"minecraft:night_vision"}')
  ]).id('finality:mixing/bulk_glowstone_from_cinder_flour')
  event.recipes.create.mixing('minecraft:end_stone', [
    'minecraft:echo_shard',
    'minecraft:ender_pearl',
    'minecraft:cobblestone',
    Fluid.of('kubejs:condensed_universal_entropy')
  ]).id('finality:mixing/end_stone')
  /**
   * PRESSING
   */
  event.recipes.create.pressing('kubejs:zinc_sheet', 'create:zinc_ingot').id('finality:pressing/zinc_ingot')
  event.recipes.create.pressing('kubejs:netherite_sheet', 'minecraft:netherite_ingot').id('finality:pressing/netherite_ingot')
  /**
   * >-----<
   */
  event.recipes.minecraft.crafting_shaped('2x create:rose_quartz', [
    'QQ',
    'QQ'
  ], {
    Q: 'create:rose_quartz_block'
  }).id('kubejs:rose_quartz_block_decompression')
  event.recipes.create.sequenced_assembly('minecraft:dripstone_block', 'minecraft:stone', [
    event.recipes.create.filling('kubejs:dripstone_transitional_stone', ['kubejs:dripstone_transitional_stone', Fluid.of('minecraft:water', 250)])
  ]).transitionalItem('kubejs:dripstone_transitional_stone').loops(16).id('kubejs:sequenced_assembly/dripstone_dripping')
  // NETHERITE
  event.shaped('minecraft:netherite_ingot', [
    'NNN',
    'NNN',
    'NNN'
  ], {
    N: 'kubejs:netherite_nugget'
  }).id('kubejs:netherite_ingot_from_nuggets')
  event.recipes.create.cutting(
    '2x kubejs:netherite_rod',
    'minecraft:netherite_ingot'
  ).id('kubejs:cutting/netherite_rod')
  // IRIDIUM
  event.recipes.create.mixing('kubejs:iridium_upgrade_smithing_template', [
    'minecraft:netherite_upgrade_smithing_template',
    'create:sturdy_sheet',
    'kubejs:deepslate_shard',
    'kubejs:iridium_nugget',
    Fluid.of('kubejs:condensed_universal_entropy', 250)
  ]).id('kubejs:mixing/iridium_upgrade_smithing_template')
  event.shaped('kubejs:raw_iridium_block', [
    'III',
    'III',
    'III'
  ], {
    I: 'kubejs:raw_iridium'
  }).id('finality:raw_iridium_block')
  event.shaped('kubejs:iridium_block', [
    'III',
    'III',
    'III'
  ], {
    I: 'kubejs:iridium_ingot'
  }).id('finality:iridium_block')
  event.shapeless('9x kubejs:iridium_ingot', [
    'kubejs:iridium_block'
  ]).id('finality:iridium_block_decompression')
  event.shaped('kubejs:iridium_ingot', [
    'III',
    'III',
    'III'
  ], {
    I: 'kubejs:iridium_nugget'
  }).id('finality:iridium_nugget_compression')
  event.shapeless('9x kubejs:iridium_nugget', [
    'kubejs:iridium_ingot'
  ]).id('finality:iridium_ingot_decompression')
  for (let i = 0; i < iridium_blocks.length; i++) {
    let blockId = iridium_blocks[i];
    event.recipes.minecraft.stonecutting(
      'kubejs:' + blockId,
      '#kubejs:iridium_blocks'
    ).id('kubejs:' + blockId)
  }
  event.recipes.minecraft.stonecutting(
    'kubejs:iridium_block',
    '#kubejs:iridium_blocks'
  ).id('finality:iridium_block_deconnecting')
  event.recipes.minecraft.smelting('kubejs:iridium_ingot', 'kubejs:raw_iridium')
    .cookingTime(200).xp(0.7)
    .id('finality:iridium_ingot_from_smelting_raw_iridium')
  event.recipes.minecraft.smelting('kubejs:iridium_block', 'kubejs:raw_iridium_block')
    .cookingTime(1000).xp(6.3)
    .id('finality:iridium_block_from_smelting_raw_iridium_block')
  event.recipes.minecraft.blasting('kubejs:iridium_ingot', 'kubejs:raw_iridium')
    .cookingTime(100).xp(0.7)
    .id('finality:iridium_ingot_from_blasting_raw_iridium')
  event.recipes.minecraft.blasting('kubejs:iridium_block', 'kubejs:raw_iridium_block')
    .cookingTime(900).xp(6.3)
    .id('finality:blasting/raw_iridium_block')
  event.recipes.create.crushing([
    '4x kubejs:crushed_raw_iridium',
    Item.of('kubejs:crushed_raw_iridium', 2).withChance(0.25),
    Item.of('create:experience_nugget').withChance(0.75),
    Item.of('minecraft:cobbled_deepslate').withChance(0.125)
  ], 'kubejs:deepslate_iridium_ore').processingTime(450).id('finality:crushing/deepslate_iridium_ore')
  event.recipes.create.crushing([
    '9x kubejs:crushed_raw_iridium',
    Item.of('create:experience_nugget', 9).withChance(0.75)
  ], 'kubejs:raw_iridium_block').processingTime(450).id('kubejs:crushing/raw_iridium_block')
  event.recipes.create.crushing([
    'kubejs:crushed_raw_iridium',
    Item.of('create:experience_nugget').withChance(0.75)
  ], 'kubejs:raw_iridium').processingTime(450).id('kubejs:crushing/raw_iridium')
  event.recipes.minecraft.smelting(
    'kubejs:iridium_ingot',
    'kubejs:crushed_raw_iridium'
  ).cookingTime(200).xp(0.1).id('finality:smelting/iridium_ingot_from_crushed')
  event.recipes.minecraft.blasting(
    'kubejs:iridium_ingot',
    'kubejs:crushed_raw_iridium'
  ).cookingTime(100).xp(0.1).id('finality:blasting/iridium_ingot_from_crushed')
  event.recipes.create.splashing([
    '9x kubejs:iridium_nugget',
    Item.of('minecraft:lapis_lazuli').withChance(0.75)
  ], 'kubejs:crushed_raw_iridium').id('finality:splashing/crushed_raw_iridium')
  event.recipes.create.pressing(
    'kubejs:iridium_sheet',
    'kubejs:iridium_ingot'
  ).id('finality:pressing/iridium_sheet')
  event.recipes.create.item_application('kubejs:iridium_casing', [
    'create:railway_casing',
    'kubejs:iridium_sheet'
  ]).id('finality:item_application/iridium_casing')
  event.recipes.create.cutting(
    '2x kubejs:iridium_rod',
    'kubejs:iridium_ingot'
  ).processingTime(200).id('finality:cutting/iridium_rod')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_sword',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_sword',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_sword_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_pickaxe',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_pickaxe',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_pickaxe_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_axe',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_axe',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_axe_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_shovel',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_shovel',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_shovel_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_hoe',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_hoe',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_hoe_smithing')
  if (Platform.isLoaded('paxeljs')) {
    event.shaped('kubejs:iridium_paxel', [
      'ABC',
      ' S ',
      ' S '
    ], {
      A: 'kubejs:iridium_axe',
      B: 'kubejs:iridium_shovel',
      C: 'kubejs:iridium_pickaxe',
      S: 'kubejs:iridium_rod'
    }).id('finality:crafting/iridium_paxel')
  }
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_helmet',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_helmet',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_helmet_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_chestplate',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_chestplate',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_chestplate_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_leggings',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_leggings',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_leggings_smithing')
  event.recipes.minecraft.smithing_transform(
    'kubejs:iridium_boots',
    'kubejs:iridium_upgrade_smithing_template',
    'minecraft:netherite_boots',
    'kubejs:iridium_ingot'
  ).id('kubejs:iridium_boots_smithing')
  event.recipes.create.mixing('kubejs:iridium_nugget', [
    'kubejs:netherite_nugget',
    'create:brass_nugget',
    Fluid.of('kubejs:condensed_universal_entropy', 10)
  ]).superheated().id('finality:mixing/iridium_nugget_from_netherite')
  event.recipes.create.mixing('kubejs:iridium_ingot', [
    'minecraft:netherite_ingot',
    'create:brass_ingot',
    Fluid.of('kubejs:condensed_universal_entropy', 90)
  ]).superheated().id('finality:mixing/iridium_ingot_from_netherite')
  // HIGH ENTROPY ALLOY / FINAL
  /*
  event.recipes.create.mixing('kubejs:unstable_entropy_particles', [
    'kubejs:errored_result',
    Fluid.of('kubejs:condensed_universal_entropy', 250)
  ]).id('finality:mixing/errored_result_recycling')
  */
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:stable_entropy_particles').withChance(0.75),
    Item.of('kubejs:unstable_entropy_particles').withChance(0.25)
  ], 'kubejs:unstable_entropy_particles', [
    event.recipes.create.filling('kubejs:stabilizing_entropy_particles', ['kubejs:stabilizing_entropy_particles', Fluid.of('kubejs:condensed_universal_order', 250)]),
    event.recipes.create.deploying('kubejs:stabilizing_entropy_particles', ['kubejs:stabilizing_entropy_particles', 'kubejs:null_matter']),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles')
  ]).transitionalItem('kubejs:stabilizing_entropy_particles').loops(4).id('finality:sequenced_assembly/stable_entropy_particles')
  event.shaped('kubejs:high_entropy_alloy_block', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: 'kubejs:high_entropy_alloy'
  }).id('finality:high_entropy_alloy_block_compression')
  event.shapeless('9x kubejs:high_entropy_alloy', [
    'kubejs:high_entropy_alloy_block'
  ]).id('finality:high_entropy_alloy_block_decompression')
  event.shaped('kubejs:high_entropy_alloy', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: 'kubejs:high_entropy_alloy_nugget'
  }).id('finality:high_entropy_alloy_nugget_compression')
  event.shapeless('9x kubejs:high_entropy_alloy_nugget', [
    'kubejs:high_entropy_alloy'
  ]).id('finality:high_entropy_alloy_decompression')
  event.recipes.minecraft.stonecutting(
    'kubejs:high_entropy_alloy_block_connecting',
    'kubejs:high_entropy_alloy_block'
  ).id('finality:high_entropy_alloy_block_connecting_conversion')
  event.recipes.minecraft.stonecutting(
    'kubejs:high_entropy_alloy_block',
    'kubejs:high_entropy_alloy_block_connecting'
  ).id('finality:high_entropy_alloy_block_deconnecting')
  event.recipes.create.pressing(
    'kubejs:high_entropy_alloy_sheet',
    'kubejs:high_entropy_alloy'
  ).id('finality:pressing/high_entropy_alloy_sheet')
  event.recipes.create.cutting(
    '2x kubejs:high_entropy_alloy_rod',
    'kubejs:high_entropy_alloy'
  ).processingTime(200).id('finality:cutting/high_entropy_alloy_rod')
  // FINAL ARMOR
  event.recipes.create.mechanical_crafting('kubejs:final_helmet', [
    '   EEE   ',
    ' EEEREEE ',
    'EEIEREIEE',
    'IEIEREIEI',
    'EEEEEEEEE'
  ], {
    E: 'kubejs:high_entropy_alloy_block',
    R: 'kubejs:repeating_command_block',
    I: 'kubejs:iridium_block'
  }).id('finality:mechanical_crafting/final_helmet')
  event.recipes.create.mechanical_crafting('kubejs:final_chestplate', [
    'EEE   EEE',
    'ECE   ECE',
    'EEE   EEE',
    'EEEEFEEEE',
    'EEEFMFEEE',
    'EEEEFEEEE',
    'EEEEEEEEE',
    'EEEEEEEEE',
    'EEEEEEEEE'
  ], {
    E: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity',
    M: 'kubejs:entropy_mechanism',
    C: 'kubejs:chain_command_block'
  }).id('finality:mechanical_crafting/final_chestplate')
  event.recipes.create.mechanical_crafting('kubejs:final_leggings', [
    'EEEEEEEEE',
    'EEEFFFEEE',
    'EEEEEEEEE',
    'EEE   EEE',
    'EEE   EEE',
    'EEE   EEE',
    'EEE   EEE',
    'EEE   EEE',
    'EEE   EEE'
  ], {
    E: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity'
  }).id('finality:mechanical_crafting/final_leggings')
  event.recipes.create.mechanical_crafting('kubejs:final_boots', [
    'EEE   EEE',
    'EEE   EEE',
    'EEE   EEE',
    'EFE   EFE',
    'EFE   EFE',
    'EEE   EEE'
  ], {
    E: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity'
  }).id('finality:mechanical_crafting/final_boots')
  // FINAL ITEMS & TOOLS
  event.recipes.create.mechanical_crafting('kubejs:final_sword', [
    '       BB',
    '      BBB',
    '     BBB ',
    '    BBB  ',
    ' E BBB   ',
    '  EBB    ',
    '  RE     ',
    ' R  E    ',
    'F        '
  ], {
    E: 'kubejs:high_entropy_alloy',
    B: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity_stage_nulla',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_sword')
  event.recipes.create.mechanical_crafting('kubejs:final_pickaxe', [
    '   BBB   ',
    ' EEBFBEE ',
    'EEEBBBEEE',
    'EE  R  EE',
    '    R    ',
    '    R    ',
    '    R    ',
    '    R    ',
    '    R    '
  ], {
    E: 'kubejs:high_entropy_alloy',
    B: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity_stage_nulla',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_pickaxe')
  event.recipes.create.mechanical_crafting('kubejs:final_axe', [
    'BBBBBBE',
    'BBBBFBB',
    'BBBBBBE',
    'BBB R  ',
    'B   R  ',
    '    R  ',
    '    R  ',
    '    R  ',
    '    R  '
  ], {
    E: 'kubejs:high_entropy_alloy',
    B: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity_stage_nulla',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_axe')
  event.recipes.create.mechanical_crafting('kubejs:final_shovel', [
    '      BBB',
    '     EBFB',
    '      BBB',
    '     R E ',
    '    R    ',
    '   R     ',
    '  R      ',
    'ER       ',
    'RE       '
  ], {
    E: 'kubejs:high_entropy_alloy',
    B: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity_stage_nulla',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_shovel')
  if (Platform.isLoaded('paxeljs')) {
    event.recipes.create.mechanical_crafting('kubejs:final_paxel', [
      'ABC',
      ' S ',
      ' S '
    ], {
      A: 'kubejs:final_axe',
      B: 'kubejs:final_shovel',
      C: 'kubejs:final_pickaxe',
      S: 'kubejs:high_entropy_alloy_rod'
    }).id('finality:mechanical_crafting/final_paxel')
  }
  event.recipes.create.mechanical_crafting('kubejs:final_hoe', [
    '    ERE',
    ' EEEBFB',
    'EEEEERE',
    'E    RE',
    '     R ',
    '     R ',
    '     R ',
    '     R ',
    '     R '
  ], {
    E: 'kubejs:high_entropy_alloy',
    B: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity_stage_nulla',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_hoe')
  event.recipes.create.mechanical_crafting('kubejs:final_scythe', [
    '    BBBBE',
    '  BBBBBFB',
    'BBBBBBRBB',
    '     RBBB',
    '    R    ',
    '   R     ',
    '  R      ',
    ' R       ',
    'R        '
  ], {
    E: 'kubejs:high_entropy_alloy',
    B: 'kubejs:high_entropy_alloy_block',
    F: 'kubejs:final_singularity_stage_nulla',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_scythe')
  event.recipes.create.mechanical_crafting('kubejs:crystal_lance', [
    'BAB',
    'BAB',
    'NNN',
    ' N ',
    ' N ',
    ' N ',
    ' N '
  ], {
    A: 'minecraft:amethyst_shard',
    B: 'minecraft:echo_shard',
    N: 'minecraft:netherite_ingot'
  }).id('finality:mechanical_crafting/crystal_lance')
  event.recipes.create.mechanical_crafting('kubejs:final_katana', [
    ' E ',
    ' E ',
    ' E ',
    ' E ',
    ' E ',
    ' E ',
    'SFS',
    'GGG',
    ' R '
  ], {
    E: 'kubejs:high_entropy_alloy',
    S: 'kubejs:high_entropy_alloy_sheet',
    F: 'kubejs:final_singularity_stage_nulla',
    G: 'minecraft:amethyst_shard',
    R: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_katana')
  event.recipes.create.mechanical_crafting('kubejs:final_lance', [
    '  E  ',
    ' EEE ',
    'IEFEI',
    'IIEII',
    '  I  ',
    '  I  ',
    '  I  ',
    '  I  ',
    '  I  '
  ], {
    E: 'kubejs:high_entropy_alloy',
    F: 'kubejs:final_singularity_stage_nulla',
    I: 'kubejs:high_entropy_alloy_rod'
  }).id('finality:mechanical_crafting/final_lance')

  // Cjbeards Music Discs
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_bad_deeds', [
    'minecraft:music_disc_5',
    'minecraft:iron_sword',
    'minecraft:red_dye',
    '3x minecraft:green_dye'
  ]).id('finality:music_disc_bad_deeds')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_bad_deeds_inst', [
    'minecraft:music_disc_5',
    'minecraft:iron_sword',
    'minecraft:red_dye',
    '3x minecraft:green_dye',
    '#minecraft:wool'
  ]).id('finality:music_disc_bad_deeds_inst')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_black_white_red', [
    '    B    ',
    '  BBBBB  ',
    'BBBBMBBBB',
    'BRRRBRRRB',
    'BBBBBBBBB',
    ' BRBBBRB ',
    ' BRRRRRB ',
    ' BBBBBBB '
  ], {
    M: 'minecraft:music_disc_5',
    B: 'minecraft:coal_block',
    R: 'minecraft:redstone_block'
  }).id('finality:music_disc_black_white_red')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_black_white_red_inst', [
    '    B    ',
    '  BBBBB  ',
    'BBBBMBBBB',
    'BRRRBRRRB',
    'BBBBBBBBB',
    ' BRBBBRB ',
    ' BRRRRRB ',
    ' BBBBBBB '
  ], {
    M: 'minecraft:music_disc_5',
    B: 'minecraft:black_wool',
    R: 'minecraft:red_wool'
  }).id('finality:music_disc_black_white_red_inst')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_boo_hoo', [
    'minecraft:music_disc_5',
    'minecraft:nether_wart',
    'minecraft:glass_bottle',
    'minecraft:flint_and_steel'
  ]).id('finality:music_disc_boo_hoo')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_from_the_shadows', [
    'minecraft:music_disc_5',
    'minecraft:crying_obsidian',
    'minecraft:iron_sword',
    'minecraft:shield'
  ]).id('finality:music_disc_from_the_shadows')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_get_away', [
    'minecraft:music_disc_5',
    'minecraft:end_crystal',
    '4x minecraft:bone'
  ]).id('finality:music_disc_get_away')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_get_away_inst', [
    'minecraft:music_disc_5',
    'minecraft:end_crystal',
    '4x minecraft:bone',
    '#minecraft:wool'
  ]).id('finality:music_disc_get_away_inst')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_heart_of_the_wicked', [
    ' W   W ',
    'W WWW W',
    'W  M  W',
    ' W   W ',
    '  W W  ',
    '   W   '
  ], {
    W: 'create:framed_glass',
    M: 'minecraft:music_disc_5'
  }).id('finality:heart_of_the_wicked')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_mirror_mirror', [
    ' WSW ',
    'WGRGW',
    'WRMGW',
    'WGGGW',
    ' WWW ',
    '  W  ',
    '  W  '
  ], {
    W: 'minecraft:white_dye',
    G: 'minecraft:tinted_glass',
    R: 'create:polished_rose_quartz',
    M: 'minecraft:music_disc_5',
    S: 'minecraft:white_concrete'
  }).id('finality:mirror_mirror')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_mirror_mirror_inst', [
    ' WSW ',
    'WGRGW',
    'WRMGW',
    'WGGGW',
    ' WWW ',
    '  W  ',
    '  W  '
  ], {
    W: 'minecraft:white_dye',
    G: 'minecraft:tinted_glass',
    R: 'create:polished_rose_quartz',
    M: 'minecraft:music_disc_5',
    S: '#minecraft:wool'
  }).id('finality:mirror_mirror_inst')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_open_up', [
    'S       ',
    'SS      ',
    'SSRRRRRE',
    'SSR  RRR',
    'SS      '
  ], {
    S: 'minecraft:stone',
    R: 'minecraft:rotten_flesh',
    E: 'minecraft:music_disc_5'
  }).id('finality:music_disc_open_up')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_open_up_inst', [
    'S       ',
    'SS    W ',
    'SSRRRRRE',
    'SSR  RRR',
    'SS      '
  ], {
    S: 'minecraft:stone',
    R: 'minecraft:rotten_flesh',
    E: 'minecraft:music_disc_5',
    W: '#minecraft:wool'
  }).id('finality:music_disc_open_up_inst')
  event.recipes.create.mechanical_crafting('kubejs:music_disc_silent_night', [
    '   C   ',
    '   M   ',
    ' R C R ',
    'RRRRRRR'
  ], {
    C: '#minecraft:candles',
    M: 'minecraft:music_disc_5',
    R: '#minecraft:wool_carpets'
  }).id('finality:music_disc_silent_night')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_worst_nightmare', [
    'minecraft:music_disc_5',
    '4x create:flywheel',
    'create:steam_engine'
  ]).id('finality:music_disc_worst_nightmare')
  event.recipes.minecraft.crafting_shapeless('kubejs:music_disc_worst_nightmare_inst', [
    'minecraft:music_disc_5',
    '4x create:flywheel',
    'create:steam_engine',
    '#minecraft:wool'
  ]).id('finality:music_disc_worst_nightmare_inst')
  // Farabi Hasan Music
  event.recipes.create.mechanical_crafting('kubejs:music_disc_arlecchino_battle_theme', [
    'A   A',
    ' A A ',
    '  X  ',
    ' A A ',
    'A   A'
  ], {
    A: 'minecraft:red_dye',
    X: 'minecraft:music_disc_5'
  }).id('finality:music_disc_arlecchino_battle_theme')
  event.recipes.create.mixing('kubejs:music_disc_columbina_battle_theme', [
    'minecraft:music_disc_5',
    'minecraft:ender_pearl',
    'minecraft:feather',
    'minecraft:soul_sand',
    'minecraft:magenta_dye',
    Fluid.of('kubejs:condensed_universal_entropy', 10)
  ]).id('finality:music_disc_columbina_battle_theme')
  event.recipes.create.mixing('kubejs:music_disc_pantalone_battle_theme', [
    'minecraft:music_disc_5',
    'kubejs:gold_coin',
    'minecraft:clock',
    'minecraft:chain'
  ]).id('finality:music_disc_pantalone_battle_theme')
  event.recipes.create.mixing('kubejs:music_disc_sandrone_battle_theme', [
    'minecraft:music_disc_5',
    'create:precision_mechanism',
    'create:mechanical_arm',
    'create:clockwork_bearing',
  ]).id('finality:music_disc_sandrone_battle_theme')
  event.recipes.create.mixing('kubejs:music_disc_pulcinella_battle_theme', [
    'minecraft:music_disc_5',
    'kubejs:netherite_rod',
    '4x minecraft:feather',
    '2x minecraft:yellow_dye'
  ]).id('finality:music_disc_pulcinella_battle_theme')
  // Shimmer Recipes
  event.recipes.create.mixing(Fluid.of('kubejs:shimmer', 1000), [
    'create:refined_radiance',
    Fluid.of('kubejs:condensed_universal_entropy', 500),
    Fluid.of('minecraft:water', 500)
  ]).id('finality:mixing/shimmer_fluid_creation')
  event.recipes.create.compacting([
    'create:cinder_flour',
    Item.of('create:cinder_flour').withChance(0.50),
    'minecraft:netherite_scrap',
    Item.of('minecraft:netherite_scrap').withChance(0.25)
  ], [
    Fluid.of('kubejs:shimmer', 750),
    'minecraft:netherrack',
  ]).id('kubejs:compacting/netherrack_shimmer_convert')
  event.recipes.create.compacting([
    '9x create:cinder_flour',
    Item.of('create:cinder_flour', 9).withChance(0.50),
    '9x minecraft:netherite_scrap',
    Item.of('minecraft:netherite_scrap', 9).withChance(0.25)
  ], [
    Fluid.of('kubejs:shimmer', 750),
    'kubejs:compressed_netherrack'
  ]).id('kubejs:compacting/compressed_netherrack_shimmer_convert')
  event.recipes.create.compacting([
    Item.of('minecraft:raw_gold', 9).withChance(0.25),
    Item.of('minecraft:raw_copper', 9).withChance(0.25),
    Item.of('create:raw_zinc', 9).withChance(0.25),
    Item.of('minecraft:raw_iron', 9).withChance(0.25)
  ], [
    'minecraft:tuff',
    Fluid.of('kubejs:shimmer')
  ]).id('finality:compacting/shimmer_tuff')
  event.recipes.create.compacting([
    Item.of('minecraft:raw_gold', 9).withChance(0.25),
    Item.of('minecraft:raw_copper', 9).withChance(0.25),
    Item.of('create:raw_zinc', 9).withChance(0.25),
    Item.of('minecraft:raw_iron', 9).withChance(0.25)
  ], [
    '#create:stone_types/tuff',
    Fluid.of('kubejs:shimmer')
  ]).id('finality:compacting/shimmer_tuff_recycling')
  event.recipes.create.filling('minecraft:budding_amethyst', [
    'minecraft:amethyst_block',
    Fluid.of('kubejs:condensed_universal_order', 250)
  ]).id('finality:filling/budding_amethyst')
  // Mushroom Stew
  event.recipes.create.filling('minecraft:mushroom_stew', [
    'minecraft:bowl',
    Fluid.of('kubejs:mushroom_stew', 250)
  ]).id('finality:filling/mushroom_stew')
  event.recipes.create.mixing(Fluid.of('kubejs:mushroom_stew', 250), [
    'minecraft:brown_mushroom',
    'minecraft:red_mushroom',
    Fluid.of('minecraft:water', 250)
  ]).heated().id('finality:mixing/mushroom_stew')
  // Golden Apple
  event.recipes.create.filling('minecraft:golden_apple', [
    'minecraft:apple',
    Fluid.of('kubejs:molten_gold', 720)
  ]).id('finality:filling/golden_apple')
  event.shapeless('9x kubejs:netherite_nugget', 'minecraft:netherite_ingot').id('finality:netherite_nugget')
  // chorus fruit in overworld
  event.recipes.create.filling('minecraft:chorus_fruit', [
    'minecraft:beetroot',
    Fluid.of('kubejs:condensed_universal_entropy', 250)
  ]).id('finality:filling/beetroot_to_chorus_fruit')
  event.recipes.create.mixing('4x minecraft:chorus_fruit', [
    '4x minecraft:beetroot',
    Fluid.of('kubejs:condensed_universal_entropy')
  ]).id('finality:mixing/bulk_beetroot_to_chorus_fruit')
  event.recipes.create.mechanical_crafting('minecraft:spawner', [
    'VVV',
    'VSV',
    'VVV'
  ], {
    V: 'minecraft:structure_void',
    S: 'minecraft:soul_campfire'
  }).id('finality:mechanical_crafting/spawner')
  event.shapeless('minecraft:dragon_breath', [
    'minecraft:dragon_egg',
    'minecraft:glass_bottle'
  ]).keepIngredient('minecraft:dragon_egg').id('finality:dragon_breath')
  event.recipes.create.emptying([
    Fluid.of('kubejs:dragon_breath'),
    'minecraft:dragon_egg'
  ], 'minecraft:dragon_egg').id('kubejs:emptying/dragon_egg')
  event.recipes.create.filling('minecraft:dragon_breath', [
    'minecraft:glass_bottle',
    Fluid.of('kubejs:dragon_breath', 250)
  ]).id('kubejs:filling/dragon_breath_bottle')
  event.shapeless('create:mechanical_piston', [
    'supplementaries:soap', 'create:sticky_mechanical_piston'
  ]).id('finality:mechanical_piston_soap_washing')
  event.shaped('minecraft:nautilus_shell', [
    'PFP',
    'FPF',
    'PFP'
  ], {
    P: 'minecraft:prismarine_shard',
    F: 'minecraft:cod'
  }).id('finality:nautilus_shell')
  event.shaped('minecraft:heart_of_the_sea', [
    'IDP',
    'DND',
    'PDI'
  ], {
    P: 'minecraft:prismarine_shard',
    D: 'minecraft:diamond',
    I: 'minecraft:ink_sac',
    N: 'minecraft:nautilus_shell'
  }).id('finality:heart_of_the_sea')
  event.recipes.create.sequenced_assembly('minecraft:enchanted_golden_apple', 'minecraft:golden_apple', [
    event.recipes.create.deploying('kubejs:incomplete_enchanted_golden_apple', ['kubejs:incomplete_enchanted_golden_apple', 'create:experience_block'])
  ]).transitionalItem('kubejs:incomplete_enchanted_golden_apple').loops(5).id('finality:sequenced_assembly/enchanted_golden_apple')
  event.recipes.minecraft.crafting_shaped('minecraft:zombie_head', [
    'RRR',
    'RSR',
    'RRR'
  ], {
    R: 'minecraft:rotten_flesh',
    S: 'minecraft:skeleton_skull'
  }).id('finality:rotten_flesh_on_skeleton_skull')
  /**
   * Supplementaries 
   */
  event.shaped('supplementaries:quiver', [
    'RRL',
    'RLL',
    'LL '
  ], {
    R: '#forge:rope',
    L: '#forge:leather'
  }).id('finality:supplementaries_quiver')
  event.recipes.create.mixing('6x supplementaries:soap', [
    '4x supplementaries:ash',
    'minecraft:porkchop',
    Fluid.of('minecraft:water')
  ]).id('kubejs:mixing/supplementaries/soap')
  event.recipes.create.filling('supplementaries:bomb_blue', [
    'supplementaries:bomb',
    Fluid.of('kubejs:condensed_universal_entropy', 25)
  ]).id('finality:supplementaries/filling/bomb_blue')
  event.recipes.create.mixing('4x supplementaries:bomb_blue', [
    '4x supplementaries:bomb',
    Fluid.of('kubejs:condensed_universal_entropy', 100)
  ]).id('finality:supplementaries/mixing/bulk_bomb_blue')
  /**
   * 
   * @param {OutputItem[]} outputs 
   * @param {Internal.ItemStack} input 
   * @param {string} transitional 
   * @param {string} recipeId 
   */
  /*
  let coinCreation = (outputs, input, transitional, recipeId) => {
      event.recipes.create.sequenced_assembly([outputs], input, [
          event.recipes.create.deploying(transitional, [transitional, 'minecraft:emerald_block']),
          event.recipes.create.deploying(transitional, [transitional, 'create:experience_nugget'])
      ]).transitionalItem(transitional).loops(9).id(`finality:sequenced_assembly/${recipeId}`)
  }
  */
})