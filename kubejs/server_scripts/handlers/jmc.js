// requires: jmc
// requires: createaddition
// requires: kubejs_create
// ignored: true

/**
 * @file Server handler for Just More Cakes!
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

ServerEvents.recipes(event => {
    let icing = (output, inputIcing) => {
        event.recipes.create.filling(output, [
            'createaddition:cake_base_baked',
            Fluid.of(`kubejs:${inputIcing}_icing`, 500)
        ]).id(`finality:jmc/filling/${inputIcing}_cake`)
    }
})