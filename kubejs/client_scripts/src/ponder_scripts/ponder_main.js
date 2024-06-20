// requires: ponderjs
// ignored: true

/**
 * @file PonderJS stuff.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// Attempting to remove Create Crafts & Addition straw Ponder scene.

const PonderRegistry = Java.loadClass("com.simibubi.create.foundation.ponder.PonderRegistry");

Ponder.registry(event => {
  for (let entries of PonderRegistry.ALL.values()) {
    let it = entries.listIterator();
    while (it.hasNext()) {
      let entry = it.next();
      if (console.log(entry.getSchematicLocation())) {
        it.remove();
      }
    }
  }
})