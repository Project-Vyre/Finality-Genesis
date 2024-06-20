/**
 * @file Server handler for Mekanism
 * @version omnia
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: mekanism
// requires: extendedcrafting
// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
  // mekanism output removal
  event.remove({ id: 'createaddition:compat/mekanism/rose_quartz_enriching' }) // you have to use deployers sorry :3
  // mekanism basic item
  /*
  event.remove({id: ''})
  event.remove({id: ''})
  event.remove({id: ''})
  event.remove({id: ''})
  event.remove({id: ''})
  event.remove({id: ''})
  event.remove({id: ''})
  event.remove({id: 'mekanism:control_circuit/advanced'})
  */
  event.recipes.create.sequencedAssembly(['mekanism:advanced_control_circuit'], 'mekanism:basic_control_circuit', [
    event.recipes.createDeploying(['kubejs:incomplete_advanced_control_circuit'], ['kubejs:incomplete_advanced_control_circuit', 'mekanism:alloy_infused']),
    event.recipes.createDeploying(['kubejs:incomplete_advanced_control_circuit'], ['kubejs:incomplete_advanced_control_circuit', 'extendedcrafting:redstone_catalyst']),
    event.recipes.createDeploying(['kubejs:incomplete_advanced_control_circuit'], ['kubejs:incomplete_advanced_control_circuit', 'mekanism:alloy_infused'])
  ]).transitionalItem('kubejs:incomplete_advanced_control_circuit').loops(1).id('mekanism:control_circuit/advanced')
  event.recipes.create.sequencedAssembly(['mekanism:elite_control_circuit'], 'mekanism:advanced_control_circuit', [
    event.recipes.createDeploying(['kubejs:incomplete_elite_control_circuit'], ['kubejs:incomplete_elite_control_circuit', 'mekanism:alloy_reinforced']),
    event.recipes.createDeploying(['kubejs:incomplete_elite_control_circuit'], ['kubejs:incomplete_elite_control_circuit', 'extendedcrafting:ender_catalyst']),
    event.recipes.createDeploying(['kubejs:incomplete_elite_control_circuit'], ['kubejs:incomplete_elite_control_circuit', 'mekanism:alloy_reinforced']),
  ]).transitionalItem('kubejs:incomplete_elite_control_circuit').loops(1).id('mekanism:control_circuit/elite')
  event.recipes.create.sequencedAssembly(['mekanism:ultimate_control_circuit'], 'mekanism:elite_control_circuit', [
    event.recipes.createDeploying(['kubejs:incomplete_ultimate_control_circuit'], ['kubejs:incomplete_ultimate_control_circuit', 'mekanism:alloy_atomic']),
    event.recipes.createDeploying(['kubejs:incomplete_ultimate_control_circuit'], ['kubejs:incomplete_ultimate_control_circuit', 'extendedcrafting:enhanced_ender_catalyst']),
    event.recipes.createDeploying(['kubejs:incomplete_ultimate_control_circuit'], ['kubejs:incomplete_ultimate_control_circuit', 'mekanism:alloy_atomic'])
  ]).transitionalItem('kubejs:incomplete_ultimate_control_circuit').loops(1).id('mekanism:control_circuit/ultimate')
})

/*
let MEKCTRLCIRCUITS = {
  advanced_control: 'alloy_infused',
  elite_control: 'alloy_reinforced',
  ultimate_control: 'alloy_atomic'
}
onEvent('recipes', event => {
  event.recipes.create.sequencedAssembly(['mekanism:advanced_control_circuit'], 'mekanism:basic_control_circuit', [
      event.recipes.createDeploying(['kubejs:incomplete_advanced_control_circuit'], ['kubejs:incomplete_advanced_control_circuit', 'mekanism:alloy_infused'])
  ]).transitionalItem('kubejs:incomplete_advanced_control_circuit').id('mekanism:control_circuit/advanced')
})
*/


/* mekanism basic tier
encrichment chamber
osmium compressor
combiner
crusher
Digital Miner
Metallurgic Infuser
Purification Chamber
Energized Smelter
Teleporter
Electric Pump
Personal Barrel
Personal Chest
Chargepad
Logistical Sorter
Rotary Condesntrator
Chemical Oxidizer
Chemical Infuser
Chemical Injection Chamber
Electrolytic Separator
Precision Sawmill
Chemical Dissolution Chamber
Chemical Washer
Chemical Crystallizer
Seismic Vibrator
*/