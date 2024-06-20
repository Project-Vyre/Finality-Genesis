// requires: mysticalagriculture
// requires: mysticalagradditions
// requires: kubejs_create

ServerEvents.recipes(event => {
  if (Platform.isLoaded('delightful')) {
    event.shaped('1x delightful:mini_melon', [
      'NN',
      'NN'
    ], {
      N: 'mysticalagriculture:nature_essence'
    }).id('finality:delightful/mini_melon_from_essence')
  }
})