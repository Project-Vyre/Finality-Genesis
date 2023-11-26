// requires: cloudstorage
// requires: kubejs_create

/**
 * @file Server handler for Cloud Storage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    COLOR.forEach(wool => {
        event.recipes.create.mixing([
            'cloudstorage:static_cloud',
            `minecraft:${wool}_wool`
        ], [
            'cloudstorage:cloud',
            `minecraft:${wool}_wool`
        ]).id(`finality:static_cloud_generation_with_${wool}_wool`)
    })
})