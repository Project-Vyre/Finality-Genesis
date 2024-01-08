// priority: 0

ServerEvents.recipes(event => {
    event.shapeless('2x minecraft:diorite', [
        '2x minecraft:cobblestone',
        '2x #forge:gems/quartz'
    ]).id('finality:crafting/diorite')
})