// requires: malum
// requires: grimoireofgaia
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for Malum.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
Malum To-Do List

- FTB Quests for introduction
- Create + Malum integration
- Wandering Trader trades for those on older versions
*/

let malumOres = [
  'malum:natural_quartz_ore',
  'malum:deepslate_quartz_ore',
  'malum:blazing_quartz_ore',
  'malum:brilliant_stone',
  'malum:brilliant_deepslate',
  'malum:soulstone_ore',
  'malum:deepslate_soulstone_ore'
]

ServerEvents.recipes(event => {
  console.log('Malum detected! Removing forgotten recipe with recipe ID malum:create/crushing/crush_rare_earths_block')
  console.log('Also attempting to remove forgotten recipe malum:malum/blazing_sconce')
  console.log('Please ignore any errors related to parsing recipes from Malum.')
  event.remove([
    { id: 'malum:malum/blazing_sconce' },
    { id: 'malum:create/crushing/crush_rare_earths_block' }
  ])
  malumOres.forEach(ore => {
    event.remove([
      {
        mod: 'malum',
        type: 'minecraft:smelting',
        input: ore
      },
      {
        mod: 'malum',
        type: 'minecraft:blasting',
        input: ore
      }
    ])
  })
  // recipes
  console.log("Create is loaded. Removing Malum's Copper Nuggets.")
  event.remove({
    input: 'malum:copper_nugget',
    output: 'malum:copper_nugget'
  })
  event.recipes.minecraft.smelting('6x create:copper_nugget', 'malum:copper_node').cookingTime(200).xp(0.25)
    .id('malum:copper_from_node_smelting')
  event.recipes.minecraft.blasting('6x create:copper_nugget', 'malum:copper_node').cookingTime(100).xp(0.25)
    .id('malum:copper_from_node_blasting')
  event.recipes.create.deploying('minecraft:experience_bottle', [
    'malum:chunk_of_brilliance',
    'minecraft:glass_bottle'
  ]).id('finality:malum/deploying/experience_bottle')
})

ServerEvents.tags('item', event => {
  event.add('malum:soul_hunter_weapon', [
    'kubejs:final_scythe',
    'kubejs:final_katana'
  ])
})

LootJS.modifiers(event => {
  event.addBlockLootModifier('malum:block_of_cthonic_gold')
    .randomChance(0.10).addLoot('malum:cthonic_gold')
  event.addBlockLootModifier('malum:brilliant_stone')
    .randomChance(0.10).addLoot('malum:cluster_of_brilliance')
  event.addBlockLootModifier('malum:brilliant_deepslate')
    .randomChance(0.2).addLoot('malum:cluster_of_brilliance')
  event.addBlockLootModifier('malum:soulstone_ore')
    .randomChance(0.10).addLoot('malum:raw_soulstone')
  event.addBlockLootModifier('malum:deepslate_soulstone_ore')
    .randomChance(0.2).addLoot('malum:raw_soulstone')
  event.addBlockLootModifier('malum:blazing_quartz_ore')
    .randomChance(0.25).addLoot('malum:blazing_quartz')
})