// requires: chipped
// requires: create

/**
 * @file Server handler for Chipped.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        'chipped:botanist_workbench',
        'chipped:glassblower',
        'chipped:carpenters_table',
        'chipped:loom_table',
        'chipped:mason_table',
        'chipped:alchemy_bench',
        'chipped:tinkering_table'
    ])
})