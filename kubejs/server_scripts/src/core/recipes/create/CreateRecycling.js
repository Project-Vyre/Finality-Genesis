// requires: kubejs_create

/**
 * @file Uncrafting with Create, probably cursed.
 */

ServerEvents.recipes(event => {
  /*
  event.recipes.create.crushing([
      'minecraft:iron_ingot',
      'minecraft:stick',
      'minecraft:redstone'
  ], 'minecraft:activator_rail').processingTime(120).id('finality:crushing/activator_rail_recycling')
  event.recipes.create.crushing([
      '',
  ], 'minecraft:detector_rail').processingTime(120).id('finality:crushing/detector_rail_recycling')
  */
  // anvil recycling
  event.recipes.create.crushing([
    '3x minecraft:iron_block',
    '4x minecraft:iron_ingot'
  ], 'minecraft:anvil').processingTime(300).id('finality:crushing/anvil_recycling')
  event.recipes.create.crushing([
    '3x minecraft:iron_block',
    '4x minecraft:iron_ingot'
  ], 'minecraft:chipped_anvil').processingTime(300).id('finality:crushing/chipped_anvil_recycling')
  event.recipes.create.crushing([
    '3x minecraft:iron_block',
    '4x minecraft:iron_ingot'
  ], 'minecraft:damaged_anvil').processingTime(300).id('finality:crushing/damaged_anvil_recycling')
  event.recipes.create.item_application('31x minecraft:iron_ingot', [
    'minecraft:anvil',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/anvil_deconstruction')
  event.recipes.create.item_application('31x minecraft:iron_ingot', [
    'minecraft:chipped_anvil',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/chipped_anvil_deconstruction')
  event.recipes.create.item_application('31x minecraft:iron_ingot', [
    'minecraft:damaged_anvil',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/damaged_anvil_deconstruction')
  event.recipes.create.cutting([
    'minecraft:gold_block',
    'create:golden_sheet'
  ], 'minecraft:bell').processingTime(300).id('finality:cutting/bell_recycling')
  event.recipes.create.crushing([
    'minecraft:furnace',
    '5x minecraft:iron_ingot',
    '3x minecraft:cobblestone'
  ], 'minecraft:blast_furnace').processingTime(200).id('finality:crushing/blast_furnace_recycling')
  event.recipes.create.crushing(
    '3x create:iron_sheet',
    'minecraft:bucket'
  ).processingTime(150).id('finality:crushing/bucket_recycling')
  event.recipes.create.cutting(
    '5x minecraft:iron_ingot',
    'minecraft:cauldron'
  ).processingTime(250).id('finality:cutting/cauldron_recycling')
  event.recipes.create.crushing([
    'minecraft:iron_ingot',
    '2x minecraft:iron_nugget'
  ], 'minecraft:chain').id('finality:crushing/chain_recycling')
  event.recipes.create.deploying([
    '3x minecraft:string',
    '3x minecraft:stick'
  ], [
    'minecraft:bow',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/bow_deconstruction')
  event.recipes.create.deploying([
    'minecraft:iron_ingot',
    'minecraft:tripwire_hook',
    '3x minecraft:stick',
    '2x minecraft:string',
  ], [
    'minecraft:crossbow',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/crossbow_deconstruction')
  event.recipes.create.deploying([
    'minecraft:flint',
    'minecraft:iron_ingot'
  ], [
    'minecraft:flint_and_steel',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/flint_steel_deconstruction')
  event.recipes.create.deploying('2x minecraft:iron_ingot', [
    'minecraft:shears',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/shears_deconstruction')
  event.recipes.create.item_application([
    'create:iron_sheet',
    'minecraft:redstone'
  ], [
    'minecraft:heavy_weighted_pressure_plate',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/heavy_weighted_pressure_plate_deconstruction')
  event.recipes.create.item_application([
    'create:golden_sheet',
    'minecraft:redstone'
  ], [
    'minecraft:light_weighted_pressure_plate',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/light_weighted_pressure_plate_deconstruction')
  event.recipes.create.item_application([
    'minecraft:chest',
    'create:chute'
  ], [
    'minecraft:hopper',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/hopper_deconstruction')
  event.recipes.create.item_application([
    '2x minecraft:iron_ingot',
    '3x minecraft:iron_nugget',
    Item.of('minecraft:iron_nugget').withChance(0.30)
  ], [
    'minecraft:iron_bars',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/iron_bars_deconstruction')
  event.recipes.create.item_application('4x minecraft:iron_ingot', [
    'minecraft:iron_trapdoor',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/iron_trapdoor_deconstruction')
  event.recipes.create.item_application('2x minecraft:iron_ingot', [
    'minecraft:iron_door',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/iron_door_deconstruction')
  event.recipes.create.item_application('minecraft:obsidian', [
    'minecraft:crying_obsidian',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_crying_obsidian')
  event.recipes.create.item_application('minecraft:sand', [
    'minecraft:soul_sand',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_soul_sand')
  event.recipes.create.item_application('minecraft:dirt', [
    'minecraft:soul_soil',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_soul_soil')
  event.recipes.create.item_application('minecraft:coarse_dirt', [
    'minecraft:dirt',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_coarse_dirt')
  event.recipes.create.item_application('minecraft:stone', [
    'minecraft:cobblestone',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_cobblestone_to_stone')
  event.recipes.create.item_application('minecraft:stone', [
    'minecraft:smooth_stone',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_smooth_stone_to_stone')
  event.recipes.create.item_application('minecraft:deepslate', [
    'minecraft:cobbled_deepslate',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_cobbled_deepslate_to_deepslate')
  event.recipes.create.item_application('minecraft:gravel', [
    'minecraft:coarse_dirt',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_gravel')
  event.recipes.create.item_application([
    'minecraft:stripped_spruce_log',
    'create:andesite_alloy'
  ], [
    'create:andesite_casing',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_andesite_casing')
  event.recipes.create.item_application([
    'minecraft:stripped_spruce_log',
    'minecraft:copper_ingot'
  ], [
    'create:copper_casing',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_copper_casing')
  event.recipes.create.item_application([
    'minecraft:stripped_dark_oak_log',
    'create:brass_ingot'
  ], [
    'create:brass_casing',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_brass_casing')
  event.recipes.create.item_application([
    'create:brass_casing',
    'create:sturdy_sheet'
  ], [
    'create:railway_casing',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:item_application/undo_railway_casing')
  event.recipes.create.deploying([
    'create:shaft',
    'minecraft:spruce_planks'
  ], [
    'create:cogwheel',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/cogwheel_deconstruction')
  event.recipes.create.deploying([
    'create:shaft',
    '2x minecraft:spruce_planks'
  ], [
    'create:large_cogwheel',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/large_cogwheel_deconstruction')
  // gearbox deconstruction
  event.recipes.create.deploying([
    '4x create:cogwheel',
    'create:andesite_casing'
  ], [
    'create:gearbox',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/gearbox_deconstruction')
  event.recipes.create.deploying([
    '4x create:cogwheel',
    'create:andesite_casing'
  ], [
    'create:vertical_gearbox',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/vertical_gearbox_deconstruction')
  event.recipes.create.deploying([
    '3x create:andesite_alloy',
    'minecraft:iron_ingot',
    'create:andesite_casing'
  ], [
    'create:mechanical_drill',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/mechanical_drill_deconstruction')
  event.recipes.create.deploying([
    'create:shaft',
    'create:andesite_casing',
    'minecraft:iron_block'
  ], [
    'create:mechanical_press',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/mechanical_press_deconstruction')
  event.recipes.create.deploying([
    '3x create:iron_sheet',
    'minecraft:iron_ingot',
    'create:andesite_casing'
  ], [
    'create:mechanical_saw',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/mechanical_saw_deconstruction')
  event.recipes.create.deploying([
    'create:shaft',
    'create:andesite_casing',
    'create:propeller'
  ], [
    'create:encased_fan',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/encased_fan_deconstruction')
  event.recipes.create.deploying([
    '4x create:iron_sheet',
    'create:andesite_alloy'
  ], [
    'create:propeller',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/propeller_deconstruction')
  event.recipes.create.deploying([
    '2x create:iron_sheet',
    'minecraft:barrel'
  ], [
    'create:item_vault',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/item_vault_deconstruction')
  event.recipes.create.deploying([
    '2x create:copper_sheet',
    'minecraft:barrel'
  ], [
    'create:fluid_tank',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('finality:deploying/fluid_tank_deconstruction')
  event.recipes.create.deploying([
    '4x minecraft:string'
  ], [
    '#minecraft:wool',
    'kubejs:deconstructor'
  ]).keepHeldItem().id('kubejs:deploying/wool_deconstruction')
  // BANNER DECONSTRUCTION
  for (let id of COLOR) {
    event.recipes.create.deploying([
      `6x minecraft:${id}_wool`,
      'minecraft:stick'
    ], [
      `minecraft:${id}_banner`,
      'kubejs:deconstructor'
    ]).keepHeldItem().id(`finality:item_application/${id}_banner_deconstruction`)
  }
  if (Platform.isLoaded('quark')) {
    event.recipes.create.item_application([
      '2x minecraft:gold_ingot',
      '3x minecraft:gold_nugget',
      Item.of('minecraft:gold_nugget').withChance(0.30)
    ], [
      'quark:gold_bars',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/quark/gold_bars_deconstruction')
  }
  if (Platform.isLoaded('supplementaries')) {
    event.recipes.create.item_application('2x minecraft:gold_ingot', [
      'supplementaries:gold_door',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/supplementaries/gold_door_deconstruction')
    event.recipes.create.item_application('4x minecraft:gold_ingot', [
      'supplementaries:gold_trapdoor',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/supplementaries/gold_trapdoor_deconstruction')
    event.recipes.create.item_application([
      'supplementaries:gold_door',
      'minecraft:netherite_scrap'
    ], [
      'supplementaries:netherite_door',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/supplementaries/netherite_door_deconstruction')
    event.recipes.create.item_application([
      'supplementaries:gold_trapdoor',
      'minecraft:netherite_scrap'
    ], [
      'supplementaries:netherite_trapdoor',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/supplementaries/netherite_trapdoor_deconstruction')
  }
  if (Platform.isLoaded('irons_spellbooks')) {
    event.recipes.create.deploying([
      '3x minecraft:amethyst_block',
      '2x minecraft:anvil',
      'minecraft:diamond',
      'minecraft:netherite_ingot'
    ], [
      'irons_spellbooks:arcane_anvil',
      'kubejs:deconstructor'
    ]).keepHeldItem().id('finality:item_application/irons_spellbooks/arcane_anvil_deconstruction')
  }
})