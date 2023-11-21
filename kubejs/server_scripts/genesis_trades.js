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
    if (Platform.isLoaded('cataclysm')) {
        event.addTrade(2, [
            'minecraft:emerald_block',
            'cataclysm:monstrous_eye'
        ], 'cataclysm:netherite_monstrosity_spawn_egg')
        event.addTrade(2, [
            'minecraft:emerald_block',
            'cataclysm:flame_eye'
        ], 'cataclysm:ignis_spawn_egg')
        event.addTrade(2, [
            'minecraft:emerald_block',
            'cataclysm:mech_eye'
        ], 'cataclysm:the_harbinger_spawn_egg')
        event.addTrade(2, [
            'minecraft:emerald_block',
            'cataclysm:void_eye'
        ], 'cataclysm:ender_guardian_spawn_egg')
        event.addTrade(2, [
            'minecraft:emerald_block',
            'cataclysm:abyss_eye'
        ], 'cataclysm:the_leviathan_spawn_egg')
        event.addTrade(2, [
            'minecraft:emerald_block',
            'minecraft:amethyst_block'
        ], 'cataclysm:amethyst_crab_spawn_egg')
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
    if (Platform.isLoaded('fruittrees')) {
        let fruittrees_saplings = [
            'cherry',
            'redlove',
            'mandarin',
            'lime',
            'citron',
            'pomelo',
            'orange',
            'lemon',
            'grapefruit',
            'apple'
        ]
        fruittrees_saplings.forEach(tree => {
            event.addTrade(1, [
                '8x minecraft:bread',
                'minecraft:emerald'
            ], `fruittrees:${tree}_sapling`)
        })
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