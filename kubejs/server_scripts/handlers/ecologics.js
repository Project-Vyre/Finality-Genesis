// requires: ecologics

/**
 * @file Server handler for Ecologics
 * @deprecated Mod author is no longer maintaining the original project past 1.19.2
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */
ServerEvents.recipes(event => {
  event.shaped('minecraft:chest', [
    'WWW',
    'W W',
    'WWW'
  ], {
    W: [
      'ecologics:walnut_planks',
      'ecologics:coconut_planks',
      'ecologics:azalea_planks'
    ]
  }).id('finality:ecologics/crafting/vanilla_chest_fallback')
})