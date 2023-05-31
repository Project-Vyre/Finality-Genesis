// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	event.hide('projecte:dm_furnace')
	event.hide('projecte:rm_furnace')
	event.hide('waystones:warp_plate')
	event.hide('mysticalagriculture:inferium_furnace')
	event.hide('mysticalagriculture:prudentium_furnace')
	event.hide('mysticalagriculture:tertium_furnace')
	event.hide('mysticalagriculture:imperium_furnace')
	event.hide('mysticalagriculture:supremium_furnace')
	event.hide('mysticalagrilculture:awakened_supremium_furnace')
	event.hide('waystones:warp_dust')
	event.hide('waystones:attuned_shard')
	event.hide('pickletweaks:watering_can')
	event.hide('pickletweaks:reinforced_watering_can')
})

ItemEvents.tooltip(event => {
	// Fix provided by Reveter#1305 on latvian.dev
    event.addAdvanced('patchouli:guide_book', ((item, advanced, text) => {
        if (!item.hasNBT()) return;
        if (item.nbt['patchouli:book'] == 'patchouli:tome_of_finality') {
            text.add(Component.lightPurple("Hi! Please use this book, it's important modpack documentation."))
			text.add(Component.lightPurple("The book also serves as progression tracking in the absence of FTB Quests."))
			text.add(Component.lightPurple("Entries in the Genesis category are spoiler free and are targeted at new players!"))
			text.add(Component.lightPurple("- Overseers of Finality"))
        }
    }))
})
