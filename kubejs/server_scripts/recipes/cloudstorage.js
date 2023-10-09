// requires: cloudstorage
// requires: kubejs_create

/**
 * Authors
 * 
 * @CelestialAbyss
 */

ServerEvents.recipes(event => {
    COLOR.forEach(wool => {
        event.recipes.createMixing([
            'cloudstorage:static_cloud',
            `minecraft:${wool}_wool`
        ], [
            'cloudstorage:cloud',
            `minecraft:${wool}_wool`
        ]).id(`finality:static_cloud_generation_with_${wool}_wool`)
    })
})