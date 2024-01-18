// requires: summoningrituals
// ignored: true

/**
 * @file Server handler for everything Summoning Rituals related.
 */

ServerEvents.recipes(event => {

})

/*
    Example below.

    event.recipes.summoningrituals.altar('minecraft:stick') // replace stick catalyst with something later.
        .itemOutput()
        .mobOutput()
        .itemOutput(
            SummoningOutput.item(Item.of('stone_sword', 2, { Damage: 5 }))
                .offset(5, 2, 3)
                .spread(3, 0, 3)
        )
        .mobOutput(
            SummoningOutput.mob('blaze')
                .count(3)
                .offset(5, 2, 3)
                .spread(3, 0, 3)
                // gives all three blazes 50 health
                .data({ Health: 50, Attributes: [{ Name: 'generic.max_health', Base: 50 }] })
        )
        .input('64x minecraft:stone')
        .input(Item.of('stone_sword', 2, { Damage: 5 }).strongNBT())
        .input(Item.of('amethyst_shard', 10))
        .input(Ingredient.of('#forge:glass'))
        .input('stone', '2x apple', 'thermal:blizz_powder')
        // adds 3 Pigs as sacrifice
        .sacrifice('pig', 3)
        // adds a single Sheep as sacrifice
        .sacrifice('sheep')
        // adds a single Blizz from Thermal as sacrifice
        .sacrifice('thermal:blizz')
*/