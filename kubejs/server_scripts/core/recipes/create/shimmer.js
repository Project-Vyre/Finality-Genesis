// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:shimmer', 1000), [
        'create:refined_radiance',
        Fluid.of('kubejs:condensed_universal_entropy', 500),
        Fluid.of('minecraft:water', 500)
    ]).superheated().id('finality:mixing/shimmer_fluid_creation')
    event.recipes.create.compacting([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('minecraft:netherite_scrap').withChance(0.50),
        Item.of('kubejs:netherite_nugget').withChance(0.12)
    ], [
        Fluid.of('kubejs:shimmer', 750),
        'minecraft:netherrack',
    ]).id('finality:compacting/netherite_scrap_renewal')
})