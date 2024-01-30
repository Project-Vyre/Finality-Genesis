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
        Q: 'minecraft:quartz_block',
        R: 'create:rose_quartz_lamp',
        T: 'minecraft:tinted_glass',
        B: 'minecraft:beacon'
    }).id('finality:tempad')
    event.recipes.create.mechanical_crafting('tempad:he_who_remains_tempad', [
        ' UUU ',
        'UTPTU',
        'UEBEU',
        'UTPTU',
        ' UUU '
    ], {
        U: 'create:sturdy_sheet',
        T: 'create:railway_casing',
        E: 'kubejs:electron_tube_singularity',
        P: 'kubejs:precision_mechanism_singularity',
        B: 'minecraft:beacon'
    }).id('finality:mechanical_crafting/overseers_tempad')
})