// requires: mysticalagriculture
// requires: mysticalagradditions
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.remove([
        { id: 'mysticalagriculture:essence/minecraft/crimson_nylium' },
        { id: 'mysticalagriculture:essence/minecraft/warped_nylium' },
    ])
    event.shaped('8x minecraft:blackstone', [
        'NNN',
        'NSN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        S: 'mysticalagriculture:stone_essence'
    }).id('mysticalagriculture:essence/minecraft/blackstone')
    event.recipes.create.compacting('8x minecraft:blackstone', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:stone_essence'
    ]).id('finality:mysticalagriculture/compacting/blackstone')

    event.shaped('8x minecraft:basalt', [
        'NNN',
        'NIN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        I: 'mysticalagriculture:ice_essence'
    }).id('mysticalagriculture:essence/minecraft/basalt')
    event.recipes.create.compacting('8x minecraft:basalt', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:ice_essence'
    ]).id('finality:mysticalagriculture/compacting/basalt')
    event.shaped('8x minecraft:soul_sand', [
        'NNN',
        'NFN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/soul_sand')
    event.recipes.create.mixing('16x minecraft:soul_sand', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:fire_essence'
    ]).id('finality:mysticalagriculture/mixing/soul_sand')
    event.shaped('16x minecraft:soul_soil', [
        'NDN',
        'DED',
        'NDN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        D: 'minecraft:dirt',
        E: 'mysticalagriculture:earth_essence'
    }).id('mysticalagriculture:essence/minecraft/soul_soil')
    event.recipes.create.mixing('16x minecraft:soul_soil', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:earth_essence'
    ]).id('finality:mysticalagriculture/mixing/soul_soil')
    // NETHERRACK
    event.shaped('16x minecraft:netherrack', [
        'NNN',
        'NBN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        B: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}').weakNBT()
    }).id('finality:mysticalagriculture/crafting/netherrack')
    event.shaped('6x minecraft:crimson_nylium', [
        'NAN',
        'NAN',
        'NAN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        A: 'mysticalagriculture:nature_essence'
    }).id('finality:mysticalagriculture/crafting/crimson_nylium')
    event.shaped('6x minecraft:warped_nylium', [
        'NNN',
        'AAA',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        A: 'mysticalagriculture:nature_essence'
    }).id('finality:mysticalagriculture/crafting/warped_nylium')
    event.recipes.kubejs.shaped('2x minecraft:nether_wart', [
        'NAN',
        '   ',
        '   '
    ], {
        N: 'mysticalagriculture:nether_essence',
        A: 'mysticalagriculture:nature_essence'
    }).noMirror().noShrink().id('mysticalagriculture:essence/minecraft/nether_wart')
})