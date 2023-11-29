// requires: enderchests
// requires: endertanks
// requires: create

/**
 * @file Server handler for ShetiPhian's EnderChests and EnderTanks mods.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        'enderchests:ender_chest',
        'endertanks:tank'
    ])
})

ServerEvents.recipes(event => {
    event.remove([
        'enderchests:ender_bag',
        'enderchests:ender_chest',
        'enderchests:ender_pouch',
        'endertanks:bucket',
        'endertanks:tank'
    ])
    if (Platform.isLoaded('extendedcrafting')) {
        // ender bag
        event.shaped('enderchests:ender_bag', [
            'AWA',
            'OPO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'create:powdered_obsidian',
            P: 'enderchests:ender_pouch',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian_ender_bag')
        // ender bucket
        event.shaped('endertanks:ender_bucket', [
            'AWA',
            'OBO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'create:powdered_obsidian',
            B: 'minecraft:bucket',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian_ender_bucket')
        // enderchests ender chest
        event.shaped('enderchests:ender_chest', [
            'AWA',
            'OCO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'minecraft:obsidian',
            C: 'minecraft:ender_chest',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian_ender_chest')
        // ender pouch
        event.shaped('enderchests:ender_pouch', [
            'ALA',
            'LEL',
            'LLL'
        ], {
            A: 'minecraft:gold_nugget',
            L: 'minecraft:leather',
            E: 'minecraft:ender_eye'
        }).id('finality:shetiphian_ender_pouch')
        // ender tank
        event.shaped('endertanks:ender_tank', [
            'AWA',
            'OCO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'minecraft:obsidian',
            C: 'create:fluid_tank',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian_ender_tank')
    }
})