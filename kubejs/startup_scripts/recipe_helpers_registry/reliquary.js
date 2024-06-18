// requires: reliquary
// requires: kubejs_create

/**
 * @file Item and fluid generation for Just More Cakes! recipe usage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

StartupEvents.registry('item', event => {
  event.create('kubejs:incomplete_holy_hand_grenade', 'create:sequenced_assembly')
    .texture('reliquary:item/holy_hand_grenade')
    .tag('create:upright_on_belt')
  event.create('kubejs:incomplete_handgun')
    .parentModel('reliquary:item/handgun')
})

StartupEvents.registry('fluid', event => {
  event.create('kubejs:angelheart_mixture')
    .thickTexture(0xA84F78)
    .bucketColor(0xA84F78)
  event.create('kubejs:aphrodite_mixture')
    .thinTexture(0xD8CF50)
    .bucketColor(0xD8CF50)
  event.create('kubejs:fertile_mixture')
    .thinTexture(0x83D541)
    .bucketColor(0x83D541)
  event.create('kubejs:glowing_water')
    .thinTexture(0x4160FA)
    .bucketColor(0x4160FA)
})