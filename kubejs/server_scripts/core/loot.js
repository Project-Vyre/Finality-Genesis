// requires: lootjs
// requires: create

let FOUNDATION_METALS = ['iron', 'gold']

LootJS.modifiers(event => {
  for (let i = 0; i < FOUNDATION_METALS.length; i++) {
    let metal = FOUNDATION_METALS[i];
    event.addBlockLootModifier(`minecraft:${metal}_ore`).randomChance(0.2).addLoot(`minecraft:raw_${metal}`)
    event.addBlockLootModifier(`minecraft:deepslate_${metal}_ore`).randomChance(0.3).addLoot(`minecraft:raw_${metal}`)
  }
  event.addBlockLootModifier('create:zinc_ore')
    .randomChance(0.2).addLoot('create:raw_zinc')
  event.addBlockLootModifier('create:deepslate_zinc_ore')
    .randomChance(0.3).addLoot('create:raw_zinc')
  event.addBlockLootModifier('minecraft:spawner')
    .addLoot('8x minecraft:structure_void')
    .randomChance(0.25).addLoot('3x create:experience_nugget')
  event.addBlockLootModifier('minecraft:grass')
    .randomChance(0.05)
    .addLoot('kubejs:lemon_seed')
  event.addEntityLootModifier('minecraft:creeper')
    .randomChance(0.1).addLoot('create:zinc_nugget')
  event.addEntityLootModifier('minecraft:witch')
    .randomChance(0.1).addLoot('minecraft:lapis_lazuli')
  event.addEntityLootModifier('minecraft:drowned')
    .randomChance(0.1).addLoot('create:copper_nugget')
})