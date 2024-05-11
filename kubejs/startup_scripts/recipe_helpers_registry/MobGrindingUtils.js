// requires: mob_grinding_utils

/**
 * @file Registration for recipe helpers related to Mob Grinding Utils recipes.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

StartupEvents.registry('block', event => {
  event.create('kubejs:incomplete_spikes')
    .textureAll('kubejs:block/incomplete_placeholder_block')
    .defaultCutout()
    .transparent(true)
    .soundType('metal')
    .hardness(30)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
  event.create('kubejs:incomplete_jumbo_tank')
    .textureAll('kubejs:block/incomplete_placeholder_block')
    .defaultCutout()
    .transparent(true)
    .soundType('netherite_block')
    .hardness(30)
    .resistance(1000)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/pickaxe')
})