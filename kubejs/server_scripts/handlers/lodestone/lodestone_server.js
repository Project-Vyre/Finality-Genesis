// requires: lodestone

/**
 * @file Sends data to the player client whenever an explosion occurs.
 */

LevelEvents.afterExplosion(event => {
  const { x, y, z, level } = event
  level.getEntitiesWithin(AABB.of(x - 20, y - 20, z - 20, x + 20, y + 20, z + 20)).forEach(entity => {
    if (entity.isPlayer()) {
      let distance = entity.getDistance(x, y, z)
      distance = 20 - distance
      distance = distance / 20 * 2
      entity.sendData('screenshake', { i1: distance * 0.6, i2: distance, i3: distance * 0.2, duration: 15 })
    }
  })
})