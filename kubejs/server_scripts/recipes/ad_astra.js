// requires: ad_astra 
// and kjs 119 and above

ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting('ad_astra:nasa_workbench', [
        'QLTLQ',
        'SCACS',
        'SAEAS',
        'SCNCS',
        'BIIIB'
    ], {
        Q: 'create:rose_quartz_lamp',
        L: 'create:analog_lever',
        T: 'create:powered_toggle_latch',
        S: 'ad_astra:steel_plate',
        C: 'extendedcrafting:redstone_component',
        A: 'extendedcrafting:redstone_catalyst',
        E: 'extendedcrafting:ultimate_auto_table',
        N: 'extendedcrafting:enhanced_redstone_catalyst',
        B: 'minecraft:redstone_block',
        I: 'ad_astra:steel_block'
    }).id('ad_astra:recipes/nasa_workbench')
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