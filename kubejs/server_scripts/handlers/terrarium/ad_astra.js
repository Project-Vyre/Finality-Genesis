// requires: ad_astra
// requires: kubejs_create
// requires: lootjs
// requires: createaddition
// requires: extendedcrafting
// and kjs 119 and above

/**
 * @file Server handler for Ad Astra.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * To-Do List
 * 
 * Crushing recipe corrections.
 */
let adAstraOreBlocks = [
    'ad_astra:moon_cheese_ore',
    'ad_astra:moon_desh_ore',
    'ad_astra:deepslate_desh_ore',
    'ad_astra:moon_iron_ore',
    'ad_astra:moon_ice_shard_ore',
    'ad_astra:deepslate_ice_shard_ore',
    'ad_astra:mars_iron_ore',
    'ad_astra:mars_ostrum_ore',
    'ad_astra:deepslate_ostrum_ore',
    'ad_astra:mars_ice_shard_ore',
    'ad_astra:venus_gold_ore',
    'ad_astra:venus_calorite_ore',
    'ad_astra:deepslate_calorite_ore',
    'ad_astra:mercury_iron_ore',
    'ad_astra:glacio_ice_shard_ore',
    'ad_astra:glacio_iron_ore',
    'ad_astra:glacio_copper_ore'
]

