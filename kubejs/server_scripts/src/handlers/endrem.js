// requires: endrem
// requires: kubejs_create
// requires: exposure
// requires: supplementaries
// requires: lootjs
// requires: summoningrituals

/**
 * @file Server handler for End Remastered.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove([
    { id: 'endrem:exotic_eye' },
    { id: 'endrem:undead_eye' },
    { id: 'endrem:witch_eye' }
  ])
  event.recipes.create.mixing('endrem:cryptic_eye', [
    'create:experience_block',
    'minecraft:ender_eye',
    Fluid.of('kubejs:condensed_universal_entropy', 250)
  ]).heated().id('kubejs:endrem/mixing/cryptic_eye')
  event.recipes.summoningrituals.altar('endrem:undead_soul')
    .itemOutput('endrem:undead_eye')
    .input([
      'minecraft:phantom_membrane',
      'minecraft:rotten_flesh',
      'minecraft:ghast_tear',
      'minecraft:bone'
    ])
    .dayTime('night')
    .id('kubejs:endrem/altar/undead_eye')
  event.recipes.summoningrituals.altar('minecraft:ender_eye')
    .itemOutput('endrem:magical_eye')
    .input([
      'create:encased_fan',
      '64x create:white_sail',
      '64x create:sail_frame',
      'create:windmill_bearing',
      'supplementaries:flute'
    ])
    .id('kubejs:endrem/altar/magical_eye')
  event.recipes.summoningrituals.altar('minecraft:ender_eye')
    .itemOutput('endrem:old_eye')
    .input([
      'create:sand_paper',
      'create:red_sand_paper',
      'minecraft:stone',
      'minecraft:deepslate',
      'minecraft:dripstone_block',
      'minecraft:tuff',
      'minecraft:andesite',
      'minecraft:diorite',
      'minecraft:granite',
      'minecraft:terracotta',
      'minecraft:sandstone',
      'minecraft:red_sandstone'
    ])
    .blockBelow('minecraft:chiseled_sandstone')
    .id('kubejs:endrem/altar/old_eye')
  if (!Platform.isLoaded('aether') && !Platform.isLoaded('reliquary')) {
    event.recipes.summoningrituals.altar('minecraft:ender_eye')
      .itemOutput('endrem:cursed_eye')
      .input([
        '4x minecraft:lightning_rod',
        '4x minecraft:amethyst_shard'
      ])
      .id('kubejs:endrem/altar/cursed_eye_fallback')
  } else {
    event.recipes.summoningrituals.altar('minecraft:ender_eye')
      .itemOutput('endrem:cursed_eye')
      .input([
        '4x minecraft:lightning_rod',
        '4x minecraft:amethyst_shard',
        'reliquary:rending_gale',
        'aether:lightning_sword'
      ])
      .id('kubejs:endrem/altar/cursed_eye')
  }
  event.recipes.summoningrituals.altar('minecraft:ender_eye')
    .itemOutput('endrem:rogue_eye')
    .input([
      'minecraft:writable_book',
      'minecraft:bookshelf',
      'kubejs:ascendant_mechanism'
    ])
    .id('kubejs:endrem/altar/rogue_eye')
  event.recipes.summoningrituals.altar('minecraft:ender_eye')
    .itemOutput('endrem:exotic_eye')
    .input([
      'minecraft:writable_book',
      'minecraft:bookshelf',
      'minecraft:spyglass',
      'minecraft:painting',
      'minecraft:wet_sponge',
      'kubejs:potion_base_singularity',
      'kubejs:genesis_mechanism'
    ])
    .id('kubejs:endrem/altar/exotic_eye')
  event.recipes.summoningrituals.altar('minecraft:ender_eye')
    .itemOutput('endrem:nether_eye')
    .input([
      'kubejs:blaze_cake_singularity',
      'kubejs:gold_singularity',
      'minecraft:flint_and_steel',
      'create:empty_blaze_burner'
    ])
    .blockBelow('minecraft:magma_block')
    .id('kubejs:endrem/altar/nether_eye')
  event.recipes.summoningrituals.altar('minecraft:ender_eye')
    .itemOutput('endrem:cold_eye')
    .input([
      'kubejs:blue_ice_singularity',
      'kubejs:logistics_mechanism',
      'kubejs:crimson_moons_semblance'
    ])
    .blockBelow('minecraft:blue_ice')
    .id('kubejs:endrem/altar/cold_eye')
  if (Platform.isLoaded('extendedcrafting')) {
    event.custom({
      type: 'extendedcrafting:combination',
      powerCost: 100000,
      input: { item: 'minecraft:ender_eye' },
      ingredients: [
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:fire_coral').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:conduit').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:bubble_coral').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:conduit').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:tube_coral').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:conduit').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:horn_coral').toJson(),
        Ingredient.of('minecraft:glow_ink_sac').toJson(),
        Ingredient.of('minecraft:conduit').toJson()
      ],
      result: { item: 'endrem:exotic_eye' }
    }).id('kubejs:extendedcrafting/combination/ritual_exotic_eye')
    event.custom({
      type: 'extendedcrafting:combination',
      powerCost: 100000,
      input: { item: 'endrem:witch_pupil' },
      ingredients: [
        Ingredient.of('minecraft:ender_eye').toJson(),
        Ingredient.of('minecraft:ender_eye').toJson(),
        Ingredient.of('minecraft:ender_eye').toJson(),
        Ingredient.of('minecraft:ender_eye').toJson(),
        Ingredient.of('extendedcrafting:luminessence').toJson(),
        Ingredient.of('extendedcrafting:luminessence').toJson(),
        Ingredient.of('extendedcrafting:luminessence').toJson(),
        Ingredient.of('extendedcrafting:luminessence').toJson(),
      ],
      result: { item: 'endrem:witch_eye' }
    }).id('kubejs:extendedcrafting/combination/ritual_witch_eye')
  }
})

LootJS.modifiers(event => {
  // /.*/ for everything
  event.addLootTableModifier('minecraft:chests/igloo_chest')
    .removeLoot('endrem:cold_eye')
  event.addLootTableModifier('minecraft:chests/nether_bridge')
    .removeLoot('endrem:nether_eye')
  event.addLootTableModifier('minecraft:chests/jungle_temple')
    .removeLoot('endrem:rogue_eye')
  event.addLootTableModifier('minecraft:chests/bastion_treasure')
    .removeLoot('endrem:cursed_eye')
  event.addLootTableModifier('minecraft:chests/desert_pyramid')
    .removeLoot('endrem:old_eye')
})