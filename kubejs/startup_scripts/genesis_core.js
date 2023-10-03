// priority: 0
// requires: kubejs_create
// requires: create
// requires: cataclysm

Platform.mods.kubejs.name = 'Finality'

console.info('Loading Finality startup scripts...')

// let DYE_ID = ['white','orange','magenta','light_blue','lime','pink','purple','light_gray','gray','cyan','brown','green','blue','red','black','yellow']
// let DYE_CAPS = ['WHITE','ORANGE','MAGENTA','LIGHT BLUE','LIME','PINK','PURPLE','LIGHT GRAY','GRAY','CYNA','BROWN','GREEN','BLUE','RED','BLACK','YELLOW']
// let DISPLAY_COLOR = ['White', 'Orange', 'Magenta', 'Light Blue', 'Lime', 'Pink', 'Purple', 'Light Gray', 'Gray', 'Cyan', 'Brown', 'Green', 'Blue', 'Red', 'Black', 'Yellow']

/*
Note to self:
.displayName() is deprecated on 1.20.1.
*/
let NATR = {
    blue_ice: 'Blue Ice',
    sand: 'Sand',
    red_sand: 'Red Sand',
    coarse_dirt: 'Coarse Dirt',
    cobblestone: 'Cobblestone',
    tinted_glass: 'Tinted Glass',
    soul_sand: 'Soul Sand',
    soul_soil: 'Soul Soil',
    end_crystal: 'End Crystal'
}
let CMAT = {
    andesite_alloy: 'Andesite Alloy',
    zinc: 'Zinc',
    copper: 'Copper',
    brass: 'Brass',
    rose_quartz: 'Rose Quartz',
    framed_glass: 'Framed Glass',
    precision_mechanism: 'Precision Mechanism',
    sturdy_sheet: 'Sturdy Sheet',
    track: 'Track',
    chocolate: 'Chocolate',
    builders_tea: "Builder's Tea"
}
let DYE = {
    black: 'Black',
    gray: 'Gray',
    light_gray: 'Light Gray',
    white: 'White',
    pink: 'Pink',
    light_blue: 'Light Blue',
    brown: 'Brown',
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    lime: 'Lime',
    green: 'Green',
    cyan: 'Cyan',
    blue: 'Blue',
    purple: 'Purple',
    magenta: 'Magenta'
}
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
let PRIMORDIAL_MECHANISMS = {
    terra_mechanism: 'Terra Mechanism', // nature related, ingredient for entropy mechanism
    gluttony_mechanism: 'Gluttony Mechanism', // delicacy related, ingredient for entropy mechanism
    metallurgy_mechanism: 'Metallurgy Mechanism', // metal related, ingredient for entropy mechanism
    lattice_mechanism: 'Lattice Mechanism', // crystal related, ingredient for entropy mechanism
    umbral_mechanism: 'Umbral Mechanism', // darkness related, ingredient for entropy mechanism
    genesis_mechanism: 'Genesis Mechanism', // create related, ingredient for entropy mechanism
    ascendant_mechanism: 'Ascendant Mechanism', // experience related, ingredient for entropy mechanism
    entropy_mechanism: 'Entropy Mechanism' // CONSOLIDATION
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
 * @param {string} displayName 
 * @param {string} texturePath 
 */
function transitionalItem(event, itemID, displayName, texturePath) {
    event.create(`kubejs:${itemID}`, 'create:sequenced_assembly').displayName(displayName).texture(`kubejs:item/${texturePath}`)
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
    event.create('kubejs:high_entropy_alloy').displayName('<rainb>High Entropy Alloy</rainb>').texture('kubejs:item/final_ingot').maxStackSize(64).fireResistant(true).group('miscellaneous')
    Object.keys(NATR).forEach(material => {
        event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly').displayName(`§7Incomplete ${NATR[material]} Singularity`).texture(`kubejs:item/incomplete_singularities/nature/incomplete_${material}`).maxStackSize(1)
    })
    Object.keys(CMAT).forEach(material => {
        event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly').displayName(`§7Incomplete ${CMAT[material]} Singularity`).texture(`kubejs:item/incomplete_singularities/incomplete_${material}`).maxStackSize(1)
    })
    // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
    Object.keys(DYE).forEach(color => {
        event.create(`kubejs:incomplete_concrete_${color}_singularity`, 'create:sequenced_assembly').displayName(`§7Incomplete ${DYE[color]} Concrete Singularity`).texture(`kubejs:item/incomplete_singularities/concrete/incomplete_concrete_${color}`).maxStackSize(1)
    })
    Object.keys(PRIMORDIAL_MECHANISMS).forEach(mechanism => {
        event.create(`kubejs:${mechanism}`).displayName(`<rainb>${PRIMORDIAL_MECHANISMS[mechanism]}</rainb>`).texture(`kubejs:item/${mechanism}`).maxStackSize(64).fireResistant(true)
        event.create(`kubejs:incomplete_${mechanism}`, 'create:sequenced_assembly').displayName(`<rainb>Incomplete ${PRIMORDIAL_MECHANISMS[mechanism]}</rainb>`).texture(`kubejs:item/incomplete_${mechanism}`)
    })
    // tools
    event.create('kubejs:final_pickaxe', 'pickaxe').tier('final_tool')
        .rarity('epic')
        .texture('kubejs:item/final_pickaxe')
        .maxStackSize(1)
        .fireResistant(true)
        .group('tools')
    event.create('kubejs:final_axe', 'axe').tier('final_tool')
        .rarity('epic')
        .texture('kubejs:item/final_axe')
        .maxStackSize(1)
        .fireResistant(true)
        .group('tools')
    event.create('kubejs:final_shovel', 'shovel').tier('final_tool')
        .rarity('epic')
        .texture('kubejs:item/final_shovel')
        .maxStackSize(1)
        .fireResistant(true)
        .group('tools')
    event.create('kubejs:final_hoe', 'hoe').tier('final_tool')
        .rarity('epic')
        .texture('kubejs:item/final_hoe')
        .maxStackSize(1)
        .fireResistant(true)
        .group('tools')
    // weapons
    event.create('kubejs:final_sword', 'sword').tier('final_tool')
        .rarity('epic')
        .texture('kubejs:item/final_sword')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    event.create('kubejs:final_lance', 'sword').tier('final_tool')
        .rarity('epic')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    event.create('kubejs:final_katana', 'sword').tier('final_tool')
        .rarity('epic')
        .texture('kubejs:item/final_katana')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    event.create('kubejs:crystal_lance', 'sword').tier('crystalline_tool')
        .rarity('epic')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    // armor
    event.create('kubejs:final_helmet', 'helmet').tier('final_armor')
        .rarity('epic')
        .texture('kubejs:item/final_helmet')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    event.create('kubejs:final_chestplate', 'chestplate').tier('final_armor')
        .rarity('epic')
        .texture('kubejs:item/final_chestplate')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    event.create('kubejs:final_leggings', 'leggings').tier('final_armor')
        .rarity('epic')
        .texture('kubejs:item/final_leggings')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    event.create('kubejs:final_boots', 'boots').tier('final_armor')
        .rarity('epic')
        .texture('kubejs:item/final_boots')
        .maxStackSize(1)
        .fireResistant(true)
        .group('combat')
    // shapes and alphanumeric
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
    transitionalItem(event, 'incomplete_cpu_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu')
    transitionalItem(event, 'incomplete_cpu_substrate_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu_substrate')
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
})

