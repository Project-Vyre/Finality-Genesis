// requires: apotheosis
// requires: create
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
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:core/${COREGEMS[i]}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${COREGEMS[i]}_upgrade`)
    }
    for (let i = 0; i < OVERWORLD_GEMS.length; i++) {
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${OVERWORLD_GEMS[i]}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_rare_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${OVERWORLD_GEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_epic_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${OVERWORLD_GEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_mythic_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${OVERWORLD_GEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_ancient_${OVERWORLD_GEMS[i]}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${OVERWORLD_GEMS[i]}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${OVERWORLD_GEMS[i]}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${OVERWORLD_GEMS[i]}_upgrade`)
    }
    for (let i = 0; i < NETHER_GEMS.length; i++) {
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${NETHER_GEMS[i]}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_rare_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${NETHER_GEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_epic_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${NETHER_GEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_mythic_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${NETHER_GEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_ancient_${NETHER_GEMS[i]}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${NETHER_GEMS[i]}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${NETHER_GEMS[i]}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${NETHER_GEMS[i]}_upgrade`)
    }
    for (let i = 0; i < END_GEMS.length; i++) {
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${END_GEMS[i]}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_end_epic_${END_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${END_GEMS[i]}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_end_mythic_${END_GEMS[i]}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${END_GEMS[i]}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_end_ancient_${END_GEMS[i]}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${END_GEMS[i]}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${END_GEMS[i]}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${END_GEMS[i]}_upgrade`)
    }
    event.shaped('6x minecraft:arrow', [
        'F',
        'S',
        'E'
    ], {
        F: 'minecraft:feather',
        S: '#forge:rods/wooden',
        E: 'minecraft:feather'
    }).id('minecraft:arrow')
    event.recipes.create.mechanical_crafting('6x apotheosis:obsidian_arrow', [
        'O',
        'S',
        'F'
    ], {
        O: 'minecraft:obsidian',
        S: 'minecraft:stick',
        F: 'minecraft:feather'
    }).id(`finality:obsidian_arrow_mechanical_crafting`)
    event.recipes.create.mechanical_crafting('6x apotheosis:broadhead_arrow', [
        'I',
        'S',
        'F'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'minecraft:stick',
        F: 'minecraft:feather'
    }).id('finality:broadhead_arrow_mechanical_crafting')
    event.recipes.create.mechanical_crafting('apotheosis:explosive_arrow', [
        'R',
        'G',
        'F'
    ], {
        R: 'minecraft:fire_charge',
        G: 'minecraft:gunpowder',
        F: 'minecraft:feather'
    }).id('finality:explosive_arrow_mechanical_crafting')
    event.recipes.create.mechanical_crafting('12x apotheosis:iron_mining_arrow', [
        'I',
        'S',
        'F'
    ], {
        I: 'minecraft:iron_pickaxe',
        S: 'minecraft:stick',
        F: 'minecraft:feather'
    }).id('finality:iron_mining_arrow_mechanical_crafting')
    event.recipes.create.mechanical_crafting('24x apotheosis:diamond_mining_arrow', [
        'D',
        'S',
        'F'
    ], {
        D: 'minecraft:diamond',
        S: 'minecraft:stick',
        F: 'minecraft:feather'
    }).id('finality:diamond_mining_arrow_mechanical_crafting')
})