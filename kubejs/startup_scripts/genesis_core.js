// priority: 10
// requires: create

/**
 * @file The core registry, responsible for items, blocks, fluids, etc.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author squoshi <https://github.com/squoshi> Helped me a lot very early on. Thank you. Also artist of the gold block texture.
 * @author ChiefArug <https://github.com/ChiefArug> Helped me a lot very early on. Thank you.
 * @author Hunter19823 <https://github.com/Hunter19823> Helped me a lot very early on. Thank you.
 * @author ladylexxie <https://github.com/ladylexxie> Helped a lot very early on. Thank you.
 */

Platform.mods.kubejs.name = 'FinalityJS'

console.info('Loading Finality startup scripts...')

let CMD = {
    command_block: 'Command Block',
    chain_command_block: 'Chain Command Block',
    repeating_command_block: 'Repeating Command Block'
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

StartupEvents.registry('item', event => { // Register new items here event.create('example_item').displayName('Example Item')
    /**
     * 
     * @param {string} itemId 
     */
    function standardNoDisplay(itemId) {
        event.create(`kubejs:${itemId}`).texture(`kubejs:item/${itemId}`).maxStackSize(64)
    }
    /**
     * 
     * @param {string} itemId 
     * @param {string} displayName 
     * @param {string} texturePath 
     */
    function fireResistantItem(itemId, displayName, texturePath) {
        event.create(`kubejs:${itemId}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(64).fireResistant(true)
    }
    /**
     * 
     * @param {string} itemId 
     * @param {string} displayName 
     * @param {string} texturePath 
     * @param {number} stackSize 
     * @param {boolean} fireResistantBoolean 
     */
    function fireResistantCustom(itemId, displayName, texturePath, stackSize, fireResistantBoolean) {
        event.create(`kubejs:${itemId}`).displayName(displayName).texture(`kubejs:item/${texturePath}`).maxStackSize(stackSize).fireResistant(fireResistantBoolean)
    }
    /**
     * 
     * @param {string} color 
     * @param {string} displayNameString 
     */
    function RGBWCMYK_OBJECTS(color, displayNameString) {
        event.create(`kubejs:color_${color}`).displayName(`${displayNameString}`).texture(`kubejs:item/colors/${color}`).maxStackSize(64).fireResistant(true)
    }
    standardNoDisplay('deepslate_shard')
    standardNoDisplay('trident_pole')
    standardNoDisplay('trident_prong')
    if (Platform.isLoaded('constructionwand')) {
        fireResistantCustom('construction_core_diamond', '§bActivated Construction Diamond Crystal', 'construction_diamond', 16, true)
    }
    fireResistantCustom('dormant_singularity_core', '§d<shake>Dormant Singularity Core</shake>', 'dormant_singularity_core', 16, true)
    fireResistantCustom('awakened_singularity_core', '<shake><rainb>Awakened Singularity Core</rainb></shake>', 'awakened_singularity_core', 8, true)
    fireResistantCustom('denied_result', '§d<shake>Denied Result</shake>', 'denied', 1, true)
    fireResistantCustom('errored_result', '§4<shake>Errored Result</shake>', 'errored', 1, true)
    fireResistantCustom('removed_item', '§4<shake>Removed Item</shake>', 'removed', 1, true)
    event.create('kubejs:qubit')
        .displayName('<rainb>Qubit</rainb>')
        .texture('kubejs:item/qubit')
        .maxStackSize(1)
        .fireResistant(true)
    event.create('kubejs:unstable_entropy_particles')
        .displayName('<rainb>Unstable Entropy Particles</rainb>')
        .texture('kubejs:item/unstable_entropy')
        .maxStackSize(64)
        .fireResistant(true)
        .rarity('epic')
    event.create('kubejs:stable_entropy_particles')
        .displayName('<rainb>Stable Entropy Particles</rainb>')
        .texture('kubejs:item/stable_entropy')
        .maxStackSize(64)
        .fireResistant(true)
        .rarity('epic')
    event.create('kubejs:high_entropy_alloy')
        .displayName('<rainb>High Entropy Alloy</rainb>')
        .texture('kubejs:item/final_ingot')
        .maxStackSize(64)
        .fireResistant(true)
        .rarity('epic')
        .group('miscellaneous')
    event.create('kubejs:high_entropy_alloy_nugget')
        .displayName('<rainb>High Entropy Alloy Nugget</rainb>')
        .texture('kubejs:item/final_nugget')
        .maxStackSize(64)
        .fireResistant(true)
        .rarity('epic')
    event.create('kubejs:high_entropy_alloy_sheet')
        .displayName('<rainb>High Entropy Alloy Sheet')
        .texture('kubejs:item/final_sheet')
        .maxStackSize(64)
        .fireResistant(true)
        .rarity('epic')
    event.create('kubejs:high_entropy_alloy_rod')
        .displayName('<rainb>High Entropy Alloy Rod</rainb>')
        .texture('kubejs:item/final_rod')
        .maxStackSize(64)
        .fireResistant(true)
        .rarity('epic')
    // tools
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

    if (Platform.isLoaded('paxeljs')) {
        event.create('kubejs:final_paxel', 'paxel').tier('final_tool')
            .displayName('<rainb>Omni Figura</rainb>')
            .rarity('epic')
            .texture('kubejs:item/final_paxel')
            .maxStackSize(1)
            .fireResistant(true)
    }

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
    // shapes and alphanumeric
    for (let [character, name] of Object.entries(LETTERS)) {
        event.create(`kubejs:letter_${character}`)
            .displayName(`<rainb>Letter ${name}</rainb>`)
            .texture(`kubejs:item/alphanumeric_characters/letter_${character}`)
            .maxStackSize(64)
            .fireResistant(true)
            .glow(true)
    }
    for (let [number, name] of Object.entries(INTEGERS)) {
        event.create(`kubejs:${number}`)
            .displayName(`<rainb>Number ${name}</rainb>`)
            .texture(`kubejs:item/alphanumeric_characters/${number}`)
            .maxStackSize(64)
            .fireResistant(true)
            .glow(true)
    }
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
    for (let [item, name] of Object.entries(global.RGBWCMY)) {
        RGBWCMYK_OBJECTS(item, name)
    }
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
    event.create('kubejs:deconstructor')
        .texture('kubejs:item/deconstructor')
        .maxStackSize(64)
        .fireResistant(true)
        .glow(true)
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
    for (let [insert, name] of Object.entries(CMD)) {
        event.create(`kubejs:${insert}`)
            .displayName(`<rainb>${name}</rainb>`)
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
    }
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
    event.create('kubejs:dripstone_transitional_stone')
        .textureAll('kubejs:block/dripstone_stone')
        .requiresTool(true)
        .soundType('stone')
        .tagBlock('minecraft:mineable/pickaxe')
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

StartupEvents.registry('fluid', event => {
    // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
    event.create('kubejs:condensed_universal_entropy')
        .displayName('<rainb>Condensed Universal Entropy</rainb>')
        .thickTexture(0x7800FF)
        .bucketColor(0x7800FF)
        .luminosity(15)
    event.create('kubejs:condensed_universal_order')
        .displayName('<rainb>Condensed Universal Order</rainb>')
        .thickTexture(0x77D8FF)
        .bucketColor(0x77D8FF)
        .luminosity(15)
    let shimmer = event.create('kubejs:shimmer')
        .flowingTexture('kubejs:block/shimmer_flow')
        .stillTexture('kubejs:block/shimmer_still')
    shimmer.bucketItem.texture('kubejs:item/shimmer_bucket')
    shimmer.bucketItem.glow(true);

    if (Platform.isLoaded('mysticalagriculture')) {
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
    for (let i = 0; i < TOOLS.length; i++) {
        let tool = TOOLS[i];
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
    }
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
    for (let i = 0; i < ARMOR.length; i++) {
        let armor = ARMOR[i];
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
    }
    for (let i = 0; i < DIVING.length; i++) {
        let armor = DIVING[i];
        event.modify(`create:copper_${armor}`, item => {
            item.maxDamage = 128
        })
        event.modify(`create:netherite_${armor}`, item => {
            item.maxDamage = 2048
        })
    }
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
})

let blacklist = {
    ae2: 'This mod does not belong in this variant of the modpack. Make your own storage systems.',
    ars_nouveau: 'Not supported in this variant of the modpack.',
    createcasing: 'Not supported.',
    createdieselgenerators: 'Not supported.',
    create_confectionery: 'MCreator mod.',
    create_sa: 'MCreator mod. NOT to be confused with Create CRAFTS & Additions which is an actual mod.',
    creategoggles: 'Replaced by Curios API.',
    createsifter: 'Not supported.',
    create_things_and_misc: 'MCreator mod.',
    createutilities: 'Might as well not play Create at all if you are this lazy.',
    cgm: 'Not supported.',
    extendedgears: 'Not supported.',
    alloyed: 'Loves crashing the game on startup and causes other bugs to occur.',
    createendertransmission: 'Might as well not play Create at all if you are this lazy.',
    create_compressed: 'MCreator mod.',
    mekanism: 'Might as well not play Create at all as Mekanism overshadows it.',
    optifine: 'Why are you using OptiFine? Do you want to see rainbows of glitched graphics or a repeat of #forge-bugs in the Create server?',
    immersiveengineering: 'Not supported in this variant of the modpack.',
    unusualend: 'MCreator mod.',
    hammerlib: 'Not supported by KubeJS.',
    solarflux: 'Not supported by KubeJS, requires HammerLib',
    strange: 'Causes the server to stall.',
    lucky: 'Not supported in this variant of the modpack. Also causes bugs.',
    twilightforest: 'Not supported in this variant of the modpack.',
    createunlimited: 'NOT SUPPORTED AT ALL. Remove it.'
}

StartupEvents.postInit(event => {
    for (let [mod, reason] of Object.keys(blacklist)) {
        Platform.isLoaded(mod) && console.error(`This mod is not supported: ${mod} - Reason: ${reason}`)
    }
    if (!Platform.isLoaded('embeddium') && Platform.isLoaded('rubidium')) {
        console.error('This mod is not supported: rubidium - Reason: Embeddium has replaced Rubidium. <shake>Stop using Rubidium.</shake>')
    }
})