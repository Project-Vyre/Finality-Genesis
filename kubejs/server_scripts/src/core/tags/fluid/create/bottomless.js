/**
 * @file Tag manager for Create's bottomless deny and allow tags for core fluids.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

// requires: create

/**
 * Fluids related to other mods can be found in their respective handler scripts.
 */

ServerEvents.tags('fluid', event => {
  event.add('create:bottomless/allow', [
    'kubejs:mushroom_stew',
    'kubejs:lemon_juice',
    'kubejs:condensed_universal_entropy',
    'kubejs:condensed_universal_order',
    'kubejs:shimmer',
    'kubejs:molten_iron',
    'kubejs:molten_gold',
    'kubejs:molten_copper',
    'kubejs:molten_zinc',
    'kubejs:molten_brass',
    'kubejs:molten_netherite'
  ])
  event.add('create:bottomless/deny', [
    
  ])
})