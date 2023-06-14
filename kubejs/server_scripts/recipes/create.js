// post create 051, I hate json I hate json
ServerEvents.recipes(event => {
    // Note to self: Ensure all items here are base Create and vanilla!
    // duplicate mod recipes remover
    event.remove({id: 'create_sa:netherrack_recipe'})
    event.remove({id: 'create_sa:obsidian_haunting'})
    // compacting
    event.recipes.createCompacting(['minecraft:diamond'], Array(9).fill('minecraft:coal_block').concat([Fluid.of('minecraft:lava', 250)])).superheated().id('finality:renew_diamond')
    event.recipes.createCompacting(['minecraft:coal'], Array(9).fill('minecraft:dried_kelp_block')).heated().id('finality:renew_coal')
    event.recipes.createCompacting(['minecraft:basalt'], [Item.of('minecraft:blue_ice'), Fluid.of('minecraft:lava', 500)]).id('finality:compacting_basalt')
    event.recipes.createCompacting(['minecraft:tuff'], Array(9).fill('minecraft:gravel').concat([Fluid.of('minecraft:lava', 250)])).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting(['minecraft:tuff'], Array(9).fill('minecraft:deepslate').concat([Fluid.of('minecraft:lava', 250)])).heated().id('finality:renew_deepslate_tuff')
    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.recipes.createCrushing(['minecraft:dirt', Item.of('minecraft:flint').withChance(0.10)], 'minecraft:gravel').processingTime(250).id('finality:gravel_crushing')
    event.recipes.createCrushing(['minecraft:sand', Item.of('minecraft:clay_ball').withChance(0.05)], 'minecraft:dirt').processingTime(250).id('finality:dirt_crushing')
    event.recipes.createCrushing(['4x minecraft:pointed_dripstone', Item.of('minecraft:clay_ball').withChance(0.50), Item.of('create:copper_nugget').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:dripstone_block').processingTime(250).id('finality:dripstone_crushing')
    event.recipes.createCrushing([Item.of('create:copper_nugget').withChance(0.05), Item.of('minecraft:gunpowder').withChance(0.10)], ['minecraft:basalt']).id('finality:basalt_crushing')
    event.recipes.createCrushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.50), Item.of('minecraft:netherite_scrap').withChance(0.002)], 'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
    // filling
    event.recipes.createFilling('minecraft:netherrack', ['minecraft:cobblestone', Fluid.of('create:potion', 250, '{Potion: "minecraft:strong_healing"}')]).id('finality:living_flesh_stone')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
    // mixing
    event.recipes.createMixing(['minecraft:coarse_dirt'], ['minecraft:dirt', 'minecraft:gravel']).id('finality:coarse_dirt')
    event.recipes.createMixing(['minecraft:emerald'], ['minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget']).superheated().id('finality:renew_emerald')
    event.recipes.createMixing(['minecraft:nether_gold_ore'],  Array(18).fill('minecraft:gold_nugget').concat(['create:cinder_flour', Fluid.of('minecraft:lava', 250)])).id('finality:nether_gold_ore_deco') // Thank you to FunnyMan#4579 on the official Create Discord for giving me this idea :3
})

