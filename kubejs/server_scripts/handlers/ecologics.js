// requires: ecologics

ServerEvents.recipes(event => {
    event.shaped('minecraft:chest', [
        'WWW',
        'W W',
        'WWW'
    ], {
        W: [
            'ecologics:walnut_planks',
            'ecologics:coconut_planks',
            'ecologics:azalea_planks'
        ]
    }).id('finality:ecologics/crafting/vanilla_chest_fallback')
})