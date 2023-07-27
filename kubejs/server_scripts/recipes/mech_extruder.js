let ORESTONES = {
    asurine: 'create:raw_zinc_block',
    crimsite: 'minecraft:raw_iron_block',
    ochrum: 'minecraft:raw_gold_block',
    veridium: 'minecraft:raw_copper_block'
}
ServerEvents.recipes(event => {
    Object.keys(ORESTONES).forEach(material => {
        event.recipes.createMechanicalExtruderExtruding(Item.of(`create:${material}`), [
            Item.of(`${material[ORESTONES]}`),
            Fluid.of('minecraft:lava')
        ]).withCatalyst('minecraft:crying_obsidian').id(`finality:renew_extruder_${material}`)
    })
    event.recipes.createMechanicalExtruderExtruding(Item.of('create:limestone'), [
        Fluid.of('create:honey'),
        Fluid.of('minecraft:lava')
    ]).id('finality:renew_extruder_limestone')
})