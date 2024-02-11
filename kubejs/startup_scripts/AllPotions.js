// requires: morejs

/**
 * @file Potion brewing handler.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

MoreJSEvents.registerPotionBrewing(event => {
  // Just to force feed this to recipe viewers in case the brewing recipe does not show up...
  if (Platform.isLoaded('mutantmonsters')) {
    // remove original...
    event.removeByPotion(null, null, 'mutantmonsters:chemical_x')
    // Re-implement.
    event.addPotionBrewing('mutantmonsters:creeper_shard', 'minecraft:thick', 'mutantmonsters:chemical_x')
    event.addPotionBrewing('mutantmonsters:endersoul_hand', 'minecraft:thick', 'mutantmonsters:chemical_x')
    event.addPotionBrewing('mutantmonsters:mutant_skeleton_skull', 'minecraft:thick', 'mutantmonsters:chemical_x')
  }
})