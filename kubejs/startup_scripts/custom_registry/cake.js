// ignored: true

// note to self: implement custom cakes

const $CakeBlock = Java.loadClass('net.minecraft.world.level.block.CakeBlock')
const $BProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const $Material = Java.loadClass('net.minecraft.world.level.material.Material')
const $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
// this class seems to no longer exist
//const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')
const $MaterialColor = Java.loadClass('net.minecraft.world.level.material.MaterialColor')

/*
public static final Block CAKE = Blocks.register("cake", new CakeBlock(BlockBehaviour.Properties.of().forceSolidOn().strength(0.5f).sound(SoundType.WOOL).pushReaction(PushReaction.DESTROY)));
*/