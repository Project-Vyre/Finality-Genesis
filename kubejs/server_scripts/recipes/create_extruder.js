ServerEvents.recipes(event => {
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:asurine'), [
        Item.of('create:raw_zinc_block'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('minecraft:crying_obsidian').id('kubejs:renew_extruder_asurine')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:crimsite'), [
        Item.of('minecraft:raw_iron_block'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('minecraft:crying_obsidian').id('kubejs:renew_extruder_crimsite')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:ochrum'), [
        Item.of('minecraft:raw_gold_block'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('minecraft:crying_obsidian').id('kubejs:renew_extruder_ochrum')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:veridium'), [
        Item.of('minecraft:raw_copper_block'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('minecraft:crying_obsidian').id('kubejs:renew_extruder_veridium')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone'), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_limestone')
})