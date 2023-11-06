// requires: bhc
// requires: kubejs_create
// requires: supplementaries

/**
 * @file Server handler for Baubley Heart Canisters.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.remove({ id: 'bhc:god_apple' })
    event.shaped('bhc:canister', [
        ' I ',
        'ICI',
        ' I '
    ], {
        I: 'create:iron_sheet',
        C: 'minecraft:soul_sand'
    }).id('bhc:canister')
    event.shaped('bhc:relic_apple', [
        ' D ',
        'EAE',
        ' D '
    ], {
        D: 'minecraft:diamond',
        E: 'minecraft:emerald',
        A: 'minecraft:golden_apple'
    }).id('bhc:relic_apple')
    event.shapeless('bhc:relic_apple', [
        '2x minecraft:diamond',
        '2x minecraft:emerald',
        'minecraft:golden_apple'
    ]).id('finality:relic_apple_shapeless_mixing')
    event.recipes.create.haunting([
        Item.of('bhc:wither_bone').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.25),
        Item.of('supplementaries:ash').withChance(0.25)
    ], 'minecraft:bone').id('finality:bhc/haunting/wither_bone')
    event.shapeless('bhc:red_heart_canister', [
        'bhc:red_heart',
        '#forge:wither_bones',
        'bhc:relic_apple',
        'bhc:canister'
    ]).id('bhc:red_heart_canister')
})