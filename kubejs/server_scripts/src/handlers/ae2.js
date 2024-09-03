/**
 * @file Server handler for AE2.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: ae2
// requires: ars_nouveau
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.minecraft.crafting_shapeless('ae2:fluix_upgrade_smithing_template', [
    'create:iron_sheet',
    'ae2:fluix_crystal'
  ]).id('ae2:tools/fluix_upgrade_smithing_template')
  event.recipes.minecraft.crafting_shaped('ae2:quartz_fiber', [
    'CGC',
    'GCG',
    'CGC'
  ], {
    C: 'ae2:certus_quartz_dust',
    G: '#forge:glass_panes/colorless'
  }).id('ae2:network/parts/quartz_fiber_part')
  event.recipes.create.deploying('ae2:fluix_upgrade_smithing_template', [
    'create:iron_sheet',
    'ae2:fluix_crystal'
  ]).id('kubejs:ae2/deploying/tools/fluix_upgrade_smithing_template')
  event.recipes.create.filling('ae2:flawless_budding_quartz', [
    'ae2:damaged_budding_quartz',
    Fluid.of('kubejs:condensed_universal_order', 750)
  ]).id('kubejs:filling/ae2/damaged_to_flawless_budding_quartz')
  event.recipes.create.filling('ae2:flawless_budding_quartz', [
    'ae2:chipped_budding_quartz',
    Fluid.of('kubejs:condensed_universal_order', 500)
  ]).id('kubejs:filling/ae2/chipped_to_flawless_budding_quartz')
  event.recipes.create.filling('ae2:flawless_budding_quartz', [
    'ae2:flawed_budding_quartz',
    Fluid.of('kubejs:condensed_universal_order', 250)
  ]).id('kubejs:filling/ae2/flawed_to_flawless_budding_quartz')
  event.forEachRecipe({ mod: 'ae2' }, recipe => {
    recipe.replaceInput('#forge:ingots/iron', 'kubejs:iridium_ingot')
    recipe.replaceInput('minecraft:sticky_piston', 'create:sticky_mechanical_piston')
    recipe.replaceInput('minecraft:piston', 'create:mechanical_piston')
  })
  event.remove([
    { id: 'ae2:materials/annihilationcore' },
    { id: 'ae2:materials/cardspeed' },
    { id: 'ae2:materials/cardredstone' },
    { id: 'ae2:materials/cardcapacity' },
    { id: 'ae2:materials/cardvoid' },
    { id: 'ae2:materials/cardcrafting' },
    { id: 'ae2:materials/cardfuzzy' },
    { id: 'ae2:materials/cardspeed' },
    { id: 'ae2:materials/cardinverter' },
    { id: 'ae2:materials/carddistribution' },
    { id: 'ae2:materials/cardenergy' },
    { id: 'ae2:network/parts/terminals' },
    { id: 'ae2:network/parts/terminals_crafting' },
    { id: 'ae2:misc/fluixpearl' },
    { id: 'ae2:inscriber/certus_quartz_dust' },
    { id: 'ae2:inscriber/ender_dust' },
    { id: 'ae2:inscriber/sky_stone_dust' },
    { id: 'ae2:inscriber/fluix_dust' },
    { id: 'ae2:inscriber/engineering_processor_press' },
    { id: 'ae2:inscriber/calculation_processor_press' },
    { id: 'ae2:inscriber/logic_processor_press' },
    { id: 'ae2:inscriber/silicon_press' },
    { id: 'ae2:inscriber/engineering_processor_print' },
    { id: 'ae2:inscriber/calculation_processor_print' },
    { id: 'ae2:inscriber/logic_processor_print' },
    { id: 'ae2:inscriber/silicon_print' }
  ])
  // presses
  let presses = [
    'engineering_processor',
    'calculation_processor',
    'logic_processor',
    'silicon'
  ]
  for (let i = 0; i < presses.length; i++) {
    let element = presses[i];
    event.recipes.create.deploying('2x ae2:' + element + '_press', [
      'ae2:' + element + '_press',
      'kubejs:duplicator'
    ]).keepHeldItem().id('kubejs:deploying/ae2/' + element + '_duplication')
  }
  event.recipes.create.deploying('ae2:printed_engineering_processor', [
    'minecraft:diamond',
    'ae2:engineering_processor_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/engineering_processor_print')
  event.recipes.create.deploying('ae2:printed_calculation_processor', [
    'ae2:certus_quartz_crystal',
    'ae2:calculation_processor_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/calculation_processor_print')
  event.recipes.create.deploying('ae2:printed_logic_processor', [
    'create:golden_sheet',
    'ae2:logic_processor_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/logic_processor_print')
  event.recipes.create.deploying('ae2:printed_silicon', [
    'ae2:silicon',
    'ae2:silicon_press'
  ]).keepHeldItem().id('kubejs:ae2/inscriber/silicon_print')
  // cables
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:fluix_pearl', [
    'ae2:fluix_crystal',
    'ae2:fluix_crystal',
    'ae2:fluix_crystal',
    'ae2:fluix_crystal',
    'ae2:fluix_dust',
    'ae2:fluix_dust',
    'ae2:fluix_dust',
    'ae2:fluix_dust',
  ], 'minecraft:ender_pearl', false, 4000).id('kubejs:ae2/misc/fluixpearl')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:terminal', [
    'ae2:formation_core',
    'ae2:annihilation_core',
    'ae2:logic_processor'
  ], '#ae2:illuminated_panel', false, 6000).id('kubejs:ae2/network/parts/terminals')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:crafting_terminal', [
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'create:mechanical_crafter',
    'ae2:calculation_processor'
  ], 'ae2:terminal', false, 6000).id('kubejs:ae2/network/parts/crafting_terminal')
  event.recipes.minecraft.crafting_shaped('2x ae2:blank_pattern', [
    'GSG',
    'SCS',
    'III'
  ], {
    G: 'ae2:quartz_glass',
    S: 'kubejs:glowstone_singularity',
    C: '#ae2:all_certus_quartz',
    I: 'kubejs:iridium_sheet'
  }).id('ae2:network/crafting/patterns_blank')
  // ME Storage Component
  event.recipes.create.mechanical_crafting('ae2:cell_component_1k', [
    'RQR',
    'QLQ',
    'RQR'
  ], {
    R: 'kubejs:redstone_singularity',
    Q: '#ae2:all_certus_quartz',
    L: 'ae2:logic_processor'
  }).id('ae2:network/cells/item_storage_components_cell_1k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_4k', [
    'RPR',
    'QGQ',
    'RQR'
  ], {
    R: 'kubejs:redstone_singularity',
    Q: 'ae2:cell_component_1k',
    P: 'ae2:calculation_processor',
    G: 'ae2:quartz_glass'
  }).id('ae2:network/cells/item_storage_components_cell_4k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_16k', [
    'GPG',
    'MQM',
    'GMG'
  ], {
    G: 'kubejs:glowstone_singularity',
    P: 'ae2:calculation_processor',
    M: 'ae2:cell_component_4k',
    Q: 'ae2:quartz_glass'
  }).id('ae2:network/cells/item_storage_components_cell_16k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_64k', [
    'GPG',
    'MQM',
    'GMG'
  ], {
    G: 'kubejs:glowstone_singularity',
    P: 'ae2:calculation_processor',
    M: 'ae2:cell_component_16k',
    Q: 'ae2:quartz_glass'
  }).id('ae2:network/cells/item_storage_components_cell_64k_part')
  event.recipes.create.mechanical_crafting('ae2:cell_component_256k', [
    'SPS',
    'MQM',
    'SMS'
  ], {
    S: 'kubejs:sky_stone_singularity',
    P: 'ae2:calculation_processor',
    M: 'ae2:cell_component_64k',
    Q: 'ae2:quartz_glass'
  }).id('ae2:network/cells/item_storage_components_cell_256k_part')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:cell_component_1k', [
    'kubejs:redstone_singularity',
    'kubejs:redstone_singularity',
    'kubejs:redstone_singularity',
    'kubejs:redstone_singularity',
    '#ae2:all_certus_quartz',
    '#ae2:all_certus_quartz',
    '#ae2:all_certus_quartz',
    '#ae2:all_certus_quartz'
  ], 'ae2:logic_processor', false, 4000).id('kubejs:ae2/network/cells/item_storage_components_cell_1k_part')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:cell_component_4k', [
    'kubejs:redstone_singularity',
    'kubejs:redstone_singularity',
    'kubejs:redstone_singularity',
    'kubejs:redstone_singularity',
    'ae2:cell_component_1k',
    'ae2:cell_component_1k',
    'ae2:cell_component_1k',
    'ae2:calculation_processor'
  ], 'ae2:quartz_glass', false, 4000).id('kubejs:ae2/network/cells/item_storage_components_4k_part')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:cell_component_16k', [
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'ae2:cell_component_4k',
    'ae2:cell_component_4k',
    'ae2:cell_component_4k',
    'ae2:calculation_processor'
  ], 'ae2:quartz_glass', false, 4000).id('kubejs:ae2/network/cells/item_storage_components_cell_16k_part')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:cell_component_64k', [
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'ae2:cell_component_16k',
    'ae2:cell_component_16k',
    'ae2:cell_component_16k',
    'ae2:calculation_processor'
  ], 'ae2:quartz_glass', false, 4000).id('kubejs:ae2/network/cells/item_storage_components_cell_64k_part')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:cell_component_256k', [
    'kubejs:sky_stone_singularity',
    'kubejs:sky_stone_singularity',
    'kubejs:sky_stone_singularity',
    'kubejs:sky_stone_singularity',
    'ae2:cell_component_64k',
    'ae2:cell_component_64k',
    'ae2:cell_component_64k',
    'ae2:calculation_processor'
  ], 'ae2:quartz_glass', false, 6000).id('kubejs:ae2/network/cells/item_storage_components_cell_256k_part')
  // spatial components
  event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_2', [
    'GFG',
    'FPF',
    'GFG'
  ], {
    G: 'kubejs:glowstone_singularity',
    F: 'ae2:fluix_pearl',
    P: 'ae2:engineering_processor'
  }).id('ae2:network/cells/spatial_components')
  event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_16', [
    'GSG',
    'SPS',
    'GSG'
  ], {
    G: 'kubejs:glowstone_singularity',
    S: 'ae2:spatial_cell_component_2',
    P: 'ae2:engineering_processor'
  }).id('ae2:network/cells/spatial_components_0')
  event.recipes.create.mechanical_crafting('ae2:spatial_cell_component_128', [
    'GSG',
    'SPS',
    'GSG'
  ], {
    G: 'kubejs:glowstone_singularity',
    S: 'ae2:spatial_cell_component_16',
    P: 'ae2:engineering_processor'
  }).id('ae2:network/cells/spatial_components_1')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:spatial_cell_component_2', [
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'ae2:fluix_pearl',
    'ae2:fluix_pearl',
    'ae2:fluix_pearl',
    'ae2:fluix_pearl'
  ], 'ae2:engineering_processor', false, 4000).id('kubejs:ae2/network/cells/spatial_components')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:spatial_cell_component_16', [
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'ae2:spatial_cell_component_2',
    'ae2:spatial_cell_component_2',
    'ae2:spatial_cell_component_2',
    'ae2:spatial_cell_component_2'
  ], 'ae2:engineering_processor', false, 4000).id('kubejs:ae2/network/cells/spatial_components_0')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:spatial_cell_component_128', [
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'kubejs:glowstone_singularity',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_16',
    'ae2:spatial_cell_component_16'
  ], 'ae2:engineering_processor', false, 4000).id('kubejs:ae2/network/cells/spatial_components_1')

  event.recipes.minecraft.crafting_shaped('ae2:crank', [
    'H',
    'C'
  ], {
    H: 'create:hand_crank',
    C: 'minecraft:copper_ingot'
  }).id('ae2:network/blocks/crank')
  event.recipes.minecraft.crafting_shaped('kubejs:denied_result', [
    'AAB',
    'CD ',
    'A  '
  ], {
    A: 'kubejs:iridium_ingot',
    B: 'ae2:formation_core',
    C: 'ae2:cell_component_4k',
    D: 'ae2:energy_cell'
  }).id('ae2:tools/matter_cannon')
  event.recipes.create.mechanical_crafting('ae2:matter_cannon', [
    'ISIIIIF',
    'IEI    ',
    ' P     '
  ], {
    I: 'kubejs:iridium_ingot',
    S: 'ae2:cell_component_4k',
    F: 'ae2:formation_core',
    E: 'ae2:energy_cell',
    P: 'kubejs:iridium_sheet'
  }).id('kubejs:ae2/tools/matter_cannon')
  event.recipes.create.mechanical_crafting('ae2:annihilation_core', [
    'QFL'
  ], {
    Q: 'kubejs:electron_tube_singularity',
    F: 'ae2:fluix_dust',
    L: 'ae2:logic_processor'
  }).id('kubejs:ae2/mechanical_crafting/annhilationcore')
  // basic cards
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:redstone_card', [
    'create:electron_tube',
    'create:powered_latch',
    'create:powered_toggle_latch'
  ], 'ae2:basic_card', false, 2000).id('kubejs:ae2/materials/cardredstone')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:capacity_card', [
    '#forge:gems/certus_quartz',
    '#forge:gems/certus_quartz'
  ], 'ae2:basic_card', false, 2000).id('kubejs:ae2/materials/cardcapacity')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:void_card', [
    'functionalstorage:void_upgrade',
    'ae2:calculation_processor'
  ], 'ae2:basic_card', false, 2000).id('kubejs:ae2/materials/cardvoid')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:crafting_card', [
    'minecraft:crafting_table',
    'minecraft:crafting_table',
    'minecraft:crafting_table',
    'minecraft:crafting_table'
  ], 'ae2:basic_card', false, 2000).id('kubejs:ae2/materials/cardcrafting')
  // advanced cards
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:fuzzy_card', [
    'create:filter',
    'create:attribute_filter'
  ], 'ae2:advanced_card', false, 4000).id('kubejs:ae2/materials/cardfuzzy')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:speed_card', [
    'ae2:fluix_crystal',
    'minecraft:clock',
    'minecraft:clock',
    'minecraft:clock',
  ], 'ae2:advanced_card', false, 4000).id('kubejs:ae2/materials/cardspeed')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:inverter_card', [
    'create:electron_tube',
    'create:powered_latch',
    'create:powered_toggle_latch'
  ], 'ae2:advanced_card', false, 4000).id('kubejs:ae2/materials/cardinverter')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:equal_distribution_card', [
    'ae2:calculation_processor',
    'create:brass_tunnel',
    'create:brass_tunnel',
    'create:brass_tunnel',
    'create:brass_tunnel'
  ], 'ae2:advanced_card', false, 4000).id('kubejs:ae2/materials/carddistribution')
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:energy_card', [
    'ae2:dense_energy_cell',
    'minecraft:redstone_block',
    'minecraft:redstone_block',
    'minecraft:redstone_block',
    'minecraft:redstone_block'
  ], 'ae2:advanced_card', false, 4000).id('kubejs:ae2/materials/cardenergy')

  // processing
  event.recipes.ars_nouveau.enchanting_apparatus('ae2:growth_accelerator', [
    'kubejs:iridium_ingot',
    'kubejs:iridium_ingot',
    'kubejs:iridium_ingot',
    'kubejs:iridium_ingot',
    'ae2:quartz_glass',
    'ae2:quartz_glass',
    'ae2:fluix_glass_cable',
    'ae2:fluix_glass_cable',
    'ae2:fluix_block'
  ], 'create:tree_fertilizer', false, 6000).id('ae2:network/blocks/crystal_processing_growth_accelerator')

  event.recipes.create.mechanical_crafting('kubejs:sky_stone_singularity', [
    ' RRR ',
    'RRRRR',
    'RRCRR',
    'RRRRR',
    ' RRR '
  ], {
    R: 'ae2:sky_dust',
    C: 'kubejs:awakened_singularity_core'
  }).id('kubejs:ae2/mechanical_crafting/sky_stone_singularity')
})