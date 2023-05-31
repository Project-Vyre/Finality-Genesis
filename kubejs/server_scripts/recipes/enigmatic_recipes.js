ServerEvents.recipes(event => {
    event.custom({
        type: 'extendedcrafting:combination',
        powerCost: 5000000,
        input: {
            item:'enigmaticlegacy:cosmic_heart'
        },
        ingredients: [
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson(),
            Ingredient.of('extendedcrafting:the_ultimate_block').toJson()
            ],
            result: {
                item: 'enigmaticlegacy:enigmatic_item'
            }
    }).id('finality:heart_of_creation')
    event.shaped(Item.of('enigmaticlegacy:earth_heart'), [
        'PSP',
        'SDS',
        'PSP'
    ], {
        S: 'mysticalagriculture:earth_essence',
        P: 'mysticalagriculture:prosperity_shard',
        D: 'quark:diamond_heart'
    }).id('finality:earth_heart')
})