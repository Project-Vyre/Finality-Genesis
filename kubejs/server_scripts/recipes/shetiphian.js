ServerEvents.recipes(event => {
    event.remove({id: 'enderchests:ender_bag'})
    event.remove({id: 'endertanks:bucket'})
    event.remove({id: 'enderchests:ender_chest'})
    event.remove({id: 'enderchests:ender_pouch'})
    event.remove({id: 'endertanks:tank'})
    // ender bag
    event.shaped('enderchests:ender_bag', [
        'AWA',
        'OPO',
        'AEA'
    ], {
        A: 'extendedcrafting:advanced_component',
        W: '#minecraft:wool',
        O: 'create:powdered_obsidian',
        P: 'enderchests:ender_pouch',
        E: 'extendedcrafting:ender_catalyst'
    }).id('finality:shetiphian_ender_bag')
    // ender bucket
    event.shaped('endertanks:ender_bucket', [
        'AWA',
        'OBO',
        'AEA'
    ], {
        A: 'extendedcrafting:advanced_component',
        W: '#minecraft:wool',
        O: 'minecraft:obsidian',
        B: 'minecraft:bucket',
        E: 'extendedcrafting:ender_catalyst'
    }).id('finality:shetiphian_ender_bucket')
    // enderchests ender chest
    event.shaped('enderchests:ender_chest', [
        'AWA',
        'OCO',
        'AEA'
    ], {
        A: 'extendedcrafting:advanced_component',
        W: '#minecraft:wool',
        O: 'minecraft:obsidian',
        C: 'minecraft:ender_chest',
        E: 'extendedcrafting:ender_catalyst'
    }).id('finality:shetiphian_ender_chest')
    // ender pouch
    event.shaped('enderchests:ender_pouch', [
        'ALA',
        'LEL',
        'LLL'
    ], {
        A: 'minecraft:gold_nugget',
        L: 'minecraft:leather',
        E: 'minecraft:ender_eye'
    }).id('finality:shetiphian_ender_pouch')
    // ender tank
    event.shaped('endertanks:ender_tank', [
        'AWA',
        'OCO',
        'AEA'
    ], {
        A: 'extendedcrafting:advanced_component',
        W: '#minecraft:wool',
        O: 'minecraft:obsidian',
        C: 'create:fluid_tank',
        E: 'extendedcrafting:ender_catalyst'
    }).id('finality:shetiphian_ender_tank')
})