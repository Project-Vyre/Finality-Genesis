// requires: kubejs_create

ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('kubejs:qubit', [
        '/FIX Q'
    ], {
        '/': 'kubejs:slash',
        'F': 'kubejs:letter_f',
        'I': 'kubejs:letter_i',
        'X': 'kubejs:letter_x',
        'Q': ['kubejs:denied_result', 'kubejs:removed_item', 'kubejs:errored_result']
    }).id('finality:mechanical_crafting/qubit')
    // give
    event.recipes.create.mechanical_crafting('64x minecraft:netherite_block', [
        '/GIVE @S ',
        'NETHERITE',
        'BLOCK 64 '
    ], {
        '/': 'kubejs:slash',
        '@': 'kubejs:at_sign',
        'G': 'kubejs:letter_g',
        'I': 'kubejs:letter_i',
        'V': 'kubejs:letter_v',
        'E': 'kubejs:letter_e',
        'S': 'kubejs:letter_s',
        'N': 'kubejs:letter_n',
        'T': 'kubejs:letter_t',
        'H': 'kubejs:letter_h',
        'R': 'kubejs:letter_r',
        'B': 'kubejs:letter_b',
        'L': 'kubejs:letter_l',
        'O': 'kubejs:letter_o',
        'C': 'kubejs:letter_c',
        'K': 'kubejs:letter_k',
        '6': 'kubejs:six',
        '4': 'kubejs:four'
    }).id('finality:command/netherite_block_stack')
    event.recipes.create.mechanical_crafting('64x minecraft:diamond_block', [
        '/GIVE @S ',
        'DIAMOND  ',
        'BLOCK 64 '
    ], {
        '/': 'kubejs:slash',
        '@': 'kubejs:at_sign',
        'G': 'kubejs:letter_g',
        'I': 'kubejs:letter_i',
        'V': 'kubejs:letter_v',
        'E': 'kubejs:letter_e',
        'S': 'kubejs:letter_s',
        'D': 'kubejs:letter_d',
        'A': 'kubejs:letter_a',
        'M': 'kubejs:letter_m',
        'O': 'kubejs:letter_o',
        'N': 'kubejs:letter_n',
        'B': 'kubejs:letter_b',
        'L': 'kubejs:letter_l',
        'C': 'kubejs:letter_c',
        'K': 'kubejs:letter_k',
        '6': 'kubejs:six',
        '4': 'kubejs:four'
    }).id('finality:command/diamond_block_stack')
    event.recipes.create.mechanical_crafting('64x create:blaze_cake', [
        '/GIVE @S ',
        'CREATE   ',
        'BLAZE    ',
        'CAKE 64  '
    ], {
        '/': 'kubejs:slash',
        '@': 'kubejs:at_sign',
        'G': 'kubejs:letter_g',
        'I': 'kubejs:letter_i',
        'V': 'kubejs:letter_v',
        'E': 'kubejs:letter_e',
        'S': 'kubejs:letter_s',
        'C': 'kubejs:letter_c',
        'R': 'kubejs:letter_r',
        'A': 'kubejs:letter_a',
        'T': 'kubejs:letter_t',
        'B': 'kubejs:letter_b',
        'L': 'kubejs:letter_l',
        'Z': 'kubejs:letter_z',
        'K': 'kubejs:letter_k',
        '6': 'kubejs:six',
        '4': 'kubejs:four'
    }).id('finality:command/blaze_cake_stack')
})