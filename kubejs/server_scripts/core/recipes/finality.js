// requires: finality
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for the Finality mod.
 */

ServerEvents.recipes(event => {
  event.recipes.create.sandpaper_polishing(
    'minecraft:nether_wart',
    'finality:living_nether_wart' // correct later to 'finality:living_nether_wart'
  ).id('finality:sandpaper_polising/nether_wart')
  event.recipes.create.haunting(
    'finality:living_nether_wart_spores', // correct later to 'finality:living_nether_wart_spores'
    'minecraft:nether_wart'
  ).id('finality:haunting/living_nether_wart')
  if (Platform.isLoaded('bhc')) {
    event.recipes.kubejs.shapeless('bhc:red_heart_canister', [
      'bhc:red_heart',
      'finality:living_nether_wart',
      'minecraft:echo_shard',
      'bhc:canister'
    ]).id('finality:bhc/crafting/red_heart_canister')
  }
})

LootJS.modifiers(event => {
  // note to sleepy self: REDUCE SPORE DROP RATE
  event.addBlockLootModifier('finality:living_nether_wart_crop')
    .removeLoot('finality:living_nether_wart_spores')
    .addLoot('finality:living_nether_wart_spores').randomChance(0.07)
})