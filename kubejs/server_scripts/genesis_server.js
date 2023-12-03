// priority: 100
// requires: kubejs_create
// requires: supplementaries

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

console.info('Implementing Finality recipes and compats...')

const WOOD_TYPES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
const STANDARD_ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
const STANDARD_TOOLS_ALL = ['pickaxe', 'axe', 'hoe', 'shovel', 'sword']
let STONEPLATES = ['stone', 'polished_blackstone']
let FOUNDATION_METALS = ['iron', 'gold']
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
let STORAGE_INCEPTION = [
    'cobblestone',
    'cobbled_deepslate',
    'gravel',
    'sand',
    'red_sand'
]
let CMD = ['command_block', 'chain_command_block', 'repeating_command_block']
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
let VALID_COLOR_MIX = [
    'red',
    'green',
    'blue',
    'white',
    'cyan',
    'magenta',
    'yellow'
]
let LETTER_BINARY_CODES = {
    letter_a: '01000001',
    letter_b: '01000010',
    letter_c: '01000011',
    letter_d: '01000100',
    letter_e: '01000101',
    letter_f: '01000110',
    letter_g: '01000111',
    letter_h: '01001000',
    letter_i: '01001001',
    letter_j: '01001010',
    letter_k: '01001011',
    letter_l: '01001100',
    letter_m: '01001101',
    letter_n: '01001110',
    letter_o: '01001111',
    letter_p: '01010000',
    letter_q: '01010001',
    letter_r: '01010010',
    letter_s: '01010011',
    letter_t: '01010100',
    letter_u: '01010101',
    letter_v: '01010110',
    letter_w: '01010111',
    letter_x: '01011000',
    letter_y: '01011001',
    letter_z: '01011010'
}
let INTEGER_BINARY = {
    two: '00110010',
    three: '00110011',
    four: '00110100',
    five: '00110101',
    six: '00110110',
    seven: '00110111',
    eight: '00111000',
    nine: '00111001'
}

