// requires: summoningrituals
// requires: kubejs_create
// ignored: false

/**
 * @file Server handler for everything Summoning Rituals related.
 */

ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('summoningrituals:altar', [
        'CSC',
        'AAA',
        'LLL',
        ' O ',
        'PPP'
    ], {
        A: '#minecraft:wool_carpets',
        C: '#minecraft:candles',
        S: 'minecraft:wither_skeleton_skull',
        L: '#minecraft:wooden_slabs',
        O: '#minecraft:logs',
        P: '#minecraft:planks'
    }).id('finality:mechanical_crafting/summoning_altar')
    event.recipes.summoningrituals.altar('minecraft:echo_shard')
        .input([
            'minecraft:soul_sand',
            '6x minecraft:bone_block'
        ])
        .mobOutput(
            SummoningOutput.mob('minecraft:warden')
                .offset(0, 3, 0)
                .spread(3, 0, 3)
                .data({
                    PersistenceRequired: 1,
                    Brain: {
                        memories: {
                            "minecraft:dig_cooldown": {
                                value: {},
                                ttl: 1200
                            }
                        }
                    }
                })
        )
        .recipeTime(10)
        .id('finality:summoning/warden')

    if (Platform.isLoaded('lilwings')) {

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:brown_mushroom',
                'minecraft:mycelium'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:aponi_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/aponi_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:dandelion',
                'minecraft:milk_bucket'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:butter_gold_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/butter_gold_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:slime_ball',
                'minecraft:pink_dye'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:cloudy_puff_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/cloudy_puff_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                '4x minecraft:amethyst_shard'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:crystal_puff_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/crystal_puff_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:dripstone_block',
                'minecraft:clay',
                'minecraft:moss_block'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:grayling_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/grayling_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:cocoa_beans',
                'minecraft:beetroot'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:painted_panther_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/painted_panther_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:apple',
                Ingredient.of('#minecraft:leaves')
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:red_applefly_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/red_applefly_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:red_mushroom',
                'minecraft:mycelium'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:shroom_skipper_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/shroom_skipper_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:wheat_seeds',
                'minecraft:pumpkin_seeds',
                'minecraft:melon_seeds',
                'minecraft:beetroot_seeds',
                'minecraft:string'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:swallow_tail_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/swallow_tail_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:glow_ink_sac',
                'minecraft:lily_pad'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:swamp_hopper_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/swamp_hopper_butterfly')

        event.recipes.summoningrituals.altar('lilwings:paper_wings')
            .input([
                'minecraft:snowball',
                'minecraft:ice'
            ])
            .mobOutput(
                SummoningOutput.mob('lilwings:white_fox_butterfly')
                    .count(3)
                    .offset(0, 3, 0)
                    .spread(3, 0, 3)
            )
            .recipeTime(25)
            .id('finality:summoning/white_fox_butterfly')

    }
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