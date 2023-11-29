// priority: 0
// requires: create

/**
 * @file The core registry, responsible for items, blocks, fluids, etc.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Helped me a lot very early on. Thank you. Also artist of the gold block texture.
 * @author ChiefArug <https://github.com/ChiefArug> Helped me a lot very early on. Thank you.
 * @author Hunter19823 <https://github.com/Hunter19823> Helped me a lot very early on. Thank you.
 * @author ladylexxie <https://github.com/ladylexxie> Helped a lot very early on. Thank you.
 */

Platform.mods.kubejs.name = 'Finality'

console.info('Loading Finality startup scripts...')

let CMD = {
    command_block: 'Command Block',
    chain_command_block: 'Chain Command Block',
    repeating_command_block: 'Repeating Command Block'
}
let STONE_COMPACTING_INCEPTION = {
    cobblestone: 'Cobblestone',
}
let DEEPSLATE_COMPACTING_INCEPTION = {
    cobbled_deepslate: 'Cobbled Deepslate',
}
let GRAVEL_COMPACTING_INCEPTION = {
    gravel: 'Gravel'
}
let SAND_COMPACTING_INCEPTION = {
    sand: 'Sand'
}
let RED_SAND_COMPACTING_INCEPTION = {
    red_sand: 'Red Sand'
}

global.SHAPES = {
    circle: 'Circle',
    rectangle: 'Rectangle',
    windmill: 'Windmill',
    star: 'Star'
}
let ROTATION = {
    tl: 'Top Left',
    tr: 'Top Right',
    bl: 'Bottom Left',
    br: 'Bottom Right'
}
global.RGBWCMY = {
    uncolored: '§7Uncolored',
    red: '§cColor Red',
    green: '§aColor Green',
    blue: '§9Color Blue',
    white: '§lColor White',
    cyan: '§bColor Cyan',
    magenta: '§dColor Magenta',
    yellow: '§eColor Yellow'
}
let INTEGERS = {
    zero: 'Zero',
    one: 'One',
    two: 'Two',
    three: 'Three',
    four: 'Four',
    five: 'Five',
    six: 'Six',
    seven: 'Seven',
    eight: 'Eight',
    nine: 'Nine'
}
let LETTERS = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G',
    h: 'H',
    i: 'I',
    j: 'J',
    k: 'K',
    l: 'L',
    m: 'M',
    n: 'N',
    o: 'O',
    p: 'P',
    q: 'Q',
    r: 'R',
    s: 'S',
    t: 'T',
    u: 'U',
    v: 'V',
    w: 'W',
    x: 'X',
    y: 'Y',
    z: 'Z'
}
const TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
const ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
const DIVING = ['diving_helmet', 'backtank', 'diving_boots']
let LEGENDARY = ['whisper_of_the_abyss', 'coral_lance', 'divider']
let ABYSS_ARMOR = ['heaume', 'brigantine', 'leggings', 'boots']
let EL_TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'scythe']

/**
 * 
 * @param {*} event 
 * @param {string} itemID 
 * @param {string} displayNameString 
 * @param {string} texturePath 
 */
function shapeItemGeneration(event, itemID, displayNameString, texturePath) {
    event.create(`kubejs:${itemID}`).displayName(`${displayNameString}`).texture(`kubejs:item/shapes/${texturePath}`).maxStackSize(64).fireResistant(true)
}

/**
 * 
 * @param {*} event 
 * @param {string} color 
 * @param {string} displayNameString 
 */
function RGBWCMYK_OBJECTS(event, color, displayNameString) {
    event.create(`kubejs:color_${color}`).displayName(`${displayNameString}`).texture(`kubejs:item/colors/${color}`).maxStackSize(64).fireResistant(true)
}



/**
 * 
 * @param {*} event 
 * @param {string} itemID 
 */
function STANDARD_NO_DISPLAY(event, itemID) {
    event.create(`kubejs:${itemID}`).texture(`kubejs:item/${itemID}`).maxStackSize(64)
}

/**
 * 
 * @param {*} event 
 * @param {string} itemID 
 * @param {string} displayName 
 */
function STANDARD_WITH_DISPLAY(event, itemID, displayName) {
    event.create(`kubejs:${itemID}`).displayName(displayName).texture(`kubejs:item/${itemID}`).maxStackSize(64)
}

