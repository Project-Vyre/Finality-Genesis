// requires: apotheosis
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for Apotheosis.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 * @author TheonlyTazz <https://github.com/TheonlyTazz> For helping with for loops. Thank you.
 */

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
    'mageslayer'
]

ServerEvents.recipes(event => {
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [
            {
                "type": "apotheosis:module",
                "module": "spawner"
            }
        ],
        "mainhand": {
            "item": "kubejs:stable_entropy_particles"
        },
        "stat_changes": [
            {
                "id": "ignore_conditions",
                "value": true
            }
        ]
    }).id('finality:spawner/ignore_conditions')
    event.custom({
        "type": "apotheosis:spawner_modifier",
        "conditions": [
            {
                "type": "apotheosis:module",
                "module": "spawner"
            }
        ],
        "mainhand": {
            "item": "kubejs:stable_entropy_particles"
        },
        "offhand": {
            "item": "minecraft:quartz"
        },
        "consumes_offhand": false,
        "stat_changes": [
            {
                "id": "ignore_conditions",
                "value": false
            }
        ]
    }).id('finality:spawner/ignore_conditions_inverted')
    event.recipes.create.deploying('apotheosis:ancient_material', [
        'apotheosis:mythic_material',
        'kubejs:stable_entropy_particles'
    ]).id('finality:apotheosis/deploying/ancient_material')
    for (let i = 0; i < COREGEMS.length; i++) {
        let gem = COREGEMS[i];
        event.recipes.create.milling([
            'apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust').withChance(0.25)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"common"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_common_${gem}_gem_crushing`)
        event.recipes.create.milling([
            'apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.25)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"uncommon"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_uncommon_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_rare_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_epic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_mythic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_core_ancient_${gem}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:core/${gem}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${gem}_upgrade`)
    }
    for (let i = 0; i < OVERWORLD_GEMS.length; i++) {
        let gem = OVERWORLD_GEMS[i];
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${gem}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_rare_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${gem}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_epic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${gem}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_mythic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${gem}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_overworld_ancient_${gem}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${gem}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:overworld/${gem}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${gem}_upgrade`)
    }
    for (let i = 0; i < NETHER_GEMS.length; i++) {
        let gem = NETHER_GEMS[i];
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 2).withChance(0.30)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${gem}",rarity:"rare"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_rare_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${gem}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_epic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${gem}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_mythic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${gem}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_nether_ancient_${gem}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${gem}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:the_nether/${gem}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${gem}_upgrade`)
    }
    for (let i = 0; i < END_GEMS.length; i++) {
        let gem = END_GEMS[i];
        event.recipes.create.milling([
            '2x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.40)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${gem}",rarity:"epic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_end_epic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '3x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 3).withChance(0.50)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${gem}",rarity:"mythic"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_end_mythic_${gem}_gem_crushing`)
        event.recipes.create.milling([
            '4x apotheosis:gem_dust',
            Item.of('apotheosis:gem_dust', 6).withChance(0.55)
        ], Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${gem}",rarity:"ancient"}`).weakNBT()
        ).processingTime(150).id(`finality:apotheosis_end_ancient_${gem}_gem_crushing`)
        event.recipes.create.deploying(Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${gem}",rarity:"ancient"}`).weakNBT(), [
            Item.of('apotheosis:gem', `{gem:"apotheosis:the_end/${gem}",rarity:"mythic"}`).weakNBT(),
            'kubejs:command_block'
        ]).keepHeldItem().id(`finality:ancient_${gem}_upgrade`)
    }
    event.recipes.create.crushing([
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"common"}').withChance(0.90),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"uncommon"}').withChance(0.50),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"rare"}').withChance(0.25),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"epic"}').withChance(0.10),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"mythic"}').withChance(0.05)
    ], 'kubejs:stable_entropy_particles').processingTime(500).id('finality:crushing/eversor_gem')
    event.recipes.create.mixing([
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"uncommon"}').withChance(0.50),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"rare"}').withChance(0.30),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"epic"}').withChance(0.10),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"mythic"}').withChance(0.05)
    ], [
        'kubejs:stable_entropy_particles',
        '16x apotheosis:gem_dust'
    ]).id('finality:mixing/eversor_gem_from_dust')
    event.recipes.create.milling(
        'kubejs:unstable_entropy_particles',
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"common"}').weakNBT()
    ).processingTime(250).id('finality:milling/common_eversor_gem_recycling')
    event.recipes.create.milling(
        'kubejs:unstable_entropy_particles',
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"uncommon"}').weakNBT()
    ).processingTime(250).id('finality:milling/uncommon_eversor_gem_recycling')
    event.recipes.create.milling(
        'kubejs:unstable_entropy_particles',
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"rare"}').weakNBT()
    ).processingTime(250).id('finality:milling/rare_eversor_gem_recycling')
    event.recipes.create.milling(
        'kubejs:unstable_entropy_particles',
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"epic"}').weakNBT()
    ).processingTime(250).id('finality:milling/epic_eversor_gem_recycling')
    event.recipes.create.milling(
        'kubejs:unstable_entropy_particles',
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"mythic"}').weakNBT()
    ).processingTime(250).id('finality:milling/mythic_eversor_gem_recycling')
    event.recipes.create.deploying(Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"ancient"}').weakNBT(), [
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"mythic"}').weakNBT(),
        'kubejs:command_block'
    ]).keepHeldItem().id('finality:ancient_eversor_upgrade')
    // Acuti Ora
    event.recipes.create.cutting(
        Item.of('apotheosis:gem', '{gem:"kubejs:acuti_ora",rarity:"common"}'),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"common"}').weakNBT()
    ).processingTime(250).id('finality:cutting/acuti_ora_common')
    event.recipes.create.cutting(
        Item.of('apotheosis:gem', '{gem:"kubejs:acuti_ora",rarity:"uncommon"}'),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"uncommon"}').weakNBT()
    ).processingTime(250).id('finality:cutting/acuti_ora_uncommon')
    event.recipes.create.cutting(
        Item.of('apotheosis:gem', '{gem:"kubejs:acuti_ora",rarity:"rare"}'),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"rare"}').weakNBT()
    ).processingTime(250).id('finality:cutting/acuti_ora_rare')
    event.recipes.create.cutting(
        Item.of('apotheosis:gem', '{gem:"kubejs:acuti_ora",rarity:"epic"}'),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"epic"}').weakNBT()
    ).processingTime(250).id('finality:cutting/acuti_ora_epic')
    event.recipes.create.cutting(
        Item.of('apotheosis:gem', '{gem:"kubejs:acuti_ora",rarity:"mythic"}'),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"mythic"}').weakNBT()
    ).processingTime(250).id('finality:cutting/acuti_ora_mythic')
    event.recipes.create.cutting(
        Item.of('apotheosis:gem', '{gem:"kubejs:acuti_ora",rarity:"ancient"}'),
        Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"ancient"}').weakNBT()
    ).processingTime(250).id('finality:cutting/acuti_ora_ancient')
    event.shaped('6x minecraft:arrow', [
        'F',
        'S',
        'E'
    ], {
        F: 'minecraft:flint',
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

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        'apotheosis:simple_reforging_table',
        'apotheosis:reforging_table',
        'apotheosis:salvaging_table',
        'apotheosis:gem_cutting_table'
    ])
})

LootJS.modifiers(event => {
    event.addEntityLootModifier('minecraft:warden')
        .randomChance(0.002).addLoot(Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"common"}').weakNBT())
    if (Platform.isLoaded('graveyard')) {
        event.addEntityLootModifier('graveyard:lich')
            .randomChance(0.10).addLoot(Item.of('apotheosis:gem', '{gem:"kubejs:eversor",rarity:"common"}').weakNBT())
    }
})