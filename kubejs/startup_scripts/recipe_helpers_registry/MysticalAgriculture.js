// requires: mysticalagriculture

/**
 * @file Registration for recipe helpers for use in Mystical Agriculture recipes.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

StartupEvents.registry('fluid', event => {
  event.create('kubejs:inferior_infusion_essence')
    .displayName('§eInferior Infusion Essence§r')
    .thickTexture(0xACCF00)
    .bucketColor(0xACCF00)
    .luminosity(7)
  event.create('kubejs:supreme_infusion_essence')
    .displayName('§eSupreme Infusion Essence§r')
    .thickTexture(0xFC0000)
    .bucketColor(0xFC0000)
    .luminosity(15)
  event.create('kubejs:infusion_energy')
    .thinTexture(0x99FFF9)
    .bucketColor(0x99FFF9)
})