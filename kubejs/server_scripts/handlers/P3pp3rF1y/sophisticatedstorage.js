/**
 * @file Server handler for Sophisticated Storage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// requires: sophisticatedstorage
// requires: alexscaves
// requires: kubejs_create
// ignored: true

// I apparently forgot I never commit this file sooo starting from scratch, again.

ServerEvents.recipes(event => {
  event.remove({ mod: 'sophisticatedstorage' })
  /**
   * TIER UPGRADES
   */
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:upgrade_base', [
    'PSP',
    'SPS',
    'PSP'
  ], {
    P: '#minecraft:wooden_slabs',
    S: 'create:iron_sheet'
  }).id('kubejs:sophisticatedstorage/upgrade_base')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:basic_tier_upgrade', [
    'sophisticatedstorage:upgrade_base',
    'create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/basic_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_copper_tier_upgrade', [
    'CCC',
    'CBC',
    'CCC'
  ], {
    C: 'create:copper_sheet',
    B: 'sophisticatedstorage:basic_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_copper_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_iron_tier_upgrade', [
    'III',
    'IBI',
    'III'
  ], {
    I: 'create:iron_sheet',
    B: 'sophisticatedstorage:basic_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_iron_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_gold_tier_upgrade', [
    'GGG',
    'GIG',
    'GGG'
  ], {
    G: 'create:golden_sheet',
    I: 'sophisticatedstorage:basic_to_iron_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_gold_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_diamond_tier_upgrade', [
    'DDD',
    'DGD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    G: 'sophisticatedstorage:basic_to_gold_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:basic_to_netherite_tier_upgrade', [
    'NNN',
    'NDN',
    'NNN'
  ], {
    N: 'kubejs:netherite_sheet',
    D: 'sophisticatedstorage:basic_to_diamond_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/basic_to_netherite_tier_upgrade')
  // Starting from copper tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_iron_tier_upgrade', [
    ' S ',
    'SBS',
    ' S '
  ], {
    S: 'create:iron_sheet',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/copper_to_iron_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_gold_tier_upgrade', [
    'GGG',
    'GCG',
    'GGG'
  ], {
    G: 'create:golden_sheet',
    I: 'sophisticatedstorage:copper_to_iron_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/copper_to_gold_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_diamond_tier_upgrade', [
    'DDD',
    'DCD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    C: 'sophisticatedstorage:copper_to_gold_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/copper_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:copper_to_netherite_tier_upgrade', [
    'NNN',
    'NCN',
    'NNN'
  ], {
    N: 'kubejs:netherite_sheet',
    C: 'sophisticatedstorage:copper_to_diamond_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/copper_to_netherite_tier_upgrade')
  // Starting from iron tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:iron_to_gold_tier_upgrade', [
    'GGG',
    'GBG',
    'GGG'
  ], {
    G: 'create:golden_sheet',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/iron_to_gold_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:iron_to_diamond_tier_upgrade', [
    'DDD',
    'DBD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    B: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/iron_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:iron_to_netherite_tier_upgrade', [
    'NNN',
    'NBN',
    'NNN'
  ], {
    N: 'kubejs:netherite_sheet',
    B: 'sophisticatedstorage:iron_to_diamond_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/iron_to_netherite_tier_upgrade')
  // Starting from gold tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:gold_to_diamond_tier_upgrade', [
    'DDD',
    'DBD',
    'DDD'
  ], {
    D: 'minecraft:diamond',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/gold_to_diamond_tier_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:gold_to_netherite_tier_upgrade', [
    'NNN',
    'NBN',
    'NNN'
  ], {
    N: 'kubejs:netherite_sheet',
    B: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'
  }).id('kubejs:sophisticatedstorage/gold_to_netherite_tier_upgrade')
  // Starting from diamond tier
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:diamond_to_netherite_tier_upgrade', [
    'NNN',
    'NBN',
    'NNN'
  ], {
    N: 'kubejs:netherite_sheet',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/diamond_to_netherite_tier_upgrade')
  /**
   * UPGRADE MODULES
   */
  // pickup
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:pickup_upgrade', [
    ' M ',
    'PBP',
    ' E '
  ], {
    M: 'create:mechanical_piston',
    P: '#minecraft:planks',
    B: 'sophisticatedstorage:upgrade_base',
    E: 'create:electron_tube'
  }).id('kubejs:sophisticatedstorage/pickup_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:advanced_pickup_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:brass_sheet',
    B: 'sophisticatedstorage:pickup_upgrade'
  }).id('kubejs:sophisticatedstorage/advanced_pickup_upgrade')
  // filter
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:filter_upgrade', [
    'sophisticatedstorage:upgrade_base',
    'create:filter',
    '4x create:electron_tube'
  ]).id('kubejs:sophisticatedstorage/filter_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedstorage:advanced_filter_upgrade', [
    'sophisticatedstorage:filter_upgrade',
    'create:attribute_filter'
  ]).id('kubejs:sophisticatedstorage/advanced_filter_upgrade')
  // magnet
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:magnet_upgrade', [
    'III',
    'IPI',
    'N S'
  ], {
    I: 'create:industrial_iron_block',
    P: 'sophisticatedstorage:pickup_upgrade',
    N: 'alexscaves:scarlet_neodymium_ingot',
    S: 'alexscaves:azure_neodymium_ingot'
  }).id('kubejs:sophisticatedstorage/magnet_upgrade')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:advanced_magnet_upgrade', [
    ' ERE ',
    'IBMBI',
    'I   I',
    'I   I',
    'N   S'
  ], {
    R: 'create:precision_mechanism',
    E: 'create:electron_tube',
    B: 'create:brass_block',
    M: 'sophisticatedstorage:magnet_upgrade',
    I: 'create:industrial_iron_block',
    N: 'alexscaves:block_of_scarlet_neodymium',
    S: 'alexscaves:block_of_azure_neodymium'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_magnet_upgrade')
  // feeding
  event.recipes.minecraft.crafting_shaped('sophisticatedstorage:feeding_upgrade', [
    ' C ',
    'ABM',
    ' D '
  ], {
    C: 'minecraft:golden_carrot',
    A: 'minecraft:golden_apple',
    B: 'sophisticatedstorage:upgrade_base',
    M: 'minecraft:glistering_melon',
    D: 'create:deployer'
  }).id('kubejs:sophisticatedstorage/feeding_upgrade')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:advanced_feeding_upgrade', [
    ' S ',
    'CBC',
    'RRR'
  ], {
    S: 'create:smart_chute',
    C: 'create:brass_casing',
    B: 'sophisticatedstorage:upgrade_base',
    R: 'create:mechanical_arm'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_feeding_upgrade')
  // compacting
  event.recipes.create.mechanical_crafting('sophisticatedstorage:compacting_upgrade', [
    'EPE',
    'PBP',
    'EPE'
  ], {
    E: 'create:electron_tube',
    P: 'create:mechanical_piston',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/compacting_upgrade')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:advanced_compacting_upgrade', [
    'NPN',
    'PBP',
    'NPN'
  ], {
    N: 'kubejs:null_matter',
    P: 'create:mechanical_piston',
    B: 'sophisticatedstorage:compacting_upgrade'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_compacting_upgrade')
  // void
  event.recipes.create.mechanical_crafting('sophisticatedstorage:void_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'kubejs:awakened_singularity_core',
    B: 'sophisticatedstorage:upgrade_base'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/void_upgrade')
  event.recipes.create.mechanical_crafting('sophisticatedstorage:advanced_void_upgrade', [
    'NAN',
    'ABA',
    'NAN'
  ], {
    N: 'kubejs:null_matter',
    A: 'kubejs:awakened_singularity_core',
    B: 'sophisticatedstorage:void_upgrade'
  }).id('kubejs:sophisticatedstorage/mechanical_crafting/advanced_void_upgrade')

  /**
   * STORAGE BLOCKS
   */
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let element = WOOD_TYPES[i]; // Item.of('sophisticatedstorage:copper_barrel', '{woodType:"acacia"}')
    event.recipes.minecraft.crafting_shaped(Item.of('sophisticatedstorage:copper_barrel', `{woodType:"${element}"}`), [
      'CCC',
      'CBC',
      'CCC'
    ], {
      C: 'create:copper_sheet',
      B: Item.of('sophisticatedstorage:barrel', `{woodType:"${element}"}`).weakNBT()
    }).id(`kubejs:sophisticatedstorage/${element}_copper_barrel`)
  }
})