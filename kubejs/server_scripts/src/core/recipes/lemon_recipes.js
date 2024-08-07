// requires: kubejs_create
// requires: farmersdelight

ServerEvents.recipes(event => {
  event.recipes.create.cutting(
    '4x kubejs:lemon_slice',
    'kubejs:lemon'
  ).processingTime(25).id('kubejs:lemon_slicing_with_saw')
  event.recipes.create.compacting([
    Fluid.of('kubejs:lemon_juice', 100),
    'kubejs:lemon_seed'
  ], 'kubejs:lemon').id('kubejs:whole_lemon_squeezing')
  event.recipes.create.compacting([
    Fluid.of('kubejs:lemon_juice', 25),
    'kubejs:lemon_seed'
  ], 'kubejs:lemon_slice').id('kubejs:lemon_slice_squeezing')
  event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [Ingredient.of('kubejs:lemon').toJson()],
    result: [Item.of('kubejs:lemon_slice', 4).toJson()],
    tool: Ingredient.of('#forge:tools/knives').toJson()
  }).id('kubejs:cutting/lemon_slice')
})

ServerEvents.compostableRecipes(event => {
  event.add('kubejs:lemon_seed', 0.30)
})