// priority: 0

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
})