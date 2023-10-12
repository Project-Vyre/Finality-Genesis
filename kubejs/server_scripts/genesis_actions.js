// ignored: false

/**
 * Preventive measures are a work in progress...
 */

ItemEvents.foodEaten(event => {
    const { item } = event
    if (Platform.isLoaded('some_assembly_required') &&
        Platform.isLoaded('artifacts') &&
        item.getNbtString().includes('id:"artifacts:eternal_steak"')
    ) {
        event.server.tell([
            Component.of('Uh oh!\n').red(),
            Component.of('\nLooks like someone ate a sandiwch with '),
            Component.of('Eternal Steak ').gold(),
            Component.of('in it.')
        ])
        event.player.give('artifacts:eternal_steak')
    } else if (
        Platform.isLoaded('some_assembly_required') &&
        Platform.isLoaded('artifacts') &&
        item.getNbtString().includes('id:"artifacts:everlasting_beef"')
    ) {
        event.server.tell([
            Component.of('Uh oh!\n').red(),
            Component.of('\nLooks like someone ate a sandiwch with '),
            Component.of('Everlasting Beef ').gold(),
            Component.of('in it.')
        ])
        event.player.give('artifacts:everlasting_beef')
    }
})

/*
if (Platform.isLoaded('some_assembly_required') &&
    Platform.isLoaded('artifacts')
) {
    ItemEvents.foodEaten(event => {
        const { item } = event
        if (item.getNbtString().includes('id:"artifacts:eternal_steak"')) {
            event.server.tell([
                Component.of('Uh oh!\n').red(),
                Component.of('\nLooks like someone ate a sandiwch with '),
                Component.of('Eternal Steak ').gold(),
                Component.of('in it.')
            ])
            event.player.give('artifacts:eternal_steak')
        } else {
            if (item.getNbtString().includes('id:"artifacts:everlasting_beef"')) {
                event.server.tell([
                    Component.of('Uh oh!\n').red(),
                    Component.of('\nLooks like someone ate a sandiwch with '),
                    Component.of('Everlasting Beef ').gold(),
                    Component.of('in it.')
                ])
                event.player.give('artifacts:everlasting_beef')
            }
        }
    })
}
*/
/*
if (Platform.isLoaded('some_assembly_required') &&
    Platform.isLoaded('artifacts')
) {
    ItemEvents.foodEaten(event => {
        const { item } = event
        if (item.getNbtString().includes('id:"artifacts:eternal_steak"')) {
            event.server.tell([
                Component.of('Uh oh!\n').red(),
                Component.of('\nLooks like someone ate a sandiwch with '),
                Component.of('Eternal Steak ').gold(),
                Component.of('in it.')
            ])
            event.player.give('artifacts:eternal_steak')
        } else {
            if (item.getNbtString().includes('id:"artifacts:everlasting_beef"')) {
                event.server.tell([
                    Component.of('Uh oh!\n').red(),
                    Component.of('\nLooks like someone ate a sandiwch with '),
                    Component.of('Everlasting Beef ').gold(),
                    Component.of('in it.')
                ])
                event.player.give('artifacts:everlasting_beef')
            }
        }
    })
}
*/

/*
Item.of('some_assembly_required:sandwich').hasNBT().getNbtString().includes('id:"artifacts:eternal_steak"')
Item.of('some_assembly_required:sandwich', '{BlockEntityTag:{Sandwich:[{Count:1b,id:"some_assembly_required:bread_slice"},{Count:1b,id:"artifacts:eternal_steak"},{Count:1b,id:"some_assembly_required:bread_slice"}]}}')
PlayerEvents.inventoryChanged(event => {
    const { item, level, player } = event
    const { x, y, z } = player
    if (item.hasTag('create:sandpaper') && !player.persistentData.struckBySandpaper) {
        if (item.hasEnchantment('minecraft:mending', 1) || item.hasEnchantment('minecraft:unbreaking', 1)) {
            level.spawnLightning(x, y, z, false)
            player.tell(Text.darkRed("<shake>You are a lazy engineer.</shake>"))
            player.persistentData.struckBySandpaper = true
        }
    }
})

*/