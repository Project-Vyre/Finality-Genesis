// requires: create_power_loader
// requires: kubejs_create

/**
 * @file Server handler for Create: Power Loader 
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.recipes.minecraft.crafting_shaped('create_power_loader:empty_andesite_chunk_loader', [
    'BBB',
    'BAB',
    'CSC'
  ], {
    A: 'minecraft:respawn_anchor',
    B: 'create:andesite_bars',
    C: 'create:andesite_casing',
    S: 'create:shaft'
  }).id('create_power_loader:crafting/empty_andesite_chunk_loader')
  event.recipes.create.mechanical_crafting('create_power_loader:empty_brass_chunk_loader', [
    'BBBBB',
    'B   B',
    'B A B',
    'C P C',
    'CCSCC'
  ], {
    A: 'minecraft:respawn_anchor',
    B: 'create:brass_bars',
    C: 'create:brass_casing',
    S: 'create:shaft',
    P: 'create:precision_mechanism'
  }).id('create_power_loader:crafting/empty_brass_chunk_loader')
})