// priority: 10

/**
 * @file Checks if a player is in a fluid.
 * @author ChiefArug <https://github.com/ChiefArug> Provided via support ticket
 */

const $MutableBlockPos = Java.loadClass('net.minecraft.core.BlockPos$MutableBlockPos')

/**
 * @param {Internal.Player} player 
 * @param {Internal.FlowingFluid} fluid
 */
function isInFluid(player, fluid) {
  const boundingBox = player.getBoundingBox().deflate(0.001)
  const xMin = Math.floor(boundingBox.minX)
  const xMax = Math.ceil(boundingBox.maxX)
  const yMin = Math.floor(boundingBox.minY)
  const yMax = Math.ceil(boundingBox.maxY)
  const zMin = Math.floor(boundingBox.minZ)
  const zMax = Math.ceil(boundingBox.maxZ)
  const mutPos = new $MutableBlockPos()

  for (let x = xMin; x < xMax; x++) {
    for (let y = yMin; y < yMax; y++) {
      for (let z = zMin; z < zMax; z++) {
        mutPos.set(x, y, z)
        let fluidState = player.level.getFluidState(mutPos)
        if (player.level.getFluidState(mutPos).is(fluid.source) || fluidState.is(fluid.flowing) && y + fluidState.getHeight(player.level, mutPos) >= boundingBox.minY) {
          return true;
        }
      }
    }
  }
  return false;
}

PlayerEvents.tick(event => {
  if (isInFluid(event.player, Fluid.getType('create:honey'))) {
    event.player.potionEffects.add('minecraft:regeneration', 200, 2, true, false)
    event.player.potionEffects.add('minecraft:absorption', 200, 5, true, false)
  }
  if (isInFluid(event.player, Fluid.getType('kubejs:molten_copper'))
    || isInFluid(event.player, Fluid.getType('kubejs:molten_iron'))
    || isInFluid(event.player, Fluid.getType('kubejs:molten_gold'))
    || isInFluid(event.player, Fluid.getType('kubejs:molten_zinc'))
    || isInFluid(event.player, Fluid.getType('kubejs:molten_brass'))
    || isInFluid(event.player, Fluid.getType('kubejs:molten_netherite'))
  ) {
    event.player.setSecondsOnFire(10)
  }
  if (isInFluid(event.player, Fluid.getType('kubejs:condensed_universal_entropy'))) {
    event.player.potionEffects.add('minecraft:jump_boost', 200, 120, true, false)
    event.player.potionEffects.add('minecraft:speed', 200, 255, true, false)
  }
  if (isInFluid(event.player, Fluid.getType('kubejs:condensed_universal_order'))) {
    event.player.potionEffects.add('minecraft:resistance', 200, 5, true, false)
  }
})

let future_use = false
if (future_use) {
  if (isInFluid(SWAMP)) {
    /*
    this typewraps ticksInFluid to a boolean, then inverts it. 
    null, undefined and 0 all convert to false, any number not 0 converts to true, so this is only true if ticksInFluid hasn't been set or is set to 0
    */
    if (!event.player.persistentData.ticksInFluid) {
      event.player.persistentData.ticksInFluid = 1
    } else {
      event.player.persistentData.ticksInFluid++ // just increment it
    }
    // what you do with event.player.persistentData.ticksInFluid is up to you, but easiest would be a series of if statements checking how big it is
  } else {
    event.player.persistentData.ticksInFluid = 0 // they left the fluid
  }
}
/*
    switch (Fluid.getType()) {
    case 'create:honey':
        event.player.potionEffects.add('minecraft:regeneration', 10, 2, true, false)
        break;
    case ('kubejs:molten_iron' || 'kubejs:molten_gold'):
        break;
    case :
        break;
    default:
        break;
}
*/