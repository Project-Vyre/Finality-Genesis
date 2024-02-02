/**
 * @file Core fluid registration.
 */

StartupEvents.registry('fluid', event => {
    // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
    event.create('kubejs:condensed_universal_entropy')
        .thickTexture(0x7800FF)
        .bucketColor(0x7800FF)
        .luminosity(15)
    event.create('kubejs:condensed_universal_order')
        .thickTexture(0x77D8FF)
        .bucketColor(0x77D8FF)
        .luminosity(15)
    let shimmer = event.create('kubejs:shimmer')
        .flowingTexture('kubejs:block/fluids/shimmer_flow')
        .stillTexture('kubejs:block/fluids/shimmer_still')
    shimmer.bucketItem.texture('kubejs:item/shimmer_bucket')
    shimmer.bucketItem.glow(true)
})
/*
    event.create('kubejs:slime')
        .thinTexture(0x8CD782)
        .bucketColor(0x8CD782)
    event.create('kubejs:shimmer')
        .thinTexture(0xD6CCFF)
        .bucketColor(0xD6CCFF)
*/