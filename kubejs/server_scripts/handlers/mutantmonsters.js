// requires: mutantmonsters
// requires: mutantmore
// requires: kubejs_create
// ignored: true

ServerEvents.recipes(event => {
    event.recipes.create.mixing([
        Fluid.of('minecraft:potion', 250, '{Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}'),
        Item.of('create:experience_nugget').withChance(0.25)
    ], [
        'minecraft:rotten_flesh',
        'minecraft:bone',
        'minecraft:gunpowder',
        'minecraft:phantom_membrane',
        ''
    ]).heated().id('finality:mixing/potion_x_regular')
})