/**
 * @file Server handler for the Portable Hole.
 */

// requires: portablehole
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('portablehole:portable_hole', [
    ' LLL ',
    'LLOLL',
    'LOSOL',
    'LLOLL',
    ' LLL '
  ], {
    O: 'kubejs:deconstructor',
    S: 'kubejs:ender_pearl_singularity',
    L: 'minecraft:lapis_block'
  }).id('finality:mechanical_crafting/portablehole')
})