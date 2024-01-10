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
    event.recipes.create.mechanical_crafting('create:handheld_worldshaper', [
        'CPULOO',
        'II    '
    ], {
        C: 'kubejs:repeating_command_block',
        P: 'kubejs:entropy_mechanism',
        U: 'kubejs:chain_command_block',
        L: 'kubejs:command_block',
        O: 'kubejs:high_entropy_alloy_sheet',
        I: 'kubejs:high_entropy_alloy'
    }).id('finality:mechanical_crafting/create_worldshaper')
    event.recipes.create.mixing(Fluid.of('kubejs:mushroom_stew', 250), [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom',
        Fluid.of('minecraft:water', 250)
    ]).heated().id('finality:mushroom_stew_mixing')
    event.recipes.create.filling('minecraft:mushroom_stew', [
        'minecraft:bowl',
        Fluid.of('kubejs:mushroom_stew', 250)
    ]).id('finality:mushroom_stew_pouring')
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
    event.shapeless('create:mechanical_piston', [
        'supplementaries:soap', 'create:sticky_mechanical_piston'
    ]).id('finality:mechanical_piston_soap_washing')
    /**
     * Milling
     */
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
    event.recipes.create.sequenced_assembly('minecraft:dripstone_block', 'minecraft:stone', [
        event.recipes.create.filling('kubejs:dripstone_transitional_stone', ['kubejs:dripstone_transitional_stone', Fluid.of('minecraft:water', 25)])
    ]).transitionalItem('kubejs:dripstone_transitional_stone').loops(7).id('finality:sequenced_assembly/dripstone_block')
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
    // supplementaries related
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
    for (let i = 0; i < STORAGE_INCEPTION.length; i++) {
        let insert = STORAGE_INCEPTION[i];
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
    }
    event.shaped('minecraft:netherite_ingot', [
        'NNN',
        'NNN',
        'NNN'
    ], {
        N: 'kubejs:netherite_nugget'
    }).id('finality:netherite_ingot_from_nuggets')
    event.shapeless('9x kubejs:netherite_nugget', 'minecraft:netherite_ingot').id('finality:netherite_nugget')
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
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:potion_base_singularity').withChance(0.25),
        Item.of('kubejs:errored_result').withChance(0.25),
        Item.of('minecraft:potion', '{Potion:"minecraft:mundane"}').withChance(0.25),
        Item.of('minecraft:potion', '{Potion:"minecraft:thick"}').withChance(0.25),
        Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}').withChance(0.25)
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
        Item.of('kubejs:blaze_cake_singularity').withChance(0.25),
        Item.of('kubejs:errored_result').withChance(0.75),
        'create:cinder_flour',
        'minecraft:egg'
    ], 'kubejs:awakened_singularity_core', [
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.deploying('kubejs:incomplete_blaze_cake_singularity', ['kubejs:incomplete_blaze_cake_singularity', 'create:blaze_cake']),
        event.recipes.create.pressing('kubejs:incomplete_blaze_cake_singularity', 'kubejs:incomplete_blaze_cake_singularity')
    ]).transitionalItem('kubejs:incomplete_blaze_cake_singularity').loops(32).id('finality:sequenced_assembly/blaze_cake_singularity')
    for (let i = 0; i < CMD.length; i++) {
        let insert = CMD[i];
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
    }
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
    for (const [letter, binary] of Object.entries(LETTER_BINARY_CODES)) {
        BINARYCONVERSION(`${letter}`, `${binary}`)
    }
    for (const [integer, binary] of Object.entries(INTEGER_BINARY)) {
        BINARYCONVERSION(`${integer}`, `${binary}`)
    }
    BINARYCONVERSION('octothorpe', '00100011')
    BINARYCONVERSION('slash', '00101111')
    BINARYCONVERSION('at_sign', '01000000')
    for (let [shape, string] of Object.entries(global.SHAPES)) {
        for (let color of VALID_COLOR_MIX) {
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
        }
        for (let [color, string] of Object.entries(global.RGBWCMY)) {
            event.recipes.create.cutting([
                `kubejs:${color}_left_half_${shape}`,
                `kubejs:${color}_right_half_${shape}`
            ], `kubejs:${color}_${shape}`).id(`finality:${color}_${shape}_halving`)
            event.recipes.create.cutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_left_half_${shape}`)
                .id(`finality:${color}_${shape}_left_half_halving`)
            event.recipes.create.cutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_right_half_${shape}`)
                .id(`finality:${color}_${shape}_right_half_halving`)
        }
    }
    event.recipes.create.mixing('kubejs:color_white', [
        'kubejs:color_red',
        'kubejs:color_green',
        'kubejs:color_blue',
        Fluid.of('kubejs:shimmer', 250)
    ]).id('finality:mixing/color_white')
    // shimmer usage
    event.recipes.create.mixing(Fluid.of('kubejs:shimmer', 1000), [
        'create:refined_radiance',
        Fluid.of('kubejs:condensed_universal_entropy', 500),
        Fluid.of('minecraft:water', 500)
    ]).superheated().id('finality:mixing/shimmer_fluid_creation')
    event.recipes.create.compacting([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('create:experience_nugget').withChance(0.25),
        Item.of('minecraft:netherite_scrap').withChance(0.25)
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
    event.recipes.create.mixing('kubejs:qubit', [
        'kubejs:zero',
        'kubejs:one'
    ]).superheated().id('finality:mixing/qubit')
    event.recipes.create.sequenced_assembly([
        Item.of('kubejs:zero').withChance(0.10),
        Item.of('kubejs:one').withChance(0.10),
        Item.of('kubejs:two').withChance(0.10),
        Item.of('kubejs:three').withChance(0.10),
        Item.of('kubejs:four').withChance(0.10),
        Item.of('kubejs:five').withChance(0.10),
        Item.of('kubejs:six').withChance(0.10),
        Item.of('kubejs:seven').withChance(0.10),
        Item.of('kubejs:eight').withChance(0.10),
        Item.of('kubejs:nine').withChance(0.10)
    ], 'kubejs:qubit', [
        event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice']),
        event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice']),
        event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice']),
        event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice'])
    ]).transitionalItem('kubejs:stabilizing_qubit').loops(4).id('finality:sequenced_assembly/qubit_stabilization')
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
        if (!Platform.isLoaded('ftbquests') &&
            Platform.isLoaded('supplementaries') &&
            !Platform.isLoaded('backpacked')
        ) {
            event.player.give('supplementaries:sack')
            event.player.tell([
                Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
                Component.of('Words enclosed with the '),
                Component.of('[] ').bold().green(),
                Component.of('brackets are usually links! Do not forget to '),
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
            findMeMsg(event)
        }
        if (Platform.isLoaded('ftbquests') &&
            Platform.isLoaded('supplementaries') &&
            Platform.isLoaded('backpacked')
        ) {
            event.player.give('ftbquests:book')
            event.player.give('supplementaries:sack')
            event.player.give('backpacked:backpack')
            event.player.tell([
                Component.of('First world load! Lag may be present for a few minutes.\n').bold().gold(),
                Component.of('Words enclosed with the '),
                Component.of('[] ').bold().green(),
                Component.of('brackets are usually links! Also, please check your Quest Book and read its tooltips to get your bearings. Before I go, do not forget to '),
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
            findMeMsg(event)
        }
    } else if (event.player.persistentData.contains('firstjoin')) {
        event.player.tell([
            Component.of('Welcome back!\n').bold().green(),
            Component.of('If the world has recently been loaded, lag may be present for a few minutes. '),
            Component.of('<shake>Please</shake> ').bold().red(),
            Component.of('allow some time to fully stabilize.\n'),
            Component.of('In case you didn\'t see previously, words enclosed with the '),
            Component.of('[] ').bold().green(),
            Component.of('brackets are links so feel free to mouse over them. Don\'t forget to read tooltips for some helpful info and '),
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
        findMeMsg(event)
    }
})

function lootrMsg(event) {
    if (Platform.isLoaded('lootr') && Platform.isLoaded('carryon')) {
        event.server.scheduleInTicks(420, t => {
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

function findMeMsg(event) {
    if (Platform.isLoaded('findme')) {
        event.server.scheduleInTicks(720, t => {
            event.player.tell([
                Component.of('-----------------------------------------------------\n').green(),
                Component.of('Also another thing, '),
                Component.of('FindMe ').bold().aqua(),
                Component.of('has been added so you can '),
                Component.of('press ').yellow(),
                Component.of('[Y] ').green(),
                Component.of('while hovering over an item to search nearby chests.'),
                Component.of('\n-----------------------------------------------------').green()
            ])
        })
    }
}

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
    createutilities: 'Create Utilities',
    cgm: "MrCrayFish's Gun Mod",
    extendedgears: 'Create: Extended Cogwheels',
    alloyed: 'Create: Alloyed',
    createendertransmission: 'Create: Ender Transmission',
    create_compressed: 'Create: Compressed',
    mekanism: 'Mekanism',
    immersiveengineering: 'Immersive Engineering',
    unusualend: 'Unusual End',
    hammerlib: 'HammerLib',
    solarflux: 'Solar Flux Reborn',
    strange: 'Strange Lucky Blocks',
    lucky: 'Lucky Blocks',
    twilightforest: 'Twilight Forest',
    createunlimited: 'Create: Unlimited'
}

for (let [id, name] of Object.entries(modBlacklist)) {
    if (Platform.isLoaded(`${id}`)) {
        ServerEvents.recipes(event => {
            event.remove({})
        })
        ServerEvents.tick(event => {
            console.error(`${name} has been detected, please remove it from the modpack.`)
        })
        PlayerEvents.loggedIn(event => {
            event.server.tell(`${name} has been detected, please remove it from the modpack.`)
        })
    }
}