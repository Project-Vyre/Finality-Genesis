// requires: enderchests
// requires: create

/**
 * @file Server handler for ShetiPhian's EnderChests mod.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', 'enderchests:ender_chest')
})

ServerEvents.recipes(event => {
    event.remove([
        'enderchests:ender_bag',
        'enderchests:ender_chest',
        'enderchests:ender_pouch'
    ])
    if (!Platform.isLoaded('extendedcrafting')) {
        // ender bag
        event.shaped('enderchests:ender_bag', [
            'AWA',
            'OPO',
            'AEA'
        ], {
            A: 'create:golden_sheet',
            W: '#minecraft:wool',
            O: 'create:powdered_obsidian',
            P: 'enderchests:ender_pouch',
            E: 'minecraft:beacon'
        }).id('finality:shetiphian/ender_bag')
        // enderchests ender chest
        event.shaped('enderchests:ender_chest', [
            'AWA',
            'OCO',
            'AEA'
        ], {
            A: 'create:golden_sheet',
            W: '#minecraft:wool',
            O: 'create:sturdy_sheet',
            C: 'minecraft:ender_chest',
            E: 'minecraft:beacon'
        }).id('finality:shetiphian/ender_chest')
        // ender pouch
        event.shaped('enderchests:ender_pouch', [
            'ALA',
            'LEL',
            'LLL'
        ], {
            A: 'minecraft:gold_nugget',
            L: 'minecraft:leather',
            E: 'minecraft:ender_eye'
        }).id('finality:shetiphian/ender_pouch')        
    }
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
        }).id('finality:shetiphian/ender_bag')
        // enderchests ender chest
        event.shaped('enderchests:ender_chest', [
            'AWA',
            'OCO',
            'AEA'
        ], {
            A: 'extendedcrafting:advanced_component',
            W: '#minecraft:wool',
            O: 'create:sturdy_sheet',
            C: 'minecraft:ender_chest',
            E: 'extendedcrafting:enhanced_ender_catalyst'
        }).id('finality:shetiphian/ender_chest')
        // ender pouch
        event.shaped('enderchests:ender_pouch', [
            'ALA',
            'LEL',
            'LLL'
        ], {
            A: 'minecraft:gold_nugget',
            L: 'minecraft:leather',
            E: 'minecraft:ender_eye'
        }).id('finality:shetiphian/ender_pouch')
    }
})