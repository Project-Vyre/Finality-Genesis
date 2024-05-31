// requires: functionalstorage
// requires: monobank
// requires: create
// requires: kubejs_create
// ignored: false

/**
 * @file Server handler for Functional Storage
 * @version Genesis
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove([
    { id: 'functionalstorage:oak_drawer_alternate_x1' },
    { id: 'functionalstorage:oak_drawer_alternate_x2'},
    { id: 'functionalstorage:oak_drawer_alternate_x4'},
    { id: 'functionalstorage:compacting_drawer' },
    { id: 'functionalstorage:compacting_framed_drawer' },
    { id: 'functionalstorage:simple_compacting_drawer' },
    { id: 'functionalstorage:framed_simple_compacting_drawer' },
    { id: 'functionalstorage:copper_upgrade' },
    { id: 'functionalstorage:gold_upgrade' },
    { id: 'functionalstorage:diamond_upgrade' },
    { id: 'functionalstorage:netherite_upgrade' },
    { id: 'functionalstorage:collector_upgrade' },
    { id: 'functionalstorage:puller_upgrade' },
    { id: 'functionalstorage:pusher_upgrade' },
    { id: 'functionalstorage:void_upgrade' },
    { id: 'functionalstorage:ender_drawer' }
  ])
  event.shapeless('kubejs:ender_drawer_linking_guide', [
    'minecraft:ender_pearl',
    'minecraft:paper'
  ]).id('finality:ender_drawer_linking_guide')
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let material = WOOD_TYPES[i];
    event.shaped(`functionalstorage:${material}_1`, [
      'WWW',
      'WIW',
      'WWW'
    ], {
      W: `minecraft:${material}_planks`,
      I: 'monobank:monobank'
    }).id(`functionalstorage:${material}_1`)
    event.shaped(`functionalstorage:${material}_2`, [
      'WIW',
      'WWW',
      'WIW'
    ], {
      W: `minecraft:${material}_planks`,
      I: 'monobank:monobank'
    }).id(`functionalstorage:${material}_2`)
    event.shaped(`functionalstorage:${material}_4`, [
      'IWI',
      'WWW',
      'IWI'
    ], {
      W: `minecraft:${material}_planks`,
      I: 'monobank:monobank'
    }).id(`functionalstorage:${material}_4`)
  }
  event.shaped('functionalstorage:framed_1', [
    'III',
    'IVI',
    'III'
  ], {
    I: 'minecraft:iron_nugget',
    V: 'monobank:monobank'
  }).id('functionalstorage:framed_1')
  event.shaped('functionalstorage:framed_2', [
    'IVI',
    'III',
    'IVI'
  ], {
    I: 'minecraft:iron_nugget',
    V: 'monobank:monobank'
  }).id('functionalstorage:framed_2')
  event.shaped('functionalstorage:framed_4', [
    'VIV',
    'III',
    'VIV'
  ], {
    I: 'minecraft:iron_nugget',
    V: 'monobank:monobank'
  }).id('functionalstorage:framed_4')
  event.shaped('functionalstorage:fluid_1', [
    'III',
    'IFI',
    'III'
  ], {
    I: 'create:iron_sheet',
    F: 'create:fluid_tank'
  }).id('functionalstorage:fluid_1')
  event.shaped('functionalstorage:fluid_2', [
    'IFI',
    'III',
    'IFI'
  ], {
    I: 'create:iron_sheet',
    F: 'create:fluid_tank'
  }).id('functionalstorage:fluid_2')
  event.shaped('functionalstorage:fluid_4', [
    'FIF',
    'III',
    'FIF'
  ], {
    I: 'create:iron_sheet',
    F: 'create:fluid_tank'
  }).id('functionalstorage:fluid_4')
  /**
   * Compacting Drawers
   */
  event.recipes.create.mechanical_crafting('functionalstorage:compacting_drawer', [
    'SSS',
    'PDP',
    'SIS'
  ], {
    S: 'minecraft:stone',
    P: 'create:mechanical_piston',
    D: '#functionalstorage:drawer',
    I: 'minecraft:iron_block'
  }).id('finality:mechanical_crafting/compacting_drawer')
  event.recipes.create.mechanical_crafting('functionalstorage:simple_compacting_drawer', [
    'SSS',
    'SDP',
    'SIS'
  ], {
    S: 'minecraft:stone',
    P: 'create:mechanical_piston',
    D: '#functionalstorage:drawer',
    I: 'minecraft:iron_block'
  }).id('finality:mechanical_crafting/simple_compacting_drawer')
  event.recipes.create.mechanical_crafting('functionalstorage:compacting_framed_drawer', [
    'SSS',
    'PDP',
    'SIS'
  ], {
    S: 'minecraft:iron_nugget',
    P: 'create:mechanical_piston',
    D: '#functionalstorage:drawer',
    I: 'minecraft:iron_block'
  }).id('finality:mechanical_crafting/compacting_framed_drawer')
  event.recipes.create.mechanical_crafting('functionalstorage:framed_simple_compacting_drawer', [
    'SSS',
    'SDP',
    'SIS'
  ], {
    S: 'minecraft:iron_nugget',
    P: 'create:mechanical_piston',
    D: '#functionalstorage:drawer',
    I: 'minecraft:iron_block'
  }).id('finality:mechanical_crafting/framed_simple_compacting_drawer')
  event.recipes.create.mechanical_crafting('functionalstorage:ender_drawer', [
    'SSS',
    'DED',
    'SSS'
  ], {
    S: 'create:sturdy_sheet',
    D: '#functionalstorage:drawer',
    E: 'kubejs:ender_pearl_singularity'
  }).id('finality:functionalstorage/mechanical_crafting/ender_drawer')
  //event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: 'functionalstorage:oak_1' }, replace => {
  //    event.shaped(Item.of(replace.originalRecipeResult.id), [
  //        'WWW',
  //        'WIW',
  //        'WWW'
  //    ], {
  //        W: 'minecraft:oak_planks',
  //        I: 'monobank:monobank'
  //    }).id(replace.getOrCreateId())
  //})
  /**
   * To Do List
   * 
   * Implement singularities into Functional Storage upgrade modules and other items whereever applicable
   */
  /**
   * Upgrade Modules
   */
  event.shaped('functionalstorage:copper_upgrade', [
    'CCC',
    'CMC',
    'CCC'
  ], {
    C: 'kubejs:copper_singularity',
    M: 'monobank:monobank'
  }).id('finality:functionalstorage/crafting/copper_upgrade')
  event.shaped('functionalstorage:gold_upgrade', [
    'GGG',
    'GUG',
    'GGG'
  ], {
    G: 'kubejs:gold_singularity',
    U: 'functionalstorage:copper_upgrade'
  }).id('finality:functionalstorage/crafting/gold_upgrade')
  event.shaped('functionalstorage:diamond_upgrade', [
    'DDD',
    'DUD',
    'DDD'
  ], {
    D: 'kubejs:diamond_singularity',
    U: 'functionalstorage:gold_upgrade'
  }).id('finality:functionalstorage/crafting/diamond_upgrade')
  event.shaped('functionalstorage:netherite_upgrade', [
    'NNN',
    'NUN',
    'NNN'
  ], {
    N: 'kubejs:netherite_singularity',
    U: 'functionalstorage:diamond_upgrade'
  }).id('finality:functionalstorage/crafting/netherite_upgrade')
  // Utility Upgrades
  event.shaped('functionalstorage:collector_upgrade', [
    'IHI',
    'RDR',
    'IHI'
  ], {
    I: '#forge:plates/iron',
    H: 'minecraft:hopper',
    R: 'minecraft:redstone',
    D: '#functionalstorage:drawer'
  }).id('finality:functionalstorage/crafting/collector_upgrade')
  event.shaped('functionalstorage:puller_upgrade', [
    'IHI',
    'IDI',
    'IRI'
  ], {
    I: '#forge:plates/iron',
    H: 'minecraft:hopper',
    R: 'minecraft:redstone',
    D: '#functionalstorage:drawer'
  }).id('finality:functionalstorage/crafting/puller_upgrade')
  event.shaped('functionalstorage:pusher_upgrade', [
    'IRI',
    'IDI',
    'IHI'
  ], {
    I: '#forge:plates/iron',
    H: 'minecraft:hopper',
    R: 'minecraft:redstone',
    D: '#functionalstorage:drawer'
  }).id('finality:functionalstorage/pusher_upgrade')
  event.shaped('functionalstorage:void_upgrade', [
    'UUU',
    'UDU',
    'UUU'
  ], {
    U: '#forge:plates/obsidian',
    D: '#functionalstorage:drawer'
  }).id('finality:functionalstorage/void_upgrade')
})
/*
ServerEvents.tags('block', event => {
  for (let type of WOOD_TYPES) {
    event.add('create:wrench_pickup', [
      `functionalstorage:${type}_1`,
      `functionalstorage:${type}_2`,
      `functionalstorage:${type}_4`
    ])
  }
  event.add('create:wrench_pickup', [
    'functionalstorage:compacting_drawer',
    'functionalstorage:simple_compacting_drawer',
    'functionalstorage:storage_controller',
    'functionalstorage:controller_extension',
    'functionalstorage:fluid_1',
    'functionalstorage:fluid_2',
    'functionalstorage:fluid_4',
    'functionalstorage:framed_1',
    'functionalstorage:framed_2',
    'functionalstorage:framed_4',
    'functionalstorage:compacting_framed_drawer',
    'functionalstorage:framed_simple_compacting_drawer',
    'functionalstorage:framed_storage_controller',
    'functionalstorage:framed_controller_extension',
    'functionalstorage:armory_cabinet',
    'functionalstorage:ender_drawer'
  ])
})
*/