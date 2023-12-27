// priority: 20

/**
 * @file Tooltip removal.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ItemEvents.tooltip(event => {
    let music_discs = [
        '13',
        'cat',
        'blocks',
        'chirp',
        'far',
        'mall',
        'mellohi',
        'stal',
        'strad',
        'ward',
        '11',
        'wait',
        'pigstep',
        'otherside',
        '5'
    ]
    for (let i = 0; i < music_discs.length; i++) {
        let disc = music_discs[i];
        event.addAdvanced(`minecraft:music_disc_${disc}`, (item, advanced, text) => {
            text.remove(1)
        })
    }
    if (Platform.isLoaded('cataclysm')) {
        event.addAdvanced('cataclysm:bulwark_of_the_flame', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:gauntlet_of_guard', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:gauntlet_of_bulwark', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:the_incinerator', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:wither_assault_shoulder_weapon', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:void_assault_shoulder_weapon', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:void_forge', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:void_core', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:tidal_claws', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:infernal_forge', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:ignitium_helmet', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:ignitium_chestplate', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:bloom_stone_pauldrons', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('cataclysm:blessed_amethyst_crab_meat', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:meat_shredder', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:laser_gatling', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:sandstorm_in_a_bottle', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:remnant_skull', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:necklace_of_the_desert', (item, advanced, text) => {
            text.remove(1)
        })
    }
    if (Platform.isLoaded('etched')) {
        event.addAdvanced('etched:boombox', (item, advanced, text) => {
            text.remove(1)
        })
    }
    if (Platform.isLoaded('exposure')) {
        event.addAdvanced('exposure:camera', (item, advanced, text) => {
            text.remove(1)
        })
    }
    if (Platform.isLoaded('supplementaries')) {
        event.addAdvanced('supplementaries:cage', (item, advanced, text) => {
            text.remove(1)
            // nbt variant keeps the tooltip for whatever reason
            if (item.hasNBT()) { text.remove(1) }
        })
    }
    if (Platform.isLoaded('bosses_of_mass_destruction')) {
        let bomd_items = [
            'soul_star',
            'ancient_anima',
            'blazing_eye',
            'obsidian_heart',
            'earthdive_spear',
            'void_thorn',
            'crystal_fruit',
            'brimstone_nectar',
            'mob_ward',
            'levitation_block',
            'void_lily'
        ]
        bomd_items.forEach(itemTooltip => {
            event.addAdvanced(`bosses_of_mass_destruction:${itemTooltip}`, (item, advanced, text) => {
                text.remove(1)
            })
        })
        event.addAdvanced('bosses_of_mass_destruction:charged_ender_pearl', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
        event.addAdvanced('bosses_of_mass_destruction:monolith_block', (item, advanced, text) => {
            text.remove(1)
            text.remove(1)
        })
    }
})
