// requires: bhc
// requires: create
// requires: supplementaries

ServerEvents.recipes(event => {
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
    ]).id('finality:shapeless_mixing_compat')
    event.recipes.create.haunting([
        Item.of('bhc:wither_bone').withChance(0.25),
        Item.of('minecraft:coal').withChance(0.25),
        Item.of('supplementaries:ash').withChance(0.25)
    ], 'minecraft:bone').id('finality:bhc/haunting/wither_bone')
})