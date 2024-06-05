/**
 * @file Server handler for Sophisticated Storage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// requires: sophisticatedstorage
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
})