StartupEvents.registry('block', event => {
    event.create('kubejs:high_entropy_alloy_block')
        .displayName('<rainb>Block of High Entropy Alloy</rainb>')
        .textureAll('kubejs:block/high_entropy_alloy_block')
        .material('netherite')
        .hardness(500)
        .resistance(1000)
        .lightLevel(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:wither_immune')
        .tagBlock('minecraft:dragon_immune')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:needs_netherite_tool')
    Object.keys(CMD).forEach(insert => {
        event.create(`kubejs:${insert}`)
            .displayName(`<rainb>${CMD[insert]}</rainb>`)
            .textureAll(`kubejs:block/${insert}`)
            .material('netherite')
            .hardness(500)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:wither_immune')
            .tagBlock('minecraft:dragon_immune')
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('forge:needs_netherite_tool')
            .tagItem('kubejs:command_blocks')
    })
    Object.keys(STONE_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${STONE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .material('stone')
            .hardness(25)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${STONE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .material('stone')
            .hardness(50)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${STONE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .material('stone')
            .hardness(75)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    })
    Object.keys(DEEPSLATE_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${DEEPSLATE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .material('deepslate')
            .hardness(25)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${DEEPSLATE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .material('deepslate')
            .hardness(50)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${DEEPSLATE_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .material('deepslate')
            .hardness(75)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
    })
    Object.keys(GRAVEL_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${GRAVEL_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .material('gravel')
            .hardness(25)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${GRAVEL_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .material('gravel')
            .hardness(50)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${GRAVEL_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .material('gravel')
            .hardness(75)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    })
    Object.keys(SAND_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .material('sand')
            .hardness(25)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .material('sand')
            .hardness(50)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .material('sand')
            .hardness(75)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    })
    Object.keys(RED_SAND_COMPACTING_INCEPTION).forEach(insert => {
        event.create(`kubejs:compressed_${insert}`)
            .displayName(`Compressed ${RED_SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/compressed_${insert}`)
            .material('sand')
            .hardness(25)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:double_compressed_${insert}`)
            .displayName(`<shake>Double Compressed</shake> ${RED_SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/double_compressed_${insert}`)
            .material('sand')
            .hardness(50)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
        event.create(`kubejs:triple_compressed_${insert}`)
            .displayName(`<shake>Triple Compressed</shake> ${RED_SAND_COMPACTING_INCEPTION[insert]}`)
            .textureAll(`kubejs:block/compression/triple_compressed_${insert}`)
            .material('sand')
            .hardness(75)
            .resistance(1000)
            .lightLevel(1.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/shovel')
    })
    if (Platform.isLoaded('mob_grinding_utils')) {
        event.create('kubejs:incomplete_spikes')
            .material('metal')
            .hardness(30)
            .resistance(1000)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
        event.create('kubejs:incomplete_jumbo_tank')
            .material('netherite')
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
    event.create('kubejs:shimmer')
        .flowingTexture('kubejs:block/shimmer_flow')
        .stillTexture('kubejs:block/shimmer_still')
    event.create('kubejs:walnut_oil')
        .thinTexture(0x98630B)
        .bucketColor(0x98630B)
    event.create('kubejs:fig_vinegar')
        .thinTexture(0x2F0700)
        .bucketColor(0x2F0700)
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
        tier.attackDamageBonus = 10.0
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
    event.modify('eccentrictome:tome', item => {
        item.fireResistant = true
    })
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
    }
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