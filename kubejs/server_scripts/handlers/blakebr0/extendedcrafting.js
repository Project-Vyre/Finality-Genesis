/**
 * @file Server handler for Extended Crafting.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author tizu69 <https://github.com/tizu69> Wrote ExtendedCrafting table JSON auto-gen functions
 */

// priority: 5
// requires: extendedcrafting
// requires: create

ServerEvents.recipes(event => {
  event.remove([
    { id: 'extendedcrafting:ultimate_singularity' },
    { id: 'extendedcrafting:compressor' }
  ])
  event.shapeless('extendedcrafting:black_iron_ingot', [
    'minecraft:iron_ingot',
    'minecraft:black_dye',
    'create:powdered_obsidian'
  ]).id('extendedcrafting:black_iron_ingot')
  event.shaped('extendedcrafting:black_iron_slate', [
    'BB'
  ], {
    B: 'extendedcrafting:black_iron_ingot'
  }).id('extendedcrafting:black_iron_slate')
  event.shaped('kubejs:denied_result', [
    'CAC',
    'MIM',
    'CSC'
  ], {
    C: 'extendedcrafting:basic_component',
    A: 'extendedcrafting:basic_catalyst',
    M: 'minecraft:crafting_table',
    I: 'minecraft:iron_block',
    S: 'extendedcrafting:black_iron_slate'
  }).id('extendedcrafting:basic_table')
  event.recipes.create.mechanical_crafting('extendedcrafting:basic_table', [
    'CAAAC',
    'SMMMS',
    ' S S ',
    ' S S ',
    'SCCCS'
  ], {
    C: 'extendedcrafting:basic_component',
    A: 'extendedcrafting:basic_catalyst',
    M: 'create:mechanical_crafter',
    S: 'extendedcrafting:black_iron_slate'
  }).id('finality:mechanical_crafting/basic_table')

  let material_crystaltine_pattern = [
    'DLLLLLD',
    'DAFNFAD',
    'DAFNFAD',
    'DLLLLLD'
  ]
  event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:crystaltine_ingot', material_crystaltine_pattern, {
    L: 'minecraft:lapis_lazuli',
    D: 'minecraft:diamond',
    A: 'minecraft:iron_ingot',
    N: 'minecraft:nether_star',
    F: 'minecraft:gold_ingot'
  }).id('extendedcrafting:crystaltine_ingot')
  event.recipes.create.mechanical_crafting('4x extendedcrafting:crystaltine_ingot', material_crystaltine_pattern, {
    L: 'minecraft:lapis_lazuli',
    D: 'minecraft:diamond',
    A: 'minecraft:iron_ingot',
    N: 'minecraft:nether_star',
    F: 'minecraft:gold_ingot'
  }).id('finality:mechanical_crafting/crystaltine_ingot')

  let radiant_crystaltine_pattern = [
    'RRRRRRR',
    'RRNRNRR',
    'RNRNRNR',
    'RRNRNRR',
    'RRRRRRR'
  ]
  event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:crystaltine_ingot', radiant_crystaltine_pattern, {
    R: 'create:refined_radiance',
    N: 'minecraft:nether_star'
  }).id('finality:extendedcrafting/crystaltine_ingot_alt')
  event.recipes.create.mechanical_crafting('4x extendedcrafting:crystaltine_ingot', radiant_crystaltine_pattern, {
    R: 'create:refined_radiance',
    N: 'minecraft:nether_star'
  }).id('finality:mechanical_crafting/crystaltine_ingot_alt')

  event.recipes.create.crushing([
    '3x extendedcrafting:the_ultimate_nugget',
    Item.of('extendedcrafting:the_ultimate_nugget', 3).withChance(0.25),
    Item.of('extendedcrafting:ultimate_singularity').withChance(0.75)
  ], 'extendedcrafting:ultimate_singularity').processingTime(500).id('finality:the_ultimate_nugget')

  event.recipes.extendedcrafting.shaped_table('extendedcrafting:compressor', [
    'IOOOI',
    'AQQQA',
    'AQFQA',
    'AQQQA',
    'ILLLI'
  ], {
    I: 'extendedcrafting:black_iron_ingot',
    O: 'extendedcrafting:elite_component',
    A: 'extendedcrafting:elite_catalyst',
    Q: 'kubejs:qubit',
    F: 'extendedcrafting:frame',
    L: 'extendedcrafting:black_iron_slate'
  }).id('finality:extendedcrafting/compressor')

  event.recipes.create.mixing('extendedcrafting:ender_star', [
    'minecraft:nether_star',
    '4x minecraft:ender_eye'
  ]).heated().id('finality:ender_star_mixing')

  event.recipes.create.deploying([
    'extendedcrafting:nether_star_block',
    '18x minecraft:nether_star'
  ], [
    'extendedcrafting:nether_star_block',
    'kubejs:final_pickaxe'
  ]).keepHeldItem().id('finality:nether_star_duplication')

  // modified vanilla recipes
  event.shapeless('4x minecraft:end_crystal', [
    '4x #forge:glass/colorless',
    'extendedcrafting:ender_star',
    'minecraft:ghast_tear',
    'minecraft:fermented_spider_eye'
  ]).id('finality:extended_end_crystal')

  // ender crafting
  event.shaped('extendedcrafting:ender_crafter', [
    'EEE',
    'ICI',
    'III'
  ], {
    E: 'minecraft:ender_eye',
    I: 'extendedcrafting:ender_ingot',
    C: 'extendedcrafting:crafting_core'
  }).id('extendedcrafting:ender_crafter')

