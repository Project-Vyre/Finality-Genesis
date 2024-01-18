// priority: 10

/**
 * @file Item tagging for use with recipes.
 */

ServerEvents.tags('item', event => {
    // these should be accepted in the crushing wheel recipe...
    event.add('forge:stone', [
        'minecraft:dripstone_block',
        'minecraft:blackstone',
        'minecraft:polished_blackstone',
        'minecraft:basalt',
        'minecraft:smooth_basalt',
        'minecraft:polished_basalt'
    ])
    // Why doesn't this tag exist?
    event.add('kubejs:slabs/stone', [
        'minecraft:stone_slab',
        'minecraft:smooth_stone_slab',
        'minecraft:andesite_slab',
        'minecraft:polished_andesite_slab',
        'minecraft:diorite_slab',
        'minecraft:polished_diorite_slab',
        'minecraft:granite_slab',
        'minecraft:polished_granite_slab'
    ])
    if (Platform.isLoaded('aether')) {
        event.add('kubejs:slabs/stone', [
            'aether:holystone_slab',
            'aether:icestone_slab'
        ])
    }
})