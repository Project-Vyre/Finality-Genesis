/**
 * @file ProjectE server handler.
 * @version omnia
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: projecte
// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
  event.remove({ output: 'projecte:philosophers_stone' })
  event.shaped('projecte:philosophers_stone', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'kubejs:glowstone_singularity',
    B: 'kubejs:redstone_singularity',
    C: 'kubejs:diamond_singularity',
  }).id('finality:ext_philosophers_stone')
  event.shaped('projecte:philosophers_stone', [
    'BAB',
    'ACA',
    'BAB'
  ], {
    A: 'kubejs:glowstone_singularity',
    B: 'kubejs:redstone_singularity',
    C: 'kubejs:diamond_singularity',
  }).id('finality:ext_philosophers_stone_alt')
  // transmutation stations
  event.remove({ id: 'projecte:transmutation_table' })
  event.shaped('projecte:transmutation_table', [
    'DED',
    'ESE',
    'DED'
  ], {
    D: 'projecte:dark_matter',
    E: 'kubejs:null_matter',
    S: 'projecte:philosophers_stone'
  }).id('finality:projecte_transmutation_table')
  event.remove({ id: 'projecte:transmutation_tablet' })
  event.shaped('projecte:transmutation_tablet', [
    'RUR',
    'UTU',
    'RUR'
  ], {
    R: 'projecte:red_matter_block',
    U: 'kubejs:null_matter',
    T: 'projecte:transmutation_table'
  }).id('finality:projecte_transmutation_tablet')
  // dark matter (ingredient)
  event.remove({ output: 'projecte:dark_matter' })
  event.shaped('projecte:dark_matter', [
    'AAA',
    'AEA',
    'AAA'
  ], {
    A: 'projecte:aeternalis_fuel',
    E: 'kubejs:null_matter'
  }).id('finality:crafting_dm')
  // red matter (ingredient)
  event.remove({ output: 'projecte:red_matter' })
  event.shaped('projecte:red_matter', [
    'ADA',
    'DUD',
    'ADA'
  ], {
    A: 'projecte:aeternalis_fuel',
    D: 'projecte:dark_matter',
    U: 'kubejs:stable_entropy_particles'
  }).id('finality:crafting_rm')
  // watch
  event.remove({ id: 'projecte:watch_of_flowing_time' })
  event.shaped('projecte:watch_of_flowing_time', [
    'DGD',
    'ECE',
    'DGD'
  ], {
    C: 'minecraft:clock',
    D: 'projecte:dark_matter',
    G: 'minecraft:glowstone',
    E: 'kubejs:stable_entropy_particles'
  }).id('finality:projecte_time_controller')
})