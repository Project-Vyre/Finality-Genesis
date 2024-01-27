// requires: morejs

/**
 * @file Server handler for villager and wanderer trades.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

MoreJSEvents.villagerTrades(event => {
    event.addTrade('minecraft:weaponsmith', 2, [
        'minecraft:emerald',
        'create:raw_zinc'
    ], '2x create:zinc_ingot').maxUses(8)
    event.addTrade('minecraft:weaponsmith', 1, [
        'minecraft:emerald',
        'minecraft:raw_copper'
    ], '2x minecraft:copper_ingot').maxUses(8)
    event.addTrade('minecraft:farmer', 1, [
        'create:millstone',
        '16x minecraft:wheat_seeds'
    ], '8x kubejs:lemon_seed').maxUses(1)
    // coins
    event.addTrade('minecraft:weaponsmith', 2, [
        '3x minecraft:iron_block',
        '4x minecraft:iron_ingot'
    ], '2x kubejs:iron_coin').maxUses(1)
    event.addTrade('minecraft:weaponsmith', 3, [
        'minecraft:iron_sword'
    ], '8x kubejs:copper_coin')
    event.addTrade('minecraft:weaponsmith', 2, [
        '4x create:brass_ingot'
    ], '32x kubejs:copper_coin').maxUses(2)
    event.addTrade('minecraft:farmer', 1, [
        '32x kubejs:copper_coin'
    ], '8x kubejs:lemon_seed').maxUses(1)
    event.addTrade('minecraft:fisherman', 2, [
        'minecraft:pufferfish'
    ], '1x kubejs:iron_coin').maxUses(1)
    //coinTrade(event)
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
    event.addTrade(1, [
        '32x minecraft:emerald',
        '1x minecraft:respawn_anchor'
    ], '8x minecraft:chorus_fruit')
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
        for (let i = 0; i < fruittrees_saplings.length; i++) {
            let tree = fruittrees_saplings[i];
            event.addTrade(1, [
                '8x minecraft:bread',
                'minecraft:emerald'
            ], `fruittrees:${tree}_sapling`)
        }
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

/*
COINS CONVERSION RATE

64x Copper Coins = 1x Iron Coin
64x Iron Coins = 1x Gold Coin
64x Gold Coins = 1x Netherite Coin
64x Netherite Coins = 1x Entropy Coin
*/

//let trade_dice = 0

/**
 * Anti coin farming prevention.
 * @param {event} event 
 */
/*
function coinTrade(event) {
    trade_dice = Utils.random.nextInt(0, 21)
    switch (trade_dice) {
        case 0:
            event.addTrade('minecraft:weaponsmith', 2, [
                '4x create:brass_ingot'
            ], '32x kubejs:copper_coin').maxUses(2)
            event.addTrade('minecraft:farmer', 1, [
                '32x kubejs:copper_coin',
                'minecraft:wheat_seeds'
            ], 'create:millstone')
            break;
        case 1:
            event.addTrade('minecraft:fisherman', 1, )
            break;
        case 2:
            event.addTrade()
            break;
        case 3:
            event.addTrade()
            break;
        case 4:
            event.addTrade()
            break;
        case 5:
            event.addTrade()
            break;
        case 6:
            event.addTrade()
            break;
        case 7:
            event.addTrade()
            break;
        case 8:
            event.addTrade()
            break;
        case 9:
            event.addTrade()
            break;
        case 10:
            event.addTrade()
            break;
        case 11:
            event.addTrade()
            break;
        case 12:
            event.addTrade()
            break;
        case 13:
            event.addTrade()
            break;
        case 14:
            event.addTrade()
            break;
        case 15:
            event.addTrade()
            break;
        case 16:
            event.addTrade()
            break;
        case 17:
            event.addTrade()
            break;
        case 18:
            event.addTrade()
            break;
        case 19:
            event.addTrade()
            break;
        case 20:
            event.addTrade()
            break;
        default:
            event.addTrade()
            break;
    }
}
*/