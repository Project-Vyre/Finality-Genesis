// requires: handcrafted
// requires: create

console.log('I do not know why Handcrafted is making Create look bad here by making the boards a random chance instead of being guaranteed like a stonecutter.')
console.log('Also, please keep your recipe IDs consistent. It is either board or boards.')

ServerEvents.recipes(event => {
    event.remove([
        'create:saw_acacia_board',
        'create:saw_birch_boards',
        'create:saw_dark_oak_boards',
        'create:saw_jungle_boards',
        'create:saw_mangrove_boards',
        'create:saw_oak_boards',
        'create:saw_spruce_boards',
        'create:saw_crimson_board',
        'create:saw_warped_boards'
    ])
    WOOD_TYPES.forEach(insert => {
        event.recipes.createCutting(`4x handcrafted:${insert}_board`, `minecraft:${insert}_planks`).id(`handcrafted:saw_${insert}_boards`)
        event.shaped(`handcrafted:${insert}_counter`, [
            'CCC',
            'BHB',
            'BBB'
        ], {
            C: 'minecraft:calcite',
            B: `handcrafted:${insert}_board`,
            H: '#forge:chests/wooden'
        }).id(`handcrafted:${insert}_counter`)
        event.shaped(`handcrafted:${insert}_desk`, [
            'PPP',
            'BHB',
            'B B'
        ], {
            P: `minecraft:${insert}_planks`,
            B: `handcrafted:${insert}_board`,
            H: '#forge:chests/wooden'
        }).id(`handcrafted:${insert}_desk`)
        event.shaped(`handcrafted:${insert}_drawer`, [
            'BBB',
            'BHB',
            'BBB'
        ], {
            B: `handcrafted:${insert}_board`,
            H: '#forge:chests/wooden'
        }).id(`handcrafted:${insert}_drawer`)
        event.shaped(`handcrafted:${insert}_cupboard`, [
            'BBB',
            'PHP',
            'BBB'
        ], {
            B: `handcrafted:${insert}_board`,
            P: `minecraft:${insert}_planks`,
            H: '#forge:chests/wooden'
        }).id(`handcrafted:${insert}_cupboard`)
        event.shaped(`handcrafted:${insert}_nightstand`, [
            'PPP',
            'BHB',
            'BBB'
        ], {
            P: `minecraft:${insert}_planks`,
            B: `handcrafted:${insert}_board`,
            H: '#forge:chests/wooden'
        }).id(`handcrafted:${insert}_nightstand`)
    })
})