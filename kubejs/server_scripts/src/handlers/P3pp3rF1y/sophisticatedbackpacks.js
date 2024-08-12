/**
 * @file Server handler for Sophisticated Backpacks.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: sophisticatedbackpacks
// requires: kubejs_create
// ignored: false

/* refuses to work for sophisticatedbackpacks.
let itemIds = [
  'pickup',
  'filter',
  'magnet',
  'feeding',
  'compacting',
  'void',
  'restock',
  'deposit',
  'refill',
  'tool_swapper',
  'pump'
]

let singleStep = [
  'inception',
  'everlasting',
  'crafting',
  'stonecutter',
  'jukebox',
  'tank',
  'battery',
  'anvil'
]

let autoIds = [
  'smelting',
  'smoking',
  'blasting'
]

for (let i = 0; i < itemIds.length; i++) {
  let element = itemIds[i];
  event.remove({ output: 'sophisticatedbackpacks:' + element + '_upgrade' })
  event.remove({ output: 'sophisticatedbackpacks:advanced_' + element + '_upgrade' })
}
for (let i = 0; i < singleStep.length; i++) {
  let element = singleStep[i];
  event.remove({ output: 'sophisticatedbackpacks:' + element + '_upgrade' })
}
for (let i = 0; i < autoIds.length; i++) {
  let element = autoIds[i];
  event.remove({ output: 'sophisticatedbackpacks:' + element + '_upgrade' })
  event.remove({ output: 'sophisticatedbackpacks:auto_' + element + '_upgrade' })
}
*/

