// requires: mysticalagriculture
// requires: mysticalagradditions
// requires: extendedcrafting
// requires: kubejs_create

/**
 * @file Server handler for Mystical Agriculture.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
To-Do List

Rework essences, specifically Diamond, Brass, Steel and wherever applicable.
 - This is mostly due to the amount of difference and to encourage more automation with Create.

Rework recipes that require Supremium wherever applicable.
*/

let SEED_PROCESSING_ELIGIBLE = [
  'air',
  'earth',
  'water',
  'fire',
  'stone',
  'dirt',
  'wood',
  'ice',
  'deepslate',
  'nature',
  'dye',
  'nether',
  'coal',
  'coral',
  'honey',
  'amethyst',
  'pig',
  'chicken',
  'cow',
  'sheep',
  'squid',
  'fish',
  'slime',
  'turtle',
  'limestone',
  'inferium',
  'iron',
  'copper',
  'nether_quartz',
  'glowstone',
  'redstone',
  'obsidian',
  'prismarine',
  'zombie',
  'skeleton',
  'creeper',
  'spider',
  'rabbit',
  'zinc',
  'brass',
  'gold',
  'lapis_lazuli',
  'end',
  'experience',
  'blaze',
  'ghast',
  'enderman',
  'diamond',
  'emerald',
  'netherite',
  'wither_skeleton',
  'nether_star',
  'dragon_egg'
]

let iumTiers = [
  'inferium',
  'prudentium',
  'tertium',
  'imperium',
  'supremium',
  'awakened_supremium'
]

