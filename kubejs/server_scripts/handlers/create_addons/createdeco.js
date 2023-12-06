// requires: createdeco
// requires: kubejs_create

/**
 * @file Server handler for Create Deco.
 * @author CelestialAbyss <https://github.com/CelestialAbyss>
 */

/*
810 mB = 1 block
90 mB = 1 ingot
10 mB = 1 nugget
*/

ServerEvents.recipes(event => {
    /**
     * 
     * @param {*} event 
     * @param {string} moltenMetal 
     * @param {string} coin 
     */
    let COIN_MELT_HEATED = (moltenMetal, coinType) => {
        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${moltenMetal}`, 10), [
            `createdeco:${coinType}_coin`
        ]).heated().id(`finality:createdeco/${coinType}_coin_melting`)
    }
    /**
     * 
     * @param {*} event 
     * @param {string} moltenMetal 
     * @param {string} coinType 
     */
    let COINSTACK_MELTING = (moltenMetal, coinType) => {
        event.recipes.create.mixing(Fluid.of(`kubejs:molten_${moltenMetal}`, 40), [
            `createdeco:${coinType}_coinstack`
        ]).heated().id(`finality:createdeco/${coinType}_coinstack_melting`)
    }
    event.remove([
        {
            type: 'create:pressing',
            output: 'createdeco:zinc_sheet'
        },
        {
            type: 'create:pressing',
            output: 'createdeco:netherite_sheet'
        }
    ])
    COIN_MELT_HEATED('iron', 'iron')
    COIN_MELT_HEATED('iron', 'cast_iron')
    COIN_MELT_HEATED('gold', 'gold')
    COIN_MELT_HEATED('copper', 'copper')
    COIN_MELT_HEATED('zinc', 'zinc')
    COIN_MELT_HEATED('brass', 'brass')
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 10), [
        'createdeco:netherite_coin'
    ]).superheated().id('finality:createdeco/netherite_coin_melting')
    COINSTACK_MELTING('iron', 'iron')
    COINSTACK_MELTING('iron', 'cast_iron')
    COINSTACK_MELTING('gold', 'gold')
    COINSTACK_MELTING('copper', 'copper')
    COINSTACK_MELTING('zinc', 'zinc')
    COINSTACK_MELTING('brass', 'brass')
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 40), [
        'createdeco:netherite_coinstack'
    ]).superheated().id('finality:createdeco/netherite_coinstack_melting')
})