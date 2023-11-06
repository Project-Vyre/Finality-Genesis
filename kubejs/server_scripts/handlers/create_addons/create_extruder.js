// requires: create_mechanical_extruder
// requires: kubejs_create

/**
 * @file Server handler for Create Mehcanical Extruder.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

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
        event.recipes.create_mechanical_extruder.extruding(Item.of(`create:${material}`, 64), [
            Item.of(`${ORESTONES[material]}`),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).withCatalyst('kubejs:repeating_command_block').requiredBonks(1).id(`finality:repeating_command_block/${material}`)
        event.recipes.create_mechanical_extruder.extruding(Item.of(`create:${material}`).withChance(0.75), [
            Item.of(`${ORESTONES[material]}`),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).withCatalyst('minecraft:crying_obsidian').requiredBonks(3).id(`finality:renew_extruder_${material}_with_crying_obsidian`)
    })
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_limestone')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [
        Item.of('minecraft:honey_block'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_limestone_alt')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone', 64), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('kubejs:repeating_command_block').id('finality:repeating_command_block/limestone_compat')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria'), [
        Fluid.of('create:chocolate'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_scoria_compat')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria', 64), [
        Fluid.of('create:chocolate'),
        Fluid.of('minecraft:lava')
    ]).withCatalyst('kubejs:repeating_command_block').id('finality:repeating_command_block/scoria_compat')
    if (Platform.isLoaded('malum')) {
        event.recipes.create_mechanical_extruder.extruding(Item.of('malum:block_of_cthonic_gold').withChance(0.25), [
            Item.of('minecraft:raw_gold_block'),
            Fluid.of('minecraft:lava')
        ]).withCatalyst('malum:twisted_rock').id('finality:malum/extruder_cthonic_gold')
    }
})