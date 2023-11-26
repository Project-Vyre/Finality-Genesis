// requires: cataclysm

/**
 * @file Server handler for Cataclysm.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
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