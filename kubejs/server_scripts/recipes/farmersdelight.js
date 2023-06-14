let oak = 'minecraft:oak_slab'
let spruce = 'minecraft:spruce_slab'
let birch = 'minecraft:birch_slab'
let jungle = 'minecraft:jungle_slab'
let acacia = 'minecraft:acacia_slab'
let darkoak = 'minecraft:dark_oak_slab'
let crimson = 'minecraft:crimson_slab'
let warped = 'minecraft:warped_slab'
let fdBoard = 'farmersdelight:cutting_board'

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
    event.recipes.createCutting(fdBoard, [Item.of(oak)]).processingTime(100).id('finality:farmersdelight_cutting_board_oak')
    event.recipes.createCutting(fdBoard, [Item.of(spruce)]).processingTime(100).id('finality:farmersdelight_cutting_board_spruce')
    event.recipes.createCutting(fdBoard, [Item.of(jungle)]).processingTime(100).id('finality:farmersdelight_cutting_board_jungle')
    event.recipes.createCutting(fdBoard, [Item.of(acacia)]).processingTime(100).id('finality:farmersdelight_cutting_board_acacia')
    event.recipes.createCutting(fdBoard, [Item.of(darkoak)]).processingTime(100).id('finality:farmersdelight_cutting_board_dark_oak')
    event.recipes.createCutting(fdBoard, [Item.of(crimson)]).processingTime(100).id('finality:farmersdelight_cutting_board_crimson')
    event.recipes.createCutting(fdBoard, [Item.of(warped)]).processingTime(100).id('finality:farmersdelight_cutting_board_warped')
})