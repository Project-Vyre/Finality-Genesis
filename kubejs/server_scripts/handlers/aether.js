// requires: aether
// requires: kubejs_create
// requires: lootjs

/**
 * Authors
 * 
 * @CelestialAbyss
 */

ServerEvents.recipes(event => {
    event.remove({ id: 'aether:aether_saddle' })
    event.custom({
        "type": "aether:enchanting",
        "category": "enchanting_blocks",
        "cookingtime": 500,
        "experience": 1.0,
        "ingredient": {
            "item": "aether:gravitite_ore"
        },
        "result": "aether:enchanted_gravitite"
    }).id('aether:enchanted_gravitite_enchanting')
    event.recipes.createCrushing([
        'aether:ambrosium_shard',
        Item.of('aether:ambrosium_shard').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('aether:holystone').withChance(0.25)
    ], 'aether:ambrosium_ore').processingTime(250).id('finality:create/ambrosium_ore_crushing')
    event.recipes.createCrushing([
        'aether:zanite_gemstone',
        Item.of('aether:zanite_gemstone').withChance(0.75),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('aether:holystone').withChance(0.25)
    ], 'aether:ambrosium_ore').processingTime(250).id('finality:create/zanite_ore_crushing')
})