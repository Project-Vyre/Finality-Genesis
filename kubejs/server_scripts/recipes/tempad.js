// requires: tempad
// requires: create
// requires: extendedcrafting

ServerEvents.recipes(event => {
    event.remove({id: 'tempad:tempad'})
    event.shaped('tempad:tempad', [
        'QQQ',
        'RTB',
        'QQQ'
    ], {
        Q: 'minecraft:quartz_block',
        R: 'create:rose_quartz_lamp',
        T: 'minecraft:tinted_glass',
        B: 'minecraft:beacon'
    }).id('finality:tempad')
})