ServerEvents.recipes(event => {
  event.remove([
    { id: 'sophisticatedbackpacks:upgrade_base' },
    { output: 'sophisticatedbackpacks:pickup_upgrade' },
    { output: 'sophisticatedbackpacks:filter_upgrade' },
    { output: 'sophisticatedbackpacks:magnet_upgrade' },
    { output: 'sophisticatedbackpacks:feeding_upgrade' },
    { output: 'sophisticatedbackpacks:compacting_upgrade' },
    { output: 'sophisticatedbackpacks:void_upgrade' },
    { output: 'sophisticatedbackpacks:restock_upgrade' },
    { output: 'sophisticatedbackpacks:deposit_upgrade' },
    { output: 'sophisticatedbackpacks:refill_upgrade' },
    { output: 'sophisticatedbackpacks:tool_swapper_upgrade' },
    { output: 'sophisticatedbackpacks:pump_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_pickup_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_filter_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_magnet_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_feeding_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_compacting_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_void_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_restock_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_deposit_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_refill_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade' },
    { output: 'sophisticatedbackpacks:advanced_pump_upgrade' },
    { output: 'sophisticatedbackpacks:inception_upgrade' },
    { output: 'sophisticatedbackpacks:everlasting_upgrade' },
    { output: 'sophisticatedbackpacks:crafting_upgrade' },
    { output: 'sophisticatedbackpacks:stonecutter_upgrade' },
    { output: 'sophisticatedbackpacks:jukebox_upgrade' },
    { output: 'sophisticatedbackpacks:tank_upgrade' },
    { output: 'sophisticatedbackpacks:battery_upgrade' },
    { output: 'sophisticatedbackpacks:anvil_upgrade' },
    { output: 'sophisticatedbackpacks:smelting_upgrade' },
    { output: 'sophisticatedbackpacks:smoking_upgrade' },
    { output: 'sophisticatedbackpacks:blasting_upgrade' },
    { output: 'sophisticatedbackpacks:auto_smelting_upgrade' },
    { output: 'sophisticatedbackpacks:auto_smoking_upgrade' },
    { output: 'sophisticatedbackpacks:auto_blasting_upgrade' },
    { output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' },
    { output: 'sophisticatedbackpacks:stack_upgrade_tier_1' },
    { output: 'sophisticatedbackpacks:stack_upgrade_tier_2' },
    { output: 'sophisticatedbackpacks:stack_upgrade_tier_3' },
    { output: 'sophisticatedbackpacks:stack_upgrade_tier_4' },
    { id: 'sophisticatedbackpacks:xp_pump_upgrade' }
  ])
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:upgrade_base', [
    'SIS',
    'ILI',
    'SIS'
  ], {
    S: 'minecraft:string',
    I: 'create:iron_sheet',
    L: 'minecraft:leather'
  }).id('kubejs:sophisticatedbackpacks/upgrade_base')
  if (Platform.isLoaded('farmersdelight')) {
    event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:upgrade_base', [
      'SIS',
      'ILI',
      'SIS'
    ], {
      S: 'minecraft:string',
      I: 'create:iron_sheet',
      L: 'farmersdelight:canvas'
    }).id('kubejs:sophisticatedbackpacks/upgrade_base_from_canvas')
    event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:backpack', [
      'SAS',
      'SCS',
      'AAA'
    ], {
      S: 'minecraft:string',
      A: 'farmersdelight:canvas',
      C: '#forge:chests/wooden',
    }).id('kubejs:sophisticatedbackpacks/backpack_from_canvas')
  }
  /**
   * UPGRADE MODULES
   */
  // pickup
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:pickup_upgrade', [
    ' M ',
    'PBP',
    ' E '
  ], {
    M: 'create:sticky_mechanical_piston',
    P: 'minecraft:string',
    B: 'sophisticatedbackpacks:upgrade_base',
    E: 'create:electron_tube'
  }).id('kubejs:sophisticatedbackpacks/pickup_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_pickup_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:brass_sheet',
    B: 'sophisticatedbackpacks:pickup_upgrade'
  }).id('kubejs:sophisticatedbackpacks/advanced_pickup_upgrade')
  // filter
  event.recipes.minecraft.crafting_shapeless('sophisticatedbackpacks:filter_upgrade', [
    'sophisticatedbackpacks:upgrade_base',
    'create:filter',
    '4x create:electron_tube'
  ]).id('kubejs:sophisticatedbackpacks/filter_upgrade')
  event.recipes.minecraft.crafting_shapeless('sophisticatedbackpacks:advanced_filter_upgrade', [
    'sophisticatedbackpacks:filter_upgrade',
    'create:attribute_filter'
  ]).id('kubejs:sophisticatedbackpacks/advanced_filter_upgrade')
  // magnet
  if (!Platform.isLoaded('alexscaves')) {
    event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:magnet_upgrade', [
      'III',
      'IPI',
      'N S'
    ], {
      I: 'create:industrial_iron_block',
      P: 'sophisticatedbackpacks:pickup_upgrade',
      N: 'minecraft:redstone_block',
      S: 'minecraft:lapis_block'
    }).id('kubejs:sophisticatedbackpacks/magnet_upgrade')
    event.recipes.create.mechanical_crafting('sophisticatedbackpacks:advanced_magnet_upgrade', [
      ' ERE ',
      'IBMBI',
      'I   I',
      'I   I',
      'N   S'
    ], {
      R: 'create:precision_mechanism',
      E: 'create:electron_tube',
      B: 'create:brass_block',
      M: 'sophisticatedbackpacks:magnet_upgrade',
      I: 'create:industrial_iron_block',
      N: 'minecraft:redstone_block',
      S: 'minecraft:lapis_block'
    }).id('kubejs:sophisticatedbackpacks/mechanical_crafting/advanced_magnet_upgrade')
  }
  if (Platform.isLoaded('alexscaves')) {
    event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:magnet_upgrade', [
      'III',
      'IPI',
      'N S'
    ], {
      I: 'create:industrial_iron_block',
      P: 'sophisticatedbackpacks:pickup_upgrade',
      N: 'alexscaves:scarlet_neodymium_ingot',
      S: 'alexscaves:azure_neodymium_ingot'
    }).id('kubejs:sophisticatedbackpacks/magnet_upgrade')
    event.recipes.create.mechanical_crafting('sophisticatedbackpacks:advanced_magnet_upgrade', [
      ' ERE ',
      'IBMBI',
      'I   I',
      'I   I',
      'N   S'
    ], {
      R: 'create:precision_mechanism',
      E: 'create:electron_tube',
      B: 'create:brass_block',
      M: 'sophisticatedbackpacks:magnet_upgrade',
      I: 'create:industrial_iron_block',
      N: 'alexscaves:block_of_scarlet_neodymium',
      S: 'alexscaves:block_of_azure_neodymium'
    }).id('kubejs:sophisticatedbackpacks/mechanical_crafting/advanced_magnet_upgrade')
  }
  // feeding
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:feeding_upgrade', [
    ' C ',
    'ABM',
    ' D '
  ], {
    C: 'minecraft:golden_carrot',
    A: 'minecraft:golden_apple',
    B: 'sophisticatedbackpacks:upgrade_base',
    M: 'minecraft:glistering_melon_slice',
    D: 'create:deployer'
  }).id('kubejs:sophisticatedbackpacks/feeding_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_feeding_upgrade', [
    ' S ',
    'CBC',
    'RRR'
  ], {
    S: 'create:smart_chute',
    C: 'create:brass_casing',
    B: 'sophisticatedbackpacks:feeding_upgrade',
    R: 'create:mechanical_arm'
  }).id('kubejs:sophisticatedbackpacks/advanced_feeding_upgrade')
  // compacting
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:compacting_upgrade', [
    'EPE',
    'PBP',
    'EPE'
  ], {
    E: 'create:electron_tube',
    P: 'create:mechanical_piston',
    B: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/compacting_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_compacting_upgrade', [
    'NPN',
    'PBP',
    'NPN'
  ], {
    N: 'kubejs:null_matter',
    P: 'create:mechanical_piston',
    B: 'sophisticatedbackpacks:compacting_upgrade'
  }).id('kubejs:sophisticatedbackpacks/advanced_compacting_upgrade')
  // void
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:void_upgrade', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'kubejs:awakened_singularity_core',
    B: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/void_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_void_upgrade', [
    'NAN',
    'ABA',
    'NAN'
  ], {
    N: 'kubejs:null_matter',
    A: 'kubejs:awakened_singularity_core',
    B: 'sophisticatedbackpacks:void_upgrade'
  }).id('kubejs:sophisticatedbackpacks/advanced_void_upgrade')
  // restock
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:restock_upgrade', [
    ' P ',
    'IUI',
    'ECE'
  ], {
    P: 'create:sticky_mechanical_piston',
    I: 'create:iron_sheet',
    U: 'sophisticatedbackpacks:upgrade_base',
    E: 'create:electron_tube',
    C: 'create:chute'
  }).id('kubejs:sophisticatedbackpacks/restock_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_restock_upgrade', [
    ' P ',
    'IUI',
    'ECE'
  ], {
    P: 'minecraft:diamond',
    I: 'create:brass_sheet',
    U: 'sophisticatedbackpacks:restock_upgrade',
    E: 'create:electron_tube',
    C: 'create:smart_chute'
  }).id('kubejs:sophistactedbackpacks/advanced_restock_upgrade')
  // deposit
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:deposit_upgrade', [
    ' P ',
    'IUI',
    'ECE'
  ], {
    P: 'create:mechanical_piston',
    I: 'create:iron_sheet',
    U: 'sophisticatedbackpacks:upgrade_base',
    E: 'create:electron_tube',
    C: 'create:chute'
  }).id('kubejs:sophisticatedbackpacks/deposit_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_deposit_upgrade', [
    ' P ',
    'IUI',
    ' C '
  ], {
    P: 'minecraft:diamond',
    I: 'create:brass_sheet',
    U: 'sophisticatedbackpacks:deposit_upgrade',
    C: 'create:smart_chute'
  }).id('kubejs:sophisticatedbackpacks/advanced_deposit_upgrade')
  // refill
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:refill_upgrade', [
    ' P ',
    'IUI',
    'ECE'
  ], {
    P: 'minecraft:ender_pearl',
    I: 'create:iron_sheet',
    U: 'sophisticatedbackpacks:upgrade_base',
    E: 'create:electron_tube',
    C: 'create:chute'
  }).id('kubejs:sophisticatedbackpacks/refill_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_refill_upgrade', [
    ' P ',
    'IUI',
    ' C '
  ], {
    P: 'minecraft:diamond',
    I: 'create:brass_sheet',
    U: 'sophisticatedbackpacks:refill_upgrade',
    C: 'create:smart_chute'
  }).id('kubejs:sophisticatedbackpacks/advanced_refill_upgrade')
  // inception
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:inception_upgrade', [
    'INI',
    'NUN',
    'INI'
  ], {
    I: 'kubejs:iridium_nugget',
    N: 'kubejs:null_matter',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/inception_upgrade')
  // everlasting
  event.recipes.minecraft.smithing_transform(
    'sophisticatedbackpacks:everlasting_upgrade',
    'minecraft:netherite_upgrade_smithing_template',
    'sophisticatedbackpacks:upgrade_base',
    'kubejs:null_matter'
  ).id('kubejs:sophisticatedbackpacks/everlasting_upgrade')
  // crafting
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:crafting_upgrade', [
    ' T ',
    'EBE',
    ' I '
  ], {
    T: 'minecraft:crafting_table',
    E: 'create:electron_tube',
    B: 'sophisticatedbackpacks:upgrade_base',
    I: 'create:item_vault'
  }).id('kubejs:sophisticatedbackpacks/crafting_upgrade')
  // stonecutter
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:stonecutter_upgrade', [
    ' T ',
    'EBE',
    ' I '
  ], {
    T: 'minecraft:stonecutter',
    E: 'create:electron_tube',
    B: 'sophisticatedbackpacks:upgrade_base',
    I: 'create:iron_sheet'
  }).id('kubejs:sophisticatedbackpacks/stonecutter_upgrade')
  // STACK UPGRADES
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:stack_upgrade_starter_tier', [
    'CCC',
    'CUC',
    'CCC'
  ], {
    C: '#forge:storage_blocks/copper',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/stack_upgrade_starter_tier')
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:stack_upgrade_tier_1', [
    'III',
    'IUI',
    'III'
  ], {
    I: 'kubejs:iron_singularity',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/stack_upgrade_tier_1')
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:stack_upgrade_tier_1', [
    ' I ',
    'IUI',
    ' I '
  ], {
    I: 'kubejs:iron_singularity',
    U: 'sophisticatedbackpacks:stack_upgrade_starter_tier'
  }).id('kubejs:sophisticatedbackpacks/stack_upgrade_tier_1_from_starter_tier')
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:stack_upgrade_tier_2', [
    'GGG',
    'GUG',
    'GGG'
  ], {
    G: 'kubejs:gold_singularity',
    U: 'sophisticatedbackpacks:stack_upgrade_tier_1'
  }).id('kubejs:sophisticatedbackpacks/stack_upgrade_tier_2')
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:stack_upgrade_tier_3', [
    'DDD',
    'DUD',
    'DDD'
  ], {
    D: 'kubejs:diamond_singularity',
    U: 'sophisticatedbackpacks:stack_upgrade_tier_2'
  }).id('kubejs:sophisticatedbackpacks/stack_upgrade_tier_3')
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:stack_upgrade_tier_4', [
    'NNN',
    'NUN',
    'NNN'
  ], {
    N: 'kubejs:netherite_singularity',
    U: 'sophisticatedbackpacks:stack_upgrade_tier_3'
  }).id('kubejs:sophisticatedbackpacks/stack_upgrade_tier_4')
  // jukebox
  event.recipes.minecraft.crafting_shapeless('sophisticatedbackpacks:jukebox_upgrade', [
    'sophisticatedbackpacks:upgrade_base',
    'minecraft:jukebox',
    'create:electron_tube'
  ]).id('kubejs:sophisticatedbackpacks/jukebox_upgrade')
  // tool swapper
  event.recipes.minecraft.crafting_shapeless('sophisticatedbackpacks:tool_swapper_upgrade', [
    'sophisticatedbackpacks:upgrade_base',
    'minecraft:iron_sword',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_shovel',
    'minecraft:iron_hoe',
    'create:electron_tube',
    'create:electron_tube'
  ]).id('kubejs:sophisticatedbackpacks/tool_swapper_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_tool_swapper_upgrade', [
    ' B ',
    'BUB',
    ' B '
  ], {
    B: 'create:brass_sheet',
    U: 'sophisticatedbackpacks:tool_swapper_upgrade'
  }).id('kubejs:sophisticatedbackpacks/advanced_tool_swapper_upgrade')
  // tank
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:tank_upgrade', [
    'FFF',
    'FUF',
    'FFF'
  ], {
    F: 'create:fluid_tank',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/tank_upgrade')
  // battery
  event.recipes.create.mechanical_crafting('sophisticatedbackpacks:battery_upgrade', [
    ' S ',
    'SRS',
    'SUS',
    'SRS',
    'SSS'
  ], {
    S: 'create:golden_sheet',
    U: 'sophisticatedbackpacks:upgrade_base',
    R: 'minecraft:redstone_block'
  }).id('kubejs:sophisticatedbackpacks/battery_upgrade')
  // pump
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:pump_upgrade', [
    ' F ',
    'MUM',
    ' F '
  ], {
    F: 'create:fluid_tank',
    M: 'create:mechanical_pump',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/pump_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:advanced_pump_upgrade', [
    ' B ',
    'SUS',
    ' B '
  ], {
    B: 'create:brass_sheet',
    S: 'create:smart_fluid_pipe',
    U: 'sophisticatedbackpacks:pump_upgrade'
  }).id('kubejs:sophisticatedbackpacks/advanced_pump_upgrade')
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:xp_pump_upgrade', [
    'LEL',
    'OUO',
    'LEL'
  ], {
    L: 'minecraft:lapis_lazuli',
    E: 'minecraft:ender_eye',
    O: 'minecraft:experience_bottle',
    U: 'sophisticatedbackpacks:advanced_pump_upgrade'
  }).id('kubejs:sophisticatedbackpacks/xp_pump_upgrade')
  // anvil
  event.recipes.minecraft.crafting_shaped('sophisticatedbackpacks:anvil_upgrade', [
    'AAA',
    'IUI',
    ' I '
  ], {
    A: 'minecraft:anvil',
    I: 'create:industrial_iron_block',
    U: 'sophisticatedbackpacks:upgrade_base'
  }).id('kubejs:sophisticatedbackpacks/anvil_upgrade')
})