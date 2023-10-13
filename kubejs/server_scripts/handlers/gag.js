// requires: gag
// requires: kubejs_create

/**
 * Authors
 * 
 * @CelestialAbyss
 */

ServerEvents.recipes(event => {
    event.recipes.createMechanicalCrafting('gag:time_sand_pouch', [
        ' GNG ',
        'LPPPL',
        'LPCPL',
        'LPPPL',
        ' LLL '
    ], {
        G: 'minecraft:gold_ingot',
        N: 'minecraft:conduit',
        C: 'minecraft:clock',
        P: 'create:pulse_repeater',
        L: 'minecraft:leather'
    }).id('gag:time_sand_pouch')
    event.shaped('kubejs:removed_item', [
        ' D ',
        'DAD',
        ' D '
    ], {
        D: 'minecraft:polished_deepslate',
        A: 'minecraft:amethyst_block'
    }).id('gag:hearthstone')
})