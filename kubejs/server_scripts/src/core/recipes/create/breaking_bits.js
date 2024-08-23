// requires: kubejs_create

let CMD = ['command_block', 'chain_command_block', 'repeating_command_block']
let VALID_COLOR_MIX = [
  'red',
  'green',
  'blue',
  'white',
  'cyan',
  'magenta',
  'yellow'
]
let LETTER_BINARY_CODES = {
  letter_a: '01000001',
  letter_b: '01000010',
  letter_c: '01000011',
  letter_d: '01000100',
  letter_e: '01000101',
  letter_f: '01000110',
  letter_g: '01000111',
  letter_h: '01001000',
  letter_i: '01001001',
  letter_j: '01001010',
  letter_k: '01001011',
  letter_l: '01001100',
  letter_m: '01001101',
  letter_n: '01001110',
  letter_o: '01001111',
  letter_p: '01010000',
  letter_q: '01010001',
  letter_r: '01010010',
  letter_s: '01010011',
  letter_t: '01010100',
  letter_u: '01010101',
  letter_v: '01010110',
  letter_w: '01010111',
  letter_x: '01011000',
  letter_y: '01011001',
  letter_z: '01011010'
}
let INTEGER_BINARY = {
  two: '00110010',
  three: '00110011',
  four: '00110100',
  five: '00110101',
  six: '00110110',
  seven: '00110111',
  eight: '00111000',
  nine: '00111001'
}

