// requires: irons_spellbooks
// requires: apotheosis
// requires: create_enchantment_industry
// requires: kubejs_create

/**
 * @file Server handler for Iron's Spells and Spellbooks.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
let CORE_RARITIES = [
    'common',
    'uncommon',
    'rare',
    'epic',
    'mythic',
    'ancient'
]
*/

let IRONS_SPELLGEMS = [
  'blood',
  'cooldown',
  'cast_time',
  'ender',
  'evocation',
  'fire',
  'ice',
  'holy',
  'intelligent',
  'lightning',
  'spell_resist',
  'summoning'
]

ServerEvents.recipes(event => {
  for (let i = 0; i < IRONS_SPELLGEMS.length; i++) {
    event.recipes.create.milling([
      'apotheosis:gem_dust',
      Item.of('apotheosis:gem_dust').withChance(0.25)
    ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"common"}`).weakNBT()
    ).processingTime(150).id(`finality:irons_spellbooks_common_${IRONS_SPELLGEMS[i]}_gem_crushing`)
    event.recipes.create.milling([
      'apotheosis:gem_dust',
      Item.of('apotheosis:gem_dust', 2).withChance(0.25)
    ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"uncommon"}`).weakNBT()
    ).processingTime(150).id(`finality:irons_spellbooks_uncommon_${IRONS_SPELLGEMS[i]}_gem_crushing`)
    event.recipes.create.milling([
      '2x apotheosis:gem_dust',
      Item.of('apotheosis:gem_dust', 2).withChance(0.30)
    ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"rare"}`).weakNBT()
    ).processingTime(150).id(`finality:irons_spellbooks_rare_${IRONS_SPELLGEMS[i]}_gem_crushing`)
    event.recipes.create.milling([
      '2x apotheosis:gem_dust',
      Item.of('apotheosis:gem_dust', 3).withChance(0.40)
    ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"epic"}`).weakNBT()
    ).processingTime(150).id(`finality:irons_spellbooks_epic_${IRONS_SPELLGEMS[i]}_gem_crushing`)
    event.recipes.create.milling([
      '3x apotheosis:gem_dust',
      Item.of('apotheosis:gem_dust', 3).withChance(0.50)
    ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"mythic"}`).weakNBT()
    ).processingTime(150).id(`finality:irons_spellbooks_mythic_${IRONS_SPELLGEMS[i]}_gem_crushing`)
    event.recipes.create.milling([
      '4x apotheosis:gem_dust',
      Item.of('apotheosis:gem_dust', 6).withChance(0.55)
    ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"ancient"}`).weakNBT()
    ).processingTime(150).id(`finality:irons_spellbooks_ancient_${IRONS_SPELLGEMS[i]}_gem_crushing`)
    event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"ancient"}`).weakNBT(), [
      Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"mythic"}`).weakNBT(),
      'kubejs:command_block'
    ]).keepHeldItem().id(`finality:irons_spellbooks_ancient_${IRONS_SPELLGEMS[i]}_upgrade`)
  }
  // Material Renewal Recipes
  event.recipes.create.mixing('irons_spellbooks:arcane_essence', [
    'minecraft:glowstone_dust',
    'create:cinder_flour',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:irons_spellbooks/mixing/arcane_essence')
  event.recipes.create.mixing('irons_spellbooks:arcane_salvage', [
    'minecraft:netherite_scrap',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:irons_spellbooks/mixing/arcane_salvage')
  event.recipes.create.mixing('irons_spellbooks:cinder_essence', [
    '4x irons_spellbooks:arcane_essence',
    '2x minecraft:netherite_scrap'
  ]).superheated().id('finality:irons_spellbooks/mixing/cinder_essence')
  /**
   * Arcane Ink Gen
   */
  // Arcane Inks mixed from scratch
  event.recipes.create.mixing(Fluid.of('kubejs:common_arcane_ink'), [
    'irons_spellbooks:arcane_essence',
    Fluid.of('create_enchantment_industry:ink')
  ]).id('finality:irons_spellbooks/mixing/common_arcane_ink')
  event.recipes.create.mixing(Fluid.of('kubejs:uncommon_arcane_ink'), [
    '2x irons_spellbooks:arcane_essence',
    '#minecraft:leaves',
    Fluid.of('create_enchantment_industry:ink')
  ]).id('finality:irons_spellbooks/mixing/uncommon_arcane_ink')
  event.recipes.create.mixing(Fluid.of('kubejs:rare_arcane_ink'), [
    '6x irons_spellbooks:arcane_essence',
    '2x minecraft:glow_ink_sac',
    'minecraft:echo_shard',
    Fluid.of('create_enchantment_industry:ink')
  ]).id('finality:irons_spellbooks/mixing/rare_arcane_ink')
  event.recipes.create.mixing(Fluid.of('kubejs:epic_arcane_ink'), [
    '8x irons_spellbooks:arcane_essence',
    '4x minecraft:amethyst_shard',
    '2x minecraft:echo_shard',
    Fluid.of('create_enchantment_industry:ink')
  ]).heated().id('finality:irons_spellbooks/mixing/epic_arcane_ink')
  event.recipes.create.mixing(Fluid.of('kubejs:legendary_arcane_ink'), [
    '16x irons_spellbooks:arcane_essence',
    '8x minecraft:magma_cream',
    '8x minecraft:glowstone_dust',
    '4x minecraft:echo_shard',
    '4x minecraft:amethyst_shard',
    Fluid.of('create_enchantment_industry:ink')
  ]).superheated().id('finality:irons_spellbooks/mixing/legendary_arcane_ink')
  // Arcane Ink upgrading
  event.recipes.create.mixing(Fluid.of('kubejs:uncommon_arcane_ink'), [
    '2x irons_spellbooks:arcane_essence',
    '#minecraft:leaves',
    Fluid.of('kubejs:common_arcane_ink')
  ]).id('finality:irons_spellbooks/mixing/common_uncommon_ink_upgrading')
  event.recipes.create.mixing(Fluid.of('kubejs:rare_arcane_ink'), [
    '6x irons_spellbooks:arcane_essence',
    '2x minecraft:glow_ink_sac',
    'minecraft:echo_shard',
    Fluid.of('kubejs:uncommon_arcane_ink')
  ]).id('finality:irons_spellbooks/mixing/uncommon_to_rare_ink_upgrading')
  event.recipes.create.mixing(Fluid.of('kubejs:epic_arcane_ink'), [
    '8x irons_spellbooks:arcane_essence',
    '4x minecraft:amethyst_shard',
    '2x minecraft:echo_shard',
    Fluid.of('kubejs:rare_arcane_ink')
  ]).id('finality:irons_spellbooks/mixing/rare_to_epic_ink_upgrading')
  /**
   * 
   * @param {(Internal.OutputFluid_ | OutputItem_) []} output 
   * @param {Internal.ItemStack[]} input 
   * @param {string} inkId 
   */
  function arcaneInkSpout(output, input, inkId) {
    event.recipes.create.filling(output, input).id(`finality:irons_spellbooks/filling/${inkId}_arcane_ink`)
  }
  let arcaneInks = [
    'common',
    'uncommon',
    'rare',
    'epic',
    'legendary'
  ]
  for (let i = 0; i < arcaneInks.length; i++) {
    let tier = arcaneInks[i];
    arcaneInkSpout(`irons_spellbooks:${tier}_ink`, [
      'minecraft:glass_bottle',
      Fluid.of(`kubejs:${tier}_arcane_ink`)
    ], tier)
  }
  /*
      Item.of('irons_spellbooks:arcane_essence').withChance(0.75),
      Item.of('irons_spellbooks:cinder_essence').withChance(0.25)
  */
})

ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/deny', [
    'kubejs:common_arcane_ink',
    'kubejs:uncommon_arcane_ink',
    'kubejs:rare_arcane_ink',
    'kubejs:epic_arcane_ink',
    'kubejs:legendary_arcane_ink'
  ])
})

LootJS.modifiers(event => {
  event.addEntityLootModifier('minecraft:witch')
    .randomChance(0.1).addLoot('irons_spellbooks:common_ink')
    .randomChance(0.07).addLoot('irons_spellbooks:uncommon_ink')
    .randomChance(0.05).addLoot('irons_spellbooks:rare_ink')
    .randomChance(0.03).addLoot('irons_spellbooks:epic_ink')
    .randomChance(0.01).addLoot('irons_spellbooks:legendary_ink')
})