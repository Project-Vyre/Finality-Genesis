// requires: create_mechanical_extruder

let ORESTONES = {
    asurine: 'create:raw_zinc_block',
    crimsite: 'minecraft:raw_iron_block',
    ochrum: 'minecraft:raw_gold_block',
    veridium: 'minecraft:raw_copper_block',
}
ServerEvents.recipes(event => {
    event.shaped('create_mechanical_extruder:mechanical_extruder', [
        ' S ',
        'GPG',
        ' G '
    ], {
        S: 'create:shaft',
        G: '#forge:glass',
        P: 'create:mechanical_press'
    }).id('create_mechanical_extruder:mechanical_extruder')
    Object.keys(ORESTONES).forEach(material => {
        event.recipes.createMechanicalExtruderExtruding(Item.of(`create:${material}`, 64), [
            Item.of(`${ORESTONES[material]}`),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).withCatalyst('kubejs:repeating_command_block').requiredBonks(1).id(`finality:repeating_command_block/${material}`)
        event.recipes.createMechanicalExtruderExtruding(Item.of(`create:${material}`).withChance(0.75), [
            Item.of(`${ORESTONES[material]}`),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).withCatalyst('minecraft:crying_obsidian').requiredBonks(3).id(`finality:renew_extruder_${material}_with_crying_obsidian`)
    })
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone'), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_limestone')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone'), [
        Item.of('minecraft:honey_block'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_limestone_alt')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone', 64), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('kubejs:repeating_command_block').id('finality:repeating_command_block/limestone_compat')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:scoria'), [
        Fluid.of('create:chocolate'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_scoria_compat')
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:scoria', 64), [
        Fluid.of('create:chocolate'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('kubejs:repeating_command_block').id('finality:repeating_command_block/scoria_compat')
})