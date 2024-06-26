// requires: littlelogistics
// requires: littlecontraptions
// requires: kubejs_create

/**
 * @file Server handler for Little Logistics and Little Contraptions.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove([
    { id: 'littlelogistics:rapid_hopper' },
    { id: 'littlelogistics:fluid_hopper' },
    { id: 'littlelogistics:vessel_charger' },
    { id: 'littlelogistics:tug_route' },
    { id: 'littlelogistics:barge' },
    { id: 'littlelogistics:fluid_barge' },
    { id: 'littlelogistics:fishing_barge' },
    { id: 'littlelogistics:seater_barge' },
    { id: 'littlecontraptions:contraption_barge' },
    { id: 'littlelogistics:tug' },
    { id: 'littlelogistics:energy_tug' },
    { id: 'littlelogistics:locomotive_route' },
    { id: 'littlelogistics:seater_car' },
    { id: 'littlelogistics:chest_car' },
    { id: 'littlelogistics:fluid_car' },
    { id: 'littlelogistics:steam_locomotive' },
    { id: 'littlelogistics:energy_locomotive' },
    { id: 'littlelogistics:barge_dock' },
    { id: 'littlelogistics:tug_dock' }
  ])
  // rapid hopper
  event.shaped('littlelogistics:rapid_hopper', [
    'BHB',
    ' E '
  ], {
    B: 'create:brass_ingot',
    H: 'minecraft:hopper',
    E: 'create:electron_tube'
  }).id('finality:littlelogistics/shaped/rapid_hopper')
  // fluid hopper
  event.shaped('littlelogistics:fluid_hopper', [
    'FHF',
    ' S '
  ], {
    F: 'create:fluid_tank',
    H: 'minecraft:hopper',
    S: 'create:spout'
  }).id('finality:littlelogistics/shaped/fluid_hopper')
  // vessel charger
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
  event.shapeless('littlelogistics:tug_route', [
    'create:linked_controller',
    'create:copper_nugget',
    'minecraft:kelp'
  ]).id('finality:littlelogistics/shapeless/tug_route')
  // chest barge
  event.shaped('littlelogistics:barge', [
    'SCS',
    'DDD'
  ], {
    S: 'minecraft:stick',
    C: '#forge:chests/wooden',
    D: 'create:industrial_iron_block'
  }).id('finality:littlelogistics/shaped/barge')
  // fluid barge
  event.shaped('littlelogistics:fluid_barge', [
    ' F ',
    'DDD'
  ], {
    F: 'create:fluid_tank',
    D: 'create:industrial_iron_block'
  }).id('finality:littlelogistics/shaped/fluid_barge')
  // fishing barge
  event.shaped('littlelogistics:fishing_barge', [
    'F F',
    'III'
  ], {
    F: 'minecraft:fishing_rod',
    I: 'create:industrial_iron_block'
  }).id('finality:littlelogistics/shaped/fishing_barge')
  // seater barge
  event.shaped('littlelogistics:seater_barge', [
    'GSG',
    'DDD'
  ], {
    G: '#minecraft:signs',
    S: '#create:seats',
    D: 'create:industrial_iron_block'
  }).id('finality:littlelogistics/shaped/seater_barge')
  // contraption barge
  event.shaped('littlecontraptions:contraption_barge', [
    'BAB',
    'DDD'
  ], {
    B: 'create:brass_ingot',
    A: 'create:andesite_alloy',
    D: 'create:industrial_iron_block'
  }).id('finality:littlecontraptions/shaped/contraption_barge')
  // tug (steam tug in-game)
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
  event.shapeless('littlelogistics:locomotive_route', [
    'create:linked_controller',
    'create:industrial_iron_block',
    'minecraft:iron_nugget'
  ]).id('finality:littlelogistics/shapeless/locomotive_route')
  // train car
  event.shaped('littlelogistics:seater_car', [
    'DDD',
    'I I'
  ], {
    D: 'create:industrial_iron_block',
    I: 'minecraft:iron_ingot'
  }).id('finality:littlelogistics/shaped/seater_car')
  // chest car
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

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'littlelogistics:rapid_hopper',
    'littlelogistics:fluid_hopper',
    'littlelogistics:tug_dock',
    'littlelogistics:barge_dock',
    'littlelogistics:guide_rail_corner',
    'littlelogistics:vessel_detector',
    'littlelogistics:guide_rail_tug'
  ])
})