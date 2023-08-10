// requires: extendedcrafting
// requires: create

let DYE = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
let SAND = ['sand', 'red_sand']
ServerEvents.recipes(event => {
    event.remove({ id: 'tconstruct:common/glass/vanilla/beacon' })
    event.remove({ id: 'unusualend:end_crystal' })
    event.remove({ id: 'unusualend:end_crystal_via_chiseled_glass' })
    event.remove({ id: 'tconstruct:common/glass/vanilla/end_crystal' })
    event.shapeless('extendedcrafting:black_iron_ingot', [
        'minecraft:iron_ingot',
        'minecraft:black_dye',
        'create:powdered_obsidian'
    ]).id('extendedcrafting:black_iron_ingot')
    event.shaped('minecraft:beacon', [
        'GGG',
        'GSG',
        'OOO'
    ], {
        G: '#forge:glass/colorless',
        S: 'extendedcrafting:ender_star',
        O: 'minecraft:obsidian'
    }).id('minecraft:beacon')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:crystaltine_ingot', 4), [
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
    event.recipes.createCrushing([
        'extendedcrafting:the_ultimate_nugget',
        Item.of('extendedcrafting:the_ultimate_nugget').withChance(0.25)
    ], 'extendedcrafting:ultimate_singularity').processingTime(1200).id('finality:the_ultimate_nugget')
    event.recipes.createMechanicalCrafting('create:handheld_worldshaper', [
        'CPULOO',
        'II    '
    ], {
        C: 'kubejs:repeating_command_block',
        P: 'kubejs:entropy_mechanism',
        U: 'kubejs:chain_command_block',
        L: 'kubejs:command_block',
        O: 'create:sturdy_sheet',
        I: 'extendedcrafting:the_ultimate_ingot'
    }).id('finality:create_worldshaper')
    event.recipes.createMixing(['extendedcrafting:ender_star'], ['minecraft:nether_star', '4x minecraft:ender_eye']).heated().id('finality:ender_star_mixing')
    // modified vanilla recipes
    event.shapeless('minecraft:end_crystal', [
        '4x #forge:glass/colorless',
        'extendedcrafting:ender_star',
        'minecraft:ghast_tear',
        'minecraft:fermented_spider_eye',
    ]).id('minecraft:end_crystal')
    // ender crafting
    event.shaped('extendedcrafting:ender_crafter', [
        'EEE',
        'ICI',
        'III'
    ], {
        E: 'ender_eye',
        I: 'extendedcrafting:ender_ingot',
        C: 'extendedcrafting:crafting_core'
    }).id('extendedcrafting:ender_crafter')
    // singularity creation step 1
    event.recipes.createMechanicalCrafting('kubejs:dormant_singularity_core', [
        ' OOOOO ',
        'OOOOOOO',
        'OOOOOOO',
        'OOOEOOO',
        'OOOOOOO',
        'OOOOOOO',
        ' OOOOO '
    ], {
        E: 'minecraft:crying_obsidian',
        O: 'minecraft:obsidian'
    }).id('finality:dormant_singularity_core')
    // singularity step 2
    event.recipes.createCompacting([
        Fluid.of('kubejs:condensed_universal_entropy', 250)
    ], [
        'minecraft:crying_obsidian'
    ]).superheated().id('finality:condensing_universe_essence')
    event.recipes.createFilling('kubejs:awakened_singularity_core', ['kubejs:dormant_singularity_core', Fluid.of('kubejs:condensed_universal_entropy', 1000)]).id('finality:singularity_core_awakening')
    // singularity step 3 (new method)
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity', 'create:andesite_alloy_block']),
        event.recipes.createPressing(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity'])
    ]).transitionalItem('kubejs:incomplete_andesite_alloy_singularity').loops(256).id('finality:andesite_alloy_singularity')
    let CREATEVALUED = ['brass', 'zinc']
    CREATEVALUED.forEach(valued => {
        event.recipes.createSequencedAssembly([
            Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${valued}"}`)
        ], 'kubejs:awakened_singularity_core', [
            event.recipes.createDeploying([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`, `create:${valued}_block`]),
            event.recipes.createPressing([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`])
        ]).transitionalItem(`kubejs:incomplete_${valued}_singularity`).loops(256).id(`finality:${valued}_singularity`)
    })
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:train_track"}'),
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity', 'create:track']),
        event.recipes.createPressing(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity'])
    ]).transitionalItem('kubejs:incomplete_track_singularity').loops(256).id('finality:track_singularity')
    // sequenced assembly singularities
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blue_ice"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', 'minecraft:blue_ice']),
        event.recipes.createFilling(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.createPressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
        event.recipes.createPressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
        event.recipes.createPressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity'])
    ]).transitionalItem('kubejs:incomplete_blue_ice_singularity').loops(16).id('finality:blue_ice_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coarse_dirt"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', 'minecraft:coarse_dirt']),
        event.recipes.createFilling('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.createPressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
        event.recipes.createPressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
        event.recipes.createPressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity')
    ]).transitionalItem('kubejs:incomplete_coarse_dirt_singularity').loops(16).id('finality:coarse_dirt_singularity')
    SAND.forEach(insert => event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${insert}"}`)
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying(`kubejs:incomplete_${insert}_singularity`, [`kubejs:incomplete_${insert}_singularity`, `minecraft:${insert}`]),
        event.recipes.createPressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
        event.recipes.createPressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
        event.recipes.createPressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
        event.recipes.createPressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_${insert}_singularity`).loops(16).id(`finality:${insert}_singularity`))
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_sand"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:soul_sand']),
        event.recipes.createDeploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:flint_and_steel']),
        event.recipes.createCutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
        event.recipes.createPressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.createPressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.createCutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_soul_sand_singularity').loops(32).id('finality:soul_sand_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_soil"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_soul_soil_singularity', ['kubejs:incomplete_soul_soil_singularity', 'minecraft:soul_soil']),
        event.recipes.createPressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.createPressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.createCutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
        event.recipes.createPressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.createCutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_soul_soil_singularity').loops(32).id('finality:soul_soil_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobblestone"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', 'minecraft:cobblestone']),
        event.recipes.createFilling('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.createPressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
        event.recipes.createPressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
        event.recipes.createPressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity')
    ]).transitionalItem('kubejs:incomplete_cobblestone_singularity').loops(256).id('finality:cobblestone_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:framed_glass"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
        event.recipes.createFilling('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.createDeploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
        event.recipes.createPressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity'),
        event.recipes.createPressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity')
    ]).transitionalItem('kubejs:incomplete_framed_glass_singularity').loops(32).id('finality:framed_glass_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tinted_glass"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
        event.recipes.createFilling('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', Fluid.of('minecraft:lava', 250)]),
        event.recipes.createDeploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
        event.recipes.createPressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity'),
        event.recipes.createPressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity')
    ]).transitionalItem('kubejs:incomplete_tinted_glass_singularity').loops(32).id('finality:tinted_glass_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}').withChance(75.0),
        Item.of('create:crushed_raw_gold', 16).withChance(25.0),
        Item.of('create:cogwheel', 32).withChance(25.0),
        Item.of('create:large_cogwheel', 8).withChance(25.0),
        '32x create:precision_mechanism'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:precision_mechanism']),
        event.recipes.createDeploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:large_cogwheel']),
        event.recipes.createDeploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'extendedcrafting:redstone_nugget']),
        event.recipes.createPressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity'),
        event.recipes.createPressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity')
    ]).transitionalItem('kubejs:incomplete_precision_mechanism_singularity').loops(16).id('finality:precision_mechanism_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sturdy_sheet"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
        event.recipes.createFilling('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.createDeploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
        event.recipes.createPressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
        event.recipes.createPressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
        event.recipes.createPressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity')
    ]).transitionalItem('kubejs:incomplete_sturdy_sheet_singularity').loops(16).id('finality:sturdy_sheet_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:builders_tea"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createFilling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.createFilling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.createFilling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.createFilling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.createPressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity'),
        event.recipes.createPressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity')
    ]).transitionalItem('kubejs:incomplete_builders_tea_singularity').loops(32).id('finality:builders_tea_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:chocolate"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.createDeploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.createDeploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.createDeploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.createFilling('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', Fluid.of('create:chocolate', 250)]),
        event.recipes.createPressing('kubejs:incomplete_chocolate_singularity', 'kubejs:incomplete_chocolate_singularity')
    ]).transitionalItem('kubejs:incomplete_chocolate_singularity').loops(36).id('finality:chocolate_singularity')
    event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:end_crystal"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.createDeploying('kubejs:incomplete_end_crystal_singularity', ['kubejs:incomplete_end_crystal_singularity', 'minecraft:end_crystal']),
        event.recipes.createPressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity'),
        event.recipes.createPressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity')
    ]).transitionalItem('kubejs:incomplete_end_crystal_singularity').loops(9).id('kubejs:end_crystal_singularity')
    // concrete singularities
    DYE.forEach(color => event.recipes.createSequencedAssembly([
        Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:concrete_${color}"}`)
    ], `minecraft:${color}_concrete`, [
        event.recipes.createDeploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
        event.recipes.createFilling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
        event.recipes.createPressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
        event.recipes.createPressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
        event.recipes.createPressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(128).id(`finality:${color}_concrete_singularity`))
    // mechanical crafting singularities
    let VANILLAMATS = ['amethyst', 'copper', 'iron', 'redstone', 'gold', 'diamond', 'emerald', 'quartz', 'netherite', 'honey']
    let VANILLANOTSTANDARD = ['ender_pearl', 'gunpowder', 'sea_lantern', 'glowstone']
    let CREATEITEMS = ['electron_tube', 'rose_quartz']
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), [
        ' CCCCCCC ',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCOCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        ' CCCCCCC '
    ], {
        C: 'minecraft:coal_block',
        O: 'kubejs:awakened_singularity_core'
    }).id('finality:coal_singularity')
    event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), [
        ' LLLLLLL ',
        'LLLOOOLLL',
        'LLOOOOOLL',
        'LOOOOOOOL',
        'LOOOCOOOL',
        'LOOOOOOOL',
        'LLOOOOOLL',
        'LLLOOOLLL',
        ' LLLLLLL '
    ], {
        L: 'minecraft:crying_obsidian',
        C: 'kubejs:awakened_singularity_core',
        O: 'minecraft:lapis_block'
    }).id('finality:lapis_singularity')
    VANILLAMATS.forEach(vanilla => {
        event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${vanilla}"}`), [
            ' LLLLLLL ',
            'LLLOOOLLL',
            'LLOOOOOLL',
            'LOOOOOOOL',
            'LOOOCOOOL',
            'LOOOOOOOL',
            'LLOOOOOLL',
            'LLLOOOLLL',
            ' LLLLLLL '
        ], {
            L: 'minecraft:crying_obsidian',
            C: 'kubejs:awakened_singularity_core',
            O: `minecraft:${vanilla}_block`
        }).id(`finality:${vanilla}_singularity`)
    })
    VANILLANOTSTANDARD.forEach(insert => {
        event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${insert}"}`), [
            ' LLLLLLL ',
            'LLLOOOLLL',
            'LLOOOOOLL',
            'LOOOOOOOL',
            'LOOOCOOOL',
            'LOOOOOOOL',
            'LLOOOOOLL',
            'LLLOOOLLL',
            ' LLLLLLL '
        ], {
            L: 'minecraft:crying_obsidian',
            C: 'kubejs:awakened_singularity_core',
            O: `minecraft:${insert}`
        }).id(`finality:${insert}_singularity`)
    })
    CREATEITEMS.forEach(insert => {
        event.recipes.createMechanicalCrafting(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${insert}"}`), [
            ' LLLLLLL ',
            'LLLRRRLLL',
            'LLRRRRRLL',
            'LRRRRRRRL',
            'LRRRCRRRL',
            'LRRRRRRRL',
            'LLRRRRRLL',
            'LLLRRRLLL',
            ' LLLLLLL '
        ], {
            L: 'crying_obsidian',
            C: 'kubejs:awakened_singularity_core',
            R: `create:${insert}`
        }).id(`finality:${insert}singularity`)
    })
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:entropy_mechanism').withChance(100.0),
        Item.of('minecraft:structure_void').withChance(25.0),
        Item.of('minecraft:debug_stick').withChance(25.0),
        Item.of('minecraft:jigsaw').withChance(25.0),
        Item.of('kubejs:command_block').withChance(10.0),
        Item.of('kubejs:chain_command_block').withChance(10.0),
        Item.of('kubejs:repeating_command_block').withChance(10.0),
        'minecraft:grass_block'
    ], 'create:precision_mechanism', [
        event.recipes.createDeploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:awakened_singularity_core']),
        event.recipes.createFilling('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', Fluid.of('kubejs:condensed_universal_entropy', 1000)]),
        event.recipes.createDeploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'create:sequenced_gearshift']),
        event.recipes.createDeploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'extendedcrafting:crystaltine_nugget']),
        event.recipes.createDeploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'create:experience_nugget']),
        event.recipes.createDeploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'extendedcrafting:the_ultimate_nugget'])
    ]).transitionalItem('kubejs:incomplete_entropy_mechanism').loops(512).id('finality:entropy_mechanism_creation')
    event.recipes.createMechanicalCrafting('kubejs:command_block', [
        'IIGIIGII',
        'IIQPPQII',
        'GQCRRCQG',
        'IPRUURPI',
        'IPRUURPI',
        'GQCRRCQG',
        'IIQPPQII',
        'IIGIIGII'
    ], {
        I: 'kubejs:high_entropy_alloy',
        G: '#forge:glass/colorless',
        R: 'extendedcrafting:redstone_catalyst',
        U: 'extendedcrafting:the_ultimate_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        Q: 'create:rose_quartz_lamp',
        P: 'create:pulse_repeater'
    }).id('finality:mechanical_crafting/command_block')
    event.recipes.createMechanicalCrafting('kubejs:chain_command_block', [
        'IIGIIGII',
        'IIQPPQII',
        'GQCRRCQG',
        'IPRUURPI',
        'IPRUURPI',
        'GQCRRCQG',
        'IIQPPQII',
        'IIGIIGII'
    ], {
        I: 'kubejs:high_entropy_alloy',
        G: '#forge:glass/colorless',
        R: 'extendedcrafting:redstone_catalyst',
        U: 'extendedcrafting:the_ultimate_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        Q: 'create:rose_quartz_lamp',
        P: 'create:sequenced_gearshift'
    }).id('finality:mechanical_crafting/chain_command_block')
    event.recipes.createMechanicalCrafting('kubejs:repeating_command_block', [
        'IIGIIGII',
        'IIQPPQII',
        'GQCRRCQG',
        'IPRUURPI',
        'IPRUURPI',
        'GQCRRCQG',
        'IIQPPQII',
        'IIGIIGII'
    ], {
        I: 'kubejs:high_entropy_alloy',
        G: '#forge:glass/colorless',
        R: 'extendedcrafting:redstone_catalyst',
        U: 'extendedcrafting:the_ultimate_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        Q: 'create:rose_quartz_lamp',
        P: 'create:powered_toggle_latch'
    }).id('finality:mechanical_crafting/repeating_command_block')
    event.recipes.createMechanicalCrafting('minecraft:spawner', [
        'VVV',
        'VSV',
        'VVV'
    ], {
        V: 'minecraft:structure_void',
        S: 'minecraft:soul_campfire'
    }).id('finality:spawner')
    event.recipes.createDeploying('minecraft:structure_void', ['#kubejs:command_blocks', 'kubejs:final_pickaxe']).keepHeldItem().id('finality:structure_void')
})