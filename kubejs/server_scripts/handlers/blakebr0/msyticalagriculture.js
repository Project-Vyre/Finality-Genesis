// requires: mysticalagriculture
// requires: mysticalagradditions
// requires: kubejs_create

/**
 * @file Server handler for Mystical Agriculture.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
To-Do List

Rework essences, specifically Diamond, Brass, Steel and wherever applicable.
 - This is mostly due to the amount of difference and to encourage more automation with Create.

Rework recipes that require Supremium wherever applicable.
*/

/**
 * 
 * @param {*} event 
 * @param {string} seedInput 
 * @param {string} essenceOutput 
 */
function seedMillstoneReprocessing(event, seedInput, essenceOutput) {
    event.recipes.create.milling([
        `2x mysticalagriculture:${essenceOutput}_essence`,
        Item.of(`mysticalagriculture:${essenceOutput}_essence`).withChance(0.25)
    ], `mysticalagriculture:${seedInput}_seeds`).processingTime(100).id(`finality:milling/${seedInput}_seed_reprocessing`)
}

let SEED_PROCESSING_ELIGIBLE = [
    'air',
    'earth',
    'water',
    'fire',
    'stone',
    'dirt',
    'wood',
    'ice',
    'deepslate',
    'nature',
    'dye',
    'nether',
    'coal',
    'coral',
    'honey',
    'amethyst',
    'pig',
    'chicken',
    'cow',
    'sheep',
    'squid',
    'fish',
    'slime',
    'turtle',
    'limestone',
    'inferium',
    'iron',
    'copper',
    'nether_quartz',
    'glowstone',
    'redstone',
    'obsidian',
    'prismarine',
    'zombie',
    'skeleton',
    'creeper',
    'spider',
    'rabbit',
    'zinc',
    'brass',
    'gold',
    'lapis_lazuli',
    'end',
    'experience',
    'blaze',
    'ghast',
    'enderman',
    'diamond',
    'emerald',
    'netherite',
    'wither_skeleton',
    'nether_star',
    'dragon_egg'
]

let iumTiers = [
    'inferium',
    'prudentium',
    'tertium',
    'imperium',
    'supremium',
    'awakened_supremium'
]

/**
 * 
 * @param {*} event 
 * @param {Internal.ItemStack[]} outputs 
 * @param {Internal.ItemStack[]} inputs 
 * @param {string} id 
 */
function heatedEssenceCompacting(event, outputs, inputs, recipeId) {
    event.recipes.create.compacting(outputs, inputs).heated().id(`finality:mysticalagriculture/heated_compacting/${recipeId}`)
}

/**
 * 
 * @param {*} event 
 * @param {Internal.ItemStack[]} outputs 
 * @param {Internal.ItemStack[]} inputs 
 * @param {string} id 
 */
function superheatedEssenceCompacting(event, outputs, inputs, recipeId) {
    event.recipes.create.compacting(outputs, inputs).superheated().id(`finality:mysticalagriculture/superheated_compacting/${recipeId}`)
}

/**
 * 
 * @param {*} event 
 * @param {Internal.ItemStack[]} outputs 
 * @param {Internal.ItemStack[]} inputs 
 * @param {string} recipeId 
 */
function heatedEssenceMixing(event, outputs, inputs, recipeId) {
    event.recipes.create.mixing(outputs, inputs).heated().id(`finality:mysticalagriculture/heated_mixing/${recipeId}`)
}

/**
 * 
 * @param {*} event 
 * @param {Internal.ItemStack[]} outputs 
 * @param {Internal.ItemStack[]} inputs 
 * @param {string} recipeId 
 */
function superheatedEssenceMixing(event, outputs, inputs, recipeId) {
    event.recipes.create.mixing(outputs, inputs).superheated().id(`finality:mysticalagriculture/superheated_mixing/${recipeId}`)
}

/**
 * To-Do List
 * 
 * Rework essences, specifically Diamond, Brass, Steel and wherever applicable.
 *  - This is mostly due to the amount of difference and to encourage more automation with Create.
 */

