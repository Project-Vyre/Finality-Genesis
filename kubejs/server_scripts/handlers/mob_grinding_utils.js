// requires: mob_grinding_utils
// requires: kubejs_create
// requires: extendedcrafting

/**
 * @file Server handler for Mob Grinding Utils.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
To Do List

Rework all mob grinding utils upgrades to fit in thematically with Create and other add-ons
Make the incomplete spikes block texture and model, incomplete jumbo tank texture and model if possible
Rework all mob grinding utils textures to 16px
Should the upgrades use brass? Maybe
 */

ServerEvents.recipes(event => {
  event.remove([
    { id: 'mob_grinding_utils:recipe_fan' },
    { id: 'mob_grinding_utils:recipe_saw' },
    { id: 'mob_grinding_utils:recipe_spikes' },
    { id: 'mob_grinding_utils:recipe_tank' },
    { id: 'mob_grinding_utils:recipe_jumbotank' },
    { id: 'mob_grinding_utils:recipe_mould_baby_upgrade' },
    { id: 'mob_grinding_utils:recipe_fan_upgrade_width' },
    { id: 'mob_grinding_utils:recipe_fan_upgrade_height' },
    { id: 'mob_grinding_utils:recipe_fan_upgrade_speed' },
    { id: 'mob_grinding_utils:recipe_absorbtion_upgrade' },
    { id: 'mob_grinding_utils:recipe_saw_upgrade_arthropod' },
    { id: 'mob_grinding_utils:recipe_saw_upgrade_beheading' },
    { id: 'mob_grinding_utils:recipe_saw_upgrade_fire' },
    { id: 'mob_grinding_utils:recipe_saw_upgrade_looting' },
    { id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness' },
    { id: 'mob_grinding_utils:recipe_saw_upgrade_smite' },
    { id: 'mob_grinding_utils:recipe_cursed_feed' },
    { id: 'mob_grinding_utils:recipe_nutritious_feed' },
    { id: 'mob_grinding_utils:recipe_mould_blank' },
    { id: 'mob_grinding_utils:recipe_entity_conveyor' },
    { id: 'mob_grinding_utils:recipe_ender_inhibitor' },
    { id: 'mob_grinding_utils:recipe_tintedglass' },
    { id: 'mob_grinding_utils:recipe_absorbtion_hopper' },
    { id: 'mob_grinding_utils:recipe_solidifier' },
    { id: 'mob_grinding_utils:recipe_entity_spawner' }
  ])

  event.recipes.create.sequenced_assembly([
    'mob_grinding_utils:spikes'
  ], 'minecraft:iron_block', [
    event.recipes.create.deploying('kubejs:incomplete_spikes', ['kubejs:incomplete_spikes', 'minecraft:slime_ball']),
    event.recipes.create.deploying('kubejs:incomplete_spikes', ['kubejs:incomplete_spikes', 'minecraft:iron_sword'])
  ]).transitionalItem('kubejs:incomplete_spikes').loops(5).id('finality:sequenced_assembly/mobgrindingutils_spikes')

  // upgrades
  event.shaped('mob_grinding_utils:fan_upgrade_width', [
    'I I',
    'FNF',
    'I I'
  ], {
    I: 'create:iron_sheet',
    F: 'minecraft:feather',
    N: 'create:nozzle'
  }).id('finality:shaped/mobgrindingutils_fan_upgrade_width')

  event.shaped('mob_grinding_utils:fan_upgrade_height', [
    'IFI',
    ' N ',
    'IFI'
  ], {
    I: 'create:iron_sheet',
    F: 'minecraft:feather',
    N: 'create:nozzle'
  }).id('finality:shaped/mobgrindingutils_fan_upgrade_height')

  event.shaped('mob_grinding_utils:fan_upgrade_speed', [
    'FIF',
    'IRI',
    'FIF'
  ], {
    I: 'create:iron_sheet',
    F: 'minecraft:feather',
    R: 'minecraft:redstone'
  }).id('finality:shaped/mobgrindingutils_fan_upgrade_speed')

  event.shaped('mob_grinding_utils:absorption_upgrade', [
    'OEO',
    'ERE',
    'OCO'
  ], {
    E: 'minecraft:ender_pearl',
    R: 'create:electron_tube',
    O: 'create:powdered_obsidian',
    C: 'create:chute'
  }).id('finality:shaped/mobgrindingutils_absorption_upgrade')

  event.shaped('mob_grinding_utils:saw_upgrade_arthropod', [ // change recipe when you're more awake
    'GSG',
    'SRS',
    'GSG'
  ], {
    G: 'minecraft:gold_nugget',
    S: 'minecraft:spider_eye',
    R: 'minecraft:iron_sword'
  }).id('finality:shaped/mobgrindingutils_saw_upgrade_arthropod')

  event.shaped('mob_grinding_utils:saw_upgrade_beheading', [
    'GHG',
    'WRW',
    'GHG'
  ], {
    G: 'minecraft:gold_nugget',
    H: 'minecraft:golden_helmet',
    W: 'create:mechanical_saw',
    R: 'minecraft:redstone'
  }).id('finality:shaped/mobgrindingutils_saw_upgrade_beheading')

  event.shaped('mob_grinding_utils:saw_upgrade_fire', [
    'GFG',
    'FDF',
    'GFG'
  ], {
    G: 'minecraft:gold_nugget',
    F: 'minecraft:flint_and_steel',
    D: 'create:brass_hand'
  }).id('finality:shaped/mobgrindingutils_saw_upgrade_fire')

  event.shaped('mob_grinding_utils:saw_upgrade_looting', [
    'GLG',
    'LRL',
    'GLG'
  ], {
    G: 'minecraft:gold_nugget',
    L: 'minecraft:lapis_lazuli',
    R: 'minecraft:redstone'
  }).id('finality:shaped/mobgrindingutils_saw_upgrade_looting')

  event.shaped('mob_grinding_utils:saw_upgrade_sharpness', [
    'GSG',
    'SRS',
    'GSG'
  ], {
    G: 'minecraft:gold_nugget',
    S: 'minecraft:iron_sword',
    R: 'create:deployer'
  }).id('finality:shaped/mobgrindingutils_saw_upgrade_sharpness')

  event.shaped('mob_grinding_utils:saw_upgrade_smite', [
    'GFG',
    'FRF',
    'GFG'
  ], {
    G: 'minecraft:gold_nugget',
    F: 'minecraft:rotten_flesh',
    R: 'minecraft:iron_sword'
  }).id('finality:shaped/mobgrindingutils_saw_upgrade_smite')

  event.shaped('mob_grinding_utils:absorption_hopper', [
    'EOE',
    'OCO',
    'EOE'
  ], {
    E: 'minecraft:ender_eye',
    O: 'create:powdered_obsidian',
    C: 'create:smart_chute'
  }).id('finality:shaped/mobgrindingutils/absorption_hopper')

  // feeds
  event.recipes.create.mixing('mob_grinding_utils:gm_chicken_feed_cursed', [
    'minecraft:spider_eye',
    'minecraft:rotten_flesh',
    'minecraft:bone',
    'minecraft:gunpowder',
    '#forge:seeds',
    Fluid.of('mob_grinding_utils:fluid_xp', 1000)
  ]).id('finality:mixing/mobgrindingutils_cursed_chicken_feed')

  event.recipes.create.mixing('mob_grinding_utils:nutritious_chicken_feed', [
    'minecraft:carrot',
    'minecraft:potato',
    'minecraft:beetroot',
    'minecraft:wheat',
    '#forge:seeds',
    Fluid.of('mob_grinding_utils:fluid_xp', 1000)
  ]).id('finality:mixing/mobgrindingutils_nutritious_chicken_feed')

  // mold plates
  event.shapeless('mob_grinding_utils:solid_xp_mould_blank', [
    'mob_grinding_utils:fluid_xp_bucket',
    'create:brass_sheet'
  ]).id('finality:mobgrindingutils_xp_mould_blank')
  event.recipes.create.cutting([
    'mob_grinding_utils:solid_xp_mould_baby'
  ], 'mob_grinding_utils:solid_xp_mould_blank').processingTime(350).id('finality:cutting/mobgrindingutils_xp_mold_shaped')

  // the tanks
  event.recipes.create.mechanical_crafting('mob_grinding_utils:tank', [
    'IGGGI',
    'G   G',
    'G S G',
    'G   G',
    'IGGGI'
  ], {
    I: 'create:industrial_iron_block',
    G: 'create:framed_glass',
    S: 'kubejs:framed_glass_singularity'
  }).id('finality:mechanical_crafting/mobgrindingutils_tank')

  event.recipes.create.sequenced_assembly([
    'mob_grinding_utils:jumbo_tank'
  ], 'create:fluid_tank', [
    event.recipes.create.deploying('kubejs:incomplete_jumbo_tank', ['kubejs:incomplete_jumbo_tank', 'mob_grinding_utils:tank']),
    event.recipes.create.deploying('kubejs:incomplete_jumbo_tank', ['kubejs:incomplete_jumbo_tank', 'mob_grinding_utils:tank']),
    event.recipes.create.deploying('kubejs:incomplete_jumbo_tank', ['kubejs:incomplete_jumbo_tank', 'mob_grinding_utils:tank']),
    event.recipes.create.deploying('kubejs:incomplete_jumbo_tank', ['kubejs:incomplete_jumbo_tank', 'mob_grinding_utils:tank'])
  ]).transitionalItem('kubejs:incomplete_jumbo_tank').loops(8).id('finality:sequenced_assembly/mobgrindingutils_jumbo_tank')

  event.recipes.create.mechanical_crafting('mob_grinding_utils:fan', [
    'AAAAA',
    'BCD B',
    'BEFGB',
    'BCD B',
    'AAAAA'
  ], {
    A: 'create:iron_sheet',
    B: 'minecraft:iron_bars',
    C: 'extendedcrafting:redstone_component',
    D: 'extendedcrafting:black_iron_slate',
    E: 'extendedcrafting:redstone_catalyst',
    F: 'create:gantry_shaft',
    G: 'create:propeller'
  }).id('finality:mechanical_crafting/mobgrindingutils_fan')

  event.recipes.extendedcrafting.shaped_table('mob_grinding_utils:fan', [
    'AAAAA',
    'BCD B',
    'BEFGB',
    'BCD B',
    'AAAAA'
  ], {
    A: 'create:iron_sheet',
    B: 'minecraft:iron_bars',
    C: 'extendedcrafting:redstone_component',
    D: 'extendedcrafting:black_iron_slate',
    E: 'extendedcrafting:redstone_catalyst',
    F: 'create:gantry_shaft',
    G: 'create:propeller'
  }).merge({ tier: 2 }).id('finality:extendedcrafting/mobgrindingutils_fan')

  event.shaped('mob_grinding_utils:saw', [
    'SDS',
    'PBP',
    'DRD'
  ], {
    S: 'minecraft:iron_sword',
    D: 'minecraft:diamond_sword',
    P: 'mob_grinding_utils:spikes',
    B: 'create:mechanical_bearing',
    R: 'extendedcrafting:redstone_catalyst'
  }).id('finality:shaped/mobgrindingutils_mob_masher')

  event.shaped('mob_grinding_utils:entity_conveyor', [
    ' I ',
    'IBI',
    'IRI'
  ], {
    I: 'create:industrial_iron_block',
    B: 'create:belt_connector',
    R: 'extendedcrafting:redstone_catalyst'
  })

  event.shaped('mob_grinding_utils:ender_inhibitor_on', [
    ' E ',
    'IYI',
    ' G '
  ], {
    E: 'create:electron_tube',
    I: 'minecraft:iron_ingot',
    Y: 'minecraft:ender_eye',
    G: 'minecraft:glowstone_dust'
  }).id('finality:shaped/mobgrindingutils_ender_inhibitor')

  event.recipes.create.item_application('mob_grinding_utils:tinted_glass', [
    'minecraft:tinted_glass',
    '#forge:wither_bones'
  ]).id('finality:item_application/mobgrindingutils_tinted_glass')

  event.shaped('mob_grinding_utils:xpsolidifier', [
    ' P ',
    'IBI',
    ' F '
  ], {
    P: 'create:mechanical_press',
    I: 'create:industrial_iron_block',
    B: 'create:basin',
    F: 'mob_grinding_utils:tank'
  }).id('finality:shaped/mobgrindingutils_xpsolidifier')

  event.shaped('mob_grinding_utils:entity_spawner', [
    'EEE',
    'BSB',
    'ADA'
  ], {
    E: 'minecraft:ender_eye',
    B: 'create:experience_block',
    S: 'minecraft:spawner',
    A: 'create:industrial_iron_block',
    D: 'create:depot'
  }).id('finality:shaped/mobgrindingutils_entity_spawner')

  if (Platform.isLoaded('create_enchantment_industry') && Platform.isLoaded('mob_grinding_utils')) {
    event.remove([
      { id: 'create_enchantment_industry:crafting/experience_rotor' },
      { id: 'create_enchantment_industry:compat/mob_grinding_utils/mixing/experience_conversion' }
    ])
    event.shapeless('create_enchantment_industry:experience_rotor', [
      'create:zinc_nugget',
      'create:experience_nugget'
    ]).id('finality:shapeless/cei_mgutls_experience_rotor')
    event.recipes.create.deploying('create_enchantment_industry:experience_rotor', [
      'create:propeller',
      'create:experience_nugget'
    ]).id('finality:deploying/cei_mgutls_experience_rotor')
    event.recipes.create.mixing(Fluid.of('create_enchantment_industry:experience', 10), [
      'create_enchantment_industry:experience_rotor',
      Fluid.of('mob_grinding_utils:fluid_xp', 200)
    ]).id('finality:mixing/mobgrindingutils_create_xp_compat')
  }
})

ServerEvents.tags('block', event => {
  event.add('create:wrench_pickup', [
    'mob_grinding_utils:fan',
    'mob_grinding_utils:saw',
    'mob_grinding_utils:absorption_hopper',
    'mob_grinding_utils:spikes',
    'mob_grinding_utils:tank',
    'mob_grinding_utils:tank_sink',
    'mob_grinding_utils:xp_tap',
    'mob_grinding_utils:wither_muffler',
    'mob_grinding_utils:dragon_muffler',
    'mob_grinding_utils:entity_conveyor',
    'mob_grinding_utils:ender_inhibitor_on',
    'mob_grinding_utils:ender_inhibitor_off',
    'mob_grinding_utils:jumbo_tank',
    'mob_grinding_utils:xpsolidifier',
    'mob_grinding_utils:entity_spawner'
  ])
})