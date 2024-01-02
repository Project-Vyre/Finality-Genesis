// priority: 0

/**
 * @file KubeJS singularity registration.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> 
 */

StartupEvents.registry('item', event => {
    event.create('kubejs:potion_base_singularity')
    event.create('kubejs:blaze_cake_singularity')
    if (Platform.isLoaded('create_bic_bit')) {
        event.create('kubejs:speculaas_singularity')
        event.create('kubejs:stroopwafel_singularity')
        event.create('kubejs:oliebollen_singularity')
        event.create('kubejs:kroket_singularity')
        event.create('kubejs:bitterballen_singularity')
        event.create('kubejs:frikandel_singularity')
        event.create('kubejs:fries_singularity')
        event.create('kubejs:churros_singularity')
        event.create('kubejs:stamppot_singularity')
        event.create('kubejs:bic_bit_singularity').displayName('Create: Bitterballen Singularity')
    }
})