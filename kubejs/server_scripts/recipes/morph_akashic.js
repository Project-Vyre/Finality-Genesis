ServerEvents.recipes(event => {
    event.remove({id:'morphtool:tool'})
    event.custom({
        type: 'extendedcrafting:shaped_table',
        tier: 2,
        pattern: [
            '   A ',
            '  BRE',
            '  IU ',
            ' I   ',
            'I    '
        ],
        key: {
            A: 'extendedcrafting:advanced_catalyst',
            B: 'extendedcrafting:basic_catalyst',
            E: 'extendedcrafting:elite_catalyst',
            U: 'extendedcrafting:ultimate_catalyst',
            R: 'extendedcrafting:redstone_catalyst',
            I: 'extendedcrafting:black_iron_ingot'
        },
        result: 'morphtool:tool'
    }).id('finality:morph_tool')
})