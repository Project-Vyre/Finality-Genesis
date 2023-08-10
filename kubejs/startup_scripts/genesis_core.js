// priority: 0
// requires: create
// requires: cataclysm

Platform.mods.kubejs.name = 'Finality'

console.info('Registering Finality items...')

// let DYE = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
// let DISPLAY_COLOR = ['White', 'Orange', 'Magenta', 'Light Blue', 'Lime', 'Pink', 'Purple', 'Light Gray', 'Gray', 'Cyan', 'Brown', 'Green', 'Blue', 'Red', 'Black', 'Yellow']
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
let TOOLS = ['sword', 'shovel', 'pickaxe', 'axe', 'hoe']
let ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']
let DIVING = ['diving_helmet', 'diving_boots']
StartupEvents.registry('item', event => { // Register new items here event.create('example_item').displayName('Example Item')
    event.create('kubejs:trident_pole').texture('kubejs:item/trident_pole').maxStackSize(64)
    event.create('kubejs:trident_prong').texture('kubejs:item/trident_prong').maxStackSize(64)
    event.create('kubejs:construction_core_iron').displayName('§fActivated Construction Iron Core').texture('kubejs:item/construction_iron').maxStackSize(16)
    event.create('kubejs:construction_core_diamond').displayName('§bActivated Construction Diamond Crystal').texture('kubejs:item/construction_diamond').maxStackSize(16)
    event.create('kubejs:dormant_singularity_core').displayName('§d<shake>Dormant Singularity Core</shake>').texture('kubejs:item/dormant_singularity_core').maxStackSize(16)
    event.create('kubejs:awakened_singularity_core').displayName('<shake><rainb>Awakened Singularity Core</rainb></shake>').texture('kubejs:item/awakened_singularity_core').maxStackSize(8)
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
    event.create('kubejs:high_entropy_alloy').texture('kubejs:item/final_ingot').displayName('<rainb>High Entropy Alloy</rainb>').maxStackSize(64).fireResistant(true).group('miscellaneous')
    event.create('kubejs:incomplete_entropy_mechanism', 'create:sequenced_assembly').displayName('<rainb>Incomplete Entropy Mechanism</rainb>').texture('kubejs:item/incomplete_entropy_mechanism').maxStackSize(1)
    event.create('kubejs:entropy_mechanism').displayName('<rainb>Entropy Mechanism').texture('kubejs:item/entropy_mechanism').maxStackSize(64)
    // tools
    event.create('kubejs:final_pickaxe', 'pickaxe').tier('final_items').displayName('§l<rainb>Particula Eversorem</rainb>').texture('kubejs:item/final_pickaxe').maxStackSize(1).fireResistant(true).group('tools')
    event.create('kubejs:final_axe', 'axe').tier('final_items').displayName('§l<rainb>Natura Exitium</rainb>').texture('kubejs:item/final_axe').maxStackSize(1).fireResistant(true).group('tools')
    event.create('kubejs:final_shovel', 'shovel').tier('final_items').displayName('§l<rainb>Terra Confractus</rainb>').texture('kubejs:item/final_shovel').maxStackSize(1).fireResistant(true).group('tools')
    event.create('kubejs:final_hoe', 'hoe').tier('final_items').displayName('§l<rainb>Agricola Manus</rainb>').texture('kubejs:item/final_hoe').maxStackSize(1).fireResistant(true).group('tools')
    // weapons
    event.create('kubejs:final_sword', 'sword').tier('final_items').displayName('§l<rainb>Corevis Ultimatum</rainb>').texture('kubejs:item/final_sword').maxStackSize(1).fireResistant(true).group('combat')
    // armor
    event.create('kubejs:final_helmet', 'helmet').tier('final_armor').displayName('§l<rainb>Conscientia Oculi</rainb>').texture('kubejs:item/final_helmet').maxStackSize(1).fireResistant(true).group('combat')
    event.create('kubejs:final_chestplate', 'chestplate').tier('final_armor').displayName('§l<rainb>Vitale Cordis</rainb>').texture('kubejs:item/final_chestplate').maxStackSize(1).fireResistant(true).group('combat')
    event.create('kubejs:final_leggings', 'leggings').tier('final_armor').displayName('§l<rainb>Universum Motus</rainb>').texture('kubejs:item/final_leggings').maxStackSize(1).fireResistant(true).group('combat')
    event.create('kubejs:final_boots', 'boots').tier('final_armor').displayName('§l<rainb>Gravitas Anchoram</rainb>').texture('kubejs:item/final_boots').maxStackSize(1).fireResistant(true).group('combat')
})
StartupEvents.registry('block', event => {
    // Register new blocks here event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
    Object.keys(CMD).forEach(insert => {
        event.create(`kubejs:${insert}`).displayName(`<rainb>${CMD[insert]}</rainb>`).textureAll(`kubejs:block/${insert}`).material('metal').hardness(500).requiresTool(true)
    })
})
StartupEvents.registry('fluid', event => {
    // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
    event.create('kubejs:condensed_universal_entropy').displayName('<rainb>Condensed Universal Entropy</rainb>').thickTexture(0x7800FF).bucketColor(0x7800FF).luminosity(15)
    event.create('kubejs:molten_gold').displayName('§6Molten Gold').thickTexture(0xFDF55F).bucketColor(0xFDF55F).luminosity(15).temperature(2000)
    event.create('kubejs:inferior_infusion_essence').displayName('§eInferior Infusion Essence§r').thickTexture(0xACCF00).bucketColor(0xACCF00).luminosity(7)
    event.create('kubejs:supreme_infusion_essence').displayName('§eSupreme Infusion Essence§r').thickTexture(0xFC0000).bucketColor(0xFC0000).luminosity(15)
})
// tiers
ItemEvents.toolTierRegistry(event => {
    event.add('final_items', tier => {
        tier.uses = -1
        tier.speed = 255.0
        tier.attackDamageBonus = 65.0
        tier.level = 5
        tier.enchantmentValue = 30
    })
})
ItemEvents.armorTierRegistry(event => {
    event.add('final_armor', tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [999999, 999999, 999999, 999999]
        tier.enchantmentValue = 30
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
        tier.toughness = 999999
        tier.knockbackResistance = 5.0
    })
})
ItemEvents.modification(event => {
    TOOLS.forEach(tool => event.modify(`minecraft:wooden_${tool}`, item => {
        item.maxDamage = 16
    }))
    TOOLS.forEach(tool => event.modify(`minecraft:stone_${tool}`, item => {
        item.maxDamage = 128
    }))
    TOOLS.forEach(tool => event.modify(`minecraft:iron_${tool}`, item => {
        item.maxDamage = 256
    }))
    event.modify('minecraft:shears', item => {
        item.maxDamage = 256
    })
    event.modify('minecraft:shield', item => {
        item.maxDamage = 225
    })
    TOOLS.forEach(tool => event.modify(`minecraft:diamond_${tool}`, item => {
        item.maxDamage = 1024
    }))
    TOOLS.forEach(tool => event.modify(`minecraft:netherite_${tool}`, item => {
        item.maxDamage = 2048
    }))
    event.modify('eccentrictome:tome', item => {
        item.fireResistant = true
    })
    // Armor durability is synchronized because it does not make sense as to why armor pieces have different durabilities.
    ARMOR.forEach(armor => event.modify(`minecraft:leather_${armor}`, item => {
        item.maxDamage = 128
    }))
    ARMOR.forEach(armor => event.modify(`minecraft:iron_${armor}`, item => {
        item.maxDamage = 256
    }))
    ARMOR.forEach(armor => event.modify(`minecraft:golden_${armor}`, item => {
        item.maxDamage = 225
    }))
    ARMOR.forEach(armor => event.modify(`minecraft:diamond_${armor}`, item => {
        item.maxDamage = 512
    }))
    ARMOR.forEach(armor => event.modify(`minecraft:netherite_${armor}`, item => {
        item.maxDamage = 1024
    }))
    DIVING.forEach(armor => event.modify(`create:copper_${armor}`, item => {
        item.maxDamage = 128
    }))
    DIVING.forEach(armor => event.modify(`create:netherite_${armor}`, item => {
        item.maxDamage = 1024
    }))
})