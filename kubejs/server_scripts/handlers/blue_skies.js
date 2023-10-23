// requires: blue_skies
// requires: kubejs_create

/**
 * Authors
 * 
 * @CelestialAbyss
 */

/**
 * To-Do List
 * 
 * - Fix Blue Skies tags
 */

let BSKIES_WOOD = ['bluebright', 'starlit', 'frostbright', 'lunar', 'dusk', 'maple', 'cherry', 'crystallized']

let BSKIES_ARMOR_VALID = [
    'pyrope',
    'aquite',
    'diopside',
    'charoite',
    'horizonite'
]

let BSKIES_TOOL_VALID = [
    'bluebright',
    'lunar',
    'dusk',
    'cherry',
    'turquoise_stone',
    'lunar_stone',
    'pyrope',
    'aquite',
    'diopside',
    'charoite',
    'horizonite'
]

ServerEvents.recipes(event => {
    BSKIES_WOOD.forEach(wood => {
        event.recipes.createCutting([
            `blue_skies:${wood}_pressure_plate`,
            `blue_skies:${wood}_slab`
        ], `blue_skies:${wood}_planks`).id(`kubejs:${wood}_pressure_plate_create_compat`)
    })
    if (Platform.isLoaded('aether')) {
        console.log('Aether detected! Applying repairing recipes for Blue Skies.')
        STANDARD_TOOLS_ALL.forEach(standard => {
            BSKIES_TOOL_VALID.forEach(tool => {
                event.custom({
                    'type': 'aether:repairing',
                    'category': 'enchanting_repair',
                    'ingredient': Ingredient.of(`blue_skies:${tool}_${standard}`).toJson(),
                    'repairTime': 200
                }).id(`finality:blue_skies/aether/${tool}_${standard}_repairing`)
            })
        })
        STANDARD_ARMOR.forEach(standard => {
            BSKIES_ARMOR_VALID.forEach(armor => {
                event.custom({
                    'type': 'aether:repairing',
                    'category': 'enchanting_repair',
                    'ingredient': Ingredient.of(`blue_skies:${armor}_${standard}`).toJson(),
                    'repairTime': 200
                }).id(`finality:blue_skies/aether/${armor}_${standard}_repairing`)
            })
        })
    }
})

/**
let repairBlueSkiesTools = []
Ingredient.all.stacks.forEach(item => {
    if (item.isDamageableItem() && item.getMod() === 'blue_skies') {
        repairBlueSkiesTools.push(item)
    }
})
let repairableBlueSkiesToolIngredient = Ingredient.of(repairBlueSkiesTools)
// Work in progress...
        repairableBlueSkiesToolIngredient.forEach(tool => {
            event.custom({
                'type': 'aether:repairing',
                'category': 'enchanting_repair',
                'ingredient': tool.toJson(),
                'repairTime': 250
            }).id(`finality:blue_skies/aether/${tool}_repairing`)
        })
        const blue_skiesTools = (Item.of('@blue_skies').getTags().contains() == 'blue_skies:tools')
 */

/*
    WOODPLATES.forEach(wood => {
        event.stonecutting(`minecraft:${wood}_pressure_plate`, `${wood}_slab`).id(`minecraft:${wood}_pressure_plate`)
    })
    WOODPLATES.forEach(wood => {
        event.recipes.create.cutting([`minecraft:${wood}_pressure_plate`, `${wood}_slab`], `${wood}_planks`).id(`finality:${wood}_pressure_plate`)
    })
*/