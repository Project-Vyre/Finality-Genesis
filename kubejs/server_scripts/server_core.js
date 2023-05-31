// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.remove({id: 'mysticalagriculture:inferium_furnace'})
	event.remove({id: 'mysticalagriculture:prudentium_furnace'})
    event.remove({id: 'mysticalagriculture:tertium_furnace'})
    event.remove({id: 'mysticalagriculture:imperium_furnace'})
    event.remove({id: 'mysticalagriculture:supremium_furnace'})
    event.remove({id: 'mysticalagriculture:awakened_supremium_furnace'})
    event.remove({output: 'waystones:warp_plate'})
    event.remove({output: 'waystones:attuned_shard'})
    event.remove({output: 'waystones:warp_dust'})
    event.remove({id: 'pickletweaks:watering_can'})
    event.remove({id: 'pickletweaks:reinforced_watering_can'})
	event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), ['#forge:rods/wooden', '#forge:rods/wooden']).id('finality:documentation_book')
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})