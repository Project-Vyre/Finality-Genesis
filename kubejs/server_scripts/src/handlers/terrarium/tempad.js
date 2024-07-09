// requires: tempad
// requires: kubejs_create

/**
 * @file Server handler for Tempad.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove({ id: 'tempad:tempad' })
  event.shaped('tempad:tempad', [
    'QQQ',
    'RTB',
    'QQQ'
  ], {
    Q: 'create:iron_sheet',
    R: 'create:rose_quartz_lamp',
    T: 'minecraft:tinted_glass',
    B: 'minecraft:clock'
  }).id('kubejs:tempad')
  event.recipes.create.mechanical_crafting('tempad:he_who_remains_tempad', [
    ' UUU ',
    'UTPTU',
    'UEBEU',
    'UTPTU',
    ' UUU '
  ], {
    U: 'create:sturdy_sheet',
    T: 'kubejs:iridium_casing',
    E: 'kubejs:electron_tube_singularity',
    P: 'kubejs:precision_mechanism_singularity',
    B: 'kubejs:ender_pearl_singularity'
  }).id('kubejs:tempad/mechanical_crafting/overseers_tempad')
})