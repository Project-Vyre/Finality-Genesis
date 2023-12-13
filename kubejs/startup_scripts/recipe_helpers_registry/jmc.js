// requires: jmc
// requires: kubejs_create
// ignored: true

/**
 * @file Item and fluid generation for Just More Cakes! recipe usage.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

// Not sure if I'm going to need to use this.

let jmc_flavors = [
    'cupcake',
    // chocolate "icing" already exists as create:chocolate
    'carrot',
    'pumpkin',
    'watermelon',
    'apple',
    'poison',
    'golden_apple',
    'red_mushroom',
    'firey',
    'redstone',
    'ender',
    '', // cheesecake is separate note to self
]

StartupEvents.registry('item', event => {
    jmc_flavors.forEach(type => {
        event.create(`kubejs:incomplete_${type}_cake`, 'create:sequenced_assembly')
        .texture(`kubejs:item/incomplete_cakes/${type}`)
    })
    event.create('kubejs:incomplete_triple_tier_cake')
})

StartupEvents.registry('fluid', event => {
    event.create('kubejs:cupcake_icing')
    event.create('kubejs:carrot_icing')
    event.create('kubejs:pumpkin_icing')
    event.create('kubejs:watermelon_icing')
    event.create('kubejs:cheese_icing')
})