// requires: endrem
// requires: kubejs_create
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
  if (!Platform.isLoaded('extendedcrafting')) {
    event.recipes.create.mixing('endrem:exotic_eye', [
      '4x minecraft:glow_ink_sac',
      'minecraft:fire_coral',
      'minecraft:bubble_coral',
      'minecraft:tube_coral',
      'minecraft:horn_coral',
      'minecraft:conduit',
      Fluid.of('kubejs:shimmer', 250)
    ]).id('kubejs:endrem/mixing/exotic_eye')
    event.recipes.create.mixing('endrem:witch_eye', [
      'minecraft:ender_eye',
      'endrem:witch_pupil',
      'minecraft:redstone',
      'minecraft:glowstone_dust',
    ]).heated().id('kubejs:endrem/mixing/witch_eye')
  }
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
})