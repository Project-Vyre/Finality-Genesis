// requires: farmersdelight
// requires: kubejs_create

ServerEvents.recipes(event => {
    event.shaped('farmersdelight:skillet', [
        ' SS',
        ' SS',
        'B  '
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick'
    }).id('farmersdelight:skillet')
    event.shaped('farmersdelight:cooking_pot', [
        'BWB',
        'SHS',
        'SSS'
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick',
        H: 'minecraft:water_bucket',
        W: 'minecraft:wooden_shovel'
    }).id('farmersdelight:cooking_pot')
    event.recipes.createCutting('2x farmersdelight:cutting_board', '#minecraft:wooden_slabs').id('farmersdelight:cutting_board')
    if (Platform.isLoaded('incubation')) {
        event.remove([
            { id: 'incubation:fried_egg' },
            { id: 'incubation:fried_egg_from_smoking' },
            { id: 'incubation:fried_egg_from_campfire_cooking' }
        ])
    }
})