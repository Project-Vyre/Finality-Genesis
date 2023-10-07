// requires: morejs

MoreJSEvents.villagerTrades(event => {

})

MoreJSEvents.wandererTrades(event => {
    event.removeTrades({
        firstItem: 'minecraft:emerald',
        secondItem: 'minecraft:air',
        outputItem: 'minecraft:beacon'
    })
    event.addTrade(2, [
        '32x minecraft:emerald',
        '3x minecraft:obsidian'
    ], 'minecraft:beacon')
    if (Platform.isLoaded('apotheosis')) {
        event.addTrade(1, [
            'minecraft:sculk',
            'minecraft:emerald'
        ], 'minecraft:warden_spawn_egg')
    }
})