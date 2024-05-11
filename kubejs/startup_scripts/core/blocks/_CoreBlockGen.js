/**
 * @file Block registration.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author LLytho <https://github.com/LLytho> Prevented the head bashing
 */

let CMD = [
  'command_block',
  'chain_command_block',
  'repeating_command_block'
]

StartupEvents.registry('block', event => {
  event.create('kubejs:high_entropy_alloy_block')
    .textureAll('kubejs:block/high_entropy_alloy_block')
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
  for (let insert of CMD) {
    event.create(`kubejs:${insert}`)
      .textureAll(`kubejs:block/${insert}`)
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
      .tagItem('kubejs:command_blocks')
      .blockEntity(entityInfo => {
        entityInfo.inventory(9, 1)
        entityInfo.rightClickOpensInventory()
        entityInfo.serverTick(1200, 0, entity => {
          entity.inventory.insertItem('kubejs:high_entropy_alloy_block', false)
        }) // reminder to self: add inventory capabilities
      })
  }
  event.create('kubejs:null_storage_block')
    .textureAll('kubejs:block/null_storage')
    .defaultCutout()
    .defaultTranslucent()
    .transparent(true)
    .soundType('netherite_block')
    .blockEntity(entityInfo => {
      entityInfo.inventory(9, 9)
      entityInfo.rightClickOpensInventory()
      // reminder to self: add inventory capabilities
    })
  event.create('kubejs:dripstone_transitional_stone')
    .textureAll('kubejs:block/dripstone_stone')
    .requiresTool(true)
    .soundType('stone')
    .tagBlock('minecraft:mineable/pickaxe')
})