/**
 * @file Handles mechanics for items.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Liopyu <https://github.com/liopyu> Slapped me into my senses 
 */

// ignored: false

let explosion_counter = 0

ItemEvents.firstLeftClicked(event => {
  const { item, level, player, entity } = event
  if (player.shiftKeyDown && item.getId() == 'create:mysterious_cuckoo_clock') {
    let cuckoo_explosion = player.block.createExplosion()
    cuckoo_explosion.exploder(event.player)
      .explosionMode('mob')
      .causesFire(false)
      .strength(5)
      .explode();
    player.inventory.clear(item)
  }
  /*
  let explosion_box = AABB.of(
    event.player.pos.x() - 15,
    event.player.pos.y() - 5,
    event.player.pos.z() - 15,
    event.player.pos.x() + 15,
    event.player.pos.y() + 5,
    event.player.pos.z() + 15
  )
  if (item.getId() == 'kubejs:final_sword') {
    level.getEntitiesWithin(explosion_box).forEach(entity => {
      if (entity == null) return
      if (entity.item) { return }
      if (entity.getType() == 'minecraft:lightning_bolt') { return }
      if (entity.getType() == 'minecraft:end_crystal') { return }
      if (entity.getType() == 'minecraft:area_effect_cloud') { return }
      if (!entity.isPlayer()) {
        let sword_explosion = entity.block.createExplosion()
        sword_explosion.exploder(entity)
          .explosionMode('mob')
          .causesFire(false)
          .strength(0)
          .explode();
      }
    })
  }
  */
})

ItemEvents.firstRightClicked(event => {
  const { item, level, player, entity } = event
  let lightningBolt = entity.block.createEntity('minecraft:lightning_bolt')
  let playerAABB = player.boundingBox.inflate(5)
  let myBoundingBox = AABB.of(
    player.pos.x() - 20,
    player.pos.y() - 5,
    player.pos.z() - 20,
    player.pos.x() + 20,
    player.pos.y() + 10,
    player.pos.z() + 20
  )
  if (item.getId() == 'kubejs:final_sword') {
    level.getEntitiesWithin(myBoundingBox).forEach(entity => {
      switch (entity.getType()) {
        case null: return
        case 'minecraft:item': return
        case 'minecraft:lightning_bolt': return
        case 'minecraft:end_crystal': return
        case 'minecraft:area_effect_cloud': return
        case 'minecraft:falling_block': return
        default:
          break;
      }
      if (!entity.isPlayer()) {
        entity.block.createEntity('minecraft:lightning_bolt').spawn()
        //entity.block.createEntity('minecraft:end_crystal').spawn()
      }
    })
  }
  if (item.getId() == 'kubejs:final_scythe') {
    let end_ball = event.entity.level.getBlock(event.entity.x, event.entity.y + 0.1, event.entity.z).createEntity('minecraft:dragon_fireball')
    let speed = 1.0
    let motionX = event.entity.lookAngle.x() * speed;
    let motionY = event.entity.lookAngle.y() * speed;
    let motionZ = event.entity.lookAngle.z() * speed;

    let motionVec3 = new Vec3d(motionX, motionY, motionZ)
    end_ball.persistentData.FinalScytheProjectile = true
    end_ball.setDeltaMovement(motionVec3)
    end_ball.spawn()
  }
  if (item.getId() == 'kubejs:crimson_moons_semblance') {
    let arrow = event.entity.level.getBlock(event.entity.x, event.entity.y + 0.1, event.entity.z).createEntity('minecraft:fireball')
    let speed = 0.1
    let motionX = event.entity.lookAngle.x() * speed;
    let motionY = event.entity.lookAngle.y() * speed;
    let motionZ = event.entity.lookAngle.z() * speed;
    // Create a Vec3 for the motion
    let motionVec3 = new Vec3d(motionX, motionY, motionZ)
    arrow.persistentData.CrimsonFireball = true
    arrow.setDeltaMovement(motionVec3)
    arrow.spawn()
  }
})

ItemEvents.rightClicked(event => {
  const { item, level, player, entity } = event
  let lightningBolt = entity.block.createEntity('minecraft:lightning_bolt')
  let playerAABB = player.boundingBox.inflate(5)
  let myBoundingBox = AABB.of(
    player.pos.x() - 20,
    player.pos.y() - 5,
    player.pos.z() - 20,
    player.pos.x() + 20,
    player.pos.y() + 10,
    player.pos.z() + 20
  )
  if (item.getId() == 'kubejs:final_sword') {
    level.getEntitiesWithin(myBoundingBox).forEach(entity => {
      switch (entity.getType()) {
        case null: return
        case 'minecraft:item': return
        case 'minecraft:lightning_bolt': return
        case 'minecraft:end_crystal': return
        case 'minecraft:area_effect_cloud': return
        case 'minecraft:falling_block': return
        default:
          break;
      }
      if (!entity.isPlayer()) {
        if (explosion_counter++ % 7 != 0) return
        entity.block.createExplosion()
          .exploder(player)
          .explosionMode('none')
          .causesFire(false)
          .strength(5)
          .explode();
      }
    })
  }
})

LevelEvents.tick(event => {
  // Run tick method once a second
  if (event.server.tickCount % 20 != 0) return
  event.level.getEntities().forEach(entity => {

    if (entity.type != 'minecraft:fireball') {
      return
    } else if (!entity.persistentData.CrimsonFireball) { return }

    if (entity.type != 'minecraft:dragon_fireball') {
      return
    } else if (!entity.persistentData.FinalScytheProjectile) { return }

    if (entity.age > 200) {
      entity.remove('discarded')
    }

  })
})

/*
ItemEvents.rightClicked('minecraft:powder_snow_bucket', event => {
  let explosion = event.entity.block.createExplosion().explode()
  let lightningBolt = event.entity.block.createEntity('minecraft:lightning_bolt')
  let playerAABB = event.player.boundingBox.inflate(5)
  let myBoundingBox = AABB.of(
    event.player.pos.x() - 10,
    event.player.pos.y() - 5,
    event.player.pos.z() - 10,
    event.player.pos.x() + 10,
    event.player.pos.y() + 5,
    event.player.pos.z() + 10
  )
  event.level.getEntitiesWithin(myBoundingBox).forEach(entity => {
    if (entity == null) return
    //do something
    //event.player.tell('Freeze!')
    // if entity is NOT the player do...
    if (!entity.isPlayer()) {
      //entity.setSecondsOnFire(100)
      //event.entity.isGlowing()
      lightningBolt
      //event.entity.potionEffects.add('minecraft:wither', 200, 255, false, false)
      //entity.spawnLightning(entity.pos.x, entity.pos.y, entity.pos.z, false)
      //event.entity.setIsInPowderSnow(true)
      //event.entity.level.spawnFireworks(event.entity.pos.x, event.entity.pos.y, event.entity.pos.z)
    }
  })
})
*/
/*
ItemEvents.firstLeftClicked('kubejs:iridium_sword', event => {
  let playerAABB = event.player.boundingBox.inflate(10)
  event.level.getEntitiesWithin(playerAABB).forEach(entity => {
    if (entity == null) return
    //do something
    event.entity.setIsInPowderSnow(true)
    event.player.tell('Freeze!')
  })
  //
  //let myBoundingBox = AABB.of(player.pos.x() - 10, player.pos.y() - 5, player.pos.z() - 10, player.pos.x() + 10, player.pos.y() + 5, player.pos.z() + 10)
  //event.level.getEntitiesWithin(myBoundingBox).forEach(entity => {
  //    if (entity == null) return
  //    //do something
  //    event.entity
  //  })
  //
})
*/