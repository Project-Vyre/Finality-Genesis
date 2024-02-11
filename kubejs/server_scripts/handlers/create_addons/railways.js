// requires: railways
// requires: kubejs_create

ServerEvents.recipes(event => {
  event.recipes.create.item_application('railways:benchcart', [
    'minecraft:crafting_table', 'minecraft:minecart'
  ]).id('finality:railways/item_application/benchcart')
  event.recipes.create.item_application('railways:jukebox_cart', [
    'minecraft:jukebox', 'minecraft:minecart'
  ]).id('finality:railways/item_application/jukebox_cart')
})