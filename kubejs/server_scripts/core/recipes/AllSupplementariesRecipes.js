// requires: supplementaries
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.shaped('supplementaries:quiver', [
        'RRL',
        'RLL',
        'LL '
    ], {
        R: '#forge:rope',
        L: '#forge:leather'
    }).id('finality:supplementaries_quiver')
    event.recipes.create.filling('supplementaries:bomb_blue', [
        'supplementaries:bomb',
        Fluid.of('kubejs:condensed_universal_entropy', 25)
    ]).id('finality:supplementaries/filling/bomb_blue')
    event.recipes.create.mixing('4x supplementaries:bomb_blue', [
        '4x supplementaries:bomb',
        Fluid.of('kubejs:condensed_universal_entropy', 100)
    ]).id('finality:supplementaries/mixing/bulk_bomb_blue')
})