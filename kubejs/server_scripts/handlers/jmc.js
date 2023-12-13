// requires: jmc
// requires: createaddition
// requires: kubejs_create
// ignored: true

/**
 * @file Server handler for Just More Cakes!
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// Not sure if I'm even going to use this...

ServerEvents.recipes(event => {
    /**
     * 
     * @param {*} output 
     * @param {*} inputIcing 
     * @param {*} recipeId 
     */
    let icing = (output, inputIcing, recipeId) => {
        event.recipes.create.filling(output, [
            'createaddition:cake_base_baked',
            Fluid.of(inputIcing, 500)
        ]).id(`finality:jmc/filling/${recipeId}_cake`)
    }
    /* Not sure if I should remove the jmc chocolate cake since it's just going to be a duplicate
    of Create Crafts & Additions's chocolate cake
    */
    icing('jmc:carrot_cake', 'kubejs:carrot_icing', 'carrot')
    icing('jmc:pumpkin_cake', 'kubejs:pumpkin_icing', 'pumpkin')
    icing('jmc:melon_cake', 'kubejs:melon_icing', 'melon')
    icing('jmc:apple_cake', 'kubejs:apple_icing', 'apple')
    icing('jmc:poison_cake', 'kubejs:poison_icing', 'poison')
    icing('jmc:cookie_cake', 'kubejs:cookie_icing', 'cookie')
    icing('jmc:tnt_cake', 'kubejs:tnt_icing', 'tnt')
    icing('jmc:golden_apple_cake', 'kubejs:golden_apple_icing', 'golden_apple')
    icing('jmc:red_mushroom_cake', 'kubejs:red_mushroom_icing', 'red_mushroom')
    icing('jmc:firey_cake', 'kubejs:firey_icing', 'firey')
    icing('jmc:redstone_cake', 'kubejs:redstone_icing', 'redstone')
    icing('jmc:ender_cake', 'kubejs:ender_icing', 'ender')
    icing('jmc:slime_cake', 'kubejs:slime_icing', 'slime')
    icing('jmc:beetroot_cake', 'kubejs:beetroot_icing', 'beetroot')
    icing('jmc:lava_cake', 'kubejs:lava_icing', 'lava')
    icing('jmc:creeper_cake', 'kubejs:creeper_icing', 'creeper')
    icing('jmc:seed_cake', 'kubejs:seed_icing', 'seed')
    icing('jmc:brown_mushroom_cake', 'kubejs:brown_mushroom_icing', 'brown_mushroom')
    icing('jmc:ice_cake', 'kubejs:ice_icing', 'ice')
    icing('jmc:chorus_cake', 'kubejs:chorus_icing', 'chorus')
    icing('jmc:sweet_berry_cake', 'kubejs:sweet_berry_icing', 'sweet_berry')
    icing('jmc:honey_cake', 'create:honey', 'honey')
    icing('jmc:glowstone_cake', 'kubejs:glowstone_icing', 'glowstone')
    icing('jmc:crimson_fungus_cake', 'kubejs:crimson_fungus_icing', 'crimson_fungus')
    icing('jmc:warped_fungus_cake', 'kubejs:warped_fungus_icing', 'warped_fungus')
    // red velvet cake needs a new base.
    icing('jmc:')
    //icing('jmc:cheesecake', 'kubejs:cheese_icing', 'cheese')
    event.recipes.create.deploying('jmc:cheesecake', [
        'createaddition:cake_base_baked',
        'jmc:cream_cheese'
    ]).id('finality:jmc/deploying/cheesecake')
})