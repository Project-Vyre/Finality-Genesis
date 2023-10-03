/*
Attempting to remove Create Crafts & Addition

const PonderRegistry = Java.loadClass("com.simibubi.create.foundation.ponder.PonderRegistry");

Ponder.registry(event => {
    for (let entries of PonderRegistry.ALL.values()) {
        let it = entries.listIterator();
        while (it.hasNext()) {
            let entry = it.next();
            if (console.log(entry.getSchematicLocation() == 'createaddition:liquid_blaze_burner')) {
                it.remove();
            }
        }
    }
})

*/