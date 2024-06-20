// requires: handcrafted
// requires: kubejs_create

/**
 * @file Server handler for Handcrafted.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

console.log('I do not know why Handcrafted is making Create look bad here by making the boards a random chance instead of being guaranteed like a stonecutter.')
console.log('Also, please keep your recipe IDs consistent. It is either board or boards.')

ServerEvents.recipes(event => {
  event.remove([
    { id: 'create:saw_acacia_board' },
    { id: 'create:saw_birch_boards' },
    { id: 'create:saw_dark_oak_boards' },
    { id: 'create:saw_jungle_boards' },
    { id: 'create:saw_mangrove_boards' },
    { id: 'create:saw_oak_boards' },
    { id: 'create:saw_spruce_boards' },
    { id: 'create:saw_crimson_board' },
    { id: 'create:saw_warped_boards' }
  ])
  for (let i = 0; i < WOOD_TYPES.length; i++) {
    let insert = WOOD_TYPES[i];
    event.recipes.create.cutting(`4x handcrafted:${insert}_board`, `minecraft:${insert}_planks`).processingTime(150).id(`handcrafted:saw_${insert}_boards`)
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
  }
})