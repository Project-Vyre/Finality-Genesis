// requires: farmersdelight
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.shaped('farmersdelight:skillet', [
        ' SS',
        ' SS',
        'B  '
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick'
    }).id('farmersdelight:skillet')
    event.shaped('farmersdelight:cooking_pot', [
        'BWB',
        'SHS',
        'SSS'
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick',
        H: 'minecraft:water_bucket',
        W: 'minecraft:wooden_shovel'
    }).id('farmersdelight:cooking_pot')
    event.recipes.createCutting('2x farmersdelight:cutting_board', '#minecraft:wooden_slabs')
        .processingTime(100)
        .id('farmersdelight:cutting_board')
    event.smelting('farmersdelight:fried_egg', 'minecraft:egg')
        .cookingTime(200)
        .id('farmersdelight:fried_egg')
    event.campfireCooking('farmersdelight:fried_egg', 'minecraft:egg')
        .cookingTime(600)
        .id('farmersdelight:fried_egg_from_campfire_cooking')
    event.smoking('farmersdelight:fried_egg', 'minecraft:egg')
        .cookingTime(100)
        .id('farmersdelight:fried_egg_from_smoking')
})

/*
Note to self: DO NOT USE UNTIL TAGGED INGREDIENT ISSUE IS FIXED!

ServerEvents.tags('item', event => {
    event.add('kubejs:eggs', 'minecraft:turtle_egg')
    if (Platform.isLoaded('aether') &&
        Platform.isLoaded('alexsmobs') &&
        Platform.isLoaded('autumnity')
    ) {
        event.add('kubejs:eggs', [
            'aether:black_moa_egg',
            'aether:blue_moa_egg',
            'aether:white_moa_egg',
            'alexsmobs:crocodile_egg',
            'alexsmobs:terrapin_egg',
            'autumnity:turkey_egg'
        ])
    }
})

ServerEvents.recipes(event => {
        if (Platform.isLoaded('aether') &&
        Platform.isLoaded('alexsmobs') &&
        Platform.isLoaded('autumnity')
    ) {
        event.smelting('farmersdelight:fried_egg', '#kubejs:eggs')
            .cookingTime(200)
            .id('finality:fried_egg_tagged')
        event.campfireCooking('farmersdelight:fried_egg', '#kubejs:eggs')
            .cookingTime(600)
            .id('finality:fried_egg_from_campfire_tagged')
        event.smoking('farmersdelight:fried_egg', '#kubejs:eggs')
            .cookingTime(100)
            .id('finality:fried_egg_from_smoking_tagged')
    }
})
*/