/**
 * @file Core LootJS script.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author LLytho <https://github.com/LLytho> AlmostReliable Team - Prevented the head bashing
 * @author Relentless <https://github.com/rlnt> AlmostReliable Team - Prevented the head bashing
 */

// requires: lootjs
// requires: create

let FOUNDATION_METALS = ['iron', 'gold']

LootJS.modifiers(event => {
  for (let i = 0; i < FOUNDATION_METALS.length; i++) {
    let metal = FOUNDATION_METALS[i];
    event.addBlockLootModifier(`minecraft:${metal}_ore`)
      .matchMainHand(
        ItemFilter.PICKAXE.and(
          ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
        )
      )
      .randomChance(0.2).addLoot(`minecraft:raw_${metal}`)
    event.addBlockLootModifier(`minecraft:deepslate_${metal}_ore`)
      .matchMainHand(
        ItemFilter.PICKAXE.and(
          ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
        )
      )
      .randomChance(0.3).addLoot(`minecraft:raw_${metal}`)
  }
  event.addBlockLootModifier('create:zinc_ore')
    .matchMainHand(
      ItemFilter.PICKAXE.and(
        ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
      )
    )
    .randomChance(0.2).addLoot('create:raw_zinc')
  event.addBlockLootModifier('create:deepslate_zinc_ore')
    .matchMainHand(
      ItemFilter.PICKAXE.and(
        ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
      )
    )
    .randomChance(0.3).addLoot('create:raw_zinc')
  event.addBlockLootModifier('kubejs:deepslate_iridium_ore')
    .matchMainHand(
      ItemFilter.PICKAXE.and(
        ItemFilter.hasEnchantment('minecraft:silk_touch').negate()
      )
    )
    .randomChance(0.3).addLoot('kubejs:raw_iridium')
  event.addBlockLootModifier('minecraft:spawner')
    .addLoot('8x minecraft:structure_void')
    .randomChance(0.25).addLoot('3x create:experience_nugget')
  event.addBlockLootModifier('minecraft:grass')
    .randomChance(0.05)
    .addLoot('kubejs:lemon_seed')
  /**
   * ENTITIES
   */
  event.addEntityLootModifier('minecraft:creeper')
    .randomChance(0.25).addLoot('create:zinc_nugget')
    .randomChanceWithLooting(0.50, 1).addLoot('2x create:zinc_nugget')
  event.addEntityLootModifier('minecraft:witch')
    .randomChance(0.75).addLoot('3x minecraft:redstone')
    .randomChanceWithLooting(0.75, 1).addLoot('9x minecraft:redstone')
    .randomChance(0.25).addLoot('6x minecraft:redstone')
    .randomChance(0.25).addLoot('minecraft:lapis_lazuli')
    .randomChanceWithLooting(0.75, 1).addLoot('9x minecraft:lapis_lazuli')
  event.addEntityLootModifier('minecraft:drowned')
    .randomChance(0.25).addLoot('create:copper_nugget')
    .randomChanceWithLooting(0.50, 1).addLoot('create:copper_nugget')
})