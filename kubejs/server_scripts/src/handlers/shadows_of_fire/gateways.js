// requires: gateways
// requires: summoningrituals
// requires: create

/**
 * @file Server handler for Gateways to Eternity.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  /**
   * 
   * @param {string} gateId 
   * @param {ItemStack_} item 
   */
  function mobGate(gateId, item) {
    event.recipes.minecraft.crafting_shaped(Item.of('gateways:gate_pearl', `{gateway:"kubejs:${gateId}_gate_small"}`), [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: item,
      B: 'minecraft:ender_pearl'
    }).id(`kubejs:${gateId}_gate_small`)
    event.recipes.minecraft.crafting_shaped(Item.of('gateways:gate_pearl', `{gateway:"kubejs:${gateId}_gate"}`), [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: item,
      B: 'minecraft:ender_eye'
    }).id(`kubejs:${gateId}_gate`)
    event.recipes.minecraft.crafting_shaped(Item.of('gateways:gate_pearl', `{gateway:"kubejs:${gateId}_gate_large"}`), [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: item,
      B: 'minecraft:nether_star'
    }).id(`kubejs:${gateId}_gate_large`)
  }
  let mono_gateways = {
    blaze: 'minecraft:blaze_rod',
    creeper: 'minecraft:gunpowder',
    enderman: 'minecraft:ender_pearl',
    ghast: 'minecraft:ghast_tear',
    magma_cube: 'minecraft:magma_cream',
    shulker: 'minecraft:shulker_shell',
    skeleton: 'minecraft:bone',
    slime: 'minecraft:slime_ball',
    spider: 'minecraft:spider_eye',
    zombie: 'minecraft:rotten_flesh'
  }
  for (const [id, item] of Object.entries(mono_gateways)) {
    mobGate(id, item)
  }
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:witch_gate_small"}'), [
    ' G ',
    'RAR',
    ' B '
  ], {
    A: 'minecraft:ender_pearl',
    G: 'minecraft:glowstone_dust',
    R: 'minecraft:redstone',
    B: 'minecraft:glass_bottle'
  }).id('kubejs:witch_gate_small')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:witch_gate"}'), [
    'GRG',
    'RAR',
    'BBB'
  ], {
    A: 'minecraft:ender_eye',
    G: 'minecraft:glowstone_dust',
    R: 'minecraft:redstone',
    B: 'minecraft:glass_bottle'
  }).id('kubejs:witch_gate')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:witch_gate_large"}'), [
    'GRG',
    'RAR',
    'BBB'
  ], {
    A: 'minecraft:nether_star',
    G: 'minecraft:glowstone_dust',
    R: 'minecraft:redstone',
    B: 'minecraft:glass_bottle'
  }).id('kubejs:witch_gate_large')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:drowned_gate_small"}'), [
    'CFC',
    'FEF',
    'CFC'
  ], {
    C: 'create:copper_nugget',
    F: 'minecraft:rotten_flesh',
    E: 'minecraft:ender_pearl'
  }).id('kubejs:drowned_gate_small')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:drowned_gate"}'), [
    'CFC',
    'FEF',
    'CFC'
  ], {
    C: 'minecraft:copper_ingot',
    F: 'minecraft:rotten_flesh',
    E: 'minecraft:ender_eye'
  }).id('kubejs:drowned_gate')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:drowned_gate_large"}'), [
    'CFC',
    'FEF',
    'CFC'
  ], {
    C: 'minecraft:prismarine_crystals',
    F: 'minecraft:rotten_flesh',
    E: 'minecraft:nether_star'
  }).id('kubejs:drowned_gate_large')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:husk_gate_small"}'), [
    'CFC',
    'FEF',
    'CFC'
  ], {
    C: 'minecraft:iron_nugget',
    F: 'minecraft:rotten_flesh',
    E: 'minecraft:ender_pearl'
  }).id('kubejs:husk_gate_small')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:husk_gate"}'), [
    'CFC',
    'FEF',
    'CFC'
  ], {
    C: 'minecraft:iron_ingot',
    F: 'minecraft:rotten_flesh',
    E: 'minecraft:ender_eye'
  }).id('kubejs:husk_gate')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:husk_gate_large"}'), [
    'CFC',
    'FEF',
    'CFC'
  ], {
    C: 'minecraft:iron_ingot',
    F: 'minecraft:rotten_flesh',
    E: 'minecraft:nether_star'
  }).id('kubejs:husk_gate_large')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:hoglin_gate_small"}'), [
    'FPF',
    'PEP',
    'FPF'
  ], {
    F: 'create:cinder_flour',
    P: 'minecraft:porkchop',
    E: 'minecraft:ender_pearl'
  }).id('kubejs:hoglin_gate_small')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:hoglin_gate"}'), [
    'FPF',
    'PEP',
    'FPF'
  ], {
    F: 'create:cinder_flour',
    P: 'minecraft:porkchop',
    E: 'minecraft:ender_eye'
  }).id('kubejs:hoglin_gate')
  event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:hoglin_gate_large"}'), [
    'FPF',
    'PEP',
    'FPF'
  ], {
    F: 'create:cinder_flour',
    P: 'minecraft:porkchop',
    E: 'minecraft:nether_star'
  }).id('kubejs:hoglin_gate_large')
  event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_gate_small"}'), [
    'SDS',
    'DED',
    'SDS'
  ], {
    S: 'apotheosis:epic_material',
    D: 'apotheosis:gem_dust',
    E: 'minecraft:ender_pearl'
  }).id('kubejs:boss_gate_small')
  event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:bastion_salvation"}'), [
    ' NBN ',
    'NGGGN',
    'BGEGB',
    'NGGGN',
    ' BBB '
  ], {
    B: 'minecraft:polished_blackstone_bricks',
    N: 'kubejs:netherite_nugget',
    G: 'minecraft:gilded_blackstone',
    E: 'minecraft:nether_star'
  }).id('kubejs:bastion_salvation_gate')
  if (Platform.isLoaded('ars_nouveau')) {
    event.recipes.ars_nouveau.enchanting_apparatus(Item.of('gateways:gate_pearl', '{gateway:"kubejs:wilden_gate"}'), [
      'ars_nouveau:wilden_wing',
      'ars_nouveau:wilden_horn',
      'ars_nouveau:wilden_spike'
    ], 'minecraft:nether_star', false, 2000).id('kubejs:wilden_gate')
  }
  if (Platform.isLoaded('artifacts')) {
    event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:endless/artifact_mimic_gate"}'), [
      '  L  ',
      ' ADA ',
      'LDEDL',
      ' ADA ',
      '  L  '
    ], {
      A: 'minecraft:diamond',
      L: 'minecraft:emerald',
      D: 'apotheosis:gem_dust',
      E: 'minecraft:ender_eye'
    }).id('kubejs:mechanical_crafting/artifact_mimic_gate')
  }
  if (Platform.isLoaded('cataclysm')) {
    event.recipes.summoningrituals.altar('minecraft:nether_star')
      .itemOutput(Item.of('gateways:gate_pearl', '{gateway:"kubejs:cataclysm_boss_gate"}'))
      .input([
        'cataclysm:mech_eye',
        'cataclysm:flame_eye',
        'cataclysm:void_eye',
        'cataclysm:monstrous_eye',
        'minecraft:amethyst_shard'
      ])
      .blockBelow('minecraft:end_stone')
      .id('kubejs:cataclysm_boss_gate')
  }
  if (Platform.isLoaded('cataclysm') &&
    Platform.isLoaded('aquamirae') &&
    Platform.isLoaded('irons_spellbooks')
  ) {
    event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_gate"}'), [
      'SDS',
      'DED',
      'SDS'
    ], {
      S: 'apotheosis:epic_material',
      D: 'apotheosis:gem_dust',
      E: 'minecraft:ender_eye'
    }).id('kubejs:boss_gate')
    event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_gate_large"}'), [
      'SDS',
      'DED',
      'SDS'
    ], {
      S: 'apotheosis:mythic_material',
      D: 'apotheosis:gem_dust',
      E: 'minecraft:nether_star'
    }).id('kubejs:boss_gate_large')
    event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:ultimatum_boss_gate"}'), [
      'SDS',
      'DED',
      'SDS'
    ], {
      S: 'apotheosis:mythic_material',
      D: 'minecraft:crying_obsidian',
      E: 'minecraft:nether_star'
    }).id('kubejs:ultimatum_boss_gate')
  }
  if (Platform.isLoaded('mutantmonsters') && Platform.isLoaded('mutantmore')) {
    event.recipes.create.filling(Item.of('gateways:gate_pearl', '{gateway:"kubejs:mutant_boss_gate_large"}'), [
      'minecraft:ender_eye',
      Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}')
    ]).id('kubejs:filling/mutant_boss_gate_pearl')
  }
  if (Platform.isLoaded('bosses_of_mass_destruction')) {
    event.recipes.minecraft.crafting_shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:mass_destruction_boss_gate_large"}'), [
      'SBS',
      'AEC',
      'SDS'
    ], {
      A: 'minecraft:moss_block',
      B: 'minecraft:bone_block',
      C: 'minecraft:nether_bricks',
      D: 'minecraft:crying_obsidian',
      S: 'create:experience_block',
      E: 'minecraft:nether_star'
    }).id('kubejs:crafting/mass_destruction_boss_gate')
  }
})

/*
Item.of('create:fluid_tank', '{BlockEntityTag:{Boiler:{ActiveHeat:0,Engines:0,PassiveHeat:0b,Supply:0.0f,Update:0b,Whistles:0},Height:1,LastKnownPos:{X:3,Y:56,Z:307},Luminosity:0,Owner:[I;-1625681629,1160660015,-2025764060,883666804],Size:1,TankContent:{Amount:1000,FluidName:"create:potion",Tag:{Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}},Window:1b,id:"create:fluid_tank"},display:{Lore:[\'"(+NBT)"\']}}')
*/