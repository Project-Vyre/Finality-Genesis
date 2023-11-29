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

/**
 * 
 * @param {*} event 
 * @param {string} nugget 
 * @param {string} metal 
 */
function NUGGET_SOLIDIFY(event, nugget, metal) {
    event.recipes.create.compacting(nugget, [
        Fluid.of(`kubejs:molten_${metal}`, 10)
    ]).id(`finality:molten_${metal}_to_${metal}_nugget`)
}

/**
 * 
 * @param {*} event 
 * @param {string} moltenMetal 
 * @param {string} coin 
 */
function COIN_MELT_HEATED(event, moltenMetal, coinType) {
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
function COINSTACK_MELTING(event, moltenMetal, coinType) {
    event.recipes.create.mixing(Fluid.of(`kubejs:molten_${moltenMetal}`, 40), [
        `createdeco:${coinType}_coinstack`
    ]).heated().id(`finality:createdeco/${coinType}_coinstack_melting`)
}

ServerEvents.recipes(event => {
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
    NUGGET_SOLIDIFY(event, 'minecraft:iron_nugget', 'iron')
    NUGGET_SOLIDIFY(event, 'minecraft:gold_nugget', 'gold')
    NUGGET_SOLIDIFY(event, 'create:copper_nugget', 'copper')
    NUGGET_SOLIDIFY(event, 'create:zinc_nugget', 'zinc')
    NUGGET_SOLIDIFY(event, 'create:brass_nugget', 'brass')
    NUGGET_SOLIDIFY(event, 'createdeco:netherite_nugget', 'netherite')
    COIN_MELT_HEATED(event, 'iron', 'iron')
    COIN_MELT_HEATED(event, 'iron', 'cast_iron')
    COIN_MELT_HEATED(event, 'gold', 'gold')
    COIN_MELT_HEATED(event, 'copper', 'copper')
    COIN_MELT_HEATED(event, 'zinc', 'zinc')
    COIN_MELT_HEATED(event, 'brass', 'brass')
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 10), [
        'createdeco:netherite_coin'
    ]).superheated().id('finality:createdeco/netherite_coin_melting')
    COINSTACK_MELTING(event, 'iron', 'iron')
    COINSTACK_MELTING(event, 'iron', 'cast_iron')
    COINSTACK_MELTING(event, 'gold', 'gold')
    COINSTACK_MELTING(event, 'copper', 'copper')
    COINSTACK_MELTING(event, 'zinc', 'zinc')
    COINSTACK_MELTING(event, 'brass', 'brass')
    event.recipes.create.mixing(Fluid.of('kubejs:molten_netherite', 40), [
        'createdeco:netherite_coinstack'
    ]).superheated().id('finality:createdeco/netherite_coinstack_melting')
})