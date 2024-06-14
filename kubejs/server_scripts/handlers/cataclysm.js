/**
 * @file Server handler for Cataclysm.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: cataclysm
// requires: create
// requires: lootjs
// requires: summoningrituals

ServerEvents.recipes(event => {
  event.shaped('cataclysm:athame', [
    ' P ',
    'GPG',
    ' R '
  ], {
    P: 'minecraft:prismarine_shard',
    G: 'minecraft:gold_ingot',
    R: 'minecraft:red_wool'
  }).id('finality:cataclysm/athame')
  event.shapeless('cataclysm:crystallized_coral_fragments', [
    'minecraft:amethyst_shard',
    'minecraft:stone',
    'minecraft:sea_pickle'
  ]).id('finality:cataclysm/crystallized_coral_fragments')
  event.recipes.summoningrituals.altar('minecraft:blaze_powder')
    .input([
      '4x minecraft:soul_sand',
      '2x minecraft:bone_block',
      '4x create:scorchia'
    ])
    .mobOutput(
      SummoningOutput.mob('cataclysm:ignited_revenant')
        .offset(0, 3, 0)
        .spread(3, 0, 3)
    )
    .recipeTime(10)
    .id('finality:summoning/ignited_revenant')
})

LootJS.modifiers(event => {
  event.addEntityLootModifier('cataclysm:netherite_monstrosity')
    .killedByPlayer().apply(ctx => {
      ctx.addLoot('3x minecraft:netherite_block')
    })
})

