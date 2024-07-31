// requires: create
// ignored: false

/**
 * @file Handles coin item generation
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// Note to self: Coin textures and villager / quest exchange implementation

StartupEvents.registry('item', event => {
  // figure out how to give display names hex code colors
  event.create('kubejs:copper_coin')
    .formattedDisplayName(Component.string('Copper Coin').color(0xFDD686))
    .texture('kubejs:item/copper_coin')
  event.create('kubejs:iron_coin')
    .formattedDisplayName(Component.string('Iron Coin').color(0xE7E7E7))
    .texture('kubejs:item/iron_coin')
  event.create('kubejs:gold_coin')
    .formattedDisplayName(Component.string('Gold Coin').color(0xFDF55F))
    .rarity('uncommon')
    .texture('kubejs:item/gold_coin')
  event.create('kubejs:netherite_coin')
    .formattedDisplayName(Component.string('Netherite Coin').color(0x93847D))
    .rarity('rare')
    .texture('kubejs:item/netherite_coin')
    .fireResistant(true)
  event.create('kubejs:entropy_coin')
    .formattedDisplayName(Component.string('Entropy Coin').color(0xD6CCFF))
    .rarity('epic')
    .texture('kubejs:item/entropy_coin')
    .fireResistant(true)
    .glow(true)
})