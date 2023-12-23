// requires: gateways
// requires: create

/**
 * @file Server handler for Gateways to Eternity.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:drowned_gate_small"}'), [
        'CFC',
        'FEF',
        'CFC'
    ], {
        C: 'create:copper_nugget',
        F: 'minecraft:rotten_flesh',
        E: 'minecraft:ender_pearl'
    }).id('finality:drowned_gate_small')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:drowned_gate"}'), [
        'CFC',
        'FEF',
        'CFC'
    ], {
        C: 'minecraft:copper_ingot',
        F: 'minecraft:rotten_flesh',
        E: 'minecraft:ender_eye'
    }).id('finality:drowned_gate')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:drowned_gate_large"}'), [
        'CFC',
        'FEF',
        'CFC'
    ], {
        C: 'minecraft:prismarine_crystals',
        F: 'minecraft:rotten_flesh',
        E: 'minecraft:nether_star'
    }).id('finality:drowned_gate_large')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:husk_gate_small"}'), [
        'CFC',
        'FEF',
        'CFC'
    ], {
        C: 'minecraft:iron_nugget',
        F: 'minecraft:rotten_flesh',
        E: 'minecraft:ender_pearl'
    }).id('finality:husk_gate_small')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:husk_gate"}'), [
        'CFC',
        'FEF',
        'CFC'
    ], {
        C: 'minecraft:iron_ingot',
        F: 'minecraft:rotten_flesh',
        E: 'minecraft:ender_eye'
    }).id('finality:husk_gate')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:husk_gate_large"}'), [
        'CFC',
        'FEF',
        'CFC'
    ], {
        C: 'minecraft:iron_ingot',
        F: 'minecraft:rotten_flesh',
        E: 'minecraft:nether_star'
    }).id('finality:husk_gate_large')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:hoglin_gate_small"}'), [
        'FPF',
        'PEP',
        'FPF'
    ], {
        F: 'create:cinder_flour',
        P: 'minecraft:porkchop',
        E: 'minecraft:ender_pearl'
    }).id('finality:hoglin_gate_small')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:hoglin_gate"}'), [
        'FPF',
        'PEP',
        'FPF'
    ], {
        F: 'create:cinder_flour',
        P: 'minecraft:porkchop',
        E: 'minecraft:ender_eye'
    }).id('finality:hoglin_gate')
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:hoglin_gate_large"}'), [
        'FPF',
        'PEP',
        'FPF'
    ], {
        F: 'create:cinder_flour',
        P: 'minecraft:porkchop',
        E: 'minecraft:nether_star'
    }).id('finality:hoglin_gate_large')
    event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"apotheosis:boss_gate_small"}'), [
        'SDS',
        'DED',
        'SDS'
    ], {
        S: 'apotheosis:epic_material',
        D: 'apotheosis:gem_dust',
        E: 'minecraft:ender_pearl'
    }).id('finality:boss_gate_small')
    if (Platform.isLoaded('cataclysm') &&
        Platform.isLoaded('aquamirae') &&
        Platform.isLoaded('irons_spellbooks')
    ) {
        event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_gate"}'), [
            'SDS',
            'DED',
            'SDS'
        ], {
            S: 'apotheosis:epic_material',
            D: 'apotheosis:gem_dust',
            E: 'minecraft:ender_eye'
        }).id('finality:boss_gate')
        event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:boss_gate_large"}'), [
            'SDS',
            'DED',
            'SDS'
        ], {
            S: 'apotheosis:mythic_material',
            D: 'apotheosis:gem_dust',
            E: 'minecraft:nether_star'
        }).id('finality:boss_gate_large')
        event.recipes.create.mechanical_crafting(Item.of('gateways:gate_pearl', '{gateway:"kubejs:ultimatum_boss_gate"}'), [
            'SDS',
            'DED',
            'SDS'
        ], {
            S: 'apotheosis:mythic_material',
            D: 'minecraft:crying_obsidian',
            E: 'minecraft:nether_star'
        }).id('finality:ultimatum_boss_gate')
    }
    if (Platform.isLoaded('mutantmonsters') && Platform.isLoaded('mutantmore')) {
        event.recipes.create.filling(Item.of('gateways:gate_pearl', '{gateway:"kubejs:mutant_boss_gate_large"}'), [
            'minecraft:ender_eye',
            Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}')
        ]).id('finality:filling/mutant_boss_gate_pearl')
    }
    if (Platform.isLoaded('bosses_of_mass_destruction')) {
        event.recipes.minecraft.crafting_shaped(Item.of('gateways:gate_pearl', '{gateway:"kubejs:mass_destruction_boss_gate_large"}'), [
            'SBS',
            'AEC',
            'SDS'
        ], {
            A: 'minecraft:moss_block',
            B: 'minecraft:bone_block',
            C: 'minecraft:nether_bricks',
            D: 'minecraft:crying_obsidian',
            S: 'create:experience_block',
            E: 'minecraft:nether_star'
        }).id('finality:crafting/mass_destruction_boss_gate')
    }
})

/*
Item.of('create:fluid_tank', '{BlockEntityTag:{Boiler:{ActiveHeat:0,Engines:0,PassiveHeat:0b,Supply:0.0f,Update:0b,Whistles:0},Height:1,LastKnownPos:{X:3,Y:56,Z:307},Luminosity:0,Owner:[I;-1625681629,1160660015,-2025764060,883666804],Size:1,TankContent:{Amount:1000,FluidName:"create:potion",Tag:{Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}},Window:1b,id:"create:fluid_tank"},display:{Lore:[\'"(+NBT)"\']}}')
*/