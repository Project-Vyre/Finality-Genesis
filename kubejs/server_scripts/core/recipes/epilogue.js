// requires: kubejs_create
// requires: aquamirae
// requires: cataclysm

let SAND = ['sand', 'red_sand']
let VANILLAMATS = ['amethyst', 'copper', 'iron', 'redstone', 'gold', 'diamond', 'emerald', 'quartz', 'netherite', 'honey']
let VANILLANOTSTANDARD = ['ender_pearl', 'gunpowder', 'sea_lantern', 'glowstone']
let CREATEITEMS = ['electron_tube', 'rose_quartz']
let CREATEVALUED = ['brass', 'zinc']

ServerEvents.recipes(event => {
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
        'kubejs:andesite_alloy_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity', 'create:andesite_alloy_block']),
        event.recipes.create.pressing(['kubejs:incomplete_andesite_alloy_singularity'], ['kubejs:incomplete_andesite_alloy_singularity'])
    ]).transitionalItem('kubejs:incomplete_andesite_alloy_singularity').loops(256).id('finality:sequenced_assembly/andesite_alloy_singularity')
    for (let i = 0; i < CREATEVALUED.length; i++) {
        let valued = CREATEVALUED[i];
        event.recipes.create.sequenced_assembly([
            'kubejs:' + valued + '_singularity'
        ], 'kubejs:awakened_singularity_core', [
            event.recipes.create.deploying([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`, `create:${valued}_block`]),
            event.recipes.create.pressing([`kubejs:incomplete_${valued}_singularity`], [`kubejs:incomplete_${valued}_singularity`])
        ]).transitionalItem(`kubejs:incomplete_${valued}_singularity`).loops(256).id(`finality:sequenced_assembly/${valued}_singularity`)
    }
    event.recipes.create.sequenced_assembly([
        'kubejs:track_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity', 'create:track']),
        event.recipes.create.pressing(['kubejs:incomplete_track_singularity'], ['kubejs:incomplete_track_singularity'])
    ]).transitionalItem('kubejs:incomplete_track_singularity').loops(256).id('finality:sequenced_assembly/track_singularity')

    // sequenced assembly singularities
    event.recipes.create.sequenced_assembly([
        'kubejs:blue_ice_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', 'minecraft:blue_ice']),
        event.recipes.create.filling(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
        event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity']),
        event.recipes.create.pressing(['kubejs:incomplete_blue_ice_singularity'], ['kubejs:incomplete_blue_ice_singularity'])
    ]).transitionalItem('kubejs:incomplete_blue_ice_singularity').loops(16).id('finality:sequenced_assembly/blue_ice_singularity')
    event.recipes.create.emptying([
        Fluid.of('kubejs:condensed_universal_order', 500),
        'kubejs:awakened_singularity_core'
    ], 'kubejs:blue_ice_singularity').id('finality:emptying/condensed_universal_order')

    event.recipes.create.sequenced_assembly([
        'kubejs:coarse_dirt_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', 'minecraft:coarse_dirt']),
        event.recipes.create.filling('kubejs:incomplete_coarse_dirt_singularity', ['kubejs:incomplete_coarse_dirt_singularity', Fluid.of('minecraft:water', 25)]),
        event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_coarse_dirt_singularity', 'kubejs:incomplete_coarse_dirt_singularity')
    ]).transitionalItem('kubejs:incomplete_coarse_dirt_singularity').loops(16).id('finality:sequenced_assembly/coarse_dirt_singularity')

    for (let i = 0; i < SAND.length; i++) {
        let insert = SAND[i];
        event.recipes.create.sequenced_assembly([
            'kubejs:' + insert + '_singularity'
        ], 'kubejs:awakened_singularity_core', [
            event.recipes.create.deploying(`kubejs:incomplete_${insert}_singularity`, [`kubejs:incomplete_${insert}_singularity`, `minecraft:${insert}`]),
            event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
            event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
            event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`),
            event.recipes.create.pressing(`kubejs:incomplete_${insert}_singularity`, `kubejs:incomplete_${insert}_singularity`)
        ]).transitionalItem(`kubejs:incomplete_${insert}_singularity`).loops(16).id(`finality:sequenced_assembly/${insert}_singularity`)
    }

    event.recipes.create.sequenced_assembly([
        'kubejs:soul_sand_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:soul_sand']),
        event.recipes.create.deploying('kubejs:incomplete_soul_sand_singularity', ['kubejs:incomplete_soul_sand_singularity', 'minecraft:flint_and_steel']),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_soul_sand_singularity').loops(32).id('finality:sequenced_assembly/soul_sand_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:soul_soil_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_soul_soil_singularity', ['kubejs:incomplete_soul_soil_singularity', 'minecraft:soul_soil']),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20),
        event.recipes.create.pressing('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity'),
        event.recipes.create.cutting('kubejs:incomplete_soul_sand_singularity', 'kubejs:incomplete_soul_sand_singularity').processingTime(20)
    ]).transitionalItem('kubejs:incomplete_soul_soil_singularity').loops(32).id('finality:sequenced_assembly/soul_soil_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:cobblestone_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', 'minecraft:cobblestone']),
        event.recipes.create.filling('kubejs:incomplete_cobblestone_singularity', ['kubejs:incomplete_cobblestone_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_cobblestone_singularity', 'kubejs:incomplete_cobblestone_singularity')
    ]).transitionalItem('kubejs:incomplete_cobblestone_singularity').loops(256).id('finality:sequenced_assembly/cobblestone_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:framed_glass_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
        event.recipes.create.filling('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.create.deploying('kubejs:incomplete_framed_glass_singularity', ['kubejs:incomplete_framed_glass_singularity', 'create:framed_glass']),
        event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_framed_glass_singularity', 'kubejs:incomplete_framed_glass_singularity')
    ]).transitionalItem('kubejs:incomplete_framed_glass_singularity').loops(32).id('finality:sequenced_assembly/framed_glass_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:tinted_glass_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
        event.recipes.create.filling('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', Fluid.of('minecraft:lava', 250)]),
        event.recipes.create.deploying('kubejs:incomplete_tinted_glass_singularity', ['kubejs:incomplete_tinted_glass_singularity', 'minecraft:tinted_glass']),
        event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_tinted_glass_singularity', 'kubejs:incomplete_tinted_glass_singularity')
    ]).transitionalItem('kubejs:incomplete_tinted_glass_singularity').loops(32).id('finality:sequenced_assembly/tinted_glass_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:precision_mechanism_singularity').withChance(75.0),
        Item.of('create:crushed_raw_gold', 16).withChance(25.0),
        Item.of('create:cogwheel', 32).withChance(25.0),
        Item.of('create:large_cogwheel', 8).withChance(25.0),
        '32x create:precision_mechanism'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:precision_mechanism']),
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:cogwheel']),
        event.recipes.create.deploying('kubejs:incomplete_precision_mechanism_singularity', ['kubejs:incomplete_precision_mechanism_singularity', 'create:large_cogwheel']),
        event.recipes.create.pressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_precision_mechanism_singularity', 'kubejs:incomplete_precision_mechanism_singularity')
    ]).transitionalItem('kubejs:incomplete_precision_mechanism_singularity').loops(16).id('finality:sequenced_assembly/precision_mechanism_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:sturdy_sheet_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
        event.recipes.create.filling('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', Fluid.of('minecraft:lava', 25)]),
        event.recipes.create.deploying('kubejs:incomplete_sturdy_sheet_singularity', ['kubejs:incomplete_sturdy_sheet_singularity', 'create:sturdy_sheet']),
        event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_sturdy_sheet_singularity', 'kubejs:incomplete_sturdy_sheet_singularity')
    ]).transitionalItem('kubejs:incomplete_sturdy_sheet_singularity').loops(16).id('finality:sequenced_assembly/sturdy_sheet_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:builders_tea_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.filling('kubejs:incomplete_builders_tea_singularity', ['kubejs:incomplete_builders_tea_singularity', Fluid.of('create:tea', 250)]),
        event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_builders_tea_singularity', 'kubejs:incomplete_builders_tea_singularity')
    ]).transitionalItem('kubejs:incomplete_builders_tea_singularity').loops(32).id('finality:sequenced_assembly/builders_tea_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:chocolate_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.deploying('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', 'create:bar_of_chocolate']),
        event.recipes.create.filling('kubejs:incomplete_chocolate_singularity', ['kubejs:incomplete_chocolate_singularity', Fluid.of('create:chocolate', 250)]),
        event.recipes.create.pressing('kubejs:incomplete_chocolate_singularity', 'kubejs:incomplete_chocolate_singularity')
    ]).transitionalItem('kubejs:incomplete_chocolate_singularity').loops(36).id('finality:sequenced_assembly/chocolate_singularity')

    event.recipes.create.sequenced_assembly([
        'kubejs:end_crystal_singularity'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_end_crystal_singularity', ['kubejs:incomplete_end_crystal_singularity', 'minecraft:end_crystal']),
        event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_end_crystal_singularity', 'kubejs:incomplete_end_crystal_singularity')
    ]).transitionalItem('kubejs:incomplete_end_crystal_singularity').loops(9).id('finality:sequenced_assembly/end_crystal_singularity')

    // concrete singularities
    for (let i = 0; i < COLOR.length; i++) {
        let color = COLOR[i];
        event.recipes.create.sequenced_assembly([
            'kubejs:concrete_' + color + '_singularity'
        ], `minecraft:${color}_concrete`, [
            event.recipes.create.deploying(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, `minecraft:${color}_concrete_powder`]),
            event.recipes.create.filling(`kubejs:incomplete_concrete_${color}_singularity`, [`kubejs:incomplete_concrete_${color}_singularity`, Fluid.of('minecraft:water', 500)]),
            event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
            event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`),
            event.recipes.create.pressing(`kubejs:incomplete_concrete_${color}_singularity`, `kubejs:incomplete_concrete_${color}_singularity`)
        ]).transitionalItem(`kubejs:incomplete_concrete_${color}_singularity`).loops(128).id(`finality:sequenced_assembly/${color}_concrete_singularity`)
    }

    // mechanical crafting singularities
    event.recipes.create.mechanical_crafting('kubejs:coal_singularity', [
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

    event.recipes.create.mechanical_crafting('kubejs:lapis_lazuli_singularity', [
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

    for (let i = 0; i < VANILLAMATS.length; i++) {
        let vanilla = VANILLAMATS[i];
        event.recipes.create.mechanical_crafting('kubejs:' + vanilla + '_singularity', [
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
    }

    let vnonstan = VANILLANOTSTANDARD.length;
    for (let i = 0; i < vnonstan; i++) {
        let insert = VANILLANOTSTANDARD[i];
        event.recipes.create.mechanical_crafting('kubejs:' + insert + '_singularity', [
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
    }

    let x = 0, l = CREATEITEMS.length;
    let insert;
    while (x < l) {
        insert = CREATEITEMS[x];
        ++x;
        event.recipes.create.mechanical_crafting('kubejs:' + insert + '_singularity', [
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
    }

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:potion_base_singularity').withChance(25.0),
        Item.of('kubejs:errored_result').withChance(25.0),
        Item.of('minecraft:potion', '{Potion:"minecraft:mundane"}').withChance(25.0),
        Item.of('minecraft:potion', '{Potion:"minecraft:thick"}').withChance(25.0),
        Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}').withChance(25.0)
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.filling('kubejs:incomplete_potion_base_singularity', [
            'kubejs:incomplete_potion_base_singularity',
            Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}')
        ]),
        event.recipes.create.filling('kubejs:incomplete_potion_base_singularity', [
            'kubejs:incomplete_potion_base_singularity',
            Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:thick"}')
        ]),
        event.recipes.create.filling('kubejs:incomplete_potion_base_singularity', [
            'kubejs:incomplete_potion_base_singularity',
            Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:awkward"}')
        ])
    ]).transitionalItem('kubejs:incomplete_potion_base_singularity').loops(12).id('finality:sequenced_assembly/potion_base_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:blaze_cake_singularity').withChance(25.0),
        Item.of('kubejs:errored_result').withChance(75.0),
        'create:cinder_flour',
        'minecraft:egg'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.pressing('kubejs:incomplete_blaze_cake_singularity', 'kubejs:incomplete_blaze_cake_singularity')
    ]).transitionalItem('kubejs:incomplete_blaze_cake_singularity').loops(32).id('finality:sequenced_assembly/blaze_cake_singularity')

    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:salt_singularity').withChance(25.0),
        Item.of('salt:salt_block').withChance(25.0),
        Item.of('salt:salt').withChance(25.0),
        Item.of('minecraft:dripstone_block').withChance(25.0),
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_salt_singularity', ['kubejs:incomplete_salt_singularity', 'salt:salt_block']),
        event.recipes.create.pressing('kubejs:incomplete_salt_singularity', 'kubejs:incomplete_salt_singularity'),
        event.recipes.create.pressing('kubejs:incomplete_salt_singularity', 'kubejs:incomplete_salt_singularity')
    ]).transitionalItem('kubejs:incomplete_salt_singularity').loops(128).id('finality:sequenced_assembly/salt_singularity')



    // mechanism crafting
    event.recipes.create.sequenced_assembly([
        'kubejs:terra_mechanism'
    ], 'create:precision_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', '#minecraft:leaves']),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:cobblestone_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:coarse_dirt_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:gunpowder_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_terra_mechanism', ['kubejs:incomplete_terra_mechanism', 'kubejs:coal_singularity'])
    ]).transitionalItem('kubejs:incomplete_terra_mechanism').loops(1).id('finality:sequenced_assembly/terra_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        'kubejs:gluttony_mechanism'
    ], 'kubejs:terra_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'artifacts:eternal_steak']).keepHeldItem(),
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:honey_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:chocolate_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_gluttony_mechanism', ['kubejs:incomplete_gluttony_mechanism', 'kubejs:builders_tea_singularity'])
    ]).transitionalItem('kubejs:incomplete_gluttony_mechanism').loops(1).id('finality:sequenced_assembly/gluttony_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        'kubejs:metallurgy_mechanism'
    ], 'kubejs:gluttony_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:iron_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:andesite_alloy_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:copper_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:zinc_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:brass_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:gold_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_metallurgy_mechanism', ['kubejs:incomplete_metallurgy_mechanism', 'kubejs:netherite_singularity'])
    ]).transitionalItem('kubejs:incomplete_metallurgy_mechanism').loops(1).id('finality:sequenced_assembly/metallurgy_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        'kubejs:lattice_mechanism'
    ], 'kubejs:metallurgy_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:amethyst_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:quartz_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:diamond_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:emerald_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_lattice_mechanism', ['kubejs:incomplete_lattice_mechanism', 'kubejs:rose_quartz_singularity'])
    ]).transitionalItem('kubejs:incomplete_lattice_mechanism').loops(1).id('finality:sequenced_assembly/lattice_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        'kubejs:umbral_mechanism'
    ], 'kubejs:lattice_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'aquamirae:abyssal_amethyst']),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'cataclysm:abyssal_sacrifice']),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:soul_sand_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:soul_soil_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_umbral_mechanism', ['kubejs:incomplete_umbral_mechanism', 'kubejs:end_crystal_singularity'])
    ]).transitionalItem('kubejs:incomplete_umbral_mechanism').loops(1).id('finality:sequenced_assembly/umbral_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        'kubejs:genesis_mechanism'
    ], 'kubejs:umbral_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:steam_engine']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:shaft']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:rotation_speed_controller']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'create:large_cogwheel']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'kubejs:precision_mechanism_singularity']),
        event.recipes.create.deploying('kubejs:incomplete_genesis_mechanism', ['kubejs:incomplete_genesis_mechanism', 'kubejs:electron_tube_singularity'])
    ]).transitionalItem('kubejs:incomplete_genesis_mechanism').loops(1).id('finality:sequenced_assembly/genesis_mechanism_creation')

    event.recipes.create.sequenced_assembly([
        'kubejs:ascendant_mechanism'
    ], 'kubejs:genesis_mechanism', [
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.deploying('kubejs:incomplete_ascendant_mechanism', ['kubejs:incomplete_ascendant_mechanism', 'create:experience_block']),
        event.recipes.create.pressing('kubejs:incomplete_ascendant_mechanism', 'kubejs:incomplete_ascendant_mechanism')
    ]).transitionalItem('kubejs:incomplete_ascendant_mechanism').loops(5).id('finality:sequenced_assembly/ascendant_mechanism_creation')
    /*
    let RNG1 = 0
    let RNG2 = 0
    let RNG3 = 0
    let RNG4 = 0
    let RNG5 = 0
    enRI1 = [
        'create:sequenced_gearshift',
    ]
    enRI2 = [
        'extendedcrafting:crystaltine_nugget'
    ]
    enRI3 = [
        'kubejs:cpu_shape'
    ]
    enRI4 = [
        'kubejs:blueprint_shape'
    ]
    enRI5 = [
        []
    ]
    RNG1 = Utils.random.nextInt(0, enRI1.length - 1)
    RNG2 = Utils.random.nextInt(0, enRI2.length - 1)
    RNG3 = Utils.random.nextInt(0, enRI3.length - 1)
    RNG4 = Utils.random.nextInt(0, enRI4.length - 1)
    RNG5 = Utils.random.nextInt(0, enRI5.length - 1)
    event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', enRI1[RNG1]])
    */
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:entropy_mechanism').withChance(80.0),
        Item.of('kubejs:errored_result').withChance(0.75),
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
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:qubit']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:cpu_shape']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:blueprint_shape']),
        event.recipes.create.deploying('kubejs:incomplete_entropy_mechanism', ['kubejs:incomplete_entropy_mechanism', 'kubejs:emitter_shape'])
    ]).transitionalItem('kubejs:incomplete_entropy_mechanism').loops(3).id('finality:sequenced_assembly/entropy_mechanism_creation')
})