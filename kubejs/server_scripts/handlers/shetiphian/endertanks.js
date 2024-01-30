// requires: endertanks
// requires: create

/**
 * @file Server handler for ShetiPhian's EnderTanks mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', 'endertanks:tank')
})

ServerEvents.recipes(event => {
    event.remove([
        'endertanks:bucket',
        'endertanks:tank'
    ])
    if (!Platform.isLoaded('extendedcrafting')) {
        // ender bucket
        event.shaped('endertanks:ender_bucket', [
            'AWA',
            'OBO',
            'AEA'
        ], {
            A: 'create:golden_sheet',
            W: '#minecraft:wool',
            O: 'create:sturdy_sheet',
            B: 'minecraft:bucket',
            E: 'minecraft:beacon'
        }).id('finality:shetiphian/ender_bucket')
        // ender tank
        event.shaped('endertanks:ender_tank', [
            'AWA',
            'OCO',
            'AEA'
        ], {
            A: 'create:golden_sheet',
            W: '#minecraft:wool',
            O: 'create:sturdy_sheet',
            C: 'create:fluid_tank',
            E: 'minecraft:beacon'
        }).id('finality:shetiphian/ender_tank')        
    }
    if (Platform.isLoaded('extendedcrafting')) {
        // ender bucket
        event.shaped('endertanks:ender_bucket', [
            'AWA',
            'OBO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'create:sturdy_sheet',
            B: 'minecraft:bucket',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian/ender_bucket')
        // ender tank
        event.shaped('endertanks:ender_tank', [
            'AWA',
            'OCO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'create:sturdy_sheet',
            C: 'create:fluid_tank',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian/ender_tank')
    }
})