// requires: kubejs_create

/**
 * @file Everything carbon related.
 */

ServerEvents.recipes(event => {
    event.recipes.create.compacting([
        'minecraft:coal',
        Item.of('create:experience_nugget').withChance(0.25)
    ], 'minecraft:dried_kelp_block').heated().id('finality:compacting/renew_coal')
    event.recipes.create.compacting([
        'minecraft:coal_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], '9x minecraft:dried_kelp_block').heated().id('finality:compacting/renew_coal_bulk')
    event.recipes.create.compacting([
        'minecraft:diamond',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        'minecraft:coal_block',
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_diamond')
    event.recipes.create.compacting([
        'minecraft:diamond_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        '9x minecraft:coal_block',
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_diamond_bulk')
})