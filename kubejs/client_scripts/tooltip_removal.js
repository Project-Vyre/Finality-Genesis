// priority: 3

/**
 * @file Tooltip removal.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ItemEvents.tooltip(event => {
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
})
