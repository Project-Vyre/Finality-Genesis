// requires: salt
// requires: create

ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    'salt:salt',
    Fluid.of('minecraft:water', 1000)
  ).heated().id('finality:create_salt_compat')
})

ServerEvents.tags('item', event => {
  if (Platform.isLoaded('artifacts')) {
    event.add('salt:can_be_salted', [
      'artifacts:everlasting_beef',
      'artifacts:eternal_steak'
    ])
  }
})