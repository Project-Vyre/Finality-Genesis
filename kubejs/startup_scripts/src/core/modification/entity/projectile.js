/**
 * @file Custom fireball entities handler.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author Liopyu <https://github.com/liopyu> Fireballll
 */

// requires: entityjs
// ignored: false

EntityJSEvents.modifyEntity(event => {
  event.modify('minecraft:fireball', modifyBuilder => {
    modifyBuilder.tick(entity => global.crimson_moon(entity))
  })
  event.modify('minecraft:dragon_fireball', modifyBuilder => {
    modifyBuilder.tick(entity => global.final_scythe(entity))
  })
})

global.crimson_moon = entity => {
  if (!entity.persistentData.CrimsonFireball) return
  if (entity.age > 200) { entity.remove('discarded') }
}
global.final_scythe = entity => {
  if (!entity.persistentData.FinalScytheProjectile) return
  if (entity.age > 200) { entity.remove('discarded') }
}