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
})