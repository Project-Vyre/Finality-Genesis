// requires: chipped
// requires: create

/**
 * Authors
 * 
 * @CelestialAbyss
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