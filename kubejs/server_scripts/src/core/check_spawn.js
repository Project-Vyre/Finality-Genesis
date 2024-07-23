/**
 * @file Checking entity spawns.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: entityjs

let controlledMobs = [
  'grimoireofgaia:behender'
]
EntityEvents.spawned(event => {
  const { player, entity, server, level } = event
  if (!controlledMobs.includes(entity.type)) return
  let mobCap = 10
  let radiusToCheck = entity.boundingBox.inflate(10)
  // Check how many entities are in the radius
  let similarEntityTypeCheck = level.getEntitiesWithin(radiusToCheck).size()
  if (similarEntityTypeCheck > mobCap) {
      event.cancel()
  }
})

EntityJSEvents.biomeSpawns(event => {
  event.removeSpawn('grimoireofgaia:cyan_flower', ['#minecraft:is_overworld'])
  event.addSpawn('grimoireofgaia:cyan_flower', ['#minecraft:is_overworld'], 20, 3, 20)
})

/*
EntityEvents.checkSpawn(event => {
  const { item, level, player, entity } = event
  //let playerAABB = player.boundingBox.inflate(5)
  //let myBoundingBox = AABB.of(
  //  player.pos.x() - 160,
  //  player.pos.y() - 20,
  //  player.pos.z() - 16,
  //  player.pos.x() + 160,
  //  player.pos.y() + 20,
  //  player.pos.z() + 160
  //)
  //player.boundingBoxForCulling(myBoundingBox)
  switch (entity.getId()) {
    case 'grimoireofgaia:cyan_flower':
      if (Math.random > 0.75) {
        console.log('Cancelled entity grimoireofgaia:cyan_flower spawn')
        event.cancel()
      }
      break;

    default:
      break;
  }
  //if (event.getEntity() == 'grimoireofgaia:cyan_flower') {
  //  if (Math.random > 0.75) { event.cancel() }
  //}
})
*/