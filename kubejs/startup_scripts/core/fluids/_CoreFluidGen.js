/**
 * @file Core fluid registration.
 */

StartupEvents.registry('fluid', event => {
    // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
    event.create('kubejs:condensed_universal_entropy')
        .displayName('<rainb>Condensed Universal Entropy</rainb>')
        .thickTexture(0x7800FF)
        .bucketColor(0x7800FF)
        .luminosity(15)
    event.create('kubejs:condensed_universal_order')
        .displayName('<rainb>Condensed Universal Order</rainb>')
        .thickTexture(0x77D8FF)
        .bucketColor(0x77D8FF)
        .luminosity(15)
    let shimmer = event.create('kubejs:shimmer')
        .flowingTexture('kubejs:block/shimmer_flow')
        .stillTexture('kubejs:block/shimmer_still')
    shimmer.bucketItem.texture('kubejs:item/shimmer_bucket')
    shimmer.bucketItem.glow(true)
})
/*
    event.create('kubejs:shimmer')
        .thinTexture(0xD6CCFF)
        .bucketColor(0xD6CCFF)
*/