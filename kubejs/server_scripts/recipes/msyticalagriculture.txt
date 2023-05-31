ServerEvents.recipes(event => {
    event.recipes.createCrushing([
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
        Item.of('mysticalagriculture:prosperity_seed_base').withChance(0.0009765625)
    ], 'minecraft:coarse_dirt').processingTime(250).id('finality:renew_prosperity')
})