// priority: 0
// requires: kubejs_create
// requires: supplementaries
// requires: lodestone
// requires: salt

console.info('Implementing Finality recipes and compats...')

const WOOD_TYPES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
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

function BINARYCONVERSION(event, output, arrangement) {
    event.recipes.createMechanicalCrafting(`kubejs:${output}`, [
        arrangement
    ], {
        '0': 'kubejs:zero',
        '1': 'kubejs:one'
    }).id(`finality:mechanical_crafting/${output}`)
}

function HEXCODES(event, out, arrangement) {
    event.recipes.createMechanicalCrafting(`kubejs:color_${out}`, [
        arrangement
    ], {
        '#': 'kubejs:octothorpe',
        '0': 'kubejs:zero',
        'F': 'kubejs:letter_f'
    }).id(`finality:mechanical_crafting/color_${out}`)
}

function COLOR_MIXING(event, output_color, color_one, color_two) {
    event.recipes.createMixing(`kubejs:color_${output_color}`, [
        `kubejs:color_${color_one}`,
        `kubejs:color_${color_two}`,
        Fluid.of('kubejs:shimmer', 500)
    ]).id(`finality:mixing/color_${output_color}`)
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
        'F F',
        'FCF',
        ' F '
    ], {
        F: 'create:iron_sheet',
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
    event.recipes.createMixing('kubejs:high_entropy_alloy', [
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
    event.recipes.createMechanicalCrafting('kubejs:crystal_lance', [
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
    event.recipes.createMechanicalCrafting('kubejs:final_katana', [
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
    event.recipes.createMechanicalCrafting('kubejs:final_lance', [
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
    event.recipes.createMixing(Fluid.of('kubejs:mushroom_stew', 250), [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom'
    ]).id('finality:mushroom_stew_mixing')
    event.recipes.createFilling('minecraft:mushroom_stew', [
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
    // item application
    event.recipes.createItemApplication('minecraft:tinted_glass', [
        '#forge:glass/colorless', 'minecraft:amethyst_shard'
    ]).id('minecraft:tinted_glass')
    // compacting
    event.recipes.createCompacting([
        'minecraft:sponge',
        Fluid.of('minecraft:water', 1000)
    ], [
        'minecraft:wet_sponge'
    ]).id('finality:sponge_squeezing')
    event.recipes.createCompacting([
        'minecraft:diamond',
        Item.of('create:experience_nugget').withChance(0.05)
    ], [
        Item.of('minecraft:coal_block', 1),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_diamond')
    event.recipes.createCompacting([
        'minecraft:diamond_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        Item.of('minecraft:coal_block', 9),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_diamond_bulk')
    event.recipes.createCompacting([
        'minecraft:coal',
        Item.of('create:experience_nugget').withChance(0.05)
    ], [
        Item.of('minecraft:dried_kelp_block', 1)
    ]).heated().id('finality:renew_coal')
    event.recipes.createCompacting([
        'minecraft:coal_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        Item.of('minecraft:dried_kelp_block', 9)
    ]).heated().id('finality:renew_coal_bulk')
    event.recipes.createCompacting([
        'minecraft:basalt'
    ], [
        'minecraft:blue_ice',
        Fluid.of('minecraft:lava', 500)
    ]).id('finality:compacting_basalt')
    event.recipes.createCompacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:gravel', 9),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:deepslate', 9),
        Fluid.of('minecraft:lava', 250)
    ]).heated().id('finality:renew_deepslate_tuff')
    event.recipes.createCompacting('minecraft:calcite', [
        'minecraft:amethyst_shard',
        'minecraft:cobbled_deepslate',
        'minecraft:bone_meal'
    ]).heated().id('finality:renew_calcite')
    event.recipes.createCompacting('minecraft:ice', '9x minecraft:snow_block').id('finality:snow_compacting')
    // milling
    // crushing
    event.remove({ id: 'create:crushing/netherrack' })
    event.recipes.createCrushing([
        Item.of('minecraft:pointed_dripstone', 4),
        Item.of('minecraft:clay_ball').withChance(0.50),
        Item.of('create:copper_nugget').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75)
    ], 'minecraft:dripstone_block').processingTime(250).id('finality:dripstone_crushing')
    event.recipes.createCrushing([
        Item.of('create:copper_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.10)
    ], 'minecraft:basalt').processingTime(250).id('finality:basalt_crushing')
    event.recipes.createCrushing([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('minecraft:netherite_scrap').withChance(0.0002)
    ], 'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
    event.recipes.createCrushing([
        Item.of('minecraft:gold_nugget', 5).withChance(0.10),
        Item.of('create:experience_nugget', 2).withChance(0.05)
    ], 'minecraft:gilded_blackstone').processingTime(250).id('finality:gilded_blackstone_crushing')
    event.recipes.createCrushing(Item.of('9x kubejs:deepslate_shard').withChance(0.75), 'minecraft:deepslate').processingTime(250).id('finality:deepslate_shard_from_deepslate')
    event.recipes.createCrushing(Item.of('kubejs:deepslate_shard', 9).withChance(0.25), 'minecraft:cobbled_deepslate').processingTime(250).id('finality:deepslate_shard_from_cobbled_deepslate')
    // filling
    event.recipes.createFilling('minecraft:netherrack', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
    ]).id('finality:living_flesh_stone')
    event.recipes.createFilling('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 90)
    ]).id('finality:netherite_ingot_from_spout')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
    event.recipes.createHaunting(['minecraft:phantom_membrane'], 'minecraft:rotten_flesh').id('finality:phantom_membrane_from_flesh')
    event.recipes.createHaunting([
        Item.of('minecraft:echo_shard').withChance(0.02),
        Item.of('minecraft:disc_fragment_5').withChance(0.01)
    ], 'kubejs:deepslate_shard').id('finality:echo_shard_from_haunting')
    event.recipes.createHaunting([
        'minecraft:wither_skeleton_skull',
        Item.of('minecraft:coal').withChance(0.25)
    ], 'minecraft:skeleton_skull').id('finality:haunting/wither_skeleton_skull')
    // splashing
    event.recipes.createSplashing(['minecraft:piston'], 'minecraft:sticky_piston').id('finality:sticky_piston_splashing')
    event.recipes.createSplashing(['create:mechanical_piston'], 'create:sticky_mechanical_piston').id('finality:sticky_mechanical_piston_splashing')
    // blasting
    event.blasting('create:zinc_block', 'create:raw_zinc_block').id('finality:zinc_block_blasting_compat')
    // mixing 
    event.recipes.createMixing('minecraft:dirt', [
        'minecraft:gravel',
        '3x minecraft:bone_meal'
    ]).id('finality:dirt_from_gravel')
    event.recipes.createMixing(['minecraft:coarse_dirt'], [
        'minecraft:dirt', 'minecraft:gravel'
    ]).id('finality:coarse_dirt')
    event.recipes.createMixing([Fluid.of('kubejs:molten_gold', 90)], ['minecraft:gold_ingot']).heated().id('finality:gold_ingot_melting')
    event.recipes.createMixing(['minecraft:netherite_ingot'], [Item.of('minecraft:netherite_scrap', 4), Fluid.of('kubejs:molten_gold', 360)]).heated().id('finality:netherite_ingot_from_mixing')
    event.recipes.createMixing(['minecraft:emerald'], [
        'minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget'
    ]).superheated().id('finality:renew_emerald') // Be3Al2(SiO3)6
    event.recipes.createMixing(['minecraft:nether_gold_ore'], [
        'create:cinder_flour',
        '18x minecraft:gold_nugget',
        Fluid.of('minecraft:lava', 180)
    ]).id('finality:nether_gold_ore_deco') // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing('salt:salt', [
        Fluid.of('minecraft:water', 1000)
    ]).heated().id('finality:create_salt_compat')
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
        event.recipes.createMixing('create:dough', [
            'create:wheat_flour',
            Fluid.of('minecraft:water', 1000)
        ]).id('create:mixing/dough_by_mixing')
        event.remove({ id: 'farmersdelight:wheat_dough_from_water' })
    }
    // supplementaries related
    event.shaped('supplementaries:quiver', [
        'RRL',
        'RLL',
        'LL '
    ], {
        R: '#forge:rope',
        L: '#forge:leather'
    }).id('finality:supplementaries_quiver')
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
    // removed create items
    event.recipes.createMixing('create:chromatic_compound', [
        '3x minecraft:glowstone_dust',
        '3x create:powdered_obsidian',
        'create:polished_rose_quartz'
    ]).superheated().id('create:mixing/chromatic_compound')
    event.recipes.createItemApplication('create:refined_radiance_casing', [
        '#forge:stripped_logs',
        'create:refined_radiance'
    ]).id('create:refined_radiance_casing')
    event.recipes.createItemApplication('create:shadow_steel_casing', [
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
    event.recipes.createMechanicalCrafting('minecraft:spawner', [
        'VVV',
        'VSV',
        'VVV'
    ], {
        V: 'minecraft:structure_void',
        S: 'minecraft:soul_campfire'
    }).id('finality:spawner')
    CMD.forEach(insert => {
        event.recipes.createDeploying([
            'kubejs:zero',
            'kubejs:one',
            `kubejs:${insert}`
        ], [
            `kubejs:${insert}`,
            'kubejs:final_pickaxe'
        ]).keepHeldItem().id(`finality:binary_from_${insert}`)
        event.recipes.createDeploying([
            'minecraft:structure_void',
            `kubejs:${insert}`
        ], [
            `kubejs:${insert}`,
            'kubejs:final_hoe'
        ]).keepHeldItem().id(`finality:structure_void_from_${insert}`)
    })
    event.recipes.createDeploying([
        'kubejs:command_block',
        'kubejs:uncolored_rectangle'
    ], [
        'kubejs:command_block',
        'kubejs:final_axe'
    ]).keepHeldItem().id('finality:uncolored_rectangle')
    event.recipes.createDeploying([
        'kubejs:chain_command_block',
        'kubejs:uncolored_circle'
    ], [
        'kubejs:chain_command_block',
        'kubejs:final_axe'
    ]).keepHeldItem().id('finality:uncolored_circle')
    event.recipes.createDeploying([
        'kubejs:repeating_command_block',
        'kubejs:uncolored_star',
        'kubejs:uncolored_windmill'
    ], [
        'kubejs:repeating_command_block',
        'kubejs:final_axe'
    ]).keepHeldItem().id('finality:uncolored_star')
    event.recipes.createMechanicalCrafting('kubejs:color_uncolored', [
        '#AAAAAA'
    ], {
        '#': 'kubejs:octothorpe',
        'A': 'kubejs:letter_a'
    }).id('finality:mechanical_crafting/uncolored')
    event.recipes.createMechanicalCrafting('kubejs:color_white', [
        '#FFFFFF'
    ], {
        '#': 'kubejs:octothorpe',
        'F': 'kubejs:letter_f'
    }).id('finality:mechanical_crafting/color_white')
    HEXCODES(event, 'red', '#FF0000')
    HEXCODES(event, 'green', '#00FF00')
    HEXCODES(event, 'blue', '#0000FF')
    HEXCODES(event, 'magenta', '#FF00FF')
    HEXCODES(event, 'yellow', '#00FFFF')
    HEXCODES(event, 'cyan', '#00FFFF')
    COLOR_MIXING(event, 'magenta', 'red', 'blue')
    COLOR_MIXING(event, 'yellow', 'red', 'green')
    COLOR_MIXING(event, 'cyan', 'green', 'blue')
    Object.keys(LETTER_BINARY_CODES).forEach(insert => {
        BINARYCONVERSION(event, `${insert}`, `${LETTER_BINARY_CODES[insert]}`)
    })
    Object.keys(INTEGER_BINARY).forEach(insert => {
        BINARYCONVERSION(event, `${insert}`, `${INTEGER_BINARY[insert]}`)
    })
    BINARYCONVERSION(event, 'octothorpe', '00100011')
    BINARYCONVERSION(event, 'slash', '00101111')
    BINARYCONVERSION(event, 'at_sign', '01000000')
    Object.keys(global.SHAPES).forEach(shape => {
        VALID_COLOR_MIX.forEach(color => {
            event.recipes.createMixing(`kubejs:${color}_${shape}`, [
                `kubejs:uncolored_${shape}`,
                `kubejs:color_${color}`,
                Fluid.of('create:honey', 250)
            ]).heated().id(`finality:uncolored_to_${color}_${shape}_mixing`)
            event.recipes.createMixing(`kubejs:uncolored_${shape}`, [
                `kubejs:${color}_${shape}`,
                'supplementaries:soap',
                Fluid.of('minecraft:water', 500)
            ]).id(`finality:${color}_${shape}_washing`)
        })
        Object.keys(global.RGBWCMY).forEach(color => {
            event.recipes.createCutting([
                `kubejs:${color}_left_half_${shape}`,
                `kubejs:${color}_right_half_${shape}`
            ], `kubejs:${color}_${shape}`).id(`finality:${color}_${shape}_halving`)
            event.recipes.createCutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_left_half_${shape}`).id(`finality:${color}_${shape}_left_half_halving`)
            event.recipes.createCutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_right_half_${shape}`).id(`finality:${color}_${shape}_right_half_halving`)
        })
    })
    event.recipes.createMixing('kubejs:color_white', [
        'kubejs:color_red',
        'kubejs:color_green',
        'kubejs:color_blue',
        Fluid.of('kubejs:shimmer', 250)
    ]).id('finality:mixing/color_white')
    // shimmer usage
    event.recipes.createMixing(Fluid.of('kubejs:shimmer', 250), [
        Fluid.of('kubejs:condensed_universal_entropy', 500),
        Fluid.of('minecraft:water', 500),
        'minecraft:glowstone_dust',
        'minecraft:redstone',
        'create:polished_rose_quartz'
    ]).superheated().id('finality:mixing/shimmer_fluid_creation')
    event.recipes.createCompacting([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('create:experience_nugget').withChance(0.25),
        Item.of('minecraft:netherite_scrap').withChance(0.02)
    ], [
        Fluid.of('kubejs:shimmer', 750),
        'minecraft:netherrack',
    ]).id('finality:compacting/netherite_scrap_renewal')
    event.recipes.createMechanicalCrafting('kubejs:blueprint_shape_base', [
        'RC',
        'CC'
    ], {
        R: 'kubejs:blue_rectangle_corner',
        C: 'kubejs:blue_circle_corner'
    }).id('finality:blueprint_shape_base')
    event.recipes.createDeploying('kubejs:blueprint_shape', ['kubejs:blueprint_shape_base', 'kubejs:white_circle']).id('finality:blueprint_shape')
    event.recipes.createMechanicalCrafting('kubejs:cpu_foundation', [
        ' R',
        'R '
    ], {
        R: 'kubejs:green_rectangle_corner'
    }).id('finality:cpu_foundation')
    event.recipes.createSequencedAssembly([
        Item.of('kubejs:cpu_substrate_shape').withChance(240.0),
        Item.of('kubejs:green_rectangle_corner', 2).withChance(70.0),
        Item.of('kubejs:white_rectangle_corner', 2).withChance(70.0),
        Item.of('kubejs:white_circle_corner', 2).withChance(50.0)
    ], 'kubejs:cpu_foundation', [
        event.recipes.createDeploying('kubejs:incomplete_cpu_substrate_shape', ['kubejs:incomplete_cpu_substrate_shape', 'kubejs:white_circle_corner']),
        event.recipes.createDeploying('kubejs:incomplete_cpu_substrate_shape', ['kubejs:incomplete_cpu_substrate_shape', 'kubejs:white_circle_corner']),
    ]).transitionalItem('kubejs:incomplete_cpu_substrate_shape').loops(1).id('finality:cpu_substrate_creation')
    event.recipes.createSequencedAssembly([
        'kubejs:cpu_shape'
    ], 'kubejs:cpu_substrate_shape', [
        event.recipes.createDeploying('kubejs:incomplete_cpu_shape', ['kubejs:incomplete_cpu_shape', 'kubejs:white_rectangle_corner']),
        event.recipes.createDeploying('kubejs:incomplete_cpu_shape', ['kubejs:incomplete_cpu_shape', 'kubejs:green_rectangle_corner'])
    ]).transitionalItem('kubejs:incomplete_cpu_shape').loops(2).id('finality:cpu_shape')
    event.recipes.createMechanicalCrafting('kubejs:emitter_shape_base', [
        ' C',
        'CR'
    ], {
        C: 'kubejs:magenta_circle_corner',
        R: 'kubejs:magenta_rectangle_corner'
    }).id('finality:emitter_shape_base')
    event.recipes.createDeploying('kubejs:emitter_shape', ['kubejs:emitter_shape_base', 'kubejs:white_star']).id('finality:emitter_shape')
    // give
    event.recipes.createMechanicalCrafting('64x minecraft:netherite_block', [
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
    if (Platform.isLoaded('quark')) {
        event.shaped('minecraft:hopper', [
            'ILI',
            'ILI',
            ' I '
        ], {
            I: 'create:iron_sheet',
            L: '#minecraft:logs'
        }).id('quark:tweaks/crafting/utility/misc/easy_hopper')
        event.shaped('4x kubejs:denied_result', [
            'LLL',
            'L L',
            'LLL'
        ], {
            L: '#minecraft:logs'
        }).id('quark:tweaks/crafting/utility/chests/mixed_chest_wood_but_without_exclusions')
    }
})

ServerEvents.tags('item', event => {
    if (Platform.isLoaded('aether')) {
        event.add('aether:slider_damaging_items', 'kubejs:final_pickaxe')
    }
})

ServerEvents.tags('block', event => {
    event.add('minecraft:needs_stone_tool', 'minecraft:deepslate')
})

PlayerEvents.loggedIn(event => {
    // Give the player the quest book on first join
    if (!event.player.persistentData.contains('firstjoin')) {
        event.player.persistentData.putBoolean('firstjoin', true)
        event.player.give('ftbquests:book')
    }
})

ServerEvents.loaded(event => {
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        console.warn('First server load! Lag may be present for a few minutes. Also, please check your Quest Book to get your bearings.')
    }
})

EntityEvents.hurt(event => {
    if (!event.player) return
    if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
        event.player.getChestArmorItem() === 'kubejs:final_chestplate' &&
        event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
        event.player.getFeetArmorItem() === 'kubejs:final_boots'
    ) {
        event.cancel()
    }
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
    if (check.player.level.time % 100 == 0) {
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
                        sets[armorSet].effects[x].amplifier
                    );
                }
            };
        }
    };
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
    event.addBlockLootModifier('minecraft:spawner').addLoot('8x minecraft:structure_void')
    event.addEntityLootModifier('minecraft:creeper')
        .randomChance(0.1).addLoot('create:zinc_nugget')
    event.addEntityLootModifier('minecraft:witch')
        .randomChance(0.1).addLoot('minecraft:lapis_lazuli')
    if (Platform.isLoaded('aether')) {
        event.addBlockLootModifier('aether:ambrosium_ore')
            .randomChance(0.2).addLoot('aether:ambrosium_shard')
        event.addBlockLootModifier('aether:zanite_ore')
            .randomChance(0.12).addLoot('aether:zanite_gemstone')
    }
    if (Platform.isLoaded('irons_spellbooks')) {
        event.addEntityLootModifier('minecraft:witch')
            .randomChance(0.1).addLoot('irons_spellbooks:common_ink')
            .randomChance(0.07).addLoot('irons_spellbooks:uncommon_ink')
            .randomChance(0.05).addLoot('irons_spellbooks:rare_ink')
            .randomChance(0.03).addLoot('irons_spellbooks:epic_ink')
            .randomChance(0.01).addLoot('irons_spellbooks:legendary_ink')
    }
});

PlayerEvents.inventoryChanged(event => {
    const { item, level, player } = event
    const { x, y, z } = player
    if (item.hasTag('create:sandpaper') && !player.persistentData.struckBySandpaper) {
        if (item.hasEnchantment('minecraft:mending', 1) || item.hasEnchantment('minecraft:unbreaking', 1)) {
            level.spawnLightning(x, y, z, false)
            player.tell(Text.darkRed("<shake>You are a lazy engineer.</shake>"))
            player.persistentData.struckBySandpaper = true
        }
    }
})

EntityEvents.death('minecraft:wither', event => {
    event.player.notify(Notification.make(toast => {
        toast.text = [
            Text.of("The Wither has been killed!").bold(),
            Text.of('subtitle')
        ]
        toast.icon = 'minecraft:wither_skeleton_skull'
        toast.outlineColor = '#006055'
        toast.backgroundColor = '#1b3a1b'
        toast.borderColor = '#267523'
    }))
})

/*
let CLOCK = 0
let sentience = [repairHint, worldMaintenance,]
ServerEvents.tick(event => {

})

BlockEvents.rightClicked('minecraft:bedrock', event => {
    event.entity.notify(Notification.make(n => {
        n.text = [
            'Why?',
            'subtitle'
        ]
        n.icon = 'minecraft:bedrock'
        n.outlineColor = '#006055'
        n.backgroundColor = '#1b3a1b'
        n.borderColor = '#267523'
    }))
})

EntityEvents.death('minecraft:wither', event => event.player.notify({
    itemIcon: 'minecraft:wither_skeleton_skull',
    backgroundColor: 'darkPurple',
    borderColor: '0x'
}))
*/

LevelEvents.afterExplosion(event => {
    const { x, y, z, level } = event
    level.getEntitiesWithin(AABB.of(x - 20, y - 20, z - 20, x + 20, y + 20, z + 20)).forEach(entity => {
        if (entity.isPlayer()) {
            let distance = entity.getDistance(x, y, z)
            distance = 20 - distance
            distance = distance / 20 * 2
            entity.sendData('screenshake', { i1: distance * 0.6, i2: distance, i3: distance * 0.2, duration: 15 })
        }
    })
})

let BLACKLIST = {
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

Object.keys(BLACKLIST).forEach(modid => {
    if (Platform.isLoaded(`${modid}`)) {
        ServerEvents.recipes(event => {
            event.remove({})
        })
        console.warn(`${BLACKLIST[modid]} has been detected, please remove it from the modpack.`)
        PlayerEvents.loggedIn(event => {
            event.server.tell(`${BLACKLIST[modid]} has been detected, please remove it from the modpack.`)
        })
    }
})