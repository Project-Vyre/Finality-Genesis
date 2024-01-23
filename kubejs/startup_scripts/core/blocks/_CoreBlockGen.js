/**
 * @file Block registration.
 */

let CMD = {
    command_block: 'Command Block',
    chain_command_block: 'Chain Command Block',
    repeating_command_block: 'Repeating Command Block'
}

StartupEvents.registry('block', event => {
    event.create('kubejs:high_entropy_alloy_block')
        .displayName('<rainb>Block of High Entropy Alloy</rainb>')
        .textureAll('kubejs:block/high_entropy_alloy_block')
        .soundType('netherite_block')
        .hardness(500)
        .resistance(1000)
        .lightLevel(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:wither_immune')
        .tagBlock('minecraft:dragon_immune')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:needs_netherite_tool')
        .tagBlock('create:wrench_pickup')
    for (let [insert, name] of Object.entries(CMD)) {
        event.create(`kubejs:${insert}`)
            .displayName(`<rainb>${name}</rainb>`)
            .textureAll(`kubejs:block/${insert}`)
            .soundType('netherite_block')
            .hardness(500)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:wither_immune')
            .tagBlock('minecraft:dragon_immune')
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('forge:needs_netherite_tool')
            .tagBlock('create:wrench_pickup')
            .tagItem('kubejs:command_blocks')
            .blockEntity(entityInfo => {
                entityInfo.inventory(9, 1)
                entityInfo.rightClickOpensInventory()
                entityInfo.serverTick(20, 0, entity => {
                    entity.inventory.insertItem('minecraft:netherite_block', false)
                })
            })
    }
    event.create('kubejs:null_storage_block')
        .textureAll('kubejs:block/null_storage')
        .defaultCutout()
        .defaultTranslucent()
        .transparent(true)
        .soundType('netherite_block')
        .blockEntity(entityInfo => {
            entityInfo.inventory(9, 9)
            entityInfo.rightClickOpensInventory()
        })
    event.create('kubejs:dripstone_transitional_stone')
        .textureAll('kubejs:block/dripstone_stone')
        .requiresTool(true)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
})