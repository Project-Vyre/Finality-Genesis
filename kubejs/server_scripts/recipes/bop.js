// requires: biomesoplenty
// requires: kubejs_create

ServerEvents.tags('item', event => {
    event.add('biomesoplenty:flesh', [
        'biomesoplenty:flesh',
        'biomesoplenty:porous_flesh'
    ])
})

ServerEvents.recipes(event => {
    event.shapeless('create:rose_quartz', ['3x biomesoplenty:rose_quartz_shard']).id('finality:bop/rose_quartz_conversion')
    event.recipes.createCutting([
        'minecraft:rotten_flesh',
        Item.of('minecraft:rotten_flesh', 2).withChance(0.75)
    ], '#biomesoplenty:flesh').id('finality:bop/flesh_cutting')
})