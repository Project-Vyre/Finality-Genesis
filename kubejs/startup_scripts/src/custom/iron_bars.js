/**
 * @file Custom Iron Bars generator.
 * @author PieTheNiceGuy <https://github.com/hunter19823> Original script author
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

const IronBarsBlock = Java.loadClass('net.minecraft.world.level.block.IronBarsBlock')
const BProperties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
const SoundType = Java.loadClass('net.minecraft.world.level.block.SoundType')
const BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
const IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

let bloodfire_bars

StartupEvents.registry('block', event => {
  bloodfire_bars = event.createCustom('kubejs:bloodfire_bars', () => new IronBarsBlock(BProperties.of()
    .requiresCorrectToolForDrops()
    .strength(5.0, 6.0)
    .sound(SoundType.METAL)
    .noOcclusion()
  )).tag('minecraft:mineable/pickaxe')
    .tag('minecraft:needs_stone_tool')
    .tag('minecraft:dragon_immune')
    .tag('mineacraft:wither_immune')
})
StartupEvents.registry('item', event => {
  event.createCustom('kubejs:bloodfire_bars', () => new BlockItem(bloodfire_bars.get(), new IProperties()))
})
BlockEvents.modification(event => {
  event.modify('kubejs:bloodfire_bars', block => {
    block.explosionResistance = 100
    block.lightEmission = 10
  })
})
ItemEvents.modification(event => {
  event.modify('kubejs:bloodfire_bars', item => {
    item.fireResistant = true
  })
})