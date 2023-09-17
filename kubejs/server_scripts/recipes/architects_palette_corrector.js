// requires: architects_palette
// requires: v_slab_compat

console.log("Fixing Jsburg's mistakes... Architect's Palette 1.3.3 for 1.19.2.")
console.log("The recipes are VERY stubborn in getting overridden by recipe ID, so I am sorry if parsing errors show in the console logs.")
console.log("Please ignore the parsing recipe errors from the mod.")

ServerEvents.tags('item', event => {
    event.add('architects_palette:myonite_tag_fix', [
        'architects_palette:myonite',
        'architects_palette:myonite_bricks'
    ])
})

ServerEvents.recipes(event => {
    event.remove([
        { id: 'architects_palette:vertslabs/myonite_vertical_slab' },
        { id: 'architects_palette:vertslabs/myonite_vertical_slab_revert' },
        { id: 'architects_palette:vertslabs/stonecutting/myonite_vslab_from_myonite_stonecutting' },
        { id: 'architects_palette:vertslabs/myonite_brick_vertical_slab' },
        { id: 'architects_palette:vertslabs/myonite_brick_vertical_slab_revert' },
        { id: 'architects_palette:vertslabs/stonecutting/myonite_brick_vslab_from_myonite_and_myonite_bricks_stonecutting' },
        { id: 'architects_palette:vertslabs/mushy_myonite_brick_vertical_slab' },
        { id: 'architects_palette:vertslabs/mushy_myonite_brick_vertical_slab_revert' },
        { id: 'architects_palette:vertslabs/stonecutting/mushy_myonite_brick_vslab_from_mushy_myonite_bricks_stonecutting' }
    ])
    // myonite 'architects_palette:myonite_vertical_slab'
    event.shaped('3x architects_palette:myonite_vertical_slab', [
        'M',
        'M',
        'M'
    ], {
        M: 'architects_palette:myonite'
    }).id('kubejs:vertslabs/myonite_vertical_slab')
    event.shapeless('architects_palette:myonite_slab', [
        'architects_palette:myonite_vertical_slab'
    ]).id('kubejs:vertslabs/myonite_vertical_slab_revert')
    event.stonecutting('2x architects_palette:myonite_vertical_slab', 'architects_palette:myonite').id('kubejs:vertslabs/stonecutting/myonite_vslab_from_myonite_stonecutting')
    // myonite brick 'architects_palette:myonite_bricks'
    event.shaped('3x architects_palette:myonite_brick_vertical_slab', [
        'M',
        'M',
        'M'
    ], {
        M: 'architects_palette:myonite_bricks'
    }).id('kubejs:vertslabs/myonite_brick_vertical_slab')
    event.shapeless('architects_palette:myonite_brick_slab', [
        'architects_palette:myonite_brick_vertical_slab'
    ]).id('kubejs:vertslabs/myonite_brick_vertical_slab_revert')
    event.stonecutting('2x architects_palette:myonite_brick_vertical_slab', '#architects_palette:myonite_tag_fix').id('kubejs:vertslabs/stonecutting/myonite_brick_vslab_from_myonite_and_myonite_bricks_stonecutting')
    // mushy myonite brick
    event.shaped('3x architects_palette:mushy_myonite_brick_vertical_slab', [
        'M',
        'M',
        'M'
    ], {
        M: 'architects_palette:mushy_myonite_bricks'
    }).id('kubejs:vertslabs/mushy_myonite_brick_vertical_slab')
    event.shapeless('architects_palette:mushy_myonite_brick_slab', [
        'architects_palette:mushy_myonite_brick_vertical_slab'
    ]).id('kubejs:vertslabs/mushy_myonite_brick_vertical_slab_revert')
    event.stonecutting('2x architects_palette:mushy_myonite_brick_vertical_slab', 'architects_palette:mushy_myonite_bricks').id('kubejs:vertslabs/stonecutting/mushy_myonite_brick_vslab_from_mushy_myonite_bricks_stonecutting')
})