// post create 051, I hate json I hate json
/*
ServerEvents.recipes(event => {
    // Note to self: Ensure all items here are base Create and vanilla!
    // duplicate mod recipes remover
    event.remove({id: 'create_sa:netherrack_recipe'})
    event.remove({id: 'create_sa:obsidian_haunting'})
    // compacting
    event.custom({ // event.recipes.createCompacting(['minecraft:diamond'], Array(9).fill('minecraft:coal_block').concat([Fluid.of('minecraft:lava', 250)])).superheated().id('finality:renew_diamond')
        type: 'create:compacting', // heatRequirement: superheated??
        heatRequirement: 'superheated',
        ingredients: [
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { item: 'minecraft:coal_block' },
            { fluid: 'minecraft:lava', amount: 1000 }
        ],
        results: [
            { item: 'minecraft:diamond' }
        ]
    }).id('finality:create/jsoncompacting/diamond_renew')
    event.custom({ // event.recipes.createCompacting(['minecraft:coal'], Array(9).fill('minecraft:dried_kelp_block')).heated().id('finality:renew_coal')
        type: 'create:compacting',
        heatRequirement: 'heated',
        ingredients: [
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { item: 'minecraft:dried_kelp_block' },
            { fluid: 'minecraft:lava', amount: 250 }
        ],
        results: [
            { item: 'minecraft:coal' }
        ]
    }).id('finality:create/jsoncompacting/coal_renew')
    event.custom({ // event.recipes.createCompacting(['minecraft:basalt'], [Item.of('minecraft:blue_ice'), Fluid.of('minecraft:lava', 500)]).id('finality:compacting_basalt')
        type: 'create:compacting',
        ingredients: [
            { item: 'minecraft:blue_ice' },
            { fluid: 'minecraft:lava', amount: 500 }
        ],
        results: [
            { item: 'minecraft:basalt' }
        ]
    }).id('finality:create/jsoncompacting/basalt')
    event.custom({ // event.recipes.createCompacting(['minecraft:tuff'], Array(9).fill('minecraft:gravel').concat([Fluid.of('minecraft:lava', 250)])).superheated().id('finality:renew_tuff')
        type: 'create:compacting',
        heatRequirement: 'superheated',
        ingredients: [
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' },
            { item: 'minecraft:gravel' }
        ],
        results: [
            { item: 'minecraft:tuff' }
        ]
    }).id('finality:create/jsoncompacting/tuff_renew')
    event.custom({ // event.recipes.createCompacting(['minecraft:tuff'], Array(9).fill('minecraft:deepslate').concat([Fluid.of('minecraft:lava', 250)])).heated().id('finality:renew_deepslate_tuff')
        type: 'create:compacting',
        heatRequirement: 'heated',
        ingredients: [
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' },
            { item: 'minecraft:deepslate' }
        ],
        results: [
            { item: 'minecraft:tuff' }
        ]
    }).id('finality:create/jsoncompacting/tuff_deepslate_renew')
    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.custom({ //event.recipes.createCrushing(['minecraft:dirt', Item.of('minecraft:flint').withChance(0.10)], 'minecraft:gravel').processingTime(250).id('finality:gravel_crushing')
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:gravel' }
        ],
        processingTime: 250,
        results: [
            { item: 'minecraft:dirt' },
            { item: 'minecraft:flint', chance: 0.10 }
        ]
    }).id('finality:create/jsoncrushing/gravel_crushing')
    event.custom({ // event.recipes.createCrushing(['minecraft:sand', Item.of('minecraft:clay_ball').withChance(0.05)], 'minecraft:dirt').processingTime(250).id('finality:dirt_crushing')
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:dirt' }
        ],
        processingTime: 250,
        results: [
            { item: 'minecraft:sand' },
            { item: 'minecraft:clay_ball', chance: 0.05 }
        ]
    }).id('finality:create/jsoncrushing/dirt_crushing')
    event.custom({ // event.recipes.createCrushing(['4x minecraft:pointed_dripstone', Item.of('minecraft:clay_ball').withChance(0.50), Item.of('create:copper_nugget').withChance(0.25), Item.of('create:experience_nugget').withChance(0.75)], 'minecraft:dripstone_block').processingTime(250).id('finality:dripstone_crushing')
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:dripstone_block' }
        ],
        processingTime: 250,
        results: [
            { item: 'minecraft:pointed_dripstone', count: 4 },
            { item: 'minecraft:clay_ball', chance: 0.50 },
            { item: 'create:copper_nugget', chance: 0.25 },
            { item: 'create:experience_nugget', chance: 0.75 }
        ]
    }).id('finality:create/jsoncrushing/dripstone_refinement')
    event.custom({ // event.recipes.createCrushing([Item.of('create:copper_nugget').withChance(0.05), Item.of('minecraft:gunpowder').withChance(0.10)], ['minecraft:basalt']).id('finality:basalt_crushing')
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:basalt' }
        ],
        processingTime: 250,
        results: [
            { item: 'create:copper_nugget', chance: 0.05 },
            { item: 'minecraft:gunpowder'}
        ]
    }).id('finality:create/jsoncrushing/basalt_refinement')
    event.custom({ // event.recipes.createCrushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.50), Item.of('minecraft:netherite_scrap').withChance(0.002)], 'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:netherrack' }
        ],
        processingTime: 250,
        results: [
            { item: 'create:cinder_flour' },
            { item: 'create:cinder_flour', chance: 0.50 },
            { item: 'minecraft:netherite_scrap', chance: 0.002 }
        ]
    }).id('finality:create/jsoncrushing/netherrack_refinement')
    // filling
    event.custom({ // event.recipes.createFilling('minecraft:netherrack', ['minecraft:cobblestone', Fluid.of('create:potion', 250, '{Potion: "minecraft:strong_healing"}')]).id('finality:living_flesh_stone')
        type: 'create:filling',
        ingredients: [
            { item: 'minecraft:cobblestone' },
            { fluid: 'create:potion', amount: 250, nbt: {
                Bottle: 'REGULAR',
                Potion: 'minecraft:strong_healing'
            }}
        ],
        results: [
            { item: 'minecraft:netherrack' }
        ]
    }).id('finality:create/jsonfilling/living_flesh_stone')
    // haunting
    event.custom({ // event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
        type: 'create:haunting',
        ingredients: [
            { item: 'minecraft:andesite' }
        ],
        results: [
            { item: 'minecraft:deepslate' }
        ]
    }).id('finality:create/jsonhaunting/deepslate')
    event.custom({ // event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
        type: 'create:haunting',
        ingredients:[
            { item: 'minecraft:obsidian' }
        ],
        results: [
            { item: 'minecraft:crying_obsidian' }
        ]
    }).id('finality:create/jsonhaunting/crying_obsidian')
    event.custom({ // event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
        type: 'create:haunting',
        ingredients:[
            { item: 'minecraft:writable_book' }
        ],
        results: [
            { item: 'minecraft:name_tag' }
        ]
    }).id('finality:create/jsonhaunting/soul_nametag')
    // mixing
    event.custom({ // event.recipes.createMixing(['minecraft:coarse_dirt'], ['minecraft:dirt', 'minecraft:gravel']).id('finality:coarse_dirt')
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:dirt' },
            { item: 'minecraft:gravel' }
        ],
        results: [
            { item: 'minecraft:coarse_dirt' }
        ]
    }).id('finality:create/jsonmixing/coarse_dirt')
    event.custom({ // event.recipes.createMixing(['minecraft:emerald'], ['minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget']).superheated().id('finality:renew_emerald')
        type: 'create:mixing',
        heatRequirement: 'superheated',
        ingredients: [
            { item: 'minecraft:quartz' },
            { item: 'minecraft:glass' },
            { item: 'minecraft:iron_nugget' },
            { item: 'minecraft:iron_nugget' },
            { item: 'minecraft:iron_nugget' }
        ],
        results: [
            { item: 'minecraft:emerald' }
        ]
    }).id('finality:create/jsonmixing/emerald_renew')
})
*/