ServerEvents.recipes(event => {
  /**
   * 
   * @param {string} seedInput 
   * @param {string} essenceOutput 
   */
  let seedMillstoneReprocessing = (seedInput, essenceOutput) => {
    event.recipes.create.milling([
      `2x mysticalagriculture:${essenceOutput}_essence`,
      Item.of(`mysticalagriculture:${essenceOutput}_essence`).withChance(0.25)
    ], `mysticalagriculture:${seedInput}_seeds`).processingTime(100).id(`finality:mysticalagriculture/milling/${seedInput}_seed_reprocessing`)
  }
  /**
   * 
   * @param {Internal.ItemStack[]} outputs 
   * @param {Internal.ItemStack[]} inputs 
   * @param {string} id 
   */
  let heatedEssenceCompacting = (outputs, inputs, recipeId) => {
    event.recipes.create.compacting(outputs, inputs).heated().id(`finality:mysticalagriculture/heated_compacting/${recipeId}`)
  }
  /**
   * 
   * @param {Internal.ItemStack[]} outputs 
   * @param {Internal.ItemStack[]} inputs 
   * @param {string} id 
   */
  let superheatedEssenceCompacting = (outputs, inputs, recipeId) => {
    event.recipes.create.compacting(outputs, inputs).superheated().id(`finality:mysticalagriculture/superheated_compacting/${recipeId}`)
  }

  /**
   * 
   * @param {Internal.ItemStack[]} outputs 
   * @param {Internal.ItemStack[]} inputs 
   * @param {string} recipeId 
   */
  let heatedEssenceMixing = (outputs, inputs, recipeId) => {
    event.recipes.create.mixing(outputs, inputs).heated().id(`finality:mysticalagriculture/heated_mixing/${recipeId}`)
  }

  /**
   * 
   * @param {Internal.ItemStack[]} outputs 
   * @param {Internal.ItemStack[]} inputs 
   * @param {string} recipeId 
   */
  let superheatedEssenceMixing = (outputs, inputs, recipeId) => {
    event.recipes.create.mixing(outputs, inputs).superheated().id(`finality:mysticalagriculture/superheated_mixing/${recipeId}`)
  }
  event.remove([
    { type: 'mysticalagriculture:reprocessor' },
    { id: 'mysticalagriculture:essence/minecraft/dirt' },
    { id: 'mysticalagriculture:essence/minecraft/amethyst' },
    { id: 'mysticalagriculture:essence/minecraft/quartz' },
    { id: 'mysticalagriculture:essence/minecraft/iron_ingot' },
    { id: 'mysticalagriculture:essence/minecraft/gold_ingot' },
    { id: 'mysticalagriculture:essence/minecraft/copper_ingot' },
    { id: 'mysticalagriculture:essence/common/zinc_ingot' },
    { id: 'mysticalagriculture:essence/common/brass_ingot' },
    { id: 'mysticalagriculture:essence/common/steel_ingot' },
    { id: 'mysticalagriculture:essence/minecraft/diamond' },
    { id: 'mysticalagriculture:essence/minecraft/obsidian' },
    { id: 'mysticalagriculture:essence/minecraft/netherite_ingot' },
    { id: 'mysticalagriculture:essence/minecraft/glowstone_dust' },
    { id: 'mysticalagriculture:essence/minecraft/netherrack' },
    { id: 'mysticalagriculture:essence/minecraft/crimson_nylium' },
    { id: 'mysticalagriculture:essence/minecraft/warped_nylium' },
    { id: 'mysticalagriculture:essence/minecraft/ghast_tear' },
    { id: 'mysticalagriculture:essence/minecraft/chorus_fruit' },
    { id: 'mysticalagriculture:supremium_ingot' },
    { id: 'mysticalagriculture:supremium_gemstone' }
  ])
  // infusion essence
  event.recipes.create.mixing([
    Fluid.of('kubejs:inferior_infusion_essence', 250)
  ], [
    '4x mysticalagriculture:inferium_essence',
    '4x mysticalagriculture:prosperity_shard',
  ]).id('finality:mysticalagriculture/mixing/infusion_crystal_essence')
  event.recipes.create.mixing([
    Fluid.of('kubejs:supreme_infusion_essence', 250)
  ], [
    '4x mysticalagriculture:supremium_essence',
    '4x mysticalagriculture:prosperity_shard',
  ]).id('finality:mysticalagriculture/mixing/master_infusion_crystal_essence')
  // infusion crystals
  event.shaped('kubejs:denied_result', [
    'IPI',
    'PDP',
    'IPI'
  ], {
    I: 'mysticalagriculture:inferium_essence',
    P: 'mysticalagriculture:prosperity_shard',
    D: 'minecraft:diamond'
  }).id('mysticalagriculture:infusion_crystal')
  event.shaped('kubejs:denied_result', [
    'EPE',
    'PDP',
    'EPE'
  ], {
    E: 'mysticalagriculture:supremium_essence',
    P: 'mysticalagriculture:prosperity_shard',
    D: 'mysticalagriculture:supremium_gemstone'
  }).id('mysticalagriculture:master_infusion_crystal')
  event.recipes.create.filling('mysticalagriculture:infusion_crystal', [
    'minecraft:diamond',
    Fluid.of('kubejs:inferior_infusion_essence', 250)
  ]).id('finality:mysticalagriculture/filling/infusion_crystal')
  event.recipes.create.filling('mysticalagriculture:master_infusion_crystal', [
    'mysticalagriculture:supremium_gemstone',
    Fluid.of('kubejs:supreme_infusion_essence', 250)
  ]).id('finality:mysticalagriculture/filling/master_infusion_crystal')
  // infusion crystal draining
  event.recipes.create.emptying([
    Fluid.of('kubejs:infusion_energy', 1000),
    Item.of('mysticalagriculture:master_infusion_crystal')
  ], 'mysticalagriculture:master_infusion_crystal').id('finality:mysticalagriculture/emptying/infusion_energy')
  // renewable prosperity shards
  event.recipes.create.crushing([
    Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
    Item.of('mysticalagriculture:prosperity_seed_base').withChance(0.009765625)
  ], 'minecraft:coarse_dirt').processingTime(250).id('finality:mysticalagriculture/crushing/renew_prosperity')
  event.recipes.create.compacting([
    Fluid.of('minecraft:milk', 1000),
    Item.of('create:experience_nugget').withChance(0.25)
  ], '4x mysticalagriculture:cow_essence').id('finality:mysticalagriculture/compacting/milk_from_cow_essence')
  // redstone
  event.shaped('8x minecraft:redstone', [
    'RRR',
    'RSR',
    'RRR'
  ], {
    R: 'mysticalagriculture:redstone_essence',
    S: Item.of('minecraft:potion', '{Potion:"minecraft:strength"}').weakNBT()
  }).id('mysticalagriculture:essence/minecraft/redstone')
  event.recipes.create.mixing('8x minecraft:redstone', [
    '8x mysticalagriculture:redstone_essence',
    '8x create:cinder_flour',
    Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strength"}')
  ]).id('finality:mysticalagriculture/mixing/redstone')
  /**
   * Fire Essence
   */
  // Sand
  event.shaped('minecraft:red_sand', [
    'DF',
    'FG'
  ], {
    D: 'mysticalagriculture:dirt_essence',
    F: 'mysticalagriculture:fire_essence',
    G: 'minecraft:gold_nugget'
  }).id('mysticalagriculture:essence/minecraft/red_sand')
  event.recipes.create.mixing('minecraft:red_sand', [
    '2x mysticalagriculture:dirt_essence',
    '2x mysticalagriculture:fire_essence',
    'minecraft:gold_nugget'
  ]).id('finality:mysticalagriculture/mixing/red_sand')
  event.shaped('minecraft:sand', [
    'DF',
    'FD'
  ], {
    D: 'mysticalagriculture:dirt_essence',
    F: 'mysticalagriculture:fire_essence'
  }).id('mysticalagriculture:essence/minecraft/sand')
  event.recipes.create.mixing('minecraft:sand', [
    '2x mysticalagriculture:dirt_essence',
    '2x mysticalagriculture:fire_essence'
  ]).id('finality:mysticalagriculture/mixing/sand')
  event.shaped('8x minecraft:soul_sand', [
    'NNN',
    'NFN',
    'NNN'
  ], {
    N: 'mysticalagriculture:nether_essence',
    F: 'mysticalagriculture:fire_essence'
  }).id('mysticalagriculture:essence/minecraft/soul_sand')
  event.recipes.create.mixing('8x minecraft:soul_sand', [
    '8x mysticalagriculture:nether_essence',
    'mysticalagriculture:fire_essence'
  ]).id('finality:mysticalagriculture/mixing/soul_sand')

  event.recipes.create.compacting([Fluid.of('minecraft:lava', 1000)], [
    '9x mysticalagriculture:fire_essence'
  ]).id('finality:mysticalagriculture/compacting/lava')

  event.shaped('minecraft:tuff', [
    ' S ',
    'SFS',
    ' S '
  ], {
    S: 'mysticalagriculture:stone_essence',
    F: 'mysticalagriculture:fire_essence'
  }).id('mysticalagriculture:essence/minecraft/tuff')
  event.recipes.create.compacting('4x minecraft:tuff', [
    '4x mysticalagriculture:stone_essence',
    'mysticalagriculture:fire_essence'
  ]).id('finality:mysticalagriculture/compacting/tuff')
  event.shaped('2x minecraft:flint', [
    'SF',
    'FS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    F: 'mysticalagriculture:fire_essence'
  }).id('mysticalagriculture:essence/minecraft/flint')
  event.recipes.create.mixing('2x minecraft:flint', [
    '2x mysticalagriculture:stone_essence',
    '2x mysticalagriculture:fire_essence'
  ]).id('finality:mysticalagriculture/mixing/flint')
  /**
   * Earth Essence
   */
  /**
   * Water Essence
   */
  event.recipes.create.mixing('4x minecraft:mud', [
    '4x mysticalagriculture:dirt_essence',
    'mysticalagriculture:water_essence'
  ]).id('finality:mysticalagriculture/mixing/mud')
  // stone essence
  event.shaped('8x minecraft:cobblestone', [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence'
  }).id('mysticalagriculture:essence/minecraft/cobblestone')
  event.recipes.create.compacting('8x minecraft:cobblestone', [
    '8x mysticalagriculture:stone_essence'
  ]).id('finality:mysticalagriculture/compacting/cobblestone')

  event.shaped('8x minecraft:stone', [
    'SSS',
    'SCS',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    C: 'mysticalagriculture:coal_essence'
  }).id('mysticalagriculture:essence/minecraft/stone')
  event.recipes.create.compacting('8x minecraft:stone', [
    '8x mysticalagriculture:stone_essence',
    'mysticalagriculture:coal_essence'
  ]).id('finality:mysticalagriculture/compacting/stone')
  event.recipes.create.compacting('8x minecraft:stone', [
    '8x mysticalagriculture:stone_essence'
  ]).heated().id('finality:mysticalagriculture/compacting/stone_heated')

  // deepslate related
  event.recipes.create.compacting('8x minecraft:cobbled_deepslate', [
    '8x mysticalagriculture:deepslate_essence'
  ]).id('finality:mysticalagriculture/compacting/cobbled_deepslate')
  event.recipes.create.compacting('8x minecraft:deepslate', [
    '8x mysticalagriculture:deepslate_essence',
    'mysticalagriculture:coal_essence'
  ]).id('finality:mysticalagriculture/compacting/deepslate')
  event.recipes.create.compacting(
    '8x minecraft:deepslate',
    '8x mysticalagriculture:deepslate_essence'
  ).heated().id('finality:mysticalagriculture/compacting/deepslate_from_heated_compacting')
  // stone variants
  event.shaped('4x minecraft:andesite', [
    ' S ',
    'SSS',
    ' Q '
  ], {
    S: 'mysticalagriculture:stone_essence',
    Q: 'mysticalagriculture:nether_quartz_essence'
  }).id('mysticalagriculture:essence/minecraft/andesite')
  event.recipes.create.compacting('4x minecraft:andesite', [
    '4x mysticalagriculture:stone_essence',
    'mysticalagriculture:nether_quartz_essence'
  ]).id('finality:mysticalagriculture/compacting/andesite')
  event.shaped('4x minecraft:diorite', [
    'SS ',
    'S Q',
    ' QQ'
  ], {
    S: 'mysticalagriculture:stone_essence',
    Q: 'mysticalagriculture:nether_quartz_essence'
  }).id('mysticalagriculture:essence/minecraft/diorite')
  event.recipes.create.compacting('4x minecraft:diorite', [
    '3x mysticalagriculture:stone_essence',
    '3x mysticalagriculture:nether_quartz_essence'
  ]).id('finality:mysticalagriculture/compacting/diorite')
  event.shaped('4x minecraft:granite', [
    ' S ',
    'SQS',
    ' Q '
  ], {
    S: 'mysticalagriculture:stone_essence',
    Q: 'mysticalagriculture:nether_quartz_essence'
  }).id('mysticalagriculture:essence/minecraft/granite')
  event.recipes.create.compacting('4x minecraft:granite', [
    '4x mysticalagriculture:stone_essence',
    '2x mysticalagriculture:nether_quartz_essence'
  ]).id('finality:mysticalagriculture/compacting/granite')
  event.shaped('minecraft:obsidian', [
    'OOO',
    'OOO',
    'OOO'
  ], {
    O: 'mysticalagriculture:obsidian_essence'
  }).id('finality:mysticalagriculture/crafting/obsidian')
  event.shaped('4x minecraft:dripstone_block', [
    ' S ',
    'SWS',
    ' S '
  ], {
    S: 'mysticalagriculture:stone_essence',
    W: 'mysticalagriculture:water_essence'
  }).id('mysticalagriculture:essence/minecraft/dripstone')
  event.recipes.create.compacting('4x minecraft:dripstone_block', [
    '4x mysticalagriculture:stone_essence',
    'mysticalagriculture:water_essence'
  ]).id('finality:mysticalagriculture/compacting/dripstone')
  // Quartz
  event.shaped('minecraft:quartz', [
    'QQQ',
    'QQQ',
    'QQQ'
  ], {
    Q: 'mysticalagriculture:nether_quartz_essence'
  }).id('finality:mysticalagriculture/crafting/quartz')
  // Amethyst
  event.shaped('minecraft:amethyst_shard', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'mysticalagriculture:amethyst_essence'
  }).id('finality:mysticalagriculture/crafting/amethyst')
  event.shaped('8x minecraft:calcite', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    A: 'mysticalagriculture:amethyst_essence'
  }).id('mysticalagriculture:essence/minecraft/calcite')
  event.recipes.create.compacting('8x minecraft:calcite', [
    '8x mysticalagriculture:stone_essence',
    'mysticalagriculture:amethyst_essence'
  ]).id('finality:mysticalagriculture/compacting/calcite')

  event.shaped('2x minecraft:gravel', [
    'DS',
    'SD'
  ], {
    D: 'mysticalagriculture:dirt_essence',
    S: 'mysticalagriculture:stone_essence'
  }).id('mysticalagriculture:essence/minecraft/gravel')
  event.recipes.create.mixing('2x minecraft:gravel', [
    '2x mysticalagriculture:dirt_essence',
    '2x mysticalagriculture:stone_essence'
  ]).id('finality:mysticalagriculture/mixing/gravel')

  event.recipes.create.mixing(
    '4x minecraft:snow_block',
    '4x mysticalagriculture:ice_essence'
  ).id('finality:mysticalagriculture/mixing/snow_block')
  event.recipes.create.compacting(
    '8x minecraft:ice',
    '8x mysticalagriculture:ice_essence'
  ).id('finality:mysticalagriculture/compacting/ice')
  /**
   * Create Orestones
   */
  // Asurine
  event.shaped('8x create:asurine', [
    'SSS',
    'SZS',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    Z: 'mysticalagriculture:zinc_essence'
  }).id('mysticalagriculture:essence/create/asurine')
  event.recipes.create.compacting('8x create:asurine', [
    '8x mysticalagriculture:stone_essence',
    'mysticalagriculture:zinc_essence'
  ]).id('finality:mysticalagriculture/compacting/asurine')
  // Crimsite
  event.shaped('8x create:crimsite', [
    'SSS',
    'SIS',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    I: 'mysticalagriculture:iron_essence'
  }).id('mysticalagriculture:essence/create/crimsite')
  event.recipes.create.compacting('8x create:crimsite', [
    '8x mysticalagriculture:stone_essence',
    'mysticalagriculture:iron_essence'
  ]).id('finality:mysticalagriculture/compacting/crimsite')
  // Ochrum
  event.shaped('8x create:ochrum', [
    'SSS',
    'SGS',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    G: 'mysticalagriculture:gold_essence'
  }).id('mysticalagriculture:essence/create/ochrum')
  event.recipes.create.compacting('8x create:ochrum', [
    '8x mysticalagriculture:stone_essence',
    'mysticalagriculture:gold_essence'
  ]).id('finality:mysticalagriculture/compacting/ochrum')
  // Veridium
  event.shaped('8x create:veridium', [
    'SSS',
    'SCS',
    'SSS'
  ], {
    S: 'mysticalagriculture:stone_essence',
    C: 'mysticalagriculture:copper_essence'
  }).id('mysticalagriculture:essence/create/veridium')
  event.recipes.create.compacting('8x create:veridium', [
    '8x mysticalagriculture:stone_essence',
    'mysticalagriculture:copper_essence'
  ]).id('finality:mysticalagriculture/compacting/veridium')
  // Limestone
  event.shaped('8x create:limestone', [
    'LLL',
    'LLL',
    'LLL'
  ], {
    L: 'mysticalagriculture:limestone_essence'
  }).id('mysticalagriculture:essence/create/limestone')
  // heart of the sea
  event.shaped('minecraft:heart_of_the_sea', [
    'SDP',
    'DND',
    'PDS',
  ], {
    D: 'mysticalagriculture:diamond_essence',
    S: 'mysticalagriculture:squid_essence',
    P: 'mysticalagriculture:prismarine_essence',
    N: 'minecraft:nautilus_shell'
  }).id('mysticalagriculture:essence/minecraft/heart_of_the_sea')
  event.recipes.create.mixing('4x minecraft:heart_of_the_sea', [
    'minecraft:nautilus_shell',
    '4x mysticalagriculture:diamond_essence',
    '4x mysticalagriculture:prismarine_essence',
    '4x mysticalagriculture:squid_essence'
  ]).id('finality:mysticalagriculture/mixing/sea_heart')
  event.recipes.create.mechanical_crafting('4x minecraft:heart_of_the_sea', [
    '  S  ',
    ' SDP ',
    'PDNDP',
    ' PDS ',
    '  S  '
  ], {
    D: 'mysticalagriculture:diamond_essence',
    S: 'mysticalagriculture:squid_essence',
    P: 'mysticalagriculture:prismarine_essence',
    N: 'minecraft:nautilus_shell'
  }).id('finality:mysticalagriculture/mechanical_crafting/heart_of_the_sea')
  event.shaped('minecraft:honey_bottle', [
    'HB'
  ], {
    H: 'mysticalagriculture:honey_essence',
    B: 'minecraft:glass_bottle'
  }).id('mysticalagriculture:essence/minecraft/honey_bottle')
  event.shaped('minecraft:honey_bottle', [
    'H',
    'B'
  ], {
    H: 'mysticalagriculture:honey_essence',
    B: 'minecraft:glass_bottle'
  }).id('finality:mysticalagriculture/honey_bottle_vertical')
  event.shaped('6x minecraft:honeycomb', [
    'HHH'
  ], {
    H: 'mysticalagriculture:honey_essence'
  }).id('mysticalagriculture:essence/minecraft/honeycomb')
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
  event.shaped('minecraft:dirt', [
    'DDD',
    'DDD',
    'DDD'
  ], {
    D: 'mysticalagriculture:dirt_essence'
  }).id('finality:mysticalagriculture/essence/dirt')
  event.shaped('8x minecraft:soul_soil', [
    'NNN',
    'NEN',
    'NNN'
  ], {
    N: 'mysticalagriculture:nether_essence',
    E: 'mysticalagriculture:earth_essence'
  }).id('mysticalagriculture:essence/minecraft/soul_soil')
  event.recipes.create.mixing('8x minecraft:soul_soil', [
    '4x mysticalagriculture:nether_essence',
    'mysticalagriculture:earth_essence'
  ]).id('finality:mysticalagriculture/mixing/soul_soil')
  // NETHERRACK
  event.shaped('8x minecraft:netherrack', [
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
  event.recipes.kubejs.shaped('minecraft:ghast_tear', [
    'TTT',
    'TTT',
    'TTT'
  ], {
    T: 'mysticalagriculture:ghast_essence'
  }).id('finality:mysticalagriculture/crafting/ghast_tear')
  // machine frame related
  event.shaped('mysticalagriculture:machine_frame', [
    'IRI',
    'RSR',
    'IRI'
  ], {
    I: 'create:iron_sheet',
    R: 'minecraft:redstone',
    S: '#forge:stone'
  }).id('mysticalagriculture:machine_frame')
  event.shaped('mysticalagriculture:soul_extractor', [
    'FSF',
    'DBD',
    'FSF'
  ], {
    F: 'mysticalagriculture:machine_frame',
    S: 'mysticalagriculture:soulium_ingot',
    D: 'mysticalagriculture:soulium_dagger',
    B: 'create:deployer'
  }).id('mysticalagriculture:soul_extractor')
  event.shaped('kubejs:removed_item', [
    'ISI',
    'YMY',
    'ISI'
  ], {
    I: 'minecraft:iron_ingot',
    S: 'mysticalagriculture:soulium_ingot',
    Y: '#mysticalagriculture:diamond_scythes',
    M: 'mysticalagriculture:machine_frame',
  }).id('mysticalagriculture:harvester')
  // soulstone and soulium related
  event.recipes.create.mixing('mysticalagriculture:soulstone', [
    'minecraft:soul_sand',
    'minecraft:stone',
    'create:cinder_flour',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:mixing/soulstone_renewal')
  event.recipes.create.compacting('mysticalagriculture:soulium_ore', [
    'mysticalagriculture:soulstone',
    Fluid.of('kubejs:shimmer', 750)
  ]).id('finality:compacting/soulium_ore_renewal')
  // miscellaneous
  event.recipes.create.mixing('4x mysticalagriculture:mystical_fertilizer', [
    '4x mysticalagriculture:inferium_essence',
    '4x minecraft:bone_meal',
    'minecraft:diamond'
  ]).id('finality:mysticalagriculture/mixing/mystical_fertilizer')

  event.recipes.create.mixing('8x mysticalagriculture:mystical_fertilizer', [
    '4x mysticalagriculture:inferium_essence',
    '4x mysticalagriculture:fertilized_essence',
    'minecraft:diamond'
  ]).id('finality:mysticalagriculture/mixing/mystical_fertilizer_better_eff')

  event.recipes.create.item_application('mysticalagriculture:witherproof_glass', [
    'mysticalagriculture:soul_glass',
    'mysticalagriculture:wither_skeleton_essence'
  ]).id('finality:item_application/mysticalagriculture/witherproof_glass')

  // and just to keep patchouli silent
  event.shaped('kubejs:denied_result', [
    ' W ',
    'WSW',
    ' W '
  ], {
    W: 'mysticalagriculture:wither_essence',
    S: 'mysticalagriculture:soul_glass'
  }).id('mysticalagriculture:witherproof_glass')

  let agglomeratios = [
    'air',
    'earth',
    'water',
    'fire',
    'nature',
    'dye',
    'nether',
    'coral',
    'honey',
    'prismarine',
    'end'
  ]
  for (let index = 0; index < agglomeratios.length; index++) {
    event.forEachRecipe({
      type: 'minecraft:crafting_shaped',
      output: `mysticalagriculture:${agglomeratios[index]}_agglomeratio`
    }, recipe => {
      let ingredients = recipe.originalRecipeIngredients
      let result = recipe.originalRecipeResult
      event.shapeless(result, ingredients).id(recipe.getId())
    })
  }

  // get it? because the mixer whisks AIR into the mixture?
  event.recipes.create.mixing('mysticalagriculture:air_agglomeratio', [
    'minecraft:gravel',
    'minecraft:dirt',
    'minecraft:clay_ball'
  ]).id('finality:mysticalagriculture/mixing/air_agglomeratio')

  event.recipes.create.mixing('mysticalagriculture:water_agglomeratio', [
    'minecraft:gravel',
    'minecraft:dirt',
    'minecraft:clay_ball',
    Fluid.of('minecraft:water', 1000)
  ]).id('finality:mysticalagriculture/mixing/water_agglomeratio')

  event.recipes.create.mixing('mysticalagriculture:fire_agglomeratio', [
    'minecraft:gravel',
    'minecraft:dirt',
    'minecraft:clay_ball',
    Fluid.of('minecraft:lava', 1000)
  ]).id('finality:mysticalagriculture/mixing/fire_agglomeratio')

  event.recipes.create.mixing('mysticalagriculture:honey_agglomeratio', [
    '2x minecraft:honeycomb',
    Fluid.of('create:honey', 500)
  ]).id('finality:mysticalagriculture/mixing/honey_agglomeratio')
  // growth accelerator upgrading
  event.recipes.create.item_application('mysticalagriculture:prudentium_growth_accelerator', [
    'mysticalagriculture:inferium_growth_accelerator',
    'mysticalagriculture:prudentium_upgrade'
  ]).id('finality:mysticalagriculture/item_application/inferium_to_prudentium_growth_accelerator')
  event.recipes.create.item_application('mysticalagriculture:tertium_growth_accelerator', [
    'mysticalagriculture:prudentium_growth_accelerator',
    'mysticalagriculture:tertium_upgrade'
  ]).id('finality:mysticalagriculture/item_application/prudentium_to_tertium_growth_accelerator')
  event.recipes.create.item_application('mysticalagriculture:imperium_growth_accelerator', [
    'mysticalagriculture:tertium_growth_accelerator',
    'mysticalagriculture:imperium_upgrade'
  ]).id('finality:mysticalagriculture/item_application/tertium_to_imperium_growth_accelerator')
  event.recipes.create.item_application('mysticalagriculture:supremium_growth_accelerator', [
    'mysticalagriculture:imperium_growth_accelerator',
    'mysticalagriculture:supremium_upgrade'
  ]).id('finality:mysticalagriculture/item_application/imperium_to_supremium_growth_accelerator')
  // seed reprocessing via millstone
  for (let i = 0; i < SEED_PROCESSING_ELIGIBLE.length; i++) {
    let element = SEED_PROCESSING_ELIGIBLE[i];
    seedMillstoneReprocessing(element, element)
  }

  if (Platform.isLoaded('ad_astra')) {
    event.recipes.create.milling([
      '2x mysticalagriculture:steel_essence',
      Item.of('mysticalagriculture:steel_essence').withChance(0.25)
    ], 'mysticalagriculture:steel_seeds').processingTime(100).id('finality:milling/steel_seed_reprocessing')
  }

  event.replaceOutput(
    { output: 'mysticalagriculture:basic_reprocessor' },
    'mysticalagriculture:basic_reprocessor',
    'kubejs:removed_item'
  )

  event.custom({
    type: "mysticalagriculture:awakening",
    essences: {
      "air": 40,
      "earth": 40,
      "water": 40,
      "fire": 40
    },
    input: Item.of('mysticalagriculture:supremium_reprocessor').toJson(),
    ingredients: [
      Ingredient.of('mysticalagriculture:awakened_supremium_gemstone').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_gemstone').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_gemstone').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_ingot').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_gemstone').toJson(),
      Ingredient.of('mysticalagriculture:awakened_supremium_ingot').toJson(),
    ],
    result: Item.of('kubejs:removed_item').toJson()
  }).id('mysticalagriculture:awakened_supremium_reprocessor')
  event.shaped('mysticalagriculture:unattuned_augment', [
    'SSS',
    'SBS',
    'SSS'
  ], {
    S: 'mysticalagriculture:prosperity_shard',
    B: 'extendedcrafting:basic_catalyst'
  }).id('mysticalagriculture:unattuned_augment')
  event.custom({
    type: 'mysticalagriculture:infusion',
    conditions: [
      {
        "type": "mysticalagriculture:augment_enabled",
        "augment": "mysticalagriculture:flight"
      }
    ],
    input: Item.of('mysticalagriculture:unattuned_augment').toJson(),
    ingredients: [
      Ingredient.of('extendedcrafting:flux_star').toJson(),
      Ingredient.of('kubejs:command_block').toJson(),
      Ingredient.of('extendedcrafting:flux_star').toJson(),
      Ingredient.of('kubejs:command_block').toJson(),
      Ingredient.of('extendedcrafting:flux_star').toJson(),
      Ingredient.of('kubejs:command_block').toJson(),
      Ingredient.of('extendedcrafting:flux_star').toJson(),
      Ingredient.of('kubejs:command_block').toJson()
    ],
    result: Item.of('mysticalagriculture:flight_augment').toJson()
  }).id('mysticalagriculture:augment/flight')
  for (let i = 0; i < iumTiers.length; i++) {
    let tier = iumTiers[i];
    event.replaceOutput(
      { output: `mysticalagriculture:${tier}_reprocessor` },
      `mysticalagriculture:${tier}_reprocessor`,
      'kubejs:removed_item'
    )
  }

  /**
   * Inferium Materials
   */

  /**
   * Supremium Materials and Items
   */
  event.recipes.create.mixing('mysticalagriculture:supremium_ingot', [
    'mysticalagriculture:prosperity_ingot',
    '4x mysticalagriculture:supremium_essence',
    Fluid.of('kubejs:molten_netherite', 180),
  ]).id('finality:mysticalagriculture/mixing/supremium_ingot')

  event.recipes.create.mixing('mysticalagriculture:supremium_gemstone', [
    'mysticalagriculture:prosperity_gemstone',
    '4x mysticalagriculture:supremium_essence',
  ]).id('finality:mysticalagriculture/mixing/supremium_gemstone')

  /**
   * Awakened Supremium Materials
   */
  event.shapeless('mysticalagriculture:awakened_supremium_ingot', [
    'mysticalagriculture:supremium_ingot',
    '4x mysticalagriculture:awakened_supremium_essence'
  ]).id('mysticalagriculture:awakened_supremium_ingot')

  event.shapeless('mysticalagriculture:awakened_supremium_gemstone', [
    'mysticalagriculture:supremium_gemstone',
    '4x mysticalagriculture:awakened_supremium_essence'
  ]).id('mysticalagriculture:awakened_supremium_gemstone')

  if (Platform.isLoaded('bhc')) {
    event.shaped('bhc:wither_bone', [
      'WWW',
      'W W',
      'WWW'
    ], {
      W: 'mysticalagriculture:wither_skeleton_essence'
    }).id('finality:bhc/shaped/wither_bone')
  }

  if (Platform.isLoaded('architects_palette')) {
    event.shaped('architects_palette:withered_bone', [
      'WWW',
      'WBW',
      'WWW'
    ], {
      W: 'mysticalagriculture:wither_skeleton_essence',
      B: 'minecraft:bone'
    }).id('finality:architects_paltte/shaped/wither_bone')
  }

  // heated essence compacting
  heatedEssenceCompacting([
    'minecraft:iron_ingot'
  ], [
    '9x mysticalagriculture:iron_essence'
  ], 'iron_ingot')

  heatedEssenceCompacting([
    'minecraft:gold_ingot'
  ], [
    '9x mysticalagriculture:gold_essence'
  ], 'gold_ingot')

  heatedEssenceCompacting([
    'minecraft:copper_ingot'
  ], [
    '9x mysticalagriculture:copper_essence'
  ], 'copper_ingot')

  heatedEssenceCompacting([
    'create:zinc_ingot'
  ], [
    '9x mysticalagriculture:zinc_essence'
  ], 'zinc_ingot')

  heatedEssenceCompacting([
    'create:brass_ingot'
  ], [
    '9x mysticalagriculture:brass_essence',
    Fluid.of('kubejs:infusion_energy', 1000)
  ], 'brass_ingot')

  if (Platform.isLoaded('ad_astra')) {
    heatedEssenceCompacting([
      'ad_astra:steel_ingot'
    ], [
      '9x mysticalagriculture:steel_essence'
    ], 'ad_astra/steel_ingot')
  }

  // superheated essence compacting
  superheatedEssenceCompacting([
    'minecraft:diamond',
    Item.of('create:experience_nugget').withChance(0.05)
  ], [
    '9x mysticalagriculture:diamond_essence',
    Fluid.of('kubejs:infusion_energy', 1000)
  ], 'diamond')

  superheatedEssenceCompacting([
    'minecraft:netherite_ingot'
  ], [
    '9x mysticalagriculture:netherite_essence',
    Fluid.of('kubejs:infusion_energy', 1000)
  ], 'netherite_ingot')
  event.recipes.create.mixing('minecraft:glowstone_dust', [
    'mysticalagriculture:glowstone_essence',
    'create:cinder_flour',
    Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:night_vision"}')
  ]).heated().id('finality:mysticalagriculture/mixing/glowstone_dust')
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'mysticalagriculture:infusion_pedestal',
    'mysticalagriculture:infusion_altar',
    'mysticalagriculture:awakening_pedestal',
    'mysticalagriculture:awakening_altar',
    'mysticalagriculture:essence_vessel',
    'mysticalagriculture:tinkering_table',
    'mysticalagriculture:machine_frame',
    'mysticalagriculture:soul_extractor'
  ])
  for (let i = 0; i < iumTiers.length; i++) {
    let furnaces = iumTiers[i];
    event.add('create:wrench_pickup', `mysticalagriculture:${furnaces}_furnace`)
  }
})

ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/deny', [
    'kubejs:inferior_infusion_essence',
    'kubejs:supreme_infusion_essence',
    'kubejs:infusion_energy'
  ])
})