ServerEvents.recipes(event => {
    // infusion essence
    event.recipes.create.mixing([
        Fluid.of('kubejs:inferior_infusion_essence', 250)
    ], [
        '4x mysticalagriculture:inferium_essence',
        '4x mysticalagriculture:prosperity_shard',
    ]).id('finality:mysta_infusion_crystal_essence')
    event.recipes.create.mixing([
        Fluid.of('kubejs:supreme_infusion_essence', 250)
    ], [
        '4x mysticalagriculture:supremium_essence',
        '4x mysticalagriculture:prosperity_shard',
    ]).id('finality:mysta_master_infusion_crystal_essence')
    // infusion crystals
    event.shaped('kubejs:denied_result', [
        'IPI',
        'PDP',
        'IPI'
    ], {
        I: 'mysticalagriculture:inferium_essence',
        P: 'mysticalagriculture:prosperity_shard',
        D: 'minecraft:diamond'
    }).id('mysticalagriculture:infusion_crystal')
    event.shaped('kubejs:denied_result', [
        'EPE',
        'PDP',
        'EPE'
    ], {
        E: 'mysticalagriculture:supremium_essence',
        P: 'mysticalagriculture:prosperity_shard',
        D: 'mysticalagriculture:supremium_gemstone'
    }).id('mysticalagriculture:master_infusion_crystal')
    event.recipes.create.filling('mysticalagriculture:infusion_crystal', [
        'minecraft:diamond',
        Fluid.of('kubejs:inferior_infusion_essence', 250)
    ]).id('finality:infusion_crystal')
    event.recipes.create.filling('mysticalagriculture:master_infusion_crystal', [
        'mysticalagriculture:supremium_gemstone',
        Fluid.of('kubejs:supreme_infusion_essence', 250)
    ]).id('finality:master_infusion_crystal')
    // infusion crystal draining
    event.recipes.create.emptying([
        Fluid.of('kubejs:infusion_energy', 1000),
        Item.of('mysticalagriculture:master_infusion_crystal')
    ], 'mysticalagriculture:master_infusion_crystal').id('finality:master_infusion_crystal_draining')
    // renewable prosperity shards
    event.recipes.create.crushing([
        Item.of('mysticalagriculture:prosperity_shard').withChance(0.25),
        Item.of('mysticalagriculture:prosperity_seed_base').withChance(0.009765625)
    ], 'minecraft:coarse_dirt').processingTime(250).id('finality:renew_prosperity')
    event.recipes.create.compacting([Fluid.of('minecraft:milk', 1000)], ['4x mysticalagriculture:cow_essence']).id('finality:milk_from_cow_essence')
    // redstone
    event.shaped('kubejs:denied_result', [
        'RRR',
        'R R',
        'RRR'
    ], {
        R: 'mysticalagriculture:redstone_essence'
    }).id('mysticalagriculture:essence/minecraft/redstone')
    event.recipes.create.mixing('8x minecraft:redstone', [
        '8x mysticalagriculture:redstone_essence',
        '8x create:cinder_flour',
        Fluid.of('create:potion', 1000, '{Bottle: "REGULAR", Potion: "minecraft:strength"}')
    ]).id('finality:mysticalagriculture/mixing/redstone')
    // fire essences
    event.shaped('16x minecraft:red_sand', [
        'DF',
        'FG'
    ], {
        D: 'mysticalagriculture:dirt_essence',
        F: 'mysticalagriculture:fire_essence',
        G: 'minecraft:gold_nugget'
    }).id('mysticalagriculture:essence/minecraft/red_sand')
    event.recipes.create.mixing('16x minecraft:red_sand', [
        '2x mysticalagriculture:dirt_essence',
        '2x mysticalagriculture:fire_essence',
        'minecraft:gold_nugget'
    ]).id('finality:mysta_mix_red_sand')
    event.shaped('4x minecraft:sand', [
        'DF',
        'FD'
    ], {
        D: 'mysticalagriculture:dirt_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/sand')
    event.recipes.create.mixing('16x minecraft:sand', [
        '2x mysticalagriculture:dirt_essence',
        '2x mysticalagriculture:fire_essence'
    ]).id('finality:mysta_mix_sand')
    event.shaped('8x minecraft:soul_sand', [
        'NNN',
        'NFN',
        'NNN'
    ], {
        N: 'mysticalagriculture:nether_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/soul_sand')
    event.recipes.create.mixing('16x minecraft:soul_sand', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:fire_essence'
    ]).id('finality:mysta_mix_soul_sand')
    event.recipes.create.compacting([Fluid.of('minecraft:lava', 1000)], [
        '9x mysticalagriculture:fire_essence'
    ]).id('finality:mysta_compacting_lava')
    event.shaped('12x minecraft:tuff', [
        ' S ',
        'SFS',
        ' S '
    ], {
        S: 'mysticalagriculture:stone_essence',
        F: 'mysticalagriculture:fire_essence'
    }).id('mysticalagriculture:essence/minecraft/tuff')
    event.recipes.create.compacting('12x minecraft:tuff', [
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
    event.recipes.create.mixing('8x minecraft:flint', [
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
    event.recipes.create.mixing('16x minecraft:soul_soil', [
        '8x mysticalagriculture:nether_essence',
        'mysticalagriculture:earth_essence'
    ]).id('finality:mysta_mixing_soul_soil')
    // water essence related
    event.recipes.create.mixing('12x minecraft:mud', [
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
    event.recipes.create.compacting('16x minecraft:cobblestone', [
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
    event.recipes.create.compacting('18x minecraft:stone', [
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
    event.recipes.create.compacting('16x minecraft:andesite', [
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
    event.recipes.create.compacting('16x minecraft:diorite', [
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
    event.recipes.create.compacting('16x minecraft:granite', [
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
    event.recipes.create.compacting(Item.of('minecraft:dripstone_block', 16), [
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
    event.recipes.create.compacting(Item.of('minecraft:calcite', 16), [
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
    event.recipes.create.compacting(Item.of('minecraft:blackstone', 24), [
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
    event.recipes.create.mixing(Item.of('minecraft:gravel', 16), [
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
    event.recipes.create.compacting(Item.of('create:asurine', 16), [
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
    event.recipes.create.compacting(Item.of('create:crimsite', 16), [
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
    event.recipes.create.compacting(Item.of('create:ochrum', 16), [
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
    event.recipes.create.compacting(Item.of('create:veridium', 16), [
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
    event.recipes.create.mixing('4x minecraft:heart_of_the_sea', [
        'minecraft:nautilus_shell',
        '4x mysticalagriculture:diamond_essence',
        '4x mysticalagriculture:prismarine_essence',
        '4x mysticalagriculture:squid_essence'
    ]).id('finality:mysta_mixing_sea_heart')
    event.recipes.create.mechanical_crafting('4x minecraft:heart_of_the_sea', [
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
    event.shaped('minecraft:honey_bottle', [
        'HB'
    ], {
        H: 'mysticalagriculture:honey_essence',
        B: 'minecraft:glass_bottle'
    }).id('mysticalagriculture:essence/minecraft/honey_bottle')
    event.shaped('minecraft:honey_bottle', [
        'H',
        'B'
    ], {
        H: 'mysticalagriculture:honey_essence',
        B: 'minecraft:glass_bottle'
    }).id('finality:mysticalagriculture/honey_bottle_vertical')
    event.shaped('6x minecraft:honeycomb', [
        'HHH'
    ], {
        H: 'mysticalagriculture:honey_essence'
    }).id('mysticalagriculture:essence/minecraft/honeycomb')
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
    event.shaped('kubejs:removed_item', [
        'ISI',
        'YMY',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'mysticalagriculture:soulium_ingot',
        Y: '#mysticalagriculture:diamond_scythes',
        M: 'mysticalagriculture:machine_frame',
    }).id('mysticalagriculture:harvester')
    // soulstone and soulium related
    event.recipes.create.mixing('mysticalagriculture:soulstone', [
        'minecraft:soul_sand',
        'minecraft:stone',
        'create:cinder_flour',
        Fluid.of('kubejs:shimmer', 250)
    ]).id('finality:mixing/soulstone_renewal')
    event.recipes.create.compacting('mysticalagriculture:soulium_ore', [
        'mysticalagriculture:soulstone',
        Fluid.of('kubejs:shimmer', 750)
    ]).id('finality:compacting/soulium_ore_renewal')
    // miscellaneous
    event.recipes.create.mixing(Item.of('mysticalagriculture:mystical_fertilizer', 4), [
        Item.of('mysticalagriculture:inferium_essence', 4),
        Item.of('minecraft:bone_meal', 4),
        'minecraft:diamond'
    ]).id('finality:mysta_mystical_fertilizer')
    event.recipes.create.mixing(Item.of('mysticalagriculture:mystical_fertilizer', 8), [
        '4x mysticalagriculture:inferium_essence',
        '4x mysticalagriculture:fertilized_essence',
        'minecraft:diamond'
    ]).id('finality:mysta_mystical_fertilizer_better_eff')
    // seed reprocessing via millstone
    event.remove({ type: 'mysticalagriculture:reprocessor' })
    SEED_PROCESSING_ELIGIBLE.forEach(element => {
        seedMillstoneReprocessing(event, element, element)
    })
    if (Platform.isLoaded('ad_astra')) {
        event.recipes.create.milling([
            '2x mysticalagriculture:steel_essence',
            Item.of('mysticalagriculture:steel_essence').withChance(0.25)
        ], 'mysticalagriculture:steel_seeds').processingTime(100).id('finality:milling/steel_seed_reprocessing')
    }
    event.replaceOutput(
        { output: 'mysticalagriculture:basic_reprocessor' },
        'mysticalagriculture:basic_reprocessor',
        'kubejs:removed_item'
    )
    event.custom({
        "type": "mysticalagriculture:awakening",
        "essences": {
            "air": 40,
            "earth": 40,
            "water": 40,
            "fire": 40
        },
        "input": {
            "item": "mysticalagriculture:supremium_reprocessor"
        },
        "ingredients": [
            {
                "item": "mysticalagriculture:awakened_supremium_gemstone"
            },
            {
                "item": "mysticalagriculture:awakened_supremium_ingot"
            },
            {
                "item": "mysticalagriculture:awakened_supremium_gemstone"
            },
            {
                "item": "mysticalagriculture:awakened_supremium_ingot"
            }
        ],
        "result": {
            "item": "kubejs:removed_item"
        }
    }).id('mysticalagriculture:awakened_supremium_reprocessor')
    iumTiers.forEach(tier => {
        event.replaceOutput(
            { output: `mysticalagriculture:${tier}_reprocessor` },
            `mysticalagriculture:${tier}_reprocessor`,
            'kubejs:removed_item'
        )
    })
    // full release 0.2 changes
    event.remove([
        { id: 'mysticalagriculture:essence/minecraft/iron_ingot' },
        { id: 'mysticalagriculture:essence/minecraft/copper_ingot' },
        { id: 'mysticalagriculture:essence/common/zinc_ingot' },
        { id: 'mysticalagriculture:essence/common/brass_ingot' },
        { id: 'mysticalagriculture:essence/common/steel_ingot' },
        { id: 'mysticalagriculture:essence/minecraft/diamond' },
        { id: 'mysticalagriculture:essence/minecraft/netherite_ingot' }
    ])
    /**
     * Inferium Materials
     */
    /**
     * Supremium Materials and Items
     */
    event.shapeless('mysticalagriculture:supremium_ingot', [
        'mysticalagriculture:prosperity_ingot',
        '2x minecraft:netherite_ingot',
        '4x mysticalagriculture:supremium_essence'
    ]).id('mysticalagriculture:supremium_ingot')
    event.shapeless('mysticalagriculture:supremium_gemstone', [
        'mysticalagriculture:prosperity_gemstone',
        '4x mysticalagriculture:supremium_essence'
    ]).id('mysticalagriculture:supremium_gemstone')
    /**
     * Awakened Supremium Materials
     */
    event.shapeless('mysticalagriculture:awakened_supremium_ingot', [
        'mysticalagriculture:prosperity_ingot',
        '2x minecraft:netherite_ingot',
        '4x mysticalagriculture:awakened_supremium_essence'
    ]).id('mysticalagriculture:awakened_supremium_ingot')
    event.shapeless('mysticalagriculture:awakened_supremium_gemstone', [
        'mysticalagriculture:prosperity_gemstone',
        '4x mysticalagriculture:awakened_supremium_essence'
    ]).id('mysticalagriculture:awakened_supremium_gemstone')

    if (Platform.isLoaded('bhc')) {
        event.shaped('bhc:wither_bone', [
            'WWW',
            'W W',
            'WWW'
        ], {
            W: 'mysticalagriculture:wither_skeleton_essence'
        }).id('finality:bhc/shaped/wither_bone')
    }
    if (Platform.isLoaded('architects_palette')) {
        event.shaped('architects_palette:withered_bone', [
            'WWW',
            'WBW',
            'WWW'
        ], {
            W: 'mysticalagriculture:wither_skeleton_essence',
            B: 'minecraft:bone'
        }).id('finality:architects_paltte/shaped/wither_bone')
    }
    // heated essence compacting
    // zinc ingot creation
    heatedEssenceCompacting(event, [
        'minecraft:iron_ingot'
    ], [
        '9x mysticalagriculture:iron_essence'
    ], 'iron_ingot')
    heatedEssenceCompacting(event, [
        'minecraft:copper_ingot'
    ], [
        '9x mysticalagriculture:copper_essence'
    ], 'copper_ingot')
    heatedEssenceCompacting(event, [
        'create:zinc_ingot'
    ], [
        '9x mysticalagriculture:zinc_essence'
    ], 'zinc_ingot')
    // brass ingot creation
    heatedEssenceCompacting(event, [
        'create:brass_ingot'
    ], [
        '9x mysticalagriculture:brass_essence'
    ], 'brass_ingot')
    if (Platform.isLoaded('ad_astra')) {
        heatedEssenceCompacting(event, [
            'ad_astra:steel_ingot'
        ], [
            '9x mysticalagriculture:steel_essence'
        ], 'ad_astra/steel_ingot')
    }
    // superheated essence compacting
    // diamond essence
    superheatedEssenceCompacting(event, [
        'minecraft:diamond'
    ], [
        '9x mysticalagriculture:diamond_essence',
        Fluid.of('kubejs:infusion_energy', 1000)
    ], 'diamond')
    superheatedEssenceCompacting(event, [
        'minecraft:netherite_ingot',
        Item.of('minecraft:netherite_scrap').withChance(0.10)
    ], [
        '9x mysticalagriculture:netherite_essence',
        Fluid.of('kubejs:infusion_energy', 1000)
    ], 'netherite_ingot')
    /**
     * Infusion Energy Usage
     */

})