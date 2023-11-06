// requires: aether
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for the Aether mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/**
 * 
 * @param {*} event 
 * @param {Item} output 
 * @param {Item} input 
 * @param {int} cookingtime 
 * @param {int} experience 
 * @param {string} id 
 */

function aetherEnchantingBlocks(event, output, input, cookingtime, experience, recipeid) {
    event.custom({
        'type': 'aether:enchanting',
        'category': 'enchanting_blocks',
        'cookingtime': cookingtime,
        'experience': experience,
        'ingredient': input,
        'result': output
    }).id(recipeid)
}

/**
 * 
 * @param {*} event 
 * @param {Item} input 
 * @param {int} repairtime 
 * @param {string} id 
 */

function aetherRepairing(event, input, repairtime, id) {
    event.custom({
        'type': 'aether:repairing',
        'category': 'enchanting_repair',
        'ingredient': input,
        'repairTime': repairtime
    }).id(`finality:aether/${id}_repairing`)
}

ServerEvents.recipes(event => {
    event.remove({ id: 'aether:aether_saddle' })
    aetherEnchantingBlocks(event,
        'aether:enchanted_gravitite',
        Ingredient.of('aether:gravitite_ore').toJson(),
        500,
        1.0,
        'aether:enchanted_gravitite_enchanting'
    )
    aetherEnchantingBlocks(event,
        'aether:holystone',
        Ingredient.of('#forge:stone').toJson(),
        200,
        0,
        'finality:aether/stone_enchanting'
    )
    aetherEnchantingBlocks(event,
        'aether:icestone',
        Ingredient.of('minecraft:blue_ice').toJson(),
        200,
        0,
        'finality:aether/icestone_conversion'
    )
    aetherEnchantingBlocks(event,
        'aether:aether_dirt',
        Ingredient.of('minecraft:dirt').toJson(),
        200,
        0,
        'finality:aether/aether_dirt_conversion'
    )
    event.recipes.create.item_application('aether:quicksoil', [
        'minecraft:dirt',
        'aether:ambrosium_shard'
    ]).id('finality:aether/quicksoil_conversion')
    event.shapeless('aether:blue_gummy_swet', [
        '2x aether:swet_ball',
        'minecraft:sugar'
    ]).id('finality:aether/blue_gummy_swet')
    event.custom({
        'type': 'aether:enchanting',
        'category': 'enchanting_food',
        'cookingtime': 250,
        'experience': 0.35,
        'ingredient': { 'item': 'aether:blue_gummy_swet' },
        'result': 'aether:golden_gummy_swet'
    }).id('finality:aether/golden_gummy_swet')
    event.recipes.create.crushing([
        '2x aether:ambrosium_shard',
        Item.of('aether:ambrosium_shard').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('aether:holystone').withChance(0.25)
    ], 'aether:ambrosium_ore').processingTime(250).id('finality:create/ambrosium_ore_crushing')
    event.recipes.create.crushing([
        '2x aether:zanite_gemstone',
        Item.of('aether:zanite_gemstone').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('aether:holystone').withChance(0.25)
    ], 'aether:zanite_ore').processingTime(250).id('finality:create/zanite_ore_crushing')
    STANDARD_ARMOR.forEach(piece => {
        aetherRepairing(event,
            Item.of(`aether:neptune_${piece}`).toJson(),
            600,
            `neptune_${piece}`
        )
        aetherRepairing(event,
            Item.of(`aether:phoenix_${piece}`).toJson(),
            600,
            `phoenix_${piece}`
        )
        aetherRepairing(event,
            Item.of(`aether:obsidian_${piece}`).toJson(),
            600,
            `obsidian_${piece}`
        )
    })
    aetherRepairing(event,
        Item.of('aether:obsidian_gloves').toJson(),
        600,
        'obsidian_gloves'
    )
})

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        'aether:altar',
        'aether:freezer',
        'aether:incubator'
    ])
    if (Platform.isLoaded('aether') && Platform.isLoaded('blockrunner')) {
        event.add('blockrunner:very_quick_blocks', [
            'aether:quicksoil',
            'aether:quicksoil_glass'
        ])
    }
})

LootJS.modifiers(event => {
    event.addBlockLootModifier('aether:ambrosium_ore')
        .randomChance(0.2).addLoot('aether:ambrosium_shard')
    event.addBlockLootModifier('aether:zanite_ore')
        .randomChance(0.12).addLoot('aether:zanite_gemstone')
    event.addEntityLootModifier('aether:blue_swet')
        .randomChance(0.1).addLoot('aether:blue_gummy_swet')
    event.addEntityLootModifier('aether:golden_swet')
        .randomChance(0.1).addLoot('aether:golden_gummy_swet')
})