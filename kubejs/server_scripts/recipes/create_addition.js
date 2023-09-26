// requires: createaddition
// requires: kubejs_create

ServerEvents.tags('item', event => {
    event.add('create:blaze_burner_fuel/special', 'createaddition:bioethanol_bucket')
    event.add('create:blaze_burner_fuel/regular', 'createaddition:seed_oil_bucket')
})

ServerEvents.recipes(event => {
    event.remove([
        { id: 'createaddition:rolling/brass_ingot' },
        { id: 'createaddition:mixing/bioethanol' },
        { id: 'createaddition:mixing/netherrack' },
        { id: 'createaddition:rolling/straw' },
        { id: 'createaddition:mixing/biomass_from_sticks' },
        { id: 'createaddition:mixing/biomass_from_honeycomb' }
    ])
    // bioethanol balancing work in progress.
    event.recipes.createMixing('3x createaddition:biomass', [
        '3x create:wheat_flour',
        Fluid.of('createaddition:seed_oil', 1000)
    ]).heated().id('finality:createaddition/mixing/biomass_from_wheat')
    event.recipes.createMixing(Fluid.of('createaddition:bioethanol', 100), [
        '3x minecraft:sugar',
        '9x createaddition:biomass'
    ]).id('finality:createaddition/mixing/bioethanol')
})