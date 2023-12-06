// requires: farmersdelight
// requires: kubejs_create
// requires: lootjs
// requires: morejs

/**
 * @file Server handler for Farmer's Delight and add-ons, if detected.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
To-Do List

Create integration and reworking for Farmer's Delight addons
*/

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
    event.recipes.create.cutting('2x farmersdelight:cutting_board', '#minecraft:wooden_slabs')
        .processingTime(100)
        .id('farmersdelight:cutting_board')
    event.recipes.minecraft.smelting('farmersdelight:fried_egg', 'minecraft:egg')
        .cookingTime(200)
        .id('farmersdelight:fried_egg')
    event.recipes.minecraft.campfire_cooking('farmersdelight:fried_egg', 'minecraft:egg')
        .cookingTime(600)
        .id('farmersdelight:fried_egg_from_campfire_cooking')
    event.recipes.minecraft.smoking('farmersdelight:fried_egg', 'minecraft:egg')
        .cookingTime(100)
        .id('farmersdelight:fried_egg_from_smoking')
    if (!Platform.isLoaded('farmersrespite')) {
        event.remove([
            'create_central_kitchen:mixing/lime_green_tea',
            'create_central_kitchen:mixing/pomegranate_black_tea'
        ])
    }
    if (Platform.isLoaded('delightful')) {
        event.recipes.create.mixing('kubejs:steamed_matcha_leaves', [
            'delightful:green_tea_leaf',
            Fluid.of('minecraft:water', 250)
        ]).heated().id('finality:mixing/steaming_matcha_leaves')
        event.recipes.create.mixing('kubejs:dried_matcha_leaves',
            'kubejs:steamed_matcha_leaves'
        ).heated().id('finality:mixing/matcha_leaf_drying')
        event.recipes.create.milling('delightful:matcha',
            'kubejs:dried_matcha_leaves'
        ).processingTime(130).id('finality:milling/matcha_powder')
    }
    if (Platform.isLoaded('miners_deight')) {
        event.shaped('kubejs:denied_result', [
            'C C',
            ' C '
        ], {
            C: 'minecraft:copper_ingot'
        }).id('miners_delight:copper_cup')
        event.shaped('miners_delight:copper_cup', [
            'C C',
            ' C '
        ], {
            C: 'create:copper_sheet'
        }).id('finality:miners_delight/copper_cup')
    }
    if (Platform.isLoaded('ends_delight')) {
        event.recipes.create.filling('ends_delight:non_hatchable_dragon_egg', [
            'minecraft:dragon_egg',
            Fluid.of('kubejs:shimmer')
        ]).id('finality:ends_delight/filling/non_hatchable_dragon_egg')
    }
    if (Platform.isLoaded('culturaldelights')) {
        // test 1: Crabber's Delight and Nether's Delight don't cause the issue...
        // test 2: Cultural Delights returns the error.
        console.log("Please ignore com.google.gson.JsonParseException: java.io.EOFException as it is being caused by Cultural Delights.")
        console.log("This was determined after doing a binary search to narrow down the cause.")
        event.shapeless('minecraft:beetroot_soup', [
            '6x minecraft:beetroot',
            'minecraft:bowl'
        ]).id('minecraft:beetroot_soup')
        event.shapeless('minecraft:mushroom_stew', [
            'minecraft:red_mushroom',
            'minecraft:brown_mushroom',
            'minecraft:bowl'
        ]).id('minecraft:mushroom_stew')
    }
})

ServerEvents.tags('item', event => {
    if (Platform.isLoaded('culturaldelights')) {
        event.add('minecraft:saplings', 'culturaldelights:avocado_sapling')
    }
})

ServerEvents.tags('block', event => {
    if (Platform.isLoaded('culturaldelights')) {
        event.add('minecraft:saplings', 'culturaldelights:avocado_sapling')
    }
})

MoreJSEvents.wandererTrades(event => {
    event.addTrade(1, [
        '3x minecraft:emerald'
    ], 'farmersdelight:cabbage_seeds')
    event.addTrade(1, [
        '3x minecraft:emerald'
    ], 'farmersdelight:tomato_seeds')
    if (Platform.isLoaded('collectorsreap')) {
        event.addTrade(1, [
            '2x minecraft:emerald'
        ], 'collectorsreap:portobello')
    }
    if (Platform.isLoaded('culturaldelights')) {
        event.addTrade(1, [
            '3x minecraft:emerald'
        ], 'culturaldelights:cucumber_seeds')
        event.addTrade(1, [
            '3x minecraft:emerald'
        ], 'culturaldelights:corn_kernels')
        event.addTrade(1, [
            '3x minecraft:emerald'
        ], 'culturaldelights:eggplant_seeds')
        event.addTrade(1, [
            '3x minecraft:emerald'
        ], 'culturaldelights:avocado_pit')
        event.addTrade(1, [
            '6x minecraft:emerald'
        ], 'culturaldelights:avocado_sapling')
    }
    if (Platform.isLoaded('delightful')) {
        event.addTrade(1, [
            'minecraft:emerald'
        ], '8x delightful:salmonberry_pips')
        event.addTrade(1, [
            'minecraft:emerald'
        ], '16x biomesoplenty:clover')
    }
})

LootJS.modifiers(event => {
    if (Platform.isLoaded('biomesoplenty') && Platform.isLoaded('delightful')) {
        event.addBlockLootModifier('biomesoplenty:huge_clover_petal')
            .randomChance(0.50).addLoot('biomesoplenty:clover')
    }
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