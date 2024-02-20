// requires: fusion

StartupEvents.registry('block', event => {
  event.create('kubejs:high_entropy_alloy_block_connecting')
    .textureAll('kubejs:block/high_entropy_alloy_block_connecting')
    .soundType('netherite_block')
    .hardness(500)
    .resistance(1000)
    .lightLevel(1.0)
    .requiresTool(true)
    .tagBlock('minecraft:wither_immune')
    .tagBlock('minecraft:dragon_immune')
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('forge:needs_netherite_tool')
    .tagBlock('create:wrench_pickup')
})