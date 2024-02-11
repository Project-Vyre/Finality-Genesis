/**
 * @file Repairing item recipes module
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

ServerEvents.recipes(event => {
  if (!Platform.isLoaded('pickletweaks')) {
    event.recipes.minecraft.crafting_shapeless(Ingredient.of('minecraft:bow'), [
      Ingredient.of('minecraft:bow'),
      'minecraft:string'
    ]).modifyResult((grid, result) => {
      let repairable = grid.find(Ingredient.of('minecraft:bow'))
      if (repairable.damaged) {
        repairable.damageValue = 0
        return repairable
      }
    }).id('finality:bow_repair')
    event.recipes.minecraft.crafting_shapeless(Ingredient.of('minecraft:crossbow'), [
      Ingredient.of('minecraft:crossbow'),
      'minecraft:string'
    ]).modifyResult((grid, result) => {
      let repairable = grid.find(Ingredient.of('minecraft:crossbow'))
      if (repairable.damaged) {
        repairable.damageValue = 0
        return repairable
      }
    }).id('finality:crossbow_repair')
  }
})