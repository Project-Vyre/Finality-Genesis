// requires: jmc
// requires: createaddition
// requires: kubejs_create
// requires: farmersdelight
// ignored: false

/**
 * @file Server handler for Just More Cakes!
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// Not sure if I'm even going to use this...

ServerEvents.recipes(event => {
  /**
   * 
   * @param {*} output 
   * @param {*} inputIcing 
   * @param {*} recipeId 
   */
  let icing = (output, inputIcing, recipeId) => {
    event.recipes.create.filling(output, [
      'createaddition:cake_base_baked',
      Fluid.of(inputIcing, 250)
    ]).id(`finality:jmc/filling/${recipeId}_cake`)
  }
  event.remove({ id: 'jmc:pumpkin_cake_from_cake_oven' })
  event.custom({
    "type": "jmc:cake_baking",
    "cookingTime": 250,
    "experience": 0.6,
    "ingredients": [
      {
        "item": "farmersdelight:pumpkin_slice"
      },
      {
        "item": "minecraft:milk_bucket"
      },
      {
        "item": "minecraft:sugar"
      },
      {
        "item": "minecraft:wheat"
      }
    ],
    "result": "jmc:pumpkin_cake"
  }).id('jmc:pumpkin_cake_from_cake_oven')
  event.recipes.create.mixing(Fluid.of('kubejs:carrot_icing'), [
    'minecraft:sugar',
    'minecraft:carrot',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/carrot_icing')
  icing('jmc:carrot_cake', 'kubejs:carrot_icing', 'carrot')

  event.recipes.create.mixing(Fluid.of('kubejs:pumpkin_icing'), [
    'minecraft:sugar',
    'farmersdelight:pumpkin_slice',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/pumpkin_icing')
  icing('jmc:pumpkin_cake', 'kubejs:pumpkin_icing', 'pumpkin')

  event.recipes.create.mixing(Fluid.of('kubejs:melon_icing'), [
    'minecraft:sugar',
    'minecraft:melon_slice',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/melon_icing')
  icing('jmc:melon_cake', 'kubejs:melon_icing', 'melon')

  event.recipes.create.mixing(Fluid.of('kubejs:apple_icing'), [
    'minecraft:sugar',
    'minecraft:apple',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/apple_icing')
  icing('jmc:apple_cake', 'kubejs:apple_icing', 'apple')

  event.recipes.create.mixing(Fluid.of('kubejs:poison_icing'), [
    'minecraft:sugar',
    'minecraft:spider_eye',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/poison_icing')
  icing('jmc:poison_cake', 'kubejs:poison_icing', 'poison')

  event.recipes.create.mixing(Fluid.of('kubejs:cookie_icing'), [
    'minecraft:sugar',
    'minecraft:cookie',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/cookie_icing')
  icing('jmc:cookie_cake', 'kubejs:cookie_icing', 'cookie')

  event.recipes.create.mixing(Fluid.of('kubejs:golden_apple_icing'), [
    'minecraft:sugar',
    'minecraft:golden_apple',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/golden_apple_icing')
  icing('jmc:golden_apple_cake', 'kubejs:golden_apple_icing', 'golden_apple')

  event.recipes.create.mixing(Fluid.of('kubejs:red_mushroom_icing'), [
    'minecraft:sugar',
    'minecraft:red_mushroom',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/red_mushroom_icing')
  icing('jmc:red_mushroom_cake', 'kubejs:red_mushroom_icing', 'red_mushroom')

  event.recipes.create.mixing(Fluid.of('kubejs:firey_icing'), [
    'minecraft:sugar',
    'minecraft:magma_cream',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/firey_icing')
  icing('jmc:firey_cake', 'kubejs:firey_icing', 'firey')

  event.recipes.create.mixing(Fluid.of('kubejs:redstone_icing'), [
    'minecraft:sugar',
    'minecraft:redstone',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/redstone_icing')
  icing('jmc:redstone_cake', 'kubejs:redstone_icing', 'redstone')

  event.recipes.create.mixing(Fluid.of('kubejs:ender_icing'), [
    'minecraft:sugar',
    'minecraft:ender_eye',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/ender_icing')
  icing('jmc:ender_cake', 'kubejs:ender_icing', 'ender')

  event.recipes.create.mixing(Fluid.of('kubejs:slime_icing'), [
    'minecraft:sugar',
    'minecraft:slime_ball',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/slime_ball')
  icing('jmc:slime_cake', 'kubejs:slime_icing', 'slime')

  event.recipes.create.mixing(Fluid.of('kubejs:beetroot_icing'), [
    'minecraft:sugar',
    'minecraft:beetroot',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/beetroot_icing')
  icing('jmc:beetroot_cake', 'kubejs:beetroot_icing', 'beetroot')

  event.recipes.create.mixing(Fluid.of('kubejs:brown_mushroom_icing'), [
    'minecraft:sugar',
    'minecraft:brown_mushroom',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/brown_mushroom_icing')
  icing('jmc:brown_mushroom_cake', 'kubejs:brown_mushroom_icing', 'brown_mushroom')

  event.recipes.create.mixing(Fluid.of('kubejs:chorus_icing'), [
    'minecraft:sugar',
    'minecraft:chorus_fruit',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/chorus_icing')
  icing('jmc:chorus_cake', 'kubejs:chorus_icing', 'chorus')

  event.recipes.create.mixing(Fluid.of('kubejs:sweet_berry_icing'), [
    'minecraft:sugar',
    'minecraft:sweet_berries',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/sweet_berry_icing')
  icing('jmc:sweet_berry_cake', 'kubejs:sweet_berry_icing', 'sweet_berry')

  event.recipes.create.mixing(Fluid.of('kubejs:honey_icing'), [
    'minecraft:sugar',
    Fluid.of('create:honey', 250),
    Fluid.of('minecraft:milk', 750)
  ]).heated().id('finality:jmc/mixing/honey_icing')
  icing('jmc:honey_cake', 'kubejs:honey_icing', 'honey')

  event.recipes.create.mixing(Fluid.of('kubejs:glowstone_icing'), [
    'minecraft:sugar',
    'minecraft:glowstone_dust',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/glowstone_icing')
  icing('jmc:glowstone_cake', 'kubejs:glowstone_icing', 'glowstone')

  event.recipes.create.mixing(Fluid.of('kubejs:crimson_fungus_icing'), [
    'minecraft:sugar',
    'minecraft:crimson_fungus',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/crimson_fungus_icing')
  icing('jmc:crimson_fungus_cake', 'kubejs:crimson_fungus_icing', 'crimson_fungus')

  event.recipes.create.mixing(Fluid.of('kubejs:warped_fungus_icing'), [
    'minecraft:sugar',
    'minecraft:warped_fungus',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/warped_fungus')
  icing('jmc:warped_fungus_cake', 'kubejs:warped_fungus_icing', 'warped_fungus')

  event.recipes.create.mixing(Fluid.of('kubejs:glow_berry_icing'), [
    'minecraft:sugar',
    'minecraft:glow_berries',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/glow_berry_icing')
  icing('jmc:glow_berry_cake', 'kubejs:glow_berry_icing', 'glow_berry')

  event.recipes.create.mixing(Fluid.of('kubejs:ice_icing'), [
    'minecraft:sugar',
    'minecraft:ice',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing')
  icing('jmc:ice_cake', 'kubejs:ice_icing', 'ice')
  /*
  Not sure if I should remove the jmc chocolate cake since it's just going to be a duplicate
  of Create Crafts & Additions's chocolate cake
  */
  //icing('jmc:tnt_cake', 'kubejs:tnt_icing', 'tnt')
  //icing('jmc:lava_cake', 'kubejs:lava_icing', 'lava')
  //icing('jmc:creeper_cake', 'kubejs:creeper_icing', 'creeper')
  //icing('jmc:seed_cake', 'kubejs:seed_icing', 'seed')
  // red velvet cake needs a new base.
  event.recipes.create.mixing(Fluid.of('kubejs:cream_cheese_icing'), [
    'minecraft:sugar',
    '#forge:cheese',
    Fluid.of('minecraft:milk')
  ]).heated().id('finality:jmc/mixing/cream_cheese_icing')
  event.recipes.create.mixing('kubejs:red_velvet_cake_base', [
    '#forge:dyes/red',
    'create:dough'
  ]).id('finality:mixing/red_velvet_cake_base')
  event.recipes.minecraft.smoking(
    'kubejs:red_velvet_cake_base_baked',
    'kubejs:red_velvet_cake_base'
  ).id('finality:smoking/red_velvet_cake_base_baking')
  event.recipes.create.filling('jmc:red_velvet_cake', [
    'kubejs:red_velvet_cake_base_baked',
    Fluid.of('kubejs:cream_cheese_icing', 500)
  ]).id('finality:jmc/filling/red_velvet_cake')
  event.recipes.create.filling('jmc:cheesecake', [
    'createaddition:cake_base_baked',
    Fluid.of('kubejs:cream_cheese_icing', 500)
  ]).id('finality:jmc/filling/cheesecake')
  event.recipes.create.filling('jmc:lava_cake', [
    'createaddition:cake_base_baked',
    Fluid.of('minecraft:lava')
  ]).id('finality:jmc/filling/lava_cake')
  event.recipes.create.deploying('jmc:cheesecake', [
    'createaddition:cake_base_baked',
    'jmc:cream_cheese'
  ]).id('finality:jmc/deploying/cheesecake')

  event.recipes.create.deploying('jmc:tnt_cake', [
    'minecraft:cake',
    'minecraft:tnt'
  ]).id('finality:jmc/deploying/tnt_cake')
  event.recipes.create.deploying('jmc:seed_cake', [
    'minecraft:cake',
    '#forge:seeds'
  ]).id('finality:jmc/deploying/seed_cake')
  event.recipes.create.sequenced_assembly('jmc:three_tiered_cake', 'minecraft:cake', [
    event.recipes.create.deploying('kubejs:incomplete_three_tiered_cake', ['kubejs:incomplete_three_tiered_cake', 'minecraft:cake']),
    event.recipes.create.deploying('kubejs:incomplete_three_tiered_cake', ['kubejs:incomplete_three_tiered_cake', 'minecraft:cake'])
  ]).transitionalItem('kubejs:incomplete_three_tiered_cake').loops(1).id('finality:jmc/sequenced_assembly/three_tiered_cake')
})