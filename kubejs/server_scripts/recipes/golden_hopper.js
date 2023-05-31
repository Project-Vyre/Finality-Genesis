ServerEvents.recipes(event => {
    event.remove({id: 'goldenhopper:golden_hopper'})
    event.shaped('goldenhopper:golden_hopper', [
        'ACA',
        'AHA',
        'RAR'
    ], {
        A: 'create:golden_sheet',
        C: 'minecraft:comparator',
        H: 'minecraft:hopper',
        R: 'minecraft:redstone'
    }).id('finality:golden_hopper')
})