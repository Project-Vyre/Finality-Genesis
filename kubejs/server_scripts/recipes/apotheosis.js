// requires: apotheosis
// requires: create

let CORE_RARITIES = [
    'common',
    'uncommon',
    'rare',
    'epic',
    'mythic',
    'ancient'
]
let COREGEMS = [
    'ballast',
    'brawlers',
    'breach',
    'combatant',
    'guardian',
    'lightning',
    'lunar',
    'samurai',
    'slipstream',
    'solar',
    'splendor',
    'tyrannical',
    'warlord'
]
let OVERWORLD_GEMS = [
    'earth',
    'royalty'
]
let NETHER_GEMS = [
    'blood_lord',
    'inferno'
]
let END_GEMS = [
    'endersurge',
    'mageslayer',
]

ServerEvents.recipes(event => {
    for (let i = 0; i < COREGEMS.length; i++) {
        event.recipes.create.milling([
            'apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust').withChance(0.25)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"common"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_common_${COREGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            'apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 2).withChance(0.25)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"uncommon"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_uncommon_${COREGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_rare_${COREGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_epic_${COREGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_mythic_${COREGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_ancient_${COREGEMS[i]}_gem_crushing`)
    }
    for (let i = 0; i < OVERWORLD_GEMS.length; i++) {
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${OVERWORLD_GEMS[i]}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_rare_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${OVERWORLD_GEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_epic_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${OVERWORLD_GEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_mythic_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${OVERWORLD_GEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_ancient_${OVERWORLD_GEMS[i]}_gem_crushing`)
    }
    for (let i = 0; i < NETHER_GEMS.length; i++) {
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${NETHER_GEMS[i]}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_rare_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${NETHER_GEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_epic_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${NETHER_GEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_mythic_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${NETHER_GEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_ancient_${NETHER_GEMS[i]}_gem_crushing`)
    }
    for (let i = 0; i < END_GEMS.length; i++) {
        event.recipes.create.milling([
            '2x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${END_GEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_epic_${END_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${END_GEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_mythic_${END_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust', 
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${END_GEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_ancient_${END_GEMS[i]}_gem_crushing`)
    }
})