ServerEvents.recipes(event => {
    // infusion essence
    event.recipes.createMixing([Fluid.of('kubejs:inferior_infusion_essence', 250)], [
        '4x mysticalagriculture:inferium_essence',
        '4x mysticalagriculture:prosperity_shard', 
    ]).id('finality:mysta_infusion_crystal_essence')
    event.recipes.createMixing([Fluid.of('kubejs:supreme_infusion_essence', 250)], [
        '4x mysticalagriculture:supremium_essence',
        '4x mysticalagriculture:prosperity_shard', 
    ]).id('finality:mysta_master_infusion_crystal_essence')
    // infusion crystals
    event.recipes.createFilling('mysticalagriculture:infusion_crystal', [
        'minecraft:diamond', 
        Fluid.of('kubejs:inferior_infusion_essence', 250)
    ]).id('mysticalagriculture:infusion_crystal')
    event.recipes.createFilling('mysticalagriculture:master_infusion_crystal', [
        'mysticalagriculture:supremium_gemstone', 
        Fluid.of('kubejs:supreme_infusion_essence', 250)
    ]).id('mysticalagriculture:master_infusion_crystal')
    // renewable prosperity shards
    event.recipes.createCrushing([
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25), 
        Item.of('mysticalagriculture:prosperity_seed_base').withChance(0.009765625)
    ], 'minecraft:coarse_dirt').processingTime(250).id('finality:renew_prosperity')
    // redstone
    event.shaped('16x minecraft:redstone', [
        'RRR',
        'RFR',
        'RRR'
    ], {
        R:'mysticalagriculture:redstone_essence',
        F:'create:cinder_flour'
    }).id('mysticalagriculture:essence/minecraft/redstone')
    event.recipes.createMixing(['16x minecraft:redstone'], [
        '8x mysticalagriculture:redstone_essence',
        'create:cinder_flour'
    ]).id('finality:mysta_mixing_redstone')
    // fire essences
    event.shaped('16x minecraft:red_sand', [
        'DF',
        'FG'
    ], {
        D: 'mysticalagriculture:dirt_essence',
        F: 'mysticalagriculture:fire_essence',
        G: 'minecraft:gold_nugget'
    }).id('mysticalagriculture:essence/minecraft/red_sand')
    event.recipes.createMixing(['16x minecraft:red_sand', 16], [
        '2x mysticalagriculture:dirt_essence',
        '2x mysticalagriculture:fire_essence',
        'minecraft:gold_nugget'
    ]).id('finality:mysta_mix_red_sand')
    event.shaped('16x minecraft:sand', [
        'DF',
        'FD'
    ], {
        D: 'mysticalagriculture:dirt_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/sand')
    event.recipes.createMixing('16x minecraft:sand', [
        '2x mysticalagriculture:dirt_essence',
        '2x mysticalagriculture:fire_essence'
    ]).id('finality:mysta_mix_sand')
    event.shaped('16x minecraft:soul_sand', [
        'NNN',
        'NFN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/soul_sand')
    event.recipes.createMixing('16x minecraft:soul_sand', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:fire_essence'
    ]).id('finality:mysta_mix_soul_sand')
    event.recipes.createCompacting([Fluid.of('minecraft:lava', 1000)], [
        '4x mysticalagriculture:fire_essence'
    ]).id('finality:mysta_compacting_lava')
    event.shaped('12x minecraft:tuff', [
        ' S ',
        'SFS',
        ' S '
    ], {
        S: 'mysticalagriculture:stone_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/tuff')
    event.recipes.createCompacting('12x minecraft:tuff', [
        '5x mysticalagriculture:stone_essence',
        'mysticalagriculture:fire_essence'
    ]).id('finality:mysta_compacting_tuff')
    event.shaped('8x minecraft:flint', [
        'SF',
        'FS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/flint')
    event.recipes.createMixing('8x minecraft:flint', [
        '2x mysticalagriculture:stone_essence',
        '2x mysticalagriculture:fire_essence'
    ]).id('finality:mysta_mixing_flint')
    // earth essence related
    event.shaped('16x minecraft:soul_soil', [
        'NDN',
        'DED',
        'NDN'   
    ], {
        N: 'mysticalagriculture:nether_essence',
        D: 'minecraft:dirt',
        E: 'mysticalagriculture:earth_essence'
    }).id('mysticalagriculture:essence/minecraft/soul_soil')
    event.recipes.createMixing('16x minecraft:soul_soil', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:earth_essence'
    ]).id('finality:mysta_mixing_soul_soil')
    // water essence related
    event.recipes.createMixing('12x minecraft:mud', [
        '4x mysticalagriculture:dirt_essence',
        'mysticalagriculture:water_essence'
    ]).id('finality:mysta_mixing_mud')
    // stone essence
    event.shaped('16x minecraft:cobblestone', [
        'SSS',
        'S S',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence'
    }).id('mysticalagriculture:essence/minecraft/cobblestone')
    event.recipes.createCompacting('16x minecraft:cobblestone', [
        '8x mysticalagriculture:stone_essence'
    ]).id('finality:mysta_compacting_cobblestone')
    event.shaped('18x minecraft:stone', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        C: 'mysticalagriculture:coal_essence'
    }).id('mysticalagriculture:essence/minecraft/stone')
    event.recipes.createCompacting('18x minecraft:stone', [
        '9x mysticalagriculture:stone_essence'
    ]).id('finality:mysta_compacting_stone')
    event.shaped('8x minecraft:andesite', [
        ' S ',
        'SSS',
        ' Q '
    ], {
        S: 'mysticalagriculture:stone_essence',
        Q: 'mysticalagriculture:nether_quartz_essence'
    }).id('mysticalagriculture:essence/minecraft/andesite')
    event.recipes.createCompacting('16x minecraft:andesite', [
        '4x mysticalagriculture:stone_essence',
        'mysticalagriculture:nether_quartz_essence'
    ]).id('finality:mysta_compacting_andesite')
    event.shaped('8x minecraft:diorite', [
        'SS ',
        'S Q',
        ' QQ'
    ], {
        S: 'mysticalagriculture:stone_essence',
        Q: 'mysticalagriculture:nether_quartz_essence'
    }).id('mysticalagriculture:essence/minecraft/diorite')
    event.recipes.createCompacting('16x minecraft:diorite', [
        '3x mysticalagriculture:stone_essence',
        '3x mysticalagriculture:nether_quartz_essence'
    ]).id('finality:mysta_compacting_diorite')
    event.shaped('16x minecraft:granite', [
        ' S ',
        'SQS',
        ' Q '
    ], {
        S: 'mysticalagriculture:stone_essence',
        Q: 'mysticalagriculture:nether_quartz_essence'
    }).id('mysticalagriculture:essence/minecraft/granite')
    event.recipes.createCompacting('16x minecraft:granite', [
        '4x mysticalagriculture:stone_essence',
        '2x mysticalagriculture:nether_quartz_essence'
    ]).id('finality:mysta_compacting_granite')
    event.shaped(Item.of('minecraft:dripstone_block', 16), [
        ' S ',
        'SWS',
        ' S '
    ], {
        S: 'mysticalagriculture:stone_essence',
        W: 'mysticalagriculture:water_essence'
    }).id('mysticalagriculture:essence/minecraft/dripstone')
    event.recipes.createCompacting(Item.of('minecraft:dripstone_block', 16), [
        Item.of('mysticalagriculture:stone_essence', 4), 
        'mysticalagriculture:water_essence'
    ]).id('finality:mysta_compacting_dripstone')
    event.shaped(Item.of('minecraft:calcite', 16), [
        'SSS',
        'SAS',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        A: 'mysticalagriculture:amethyst_essence'
    }).id('mysticalagriculture:essence/minecraft/calcite')
    event.recipes.createCompacting(Item.of('minecraft:calcite', 16), [
        Item.of('mysticalagriculture:stone_essence', 8), 
        'mysticalagriculture:amethyst_essence'
    ]).id('finality:mysta_compacting_calcite')
    event.shaped('24x minecraft:blackstone', [
        'NNN',
        'NSN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        S: 'mysticalagriculture:stone_essence'
    }).id('mysticalagriculture:essence/minecraft/blackstone')
    event.recipes.createCompacting(Item.of('minecraft:blackstone', 24), [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:stone_essence'
    ]).id('finality:mysta_compacting_blackstone')
    event.shaped(Item.of('minecraft:gravel', 16), [
        'DS',
        'SD'
    ], {
        D: 'mysticalagriculture:dirt_essence',
        S: 'mysticalagriculture:stone_essence'
    }).id('mysticalagriculture:essence/minecraft/gravel')
    event.recipes.createMixing(Item.of('minecraft:gravel', 16), [
        '2x mysticalagriculture:dirt_essence',
        '2x mysticalagriculture:stone_essence'
    ]).id('finality:mysta_mixing_gravel')
    // create orestone essence recipes
    event.shaped(Item.of('create:asurine', 16), [
        'SSS',
        'SZS',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        Z: 'mysticalagriculture:zinc_essence'
    }).id('mysticalagriculture:essence/create/asurine')
    event.recipes.createCompacting(Item.of('create:asurine', 16), [
        '8x mysticalagriculture:stone_essence',
        'mysticalagriculture:zinc_essence'
    ]).id('finality:mysta_compacting_asurine')
    event.shaped(Item.of('create:crimsite', 16), [
        'SSS',
        'SIS',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        I: 'mysticalagriculture:iron_essence'
    }).id('mysticalagriculture:essence/create/crimsite')
    event.recipes.createCompacting(Item.of('create:crimsite', 16), [
        '8x mysticalagriculture:stone_essence',
        'mysticalagriculture:iron_essence'
    ]).id('finality:mysta_compacting_crimsite')
    event.shaped(Item.of('create:ochrum', 16), [
        'SSS',
        'SGS',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        G: 'mysticalagriculture:gold_essence'
    }).id('mysticalagriculture:essence/create/ochrum')
    event.recipes.createCompacting(Item.of('create:ochrum', 16), [
        '8x mysticalagriculture:stone_essence',
        'mysticalagriculture:gold_essence'
    ]).id('finality:mysta_compacting_ochrum')
    event.shaped(Item.of('create:veridium', 16), [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: 'mysticalagriculture:stone_essence',
        C: 'mysticalagriculture:copper_essence'
    }).id('mysticalagriculture:essence/create/veridium')
    event.recipes.createCompacting(Item.of('create:veridium', 16), [
        '8x mysticalagriculture:stone_essence',
        'mysticalagriculture:copper_essence'
    ]).id('finality:mysta_compacting_veridium')
    event.shaped(Item.of('create:limestone', 16), [
        'LLL',
        'LLL',
        'LLL'
    ], {
        L: 'mysticalagriculture:limestone_essence'
    }).id('mysticalagriculture:essence/create/limestone')
    event.recipes.createCompacting(Item.of('create:limestone', 16), [
        '9x mysticalagriculture:limestone_essence'
    ]).id('finality:mysta_compacting_limestone')
    // diamond essence
    event.shaped('minecraft:diamond', [
        'DDD',
        'DDD',
        'DDD'
    ], {
        D: 'mysticalagriculture:diamond_essence'
    }).id('mysticalagriculture:essence/minecraft/diamond')
    event.recipes.createCompacting('minecraft:diamond', [
        '9x mysticalagriculture:diamond_essence'
    ]).id('finality:mysta_compacting_diamond')
    event.shaped('minecraft:heart_of_the_sea', [
        'SDP',
        'DND',
        'PDS',
    ], {
        D: 'mysticalagriculture:diamond_essence',
        S: 'mysticalagriculture:squid_essence',
        P: 'mysticalagriculture:prismarine_essence',
        N: 'minecraft:nautilus_shell'
    }).id('mysticalagriculture:essence/minecraft/heart_of_the_sea')
    event.recipes.createMixing('4x minecraft:heart_of_the_sea', [
        'minecraft:nautilus_shell', 
        '4x mysticalagriculture:diamond_essence',
        '4x mysticalagriculture:prismarine_essence',
        '4x mysticalagriculture:squid_essence'
    ]).id('finality:mysta_mixing_sea_heart')
    event.recipes.createMechanicalCrafting('4x minecraft:heart_of_the_sea', [
        '  S  ',
        ' SDP ',
        'PDNDP',
        ' PDS ',
        '  S  '
    ], {
        D: 'mysticalagriculture:diamond_essence',
        S: 'mysticalagriculture:squid_essence',
        P: 'mysticalagriculture:prismarine_essence',
        N: 'minecraft:nautilus_shell'
    }).id('finality:mysta_mechanical_heart_of_the_sea')
    // machine frame related
    event.shaped('mysticalagriculture:machine_frame', [
        'IRI',
        'RSR',
        'IRI'
    ], {
        I: 'create:iron_sheet',
        R: 'minecraft:redstone',
        S: '#forge:stone'
    }).id('mysticalagriculture:machine_frame')
    event.shaped('mysticalagriculture:soul_extractor', [
        'FSF',
        'DBD',
        'FSF'
    ], {
        F: 'mysticalagriculture:machine_frame',
        S: 'mysticalagriculture:soulium_ingot',
        D: 'mysticalagriculture:soulium_dagger',
        B: 'create:deployer'
    }).id('mysticalagriculture:soul_extractor')
    event.shaped('mysticalagriculture:basic_reprocessor', [
        'FSF',
        'DRD',
        'FSF'
    ], {
        F: 'mysticalagriculture:machine_frame',
        S: 'mysticalagriculture:soulium_ingot',
        D: 'mysticalagriculture:soulium_dagger',
        R: 'create:radial_chassis'
    }).id('mysticalagriculture:basic_reprocessor')
    // miscellaneous
    event.recipes.createMixing(Item.of('mysticalagriculture:mystical_fertilizer', 4), [
        Item.of('mysticalagriculture:inferium_essence', 4), 
        Item.of('minecraft:bone_meal', 4), 
        'minecraft:diamond'
    ]).id('finality:mysta_mystical_fertilizer')
    event.recipes.createMixing(Item.of('mysticalagriculture:mystical_fertilizer', 8), [
        '4x mysticalagriculture:inferium_essence',
        '4x mysticalagriculture:fertilized_essence',
        'minecraft:diamond'
    ]).id('finality:mysta_mystical_fertilizer_better_eff')
})