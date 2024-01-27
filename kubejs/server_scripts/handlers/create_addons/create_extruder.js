// requires: create_mechanical_extruder
// requires: kubejs_create

/**
 * @file Server handler for Create Mehcanical Extruder.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

let orestones = {
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
    event.recipes.create_mechanical_extruder.extruding('minecraft:obsidian', [
        Fluid.of('minecraft:water'),
        Fluid.of('minecraft:lava')
    ]).requiredBonks(1).withCatalyst('minecraft:blue_ice').id('finality:mechanical_extruding/obsidian')
    for (let [material, raw] of Object.entries(orestones)) {
        event.recipes.create_mechanical_extruder.extruding(Item.of(`create:${material}`, 64), [
            Item.of(raw),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).requiredBonks(1).withCatalyst('kubejs:repeating_command_block').requiredBonks(1).id(`finality:repeating_command_block/${material}`)
        event.recipes.create_mechanical_extruder.extruding(Item.of(`create:${material}`).withChance(0.75), [
            Item.of(raw),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).requiredBonks(5).withCatalyst('minecraft:crying_obsidian').id(`finality:renew_extruder_${material}_with_crying_obsidian`)
    }
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).requiredBonks(1).id('finality:renew_extruder_limestone')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone'), [
        Item.of('minecraft:honey_block'),
        Fluid.of('minecraft:lava')
    ]).requiredBonks(1).id('finality:renew_extruder_limestone_alt')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:limestone', 64), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).requiredBonks(1).withCatalyst('kubejs:repeating_command_block').id('finality:repeating_command_block/limestone_compat')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria'), [
        Fluid.of('create:chocolate'),
        Fluid.of('minecraft:lava')
    ]).requiredBonks(1).id('finality:renew_extruder_scoria_compat')
    event.recipes.create_mechanical_extruder.extruding(Item.of('create:scoria', 64), [
        Fluid.of('create:chocolate'),
        Fluid.of('minecraft:lava')
    ]).requiredBonks(1).withCatalyst('kubejs:repeating_command_block').id('finality:repeating_command_block/scoria_compat')
    if (Platform.isLoaded('malum')) {
        event.recipes.create_mechanical_extruder.extruding(Item.of('malum:block_of_cthonic_gold').withChance(0.12), [
            Item.of('minecraft:raw_gold_block'),
            Fluid.of('kubejs:condensed_universal_entropy')
        ]).requiredBonks(6).withCatalyst('malum:twisted_rock').id('finality:malum/extruder_cthonic_gold')
    }
    if (Platform.isLoaded('quark')) {
        event.recipes.create_mechanical_extruder.extruding(Item.of('quark:shale'), [
            Item.of('minecraft:blue_ice'),
            Fluid.of('minecraft:lava')
        ]).requiredBonks(1).withCatalyst('quark:shale').id('finality:quark/extruder_shale')
    }
})