// priority: 0

StartupEvents.registry('fluid', event => {
    event.create('kubejs:mushroom_stew')
        .thinTexture(0xCA9777)
        .bucketColor(0xCA9777)

    if (Platform.isLoaded('caupona')) {
        event.create('kubejs:walnut_oil')
            .thinTexture(0x98630B)
            .bucketColor(0x98630B)
        event.create('kubejs:fig_vinegar')
            .thinTexture(0x2F0700)
            .bucketColor(0x2F0700)
    }

    if (Platform.isLoaded('grimoireofgaia')) {
        event.create('kubejs:nether_wart_jam')
            .thinTexture(0x5C151A)
            .bucketColor(0x5C151A)
    }
})