ServerEvents.recipes(event => {
    FOUNDATION_NONMETAL.forEach(insert => { // why can you even smelt and blast these ores? YOU LITERALLY LOSE SO MUCH!
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
    })
    CURSEDRECIPES.forEach(insert => { // removing cursed recipes pt2
        event.remove({ id: `minecraft:${insert}` })
    })
    let BINARYCONVERSION = (output, arrangement) => {
        event.recipes.create.mechanical_crafting(`kubejs:${output}`, [
            arrangement
        ], {
            '0': 'kubejs:zero',
            '1': 'kubejs:one'
        }).id(`finality:mechanical_crafting/${output}`)
    }
    let HEXCODES = (out, arrangement) => {
        event.recipes.create.mechanical_crafting(`kubejs:color_${out}`, [
            arrangement
        ], {
            '#': 'kubejs:octothorpe',
            '0': 'kubejs:zero',
            'F': 'kubejs:letter_f'
        }).id(`finality:mechanical_crafting/color_${out}`)
    }
    let COLOR_MIXING = (output_color, color_one, color_two) => {
        event.recipes.create.mixing(`kubejs:color_${output_color}`, [
            `kubejs:color_${color_one}`,
            `kubejs:color_${color_two}`,
            Fluid.of('kubejs:shimmer', 500)
        ]).id(`finality:mixing/color_${output_color}`)
    }
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), [
        '#forge:rods/wooden', '#forge:rods/wooden'
    ]).id('finality:documentation_book')
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
    event.recipes.create.mixing('kubejs:high_entropy_alloy', [
        'extendedcrafting:the_ultimate_ingot',
        'extendedcrafting:crystaltine_ingot',
        'minecraft:netherite_ingot',
        'create:polished_rose_quartz',
        'create:brass_ingot',
        'create:andesite_alloy',
        'minecraft:diamond',
        'minecraft:amethyst_shard',
        Fluid.of('kubejs:condensed_universal_entropy', 500)
    ]).superheated().id('finality:mixing/high_entropy_alloy')
    event.shaped('kubejs:high_entropy_alloy_block', [
        'EEE',
        'EEE',
        'EEE'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:high_entropy_alloy_block_compression')
    event.shapeless('9x kubejs:high_entropy_alloy', [
        'kubejs:high_entropy_alloy_block'
    ]).id('finality:high_entropy_alloy_block_decompression')
    event.shaped('kubejs:final_helmet', [
        'EEE',
        'E E'
    ], {
        E: 'kubejs:high_entropy_alloy',
    }).id('finality:crafting/final_helmet')
    event.shaped('kubejs:final_chestplate', [
        'E E',
        'EEE',
        'EEE'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:crafting/final_chestplate')
    event.shaped('kubejs:final_leggings', [
        'EEE',
        'E E',
        'E E'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:crafting/final_leggings')
    event.shaped('kubejs:final_boots', [
        'E E',
        'E E'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:crafting/final_boots')
    event.shaped('kubejs:final_sword', [
        'E',
        'E',
        'S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_sword')
    event.recipes.create.mechanical_crafting('kubejs:crystal_lance', [
        ' A ',
        ' A ',
        'BNB',
        ' B ',
        ' B ',
        ' B ',
        ' B '
    ], {
        A: 'minecraft:amethyst_shard',
        B: 'extendedcrafting:black_iron_ingot',
        N: 'minecraft:netherite_ingot'
    }).id('finality:crystal_lance')
    event.recipes.create.mechanical_crafting('kubejs:final_katana', [
        ' E ',
        ' E ',
        ' E ',
        'GGG',
        ' I '
    ], {
        E: 'kubejs:high_entropy_alloy',
        G: 'minecraft:amethyst_shard',
        I: 'extendedcrafting:black_iron_ingot'
    }).id('finality:mechanical_crafting/final_katana')
    event.recipes.create.mechanical_crafting('kubejs:final_lance', [
        '  E  ',
        '  E  ',
        'IIIII',
        'I I I',
        '  I  ',
        '  I  ',
        '  I  '
    ], {
        E: 'kubejs:high_entropy_alloy',
        I: 'extendedcrafting:black_iron_ingot'
    }).id('finality:mechanical_crafting/final_lance')
    event.smithing('kubejs:final_lance', 'kubejs:crystal_lance', 'kubejs:high_entropy_alloy')
    event.shaped('kubejs:final_pickaxe', [
        'EEE',
        ' S ',
        ' S '
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_pickaxe')
    event.shaped('kubejs:final_axe', [
        'EE',
        'ES',
        ' S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_axe')
    event.shaped('kubejs:final_shovel', [
        'E',
        'S',
        'S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_shovel')
    event.shaped('kubejs:final_hoe', [
        'EE',
        ' S',
        ' S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_hoe')
    event.shaped('kubejs:final_scythe', [
        'EEE',
        ' SE',
        ' S '
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_scythe')
    event.recipes.create.mixing(Fluid.of('kubejs:mushroom_stew', 250), [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        Fluid.of('minecraft:water', 250)
    ]).heated().id('finality:mushroom_stew_mixing')
    event.recipes.create.filling('minecraft:mushroom_stew', [
        'minecraft:bowl',
        Fluid.of('kubejs:mushroom_stew', 250)
    ]).id('finality:mushroom_stew_pouring')
    STONEPLATES.forEach(stone => {
        event.recipes.create.cutting([
            `minecraft:${stone}_pressure_plate`,
            `minecraft:${stone}_slab`
        ], `${stone}`).processingTime(50).id(`finality:${stone}_pressure_plate`)
    })
    WOOD_TYPES.forEach(wood => {
        event.recipes.create.cutting([
            `minecraft:${wood}_pressure_plate`,
            `minecraft:${wood}_slab`
        ], `${wood}_planks`).processingTime(50).id(`finality:${wood}_pressure_plate`)
    })
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
    event.shapeless('create:mechanical_piston', [
        'supplementaries:soap', 'create:sticky_mechanical_piston'
    ]).id('finality:mechanical_piston_soap_washing')
    /**
     * Item Application
     */
    event.recipes.create.item_application('minecraft:tinted_glass', [
        '#forge:glass/colorless', 'minecraft:amethyst_shard'
    ]).id('minecraft:tinted_glass')
    event.recipes.create.item_application('minecraft:chest_minecart', [
        '#forge:chests/wooden', 'minecraft:minecart'
    ]).id('finality:item_application/chest_minecart')
    /**
     * Compacting
     */
    event.recipes.create.compacting([
        'minecraft:sponge',
        Fluid.of('minecraft:water', 1000)
    ], [
        'minecraft:wet_sponge'
    ]).id('finality:compacting/sponge_squeezing')
    event.recipes.create.compacting([
        'minecraft:diamond',
        Item.of('create:experience_nugget').withChance(0.05)
    ], [
        Item.of('minecraft:coal_block', 1),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_diamond')
    event.recipes.create.compacting([
        'minecraft:diamond_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        Item.of('minecraft:coal_block', 9),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_diamond_bulk')
    event.recipes.create.compacting([
        'minecraft:coal',
        Item.of('create:experience_nugget').withChance(0.05)
    ], [
        Item.of('minecraft:dried_kelp_block', 1)
    ]).heated().id('finality:compacting/renew_coal')
    event.recipes.create.compacting([
        'minecraft:coal_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        Item.of('minecraft:dried_kelp_block', 9)
    ]).heated().id('finality:compacting/renew_coal_bulk')
    event.recipes.create.compacting([
        'minecraft:basalt'
    ], [
        'minecraft:blue_ice',
        Fluid.of('minecraft:lava', 500)
    ]).id('finality:compacting/basalt')
    event.recipes.create.compacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:gravel', 9),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:compacting/renew_tuff')
    event.recipes.create.compacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:deepslate', 9),
        Fluid.of('minecraft:lava', 250)
    ]).heated().id('finality:compacting/renew_deepslate_tuff')
    event.recipes.create.compacting('minecraft:calcite', [
        'minecraft:amethyst_shard',
        'minecraft:cobbled_deepslate',
        'minecraft:bone_meal'
    ]).heated().id('finality:compacting/renew_calcite')
    event.recipes.create.compacting('minecraft:ice', '9x minecraft:snow_block').id('finality:snow_compacting')
    /**
     * Milling
     */
    /**
     * Crushing
     */
    event.recipes.create.crushing([
        Item.of('minecraft:pointed_dripstone', 4),
        Item.of('minecraft:clay_ball').withChance(0.50),
        Item.of('create:copper_nugget').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75)
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
     * Filling
     */
    event.recipes.create.filling('minecraft:netherrack', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
    ]).id('finality:filling/living_flesh_stone')
    event.recipes.create.filling('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 90)
    ]).id('finality:filling/netherite_ingot_from_spout')
    event.recipes.create.filling('minecraft:gilded_blackstone', [
        'minecraft:blackstone',
        Fluid.of('kubejs:molten_gold', 50)
    ]).id('finality:filling/gilded_blackstone')
    /**
     * Haunting
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
     * Splashing
     */
    event.recipes.create.splashing(
        'minecraft:piston',
        'minecraft:sticky_piston'
    ).id('finality:splashing/sticky_piston')
    event.recipes.create.splashing(
        'create:mechanical_piston',
        'create:sticky_mechanical_piston'
    ).id('finality:splashing/sticky_mechanical_piston')
    /**
     * Blasting
     * 
     * Notice: Automatically added by Create!
     */
    event.recipes.minecraft.blasting('create:zinc_block', 'create:raw_zinc_block').id('finality:blasting/raw_zinc_block')
    /**
     * Mixing
     * 
     * Notice: Shapeless recipes are automatically added by Create, unless if .damageIngredient or .keepIngredient() are used.
     */
    event.recipes.create.mixing('minecraft:dirt', [
        'minecraft:gravel',
        '3x minecraft:bone_meal'
    ]).id('finality:dirt_from_gravel')
    event.recipes.create.mixing('2x minecraft:coarse_dirt', [
        'minecraft:dirt',
        'minecraft:gravel'
    ]).id('finality:mixing/coarse_dirt')
    /**
     * @summary Heated 1x ingot melting
     * @param {Internal.OutputFluid} outputFluid 
     * @param {Internal.InputItem} inputIngot 
     */
    let ingotMeltingHeated = (outputFluid, inputIngot) => {
        event.recipes.create.mixing(
            Fluid.of(`kubejs:molten_${outputFluid}`, 90),
            inputIngot
        ).heated().id(`finality:basin/${outputFluid}_sheet_melting`)
    }
    /**
     * 
     * @param {Internal.OutputFluid} outputFluid 
     * @param {Internal.InputItem} inputBlock 
     */
    let blockMeltingHeated = (outputFluid, inputBlock) => {
        event.recipes.create.mixing(
            Fluid.of(`kubejs:molten_${outputFluid}`, 810),
            inputBlock
        ).heated().id(`finality:basin/${outputFluid}_block_melting`)
    }
    let ingot_melting_eligible = {
        copper: 'create:copper_sheet',
        iron: 'create:iron_sheet',
        gold: 'create:golden_sheet',
        zinc: 'kubejs:zinc_sheet',
        brass: 'create:brass_sheet'
    }
    let block_melting_eligible = {
        copper: 'minecraft:copper_block',
        iron: 'minecraft:iron_block',
        gold: 'minecraft:gold_block',
        zinc: 'create:zinc_block',
        brass: 'create:brass_block'
    }
    Object.keys(ingot_melting_eligible).forEach(type => {
        ingotMeltingHeated(type, ingot_melting_eligible[type])
    })
    Object.keys(block_melting_eligible).forEach(type => {
        blockMeltingHeated(type, block_melting_eligible[type])
    })
    event.recipes.create.mixing(
        Fluid.of('kubejs:molten_netherite', 90),
        'kubejs:netherite_sheet'
    ).superheated().id('finality:mixing/netherite_sheet_melting')
    event.recipes.create.mixing(
        Fluid.of('kubejs:molten_netherite', 810),
        'minecraft:netherite_block'
    ).superheated().id('finality:mixing/netherite_block_melting')
    event.recipes.create.mixing('4x minecraft:netherite_ingot', [
        Item.of('minecraft:netherite_scrap', 4),
        Fluid.of('kubejs:molten_gold', 360)
    ]).heated().id('finality:mixing/netherite_ingot_from_mixing')
    event.recipes.create.mixing('minecraft:emerald', [
        'minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget'
    ]).superheated().id('finality:renew_emerald') // Be3Al2(SiO3)6
    event.recipes.create.mixing('minecraft:nether_gold_ore', [
        'create:cinder_flour',
        '18x minecraft:gold_nugget',
        Fluid.of('minecraft:lava', 180)
    ]).id('finality:nether_gold_ore_deco') // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    if (Platform.isLoaded('salt')) {
        event.recipes.create.mixing(
            'salt:salt',
            Fluid.of('minecraft:water', 1000)
        ).heated().id('finality:create_salt_compat')
    }
    /**
     * >-----<
     */
    event.recipes.create.pressing('kubejs:zinc_sheet', 'create:zinc_ingot').id('finality:pressing/zinc_ingot')
    event.recipes.create.pressing('kubejs:netherite_sheet', 'minecraft:netherite_ingot').id('finality:pressing/netherite_ingot')
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
    event.shapeless('4x minecraft:quartz', [
        '#forge:storage_blocks/quartz'
    ]).id('finality:quartz_block_revert')
    if (Platform.isLoaded('farmersdelight')) {
        console.log("Farmer's Delight detected, correcting to recipes to 1:1 ratio.")
        event.shapeless('create:dough', [
            'minecraft:water_bucket',
            'create:wheat_flour'
        ]).id('create:crafting/appliances/dough')
        event.recipes.create.mixing('create:dough', [
            'create:wheat_flour',
            Fluid.of('minecraft:water', 1000)
        ]).id('create:mixing/dough_by_mixing')
        event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
    }
    // repairing item recipes module
    if (!Platform.isLoaded('pickletweaks')) {
        event.recipes.minecraft.crafting_shapeless(Ingredient.of('minecraft:bow'), [
            Ingredient.of('minecraft:bow'),
            'minecraft:string'
        ]).modifyResult((grid, result) => {
            let repairable = grid.find(Ingredient.of('minecraft:bow'))
            if (repairable.damaged) {
                repairable.damageValue = 0
                return repairable
            }
        }).id('finality:bow_repair')
        event.recipes.minecraft.crafting_shapeless(Ingredient.of('minecraft:crossbow'), [
            Ingredient.of('minecraft:crossbow'),
            'minecraft:string'
        ]).modifyResult((grid, result) => {
            let repairable = grid.find(Ingredient.of('minecraft:crossbow'))
            if (repairable.damaged) {
                repairable.damageValue = 0
                return repairable
            }
        }).id('finality:crossbow_repair')
    }
    // supplementaries related
    if (Platform.isLoaded('supplementaries')) {
        event.shaped('supplementaries:quiver', [
            'RRL',
            'RLL',
            'LL '
        ], {
            R: '#forge:rope',
            L: '#forge:leather'
        }).id('finality:supplementaries_quiver')
    }
    // nether wart
    if (!Platform.isLoaded('quark')) {
        event.shapeless('9x minecraft:nether_wart', [
            'minecraft:nether_wart_block'
        ]).id('finality:nether_wart_block_decompression')
    }
    if (Platform.isLoaded('quark')) {
        event.shapeless('4x minecraft:nether_wart', [
            'minecraft:nether_wart_block'
        ]).id('finality:quark_compat_nether_wart_block_decompression')
    }
    // lemons
    event.recipes.create.cutting('4x kubejs:lemon_slice', 'kubejs:lemon').processingTime(25).id('finality:lemon_slicing_with_saw')
    event.recipes.create.compacting([
        Fluid.of('kubejs:lemon_juice', 100),
        'kubejs:lemon_seed'
    ], 'kubejs:lemon').id('finality:whole_lemon_squeezing')
    event.recipes.create.compacting([
        Fluid.of('kubejs:lemon_juice', 25),
        'kubejs:lemon_seed'
    ], 'kubejs:lemon_slice').id('finality:lemon_slice_squeezing')
    if (Platform.isLoaded('farmersdelight')) {
        event.custom({
            type: 'farmersdelight:cutting',
            ingredients: [Ingredient.of('kubejs:lemon').toJson()],
            result: [Item.of('kubejs:lemon_slice', 4).toJson()],
            tool: Ingredient.of('#forge:tools/knives').toJson()
        }).id('finality:lemon_cutting')
    }
    // denied
    event.shapeless('kubejs:denied_result', [
        '4x minecraft:netherite_scrap',
        '4x minecraft:gold_ingot'
    ]).id('minecraft:netherite_ingot')
    event.shaped('kubejs:denied_result', [
        'I I',
        ' I '
    ], {
        I: 'minecraft:iron_ingot'
    }).id('minecraft:bucket')
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
    /**
     * Removed Create Materials
     */
    event.recipes.create.mixing('create:chromatic_compound', [
        '3x minecraft:glowstone_dust',
        '3x create:powdered_obsidian',
        'create:polished_rose_quartz'
    ]).superheated().id('create:mixing/chromatic_compound')
    event.recipes.create.item_application('create:refined_radiance_casing', [
        '#forge:stripped_logs',
        'create:refined_radiance'
    ]).id('create:refined_radiance_casing')
    event.recipes.create.item_application('create:shadow_steel_casing', [
        '#forge:stripped_logs',
        'create:shadow_steel'
    ]).id('create:shadow_steel_casing')
    STORAGE_INCEPTION.forEach(insert => {
        event.shaped(`kubejs:compressed_${insert}`, [
            'BBB',
            'BBB',
            'BBB'
        ], {
            B: `minecraft:${insert}`
        }).id(`finality:compressed_${insert}`)
        event.shaped(`kubejs:double_compressed_${insert}`, [
            'BBB',
            'BBB',
            'BBB'
        ], {
            B: `kubejs:compressed_${insert}`
        }).id(`finality:double_compressed_${insert}`)
        event.shaped(`kubejs:triple_compressed_${insert}`, [
            'BBB',
            'BBB',
            'BBB'
        ], {
            B: `kubejs:double_compressed_${insert}`
        }).id(`finality:triple_compressed_${insert}`)
        event.shapeless(`9x kubejs:double_compressed_${insert}`, `kubejs:triple_compressed_${insert}`).id(`finality:triple_compressed_${insert}_decompression`)
        event.shapeless(`9x kubejs:compressed_${insert}`, `kubejs:double_compressed_${insert}`).id(`finality:double_compressed_${insert}_decompression`)
        event.shapeless(`9x minecraft:${insert}`, `kubejs:compressed_${insert}`).id(`finality:compressed_${insert}_decompression`)
    })
    event.shapeless('minecraft:dragon_breath', [
        'minecraft:dragon_egg',
        'minecraft:glass_bottle'
    ]).keepIngredient('minecraft:dragon_egg').id('finality:dragon_breath')
    event.recipes.create.mechanical_crafting('minecraft:spawner', [
        'VVV',
        'VSV',
        'VVV'
    ], {
        V: 'minecraft:structure_void',
        S: 'minecraft:soul_campfire'
    }).id('finality:spawner')
    CMD.forEach(insert => {
        event.recipes.create.deploying([
            'kubejs:zero',
            'kubejs:one',
            `kubejs:${insert}`
        ], [
            `kubejs:${insert}`,
            'kubejs:final_pickaxe'
        ]).keepHeldItem().id(`finality:binary_from_${insert}`)
        event.recipes.create.deploying([
            'minecraft:structure_void',
            `kubejs:${insert}`
        ], [
            `kubejs:${insert}`,
            'kubejs:final_hoe'
        ]).keepHeldItem().id(`finality:structure_void_from_${insert}`)
    })
    event.recipes.create.deploying([
        'kubejs:command_block',
        'kubejs:uncolored_rectangle'
    ], [
        'kubejs:command_block',
        'kubejs:final_axe'
    ]).keepHeldItem().id('finality:uncolored_rectangle')
    event.recipes.create.deploying([
        'kubejs:chain_command_block',
        'kubejs:uncolored_circle'
    ], [
        'kubejs:chain_command_block',
        'kubejs:final_axe'
    ]).keepHeldItem().id('finality:uncolored_circle')
    event.recipes.create.deploying([
        'kubejs:repeating_command_block',
        'kubejs:uncolored_star',
        'kubejs:uncolored_windmill'
    ], [
        'kubejs:repeating_command_block',
        'kubejs:final_axe'
    ]).keepHeldItem().id('finality:uncolored_star')
    event.recipes.create.mechanical_crafting('kubejs:color_uncolored', [
        '#AAAAAA'
    ], {
        '#': 'kubejs:octothorpe',
        'A': 'kubejs:letter_a'
    }).id('finality:mechanical_crafting/uncolored')
    event.recipes.create.mechanical_crafting('kubejs:color_white', [
        '#FFFFFF'
    ], {
        '#': 'kubejs:octothorpe',
        'F': 'kubejs:letter_f'
    }).id('finality:mechanical_crafting/color_white')
    HEXCODES('red', '#FF0000')
    HEXCODES('green', '#00FF00')
    HEXCODES('blue', '#0000FF')
    HEXCODES('magenta', '#FF00FF')
    HEXCODES('yellow', '#00FFFF')
    HEXCODES('cyan', '#00FFFF')
    COLOR_MIXING('magenta', 'red', 'blue')
    COLOR_MIXING('yellow', 'red', 'green')
    COLOR_MIXING('cyan', 'green', 'blue')
    Object.keys(LETTER_BINARY_CODES).forEach(insert => {
        BINARYCONVERSION(`${insert}`, `${LETTER_BINARY_CODES[insert]}`)
    })
    Object.keys(INTEGER_BINARY).forEach(insert => {
        BINARYCONVERSION(`${insert}`, `${INTEGER_BINARY[insert]}`)
    })
    BINARYCONVERSION('octothorpe', '00100011')
    BINARYCONVERSION('slash', '00101111')
    BINARYCONVERSION('at_sign', '01000000')
    Object.keys(global.SHAPES).forEach(shape => {
        VALID_COLOR_MIX.forEach(color => {
            event.recipes.create.mixing(`kubejs:${color}_${shape}`, [
                `kubejs:uncolored_${shape}`,
                `kubejs:color_${color}`,
                Fluid.of('create:honey', 250)
            ]).heated().id(`finality:uncolored_to_${color}_${shape}_mixing`)
            event.recipes.create.mixing(`kubejs:uncolored_${shape}`, [
                `kubejs:${color}_${shape}`,
                'supplementaries:soap',
                Fluid.of('minecraft:water', 500)
            ]).id(`finality:${color}_${shape}_washing`)
        })
        Object.keys(global.RGBWCMY).forEach(color => {
            event.recipes.create.cutting([
                `kubejs:${color}_left_half_${shape}`,
                `kubejs:${color}_right_half_${shape}`
            ], `kubejs:${color}_${shape}`).id(`finality:${color}_${shape}_halving`)
            event.recipes.create.cutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_left_half_${shape}`).id(`finality:${color}_${shape}_left_half_halving`)
            event.recipes.create.cutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_right_half_${shape}`).id(`finality:${color}_${shape}_right_half_halving`)
        })
    })
    event.recipes.create.mixing('kubejs:color_white', [
        'kubejs:color_red',
        'kubejs:color_green',
        'kubejs:color_blue',
        Fluid.of('kubejs:shimmer', 250)
    ]).id('finality:mixing/color_white')
    // shimmer usage
    event.recipes.create.mixing(Fluid.of('kubejs:shimmer', 250), [
        Fluid.of('kubejs:condensed_universal_entropy', 500),
        Fluid.of('minecraft:water', 500),
        'minecraft:glowstone_dust',
        'minecraft:redstone',
        'create:polished_rose_quartz'
    ]).superheated().id('finality:mixing/shimmer_fluid_creation')
    event.recipes.create.compacting([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('create:experience_nugget').withChance(0.25),
        Item.of('minecraft:netherite_scrap').withChance(0.02)
    ], [
        Fluid.of('kubejs:shimmer', 750),
        'minecraft:netherrack',
    ]).id('finality:compacting/netherite_scrap_renewal')
    event.recipes.create.mechanical_crafting('kubejs:blueprint_shape_base', [
        'RC',
        'CC'
    ], {
        R: 'kubejs:blue_rectangle_corner',
        C: 'kubejs:blue_circle_corner'
    }).id('finality:blueprint_shape_base')
    event.recipes.create.deploying('kubejs:blueprint_shape', ['kubejs:blueprint_shape_base', 'kubejs:white_circle']).id('finality:blueprint_shape')
    event.recipes.create.mechanical_crafting('kubejs:cpu_foundation', [
        ' R',
        'R '
    ], {
        R: 'kubejs:green_rectangle_corner'
    }).id('finality:cpu_foundation')
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:cpu_substrate_shape').withChance(240.0),
        Item.of('kubejs:green_rectangle_corner', 2).withChance(70.0),
        Item.of('kubejs:white_rectangle_corner', 2).withChance(70.0),
        Item.of('kubejs:white_circle_corner', 2).withChance(50.0)
    ], 'kubejs:cpu_foundation', [
        event.recipes.create.deploying('kubejs:incomplete_cpu_substrate_shape', ['kubejs:incomplete_cpu_substrate_shape', 'kubejs:white_circle_corner']),
        event.recipes.create.deploying('kubejs:incomplete_cpu_substrate_shape', ['kubejs:incomplete_cpu_substrate_shape', 'kubejs:white_circle_corner']),
    ]).transitionalItem('kubejs:incomplete_cpu_substrate_shape').loops(1).id('finality:cpu_substrate_creation')
    event.recipes.create.sequenced_assembly([
        'kubejs:cpu_shape'
    ], 'kubejs:cpu_substrate_shape', [
        event.recipes.create.deploying('kubejs:incomplete_cpu_shape', ['kubejs:incomplete_cpu_shape', 'kubejs:white_rectangle_corner']),
        event.recipes.create.deploying('kubejs:incomplete_cpu_shape', ['kubejs:incomplete_cpu_shape', 'kubejs:green_rectangle_corner'])
    ]).transitionalItem('kubejs:incomplete_cpu_shape').loops(2).id('finality:cpu_shape')
    event.recipes.create.mechanical_crafting('kubejs:emitter_shape_base', [
        ' C',
        'CR'
    ], {
        C: 'kubejs:magenta_circle_corner',
        R: 'kubejs:magenta_rectangle_corner'
    }).id('finality:emitter_shape_base')
    event.recipes.create.deploying('kubejs:emitter_shape', ['kubejs:emitter_shape_base', 'kubejs:white_star']).id('finality:emitter_shape')
    event.shaped('kubejs:null_storage_block', [
        'TTT',
        'TBT',
        'TTT'
    ], {
        T: 'minecraft:tinted_glass',
        B: 'minecraft:barrel'
    }).id('finality:crafting/null_storage_block')
    // give
    event.recipes.create.mechanical_crafting('64x minecraft:netherite_block', [
        '/GIVE @S ',
        'NETHERITE',
        'BLOCK 64 '
    ], {
        '/': 'kubejs:slash',
        '@': 'kubejs:at_sign',
        'G': 'kubejs:letter_g',
        'I': 'kubejs:letter_i',
        'V': 'kubejs:letter_v',
        'E': 'kubejs:letter_e',
        'S': 'kubejs:letter_s',
        'N': 'kubejs:letter_n',
        'T': 'kubejs:letter_t',
        'H': 'kubejs:letter_h',
        'R': 'kubejs:letter_r',
        'B': 'kubejs:letter_b',
        'L': 'kubejs:letter_l',
        'O': 'kubejs:letter_o',
        'C': 'kubejs:letter_c',
        'K': 'kubejs:letter_k',
        '6': 'kubejs:six',
        '4': 'kubejs:four'
    }).id('finality:command/netherite_block_stack')
})

ServerEvents.tags('item', event => {
    if (Platform.isLoaded('aether')) {
        event.add('aether:slider_damaging_items', 'kubejs:final_pickaxe')
    }
})

ServerEvents.tags('block', event => {
    event.add('minecraft:needs_stone_tool', 'minecraft:deepslate')
    event.add('create:wrench_pickup', [
        'create:peculiar_bell',
        'create:haunted_bell',
        '#create:seats',
        'minecraft:iron_bars',
        'minecraft:bell',
        'minecraft:barrel',
        'minecraft:redstone_lamp',
        'minecraft:crafting_table',
        'minecraft:smithing_table',
        'minecraft:stonecutter',
        'minecraft:grindstone',
        'minecraft:furnace',
        'minecraft:blast_furnace',
        'minecraft:smoker',
        'minecraft:lantern',
        'minecraft:soul_lantern',
        'minecraft:lectern',
        'minecraft:note_block',
        'minecraft:jukebox',
        'minecraft:dispenser',
        'minecraft:dropper',
        'minecraft:cauldron',
        'minecraft:anvil',
        'minecraft:chipped_anvil',
        'minecraft:damaged_anvil',
        'minecraft:loom',
        'minecraft:fletching_table',
        'minecraft:ender_chest',
        '#minecraft:doors',
        '#minecraft:trapdoors',
        '#forge:chests/wooden'
    ])
})

ServerEvents.loaded(event => {
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        console.warn('First server load! Lag may be present for a few minutes.')
    }
})

PlayerEvents.loggedIn(event => {
    // Give the player the quest book on first join
    if (!event.player.persistentData.contains('firstjoin')) {
        event.player.persistentData.putBoolean('firstjoin', true)
        if (!Platform.isLoaded('ftbquests')) {
            event.player.tell([
                Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
                Component.of('Do not forget to'),
                Component.of('Hold <rainb>[w]</rainb> to Ponder! \n').yellow(),
                Component.of('\nIf you experience '),
                Component.of('any ').italic(),
                Component.of('form of '),
                Component.of('Z-fighting ').red(),
                Component.of('or '),
                Component.of('flickering ').red(),
                Component.of('on blocks... '),
                Component.of('go to '),
                Component.of('[Video Settings] ').aqua(),
                Component.of('< '),
                Component.of('[Performance] ').aqua(),
                Component.of('then '),
                Component.of('disable or uncheck ').red(),
                Component.of('the setting that says '),
                Component.of('Use Compact Vertex Format').bold().darkAqua(),
                Component.of('. Please note that this is only applicable with '),
                Component.of('Embeddium 0.2+ ').lightPurple(),
                Component.of('and does not work with '),
                Component.of('Oculus ').lightPurple(),
                Component.of('installed!\n'),
                Component.of('\nIf you encounter any bugs after disabling it, please report them'),
                Component.of(' [here] ')
                    .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
                    .hover('Opens the Finality Genesis GitHub Issues page.')
                    .yellow(),
                Component.of('or speak directly to'),
                Component.of(' embeddedt ').lightPurple(),
                Component.of('himself in his '),
                Component.of('[Discord server]')
                    .clickOpenUrl('https://discord.gg/rN9Y7caguP')
                    .hover("The link for embeddedt's Discord server.")
                    .color(0x5865F2),
                Component.of('. Thank you!\n'),
                Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
            ])
            lootrMsg(event)
        }
        if (Platform.isLoaded('ftbquests') &&
            Platform.isLoaded('supplementaries')
        ) {
            event.player.give('ftbquests:book')
            event.player.give('supplementaries:sack')
            event.player.tell([
                Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
                Component.of("Also, please check your Quest Book and read its tooltips to get your bearings. Before I go, do not forget to\n"),
                Component.of('Hold <rainb>[w]</rainb> to Ponder! \n').yellow(),
                Component.of('\nIf you experience '),
                Component.of('any ').italic(),
                Component.of('form of '),
                Component.of('Z-fighting ').red(),
                Component.of('or '),
                Component.of('flickering ').red(),
                Component.of('on blocks... '),
                Component.of('go to '),
                Component.of('[Video Settings] ').aqua(),
                Component.of('< '),
                Component.of('[Performance] ').aqua(),
                Component.of('then '),
                Component.of('disable or uncheck ').red(),
                Component.of('the setting that says '),
                Component.of('Use Compact Vertex Format').bold().darkAqua(),
                Component.of('. Please note that this is only applicable with '),
                Component.of('Embeddium 0.2+ ').lightPurple(),
                Component.of('and does not work with '),
                Component.of('Oculus ').lightPurple(),
                Component.of('installed!\n'),
                Component.of('\nIf you encounter any bugs after disabling it, please report them'),
                Component.of(' [here] ')
                    .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
                    .hover('Opens the Finality Genesis GitHub Issues page.')
                    .yellow(),
                Component.of('or speak directly to'),
                Component.of(' embeddedt ').lightPurple(),
                Component.of('himself in his '),
                Component.of('[Discord server]')
                    .clickOpenUrl('https://discord.gg/rN9Y7caguP')
                    .hover("The link for embeddedt's Discord server.")
                    .color(0x5865F2),
                Component.of('. Thank you!\n'),
                Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
            ])
            lootrMsg(event)
        }
    } else if (event.player.persistentData.contains('firstjoin')) {
        event.player.tell([
            Component.of('Welcome back!\n').bold().green(),
            Component.of('If the world has recently been loaded, lag may be present for a few minutes. '),
            Component.of('<shake>Please</shake> ').bold().red(),
            Component.of("allow some time to fully stabilize. Don't forget to read tooltips for some helpful info and\n"),
            Component.of("Hold <rainb>[w]</rainb> to Ponder!\n").yellow(),
            Component.of('\nIf you experience '),
            Component.of('any ').italic(),
            Component.of('form of '),
            Component.of('Z-fighting ').red(),
            Component.of('or '),
            Component.of('flickering ').red(),
            Component.of('on blocks... '),
            Component.of('go to '),
            Component.of('[Video Settings] ').aqua(),
            Component.of('< '),
            Component.of('[Performance] ').aqua(),
            Component.of('then '),
            Component.of('disable or uncheck ').red(),
            Component.of('the setting that says '),
            Component.of('Use Compact Vertex Format').bold().darkAqua(),
            Component.of('. Please note that this is only applicable with '),
            Component.of('Embeddium 0.2+ ').lightPurple(),
            Component.of('and does not work with '),
            Component.of('Oculus ').lightPurple(),
            Component.of('installed!\n'),
            Component.of('\nIf you encounter any bugs after disabling it, please report them'),
            Component.of(' [here] ')
                .clickOpenUrl('https://github.com/Project-Vyre/Finality-Genesis/issues')
                .hover('Opens the Finality Genesis GitHub Issues page.')
                .yellow(),
            Component.of('or speak directly to'),
            Component.of(' embeddedt ').lightPurple(),
            Component.of('himself in his '),
            Component.of('[Discord server]')
                .clickOpenUrl('https://discord.gg/rN9Y7caguP')
                .hover("The link for embeddedt's Discord server.")
                .color(0x5865F2),
            Component.of('. Thank you!\n'),
            Component.of('\nNote: You may need to open chat to see the full message.').underlined().yellow()
        ])
        lootrMsg(event)
    }
})

function lootrMsg(event) {
    if (Platform.isLoaded('lootr') && Platform.isLoaded('carryon')) {
        event.server.scheduleInTicks(300, t => {
            event.player.tell([
                Component.of('<rainb>-----------------------------------------------------</rainb>\n'),
                Component.of('Please remember that it\'s common courtesy to not break'),
                Component.of(' Lootr ').bold().green(),
                Component.of('chests so friends and other players can loot the same chest.\n'),
                Component.of('\nIf need be, '),
                Component.of('[Shift] + R-Click ').aqua(),
                Component.of('on the '),
                Component.of('Lootr ').bold().green(),
                Component.of('chest with the '),
                Component.of('power ').bold().yellow(),
                Component.of('of '),
                Component.of('Carry On ').bold().gold(),
                Component.of('to '),
                Component.of('move ').italic().gold(),
                Component.of('it and R-Click again to place it down somewhere else. It was'),
                Component.of(' not ').bold().italic().red(),
                Component.of('that hard, right?'),
                Component.of('\n<rainb>-----------------------------------------------------</rainb>')
            ])
        })
    }
}

EntityEvents.hurt(event => {
    if (!event.player) return
    if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
        event.player.getChestArmorItem() === 'kubejs:final_chestplate' &&
        event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
        event.player.getFeetArmorItem() === 'kubejs:final_boots'
    ) { event.cancel() }
})

const set = {
    "name": "kubejs:final",
    "effects": [
        {
            "effect": "saturation",
            "duration": 400,
            "amplifier": 255
        },
        {
            "effect": "haste",
            "duration": 400,
            "amplifier": 2
        },
        {
            "effect": "strength",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "speed",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "fire_resistance",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "jump_boost",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "luck",
            "duration": 400,
            "amplifier": 5
        }
    ]
}

const sets = [set];

PlayerEvents.tick(check => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = check.player;
    if (check.player.level.time % 100 === 0) {
        for (let armorSet in sets) {
            if (headArmorItem.id === sets[armorSet].name + '_helmet' &&
                chestArmorItem.id === sets[armorSet].name + '_chestplate' &&
                legsArmorItem.id === sets[armorSet].name + '_leggings' &&
                feetArmorItem.id === sets[armorSet].name + '_boots'
            ) {
                for (let x in sets[armorSet].effects) {
                    check.player.potionEffects.add(
                        sets[armorSet].effects[x].effect,
                        sets[armorSet].effects[x].duration,
                        sets[armorSet].effects[x].amplifier,
                        false,
                        false
                    );
                }
            }
        }
    }
});

LootJS.modifiers((event) => {
    FOUNDATION_METALS.forEach(metal => {
        event.addBlockLootModifier(`minecraft:${metal}_ore`).randomChance(0.2).addLoot(`minecraft:raw_${metal}`)
        event.addBlockLootModifier(`minecraft:deepslate_${metal}_ore`).randomChance(0.3).addLoot(`minecraft:raw_${metal}`)
    })
    event.addBlockLootModifier('create:zinc_ore')
        .randomChance(0.2).addLoot('create:raw_zinc')
    event.addBlockLootModifier('create:deepslate_zinc_ore')
        .randomChance(0.3).addLoot('create:raw_zinc')
    event.addBlockLootModifier('minecraft:spawner')
        .addLoot('8x minecraft:structure_void')
        .randomChance(0.25).addLoot('3x create:experience_nugget')
    event.addEntityLootModifier('minecraft:creeper')
        .randomChance(0.1).addLoot('create:zinc_nugget')
    event.addEntityLootModifier('minecraft:witch')
        .randomChance(0.1).addLoot('minecraft:lapis_lazuli')
    event.addBlockLootModifier('minecraft:grass')
        .randomChance(0.05)
        .addLoot('kubejs:lemon_seed')
})

PlayerEvents.inventoryChanged(event => {
    const { item, level, player } = event
    const { x, y, z } = player
    if (item.hasTag('create:sandpaper') && !player.persistentData.struckBySandpaper) {
        if (item.hasEnchantment('minecraft:mending', 1) ||
            item.hasEnchantment('minecraft:unbreaking', 1) ||
            item.hasEnchantment('apotheosis:life_mending', 1)
        ) {
            level.spawnLightning(x, y, z, false)
            player.tell([
                Component.of('Heavenly Principles: ').bold().red(),
                Component.of('You are a '),
                Component.of('<shake>lazy</shake>').red(),
                Component.of(' engineer. As a '),
                Component.of('consequence').red(),
                Component.of(', a '),
                Component.of('curse').lightPurple(),
                Component.of(' has been inflicted upon you. If you wish to '),
                Component.of('remove').green(),
                Component.of(' it, cleanse yourself with soap.')
            ])
            player.persistentData.struckBySandpaper = true
        }
    } else if (item.hasTag('create:sandpaper') && player.persistentData.struckBySandpaper) {
        if (item.hasEnchantment('minecraft:mending', 1) ||
            item.hasEnchantment('minecraft:unbreaking', 1) ||
            item.hasEnchantment('apotheosis:life_mending', 1)
        ) {
            player.potionEffects.add('minecraft:wither', 999999, 255, false, false)
            player.tell([
                Component.of('Heavenly Principles: ').bold().red(),
                Component.of('If you insist on keeping it... ').red()
            ])
        }
    }
    if (item.getId() == 'create:super_glue' && !player.persistentData.struckBySuperglue) {
        if (item.hasEnchantment('minecraft:mending', 1) ||
            item.hasEnchantment('minecraft:unbreaking', 1) ||
            item.hasEnchantment('apotheosis:life_mending', 1)
        ) {
            level.spawnLightning(x, y, z, false)
            player.tell([
                Component.of('Heavenly Principles: ').bold().red(),
                Component.of('You are a '),
                Component.of('<shake>lazy</shake>').red(),
                Component.of(' engineer. As a '),
                Component.of('consequence').red(),
                Component.of(', a '),
                Component.of('curse').lightPurple(),
                Component.of(' has been inflicted upon you. If you wish to '),
                Component.of('remove').green(),
                Component.of(' it, cleanse yourself with soap.')
            ])
            player.persistentData.struckBySuperglue = true
        }
    } else if (item.getId() == 'create:super_glue' && player.persistentData.struckBySuperglue) {
        if (item.hasEnchantment('minecraft:mending', 1) ||
            item.hasEnchantment('minecraft:unbreaking', 1) ||
            item.hasEnchantment('apotheosis:life_mending', 1)
        ) {
            player.potionEffects.add('minecraft:wither', 999999, 255, false, false)
            player.tell([
                Component.of('Heavenly Principles: ').bold().red(),
                Component.of('If you insist on keeping it... ').red()
            ])
        }
    }
    switch (item.getId()) {
        case 'kubejs:denied_result':
            player.tell([
                Component.of('System: ').bold().green(),
                Component.of('That recipe result has been denied.').lightPurple()
            ])
            player.inventory.clear('kubejs:denied_result')
            break;
        case 'kubejs:removed_item':
            player.tell([
                Component.of('System: ').bold().green(),
                Component.of('That item has been removed.').red()
            ])
            player.inventory.clear('kubejs:removed_item')
            break;
        default:
            break;
    }
    if (Platform.isLoaded('createaddition')) {
        switch (item.getId()) {
            case 'createaddition:diamond_grit':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('createaddition:diamond_grit')
                break;

            case 'createaddition:diamond_grit_sandpaper':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('createaddition:diamond_grit_sandpaper')
                break;

            default:
                break;
        }
    }
    if (Platform.isLoaded('gag') && item.getId() == 'gag:hearthstone') {
        level.spawnLightning(x, y, z, false)
        player.tell(Text.darkRed('<shake>You have an item you that you were not supposed to have.</shake>'))
        player.inventory.clear('gag:hearthstone')
    }
    if (Platform.isLoaded('mysticalagriculture')) {
        switch (item.getId()) {
            case 'mysticalagriculture:basic_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:basic_reprocessor')
                break;

            case 'mysticalagriculture:inferium_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:inferium_reprocessor')
                break;

            case 'mysticalagriculture:prudentium_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:prudentium_reprocessor')
                break;

            case 'mysticalagriculture:tertium_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:tertium_reprocessor')
                break;

            case 'mysticalagriculture:imperium_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:imperium_reprocessor')
                break;

            case 'mysticalagriculture:supremium_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:supremium_reprocessor')
                break;

            case 'mysticalagriculture:awakened_supremium_reprocessor':
                player.tell([
                    Component.of('System: ').bold().green(),
                    Component.of('That item has been removed.').red()
                ])
                player.inventory.clear('mysticalagriculture:awakened_supremium_reprocessor')
                break;

            default:
                break;
        }
    }
})

