// requires: craftingautomat

ServerEvents.recipes(event => {
    event.remove({ id: 'craftingautomat:autocrafter' });
    event.shaped('craftingautomat:autocrafter', [
        'III',
        'ICI',
        'RDR'
    ], {
        I: 'minecraft:iron_ingot',
        D: 'minecraft:dispenser',
        C: 'minecraft:crafting_table',
        R: 'minecraft:redstone'
    }).id('minecraft:autocrafter');
})