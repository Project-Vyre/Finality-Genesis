// priority: 0
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.mixing([
        Item.of('kubejs:unstable_entropy_particles').withChance(0.25),
        Item.of('kubejs:errored_result').withChance(0.50),
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        'create:chromatic_compound',
        'create:railway_casing',
        'minecraft:netherite_block',
        'create:brass_block',
        'create:andesite_alloy_block',
        'minecraft:diamond_block',
        'minecraft:amethyst_shard',
        Fluid.of('kubejs:condensed_universal_entropy', 1000)
    ]).superheated().id('finality:mixing/high_entropy_alloy')
    event.recipes.create.mixing('kubejs:unstable_entropy_particles', [
        'kubejs:errored_result',
        Fluid.of('kubejs:condensed_universal_entropy', 250)
    ]).id('finality:mixing/errored_result_recycling')
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:stable_entropy_particles').withChance(0.75),
        Item.of('kubejs:unstable_entropy_particles').withChance(0.25)
    ], 'kubejs:unstable_entropy_particles', [
        event.recipes.create.filling('kubejs:stabilizing_entropy_particles', ['kubejs:stabilizing_entropy_particles', Fluid.of('kubejs:condensed_universal_order', 250)]),
        event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
        event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
        event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles'),
        event.recipes.create.pressing('kubejs:stabilizing_entropy_particles', 'kubejs:stabilizing_entropy_particles')
    ]).transitionalItem('kubejs:stabilizing_entropy_particles').loops(4).id('finality:sequenced_assembly/stable_entropy_particles')
    event.shaped('kubejs:high_entropy_alloy_block', [
        'EEE',
        'EEE',
        'EEE'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:high_entropy_alloy_block_compression')
    event.shapeless('9x kubejs:high_entropy_alloy', [
        'kubejs:high_entropy_alloy_block'
    ]).id('finality:high_entropy_alloy_block_decompression')
    event.shaped('kubejs:high_entropy_alloy', [
        'EEE',
        'EEE',
        'EEE'
    ], {
        E: 'kubejs:high_entropy_alloy_nugget'
    }).id('finality:high_entropy_alloy_nugget_compression')
    event.shapeless('9x kubejs:high_entropy_alloy_nugget', [
        'kubejs:high_entropy_alloy'
    ]).id('finality:high_entropy_alloy_decompression')
    event.recipes.create.cutting(
        '2x kubejs:high_entropy_alloy_rod',
        'kubejs:high_entropy_alloy'
    ).processingTime(200).id('finality:cutting/high_entropy_alloy_rod')
    event.recipes.create.pressing(
        'kubejs:high_entropy_alloy_sheet',
        'kubejs:high_entropy_alloy'
    ).id('finality:pressing/high_entropy_alloy_sheet')
})