/*
  event.recipes.create.mechanical_crafting('kubejs:command_block', [
    'IIGIIGII',
    'IIQPPQII',
    'GQCRRCQG',
    'IPRUURPI',
    'IPRUURPI',
    'GQCRRCQG',
    'IIQPPQII',
    'IIGIIGII'
  ], {
    I: 'kubejs:high_entropy_alloy',
    G: '#forge:glass/colorless',
    R: 'extendedcrafting:redstone_catalyst',
    U: 'extendedcrafting:the_ultimate_catalyst',
    C: 'extendedcrafting:crystaltine_catalyst',
    Q: 'create:rose_quartz_lamp',
    P: 'create:pulse_repeater'
  }).id('finality:mechanical_crafting/command_block')

  event.recipes.create.mechanical_crafting('kubejs:chain_command_block', [
    'IIGIIGII',
    'IIQPPQII',
    'GQCRRCQG',
    'IPRUURPI',
    'IPRUURPI',
    'GQCRRCQG',
    'IIQPPQII',
    'IIGIIGII'
  ], {
    I: 'kubejs:high_entropy_alloy',
    G: '#forge:glass/colorless',
    R: 'extendedcrafting:redstone_catalyst',
    U: 'extendedcrafting:the_ultimate_catalyst',
    C: 'extendedcrafting:crystaltine_catalyst',
    Q: 'create:rose_quartz_lamp',
    P: 'create:sequenced_gearshift'
  }).id('finality:mechanical_crafting/chain_command_block')

  event.recipes.create.mechanical_crafting('kubejs:repeating_command_block', [
    'IIGIIGII',
    'IIQPPQII',
    'GQCRRCQG',
    'IPRUURPI',
    'IPRUURPI',
    'GQCRRCQG',
    'IIQPPQII',
    'IIGIIGII'
  ], {
    I: 'kubejs:high_entropy_alloy',
    G: '#forge:glass/colorless',
    R: 'extendedcrafting:redstone_catalyst',
    U: 'extendedcrafting:the_ultimate_catalyst',
    C: 'extendedcrafting:crystaltine_catalyst',
    Q: 'create:rose_quartz_lamp',
    P: 'create:powered_toggle_latch'
  }).id('finality:mechanical_crafting/repeating_command_block')
*/
  event.recipes.create.mixing('kubejs:high_entropy_alloy_nugget', [
    'kubejs:stable_entropy_particles',
    'extendedcrafting:the_ultimate_nugget'
  ]).id('finality:extendedcrafting/mixing/high_entropy_nugget')

  event.recipes.create.mixing('kubejs:high_entropy_alloy_block', [
    'kubejs:stable_entropy_particles',
    'extendedcrafting:the_ultimate_catalyst'
  ]).superheated().id('finality:extendedcrafting/mixing/high_entropy_block_from_catalyst')

  console.log('Forcibly applying Ultimate Singularity recipe. If it is missing again, please report this to the GitHub Issue tracker, thank you.')

  event.recipes.extendedcrafting.shapeless_table('extendedcrafting:ultimate_singularity', [
    'kubejs:concrete_red_singularity',
    'kubejs:concrete_green_singularity',
    'kubejs:concrete_blue_singularity',
    'kubejs:concrete_white_singularity',
    'kubejs:concrete_cyan_singularity',
    'kubejs:concrete_yellow_singularity',
    'kubejs:concrete_magenta_singularity',
    'kubejs:concrete_black_singularity',
    'kubejs:concrete_pink_singularity',
    'kubejs:concrete_orange_singularity',
    'kubejs:concrete_gray_singularity',
    'kubejs:concrete_brown_singularity',
    'kubejs:concrete_light_gray_singularity',
    'kubejs:concrete_light_blue_singularity',
    'kubejs:concrete_lime_singularity',
    'kubejs:concrete_purple_singularity',
    'kubejs:lapis_singularity',
    'kubejs:gunpowder_singularity',
    'kubejs:builders_tea_singularity',
    'kubejs:redstone_singularity',
    'kubejs:ender_pearl_singularity',
    'kubejs:diamond_singularity',
    'kubejs:iron_singularity',
    'kubejs:tinted_glass_singularity',
    'kubejs:electron_tube_singularity',
    'kubejs:emerald_singularity',
    'kubejs:chocolate_singularity',
    'kubejs:sturdy_sheet_singularity',
    'kubejs:brass_singularity',
    'kubejs:andesite_alloy_singularity',
    'kubejs:copper_singularity',
    'kubejs:end_crystal_singularity',
    'kubejs:amethyst_singularity',
    'kubejs:coarse_dirt_singularity',
    'kubejs:blue_ice_singularity',
    'kubejs:coal_singularity',
    'kubejs:zinc_singularity',
    'kubejs:sea_lantern_singularity',
    'kubejs:honey_singularity',
    'kubejs:sand_singularity',
    'kubejs:precision_mechanism_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:rose_quartz_singularity',
    'kubejs:framed_glass_singularity',
    'kubejs:soul_sand_singularity',
    'kubejs:red_sand_singularity',
    'kubejs:soul_soil_singularity',
    'kubejs:netherite_singularity',
    'kubejs:track_singularity',
    'kubejs:cobblestone_singularity',
    'kubejs:quartz_singularity',
    'kubejs:gold_singularity',
    'kubejs:salt_singularity',
    'kubejs:potion_base_singularity',
    'kubejs:blaze_cake_singularity',
    'kubejs:bic_bit_singularity'
  ]).merge({ tier: 4 }).id('kubejs:cucumber_library_failure')
  event.recipes.create.mechanical_crafting('extendedcrafting:ultimate_singularity', [
    'ABCDEFGHI',
    'JKLMNOPQR',
    'STUVWXYZ1',
    '23456789!',
    '@#$%^&*()',
    '[]{}/~-=+',
    '<>       '
  ], {
    'A': 'kubejs:amethyst_singularity',
    'B': 'kubejs:blue_ice_singularity',
    'C': 'kubejs:coal_singularity',
    'D': 'kubejs:coarse_dirt_singularity',
    'E': 'kubejs:cobblestone_singularity',
    'F': 'kubejs:copper_singularity',
    'G': 'kubejs:diamond_singularity',
    'H': 'kubejs:emerald_singularity',
    'I': 'kubejs:end_crystal_singularity',
    'J': 'kubejs:ender_pearl_singularity',
    'K': 'kubejs:glowstone_singularity',
    'L': 'kubejs:gold_singularity',
    'M': 'kubejs:gunpowder_singularity',
    'N': 'kubejs:honey_singularity',
    'O': 'kubejs:iron_singularity',
    'P': 'kubejs:lapis_singularity',
    'Q': 'kubejs:netherite_singularity',
    'R': 'kubejs:quartz_singularity',
    'S': 'kubejs:red_sand_singularity',
    'T': 'kubejs:redstone_singularity',
    'U': 'kubejs:sand_singularity',
    'V': 'kubejs:sea_lantern_singularity',
    'W': 'kubejs:soul_sand_singularity',
    'X': 'kubejs:soul_soil_singularity',
    'Y': 'kubejs:tinted_glass_singularity',
    'Z': 'kubejs:potion_base_singularity',
    '1': 'kubejs:andesite_alloy_singularity',
    '2': 'kubejs:brass_singularity',
    '3': 'kubejs:builders_tea_singularity',
    '4': 'kubejs:chocolate_singularity',
    '5': 'kubejs:electron_tube_singularity',
    '6': 'kubejs:framed_glass_singularity',
    '7': 'kubejs:precision_mechanism_singularity',
    '8': 'kubejs:rose_quartz_singularity',
    '9': 'kubejs:sturdy_sheet_singularity',
    '!': 'kubejs:track_singularity',
    '@': 'kubejs:zinc_singularity',
    '#': 'kubejs:blaze_cake_singularity',
    '$': 'kubejs:salt_singularity',
    '%': 'kubejs:concrete_black_singularity',
    '^': 'kubejs:concrete_blue_singularity',
    '&': 'kubejs:concrete_brown_singularity',
    '*': 'kubejs:concrete_cyan_singularity',
    '(': 'kubejs:concrete_gray_singularity',
    ')': 'kubejs:concrete_green_singularity',
    '[': 'kubejs:concrete_light_blue_singularity',
    ']': 'kubejs:concrete_light_gray_singularity',
    '{': 'kubejs:concrete_lime_singularity',
    '}': 'kubejs:concrete_magenta_singularity',
    '/': 'kubejs:concrete_orange_singularity',
    '~': 'kubejs:concrete_pink_singularity',
    '-': 'kubejs:concrete_purple_singularity',
    '=': 'kubejs:concrete_red_singularity',
    '+': 'kubejs:concrete_white_singularity',
    '<': 'kubejs:concrete_yellow_singularity',
    '>': 'kubejs:bic_bit_singularity'
  }).id('finality:mechanical_crafting/ultimate_singularity_translate')
})

