// requires: create
// requires: lootjs
// requires: morejs
// requires: kubejs_create
// ignored: true

/**
 * @file Handles coin item generation
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// Note to self: Coin textures and villager / quest exchange implementation

StartupEvents.registry('item', event => {
    let coins = [
        'copper',
        'iron',
        'gold',
        'diamond',
        'netherite',
        'entropy',
    ]
    for (let index = 0; index < array.length; index++) {
        event.create(`kubejs:${coins[index]}_coin`)
    }
})