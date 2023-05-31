ServerEvents.recipes(event => {
    event.remove({id:'minecraft:bucket'})
    event.remove({id:'minecraft:clock'})
    event.remove({id:'minecraft:compass'})
    event.remove({id:'minecraft:hopper'})
    event.shaped('minecraft:bucket',[
        'F F',
        ' F '
    ],{
        F: 'create:iron_sheet'
    }).id('finality:bucket')
    event.shaped('minecraft:clock',[
        ' G ',
        'GMG',
        ' G '
    ],{
        G: 'create:golden_sheet',
        M: 'create:precision_mechanism'
    }).id('finality:mechanical_clock')
    event.shaped('minecraft:compass',[
        ' F ',
        'FRF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('finality:compass')
    event.shaped('minecraft:hopper',[
        'F F',
        'FCF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        C: '#forge:chests/wooden'
    }).id('finality:hopper')
})