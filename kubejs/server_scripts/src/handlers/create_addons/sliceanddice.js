// requires: sliceanddice
// requires: kubejs_create

ServerEvents.recipes(event => {
  if (Ingredient.of('#forge:nuts').stacks.size() > 0) {
    event.recipes.create.mixing(Fluid.of('minecraft:milk'), [
      '2x #forge:nuts',
      'minecraft:sugar',
      Fluid.of('minecraft:water')
    ]).id('finality:mixing/sliceanddice/nut_milk')
  }
})