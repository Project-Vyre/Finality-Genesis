// priority: 100
// requires: kubejs_create
// requires: supplementaries
// requires: salt

/**
 * @file Handler for core recipes.
 * 
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Helped a lot early on in development. Thank you. Also helped translate my ideas into scripts!
 * @author pietro-lopes <https://github.com/pietro-lopes> AKA Uncandango in the KubeJS Discord. Fixed issues related to damage cancel script
 * @author MundM2007 <https://github.com/MundM2007> for helping with troubleshooting with fixing || statements
 * @author puu7693 <https://github.com/puu7693> for writing the script that grants potion effects when wearing a specific set of armor
 * @author MaxNeedsSnacks <https://github.com/MaxNeedsSnacks> Fixing KubeJS Create bugs
 */

const WOOD_TYPES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
const STANDARD_ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
const STANDARD_TOOLS_ALL = ['pickaxe', 'axe', 'hoe', 'shovel', 'sword']
let STONEPLATES = ['stone', 'polished_blackstone']
let FOUNDATION_NONMETAL = [
    'coal',
    'redstone',
    'quartz',
    'diamond',
    'emerald',
    'lapis_lazuli'
]
let CURSEDRECIPES = [
    'iron_ingot_from_smelting_iron_ore',
    'iron_ingot_from_blasting_iron_ore',
    'iron_ingot_from_smelting_deepslate_iron_ore',
    'iron_ingot_from_blasting_deepslate_iron_ore',
    'copper_ingot_from_smelting_copper_ore',
    'copper_ingot_from_blasting_copper_ore',
    'copper_ingot_from_smelting_deepslate_copper_ore',
    'copper_ingot_from_blasting_deepslate_copper_ore',
    'gold_ingot_from_smelting_gold_ore',
    'gold_ingot_from_blasting_gold_ore',
    'gold_ingot_from_smelting_deepslate_gold_ore',
    'gold_ingot_from_blasting_deepslate_gold_ore',
]
const COLOR = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'lime',
    'pink',
    'purple',
    'light_gray',
    'gray',
    'cyan',
    'brown',
    'green',
    'blue',
    'red',
    'black',
    'yellow'
]

