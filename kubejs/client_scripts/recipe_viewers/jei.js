// priority: 3
// requires: jei
// requires: jeresources
// requires: justenoughprofessions
// requires: create

/**
 * @file Responsible for handling JEI hiding, adding, etc.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

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
    'nitro_crystal',
    'sulfur',
    'lead'
]
let CAdditionsItems = [
    'straw',
    'brass_rod',
    'electrum_rod',
    'electrum_ingot',
    'electrum_sheet',
    'electrum_nugget',
    'electrum_wire',
    'electrum_spool',
    'electrum_amulet',
    'digital_adapter'
]

JEIEvents.addItems(event => {
    event.add([
        'minecraft:dragon_egg',
        'minecraft:structure_void',
        'create:chromatic_compound',
        'create:refined_radiance',
        'create:shadow_steel',
        'create:refined_radiance_casing',
        'create:shadow_steel_casing'
    ])
})

JEIEvents.hideItems(event => {
    if (Platform.isLoaded('createaddition')) {
        event.hide([
            /^createaddition.*[_:\/]electrum(?![a-zA-Z0-9]).*/,
            'createaddition:diamond_grit',
            'createaddition:diamond_grit_sandpaper',
            'createaddition:zinc_sheet'
        ])
        CAdditionsItems.forEach(name => {
            event.hide(`createaddition:${name}`)
        })
    }
    if (Platform.isLoaded('createdeco')) {
        event.hide([
            'createdeco:netherite_sheet',
            'createdeco:zinc_sheet'
        ])
    }

    if (Platform.isLoaded('mysticalagriculture')) {
        MYSHIDE.forEach(name => {
            event.hide(`mysticalagriculture:${name}_essence`)
            event.hide(`mysticalagriculture:${name}_seeds`)
        })
        event.hide([
            'mysticalagriculture:harvester',
            'mysticalagriculture:basic_reprocessor',
            'mysticalagriculture:inferium_reprocessor',
            'mysticalagriculture:prudentium_reprocessor',
            'mysticalagriculture:tertium_reprocessor',
            'mysticalagriculture:imperium_reprocessor',
            'mysticalagriculture:supremium_reprocessor',
            'mysticalagriculture:awakened_supremium_reprocessor'
        ])
    }

    if (Platform.isLoaded('abnormals_delight')) {
        event.hide('abnormals_delight:laurel_cabinet')
    }

    if (!Platform.isLoaded('ad_astra')) {
        event.hide([
            'mysticalagriculture:steel_essence',
            'mysticalagriculture:steel_seeds'
        ])
    }

    if (Platform.isLoaded('gag')) {
        event.hide([
            'gag:hearthstone',
            'gag:energized_hearthstone'
        ])
    }

    if (Platform.isLoaded('incubation') && Platform.isLoaded('farmersdelight')) {
        event.hide('incubation:fried_egg')
    }
    if (Platform.isLoaded('mysticalagradditions') && !Platform.isLoaded('tinkersconstruct')) {
        event.hide([
            'mysticalagradditions:molten_inferium_bucket',
            'mysticalagradditions:molten_prudentium_bucket',
            'mysticalagradditions:molten_tertium_bucket',
            'mysticalagradditions:molten_imperium_bucket',
            'mysticalagradditions:molten_supremium_bucket',
            'mysticalagradditions:molten_soulium_bucket',
        ])
    }
    if (Platform.isLoaded('mysticalagriculture')
        && Platform.isLoaded('mysticalagradditions')
        && !Platform.isLoaded('avaritia')
    ) {
        event.hide([
            'mysticalagriculture:neutronium_essence',
            'mysticalagriculture:neutronium_seeds',
            'mysticalagradditions:neutronium_crux'
        ])
    }

    if (Platform.isLoaded('mysticalagriculture')
        && Platform.isLoaded('mysticalagradditions')
        && !Platform.isLoaded('botania')
    ) {
        event.hide([
            'mysticalagriculture:gaia_spirit_seeds',
            'mysticalagriculture:gaia_spirit_essence',
            'mysticalagradditions:gaia_spirit_crux'
        ])
    }

    if (Platform.isLoaded('mysticalagriculture')
        && Platform.isLoaded('mysticalagradditions')
        && !Platform.isLoaded('draconicevolution')
    ) {
        event.hide([
            'mysticalagriculture:awakened_draconium_seeds',
            'mysticalagriculture:awakened_draconium_essence',
            'mysticalagradditions:awakened_draconium_crux'
        ])
    }

    if (Platform.isLoaded('mysticalagriculture')
        && Platform.isLoaded('mysticalagradditions')
        && !Platform.isLoaded('powah')
    ) {
        event.hide([
            'mysticalagriculture:nitro_crystal_seeds',
            'mysticalagriculture:nitro_crystal_essence',
            'mysticalagradditions:nitro_crystal_crux'
        ])
    }

    if (Platform.isLoaded('malum') && Platform.isLoaded('create')) {
        event.hide('malum:copper_nugget')
    }

    if (Platform.isLoaded('headhunter_mod') && Platform.isLoaded('apotheosis')) {
        event.hide([
            'headhunter_mod:vertical_beam_spawn_egg',
            Item.of('minecraft:potion', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
            Item.of('minecraft:potion', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
            Item.of('minecraft:potion', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
            Item.of('minecraft:splash_potion', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
            Item.of('minecraft:splash_potion', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
            Item.of('minecraft:splash_potion', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
            Item.of('minecraft:lingering_potion', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
            Item.of('minecraft:lingering_potion', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
            Item.of('minecraft:lingering_potion', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
            Item.of('minecraft:tipped_arrow', '{Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
            Item.of('minecraft:tipped_arrow', '{Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
            Item.of('minecraft:tipped_arrow', '{Potion:"headhunter_mod:fly_potion"}').strongNBT(),
            Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"headhunter_mod:screenshakepotion"}').strongNBT(),
            Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"headhunter_mod:screencolourpotion"}').strongNBT(),
            Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"headhunter_mod:fly_potion"}').strongNBT()
        ])
    }
})

JEIEvents.hideFluids(event => {
    if (Platform.isLoaded('mysticalagradditions')) {
        event.hide('mysticalagradditions:molten_inferium')
        event.hide('mysticalagradditions:molten_prudentium')
        event.hide('mysticalagradditions:molten_tertium')
        event.hide('mysticalagradditions:molten_imperium')
        event.hide('mysticalagradditions:molten_supremium')
        event.hide('mysticalagradditions:molten_soulium')
    }
})


JEIEvents.addItems(event => {
    if (Platform.isLoaded('delightful')) {
        event.add('delightful:green_tea_leaf')
    }
})

JEIEvents.information(event => {
    event.addItem('minecraft:campfire', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
    event.addItem('minecraft:soul_campfire', ['Campfires now regenerate your health. <wave>Cozy!</wave>'])
    event.addItem('minecraft:dragon_egg', ['Can be used to make Dragon Breath.'])
    event.addItem('create:refined_radiance', [
        'When Chromatic Compound is thrown into a grid of Beacons, it changes form and becomes Refined Radiance.',
        'Take advantage of its floating properties, perhaps you can automate this?'
    ])
    event.addItem('create:shadow_steel', [
        'When Chromatic Compound is thrown into the darkness of the Void, it changes form and becomes Shadow Steel.',
        'Take advantage of its floating properties, perhaps you can automate this?'
    ])
    event.addItem('kubejs:lemon_seed', ['Can only be acquired from breaking grass or trading with farmers.'])
    if (Platform.isLoaded('cataclysm')) {
        event.addItem('minecraft:nether_star', [
            'If you find a deactivated and mechanical version of the Wither, give it a Nether Star.',
            'Also extensively used in certain recipes.'
        ])
        event.addItem('cataclysm:burning_ashes', ['Used to summon Ignis.'])
        event.addItem('cataclysm:abyssal_sacrifice', [
            'Required to summon the Leviathan.',
            'Use on the Altar of Abyss located in the Sunken City.'
        ])
        event.addItem('cataclysm:abyssal_egg', [
            'Does not require anything special to hatch, simply place it down.',
            'You will have to wait a while for the egg to hatch.'
        ])
    }
    if (Platform.isLoaded('enderchests')) {
        event.addItem('enderchests:ender_bag', [
            'On Sneak + R-Click on an Ender Chest',
            '_Copies_ color channels from the Ender Chest onto the pouch.'
        ])
    }
    if (Platform.isLoaded('endertanks')) {
        event.addItem('endertanks:ender_bucket', [
            'On Sneak + R-Click on an Ender Tank',
            '_Copies_ color channels from the Ender Tank onto the bucket.'
        ])
    }
    if (Platform.isLoaded('endrem')) {
        event.addItem('minecraft:ender_eye', [
            'There is a certain eye that can only be acquired from enchanting.',
            'It is very rare, however.'
        ])
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
    }
    if (Platform.isLoaded('farmersdelight')) {
        event.addItem([
            'farmersdelight:wild_cabbages',
            'farmersdelight:cabbage_seeds'
        ], [
            '[Finality Tip]',
            'Can be found on beaches.',
            'It looks like a large bush with small yellow flowers on top.'
        ])
        event.addItem(['farmersdelight:wild_beetroots', 'minecraft:beetroot_seeds'], [
            '[Finality Tip]',
            'Can be found on beaches.',
            'It is a type of beet with larger leaves.'
        ])
        event.addItem(['farmersdelight:wild_potatoes', 'minecraft:potato'], [
            '[Finality Tip]',
            'Can be found in biomes with cold climates. This means that the biome must have a temperature between 0.0 and 0.3.',
            'Similar in appearance to normal Potato patches, but has large flowers.'
        ])
        event.addItem(['farmersdelight:wild_onions', 'farmersdelight:onion'], [
            '[Finality Tip]',
            'Can be found in biomes with temperate climates. This means that the biome must have a temperature of 0.3 and 1.0.',
            'It looks like a thick cluster of Allium flowers with an onion bulb under them.'
        ])
        event.addItem(['farmersdelight:wild_carrots', 'minecraft:carrot'], [
            '[Finality Tip]',
            'Can be found in biomes with temperate climates. This means that the biome must have a temperature of 0.3 and 1.0.',
            'Looks like a flowering weed with white flowers and has an orange base poking out slightly from the dirt.'
        ])
        event.addItem(['farmersdelight:wild_tomatoes', 'farmersdelight:tomato_seeds'], [
            '[Finality Tip]',
            'Can be found in biomes with arid climates. This means that the biome must have a temperature above 1.0.',
            'Looks like a cluster of vines covered in tiny tomatoes.'
        ])
        event.addItem('farmersdelight:wild_rice', [
            '[Finality Tip]',
            'Can be found in swamps and jungles in shallow areas of water.',
            'It has yellow grains on the ends of its stalks and is usually two blocks tall.'
        ])
    }

    if (Platform.isLoaded('aether')) {
        event.addItem('aether:holystone', [
            'Can now be renewed using a set up similar to Basalt generation except the following:\n',
            'The Blue Ice is replaced with a Magma block.',
            'The Soul Soil is replaced with Quick Soil.'
        ])
        event.addItem([
            'aether:obsidian_helmet',
            'aether:obsidian_chestplate',
            'aether:obsidian_leggings',
            'aether:obsidian_boots',
            'aether:obsidian_gloves'
        ], [
            'Can only be acquired by wearing Phoenix Armor, then wading into water to convert it to the respective Obsidian armor piece.',
            'After a spending some time in water, the Phoenix Armor pieces are converted.',
            'In other words, it is made by wearing Phoenix Armor, then quenching it with water.'
        ])
    }
    if (Platform.isLoaded('obscure_api')
        || Platform.isLoaded('aquamirae')
    ) {
        event.addItem('obscure_api:astral_dust', ['Used in making a special chestpiece. Can only be found in Frozen Chests.'])
    }
    if (Platform.isLoaded('culturaldelights')) {
        event.addItem('culturaldelights:avocado', [
            'Can only be acquired by picking it off right from flowering leaf blocks on avocado trees.'
        ])
    }
    if (Platform.isLoaded('delightful')) {
        event.addItem('delightful:green_tea_leaf', [
            'Can only be acquired by chance using a Knife on leaf blocks.'
        ])
    }
    if (Platform.isLoaded('mysticalagriculture')) {
        event.addItem('mysticalagriculture:fertilized_essence', [
            'Can only be acquired from Mystical Agriculture crops upon harvesting.',
            'Not a guaranteed drop!'
        ])
        event.addItem('mysticalagriculture:awakened_supremium_essence', [
            'Can only be acquired through decompressing Awakened Supremium Blocks.'
        ])
    }
    if (Platform.isLoaded('neapolitan')) {
        event.addItem('neapolitan:adzuki_beans', [
            'Can only be grown in non-tilled soil.',
            'Does not require water!'
        ])
    }
    if (Platform.isLoaded('tempad')) {
        event.addItem('tempad:tempad', ['Allows you to teleport to points you placed throughout the world but has a 3 minute cooldown.'])
        event.addItem('tempad:he_who_remains_tempad', ['Can only be acquired from the End, somewhere.'])
    }
})