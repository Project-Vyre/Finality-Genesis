// requires: create
// requires: lootjs
// requires: morejs
// requires: kubejs_create
// ignored: false

/**
 * @file Handles coin item generation
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// Note to self: Coin textures and villager / quest exchange implementation

StartupEvents.registry('item', event => {
    // figure out how to give display names hex code colors
    event.create('kubejs:copper_coin')
        .texture('kubejs:item/copper_coin')
    event.create('kubejs:iron_coin')
        .texture('kubejs:item/iron_coin')
    event.create('kubejs:gold_coin')
        .texture('kubejs:item/gold_coin')
    event.create('kubejs:netherite_coin')
        .texture('kubejs:item/netherite_coin')
        .fireResistant(true)
    event.create('kubejs:entropy_coin')
        .texture('kubejs:item/entropy_coin')
        .fireResistant(true)
        .glow(true)
})