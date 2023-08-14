// requires: farmersdelight

let WOOD = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'crimson', 'warped']

ServerEvents.recipes(event => {
    event.remove({id: 'farmersdelight:skillet'})
    event.remove({id: 'farmersdelight:cooking_pot'})
    event.remove({id: 'farmersdelight:cutting_board'})
    event.shaped('farmersdelight:skillet', [
        ' SS',
        ' SS',
        'B  '
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick'
    }).id('finality:farmersdelight_skillet')
    event.shaped('farmersdelight:cooking_pot', [
        'BWB',
        'SHS',
        'SSS'
    ], {
        S: 'create:iron_sheet',
        B: 'minecraft:brick',
        H: 'minecraft:water_bucket',
        W: 'minecraft:wooden_shovel'
    }).id('finality:farmersdelight_cooking_pot')
    // hashtag minecraft:wooden_slabs does not work apparently so this is how it is going to be
    // KubeJS Create has now been updated, enjoy
    // Disabled until kubejs create is updated
    WOOD.forEach(type => {
        event.recipes.createCutting('farmersdelight:cutting_board', `minecraft:${type}_slab`).processingTime(100).id(`finality:farmersdelight/cutting_board/${type}`)
    })
})