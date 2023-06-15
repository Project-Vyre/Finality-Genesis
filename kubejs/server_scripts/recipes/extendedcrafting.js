ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:beacon'})
    event.remove({id: 'tconstruct:common/glass/vanilla/beacon'})
    event.remove({id: 'minecraft:end_crystal'})
    event.remove({id: 'unusualend:end_crystal'})
    event.remove({id: 'unusualend:end_crystal_via_chiseled_glass'})
    event.remove({id: 'tconstruct:common/glass/vanilla/end_crystal'})
    event.remove({id: 'extendedcrafting:black_iron_ingot'})
    event.shaped('extendedcrafting:handheld_table', [
        ' C',
        'S '
    ], {
        C: '#blue_skies:crafting_tables',
        S: '#forge:rods/wooden'
    }).id('finality:handheld_crafting_table_blueskies_compat')
    event.shapeless('extendedcrafting:black_iron_ingot', ['minecraft:iron_ingot', 'minecraft:black_dye', 'create:powdered_obsidian']).id('finality:ext_black_iron_ingot')
    event.shaped('minecraft:beacon',[
        'GGG',
        'GSG',
        'OOO'
    ], {
        G: '#forge:glass/colorless',
        S: 'extendedcrafting:ender_star',
        O: 'minecraft:obsidian'
    }).id('finality:beacon')
    event.custom({ // script original scripts below while kjs create is being developed
        type: 'create:mechanical_crafting',
        acceptMirrored: false,
        key: {
            L: { item: 'minecraft:lapis_lazuli' },
            D: { item: 'minecraft:diamond' },
            I: { item: 'minecraft:iron_ingot' },
            S: { item: 'minecraft:nether_star' },
            G: { item: 'minecraft:gold_ingot' }
        },
        pattern: [
            'DLLLLLD',
            'DGISIGD',
            'DGISIGD',
            'DLLLLLD'
        ], 
        result: {
            count: 4,
            item: 'extendedcrafting:crystaltine_ingot'
        }
    }).id('finality:extendedcrafting/json_mechanical/crystaltine_ingot_translate')
    event.custom ({ // world shaper jsonified
        type: 'create:mechanical_crafting',
        acceptMirrored: false,
        key: {
            C: { item: 'extendedcrafting:the_ultimate_catalyst' },
            S: { item: 'create:sturdy_sheet' },
            U: { item: 'extendedcrafting:ultimate_singularity' },
            P: { item: 'create:precision_mechanism' },
            I: { item: 'extendedcrafting:the_ultimate_ingot' }
        },
        pattern: [
            'CPUSSS',
            'II    '
        ],
        result: { item: 'create:handheld_worldshaper' }
    }).id('finality:extendedcrafting/json_mechanical/create_worldshaper')
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'extendedcrafting:ultimate_singularity' }
        ],
        processingTime: 1200,
        results: [
            { item: 'extendedcrafting:the_ultimate_nugget' },
            { item: 'extendedcrafting:the_ultimate_nugget', chance: 0.25 }
        ]
    }).id('finality:extendedcrafting/json_crushing/the_ultimate_nugget')
    event.recipes.createMechanicalCrafting(Item.of('4x extendedcrafting:crystaltine_ingot'), [
        'DLLLLLD',
        'DGISIGD',
        'DGISIGD',
        'DLLLLLD'
    ], {
        L: 'minecraft:lapis_lazuli',
        D: 'minecraft:diamond',
        I: 'minecraft:iron_ingot',
        S: 'minecraft:nether_star',
        G: 'minecraft:gold_ingot'
    }).id('finality:crystaltine_mechanical_translate')
    event.recipes.createCrushing(['extendedcrafting:the_ultimate_nugget', Item.of('extendedcrafting:the_ultimate_nugget').withChance(0.25)], 'extendedcrafting:ultimate_singularity').processingTime(1200).id('finality:the_ultimate_nugget')
    event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
        'CPUSSS',
        'II    '
    ], {
        C: 'extendedcrafting:the_ultimate_catalyst',
        S: 'create:sturdy_sheet',
        U: 'extendedcrafting:ultimate_singularity',
        P: 'create:precision_mechanism',
        I: 'extendedcrafting:the_ultimate_ingot'
    }).id('finality:create_worldshaper')
    // modified vanilla recipes 
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 100000,
        input: {
            item: 'minecraft:ender_eye'
        },
        ingredients: [
            Ingredient.of('#forge:glass/colorless').toJson(),
            Ingredient.of('#forge:glass/colorless').toJson(),
            Ingredient.of('#forge:glass/colorless').toJson(),
            Ingredient.of('#forge:glass/colorless').toJson(),
            Ingredient.of('minecraft:ghast_tear').toJson(),
            Ingredient.of('extendedcrafting:ender_star').toJson(),
            Ingredient.of('mysticalagriculture:prosperity_shard').toJson(),
            Ingredient.of('minecraft:fermented_spider_eye').toJson(),
        ],
        result: {
            item: 'minecraft:end_crystal'
        }
    }).id('finality:end_crystal')
    // singularity creation step 1
    event.recipes.createMechanicalCrafting('finality:dormant_singularity_core', [
        ' EEEEE ',
        'EEEEEEE',
        'EEEEEEE',
        'EEEEEEE',
        'EEEEEEE',
        'EEEEEEE',
        ' EEEEE '
    ], {
        E: 'minecraft:crying_obsidian'
    }).id('finality:dormant_singularity_core')
    // singularity step 2
    event.recipes.createCompacting([Fluid.of('finality:condensed_universal_entropy', 1000)], ['9x minecraft:crying_obsidian']).id('finality:condensing_universe_essence')
    // singularity step 3 (new method)
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}')
    ], 'finality:dormant_singularity_core', [
        event.recipes.createFilling('finality:incomplete_andesite_singularity_core', ['finality:incomplete_andesite_singularity_core', Fluid.of('finality:condensed_universal_entropy', 250)]),
        event.recipes.createDeploying('finality:incomplete_andesite_singularity_core', ['finality:incomplete_andesite_singularity_core', 'create:andesite_alloy_block']),
        event.recipes.createPressing('finality:incomplete_andesite_singularity_core', 'finality:incomplete_andesite_singularity_core'),
        event.recipes.createDeploying('finality:incomplete_andesite_singularity_core', ['finality:incomplete_andesite_singularity_core', 'create:andesite_alloy_block']),
        event.recipes.createPressing('finality:incomplete_andesite_singularity_core', 'finality:incomplete_andesite_singularity_core')
    ]).transitionalItem('finality:incomplete_andesite_singularity_core').loops(64).id('finality:andesite_alloy_singularity')
    // sequenced assembly singularities
    /*
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}')
    ],'create:andesite_alloy',[
        event.recipes.createDeploying('finality:andesite_singularity_core', ['finality:andesite_singularity_core', 'create:andesite_alloy_block']),
        event.recipes.createFilling('finality:andesite_singularity_core', ['finality:andesite_singularity_core', Fluid.of('minecraft:lava', 250)]),
        event.recipes.createDeploying('finality:andesite_singularity_core', ['finality:andesite_singularity_core', 'create:andesite_alloy_block']),
        event.recipes.createPressing('finality:andesite_singularity_core', 'finality:andesite_singularity_core'),
        event.recipes.createPressing('finality:andesite_singularity_core', 'finality:andesite_singularity_core')
    ]).transitionalItem('finality:andesite_singularity_core').loops(16).id('finality:andesite_alloy_singularity')
    */
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blue_ice"}')
    ],'minecraft:blue_ice',[
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:blue_ice']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:blue_ice_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coarse_dirt"}')
    ],'minecraft:coarse_dirt',[
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:dirt']),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:gravel']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:coarse_dirt_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sand"}')
    ],'minecraft:sand',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:sand']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:sand_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobblestone"}')
    ],'minecraft:cobblestone',[
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:cobblestone']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(256).id('finality:cobblestone_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:framed_glass"}')
    ],'create:framed_glass',[
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:framed_glass']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(32).id('finality:framed_glass_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}').withChance(75.0),
        Item.of('16x create:crushed_gold_ore').withChance(25.0),
        Item.of('32x create:cogwheel').withChance(25.0),
        Item.of('8x create:large_cogwheel').withChance(25.0),
        '32x create:precision_mechanism'
    ],'create:precision_mechanism',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:cogwheel']),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:large_cogwheel']),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','extendedcrafting:redstone_nugget']),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:precision_mechanism']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:precision_mechanism_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:sturdy_sheet"}')
    ],'create:sturdy_sheet',[
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','create:sturdy_sheet']),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(16).id('finality:sturdy_sheet_singularity')
    // concrete singularities
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_black"}')
    ],'minecraft:black_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:black_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:black_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_gray"}')
    ],'minecraft:gray_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:gray_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:gray_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_light_gray"}')
    ],'minecraft:light_gray_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:light_gray_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:light_gray_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_white"}')
    ],'minecraft:white_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:white_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:white_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_brown"}')
    ],'minecraft:brown_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:brown_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:brown_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_pink"}')
    ],'minecraft:pink_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:pink_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:pink_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_cyan"}')
    ],'minecraft:cyan_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:cyan_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:cyan_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_blue"}')
    ],'minecraft:blue_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:blue_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:blue_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_lime"}').withChance(100.0)
    ],'minecraft:lime_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:lime_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:lime_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_green"}').withChance(100.0)
    ],'minecraft:green_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:green_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:green_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_yellow"}').withChance(100.0)
    ],'minecraft:yellow_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:yellow_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:yellow_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_purple"}').withChance(100.0)
    ],'minecraft:purple_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:purple_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:purple_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_magenta"}').withChance(100.0)
    ],'minecraft:magenta_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:magenta_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:magenta_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_orange"}').withChance(100.0)
    ],'minecraft:orange_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:orange_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:orange_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_red"}').withChance(100.0)
    ],'minecraft:red_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:red_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:red_concrete_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity','{Id:"extendedcrafting:concrete_light_blue"}').withChance(100.0)
    ],'minecraft:light_blue_concrete',[
        event.recipes.createDeploying('extendedcrafting:singularity', ['extendedcrafting:singularity','minecraft:light_blue_concrete_powder']),
        event.recipes.createFilling('extendedcrafting:singularity', ['extendedcrafting:singularity', Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity'),
        event.recipes.createPressing('extendedcrafting:singularity', 'extendedcrafting:singularity')
    ]).transitionalItem('extendedcrafting:singularity').loops(128).id('finality:light_blue_concrete_singularity')
    // mechanical crafting singularities
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:amethyst"}'), [
        ' LLLLLLL ',
        'LLLOOOLLL',
        'LLOOOOOLL',
        'LOOOOOOOL',
        'LOOOOOOOL',
        'LOOOOOOOL',
        'LLOOOOOLL',
        'LLLOOOLLL',
        ' LLLLLLL '
    ], {
        O: 'minecraft:amethyst_block',
        L: 'minecraft:crying_obsidian'
    }).id('finality:amethyst_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:brass"}'), [
        ' LLLLLLL ',
        'LLLBBBLLL',
        'LLBBBBBLL',
        'LBBBBBBBL',
        'LBBBBBBBL',
        'LBBBBBBBL',
        'LLBBBBBLL',
        'LLLBBBLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        B: 'create:brass_block'
    }).id('finality:brass_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), [
        ' CCCCCCC ',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        ' CCCCCCC '
    ], {
        C: 'minecraft:coal_block'
    }).id('finality:coal_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), [
        ' LLLLLLL ',
        'LLLCCCLLL',
        'LLCCCCCLL',
        'LCCCCCCCL',
        'LCCCCCCCL',
        'LCCCCCCCL',
        'LLCCCCCLL',
        'LLLCCCLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        C: 'minecraft:copper_block'
    }).id('finality:copper_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), [
        ' LLLLLLL ',
        'LLLDDDLLL',
        'LLDDDDDLL',
        'LDDDDDDDL',
        'LDDDDDDDL',
        'LDDDDDDDL',
        'LLDDDDDLL',
        'LLLDDDLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        D: 'minecraft:diamond_block'
    }).id('finality:diamond_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), [
        ' LLLLLLL ',
        'LLLEEELLL',
        'LLEEEEELL',
        'LEEEEEEEL',
        'LEEEEEEEL',
        'LEEEEEEEL',
        'LLEEEEELL',
        'LLLEEELLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        E: 'minecraft:emerald_block'
    }).id('finality:emerald_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electron_tube"}'), [
        ' LLLLLLL ',
        'LLLEEELLL',
        'LLEEEEELL',
        'LEEEEEEEL',
        'LEEEEEEEL',
        'LEEEEEEEL',
        'LLEEEEELL',
        'LLLEEELLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        E: 'create:electron_tube'
    }).id('finality:electron_tube_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ender_pearl"}'), [
        ' LLLLLLL ',
        'LLLAAALLL',
        'LLAAAAALL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LLAAAAALL',
        'LLLAAALLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        A: 'minecraft:ender_pearl'
    }).id('finality:ender_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), [
        ' LLLLLLL ',
        'LLLGGGLLL',
        'LLGGGGGLL',
        'LGGGGGGGL',
        'LGGGGGGGL',
        'LGGGGGGGL',
        'LLGGGGGLL',
        'LLLGGGLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        G: 'minecraft:glowstone'
    }).id('finality:glowstone_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), [
        ' LLLLLLL ',
        'LLLAAALLL',
        'LLAAAAALL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LLAAAAALL',
        'LLLAAALLL',
        ' LLLLLLL ' 
    ], {
        L: 'minecraft:crying_obsidian',
        A: 'minecraft:gold_block'
    }).id('finality:gold_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gunpowder"}'), [
        ' LLLLLLL ',
        'LLLAAALLL',
        'LLAAAAALL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LLAAAAALL',
        'LLLAAALLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        A: 'minecraft:gunpowder'
    }).id('finality:gunpowder_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:honey"}'), [
        ' LLLLLLL ',
        'LLLRRRLLL',
        'LLRRRRRLL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LLRRRRRLL',
        'LLLRRRLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        R: 'minecraft:honey_block'
    }).id('finality:honey_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), [
        ' LLLLLLL ',
        'LLLFFFLLL',
        'LLFFFFFLL',
        'LFFFFFFFL',
        'LFFFFFFFL',
        'LFFFFFFFL',
        'LLFFFFFLL',
        'LLLFFFLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        F: 'minecraft:iron_block'
    }).id('finality:iron_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), [
        ' LLLLLLL ',
        'LLLAAALLL',
        'LLAAAAALL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LLAAAAALL',
        'LLLAAALLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        A: 'minecraft:lapis_block'
    }).id('finality:lapis_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}'), [
        ' LLLLLLL ',
        'LLLAAALLL',
        'LLAAAAALL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LLAAAAALL',
        'LLLAAALLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        A: 'minecraft:netherite_block'
    }).id('finality:netherite_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sea_lantern"}'), [
        ' LLLLLLL ',
        'LLLRRRLLL',
        'LLRRRRRLL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LLRRRRRLL',
        'LLLRRRLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        R: 'minecraft:sea_lantern'
    }).id('finality:prismarine_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:quartz"}'), [
        ' LLLLLLL ',
        'LLLQQQLLL',
        'LLQQQQQLL',
        'LQQQQQQQL',
        'LQQQQQQQL',
        'LQQQQQQQL',
        'LLQQQQQLL',
        'LLLQQQLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        Q: 'minecraft:quartz_block'
    }).id('finality:quartz_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), [
        ' LLLLLLL ',
        'LLLRRRLLL',
        'LLRRRRRLL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LLRRRRRLL',
        'LLLRRRLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        R: 'minecraft:redstone_block'
    }).id('finality:redstone_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:rose_quartz"}'), [
        ' LLLLLLL ',
        'LLLRRRLLL',
        'LLRRRRRLL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LRRRRRRRL',
        'LLRRRRRLL',
        'LLLRRRLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        R: 'create:polished_rose_quartz'
    }).id('finality:rose_quartz_singularity') // apparently made a typo here and typed rose as rosse instead in the JSON syntax version
    /* ars is non existent so this is disabled
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:source_gem"}'), [
        ' LLLLLLL ',
        'LLLAAALLL',
        'LLAAAAALL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LAAAAAAAL',
        'LLAAAAALL',
        'LLLAAALLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        A: 'ars_nouveau:source_gem_block'
    }).id('finality:source_gem_singularity')
    */ 
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:zinc"}'), [
        ' LLLLLLL ',
        'LLLZZZLLL',
        'LLZZZZZLL',
        'LZZZZZZZL',
        'LZZZZZZZL',
        'LZZZZZZZL',
        'LLZZZZZLL',
        'LLLZZZLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        Z: 'create:zinc_block'
    }).id('finality:zinc_singularity')
})
/*
ServerEvents.recipes(event => { // nope nope NOPE not doing JSON 
    event.custom({ transitionalItem:{ "item": "extendedcrafting:singularity", "count": 1 },
    loops: 16, 
    sequence: [
        { "type": "create:filling", "ingredients": [
            { "item": "extendedcrafting:singularity" },
            { "fluid": "minecraft:water", "nbt": {}, "amount": 25 }
        ],
    "results": [
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type": "create:deploying", "ingredients": [
            { "item": "extendedcrafting:singularity" },
            { "item": "minecraft:blue_ice" }
        ], 
    "results": [
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type": "create:pressing", "ingredients": [
            { "item": "extendedcrafting:singularity"}
    ], 
    "results": [
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type": "create:pressing", "ingredients": [
            { "item": "extendedcrafting:singularity" }
    ], 
    "results":[
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type":"create:pressing", "ingredients": [
        { "item": "extendedcrafting:singularity" }
    ], 
    "results": [
        {"item": "extendedcrafting:singularity" }
    ],  }], ingredient:{ "item":"minecraft:blue_ice" }, type: "create:sequenced_assembly", 
    results:[
        { "item": "extendedcrafting:singularity", "count": 1, "nbt": "{Id:\"extendedcrafting:blue_ice\"}" }
    ]}).id('finality:extendedcrafting/jsonaneurysm_seq/blue_ice_singularity')
    event.custom({ transitionalItem:{ "item": "extendedcrafting:singularity", "count": 1 },
    loops: 16, 
    sequence: [
        { "type": "create:filling", "ingredients": [
            { "item": "extendedcrafting:singularity" },
            { "fluid": "minecraft:water", "nbt": {}, "amount": 25 }
        ],
    "results": [
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type": "create:deploying", "ingredients": [
            { "item": "extendedcrafting:singularity" },
            { "item": "minecraft:blue_ice" }
        ], 
    "results": [
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type": "create:pressing", "ingredients": [
            { "item": "extendedcrafting:singularity"}
    ], 
    "results": [
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type": "create:pressing", "ingredients": [
            { "item": "extendedcrafting:singularity" }
    ], 
    "results":[
        { "item": "extendedcrafting:singularity" }
    ],  
    }, { "type":"create:pressing", "ingredients": [
        { "item": "extendedcrafting:singularity" }
    ], 
    "results": [
        {"item": "extendedcrafting:singularity" }
    ],  }], ingredient:{ "item":"minecraft:blue_ice" }, type: "create:sequenced_assembly", 
    results:[
        { "item": "extendedcrafting:singularity", "count": 1, "nbt": "{Id:\"extendedcrafting:blue_ice\"}" }
    ]}).id('finality:extendedcrafting/jsonaneurysm_seq/blue_ice_singularity')
})
*/