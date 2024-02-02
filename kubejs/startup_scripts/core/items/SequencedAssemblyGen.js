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

let seqDYE = [
    'black',
    'gray',
    'light_gray',
    'white',
    'pink',
    'light_blue',
    'brown',
    'red',
    'orange',
    'yellow',
    'lime',
    'green',
    'cyan',
    'blue',
    'purple',
    'magenta'
]

let NATR = [
    'blue_ice',
    'sand',
    'red_sand',
    'coarse_dirt',
    'cobblestone',
    'tinted_glass',
    'soul_sand',
    'soul_soil',
    'end_crystal'
]

let CMAT = [
    'andesite_alloy',
    'zinc',
    'copper',
    'brass',
    'rose_quartz',
    'framed_glass',
    'precision_mechanism',
    'sturdy_sheet',
    'track',
    'chocolate',
    'builders_tea',
]

let PRIMORDIAL_MECHANISMS = [
    'terra_mechanism', // nature related, ingredient for entropy mechanism
    'gluttony_mechanism', // delicacy related, ingredient for entropy mechanism
    'metallurgy_mechanism', // metal related, ingredient for entropy mechanism
    'lattice_mechanism', // crystal related, ingredient for entropy mechanism
    'umbral_mechanism', // darkness related, ingredient for entropy mechanism
    'genesis_mechanism', // create related, ingredient for entropy mechanism
    'ascendant_mechanism', // experience related, ingredient for entropy mechanism
    'entropy_mechanism' // CONSOLIDATION
]

StartupEvents.registry('item', event => {
    /**
     * 
     * @param {string} itemID 
     * @param {string} displayName 
     * @param {string} texturePath 
     */
    let transitionalItem = (itemID, displayName, texturePath) => {
        event.create(`kubejs:${itemID}`, 'create:sequenced_assembly').displayName(displayName).texture(`kubejs:item/${texturePath}`)
    }
    for (let material of NATR) {
        event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly')
            .texture(`kubejs:item/incomplete_singularities/nature/incomplete_${material}`)
            .maxStackSize(1)
    }
    for (let material of CMAT) {
        event.create(`kubejs:incomplete_${material}_singularity`, 'create:sequenced_assembly')
            .texture(`kubejs:item/incomplete_singularities/incomplete_${material}`)
            .maxStackSize(1)
    }
    // replace with Color.DYE.forEach() on 1902+ as the Colors automatically has all 16 MC colors
    for (let color of seqDYE) {
        event.create(`kubejs:incomplete_concrete_${color}_singularity`, 'create:sequenced_assembly')
            .texture(`kubejs:item/incomplete_singularities/concrete/incomplete_concrete_${color}`)
            .maxStackSize(1)
    }
    event.create('kubejs:incomplete_salt_singularity', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_singularities/incomplete_salt')
    event.create('kubejs:incomplete_potion_base_singularity', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_singularities/incomplete_potion_base')
    if (Platform.isLoaded('create_bic_bit')) {
        event.create('kubejs:incomplete_speculaas_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_stroopwafel_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_oliebollen_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_kroket_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_bitterballen_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_frikandel_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_fries_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_churros_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_stamppot_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
        event.create('kubejs:incomplete_bic_bit_singularity', 'create:sequenced_assembly').texture('kubejs:item/incomplete_singularities/incomplete_singularity_placeholder')
    }
    event.create('kubejs:incomplete_blaze_cake_singularity', 'create:sequenced_assembly')
        .texture('kubejs:item/incomplete_singularities/incomplete_blaze_cake')
    event.create('kubejs:stabilizing_qubit', 'create:sequenced_assembly')
        .texture('kubejs:item/stabilizing_qubit')
    event.create('kubejs:stabilizing_entropy_particles', 'create:sequenced_assembly')
        .texture('kubejs:item/stabilizing_entropy')
    for (let mechanism of PRIMORDIAL_MECHANISMS) {
        event.create(`kubejs:${mechanism}`).texture(`kubejs:item/${mechanism}`).maxStackSize(64).fireResistant(true)
        event.create(`kubejs:incomplete_${mechanism}`, 'create:sequenced_assembly').texture(`kubejs:item/incomplete_${mechanism}`)
    }
    transitionalItem('incomplete_cpu_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu')
    transitionalItem('incomplete_cpu_substrate_shape', '§aIncomplete CPU Substrate Shape', 'shapes/incomplete_cpu_substrate')
    event.create('kubejs:incomplete_copper_coin', 'create:sequenced_assembly')
        .texture('kubejs:item/copper_coin')
    event.create('kubejs:incomplete_iron_coin', 'create:sequenced_assembly')
        .texture('kubejs:item/iron_coin')
    event.create('kubejs:incomplete_gold_coin', 'create:sequenced_assembly')
        .texture('kubejs:item/gold_coin')
    event.create('kubejs:incomplete_netherite_coin', 'create:sequenced_assembly')
        .texture('kubejs:item/netherite_coin')
        .fireResistant(true)
    event.create('kubejs:incomplete_entropy_coin', 'create:sequenced_assembly')
        .texture('kubejs:item/entropy_coin')
        .fireResistant(true)
    event.create('kubejs:incomplete_enchanted_golden_apple')
        .texture('minecraft:item/golden_apple')
})