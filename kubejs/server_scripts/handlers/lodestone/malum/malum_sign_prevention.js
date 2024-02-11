// requires: lodestone
// requires: malum
// ignored: true

console.log('Implementing preventive measures to prevent client crash from Malum signs.')

BlockEvents.rightClicked(event => {
  if (event.getBlock() == 'malum:runewood_sign') {
    console.log('Cancelled placement of soulwood_sign, re-launch your world. If you have crashed from it.')
    event.cancel()
  }
  if (event.getBlock() == 'malum:soulwood_sign') {
    console.log('Cancelled placement of soulwood_sign, re-launch your world. If you have crashed from it.')
    event.cancel()
  }
})

BlockEvents.placed(event => {
  if (event.getBlock() == 'malum:runewood_sign') {
    console.log('Cancelled placement of soulwood_sign, re-launch your world. If you have crashed from it.')
    event.cancel()
  }
  if (event.getBlock() == 'malum:soulwood_sign') {
    console.log('Cancelled placement of soulwood_sign, re-launch your world. If you have crashed from it.')
    event.cancel()
  }
})

PlayerEvents.inventoryChanged(event => {
  const { item, level, player } = event
  switch (item.getId()) {
    case 'malum:runewood_sign':
      player.tell([
        Component.of('System: ').bold().green(),
        Component.of('That item has been removed for your client safety.').red()
      ])
      player.inventory.clear('malum:runewood_sign')
      break;
    case 'malum:soulwood_sign':
      player.tell([
        Component.of('System: ').bold().green(),
        Component.of('That item has been removed for your client safety.').red()
      ])
      player.inventory.clear('malum:soulwood_sign')
      break;
    default:
      break;
  }
})

/* 
Not going to use this because it's too intensive for server TPS, but 
I'll keep it here in mind for potential other use cases - CelestialAbyss 
*/

/**
 * @summary Destroys block entities.
 * @author Liopyu <https://github.com/liopyu> Author for sign destruction 
 */
/*
PlayerEvents.tick(event => {
    // Configurable chunk radius (adjust as needed)
    let chunkRadius = 2 // EXPONENTIAL
    let { player, level } = event

    // Get the player's chunk coordinates
    let chunkX = player.chunkPosition().x
    let chunkZ = player.chunkPosition().z

    console.log(`Player's Chunk X: ${chunkX}, Z: ${chunkZ}`)

    // Iterate through chunks within the specified radius
    for (let x = chunkX - chunkRadius; x <= chunkX + chunkRadius; x++) {
        for (let z = chunkZ - chunkRadius; z <= chunkZ + chunkRadius; z++) {
            // Get the chunk
            let chunk = player.level.getChunk(x, z)

            console.log(`Checking Chunk X: ${x}, Z: ${z}`)

            // Iterate through block entities within the chunk
            for (let blockEntityPos of chunk.blockEntitiesPos) {
                let blockId = level.getBlock(blockEntityPos.x, blockEntityPos.y, blockEntityPos.z).id
                // console.log(`Block ID at X: ${blockEntityPos.x}, Y: ${blockEntityPos.y}, Z: ${blockEntityPos.z}: ${blockId}`)
                if (blockId == 'malum:runewood_sign' || blockId == 'malum:runewood_wall_sign') {
                    console.log(`Destroying malum:runewood_sign at X: ${blockEntityPos.x}, Y: ${blockEntityPos.y}, Z: ${blockEntityPos.z}`)
                    player.level.destroyBlock(blockEntityPos, true, player)
                }
                if (blockId == 'malum:soulwood_sign' || blockId == 'malum:soulwood_wall_sign') {
                    console.log(`Destroying oak_wall_sign at X: ${blockEntityPos.x}, Y: ${blockEntityPos.y}, Z: ${blockEntityPos.z}`)
                    player.level.destroyBlock(blockEntityPos, true, player)
                }
            }
        }
    }
})
*/