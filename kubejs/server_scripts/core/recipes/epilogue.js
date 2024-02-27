// requires: kubejs_create

let SAND = ['sand', 'red_sand']
let VANILLAMATS = ['amethyst', 'copper', 'iron', 'redstone', 'gold', 'diamond', 'emerald', 'quartz', 'netherite', 'honey']
let VANILLANOTSTANDARD = ['ender_pearl', 'gunpowder', 'sea_lantern', 'glowstone']
let CREATEITEMS = ['electron_tube', 'rose_quartz']
let CREATEVALUED = ['brass', 'zinc']

ServerEvents.recipes(event => {
  // singularity creation step 1
  event.recipes.create.mechanical_crafting('kubejs:dormant_singularity_core', [
    ' OOOOO ',
    'OOOOOOO',
    'OOOOOOO',
    'OOOEOOO',
    'OOOOOOO',
    'OOOOOOO',
    ' OOOOO '
  ], {
    E: 'minecraft:crying_obsidian',
    O: 'minecraft:obsidian'
  }).id('finality:mechanical_crafting/dormant_singularity_core')

  // singularity step 2
  event.recipes.create.compacting([
    Fluid.of('kubejs:condensed_universal_entropy', 250),
    Item.of('create:experience_nugget').withChance(0.25)
  ], [
    '5x minecraft:crying_obsidian'
  ]).id('finality:compacting/condensing_universe_essence')

  event.recipes.create.compacting([
    Fluid.of('kubejs:condensed_universal_entropy'),
    Item.of('create:experience_nugget').withChance(0.25)
  ], [
    'minecraft:crying_obsidian'
  ]).superheated().id('finality:compacting/condensing_universe_essence_superheated')

  event.recipes.create.emptying(
    Fluid.of('kubejs:condensed_universal_entropy', 50),
    'minecraft:crying_obsidian'
  ).id('finality:emptying/cue_from_crying_obsidian')

  event.recipes.create.filling('kubejs:awakened_singularity_core', [
    'kubejs:dormant_singularity_core',
    Fluid.of('kubejs:condensed_universal_entropy', 1000)
  ]).id('finality:filling/singularity_core_awakening')

  // singularity step 3 (new method)
  event.recipes.create.sequenced_assembly([
    'kubejs:andesite_alloy_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity', 'create:andesite_alloy_block']),
    event.recipes.create.pressing(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity'])
  ]).transitionalItem('kubejs:incomplete_andesite_alloy_singularity').loops(9).id('finality:sequenced_assembly/andesite_alloy_singularity')
  for (let i = 0; i < CREATEVALUED.length; i++) {
    let valued = CREATEVALUED[i];
    event.recipes.create.sequenced_assembly([
      'kubejs:' + valued + '_singularity'
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`, `create:${valued}_block`]),
      event.recipes.create.pressing([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`])
    ]).transitionalItem(`kubejs:incomplete_${valued}_singularity`).loops(9).id(`finality:sequenced_assembly/${valued}_singularity`)
  }
  event.recipes.create.sequenced_assembly([
    'kubejs:track_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity', 'create:track']),
    event.recipes.create.pressing(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity'])
  ]).transitionalItem('kubejs:incomplete_track_singularity').loops(9).id('finality:sequenced_assembly/track_singularity')

  // sequenced assembly singularities
  event.recipes.create.sequenced_assembly([
    'kubejs:blue_ice_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', 'minecraft:blue_ice']),
    event.recipes.create.filling(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', Fluid.of('minecraft:water', 25)]),
    event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
    event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
    event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity'])
  ]).transitionalItem('kubejs:incomplete_blue_ice_singularity').loops(9).id('finality:sequenced_assembly/blue_ice_singularity')
  event.recipes.create.emptying([
    Fluid.of('kubejs:condensed_universal_order', 500),
    'kubejs:awakened_singularity_core'
  ], 'kubejs:blue_ice_singularity').id('finality:emptying/condensed_universal_order')

  event.recipes.create.sequenced_assembly([
    'kubejs:coarse_dirt_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', 'minecraft:coarse_dirt']),
    event.recipes.create.filling('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', Fluid.of('minecraft:water', 25)]),
    event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity')
  ]).transitionalItem('kubejs:incomplete_coarse_dirt_singularity').loops(9).id('finality:sequenced_assembly/coarse_dirt_singularity')

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
    ]).transitionalItem(`kubejs:incomplete_${insert}_singularity`).loops(9).id(`finality:sequenced_assembly/${insert}_singularity`)
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
  ]).transitionalItem('kubejs:incomplete_soul_sand_singularity').loops(9).id('finality:sequenced_assembly/soul_sand_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:soul_soil_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_soul_soil_singularity', ['kubejs:incomplete_soul_soil_singularity', 'minecraft:soul_soil']),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
    event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
    event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
  ]).transitionalItem('kubejs:incomplete_soul_soil_singularity').loops(9).id('finality:sequenced_assembly/soul_soil_singularity')

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
  ]).transitionalItem('kubejs:incomplete_cobblestone_singularity').loops(9).id('finality:sequenced_assembly/cobblestone_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:framed_glass_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
    event.recipes.create.filling('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', Fluid.of('minecraft:lava', 25)]),
    event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
    event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity')
  ]).transitionalItem('kubejs:incomplete_framed_glass_singularity').loops(4).id('finality:sequenced_assembly/framed_glass_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:tinted_glass_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
    event.recipes.create.filling('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', Fluid.of('minecraft:lava', 250)]),
    event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
    event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity')
  ]).transitionalItem('kubejs:incomplete_tinted_glass_singularity').loops(4).id('finality:sequenced_assembly/tinted_glass_singularity')

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
  ]).transitionalItem('kubejs:incomplete_precision_mechanism_singularity').loops(5).id('finality:sequenced_assembly/precision_mechanism_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:sturdy_sheet_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
    event.recipes.create.filling('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', Fluid.of('minecraft:lava', 25)]),
    event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
    event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity')
  ]).transitionalItem('kubejs:incomplete_sturdy_sheet_singularity').loops(4).id('finality:sequenced_assembly/sturdy_sheet_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:builders_tea_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
    event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity')
  ]).transitionalItem('kubejs:incomplete_builders_tea_singularity').loops(4).id('finality:sequenced_assembly/builders_tea_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:chocolate_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
    event.recipes.create.filling('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', Fluid.of('create:chocolate', 250)]),
    event.recipes.create.pressing('kubejs:incomplete_chocolate_singularity', 'kubejs:incomplete_chocolate_singularity')
  ]).transitionalItem('kubejs:incomplete_chocolate_singularity').loops(4).id('finality:sequenced_assembly/chocolate_singularity')

  event.recipes.create.sequenced_assembly([
    'kubejs:end_crystal_singularity'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_end_crystal_singularity', ['kubejs:incomplete_end_crystal_singularity', 'minecraft:end_crystal']),
    event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity')
  ]).transitionalItem('kubejs:incomplete_end_crystal_singularity').loops(9).id('finality:sequenced_assembly/end_crystal_singularity')

  // concrete singularities
  for (let i = 0; i < COLOR.length; i++) {
    let color = COLOR[i];
    event.recipes.create.sequenced_assembly([
      'kubejs:concrete_' + color + '_singularity'
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
      event.recipes.create.filling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(9).id(`finality:sequenced_assembly/${color}_concrete_singularity`)
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:concrete_' + color + '_singularity').withChance(0.75),
      Item.of('minecraft:' + color + '_concrete_powder', 9).withChance(0.25)
    ], `minecraft:${color}_concrete`, [
      event.recipes.create.deploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
      event.recipes.create.filling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
      event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(9).id(`finality:sequenced_assembly/${color}_concrete_singularity_from_compression`)
  }

  event.recipes.create.mixing('kubejs:chromatic_concrete_singularity', [
    'kubejs:concrete_red_singularity',
    'kubejs:concrete_green_singularity',
    'kubejs:concrete_blue_singularity',
    'kubejs:concrete_cyan_singularity',
    'kubejs:concrete_yellow_singularity',
    'kubejs:concrete_magenta_singularity'
  ]).id('finality:mixing/chromatic_concrete_singularity')
  // mechanical crafting singularities
  event.recipes.create.mechanical_crafting('9x kubejs:coal_singularity', [
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
  }).id('finality:mechanical_crafting/coal_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:coal_singularity').withChance(0.50),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:coal_block').withChance(0.10),
    'minecraft:coal_ore',
    'minecraft:deepslate_coal_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_coal_singularity', ['kubejs:incomplete_coal_singularity', 'minecraft:coal_block']),
    event.recipes.create.pressing('kubejs:incomplete_coal_singularity', 'kubejs:incomplete_coal_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coal_singularity', 'kubejs:incomplete_coal_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_coal_singularity', 'kubejs:incomplete_coal_singularity')
  ]).transitionalItem('kubejs:incomplete_coal_singularity').loops(9).id('finality:sequenced_assembly/coal_singularity')

  event.recipes.create.mechanical_crafting('9x kubejs:lapis_singularity', [
    ' LLLLLLL ',
    'LLLOOOLLL',
    'LLOOOOOLL',
    'LOOOOOOOL',
    'LOOOCOOOL',
    'LOOOOOOOL',
    'LLOOOOOLL',
    'LLLOOOLLL',
    ' LLLLLLL '
  ], {
    L: 'minecraft:crying_obsidian',
    C: 'kubejs:awakened_singularity_core',
    O: 'minecraft:lapis_block'
  }).id('finality:mechanical_crafting/lapis_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:lapis_singularity').withChance(0.50),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:lapis_block').withChance(0.10),
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_lapis_singularity', ['kubejs:incomplete_lapis_singularity', 'minecraft:lapis_block']),
    event.recipes.create.pressing('kubejs:incomplete_lapis_singularity', 'kubejs:incomplete_lapis_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_lapis_singularity', 'kubejs:incomplete_lapis_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_lapis_singularity', 'kubejs:incomplete_lapis_singularity')
  ]).transitionalItem('kubejs:incomplete_lapis_singularity').loops(9).id('finality:sequenced_assembly/lapis_singularity')

  for (let i = 0; i < VANILLAMATS.length; i++) {
    let vanilla = VANILLAMATS[i];
    event.recipes.create.mechanical_crafting('9x kubejs:' + vanilla + '_singularity', [
      ' LLLLLLL ',
      'LLLOOOLLL',
      'LLOOOOOLL',
      'LOOOOOOOL',
      'LOOOCOOOL',
      'LOOOOOOOL',
      'LLOOOOOLL',
      'LLLOOOLLL',
      ' LLLLLLL '
    ], {
      L: 'minecraft:crying_obsidian',
      C: 'kubejs:awakened_singularity_core',
      O: `minecraft:${vanilla}_block`
    }).id(`finality:mechanical_crafting/${vanilla}_singularity`)
  }
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:amethyst_singularity').withChance(0.50),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:amethyst_block').withChance(0.10),
    Item.of('minecraft:budding_amethyst').withChance(0.10)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_amethyst_singularity', ['kubejs:incomplete_amethyst_singularity', 'minecraft:amethyst_block']),
    event.recipes.create.pressing('kubejs:incomplete_amethyst_singularity', 'kubejs:incomplete_amethyst_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_amethyst_singularity', 'kubejs:incomplete_amethyst_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_amethyst_singularity', 'kubejs:incomplete_amethyst_singularity')
  ]).transitionalItem('kubejs:incomplete_amethyst_singularity').loops(4).id('finality:sequenced_assembly/amethyst_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:copper_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_copper_singularity').loops(9).id('finality:sequenced_assembly/copper_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:iron_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_iron_singularity').loops(9).id('finality:sequenced_assembly/iron_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:redstone_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_redstone_singularity').loops(8).id('finality:sequenced_assembly/redstone_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:gold_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_gold_singularity').loops(9).id('finality:sequenced_assembly/gold_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:diamond_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_diamond_singularity').loops(9).id('finality:sequenced_assembly/diamond_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:emerald_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_emerald_singularity').loops(9).id('finality:sequenced_assembly/emerald_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:quartz_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_quartz_singularity').loops(9).id('finality:sequenced_assembly/quartz_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:netherite_singularity').withChance(0.50),
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
  ]).transitionalItem('kubejs:incomplete_netherite_singularity').loops(9).id('finality:sequenced_assembly/netherite_singularity')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:honey_singularity').withChance(0.50),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('minecraft:honey_block').withChance(0.10)
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_honey_singularity', ['kubejs:incomplete_honey_singularity', 'minecraft:honey_block']),
    event.recipes.create.filling('kubejs:incomplete_honey_singularity', ['kubejs:incomplete_honey_singularity', Fluid.of('create:honey')]),
    event.recipes.create.deploying('kubejs:incomplete_honey_singularity', ['kubejs:incomplete_honey_singularity', 'minecraft:honey_block']),
    event.recipes.create.pressing('kubejs:incomplete_honey_singularity', 'kubejs:incomplete_honey_singularity'),
    event.recipes.create.pressing('kubejs:incomplete_honey_singularity', 'kubejs:incomplete_honey_singularity')
  ]).transitionalItem('kubejs:incomplete_honey_singularity').loops(9).id('finality:sequenced_assembly/honey_singularity')

  let vnonstan = VANILLANOTSTANDARD.length;
  for (let i = 0; i < vnonstan; i++) {
    let insert = VANILLANOTSTANDARD[i];
    event.recipes.create.mechanical_crafting('9x kubejs:' + insert + '_singularity', [
      ' LLLLLLL ',
      'LLLOOOLLL',
      'LLOOOOOLL',
      'LOOOOOOOL',
      'LOOOCOOOL',
      'LOOOOOOOL',
      'LLOOOOOLL',
      'LLLOOOLLL',
      ' LLLLLLL '
    ], {
      L: 'minecraft:crying_obsidian',
      C: 'kubejs:awakened_singularity_core',
      O: `minecraft:${insert}`
    }).id(`finality:mechanical_crafting/${insert}_singularity`)
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:' + insert + '_singularity').withChance(0.50),
      Item.of('kubejs:errored_result').withChance(0.25),
      Item.of('minecraft:' + insert).withChance(0.10)
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying('kubejs:incomplete_' + insert + '_singularity', ['kubejs:incomplete_' + insert + '_singularity', 'minecraft:' + insert]),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity')
    ]).transitionalItem('kubejs:incomplete_' + insert + '_singularity').loops(9).id('finality:sequenced_assembly/' + insert + '_singularity')
  }

  let x = 0, l = CREATEITEMS.length;
  let insert;
  while (x < l) {
    insert = CREATEITEMS[x];
    ++x;
    event.recipes.create.mechanical_crafting('9x kubejs:' + insert + '_singularity', [
      ' LLLLLLL ',
      'LLLRRRLLL',
      'LLRRRRRLL',
      'LRRRRRRRL',
      'LRRRCRRRL',
      'LRRRRRRRL',
      'LLRRRRRLL',
      'LLLRRRLLL',
      ' LLLLLLL '
    ], {
      L: 'crying_obsidian',
      C: 'kubejs:awakened_singularity_core',
      R: `create:${insert}`
    }).id(`finality:mechanical_crafting/${insert}singularity`)
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:' + insert + '_singularity').withChance(0.50),
      Item.of('kubejs:errored_result').withChance(0.25),
      Item.of('create:' + insert).withChance(0.10)
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying('kubejs:incomplete_' + insert + '_singularity', ['kubejs:incomplete_' + insert + '_singularity', 'create:' + insert]),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_' + insert + '_singularity', 'kubejs:incomplete_' + insert + '_singularity')
    ]).transitionalItem('kubejs:incomplete_' + insert + '_singularity').loops(9).id('finality:sequenced_assembly/' + insert + '_singularity')
  }

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:potion_base_singularity').withChance(25.0),
    Item.of('kubejs:errored_result').withChance(25.0),
    Item.of('minecraft:potion', '{Potion:"minecraft:mundane"}').withChance(25.0),
    Item.of('minecraft:potion', '{Potion:"minecraft:thick"}').withChance(25.0),
    Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}').withChance(25.0)
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
  ]).transitionalItem('kubejs:incomplete_potion_base_singularity').loops(12).id('finality:sequenced_assembly/potion_base_singularity')

  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:blaze_cake_singularity').withChance(25.0),
    Item.of('kubejs:errored_result').withChance(75.0),
    'create:cinder_flour',
    'minecraft:egg'
  ], 'kubejs:awakened_singularity_core', [
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
    event.recipes.create.pressing('kubejs:incomplete_blaze_cake_singularity', 'kubejs:incomplete_blaze_cake_singularity')
  ]).transitionalItem('kubejs:incomplete_blaze_cake_singularity').loops(4).id('finality:sequenced_assembly/blaze_cake_singularity')

  if (Platform.isLoaded('salt')) {
    event.recipes.create.sequenced_assembly([
      Item.of('kubejs:salt_singularity').withChance(25.0),
      Item.of('salt:salt_block').withChance(25.0),
      Item.of('salt:salt').withChance(25.0),
      Item.of('minecraft:dripstone_block').withChance(25.0),
    ], 'kubejs:awakened_singularity_core', [
      event.recipes.create.deploying('kubejs:incomplete_salt_singularity', ['kubejs:incomplete_salt_singularity', 'salt:salt_block']),
      event.recipes.create.pressing('kubejs:incomplete_salt_singularity', 'kubejs:incomplete_salt_singularity'),
      event.recipes.create.pressing('kubejs:incomplete_salt_singularity', 'kubejs:incomplete_salt_singularity')
    ]).transitionalItem('kubejs:incomplete_salt_singularity').loops(9).id('finality:sequenced_assembly/salt_singularity')
  }

  event.recipes.create.mixing([
    Item.of('kubejs:unstable_entropy_particles').withChance(0.50),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('create:experience_nugget').withChance(0.25)
  ], [
    'create:chromatic_compound',
    'create:railway_casing',
    'minecraft:netherite_block',
    'create:brass_block',
    'create:andesite_alloy_block',
    'minecraft:diamond_block',
    'minecraft:amethyst_shard',
    '2x minecraft:chorus_fruit',
    Fluid.of('kubejs:condensed_universal_entropy', 1000)
  ]).superheated().id('finality:mixing/unstable_entropy_creation1')
  event.recipes.create.mixing([
    '9x kubejs:unstable_entropy_particles',
    Item.of('kubejs:unstable_entropy_particles', 9).withChance(0.50),
    Item.of('kubejs:errored_result').withChance(0.25),
    Item.of('create:experience_block').withChance(0.12)
  ], [
    'kubejs:amethyst_singularity',
    'kubejs:brass_singularity',
    'kubejs:andesite_alloy_singularity',
    'kubejs:diamond_singularity',
    'create:chromatic_compound',
    'kubejs:netherite_singularity',
    'kubejs:sturdy_sheet_singularity',
    Fluid.of('kubejs:condensed_universal_entropy'),
    'kubejs:electron_tube_singularity'
  ]).id('finality:mixing/unstable_entropy_creation_from_singularities')
  event.recipes.create.mixing('kubejs:unstable_entropy_particles', [
    'kubejs:errored_result',
    Fluid.of('kubejs:condensed_universal_entropy', 250)
  ]).id('finality:mixing/errored_result_recycling')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:stable_entropy_particles').withChance(0.75),
    Item.of('kubejs:unstable_entropy_particles').withChance(0.25)
  ], 'kubejs:unstable_entropy_particles', [
    event.recipes.create.filling('kubejs:stabilizing_entropy_particles', ['kubejs:stabilizing_entropy_particles', Fluid.of('kubejs:condensed_universal_order', 250)]),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
    event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles')
  ]).transitionalItem('kubejs:stabilizing_entropy_particles').loops(4).id('finality:sequenced_assembly/stable_entropy_particles')
  event.shaped('kubejs:high_entropy_alloy_block', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: 'kubejs:high_entropy_alloy'
  }).id('finality:high_entropy_alloy_block_compression')
  event.shapeless('9x kubejs:high_entropy_alloy', [
    'kubejs:high_entropy_alloy_block'
  ]).id('finality:high_entropy_alloy_block_decompression')
  event.shaped('kubejs:high_entropy_alloy', [
    'EEE',
    'EEE',
    'EEE'
  ], {
    E: 'kubejs:high_entropy_alloy_nugget'
  }).id('finality:high_entropy_alloy_nugget_compression')
  event.shapeless('9x kubejs:high_entropy_alloy_nugget', [
    'kubejs:high_entropy_alloy'
  ]).id('finality:high_entropy_alloy_decompression')
  event.recipes.create.cutting(
    '2x kubejs:high_entropy_alloy_rod',
    'kubejs:high_entropy_alloy'
  ).processingTime(200).id('finality:cutting/high_entropy_alloy_rod')
  event.recipes.create.pressing(
    'kubejs:high_entropy_alloy_sheet',
    'kubejs:high_entropy_alloy'
  ).id('finality:pressing/high_entropy_alloy_sheet')

  // mechanism crafting
  event.recipes.create.sequenced_assembly([
    'kubejs:terra_mechanism'
  ], 'create:precision_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', '#minecraft:leaves']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:cobblestone_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:coarse_dirt_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:gunpowder_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:coal_singularity'])
  ]).transitionalItem('kubejs:incomplete_terra_mechanism').loops(1).id('finality:sequenced_assembly/terra_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:gluttony_mechanism'
  ], 'kubejs:terra_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'artifacts:eternal_steak']).keepHeldItem(),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:honey_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:chocolate_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:builders_tea_singularity'])
  ]).transitionalItem('kubejs:incomplete_gluttony_mechanism').loops(1).id('finality:sequenced_assembly/gluttony_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:metallurgy_mechanism'
  ], 'kubejs:gluttony_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:iron_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:andesite_alloy_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:copper_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:zinc_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:brass_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:gold_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:netherite_singularity'])
  ]).transitionalItem('kubejs:incomplete_metallurgy_mechanism').loops(1).id('finality:sequenced_assembly/metallurgy_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:lattice_mechanism'
  ], 'kubejs:metallurgy_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:amethyst_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:quartz_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:diamond_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:emerald_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:rose_quartz_singularity'])
  ]).transitionalItem('kubejs:incomplete_lattice_mechanism').loops(1).id('finality:sequenced_assembly/lattice_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:umbral_mechanism'
  ], 'kubejs:lattice_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:soul_sand_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:soul_soil_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:end_crystal_singularity'])
  ]).transitionalItem('kubejs:incomplete_umbral_mechanism').loops(1).id('finality:sequenced_assembly/umbral_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:genesis_mechanism'
  ], 'kubejs:umbral_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:steam_engine']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:shaft']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:rotation_speed_controller']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:large_cogwheel']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'kubejs:precision_mechanism_singularity']),
    event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'kubejs:electron_tube_singularity'])
  ]).transitionalItem('kubejs:incomplete_genesis_mechanism').loops(1).id('finality:sequenced_assembly/genesis_mechanism_creation')

  event.recipes.create.sequenced_assembly([
    'kubejs:ascendant_mechanism'
  ], 'kubejs:genesis_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
    event.recipes.create.pressing('kubejs:incomplete_ascendant_mechanism', 'kubejs:incomplete_ascendant_mechanism')
  ]).transitionalItem('kubejs:incomplete_ascendant_mechanism').loops(5).id('finality:sequenced_assembly/ascendant_mechanism_creation')
  /*
  let RNG1 = 0
  let RNG2 = 0
  let RNG3 = 0
  let RNG4 = 0
  let RNG5 = 0
  enRI1 = [
      'create:sequenced_gearshift',
  ]
  enRI2 = [
      'extendedcrafting:crystaltine_nugget'
  ]
  enRI3 = [
      'kubejs:cpu_shape'
  ]
  enRI4 = [
      'kubejs:blueprint_shape'
  ]
  enRI5 = [
      []
  ]
  RNG1 = Utils.random.nextInt(0, enRI1.length - 1)
  RNG2 = Utils.random.nextInt(0, enRI2.length - 1)
  RNG3 = Utils.random.nextInt(0, enRI3.length - 1)
  RNG4 = Utils.random.nextInt(0, enRI4.length - 1)
  RNG5 = Utils.random.nextInt(0, enRI5.length - 1)
  event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', enRI1[RNG1]])
  */
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
  ], 'kubejs:ascendant_mechanism', [
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:awakened_singularity_core']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'create:sequenced_gearshift']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:qubit']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:cpu_shape']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:blueprint_shape']),
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:emitter_shape'])
  ]).transitionalItem('kubejs:incomplete_entropy_mechanism').loops(3).id('finality:sequenced_assembly/entropy_mechanism_creation')
})