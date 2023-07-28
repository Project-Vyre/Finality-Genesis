ServerEvents.recipes(event => {
    // compacting
	event.recipes.createCompacting([
		'minecraft:sponge', 
		Fluid.of('minecraft:water', 1000)
	], [
		'minecraft:wet_sponge'
	]).id('finality:sponge_squeezing')
    event.recipes.createCompacting([
		'minecraft:diamond'
	], [
		Item.of('minecraft:coal_block', 1), 
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('finality:renew_diamond')
	event.recipes.createCompacting([
		'minecraft:diamond_block'
	], [
		Item.of('minecraft:coal_block', 9),
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('finality:renew_diamond_bulk')
    event.recipes.createCompacting([
		'minecraft:coal'
	], [
		Item.of('minecraft:dried_kelp_block', 1)
	]).heated().id('finality:renew_coal')
	event.recipes.createCompacting([
		'minecraft:coal_block'
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
		Item.of('minecraft:gravel', 18),
		Fluid.of('minecraft:lava', 250)
	]).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting([
		'minecraft:tuff'
	], [
		Item.of('minecraft:deepslate', 9),
		Fluid.of('minecraft:lava', 250)
	]).heated().id('finality:renew_deepslate_tuff')
    // crushing
    event.remove({id: 'create:crushing/gravel'})
    event.remove({id: 'create:crushing/netherrack'})
    event.recipes.createCrushing([
		'minecraft:dirt',
		Item.of('minecraft:flint').withChance(0.10)
	], 'minecraft:gravel').processingTime(250).id('finality:gravel_crushing')
    event.recipes.createCrushing([
		'minecraft:sand',
		Item.of('minecraft:clay_ball').withChance(0.05)
	], 'minecraft:dirt').processingTime(250).id('finality:dirt_crushing')
    event.recipes.createCrushing([
		Item.of('minecraft:pointed_dripstone', 4),
		Item.of('minecraft:clay_ball').withChance(0.50),
		Item.of('create:copper_nugget').withChance(0.25),
		Item.of('create:experience_nugget').withChance(0.75)
	], 'minecraft:dripstone_block').processingTime(250).id('finality:dripstone_crushing')
    event.recipes.createCrushing([
		Item.of('create:copper_nugget').withChance(0.05),
		Item.of('minecraft:gunpowder').withChance(0.10)
	], 'minecraft:basalt').id('finality:basalt_crushing')
    event.recipes.createCrushing([
		'create:cinder_flour',
		Item.of('create:cinder_flour').withChance(0.50),
		Item.of('minecraft:netherite_scrap').withChance(0.002)
	], 'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
    // filling
    event.recipes.createFilling('minecraft:netherrack', [
		'minecraft:cobblestone', 
		Fluid.of('create:potion', 250, '{Potion: "minecraft:strong_healing"}')
	]).id('finality:living_flesh_stone')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
    // mixing 
    event.recipes.createMixing([
		'minecraft:coarse_dirt'
	], [
		'minecraft:dirt', 'minecraft:gravel'
	]).id('finality:coarse_dirt')
    // Be3Al2(SiO3)6
    event.recipes.createMixing([
		'minecraft:emerald'
	], [
		'minecraft:quartz', 
		'minecraft:glass', 
		'3x minecraft:iron_nugget'
	]).superheated().id('finality:renew_emerald')
    // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing([
		'minecraft:nether_gold_ore'
	], [
		'create:cinder_flour',
		'18x minecraft:gold_nugget',
		Fluid.of('minecraft:lava', 250)
	]).id('finality:nether_gold_ore_deco')
})