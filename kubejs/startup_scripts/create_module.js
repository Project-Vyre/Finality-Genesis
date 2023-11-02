// priority: 1
// requires: kubejs_create

/**
 * @file Creates transitional items for use in Sequenced Assembly recipes, but requires KubeJS Create to be present.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log('KubeJS Create loaded! Registering sequenced assembly items...')

// let DYE_ID = ['white','orange','magenta','light_blue','lime','pink','purple','light_gray','gray','cyan','brown','green','blue','red','black','yellow']
// let DYE_CAPS = ['WHITE','ORANGE','MAGENTA','LIGHT BLUE','LIME','PINK','PURPLE','LIGHT GRAY','GRAY','CYNA','BROWN','GREEN','BLUE','RED','BLACK','YELLOW']
// let DISPLAY_COLOR = ['White', 'Orange', 'Magenta', 'Light Blue', 'Lime', 'Pink', 'Purple', 'Light Gray', 'Gray', 'Cyan', 'Brown', 'Green', 'Blue', 'Red', 'Black', 'Yellow']

let DYE = {
    black: 'Black',
    gray: 'Gray',
    light_gray: 'Light Gray',
    white: 'White',
    pink: 'Pink',
    light_blue: 'Light Blue',
    brown: 'Brown',
    red: 'Red',
    orange: 'Orange',
    yellow: 'Yellow',
    lime: 'Lime',
    green: 'Green',
    cyan: 'Cyan',
    blue: 'Blue',
    purple: 'Purple',
    magenta: 'Magenta'
}

let NATR = {
    blue_ice: 'Blue Ice',
    sand: 'Sand',
    red_sand: 'Red Sand',
    coarse_dirt: 'Coarse Dirt',
    cobblestone: 'Cobblestone',
    tinted_glass: 'Tinted Glass',
    soul_sand: 'Soul Sand',
    soul_soil: 'Soul Soil',
    end_crystal: 'End Crystal'
}

let CMAT = {
    andesite_alloy: 'Andesite Alloy',
    zinc: 'Zinc',
    copper: 'Copper',
    brass: 'Brass',
    rose_quartz: 'Rose Quartz',
    framed_glass: 'Framed Glass',
    precision_mechanism: 'Precision Mechanism',
    sturdy_sheet: 'Sturdy Sheet',
    track: 'Track',
    chocolate: 'Chocolate',
    builders_tea: "Builder's Tea"
}

let PRIMORDIAL_MECHANISMS = {
    terra_mechanism: 'Terra Mechanism', // nature related, ingredient for entropy mechanism
    gluttony_mechanism: 'Gluttony Mechanism', // delicacy related, ingredient for entropy mechanism
    metallurgy_mechanism: 'Metallurgy Mechanism', // metal related, ingredient for entropy mechanism
    lattice_mechanism: 'Lattice Mechanism', // crystal related, ingredient for entropy mechanism
    umbral_mechanism: 'Umbral Mechanism', // darkness related, ingredient for entropy mechanism
    genesis_mechanism: 'Genesis Mechanism', // create related, ingredient for entropy mechanism
    ascendant_mechanism: 'Ascendant Mechanism', // experience related, ingredient for entropy mechanism
    entropy_mechanism: 'Entropy Mechanism' // CONSOLIDATION
}

/**
 * 
 * @param {*} event 
 * @param {string} itemID 
 * @param {string} displayName 
 * @param {string} texturePath 
 */
function transitionalItem(event, itemID, displayName, texturePath) {
    event.create(`kubejs:${itemID}`, 'create:sequenced_assembly').displayName(displayName).texture(`kubejs:item/${texturePath}`)
}

StartupEvents.registry('item', event => {
    Object.keys(NATR).forEach(material => {
        event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly').displayName(`§7Incomplete ${NATR[material]} Singularity`).texture(`kubejs:item/incomplete_singularities/nature/incomplete_${material}`).maxStackSize(1)
    })
    Object.keys(CMAT).forEach(material => {
        event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly').displayName(`§7Incomplete ${CMAT[material]} Singularity`).texture(`kubejs:item/incomplete_singularities/incomplete_${material}`).maxStackSize(1)
    })
    // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
    Object.keys(DYE).forEach(color => {
        event.create(`kubejs:incomplete_concrete_${color}_singularity`, 'create:sequenced_assembly').displayName(`§7Incomplete ${DYE[color]} Concrete Singularity`).texture(`kubejs:item/incomplete_singularities/concrete/incomplete_concrete_${color}`).maxStackSize(1)
    })
    Object.keys(PRIMORDIAL_MECHANISMS).forEach(mechanism => {
        event.create(`kubejs:${mechanism}`).displayName(`<rainb>${PRIMORDIAL_MECHANISMS[mechanism]}</rainb>`).texture(`kubejs:item/${mechanism}`).maxStackSize(64).fireResistant(true)
        event.create(`kubejs:incomplete_${mechanism}`, 'create:sequenced_assembly').displayName(`<rainb>Incomplete ${PRIMORDIAL_MECHANISMS[mechanism]}</rainb>`).texture(`kubejs:item/incomplete_${mechanism}`)
    })
    transitionalItem(event, 'incomplete_cpu_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu')
    transitionalItem(event, 'incomplete_cpu_substrate_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu_substrate')
})