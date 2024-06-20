// requires: mcwbridges

/**
 * @file Server handler for Macaw's Bridges.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log("Macaw's Bridges detected! Adjusting recipes.")

ServerEvents.recipes(event => {
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let type = WOOD_TYPES[i];
    event.shapeless(`mcwbridges:${type}_log_bridge_stair`, [
      `mcwbridges:${type}_log_bridge_middle`
    ]).id(`mcwbridges:${type}_log_bridge_stair`)
    event.shapeless(`mcwbridges:${type}_rope_bridge_stair`, [
      `mcwbridges:rope_${type}_bridge`
    ]).id(`mcwbridges:${type}_rope_bridge_stair`)
  }
  event.shapeless('mcwbridges:iron_bridge_stair', [
    'mcwbridges:iron_bridge'
  ]).id('mcwbridges:iron_bridge_stair')
  event.shapeless('mcwbridges:stone_brick_bridge_stair', [
    'mcwbridges:stone_brick_bridge'
  ]).id('mcwbridges:stone_brick_bridge_stair')
  event.shapeless('mcwbridges:sandstone_bridge_stair', [
    'mcwbridges:sandstone_bridge'
  ]).id('mcwbridges:sandstone_bridge_stair')
  event.shapeless('mcwbridges:brick_bridge_stair', [
    'mcwbridges:brick_bridge'
  ]).id('mcwbridges:brick_bridge_stair')
  event.shapeless('mcwbridges:red_sandstone_bridge_stair', [
    'mcwbridges:orange_sandstone_bridge' // WHY IS IT ORANGE AND NOT RED SANDSTONE??
  ]).id('mcwbridges:red_sandstone_bridge_stair')
  event.shapeless('mcwbridges:blackstone_bridge_stair', [
    'mcwbridges:blackstone_bridge'
  ]).id('mcwbridges:blackstone_bridge_stair')
  event.shapeless('mcwbridges:mossy_stone_bridge_stair', [
    'mcwbridges:mossy_stone_brick_bridge' // and why do you turn from mossy stone brick to mossy *stone* bridge stair?
  ]).id('mcwbridges:mossy_stone_bridge_stair')
  event.shapeless('mcwbridges:deepslate_brick_bridge_stair', [
    'mcwbridges:deepslate_brick_bridge'
  ]).id('mcwbridges:deepslate_brick_bridge_stair')
  event.shapeless('mcwbridges:deepslate_tile_bridge_stair', [
    'mcwbridges:deepslate_tile_bridge'
  ]).id('mcwbridges:deepslate_tile_bridge_stair')
  event.shapeless('mcwbridges:mud_brick_bridge_stair', [
    'mcwbridges:mud_brick_bridge'
  ]).id('mcwbridges:mud_brick_bridge_stair')
  event.shapeless('mcwbridges:bamboo_bridge_stair', [
    'mcwbridges:bamboo_bridge'
  ]).id('mcwbridges:bamboo_bridge_stair')
  event.shapeless('mcwbridges:dry_bamboo_bridge_stair', [
    'mcwbridges:dry_bamboo_bridge'
  ]).id('mcwbridges:dry_bamboo_bridge_stair')
})