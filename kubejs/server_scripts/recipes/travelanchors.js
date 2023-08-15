// requires: travelanchors

ServerEvents.recipes(event => {
    event.shaped('travelanchors:travel_staff', [
        '  E',
        ' I ',
        'I  '
    ], {
        E: 'minecraft:ender_pearl',
        I: 'minecraft:iron_ingot'
    }).id('travelanchors:travel_staff')
})