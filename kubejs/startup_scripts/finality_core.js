// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	// singularity related
	event.create('finality:dormant_singularity_core').texture('finality:item/dormant_singularity_core').maxStackSize(16)
	/*
	INCOMPLETE SINGULARITY CORES SECTION
	follow format .displayName().texture().maxStackSize(1)
	*/
	// incomplete singularity cores (create related)
	event.create('finality:incomplete_andesite_singularity_core').displayName('Incomplete Andesite Singularity Core').texture('finality:item/incomplete_andesite_core').maxStackSize(1)
	event.create('finality:incomplete_copper_singularity_core').displayName('Incomplete Copper Singularity Core').texture('finality:item/incomplete_copper_core').maxStackSize(1)
	event.create('finality:incomplete_zinc_singularity_core').displayName('Incomplete Zinc Singularity Core').texture('finality:item/incomplete_zinc_core').maxStackSize(1)
	event.create('finality:incomplete_brass_singularity_core').displayName('Incomplete Brass Singularity Core').texture('finality:item/incomplete_brass_core').maxStackSize(1)
	event.create('finality:incomplete_rosequartz_singularity_core').displayName('Incomplete Rose Quartz Singularity Core').texture('finality:item/incomplete_roseq_core').maxStackSize(1)
	// incomplete singularity cores (alloys)
	event.create('finality:incomplete_steel_singularity_core').displayName('Incomplete Steel Singularity Core').texture('finality:item/incomplete_steel_core').maxStackSize(1)
	event.create('finality:incomplete_bronze_singularity_core').displayName('Incomplete Bronze Singularity Core').texture('finality:item/incomplete_bronze_core').maxStackSize(1)
	// incomplete singularity cores (concrete)
	event.create('finality:incomplete_concrete_black_singularity_core').displayName('Incomplete Black Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_black').maxStackSize(1)
	event.create('finality:incomplete_concrete_white_singularity_core').displayName('Incomplete White Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_white').maxStackSize(1)
	event.create('finality:incomplete_concrete_pink_singularity_core').displayName('Incomplete Pink Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_pink').maxStackSize(1)
	event.create('finality:incomplete_concrete_orange_singularity_core').displayName('Incomplete Orange Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_orange').maxStackSize(1)
	event.create('finality:incomplete_concrete_red_singularity_core').displayName('Incomplete Red Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_red').maxStackSize(1)
	event.create('finality:incomplete_concrete_gray_singularity_core').displayName('Incomplete Gray Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_gray').maxStackSize(1)
	event.create('finality:incomplete_concrete_brown_singularity_core').displayName('Incomplete Brown Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_brown').maxStackSize(1)
	event.create('finality:incomplete_concrete_cyan_singularity_core').displayName('Incomplete Cyan Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_cyan').maxStackSize(1)
	event.create('finality:incomplete_concrete_green_singularity_core').displayName('Incomplete Green Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_green').maxStackSize(1)
	event.create('finality:incomplete_concrete_light_gray_singularity_core').displayName('Incomplete Light Gray Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_light_gray').maxStackSize(1)
	event.create('finality:incomplete_concrete_light_blue_singularity_core').displayName('Incomplete Light Blue Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_light_blue').maxStackSize(1)
	event.create('finality:incomplete_concrete_lime_singularity_core').displayName('Incomplete Lime Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_lime').maxStackSize(1)
	event.create('finality:incomplete_concrete_yellow_singularity_core').displayName('Incomplete Yellow Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_yellow').maxStackSize(1)
	event.create('finality:incomplete_concrete_blue_singularity_core').displayName('Incomplete Blue Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_blue').maxStackSize(1)
	event.create('finality:incomplete_concrete_magenta_singularity_core').displayName('Incomplete Magenta Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_magenta').maxStackSize(1)
	event.create('finality:incomplete_concrete_purple_singularity_core').displayName('Incomplete Purple Concrete Singularity Core').texture('finality:item/incomplete_concrete/incomplete_concrete_purple').maxStackSize(1)

	// tools
	event.create('finality:final_pickaxe', 'pickaxe').tier('final_items').displayName('Particula Eversorem').texture('finality:item/final_pickaxe').maxStackSize(1).group('tools')
	event.create('finality:final_axe', 'axe').tier('final_items').displayName('Natura Exitium').texture('finality:item/final_axe').maxStackSize(1).group('tools')
	event.create('finality:final_shovel', 'shovel').tier('final_items').displayName('Terra Confractus').texture('finality:item/final_shovel').maxStackSize(1).group('tools')
	event.create('finality:final_hoe', 'hoe').tier('final_items').displayName('Agricola Manus').texture('finality:item/final_hoe').maxStackSize(1).group('tools')

	// weapons
	event.create('finality:final_sword', 'sword').tier('final_items').displayName('Corevis Ultimatum').texture('finality:item/final_sword').maxStackSize(1).group('combat')
	// was thinking nota verum over scopos verum for the bow as well but idk how to make custom bow

	// armor
	event.create('finality:final_helmet', 'helmet').tier('final_armor').displayName('Conscientia Oculi').texture('finality:item/final_helmet').maxStackSize(1).group('combat')
	event.create('finality:final_chestplate', 'chestplate').tier('final_armor').displayName('Vitale Cordis').texture('finality:item/final_chestplate').maxStackSize(1).group('combat')
	event.create('finality:final_leggings', 'leggings').tier('final_armor').displayName('Universum Motus').texture('finality:item/final_leggings').maxStackSize(1).group('combat')
	event.create('finality:final_boots', 'boots').tier('final_armor').displayName('Gravitas Anchoram').texture('finality:item/final_boots').maxStackSize(1).group('combat')
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

StartupEvents.registry('fluid', event => {
	event.create('finality:condensed_universal_entropy').thickTexture(0x7800FF).noBucket() // work in progress .stillTexture('finality:block/still_entropy').flowingTexture('finality:block/flowing_entropy')
})

ItemEvents.toolTierRegistry (event => {
	event.add('final_items', tier => {
		tier.uses = -1 // unbreakable
		tier.speed = 255.0
		tier.attackDamageBonus = 65.0
		tier.level = 5
		tier.enchantmentValue = 30
		tier.repairIngredient = 'extendedcrafting:the_ultimate_ingot'
	})
})

ItemEvents.armorTierRegistry (event => {
	event.add('final_armor', tier => {
	  tier.durabilityMultiplier = -1 // Each slot will be multiplied with [13, 15, 16, 11]
	  tier.slotProtections = [8, 24, 16, 8] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
	  tier.enchantmentValue = 30
	  tier.equipSound = 'minecraft:item.armor.equip_netherite'
	  tier.repairIngredient = 'extendedcrafting:the_ultimate_ingot'
	  tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
	  tier.knockbackResistance = 3.0
	})
})