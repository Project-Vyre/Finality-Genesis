// requires: morejs

/**
 * Authors
 * 
 * @CelestialAbyss
 */

MoreJSEvents.villagerTrades(event => {
    event.addTrade('minecraft:weaponsmith', 1, [
        'minecraft:emerald',
        'create:raw_zinc'
    ], '2x create:zinc_ingot')
    event.addTrade('minecraft:weaponsmith', 1, [
        'minecraft:emerald',
        'minecraft:raw_copper'
    ], '2x minecraft:copper_ingot')
    event.addTrade('minecraft:farmer', 1, [
        'create:millstone',
        'minecraft:wheat_seeds'
    ], 'kubejs:lemon_seed')
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