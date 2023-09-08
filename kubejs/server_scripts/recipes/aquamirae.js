// requires: aquamirae
// requires: create

ServerEvents.recipes(event => {
    event.shaped('aquamirae:oxygen_tank', [
        'IOI',
        'IOI',
        'IOI'
    ], {
        I: 'create:iron_sheet',
        O: 'aquamirae:oxygelium'
    }).id('aquamirae:oxygen_tank')
})