// requires: grimoireofgaia
// requires: kubejs_create

console.log('Loading Grimoire of Gaia scripts...')

ServerEvents.recipes(event => {
    event.shapeless('9x grimoireofgaia:diamond_shard', [
        'minecraft:diamond'
    ]).id('finality:grimoireofgaia/diamond_decompression')
    event.shapeless('9x grimoireofgaia:emerald_shard', [
        'minecraft:emerald'
    ]).id('finality:grimoireofgaia/emerald_decompression')
    event.shapeless('4x grimoireofgaia:shiny_pearl', [
        'grimoireofgaia:pearl_block'
    ]).id('finality:pearl_block_decompression')
    event.recipes.createCrushing([
        Item.of('minecraft:iron_nugget').withChance(0.25),
        Item.of('minecraft:gold_nugget').withChance(0.25),
        Item.of('grimoireofgaia:diamond_shard').withChance(0.25),
        Item.of('grimoireofgaia:emerald_shard').withChance(0.25),
        Item.of('create:experience_nugget').withChance(0.25)
    ], 'grimoireofgaia:shiny_pearl').processingTime(25).id('finality:pearl_crushing')
    event.recipes.createCrushing([
        'minecraft:sand',
        Item.of('minecraft:iron_block').withChance(0.25),
        Item.of('minecraft:gold_block').withChance(0.25),
        Item.of('minecraft:diamond_block').withChance(0.25),
        Item.of('minecraft:emerald_block').withChance(0.25),
        Item.of('create:experience_block').withChance(0.25)
    ], 'grimoireofgaia:pearl_block').processingTime(50).id('finality:pearl_block_crushing')
    event.shapeless('minecraft:totem_of_undying', [
        '4x grimoireofgaia:totem_of_undying_fragment',
    ]).id('finality:grimoireofgaia/undying_totem')
    event.shapeless('grimoireofgaia:headgear_arrow', [
        'minecraft:arrow'
    ]).id('finality:grimoireofgaia/headgear_arrow')
    event.shapeless('grimoireofgaia:doll_maid', [
        'grimoireofgaia:headgear_doll'
    ]).id('finality:headgear_doll_revert')
})