ServerEvents.recipes(event => {
  let BINARYCONVERSION = (output, arrangement) => {
    event.recipes.create.mechanical_crafting(`kubejs:${output}`, [
      arrangement
    ], {
      '0': 'kubejs:zero',
      '1': 'kubejs:one'
    }).id(`finality:mechanical_crafting/${output}`)
  }
  let HEXCODES = (out, arrangement) => {
    event.recipes.create.mechanical_crafting(`kubejs:color_${out}`, [
      arrangement
    ], {
      '#': 'kubejs:octothorpe',
      '0': 'kubejs:zero',
      'F': 'kubejs:letter_f'
    }).id(`finality:mechanical_crafting/color_${out}`)
  }
  let COLOR_MIXING = (output_color, color_one, color_two) => {
    event.recipes.create.mixing(`kubejs:color_${output_color}`, [
      `kubejs:color_${color_one}`,
      `kubejs:color_${color_two}`,
      Fluid.of('kubejs:shimmer', 500)
    ]).id(`finality:mixing/color_${output_color}`)
  }
  event.recipes.create.mechanical_crafting('create:handheld_worldshaper', [
    'CPULOO',
    'II    '
  ], {
    C: 'kubejs:repeating_command_block',
    P: 'kubejs:entropy_mechanism',
    U: 'kubejs:chain_command_block',
    L: 'kubejs:command_block',
    O: 'kubejs:high_entropy_alloy_sheet',
    I: 'kubejs:high_entropy_alloy'
  }).id('finality:mechanical_crafting/create_worldshaper')
  for (let i = 0; i < CMD.length; i++) {
    let insert = CMD[i];
    event.recipes.create.deploying([
      'kubejs:zero',
      'kubejs:one',
      `kubejs:${insert}`
    ], [
      `kubejs:${insert}`,
      'kubejs:final_pickaxe'
    ]).keepHeldItem().id(`finality:binary_from_${insert}`)
    event.recipes.create.deploying([
      'minecraft:structure_void',
      `kubejs:${insert}`
    ], [
      `kubejs:${insert}`,
      'kubejs:final_hoe'
    ]).keepHeldItem().id(`finality:structure_void_from_${insert}`)
  }
  event.recipes.create.deploying([
    'kubejs:command_block',
    'kubejs:uncolored_rectangle'
  ], [
    'kubejs:command_block',
    'kubejs:final_axe'
  ]).keepHeldItem().id('finality:uncolored_rectangle')
  event.recipes.create.deploying([
    'kubejs:chain_command_block',
    'kubejs:uncolored_circle'
  ], [
    'kubejs:chain_command_block',
    'kubejs:final_axe'
  ]).keepHeldItem().id('finality:uncolored_circle')
  event.recipes.create.deploying([
    'kubejs:repeating_command_block',
    'kubejs:uncolored_star',
    'kubejs:uncolored_windmill'
  ], [
    'kubejs:repeating_command_block',
    'kubejs:final_axe'
  ]).keepHeldItem().id('finality:uncolored_star')
  event.recipes.create.mechanical_crafting('kubejs:color_uncolored', [
    '#AAAAAA'
  ], {
    '#': 'kubejs:octothorpe',
    'A': 'kubejs:letter_a'
  }).id('finality:mechanical_crafting/uncolored')
  event.recipes.create.mechanical_crafting('kubejs:color_white', [
    '#FFFFFF'
  ], {
    '#': 'kubejs:octothorpe',
    'F': 'kubejs:letter_f'
  }).id('finality:mechanical_crafting/color_white')
  HEXCODES('red', '#FF0000')
  HEXCODES('green', '#00FF00')
  HEXCODES('blue', '#0000FF')
  HEXCODES('magenta', '#FF00FF')
  HEXCODES('yellow', '#00FFFF')
  HEXCODES('cyan', '#00FFFF')
  COLOR_MIXING('magenta', 'red', 'blue')
  COLOR_MIXING('yellow', 'red', 'green')
  COLOR_MIXING('cyan', 'green', 'blue')
  event.recipes.create.mixing('kubejs:color_white', [
    'kubejs:color_red',
    'kubejs:color_green',
    'kubejs:color_blue',
    Fluid.of('kubejs:shimmer', 250)
  ]).id('finality:mixing/color_white')
  for (const [letter, binary] of Object.entries(LETTER_BINARY_CODES)) {
    BINARYCONVERSION(`${letter}`, `${binary}`)
  }
  for (const [integer, binary] of Object.entries(INTEGER_BINARY)) {
    BINARYCONVERSION(`${integer}`, `${binary}`)
  }
  BINARYCONVERSION('octothorpe', '00100011')
  BINARYCONVERSION('slash', '00101111')
  BINARYCONVERSION('at_sign', '01000000')
  BINARYCONVERSION('left_parentheses', '00101000')
  BINARYCONVERSION('right_parentheses', '00101001')
  BINARYCONVERSION('left_bracket', '01011011')
  BINARYCONVERSION('right_bracket', '01011101')
  BINARYCONVERSION('left_brace', '01111011')
  BINARYCONVERSION('right_brace', '01111101')
  BINARYCONVERSION('left_chevron', '00111100')
  BINARYCONVERSION('right_chevron', '00111110')
  BINARYCONVERSION('exclamation_mark', '00100001')
  BINARYCONVERSION('ampersand', '00100110')
  BINARYCONVERSION('comma', '00101100')
  BINARYCONVERSION('full_point', '00101110')
  BINARYCONVERSION('equality_sign', '00111101')
  BINARYCONVERSION('plus_sign', '00101011')
  BINARYCONVERSION('minus_sign', '00101101')
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
  /*
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
  */
  for (let [shape, string] of Object.entries(global.SHAPES)) {
    for (let color of VALID_COLOR_MIX) {
      event.recipes.create.mixing(`kubejs:${color}_${shape}`, [
        `kubejs:uncolored_${shape}`,
        `kubejs:color_${color}`,
        Fluid.of('create:honey', 250)
      ]).heated().id(`finality:uncolored_to_${color}_${shape}_mixing`)
      event.recipes.create.mixing(`kubejs:uncolored_${shape}`, [
        `kubejs:${color}_${shape}`,
        'supplementaries:soap',
        Fluid.of('minecraft:water', 500)
      ]).id(`finality:${color}_${shape}_washing`)
    }
    for (let [color, string] of Object.entries(global.RGBWCMY)) {
      event.recipes.create.cutting([
        `kubejs:${color}_left_half_${shape}`,
        `kubejs:${color}_right_half_${shape}`
      ], `kubejs:${color}_${shape}`).id(`finality:${color}_${shape}_halving`)
      event.recipes.create.cutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_left_half_${shape}`)
        .id(`finality:${color}_${shape}_left_half_halving`)
      event.recipes.create.cutting(`2x kubejs:${color}_${shape}_corner`, `kubejs:${color}_right_half_${shape}`)
        .id(`finality:${color}_${shape}_right_half_halving`)
    }
  }
  event.recipes.create.sequenced_assembly('kubejs:star_of_light_shape', 'kubejs:red_star', [
    event.recipes.create.deploying('kubejs:incomplete_star_of_light_shape', ['kubejs:incomplete_star_of_light_shape', 'kubejs:yellow_circle']),
    event.recipes.create.deploying('kubejs:incomplete_star_of_light_shape', ['kubejs:incomplete_star_of_light_shape', 'kubejs:white_star'])
  ]).transitionalItem('kubejs:incomplete_star_of_light_shape').loops(1).id('kubejs:sequenced_assembly/star_of_light')
  event.recipes.create.deploying('kubejs:watermelon_shape', [
    'kubejs:green_circle_corner',
    'kubejs:red_circle_corner'
  ]).id('kubejs:deploying/watermelon_shape')
  event.recipes.create.mechanical_crafting('kubejs:blueprint_shape_base', [
    'RC',
    'CC'
  ], {
    R: 'kubejs:blue_rectangle_corner',
    C: 'kubejs:blue_circle_corner'
  }).id('finality:blueprint_shape_base')
  event.recipes.create.deploying('kubejs:blueprint_shape', ['kubejs:blueprint_shape_base', 'kubejs:white_circle']).id('finality:blueprint_shape')
  event.recipes.create.mechanical_crafting('kubejs:cpu_foundation', [
    ' R',
    'R '
  ], {
    R: 'kubejs:green_rectangle_corner'
  }).id('finality:cpu_foundation')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:cpu_substrate_shape').withChance(240.0),
    Item.of('kubejs:green_rectangle_corner', 2).withChance(70.0),
    Item.of('kubejs:white_rectangle_corner', 2).withChance(70.0),
    Item.of('kubejs:white_circle_corner', 2).withChance(50.0)
  ], 'kubejs:cpu_foundation', [
    event.recipes.create.deploying('kubejs:incomplete_cpu_substrate_shape', ['kubejs:incomplete_cpu_substrate_shape', 'kubejs:white_circle_corner']),
    event.recipes.create.deploying('kubejs:incomplete_cpu_substrate_shape', ['kubejs:incomplete_cpu_substrate_shape', 'kubejs:white_circle_corner']),
  ]).transitionalItem('kubejs:incomplete_cpu_substrate_shape').loops(1).id('finality:cpu_substrate_creation')
  event.recipes.create.sequenced_assembly([
    'kubejs:cpu_shape'
  ], 'kubejs:cpu_substrate_shape', [
    event.recipes.create.deploying('kubejs:incomplete_cpu_shape', ['kubejs:incomplete_cpu_shape', 'kubejs:white_rectangle_corner']),
    event.recipes.create.deploying('kubejs:incomplete_cpu_shape', ['kubejs:incomplete_cpu_shape', 'kubejs:green_rectangle_corner'])
  ]).transitionalItem('kubejs:incomplete_cpu_shape').loops(2).id('finality:cpu_shape')
  event.recipes.create.mechanical_crafting('kubejs:emitter_shape_base', [
    ' C',
    'CR'
  ], {
    C: 'kubejs:magenta_circle_corner',
    R: 'kubejs:magenta_rectangle_corner'
  }).id('finality:emitter_shape_base')
  event.recipes.create.deploying('kubejs:emitter_shape', ['kubejs:emitter_shape_base', 'kubejs:white_star']).id('finality:emitter_shape')
  event.shaped('kubejs:null_storage_block', [
    'TTT',
    'TBT',
    'TTT'
  ], {
    T: 'minecraft:tinted_glass',
    B: 'minecraft:barrel'
  }).id('finality:crafting/null_storage_block')
  event.recipes.create.mixing([
    Item.of('kubejs:qubit').withChance(0.75),
    Item.of('kubejs:errored_result').withChance(0.25)
  ], [
    'kubejs:zero',
    'kubejs:one',
    'kubejs:chromatic_concrete_singularity'
  ]).superheated().id('finality:mixing/qubit')
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:zero').withChance(0.10),
    Item.of('kubejs:one').withChance(0.10),
    Item.of('kubejs:two').withChance(0.10),
    Item.of('kubejs:three').withChance(0.10),
    Item.of('kubejs:four').withChance(0.10),
    Item.of('kubejs:five').withChance(0.10),
    Item.of('kubejs:six').withChance(0.10),
    Item.of('kubejs:seven').withChance(0.10),
    Item.of('kubejs:eight').withChance(0.10),
    Item.of('kubejs:nine').withChance(0.10)
  ], 'kubejs:qubit', [
    event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice']),
    event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice']),
    event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice']),
    event.recipes.create.deploying('kubejs:stabilizing_qubit', ['kubejs:stabilizing_qubit', 'minecraft:blue_ice'])
  ]).transitionalItem('kubejs:stabilizing_qubit').loops(1).id('finality:sequenced_assembly/qubit_stabilization')
})