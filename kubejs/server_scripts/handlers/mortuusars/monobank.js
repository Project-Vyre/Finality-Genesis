// requires: monobank
// requires: create

/**
 * @file Server handler for Monobank.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        'monobank:monobank'
    ]) 
})

ServerEvents.recipes(event => {
    event.shaped('kubejs:denied_result', [
        'RIR',
        'L I',
        'RIR'
    ], {
        R: 'minecraft:iron_block',
        I: 'minecraft:iron_ingot',
        L: 'monobank:replacement_lock'
    }).id('monobank:monobank')
    event.shaped('monobank:monobank', [
        'RUR',
        'L U',
        'RUR'
    ], {
        R: 'minecraft:iron_block',
        U: 'create:industrial_iron_block',
        L: 'monobank:replacement_lock'
    }).id('finality:monobank/shaped/monobank')
})