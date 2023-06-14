// requires mysticalagriculture and create 
ServerEvents.recipes(event => {
    event.recipes.createCrushing([
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
        Item.of('mysticalagriculture:prosperity_shard', 2).withChance(0.5),
        Item.of('mysticalagriculture:prosperity_seed_base').withChance(0.009765625)
    ], 'minecraft:coarse_dirt').processingTime(250).id('finality:renew_prosperity')
    /*
        event.custom({ // original recipe script below
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:coarse_dirt' }
        ],
        processingTime: 250,
        results: [
            { item: 'mysticalagriculture:prosperity_shard', chance: 0.25 },
            { item: 'mysticalagriculture:prosperity_seed_base', chance: 0.0009765625 }
        ]
    }).id('finality:create/jsoncrushing/prosperity_renew')
    */
})