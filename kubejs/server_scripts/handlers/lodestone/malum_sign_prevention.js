// ignored: true

/* 
Not going to use this because it's too intensive for server TPS, but 
I'll keep it here in mind for potential other use cases - CelestialAbyss 
*/

/**
 * @summary Destroys block entities.
 * @author Liopyu <https://github.com/liopyu> Author for sign destruction 
 */

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