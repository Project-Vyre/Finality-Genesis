// requires: kubejs_create

let SAND = ['sand', 'red_sand']
let VANILLAMATS = ['amethyst', 'copper', 'iron', 'redstone', 'gold', 'diamond', 'emerald', 'quartz', 'netherite', 'honey']
let VANILLANOTSTANDARD = ['ender_pearl', 'gunpowder', 'sea_lantern', 'glowstone']
let CREATEITEMS = ['electron_tube', 'rose_quartz']
let CREATEVALUED = ['brass', 'zinc']

let RNG1 = 0
let RNG2 = 0
let RNG3 = 0
let RNG4 = 0
let RNG5 = 0
let RNG6 = 0
let enRI1 = [
  'kubejs:monochromatic_singularity',
  'kubejs:concrete_black_singularity',
  'kubejs:concrete_white_singularity'
]
let enRI2 = [
  'kubejs:watermelon_shape',
  'kubejs:green_circle',
  'kubejs:star_of_light_shape',
  'kubejs:green_circle_corner',
  'kubejs:red_circle_corner'
]
let enRI3 = [
  'kubejs:cpu_shape',
  'kubejs:green_rectangle',
  'kubejs:white_rectangle'
]
let enRI4 = [
  'kubejs:high_entropy_alloy_nugget',
  'kubejs:iridium_nugget',
  'kubejs:netherite_nugget'
]
let enRI5 = [
  'kubejs:blueprint_shape',
  'kubejs:blue_circle',
  'kubejs:white_circle',
  'kubejs:blue_rectangle_corner'
]
let enRI6 = [
  'kubejs:emitter_shape',
  'kubejs:magenta_rectangle_corner',
  'kubejs:magenta_right_half_rectangle',
  'kubejs:magenta_left_half_rectangle'
]
RNG1 = Utils.random.nextInt(0, enRI1.length - 1)
RNG2 = Utils.random.nextInt(0, enRI2.length - 1)
RNG3 = Utils.random.nextInt(0, enRI3.length - 1)
RNG4 = Utils.random.nextInt(0, enRI4.length - 1)
RNG5 = Utils.random.nextInt(0, enRI5.length - 1)
RNG6 = Utils.random.nextInt(0, enRI6.length - 1)

/*
Usage:
enRI1[RNG1]
enRI2[RNG2]
enRI3[RNG3]
enRI4[RNG4]
enRI5[RNG5]
enRI6[RNG6]
*/