ServerEvents.recipes(event => {
    /**
     * THIS IS FOR YOUR OWN GOOD SO YOU DON'T WASTE ADDITIONAL LOOT!
     */
    adAstraOreBlocks.forEach(insert => { // why can you even smelt and blast these ores? YOU LITERALLY LOSE SO MUCH!
        event.remove([
            {
                mod: 'ad_astra',
                type: 'minecraft:smelting',
                input: insert
            },
            {
                mod: 'ad_astra',
                type: 'minecraft:blasting',
                input: insert
            },
            {
                type: 'create:crushing',
                input: insert
            }
        ])
    });
    event.recipes.create.mixing(Fluid.of('ad_astra:oil', 250), [
        '2x minecraft:coal',
        Fluid.of('createaddition:seed_oil', 250)
    ]).id('finality:seed_oil_conversion');
    console.log('Adjusting Create Ad Astra compatibility recipes...');
    /**
     * To-Do List
     * 
     * Correct recipe IDs so they don't use Create's namespace
     * Match with Create crushing schema for stone and deepslate variants
     */
    /**
     * Ad Astra Ore Processing
     */
    event.recipes.create.crushing([
        'ad_astra:cheese',
        Item.of('ad_astra:cheese').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:moon_cobblestone').withChance(0.12)
    ], 'ad_astra:moon_cheese_ore').processingTime(250).id('finality:ad_astra/crushing/moon_cheese_ore');
    // Desh Ore Processing
    event.recipes.create.crushing([
        'ad_astra:raw_desh',
        Item.of('ad_astra:raw_desh').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:moon_cobblestone').withChance(0.12)
    ], 'ad_astra:moon_desh_ore').processingTime(250).id('finality:ad_astra/crushing/moon_desh_ore');
    event.recipes.create.crushing([
        '2x ad_astra:raw_desh',
        Item.of('ad_astra:raw_desh').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
    ], 'ad_astra:deepslate_desh_ore').processingTime(350).id('finality:ad_astra/crushing/deepslate_desh_ore');
    // Ice Shard Ore Processing
    event.recipes.create.crushing([
        'ad_astra:ice_shard',
        Item.of('ad_astra:ice_shard').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:moon_cobblestone').withChance(0.12)
    ], 'ad_astra:moon_ice_shard_ore').processingTime(250).id('finality:ad_astra/crushing/moon_ice_shard_ore');
    event.recipes.create.crushing([
        '2x ad_astra:ice_shard',
        Item.of('ad_astra:ice_shard').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
    ], 'ad_astra:deepslate_ice_shard_ore').processingTime(350).id('finality:ad_astra/crushing/deepslate_ice_shard');
    event.recipes.create.crushing([
        'ad_astra:ice_shard',
        Item.of('ad_astra:ice_shard').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:mars_cobblestone').withChance(0.12)
    ], 'ad_astra:mars_ice_shard_ore').processingTime(250).id('finality:ad_astra/crushing/mars_ice_shard_ore');
    event.recipes.create.crushing([
        'ad_astra:ice_shard',
        Item.of('ad_astra:ice_shard').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:glacio_cobblestone').withChance(0.12)
    ], 'ad_astra:glacio_ice_shard_ore').processingTime(250).id('finality:ad_astra/crushing/glacio_ice_shard_ore');
    // Calorite Ore Processing
    event.recipes.create.crushing([
        'ad_astra:raw_calorite',
        Item.of('ad_astra:raw_calorite').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:venus_cobblestone').withChance(0.12)
    ], 'ad_astra:venus_calorite_ore').processingTime(250).id('finality:ad_astra/crushing/venus_calorite_ore');
    event.recipes.create.crushing([
        '2x ad_astra:raw_calorite',
        Item.of('ad_astra:raw_calorite').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
    ], 'ad_astra:deepslate_calorite_ore').processingTime(350).id('finality:ad_astra/crushing/deepslate_calorite_ore');
    // Ostrum Ore Processing
    event.recipes.create.crushing([
        'ad_astra:raw_ostrum',
        Item.of('ad_astra:raw_ostrum').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:mars_cobblestone').withChance(0.12)
    ], 'ad_astra:mars_ostrum_ore').processingTime(250)
        .id('finality:ad_astra/crushing/mars_ostrum_ore');
    event.recipes.create.crushing([
        '2x ad_astra:raw_ostrum',
        Item.of('ad_astra:raw_ostrum').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
    ], 'ad_astra:deepslate_ostrum_ore').processingTime(350).id('finality:ad_astra/crushing/deepslate_ostrum_ore');
    /**
     * Space Minecraft Ore Processing
     */
    // Space Coal Ore Processing
    event.recipes.create.crushing([
        'minecraft:coal',
        Item.of('minecraft:coal').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:venus_cobblestone').withChance(0.12)
    ], 'ad_astra:venus_coal_ore').processingTime(250).id('finality:ad_astra/crushing/venus_coal_ore');
    event.recipes.create.crushing([
        'minecraft:coal',
        Item.of('minecraft:coal').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:glacio_cobblestone').withChance(0.12)
    ], 'ad_astra:glacio_coal_ore').processingTime(250).id('finality:ad_astra/crushing/glacio_coal_ore');
    // Space Copper Ore Processing
    event.recipes.create.crushing([
        '5x create:crushed_raw_copper',
        Item.of('create:crushed_raw_copper').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:glacio_cobblestone').withChance(0.12)
    ], 'ad_astra:glacio_copper_ore').processingTime(250).id('finality:ad_astra/crushing/glacio_copper_ore');
    // Space Iron Ore Processing
    event.recipes.create.crushing([
        'create:crushed_raw_iron',
        Item.of('create:crushed_raw_iron').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:moon_cobblestone').withChance(0.12)
    ], 'ad_astra:moon_iron_ore').processingTime(250).id('finality:ad_astra/crushing/moon_iron_ore');
    event.recipes.create.crushing([
        'create:crushed_raw_iron',
        Item.of('create:crushed_raw_iron').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:mars_cobblestone').withChance(0.12)
    ], 'ad_astra:mars_iron_ore').processingTime(250).id('finality:ad_astra/crushing/mars_iron_ore');
    event.recipes.create.crushing([
        'minecraft:raw_iron',
        Item.of('minecraft:raw_iron').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:mercury_cobblestone').withChance(0.12)
    ], 'ad_astra:mercury_iron_ore').processingTime(250).id('finality:ad_astra/crushing/mercury_iron_ore');
    event.recipes.create.crushing([
        'minecraft:raw_iron',
        Item.of('minecraft:raw_iron').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:glacio_cobblestone').withChance(0.12)
    ], 'ad_astra:glacio_iron_ore').processingTime(250).id('finality:ad_astra/crushing/glacio_iron_ore');
    // Space Gold Ore Processing
    event.recipes.create.crushing([
        'create:crushed_raw_gold',
        Item.of('create:crushed_raw_gold').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:venus_cobblestone').withChance(0.12)
    ], 'ad_astra:venus_gold_ore').processingTime(250).id('finality:ad_astra/crushing/venus_gold_ore');
    // Space Diamond Ore Processing
    event.recipes.create.crushing([
        'minecraft:diamond',
        Item.of('minecraft:diamond').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:mars_cobblestone').withChance(0.12)
    ], 'ad_astra:mars_diamond_ore').processingTime(250).id('finality:ad_astra/crushing/mars_diamond_ore');
    event.recipes.create.crushing([
        'minecraft:diamond',
        Item.of('minecraft:diamond').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:venus_cobblestone').withChance(0.12)
    ], 'ad_astra:venus_diamond_ore').processingTime(250).id('finality:ad_astra/crushing/venus_diamond_ore');
    // Space Lapis Lazuli Ore Processing
    event.recipes.create.crushing([
        '10x minecraft:lapis_lazuli',
        Item.of('minecraft:lapis_lazuli').withChance(0.50),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('ad_astra:glacio_cobblestone').withChance(0.12)
    ], 'ad_astra:glacio_lapis_ore').processingTime(250).id('finality:ad_astra/crushing/glacio_lapis_ore');
    /**
     * Ad Astra Recipes
     */
    // Nasa Workbench
    event.shaped('kubejs:denied_result', [
        'TLT',
        'PCP',
        'RBR'
    ], {
        T: 'minecraft:redstone_torch',
        L: 'minecraft:lever',
        P: 'ad_astra:steel_plate',
        C: 'minecraft:crafting_table',
        R: 'minecraft:redstone_block',
        B: 'ad_astra:steel_block'
    }).id('ad_astra:recipes/nasa_workbench');
    event.recipes.create.mechanical_crafting('ad_astra:nasa_workbench', [
        'QLTLQ',
        'SCACS',
        'SAEAS',
        'SCNCS',
        'BIIIB'
    ], {
        Q: 'create:rose_quartz_lamp',
        L: 'create:analog_lever',
        T: 'create:powered_toggle_latch',
        S: 'ad_astra:steel_plate',
        C: 'extendedcrafting:redstone_component',
        A: 'extendedcrafting:redstone_catalyst',
        E: 'extendedcrafting:ultimate_auto_table',
        N: 'extendedcrafting:enhanced_redstone_catalyst',
        B: 'minecraft:redstone_block',
        I: 'ad_astra:steel_block'
    }).id('finality:ad_astra/nasa_workbench');
})

