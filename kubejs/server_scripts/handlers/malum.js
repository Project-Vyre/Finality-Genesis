// requires: malum
// requires: kubejs_create
// requires: lootjs

/**
 * @file Server handler for Malum.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

/*
Malum To-Do List

- FTB Quests for introduction
- Create + Malum integration
- Wandering Trader trades for those on older versions
*/

ServerEvents.recipes(event => {
    console.log('Malum detected! Removing forgotten recipe with recipe ID malum:create/crushing/crush_rare_earths_block')
    console.log('Also attempting to remove forgotten recipe malum:malum/blazing_sconce')
    console.log('Please ignore any errors related to parsing recipes from Malum.')
    event.remove([
        { id: 'malum:malum/blazing_sconce' },
        { id: 'malum:create/crushing/crush_rare_earths_block' }
    ])
    // recipes
})

LootJS.modifiers(event => {
    
})