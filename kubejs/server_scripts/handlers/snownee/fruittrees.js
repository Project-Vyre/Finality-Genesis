// requires: fruittrees
// requires: farmersdelight



ServerEvents.recipes(event => {
    event.recipes.create.cutting('4x kubejs:lemon_slice', 'fruittrees:lemon').processingTime(25).id('finality:fruittrees/cutting/lemon_slice')
    event.recipes.create.compacting([
        Fluid.of('kubejs:lemon_juice', 100),
        'kubejs:lemon_seed'
    ], 'fruittrees:lemon').id('finality:fruittrees/compacting/whole_lemon')
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('fruittrees:lemon').toJson()
        ],
        result: [
            Item.of('kubejs:lemon_slice', 4).toJson()
        ],
        tool: Ingredient.of('#forge:tools/knives').toJson()
    }).id('finality:fruittrees/fd_cutting/lemon')
    if (Platform.isLoaded('aether')) {
        event.shaped('minecraft:chest', [
            'WWW',
            'W W',
            'WWW'
        ], {
            W: [
                'fruittrees:cherry_planks',
                'fruittrees:citrus_planks'
            ]
        }).id('finality:fruittrees/crafting/vanilla_chest_fallback')
    }
})