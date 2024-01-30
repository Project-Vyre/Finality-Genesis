// requires: sliceanddice
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('minecraft:milk'), [
        '2x #forge:nuts',
        'minecraft:sugar',
        Fluid.of('minecraft:water')
    ]).id('finality:mixing/nut_milk')
})