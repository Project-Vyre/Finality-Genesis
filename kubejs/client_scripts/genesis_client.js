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
    'sulfur',
    'lead'
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
    event.addItem('minecraft:campfire', ['Campfires now regenerate your health. Cozy!'])
    event.addItem('minecraft:soul_campfire', ['Campfires now regenerate your health. Cozy!'])
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
})
ItemEvents.tooltip(event => {
    event.add(['minecraft:campfire', 'minecraft:soul_campfire'], Text.gold('Campfires can now regenerate your health. <wave>Cozy!</wave>'))
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
    event.addAdvanced(['minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:iron_pickaxe'], (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()])
        } else {
            text.add(1, [
                Text.of('You can now ').white(),
                Text.of('repair ').green().bold(true),
                Text.of('tools with the material they are made of in your ').white(),
                Text.of('crafting grid').gold(),
                Text.of('.').white()
            ])
            text.add(2, [
                Text.of('If you are wondering.. yes, this also applies to ').white(),
                Text.of('Diamond ').aqua(),
                Text.of('and ').white(),
                Text.of('Netherite ').darkGray(),
                Text.of('and other tools as well.').white()
            ])
            text.add(3, [
                'This hint will only show up on wooden, stone and iron pickaxes, so try to remember this!'
            ])
        }
    })
    event.addAdvanced('minecraft:beacon', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()])
        } else {
            text.add(1, Text.green('Gives positive effects to players in a certain radius.').bold(true))
            text.add(2, Text.red('Requires a base built out of precious metals or gems to function!'))
            text.add(3, [Text.white('Iron, '), Text.gold('Gold '), Text.aqua('Diamond, '), Text.green('Emerald '), Text.white('or even '), Text.gray('Netherite '), Text.white('are valid materials.')])
        }
    })
    event.addAdvanced('extendedcrafting:handheld_table', (item, advanced, text) => {
        text.add(1, Text.gray('You never have to use a Crafting Table block again!'))
        text.add(2, Text.gray('It is literally a hand held Crafting Table, what more can you ask for?'))
    })
    event.addAdvanced('farmersdelight:skillet', (item, advanced, text) => {
        if(!event.shift) {
            text.add(1, [
                Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see more info.').gold()
            ])
        } else {
            text.add(1, [
                Text.of('The skillet can be used to cook ').gold(),
                Text.of('over an open flame ').yellow(),
                Text.of('or a ').gold(),
                Text.of('stove').yellow(),
                Text.of('.').gold(),
            ])
            text.add(2, [
                Text.of('It can also be occasionally used as a ').gold(),
                Text.of('weapon ').red(),
                Text.of('should the need ever arise.').gold()
            ])
            text.add(3, [
                Text.of('The alternative use is not recommended for the sake of the ').gold(),
                Text.of('durability ').yellow(),
                Text.of('of your skillet.').gold()
            ])
        }
    })
    event.addAdvanced('eccentrictome:tome', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [
                Text.of('Hold ').darkPurple(),
                Text.of('[Shift] ').lightPurple(),
                Text.of('to see more info.').darkPurple()
            ])
        } else {
            text.add(1, Text.of('<rainb>Condenses many tools and books into one.</rainb>').bold(true))
            text.add(2, Text.white('Elegantly <rainb>presents</rainb> all the tools and ooks stored within it upon right click.'))
            text.add(3, Text.white('Simply punch the air to <rainb>convert</rainb> the Eccentric Tome back to its normal form.'))
            text.add(4, [
                Text.of('Diamond ').aqua(), 
                Text.of('and ').white(), 
                Text.of('Netherite ').gray(), 
                Text.of('pickaxes, axes, shovels, hoes, shears, ').white(), 
                Text.of('Wand of Symmetry ').gold(), 
                Text.of('and ').white(), 
                Text.of('Wrench ').gold(), 
                Text.of('from ').white(),
                Text.of('Create ').yellow(),
                Text.of('are all allowed.').white(),
            ])
            text.add(5, ['To remove items from the reality breaking pocket universe within this book, simply crouch and drop with the item you want to remove.'])
            text.add(6, Text.red('<shake>DO NOT USE AS A CRAFTING INGREDIENT OR YOU WILL LOSE ALL STORED ITEMS!</shake>').bold(true))
        }
    })
    event.addAdvanced('tempad:tempad', (item, advanced, text) => {
        text.add(1, [
            Text.of('Has ').darkPurple(),
            Text.of('unlimited uses. ').lightPurple(),
            Text.of('Enjoy!').darkPurple()
        ])
    })
    event.addAdvanced('tempad:he_who_remains_tempad', (item, advanced, text) => {
        text.add(1, [
            Text.of('The property of ').darkPurple(),
            Text.of('"He Who Remains"').lightPurple()
        ])
    })
})