// priority: 0
// requires: kubejs
// requires: create
// requires: supplementaries
// requires: lodestone
// requires: salt

console.info('Implementing Finality recipes and compats...')

let STONEPLATES = ['stone', 'polished_blackstone']
let WOODPLATES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
let FOUNDATION_METALS = ['iron', 'gold']
let FOUNDATION_NONMETAL = [
    'coal',
    'redstone',
    'quartz',
    'diamond',
    'emerald',
    'lapis_lazuli'
]
let CURSEDRECIPES = [
    'iron_ingot_from_smelting_iron_ore',
    'iron_ingot_from_blasting_iron_ore',
    'iron_ingot_from_smelting_deepslate_iron_ore',
    'iron_ingot_from_blasting_deepslate_iron_ore',
    'copper_ingot_from_smelting_copper_ore',
    'copper_ingot_from_blasting_copper_ore',
    'copper_ingot_from_smelting_deepslate_copper_ore',
    'copper_ingot_from_blasting_deepslate_copper_ore',
    'gold_ingot_from_smelting_gold_ore',
    'gold_ingot_from_blasting_gold_ore',
    'gold_ingot_from_smelting_deepslate_gold_ore',
    'gold_ingot_from_blasting_deepslate_gold_ore',
]
let MODRECIPES = [
    'createaddition:mixing/netherrack',
    'createaddition:rolling/straw',
    'createaddition:mixing/bioethanol',
    'createaddition:rolling/gold_ingot',
    'createaddition:rolling/brass_ingot'
]
let COLORID = ['white', 'orange', 'magenta', 'light_blue', 'lime', 'pink', 'purple', 'light_gray', 'gray', 'cyan', 'brown', 'green', 'blue', 'red', 'black', 'yellow']
ServerEvents.recipes(event => {
    FOUNDATION_NONMETAL.forEach(insert => { // why can you even smelt and blast these ores? YOU LITERALLY LOSE SO MUCH!
        event.remove([
            {
                type: 'minecraft:smelting',
                output: `minecraft:${insert}`
            },
            {
                type: 'minecraft:blasting',
                output: `minecraft:${insert}`
            }
        ])
    })
    CURSEDRECIPES.forEach(insert => { // removing cursed recipes pt2
        event.remove({ id: `minecraft:${insert}` })
    })
    MODRECIPES.forEach(insert => {
        event.remove({ id: `${insert}` })
    })
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), ['#forge:rods/wooden', '#forge:rods/wooden']).id('finality:documentation_book')
    event.shaped('minecraft:bucket', [
        'I I',
        ' I '
    ], {
        I: 'create:iron_sheet'
    }).id('minecraft:bucket')
    event.shaped('minecraft:clock', [
        ' G ',
        'GMG',
        ' G '
    ], {
        G: 'create:golden_sheet',
        M: 'create:precision_mechanism'
    }).id('minecraft:clock')
    event.shaped('minecraft:compass', [
        ' I ',
        'IRI',
        ' I '
    ], {
        I: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('minecraft:compass')
    event.shaped('minecraft:piston', [
        'WWW',
        'CEC',
        'CRC'
    ], {
        W: '#minecraft:planks',
        C: 'minecraft:cobblestone',
        E: 'create:piston_extension_pole',
        R: 'minecraft:redstone'
    }).id('minecraft:piston')
    event.shaped('minecraft:hopper', [
        'F F',
        'FCF',
        ' F '
    ], {
        F: 'create:iron_sheet',
        C: '#forge:chests/wooden'
    }).id('minecraft:hopper')
    event.shaped('minecraft:trident', [
        'PPP',
        ' A ',
        ' A '
    ], {
        P: 'kubejs:trident_prong',
        A: 'kubejs:trident_pole'
    }).id('finality:trident')
    event.shaped('kubejs:trident_pole', [
        'S',
        'S'
    ], {
        S: 'minecraft:prismarine_shard'
    }).id('finality:trident_pole')
    event.shapeless('kubejs:trident_prong', [
        'minecraft:pointed_dripstone',
        'minecraft:prismarine_crystals'
    ]).id('finality:trident_prong')
    event.recipes.createMixing('kubejs:high_entropy_alloy', [
        'extendedcrafting:the_ultimate_ingot',
        'extendedcrafting:crystaltine_ingot',
        'minecraft:netherite_ingot',
        'create:polished_rose_quartz',
        'create:brass_ingot',
        'create:andesite_alloy',
        'minecraft:diamond',
        'minecraft:amethyst_shard',
        Fluid.of('kubejs:condensed_universal_entropy', 500)
    ]).superheated().id('finality:mixing/high_entropy_alloy')
    event.shaped('kubejs:final_helmet', [
        'EEE',
        'E E'
    ], {
        E: 'kubejs:high_entropy_alloy',
    }).id('finality:crafting/final_helmet')
    event.shaped('kubejs:final_chestplate', [
        'E E',
        'EEE',
        'EEE'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:crafting/final_chestplate')
    event.shaped('kubejs:final_leggings', [
        'EEE',
        'E E',
        'E E'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:crafting/final_leggings')
    event.shaped('kubejs:final_boots', [
        'E E',
        'E E'
    ], {
        E: 'kubejs:high_entropy_alloy'
    }).id('finality:crafting/final_boots')
    event.shaped('kubejs:final_sword', [
        'E',
        'E',
        'S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_sword')
    event.shaped('kubejs:final_pickaxe', [
        'EEE',
        ' S ',
        ' S '
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_pickaxe')
    event.shaped('kubejs:final_axe', [
        'EE',
        'ES',
        ' S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_axe')
    event.shaped('kubejs:final_shovel', [
        'E',
        'S',
        'S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_shovel')
    event.shaped('kubejs:final_hoe', [
        'EE',
        ' S',
        ' S'
    ], {
        E: 'kubejs:high_entropy_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_hoe')
    event.recipes.createMixing(Fluid.of('kubejs:mushroom_stew', 250), [
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom'
    ]).id('finality:mushroom_stew_mixing')
    event.recipes.createFilling('minecraft:mushroom_stew', [
        'minecraft:bowl',
        Fluid.of('kubejs:mushroom_stew', 250)
    ]).id('finality:mushroom_stew_pouring')
    STONEPLATES.forEach(stone => {
        event.recipes.create.cutting([
            `minecraft:${stone}_pressure_plate`,
            `minecraft:${stone}_slab`
        ], `${stone}`).processingTime(50).id(`finality:${stone}_pressure_plate`)
    })
    WOODPLATES.forEach(wood => {
        event.recipes.create.cutting([
            `minecraft:${wood}_pressure_plate`,
            `minecraft:${wood}_slab`
        ], `${wood}_planks`).processingTime(50).id(`finality:${wood}_pressure_plate`)
    })
    event.shaped('minecraft:light_weighted_pressure_plate', [
        'G',
        'R'
    ], {
        G: 'create:golden_sheet',
        R: 'minecraft:redstone'
    }).id('minecraft:light_weighted_pressure_plate')
    event.shaped('minecraft:heavy_weighted_pressure_plate', [
        'G',
        'R'
    ], {
        G: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('minecraft:heavy_weighted_pressure_plate')
    event.shapeless('create:mechanical_piston', [
        'supplementaries:soap', 'create:sticky_mechanical_piston'
    ]).id('finality:mechanical_piston_soap_washing')
    event.recipes.createItemApplication('minecraft:tinted_glass', [
        '#forge:glass/colorless', 'minecraft:amethyst_shard'
    ]).id('minecraft:tinted_glass')
    // compacting
    event.recipes.createCompacting([
        'minecraft:sponge',
        Fluid.of('minecraft:water', 1000)
    ], [
        'minecraft:wet_sponge'
    ]).id('finality:sponge_squeezing')
    event.recipes.createCompacting([
        'minecraft:diamond',
        Item.of('create:experience_nugget').withChance(0.05)
    ], [
        Item.of('minecraft:coal_block', 1),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_diamond')
    event.recipes.createCompacting([
        'minecraft:diamond_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        Item.of('minecraft:coal_block', 9),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_diamond_bulk')
    event.recipes.createCompacting([
        'minecraft:coal',
        Item.of('create:experience_nugget').withChance(0.05)
    ], [
        Item.of('minecraft:dried_kelp_block', 1)
    ]).heated().id('finality:renew_coal')
    event.recipes.createCompacting([
        'minecraft:coal_block',
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        Item.of('minecraft:dried_kelp_block', 9)
    ]).heated().id('finality:renew_coal_bulk')
    event.recipes.createCompacting([
        'minecraft:basalt'
    ], [
        'minecraft:blue_ice',
        Fluid.of('minecraft:lava', 500)
    ]).id('finality:compacting_basalt')
    event.recipes.createCompacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:gravel', 9),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:deepslate', 9),
        Fluid.of('minecraft:lava', 250)
    ]).heated().id('finality:renew_deepslate_tuff')
    // milling
    // crushing
    event.remove({ id: 'create:crushing/netherrack' })
    event.recipes.createCrushing([
        Item.of('minecraft:pointed_dripstone', 4),
        Item.of('minecraft:clay_ball').withChance(0.50),
        Item.of('create:copper_nugget').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.75)
    ], 'minecraft:dripstone_block').processingTime(250).id('finality:dripstone_crushing')
    event.recipes.createCrushing([
        Item.of('create:copper_nugget').withChance(0.05),
        Item.of('minecraft:gunpowder').withChance(0.10)
    ], 'minecraft:basalt').id('finality:basalt_crushing')
    event.recipes.createCrushing([
        'create:cinder_flour',
        Item.of('create:cinder_flour').withChance(0.50),
        Item.of('minecraft:netherite_scrap').withChance(0.002)
    ], 'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
    event.recipes.createCrushing([
        Item.of('minecraft:gold_nugget', 5).withChance(0.10),
        Item.of('create:experience_nugget', 2).withChance(0.05)
    ], 'minecraft:gilded_blackstone').processingTime(250).id('finality:gilded_blackstone_crushing')
    event.recipes.createCrushing(Item.of('9x kubejs:deepslate_shard').withChance(0.75), 'minecraft:deepslate').processingTime(250).id('finality:deepslate_shard_from_deepslate')
    event.recipes.createCrushing(Item.of('kubejs:deepslate_shard', 9).withChance(0.25), 'minecraft:cobbled_deepslate').processingTime(250).id('finality:deepslate_shard_from_cobbled_deepslate')
    // filling
    event.recipes.createFilling('minecraft:netherrack', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
    ]).id('finality:living_flesh_stone')
    event.recipes.createFilling('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 250)
    ]).id('finality:netherite_ingot_from_spout')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
    event.recipes.createHaunting(['minecraft:phantom_membrane'], 'minecraft:rotten_flesh').id('finality:phantom_membrane_from_flesh')
    event.recipes.createHaunting([
        Item.of('minecraft:echo_shard').withChance(0.02),
        Item.of('minecraft:disc_fragment_5').withChance(0.01)
    ], 'kubejs:deepslate_shard').id('finality:echo_shard_from_haunting')
    // splashing
    event.recipes.createSplashing(['minecraft:piston'], 'minecraft:sticky_piston').id('finality:sticky_piston_splashing')
    event.recipes.createSplashing(['create:mechanical_piston'], 'create:sticky_mechanical_piston').id('finality:sticky_mechanical_piston_splashing')
    // blasting
    event.blasting('create:zinc_block', 'create:raw_zinc_block').id('finality:zinc_block_blasting_compat')
    // mixing 
    event.recipes.createMixing('minecraft:dirt', [
        'minecraft:gravel',
        '3x minecraft:bone_meal'
    ]).id('finality:dirt_from_gravel')
    event.recipes.createMixing(['minecraft:coarse_dirt'], [
        'minecraft:dirt', 'minecraft:gravel'
    ]).id('finality:coarse_dirt')
    event.recipes.createMixing([Fluid.of('kubejs:molten_gold', 250)], ['minecraft:gold_ingot']).heated().id('finality:gold_ingot_melting')
    event.recipes.createMixing(['minecraft:netherite_ingot'], [Item.of('minecraft:netherite_scrap', 4), Fluid.of('kubejs:molten_gold', 1000)]).heated().id('finality:netherite_ingot_from_mixing')
    event.recipes.createMixing(['minecraft:emerald'], [
        'minecraft:quartz', 'minecraft:glass', '3x minecraft:iron_nugget'
    ]).superheated().id('finality:renew_emerald') // Be3Al2(SiO3)6
    event.recipes.createMixing(['minecraft:nether_gold_ore'], [
        'create:cinder_flour',
        '18x minecraft:gold_nugget',
        Fluid.of('minecraft:lava', 250)
    ]).id('finality:nether_gold_ore_deco') // Thank you to FunnyMan4579 on the official Create Discord for giving me this idea :3
    event.recipes.createMixing('salt:salt', [
        Fluid.of('minecraft:water', 1000)
    ]).heated().id('finality:create_salt_compat')
    // supplementaries related
    event.shaped('supplementaries:quiver', [
        'RRL',
        'RLL',
        'LL '
    ], {
        R: '#forge:rope',
        L: '#forge:leather'
    }).id('finality:supplementaries_quiver')
    // denied
    event.shapeless('kubejs:denied_result', [
        '4x minecraft:netherite_scrap',
        '4x minecraft:gold_ingot'
    ]).id('minecraft:netherite_ingot')
})

ServerEvents.tags('item', event => {
    //COLORID.forEach(color => {
    //    event.add('kubejs:concrete_singularities', Item.of('extendedcrafting:singularity', `{Id:"extendedcrafting:concrete_${color}"}`).weakNBT())
    //})
})

ServerEvents.tags('block', event => {

})

PlayerEvents.loggedIn(event => {
    //Give the player the quest book on first join
    if (!event.player.persistentData.contains('firstjoin')) {
        event.player.persistentData.putBoolean('firstjoin', true)
        event.player.give('ftbquests:book')
    }
})

ServerEvents.loaded(event => {
    if (!event.server.persistentData.contains('firstload')) {
        event.server.persistentData.putBoolean('firstload', true)
        console.warn('First server load! Lag may be present for a few minutes. Also, please check your Quest Book to get your bearings.')
    }
})

EntityEvents.hurt(event => {
    if (!event.player) return
    if (event.player.getHeadArmorItem() === 'kubejs:final_helmet' &&
        event.player.getChestArmorItem() === 'kubejs:final_chestplate' &&
        event.player.getLegsArmorItem() === 'kubejs:final_leggings' &&
        event.player.getFeetArmorItem() === 'kubejs:final_boots'
    ) {
        event.cancel()
    }
})

const set = {
    "name": "kubejs:final",
    "effects": [
        {
            "effect": "saturation",
            "duration": 400,
            "amplifier": 255
        },
        {
            "effect": "haste",
            "duration": 400,
            "amplifier": 2
        },
        {
            "effect": "strength",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "speed",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "jump_boost",
            "duration": 400,
            "amplifier": 3
        },
        {
            "effect": "luck",
            "duration": 400,
            "amplifier": 5
        }
    ]
}

const sets = [set];

PlayerEvents.tick(check => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = check.player;
    if (check.player.level.time % 100 == 0) {
        for (let armorSet in sets) {
            if (headArmorItem.id === sets[armorSet].name + '_helmet' &&
                chestArmorItem.id === sets[armorSet].name + '_chestplate' &&
                legsArmorItem.id === sets[armorSet].name + '_leggings' &&
                feetArmorItem.id === sets[armorSet].name + '_boots'
            ) {
                for (let x in sets[armorSet].effects) {
                    check.player.potionEffects.add(
                        sets[armorSet].effects[x].effect,
                        sets[armorSet].effects[x].duration,
                        sets[armorSet].effects[x].amplifier
                    );
                }
            };
        }
    };
});
// let CLOCK = 0
// let sentience = [repairHint, worldMaintenance, ]
// ServerEvents.tick(event => {
//
// })

// EntityEvents.death('minecraft:wither', event => {
//     event.player.notify(Notification.make(toast => {
//         toast.text = [
//             Text.of("The Wither has been killed!").bold(),
//             Text.of('subtitle')
//         ]
//         toast.icon = 'minecraft:wither_skeleton_skull'
//         toast.outlineColor = '#006055'
//         toast.backgroundColor = '#1b3a1b'
//         toast.borderColor = '#267523'
//     }))
// })
//
// BlockEvents.rightClicked('minecraft:bedrock', event => {
//     event.entity.notify(Notification.make(n => {
//         n.text = [
//             'Why?',
//             'subtitle'
//         ]
//         n.icon = 'minecraft:bedrock'
//         n.outlineColor = '#006055'
//         n.backgroundColor = '#1b3a1b'
//         n.borderColor = '#267523'
//     }))
// })

// EntityEvents.death('minecraft:wither', event => event.player.notify({
//     itemIcon: 'minecraft:wither_skeleton_skull',
//     backgroundColor: 'darkPurple',
//     borderColor: '0x'
// }))

LootJS.modifiers((event) => {
    FOUNDATION_METALS.forEach(metal => {
        event.addBlockLootModifier(`minecraft:${metal}_ore`).randomChance(0.2).addLoot(`minecraft:raw_${metal}`)
        event.addBlockLootModifier(`minecraft:deepslate_${metal}_ore`).randomChance(0.3).addLoot(`minecraft:raw_${metal}`)
    })
    event.addBlockLootModifier('create:zinc_ore').randomChance(0.2).addLoot('create:raw_zinc')
    event.addBlockLootModifier('create:deepslate_zinc_ore').randomChance(0.3).addLoot('create:raw_zinc')
    event.addLootTypeModifier(LootType.CHEST).removeLoot('minecraft:bucket')
});

LevelEvents.afterExplosion(event => {
    const { x, y, z, level } = event
    level.getEntitiesWithin(AABB.of(x - 20, y - 20, z - 20, x + 20, y + 20, z + 20)).forEach(entity => {
        if (entity.isPlayer()) {
            let distance = entity.getDistance(x, y, z)
            distance = 20 - distance
            distance = distance / 20 * 2
            entity.sendData('screenshake', { i1: distance * 0.6, i2: distance, i3: distance * 0.2, duration: 15 })
        }
    })
})

let BLACKLIST = {
    ae2: 'Applied Energistics 2',
    create_jetpack: 'Create Jetpack',
    create_sa: 'Create Stuff and Additions',
    create_confectionery: 'Create Confectionery',
    create_things_and_misc: 'Create: Things and Misc',
    creategoggles: 'Create Goggles',
    createsifter: 'Create Sifting',
    extendedgears: 'Create: Extended Cogwheels',
    alloyed: 'Create: Alloyed',
    createendertransmission: 'Create: Ender Transmission',
    create_compressed: 'Create: Compressed',
    mekanism: 'Mekanism',
    immersiveengineering: 'Immersive Engineering',
    ftbultimine: 'FTB Ultimine',
    unusualend: 'Unusual End',
    hammerlib: 'HammerLib',
    solarflux: 'Solar Flux Reborn',
    twilightforest: 'Twilight Forest'
}

Object.keys(BLACKLIST).forEach(modid => {
    if (Platform.isLoaded(`${modid}`)) {
        ServerEvents.recipes(event => {
            event.remove({})
        })
        console.warn(`${BLACKLIST[modid]} has been detected, please remove it from the modpack.`)
        PlayerEvents.loggedIn(event => {
            event.server.tell(`${BLACKLIST[modid]} has been detected, please remove it from the modpack.`)
        })
    }
})