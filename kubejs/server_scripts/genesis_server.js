// priority: 0
// requires: create

console.info('Implementing Finality recipes and compats...')

let STONEPLATES = ['stone', 'polished_blackstone']
let WOODPLATES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']

ServerEvents.recipes(event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), ['#forge:rods/wooden', '#forge:rods/wooden']).id('finality:documentation_book')
    event.remove({ id: 'minecraft:redstone_from_smelting_redstone_ore' }) // cursed recipe
    event.remove({ id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore' }) // cursed recipe
    event.remove({ id: 'minecraft:redstone_from_blasting_redstone_ore' }) // cursed recipe
    event.remove({ id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore' }) // cursed recipe
    event.remove({ id: 'createaddition:rolling/gold_ingot' })
    event.remove({ id: 'createaddition:rolling/brass_ingot' })
    event.remove({ id: 'createaddition:rolling/straw' })
    event.remove({ id: 'createaddition:mixing/bioethanol' })
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
    event.recipes.createMixing('kubejs:omnipotent_alloy', [
        'extendedcrafting:the_ultimate_catalyst',
        'extendedcrafting:crystaltine_catalyst',
        'minecraft:netherite_ingot',
        'create:rose_quartz',
        'create:brass_ingot',
        'create:andesite_alloy',
        'minecraft:diamond',
        'minecraft:amethyst_shard',
        Fluid.of('kubejs:condensed_universal_entropy', 500)
    ]).superheated().id('finality:mixing/omnipotent_alloy')
    event.shaped('kubejs:final_helmet', [
        'EEE',
        'E E'
    ], {
        E: 'kubejs:omnipotent_alloy',
    }).id('finality:crafting/final_helmet')
    event.shaped('kubejs:final_chestplate', [
        'E E',
        'EEE',
        'EEE'
    ], {
        E: 'kubejs:omnipotent_alloy'
    }).id('finality:crafting/final_chestplate')
    event.shaped('kubejs:final_leggings', [
        'EEE',
        'E E',
        'E E'
    ], {
        E: 'kubejs:omnipotent_alloy'
    }).id('finality:crafting/final_leggings')
    event.shaped('kubejs:final_boots', [
        'E E',
        'E E'
    ], {
        E: 'kubejs:omnipotent_alloy'
    }).id('finality:crafting/final_boots')
    event.shaped('kubejs:final_sword', [
        'E',
        'E',
        'S'
    ], {
        E: 'kubejs:omnipotent_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_sword')
    event.shaped('kubejs:final_pickaxe', [
        'EEE',
        ' S ',
        ' S '
    ], {
        E: 'kubejs:omnipotent_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_pickaxe')
    event.shaped('kubejs:final_axe', [
        'EE',
        'ES',
        ' S'
    ], {
        E: 'kubejs:omnipotent_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_axe')
    event.shaped('kubejs:final_shovel', [
        'E',
        'S',
        'S'
    ], {
        E: 'kubejs:omnipotent_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_shovel')
    event.shaped('kubejs:final_hoe', [
        'EE',
        ' S',
        ' S'
    ], {
        E: 'kubejs:omnipotent_alloy',
        S: 'extendedcrafting:black_iron_ingot'
    }).id('finality:crafting/final_hoe')
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
        Item.of('minecraft:gravel', 18),
        Fluid.of('minecraft:lava', 250)
    ]).superheated().id('finality:renew_tuff')
    event.recipes.createCompacting([
        'minecraft:tuff'
    ], [
        Item.of('minecraft:deepslate', 9),
        Fluid.of('minecraft:lava', 250)
    ]).heated().id('finality:renew_deepslate_tuff')
    // crushing
    event.remove({ id: 'create:crushing/gravel' })
    event.remove({ id: 'create:crushing/netherrack' })
    event.recipes.createCrushing([
        'minecraft:dirt',
        Item.of('minecraft:flint').withChance(0.10)
    ], 'minecraft:gravel').processingTime(250).id('finality:gravel_crushing')
    event.recipes.createCrushing([
        'minecraft:sand',
        Item.of('minecraft:clay_ball').withChance(0.05)
    ], 'minecraft:dirt').processingTime(250).id('finality:dirt_crushing')
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
        Item.of('minecraft:glowstone_dust').withChance(0.25),
        Item.of('minecraft:netherite_scrap').withChance(0.002)
    ], 'minecraft:netherrack').processingTime(250).id('finality:netherrack_crushing')
    // filling
    event.recipes.createFilling('minecraft:netherrack', [
        'minecraft:cobblestone',
        Fluid.of('create:potion', 250, '{Bottle: "REGULAR", Potion: "minecraft:strong_healing"}'),
    ]).id('finality:living_flesh_stone')
    event.recipes.createFilling('minecraft:netherite_ingot', [
        'minecraft:netherite_scrap',
        Fluid.of('kubejs:molten_gold', 250)
    ]).id('minecraft:netherite_ingot')
    // haunting
    event.recipes.createHaunting(['minecraft:deepslate'], 'minecraft:andesite').id('finality:andesite_haunting')
    event.recipes.createHaunting(['minecraft:crying_obsidian'], 'minecraft:obsidian').id('finality:obsidian_haunting')
    event.recipes.createHaunting(['minecraft:name_tag'], 'minecraft:writable_book').id('finality:soul_nametag')
    // splashing
    event.recipes.createSplashing(['minecraft:piston'], 'minecraft:sticky_piston').id('finality:sticky_piston_splashing')
    event.recipes.createSplashing(['create:mechanical_piston'], 'create:sticky_mechanical_piston').id('finality:sticky_mechanical_piston_splashing')
    // blasting
    event.blasting('create:zinc_block', 'create:raw_zinc_block').id('finality:zinc_block_blasting_compat')
    // mixing 
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
})

ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    // event.get('forge:cobblestone').add('minecraft:diamond_ore')

    // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
    // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
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
            "duration": 999,
            "amplifier": 255
        },
        {
            "effect": "haste",
            "duration": 999,
            "amplifier": 2
        },
        {
            "effect": "strength",
            "duration": 999,
            "amplifier": 255
        },
        {
            "effect": "speed",
            "duration": 999,
            "amplifier": 255
        },
        {
            "effect": "jump_boost",
            "duration": 999,
            "amplifier": 3
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

EntityEvents.death('minecraft:wither', event => {
    event.player.notify(Notification.make(toast => {
        toast.text = [
            Text.of("The Wither has been killed!").bold(),
            Text.of('subtitle')
        ]
        toast.icon = 'minecraft:wither_skeleton_skull'
        toast.outlineColor = '#006055'
        toast.backgroundColor = '#1b3a1b'
        toast.borderColor = '#267523'
    }))
})

BlockEvents.rightClicked('minecraft:bedrock', event => {
    event.entity.notify(Notification.make(n => {
        n.text = [
            'Why?',
            'subtitle'
        ]
        n.icon = 'minecraft:bedrock'
        n.outlineColor = '#006055'
        n.backgroundColor = '#1b3a1b'
        n.borderColor = '#267523'
    }))
})

// EntityEvents.death('minecraft:wither', event => event.player.notify({
//     itemIcon: 'minecraft:wither_skeleton_skull',
//     backgroundColor: 'darkPurple',
//     borderColor: '0x'
// }))