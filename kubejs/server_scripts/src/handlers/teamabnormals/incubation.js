/**
 * @file Server handler for Incubation from TeamAbnormals.
 * @version 1.20.1
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: incubation

ServerEvents.recipes(event => {
  if (Platform.isLoaded('farmersdelight')) {
    console.log('Removing Incubation Fried Egg recipes to avoid recipe conflicts.')
    event.remove([
      { id: 'incubation:fried_egg' },
      { id: 'incubation:fried_egg_from_smoking' },
      { id: 'incubation:fried_egg_from_campfire_cooking' }
    ])
  }
})