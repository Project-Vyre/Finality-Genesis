/**
 * @file Server handler for Architect's Palette.
 * @deprecated Mod may no longer maintained by the main author, do not use this in 1.20.1+ unless development continues.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: architects_palette
// requires: kubejs_create
// requires: v_slab_compat

ServerEvents.tags('item', event => {
  event.add('architects_palette:myonite_tag_fix', [
    'architects_palette:myonite',
    'architects_palette:myonite_bricks'
  ])
  if (Platform.isLoaded('bhc')) {
    event.add('forge:wither_bones', 'architects_palette:withered_bone')
  }
})

ServerEvents.recipes(event => {
  event.remove([
    { id: 'architects_palette:smelting/charcoal_block_from_logs_that_burn_smoking'}
  ])
  event.recipes.create.mixing('architects_palette:heliodor_rod', [
    '4x minecraft:glowstone_dust',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:mixing/heliodor_rod_renewal')
  event.recipes.create.mixing('architects_palette:ekanite_rod', [
    'minecraft:emerald',
    '4x minecraft:glowstone_dust',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:mixing/ekanite_rod_renewal')
  event.recipes.create.mixing('architects_palette:monazite_rod', [
    'create:cinder_flour',
    '4x minecraft:glowstone_dust',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:mixing/monazite_rod_renewal')
  event.remove([
    { id: 'architects_palette:vertslabs/myonite_vertical_slab' },
    { id: 'architects_palette:vertslabs/myonite_vertical_slab_revert' },
    { id: 'architects_palette:vertslabs/stonecutting/myonite_vslab_from_myonite_stonecutting' },
    { id: 'architects_palette:vertslabs/myonite_brick_vertical_slab' },
    { id: 'architects_palette:vertslabs/myonite_brick_vertical_slab_revert' },
    { id: 'architects_palette:vertslabs/stonecutting/myonite_brick_vslab_from_myonite_and_myonite_bricks_stonecutting' },
    { id: 'architects_palette:vertslabs/mushy_myonite_brick_vertical_slab' },
    { id: 'architects_palette:vertslabs/mushy_myonite_brick_vertical_slab_revert' },
    { id: 'architects_palette:vertslabs/stonecutting/mushy_myonite_brick_vslab_from_mushy_myonite_bricks_stonecutting' }
  ])
  // myonite 'architects_palette:myonite_vertical_slab'
  event.shaped('3x architects_palette:myonite_vertical_slab', [
    'M',
    'M',
    'M'
  ], {
    M: 'architects_palette:myonite'
  }).id('kubejs:vertslabs/myonite_vertical_slab')
  event.shapeless('architects_palette:myonite_slab', [
    'architects_palette:myonite_vertical_slab'
  ]).id('kubejs:vertslabs/myonite_vertical_slab_revert')
  event.recipes.minecraft.stonecutting(
    '2x architects_palette:myonite_vertical_slab',
    'architects_palette:myonite'
  ).id('kubejs:vertslabs/stonecutting/myonite_vslab_from_myonite_stonecutting')
  // myonite brick 'architects_palette:myonite_bricks'
  event.shaped('3x architects_palette:myonite_brick_vertical_slab', [
    'M',
    'M',
    'M'
  ], {
    M: 'architects_palette:myonite_bricks'
  }).id('kubejs:vertslabs/myonite_brick_vertical_slab')
  event.shapeless('architects_palette:myonite_brick_slab', [
    'architects_palette:myonite_brick_vertical_slab'
  ]).id('kubejs:vertslabs/myonite_brick_vertical_slab_revert')
  event.recipes.minecraft.stonecutting(
    '2x architects_palette:myonite_brick_vertical_slab',
    '#architects_palette:myonite_tag_fix'
  ).id('kubejs:vertslabs/stonecutting/myonite_brick_vslab_from_myonite_and_myonite_bricks_stonecutting')
  // mushy myonite brick
  event.shaped('3x architects_palette:mushy_myonite_brick_vertical_slab', [
    'M',
    'M',
    'M'
  ], {
    M: 'architects_palette:mushy_myonite_bricks'
  }).id('kubejs:vertslabs/mushy_myonite_brick_vertical_slab')
  event.shapeless('architects_palette:mushy_myonite_brick_slab', [
    'architects_palette:mushy_myonite_brick_vertical_slab'
  ]).id('kubejs:vertslabs/mushy_myonite_brick_vertical_slab_revert')
  event.recipes.minecraft.stonecutting(
    '2x architects_palette:mushy_myonite_brick_vertical_slab',
    'architects_palette:mushy_myonite_bricks'
  ).id('kubejs:vertslabs/stonecutting/mushy_myonite_brick_vslab_from_mushy_myonite_bricks_stonecutting')
  event.recipes.minecraft.crafting_shapeless(
    'minecraft:flint',
    'architects_palette:flint_block'
  ).id('kubejs:architects_palette/flint_block_to_flint')
  event.recipes.minecraft.crafting_shapeless(
    'architects_palette:flint_block',
    'architects_palette:flint_tiles'
  ).id('kubejs:architects_palette/flint_tiles_to_flint_block')
  event.recipes.minecraft.crafting_shapeless(
    'architects_palette:flint_block',
    'architects_palette:flint_pillar'
  ).id('kubejs:architects_palette/flint_pillar_to_flint_block')
  event.recipes.create.deploying([
    '2x minecraft:white_wool',
    'minecraft:oak_fence'
  ], [
    'architects_palette:spool',
    'kubejs:deconstructor'
  ]).id('finality:deploying/architects_palette/spool_deconstruction')
})