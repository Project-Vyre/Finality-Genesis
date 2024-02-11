// requires: kubejs_create

ServerEvents.recipes(event => {
  /**
   * 
   * @param {string} nugget 
   * @param {string} metal 
   */
  let NUGGET_SOLIDIFY = (nugget, metal) => {
    event.recipes.create.compacting(nugget, Fluid.of(`kubejs:molten_${metal}`, 10)).id(`finality:molten_${metal}_to_${metal}_nugget`)
  }
  /**
   * 
   * @param {string} ingot 
   * @param {string} metal 
   */
  let INGOT_SOLIDIFY = (ingot, metal) => {
    event.recipes.create.compacting(ingot, Fluid.of(`kubejs:molten_${metal}`, 90)).id(`finality:molten_${metal}_to_${metal}_ingot`)
  }
  NUGGET_SOLIDIFY('minecraft:iron_nugget', 'iron')
  NUGGET_SOLIDIFY('minecraft:gold_nugget', 'gold')
  NUGGET_SOLIDIFY('create:copper_nugget', 'copper')
  NUGGET_SOLIDIFY('create:zinc_nugget', 'zinc')
  NUGGET_SOLIDIFY('create:brass_nugget', 'brass')
  NUGGET_SOLIDIFY('kubejs:netherite_nugget', 'netherite')
  INGOT_SOLIDIFY('minecraft:iron_ingot', 'iron')
  INGOT_SOLIDIFY('minecraft:gold_ingot', 'gold')
  INGOT_SOLIDIFY('minecraft:copper_ingot', 'copper')
  INGOT_SOLIDIFY('create:zinc_ingot', 'zinc')
  INGOT_SOLIDIFY('create:brass_ingot', 'brass')
  INGOT_SOLIDIFY('minecraft:netherite_ingot', 'netherite')
})