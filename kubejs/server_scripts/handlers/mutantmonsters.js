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
        'minecraft:blaze_powder',
        'minecraft:ender_pearl',
        Fluid.of('create:potion', 250, '{Bottle:"REGULAR",Potion:"minecraft:thick"}')
    ]).heated().id('finality:mixing/potion_x_regular')
    event.recipes.create.mixing([
        Fluid.of('minecraft:potion', 250, '{Bottle:"REGULAR",Potion:"mutantmonsters:chemical_x"}'),
        Item.of('create:experience_nugget').withChance(0.50)
    ], [
        'minecraft:zombie_head',
        'minecraft:skeleton_head',
        'minecraft:creeper_head',
        'minecraft:ender_pearl',
        Fluid.of('kubejs:condensed_universal_entropy', 500)
    ]).heated().id('finality:mixing/potion_x_from_cue')
})