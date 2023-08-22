// requires: jei
// requires: jeresources
// requires: justenoughprofessions

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
    'sulfur',
    'lead'
]
let MYS_FLUID_HIDE = [
    'molten_inferium',
    'molten_prudentium',
    'molten_tertium',
    'molten_imperium',
    'molten_supremium',
    'molten_soulium'
]
let CAdditionsItems = [
    'straw',
    'bioethanol_bucket',
    'gold_rod',
    'brass_rod',
    'electrum_rod',
    'electrum_ingot',
    'electrum_sheet',
    'electrum_nugget',
    'electrum_wire',
    'electrum_spool',
    'digital_adapter'
]

JEIEvents.hideItems(event => {
    MYSHIDE.forEach(name => {
        event.hide(`mysticalagriculture:${name}_essence`)
        event.hide(`mysticalagriculture:${name}_seeds`)
    })
    CAdditionsItems.forEach(name => {
        event.hide(`createaddition:${name}`)
    })
    event.hide('mysticalagriculture:harvester')
    event.hide('kubejs:denied_result')
    event.hide('kubejs:removed_item')
})

JEIEvents.hideFluids(event => {
    MYS_FLUID_HIDE.forEach(name => {
        event.hide(`mysticalagradditions:${name}`)
    })
    event.hide('createaddition:bioethanol')
})

JEIEvents.information(event => {
    event.addItem('minecraft:campfire', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
    event.addItem('minecraft:soul_campfire', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
    event.addItem('tempad:tempad', ['Allows you to teleport to points you placed throughout the world but has a 3 minute cooldown.'])
    event.addItem('tempad:he_who_remains_tempad', ['Can only be acquired from the End, somewhere.'])
    event.addItem('mysticalagriculture:fertilized_essence', ['Can only be acquired from Mystical Agriculture crops upon harvesting.', 'Not a guaranteed drop!'])
    event.addItem('cataclysm:burning_ashes', ['Used to summon Ignis.'])
    event.addItem('minecraft:nether_star', ['If you find a deactivated and mechanical version of the Wither, give it a Nether Star.', 'Also extensively used in certain recipes.'])
    event.addItem('cataclysm:abyssal_sacrifice', ['Required to summon the Leviathan.', 'Use on the Altar of Abyss located in the Sunken City.'])
    event.addItem('cataclysm:abyssal_egg', ['Does not require anything special to hatch, simply place it down.', 'You will have to wait a while for the egg to hatch.'])
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
    event.addItem('obscure_api:astral_dust', ['Used in making a special chestpiece. Can only be found in Frozen Chests.'])
})