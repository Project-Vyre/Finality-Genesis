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
        event.addAdvanced('cataclysm:ignitium_leggings', (item, advanced, text) => {
            text.remove(1)
        })
        event.addAdvanced('cataclysm:ignitium_boots', (item, advanced, text) => {
            text.remove(1)
        })
    }
})
