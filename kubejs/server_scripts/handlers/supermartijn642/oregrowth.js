/**
 * @file Oregrowth server handler. Recipes can be found in the KubeJS data folder.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: oregrowth

ServerEvents.recipes(event => {
  event.remove([
    { id: 'oregrowth:ancient_debris_growth' }
  ])
  if (Platform.isLoaded('mysticalagriculture')) {
    event.remove([
      { id: 'oregrowth:mysticalagriculture_inferium_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_deepslate_inferium_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_prosperity_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_deepslate_prosperity_ore_growth' },
      { id: 'oregrowth:mysticalagriculture_soulium_ore_growth' }
    ])
  }
})