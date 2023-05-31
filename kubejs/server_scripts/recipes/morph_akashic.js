ServerEvents.recipes(event => {
    event.remove({id:'morphtool:tool'})
    event.remove({id:'akashictome:tome'})
    event.custom({
        type: 'extendedcrafting:shaped_table',
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
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 1000,
        powerRate: 100,
        input: {
            item: 'minecraft:book'
        },
        ingredients: [
            Ingredient.of('#forge:bookshelves').toJson(),
            Ingredient.of('#forge:bookshelves').toJson(),
            Ingredient.of('#forge:bookshelves').toJson(),
            Ingredient.of('#forge:bookshelves').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
            Ingredient.of('extendedcrafting:luminessence').toJson(),
        ],
        result: {
            item: 'akashictome:tome'
        }
    }).id('finality:akashic_tome')
})