// priority: 0

console.info('Client scripts loaded. You will see this line every time client resources reload.')

let MYSHIDE = [
	'rubber', 
	'silicon', 
	'sulfer', 
	'aluminum', 
	'saltpeter', 
	'apatite', 
	'marble', 
	'menril', 
	'tin', 
	'bronze', 
	'silver', 
	'graphite',
	'blizz',
	'blitz',
	'basalz',
	'slimesteel',
	'pig_iron',
	'manasteel',
	'steeleaf',
	'sapphire',
	'ruby',
	'uranium',
	'tungsten',
	'titanium',
	'steel',
	'platinum',
	'nickel',
	'mithril',
	'iridium',
	'invar',
	'electrum',
	'constantan',
	'chrome',
	'certus_quartz',
	'sky_stone',
	'aquamarine',
	'ironwood',
	'quartz_enriched_iron',
	'signalum',
	'lumium',
	'hop_graphite',
	'cobalt',
	'rose_gold',
	'elementium',
	'osmium',
	'fluorite',
	'refined_glowstone',
	'refined_obsidian',
	'knightmetal',
	'fiery_ingot',
	'starmetal',
	'compressed_iron',
	'fluix',
	'energized_steel',
	'blazing_crystal',
	'enderium',
	'manyullyn',
	'queens_slime',
	'hepatizon',
	'terrasteel',
	'rock_crystal',
	'draconium',
	'yellorium',
	'cyanite',
	'niotic_crystal',
	'spirited_crystal',
	'uraninite',
	'gaia_spirit',
	'awakened_draconium',
	'neutronium',
	'nitro_crystal',
]
JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	MYSHIDE.forEach(name => {
		event.hide(`mysticalagriculture:${name}_essence`)
	})
	event.hide('createaddition:straw')
	event.hide('createaddition:bioethanol_bucket')
	event.hide('createaddition:bioethanol')
	event.hide('createaddition:straw')
	event.hide('createaddition:gold_rod')
	event.hide('createaddition:brass_rod')
})
JEIEvents.information(event => {
	event.addItem('tempad:tempad', ['Allows you to teleport to points you placed throughout the world but has a 3 minute cooldown.'])
	event.addItem('tempad:he_who_remains_tempad', ['Can only be acquired from the End, somewhere.'])
	event.addItem('mysticalagriculture:fertilized_essence', ['Can only be acquired from Mystical Agriculture crops upon harvesting.', 'Not a guaranteed drop!'])
	event.addItem('cataclysm:burning_ashes', ['Used to summon Ignis.'])
	event.addItem('minecraft:nether_star', ['If you find a deactivated and mechanical version of the Wither, give it a Nether Star.', 'Also extensively used in certain recipes.'])
	event.addItem('cataclysm:abyssal_sacrifice', ['Required to summon the Leviathan.', 'Use on the Altar of Abyss located in the Sunken City.'])
	event.addItem('minecraft:ender_eye', ['There is a certain eye that can only be acquired from enchanting.', 'It is very rare, however.'])
	event.addItem('endrem:black_eye', ['Can be found in lost treasure chests.'])
	event.addItem('endrem:cold_eye', ['Found in igloos.'])
	event.addItem('endrem:corrupted_eye', ['Found in Pillager Outposts.'])
	event.addItem('endrem:lost_eye', ['Usually found in Mineshafts.'])
	event.addItem('endrem:nether_eye', ['Found in Nether Fortresses.'])
	event.addItem('endrem:old_eye', ['Found in Desert Pyramids.'])
	event.addItem('endrem:rogue_eye', ['Usually found in Jungle Temples.'])
	event.addItem('endrem:cursed_eye', ['Usually found in Bastions.'])
	event.addItem('endrem:evil_eye', ['Usually acquired from a Master Cleric.'])
	event.addItem('endrem:guardian_eye', ['Usually acquired from slaying Elder Guardians.'])
	event.addItem('endrem:magical_eye', ['Acquired from slaying Evokers.'])
	event.addItem('endrem:wither_eye', ['Obviously only drops from the Wither.'])
	event.addItem('endrem:witch_eye', ['Requires a Witch Pupil to craft.'])
	event.addItem('endrem:undead_eye', ['Requires a skeleton horse to be slain in order to acquire the Undead Soul.'])
	event.addItem('endrem:undead_soul', ['Acquired from slaying a skeleton horse.'])
	event.addItem('endrem:exotic_eye', ['Created by combining multiple exotic ingredients using a Crafting Core.'])
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