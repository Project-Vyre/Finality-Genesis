// requires: caupona
// requires: kubejs_create

/**
 * @file Server handler for Caupona.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
To-Do List

- Implement yeast and fermentation process as closely as possible.
*/

console.log("If one certain recipe from Caupona errors with KubeJS, it is a concurrency issue with Rhino.")
console.log("DO NOT issue a bug report related to this issue to the mod author!")

let panMaterials = [
  'copper',
  'iron'
]

ServerEvents.tags('item', event => {
  event.add('forge:fruits/fig', 'caupona:fig')
})

ServerEvents.recipes(event => {
  for (let i = 0; i < panMaterials.length; i++) {
    let material = panMaterials[i];
    event.shaped(`caupona:${material}_frying_pan`, [
      'MM ',
      'MMS'
    ], {
      M: `create:${material}_sheet`,
      S: 'minecraft:stick'
    }).id(`caupona:crafting/${material}_frying_pan`)
  }
  // implement yeast and fermentation process
  event.recipes.create.mixing(Fluid.of('kubejs:fig_vinegar', 250), [
    '2x minecraft:sugar',
    '4x caupona:fig'
  ]).id('finality:mixing/fig_vinegar_fermenting')
  event.recipes.create.filling('caupona:vinegar_spice_jar', [
    'minecraft:flower_pot',
    Fluid.of('kubejs:fig_vinegar', 250)
  ]).id('finality:filling/vinegar_spice_from_figs')
  event.recipes.create.compacting(Fluid.of('kubejs:walnut_oil', 250), [
    '8x caupona:walnut'
  ]).id('finality:compacting/walnut_oil_extraction')
  event.recipes.create.filling(Item.of('caupona:gravy_boat', '{Damage:0}'), [
    'minecraft:glass_bottle',
    Fluid.of('kubejs:walnut_oil', 250)
  ]).id('finality:filling/gravy_boat')
  event.recipes.create.filling(Item.of('caupona:gravy_boat', '{Damage:0}'), [
    [
      Item.of('caupona:gravy_boat', '{Damage:1}').weakNBT(),
      Item.of('caupona:gravy_boat', '{Damage:2}').weakNBT(),
      Item.of('caupona:gravy_boat', '{Damage:3}').weakNBT(),
      Item.of('caupona:gravy_boat', '{Damage:4}').weakNBT(),
      Item.of('caupona:gravy_boat', '{Damage:5}').weakNBT()
    ],
    Fluid.of('kubejs:walnut_oil', 250)
  ]).id('finality:filling/gravy_boat_refill')
  if (Platform.isLoaded('aether')) {
    event.shaped('minecraft:chest', [
      'WWW',
      'W W',
      'WWW'
    ], {
      W: 'caupona:walnut_planks'
    }).id('finality:caupona/walnut_to_vanilla_chest_fallback')
  }
})