ServerEvents.recipes(event => {
    for (let i = 0; i < FOUNDATION_NONMETAL.length; i++) {
        // why can you even smelt and blast these ores? YOU LITERALLY LOSE SO MUCH!
        let insert = FOUNDATION_NONMETAL[i];
        event.remove([
            {
                type: 'minecraft:smelting',
                output: `minecraft:${insert}`
            },
            {
                type: 'minecraft:blasting',
                output: `minecraft:${insert}`
            }
        ])
    }
    for (let i = 0; i < CURSEDRECIPES.length; i++) {
        // removing cursed recipes pt2
        let insert = CURSEDRECIPES[i];
        event.remove({ id: `minecraft:${insert}` })
    }
    for (let i = 0; i < STONEPLATES.length; i++) {
        let stone = STONEPLATES[i];
        event.recipes.create.cutting([
            `minecraft:${stone}_pressure_plate`,
            `minecraft:${stone}_slab`
        ], `${stone}`).processingTime(50).id(`finality:${stone}_pressure_plate`)
    }
    for (let i = 0; i < WOOD_TYPES.length; i++) {
        let wood = WOOD_TYPES[i];
        event.recipes.create.cutting([
            `minecraft:${wood}_pressure_plate`,
            `minecraft:${wood}_slab`
        ], `${wood}_planks`).processingTime(50).id(`finality:${wood}_pressure_plate`)
    }
    event.shaped('minecraft:light_weighted_pressure_plate', [
        'G',
        'R'
    ], {
        G: 'create:golden_sheet',
        R: 'minecraft:redstone'
    }).id('minecraft:light_weighted_pressure_plate')
    event.shaped('minecraft:heavy_weighted_pressure_plate', [
        'G',
        'R'
    ], {
        G: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('minecraft:heavy_weighted_pressure_plate')
    // denied
    event.shapeless('kubejs:denied_result', [
        '4x minecraft:netherite_scrap',
        '4x minecraft:gold_ingot'
    ]).id('minecraft:netherite_ingot')
    event.shaped('kubejs:denied_result', [
        ' G ',
        'GMG',
        ' G '
    ], {
        G: 'minecraft:gold_ingot',
        M: 'minecraft:redstone'
    }).id('minecraft:clock')
    event.shaped('kubejs:denied_result', [
        ' I ',
        'IRI',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    }).id('minecraft:compass')
    event.shaped('kubejs:denied_result', [
        'WWW',
        'CEC',
        'CRC'
    ], {
        W: '#minecraft:planks',
        C: 'minecraft:cobblestone',
        E: 'minecraft:iron_ingot',
        R: 'minecraft:redstone'
    }).id('minecraft:piston')
    event.shaped('kubejs:denied_result', [
        'F F',
        'FCF',
        ' F '
    ], {
        F: 'minecraft:iron_ingot',
        C: '#forge:chests/wooden'
    }).id('minecraft:hopper')
    event.shaped('kubejs:denied_result', [
        'GGG',
        'GNG',
        'OOO'
    ], {
        G: 'minecraft:glass',
        N: 'minecraft:nether_star',
        O: 'minecraft:obsidian'
    }).id('minecraft:beacon')
    event.shaped('minecraft:bucket', [
        'I I',
        ' I '
    ], {
        I: 'create:iron_sheet'
    }).id('finality:bucket')
    event.shaped('minecraft:clock', [
        ' G ',
        'GMG',
        ' G '
    ], {
        G: 'create:golden_sheet',
        M: 'create:precision_mechanism'
    }).id('finality:clock')
    event.shaped('minecraft:compass', [
        ' I ',
        'IRI',
        ' I '
    ], {
        I: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('finality:compass')
    event.shaped('minecraft:piston', [
        'WWW',
        'CEC',
        'CRC'
    ], {
        W: '#minecraft:planks',
        C: 'minecraft:cobblestone',
        E: 'create:piston_extension_pole',
        R: 'minecraft:redstone'
    }).id('finality:piston')
    event.shaped('minecraft:hopper', [
        'H',
        'C'
    ], {
        H: 'create:chute',
        C: '#forge:chests/wooden'
    }).id('finality:hopper')
    event.shaped('minecraft:trident', [
        'PPP',
        ' A ',
        ' A '
    ], {
        P: 'kubejs:trident_prong',
        A: 'kubejs:trident_pole'
    }).id('finality:trident')
    event.shaped('kubejs:trident_pole', [
        'S',
        'S'
    ], {
        S: 'minecraft:prismarine_shard'
    }).id('finality:trident_pole')
    event.shapeless('kubejs:trident_prong', [
        'minecraft:pointed_dripstone',
        'minecraft:prismarine_crystals'
    ]).id('finality:trident_prong')
    event.shaped('minecraft:saddle', [
        'LLL',
        'LSL'
    ], {
        L: 'minecraft:leather',
        S: 'minecraft:string'
    }).id('finality:saddle')
    event.shaped('minecraft:iron_horse_armor', [
        'I I',
        'III',
        'I I'
    ], {
        I: 'minecraft:iron_ingot'
    }).id('finality:iron_horse_armor')
    event.shaped('minecraft:golden_horse_armor', [
        'G G',
        'GGG',
        'G G'
    ], {
        G: 'minecraft:gold_ingot'
    }).id('finality:golden_horse_armor')
    event.shaped('minecraft:diamond_horse_armor', [
        'D D',
        'DDD',
        'D D'
    ], {
        D: 'minecraft:diamond'
    }).id('finality:diamond_horse_armor')
    event.shaped('minecraft:grindstone', [
        'SLS',
        'P P'
    ], {
        S: '#forge:rods/wooden',
        L: '#kubejs:slabs/stone',
        P: '#minecraft:planks'
    }).id('minecraft:grindstone')
    event.shapeless('2x minecraft:diorite', [
        'minecraft:cobblestone',
        '#forge:gems/quartz',
        '#forge:gems/quartz',
        'minecraft:cobblestone'
    ]).id('finality:crafting/shapeless_diorite')
    event.shapeless(
        '4x minecraft:quartz',
        '#forge:storage_blocks/quartz'
    ).id('finality:quartz_block_revert')
    event.shapeless(
        '4x minecraft:pointed_dripstone',
        'minecraft:dripstone_block'
    ).id('finality:pointed_dripstone_from_block')
    event.shaped('create:brown_toolbox', [
        ' W ',
        'SBS',
        ' L '
    ], {
        W: 'create:cogwheel',
        S: 'create:golden_sheet',
        B: 'minecraft:barrel',
        L: '#forge:leather'
    }).id('finality:crafting/toolbox_from_barrel')
    /**
     * BLASTING
     * 
     * Notice: Blasting recipes are automatically added by Create!
     */
    event.recipes.minecraft.blasting('create:zinc_block', 'create:raw_zinc_block').id('finality:blasting/raw_zinc_block')
    event.recipes.minecraft.blasting('minecraft:skeleton_skull', 'minecraft:zombie_head').id('finality:blasting/zombie_head_flesh_burning')
    /**
     * CAMPFIRE COOKING / SMOKING
     * 
     * Notice: Smoking recipes are automatically added by Create!
     */
    /**
     * COMPACTING
     */
    event.recipes.create.compacting([
        'minecraft:sponge',
        Fluid.of('minecraft:water', 1000)
    ], 'minecraft:wet_sponge').id('finality:compacting/sponge_squeezing')
    event.recipes.create.compacting('minecraft:basalt', [
        'minecraft:blue_ice',
        Fluid.of('minecraft:lava', 500)
    ]).id('finality:compacting/basalt')
    event.recipes.create.compacting('minecraft:tuff', [
        '9x minecraft:gravel',
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_tuff')
    event.recipes.create.compacting('minecraft:tuff', [
        '9x minecraft:deepslate',
        Fluid.of('minecraft:lava', 250)
    ]).heated().id('finality:compacting/renew_deepslate_tuff')
    event.recipes.create.compacting('minecraft:calcite', [
        'minecraft:amethyst_shard',
        'minecraft:cobbled_deepslate',
        'minecraft:bone_meal'
    ]).heated().id('finality:compacting/renew_calcite')
    event.recipes.create.compacting('minecraft:ice', '9x minecraft:snow_block').id('finality:snow_compacting')
    /*
    Watch me question myself later after writing this recipe 
    for making Lapis Lazuli automatable with just Create...
    */
    event.recipes.create.compacting([
        'minecraft:lapis_lazuli',
        Item.of('minecraft:lapis_ore').withChance(0.12),
        Item.of('minecraft:deepslate_lapis_ore').withChance(0.06),
    ], [
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:awkward"}'),
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:mundane"}'),
        Fluid.of('kubejs:condensed_universal_entropy', 50),
        ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:deepslate', 'minecraft:cobbled_deepslate'],
        ['minecraft:poisonous_potato', 'minecraft:gunpowder'],
        'salt:salt',
    ]).heated().id('finality:compacting/artificial_lapis_lazuli')
    event.recipes.create.compacting('minecraft:obsidian', [
        Fluid.water(1000),
        Fluid.lava(1000)
    ]).id('finality:compacting/cursed_obsidian')
    /**
     * CRUSHING
     */
    event.recipes.create.crushing([
        'minecraft:clay_ball',
        Item.of('minecraft:clay_ball', 2).withChance(0.25),
        Item.of('create:copper_nugget').withChance(0.12),
        Item.of('minecraft:iron_nugget').withChance(0.12),
        Item.of('create:experience_nugget').withChance(0.25)
    ], 'minecraft:dripstone_block').processingTime(250).id('finality:crushing/dripstone')
    event.recipes.create.crushing([
        Item.of('create:copper_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.10)
    ], 'minecraft:basalt').processingTime(250).id('finality:crushing/basalt')
    event.remove({ id: 'create:crushing/netherrack' })
    event.recipes.create.crushing([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('minecraft:netherite_scrap').withChance(0.0002)
    ], 'minecraft:netherrack').processingTime(250).id('finality:crushing/netherrack')
    event.recipes.create.crushing([
        Item.of('minecraft:gold_nugget', 5).withChance(0.25),
        Item.of('create:experience_nugget', 2).withChance(0.12)
    ], 'minecraft:gilded_blackstone').processingTime(250).id('finality:crushing/gilded_blackstone')
    event.recipes.create.crushing([
        Item.of('kubejs:deepslate_shard', 9).withChance(0.75),
        Item.of('minecraft:gravel').withChance(0.12)
    ], 'minecraft:deepslate').processingTime(250).id('finality:crushing/deepslate_shard_from_deepslate')
    event.recipes.create.crushing([
        Item.of('kubejs:deepslate_shard', 9).withChance(0.25),
        Item.of('minecraft:gravel').withChance(0.24)
    ], 'minecraft:cobbled_deepslate').processingTime(250).id('finality:crushing/deepslate_shard_from_cobbled_deepslate')
    if (Platform.isLoaded('createaddition')) {
        console.log('Create Crafts & Additions detected! Restoring Tuff crushing recipes.')
        event.recipes.create.crushing([
            Item.of('minecraft:flint').withChance(0.25),
            Item.of('minecraft:gold_nugget').withChance(0.10),
            Item.of('create:copper_nugget').withChance(0.10),
            Item.of('create:zinc_nugget').withChance(0.10),
            Item.of('minecraft:iron_nugget').withChance(0.10)
        ], 'minecraft:tuff').processingTime(350).id('create:crushing/tuff')
        event.recipes.create.crushing([
            Item.of('minecraft:flint').withChance(0.25),
            Item.of('minecraft:gold_nugget').withChance(0.10),
            Item.of('create:copper_nugget').withChance(0.10),
            Item.of('create:zinc_nugget').withChance(0.10),
            Item.of('minecraft:iron_nugget').withChance(0.10)
        ], '#create:stone_types/tuff').processingTime(350).id('create:crushing/tuff_recycling')
    }
    /**
     * FILLING
     */
    event.recipes.create.filling('minecraft:netherrack', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
    ]).id('finality:filling/living_flesh_stone')
    event.recipes.create.filling('minecraft:prismarine', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:water_breathing"}')
    ]).id('finality:filling/prismarine_from_cobblestone')
    event.recipes.create.filling('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 90)
    ]).id('finality:filling/netherite_ingot_from_spout')
    event.recipes.create.filling('minecraft:gilded_blackstone', [
        'minecraft:blackstone',
        Fluid.of('kubejs:molten_gold', 50)
    ]).id('finality:filling/gilded_blackstone')
    /**
     * HAUNTING
     */
    event.recipes.create.haunting('minecraft:deepslate', 'minecraft:andesite').id('finality:haunting/andesite_to_deepslate')
    event.recipes.create.haunting('minecraft:crying_obsidian', 'minecraft:obsidian').id('finality:haunting/obsidian')
    event.recipes.create.haunting('minecraft:name_tag', 'minecraft:writable_book').id('finality:haunting/soul_nametag')
    event.recipes.create.haunting('minecraft:phantom_membrane', 'minecraft:rotten_flesh').id('finality:haunting/rotten_flesh')
    event.recipes.create.haunting([
        Item.of('minecraft:echo_shard').withChance(0.02),
        Item.of('minecraft:disc_fragment_5').withChance(0.01)
    ], 'kubejs:deepslate_shard').id('finality:haunting/echo_shard')
    event.recipes.create.haunting([
        'minecraft:wither_skeleton_skull',
        Item.of('minecraft:coal').withChance(0.25)
    ], 'minecraft:skeleton_skull').id('finality:haunting/wither_skeleton_skull')
    /**
     * ITEM APPLICATION
     */
    event.recipes.create.item_application('minecraft:tinted_glass', [
        '#forge:glass/colorless', 'minecraft:amethyst_shard'
    ]).id('minecraft:tinted_glass')
    event.recipes.create.item_application('minecraft:chest_minecart', [
        '#forge:chests/wooden', 'minecraft:minecart'
    ]).id('finality:item_application/chest_minecart')
    event.recipes.create.item_application('minecraft:sculk_sensor', [
        'minecraft:warped_roots',
        'minecraft:echo_shard'
    ]).id('finality:item_application/sculk_sensor_conversion')
    /**
     * SPLASHING
     */
    event.recipes.create.splashing(
        'minecraft:piston',
        'minecraft:sticky_piston'
    ).id('finality:splashing/sticky_piston')
    event.recipes.create.splashing(
        'create:mechanical_piston',
        'create:sticky_mechanical_piston'
    ).id('finality:splashing/sticky_mechanical_piston')
    event.recipes.create.splashing([
        Item.of('minecraft:glowstone').withChance(0.25),
        Item.of('minecraft:bone').withChance(0.12)
    ], 'minecraft:soul_soil').id('finality:splashing/soul_soil')
    /**
     * MILLING
     */
    event.recipes.create.milling(
        'minecraft:dirt',
        'minecraft:coarse_dirt'
    ).processingTime(120).id('finality:milling/dirt')
    /**
     * MIXING
     * 
     * Notice: Shapeless recipes are automatically added by Create, unless if .damageIngredient or .keepIngredient() are used.
     */
    event.recipes.create.mixing('2x create:brass_nugget', [
        'create:copper_nugget',
        'create:zinc_nugget'
    ]).heated().id('finality:mixing/brass_nugget_from_copper_and_zinc_nuggets')
    event.recipes.create.mixing('2x create:brass_block', [
        'minecraft:copper_block',
        'create:zinc_block'
    ]).heated().id('finality:mixing/brass_blocks_from_copper_and_zinc_blocks')
    event.recipes.create.mixing('minecraft:dirt', [
        'minecraft:gravel',
        '3x minecraft:bone_meal'
    ]).id('finality:dirt_from_gravel')
    event.recipes.create.mixing('2x minecraft:coarse_dirt', [
        'minecraft:dirt',
        'minecraft:gravel'
    ]).id('finality:mixing/coarse_dirt')
    event.recipes.create.mixing('8x minecraft:netherrack', [
        '8x minecraft:cobblestone',
        Fluid.of('create:potion', 1000, '{Bottle:"REGULAR",Potion:"minecraft:strong_healing"}')
    ]).id('finality:mixing/bulk_netherrack_from_cobblestone')
    event.recipes.create.mixing('8x minecraft:prismarine', [
        '8x minecraft:cobblestone',
        Fluid.of('create:potion', 1000, '{Bottle:"REGULAR",Potion:"minecraft:water_breathing"}')
    ]).id('finality:mixing/bulk_prismarine_from_cobblestone')
    event.recipes.create.mixing('4x minecraft:netherite_ingot', [
        '4x minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 360)
    ]).heated().id('finality:mixing/netherite_ingot_from_mixing')
    // Be3Al2(SiO3)6
    event.recipes.create.mixing('minecraft:emerald', [
        'minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget'
    ]).superheated().id('finality:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.create.mixing('minecraft:nether_gold_ore', [
        'create:cinder_flour',
        '18x minecraft:gold_nugget',
        Fluid.of('minecraft:lava', 180)
    ]).id('finality:nether_gold_ore_deco')
    event.recipes.create.mixing('minecraft:cobblestone', [
        Fluid.water(1000),
        Fluid.lava(1000)
    ]).id('finality:mixing/cobblestone')
    event.recipes.create.mixing('8x minecraft:glowstone_dust', [
        '8x create:cinder_flour',
        Fluid.of('create:potion', 200, '{Bottle:"REGULAR",Potion:"minecraft:night_vision"}')
    ]).id('finality:mixing/bulk_glowstone_from_cinder_flour')
    /**
     * PRESSING
     */
    event.recipes.create.pressing('kubejs:zinc_sheet', 'create:zinc_ingot').id('finality:pressing/zinc_ingot')
    event.recipes.create.pressing('kubejs:netherite_sheet', 'minecraft:netherite_ingot').id('finality:pressing/netherite_ingot')
    /**
     * >-----<
     */
    // Shimmer Recipes
    event.recipes.create.mixing(Fluid.of('kubejs:shimmer', 1000), [
        'create:refined_radiance',
        Fluid.of('kubejs:condensed_universal_entropy', 500),
        Fluid.of('minecraft:water', 500)
    ]).superheated().id('finality:mixing/shimmer_fluid_creation')
    event.recipes.create.compacting([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('minecraft:netherite_scrap').withChance(0.50),
        Item.of('kubejs:netherite_nugget').withChance(0.12)
    ], [
        Fluid.of('kubejs:shimmer', 750),
        'minecraft:netherrack',
    ]).id('finality:compacting/netherite_scrap_renewal')
    // Mushroom Stew
    event.recipes.create.filling('minecraft:mushroom_stew', [
        'minecraft:bowl',
        Fluid.of('kubejs:mushroom_stew', 250)
    ]).id('finality:filling/mushroom_stew')
    event.recipes.create.mixing(Fluid.of('kubejs:mushroom_stew', 250), [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        Fluid.of('minecraft:water', 250)
    ]).heated().id('finality:mixing/mushroom_stew')
    // netherite nugget related
    event.shaped('minecraft:netherite_ingot', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'kubejs:netherite_nugget'
    }).id('finality:netherite_ingot_from_nuggets')
    event.shapeless('9x kubejs:netherite_nugget', 'minecraft:netherite_ingot').id('finality:netherite_nugget')
    event.recipes.create.mechanical_crafting('minecraft:spawner', [
        'VVV',
        'VSV',
        'VVV'
    ], {
        V: 'minecraft:structure_void',
        S: 'minecraft:soul_campfire'
    }).id('finality:mechanical_crafting/spawner')
    event.shapeless('minecraft:dragon_breath', [
        'minecraft:dragon_egg',
        'minecraft:glass_bottle'
    ]).keepIngredient('minecraft:dragon_egg').id('finality:dragon_breath')
    event.shapeless('create:mechanical_piston', [
        'supplementaries:soap', 'create:sticky_mechanical_piston'
    ]).id('finality:mechanical_piston_soap_washing')
    event.shaped('minecraft:nautilus_shell', [
        'PFP',
        'FPF',
        'PFP'
    ], {
        P: 'minecraft:prismarine_shard',
        F: 'minecraft:cod'
    }).id('finality:nautilus_shell')
    event.shaped('minecraft:heart_of_the_sea', [
        'IDP',
        'DND',
        'PDI'
    ], {
        P: 'minecraft:prismarine_shard',
        D: 'minecraft:diamond',
        I: 'minecraft:ink_sac',
        N: 'minecraft:nautilus_shell'
    }).id('finality:heart_of_the_sea')
    /**
     * Supplementaries 
     */
    event.shaped('supplementaries:quiver', [
        'RRL',
        'RLL',
        'LL '
    ], {
        R: '#forge:rope',
        L: '#forge:leather'
    }).id('finality:supplementaries_quiver')
    event.recipes.create.filling('supplementaries:bomb_blue', [
        'supplementaries:bomb',
        Fluid.of('kubejs:condensed_universal_entropy', 25)
    ]).id('finality:supplementaries/filling/bomb_blue')
    event.recipes.create.mixing('4x supplementaries:bomb_blue', [
        '4x supplementaries:bomb',
        Fluid.of('kubejs:condensed_universal_entropy', 100)
    ]).id('finality:supplementaries/mixing/bulk_bomb_blue')
    /**
     * 
     * @param {OutputItem[]} outputs 
     * @param {Internal.ItemStack} input 
     * @param {string} transitional 
     * @param {string} recipeId 
     */
    /*
    let coinCreation = (outputs, input, transitional, recipeId) => {
        event.recipes.create.sequenced_assembly([outputs], input, [
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:emerald_block']),
            event.recipes.create.deploying(transitional, [transitional, 'create:experience_nugget'])
        ]).transitionalItem(transitional).loops(9).id(`finality:sequenced_assembly/${recipeId}`)
    }
    */
})