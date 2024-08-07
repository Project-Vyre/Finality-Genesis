// requires: createdeco
// requires: kubejs_create

/**
 * @file Server handler for Create Deco.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

/*
810 mB = 1 block
90 mB = 1 ingot
10 mB = 1 nugget
*/

ServerEvents.recipes(event => {
  /**
   * 
   * @param {*} event 
   * @param {string} moltenMetal 
   * @param {string} coin 
   */
  let COIN_MELT_HEATED = (moltenMetal, coinType) => {
    event.recipes.create.mixing(Fluid.of(`kubejs:molten_${moltenMetal}`, 10), [
      `createdeco:${coinType}_coin`
    ]).heated().id(`finality:createdeco/${coinType}_coin_melting`)
  }
  /**
   * 
   * @param {*} event 
   * @param {string} moltenMetal 
   * @param {string} coinType 
   */
  let COINSTACK_MELTING = (moltenMetal, coinType) => {
    event.recipes.create.mixing(Fluid.of(`kubejs:molten_${moltenMetal}`, 40), [
      `createdeco:${coinType}_coinstack`
    ]).heated().id(`finality:createdeco/${coinType}_coinstack_melting`)
  }
  event.remove([
    {
      type: 'create:pressing',
      output: 'createdeco:zinc_sheet'
    },
    {
      type: 'create:pressing',
      output: 'createdeco:netherite_sheet'
    }
  ])
  COIN_MELT_HEATED('iron', 'iron')
  // COIN_MELT_HEATED('iron', 'industrial_iron')
  COIN_MELT_HEATED('gold', 'gold')
  COIN_MELT_HEATED('copper', 'copper')
  COIN_MELT_HEATED('zinc', 'zinc')
  COIN_MELT_HEATED('brass', 'brass')
  event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 10), [
    'createdeco:netherite_coin'
  ]).superheated().id('finality:createdeco/netherite_coin_melting')
  COINSTACK_MELTING('iron', 'iron')
  // COINSTACK_MELTING('iron', 'industrial_iron')
  COINSTACK_MELTING('gold', 'gold')
  COINSTACK_MELTING('copper', 'copper')
  COINSTACK_MELTING('zinc', 'zinc')
  COINSTACK_MELTING('brass', 'brass')
  event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 40), [
    'createdeco:netherite_coinstack'
  ]).superheated().id('finality:createdeco/netherite_coinstack_melting')
  /*
  event.recipes.create.mixing(
    Fluid.of('kubejs:molten_iron', 10),
    'createdeco:industrial_iron_sheet'
  ).heated().id('finality:createdeco/basin/industrial_iron_sheet_melting')
  */
  event.remove([
    { id: 'create:industrial_iron_block_from_iron_ingots_stonecutting' },
    {
      mod: 'createdeco',
      type: 'create:compacting',
      output: 'create:industrial_iron_block'
    },
    {
      id: 'createdeco:compacting/industrial_iron_ingot'
    }
  ])
})

let cdeco_lamp_colors = [
  'yellow',
  'red',
  'green',
  'blue'
]
let cdeco_lamp_mats = [
  'gold',
  'netherite',
  'andesite',
  'brass',
  'industrial_iron',
  'iron',
  'copper',
  'zinc'
]

ServerEvents.tags('item', event => {
  event.add('forge:nuggets/netherite', 'createdeco:netherite_nugget')
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'createdeco:gold_bars',
    'createdeco:gold_bars_overlay',
    'createdeco:netherite_bars',
    'createdeco:netherite_bars_overlay',
    'createdeco:andesite_bars',
    'createdeco:andesite_bars_overlay',
    'createdeco:brass_bars',
    'createdeco:brass_bars_overlay',
    'createdeco:industrial_iron_bars',
    'createdeco:industrial_iron_bars_overlay',
    'createdeco:polished_iron_bars',
    'createdeco:polished_iron_bars_overlay',
    'createdeco:iron_bars_overlay',
    'createdeco:copper_bars',
    'createdeco:copper_bars_overlay',
    'createdeco:zinc_bars',
    'createdeco:zinc_bars_overlay'
  ])
  for (let index = 0; index < cdeco_lamp_mats.length; index++) {
    let mat = cdeco_lamp_mats[index];
    event.add('create:wrench_pickup', [
      `createdeco:yellow_${mat}_lamp`,
      `createdeco:red_${mat}_lamp`,
      `createdeco:green_${mat}_lamp`,
      `createdeco:blue_${mat}_lamp`
    ])
  }
})