// requires: culturaldelights

// test 1: Crabber's Delight and Nether's Delight don't cause the issue...
// test 2: Cultural Delights returns the error.
console.log("Please ignore com.google.gson.JsonParseException: java.io.EOFException as it is being caused by Cultural Delights.")
console.log("This was determined after doing a binary search to narrow down the cause.")

ServerEvents.recipes(event => {
    event.remove([
        { id: 'minecraft:beetroot_soup' },
        { id: 'minecraft:mushroom_stew' },
        { id: 'minecraft:rabbit_stew_from_brown_mushroom' },
        { id: 'minecraft:rabbit_stew_from_red_mushroom' }
    ])
    event.shapeless('minecraft:beetroot_soup', [
        '6x minecraft:beetroot',
        'minecraft:bowl'
    ]).id('minecraft:beetroot_soup')
    event.shapeless('minecraft:mushroom_stew', [
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:bowl'
    ]).id('minecraft:mushroom_stew')
    event.shapeless('minecraft:rabbit_stew', [
        'minecraft:baked_potato',
        ['minecraft:brown_mushroom', 'minecraft:red_mushroom'],
        'minecraft:rabbit',
        'minecraft:bowl',
        'minecraft:carrot',
    ]).id('minecraft:rabbit_stew')
})

/**
 * The saplings were not tagged properly to the point that they would not work with
 * Create's Tree Fertilizer item.
 */

ServerEvents.tags('item', event => {
    event.add('minecraft:saplings', 'culturaldelights:avocado_sapling')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:saplings', 'culturaldelights:avocado_sapling')
})