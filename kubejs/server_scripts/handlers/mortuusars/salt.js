// requires: salt
// requires: create

ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        'salt:salt',
        Fluid.of('minecraft:water', 1000)
    ).heated().id('finality:create_salt_compat')
})