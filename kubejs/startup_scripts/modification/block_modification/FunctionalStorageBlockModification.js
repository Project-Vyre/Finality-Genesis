// requires: functionalstorage

BlockEvents.modification(event => {
  let WOOD_TYPES = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'crimson', 'warped']
  if (Platform.isLoaded('functionalstorage')) {
    for (let type of WOOD_TYPES) {
      event.modify([
        `functionalstorage:${type}_1`,
        `functionalstorage:${type}_2`,
        `functionalstorage:${type}_4`
      ], block => {
        block.setExplosionResistance(1200)
      })
    }
    event.modify([
      'functionalstorage:compacting_drawer',
      'functionalstorage:simple_compacting_drawer',
      'functionalstorage:storage_controller',
      'functionalstorage:controller_extension',
      'functionalstorage:fluid_1',
      'functionalstorage:fluid_2',
      'functionalstorage:fluid_4',
      'functionalstorage:framed_1',
      'functionalstorage:framed_2',
      'functionalstorage:framed_4',
      'functionalstorage:compacting_framed_drawer',
      'functionalstorage:framed_simple_compacting_drawer',
      'functionalstorage:framed_storage_controller',
      'functionalstorage:framed_controller_extension',
      'functionalstorage:armory_cabinet',
      'functionalstorage:ender_drawer'
    ], block => {
      block.setExplosionResistance(1200)
    })
  }
})