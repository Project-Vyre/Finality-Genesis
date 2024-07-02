/**
 * @file Server handler for Reliquary.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: reliquary
// requires: kubejs_create
// requires: summoningrituals

ServerEvents.recipes(event => {
  event.remove([
    { id: 'reliquary:alkahestry_tome' },
    { id: 'reliquary:mercy_cross' },
    { id: 'reliquary:angelheart_vial' },
    { id: 'reliquary:angelic_feather' },
    { id: 'reliquary:aphrodite_potion' },
    { id: 'reliquary:destruction_catalyst' },
    { id: 'reliquary:emperor_chalice' },
    { id: 'reliquary:fertile_potion' },
    { id: 'reliquary:fortune_coin' },
    { id: 'reliquary:glacial_staff' },
    { id: 'reliquary:glowing_water' },
    { id: 'reliquary:holy_hand_grenade' },
    { id: 'reliquary:handgun' },
    { id: 'reliquary:hero_medallion' },
    { id: 'reliquary:infernal_chalice' },
    { id: 'reliquary:infernal_tear' },
    { id: 'reliquary:kraken_shell' },
    { id: 'reliquary:midas_touchstone' },
    { id: 'reliquary:rod_of_lyssa' },
    { id: 'reliquary:void_tear' },
    { id: 'reliquary:witherless_rose' },
    { id: 'reliquary:shears_of_winter' },
    { id: 'reliquary:gold_nugget' }
  ])
  if (!Platform.isLoaded('weather2')) {
    event.recipes.summoningrituals.altar('minecraft:book')
      .itemOutput('reliquary:alkahestry_tome')
      .input([
        'reliquary:molten_core',
        'reliquary:witch_hat',
        'reliquary:eye_of_the_storm',
        'reliquary:slime_pearl',
        'reliquary:nebulous_heart',
        'minecraft:wither_skeleton_skull',
        'reliquary:chelicerae',
        'reliquary:catalyzing_gland',
        'kubejs:duplicator'
      ])
      .dayTime('night')
      .weather('clear')
      .id('kubejs:reliquary/altar/alkahestry_tome');
    event.recipes.summoningrituals.altar('minecraft:leather')
      .itemOutput('reliquary:mercy_cross')
      .input([
        '4x minecraft:gold_ingot',
        'reliquary:withered_rib',
        'minecraft:wither_skeleton_skull',
        'reliquary:rib_bone',
        'reliquary:zombie_heart'
      ])
      .sacrifice('minecraft:sheep')
      .dayTime('day')
      .weather('clear')
      .id('kubejs:reliquary/ritual/mercy_cross');
    event.recipes.summoningrituals.altar('minecraft:feather')
      .itemOutput('reliquary:angelic_feather')
      .input([
        'reliquary:nebulous_heart',
        'reliquary:bat_wing',
        'reliquary:fertile_essence'
      ])
      .dayTime('day')
      .weather('clear')
      .id('kubejs:reliquary/altar/angelic_feather');
    event.recipes.summoningrituals.altar('minecraft:flint_and_steel')
      .itemOutput('reliquary:destruction_catalyst')
      .input([
        'reliquary:molten_core',
        'reliquary:catalyzing_gland',
        'reliquary:infernal_tear'
      ])
      .dayTime('day')
      .weather('clear')
      .id('kubejs:reliquary/altar/destruction_catalyst');
    event.recipes.summoningrituals.altar('minecraft:emerald')
      .itemOutput('reliquary:emperor_chalice')
      .input([
        'minecraft:gold_ingot',
        'minecraft:bucket',
        'reliquary:void_tear'
      ])
      .weather('clear')
      .dayTime('night')
      .id('kubejs:reliquary/altar/emperor_chalice');
    event.recipes.summoningrituals.altar('minecraft:ghast_tear')
      .itemOutput('reliquary:void_tear')
      .input([
        'reliquary:nebulous_heart',
        'reliquary:slime_pearl',
        'minecraft:crying_obsidian'
      ])
      .dayTime('night')
      .weather('thunder')
      .id('kubejs:reliquary/ritual/void_tear');
    event.recipes.summoningrituals.altar('kubejs:gold_coin')
      .itemOutput('reliquary:fortune_coin')
      .input([
        'minecraft:emerald',
        'reliquary:nebulous_heart',
        'reliquary:slime_pearl',
        'reliquary:bat_wing'
      ])
      .dayTime('day')
      .weather('clear')
      .id('kubejs:reliquary/ritual/fortune_coin');
    event.recipes.summoningrituals.altar('reliquary:ice_magus_rod')
      .itemOutput('reliquary:glacial_staff')
      .input([
        'reliquary:void_tear',
        'reliquary:frozen_core',
        'reliquary:shears_of_winter'
      ])
      .dayTime('night')
      .weather('thunder')
      .id('kubejs:reliquary/ritual/glacial_staff');
    event.recipes.summoningrituals.altar('reliquary:fortune_coin')
      .itemOutput('reliquary:hero_medallion')
      .input([
        'reliquary:nebulous_heart',
        'reliquary:witch_hat',
        'reliquary:infernal_tear'
      ])
      .weather('clear')
      .id('kubejs:reliquary/ritual/hero_medallion');
    event.recipes.summoningrituals.altar('reliquary:nebulous_heart')
      .itemOutput('reliquary:kraken_shell')
      .input('3x reliquary:kraken_shell_fragment')
      .weather('thunder')
      .id('kubejs:reliquary/ritual/kraken_shell');
    event.recipes.summoningrituals.altar('minecraft:fishing_rod')
      .itemOutput('reliquary:rod_of_lyssa')
      .input([
        'reliquary:infernal_claw',
        'reliquary:bat_wing',
        'reliquary:nebulous_heart'
      ])
      .weather('rain')
      .id('kubejs:reliquary/ritual/rod_of_lyssa');
    event.recipes.summoningrituals.altar('minecraft:rose_bush')
      .itemOutput('reliquary:witherless_rose')
      .input([
        '4x reliquary:fertile_essence',
        '4x minecraft:nether_star'
      ])
      .dayTime('day')
      .weather('clear')
      .id('kubejs:reliquary/ritual/witherless_rose');
    event.recipes.summoningrituals.altar('minecraft:shears')
      .itemOutput('reliquary:shears_of_winter')
      .input([
        'reliquary:frozen_core',
        '2x minecraft:diamond'
      ])
      .dayTime('night')
      .weather('rain')
      .blockBelow('minecraft:blue_ice')
      .id('kubejs:reliquary/ritual/shears_of_winter');
  } else {
    event.recipes.summoningrituals.altar('minecraft:book')
      .itemOutput('reliquary:alkahestry_tome')
      .input([
        'reliquary:molten_core',
        'reliquary:witch_hat',
        'reliquary:eye_of_the_storm',
        'reliquary:slime_pearl',
        'reliquary:nebulous_heart',
        'minecraft:wither_skeleton_skull',
        'reliquary:chelicerae',
        'reliquary:catalyzing_gland',
        'kubejs:duplicator'
      ])
      .dayTime('night')
      .id('kubejs:reliquary/altar/alkahestry_tome');
    event.recipes.summoningrituals.altar('minecraft:leather')
      .itemOutput('reliquary:mercy_cross')
      .input([
        '4x minecraft:gold_ingot',
        'reliquary:withered_rib',
        'minecraft:wither_skeleton_skull',
        'reliquary:rib_bone',
        'reliquary:zombie_heart'
      ])
      .sacrifice('minecraft:sheep')
      .dayTime('day')
      .id('kubejs:reliquary/ritual/mercy_cross');
    event.recipes.summoningrituals.altar('minecraft:feather')
      .itemOutput('reliquary:angelic_feather')
      .input([
        'reliquary:nebulous_heart',
        'reliquary:bat_wing',
        'reliquary:fertile_essence'
      ])
      .dayTime('day')
      .id('kubejs:reliquary/altar/angelic_feather');
    event.recipes.summoningrituals.altar('minecraft:flint_and_steel')
      .itemOutput('reliquary:destruction_catalyst')
      .input([
        'reliquary:molten_core',
        'reliquary:catalyzing_gland',
        'reliquary:infernal_tear'
      ])
      .dayTime('day')
      .id('kubejs:reliquary/altar/destruction_catalyst');
    event.recipes.summoningrituals.altar('minecraft:emerald')
      .itemOutput('reliquary:emperor_chalice')
      .input([
        'minecraft:gold_ingot',
        'minecraft:bucket',
        'reliquary:void_tear'
      ])
      .dayTime('night')
      .id('kubejs:reliquary/altar/emperor_chalice');
    event.recipes.summoningrituals.altar('minecraft:ghast_tear')
      .itemOutput('reliquary:void_tear')
      .input([
        'reliquary:nebulous_heart',
        'reliquary:slime_pearl',
        'minecraft:crying_obsidian'
      ])
      .dayTime('night')
      .id('kubejs:reliquary/ritual/void_tear');
    event.recipes.summoningrituals.altar('kubejs:gold_coin')
      .itemOutput('reliquary:fortune_coin')
      .input([
        'minecraft:emerald',
        'reliquary:nebulous_heart',
        'reliquary:slime_pearl',
        'reliquary:bat_wing'
      ])
      .dayTime('day')
      .id('kubejs:reliquary/ritual/fortune_coin');
    event.recipes.summoningrituals.altar('reliquary:ice_magus_rod')
      .itemOutput('reliquary:glacial_staff')
      .input([
        'reliquary:void_tear',
        'reliquary:frozen_core',
        'reliquary:shears_of_winter'
      ])
      .dayTime('night')
      .id('kubejs:reliquary/ritual/glacial_staff');
    event.recipes.summoningrituals.altar('reliquary:fortune_coin')
      .itemOutput('reliquary:hero_medallion')
      .input([
        'reliquary:nebulous_heart',
        'reliquary:witch_hat',
        'reliquary:infernal_tear'
      ])
      .id('kubejs:reliquary/ritual/hero_medallion');
    event.recipes.summoningrituals.altar('reliquary:nebulous_heart')
      .itemOutput('reliquary:kraken_shell')
      .input('3x reliquary:kraken_shell_fragment')
      .id('kubejs:reliquary/ritual/kraken_shell');
    event.recipes.summoningrituals.altar('minecraft:fishing_rod')
      .itemOutput('reliquary:rod_of_lyssa')
      .input([
        'reliquary:infernal_claw',
        'reliquary:bat_wing',
        'reliquary:nebulous_heart'
      ])
      .id('kubejs:reliquary/ritual/rod_of_lyssa');
    event.recipes.summoningrituals.altar('minecraft:rose_bush')
      .itemOutput('reliquary:witherless_rose')
      .input([
        '4x reliquary:fertile_essence',
        '4x minecraft:nether_star'
      ])
      .dayTime('day')
      .id('kubejs:reliquary/ritual/witherless_rose');
    event.recipes.summoningrituals.altar('minecraft:shears')
      .itemOutput('reliquary:shears_of_winter')
      .input([
        'reliquary:frozen_core',
        '2x minecraft:diamond'
      ])
      .dayTime('night')
      .blockBelow('minecraft:blue_ice')
      .id('kubejs:reliquary/ritual/shears_of_winter');
  }
  // angelheart
  event.recipes.kubejs.shapeless('reliquary:angelheart_vial', [
    'reliquary:empty_potion_vial',
    'minecraft:milk_bucket',
    'reliquary:infernal_claw',
    '2x reliquary:fertile_essence'
  ]).id('kubejs:reliquary/angelheart_vial')
  event.recipes.create.mixing(Fluid.of('kubejs:angelheart_mixture'), [
    Fluid.of('minecraft:milk'),
    'reliquary:infernal_claw',
    '2x reliquary:fertile_essence'
  ]).id('kubejs:reliquary/mixing/angelheart_mixture')
  event.recipes.create.filling('reliquary:angelheart_vial', [
    'reliquary:empty_potion_vial',
    Fluid.of('kubejs:angelheart_mixture', 250)
  ]).id('kubejs:reliquary/filling/angelheart_vial')
  // aphrodite
  event.recipes.kubejs.shapeless('reliquary:aphrodite_potion', [
    'reliquary:empty_potion_vial',
    'minecraft:water_bucket',
    'reliquary:fertile_essence',
    '#forge:dyes/red',
    'minecraft:cocoa_beans'
  ]).id('kubejs:reliquary/aphrodite_potion')
  event.recipes.create.mixing(Fluid.of('kubejs:aphrodite_mixture'), [
    Fluid.of('minecraft:water'),
    'reliquary:fertile_essence',
    '#forge:dyes/red',
    'minecraft:cocoa_beans'
  ]).id('kubejs:reliquary/mixing/aphrodite_mixture')
  event.recipes.create.filling('reliquary:aphrodite_potion', [
    'reliquary:empty_potion_vial',
    Fluid.of('kubejs:aphrodite_mixture', 250)
  ]).id('kubejs:reliquary/filling/aphrodite_potion')
  event.recipes.create.milling([
    'minecraft:gold_nugget'
  ], 'reliquary:bullets/empty_bullet')
    .processingTime(150)
    .id('kubejs:reliquary/milling/empty_bullet');
  // fertile
  event.recipes.kubejs.shapeless('reliquary:fertile_potion', [
    'reliquary:empty_potion_vial',
    'minecraft:water_bucket',
    'reliquary:fertile_essence',
    '#forge:dyes/green',
    '#forge:dyes/yellow'
  ]).id('kubejs:reliquary/fertile_potion')
  event.recipes.create.mixing(Fluid.of('kubejs:fertile_mixture'), [
    Fluid.of('minecraft:water'),
    'reliquary:fertile_essence',
    '#forge:dyes/green',
    '#forge:dyes/yellow'
  ]).id('kubejs:reliquary/mixing/fertile_mixture')
  event.recipes.create.filling('reliquary:fertile_potion', [
    'reliquary:empty_potion_vial',
    Fluid.of('kubejs:fertile_mixture', 250)
  ]).id('kubejs:reliquary/filling/fertile_potion')
  event.recipes.create.mixing(Fluid.of('kubejs:glowing_water'), [
    'minecraft:glowstone_dust',
    'minecraft:gunpowder',
    'minecraft:nether_wart',
    Fluid.of('minecraft:water')
  ]).id('kubejs:reliquary/mixing/glowing_water')
  event.recipes.create.filling('reliquary:glowing_water', [
    'reliquary:empty_potion_vial',
    Fluid.of('kubejs:glowing_water', 250)
  ]).id('kubejs:reliquary/filling')
  event.recipes.create.sequenced_assembly('reliquary:holy_hand_grenade', 'create:golden_sheet', [
    event.recipes.create.deploying('kubejs:incomplete_holy_hand_grenade', ['kubejs:incomplete_holy_hand_grenade', 'reliquary:glowing_water']),
    event.recipes.create.deploying('kubejs:incomplete_holy_hand_grenade', ['kubejs:incomplete_holy_hand_grenade', 'minecraft:tnt']),
    event.recipes.create.deploying('kubejs:incomplete_holy_hand_grenade', ['kubejs:incomplete_holy_hand_grenade', 'reliquary:catalyzing_gland'])
  ]).transitionalItem('kubejs:incomplete_holy_hand_grenade').loops(1).id('kubejs:reliquary/sequenced_assembly/holy_hand_grenade')
  event.recipes.create.sequenced_assembly('reliquary:handgun', 'reliquary:grip_assembly', [
    event.recipes.create.deploying('kubejs:incomplete_handgun', ['kubejs:incomplete_handgun', 'reliquary:hammer_assembly']),
    event.recipes.create.deploying('kubejs:incomplete_handgun', ['kubejs:incomplete_handgun', 'reliquary:slime_pearl']),
    event.recipes.create.deploying('kubejs:incomplete_handgun', ['kubejs:incomplete_handgun', 'minecraft:iron_ingot']),
    event.recipes.create.deploying('kubejs:incomplete_handgun', ['kubejs:incomplete_handgun', 'reliquary:barrel_assembly'])
  ]).transitionalItem('kubejs:incomplete_handgun').loops(1).id('kubejs:reliquary/sequenced_assembly/handgun')
  event.recipes.summoningrituals.altar('reliquary:infernal_claws')
    .itemOutput('reliquary:infernal_chalice')
    .input([
      'reliquary:emperor_chalice',
      'reliquary:infernal_tear',
      'reliquary:molten_core'
    ])
    .id('kubejs:reliquary/ritual/infernal_chalice');
  event.recipes.summoningrituals.altar('reliquary:void_tear')
    .itemOutput('reliquary:infernal_tear')
    .input([
      'reliquary:witch_hat',
      'reliquary:molten_core',
      'reliquary:infernal_claw'
    ])
    .id('kubejs:reliquary/ritual/infernal_tear');
  event.recipes.summoningrituals.altar('minecraft:anvil')
    .itemOutput('reliquary:midas_touchstone')
    .input([
      '2x minecraft:gold_block',
      '3x reliquary:molten_core',
      '2x reliquary:catalyzing_gland',
      'reliquary:void_tear'
    ])
    .id('kubejs:reliquary/ritual/midas_touchstone');
})

ServerEvents.tags('item', event => {
  event.add('forge:shears', 'reliquary:shears_of_winter')
})