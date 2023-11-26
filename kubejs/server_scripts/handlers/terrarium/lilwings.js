// requires: lilwings
// requires: create

/**
 * @file Server handler for Lil' Wings.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.shapeless('minecraft:golden_carrot', [
        '#kubejs:grayling_wings',
        'minecraft:brown_mushroom',
        'minecraft:sugar'
    ]).id('finality:lilwings/grayling_wing_fermentation')
    event.shapeless('minecraft:ghast_tear', [
        'lilwings:cloudy_puff_wings'
    ]).id('finality:lilwings/cloudypuff_wing_ghast_tear_conversion')
    event.shapeless('minecraft:ice', [
        'lilwings:white_fox_wings'
    ]).id('finality:lilwings/white_fox_wings_ice_conversion')
    event.shapeless('3x minecraft:string', [
        'lilwings:swallow_tail_wings'
    ]).id('finality:lilwings/swallow_tail_wings')
    event.shapeless('minecraft:apple', [
        'lilwings:red_applefly_wings'
    ]).id('finality:lilwings/red_applefly_wing_conversion')
    event.shapeless('minecraft:golden_apple', [
        'lilwings:gold_applefly_wings'
    ]).id('finality:lilwings/gold_applefly')
})

ServerEvents.tags('item', event => {
    event.add('kubejs:grayling_wings', [
        'lilwings:grayling_wings',
        'lilwings:grayling_flowering_wings',
        'lilwings:grayling_blooming_wings'
    ])
})