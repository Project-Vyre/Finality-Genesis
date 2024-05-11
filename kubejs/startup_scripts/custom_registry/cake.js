// ignored: true

/**
 * @file Makes custom cakes.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 * @author ChiefArug <https://github.com/ChiefArug> Helped majorly with my suffering when writing this out
 */

let $CakeBlock = Java.loadClass('net.minecraft.world.level.block.CakeBlock')
let $BlockProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
let $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
let $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
let $FoodProperties = Java.loadClass('net.minecraft.world.food.FoodProperties')
/** @description Food Builder for custom food. */
let $FoodBuilder = Java.loadClass('net.minecraft.world.food.FoodProperties$Builder')
let $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

/*
public static final Block CAKE = Blocks.register("cake", new CakeBlock(BlockBehaviour.Properties.of().forceSolidOn().strength(0.5f).sound(SoundType.WOOL).pushReaction(PushReaction.DESTROY)));
*/

StartupEvents.registry('block', event => {
  event.createCustom('kubejs:la_lettre_a_focalors', () => new $CakeBlock(new $BlockProperties.copy(Block.getBlock('cake'))))
  event.createCustom('kubejs:pour_la_justice', () => new $CakeBlock(new $BlockProperties.copy(Block.getBlock('cake'))))
})

StartupEvents.registry('item', event => {
  event.createCustom('kubejs:la_lettre_a_focalors', () => new $BlockItem('kubejs:la_lettre_a_focalors',
    new $ItemProperties().tab($KubeJS.tab).food(new $FoodBuilder()
      .nutrition(2)
      .saturationMod(0.5)
      .fast()
      .build()
    )
  ))
  event.createCustom('kubejs:pour_la_justice', () => new $BlockItem('kubejs:pour_la_justice',
    new $ItemProperties().tab($KubeJS.tab).food(new $FoodBuilder()
      .nutrition(2)
      .saturationMod(0.5)
      .fast()
      .build()
    )
  ))
})