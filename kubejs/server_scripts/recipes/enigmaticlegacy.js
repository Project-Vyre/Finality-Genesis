// requires: enigmaticlegacy
// requires: extendedcrafting

ServerEvents.recipes(event => {
    event.recipes.create.haunting([
        'enigmaticlegacy:etherium_scraps',
        Item.of('create:experience_nugget').withChance(0.25)
    ], 'minecraft:netherite_scrap').id('finality:etherium_scraps')
    event.recipes.create.crushing([
        Item.of('enigmaticlegacy:etherium_ore').withChance(0.50),
        Item.of('create:experience_nugget').withChance(0.25)
    ], 'minecraft:end_stone').id('finality:etherium_ore_from_end_stone')
    event.recipes.create.mixing('enigmaticlegacy:etherium_ingot', [
        '4x enigmaticlegacy:etherium_scraps',
        '2x create:powdered_obsidian'
    ]).superheated().id('finality:etherium_ingot_creation')
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