// ignored: false

// work in progress

/**
 * @file Responsible for making the lemon crop.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Sven H. <svenstihl2> for providing the initial basis https://discord.com/channels/303440391124942858/1101483030280933396
 */

StartupEvents.registry('item', event => {
  event.create('kubejs:lemon')
    .food(food => {
      food
        .hunger(3)
        .saturation(2)
        .effect('speed', 20, 255, 1)
        .alwaysEdible()
    })
    .texture('kubejs:item/lemon')
    .tag('forge:fruits/lemon')
  event.create('kubejs:lemon_slice').food(food => {
    food
      .hunger(2)
      .saturation(1)
      .effect('speed', 20, 255, 1)
      .alwaysEdible()
  }).texture('kubejs:item/lemon_slice')
})

StartupEvents.registry('block', event => {
  event.create('kubejs:lemon', 'crop')
    .age(8, builder => {
      builder
        .shape(0, 0, 0, 0, 16, 2, 16)
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 8, 16)
        .shape(1, 0, 0, 0, 16, 16, 16)
        .shape(1, 0, 0, 0, 16, 16, 16)
        .shape(2, 0, 0, 0, 16, 16, 16)
        .shape(2, 0, 0, 0, 16, 16, 16)
        .shape(3, 0, 0, 0, 16, 16, 16)
    })
    .survive((state, level, pos) => {
      const FARMLAND = Java.loadClass('net.minecraft.world.level.block.FarmBlock')
      let blockState = level.getBlockState(pos.below())
      let minecraftBlock = blockState.block
      if (minecraftBlock instanceof FARMLAND) {
        return true
      } else return false
    })
    .growTick(tickEvent => 25)
    .bonemeal(bone_meal => 5)
    .dropSeed(true)
    .crop('kubejs:lemon')
    .crop('kubejs:lemon')
    .item(seedItem => {
      seedItem.texture('kubejs:item/lemon_seeds')
    })
    .texture(0, 'kubejs:block/lemon_tree_stage0')
    .texture(1, 'kubejs:block/lemon_tree_stage1')
    .texture(2, 'kubejs:block/lemon_tree_stage1')
    .texture(3, 'kubejs:block/lemon_tree_stage1')
    .texture(4, 'kubejs:block/lemon_tree_stage2')
    .texture(5, 'kubejs:block/lemon_tree_stage2')
    .texture(6, 'kubejs:block/lemon_tree_stage2')
    .texture(7, 'kubejs:block/lemon_tree_stage3')
    .texture(8, 'kubejs:block/lemon_tree_stage3')
})

StartupEvents.registry('fluid', event => {
  event.create('kubejs:lemon_juice')
    .thinTexture(0xFFEFC9)
    .bucketColor(0xFFEFC9)
})