ServerEvents.tags('block', event => {
  let ext_tiers = [
    'basic',
    'advanced',
    'elite',
    'ultimate'
  ]
  for (let i = 0; i < ext_tiers.length; i++) {
    let tables = ext_tiers[i];
    event.add('create:wrench_pickup', [
      `extendedcrafting:${tables}_table`,
      `extendedcrafting:${tables}_auto_table`
    ])
  }
  event.add('create:wrench_pickup', [
    'extendedcrafting:frame',
    'extendedcrafting:pedestal',
    'extendedcrafting:compressor',
    'extendedcrafting:ender_alternator',
    'extendedcrafting:ender_crafter',
    'extendedcrafting:auto_ender_crafter',
    'extendedcrafting:flux_alternator',
    'extendedcrafting:flux_crafter',
    'extendedcrafting:auto_flux_crafter'
  ])
})

ServerEvents.loaded(event => {
  event.server.scheduleInTicks(1200, t => {
    event.server.tell([
      Component.of('-----------------------------------------------------\n').darkAqua(),
      Component.of('System: ').bold().green(),
      Component.of('This is a scheduled message that was delayed to let you know that the Ultimate Singularity recipe has been'),
      Component.of(' forcibly ').bold().red(),
      Component.of('applied.\n'),
      Component.of('\nIf it is ever '),
      Component.of('missing ').bold().red(),
      Component.of('again, please report this to the\n'),
      Component.of('[GitHub Issue tracker]')
        .bold().yellow()
        .hover('https://github.com/Project-Vyre/Finality-Genesis/issues')
        .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues'),
      Component.of(', thank you. - '),
      Component.of('CelestialAbyss').lightPurple(),
      Component.of('\n-----------------------------------------------------').darkAqua()
    ])
  })
})