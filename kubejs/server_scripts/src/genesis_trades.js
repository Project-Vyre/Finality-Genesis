/**
 * @file Server handler for villager and wanderer trades.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: morejs
// requires: create

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
  event.addTrade('minecraft:librarian', 5, [
    'minecraft:end_crystal'
  ], 'kubejs:gold_coin').maxUses(16)
  if (Platform.isLoaded('supplementaries')) {
    event.addTrade('minecraft:cartographer', 5, [
      'kubejs:iron_coin',
      'minecraft:ink_sac'
    ], 'supplementaries:antique_ink')
  }
  if (Platform.isLoaded('tetra')) {
    event.addTrade('minecraft:weaponsmith', 5, [
      'kubejs:entropy_coin',
      '2x tetra:dragon_sinew'
    ], 'tetra:planar_stabilizer')
  }
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
  event.addTrade(1, [
    '2x kubejs:gold_coin',
    'create:precision_mechanism'
  ], 'kubejs:deepslate_iridium_ore').maxUses(9)
  event.addTrade(2, [
    '64x kubejs:netherite_coin',
    'kubejs:iridium_block'
  ], 'minecraft:sniffer_egg').maxUses(1)
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
  if (Platform.isLoaded('enigmaticlegacy') && Platform.isLoaded('ars_nouveau')) {
    event.addTrade(1, [
      'kubejs:gold_coin',
      'ars_nouveau:earth_essence'
    ], 'enigmaticlegacy:earth_heart').maxUses(1)
    event.addTrade(2, [
      '32x kubejs:gold_coin',
      'ars_nouveau:fire_essence'
    ], 'enigmaticlegacy:blazing_core').maxUses(1)
  } else if (Platform.isLoaded('enigmaticlegacy') && !Platform.isLoaded('ars_nouveau')) {
    event.addTrade(1, [
      'kubejs:gold_coin',
      'minecraft:grass_block'
    ], 'enigmaticlegacy:earth_heart').maxUses(1)
    event.addTrade(2, [
      '32x kubejs:gold_coin',
      'create:blaze_cake'
    ], 'enigmaticlegacy:blazing_core').maxUses(1)
  }
  if (Platform.isLoaded('enigmaticlegacy')) {
    event.addTrade(1, [
      'kubejs:copper_coin'
    ], 'enigmaticlegacy:recall_potion')
    event.addTrade(1, [
      '16x kubejs:gold_coin'
    ], 'enigmaticlegacy:mending_mixture').maxUses(16)
    event.addTrade(2, [
      '32x kubejs:gold_coin',
      'minecraft:clock'
    ], 'enigmaticlegacy:angel_blessing').maxUses(1)
    event.addTrade(2, [
      '16x kubejs:gold_coin',
      'minecraft:lightning_rod'
    ], 'enigmaticlegacy:ocean_stone').maxUses(1)
    event.addTrade(2, [
      '16x kubejs:gold_coin',
      'minecraft:obsidian'
    ], 'enigmaticlegacy:golem_heart').maxUses(1)
    event.addTrade(2, [
      'kubejs:entropy_coin',
      'minecraft:chorus_fruit'
    ], 'enigmaticlegacy:void_pearl').maxUses(1)
    event.addTrade(2, [
      'kubejs:gold_coin',
      'minecraft:crying_obsidian'
    ], 'enigmaticlegacy:void_stone').maxUses(1)
    event.addTrade(2, [
      'kubejs:entropy_coin',
      'minecraft:chorus_fruit'
    ], 'enigmaticlegacy:eye_of_nebula').maxUses(1)
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
    event.addTrade(1, [
      '8x minecraft:amethyst_shard',
      '4x kubejs:gold_coin'
    ], 'malum:block_of_cthonic_gold').maxUses(3)
  }
  if (Platform.isLoaded('quark')) {
    event.addTrade(1, [
      'minecraft:glowstone_dust',
      'minecraft:emerald'
    ], 'quark:glow_shroom')
  }
  if (Platform.isLoaded('tetra')) {
    event.addTrade(2, [
      'kubejs:entropy_coin',
      'tetra:dragon_sinew'
    ], 'tetra:planar_stabilizer')
    event.addTrade(2, [
      'kubejs:entropy_coin',
      'tetra:dragon_sinew'
    ], 'tetra:earthpiercer')
    event.addTrade(2, [
      'kubejs:entropy_coin',
      'tetra:dragon_sinew'
    ], 'tetra:stonecutter')
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