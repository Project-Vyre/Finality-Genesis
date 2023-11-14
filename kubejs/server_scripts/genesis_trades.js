// requires: morejs

/**
 * @file Server handler for villager and wanderer trades.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
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
    if (Platform.isLoaded('caupona')) {
        event.addTrade(1, [
            '8x minecraft:clay_ball',
            'minecraft:emerald'
        ], 'caupona:walnut_sapling')
        event.addTrade(1, [
            '8x minecraft:clay_ball',
            'minecraft:emerald'
        ], 'caupona:fig_sapling')
        event.addTrade(1, [
            '8x minecraft:clay_ball',
            'minecraft:emerald'
        ], 'caupona:wolfberry_sapling')
    }
    if (Platform.isLoaded('malum')) {
        event.addTrade(1, [
            'kubejs:deepslate_shard',
            'minecraft:emerald'
        ], 'malum:runewood_sapling')
    }
    if (Platform.isLoaded('quark')) {
        event.addTrade(1, [
            'minecraft:glowstone_dust',
            'minecraft:emerald'
        ], 'quark:glow_shroom')
    }
})