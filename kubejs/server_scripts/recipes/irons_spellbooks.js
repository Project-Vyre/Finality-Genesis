// requires: irons_spellbooks
// requires: apotheosis
/*
let CORE_RARITIES = [
    'common',
    'uncommon',
    'rare',
    'epic',
    'mythic',
    'ancient'
]
*/

let IRONS_SPELLGEMS = [
    'blood',
    'cooldown',
    'cast_time',
    'ender',
    'evocation',
    'fire',
    'ice',
    'holy',
    'intelligent',
    'lightning',
    'poison',
    'spell_resist',
    'summoning'
]

ServerEvents.recipes(event => {
    for (let i = 0; i < IRONS_SPELLGEMS.length; i++) {
        event.recipes.create.milling([
            'apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust').withChance(0.25)
        ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"common"}`).weakNBT()
        ).processingTime(150).id(`finality:irons_spellbooks_common_${IRONS_SPELLGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            'apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.25)
        ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"uncommon"}`).weakNBT()
        ).processingTime(150).id(`finality:irons_spellbooks_uncommon_${IRONS_SPELLGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:irons_spellbooks_rare_${IRONS_SPELLGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:irons_spellbooks_epic_${IRONS_SPELLGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:irons_spellbooks_mythic_${IRONS_SPELLGEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:irons_spellbooks_ancient_${IRONS_SPELLGEMS[i]}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"irons_spellbooks:${IRONS_SPELLGEMS[i]}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:irons_spellbooks_ancient_${IRONS_SPELLGEMS[i]}_upgrade`)
    }
})