/**
 * LootJS To-Do List for Ad Astra
 * 
 * - Synchronize vanilla changes to Ad Astra
 */
LootJS.modifiers(event => {
    event.addBlockLootModifier('ad_astra:moon_cheese_ore')
        .randomChance(0.12).addLoot('ad_astra:cheese');
    event.addBlockLootModifier('ad_astra:moon_iron_ore')
        .randomChance(0.1).addLoot('minecraft:raw_iron');
    event.addBlockLootModifier('ad_astra:moon_desh_ore')
        .randomChance(0.1).addLoot('ad_astra:raw_desh');
    event.addBlockLootModifier('ad_astra:deepslate_desh_ore')
        .randomChance(0.3).addLoot('ad_astra:raw_desh');
    event.addBlockLootModifier('ad_astra:moon_ice_shard_ore')
        .randomChance(0.1).addLoot('ad_astra:ice_shard');
    event.addBlockLootModifier('ad_astra:deepslate_ice_shard_ore')
        .randomChance(0.3).addLoot('ad_astra:ice_shard');
})

/*
ServerEvents.recipes(e => {
    e.custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: false,
        key: {
            Q: { item: 'create:rose_quartz_lamp' },
            A: { item: 'create:analog_lever' },
            T: { item: 'create:powered_toggle_latch' },
            P: { tag: 'forge:plates/steel' },
            O: { item: 'extendedcrafting:redstone_component' },
            Y: { item: 'extendedcrafting:redstone_catalyst' },
            U: { item: 'extendedcrafting:ultimate_auto_table' },
            E: { item: 'extendedcrafting:enhanced_redstone_catalyst' },
            R: { item: 'minecraft:redstone_block' },
            S: { tag: 'forge:storage_blocks/steel' }
        },
        pattern: [
            'QATAQ',
            'POYOP',
            'PYUYP',
            'POEOP',
            'RSSSR'
        ],
        result: {
            count: 1,
            item: 'ad_astra:nasa_workbench'
        }
    }).id('finality:ad_astra/mechanicaljson/nasa_workbench')
})
*/