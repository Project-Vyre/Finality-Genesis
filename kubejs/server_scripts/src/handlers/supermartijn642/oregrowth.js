/**
 * @file Oregrowth server handler. Recipes can be found in the KubeJS data folder.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: oregrowth
// requires: ars_nouveau
// requires: kubejs_create

let core_essences = [
  'coal',
  'diamond',
  'emerald',
  'gold',
  'iron',
  'lapis',
  'quartz',
  'redstone',
  'zinc'
]

ServerEvents.recipes(event => {
  /**
   * 
   * @param {string} output Output item
   * @param {string} input Ore essence input
   * @param {string} id 
   */
  function auto(output, input) {
    event.recipes.create.mixing([
      '8x ' + output,
      Item.of('create:experience_nugget').withChance(0.25)
    ], [
      `4x kubejs:${input}_ore_essence`,
      'ars_nouveau:manipulation_essence',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}')
    ]).id('kubejs:oregrowth/mixing/' + input + 'ore_essence_resolve')
    event.recipes.create.compacting([
      output,
      Item.of('create:experience_nugget').withChance(0.25)
    ], `kubejs:${input}_ore_essence`).id('kubejs:oregrowth/compacting/' + input + '_ore_essence_resolve')
  }
  auto('minecraft:coal', 'coal')
  auto('minecraft:raw_copper', 'copper')
  auto('minecraft:diamond', 'diamond')
  auto('minecraft:emerald', 'emerald')
  auto('minecraft:raw_gold', 'gold')
  auto('minecraft:raw_iron', 'iron')
  auto('minecraft:lapis_lazuli', 'lapis')
  auto('minecraft:quartz', 'quartz')
  auto('minecraft:redstone', 'redstone')
  auto('create:raw_zinc', 'zinc')
  if (Platform.isLoaded('ad_astra')) {
    auto('ad_astra:raw_calorite', 'calorite')
    auto('ad_astra:raw_desh', 'desh')
    auto('ad_astra:ice_shard', 'ice_shard')
    auto('ad_astra:raw_ostrum', 'ostrum')
    auto('ad_astra:cheese', 'moon_cheese')
  }
  if (Platform.isLoaded('aether')) {
    auto('aether:ambrosium_shard', 'ambrosium')
    auto('aether:enchanted_gravitite', 'gravitite')
    auto('aether:zanite_gemstone', 'zanite')
  }
  if (Platform.isLoaded('alexscaves')) {
    event.recipes.create.mixing([
      '8x alexscaves:uranium',
      Item.of('create:experience_nugget').withChance(0.25)
    ], [
      '4x kubejs:uranium_ore_essence',
      'ars_nouveau:manipulation_essence',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}'),
      'alexscaves:radrock'
    ]).id('kubejs:oregrowth/mixing/alexscaves_uranium_ore_essence_resolve')
    event.recipes.create.compacting([
      'alexscaves:uranium',
      Item.of('create:experience_nugget').withChance(0.25)
    ], [
      'kubejs:uranium_ore_essence',
      'alexscaves:radrock'
    ]).id('kubejs:oregrowth/compacting/alexscaves_uranium_ore_essence_resolve')
  }
  if (Platform.isLoaded('destroy')) {
    event.recipes.create.mixing([
      '8x destroy:fluorite',
      Item.of('create:experience_nugget').withChance(0.25)
    ], [
      '4x kubejs:destroy_fluorite_ore_essence',
      'ars_nouveau:manipulation_essence',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}')
    ]).id('kubejs:oregrowth/mixing/destroy_fluorite_ore_essence_resolve')
    event.recipes.create.compacting([
      'destroy:fluorite',
      Item.of('create:experience_nugget').withChance(0.25)
    ], [
      'kubejs:destroy_fluorite_ore_essence'
    ]).id('kubejs:oregrowth/compacting/destroy_fluorite_ore_essence_resolve')

    event.recipes.create.mixing([
      '8x destroy:raw_nickel',
      Item.of('create:experience_nugget').withChance(0.25)
    ], [
      '4x kubejs:nickel_ore_essence',
      'ars_nouveau:manipulation_essence',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}')
    ]).id('kubejs:oregrowth/mixing/destroy_nickel_ore_essence_resolve')
    event.recipes.create.compacting([
      'destroy:raw_nickel',
      Item.of('create:experience_nugget').withChance(0.25)
    ], 'kubejs:nickel_ore_essence').id('kubejs:oregrowth/compacting/destroy_nickel_ore_essence_resolve')
  }
  if (Platform.isLoaded('mysticalagriculture')) {
    event.remove([
      { id: 'oregrowth:mysticalagriculture_inferium_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_deepslate_inferium_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_prosperity_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_deepslate_prosperity_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_soulium_ore_growth' }
    ])
  }
})