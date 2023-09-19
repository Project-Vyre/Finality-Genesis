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
    event.recipes.createMilling([
        'minecraft:sand',
        Item.of('minecraft:iron_nugget').withChance(0.25),
        Item.of('minecraft:gold_nugget').withChance(0.25)
    ], 'grimoireofgaia:shiny_pearl').id('finality:pearl_milling')
    event.shapeless('grimoireofgaia:headgear_arrow', [
        'minecraft:arrow'
    ]).id('finality:grimoireofgaia/headgear_arrow')
    event.shapeless('grimoireofgaia:doll_maid', [
        'grimoireofgaia:headgear_doll'
    ]).id('finality:headgear_doll_revert')
})