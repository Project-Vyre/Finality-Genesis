// requires: enigmaticlegacy
// requires: extendedcrafting
// requires: kubejs_create

/**
 * Authors
 * 
 * @CelestialAbyss
 * @Reveter for providing the basis of the repairable items script
 */

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
        input: { item: 'enigmaticlegacy:cosmic_heart' },
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
        result: { item: 'enigmaticlegacy:enigmatic_item' }
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
    if (Platform.isLoaded('aether')) {
        event.custom({
            'type': 'aether:repairing',
            'category': 'enchanting_repair',
            'ingredient': Ingredient.of('enigmaticlegacy:forbidden_axe').toJson(),
            'repairTime': 250
        }).id('finality:enigmaticlegacy/aether/forbidden_axe_repairing')
    }
    event.recipes.minecraft.crafting_shapeless(Ingredient.of('enigmaticlegacy:forbidden_axe'), [
        Ingredient.of('enigmaticlegacy:forbidden_axe'),
        'minecraft:netherite_ingot'
    ]).modifyResult((grid, result) => {
        let repairable = grid.find(Ingredient.of('enigmaticlegacy:forbidden_axe'))
        if (repairable.damaged) {
            repairable.damageValue = 0
            return repairable
        }
    }).id('finality:enigmaticlegacy/forbidden_axe_repair');
})