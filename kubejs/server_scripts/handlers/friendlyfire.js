// requires: friendlyfire

/**
 * @file Handler for Friendly Fire
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */



ServerEvents.lowPriorityData(event => {
    if (Platform.isLoaded('grimoireofgaia')) {
        /**
        * Sacred:
        * Creeper Girl: 2 sacred, 2 infernal;
        * Cyan Flower: none;
        * Ender Girl: 2 sacred, 2 eldritch;
        * Slime Girl: 2 sacred, 2 aqueous;
        * Trader: 2 sacred, 2 arcane;
        */
        event.addJson('grimoireofgaia:tags/entity_types/general_protection.json', {
            "values": [
                "grimoireofgaia:creeper_girl",
                "grimoireofgaia:ender_girl",
                "grimoireofgaia:slime_girl",
                "grimoireofgaia:trader"
            ]
        })
    }
    if (Platform.isLoaded('quark')) {
        event.addJson('quark:tags/entity_types/general_protection.json', {
            "values": [
                "quark:shiba_inu"
            ]
        })
    }
})