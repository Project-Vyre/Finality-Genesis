let BSKIES_WOOD = ['bluebright', 'starlit', 'frostbright', 'lunar', 'dusk', 'maple', 'cherry', 'crystallized']
ServerEvents.recipes(event => {
    BSKIES_WOOD.forEach(wood => {
        event.stonecutting(`blue_skies:${wood}_pressure_plate`, `blue_skies:${wood}_slab`).id(`blue_skies:${wood}_pressure_plate`)
        event.recipes.create.cutting([
            `blue_skies:${wood}_pressure_plate`, 
            `blue_skies:${wood}_slab`
        ], `blue_skies:${wood}_planks`).id(`kubejs:${wood}_pressure_plate_create_compat`)
    })
})

/*
    WOODPLATES.forEach(wood => {
        event.stonecutting(`minecraft:${wood}_pressure_plate`, `${wood}_slab`).id(`minecraft:${wood}_pressure_plate`)
    })
    WOODPLATES.forEach(wood => {
        event.recipes.create.cutting([`minecraft:${wood}_pressure_plate`, `${wood}_slab`], `${wood}_planks`).id(`finality:${wood}_pressure_plate`)
    })
*/