ServerEvents.recipes(event => {
  // singularity creation step 1
  event.recipes.create.mechanical_crafting('kubejs:dormant_singularity_core', [
    ' OOOOO ',
    'OOOOOOO',
    'OOOOOOO',
    'OOOOOOO',
    'OOOOOOO',
    'OOOOOOO',
    ' OOOOO '
  ], {
    O: 'minecraft:obsidian'
  }).id('kubejs:mechanical_crafting/dormant_singularity_core')

  // singularity step 2
  event.recipes.create.compacting([
    Fluid.of('kubejs:condensed_universal_entropy', 250),
    Item.of('create:experience_nugget').withChance(0.25)
  ], [
    '5x minecraft:crying_obsidian'
  ]).id('kubejs:compacting/condensing_universe_essence')

  event.recipes.create.compacting([
    Fluid.of('kubejs:condensed_universal_entropy'),
    Item.of('create:experience_nugget').withChance(0.25)
  ], [
    'minecraft:crying_obsidian'
  ]).superheated().id('kubejs:compacting/condensing_universe_essence_superheated')

  event.recipes.create.emptying(
    Fluid.of('kubejs:condensed_universal_entropy', 50),
    'minecraft:crying_obsidian'
  ).id('kubejs:emptying/cue_from_crying_obsidian')

  event.recipes.create.filling('kubejs:awakened_singularity_core', [
    'kubejs:dormant_singularity_core',
    Fluid.of('kubejs:condensed_universal_entropy', 1000)
  ]).id('kubejs:filling/singularity_core_awakening')

  // singularity step 3 (new method)
  event.recipes.create.sequenced_assembly([
    'kubejs:andesite_alloy_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity', 'create:andesite_alloy_block']),
    event.recipes.create.pressing(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity'])
  ]).transitionalItem('kubejs:incomplete_andesite_alloy_singularity').loops(9).id('kubejs:sequenced_assembly/andesite_alloy_singularity')
  for (let i = 0; i < CREATEVALUED.length; i++) {
    let valued = CREATEVALUED[i];
    event.recipes.create.sequenced_assembly([
      'kubejs:' + valued + '_singularity'
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`, `create:${valued}_block`]),
      event.recipes.create.pressing([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`])
    ]).transitionalItem(`kubejs:incomplete_${valued}_singularity`).loops(9).id(`kubejs:sequenced_assembly/${valued}_singularity`)
  }
  event.recipes.create.sequenced_assembly([
    'kubejs:track_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity', 'create:track']),
    event.recipes.create.pressing(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity'])
  ]).transitionalItem('kubejs:incomplete_track_singularity').loops(9).id('kubejs:sequenced_assembly/track_singularity')

  // sequenced assembly singularities
  event.recipes.create.sequenced_assembly([
    'kubejs:blue_ice_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', 'minecraft:blue_ice']),
    event.recipes.create.filling(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', Fluid.of('minecraft:water', 25)]),
    event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
    event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
    event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity'])
  ]).transitionalItem('kubejs:incomplete_blue_ice_singularity').loops(9).id('kubejs:sequenced_assembly/blue_ice_singularity')
  event.recipes.create.emptying([
    Fluid.of('kubejs:condensed_universal_order', 500),
    'kubejs:awakened_singularity_core'
  ], 'kubejs:blue_ice_singularity').id('kubejs:emptying/condensed_universal_order')

  event.recipes.create.sequenced_assembly([
    'kubejs:coarse_dirt_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', 'minecraft:coarse_dirt']),
    event.recipes.create.filling('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', Fluid.of('minecraft:water', 25)]),
    event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity')
  ]).transitionalItem('kubejs:incomplete_coarse_dirt_singularity').loops(9).id('kubejs:sequenced_assembly/coarse_dirt_singularity')

  for (let i = 0; i < SAND.length; i++) {
    let insert = SAND[i];
    event.recipes.create.sequenced_assembly([
      'kubejs:' + insert + '_singularity'
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying(`kubejs:incomplete_${insert}_singularity`, [`kubejs:incomplete_${insert}_singularity`, `minecraft:${insert}`]),
      event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_${insert}_singularity`).loops(9).id(`kubejs:sequenced_assembly/${insert}_singularity`)
  }

  event.recipes.create.sequenced_assembly([
    'kubejs:soul_sand_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:soul_sand']),
    event.recipes.create.deploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:flint_and_steel']),
    event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
  ]).transitionalItem('kubejs:incomplete_soul_sand_singularity').loops(9).id('kubejs:sequenced_assembly/soul_sand_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:soul_soil_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_soul_soil_singularity', ['kubejs:incomplete_soul_soil_singularity', 'minecraft:soul_soil']),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
  ]).transitionalItem('kubejs:incomplete_soul_soil_singularity').loops(9).id('kubejs:sequenced_assembly/soul_soil_singularity')

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:cobblestone_singularity').withChance(0.50),
    Item.of('minecraft:cobblestone').withChance(0.25),
    Item.of('minecraft:stone').withChance(0.25)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', 'minecraft:cobblestone']),
    event.recipes.create.filling('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', Fluid.of('minecraft:lava', 25)]),
    event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity')
  ]).transitionalItem('kubejs:incomplete_cobblestone_singularity').loops(9).id('kubejs:sequenced_assembly/cobblestone_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:framed_glass_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
    event.recipes.create.filling('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', Fluid.of('minecraft:lava', 25)]),
    event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
    event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity')
  ]).transitionalItem('kubejs:incomplete_framed_glass_singularity').loops(4).id('kubejs:sequenced_assembly/framed_glass_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:tinted_glass_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
    event.recipes.create.filling('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', Fluid.of('minecraft:lava', 250)]),
    event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
    event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity')
  ]).transitionalItem('kubejs:incomplete_tinted_glass_singularity').loops(4).id('kubejs:sequenced_assembly/tinted_glass_singularity')

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:precision_mechanism_singularity').withChance(75.0),
    Item.of('create:crushed_raw_gold', 16).withChance(25.0),
    Item.of('create:cogwheel', 32).withChance(25.0),
    Item.of('create:large_cogwheel', 8).withChance(25.0),
    '32x create:precision_mechanism'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:precision_mechanism']),
    event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:cogwheel']),
    event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:large_cogwheel']),
    event.recipes.create.pressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity')
  ]).transitionalItem('kubejs:incomplete_precision_mechanism_singularity').loops(5).id('kubejs:sequenced_assembly/precision_mechanism_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:sturdy_sheet_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
    event.recipes.create.filling('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', Fluid.of('minecraft:lava', 25)]),
    event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
    event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity')
  ]).transitionalItem('kubejs:incomplete_sturdy_sheet_singularity').loops(4).id('kubejs:sequenced_assembly/sturdy_sheet_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:builders_tea_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity')
  ]).transitionalItem('kubejs:incomplete_builders_tea_singularity').loops(4).id('kubejs:sequenced_assembly/builders_tea_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:chocolate_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.filling('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', Fluid.of('create:chocolate', 250)]),
    event.recipes.create.pressing('kubejs:incomplete_chocolate_singularity', 'kubejs:incomplete_chocolate_singularity')
  ]).transitionalItem('kubejs:incomplete_chocolate_singularity').loops(4).id('kubejs:sequenced_assembly/chocolate_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:end_crystal_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_end_crystal_singularity', ['kubejs:incomplete_end_crystal_singularity', 'minecraft:end_crystal']),
    event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity')
  ]).transitionalItem('kubejs:incomplete_end_crystal_singularity').loops(9).id('kubejs:sequenced_assembly/end_crystal_singularity')

  // concrete singularities
  for (let i = 0; i < COLOR.length; i++) {
    let color = COLOR[i];
    event.recipes.create.sequenced_assembly([
      'kubejs:concrete_' + color + '_singularity'
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
      event.recipes.create.filling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(9).id(`kubejs:sequenced_assembly/${color}_concrete_singularity`)
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:concrete_' + color + '_singularity').withChance(0.75),
      Item.of('minecraft:' + color + '_concrete_powder', 9).withChance(0.25)
    ], `minecraft:${color}_concrete`, [
      event.recipes.create.deploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
      event.recipes.create.filling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(9).id(`kubejs:sequenced_assembly/${color}_concrete_singularity_from_compression`)
  }

  event.recipes.create.mechanical_crafting('kubejs:chromatic_concrete_singularity', [
    'RGBW',
    'PLSH',
    'NOUA',
    'CYMK'
  ], {
    R: 'kubejs:concrete_red_singularity',
    G: 'kubejs:concrete_green_singularity',
    B: 'kubejs:concrete_blue_singularity',
    W: 'kubejs:concrete_white_singularity',
    P: 'kubejs:concrete_pink_singularity',
    L: 'kubejs:concrete_lime_singularity',
    S: 'kubejs:concrete_light_blue_singularity',
    H: 'kubejs:concrete_light_gray_singularity',
    N: 'kubejs:concrete_brown_singularity',
    O: 'kubejs:concrete_orange_singularity',
    U: 'kubejs:concrete_purple_singularity',
    A: 'kubejs:concrete_gray_singularity',
    C: 'kubejs:concrete_cyan_singularity',
    Y: 'kubejs:concrete_yellow_singularity',
    M: 'kubejs:concrete_magenta_singularity',
    K: 'kubejs:concrete_black_singularity'
  }).id('kubejs:mechanical_crafting/chromatic_concrete_singularity')
  event.recipes.create.mixing('kubejs:monochromatic_singularity', [
    'create:shadow_steel',
    'create:refined_radiance',
    'kubejs:awakened_singularity_core'
  ]).id('kubejs:mixing/monochromatic_singularity')
  event.recipes.create.crushing([
    '16x kubejs:null_matter',
    'kubejs:monochromatic_singularity'
  ], 'kubejs:monochromatic_singularity').processingTime(500).id('kubejs:crushing/monochromatic_singularity')
  event.recipes.create.crushing([
    Item.of('kubejs:null_matter').withChance(0.12),
    Item.of('kubejs:null_matter', 2).withChance(0.01)
  ], 'create:crushing_wheel').processingTime(500).id('kubejs:crushing/divide_crushing_by_crushing_equals_null')
  // will balance in the future...
  event.recipes.minecraft.crafting_shaped('kubejs:high_entropy_alloy_nugget', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: 'kubejs:stable_entropy_particles'
  }).id('kubejs:high_entropy_alloy_nugget_from_stable_entropy_particles')
  /*
  event.recipes.create.mixing('kubejs:high_entropy_alloy_nugget', [
    '4x kubejs:stable_entropy_particles',
    'kubejs:chromatic_concrete_singularity',
    'kubejs:null_matter',
    'kubejs:metallurgy_mechanism',
    '4x create:chromatic_compound',
    'kubejs:iridium_nugget'
  ]).id('kubejs:mixing/high_entropy_alloy_nugget_from_chromatic')
  */
  // mechanical crafting singularities
  event.recipes.create.mechanical_crafting('18x kubejs:coal_singularity', [
    ' CCCCCCC ',
    'CCCCCCCCC',
    'CCCCCCCCC',
    'CCCCCCCCC',
    'CCCCOCCCC',
    'CCCCCCCCC',
    'CCCCCCCCC',
    'CCCCCCCCC',
    ' CCCCCCC '
  ], {
    C: 'minecraft:coal_block',
    O: 'kubejs:awakened_singularity_core'
  }).id('kubejs:mechanical_crafting/coal_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:coal_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:coal_block').withChance(0.10),
    'minecraft:coal_ore',
    'minecraft:deepslate_coal_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_coal_singularity', ['kubejs:incomplete_coal_singularity', 'minecraft:coal_block']),
    event.recipes.create.pressing('kubejs:incomplete_coal_singularity', 'kubejs:incomplete_coal_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coal_singularity', 'kubejs:incomplete_coal_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coal_singularity', 'kubejs:incomplete_coal_singularity')
  ]).transitionalItem('kubejs:incomplete_coal_singularity').loops(9).id('kubejs:sequenced_assembly/coal_singularity')

  event.recipes.create.mechanical_crafting('18x kubejs:lapis_singularity', [
    ' OOOOOOO ',
    'OOOOOOOOO',
    'OOOOOOOOO',
    'OOOOOOOOO',
    'OOOOCOOOO',
    'OOOOOOOOO',
    'OOOOOOOOO',
    'OOOOOOOOO',
    ' OOOOOOO '
  ], {
    C: 'kubejs:awakened_singularity_core',
    O: 'minecraft:lapis_block'
  }).id('kubejs:mechanical_crafting/lapis_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:lapis_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:lapis_block').withChance(0.10),
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_lapis_singularity', ['kubejs:incomplete_lapis_singularity', 'minecraft:lapis_block']),
    event.recipes.create.pressing('kubejs:incomplete_lapis_singularity', 'kubejs:incomplete_lapis_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_lapis_singularity', 'kubejs:incomplete_lapis_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_lapis_singularity', 'kubejs:incomplete_lapis_singularity')
  ]).transitionalItem('kubejs:incomplete_lapis_singularity').loops(9).id('kubejs:sequenced_assembly/lapis_singularity')

  for (let i = 0; i < VANILLAMATS.length; i++) {
    let vanilla = VANILLAMATS[i];
    event.recipes.create.mechanical_crafting('18x kubejs:' + vanilla + '_singularity', [
      ' OOOOOOO ',
      'OOOOOOOOO',
      'OOOOOOOOO',
      'OOOOOOOOO',
      'OOOOCOOOO',
      'OOOOOOOOO',
      'OOOOOOOOO',
      'OOOOOOOOO',
      ' OOOOOOO '
    ], {
      C: 'kubejs:awakened_singularity_core',
      O: `minecraft:${vanilla}_block`
    }).id(`kubejs:mechanical_crafting/${vanilla}_singularity`)
  }
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:amethyst_singularity').withChance(1.75),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:amethyst_block').withChance(0.25),
    Item.of('minecraft:budding_amethyst').withChance(0.25)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_amethyst_singularity', ['kubejs:incomplete_amethyst_singularity', 'minecraft:amethyst_block']),
    event.recipes.create.pressing('kubejs:incomplete_amethyst_singularity', 'kubejs:incomplete_amethyst_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_amethyst_singularity', 'kubejs:incomplete_amethyst_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_amethyst_singularity', 'kubejs:incomplete_amethyst_singularity')
  ]).transitionalItem('kubejs:incomplete_amethyst_singularity').loops(4).id('kubejs:sequenced_assembly/amethyst_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:copper_singularity').withChance(7.10),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:copper_block').withChance(0.10),
    Item.of('minecraft:raw_copper_block').withChance(0.10),
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_copper_singularity', ['kubejs:incomplete_copper_singularity', 'minecraft:copper_block']),
    event.recipes.create.pressing('kubejs:incomplete_copper_singularity', 'kubejs:incomplete_copper_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_copper_singularity', 'kubejs:incomplete_copper_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_copper_singularity', 'kubejs:incomplete_copper_singularity')
  ]).transitionalItem('kubejs:incomplete_copper_singularity').loops(9).id('kubejs:sequenced_assembly/copper_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:iron_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:iron_block').withChance(0.10),
    Item.of('minecraft:raw_iron_block').withChance(0.10),
    'minecraft:iron_ore',
    'minecraft:deepslate_copper_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_iron_singularity', ['kubejs:incomplete_iron_singularity', 'minecraft:iron_block']),
    event.recipes.create.pressing('kubejs:incomplete_iron_singularity', 'kubejs:incomplete_iron_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_iron_singularity', 'kubejs:incomplete_iron_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_iron_singularity', 'kubejs:incomplete_iron_singularity')
  ]).transitionalItem('kubejs:incomplete_iron_singularity').loops(9).id('kubejs:sequenced_assembly/iron_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:redstone_singularity').withChance(7.55),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:redstone_block').withChance(0.10),
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:debug_stick'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_redstone_singularity', ['kubejs:incomplete_redstone_singularity', 'minecraft:redstone_block']),
    event.recipes.create.deploying('kubejs:incomplete_redstone_singularity', ['kubejs:incomplete_redstone_singularity', 'minecraft:repeater']),
    event.recipes.create.deploying('kubejs:incomplete_redstone_singularity', ['kubejs:incomplete_redstone_singularity', 'minecraft:note_block']),
    event.recipes.create.deploying('kubejs:incomplete_redstone_singularity', ['kubejs:incomplete_redstone_singularity', 'minecraft:redstone_lamp']),
    event.recipes.create.deploying('kubejs:incomplete_redstone_singularity', ['kubejs:incomplete_redstone_singularity', 'minecraft:target']),
    event.recipes.create.pressing('kubejs:incomplete_redstone_singularity', 'kubejs:incomplete_redstone_singularity')
  ]).transitionalItem('kubejs:incomplete_redstone_singularity').loops(8).id('kubejs:sequenced_assembly/redstone_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:gold_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:gold_block').withChance(0.10),
    Item.of('minecraft:raw_gold_block').withChance(0.10),
    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_gold_singularity', ['kubejs:incomplete_gold_singularity', 'minecraft:gold_block']),
    event.recipes.create.pressing('kubejs:incomplete_gold_singularity', 'kubejs:incomplete_gold_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_gold_singularity', 'kubejs:incomplete_gold_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_gold_singularity', 'kubejs:incomplete_gold_singularity')
  ]).transitionalItem('kubejs:incomplete_gold_singularity').loops(9).id('kubejs:sequenced_assembly/gold_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:diamond_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:diamond_block').withChance(0.10),
    'minecraft:diamond_ore',
    'minecraft:deepslate_diamond_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_diamond_singularity', ['kubejs:incomplete_diamond_singularity', 'minecraft:diamond_block']),
    event.recipes.create.pressing('kubejs:incomplete_diamond_singularity', 'kubejs:incomplete_diamond_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_diamond_singularity', 'kubejs:incomplete_diamond_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_diamond_singularity', 'kubejs:incomplete_diamond_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_diamond_singularity', 'kubejs:incomplete_diamond_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_diamond_singularity', 'kubejs:incomplete_diamond_singularity')
  ]).transitionalItem('kubejs:incomplete_diamond_singularity').loops(9).id('kubejs:sequenced_assembly/diamond_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:emerald_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:emerald_block').withChance(0.10),
    'minecraft:emerald_ore',
    'minecraft:deepslate_emerald_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_emerald_singularity', ['kubejs:incomplete_emerald_singularity', 'minecraft:emerald_block']),
    event.recipes.create.pressing('kubejs:incomplete_emerald_singularity', 'kubejs:incomplete_emerald_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_emerald_singularity', 'kubejs:incomplete_emerald_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_emerald_singularity', 'kubejs:incomplete_emerald_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_emerald_singularity', 'kubejs:incomplete_emerald_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_emerald_singularity', 'kubejs:incomplete_emerald_singularity')
  ]).transitionalItem('kubejs:incomplete_emerald_singularity').loops(9).id('kubejs:sequenced_assembly/emerald_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:quartz_singularity').withChance(5.25),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:quartz_block').withChance(0.10),
    'minecraft:nether_quartz_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_quartz_singularity', ['kubejs:incomplete_quartz_singularity', 'minecraft:quartz_block']),
    event.recipes.create.pressing('kubejs:incomplete_quartz_singularity', 'kubejs:incomplete_quartz_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_quartz_singularity', 'kubejs:incomplete_quartz_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_quartz_singularity', 'kubejs:incomplete_quartz_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_quartz_singularity', 'kubejs:incomplete_quartz_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_quartz_singularity', 'kubejs:incomplete_quartz_singularity')
  ]).transitionalItem('kubejs:incomplete_quartz_singularity').loops(9).id('kubejs:sequenced_assembly/quartz_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:netherite_singularity').withChance(7.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:netherite_block').withChance(0.10),
    'minecraft:ancient_debris',
    'minecraft:netherrack'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_netherite_singularity', ['kubejs:incomplete_netherite_singularity', 'minecraft:netherite_block']),
    event.recipes.create.pressing('kubejs:incomplete_netherite_singularity', 'kubejs:incomplete_netherite_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_netherite_singularity', 'kubejs:incomplete_netherite_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_netherite_singularity', 'kubejs:incomplete_netherite_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_netherite_singularity', 'kubejs:incomplete_netherite_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_netherite_singularity', 'kubejs:incomplete_netherite_singularity')
  ]).transitionalItem('kubejs:incomplete_netherite_singularity').loops(9).id('kubejs:sequenced_assembly/netherite_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:honey_singularity').withChance(1.15),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:honey_block').withChance(0.10)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_honey_singularity', ['kubejs:incomplete_honey_singularity', 'minecraft:honey_block']),
    event.recipes.create.filling('kubejs:incomplete_honey_singularity', ['kubejs:incomplete_honey_singularity', Fluid.of('create:honey')]),
    event.recipes.create.deploying('kubejs:incomplete_honey_singularity', ['kubejs:incomplete_honey_singularity', 'minecraft:honey_block']),
    event.recipes.create.pressing('kubejs:incomplete_honey_singularity', 'kubejs:incomplete_honey_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_honey_singularity', 'kubejs:incomplete_honey_singularity')
  ]).transitionalItem('kubejs:incomplete_honey_singularity').loops(9).id('kubejs:sequenced_assembly/honey_singularity')

  let vnonstan = VANILLANOTSTANDARD.length;
  for (let i = 0; i < vnonstan; i++) {
    let insert = VANILLANOTSTANDARD[i];
    event.recipes.create.mechanical_crafting('18x kubejs:' + insert + '_singularity', [
      ' OOOOOOO ',
      'OOOOOOOOO',
      'OOOOOOOOO',
      'OOOOOOOOO',
      'OOOOCOOOO',
      'OOOOOOOOO',
      'OOOOOOOOO',
      'OOOOOOOOO',
      ' OOOOOOO '
    ], {
      C: 'kubejs:awakened_singularity_core',
      O: `minecraft:${insert}`
    }).id(`kubejs:mechanical_crafting/${insert}_singularity`)
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:' + insert + '_singularity').withChance(0.65),
      Item.of('kubejs:errored_result').withChance(0.25),
      Item.of('minecraft:' + insert).withChance(0.10)
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying('kubejs:incomplete_' + insert + '_singularity', ['kubejs:incomplete_' + insert + '_singularity', 'minecraft:' + insert]),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity')
    ]).transitionalItem('kubejs:incomplete_' + insert + '_singularity').loops(9).id('kubejs:sequenced_assembly/' + insert + '_singularity')
  }

  let x = 0, l = CREATEITEMS.length;
  let insert;
  while (x < l) {
    insert = CREATEITEMS[x];
    ++x;
    event.recipes.create.mechanical_crafting('18x kubejs:' + insert + '_singularity', [
      ' RRRRRRR ',
      'RRRRRRRRR',
      'RRRRRRRRR',
      'RRRRRRRRR',
      'RRRRCRRRR',
      'RRRRRRRRR',
      'RRRRRRRRR',
      'RRRRRRRRR',
      ' RRRRRRR '
    ], {
      C: 'kubejs:awakened_singularity_core',
      R: `create:${insert}`
    }).id(`kubejs:mechanical_crafting/${insert}singularity`)
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:' + insert + '_singularity').withChance(0.75),
      Item.of('kubejs:errored_result').withChance(0.25),
      Item.of('create:' + insert).withChance(0.10)
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying('kubejs:incomplete_' + insert + '_singularity', ['kubejs:incomplete_' + insert + '_singularity', 'create:' + insert]),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity')
    ]).transitionalItem('kubejs:incomplete_' + insert + '_singularity').loops(9).id('kubejs:sequenced_assembly/' + insert + '_singularity')
  }

  event.recipes.create.mechanical_crafting('kubejs:tnt_singularity', [
    'GSG',
    'SGS',
    'GSG'
  ], {
    G: 'kubejs:gunpowder_singularity',
    S: '#kubejs:sand_singularities'
  }).id('kubejs:mechanical_crafting/tnt_singularity')

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:potion_base_singularity').withChance(1.00),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:potion', '{Potion:"minecraft:mundane"}').withChance(0.25),
    Item.of('minecraft:potion', '{Potion:"minecraft:thick"}').withChance(0.25),
    Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}').withChance(0.25)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.filling('kubejs:incomplete_potion_base_singularity', [
      'kubejs:incomplete_potion_base_singularity',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}')
    ]),
    event.recipes.create.filling('kubejs:incomplete_potion_base_singularity', [
      'kubejs:incomplete_potion_base_singularity',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:thick"}')
    ]),
    event.recipes.create.filling('kubejs:incomplete_potion_base_singularity', [
      'kubejs:incomplete_potion_base_singularity',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:awkward"}')
    ])
  ]).transitionalItem('kubejs:incomplete_potion_base_singularity').loops(12).id('kubejs:sequenced_assembly/potion_base_singularity')

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:blaze_cake_singularity').withChance(75.0),
    Item.of('kubejs:errored_result').withChance(25.0),
    'create:cinder_flour',
    'minecraft:egg'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.pressing('kubejs:incomplete_blaze_cake_singularity', 'kubejs:incomplete_blaze_cake_singularity')
  ]).transitionalItem('kubejs:incomplete_blaze_cake_singularity').loops(4).id('kubejs:sequenced_assembly/blaze_cake_singularity')

  if (Platform.isLoaded('salt')) {
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:salt_singularity').withChance(75.0),
      Item.of('salt:salt_block').withChance(25.0),
      Item.of('salt:salt').withChance(25.0),
      Item.of('minecraft:dripstone_block').withChance(25.0),
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying('kubejs:incomplete_salt_singularity', ['kubejs:incomplete_salt_singularity', 'salt:salt_block']),
      event.recipes.create.pressing('kubejs:incomplete_salt_singularity', 'kubejs:incomplete_salt_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_salt_singularity', 'kubejs:incomplete_salt_singularity')
    ]).transitionalItem('kubejs:incomplete_salt_singularity').loops(9).id('kubejs:sequenced_assembly/salt_singularity')
    event.recipes.create.mixing('2x kubejs:gunpowder_singularity', [
      '2x kubejs:salt_singularity',
      'kubejs:coal_singularity'
    ]).id('kubejs:mixing/gunpowder_singularity_from_salt_singularity')
  }

  // mechanism crafting
  event.recipes.create.sequenced_assembly([
    'kubejs:terra_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', '#minecraft:leaves']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:cobblestone_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:coarse_dirt_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:gunpowder_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:coal_singularity'])
  ]).transitionalItem('kubejs:incomplete_terra_mechanism').loops(1).id('kubejs:sequenced_assembly/terra_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:gluttony_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'create:sweet_roll']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'create:honeyed_apple']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'create:chocolate_glazed_berries']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:honey_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:chocolate_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:builders_tea_singularity'])
  ]).transitionalItem('kubejs:incomplete_gluttony_mechanism').loops(1).id('kubejs:sequenced_assembly/gluttony_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:metallurgy_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:iron_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:andesite_alloy_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:copper_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:zinc_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:brass_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:gold_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:netherite_singularity'])
  ]).transitionalItem('kubejs:incomplete_metallurgy_mechanism').loops(1).id('kubejs:sequenced_assembly/metallurgy_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:lattice_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:amethyst_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:quartz_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:diamond_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:emerald_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:rose_quartz_singularity'])
  ]).transitionalItem('kubejs:incomplete_lattice_mechanism').loops(1).id('kubejs:sequenced_assembly/lattice_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:umbral_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:soul_sand_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:soul_soil_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:end_crystal_singularity'])
  ]).transitionalItem('kubejs:incomplete_umbral_mechanism').loops(1).id('kubejs:sequenced_assembly/umbral_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:genesis_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:steam_engine']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:shaft']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:rotation_speed_controller']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:large_cogwheel']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'kubejs:precision_mechanism_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'kubejs:electron_tube_singularity'])
  ]).transitionalItem('kubejs:incomplete_genesis_mechanism').loops(1).id('kubejs:sequenced_assembly/genesis_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:ascendant_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'kubejs:lapis_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'kubejs:glowstone_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'kubejs:potion_base_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.pressing('kubejs:incomplete_ascendant_mechanism', 'kubejs:incomplete_ascendant_mechanism')
  ]).transitionalItem('kubejs:incomplete_ascendant_mechanism').loops(1).id('kubejs:sequenced_assembly/ascendant_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:amorphous_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_amorphous_mechanism', ['kubejs:incomplete_amorphous_mechanism', 'kubejs:framed_glass_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_amorphous_mechanism', ['kubejs:incomplete_amorphous_mechanism', 'kubejs:tinted_glass_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_amorphous_mechanism', ['kubejs:incomplete_amorphous_mechanism', 'kubejs:sea_lantern_singularity']),
    event.recipes.create.pressing('kubejs:incomplete_amorphous_mechanism', 'kubejs:incomplete_amorphous_mechanism')
  ]).transitionalItem('kubejs:incomplete_amorphous_mechanism').loops(1).id('kubejs:sequenced_assembly/amorphous_mechanism')
  event.recipes.create.sequenced_assembly([
    'kubejs:logistics_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_logistics_mechanism', ['kubejs:incomplete_logistics_mechanism', 'create:controls']),
    event.recipes.create.deploying('kubejs:incomplete_logistics_mechanism', ['kubejs:incomplete_logistics_mechanism', 'kubejs:sturdy_sheet_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_logistics_mechanism', ['kubejs:incomplete_logistics_mechanism', 'kubejs:track_singularity'])
  ]).transitionalItem('kubejs:incomplete_logistics_mechanism').loops(1).id('kubejs:sequenced_assembly/logistics_mechanism')

  event.recipes.create.compacting('kubejs:final_singularity_stage_nulla', [
    'kubejs:terra_mechanism',
    'kubejs:gluttony_mechanism',
    'kubejs:metallurgy_mechanism',
    'kubejs:lattice_mechanism',
    'kubejs:amorphous_mechanism',
    'kubejs:umbral_mechanism',
    'kubejs:genesis_mechanism',
    'kubejs:logistics_mechanism',
    'kubejs:ascendant_mechanism'
  ]).id('kubejs:compacting/final_singularity_stage_nulla')

  event.recipes.create.crushing([
    'kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles').withChance(0.25),
    'kubejs:final_singularity_stage_nulla'
  ], 'kubejs:final_singularity_stage_nulla').processingTime(500).id('kubejs:crushing/final_singularity_stage_nulla')
  event.recipes.create.crushing([
    '8x kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles', 8).withChance(0.25),
    'kubejs:final_singularity_stage_one'
  ], 'kubejs:final_singularity_stage_one').processingTime(500).id('kubejs:crushing/final_singularity_stage_one')
  event.recipes.create.crushing([
    '16x kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles', 16).withChance(0.25),
    'kubejs:final_singularity_stage_two'
  ], 'kubejs:final_singularity_stage_two').processingTime(500).id('kubejs:crushing/final_singularity_stage_two')
  event.recipes.create.crushing([
    '24x kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles', 24).withChance(0.25),
    'kubejs:final_singularity_stage_three'
  ], 'kubejs:final_singularity_stage_three').processingTime(500).id('kubejs:crushing/final_singularity_stage_three')
  event.recipes.create.crushing([
    '32x kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles', 32).withChance(0.25),
    'kubejs:final_singularity_stage_four'
  ], 'kubejs:final_singularity_stage_four').processingTime(500).id('kubejs:crushing/final_singularity_stage_four')
  event.recipes.create.crushing([
    '64x kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles', 64).withChance(0.25),
    'kubejs:final_singularity'
  ], 'kubejs:final_singularity').processingTime(500).id('kubejs:crushing/final_singularity')

  event.recipes.create.mixing(Item.of('kubejs:final_singularity_stage_one').withChance(0.125), [
    'kubejs:final_singularity_stage_nulla',
    'kubejs:uncolored_circle_corner',
    'kubejs:uncolored_rectangle_corner',
    'kubejs:uncolored_windmill_corner',
    'kubejs:uncolored_star_corner'
  ]).id('kubejs:final_singularity_stage_one_stable')
  event.recipes.create.mixing('kubejs:final_singularity_stage_one', [
    'kubejs:final_singularity_stage_nulla',
    'kubejs:uncolored_circle_corner',
    'kubejs:uncolored_rectangle_corner',
    'kubejs:uncolored_windmill_corner',
    'kubejs:uncolored_star_corner',
    enRI4[RNG4]
  ]).id('kubejs:final_singularity_stage_one_random')
  event.recipes.create.mechanical_crafting('kubejs:final_singularity_stage_two', [
    '/UPGRADE',
    '@ {     ',
    'STAGE 2 ',
    '}       '
  ], {
    '/': 'kubejs:slash',
    U: 'kubejs:letter_u',
    P: 'kubejs:letter_p',
    G: 'kubejs:letter_g',
    R: 'kubejs:letter_r',
    A: 'kubejs:letter_a',
    D: 'kubejs:letter_d',
    E: 'kubejs:letter_e',
    '@': 'kubejs:final_singularity_stage_one',
    S: 'kubejs:letter_s',
    T: 'kubejs:letter_t',
    '2': 'kubejs:two',
    '{': 'kubejs:left_brace',
    '}': 'kubejs:right_brace'
  }).id('kubejs:final_singularity_stage_two')
  event.recipes.create.mechanical_crafting('kubejs:final_singularity_stage_three', [
    'IF (@ == ',
    'T2) {    ',
    '  W+C+R  ',
    '}        '
  ], {
    I: 'kubejs:letter_i',
    F: 'kubejs:letter_f',
    '(': 'kubejs:left_parentheses',
    ')': 'kubejs:right_parentheses',
    '=': 'kubejs:equality_sign',
    T: 'kubejs:letter_t',
    '2': 'kubejs:two',
    '{': 'kubejs:left_brace',
    '}': 'kubejs:right_brace',
    '+': 'kubejs:plus_sign',
    W: 'kubejs:color_white',
    C: 'kubejs:color_cyan',
    R: 'kubejs:color_red',
    '@': 'kubejs:final_singularity_stage_two'
  }).id('kubejs:final_singularity_stage_three')
  // note to self in the morning I forgot what I was doing here... probably mixing complex shapes
  event.recipes.create.mixing(Item.of('kubejs:final_singularity_stage_four').withChance(0.125), [
    'kubejs:tnt_singularity',
    'kubejs:blaze_cake_singularity',
    'kubejs:final_singularity_stage_three',
    'kubejs:watermelon_shape',
    'kubejs:star_of_light_shape',
    'kubejs:potion_base_singularity'
  ]).id('kubejs:final_singularity_stage_four_stable')
  event.recipes.create.mixing('kubejs:final_singularity_stage_four', [
    'kubejs:tnt_singularity',
    'kubejs:blaze_cake_singularity',
    'kubejs:final_singularity_stage_three',
    'kubejs:watermelon_shape',
    'kubejs:star_of_light_shape',
    'kubejs:potion_base_singularity',
    enRI3[RNG3],
    enRI5[RNG5],
    enRI1[RNG1]
  ]).id('kubejs:final_singularity_stage_four_random')
  event.recipes.create.mechanical_crafting('kubejs:final_singularity', [
    'COMPONENT',
    '.JOIN([  ',
    'CM.OF(a),',
    'CM.OF(b),',
    'CM.OF(c),',
    'CM.OF(d) ',
    '])       ',
    '.COLOR(4)'
  ], {
    C: 'kubejs:letter_c',
    O: 'kubejs:letter_o',
    M: 'kubejs:letter_m',
    P: 'kubejs:letter_p',
    N: 'kubejs:letter_n',
    E: 'kubejs:letter_e',
    T: 'kubejs:letter_t',
    J: 'kubejs:letter_j',
    I: 'kubejs:letter_i',
    F: 'kubejs:letter_f',
    L: 'kubejs:letter_l',
    R: 'kubejs:letter_r',
    ',': 'kubejs:comma',
    '(': 'kubejs:left_parentheses',
    ')': 'kubejs:right_parentheses',
    '[': 'kubejs:left_bracket',
    ']': 'kubejs:right_bracket',
    '.': 'kubejs:full_point',
    'a': 'kubejs:chromatic_concrete_singularity',
    'b': enRI2[RNG2], // 'kubejs:monochromatic_singularity'
    'c': enRI6[RNG6], // 'kubejs:emitter_shape',
    'd': enRI3[RNG3], // 'kubejs:cpu_shape',
    '4': 'kubejs:final_singularity_stage_four'// 'kubejs:final_singularity_stage_four'
  }).id('kubejs:final_singularity')
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
    I: 'kubejs:high_entropy_alloy_block',
    G: '#forge:glass/colorless',
    R: 'kubejs:redstone_singularity',
    U: 'kubejs:null_matter',
    C: 'kubejs:iridium_block',
    Q: 'create:rose_quartz_lamp',
    P: 'create:pulse_repeater'
  }).id('kubejs:mechanical_crafting/command_block')

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
    I: 'kubejs:high_entropy_alloy_block',
    G: '#forge:glass/colorless',
    R: 'kubejs:redstone_singularity',
    U: 'kubejs:null_matter',
    C: 'kubejs:iridium_block',
    Q: 'create:rose_quartz_lamp',
    P: 'create:sequenced_gearshift'
  }).id('kubejs:mechanical_crafting/chain_command_block')

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
    I: 'kubejs:high_entropy_alloy_block',
    G: '#forge:glass/colorless',
    R: 'kubejs:redstone_singularity',
    U: 'kubejs:null_matter',
    C: 'kubejs:iridium_block',
    Q: 'create:rose_quartz_lamp',
    P: 'create:powered_toggle_latch'
  }).id('kubejs:mechanical_crafting/repeating_command_block')
  /**
   * event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', enRI1[RNG1]])
   * original order
   * 'kubejs:null_matter'
   * 'kubejs:final_singularity'
   * 'kubejs:qubit'
   * 'kubejs:cpu_shape'
   * 'kubejs:blueprint_shape'
   * 'kubejs:emitter_shape'
   * enRI1[RNG1]
   * enRI2[RNG2]
   * enRI3[RNG3]
   * enRI4[RNG4]
   * enRI5[RNG5]
   * enRI6[RNG6]
   **/
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:entropy_mechanism').withChance(80.0),
    Item.of('kubejs:errored_result').withChance(0.75),
    Item.of('minecraft:structure_void').withChance(50.0),
    Item.of('minecraft:debug_stick').withChance(50.0),
    Item.of('minecraft:jigsaw').withChance(50.0),
    Item.of('kubejs:zero').withChance(50.0),
    Item.of('kubejs:one').withChance(50.0),
    Item.of('kubejs:command_block').withChance(25.0),
    Item.of('kubejs:chain_command_block').withChance(25.0),
    Item.of('kubejs:repeating_command_block').withChance(25.0),
    'minecraft:grass_block'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:null_matter']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:final_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:qubit']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:cpu_shape']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:blueprint_shape']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:emitter_shape'])
  ]).transitionalItem('kubejs:incomplete_entropy_mechanism').loops(9).id('kubejs:sequenced_assembly/entropy_mechanism_creation')
})