/**
 * 
 * @param {*} event 
 * @param {string} itemID 
 * @param {string} displayName 
 * @param {string} texturePath 
 */
function FireResistantItem(event, itemID, displayName, texturePath) {
    event.create(`kubejs:${itemID}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(64).fireResistant(true)
}

/**
 * 
 * @param {*} event 
 * @param {string} itemID 
 * @param {string} displayName 
 * @param {string} texturePath 
 * @param {number} stackSize 
 * @param {boolean} fireResistantBoolean 
 */
function FULL_CUSTOM(event, itemID, displayName, texturePath, stackSize, fireResistantBoolean) {
    event.create(`kubejs:${itemID}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(stackSize).fireResistant(fireResistantBoolean)
}

StartupEvents.registry('item', event => { // Register new items here event.create('example_item').displayName('Example Item')
    STANDARD_NO_DISPLAY(event, 'deepslate_shard')
    STANDARD_NO_DISPLAY(event, 'trident_pole')
    STANDARD_NO_DISPLAY(event, 'trident_prong')
    FULL_CUSTOM(event, 'construction_core_diamond', '§bActivated Construction Diamond Crystal', 'construction_diamond', 16, true)
    FULL_CUSTOM(event, 'dormant_singularity_core', '§d<shake>Dormant Singularity Core</shake>', 'dormant_singularity_core', 16, true)
    FULL_CUSTOM(event, 'awakened_singularity_core', '<shake><rainb>Awakened Singularity Core</rainb></shake>', 'awakened_singularity_core', 8, true)
    FULL_CUSTOM(event, 'denied_result', '§d<shake>Denied Result</shake>', 'denied', 1, true)
    FULL_CUSTOM(event, 'removed_item', '§4<shake>Removed Item</shake>', 'removed', 1, true)
    event.create('kubejs:high_entropy_alloy')
        .displayName('<rainb>High Entropy Alloy</rainb>')
        .texture('kubejs:item/final_ingot')
        .maxStackSize(64)
        .fireResistant(true)
        .group('miscellaneous')

    // tools
    // deprecate .displayName() in 1.20.1+
    event.create('kubejs:final_pickaxe', 'pickaxe').tier('final_tool')
        .displayName('<rainb>Particula Eversorem</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_pickaxe')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:pickaxes')
        .tag('forge:tools')
        .tag('forge:tools/pickaxe')
        .tag('forge:tools/pickaxes')
        .tag('kubejs:final_tools')
        .group('tools')

    event.create('kubejs:final_axe', 'axe').tier('final_tool')
        .displayName('<rainb>Natura Exitium</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_axe')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:axes')
        .tag('forge:tools')
        .tag('forge:tools/axe')
        .tag('forge:tools/axes')
        .tag('kubejs:final_tools')
        .group('tools')

    event.create('kubejs:final_shovel', 'shovel').tier('final_tool')
        .displayName('<rainb>Terra Confractus</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_shovel')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:shovels')
        .tag('forge:tools')
        .tag('forge:tools/shovel')
        .tag('forge:tools/shovels')
        .tag('kubejs:final_tools')
        .group('tools')

    event.create('kubejs:final_hoe', 'hoe').tier('final_tool')
        .displayName('<rainb>Agricola Manus</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_hoe')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:hoes')
        .tag('forge:tools')
        .tag('forge:tools/hoe')
        .tag('forge:tools/hoes')
        .tag('kubejs:final_tools')
        .group('tools')
    // weapons
    event.create('kubejs:final_sword', 'sword').tier('final_tool')
        .displayName('<rainb>Corevis Ultimatum</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_sword')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:swords')
        .tag('forge:tools')
        .tag('forge:tools/sword')
        .tag('forge:tools/swords')
        .tag('kubejs:final_tools')
        .group('combat')

    event.create('kubejs:final_lance', 'sword').tier('final_tool')
        .displayName('<rainb>Tenebris Punctura</rainb>')
        .rarity('epic')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')

    event.create('kubejs:final_scythe', 'sword').tier('final_tool')
        .displayName('<rainb>Scythe of Eternal Oblivion<rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_scythe')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:scythes')
        .tag('forge:tools')
        .tag('forge:tools/scythe')
        .tag('forge:tools/scythes')
        .group('combat')

    event.create('kubejs:final_katana', 'sword').tier('final_tool')
        .displayName('<rainb>Celeritas Obumbratio</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_katana')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')

    event.create('kubejs:crystal_lance', 'sword').tier('crystalline_tool')
        .displayName('<rainb>Crystallus Hasta</rainb>')
        .rarity('epic')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    // armor
    event.create('kubejs:final_helmet', 'helmet').tier('final_armor')
        .displayName('<rainb>Conscientia Oculi</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_helmet')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:helmets')
        .tag('forge:armor')
        .tag('forge:armors')
        .tag('forge:armors/helmets')
        .group('combat')

    event.create('kubejs:final_chestplate', 'chestplate').tier('final_armor')
        .displayName('<rainb>Vitale Cordis</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_chestplate')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:chestplates')
        .tag('forge:armor')
        .tag('forge:armors')
        .tag('forge:armors/chestplates')
        .group('combat')

    event.create('kubejs:final_leggings', 'leggings').tier('final_armor')
        .displayName('<rainb>Universum Motus</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_leggings')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:leggings')
        .tag('forge:armor')
        .tag('forge:armors')
        .tag('forge:armors/leggings')
        .group('combat')

    event.create('kubejs:final_boots', 'boots').tier('final_armor')
        .displayName('<rainb>Gravitas Anchoram</rainb>')
        .rarity('epic')
        .texture('kubejs:item/final_boots')
        .maxStackSize(1)
        .fireResistant(true)
        .tag('forge:boots')
        .tag('forge:armor')
        .tag('forge:armors')
        .tag('forge:armors/boots')
        .group('combat')
    event.create('kubejs:zinc_sheet')
        .texture('kubejs:item/zinc_sheet')
        .tag('forge:plates/zinc')
    event.create('kubejs:netherite_sheet')
        .texture('kubejs:item/netherite_sheet')
        .tag('forge:plates/netherite')
        .fireResistant(true)
    // shapes and alphanumeric
    /**
     * Work in progress replacement.
     * for (const [shape, displayName] of Object.entries(global.SHAPES)) {
     *     for (const [color, colorName] of Object.entries(global.RGBWCMY)) {
     *     }
     * }
     */
    Object.keys(global.SHAPES).forEach(shape => {
        shapeItemGeneration(event, `uncolored_${shape}`, `§7Uncolored ${global.SHAPES[shape]}`, `uncolored_${shape}`)
        shapeItemGeneration(event, `uncolored_left_half_${shape}`, `§7Uncolored Left Half ${global.SHAPES[shape]}`, `halves/uncolored_left_half_${shape}`)
        shapeItemGeneration(event, `uncolored_right_half_${shape}`, `§7Uncolored Right Half ${global.SHAPES[shape]}`, `halves/uncolored_right_half_${shape}`)
        shapeItemGeneration(event, `uncolored_${shape}_corner`, `§7Uncolored ${global.SHAPES[shape]} Corner`, `corners/uncolored_${shape}_corner`)
        // red
        shapeItemGeneration(event, `red_${shape}`, `§l§cRed ${global.SHAPES[shape]}`, `red_${shape}`)
        shapeItemGeneration(event, `red_left_half_${shape}`, `§cRed Left Half ${global.SHAPES[shape]}`, `halves/red_left_half_${shape}`)
        shapeItemGeneration(event, `red_right_half_${shape}`, `§cRed Right Half ${global.SHAPES[shape]}`, `halves/red_right_half_${shape}`)
        shapeItemGeneration(event, `red_${shape}_corner`, `§cRed ${global.SHAPES[shape]} Corner`, `corners/red_${shape}_corner`)
        // green
        shapeItemGeneration(event, `green_${shape}`, `§aGreen ${global.SHAPES[shape]}`, `green_${shape}`)
        shapeItemGeneration(event, `green_left_half_${shape}`, `§aGreen Left Half ${global.SHAPES[shape]}`, `halves/green_left_half_${shape}`)
        shapeItemGeneration(event, `green_right_half_${shape}`, `§aGreen Right Half ${global.SHAPES[shape]}`, `halves/green_right_half_${shape}`)
        shapeItemGeneration(event, `green_${shape}_corner`, `§aGreen ${global.SHAPES[shape]} Corner`, `corners/green_${shape}_corner`)
        // blue
        shapeItemGeneration(event, `blue_${shape}`, `§9Blue ${global.SHAPES[shape]}`, `blue_${shape}`)
        shapeItemGeneration(event, `blue_left_half_${shape}`, `§9Blue Left Half ${global.SHAPES[shape]}`, `halves/blue_left_half_${shape}`)
        shapeItemGeneration(event, `blue_right_half_${shape}`, `§9Blue Right Half ${global.SHAPES[shape]}`, `halves/blue_right_half_${shape}`)
        shapeItemGeneration(event, `blue_${shape}_corner`, `§9Blue ${global.SHAPES[shape]} Corner`, `corners/blue_${shape}_corner`)
        // cyan
        shapeItemGeneration(event, `cyan_${shape}`, `§bCyan ${global.SHAPES[shape]}`, `cyan_${shape}`)
        shapeItemGeneration(event, `cyan_left_half_${shape}`, `§bCyan Left Half ${global.SHAPES[shape]}`, `halves/cyan_left_half_${shape}`)
        shapeItemGeneration(event, `cyan_right_half_${shape}`, `§bCyan Right Half ${global.SHAPES[shape]}`, `halves/cyan_right_half_${shape}`)
        shapeItemGeneration(event, `cyan_${shape}_corner`, `§bCyan ${global.SHAPES[shape]} Corner`, `corners/cyan_${shape}_corner`)
        // magenta
        shapeItemGeneration(event, `magenta_${shape}`, `§dMagenta ${global.SHAPES[shape]}`, `magenta_${shape}`)
        shapeItemGeneration(event, `magenta_left_half_${shape}`, `§dMagenta Left Half ${global.SHAPES[shape]}`, `halves/magenta_left_half_${shape}`)
        shapeItemGeneration(event, `magenta_right_half_${shape}`, `§dMagenta Right Half ${global.SHAPES[shape]}`, `halves/magenta_right_half_${shape}`)
        shapeItemGeneration(event, `magenta_${shape}_corner`, `§dMagenta ${global.SHAPES[shape]} Corner`, `corners/magenta_${shape}_corner`)
        // yellow
        shapeItemGeneration(event, `yellow_${shape}`, `§eYellow ${global.SHAPES[shape]}`, `yellow_${shape}`)
        shapeItemGeneration(event, `yellow_left_half_${shape}`, `§eYellow Left Half ${global.SHAPES[shape]}`, `halves/yellow_left_half_${shape}`)
        shapeItemGeneration(event, `yellow_right_half_${shape}`, `§eYellow Right Half ${global.SHAPES[shape]}`, `halves/yellow_right_half_${shape}`)
        shapeItemGeneration(event, `yellow_${shape}_corner`, `§eYellow ${global.SHAPES[shape]} Corner`, `corners/yellow_${shape}_corner`)
        // white
        shapeItemGeneration(event, `white_${shape}`, `§lWhite ${global.SHAPES[shape]}`, `white_${shape}`)
        shapeItemGeneration(event, `white_left_half_${shape}`, `§lWhite Left Half ${global.SHAPES[shape]}`, `halves/white_left_half_${shape}`)
        shapeItemGeneration(event, `white_right_half_${shape}`, `§lWhite Right Half ${global.SHAPES[shape]}`, `halves/white_right_half_${shape}`)
        shapeItemGeneration(event, `white_${shape}_corner`, `§lWhite ${global.SHAPES[shape]} Corner`, `corners/white_${shape}_corner`)
    })
    FireResistantItem(event, 'blueprint_shape_base', '§9Blueprint Shape Base', 'shapes/blueprint_shape_base')
    FireResistantItem(event, 'blueprint_shape', '§9Blueprint Shape', 'shapes/blueprint_shape')
    FireResistantItem(event, 'cpu_foundation', '§aCPU Shape Foundation', 'shapes/cpu_foundation')
    FireResistantItem(event, 'cpu_substrate_shape', '§aCPU Substrate Shape', 'shapes/cpu_substrate_shape')
    FireResistantItem(event, 'cpu_shape', '§aCPU Shape', 'shapes/cpu_shape')
    FireResistantItem(event, 'emitter_shape_base', '§dEmitter Shape Base', 'shapes/emitter_shape_base')
    FireResistantItem(event, 'emitter_shape', '§dEmitter Shape', 'shapes/emitter_shape')
    Object.keys(LETTERS).forEach(character => {
        event.create(`kubejs:letter_${character}`)
            .displayName(`<rainb>Letter ${LETTERS[character]}</rainb>`)
            .texture(`kubejs:item/alphanumeric_characters/letter_${character}`)
            .maxStackSize(64)
            .fireResistant(true)
            .glow(true)
    })
    Object.keys(INTEGERS).forEach(number => {
        event.create(`kubejs:${number}`)
            .displayName(`<rainb>Number ${INTEGERS[number]}</rainb>`)
            .texture(`kubejs:item/alphanumeric_characters/${number}`)
            .maxStackSize(64)
            .fireResistant(true)
            .glow(true)
    })
    event.create('kubejs:octothorpe')
        .displayName('<rainb>Hashtag</rainb>')
        .texture('kubejs:item/national_characters/octothorpe')
        .maxStackSize(64)
        .fireResistant(true)
        .glow(true)
    event.create('kubejs:slash')
        .displayName('<rainb>Slash</rainb>')
        .texture('kubejs:item/special_characters/slash')
        .maxStackSize(64)
        .fireResistant(true)
        .glow(true)
    event.create('kubejs:at_sign')
        .displayName('<rainb>At Sign</rainb>')
        .texture('kubejs:item/special_characters/at_sign')
        .maxStackSize(64)
        .fireResistant(true)
        .glow(true)
    Object.keys(global.RGBWCMY).forEach(item => {
        RGBWCMYK_OBJECTS(event, item, global.RGBWCMY[item])
    })
    if (Platform.isLoaded('delightful')) {
        event.create('kubejs:dried_matcha_leaves')
            .displayName('Dried Matcha Leaves')
            .texture('kubejs:item/dried_matcha_leaves')
            .maxStackSize(64)
        event.create('kubejs:steamed_matcha_leaves')
            .displayName('Steamed Matcha Leaves')
            .texture('kubejs:item/steamed_matcha_leaves')
            .maxStackSize(64)
    }
})

StartupEvents.registry('block', event => {
    event.create('kubejs:high_entropy_alloy_block')
        .displayName('<rainb>Block of High Entropy Alloy</rainb>')
        .textureAll('kubejs:block/high_entropy_alloy_block')
        .soundType('netherite_block')
        .hardness(500)
        .resistance(1000)
        .lightLevel(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:wither_immune')
        .tagBlock('minecraft:dragon_immune')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:needs_netherite_tool')
        .tagBlock('create:wrench_pickup')
    Object.keys(CMD).forEach(insert => {
        event.create(`kubejs:${insert}`)
            .displayName(`<rainb>${CMD[insert]}</rainb>`)
            .textureAll(`kubejs:block/${insert}`)
            .soundType('netherite_block')
            .hardness(500)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:wither_immune')
            .tagBlock('minecraft:dragon_immune')
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('forge:needs_netherite_tool')
            .tagBlock('create:wrench_pickup')
            .tagItem('kubejs:command_blocks')
            .blockEntity(entityInfo => {
                entityInfo.inventory(9, 1)
                entityInfo.rightClickOpensInventory()
                entityInfo.serverTick(20, 0, entity => {
                    entity.inventory.insertItem('minecraft:netherite_block', false)
                })
            })
    })
    Object.keys(STONE_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${STONE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('stone')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${STONE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('stone')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${STONE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('stone')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    })
    Object.keys(DEEPSLATE_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${DEEPSLATE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('deepslate')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${DEEPSLATE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('deepslate')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${DEEPSLATE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('deepslate')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    })
    Object.keys(GRAVEL_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${GRAVEL_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('gravel')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${GRAVEL_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('gravel')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${GRAVEL_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('gravel')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    })
    Object.keys(SAND_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('sand')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('sand')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('sand')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    })
    Object.keys(RED_SAND_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${RED_SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .soundType('sand')
            .hardness(25)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${RED_SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .soundType('sand')
            .hardness(50)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${RED_SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .soundType('sand')
            .hardness(75)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    })
    event.create('kubejs:null_storage_block')
        .textureAll('kubejs:block/null_storage')
        .defaultCutout()
        .defaultTranslucent()
        .transparent(true)
        .soundType('netherite_block')
        .blockEntity(entityInfo => {
            entityInfo.inventory(9, 9)
            entityInfo.rightClickOpensInventory()
        })
    if (Platform.isLoaded('mob_grinding_utils')) {
        event.create('kubejs:incomplete_spikes')
            .textureAll('kubejs:block/incomplete_placeholder_block')
            .defaultCutout()
            .transparent(true)
            .soundType('metal')
            .hardness(30)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create('kubejs:incomplete_jumbo_tank')
            .textureAll('kubejs:block/incomplete_placeholder_block')
            .defaultCutout()
            .transparent(true)
            .soundType('netherite_block')
            .hardness(30)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    }
})

/**
 * 
 * @param {*} event 
 * @param {string} fluidID 
 * @param {string} displayName 
 * @param {HEX} color 
 */
function MOLTEN_METAL(event, fluidID, displayName, color) {
    event.create(`kubejs:${fluidID}`).displayName(displayName).thickTexture(color).bucketColor(color).luminosity(15)
}

StartupEvents.registry('fluid', event => {
    // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
    event.create('kubejs:condensed_universal_entropy')
        .displayName('<rainb>Condensed Universal Entropy</rainb>')
        .thickTexture(0x7800FF)
        .bucketColor(0x7800FF)
        .luminosity(15)
    MOLTEN_METAL(event, 'molten_iron', '§cMolten Iron', 0xFF8423)
    MOLTEN_METAL(event, 'molten_gold', '§eMolten Gold', 0xFDF55F)
    MOLTEN_METAL(event, 'molten_copper', '§6Molten Copper', 0xFDD686)
    MOLTEN_METAL(event, 'molten_zinc', '§3Molten Zinc', 0xD3E8D6)
    MOLTEN_METAL(event, 'molten_brass', '§eMolten Brass', 0xFBAA68)
    MOLTEN_METAL(event, 'molten_netherite', '§8Molten Netherite', 0x7E6059)
    event.create('kubejs:inferior_infusion_essence')
        .displayName('§eInferior Infusion Essence§r')
        .thickTexture(0xACCF00)
        .bucketColor(0xACCF00)
        .luminosity(7)
    event.create('kubejs:supreme_infusion_essence')
        .displayName('§eSupreme Infusion Essence§r')
        .thickTexture(0xFC0000)
        .bucketColor(0xFC0000)
        .luminosity(15)

    event.create('kubejs:mushroom_stew')
        .thinTexture(0xCA9777)
        .bucketColor(0xCA9777)

    let shimmer = event.create('kubejs:shimmer')
        .flowingTexture('kubejs:block/shimmer_flow')
        .stillTexture('kubejs:block/shimmer_still')
    shimmer.bucketItem.texture('kubejs:item/shimmer_bucket')
    shimmer.bucketItem.glow(true);

    event.create('kubejs:walnut_oil')
        .thinTexture(0x98630B)
        .bucketColor(0x98630B)
    event.create('kubejs:fig_vinegar')
        .thinTexture(0x2F0700)
        .bucketColor(0x2F0700)
    event.create('kubejs:nether_wart_jam')
        .thinTexture(0x5C151A)
        .bucketColor(0x5C151A)
    if (Platform.isLoaded('mysticalagriculture')) {
        event.create('kubejs:infusion_energy')
            .thinTexture(0x99FFF9)
            .bucketColor(0x99FFF9)
    }
})
/*
    event.create('kubejs:shimmer')
        .thinTexture(0xD6CCFF)
        .bucketColor(0xD6CCFF)
*/
// tiers
ItemEvents.toolTierRegistry(event => {
    event.add('final_tool', tier => {
        tier.uses = -1
        tier.speed = 256.0
        tier.attackDamageBonus = 65.0
        tier.level = 5
        tier.enchantmentValue = 30
    })
    event.add('crystalline_tool', tier => {
        tier.uses = -1
        tier.speed = 32
        tier.attackDamageBonus = 42.0
        tier.level = 5
        tier.enchantmentValue = 30
    })
})

ItemEvents.armorTierRegistry(event => {
    event.add('final_armor', tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [99999999, 99999999, 99999999, 99999999]
        tier.enchantmentValue = 30
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.toughness = 99999999
        tier.knockbackResistance = 5.0
    })
})

ItemEvents.modification(event => {
    event.modify('kubejs:final_pickaxe', item => {
        if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 3 }
        if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -2 }
    })
    event.modify('kubejs:final_axe', item => {
        if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 2 }
        if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -2.7 }
    })
    event.modify('kubejs:final_scythe', item => {
        if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 7 }
        if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -0.3 } // entity 4
    })
    event.modify('kubejs:final_katana', item => {
        if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 9 }
        if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -0.1 }
    })
    event.modify('kubejs:final_lance', item => {
        if (!Platform.isLoaded('apotheosis')) { item.attackSpeed = 6 }
        if (Platform.isLoaded('apotheosis')) { item.attackSpeed = -1.5 }
    })
    TOOLS.forEach(tool => {
        event.modify(`minecraft:wooden_${tool}`, item => {
            item.maxDamage = 16
        })
        event.modify(`minecraft:stone_${tool}`, item => {
            item.maxDamage = 128
        })
        event.modify(`minecraft:iron_${tool}`, item => {
            item.maxDamage = 256
        })
        event.modify(`minecraft:diamond_${tool}`, item => {
            item.maxDamage = 1024
        })
        event.modify(`minecraft:netherite_${tool}`, item => {
            item.maxDamage = 4096
        })
    })
    event.modify('minecraft:shears', item => {
        item.maxDamage = 256
    })
    event.modify('minecraft:shield', item => {
        item.maxDamage = 225
    })
    event.modify('minecraft:trident', item => {
        item.maxDamage = 1024
    })
    if (Platform.isLoaded('eccentrictome')) {
        event.modify('eccentrictome:tome', item => {
            item.fireResistant = true
        })
    }
    // Armor durability is synchronized because it does not make sense as to why armor pieces have different durabilities.
    ARMOR.forEach(armor => {
        event.modify(`minecraft:leather_${armor}`, item => {
            item.maxDamage = 128
        })
        event.modify(`minecraft:iron_${armor}`, item => {
            item.maxDamage = 256
        })
        event.modify(`minecraft:golden_${armor}`, item => {
            item.maxDamage = 225
        })
        event.modify(`minecraft:diamond_${armor}`, item => {
            item.maxDamage = 512
        })
        event.modify(`minecraft:netherite_${armor}`, item => {
            item.maxDamage = 2048
        })
    })
    DIVING.forEach(armor => {
        event.modify(`create:copper_${armor}`, item => {
            item.maxDamage = 128
        })
        event.modify(`create:netherite_${armor}`, item => {
            item.maxDamage = 2048
        })
    })
    event.modify('create:super_glue', item => {
        item.maxDamage = 128
    })
    // farmer's delight
    event.modify('farmersdelight:flint_knife', item => {
        item.maxDamage = 256
    })
    event.modify('farmersdelight:iron_knife', item => {
        item.maxDamage = 512
    })
    event.modify('farmersdelight:diamond_knife', item => {
        item.maxDamage = 1820
    })
    event.modify('farmersdelight:netherite_knife', item => {
        item.maxDamage = 4096
    })
    if (Platform.isLoaded('aether')) {
        TOOLS.forEach(tool => {
            event.modify(`aether:zanite_${tool}`, item => {
                item.maxDamage = 256
            })
            event.modify(`aether:gravitite_${tool}`, item => {
                item.maxDamage = 2048
            })
        })
        event.modify('aether:valkyrie_pickaxe', item => {
            item.maxDamage = -1
        })
        event.modify('aether:valkyrie_axe', item => {
            item.maxDamage = -1
        })
        event.modify('aether:valkyrie_shovel', item => {
            item.maxDamage = -1
        })
        event.modify('aether:valkyrie_hoe', item => {
            item.maxDamage = -1
        })
        event.modify('aether:valkyrie_lance', item => {
            item.maxDamage = -1
        })
        event.modify('aether:flaming_sword', item => {
            item.maxDamage = -1
        })
        event.modify('aether:lightning_sword', item => {
            item.maxDamage = -1
        })
        event.modify('aether:holy_sword', item => {
            item.maxDamage = -1
        })
        event.modify('aether:vampire_blade', item => {
            item.maxDamage = -1
        })
        event.modify('aether:pig_slayer', item => {
            item.maxDamage = -1
        })
        event.modify('aether:hammer_of_kingbdogz', item => {
            item.maxDamage = -1
        })
        event.modify('aether:cloud_staff', item => {
            item.maxDamage = -1
        })
        event.modify('aether:phoenix_bow', item => {
            item.maxDamage = -1
        })
        ARMOR.forEach(armor => {
            event.modify(`aether:zanite_${armor}`, item => {
                item.maxDamage = 256
            })
            event.modify(`aether:gravitite_${armor}`, item => {
                item.maxDamage = 1024
            })
            event.modify(`aether:valkyrie_${armor}`, item => {
                item.maxDamage = -1
            })
            event.modify(`aether:neptune_${armor}`, item => {
                item.maxDamage = 256
            })
            event.modify(`aether:phoenix_${armor}`, item => {
                item.maxDamage = 1024
            })
            event.modify(`aether:obsidian_${armor}`, item => {
                item.maxDamage = 2048
            })
        })
        event.modify('aether:sentry_boots', item => {
            item.maxDamage = -1
        })
        event.modify('aether:valkyrie_gloves', item => {
            item.maxDamage = -1
        })
    }

    if (Platform.isLoaded('aquamirae')) {
        LEGENDARY.forEach(insert => {
            event.modify(`aquamirae:${insert}`, item => {
                item.maxDamage = -1
                item.fireResistant = true
            })
        })
        ABYSS_ARMOR.forEach(insert => {
            event.modify(`aquamirae:abyssal_${insert}`, item => {
                item.maxDamage = -1
                item.fireResistant = true
            })
        })
        event.modify('aquamirae:abyssal_tiara', item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
        event.modify('aquamirae:maze_rose', item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
        event.modify('aquamirae:poisoned_chakra', item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
        ARMOR.forEach(insert => {
            event.modify(`aquamirae:three_bolt_${insert}`, item => {
                item.maxDamage = -1
                item.fireResistant = true
            })
        })
    }

    if (Platform.isLoaded('bhc')) {
        event.modify('bhc:blade_of_vitality', item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
    }

    if (Platform.isLoaded('enigmaticlegacy')) {
        EL_TOOLS.forEach(insert => {
            event.modify(`enigmaticlegacy:etherium_${insert}`, item => {
                item.maxDamage = -1
                item.fireResistant = true
            })
        })
        ARMOR.forEach(insert => {
            event.modify(`enigmaticlegacy:etherium${insert}`, item => {
                item.maxDamage = -1
                item.fireResistant = true
            })
        })
        event.modify('enigmaticlegacy:astral_breaker', item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
        event.modify('enigmaticlegacy:forbidden_axe', item => {
            item.maxDamage = 2048
            item.fireResistant = true
        })
    }

    if (Platform.isLoaded('grimoireofgaia')) {
        let weaponBooks = [
            'weapon_book',
            'weapon_book_freezing',
            'weapon_book_nightmare',
            'weapon_book_metal',
            'weapon_book_ender',
            'weapon_book_hunger',
            'weapon_book_battle',
            'weapon_book_nature',
            'weapon_book_wither'
        ]
        weaponBooks.forEach(book => {
            event.modify(`grimoireofgaia:${book}`, item => {
                item.maxDamage = 1024
                item.fireResistant = true
            })
        })
    }

    if (Platform.isLoaded('lilwings')) {
        event.modify('lilwings:enderfly_net', item => {
            item.maxDamage = -1
            item.fireResistant = true
        })
    }

    if (Platform.isLoaded('supplementaries')) {
        event.modify('supplementaries:key', item => {
            item.fireResistant = true
        })
    }
})

BlockEvents.modification(event => {
    event.modify('create:industrial_iron_block', block => {
        block.setExplosionResistance(1200)
    })
})