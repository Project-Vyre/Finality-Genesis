// priority: 0

ServerEvents.recipes(event => {
    event.shapeless('2x minecraft:diorite', [
        '2x minecraft:cobblestone',
        '2x #forge:gems/quartz'
    ]).id('finality:crafting/diorite')
    event.shapeless(
        '4x minecraft:quartz',
        '#forge:storage_blocks/quartz'
    ).id('finality:quartz_block_revert')
    event.shapeless(
        '4x minecraft:pointed_dripstone',
        'minecraft:dripstone_block'
    ).id('finality:pointed_dripstone_from_block')
})