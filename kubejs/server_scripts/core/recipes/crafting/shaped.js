// priority: 0

ServerEvents.recipes(event => {
    event.shaped('minecraft:bucket', [
        'I I',
        ' I '
    ], {
        I: 'create:iron_sheet'
    }).id('finality:bucket')

    event.shaped('minecraft:clock', [
        ' G ',
        'GMG',
        ' G '
    ], {
        G: 'create:golden_sheet',
        M: 'create:precision_mechanism'
    }).id('finality:clock')

    event.shaped('minecraft:compass', [
        ' I ',
        'IRI',
        ' I '
    ], {
        I: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('finality:compass')

    event.shaped('minecraft:piston', [
        'WWW',
        'CEC',
        'CRC'
    ], {
        W: '#minecraft:planks',
        C: 'minecraft:cobblestone',
        E: 'create:piston_extension_pole',
        R: 'minecraft:redstone'
    }).id('finality:piston')

    event.shaped('minecraft:hopper', [
        'H',
        'C'
    ], {
        H: 'create:chute',
        C: '#forge:chests/wooden'
    }).id('finality:hopper')

    event.shaped('minecraft:trident', [
        'PPP',
        ' A ',
        ' A '
    ], {
        P: 'kubejs:trident_prong',
        A: 'kubejs:trident_pole'
    }).id('finality:trident')

    event.shaped('kubejs:trident_pole', [
        'S',
        'S'
    ], {
        S: 'minecraft:prismarine_shard'
    }).id('finality:trident_pole')

    event.shapeless('kubejs:trident_prong', [
        'minecraft:pointed_dripstone',
        'minecraft:prismarine_crystals'
    ]).id('finality:trident_prong')

    event.shaped('minecraft:saddle', [
        'LLL',
        'LSL'
    ], {
        L: 'minecraft:leather',
        S: 'minecraft:string'
    }).id('finality:saddle')

    event.shaped('minecraft:iron_horse_armor', [
        'I I',
        'III',
        'I I'
    ], {
        I: 'minecraft:iron_ingot'
    }).id('finality:iron_horse_armor')

    event.shaped('minecraft:golden_horse_armor', [
        'G G',
        'GGG',
        'G G'
    ], {
        G: 'minecraft:gold_ingot'
    }).id('finality:golden_horse_armor')

    event.shaped('minecraft:diamond_horse_armor', [
        'D D',
        'DDD',
        'D D'
    ], {
        D: 'minecraft:diamond'
    }).id('finality:diamond_horse_armor')

    event.shaped('minecraft:grindstone', [
        'SLS',
        'P P'
    ], {
        S: '#forge:rods/wooden',
        L: '#kubejs:slabs/stone',
        P: '#minecraft:planks'        
    }).id('minecraft:grindstone')
    // denied
    event.shapeless('kubejs:denied_result', [
        '4x minecraft:netherite_scrap',
        '4x minecraft:gold_ingot'
    ]).id('minecraft:netherite_ingot')
    event.shaped('kubejs:denied_result', [
        ' G ',
        'GMG',
        ' G '
    ], {
        G: 'minecraft:gold_ingot',
        M: 'minecraft:redstone'
    }).id('minecraft:clock')
    event.shaped('kubejs:denied_result', [
        ' I ',
        'IRI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    }).id('minecraft:compass')
    event.shaped('kubejs:denied_result', [
        'WWW',
        'CEC',
        'CRC'
    ], {
        W: '#minecraft:planks',
        C: 'minecraft:cobblestone',
        E: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    }).id('minecraft:piston')
    event.shaped('kubejs:denied_result', [
        'F F',
        'FCF',
        ' F '
    ], {
        F: 'minecraft:iron_ingot',
        C: '#forge:chests/wooden'
    }).id('minecraft:hopper')
    event.shaped('kubejs:denied_result', [
        'GGG',
        'GNG',
        'OOO'
    ], {
        G: 'minecraft:glass',
        N: 'minecraft:nether_star',
        O: 'minecraft:obsidian'
    }).id('minecraft:beacon')
})