// requires: backpacked
// planning on changing the recipes later.

ServerEvents.recipes(event => {
    event.shaped('backpacked:backpack', [
        'HHH',
        'SIS',
        'HHH'
    ], {
        H: 'minecraft:rabbit_hide',
        S: 'minecraft:string',
        I: 'minecraft:iron_ingot'
    }).id('backpacked:backpack')
    event.shaped('backpacked:backpack', [
        'LLL',
        'SIS',
        'LLL'
    ], {
        L: 'minecraft:leather',
        S: 'minecraft:string',
        I: 'minecraft:iron_ingot'
    }).id('finality:backpack_alt')
})