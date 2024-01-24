// requires: kubejs_create

/**
 * @file Uncrafting with Create, probably cursed.
 */

ServerEvents.recipes(event => {
    /*
    event.recipes.create.crushing([
        'minecraft:iron_ingot',
        'minecraft:stick',
        'minecraft:redstone'
    ], 'minecraft:activator_rail').processingTime(120).id('finality:crushing/activator_rail_recycling')
    event.recipes.create.crushing([
        '',
    ], 'minecraft:detector_rail').processingTime(120).id('finality:crushing/detector_rail_recycling')
    */
    event.recipes.create.crushing([
        '3x minecraft:iron_block',
        '4x minecraft:iron_ingot'
    ], 'minecraft:anvil').processingTime(300).id('finality:crushing/anvil_recycling')
    event.recipes.create.item_application('31x minecraft:iron_ingot', [
        'minecraft:anvil',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/anvil_deconstruction')
    event.recipes.create.cutting([
        'minecraft:gold_block',
        'create:golden_sheet'
    ], 'minecraft:bell').processingTime(300).id('finality:cutting/bell_recycling')
    event.recipes.create.crushing([
        'minecraft:furnace',
        '5x minecraft:iron_ingot',
        '3x minecraft:cobblestone'
    ], 'minecraft:blast_furnace').processingTime(200).id('finality:crushing/blast_furnace_recycling')
    event.recipes.create.crushing(
        '3x create:iron_sheet',
        'minecraft:bucket'
    ).processingTime(150).id('finality:crushing/bucket_recycling')
    event.recipes.create.cutting(
        '5x minecraft:iron_ingot',
        'minecraft:cauldron'
    ).processingTime(250).id('finality:cutting/cauldron_recycling')
    event.recipes.create.crushing([
        'minecraft:iron_ingot',
        '2x minecraft:iron_nugget'
    ], 'minecraft:chain').id('finality:crushing/chain_recycling')
    event.recipes.create.deploying([
        'minecraft:iron_ingot',
        'minecraft:tripwire_hook',
        '3x minecraft:stick',
        '2x minecraft:string',
    ], [
        'minecraft:crossbow',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:deploying/crossbow_deconstruction')
    event.recipes.create.deploying([
        'minecraft:flint',
        'minecraft:iron_ingot'
    ], [
        'minecraft:flint_and_steel',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:deploying/flint_steel_deconstruction')
    event.recipes.create.item_application([
        'create:iron_sheet',
        'minecraft:redstone'
    ], [
        'minecraft:heavy_weighted_pressure_plate',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/heavy_weighted_pressure_plate_deconstruction')
    event.recipes.create.item_application([
        'create:golden_sheet',
        'minecraft:redstone'
    ], [
        'minecraft:light_weighted_pressure_plate',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/light_weighted_pressure_plate_deconstruction')
    event.recipes.create.item_application([
        'minecraft:chest',
        'create:chute'
    ], [
        'minecraft:hopper',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/hopper_deconstruction')
    event.recipes.create.item_application([
        '2x minecraft:iron_ingot',
        '3x minecraft:iron_nugget',
        Item.of('minecraft:iron_nugget').withChance(0.30)
    ], [
        'minecraft:iron_bars',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/iron_bars_deconstruction')
    event.recipes.create.item_application('4x minecraft:iron_ingot', [
        'minecraft:iron_trapdoor',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/iron_trapdoor_deconstruction')
    event.recipes.create.item_application('2x minecraft:iron_ingot', [
        'minecraft:iron_door',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/iron_door_deconstruction')
    event.recipes.create.item_application('minecraft:obsidian', [
        'minecraft:crying_obsidian',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/undo_crying_obsidian')
    if (Platform.isLoaded('quark')) {
        event.recipes.create.item_application([
            '2x minecraft:gold_ingot',
            '3x minecraft:gold_nugget',
            Item.of('minecraft:gold_nugget').withChance(0.30)
        ], [
            'quark:gold_bars',
            'kubejs:deconstructor'
        ]).keepHeldItem().id('finality:item_application/quark/gold_bars_deconstruction')
    }
    if (Platform.isLoaded('supplementaries')) {
        event.recipes.create.item_application('2x minecraft:gold_ingot', [
            'supplementaries:gold_door',
            'kubejs:deconstructor'
        ]).keepHeldItem().id('finality:item_application/supplementaries/gold_door_deconstruction')
        event.recipes.create.item_application('4x minecraft:gold_ingot', [
            'supplementaries:gold_trapdoor',
            'kubejs:deconstructor'
        ]).keepHeldItem().id('finality:item_application/supplementaries/gold_trapdoor')
    }
    event.recipes.create.deploying('2x minecraft:iron_ingot', [
        'minecraft:shears',
        'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:deploying/shears_deconstruction')
})