let modBlacklist = {
    ae2: 'Applied Energistics 2',
    ars_nouveau: 'Ars Nouveau',
    createcasing: 'Create Encased',
    createdieselgenerators: 'Create: Diesel Generators',
    create_confectionery: 'Create Confectionery',
    create_jetpack: 'Create Jetpack',
    create_sa: 'Create Stuff and Additions',
    creategoggles: 'Create Goggles',
    createsifter: 'Create Sifting',
    create_things_and_misc: 'Create: Things and Misc',
    cgm: "MrCrayFish's Gun Mod",
    extendedgears: 'Create: Extended Cogwheels',
    alloyed: 'Create: Alloyed',
    createendertransmission: 'Create: Ender Transmission',
    create_compressed: 'Create: Compressed',
    mekanism: 'Mekanism',
    immersiveengineering: 'Immersive Engineering',
    ftbultimine: 'FTB Ultimine',
    unusualend: 'Unusual End',
    hammerlib: 'HammerLib',
    solarflux: 'Solar Flux Reborn',
    strange: 'Strange Lucky Blocks',
    lucky: 'Lucky Blocks',
    twilightforest: 'Twilight Forest'
}

Object.keys(modBlacklist).forEach(modID => {
    if (Platform.isLoaded(`${modID}`)) {
        ServerEvents.recipes(event => {
            event.remove({})
        })
        console.warn(`${modBlacklist[modID]} has been detected, please remove it from the modpack.`)
        PlayerEvents.loggedIn(event => {
            event.server.tell(`${modBlacklist[modID]} has been detected, please remove it from the modpack.`)
        })
    }
})