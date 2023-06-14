// requires ad astra and kjs 119 and above
ServerEvents.recipes(e => {
    e.remove({id: 'ad_astra:recipes/nasa_workbench' })
    e.recipes.createMechanicalCrafting('ad_astra:nasa_workbench', [
        'QATAQ',
        'POYOP',
        'PYUYP',
        'POEOP',
        'RSSSR'
    ], {
        Q: 'create:rose_quartz_lamp',
        A: 'create:analog_lever',
        T: 'create:powered_toggle_latch',
        P: '#forge:plates/steel',
        O: 'extendedcrafting:redstone_component',
        Y: 'extendedcrafting:redstone_catalyst',
        U: 'extendedcrafting:ultimate_auto_table',
        E: 'extendedcrafting:enhanced_redstone_catalyst',
        R: 'minecraft:redstone_block',
        S: '#forge:storage_blocks/steel'
    }).id('finality:ad_astra/mechanical/nasa_workbench')
})

/*
ServerEvents.recipes(e => {
    e.custom({
        type: 'create:mechanical_crafting',
        acceptMirrored: false,
        key: {
            Q: { item: 'create:rose_quartz_lamp' },
            A: { item: 'create:analog_lever' },
            T: { item: 'create:powered_toggle_latch' },
            P: { tag: 'forge:plates/steel' },
            O: { item: 'extendedcrafting:redstone_component' },
            Y: { item: 'extendedcrafting:redstone_catalyst' },
            U: { item: 'extendedcrafting:ultimate_auto_table' },
            E: { item: 'extendedcrafting:enhanced_redstone_catalyst' },
            R: { item: 'minecraft:redstone_block' },
            S: { tag: 'forge:storage_blocks/steel' }
        },
        pattern: [
            'QATAQ',
            'POYOP',
            'PYUYP',
            'POEOP',
            'RSSSR'
        ],
        result: {
            count: 1,
            item: 'ad_astra:nasa_workbench'
        }
    }).id('finality:ad_astra/mechanicaljson/nasa_workbench')
})
*/