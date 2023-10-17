// requires: cataclysm
// requires: create

/**
 * Authors
 * 
 * @CelestialAbyss
 */

ServerEvents.recipes(event => {
    event.shaped('cataclysm:athame', [
        ' P ',
        'GPG',
        ' R '
    ], {
        P: 'minecraft:prismarine_shard',
        G: 'minecraft:gold_ingot',
        R: 'minecraft:red_wool'
    }).id('finality:cataclysm/athame')
    event.shapeless('cataclysm:crystallized_coral_fragments', [
        'minecraft:amethyst_shard',
        'minecraft:stone',
        'minecraft:sea_pickle'
    ]).id('finality:cataclysm/crystallized_coral_fragments')
})

MoreJSEvents.wandererTrades(event => {
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
})