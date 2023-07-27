// priority: 0
Platform.mods.kubejs.name = 'Finality'
console.info('Registering Finality items...')

let NATR = ['blue_ice', 'sand', 'coarse_dirt', 'cobblestone']
let CMAT = ['andesite_alloy', 'zinc', 'copper', 'brass', 'rose_quartz', 'framed_glass', 'precision_mechanism', 'sturdy_sheet', 'track']
// let DYE = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
// let DISPLAY_COLOR = ['White', 'Orange', 'Magenta', 'Light Blue', 'Lime', 'Pink', 'Purple', 'Light Gray', 'Gray', 'Cyan', 'Brown', 'Green', 'Blue', 'Red', 'Black', 'Yellow']
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
StartupEvents.registry('item', event => { // Register new items here event.create('example_item').displayName('Example Item')
	event.create('kubejs:trident_pole').texture('kubejs:item/trident_pole').maxStackSize(64)
	event.create('kubejs:trident_prong').texture('kubejs:item/trident_prong').maxStackSize(64)
	event.create('kubejs:construction_core_iron').displayName('§fActivated Construction Iron Core').texture('kubejs:item/construction_iron').maxStackSize(16)
	event.create('kubejs:construction_core_diamond').displayName('§bActivated Construction Diamond Crystal').texture('kubejs:item/construction_diamond').maxStackSize(16)
	// minecraft core forgot what was supposed to be here
	// singularity related
	event.create('kubejs:dormant_singularity_core').texture('kubejs:item/dormant_singularity_core').maxStackSize(16)
	event.create('kubejs:awakened_singularity_core').texture('kubejs:item/awakened_singularity_core').maxStackSize(8)
	/*
	INCOMPLETE SINGULARITIES
	for use for making a singularity. dormant core to incomplete core to singularity
	follow format .create('kubejs:', 'create:sequenced_assembly).displayName().texture().maxStackSize(1)
	*/
	NATR.forEach(material => event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly').texture(`kubejs:item/incomplete_singularities/nature/incomplete_${material}`).maxStackSize(1))
	CMAT.forEach(material => event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly').texture(`kubejs:item/incomplete_singularities/incomplete_${material}`).maxStackSize(1))
	Object.keys(DYE).forEach(color => { // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
		event.create(`kubejs:incomplete_concrete_${color}_singularity`, 'create:sequenced_assembly').displayName(`§dIncomplete ${DYE[color]} Concrete Singularity`).texture(`kubejs:item/incomplete_singularities/concrete/incomplete_concrete_${color}`).maxStackSize(1)
	})
	/*
	ACTIVATED SINGULARITY CORES
	follow format .displayName().texture().maxStackSize(1)
	*/
	// activated singularity cores
	// work in progressevent.create('finality:andesite_singularity_core').displayName('Andesite Singularity Core').texture('finality:item/andesite_core').maxStackSize(8)
	event.create('kubejs:omnipotent_alloy').texture('kubejs:item/final_ingot').displayName('High Entropy Alloy').maxStackSize(64).fireResistant(true).group('miscellaneous')
	// tools
	event.create('kubejs:final_pickaxe', 'pickaxe').tier('final_items').displayName('Particula Eversorem').texture('kubejs:item/final_pickaxe').maxStackSize(1).fireResistant(true).group('tools')
	event.create('kubejs:final_axe', 'axe').tier('final_items').displayName('Natura Exitium').texture('kubejs:item/final_axe').maxStackSize(1).fireResistant(true).group('tools')
	event.create('kubejs:final_shovel', 'shovel').tier('final_items').displayName('Terra Confractus').texture('kubejs:item/final_shovel').maxStackSize(1).fireResistant(true).group('tools')
	event.create('kubejs:final_hoe', 'hoe').tier('final_items').displayName('Agricola Manus').texture('kubejs:item/final_hoe').maxStackSize(1).fireResistant(true).group('tools')
	// weapons
	event.create('kubejs:final_sword', 'sword').tier('final_items').displayName('Corevis Ultimatum').texture('kubejs:item/final_sword').maxStackSize(1).fireResistant(true).group('combat')
	// armor
	event.create('kubejs:final_helmet', 'helmet').tier('final_armor').displayName('Conscientia Oculi').texture('kubejs:item/final_helmet').maxStackSize(1).fireResistant(true).group('combat')
	event.create('kubejs:final_chestplate', 'chestplate').tier('final_armor').displayName('Vitale Cordis').texture('kubejs:item/final_chestplate').maxStackSize(1).fireResistant(true).group('combat')
	event.create('kubejs:final_leggings', 'leggings').tier('final_armor').displayName('Universum Motus').texture('kubejs:item/final_leggings').maxStackSize(1).fireResistant(true).group('combat')
	event.create('kubejs:final_boots', 'boots').tier('final_armor').displayName('Gravitas Anchoram').texture('kubejs:item/final_boots').maxStackSize(1).fireResistant(true).group('combat')
})
StartupEvents.registry('block', event => { 
	// Register new blocks here event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
StartupEvents.registry('fluid', event => {
	event.create('kubejs:condensed_universal_entropy')
		.displayName('§dCondensed Universal Entropy')
		.thickTexture(0x7800FF)
		.bucketColor(0x7800FF)
		.luminosity(14) // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
	event.create('kubejs:inferior_infusion_essence')
		.displayName('§eInferior Infusion Essence')
		.thickTexture(0xACCF00)
		.bucketColor(0xACCF00)
	event.create('kubejs:supreme_infusion_essence')
		.displayName('§eSupreme Infusion Essence')
		.thickTexture(0xFC0000)
		.bucketColor(0xFC0000)
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
	  	tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
	  	tier.slotProtections = [999999, 999999, 999999, 999999] // Slot indicies are [FEET, LEGS, BODY, HEAD]
	  	tier.enchantmentValue = 30
	  	tier.equipSound = 'minecraft:item.armor.equip_netherite'
	  	tier.toughness = 999999 // diamond has 2.0, netherite 3.0
	  	tier.knockbackResistance = 5.0
	})
})
let TOOLS = ['sword','shovel','pickaxe','axe','hoe']
let ARMOR = ['helmet','chestplate','leggings','boots']
let DIVING = ['diving_helmet','diving_boots']
ItemEvents.modification(event => {
    TOOLS.forEach(tool => event.modify(`wooden_${tool}`, item => {
        item.maxDamage = 16
    }))
    TOOLS.forEach(tool => event.modify(`stone_${tool}`, item => {
        item.maxDamage = 128
    }))
    TOOLS.forEach(tool => event.modify(`iron_${tool}`, item => {
        item.maxDamage = 256
    }))
	event.modify('minecraft:shears', item => {
        item.maxDamage = 256
    })
	event.modify('minecraft:shield', item => {
        item.maxDamage = 225
    })
    TOOLS.forEach(tool => event.modify(`diamond_${tool}`, item => {
        item.maxDamage = 1024
    }))
    TOOLS.forEach(tool => event.modify(`netherite_${tool}`, item => {
        item.maxDamage = 2048
    }))
    // Armor durability is synchronized because it does not make sense as to why armor pieces have different durabilities.
    ARMOR.forEach(armor => event.modify(`leather_${armor}`, item => {
        item.maxDamage = 128
    }))
    ARMOR.forEach(armor => event.modify(`iron_${armor}`, item => {
        item.maxDamage = 256
    }))
    ARMOR.forEach(armor => event.modify(`golden_${armor}`, item => {
        item.maxDamage = 225
    }))
    ARMOR.forEach(armor => event.modify(`diamond_${armor}`, item => {
        item.maxDamage = 512
    }))
    ARMOR.forEach(armor => event.modify(`netherite_${armor}`, item => {
        item.maxDamage = 1024
    }))
	DIVING.forEach(armor => event.modify(`create:netherite_${armor}`, item => {
		item.maxDamage = 1024
	}))
})