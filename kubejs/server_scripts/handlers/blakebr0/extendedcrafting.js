// priority: 5
// requires: extendedcrafting
// requires: create

/**
 * @file Server handler for Extended Crafting.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author tizu69 <https://github.com/tizu69> Wrote ExtendedCrafting table JSON auto-gen functions
 */

let SAND = ['sand', 'red_sand']
let VANILLAMATS = ['amethyst', 'copper', 'iron', 'redstone', 'gold', 'diamond', 'emerald', 'quartz', 'netherite', 'honey']
let VANILLANOTSTANDARD = ['ender_pearl', 'gunpowder', 'sea_lantern', 'glowstone']
let CREATEITEMS = ['electron_tube', 'rose_quartz']
let CREATEVALUED = ['brass', 'zinc']

ServerEvents.recipes(event => {
    event.shapeless('extendedcrafting:black_iron_ingot', [
        'minecraft:iron_ingot',
        'minecraft:black_dye',
        'create:powdered_obsidian'
    ]).id('extendedcrafting:black_iron_ingot')
    event.shaped('extendedcrafting:black_iron_slate', [
        'BB'
    ], {
        B: 'extendedcrafting:black_iron_ingot'
    }).id('extendedcrafting:black_iron_slate')
    event.shaped('kubejs:denied_result', [
        'CAC',
        'MIM',
        'CSC'
    ], {
        C: 'extendedcrafting:basic_component',
        A: 'extendedcrafting:basic_catalyst',
        M: 'minecraft:crafting_table',
        I: 'minecraft:iron_block',
        S: 'extendedcrafting:black_iron_slate'
    }).id('extendedcrafting:basic_table')
    event.recipes.create.mechanical_crafting('extendedcrafting:basic_table', [
        'CAAAC',
        'SMMMS',
        ' S S ',
        ' S S ',
        'SCCCS'
    ], {
        C: 'extendedcrafting:basic_component',
        A: 'extendedcrafting:basic_catalyst',
        M: 'create:mechanical_crafter',
        S: 'extendedcrafting:black_iron_slate'
    }).id('finality:mechanical_crafting/basic_table')

    event.shaped('minecraft:beacon', [
        'GGG',
        'GSG',
        'OOO'
    ], {
        G: '#forge:glass/colorless',
        S: 'extendedcrafting:ender_star',
        O: 'minecraft:obsidian'
    }).id('finality:beacon')

    let material_crystaltine_pattern = [
        'DLLLLLD',
        'DAFNFAD',
        'DAFNFAD',
        'DLLLLLD'
    ]
    event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:crystaltine_ingot', material_crystaltine_pattern, {
        L: 'minecraft:lapis_lazuli',
        D: 'minecraft:diamond',
        A: 'minecraft:iron_ingot',
        N: 'minecraft:nether_star',
        F: 'minecraft:gold_ingot'
    }).id('extendedcrafting:crystaltine_ingot')
    event.recipes.create.mechanical_crafting('4x extendedcrafting:crystaltine_ingot', material_crystaltine_pattern, {
        L: 'minecraft:lapis_lazuli',
        D: 'minecraft:diamond',
        A: 'minecraft:iron_ingot',
        N: 'minecraft:nether_star',
        F: 'minecraft:gold_ingot'
    }).id('finality:mechanical_crafting/crystaltine_ingot')

    let radiant_crystaltine_pattern = [
        'RRRRRRR',
        'RRNRNRR',
        'RNRNRNR',
        'RRNRNRR',
        'RRRRRRR'
    ]
    event.recipes.extendedcrafting.shaped_table('4x extendedcrafting:crystaltine_ingot', radiant_crystaltine_pattern, {
        R: 'create:refined_radiance',
        N: 'minecraft:nether_star'
    }).id('finality:extendedcrafting/crystaltine_ingot_alt')
    event.recipes.create.mechanical_crafting('4x extendedcrafting:crystaltine_ingot', radiant_crystaltine_pattern, {
        R: 'create:refined_radiance',
        N: 'minecraft:nether_star'
    }).id('finality:mechanical_crafting/crystaltine_ingot_alt')

    event.recipes.create.crushing([
        '3x extendedcrafting:the_ultimate_nugget',
        Item.of('extendedcrafting:the_ultimate_nugget', 3).withChance(0.25),
        Item.of('extendedcrafting:ultimate_singularity').withChance(0.75)
    ], 'extendedcrafting:ultimate_singularity').processingTime(500).id('finality:the_ultimate_nugget')

    event.recipes.create.mechanical_crafting('create:handheld_worldshaper', [
        'CPULOO',
        'II    '
    ], {
        C: 'kubejs:repeating_command_block',
        P: 'kubejs:entropy_mechanism',
        U: 'kubejs:chain_command_block',
        L: 'kubejs:command_block',
        O: 'create:sturdy_sheet',
        I: 'kubejs:high_entropy_alloy'
    }).id('finality:mechanical_crafting/create_worldshaper')

    event.recipes.create.mixing('extendedcrafting:ender_star', [
        'minecraft:nether_star',
        '4x minecraft:ender_eye'
    ]).heated().id('finality:ender_star_mixing')

    event.recipes.create.deploying([
        'extendedcrafting:nether_star_block',
        '18x minecraft:nether_star'
    ], [
        'extendedcrafting:nether_star_block',
        'kubejs:final_pickaxe'
    ]).keepHeldItem().id('finality:nether_star_duplication')

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
    event.recipes.create.mechanical_crafting('kubejs:dormant_singularity_core', [
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
    }).id('finality:mechanical_crafting/dormant_singularity_core')

    // singularity step 2
    event.recipes.create.compacting([
        Fluid.of('kubejs:condensed_universal_entropy', 250),
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        '5x minecraft:crying_obsidian'
    ]).id('finality:compacting/condensing_universe_essence')

    event.recipes.create.compacting([
        Fluid.of('kubejs:condensed_universal_entropy', 500),
        Item.of('create:experience_nugget').withChance(0.50)
    ], [
        'minecraft:crying_obsidian'
    ]).superheated().id('finality:compacting/condensing_universe_essence_superheated')

    event.recipes.create.filling('kubejs:awakened_singularity_core', [
        'kubejs:dormant_singularity_core',
        Fluid.of('kubejs:condensed_universal_entropy', 1000)
    ]).id('finality:filling/singularity_core_awakening')

    // singularity step 3 (new method)
    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity', 'create:andesite_alloy_block']),
        event.recipes.create.pressing(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity'])
    ]).transitionalItem('kubejs:incomplete_andesite_alloy_singularity').loops(256).id('finality:sequenced_assembly/andesite_alloy_singularity')

    CREATEVALUED.forEach(valued => {
        event.recipes.create.sequenced_assembly([
            Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${valued}"}`)
        ], 'kubejs:awakened_singularity_core', [
            event.recipes.create.deploying([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`, `create:${valued}_block`]),
            event.recipes.create.pressing([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`])
        ]).transitionalItem(`kubejs:incomplete_${valued}_singularity`).loops(256).id(`finality:sequenced_assembly/${valued}_singularity`)
    })

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:train_track"}'),
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity', 'create:track']),
        event.recipes.create.pressing(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity'])
    ]).transitionalItem('kubejs:incomplete_track_singularity').loops(256).id('finality:sequenced_assembly/track_singularity')

    // sequenced assembly singularities
    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blue_ice"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', 'minecraft:blue_ice']),
        event.recipes.create.filling(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
        event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
        event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity'])
    ]).transitionalItem('kubejs:incomplete_blue_ice_singularity').loops(16).id('finality:sequenced_assembly/blue_ice_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coarse_dirt"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', 'minecraft:coarse_dirt']),
        event.recipes.create.filling('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity')
    ]).transitionalItem('kubejs:incomplete_coarse_dirt_singularity').loops(16).id('finality:sequenced_assembly/coarse_dirt_singularity')

    SAND.forEach(insert => event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${insert}"}`)
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(`kubejs:incomplete_${insert}_singularity`, [`kubejs:incomplete_${insert}_singularity`, `minecraft:${insert}`]),
        event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
        event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
        event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
        event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_${insert}_singularity`).loops(16).id(`finality:sequenced_assembly/${insert}_singularity`))

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_sand"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:soul_sand']),
        event.recipes.create.deploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:flint_and_steel']),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_soul_sand_singularity').loops(32).id('finality:sequenced_assembly/soul_sand_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_soil"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_soul_soil_singularity', ['kubejs:incomplete_soul_soil_singularity', 'minecraft:soul_soil']),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_soul_soil_singularity').loops(32).id('finality:sequenced_assembly/soul_soil_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobblestone"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', 'minecraft:cobblestone']),
        event.recipes.create.filling('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity')
    ]).transitionalItem('kubejs:incomplete_cobblestone_singularity').loops(256).id('finality:sequenced_assembly/cobblestone_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:framed_glass"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
        event.recipes.create.filling('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
        event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity')
    ]).transitionalItem('kubejs:incomplete_framed_glass_singularity').loops(32).id('finality:sequenced_assembly/framed_glass_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tinted_glass"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
        event.recipes.create.filling('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', Fluid.of('minecraft:lava', 250)]),
        event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
        event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity')
    ]).transitionalItem('kubejs:incomplete_tinted_glass_singularity').loops(32).id('finality:sequenced_assembly/tinted_glass_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}').withChance(75.0),
        Item.of('create:crushed_raw_gold', 16).withChance(25.0),
        Item.of('create:cogwheel', 32).withChance(25.0),
        Item.of('create:large_cogwheel', 8).withChance(25.0),
        '32x create:precision_mechanism'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:precision_mechanism']),
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:cogwheel']),
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:large_cogwheel']),
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'extendedcrafting:redstone_nugget']),
        event.recipes.create.pressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity')
    ]).transitionalItem('kubejs:incomplete_precision_mechanism_singularity').loops(16).id('finality:sequenced_assembly/precision_mechanism_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sturdy_sheet"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
        event.recipes.create.filling('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
        event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity')
    ]).transitionalItem('kubejs:incomplete_sturdy_sheet_singularity').loops(16).id('finality:sequenced_assembly/sturdy_sheet_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:builders_tea"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity')
    ]).transitionalItem('kubejs:incomplete_builders_tea_singularity').loops(32).id('finality:sequenced_assembly/builders_tea_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:chocolate"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.filling('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', Fluid.of('create:chocolate', 250)]),
        event.recipes.create.pressing('kubejs:incomplete_chocolate_singularity', 'kubejs:incomplete_chocolate_singularity')
    ]).transitionalItem('kubejs:incomplete_chocolate_singularity').loops(36).id('finality:sequenced_assembly/chocolate_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:end_crystal"}')
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_end_crystal_singularity', ['kubejs:incomplete_end_crystal_singularity', 'minecraft:end_crystal']),
        event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity')
    ]).transitionalItem('kubejs:incomplete_end_crystal_singularity').loops(9).id('finality:sequenced_assembly/end_crystal_singularity')

    // concrete singularities
    COLOR.forEach(color => event.recipes.create.sequenced_assembly([
        Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:concrete_${color}"}`)
    ], `minecraft:${color}_concrete`, [
        event.recipes.create.deploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
        event.recipes.create.filling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
        event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
        event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
        event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
    ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(128).id(`finality:sequenced_assembly/${color}_concrete_singularity`))

    // mechanical crafting singularities
    event.recipes.create.mechanical_crafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), [
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
    }).id('finality:mechanical_crafting/coal_singularity')

    event.recipes.create.mechanical_crafting(Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), [
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
    }).id('finality:mechanical_crafting/lapis_singularity')

    VANILLAMATS.forEach(vanilla => {
        event.recipes.create.mechanical_crafting(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${vanilla}"}`), [
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
        }).id(`finality:mechanical_crafting/${vanilla}_singularity`)
    })

    VANILLANOTSTANDARD.forEach(insert => {
        event.recipes.create.mechanical_crafting(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${insert}"}`), [
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
        }).id(`finality:mechanical_crafting/${insert}_singularity`)
    })

    CREATEITEMS.forEach(insert => {
        event.recipes.create.mechanical_crafting(Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:${insert}"}`), [
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
        }).id(`finality:mechanical_crafting/${insert}singularity`)
    })

    event.recipes.create.mechanical_crafting('kubejs:command_block', [
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

    event.recipes.create.mechanical_crafting('kubejs:chain_command_block', [
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

    event.recipes.create.mechanical_crafting('kubejs:repeating_command_block', [
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

    // mechanism crafting
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:terra_mechanism')
    ], 'create:precision_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', '#minecraft:leaves']),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobblestone"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coarse_dirt"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gunpowder"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}').weakNBT()])
    ]).transitionalItem('kubejs:incomplete_terra_mechanism').loops(1).id('finality:sequenced_assembly/terra_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:gluttony_mechanism')
    ], 'kubejs:terra_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'artifacts:eternal_steak']).keepHeldItem(),
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:honey"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:chocolate"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:builders_tea"}').weakNBT()])
    ]).transitionalItem('kubejs:incomplete_gluttony_mechanism').loops(1).id('finality:sequenced_assembly/gluttony_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:metallurgy_mechanism'),
    ], 'kubejs:gluttony_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:zinc"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:brass"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}').weakNBT()])
    ]).transitionalItem('kubejs:incomplete_metallurgy_mechanism').loops(1).id('finality:sequenced_assembly/metallurgy_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:lattice_mechanism')
    ], 'kubejs:metallurgy_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:amethyst"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:quartz"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:rose_quartz"}').weakNBT()])
    ]).transitionalItem('kubejs:incomplete_lattice_mechanism').loops(1).id('finality:sequenced_assembly/lattice_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:umbral_mechanism')
    ], 'kubejs:lattice_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'aquamirae:abyssal_amethyst']),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'cataclysm:abyssal_sacrifice']),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_sand"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_soil"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:end_crystal"}').weakNBT()])
    ]).transitionalItem('kubejs:incomplete_umbral_mechanism').loops(1).id('finality:sequenced_assembly/umbral_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:genesis_mechanism')
    ], 'kubejs:umbral_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:steam_engine']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:shaft']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:rotation_speed_controller']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:large_cogwheel']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}').weakNBT()]),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electron_tube"}').weakNBT()])
    ]).transitionalItem('kubejs:incomplete_genesis_mechanism').loops(1).id('finality:sequenced_assembly/genesis_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:ascendant_mechanism'),
    ], 'kubejs:genesis_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.pressing('kubejs:incomplete_ascendant_mechanism', 'kubejs:incomplete_ascendant_mechanism')
    ]).transitionalItem('kubejs:incomplete_ascendant_mechanism').loops(5).id('finality:sequenced_assembly/ascendant_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:entropy_mechanism').withChance(110.0),
        Item.of('minecraft:structure_void').withChance(50.0),
        Item.of('minecraft:debug_stick').withChance(50.0),
        Item.of('minecraft:jigsaw').withChance(50.0),
        Item.of('kubejs:zero').withChance(50.0),
        Item.of('kubejs:one').withChance(50.0),
        Item.of('kubejs:command_block').withChance(25.0),
        Item.of('kubejs:chain_command_block').withChance(25.0),
        Item.of('kubejs:repeating_command_block').withChance(25.0),
        'minecraft:grass_block'
    ], 'kubejs:ascendant_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:awakened_singularity_core']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'create:sequenced_gearshift']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'extendedcrafting:crystaltine_nugget']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:cpu_shape']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:blueprint_shape']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:emitter_shape'])
    ]).transitionalItem('kubejs:incomplete_entropy_mechanism').loops(3).id('finality:sequenced_assembly/entropy_mechanism_creation')
    console.log('Forcibly applying Ultimate Singularity recipe. If it is missing again, please report this to the GitHub Issue tracker, thank you.')
    event.recipes.extendedcrafting.shapeless_table('extendedcrafting:ultimate_singularity', [
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_red"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_green"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_blue"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_white"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_cyan"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_yellow"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_magenta"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_black"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_pink"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_orange"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_gray"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_brown"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_light_gray"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_light_blue"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_lime"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:concrete_purple"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gunpowder"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:builders_tea"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:ender_pearl"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tinted_glass"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electron_tube"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:chocolate"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sturdy_sheet"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:brass"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:andesite_alloy"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:end_crystal"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:amethyst"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coarse_dirt"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:blue_ice"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:zinc"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sea_lantern"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:honey"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:sand"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:precision_mechanism"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:rose_quartz"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:framed_glass"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_sand"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:red_sand"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:soul_soil"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:netherite"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:train_track"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:cobblestone"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:quartz"}').strongNBT(),
        Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}').strongNBT(),
    ]).merge({ tier: 4 }).id('kubejs:cucumber_library_failure')
})

ServerEvents.loaded(event => {
    event.server.scheduleInTicks(720, t => {
        event.server.tell([
            Component.of('-----------------------------------------------------\n').darkAqua(),
            Component.of('System: ').bold().green(),
            Component.of('This is a scheduled message that was delayed to let you know that the Ultimate Singularity recipe has been'),
            Component.of(' forcibly ').bold().red(),
            Component.of('applied.\n'),
            Component.of('\nIf it is ever '),
            Component.of('missing ').bold().red(),
            Component.of('again, please report this to the\n'),
            Component.of('[GitHub Issue tracker]')
                .bold().yellow()
                .hover('https://github.com/Project-Vyre/Finality-Genesis/issues')
                .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues'),
            Component.of(', thank you. - '),
            Component.of('CelestialAbyss').lightPurple(),
            Component.of('\n-----------------------------------------------------').darkAqua()
        ])
    })
})