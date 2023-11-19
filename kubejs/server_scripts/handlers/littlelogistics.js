// requires: littlelogistics
// requires: littlecontraptions
// requires: kubejs_create

/**
 * @file Server handler for Little Logistics and Little Contraptions.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    // rapid hopper
    event.shaped('kubejs:denied_result', [
        'GHG',
        ' R '
    ], {
        G: 'minecraft:gold_ingot',
        H: 'minecraft:hopper',
        R: 'minecraft:redstone_block'
    }).id('littlelogistics:rapid_hopper')
    event.shaped('littlelogistics:rapid_hopper', [
        'BHB',
        ' E '
    ], {
        B: 'create:brass_ingot',
        H: 'minecraft:hopper',
        E: 'create:electron_tube'
    }).id('finality:littlelogistics/shaped/rapid_hopper')
    // fluid hopper
    event.shaped('kubejs:denied_result', [
        'GHG',
        ' G '
    ], {
        G: '#forge:glass/colorless',
        H: 'minecraft:hopper'
    }).id('littlelogistics:fluid_hopper')
    event.shaped('littlelogistics:fluid_hopper', [
        'FHF',
        ' S '
    ], {
        F: 'create:fluid_tank',
        H: 'minecraft:hopper',
        S: 'create:spout'
    }).id('finality:littlelogistics/shaped/fluid_hopper')
    // vessel charger
    event.shaped('kubejs:denied_result', [
        ' G ',
        ' I ',
        'RIR'
    ], {
        G: 'minecraft:gold_ingot',
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone_block'
    }).id('littlelogistics:vessel_charger')
    event.shaped('littlelogistics:vessel_charger', [
        ' I ',
        ' A ',
        'DAD'
    ], {
        I: 'minecraft:iron_ingot',
        A: 'createaddition:modular_accumulator',
        D: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/vessel_charger')
    // all little boat components
    // tug route
    event.shaped('kubejs:denied_result', [
        ' R ',
        'GWG',
        ' R '
    ], {
        R: 'minecraft:redstone',
        G: 'minecraft:iron_nugget',
        W: 'littlelogistics:transmitter_component'
    }).id('littlelogistics:tug_route')
    event.shapeless('littlelogistics:tug_route', [
        'create:linked_controller',
        'create:copper_nugget',
        'minecraft:kelp'
    ]).id('finality:littlelogistics/shapeless/tug_route')
    // chest barge
    event.shaped('kubejs:denied_result', [
        'SCS',
        'III'
    ], {
        S: 'minecraft:stick',
        C: 'minecraft:chest',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:barge')
    event.shaped('littlelogistics:barge', [
        'SCS',
        'DDD'
    ], {
        S: 'minecraft:stick',
        C: '#forge:chests/wooden',
        D: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/barge')
    // fluid barge
    event.shaped('kubejs:denied_result', [
        'G G',
        ' G ',
        'III'
    ], {
        G: '#forge:glass/colorless',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:fluid_barge')
    event.shaped('littlelogistics:fluid_barge', [
        ' F ',
        'DDD'
    ], {
        F: 'create:fluid_tank',
        D: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/fluid_barge')
    // fishing barge
    event.shaped('kubejs:denied_result', [
        'FFF',
        'III'
    ], {
        F: 'minecraft:fishing_rod',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:fishing_barge')
    event.shaped('littlelogistics:fishing_barge', [
        'F F',
        'III'
    ], {
        F: 'minecraft:fishing_rod',
        I: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/fishing_barge')
    // seater barge
    event.shaped('kubejs:denied_result', [
        'GSG',
        'III'
    ], {
        G: '#minecraft:signs',
        S: '#minecraft:wooden_stairs',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:seater_barge')
    event.shaped('littlelogistics:seater_barge', [
        'GSG',
        'DDD'
    ], {
        G: '#minecraft:signs',
        S: '#create:seats',
        D: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/seater_barge')
    // contraption barge
    event.shaped('kubejs:denied_result', [
        'BAB',
        'III'
    ], {
        B: 'create:brass_ingot',
        A: 'create:andesite_alloy',
        I: 'minecraft:iron_ingot'
    }).id('littlecontraptions:contraption_barge')
    event.shaped('littlecontraptions:contraption_barge', [
        'BAB',
        'DDD'
    ], {
        B: 'create:brass_ingot',
        A: 'create:andesite_alloy',
        D: 'create:industrial_iron_block'        
    }).id('finality:littlecontraptions/shaped/contraption_barge')
    // tug (steam tug in-game)
    event.shaped('kubejs:denied_result', [
        ' I ',
        'PFP',
        'III'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'minecraft:piston',
        F: 'minecraft:furnace',
    }).id('littlelogistics:tug')
    event.shaped('littlelogistics:tug', [
        '  W',
        'FBF',
        'III'
    ], {
        W: 'create:steam_whistle',
        F: 'create:fluid_tank',
        B: 'minecraft:blast_furnace',
        I: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/tug')
    // energy tug
    event.shaped('kubejs:denied_result', [
        ' I ',
        'PCP',
        'DDD'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'minecraft:piston',
        C: 'littlelogistics:vessel_charger',
        D: 'create:industrial_iron_block'
    }).id('littlelogistics:energy_tug')
    event.shaped('littlelogistics:energy_tug', [
        ' I ',
        'MAM',
        'III'
    ], {
        A: 'littlelogistics:vessel_charger',
        M: 'createaddition:electric_motor',
        I: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/energy_tug')
    // all little train components
    // locomotive route
    event.shaped('kubejs:denied_result', [
        ' G ',
        'RWR',
        ' G '
    ], {
        R: 'minecraft:redstone',
        G: 'minecraft:iron_nugget',
        W: 'littlelogistics:transmitter_component'
    }).id('littlelogistics:locomotive_route')
    event.shapeless('littlelogistics:locomotive_route', [
        'create:linked_controller',
        'create:industrial_iron_block',
        'minecraft:iron_nugget'
    ])
    // train car
    event.shaped('kubejs:denied_result', [
        'WWW',
        'I I'
    ], {
        W: '#minecraft:planks',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:seater_car')
    event.shaped('littlelogistics:seater_car', [
        'DDD',
        'I I'
    ], {
        D: 'create:industrial_iron_block',
        I: 'minecraft:iron_ingot'
    }).id('finality:littlelogistics/shaped/seater_car')
    // chest car
    event.shaped('kubejs:denied_result', [
        'H',
        'C'
    ], {
        H: 'minecraft:chest',
        C: 'littlelogistics:seater_car'
    }).id('littlelogistics:chest_car')
    event.shaped('littlelogistics:chest_car', [
        'H',
        'C'
    ], {
        H: '#forge:chests/wooden',
        C: 'littlelogistics:seater_car'
    }).id('finality:littlelogistics/shaped/chest_car')
    event.recipes.create.deploying('littlelogistics:chest_car', [
        'littlelogistics:seater_car',
        '#forge:chests/wooden'
    ]).id('finality:littlelogistics/deploying/chest_car')
    // fluid car
    event.shaped('kubejs:denied_result', [
        'G G',
        ' G ',
        ' S '
    ], {
        G: '#forge:glass/colorless',
        S: 'littlelogistics:seater_car'
    }).id('littlelogistics:fluid_car')
    event.shaped('littlelogistics:fluid_car', [
        'F',
        'S'
    ], {
        F: 'create:fluid_tank',
        S: 'littlelogistics:seater_car'
    }).id('finality:littlelogistics/shapeless/fluid_car')
    event.recipes.create.deploying('littlelogistics:fluid_car', [
        'littlelogistics:seater_car',
        'create:fluid_tank'
    ]).id('finality:littlelogistics/deploying/fluid_car')
    // steam locomotive
    event.shaped('kubejs:denied_result', [
        ' I ',
        'PFP',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'minecraft:piston',
        F: 'minecraft:furnace',
        S: 'littlelogistics:seater_car'
    }).id('littlelogistics:steam_locomotive')
    event.shaped('littlelogistics:steam_locomotive', [
        'W  ',
        'FFB',
        'DSD'
    ], {
        W: 'create:steam_whistle',
        F: 'create:fluid_tank',
        B: 'minecraft:blast_furnace',
        D: 'create:industrial_iron_block',
        S: 'littlelogistics:seater_car'
    }).id('finality:littlelogistics/shaped/steam_locomotive')
    // energy locomotive
    event.shaped('kubejs:denied_result', [
        ' I ',
        'PVP',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        P: 'minecraft:piston',
        V: 'littlelogistics:vessel_charger',
        S: 'littlelogistics:seater_car'
    }).id('littlelogistics:energy_locomotive')
    event.shaped('littlelogistics:energy_locomotive', [
        ' I ',
        'MAM',
        'DSD'
    ], {
        I: 'minecraft:iron_ingot',
        M: 'createaddition:electric_motor',
        A: 'littlelogistics:vessel_charger',
        D: 'create:industrial_iron_block',
        S: 'littlelogistics:seater_car'
    }).id('finality:littlelogistics/shaped/energy_locomotive')
    // blocks
    // barge dock
    event.shaped('2x kubejs:denied_result', [
        'SSS',
        'SVS',
        'III'
    ], {
        S: '#forge:stone',
        V: 'littlelogistics:spring',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:barge_dock')
    event.shaped('2x littlelogistics:barge_dock', [
        'SSS',
        'SVS',
        'III'
    ], {
        S: '#forge:stone',
        V: 'littlelogistics:spring',
        I: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/barge_dock')
    // tug dock
    event.shaped('2x kubejs:denied_result', [
        'SSS',
        'VSV',
        'III'
    ], {
        S: '#forge:stone',
        V: 'littlelogistics:spring',
        I: 'minecraft:iron_ingot'
    }).id('littlelogistics:tug_dock')
    event.shaped('2x littlelogistics:tug_dock', [
        'SSS',
        'VSV',
        'III'
    ], {
        S: '#forge:stone',
        V: 'littlelogistics:spring',
        I: 'create:industrial_iron_block'
    }).id('finality:littlelogistics/shaped/tug_dock')
})